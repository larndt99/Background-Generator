var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var button = document.querySelector("button");

setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
    randomNum1 = "#" + Math.floor(100000 + Math.random() * 900000);
    randomNum2 = "#" + Math.floor(100000 + Math.random() * 900000);

    body.style.background = "linear-gradient(to right, " + randomNum1 + ", "
    + randomNum2 + ")";

    color1.value = randomNum1;
    color2.value = randomNum2;

    css.textContent = body.style.background + ";";
})