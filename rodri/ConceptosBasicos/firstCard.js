import { cambiarColor, checkLeido, loadToPage, scrollNavegacion } from "../../funcionesGenerales/funcionalidades.js";
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
                    scrollNavegacion(830);
                    break;
                    case '3':
                        scrollNavegacion(1700);
                        break;
            case '4':
                scrollNavegacion(2000);
                break;
        }
    })
})

const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check1', 1, text, 'Sigue asi', 'Completa antes la lección', '../componentes/secondCard.html');
loadToPage('check1', '../componentes/secondCard.html');
