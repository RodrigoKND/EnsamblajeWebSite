function validarRespuestas() {
    // Pregunta 1
    var resp1 = document.querySelector('input[name="pregunta1"]:checked');
    // Pregunta 2
    var resp2 = document.querySelector('input[name="pregunta2"]:checked');
    // Pregunta 3
    var resp3 = document.querySelector('input[name="pregunta3"]:checked');
    var resp4 = document.querySelector('input[name="pregunta4"]:checked');
    var resp5 = document.querySelector('input[name="pregunta5"]:checked');
    var resp6 = document.querySelector('input[name="pregunta6"]:checked');
    var resp7 = document.querySelector('input[name="pregunta7"]:checked');
    var resp8 = document.querySelector('input[name="pregunta8"]:checked');

    if (resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8) {
        var puntaje = 0;
        // Pregunta 1
        if (resp1.value === "b") puntaje += 10;
        // Pregunta 2
        if (resp2.value === "c") puntaje += 10;
        // Pregunta 3
        if (resp3.value === "b") puntaje += 10;
        // Pregunta 4
        if (resp4.value === "a") puntaje += 10;

        if (resp5.value === "c") puntaje += 10;

        if (resp6.value === "c") puntaje += 10;

        if (resp7.value === "b") puntaje += 20;

        if (resp8.value === "b") puntaje += 20;
        localStorage.setItem('puntaje', puntaje);
        alert("¡Respuestas completas! Puntaje: " + puntaje);
        window.location.href = '../bonus/bonus.html';
    } else {
        alert("Por favor, responde todas las preguntas antes de marcar la lección como completada.");
    }
}

window.onload = ()=>{
    if(localStorage.getItem('puntaje')){
        alert('Ya tienes un puntaje dado');
        window.location.href = '../index.html';
    }
}