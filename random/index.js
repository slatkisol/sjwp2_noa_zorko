import randomColor from "randomcolor";
import names from "starwars-names";

var randomName = names.random();
var color = randomColor();

console.log(`My name is ${randomName} and my favorite color is ${color}.`);