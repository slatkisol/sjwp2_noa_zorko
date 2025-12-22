const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");




const rez = document.querySelector(".rez");
const rez2 = document.querySelector(".rez2");
const rez3 = document.querySelector(".rez3");
const rez4 = document.querySelector(".rez4");
const rez5 = document.querySelector(".rez5");
const rez6 = document.querySelector(".rez6");
const rez7 = document.querySelector(".rez7");
const rez8 = document.querySelector(".rez8");
const rez9 = document.querySelector(".rez9");
const rez10 = document.querySelector(".rez10");
const rez11 = document.querySelector(".rez11");




function Djelilo(broj5,broj6,broj7){

    return broj7*(broj6/(broj5+broj6));

}

function Ohm(broj1,broj2){
    return broj2/broj1; ;
}

function SerijskoKapacitivno(broj3,broj4){
    return (broj3*broj4)/(broj3+broj4);
}

function ParalelnoOtpor(broj10,broj11){
    return (broj10*broj11)/(broj10+broj11);
}

function ParalelnoKapacitivno(broj12,broj13){
    return broj12+broj13;
}

function ParalelnoInduktivno(broj14,broj15){
    return (broj14*broj15)/(broj14+broj15);
}

function SerijskoInduktivno(broj16,broj17){
    return broj16+broj17;
}

function Svitak(broj18,broj19,broj20){
    return (4*Math.pow(10, -7)*Math.PI*(broj18*broj19))/broj20;

}

function InduktivniOtpor(broj21,broj22){

    return 2*Math.PI*broj22*broj21;
}

function KapacitivniOtpor(broj23,broj24){

    return 1/(2*Math.PI*broj24*broj23);
}

function roundToFiveDecimals(number) {
    return number.toFixed(5); 
}







function SerijskoOtpor(broj8,broj9){
    return broj8+broj9;
}   

btn1.onclick = () => {
     let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = roundToFiveDecimals(Ohm(a1,a2));
   
};

btn2.onclick = () => {
     let a3 = Number(document.getElementById("broj3").value);
    let a4 = Number(document.getElementById("broj4").value);
    rez2.textContent = roundToFiveDecimals(SerijskoKapacitivno(a3,a4));
   
};

btn3.onclick = () => {
     let a5 = Number(document.getElementById("broj5").value);
    let a6 = Number(document.getElementById("broj6").value);
    let a7 = Number(document.getElementById("broj7").value);
    rez3.textContent = roundToFiveDecimals(Djelilo(a5,a6,a7));
   
};

btn4.onclick = () => {
     let a8 = Number(document.getElementById("broj8").value);
    let a9 = Number(document.getElementById("broj9").value);
    rez4.textContent = roundToFiveDecimals(SerijskoOtpor(a8,a9));
   
};

btn5.onclick = () => {
     let a10 = Number(document.getElementById("broj10").value);
    let a11 = Number(document.getElementById("broj11").value);
    rez5.textContent = roundToFiveDecimals(ParalelnoOtpor(a10,a11));
   
};

btn6.onclick = () => {
     let a12 = Number(document.getElementById("broj12").value);
    let a13 = Number(document.getElementById("broj13").value);
    rez6.textContent = roundToFiveDecimals(ParalelnoKapacitivno(a12,a13));
   
};
btn7.onclick = () => {
     let a14 = Number(document.getElementById("broj14").value);
    let a15 = Number(document.getElementById("broj15").value);
    rez7.textContent = roundToFiveDecimals(ParalelnoInduktivno(a14,a15));
   
};

btn8.onclick = () => {
     let a16 = Number(document.getElementById("broj16").value);
    let a17 = Number(document.getElementById("broj17").value);
    rez8.textContent = roundToFiveDecimals(SerijskoInduktivno(a16,a17));
   
};


btn9.onclick = () => {
     let a18 = Number(document.getElementById("broj18").value);
    let a19 = Number(document.getElementById("broj19").value);
    let a20 = Number(document.getElementById("broj20").value);
    rez9.textContent = roundToFiveDecimals(Svitak(a18,a19,a20));
   
};


btn10.onclick = () => {
     let a21 = Number(document.getElementById("broj21").value);
    let a22 = Number(document.getElementById("broj22").value);
    rez10.textContent = roundToFiveDecimals(InduktivniOtpor(a21,a22));
   
};


btn11.onclick = () => {
     let a23 = Number(document.getElementById("broj23").value);
    let a24 = Number(document.getElementById("broj24").value);
    rez11.textContent = roundToFiveDecimals(KapacitivniOtpor(a23,a24));
   
};








