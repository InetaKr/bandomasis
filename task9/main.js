/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Masina {
  constructor(marke, modelis, kaina, metai) {
    this.masinosMarke = marke;
    this.masinosModelis = modelis;
    this.masinosKaina = kaina;
    this.masinosGamybosMetai = metai;
  }

  arBrangesne() {
    return this.masinosKaina > 10000;
  }

  senumoTikrinimas() {
    const amzius = 2022 - this.masinosGamybosMetai;
    if (amzius > 12) {
      return `${amzius} metai, Antikvaras`;
    } else {
      return `${amzius} metai, Šviežiena`;
    }
  }
}

const masina1 = new Masina("Ford", "Mustang", 15000, 2010);
console.log(masina1.arBrangesne()); // true
console.log(masina1.senumoTikrinimas()); // "12 metai, Šviežiena"

const masina2 = new Masina("Toyota", "Corolla", 8000, 2018);
console.log(masina2.arBrangesne()); // false
console.log(masina2.senumoTikrinimas()); // "4 metai, Šviežiena"


/*
Ši klasė priima 4 savybes - masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai - per konstruktorių, kuris yra ypatingas metodas, 
skirtas inicijuoti naują klasės objektą. Po to klasė turi 2 metodus - arBrangesne ir senumoTikrinimas, kurie galite naudoti per klasės objektus.
Pavyzdyje aukščiau panaudotas constructor metodas, kuris yra ypatingas metodas, skirtas inicijuoti naujus klasės objektus. 
Jis gali priimti argumentus, kurie bus naudojami kaip objekto savybės, ir jis dažniausiai naudojamas kartu su this raktažodžiu, kuris nurodo į esamą objektą.
Taip pat panaudotas if...else sakinys, kuris leidžia atlikti skirtingus veiksmus priklausomai nuo sąlygos. 
Čia sąlyga tikrina, ar masinos amžius yra didesnis nei 12 metų. Jei taip, metodas grąžina tekstą su mašinos amžiumi ir žodžiu "Antikvaras", 
o jei ne, grąžina teksta su masinos amziumi ir zodziu "svieziena"
*/