const modal = document.getElementById("modal1");
const modalImg = document.getElementById("modalSlika");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".prvi");


const slike = document.querySelectorAll(".slika");


slike.forEach(slika => {
  slika.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalText.innerText = this.dataset.opis;
  }
});


closeBtn.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

slike.forEach(slika => {
  slika.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalText.innerText = opisi[this.dataset.opis];
  }
});

const opisi = {
  "our planet": "Dokumentarna serija o ljepoti prirode i utjecaju klimatskih promjena. (2019, David Attenborough)",
  "13th": "Istražuje povezanost rasizma i američkog zatvorskog sistema. (2016, Ava DuVernay)",
  "making a murderer": "Prati kontroverzan slučaj Stevena Averyja i pravosudni sistem SAD-a. (2015, Laura Ricciardi & Moira Demos)",
  "inside job": "Objašnjava uzroke globalne financijske krize 2008. godine. (2010, Charles Ferguson)",
  "planet earth 2": "Spektakularni prikaz života životinja širom svijeta. (2016, David Attenborough)",
  "blackfish": "Priča o zatočenim kitovima ubicama i njihovom utjecaju na ljude. (2013, Gabriela Cowperthwaite)",
  "free solo": "Penjanje Alexa Honnolda na El Capitan bez užeta. (2018, Elizabeth Chai Vasarhelyi & Jimmy Chin)",
  "tiger king": "Bizarna priča o uzgajivačima velikih mačaka i njihovim sukobima. (2020, Eric Goode & Rebecca Chaiklin)",
  "the social dilemma": "Otkriva kako društvene mreže utiču na naše ponašanje. (2020, Jeff Orlowski)",
  "the last dance": "Dokumentarac o Michael Jordanu i Chicago Bullsima. (2020, Jason Hehir)",
  "won't you be my neighbor": "Priča o životu i utjecaju Freda Rogersa. (2018, Morgan Neville)",
  "the fog of war": "Intervju s Robertom McNamarom o ratu i politici. (2003, Errol Morris)",
  "the cove": "Istražuje lov na delfine u Japanu. (2009, Louie Psihoyos)",
  "march of the penguins": "Prati nevjerovatno putovanje pingvina na Antarktiku. (2005, Luc Jacquet)",
  "apollo 11": "Originalni snimci prve misije slijetanja na Mjesec. (2019, Todd Douglas Miller)",
  "the game changers": "Utjecaj biljne prehrane na sport i zdravlje. (2018, Louie Psihoyos)",
  "seaspiracy": "Istražuje probleme prekomjernog ribolova i zagađenja mora. (2021, Ali Tabrizi)",
  "cosmos": "Objašnjava svemir, nauku i naše mjesto u njemu. (1980, Carl Sagan / 2014, Neil deGrasse Tyson)",
  "my octopus teacher": "Neobično prijateljstvo čovjeka i hobotnice. (2020, Pippa Ehrlich & James Reed)",
  "icarus": "Počinje kao priča o dopingu, a otkriva veliki skandal u sportu. (2017, Bryan Fogel)"
};