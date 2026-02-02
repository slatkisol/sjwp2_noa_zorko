

const input2 = document.getElementById("input1");

const euro1 = document.getElementById("euro");
const dollar1 = document.getElementById("dollar");

input2.addEventListener("input", () => {
    let a = Number(input2.value);

    let b = 64690.15*a;
    let c = 76655.40*a;

    euro1.textContent = b;
    dollar1.textContent = c;
});


const input3 = document.getElementById("input2");

const euro2 = document.getElementById("euro2");
const dollar2 = document.getElementById("dollar2");

input3.addEventListener("input", () => {
    let a = Number(input3.value);

    let b = 1883.89*a;
    let c = 2227.69*a;

    euro2.textContent = b;
    dollar2.textContent = c;
});
