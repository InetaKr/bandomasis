/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai).
*/
// Step 1: Define a function that makes an HTTP request to the data.json file
function getData() {
  // Use the fetch API to make an HTTP request to the data.json file
  fetch('data.json')
    // When the data is received, convert it to JSON format
    .then(response => response.json())
    // Then, use the data to display the movies and actors on the page
    .then(data => {
      // Get the movie-list div element
      const movieList = document.getElementById('movie-list');
      
      // Loop through the movies array
      data.movies.forEach(movie => {
        // Create an li element
        const movieItem = document.createElement('li');
        
        // Create a text node with the movie title and actor name
        const movieText = document.createTextNode(`${movie.title} - ${movie.actors}`);
        
        // Append the text node to the li element
        movieItem.appendChild(movieText);
        
        // Append the li element to the movie-list div
        movieList.appendChild(movieItem);
      });
    });
}

// Step 2: Add an event listener to the window object to call the getData function when the page loads
window.addEventListener('load', getData);


/*function getData() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movie-list');
      
      data.movies.forEach(movie => {
        const movieItem = document.createElement('li');
        const movieText = document.createTextNode(`${movie.title} - ${movie.actor || 'Actor name not available'}`);
        movieItem.appendChild(movieText);
        movieList.appendChild(movieItem);
      });
    })
    .catch(error => {
      console.error(error);
    });
}
window.addEventListener('load', getData);*/
