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
    var input = $('<input>');
    input.attr("type", options.inputType);
    input.attr("id", options.id);
    input.addClass(options.class);
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
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 117,
            fname: "generateTextInput"
        }));
    }
}

function generatePasswordInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 132,
            fname: "generatePasswordInput"
        }));
    }
}

function generateSubmitInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 149,
            fname: "generateSubmitInput"
        }));
    }
}

function generateResetInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 165,
            fname: "generateResetInput"
        }));
    }
}

function generateRadioInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        input.prop("checked", options.checked);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 179,
            fname: "generateRadioInput"
        }));
    }
}

function generateCheckboxInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        input.prop("checked", options.checked);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 196,
            fname: "generateCheckboxInput"
        }));
    }
}

function generateButtonInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 213,
            fname: "generateButtonInput"
        }));
    }
}

function generateColorInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 229,
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
            input.attr("name", options.name);
            input.attr("min", optons.min);
            input.attr("max", options.max)
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 246,
                fname: "generateDateInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 244,
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
            input.attr("name", options.name);
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 272,
                fname: "generateDateTimeLocalInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 270,
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
            input.attr("name", options.name);
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 295,
                fname: "generateEmailInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 293,
        fname: "generateEmailInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateFileInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 317,
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
            input.attr("name", options.name);
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 334,
                fname: "generateMonthInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 332,
        fname: "generateMonthInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateNumberInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        input.attr("min", options.min);
        input.attr("max", options.max);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 356,
            fname: "generateNumberInput"
        }));
    }
}

function generateRangeInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        input.attr("min", options.min);
        input.attr("max", options.max);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 374,
            fname: "generateRangeInput"
        }));
    }
}

function generateSearchInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 392,
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
            input.attr("name", options.name);
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 409,
                fname: "generateTelInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 407,
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
            input.attr("name", options.name);
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 432,
                fname: "generateTimeInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 430,
        fname: "generateTimeInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateURLInput(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var input = basicGenerator(options);
        input.val(options.value);
        input.attr("name", options.name);
        appendHTMLWithInput(parent,input);
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 454,
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
            input.attr("name", options.name);
            appendHTMLWithInput(parent,input);
        } else {
            generateError(undefinedError({
                vname: "options.parent",
                line: 471,
                fname: "generateWeekInput"
            }));
        }
    } else generateError(unsupportedBrowser({
        vname: "getBrowserName",
        line: 469,
        fname: "generateWeekInput",
        errorMiscInfo: "We currently developing solution for supporting: " + getBrowserName()
    }));
}

function generateSelectInput(options){

}

function appendHTMLWithInput(parent,input){
    if(parent.length !== 0){
        parent.append(input);
    } else {
        var div = $('<div>');
        div.append(input);
        if($('body').length !== 0){
            $('body').append(div);
        } else {
            generateError(noBodyOrParentError({vname: "parent", line: 496, fname: "appendHTMLWithInput"}));
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

function noBodyOrParentError(options){
    var noBodyOrParentError ={
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
    if($('body').length){
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