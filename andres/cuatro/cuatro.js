import { cambiarColor, scrollNavegacion, checkLeido, loadToPage }
    from '../../funcionesGenerales/funcionalidades.js';
const btnNav = document.querySelectorAll('.btn-nav');
btnNav.forEach(btn => {
    btn.addEventListener('click', e => {
        const IDELEMENT = e.target.id;
        cambiarColor(btnNav, e.target);
        switch (IDELEMENT) {
            case '1':
                scrollNavegacion(0);
                break;
            case '2':
                scrollNavegacion(390);
                break;
            case '3':
                scrollNavegacion(700);
                break;
            case '4':
                scrollNavegacion(1100);
                break;
        }
    })
})
const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check4', 4, text, 'Sigue asi', 'Completa antes la lección', '../../jordan/cinco/cinco.html');
loadToPage('check4', '../../jordan/cinco/cinco.html');