const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const plusIcon = document.getElementById('add-movie');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle__input');
const form = document.querySelector('.form-container');


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
}

function onload() {
	document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    toggle.checked = localStorage.getItem('darkmode') === 'true';
}

// --------------------------Adding a film to list----------------------

plusIcon.addEventListener('click', function() {
    form.classList.toggle('active');
})


let library = [];

function Movie(title, director, year, seen) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.seen = seen;
}

function addMovieToLibrary() {

}

