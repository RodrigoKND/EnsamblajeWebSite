import { cambiarColor, scrollNavegacion }
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
                scrollNavegacion(865);
                break;
            case '3':
                scrollNavegacion(1400);
                break;
            case '4':
                scrollNavegacion(1800);
                break;
            case '5':
                scrollNavegacion(2200);
                break;
            case '6':
                scrollNavegacion(2700);
                break;
            case '7':
                scrollNavegacion(3000);
                break;
            case '8':
                scrollNavegacion(4000);
                break;
        }
    })
})
const check = document.querySelector('.check');
const text = document.querySelector('.text');
let contadorClicks = 0;
check.addEventListener('click', e => {
    e.currentTarget.classList.remove('text-danger');
    e.currentTarget.classList.add('text-success');
    text.innerHTML = 'Bien hecho';
    localStorage.setItem('check8', '8');
    contadorClicks++;

    if (contadorClicks === 2) {
        e.currentTarget.classList.remove('text-success');
        e.currentTarget.classList.add('text-danger');
        text.innerHTML = 'Marca si completaste la lección';
        localStorage.removeItem('check8');
        contadorClicks = 0;
    }
})

const quiz = document.querySelector('.quiz');
quiz.addEventListener('click', e => {
    verifiedCheck('check8');
    verifiedkeyStorage();
})
const verifiedCheck = (keyStorage) => {
    const key = localStorage.getItem(keyStorage);
    if (key !== '8') alert('Debe leer antes de continuar.');
}

const verifiedkeyStorage = () => {
    let keyFind = true;
    let keysMiss = '';
    for (let i = 1; i <= 8; i++) {
        const keys = localStorage.getItem('check' + i);
        if (!keys) {
            keyFind = false;
            keysMiss += i + '-';
        }
    }

    if (!keyFind) {
        alert(`Debe terminar todas las lecciones antes de pasar al cuestionario. 
        Te falta la lección 
        =>${keysMiss}`);
    }else{
        window.location.href = '/'
    }
}