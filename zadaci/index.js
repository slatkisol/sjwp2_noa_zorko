
const tijelo1 = document.getElementById("tijelo");
const gumb = document.getElementById("gumb");

let brojac = 0;

gumb.addEventListener("click", function () {
    if (brojac % 2 === 0) {
        tijelo1.style.backgroundColor = "red";
    } else {
        tijelo1.style.backgroundColor = "blue";
    }
    brojac++;
});