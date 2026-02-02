

const kamen1=document.getElementById("kamen");
const škare1=document.getElementById("škare");
const papir1=document.getElementById("papir");
const pobjednik1=document.getElementById("pobjednik");
const odabran1=document.getElementById("odabran");





   kamen1.addEventListener("click",()=>{
    let a=(Math.floor(Math.random()*3));
    if(a==0){
        odabran1.textContent="Kamen"
        pobjednik1.textContent="Neriješeno";


    }
    if(a==1){
         odabran1.textContent="Škare"
        pobjednik1.textContent="Pobjednik je kamen";
         
    }
    if(a==2){
         odabran1.textContent="Papir"
        pobjednik1.textContent="Pobjednik je papir";
    }
   });

   škare1.addEventListener("click",()=>{
    let a=(Math.floor(Math.random()*3));
    if(a==0){
          odabran1.textContent="Kamen"
        pobjednik1.textContent="Pobjednik je kamen";

    }
    if(a==1){
         odabran1.textContent="Škare"
        pobjednik1.textContent="Neriješeno";
    }
    if(a==2){
          odabran1.textContent="Papir"
        pobjednik1.textContent="Pobjednik su škare";
    }
   });


   papir1.addEventListener("click",()=>{
    let a=(Math.floor(Math.random()*3));
    if(a==0){
          odabran1.textContent="Kamen"
        pobjednik1.textContent="Pobjednik je papir";

    }
    if(a==1){
         odabran1.textContent="Škare"
        pobjednik1.textContent="Pobjednik su škare";
    }
    if(a==2){
          odabran1.textContent="Papir"
        pobjednik1.textContent="Pobjednik je neriješeno";
    }
   });


