const navigation = document.querySelector('#navbarToggleExternalContent');
const navigationLinks = navigation.querySelectorAll('a');
const navbar = document.querySelector('.navbar');
const book = document.querySelector('.book-section');

window.addEventListener('wheel', function (event) {
    if (navbar.classList.contains('hidden') === false) return;

    toggleNavbar();
});

window.addEventListener('touchmove', function (e) {
    if (navbar.classList.contains('hidden') === false) return;

    toggleNavbar();
});

navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        collapseNavigation();
    });
});

book.addEventListener('click', () => {
    collapseNavigation();
    toggleNavbar()
});

setYear();

function collapseNavigation() {
    if (navigation === null) return;

    bootstrap.Collapse.getOrCreateInstance(navigation).toggle();
    toggleNavbar();
}

function setYear() {
    const yearEl = document.querySelector("footer .year");
    const currentYear = new Date().getFullYear();

    yearEl.textContent = currentYear;
}

function toggleNavbar() {
    navbar.classList.toggle('hidden');
}