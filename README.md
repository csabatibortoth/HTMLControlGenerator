# HTMLControlGenerator

It's a jQuery based tool to generate HTML5 input controls. It can generate the following controls:

* text
* password
* submit
* reset
* radio
* checkbox
* button
* color
* date
* datetime-local
* email
* file
* month
* number
* range
* search
* tel
* time
* url
* week
* select
* ul
* ol
* hunPIN (addon)
* hunCRID (addon)
* hunTID (addon)

## Prerequisites:
jQuery v4.0.0 loaded to the html file before the library, and a browser with ES2020 support.

```
<script src="https://code.jquery.com/jquery-4.0.0.min.js" defer></script>
<script src="src/HTMLControlGenerator.js" defer></script>
<script src="src/addons/hungarianInputControls.js" defer></script> <!-- optional -->
```

## Usage: 

```
HTMLControlGenerator({
    inputType: TYPE,
    parent: ID_OF_PARENT_ELEMENT, //if no element has this id it generates in a div on body
    id: ID_OF_GENERATED_ELEMENT,
    class: CLASS_OF_GENERATED_ELEMENT,
    name: NAME_OF_THE_ELEMENT,
    value: VALUE_OF_THE_ELEMENT, //if HTML element has the attribute
    min: MIN_VALUE_OF_THE_ELEMENT, //date, number and range
    max: MAX_VALUE_OF_THE_ELEMENT, //date, number and range
    checked: true, //radio and checkbox
    readOnly: true,
    disabled: true,
    items: [{ value: VALUE, text: TEXT, selected: true }], //select, ul and ol
    data: PASSED_TO_THE_HANDLERS,
    onchange: function(data) { SOME_DEFINITION },
    onclick: function(data) { SOME DEFINITION }
});
```

The items of `ul` and `ol` can have their own `id`, `class`, `data`, `onclick` and `onchange`. An item without a handler uses the handler of the list.

`HTMLControlGenerator.create(options)` builds the same control but returns it as a jQuery object instead of appending it to the parent.

`HTMLControlGenerator.register(inputType, factory)` adds a new input type, `factory(options)` has to return the element to append. The addons use this.

## Authors

* **Csaba Tóth** - *Initial work* - [csabatibortoth](https://github.com/csabatibortoth)
* **Page:** - https://csaba.toth.today/projects/htmlcontrolgenerator/

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Releases
 ### 0.3.3
 #### Added:
 1. Fixes


 ### 0.3.2
 #### Added:
 1. Fix

## Releases
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
    <ul> and <ol> example
    
 ### 0.1.0
 #### Added:
  1. Core input generation
