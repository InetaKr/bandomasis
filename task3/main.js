/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

const showUserButton = document.getElementById('show-user-button');
const userDisplay = document.getElementById('user-display');

showUserButton.addEventListener('click', () => {
  // Iškviečiame API ir gauname duomenis apie vartotoją
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      // Ištraukiame vardą ir pavardę iš gautų duomenų
      const { name } = data.results[0];
      const firstName = name.first;
      const lastName = name.last;

      // Atvaizduojame vardą ir pavardę ekrane ir paslėpiam mygtuką
      userDisplay.innerHTML = `Vardas: ${firstName} Pavardė: ${lastName}`;
      showUserButton.style.display = 'none';
    });
});