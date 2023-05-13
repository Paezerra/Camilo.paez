// alert("hola!")

function seleccionarMascota() {

    let inputShayim = document.getElementById("Shaymin")
    let inputSunflora = document.getElementById("Sunflora")
    let inputTotodaile = document.getElementById("Totodaile")
    let inputCharizard = document.getElementById("Charizard")
    let inputGarchomp = document.getElementById("Garchomp")
    let inputKabutops = document.getElementById("Kabutops")


    if (inputShayim.checked) {
        alert("Seleccionaste a Shayim!")
    } else if (inputSunflora.hecked) {
        alert("Seleccionaste a Sunflora!")
    } else if (inputTotodaile.checked) {
        alert("Seleccionaste a Totodaile!")
    } else if (inputCharizard.checked) {
        alert("Seleccionaste a Charizard!")
    } else if (inputGarchomp.checked) {
        alert("Seleccionaste a Garchomp!")
    } else if (inputKabutops.checked) {
        alert("Seleccionaste a Kabutops!")
    } else (
    alert ("Selecciona un pokemon!")
    )
    // document.getElementsByName('mokepon')
}

function iniciarJuago() {
    let botonMascota = document.getElementById("boton_seleccionar_mascota")
    botonMascota.addEventListener("click", seleccionarMascota)
}

window.addEventListener('load', iniciarJuago)