
/*

const prikaz=document.getElementById("prikaz");
const gumb=document.getElementById("gumb");


function MyFunction(){
    prikaz.textContent="Button onclick radi!";
   let b= document.createTextNode(" i radi append child");
    prikaz.appendChild(b);
}*/

/*
let a="Novi tekst";



const naslov=document.getElementById("naslov");

function Funkcija(){
    naslov.textContent=a;
}*/

const gumb=document.getElementById("gumb");



const prikaz=document.getElementById("prikaz");


gumb.addEventListener("click",()=>{



let imena = ["Ana", "Marko", "Ivana", "Petar"];

for(let i=0; i<imena.length; i++ ){
    document.createTextNode("Matej").appendChild(imena);
}

prikaz.textContent=imena;

});

