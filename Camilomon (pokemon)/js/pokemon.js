// alert("hola!")
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
    } else if (inputSunflora.hecked) {
        spanMascotaJugador.innerHTML = "Sunflora"
    } else if (inputTotodaile.checked) {
        spanMascotaJugador.innerHTML = "Totodaile"
    } else if (inputCharizard.checked) {
        spanMascotaJugador.innerHTML = "Charizard"
    } else if (inputGarchomp.checked) {
        spanMascotaJugador.innerHTML = "Garchomp"
    } else if (inputKabutops.checked) {
        spanMascotaJugador.innerHTML = "Kabutops"
    } else (
    alert ("Selecciona un pokemon!")
    )

    mascotaDelEnemigoRandom ()

    // document.getElementsByName('mokepon')
}

function mascotaDelEnemigoRandom () {
    let ataqueAleatorio = aletatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('span_nombre_mascota_enemigo')

    if (ataqueAleatorio == 1) {
        // Shayim
        spanMascotaEnemigo.innerHTML = 'Shayim'
    } else if (ataqueAleatorio == 2) {
        // Sunflora
        spanMascotaEnemigo.innerHTML = 'Sunflora'
    } else if (ataqueAleatorio == 3) {
        // Totodaile
        spanMascotaEnemigo.innerHTML = 'Totodaile'
    } else if (ataqueAleatorio == 4) {
        // Charizard
        spanMascotaEnemigo.innerHTML = 'Charizard'
    } else if (ataqueAleatorio == 5) {
        // Garchomp
        spanMascotaEnemigo.innerHTML = 'Garchomp'
    } else if (ataqueAleatorio == 6) {
        // Kabutops
        spanMascotaEnemigo.innerHTML = 'Kabutops'
    }
}

function iniciarJuago() {
    let botonMascota = document.getElementById("boton_seleccionar_mascota")
    botonMascota.addEventListener("click", seleccionarMascota)
}

window.addEventListener('load', iniciarJuago)