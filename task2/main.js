/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/
function countClicks(element) {
  // element yra nuotrauka, ant kurios buvo paspausta
  // Paimkite elemento id
  let elementId = element.id;
  // Paimkite span elementą, kuris atvaizduoja kiek kartų buvo paspausta ant nuotraukos
  let clickElement = document.getElementById(elementId + "Clicks");
  // Padidinkite kiek kartų buvo paspausta ant nuotraukos skaičių vienetu
  let currentClicks = parseInt(clickElement.innerHTML);
  clickElement.innerHTML = currentClicks + 1;
}



let counter1 = 0;
let counter2 = 0;

function incrementCounter(imageId) {
  if (imageId === 'image1') {
    counter1++;
    document.getElementById('counter1').innerHTML = `Paspausta ${counter1} kartų`;
  } else if (imageId === 'image2') {
    counter2++;
    document.getElementById('counter2').innerHTML = `Paspausta ${counter2} kartų`;
  }
}