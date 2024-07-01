// Função para exibir os textos
function exibirTextoEmTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Menu hamburguer
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Fechar o menu ao clicar em um item (opcional)
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});

// Fechar o menu ao clicar fora dele (opcional)
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnHamburger = menuHamburguer.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        menu.classList.remove('open');
    }
});

// Alternar classe 'fixed' no cabeçalho ao rolar a página (opcional)
window.addEventListener('scroll', () => {
    const cabecalho = document.querySelector('.cabecalho');
    cabecalho.classList.toggle('fixed', window.scrollY > 0);
});

