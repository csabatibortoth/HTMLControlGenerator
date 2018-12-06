//Author: Csaba Tóth https://github.com/csabatibortoth/
//LICENCE: MIT
//Repository: https://github.com/csabatibortoth/HTMLControlGenerator/
//Version: 0.3.2

function HTMLControlGenerator(options) {
    if (options !== undefined) {
        switch (options.inputType) {
            case "text":
                generateTextInput(options);
                break;
            case "password":
                generatePasswordInput(options);
                break;
            case "submit":
                generateSubmitInput(options);
                break;
            case "reset":
                generateResetInput(options);
                break;
            case "radio":
                generateRadioInput(options);
                break;
            case "checkbox":
                generateCheckboxInput(options);
                break;
            case "button":
                generateButtonInput(options);
                break;
            case "color":
                generateColorInput(options);
                break;
            case "date":
                generateDateInput(options);
                break;
            case "datetime-local":
                generateDateTimeLocalInput(options);
                break;
            case "email":
                generateEmailInput(options);
                break;
            case "file":
                generateFileInput(options);
                break;
            case "month":
                generateMonthInput(options);
                break;
            case "number":
                generateNumberInput(options);
                break;
            case "range":
                generateRangeInput(options);
                break;
            case "search":
                generateSearchInput(options);
                break;
            case "tel":
                generateTelInput(options);
                break;
            case "time":
                generateTimeInput(options);
                break;
            case "url":
                generateURLInput(options);
                break;
            case "week":
                generateWeekInput(options);
                break;
            case "select":
                generateSelectInput(options);
                break;
            case "ul":
                generateULInput(options);
                break;
            case "ol":
                generateOLInput(options);
                break;
            case "hunPIN":
                if (typeof generateHungarianPersonalInsuranceNumber === "function") {
                    generateHungarianPersonalInsuranceNumber(options);
                }
                break;
            case "hunCRID":
                if (typeof generateHungarianCompanyRegistrationID === "function") {
                    generateHungarianCompanyRegistrationID(options);
                }
                break;
            case "hunTID":
                if (typeof generateHungarianTAXNumber === "function") {
                    generateHungarianTAXNumber(options);
                }
                break;
            default:
                generateError(wrongInputTypeError({
                    vname: "options",
                    line: 3,
                    fname: "HTMLControlGenerator"
                }, options));
                break;
        }
    } else {
        generateError(undefinedError({
            vname: "options",
            line: "2",
            fname: "HTMLControlGenerator"
        }));
    }
}

/* ------------------GENERATE INPUTS------------------- */

function basicGenerator(options) {
    if (options.inputType !== "select") {
        var input = $('<input>');
        input.attr("type", options.inputType);
    } else {
        var input = $('<' + options.inputType + '>');
    }

    input.attr("id", options.id);
    input.addClass(options.class);
    input.attr("name", options.name);
    input.prop("readonly", options.readOnly);
    input.prop("disabled", options.disabled);

    input.change(function () {
        if (options.onchange !== undefined) {
            options.onchange(options.data);
        }
    });

    input.on(function () {
        if (options.onchange !== undefined) {
            options.onchange(options.data);
        }
    });

    input.click(function () {
        if (options.onclick !== undefined) {
            options.onclick(options.data);
        }
    });

    return input;
}

function generateTextInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);

        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 132,
            fname: "generateTextInput"
        }));
    }
}

function generatePasswordInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 148,
            fname: "generatePasswordInput"
        }));
    }
}

function generateSubmitInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 164,
            fname: "generateSubmitInput"
        }));
    }
}

function generateResetInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 180,
            fname: "generateResetInput"
        }));
    }
}

function generateRadioInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.prop("checked", options.checked);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 194,
            fname: "generateRadioInput"
        }));
    }
}

function generateCheckboxInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.prop("checked", options.checked);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 211,
            fname: "generateCheckboxInput"
        }));
    }
}

function generateButtonInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 228,
            fname: "generateButtonInput"
        }));
    }
}

function generateColorInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 244,
            fname: "generateColorInput"
        }));
    }
}

function generateDateInput(options) {
    if (getBrowserName() !== "Safari") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            input.attr("min", options.min);
            input.attr("max", options.max)
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 261,
                fname: "generateDateInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 259,
        fname: "generateDateInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateDateTimeLocalInput(options) {

    if (getBrowserName() !== "Safari" || getBrowserName() !== "Firefox") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 287,
                fname: "generateDateTimeLocalInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 285,
        fname: "generateDateTimeLocalInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateEmailInput(options) {
    if (getBrowserName() !== "Safari") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 310,
                fname: "generateEmailInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 308,
        fname: "generateEmailInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateFileInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 332,
            fname: "generateFileInput"
        }));
    }
}

function generateMonthInput(options) {
    if (getBrowserName() !== "Safari" || getBrowserName() !== "Firefox") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 349,
                fname: "generateMonthInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 347,
        fname: "generateMonthInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateNumberInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("min", options.min);
        input.attr("max", options.max);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 371,
            fname: "generateNumberInput"
        }));
    }
}

function generateRangeInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("min", options.min);
        input.attr("max", options.max);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 389,
            fname: "generateRangeInput"
        }));
    }
}

function generateSearchInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 407,
            fname: "generateSearchInput"
        }));
    }
}

