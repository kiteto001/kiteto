bulb1 = document.getElementById("bulb1")
console.log(bulb1)
bulb2 = document.getElementById("bulb2")
console.log(bulb2)
onButton = document.getElementById("onButton")
console.log(onButton)
offButton = document.getElementById("offButton")
console.log(offButton)

onButton.addEventListener("click", function() {
    bulb1.src = "bulbOn.gif"
    bulb2.src = "bulbOff.gif"
})

offButton.addEventListener("click", function() {
    bulb1.src = "bulbOff.gif"
    bulb2.src = "bulbOn.gif"
})