// MENU TOGGLE CODE

function showMenu() {
    document.getElementById('menu').classList.toggle('menu-mobile-show');
    document.getElementById('menu-button').classList.toggle('rotated');
}

document.getElementById('menu-button').addEventListener('click', showMenu);

console.log(document.getElementById('menu-button'));