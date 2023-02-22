const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const plusIcon = document.querySelector('.floating-container');
const body = document.querySelector('body');

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
}