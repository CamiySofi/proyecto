
var boton = document.getElementById("corregir");

boton.addEventListener("click", function() {

    var puntaje = 0;

    var respuesta1 = document.querySelector(
        'input[name="p1"]:checked'
    );

    var respuesta2 = document.querySelector(
        'input[name="p2"]:checked'
    );

    var respuesta3 = document.querySelector(
        'input[name="p3"]:checked'
    );

    var respuesta4 = document.querySelector(
        'input[name="p4"]:checked'
    );

    var respuesta5 = document.querySelector(
        'input[name="p5"]:checked'
    );

    var respuesta6 = document.querySelector(
        'input[name="p6"]:checked'
    );

    if (respuesta1 != null && respuesta1.value == "a") {
        puntaje = puntaje + 1;
    }

    if (respuesta2 != null && respuesta2.value == "b") {
        puntaje = puntaje + 1;
    }

    if (respuesta3 != null && respuesta3.value == "c") {
        puntaje = puntaje + 1;
    }

    if (respuesta4 != null && respuesta4.value == "b") {
        puntaje = puntaje + 1;
    }

    if (respuesta5 != null && respuesta5.value == "c") {
        puntaje = puntaje + 1;
    }

    if (respuesta6 != null && respuesta6.value == "b") {
        puntaje = puntaje + 1;
    }

    var resultado = document.getElementById("resultado");

    resultado.textContent = "Obtuviste " + puntaje +
        " de 6 respuestas correctas.";

    if (puntaje == 6) {
        resultado.textContent = resultado.textContent +
            " ¡Excelente!";
    } else {
        resultado.textContent = resultado.textContent +
            " ¡Seguí practicando!";
    }

});
