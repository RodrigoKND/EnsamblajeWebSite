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

export const checkLeido = (botonCheck, llaveLocalstorage, valorLocalStorage, cambiarTexto)=>{
    let contadorClicks = 0;
    botonCheck.addEventListener('click', e=>{
        e.target.classList.remove('text-danger');
        e.target.classList.add('text-success');
        cambiarTexto.innerHTML = 'Ok... Sigue asi crack'
        localStorage.setItem(llaveLocalstorage, valorLocalStorage);
        contadorClicks++;

        if(contadorClicks === 2){
            e.target.classList.remove('text-success');
            e.target.classList.add('text-danger');
            cambiarTexto.innerHTML = 'Marca si completaste la lección'
            localStorage.removeItem(llaveLocalstorage);
            contadorClicks = 0;
        }
    })
}
