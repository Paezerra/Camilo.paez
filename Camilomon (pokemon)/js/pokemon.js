// alert("hola!")

let ataqueJuador
let ataqueEnemigo

let pokemonAliado
let pokemonEnemigo

let ShayminHp
let SunfloraHp
let TotodaileHp
let CharizardHp
let GarchompHp
let KabutopsHp

let EnemyShayminHp
let EnemySunfloraHp
let EnemyTotodaileHp
let EnemyCharizardHp
let EnemyGarchompHp
let EnemyKabutopsHp

let ShayminHpLife
let SunfloraHpLife
let TotodaileHpLife
let CharizardHpLife
let GarchompHpLife
let KabutopsHpLife

let EnemyShayminHpLife
let EnemySunfloraHpLife
let EnemyTotodaileHpLife
let EnemyCharizardHpLife
let EnemyGarchompHpLife
let EnemyKabutopsHpLife

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

    combate()
}

function combate() {
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
    let spanVidaMascotaJugador = document.getElementById("vida_mascota_jugador")


    if (inputShayim.checked) {
        spanMascotaJugador.innerHTML = "Shayim"
        pokemonAliado = "Shayim"
        spanVidaMascotaJugador.innerHTML = ShayminHpLife
    } else if (inputSunflora.checked) {
        spanMascotaJugador.innerHTML = "Sunflora"
        pokemonAliado = "Sunflora"
        spanVidaMascotaJugador.innerHTML = SunfloraHpLife
    } else if (inputTotodaile.checked) {
        spanMascotaJugador.innerHTML = "Totodaile"
        pokemonAliado = "Totodaile"
        spanVidaMascotaJugador.innerHTML = TotodaileHpLife
    } else if (inputCharizard.checked) {
        spanMascotaJugador.innerHTML = "Charizard"
        pokemonAliado = "Charizard"
        spanVidaMascotaJugador.innerHTML = CharizardHpLife
    } else if (inputGarchomp.checked) {
        spanMascotaJugador.innerHTML = "Garchomp"
        pokemonAliado = "Garchomp"
        spanVidaMascotaJugador.innerHTML = GarchompHpLife
    } else if (inputKabutops.checked) {
        spanMascotaJugador.innerHTML = "Kabutops"
        pokemonAliado = "Kabutops"
        spanVidaMascotaJugador.innerHTML = KabutopsHpLife
    } else (
        alert("Selecciona un pokemon!")
    )

    mascotaDelEnemigoRandom()

    // document.getElementsByName('mokepon')
}

