const bulb = document.getElementById("bulb1");
const button = document.getElementById("onButton");

// The bulb starts off, so the button offers to turn it on.
let isBulbOn = false;
button.textContent = "ON";

button.addEventListener("click", function () {
    // Change the bulb image, then update the same button's text.
    isBulbOn = !isBulbOn;
    bulb.src = isBulbOn ? "bulbOn.gif" : "bulbOff.gif";
    button.textContent = isBulbOn ? "OFF" : "ON";
});
