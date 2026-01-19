

const buton1=document.getElementById("dodaj");
const buton2=document.getElementById("oduzmi");
const naslov1=document.getElementById("naslov");

let brojac=0;
buton1.addEventListener("click",()=>{

    brojac++;
    brojac=naslov1.textContent;


});
buton2.addEventListener("click",()=>{

    brojac--;
    brojac=naslov1.textContent;


});



