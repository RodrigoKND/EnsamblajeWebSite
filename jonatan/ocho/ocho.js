import {cambiarColor,scrollNavegacion,checkLeido,loadToPage} from '../../funcionesGenerales/funcionalidades.js';

const check = document.querySelector('.check');
const text = document.querySelector('.text');

checkLeido(check, 'check8', 8, text, 'Sigue asi', 'Completa antes la lección', '../../rodri/marcas/marcas.html');
loadToPage('check8', '../../rodri/marcas/marcas.html');