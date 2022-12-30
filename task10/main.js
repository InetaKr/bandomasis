/*
  Sutvarkykite 10 užduoties failų kodą taip, kad veiktų main.js parašytas kodas.
*/

/*
let pirmas = vardoIlgis(asmuo1);
let antras = lytis(asmuo2);
let trecias = pilnametyste(asmuo3);
let ketvirtas = vardoIlgis(asmuo4);
let penktas = lytis(asmuo5);
let sesi = pilnametyste(asmuo6);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);
*/
// Kintamieji su asmenų duomenimis
let asmuo1 = { vardas: "Jonas", lytis: "vyras", pilnametyste: true };
let asmuo2 = { vardas: "Ona", lytis: "moteris", pilnametyste: false };
let asmuo3 = { vardas: "Petras", lytis: "vyras", pilnametyste: true };
let asmuo4 = { vardas: "Greta", lytis: "moteris", pilnametyste: true };
let asmuo5 = { vardas: "Kazys", lytis: "vyras", pilnametyste: false };
let asmuo6 = { vardas: "Rūta", lytis: "moteris", pilnametyste: true };

// Funkcijos
function vardoIlgis(asmuo) {
  return asmuo.vardas.length;
}

function lytis(asmuo) {
  return asmuo.lytis;
}

function pilnametyste(asmuo) {
  return asmuo.pilnametyste;
}

// Kintamieji su užduoties rezultatais
let pirmas = vardoIlgis(asmuo1);
let antras = lytis(asmuo2);
let trecias = pilnametyste(asmuo3);
let ketvirtas = vardoIlgis(asmuo4);
let penktas = lytis(asmuo5);
let sesi = pilnametyste(asmuo6);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);