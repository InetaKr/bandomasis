/*
  Parašyti JS kodą, kuris turėtų funkciją.
  Funkcija kaip argumentą priima masyvą. Funkcija grąžina skaičių.
  Funkcija turi suskaičiuoti, koks yra vartotojų mašinų gamybos metų vidurkis.
*/

const asmenys = [
  { id: '1', name: 'Petras', masina: "Ford", masinosGamybosMetai: 1990},
  { id: '2', name: 'Jonas', masina: "Audi", masinosGamybosMetai: 1995 },
  { id: '3', name: 'Rokas', masina: "Fiat", masinosGamybosMetai: 2001 },
  { id: '4', name: 'Tomas', masina: "Peugeot", masinosGamybosMetai: 2005 },
  { id: '5', name: 'Sima', masina: "Audi", masinosGamybosMetai: 1996 },
  { id: '6', name: 'Kamilė', masina: "BMW", masinosGamybosMetai: 1999 },
  { id: '7', name: 'Aloyzas', masina: "Honda", masinosGamybosMetai: 2010 }
];

function masinuVidurkis(asmenys) {
  let suma = 0;
  for (let i = 0; i < asmenys.length; i++) {
    suma += asmenys[i].masinosGamybosMetai;
  }
  return suma / asmenys.length;
}

console.log(masinuVidurkis(asmenys));

/*Ši funkcija veikia taip:

Nustatome suma kintamąjį, kuris bus naudojamas kaip skaičių, kuriame bus sumuojami visų vartotojų mašinų gamybos metai. Nustatome ją į 0, kad galėtume pradėti sumuoti.
Naudodami "for" ciklą einame per visus vartotojus masyve asmenys.
Kiekvieną kartą cikle pridedame vartotojo mašinos gamybos metus prie suma kintamojo.
Baigus ciklą, skaičiuojame vidurkį padalinant suma kintamąjį iš vartotojų skaičiaus, kuris gaunamas iš asmenys.length.
Grąžiname vidurkį.*/

function masinuVidurkis1(asmenys) {
  const suma = asmenys.reduce((acc, asmuo) => acc + asmuo.masinosGamybosMetai, 0);
  return suma / asmenys.length;
}

console.log(masinuVidurkis1(asmenys));


/*Ši funkcija veikia taip:

Naudodami reduce() funkciją einame per visus vartotojus masyve asmenys ir sukaupiamus jų mašinų gamybos metus į suma kintamąjį.
Skaičiuojame vidurkį padalinant suma kintamąjį iš vartotojų skaičiaus, kuris gaunamas iš asmenys.length.
Grąžiname vidurkį.

"Acc" reiškia "accumulator" arba "akumuliatorius" lietuvių kalba. Tai yra kintamasis, kuris naudojamas reduce() funkcijoje kaip kaupiamasis rezultatas.
Pavyzdžiui, jeigu naudojate reduce() funkciją, kad suskaičiuotumėte masyvo elementų sumą, "acc" kintamasis pradžioje yra nustatytas į 0 ir kiekvieną kartą cikle pridedamas elementas, kuris yra apdorojamas. Galiausiai, kai ciklas baigiasi, "acc" kintamasis yra grąžinamas kaip rezultatas.
Konkrečiai šiame kode, "acc" yra nustatytas į 0 ir kiekvieną kartą cikle pridedamas vartotojo mašinos gamybos metai. Galiausiai, kai ciklas baigiasi, "acc" kintamasis yra grąžinamas kaip suma. Tada suma padalinama iš vartotojų skaičiaus ir grąžinama kaip vidurkis.
*/


///naudojant naudoti "for ... of"

function masinuVidurkis2(asmenys) {
  let suma = 0;
  for (const asmuo of asmenys) {
    suma += asmuo.masinosGamybosMetai;
  }
  return suma / asmenys.length;
}

console.log(masinuVidurkis2(asmenys));


///naudojant "map()" funkciją, kad iš masyvo gautumėte tik vartotojų mašinų gamybos metus, ir tada naudoti "reduce()" funkciją, kad suskaičiuotumėte vidurkį.
function masinuVidurkis3(asmenys) {
  const metai = asmenys.map(asmuo => asmuo.masinosGamybosMetai);
  const suma = metai.reduce((acc, metai) => acc + metai, 0);
  return suma / asmenys.length;
}

console.log(masinuVidurkis3(asmenys));

///naudojant naudoti "filter()" funkciją, kad iš masyvo išfiltruotumėte tik tas vartotojus, 
//kurių mašinų gamybos metai yra didesni nei 2000, ir tada naudoti "forEach()" funkciją, kad visus šiuos metus sudėtumėte į kintamąjį suma.

function masinuVidurkis4(asmenys) {
  let suma = 0;
  const naujiAsmenys = asmenys.filter(asmuo => asmuo.masinosGamybosMetai > 2000);
  naujiAsmenys.forEach(asmuo => suma += asmuo.masinosGamybosMetai);
  return suma / naujiAsmenys.length;
}

console.log(masinuVidurkis4(asmenys));

