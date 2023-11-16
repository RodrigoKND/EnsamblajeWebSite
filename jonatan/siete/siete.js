import {cambiarColor,scrollNavegacion,checkLeido,loadToPage} from '../../funcionesGenerales/funcionalidades.js';

const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check7', 7, text, 'Sigue asi', 'Completa antes la lección', '../ocho/ocho.html');
loadToPage('check7', '../ocho/ocho.html');