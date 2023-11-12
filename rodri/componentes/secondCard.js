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
                scrollNavegacion(490);
                break;
            case '3':
                scrollNavegacion(1000);
                break;
            case '4':
                scrollNavegacion(1500);
                break;
            case '5':
                scrollNavegacion(2500);
                break;
        }
    })
})
const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check2', 2, text, 'Sigue asi', 'Completa antes la lección');
