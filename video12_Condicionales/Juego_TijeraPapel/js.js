let btn_piedra = document.getElementById("piedra");
let btn_papel = document.getElementById("papel");
let btn_tijera = document.getElementById("tijeras");
let btn_iniciar = document.getElementById("iniciar_juego");
let img_usuario = document.getElementById("usuario");
let img_cpu = document.getElementById("cpu");
let marcador_usuario = document.getElementById("puntos_usuario").innerText;
let marcador_cpu = document.getElementById("puntos_cpu").innerText;


let menu = "espera";
let opcion_jugador;
let opcion_cpu;

init_imagenes();

btn_iniciar.onclick = function(){
    menu = "inicio";
    console.log(opcion_jugador);
    opcion_cpu = num_aleatorio();
    display_opcion_cpu(opcion_cpu);
   
    if(opcion_jugador < 3){
        game(opcion_jugador, opcion_cpu);
    }else {
        alert("Selecciona una opcion");
    }
    
}

btn_piedra.onclick = function(){
    opcion_jugador = 0;
    img_usuario.src = "./img/Piedra.png"; //dibuja la imagen piedra(en este caso) sobre el icono usuario.
}

btn_papel.onclick = function(){
    opcion_jugador = 1;
    img_usuario.src = "./img/Papel.png"; //dibuja la imagen papel(en este caso) sobre el icono usuario.
}

btn_tijera.onclick = function(){
    opcion_jugador = 2;
    img_usuario.src = "./img/Tijeras.png"; //dibuja la imagen tijeras(en este caso) sobre el icono usuario.
}

switch(menu){
    case "espera":
        console.log("Esperando...");
        break;
    case "inicio":
        console.log("Iniciando juego");
        break;
}

function init_imagenes(){
    btn_piedra.style.backgroundImage = "url('./img/Piedra.png')";
    btn_papel.style.backgroundImage = "url('./img/Papel.png')";
    btn_tijera.style.backgroundImage = "url('./img/Tijeras.png')";
}

function num_aleatorio(){
    return parseInt(Math.random()*3);
}

function game(opcion_jugador, opcion_cpu){

    let escenario_1;
    let escenario_2;
    let escenario_3;
    let empate;
    
    if(opcion_jugador === opcion_cpu){
        empate = true;
    }else if(opcion_jugador === 0 && opcion_cpu === 2){
        escenario_1 = true;
    }else if(opcion_jugador === 1 && opcion_cpu === 0){
        escenario_2 = true;
    }else if(opcion_jugador === 2 && opcion === 1){
        escenario_3 = true;
    }

    if(escenario_1 || escenario_2 || escenario_3){
        alert("usuario gana");
        marcador_usuario++;
        document.getElementById("puntos_usuario").innerText = marcador_usuario;
    
    }else if(empate){
        alert("empate");
    
    }else {
        alert("CPU gana");
        marcador_cpu++;
        document.getElementById("puntos_cpu").innerText = marcador_cpu;
    }
}

//funcion que sustituye el icon_cpu por "piedra, papel o tijeras"
function display_opcion_cpu(opcion){

    if(opcion === 0){
        img_cpu.src = "./img/Piedra.png";
    }else if(opcion === 1){
        img_cpu.src = "./img/Papel.png";
    }else{
        img_cpu.src ="./img/Tijeras.png"
    }
}