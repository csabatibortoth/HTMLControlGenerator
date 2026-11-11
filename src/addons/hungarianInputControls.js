//Author: Csaba Tóth https://github.com/csabatibortoth/
//LICENCE: MIT
//Repository: https://github.com/csabatibortoth/HTMLControlGenerator/
//version: 0.0.1

(() => {
    "use strict";

    // Number of digits in each field of the control.
    const SEGMENTS = {
        hunPIN: [3, 3, 3],   // personal insurance number
        hunCRID: [2, 2, 6],  // company registration ID
        hunTID: [8, 1, 2]    // TAX number
    };

    function createSpacer(id, index) {
        return jQuery("<span>")
            .attr("id", `${id}_spacer_${index}`)
            .addClass(`${id}SpacerClass`)
            .text(" - ");
    }

    function createSegmentedInput(options, lengths) {
        const value = String(options.value ?? "");
        const group = jQuery("<span>").attr("id", options.id).addClass(options.class);

        let offset = 0;
        lengths.forEach((length, index) => {
            if (index > 0) group.append(createSpacer(options.id, index - 1));
            group.append(HTMLControlGenerator.create({
                inputType: "number",
                id: `${options.id}_${index}`,
                class: options.inputClass,
                value: value.slice(offset, offset + length),
                min: 0,
                max: 10 ** length - 1
            }));
            offset += length;
        });
        return group;
    }

    for (const [inputType, lengths] of Object.entries(SEGMENTS)) {
        HTMLControlGenerator.register(inputType, (options) => createSegmentedInput(options, lengths));
    }
})();
