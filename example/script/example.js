HTMLControlGenerator({
    inputType: "text",
    parent: "text",
    id: "text-field",
    class: "text-filed-class",
    change: function (data) {
        console.log(data)
    },
    onclick: function () {
        console.log("click")
    }
});

HTMLControlGenerator({
    inputType: "password",
    parent: "password",
    id: "password-field",
    class: "password-field-class",
    change: function (data) {
        console.log(data)
    },
    onclick: function () {
        console.log("click")
    }
});

HTMLControlGenerator({
    inputType: "submit",
    parent: "submit",
    text: "Submit Button",
    value: "Submit Button",
    id: "submit-field",
    class: "submit-filed-class",
    onclick: function () {
        console.log("click")
    }
});

HTMLControlGenerator({
    inputType: "reset",
    parent: "reset",
    text: "Reset Button",
    id: "reset-field",
    class: "reset-filed-class"
});

var radios = [{
        inputType: "radio",
        parent: "radio",
        text: "radio button 1",
        value: "1",
        id: "radio-button-1",
        class: "submit-filed-class",
        onclick: function () {
            console.log("click")
        }
    },
    {
        inputType: "radio",
        parent: "radio",
        text: "radio button 2",
        value: "2",
        id: "radio-button-",
        class: "radio-filed-class",
        onclick: function () {
            console.log("click")
        }
    }
];

radios.forEach(radio => {
    HTMLControlGenerator(radio);
});

var checkboxes = [{
        inputType: "checkbox",
        parent: "checkbox",
        text: "checkbox button 1",
        value: "1",
        id: "checkbox-button-1",
        class: "submit-filed-class",
        onclick: function () {
            console.log("click")
        }
    },
    {
        inputType: "radio",
        parent: "radio",
        text: "radio button 2",
        value: "2",
        id: "radio-button-",
        class: "submit-filed-class",
        onclick: function () {
            console.log("click")
        }
    }
];

checkboxes.forEach(checkbox => {
    HTMLControlGenerator(checkbox);
});

HTMLControlGenerator({
    inputType: "button",
    parent: "button",
    text: "button Button",
    value: "button Button",
    id: "button-field",
    class: "button-filed-class"
});

HTMLControlGenerator({
    inputType: "color",
    parent: "color",
    text: "color Button",
    value: "color Button",
    id: "color-field",
    class: "color-filed-class"
});

HTMLControlGenerator({
    inputType: "date",
    parent: "date",
    text: "date Button",
    id: "date-field",
    class: "date-filed-class"
});

HTMLControlGenerator({
    inputType: "datetime-local",
    parent: "datetime-local",
    text: "datetime-local Button",
    id: "datetime-local-field",
    class: "datetime-local-filed-class"
});

HTMLControlGenerator({
    inputType: "email",
    parent: "email",
    text: "email Button",
    id: "email-field",
    class: "email-filed-class"
});

HTMLControlGenerator({
    inputType: "file",
    parent: "file",
    text: "file Button",
    id: "file-field",
    class: "file-filed-class"
});

HTMLControlGenerator({
    inputType: "month",
    parent: "month",
    text: "month Button",
    id: "month-field",
    class: "month-filed-class"
});

HTMLControlGenerator({
    inputType: "number",
    parent: "number",
    text: "number Button",
    id: "number-field",
    class: "number-filed-class"
});

HTMLControlGenerator({
    inputType: "hunPIN",
    parent: "hunPIN",
    text: "number Button",
    id: "hunPIN-field",
    class: "hunPIN-filed-class",
    vals: []
});

HTMLControlGenerator({
    inputType: "range",
    parent: "range",
    text: "range Button",
    id: "range-field",
    class: "range-filed-class"
});

HTMLControlGenerator({
    inputType: "search",
    parent: "search",
    text: "search Button",
    id: "search-field",
    class: "search-filed-class"
});

HTMLControlGenerator({
    inputType: "tel",
    parent: "tel",
    text: "tel Button",
    id: "tel-field",
    class: "tel-filed-class"
});

HTMLControlGenerator({
    inputType: "time",
    parent: "time",
    text: "time Button",
    id: "time-field",
    class: "time-filed-class"
});

HTMLControlGenerator({
    inputType: "url",
    parent: "url",
    text: "url Button",
    id: "url-field",
    class: "url-filed-class"
});

HTMLControlGenerator({
    inputType: "week",
    parent: "week",
    text: "week Button",
    id: "week-field",
    class: "week-filed-class"
});

HTMLControlGenerator({
    inputType: "select",
    parent: "select",
    id: "selector",
    class: "selector-class",
    items: [{
            id: "first",
            class: "select-item-class",
            value: "1",
            text: "First",
            selected: true
        },
        {
            id: "second",
            class: "select-item-class",
            value: "2",
            text: "Second"
        }
    ]
});

HTMLControlGenerator({
    inputType: "ul",
    parent: "ul",
    id: "ul-list",
    class: "ul-list-class",
    items: [{
            id: "first",
            class: "ul-list-li-class",
            text: "First"
        },
        {
            id: "second",
            class: "ul-list-li-class",
            text: "Second"
        }
    ]
});

HTMLControlGenerator({
    inputType: "ol",
    parent: "ol",
    id: "ol-list",
    class: "ol-list-class",
    items: [{
            id: "first",
            class: "ol-list-li-class",
            text: "First"
        },
        {
            id: "second",
            class: "ol-list-li-class",
            text: "Second"
        }
    ]
});