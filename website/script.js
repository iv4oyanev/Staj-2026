let items = [];
let nextId = 0;

function displayText() {
    var inputField = document.getElementById("userInput");
    var text = inputField.value;

    if (text.trim() !== "") {
        items.push({ id: nextId++, text: text });
        inputField.value = "";

        render();
    }
}

function render() {
    var result = document.getElementById("result");
var currentDisplay = window.getComputedStyle(result).display;
    
    if (currentDisplay === "none") {
        result.style.display = "block";
    }
    result.innerHTML = ""; // rebuild from scratch each time

    items.forEach(function (item) {
        var row = document.createElement("div");

        var span = document.createElement("span");
        span.textContent = item.text; // textContent, not innerHTML -> safe from XSS
        span.dataset.id = item.id;

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.onclick = function () { deleteText(item.id); };

        var editBtn = document.createElement("button");
        editBtn.textContent = "edit";
        editBtn.onclick = function () { editText(item.id); };

        row.appendChild(span);
        row.appendChild(document.createTextNode(" "));
        row.appendChild(deleteBtn);
        row.appendChild(document.createTextNode(" "));
        row.appendChild(editBtn);

        result.appendChild(row);
    });
}

function deleteText(id) {
    items = items.filter(function (item) { return item.id !== id; });
    render();
}

function editText(id) {
    var item = items.find(function (item) { return item.id === id; });
    if (!item) return;

    var newText = prompt("Edit text:", item.text);
    if (newText !== null && newText.trim() !== "") {
        item.text = newText.trim();
        render();
    }
}