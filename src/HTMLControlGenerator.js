//Author: Csaba Tóth https://github.com/csabatibortoth/
//LICENCE: MIT
//Repository: https://github.com/csabatibortoth/HTMLControlGenerator/
//Version: 0.4.0

(() => {
    "use strict";

    const INPUT_TYPES = [
        "text", "password", "submit", "reset", "radio", "checkbox", "button",
        "color", "date", "datetime-local", "email", "file", "month", "number",
        "range", "search", "tel", "time", "url", "week"
    ];
    // A file input's value cannot be set from script, and reset keeps the browser's label.
    const WITHOUT_VALUE = new Set(["reset", "file"]);
    const WITH_MIN_MAX = new Set(["date", "number", "range"]);
    const CHECKABLE = new Set(["radio", "checkbox"]);
    const EVENTS = ["change", "click"];

    /* ------------------ERROR HANDLING------------------- */

    const undefinedError = (variable) => ({
        errorCode: 0,
        errorString: "undefined",
        errorVariable: variable,
        errorFunction: "HTMLControlGenerator"
    });

    const wrongInputTypeError = (options) => ({
        errorCode: 1,
        errorString: "Wrong Input Type defined",
        errorVariable: "options",
        errorFunction: "HTMLControlGenerator",
        errorMiscInfo: options
    });

    const noBodyOrParentError = () => ({
        errorCode: 2,
        errorString: "No body or parent to append input!",
        errorFunction: "HTMLControlGenerator"
    });

    function reportError(error) {
        console.error(error);
        if (document.body) {
            jQuery("<div>")
                .text(`Error Code: ${error.errorCode}, Error description: ${error.errorString}! For more information see console!`)
                .appendTo(document.body);
        }
    }

    /* ------------------EVENT HANDLING------------------- */

    // `onchange` is the option name, `change` is accepted as an alias of it.
    function handlerFor(source, event) {
        const handler = source[`on${event}`] ?? (event === "change" ? source.change : undefined);
        return typeof handler === "function" ? handler : undefined;
    }

    function bindHandlers(element, options) {
        for (const event of EVENTS) {
            const handler = handlerFor(options, event);
            if (handler) element.on(event, () => handler.call(options, options.data));
        }
    }

    /* ------------------GENERATE CONTROLS------------------- */

    function createElement(tag, options) {
        return jQuery(`<${tag}>`)
            .attr("id", options.id)
            .addClass(options.class);
    }

    function createFormControl(tag, options) {
        const control = createElement(tag, options)
            .attr("name", options.name)
            .prop({ readOnly: options.readOnly, disabled: options.disabled });
        bindHandlers(control, options);
        return control;
    }

    function createInput(options) {
        const type = options.inputType;
        const input = createFormControl("input", options).attr("type", type);

        if (options.value !== undefined && !WITHOUT_VALUE.has(type)) input.val(options.value);
        if (WITH_MIN_MAX.has(type)) input.attr({ min: options.min, max: options.max });
        if (CHECKABLE.has(type)) input.prop("checked", options.checked);

        return input;
    }

    function createSelect(options) {
        const select = createFormControl("select", options);
        select.append((options.items ?? []).map((item) =>
            jQuery("<option>")
                .val(item.value)
                .text(item.text)
                .attr("selected", item.selected ? "selected" : null)
        ));
        return select;
    }

    function createList(options) {
        const items = [...(options.items ?? [])];
        const list = createElement(options.inputType, options);
        list.append(items.map((item) => createElement("li", item).text(item.text)));

        // One delegated listener per event instead of one per item. An item's
        // own handler wins, otherwise the handler of the list is called.
        for (const event of EVENTS) {
            if (![options, ...items].some((source) => handlerFor(source, event))) continue;
            list.on(event, "li", function () {
                const item = items[jQuery(this).index()];
                const source = item && handlerFor(item, event) ? item : options;
                handlerFor(source, event)?.call(source, source.data);
            });
        }
        return list;
    }

    const factories = new Map([
        ...INPUT_TYPES.map((type) => [type, createInput]),
        ["select", createSelect],
        ["ul", createList],
        ["ol", createList]
    ]);

    function factoryFor(options) {
        if (options === undefined) {
            reportError(undefinedError("options"));
            return undefined;
        }
        const factory = factories.get(options.inputType);
        if (!factory) reportError(wrongInputTypeError(options));
        return factory;
    }

    function mount(parentId, control) {
        const parent = document.getElementById(parentId);
        if (parent) {
            jQuery(parent).append(control);
        } else if (document.body) {
            jQuery("<div>").append(control).appendTo(document.body);
        } else {
            reportError(noBodyOrParentError());
        }
    }

    /* ------------------PUBLIC API------------------- */

    // Generates the control described by `options` and appends it to the
    // element with the id `options.parent`.
    function HTMLControlGenerator(options) {
        const factory = factoryFor(options);
        if (!factory) return;

        if (options.parent === undefined) {
            reportError(undefinedError("options.parent"));
            return;
        }
        mount(options.parent, factory(options));
    }

    // Builds the control without appending it anywhere and returns it as a
    // jQuery object (undefined when the options are not valid).
    HTMLControlGenerator.create = (options) => factoryFor(options)?.(options);

    // Registers a new input type. `factory` gets the options and returns the
    // element to append. Addons use this to plug in their controls.
    HTMLControlGenerator.register = (inputType, factory) => {
        factories.set(inputType, factory);
    };

    globalThis.HTMLControlGenerator = HTMLControlGenerator;
})();
