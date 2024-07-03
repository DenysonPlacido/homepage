document.addEventListener('DOMContentLoaded', () => {
    let icone = document.querySelector('.material-symbols-outlined');
    let menu = document.querySelector('#menu');
    let menuLinks = menu.querySelectorAll('a');

    icone.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});
