const toggle = document.querySelector('.nav-toggle');
const hamburgers = document.querySelector('.hamburger');
const navbar = document.querySelector('#navbar-menu');

toggle.addEventListener('click', () => {
    hamburgers.classList.toggle("active");
    navbar.classList.toggle("display");
});