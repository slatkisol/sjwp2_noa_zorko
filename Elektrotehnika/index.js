const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const rez = document.querySelector(".rez");
const rez2 = document.querySelector(".rez2");


function Djelilo(a1A,a2A,a3A){

    return a3A*(a2A/(a1A+a2A));

}

function Razlika(a1,a2){

    return a1-a2;
}

function Mnozenje(a1,a2){
    return a1*a2;
}

function Ohm(a1,a2){

    return a1/a2;

}

 

btn1.onclick = () => {
     let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Ohm(a1,a2) + "A";
   
};

btn2.onclick = () => {
     let a1A = Number(document.getElementById("broj1A").value);
    let a2A = Number(document.getElementById("broj2A").value);
    let a3A = Number(document.getElementById("broj3A").value);
    rez2.textContent = Djelilo(a1A,a2A,a3A) + "V";
};


btn3.onclick = () => {
    let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Mnozenje(a1,a2);
};


btn4.onclick = () => {
    let a1 = Number(document.getElementById("broj1").value);
    let a2 = Number(document.getElementById("broj2").value);
    rez.textContent = Dijeljenje(a1,a2);
};




