//función para el scroll de la navegación
export const scrollNavegacion = (cantidadScroll) => {
    document.documentElement.scrollTo(0, cantidadScroll);
}

//cambiar de color del menu de navegacion
export const cambiarColor = (nodoElemento)=>{
    nodoElemento.className = 'text-primary';
}


