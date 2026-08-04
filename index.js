heading1 = document.querySelector(".heading1")
console.log(heading1)

heading2 = document.querySelector(".heading2")
console.log(heading2)

button = document.querySelector(".click")
console.log(button)

paragraph = document.getElementById("paragraph")
console.log(paragraph)

button.addEventListener("click", function() {
    paragraph.textContent = "You clicked the button!"
    paragraph.style.color = "blue"}
);

console.log("Hello, World!")
let x=5
let y=10
console.log(x+y)
x=8
console.log(x+y)

let age = 25
if (age >= 18) {
    console.log("You are an adult.")
} else {
    console.log("You are not an adult.")
}

let light = "red";

if (light === "red") {
    console.log("Stop!");
} else if (light === "yellow") {
    console.log("Get Ready!");
} else if (light === "green") {
    console.log("Go!");
} else {
    console.log("Invalid traffic light color.");
}


let phonenumber = "1234567890";
let username = "user123";
let password = "password123";
if (phonenumber === "123456780" || username === "user123" && password === "password123") {
    console.log("Login successful.");
} else {
    console.log("Invalid credentials.");
}

console.log(5==5); // true
console.log(5===5); // true
console.log(5== '5'); // true
console.log(5=== '5'); // false 

function greet() {
    console.log("Hello!");
}

console.log(greet());


function greet() {
    return "Helloo!";
}

console.log(greet());



function add() {
    return 5 + 3;
}

let answer = add();

console.log(answer);



function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
let result2 = multiply(4, 7);
let result3 = multiply(4, 9);

console.log(result , result2);
console.log(result3);



const great = (name) => {
    console.log("Hello " + name);
}

let name = "John";
great(name);    

