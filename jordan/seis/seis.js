import { checkLeido, loadToPage } from '../../funcionesGenerales/funcionalidades.js';

const check = document.querySelector('.check');
const text = document.querySelector('.text');
checkLeido(check, 'check6', 6, text, 'Sigue asi', 'Completa antes la lección', '../../jonatan/siete/siete.html');
loadToPage('check6', '../../jonatan/siete/siete.html');



