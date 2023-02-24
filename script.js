// "use strict";

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const plusIcon = document.getElementById('add-movie');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle__input');
const form = document.querySelector('.form-container');
const closeFormBtn = document.getElementById('close-form-btn');




hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
    const title = document.querySelector('.movie-title');
    title.style.color = 'white';
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    toggle.checked = localStorage.getItem('darkmode') === 'true';
}

// --------------------------Adding a film to list----------------------

plusIcon.addEventListener('click', function() {
    form.classList.toggle('active');
    plusIcon.style.display = 'none';
})


let library = [];

function addLocalStorage() {
    library = JSON.parse(localStorage.getItem('library')) || [];
    render();
    // saveAndRender();

}

function Movie(title, director, genre, year, seen) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.seen = seen;
}

Movie.prototype.toggleSeen = function () {
    this.seen = !this.seen;
}

function toggleSeen(index) {
    library[index].toggleSeen();
    render();
}

function render() {
    let moviesList = document.querySelector('#movies-list');
    moviesList.innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        let movie = library[i];
        let movieCards = document.createElement('div');
        movieCards.innerHTML = `
            <div class="movie-card">
                <div class="movie-card-container">
                    <div class="card_header">
                        <h2 class="movie__title">${movie.title}</h2>
                        <h4 class="movie__director">Directed by ${movie.director}</h4>
                    </div>
                    <div class="card_body">
                        <p class="movie__genre dark-mode">Genre: ${movie.genre}</p>
                        <p class="movie__year">Date of Release: ${movie.year}</p>
                        <p class="movie__seen">${movie.seen ? "Status: Seen" : "Status: On Watchlist"}</p>
                        <button class="delete__movie" onclick="deleteMovie(${i})">Delete</button>
                        <button class="toggle__seen" onclick="toggleSeen(${i})">${movie.seen ? "Add To Watchlist" : "Seen"}</button> 
                    </div>
                </div>
            </div>`;
        moviesList.appendChild(movieCards);
    }
}




function deleteMovie(index) {
    library.splice(index, 1);
    render();
    // saveAndRender();

}

function addMovieToLibrary() {
    let title = document.getElementById('title').value;
    let director = document.getElementById('director').value;
    let genre = document.getElementById('genre').value;
    let year = document.getElementById('year').value;
    let seen = document.getElementById('seen').checked;
    
    let newMovie = new Movie(title, director, genre, year, seen);
    library.push(newMovie);
    render();
    form.classList.toggle('active');
    plusIcon.style.display = 'block';
    // saveAndRender();
}

document.getElementById('add-movie-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addMovieToLibrary();
});

// function saveAndRender() {
//     localStorage.setItem('library', JSON.stringify(library));
//     render();
// }

addLocalStorage();

//Keep this at the very bottom of the script to prevent errors
closeFormBtn.addEventListener('click', function() {
    form.classList.toggle('active');
    plusIcon.style.display = 'block';
})