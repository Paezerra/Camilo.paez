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

    // esto no importa!!!

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

    if (pokemonAliado == pokemonEnemigo) {
        if (pokemonAliado == "Shaymin") {
            ShayminHpLife = ShayminHpLife - 5
            EnemyShayminHpLife = EnemyShayminHpLife - 5
        } else if (pokemonAliado == "Sunflora") {
            SunfloraHpLife = SunfloraHpLife - 5
            EnemySunfloraHpLife = EnemySunfloraHpLife - 5
        } else if (pokemonAliado == "Totodaile") {
            TotodaileHpLife = TotodaileHpLife - 5
            EnemyTotodaileHpLife = EnemyTotodaileHpLife - 5
        } else if (pokemonAliado == "Charizard") {
            CharizardHpLife = CharizardHpLife - 5
            EnemyCharizardHpLife = EnemyCharizardHpLife - 5
        } else if (pokemonAliado == "Garchomp") {
            GarchompHpLife = GarchompHpLife - 5
            EnemyGarchompHpLife = EnemyGarchompHpLife - 5
        } else if (pokemonAliado == "Kabutops") {
            KabutopsHpLife = KabutopsHpLife - 5
            EnemyKabutopsHpLife = EnemyKabutopsHpLife - 5
        }

        // Shayim

    } else if (pokemonAliado == "Shaymin" && pokemonEnemigo == "Sunflora") {
        // sunflora es agua fuego
        ShayminHpLife = ShayminHpLife - 10
        EnemySunfloraHpLife = EnemySunfloraHpLife - 10
    } else if (pokemonAliado == "Sunflora" && pokemonEnemigo == "Shaymin") {
        // sunflora es agua fuego
        EnemyShayminHpLife = EnemyShayminHpLife - 10
        SunfloraHpLife = SunfloraHpLife - 10
    } else if (pokemonAliado == "Shaymin" && pokemonEnemigo == "Totodaile") {
        ShayminHpLife = ShayminHpLife
        EnemyTotodaileHpLife = EnemyTotodaileHpLife - 15
    } else if (pokemonAliado == "Shaymin" && pokemonEnemigo == "Charizard") {
        ShayminHpLife = ShayminHpLife - 15
        EnemyCharizardHpLife = EnemyCharizardHpLife
    } else if (pokemonAliado == "Shaymin" && pokemonEnemigo == "Garchomp") {
        // como garchomp es tierra fuego, shayim es medio debil contra el
        ShayminHpLife = ShayminHpLife - 15
        EnemyGarchompHpLife = EnemyGarchompHpLife - 5
    } else if (pokemonAliado == "Shaymin" && pokemonEnemigo == "Kabutops") {
        // kabutops tiene tierra agua, 
        ShayminHpLife = ShayminHpLife - 5
        EnemyKabutopsHpLife = EnemyKabutopsHpLife - 15
    }

    // sunflora

    else if (pokemonAliado == "Sunflora" && pokemonEnemigo == "Totodaile") {
        // sunflora puede usar ataques agua fuego
        SunfloraHpLife = SunfloraHpLife - 15
        EnemyTotodaileHpLife = EnemyTotodaileHpLife - 5
    } else if (pokemonAliado == "Sunflora" && pokemonEnemigo == "Charizard") {
        // charizard usa fuego contra agua fuego
        SunfloraHpLife = SunfloraHpLife - 5
        EnemyCharizardHpLife = EnemyCharizardHpLife - 15
    } else if (pokemonAliado == "Sunflora" && pokemonEnemigo == "Garchomp") {
        // sunflora agua fuego vs garchomp fuego tierra
        SunfloraHpLife = SunfloraHpLife - 10
        EnemyGarchompHpLife = EnemyGarchompHpLife - 10
    } else if (pokemonAliado == "Sunflora" && pokemonEnemigo == "Kabutops") {
        // sunflora agua fuego vs garchomp agua tierra
        SunfloraHpLife = SunfloraHpLife - 10
        EnemyKabutopsHpLife = EnemyKabutopsHpLife - 10
    } else if (pokemonAliado == "Kabutops" && pokemonEnemigo == "Sunflora") {
        // sunflora agua fuego vs garchomp agua tierra
        EnemySunfloraHpLife = EnemySunfloraHpLife - 10
        KabutopsHpLife = KabutopsHpLife - 10
    }

    //Totodaile

    else if (pokemonAliado == "Totodaile" && pokemonEnemigo == "Shaymin") {
        // agua contra fuego agua
        TotodaileHpLife = TotodaileHpLife - 15
        EnemyShayminHpLife = EnemyShayminHpLife
    }
    else if (pokemonAliado == "Totodaile" && pokemonEnemigo == "Sunflora") {
        // agua contra fuego agua
        TotodaileHpLife = TotodaileHpLife - 5
        EnemySunfloraHpLife = EnemySunfloraHpLife - 15
    }
    else if (pokemonAliado == "Totodaile" && pokemonEnemigo == "Charizard") {
        // agua contra fuego
        TotodaileHpLife = TotodaileHpLife
        EnemyCharizardHpLife = EnemyCharizardHpLife - 15
    } else if (pokemonAliado == "Totodaile" && pokemonEnemigo == "Garchomp") {
        // garchomp es fuego tierra
        TotodaileHpLife = TotodaileHpLife - 10
        EnemyGarchompHpLife = EnemyGarchompHpLife - 10
    } else if (pokemonAliado == "Garchomp" && pokemonEnemigo == "Totodaile") {
        // garchomp es fuego tierra
        EnemyTotodaileHpLife = EnemyTotodaileHpLife - 10
        GarchompHpLife = GarchompHpLife - 10
    }
    else if (pokemonAliado == "Totodaile" && pokemonEnemigo == "Kabutops") {
        // agua vs agua tierra
        TotodaileHpLife = TotodaileHpLife - 15
        EnemyKabutopsHpLife = EnemyKabutopsHpLife - 5
    }

    // charizard

    else if (pokemonAliado == "Charizard" && pokemonEnemigo == "Shaymin") {
        // fuego contra agua fuego
        CharizardHpLife = CharizardHpLife
        EnemyShayminHpLife = EnemyShayminHpLife - 15
    }
    else if (pokemonAliado == "Charizard" && pokemonEnemigo == "Sunflora") {
        // fuego contra agua fuego
        CharizardHpLife = CharizardHpLife - 15
        EnemySunfloraHpLife = EnemySunfloraHpLife - 5
    }
    else if (pokemonAliado == "Charizard" && pokemonEnemigo == "Totodaile") {
        // fuego contra agua
        CharizardHpLife = CharizardHpLife - 15
        EnemyTotodaileHpLife = EnemyTotodaileHpLife
    }
    else if (pokemonAliado == "Charizard" && pokemonEnemigo == "Garchomp") {
        // fuego contra fuego tierra
        CharizardHpLife = CharizardHpLife - 5
        EnemyGarchompHpLife = EnemyGarchompHpLife - 15
    } else if (pokemonAliado == "Charizard" && pokemonEnemigo == "Kabutops") {
        // fuego contra agua tierra
        CharizardHpLife = CharizardHpLife - 10
        EnemyKabutopsHpLife = EnemyKabutopsHpLife - 10
    } else if (pokemonAliado == "Kabutops" && pokemonEnemigo == "Charizard") {
        // fuego contra agua tierra
        EnemyCharizardHpLife = EnemyCharizardHpLife - 10
        KabutopsHpLife = KabutopsHpLife - 10
    }

    // Garchomp
    else if (pokemonAliado == "Garchomp" && pokemonEnemigo == "Shaymin") {
        // fuego tierra vs tierra
        GarchompHpLife = GarchompHpLife - 5
        EnemyShayminHpLife = EnemyShayminHpLife - 15
    }
    else if (pokemonAliado == "Garchomp" && pokemonEnemigo == "Sunflora") {
        // fuego tierra vs fuego agua
        GarchompHpLife = GarchompHpLife - 5
        EnemySunfloraHpLife = EnemySunfloraHpLife - 15
    }
    else if (pokemonAliado == "Garchomp" && pokemonEnemigo == "Charizard") {
        // fuego tierra vs fuego
        GarchompHpLife = GarchompHpLife - 15
        EnemyCharizardHpLife = EnemyCharizardHpLife - 5
    }
    else if (pokemonAliado == "Garchomp" && pokemonEnemigo == "Kabutops") {
        // fuego tierra vs agua tierra
        GarchompHpLife = GarchompHpLife - 10
        EnemyKabutopsHpLife = EnemyKabutopsHpLife - 10
    } else if (pokemonAliado == "Kabutops" && pokemonEnemigo == "Garchomp") {
        // fuego tierra vs agua tierra
        EnemyGarchompHpLife = EnemyGarchompHpLife - 10
        KabutopsHpLife = KabutopsHpLife - 10
    }

    // Kabutops

    else if (pokemonAliado == "Kabutops" && pokemonEnemigo == "Shaymin") {
        // tierra agua vs tierra
        KabutopsHpLife = KabutopsHpLife - 5
        EnemyShayminHpLife = EnemyShayminHpLife - 15
    }
    else if (pokemonAliado == "Kabutops" && pokemonEnemigo == "Totodaile") {
        // agua tierra vs  agua
        KabutopsHpLife = KabutopsHpLife - 5
        EnemyTotodaileHpLife = EnemyTotodaileHpLife - 15
    }

    //crearMensaje()
}

function aletatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascota() {

    let inputShaymin = document.getElementById("Shaymin")
    let inputSunflora = document.getElementById("Sunflora")
    let inputTotodaile = document.getElementById("Totodaile")
    let inputCharizard = document.getElementById("Charizard")
    let inputGarchomp = document.getElementById("Garchomp")
    let inputKabutops = document.getElementById("Kabutops")

    if (inputShaymin.checked) {
        pokemonAliado = "Shaymin"
    } else if (inputSunflora.checked) {
        pokemonAliado = "Sunflora"
    } else if (inputTotodaile.checked) {
        pokemonAliado = "Totodaile"
    } else if (inputCharizard.checked) {
        pokemonAliado = "Charizard"
    } else if (inputGarchomp.checked) {
        pokemonAliado = "Garchomp"
    } else if (inputKabutops.checked) {
        pokemonAliado = "Kabutops"
    } else (
        alert("Selecciona un pokemon!")
    )

    mascotaDelEnemigoRandom()
}

function ganaste() {
    if (EnemyShayminHpLife <= 0 && EnemySunfloraHpLife <= 0 && EnemyTotodaileHpLife <= 0 && EnemyCharizardHpLife <= 0 && EnemyGarchompHpLife <= 0 && EnemyKabutopsHpLife <= 0) {
        return true
    } else {
        return false
    }
}

