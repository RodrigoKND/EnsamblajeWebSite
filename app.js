const imgCategory = document.querySelectorAll('.img-category');

imgCategory.forEach(img=>{
    const element = document.createElement('div');
    element.className = 'text-white text-center'
    img.addEventListener('mouseover',(e)=>{
        if(e.target.id === "1"){
            element.innerHTML = '1. Entendiendo la computadora';
            // e.target.append(element)
        }
    })
})