'use-strict';
const body = document.querySelector('body');
const loadWindow = () => {
    window.addEventListener('load',() => {
        const dialog = document.createElement('dialog');
        const content = `
        <div style='color:aquamarine'>Saludos, escribe tu nombre</div>
        <input class='form-control mt-3 text-white border border-info' onchange='nameUser(event)' 
        type='text' style='background:none'/>
        <div class='d-flex justify-content-center'>
            <button class='mt-4 border border-info btn' onclick='saveName(event)' style='color:aquamarine'>
                Buena suerte
            </button>
        </div>
    `
        dialog.open = true;
        dialog.classList.add('dialogActive', 'border', 'border-info', 'p-4')
        dialog.innerHTML = content;
        body.insertAdjacentElement('afterbegin', dialog);
    })
}

loadWindow();
//Revisar las tres funciones por que no se elimina el evento load y no se guarda el 
// value del input
const nameUser = (e) => {
    return e.target.value;
}

const saveName = (e) => {
    localStorage.setItem('nameu', nameUser(e));
    const dialog = document.querySelector('dialog');
    dialog.remove();
    body.removeEventListener('load', loadWindow);
}