function perdiste() {
    if (ShayminHpLife <= 0 && SunfloraHpLife <= 0 && TotodaileHpLife <= 0 && CharizardHpLife <= 0 && GarchompHpLife <= 0 && KabutopsHpLife <= 0) {
        return true
    } else {
        return false
    }
}

function mascotaDelEnemigoRandom() {
    let ataqueAleatorio = aletatorio(1, 6)


    do {
        let ataqueAleatorio = aletatorio(1, 6)
        if (ataqueAleatorio == 1 && EnemyShayminHpLife > 0) {
            pokemonEnemigo = 'Shaymin';
            break;
        } else if (ataqueAleatorio == 2 && EnemySunfloraHpLife > 0) {
            pokemonEnemigo = 'Sunflora';
            break;
        } else if (ataqueAleatorio == 3 && EnemyTotodaileHpLife > 0) {
            pokemonEnemigo = 'Totodaile';
            break;
        } else if (ataqueAleatorio == 4 && EnemyCharizardHpLife > 0) {
            pokemonEnemigo = 'Charizard';
            break;
        } else if (ataqueAleatorio == 5 && EnemyGarchompHpLife > 0) {
            pokemonEnemigo = 'Garchomp';
            break;
        } else if (ataqueAleatorio == 6 && EnemyKabutopsHpLife > 0) {
            pokemonEnemigo = 'Kabutops';
            break;
        }
    } while (EnemyShayminHpLife > 0 || EnemySunfloraHpLife > 0 || EnemyTotodaileHpLife > 0 || EnemyCharizardHpLife > 0 || EnemyGarchompHpLife > 0 || EnemyKabutopsHpLife > 0);



    // actualizarVidaJugador(pokemonAliado, pokemonEnemigo)
    combate()
    actualizarVidaJugador(pokemonAliado, pokemonEnemigo)

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


    let botonIniciar = document.getElementById("boton_restart")
    botonIniciar.addEventListener("click", reiniciarJuego)

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

function crearMensajeJugador(hpJugador, hpEnemigo, muerteaAliado, muerteEnemigo) {
    let seccionMensajes = document.getElementById('Log_de_ataques')


    if (hpJugador && hpEnemigo !== "") {

        let separador = document.createElement("p")
        separador.innerHTML = "----------------"
        seccionMensajes.appendChild(separador)

        let parrafoJugador = document.createElement("p")
        parrafoJugador.innerHTML = "Tu " + pokemonAliado + " ataco y se le redujo la vida a " + hpJugador + "!!"
        let parrafoEnemigo = document.createElement("p")
        parrafoEnemigo.innerHTML = "El " + pokemonEnemigo + " de tu enemigo ataco y se le redujo la vida a " + hpEnemigo + "!"


        if (ShayminHpLife <= 0 && SunfloraHpLife <= 0 && TotodaileHpLife <= 0 && CharizardHpLife <= 0 && GarchompHpLife <= 0 && KabutopsHpLife <= 0) {
            parrafoJugador.innerHTML = "PERDISTE! Lo Sentimos :(!"
            seccionMensajes.appendChild(parrafoJugador)

        } else if (EnemyShayminHpLife <= 0 && EnemySunfloraHpLife <= 0 && EnemyTotodaileHpLife <= 0 && EnemyCharizardHpLife <= 0 && EnemyGarchompHpLife <= 0 && EnemyKabutopsHpLife <= 0) {
            parrafoJugador.innerHTML = "GANASTE! MUY BIEN!"
            seccionMensajes.appendChild(parrafoJugador)
        }
        else {
            seccionMensajes.appendChild(parrafoJugador)
            seccionMensajes.appendChild(parrafoEnemigo)
        }
    }

    if (hpJugador == "") {
        if (muerteaAliado == "muerteAliado") {

            let separador = document.createElement("p")
            separador.innerHTML = "----------------"
            seccionMensajes.appendChild(separador)

            let muerteAliado = document.createElement("p")
            muerteAliado.innerHTML = "!!!!!!! Tu " + pokemonAliado + " se ha desmayado!!!!!!!"
            seccionMensajes.appendChild(muerteAliado)

        } else if (muerteEnemigo == "muerteEnemigo") {
            let muerteEnemigo = document.createElement("p")
            muerteEnemigo.innerHTML = "!!!!!! El " + pokemonEnemigo + " de tu enemigo se ha desmayado!!!!!!!!!"
            seccionMensajes.appendChild(muerteEnemigo)
        }

    }

}

function actualizarVidaJugador(pokemon, pokemon2) {
    let pokeText1 = pokemon + "_Hp"
    let pokeText2 = "Enemy" + pokemon2 + "_Hp"

    let PokemonHp = document.getElementById(pokeText1)
    let EnemyPokemonHp = document.getElementById(pokeText2)

    let spanVidaMascotaJugador = document.getElementById("vida_mascota_jugador")
    let spanMascotaJugador = document.getElementById("span_nombre_mascota")

    let spanMascotaEnemigo = document.getElementById('span_nombre_mascota_enemigo')
    let spanVidaMascotaEnemigo = document.getElementById("vida_mascota_enemigo")

    let hpJugador = ""
    let hpEnemigo = ""

    if (pokemon == "Shaymin") {
        if (ShayminHpLife <= 0) {
            document.getElementById(pokemon).disabled = true;
            alert("Tu " + pokemon + " Se ha desmayado! Usa otro")
            crearMensajeJugador("", "", "muerteAliado", "")
            ShayminHpLife = 0;
        }
        hpJugador = ShayminHpLife
        PokemonHp.innerHTML = ShayminHpLife + "Hp"
        spanVidaMascotaJugador.innerHTML = ShayminHpLife
    } else if (pokemon == "Sunflora") {
        if (SunfloraHpLife <= 0) {
            SunfloraHpLife = 0;
            document.getElementById(pokemon).disabled = true;
            alert("Tu " + pokemon + " Se ha desmayado! Usa otro")
            crearMensajeJugador("", "", "muerteAliado", "")
        }
        hpJugador = SunfloraHpLife
        PokemonHp.innerHTML = SunfloraHpLife + "Hp"
        spanVidaMascotaJugador.innerHTML = SunfloraHpLife

    } else if (pokemon == "Totodaile") {
        if (TotodaileHpLife <= 0) {
            TotodaileHpLife = 0;
            document.getElementById(pokemon).disabled = true;
            alert("Tu " + pokemon + " Se ha desmayado! Usa otro")
            crearMensajeJugador("", "", "muerteAliado", "")
        }
        hpJugador = TotodaileHpLife
        PokemonHp.innerHTML = TotodaileHpLife + "Hp"
        spanVidaMascotaJugador.innerHTML = TotodaileHpLife
    } else if (pokemon == "Charizard") {
        if (CharizardHpLife <= 0) {
            CharizardHpLife = 0;
            document.getElementById(pokemon).disabled = true;
            alert("Tu " + pokemon + " Se ha desmayado! Usa otro")
            crearMensajeJugador("", "", "muerteAliado", "")
        }
        hpJugador = CharizardHpLife
        PokemonHp.innerHTML = CharizardHpLife + "Hp"
        spanVidaMascotaJugador.innerHTML = CharizardHpLife
    } else if (pokemon == "Garchomp") {
        if (GarchompHpLife <= 0) {
            GarchompHpLife = 0;
            document.getElementById(pokemon).disabled = true;
            alert("Tu " + pokemon + " Se ha desmayado! Usa otro")
            crearMensajeJugador("", "", "muerteAliado", "")
        }
        hpJugador = GarchompHpLife
        PokemonHp.innerHTML = GarchompHpLife + "Hp"
        spanVidaMascotaJugador.innerHTML = GarchompHpLife
    } else if (pokemon == "Kabutops") {
        if (KabutopsHpLife <= 0) {
            KabutopsHpLife = 0;
            document.getElementById(pokemon).disabled = true;
            alert("Tu " + pokemon + " Se ha desmayado! Usa otro")
            crearMensajeJugador("", "", "muerteAliado", "")
        }
        hpJugador = KabutopsHpLife
        PokemonHp.innerHTML = KabutopsHpLife + "Hp"
        spanVidaMascotaJugador.innerHTML = KabutopsHpLife
    }
    spanMascotaJugador.innerHTML = pokemon

    if (pokemon2 == "Shaymin") {
        EnemyPokemonHp.innerHTML = EnemyShayminHpLife + "Hp"
        spanVidaMascotaEnemigo.innerHTML = EnemyShayminHpLife
        hpEnemigo = EnemyShayminHpLife
    } else if (pokemon2 == "Sunflora") {
        EnemyPokemonHp.innerHTML = EnemySunfloraHpLife + "Hp"
        spanVidaMascotaEnemigo.innerHTML = EnemySunfloraHpLife
        hpEnemigo = EnemySunfloraHpLife
    } else if (pokemon2 == "Totodaile") {
        EnemyPokemonHp.innerHTML = EnemyTotodaileHpLife + "Hp"
        spanVidaMascotaEnemigo.innerHTML = EnemyTotodaileHpLife
        hpEnemigo = EnemyTotodaileHpLife
    } else if (pokemon2 == "Charizard") {
        EnemyPokemonHp.innerHTML = EnemyCharizardHpLife + "Hp"
        spanVidaMascotaEnemigo.innerHTML = EnemyCharizardHpLife
        hpEnemigo = EnemyCharizardHpLife
    } else if (pokemon2 == "Garchomp") {
        EnemyPokemonHp.innerHTML = EnemyGarchompHpLife + "Hp"
        spanVidaMascotaEnemigo.innerHTML = EnemyGarchompHpLife
        hpEnemigo = EnemyGarchompHpLife
    } else if (pokemon2 == "Kabutops") {
        EnemyPokemonHp.innerHTML = EnemyKabutopsHpLife + "Hp"
        spanVidaMascotaEnemigo.innerHTML = EnemyKabutopsHpLife
        hpEnemigo = EnemyKabutopsHpLife
    }
    spanMascotaEnemigo.innerHTML = pokemon2

    crearMensajeJugador(hpJugador, hpEnemigo)

    let botonMascota = document.getElementById("boton_seleccionar_mascota");

    if (ganaste()) {
        botonMascota.disabled = true
        return alert("GANASTE!!! Eres un campeon pokemon");
    } else if (perdiste()) {
        botonMascota.disabled = true
        return alert("Te has desmayado! PERDISTEEE! :(");
    }
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)