const iconMenu = document.querySelector('.menu_icon');
const listMenu = document.querySelector('.menu_navbar');
const body = document.body;
if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        listMenu.classList.toggle('_active');
        body.classList.toggle('_active');
    })
}
window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
});



window.addEventListener('scroll', function() {
    var image = document.querySelector('.content1_foto');
    var textBlock = document.querySelector('.content1_text');
    var imagePosition = image.getBoundingClientRect().top;
    var textBlockPosition = textBlock.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    // Перевірка, чи зображення на екрані і засунуте зліва
    if (imagePosition < windowHeight && imagePosition > 0) {
        image.style.transform = 'translateX(0)';
        image.style.opacity = '1';
    } else {
        image.style.transform = 'translateX(-100px)';
        image.style.opacity = '0';
    }
  
    // Перевірка, чи блок тексту на екрані і засунуте справа
    if (textBlockPosition < windowHeight && textBlockPosition > 0) {
        textBlock.style.transform = 'translateX(0)';
        textBlock.style.opacity = '1';
    } else {
        textBlock.style.transform = 'translateX(100px)';
        textBlock.style.opacity = '0';
    }
});

