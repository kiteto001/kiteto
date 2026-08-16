const button = document.getElementById("btn");
const button2 = document.getElementById("button");
const message = document.getElementById("message");
const title = document.getElementById("title");
const input = document.getElementById("name");

input.addEventListener("keydown", () => {
    console.log("A key was pressed.");
});

title.addEventListener("mouseover", () => {
    title.style.color = "red";
});

button2.addEventListener("click", () => {
    message.textContent = "Welcome!";
});

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

button.addEventListener("click", (event) => {
    console.log(event);
});