function addItemToDOM(itemObj) {
    const ul = document.getElementById("items");

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = itemObj.done;

    const span = document.createElement("span");
    span.textContent = itemObj.text;

    if (itemObj.done) {
        span.style.textDecoration = "line-through";
    }

    checkbox.addEventListener("change", () => {
        itemObj.done = checkbox.checked;
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
        updateLocalStorage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
}

function updateLocalStorage() {
    const ul = document.getElementById("items");
    const listItems = ul.querySelectorAll("li");

    const data = Array.from(listItems).map(li => {
        return {
            text: li.querySelector("span").textContent,
            done: li.querySelector("input[type=checkbox]").checked
        };
    });

    localStorage.setItem("todoItems", JSON.stringify(data));
}

function addItem() {
    const input = document.getElementById("newItemText");
    const text = input.value.trim();
    if (text === "") return;

    const item = { text, done: false };
    addItemToDOM(item);
    updateLocalStorage();
    input.value = "";
}

function clearAll() {
    const ul = document.getElementById("items");
    ul.innerHTML = "";
    localStorage.removeItem("todoItems");
}

window.addEventListener("DOMContentLoaded", () => {
    const saved = JSON.parse(localStorage.getItem("todoItems")) || [];
    saved.forEach(item => addItemToDOM(item));
});
