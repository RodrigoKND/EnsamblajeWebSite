//función para el scroll de la navegación
export const scrollNavegacion = (cantidadScroll) => {
    document.documentElement.scrollTo(0, cantidadScroll);
}

export const cambiarColor = (btnNav, nodoActual) => {
    btnNav.forEach(btn => {
        btn.classList.remove('text-info');
        btn.classList.add('text-white');
    });
    nodoActual.classList.remove('text-white');
    nodoActual.classList.add('text-info');
}

export const checkLeido = (botonCheck, llaveLocalstorage, valorLocalStorage, cambiarTexto, textoReemplazo, textoOriginal, url) => {
    let contadorClicks = 0;
    botonCheck.addEventListener('click', e => {
        e.target.classList.remove('text-danger');
        e.target.classList.add('text-success');
        cambiarTexto.innerHTML = textoReemplazo;
        localStorage.setItem(llaveLocalstorage, valorLocalStorage);
        contadorClicks++;
        lessonReaded(llaveLocalstorage, url);

        if (contadorClicks === 2) {
            e.target.classList.remove('text-success');
            e.target.classList.add('text-danger');
            cambiarTexto.innerHTML = textoOriginal;
            localStorage.removeItem(llaveLocalstorage);
            contadorClicks = 0;
        }
    })
}

export const verifiedCheck = (keyStorage, number) => {
    const key = localStorage.getItem(keyStorage);
    if (key !== String(number)) alert('Debe leer antes de continuar.');
}


export const verifiedkeyStorage = (urlIfKeyTrue) => {
    let keyFind = true;
    let keysMiss = '';
    for (let i = 1; i <= 3; i++) {
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
    } else window.location.href = urlIfKeyTrue;

}

export const lessonReaded = (keyStorage, nextLesson= undefined) => {
    const item = localStorage.getItem(keyStorage);
    if (item && typeof nextLesson !== undefined) {
        alert('Se registró ya la lección...');
        window.location.href = nextLesson;
    }
}

export const loadToPage = (keyStorage, url) => {
    window.onload = () => {
        lessonReaded(keyStorage, url)
    }
}