// alert("hola!")

let ataqueJuador
let ataqueEnemigo

let pokemonAliado
let pokemonEnemigo 

function ataque(tipo) {
    ataqueJuador = tipo;
    ataqueEnemigoGlobal();
}

function ataqueEnemigoGlobal() {
    let ataqueAleatorio = aletatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "fuego";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "agua";
    } else {
        ataqueEnemigo = "tierra";
    }

    combate ()
}

function combate () {
    // aca ellos hacen unos condicionales para determinar quien gana en funcion de ataques, pero no lo hice por que eso ya se hizo antes
    crearMensaje()
}

function aletatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascota() {

    let inputShayim = document.getElementById("Shaymin")
    let inputSunflora = document.getElementById("Sunflora")
    let inputTotodaile = document.getElementById("Totodaile")
    let inputCharizard = document.getElementById("Charizard")
    let inputGarchomp = document.getElementById("Garchomp")
    let inputKabutops = document.getElementById("Kabutops")

    let spanMascotaJugador = document.getElementById("span_nombre_mascota")


    if (inputShayim.checked) {
        spanMascotaJugador.innerHTML = "Shayim"
        pokemonAliado = "Shayim"
    } else if (inputSunflora.hecked) {
        spanMascotaJugador.innerHTML = "Sunflora"
        pokemonAliado = "Sunflora"
    } else if (inputTotodaile.checked) {
        spanMascotaJugador.innerHTML = "Totodaile"
        pokemonAliado = "Totodaile"
    } else if (inputCharizard.checked) {
        spanMascotaJugador.innerHTML = "Charizard"
        pokemonAliado = "Charizard"
    } else if (inputGarchomp.checked) {
        spanMascotaJugador.innerHTML = "Garchomp"
       pokemonAliado = "Garchomp"
    } else if (inputKabutops.checked) {
        spanMascotaJugador.innerHTML = "Kabutops"
        pokemonAliado = "Kabutops"
    } else (
        alert("Selecciona un pokemon!")
    )

    mascotaDelEnemigoRandom()

    // document.getElementsByName('mokepon')
}

function mascotaDelEnemigoRandom() {
    let ataqueAleatorio = aletatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('span_nombre_mascota_enemigo')

    if (ataqueAleatorio == 1) {
        // Shayim
        spanMascotaEnemigo.innerHTML = 'Shayim'
        pokemonEnemigo = 'Shayim'
    } else if (ataqueAleatorio == 2) {
        // Sunflora
        spanMascotaEnemigo.innerHTML = 'Sunflora'
        pokemonEnemigo = 'Sunflora'
    } else if (ataqueAleatorio == 3) {
        // Totodaile
        spanMascotaEnemigo.innerHTML = 'Totodaile'
        pokemonEnemigo = 'Totodaile'
    } else if (ataqueAleatorio == 4) {
        // Charizard
        spanMascotaEnemigo.innerHTML = 'Charizard'
        pokemonEnemigo = 'Charizard'
    } else if (ataqueAleatorio == 5) {
        // Garchomp
        spanMascotaEnemigo.innerHTML = 'Garchomp'
        pokemonEnemigo = 'Garchomp'
    } else if (ataqueAleatorio == 6) {
        // Kabutops
        spanMascotaEnemigo.innerHTML = 'Kabutops'
        pokemonEnemigo = 'Kabutops'
    }
}

function iniciarJuego() {
    let botonMascota = document.getElementById("boton_seleccionar_mascota");
    botonMascota.addEventListener("click", seleccionarMascota);

    let botonFuego = document.getElementById("boton_ataque_fuego");
    botonFuego.addEventListener("click", function () {
        ataque('fuego');
    });

    let botonAgua = document.getElementById("boton_ataque_agua");
    botonAgua.addEventListener('click', function () {
        ataque('agua');
    });

    let botonTierra = document.getElementById("boton_ataque_tierra");
    botonTierra.addEventListener('click', function () {
        ataque('tierra');
    });
}

function crearMensaje() {

    let seccionMensajes = document.getElementById('Log_de_ataques')

    let parrafoJugador = document.createElement("p")
    parrafoJugador.innerHTML = "Tu " + pokemonAliado +" ataco con un ataque tipo "+ ataqueJuador+ " y le quito 10 de vida al " + pokemonEnemigo +" del enemigo!"
    let parrafoEnemigo = document.createElement("p")
    parrafoEnemigo.innerHTML = "El " + pokemonEnemigo +" de tu enemigo uso un ataque tipo " + ataqueEnemigo+"! y le quito 5 de vida a tu " + pokemonAliado +"!"

    seccionMensajes.appendChild(parrafoJugador)
    seccionMensajes.appendChild(parrafoEnemigo)
}

window.addEventListener('load', iniciarJuego)