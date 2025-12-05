"use strict"; // Enable strict mode for better error checking

let allMovies = []; // Initialize an empty array to hold movie data

// #0: Listen for page load
window.addEventListener("DOMContentLoaded", initApp); // When the DOM is loaded, run initApp function

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  getMovieData(); // Call the function to fetch movie data
}

// #2: Fetch movie data from the specified URL
async function getMovieData() {
  const url = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"; // URL to fetch movie data from
  const response = await fetch(url); // Fetch the data from the URL
  allMovies = await response.json(); // Parse the JSON response and store it in allMovies array
  console.log(allMovies); // Log the movie data to the console
  displayMovies(allMovies); // Display all movies as images
  selectMovie(allMovies[0]); // Display the first movie by default
}

// #3: Display all movies as clickable images
function displayMovies(movies) {
  const grid = document.querySelector("#movie-grid");

  for (const movie of movies) {
    const movieHTML = /*html*/ `
      <img src="${movie.image}" alt="${movie.title}" class="movie-poster" />
    `;
    grid.insertAdjacentHTML("beforeend", movieHTML);
    grid.lastElementChild.addEventListener("click", () => {
      selectMovie(movie);
    });
  }
}

// #4: Display the selected movie details
function selectMovie(movie) {
  const selectedMovie = document.querySelector("#selected-movie");
  selectedMovie.innerHTML = /*html*/ `
    <figure>
      <img src="${movie.image}" alt="${movie.title}" />
    </figure>
    <section>
      <h2>${movie.title}</h2>
      <p>${movie.description}</p>
    </section>
  `;
}
