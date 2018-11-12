//Author: Csaba Tóth https://github.com/csabatibortoth/
//LICENCE: MIT
//Repository: https://github.com/csabatibortoth/HTMLControlGenerator/

function generateHungarianPersonalInsuranceNumber(options) {
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var hunPIN = $('<span>');
        hunPIN.attr('id', options.id);
        hunPIN.addClass(options.class);

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
            line: 132,
            fname: "generateTextInput"
        }));
    }
}


function generateSpacer(options, i) {
    var spacer = $('<span>');
    spacer.attr('id', options.id + "_spacer_" + i);
    spacer.addClass(options.id + "SpacerClass");
    spacer.text(" - ");

    return spacer;
}