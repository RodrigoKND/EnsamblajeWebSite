import { cambiarColor, scrollNavegacion } from "../funcionesGenerales/funcionalidades.js";

const btnNav = document.querySelectorAll('.btn-nav');
btnNav.forEach(btn => {
    btn.addEventListener('click', e => {
        const IDELEMENT = e.target.id;
        switch (IDELEMENT) {
            case '1':
                scrollNavegacion(110);
                cambiarColor(btn);
                break;
            case '2':
                scrollNavegacion(940);
                cambiarColor(btn);
                break;
            case '3':
                scrollNavegacion(1800);
                cambiarColor(btn);
                break;
            case '4':
                scrollNavegacion(2000);
                cambiarColor(btn);
                break;
        }
    })
})