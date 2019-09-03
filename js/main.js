window.addEventListener('DOMContentLoaded', function () {

    let menu__item = document.getElementsByClassName('menu__item');

    for(let i = 0; i < menu__item.length; i++){
        menu__item[i].addEventListener('mouseenter', frame);
        function frame() {
            menu__item[i].className = 'menu__item border_menu animated pulse';
        }
        menu__item[i].addEventListener('mouseleave', deleteFrame);
        function deleteFrame() {
            menu__item[i].className = 'menu__item';
        }
    }

});