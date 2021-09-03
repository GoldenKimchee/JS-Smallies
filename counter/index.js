// Ctrl + k + c
let count = 0;
let countEl = document.getElementById("count");

function increment() {
    countEl.innerText = ++count;
}

let saveEl = document.getElementById("save-el");

function save() {
    saveEl.textContent += count + " - ";
    countEl.innerText = 0;
    count = 0;
}

let greeting = "Welcome back, "

let name = "Rachel Kim";

let welcome = document.getElementById("welcome");
welcome.innerText = greeting + name;

welcome.innerText += "👋";
//welcome.innerText = welcome.innerText + "👋";