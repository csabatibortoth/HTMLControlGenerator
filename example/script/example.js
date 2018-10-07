HTMLControlGenerator({
    inputType: "text",
    parent: "parent",
    id: "text-field",
    class: "text-filed-class",
    change: function(data) {console.log(data)},
    onclick: function(){console.log("click")}
});

HTMLControlGenerator({
    inputType: "select",
    parent : "parent",
    id: "selector",
    class: "selector-class",
    items: [
        { id: "first", class: "select-item-class", value: "1", text: "First", selected: true },
        { id: "second", class: "select-item-class", value: "2", text: "Second" }
    ]
});