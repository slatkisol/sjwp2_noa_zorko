

const input2 = document.getElementById("input1");

const fahren1 = document.getElementById("fahren");
const kelvin1 = document.getElementById("kelvin");

input2.addEventListener("input", () => {
    let a = Number(input2.value);

    let b = (a * 1.8) + 32;
    let c = a + 273.15;

    fahren1.textContent = b;
    kelvin1.textContent = c;
});