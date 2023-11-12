import { cambiarColor, scrollNavegacion, checkLeido }
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
            case '5':
                scrollNavegacion(1500);
                break;
            case '6':
                scrollNavegacion(1900);
                break;
            case '7':
                scrollNavegacion(2500);
                break;
        }
    })
})
const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check3', 3, text, 'Sigue asi', 'Completa antes la lección');
