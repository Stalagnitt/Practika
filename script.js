const iconMenu = document.querySelector('.menu_icon');
const listMenu = document.querySelector('.menu_navbar');
const body = document.body;
if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        listMenu.classList.toggle('_active');
        body.classList.toggle('_active');
    })
}