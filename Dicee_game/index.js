function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
let randomNumber1 = randomNumber();
let randomNumber2 = randomNumber();
let randomNumber3 = randomNumber();
let randomNumber4 = randomNumber();
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

document.querySelectorAll("img")[2].setAttribute("src", "images/dice" + randomNumber3 + ".png");

document.querySelectorAll("img")[3].setAttribute("src", "images/dice" + randomNumber4 + ".png");


if (randomNumber1 + randomNumber2 > randomNumber3 + randomNumber4) {
  document.querySelector("h1").innerHTML = "Player 1 wins 🗿";


} 

else if(randomNumber1 + randomNumber2 < randomNumber3 + randomNumber4) {


  document.querySelector("h1").innerHTML = "Player 2 wins 💩";


} else {


  document.querySelector("h1").innerHTML = "Draw 😒";
}
