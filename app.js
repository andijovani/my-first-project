var button = document.getElementById("submit")
var input = document.getElementById("name")

var names = ["Andi", "Mateo", "Don", "Jenny"]

function displayName() {
    button.addEventListener("click", function(){
        input.value = names[Math.round( Math.random() * 3 )] //random name
    })
}

displayName()