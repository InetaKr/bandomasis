/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/

class trueFalse {
  metodas1(skaicius) {
    return skaicius > 100;
  }

  metodas2(zodis) {
    return zodis[0] === zodis[0].toUpperCase();
  }

  metodas3(skaicius) {
    return skaicius % 2 === 0;
  }

  metodas4(zodis) {
    return zodis.length > 8;
  }
}


//Norėdami naudoti šias funkcijas, galite sukurti naują "trueFalse" klasės objektą ir naudoti jos metodus:

const objektas = new trueFalse();
console.log(objektas.metodas1(200)); // true
console.log(objektas.metodas1(50)); // false
console.log(objektas.metodas2("Labas")); // true
console.log(objektas.metodas2("labas")); // false
console.log(objektas.metodas3(2)); // true
console.log(objektas.metodas3(3)); // false
console.log(objektas.metodas4("LabaiIlgasZodis")); // true
console.log(objektas.metodas4("Mažas")); // false

//Klasės metodai yra specialūs tipai funkcijų, kurios yra susijusios su klase ir jos objektais. 
//Klasės metodai gali naudoti klasės vidinius duomenis ir yra pasiekiami per klasės objektus.