import {checkLeido, loadToPage} from '../../funcionesGenerales/funcionalidades.js';

const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check5', 5, text, 'Sigue asi', 'Completa antes la lección', '../seis/seis.html');
loadToPage('check5', '../seis/seis.html');