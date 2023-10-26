'use-strict';

document.addEventListener('DOMContentLoaded', () => {
    const imgCategory = document.querySelectorAll('.img-category'); // Reemplaza 'your-selector-for-img-elements' con el selector correcto
    imgCategory.forEach(img => {
        const element = document.createElement('div');
        element.classList.add('text-white', 'text-center', 'fs-2');

        img.addEventListener('mouseover', (e) => {
            const targetId = e.target.id;
            switch (targetId) {
                case '1':
                    element.innerHTML = '1. Entendiendo la computadora';
                    break;
                case '2':
                    element.innerHTML = '2. Componentes escenciales de una computadora';
                    break;
                case '3':
                    element.innerHTML = '3. Componentes electrónicos';
                    break;
                case '4':
                    element.innerHTML = '4. Tipos de cables de una computadora';
                    break;
                case '5':
                    element.innerHTML = '5. BIOS';
                    break;
                case '6':
                    element.innerHTML = '6. Desmontaje';
                    break;
                case '7':
                    element.innerHTML = '7. Mantenimiento y ensamblado';
                    break;
                case '8':
                    element.innerHTML = '8. Pasta termica';
                    break;
                case '9':
                    element.innerHTML = '9. Marcas importantes en el mundo tech';
                    break;
            }
            e.target.before(element);
        });

        img.addEventListener('mouseout', () => element.innerHTML = '')
    });

})
