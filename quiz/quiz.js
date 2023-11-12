'use-strict';
const body = document.querySelector('body');
window.onload = () => {
    const dialog = document.createElement('dialog');
    const content = `
        <div style='color:aquamarine'>Escribe tu nombre para el certificado</div>
        <input class='form-control mt-3 text-white border border-info' onchange='nameUser(event)' 
        type='text' style='background:none'/>
        <div class='d-flex justify-content-center'>
            <button class='mt-4 border border-info btn' onclick='saveName(event)' style='color:aquamarine'>
                Buena suerte
            </button>
        </div>
    `
    dialog.open = 'hola'
    dialog.classList.add('dialogActive', 'border', 'border-info', 'p-4')
    dialog.innerHTML = content;
    body.insertAdjacentElement('afterbegin', dialog);
}

const nameUser = (e)=>{
    return e.target.value;
}

const saveName = (e) => {
    localStorage.setItem('nameu', nameUser(e));
    body.removeEventListener('load', window);
}