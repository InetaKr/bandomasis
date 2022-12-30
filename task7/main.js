/*
  Parašykite JS kodą, kuris turėtų funkciją.
  Funkcija kaip argumentą priima objektą. Funkcija grąžina masyvą.
  Funkcija iš gauto objekto turi atrinkti raktažodžius (Object.keys) ir sudėti juos į masyvą.
*/

const asmuo = {
  vardas : "Rokas",
  pavarde : "Banaitis",
  amzius : 25,
  lytis : "vyras",
  vedes : false
}

function raktazodziai(objektas) {
  return Object.keys(objektas);
}

const masyvas = raktazodziai(asmuo);
console.log(masyvas); // ["vardas", "pavarde", "amzius", "lytis", "vedes"]