function mascotaDelEnemigoRandom() {
    let ataqueAleatorio = aletatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('span_nombre_mascota_enemigo')
    let spanVidaMascotaEnemigo = document.getElementById("vida_mascota_enemigo")

    if (ataqueAleatorio == 1) {
        // Shayim
        spanMascotaEnemigo.innerHTML = 'Shayim'
        pokemonEnemigo = 'Shayim'
        spanVidaMascotaEnemigo.innerHTML = EnemyShayminHpLife
    } else if (ataqueAleatorio == 2) {
        // Sunflora
        spanMascotaEnemigo.innerHTML = 'Sunflora'
        pokemonEnemigo = 'Sunflora'
        spanVidaMascotaEnemigo.innerHTML = EnemySunfloraHpLife
    } else if (ataqueAleatorio == 3) {
        // Totodaile
        spanMascotaEnemigo.innerHTML = 'Totodaile'
        pokemonEnemigo = 'Totodaile'
        spanVidaMascotaEnemigo.innerHTML = EnemyTotodaileHpLife
    } else if (ataqueAleatorio == 4) {
        // Charizard
        spanMascotaEnemigo.innerHTML = 'Charizard'
        pokemonEnemigo = 'Charizard'
        spanVidaMascotaEnemigo.innerHTML = EnemyCharizardHpLife
    } else if (ataqueAleatorio == 5) {
        // Garchomp
        spanMascotaEnemigo.innerHTML = 'Garchomp'
        pokemonEnemigo = 'Garchomp'
        spanVidaMascotaEnemigo.innerHTML = EnemyGarchompHpLife
    } else if (ataqueAleatorio == 6) {
        // Kabutops
        spanMascotaEnemigo.innerHTML = 'Kabutops'
        pokemonEnemigo = 'Kabutops'
        spanVidaMascotaEnemigo.innerHTML = EnemyKabutopsHpLife
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

    // Asigno Hp inicial; a pokemones
    //let ShayminHp
    // let SunfloraHp
    // let TotodaileHp
    // let CharizardHp
    // let GarchompHp
    // let KabutopsHp

    ShayminHp = document.getElementById("Shaymin_Hp")
    ShayminHpLife = 20
    ShayminHp.innerHTML = ShayminHpLife + "Hp"
    SunfloraHp = document.getElementById("Sunflora_Hp")
    SunfloraHpLife = 30
    SunfloraHp.innerHTML = SunfloraHpLife + "Hp"
    TotodaileHp = document.getElementById("Totodaile_Hp")
    TotodaileHpLife = 25
    TotodaileHp.innerHTML = TotodaileHpLife + "Hp"
    CharizardHp = document.getElementById("Charizard_Hp")
    CharizardHpLife = 40
    CharizardHp.innerHTML = CharizardHpLife + "Hp"
    GarchompHp = document.getElementById("Garchomp_Hp")
    GarchompHpLife = 25
    GarchompHp.innerHTML = GarchompHpLife + "Hp"
    KabutopsHp = document.getElementById("Kabutops_Hp")
    KabutopsHpLife = 10
    KabutopsHp.innerHTML = KabutopsHpLife + "Hp"

    // let EnemyShayminHp
    // let EnemySunfloraHp
    // let EnemyTotodaileHp
    // let EnemyCharizardHp
    // let EnemyGarchompHp
    // let EnemyKabutopsHp

    EnemyShayminHp = document.getElementById("EnemyShaymin_Hp")
    EnemyShayminHpLife = 25
    EnemyShayminHp.innerHTML = EnemyShayminHpLife + "Hp"
    EnemySunfloraHp = document.getElementById("EnemySunflora_Hp")
    EnemySunfloraHpLife = 20
    EnemySunfloraHp.innerHTML = EnemySunfloraHpLife + "Hp"
    EnemyTotodaileHp = document.getElementById("EnemyTotodaile_Hp")
    EnemyTotodaileHpLife = 30
    EnemyTotodaileHp.innerHTML = EnemyTotodaileHpLife + "Hp"
    EnemyCharizardHp = document.getElementById("EnemyCharizard_Hp")
    EnemyCharizardHpLife = 45
    EnemyCharizardHp.innerHTML = EnemyCharizardHpLife + "Hp"
    EnemyGarchompHp = document.getElementById("EnemyGarchomp_Hp")
    EnemyGarchompHpLife = 15
    EnemyGarchompHp.innerHTML = EnemyGarchompHpLife + "Hp"
    EnemyKabutopsHp = document.getElementById("EnemyKabutops_Hp")
    EnemyKabutopsHpLife = 25
    EnemyKabutopsHp.innerHTML = EnemyKabutopsHpLife + "Hp"

}

function crearMensaje() {

    let seccionMensajes = document.getElementById('Log_de_ataques')

    let parrafoJugador = document.createElement("p")
    parrafoJugador.innerHTML = "Tu " + pokemonAliado + " ataco con un ataque tipo " + ataqueJuador + " y le quito 10 de vida al " + pokemonEnemigo + " del enemigo!"
    let parrafoEnemigo = document.createElement("p")
    parrafoEnemigo.innerHTML = "El " + pokemonEnemigo + " de tu enemigo uso un ataque tipo " + ataqueEnemigo + "! y le quito 5 de vida a tu " + pokemonAliado + "!"

    seccionMensajes.appendChild(parrafoJugador)
    seccionMensajes.appendChild(parrafoEnemigo)


}

window.addEventListener('load', iniciarJuego)