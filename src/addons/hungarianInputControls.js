//Author: Csaba Tóth https://github.com/csabatibortoth/
//LICENCE: MIT
//Repository: https://github.com/csabatibortoth/HTMLControlGenerator/

function generateHungarianPersonalInsuranceNumber(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var hunPIN = generateBasicHungarianInput(options);
        appendHTMLWithInput(parent, hunPIN);

        var values = [];
        values.push(options.value.substring(0, 3));
        values.push(options.value.substring(3, 6));
        values.push(options.value.substring(6, 9));

        for (var i = 0; i < 3; i++) {
            generateNumberInput({
                parent: options.id,
                id: options.id + "_" + i,
                class: options.inputClass,
                value: values[i],
                min: 0,
                max: 999
            });
            if (i == 0) $('#' + options.id).append(generateSpacer(options, i));
            if (i == 1) $('#' + options.id).append(generateSpacer(options, i));
        }
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 7,
            fname: "generateHungarianPersonalInsuranceNumber"
        }));
    }
}

function generateHungarianCompanyRegistrationID(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var hunCRID = generateBasicHungarianInput(options);
        appendHTMLWithInput(parent, hunCRID);

        var values = [];
        values.push(options.value.substring(0, 2));
        values.push(options.value.substring(2, 4));
        values.push(options.value.substring(4, 10));

        for (var i = 0; i < 3; i++) {
            var max = 99;
            if (i == 2) max = 999999;
            generateNumberInput({
                parent: options.id,
                id: options.id + "_" + i,
                class: options.inputClass,
                value: values[i],
                min: 0,
                max: max
            });
            if (i == 0) $('#' + options.id).append(generateSpacer(options, i));
            if (i == 1) $('#' + options.id).append(generateSpacer(options, i));
        }

    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 39,
            fname: "generateHungarianCompanyRegistrationID"
        }));
    }

}

function generateHungarianTAXNumber(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {

        var hunTID = generateBasicHungarianInput(options);
        appendHTMLWithInput(parent, hunTID);

        var values = [];
        values.push(options.value.substring(0, 8));
        values.push(options.value.substring(8, 9));
        values.push(options.value.substring(9, 11));

        for (var i = 0; i < 3; i++) {
            var max = 99;
            if (i == 0) max = 99999999;
            if (i == 1) max = 9;
            generateNumberInput({
                parent: options.id,
                id: options.id + "_" + i,
                class: options.inputClass,
                value: values[i],
                min: 0,
                max: max
            });
            if (i == 0) $('#' + options.id).append(generateSpacer(options, i));
            if (i == 1) $('#' + options.id).append(generateSpacer(options, i));
        }

    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 75,
            fname: "generateHungarianTAXNumber"
        }));
    }
}

function generateBasicHungarianInput(options) {
    var hunInput = $('<span>');
    hunInput.attr('id', options.id);
    hunInput.addClass(options.class);

    return hunInput;
}


function generateSpacer(options, i) {
    var spacer = $('<span>');
    spacer.attr('id', options.id + "_spacer_" + i);
    spacer.addClass(options.id + "SpacerClass");
    spacer.text(" - ");

    return spacer;
}