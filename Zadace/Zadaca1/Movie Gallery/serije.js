const modal = document.getElementById("modal1");
const modalImg = document.getElementById("modalSlika");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".prvi");


const slike = document.querySelectorAll(".slika");




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
  "breaking bad": "Profesor kemije počinje proizvoditi drogu kako bi osigurao obitelj. (2008-2013, Vince Gilligan)",
  "the sopranos": "Mafijaški boss balansira kriminal i obiteljski život uz pomoć terapije. (1999-2007, David Chase)",
  "true detective": "Antologijska krimi serija s mračnim slučajevima i kompleksnim likovima. (2014–, Nic Pizzolatto)",
  "mindhunter": "Agenti FBI-a razvijaju profiliranje serijskih ubojica kroz intervjue. (2017–2019, Joe Penhall)",
  "narcos": "Priča o usponu i padu narkokartela, posebno Pabla Escobara. (2015 do2017, Chris Brancato, Carlo Bernard & Doug Miro)",
  "dark": "Njemačka misterija o putovanju kroz vrijeme i povezanim obiteljima. (2017–2020, Baran bo Odar & Jantje Friese)",
  "stranger things": "Djeca otkrivaju tajne eksperimente i paralelni svijet. (2016–, Duffer Brothers)",
  "black mirror": "Samostalne epizode o mračnoj strani tehnologije i društva. (2011–, Charlie Brooker)",
  "lost": "Preživjeli avionske nesreće pokušavaju shvatiti tajne otoka. (2004–2010, J.J. Abrams, Damon Lindelof & Carlton Cuse)",
  "the expanse": "Politički i svemirski sukobi u koloniziranom Sunčevom sustavu. (2015–2022, Mark Fergus & Hawk Ostby)",
  "game of thrones": "Plemićke obitelji ratuju za vlast u fantastičnom svijetu. (2011–2019, David Benioff & D.B. Weiss)",
  "vikings": "Saga o Ragnar Lothbroku i vikinškim osvajanjima. (2013–2020, Michael Hirst)",
  "chernobyl": "Rekonstrukcija nuklearne katastrofe i njenih posljedica. (2019, Craig Mazin)",
  "the crown": "Život britanske kraljice Elizabete II kroz desetljeća. (2016–, Peter Morgan)",
  "the office": "Mockumentary o svakodnevici zaposlenika u uredu. (2005–2013, Greg Daniels)",
  "brooklyn nine-nine": "Detektivska ekipa rješava slučajeve uz puno humora. (2013–2021, Dan Goor & Michael Schur)",
  "friends": "Šest prijatelja prolazi kroz život i ljubav u New Yorku. (1994–2004, David Crane & Marta Kauffman)",
  "money heist": "Genijalni kriminalci izvode kompleksne pljačke pod vodstvom Profesora. (2017–2021, Álex Pina)",
  "the boys": "Superheroji su korumpirani, a grupa ljudi pokušava ih razotkriti. (2019–, Eric Kripke)",
  "prison break": "Inženjer planira bijeg iz zatvora kako bi spasio brata. (2005–2017, Paul Scheuring)"
};