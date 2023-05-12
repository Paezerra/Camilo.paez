  // usando functions

  let piedra = 1;
  let papel = 2;
  let tijera = 3;
  let Seleccion_jugador = "";

  function aletatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //   let min = 1;
  //   let max = 3;

  //Declaramos el numero de juegos
  let juegos_por_jugar = prompt(
    "Cuantos juegos quieres jugar? (escoge un numero!)"
  );

  let marcador_pc = 0;
  let marcador_usuario = 0;

  // ciclo de juego

  while (juegos_por_jugar > 0) {
    let Seleccion_pc = aletatorio(1, 3);
    jugador = prompt("Piedra, papel o tijera?");

    // Aca miramos que prompt esocgio el usuario;

    if (jugador == "piedra") {
      Seleccion_jugador = piedra;
      alert("Escogiste piedra");
    } else if (jugador == "papel") {
      Seleccion_jugador = papel;
      alert("Escogiste papel");
    } else if (jugador == "tijera") {
      Seleccion_jugador = tijera;
      alert("Escogiste tijera");
    } else {
      alert("No elegiste una opcion valida!");
    }
    // Aca preguntamos si es un papel, tijera o piedra y damos una alerta de la seleccion

    if (Seleccion_pc == piedra) {
      alert("El pc escogio piedra");
    } else if (Seleccion_pc == papel) {
      alert("El pc esocgio papel");
    } else {
      alert("El pc esogio tijeras");
    }

    // Aca hacemos la comprobacion de quien gano contra quien

    if (Seleccion_jugador == Seleccion_pc) {
      alert("Empataste con el pc");
    } else if ((Seleccion_jugador == piedra) & (Seleccion_pc == tijera)) {
      alert("Ganaste! 🫶");
      marcador_usuario +=1;
    } else if ((Seleccion_jugador == papel) & (Seleccion_pc == piedra)) {
      alert("Ganaste! 🫶");
      marcador_usuario +=1;
    } else if ((Seleccion_jugador == tijera) & (Seleccion_pc == papel)) {
      alert("Ganaste! 🫶");
      marcador_usuario +=1;
    } else {
      alert("Perdiste 🙀");
      marcador_pc +=1;
    }

    // aca hacemos la reduccion de ciclos

    juegos_por_jugar = juegos_por_jugar - 1;
  }

  alert(
    "El marcador del juego fue " +
      "Pc = " +
      marcador_pc +
      " Tu = " +
      marcador_usuario
  );