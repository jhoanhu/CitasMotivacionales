let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');
let animeElem = document.getElementById('anime');

function generarEnteroAleatorio(min, max) {//esta función genera un número entero aleatorio entre min y max 
    return Math.floor(Math.random() * (max -  min) + min);
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`; //sirve para cambiar el texto de la cita
    autorElem.innerText = citas[indiceAleatorio].autor; //sirve para cambiar el texto del autor
    animeElem.innerText = citas[indiceAleatorio].anime; //sirve para cambiar el texto del anime
}
cambiarCita();

botonElem.addEventListener('click', cambiarCita); //sirve para que cada vez que se haga click en el botón, se cambie la cita


