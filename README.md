# HTMLControlGenerator

A small jQuery based tool to generate HTML5 input controls from a plain options object.

```js
HTMLControlGenerator({
    inputType: "text",
    parent: "form-row",
    id: "user-name",
    class: "form-field",
    onchange() { console.log("changed"); }
});
```

## Requirements

* jQuery 4.0.0
* A browser with ES2020 support (every current Chrome, Edge, Firefox and Safari)

## Installation

Load jQuery first, then the library. The addon is optional.

```html
<script src="https://code.jquery.com/jquery-4.0.0.min.js" defer></script>
<script src="src/HTMLControlGenerator.min.js" defer></script>
<script src="src/addons/hungarianInputControls.min.js" defer></script>
```

The readable sources are next to the minified files, `src/HTMLControlGenerator.js` and `src/addons/hungarianInputControls.js`.

## Supported controls

| Kind | `inputType` |
|---|---|
| Text | `text`, `password`, `email`, `search`, `tel`, `url` |
| Number | `number`, `range` |
| Date and time | `date`, `datetime-local`, `month`, `time`, `week` |
| Choice | `radio`, `checkbox`, `select`, `color`, `file` |
| Button | `button`, `submit`, `reset` |
| List | `ul`, `ol` |
| Hungarian addon | `hunPIN`, `hunCRID`, `hunTID` |

## Usage

```js
HTMLControlGenerator({
    inputType: TYPE,
    parent: ID_OF_PARENT_ELEMENT,
    id: ID_OF_GENERATED_ELEMENT,
    class: CLASS_OF_GENERATED_ELEMENT,
    name: NAME_OF_THE_ELEMENT,
    value: VALUE_OF_THE_ELEMENT,
    min: MIN_VALUE_OF_THE_ELEMENT,
    max: MAX_VALUE_OF_THE_ELEMENT,
    checked: true,
    readOnly: true,
    disabled: true,
    items: [{ value: VALUE, text: TEXT, selected: true }],
    data: PASSED_TO_THE_HANDLERS,
    onchange: function (data) { SOME_DEFINITION },
    onclick: function (data) { SOME_DEFINITION }
});
```

### Options

| Option | Applies to | Description |
|---|---|---|
| `inputType` | all | The control to generate, required. |
| `parent` | all | Id of the element the control is appended to, required. If no element has this id the control is appended to the body in a new `div`. |
| `id`, `class` | all | Id and class of the generated element. |
| `name`, `readOnly`, `disabled` | inputs and `select` | Set on the generated element. |
| `value` | inputs except `reset` and `file` | Value of the element. |
| `min`, `max` | `date`, `number`, `range` | Limits of the element. |
| `checked` | `radio`, `checkbox` | Checked state. |
| `items` | `select`, `ul`, `ol` | The options or list items, see below. |
| `data` | all | Passed to the handlers as the first argument. |
| `onchange`, `onclick` | all | Event handlers. `change` is accepted as an alias of `onchange`. |

### Items

For a `select` each item is `{ value, text, selected }`.

For `ul` and `ol` each item is `{ id, class, text, data, onclick, onchange }`. An item without a handler uses the handler of the list.

```js
HTMLControlGenerator({
    inputType: "ul",
    parent: "menu",
    onclick() { console.log("some item"); },
    items: [
        { text: "First" },
        { text: "Second", data: 2, onclick(data) { console.log("item", data); } }
    ]
});
```

### Building without appending

`HTMLControlGenerator.create(options)` builds the same control and returns it as a jQuery object instead of appending it to the parent.

```js
const input = HTMLControlGenerator.create({ inputType: "number", min: 0, max: 10 });
```

### Adding your own input type

`HTMLControlGenerator.register(inputType, factory)` adds a new input type. The factory gets the options and returns the element to append.

```js
HTMLControlGenerator.register("percent", (options) =>
    HTMLControlGenerator.create({ ...options, inputType: "number", min: 0, max: 100 })
);
```

## Hungarian addon

`src/addons/hungarianInputControls.js` adds three controls made of number fields with spacers between them. The `value` is the number as one string of digits, `inputClass` is the class of the number fields.

| `inputType` | Control | Digits per field |
|---|---|---|
| `hunPIN` | Personal Insurance Number | 3 - 3 - 3 |
| `hunCRID` | Company Registration ID | 2 - 2 - 6 |
| `hunTID` | TAX Number | 8 - 1 - 2 |

```js
HTMLControlGenerator({
    inputType: "hunTID",
    parent: "tax",
    id: "tax-number",
    inputClass: "tax-field",
    value: "12345678901"
});
```

## Errors

An error is written to the console and shown in a `div` appended to the body.

| Code | Meaning |
|---|---|
| 0 | `options` or `options.parent` is undefined |
| 1 | Unknown `inputType` |
| 2 | No parent element and no body to append to |

## Example

Open `example/index.html` in a browser, it generates every control.

## Authors

* **Csaba Tóth** - *Initial work* - [csabatibortoth](https://github.com/csabatibortoth)
* **Page:** - https://csaba.toth.today/projects/htmlcontrolgenerator/

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Releases

### 0.4.0

#### Changed:
1. Rewritten in modern JavaScript (ES2020)
2. jQuery updated to 4.0.0
3. Only `HTMLControlGenerator` is global, the helper functions are private
4. Addons plug in with `HTMLControlGenerator.register()`
5. An item of `ul` and `ol` uses its own handler, otherwise the handler of the list

#### Added:
1. `HTMLControlGenerator.create()` and `HTMLControlGenerator.register()`
2. `change` as an alias of `onchange`

#### Fixes:
1. `ol` is generated
2. `tel`, `date`, `email` and `time` are generated in every browser

#### Removed:
1. Browser detection and the unsupported browser error (code 999)
2. `errorLine` from the error objects

### 0.3.3

#### Added:
1. Fixes

### 0.3.2

#### Added:
1. Fix

### 0.3.1

#### Added:
1. Minified versions

### 0.3.0

#### Added:
1. Addons
    - Support for hungarian TAX Number
    - Support for hungarian Personal Number
    - Support for hungarian Company Registration Number
2. Version in header

#### Fixes:
1. Refactoring base code

### 0.2.0

#### Added:
1. `<ul>` and `<ol>` example

### 0.1.0

#### Added:
1. Core input generation