function generateTelInput(options) {
    if (getBrowserName() === "Safari") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 424,
                fname: "generateTelInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 422,
        fname: "generateTelInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateTimeInput(options) {
    if (getBrowserName() !== "Safari") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 447,
                fname: "generateTimeInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 445,
        fname: "generateTimeInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateURLInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        appendHTMLWithInput(parent, input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 469,
            fname: "generateURLInput"
        }));
    }
}

function generateWeekInput(options) {
    if (getBrowserName() !== "Safari" || getBrowserName !== "Firefox") {
        var parent = $('#' + options.parent);
        if (options.parent !== undefined) {
            var input = basicGenerator(options);
            input.val(options.value);
            appendHTMLWithInput(parent, input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 486,
                fname: "generateWeekInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 484,
        fname: "generateWeekInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateSelectInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        options.items.forEach(item => {
            var option = $('<option>');
            option.val(item.value);
            option.text(item.text);
            if (item.selected) option.attr("selected", "selected");
            input.append(option);
        });
        appendHTMLWithInput(parent, input);
    } else generateError(unsupportedBrowser({
        vname: "options.parent",
        line: 508,
        fname: "generateSelectInput"
    }));
}

function generateULInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var ul = $('<ul>');
        ul.attr("id", options.id);
        ul.addClass(options.class);
        options.items.forEach(item => {
            var li = $('<li>');
            li.attr("id", item.id);
            li.addClass(item.class);
            li.text(item.text);
            li.on(function () {
                if (item.onchange !== undefined) {
                    item.onchange(options.data);
                }
            });
            li.change(function(){
                if (item.onchange !== undefined) {
                    item.onchange(item.data);
                }
            });
            li.click(function(){
                if (item.onclick !== undefined) {
                    item.onclick(item.data);
                }
            });
            ul.append(li);
        });
        appendHTMLWithInput(parent, ul);
    } else generateError(unsupportedBrowser({
        vname: "options.parent",
        line: 527,
        fname: "generateULInput"
    }));
}

function generateOLInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var ol = $('<ol>');
        ol.attr("id", options.id);
        ol.addClass(options.class);
        options.items.forEach(item => {
            var li = $('<li>');
            li.attr("id", item.id);
            li.addClass(item.class);
            li.text(item.text);
            li.on(function () {
                if (options.onchange !== undefined) {
                    options.onchange(options.data);
                }
            });
            li.change(function(){
                if (options.onchange !== undefined) {
                    options.onchange(options.data);
                }
            });
            li.click(function(){
                if (options.onclick !== undefined) {
                    options.onclick(options.data);
                }
            });
            ol.append(li);
        });
        appendHTMLWithInput(parent, ul);
    } else generateError(unsupportedBrowser({
        vname: "options.parent",
        line: 548,
        fname: "generateOLInput"
    }));
}

function appendHTMLWithInput(parent, input) {
    if (parent.length !== 0) {
        parent.append(input);
    } else {
        var div = $('<div>');
        div.append(input);
        if ($('body').length !== 0) {
            $('body').append(div);
        } else {
            generateError(noBodyOrParentError({
                vname: "parent",
                line: 496,
                fname: "appendHTMLWithInput"
            }));
        }
    }
}

/*-----------------ERROR HANDLING-----------------------*/
function undefinedError(options) {
    var undefinedError = {
        errorCode: 0,
        errorString: "undefined",
        errorVariable: options.vname,
        errorLine: options.line,
        errorFunction: options.fname
    };
    return undefinedError;
}

function wrongInputTypeError(options, inputOptions) {
    var wrongInputTypeError = {
        errorCode: 1,
        errorString: "Wrong Input Type defined",
        errorVariable: options.vname,
        errorLine: options.line,
        errorFunction: options.fname,
        errorMiscInfo: inputOptions
    }
    return wrongInputTypeError;
}

function noBodyOrParentError(options) {
    var noBodyOrParentError = {
        errorCode: 2,
        errorString: "No body or parent to append input!",
        errorLine: options.line,
        errorFunction: options.fname,
        errorMiscInfo: options.errorMiscInfo
    };
}

function unsupportedBrowser(options) {
    var unsupportedBrowser = {
        errorCode: 999,
        errorString: "Unsupported browser",
        errorLine: options.line,
        errorFunction: options.fname,
        errorMiscInfo: options.errorMiscInfo
    }
    return unsupportedBrowser;
}

function generateError(error) {
    console.log(error);
    var div = $('<div>');
    var errorText = "Error Code: " + error.errorCode + ", Error description: " + error.errorString + "! For more information see console!";
    div.text(errorText);
    if ($('body').length) {
        $('body').append(div);
    } else console.log(error);
}

function getBrowserName() {
    var navAgent = navigator.userAgent;
    var browserName;
    if ((versionOffset = navAgent.indexOf("Opera")) != -1) {
        browserName = "Opera";
    } else if ((versionOffset = navAgent.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
    } else if ((versionOffset = navAgent.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
    } else if ((versionOffset = navAgent.indexOf("Safari")) != -1) {
        browserName = "Safari";
    } else if ((versionOffset = navAgent.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
    } else if ((nameOffset = navAgent.lastIndexOf(' ') + 1) < (versionOffset = navAgent.lastIndexOf('/'))) {
        browserName = navAgent.substring(nameOffset, versionOffset);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    return browserName;
}