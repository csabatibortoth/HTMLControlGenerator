# HTMLControlGenerator

It's a JQuery based tool to generate HTML5 input controls. It can generate the following controls:

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
* hunPIN
* hunCRID
* hunTID

## Prerequisites:
JQuery v3.3.1 loaded to the html file.

## Usage: 

```
HTMLControlGenerator({
    inputType: TYPE,
    parent: ID_OF_PARENT_ELEMENT, //if not provided it generates on body
    id: ID_OF_GENERATED_ELEMENT,
    class: CLASS_OF_GENERATED_ELEMENT,
    text: TEXT_OF_THE_ELEMENT, //if HTML element has the attribute
    value: VALUE_OF_THE_ELEMENT, //if HTML element has the attribute
    min: MIN_VALUE_OF_THE_ELEMENT, //if HTML element has the attribute
    max: MAX_VALUE_OF_THE_ELEMENT, //if HTML element has the attribute
    change: function() { SOME_DEFINITION },
    onclick: function() { SOME DEFINITION },
    on: function() { SOME DEFINITION }
});
```
## Authors

* **Csaba Tóth** - *Initial work* - [csabatibortoth](https://github.com/csabatibortoth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Releases
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
