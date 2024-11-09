const hamburger = document.getElementById('hamburger');  // Hamburger ikona
const menu = document.querySelector('nav ul');  // Meni

// Klik na hamburger meniju da se otvori/zatvori meni
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();  // Sprečava da klik na hamburger pokrene klik izvan menija
    menu.classList.toggle('show');  // Dodaj ili ukloni klasu "show"
});

// Klik na bilo gde izvan menija (osim hamburgera) zatvara meni
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('show');  // Sakrij meni ako kliknemo izvan njega
    }
});