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
  "the shawshank redemption": "Priča o zatvoreniku koji pronalazi nadu i prijateljstvo u zatvoru. (1994, Frank Darabont)",
  "forrest gump": "Životna priča jednostavnog čovjeka koji nesvjesno učestvuje u velikim historijskim događajima. (1994, Robert Zemeckis)",
  "the godfather": "Saga o mafijaškoj porodici Corleone i borbi za moć. (1972, Francis Ford Coppola)",
  "schindler's list": "Istinita priča o čovjeku koji spašava židove tokom Holokausta. (1993, Steven Spielberg)",
  "fight club": "Priča o identitetu, potrošačkom društvu i tajnom klubu borbi. (1999, David Fincher)",
  "inception": "Lopov koji ulazi u snove dobija zadatak da ubaci ideju u nečiji um. (2010, Christopher Nolan)",
  "interstellar": "Putovanje kroz svemir u potrazi za novim domom za čovječanstvo. (2014, Christopher Nolan)",
  "the matrix": "Haker otkriva da je stvarnost simulacija i bori se protiv sistema. (1999, Wachowski)",
  "blade runner 2049": "Policajac otkriva tajnu koja može promijeniti društvo. (2017, Denis Villeneuve)",
  "arrival": "Lingvistica pokušava komunicirati s vanzemaljcima i razumjeti njihov jezik. (2016, Denis Villeneuve)",
  "seven": "Dvojica detektiva love serijskog ubicu koji koristi sedam smrtnih grijeha. (1995, David Fincher)",
  "gone girl": "Nestanak žene otkriva mračnu stranu braka. (2014, David Fincher)",
  "prisoners": "Otac uzima pravdu u svoje ruke nakon nestanka kćerke. (2013, Denis Villeneuve)",
  "shutter island": "Detektiv istražuje nestanak pacijentice u mentalnoj ustanovi. (2010, Martin Scorsese)",
  "the silence of the lambs": "Agentica FBI-a traži pomoć kanibala da uhvati ubicu. (1991, Jonathan Demme)",
  "the dark knight": "Batman se suočava s haotičnim Jokerom koji želi uništiti Gotham. (2008, Christopher Nolan)",
  "gladiator": "Rimski general postaje gladijator u potrazi za osvetom. (2000, Ridley Scott)",
  "mad max fury road": "Postapokaliptična potjera kroz pustinju puna akcije. (2015, George Miller)",
  "john wick": "Bivši ubica kreće u osvetu nakon ličnog gubitka. (2014, Chad Stahelski)",
  "dune": "Mladi nasljednik suočava se s politikom i sudbinom na pustinjskom planetu. (2021, Denis Villeneuve)"
};