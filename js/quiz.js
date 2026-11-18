var boton = document.getElementById("corregir");

boton.addEventListener("click", function() {

    let puntaje = 0;

    let respuesta1 = document.querySelector(
        'input[name="p1"]:checked'
    );

    let respuesta2 = document.querySelector(
        'input[name="p2"]:checked'
    );

    let respuesta3 = document.querySelector(
        'input[name="p3"]:checked'
    );

    let respuesta4 = document.querySelector(
        'input[name="p4"]:checked'
    );

    let respuesta5 = document.querySelector(
        'input[name="p5"]:checked'
    );

    let respuesta6 = document.querySelector(
        'input[name="p6"]:checked'
    );

    let resultado = document.getElementById("resultado");

    // Comprobar que estén respondidas las seis preguntas
    if (!respuesta1 || !respuesta2 || !respuesta3 ||
        !respuesta4 || !respuesta5 || !respuesta6) {

        resultado.textContent = "Debes responder las seis preguntas.";
        return;
    }

    // Respuestas correctas
    if (respuesta1.value === "a") {
        puntaje++;
    }

    if (respuesta2.value === "b") {
        puntaje++;
    }

    if (respuesta3.value === "c") {
        puntaje++;
    }

    if (respuesta4.value === "b") {
        puntaje++;
    }

    if (respuesta5.value === "c") {
        puntaje++;
    }

    if (respuesta6.value === "b") {
        puntaje++;
    }

    resultado.textContent = "Obtuviste " + puntaje +
        " de 6 respuestas correctas.";

    if (puntaje == 6) {
        resultado.textContent = resultado.textContent +
            " ¡Excelente!";
    } else if (puntaje >= 4) {
        resultado.textContent = resultado.textContent +
            " ¡Muy bien!";
    } else {
        resultado.textContent = resultado.textContent +
            " ¡Seguí practicando!";
    }

});
