let edad = 18;

if (edad === 18) {
    console.log("Podrás votar por primera vez");
}else if( edad > 18){
    console.log("Podrás votar");
}else{
    console.log("Eres menor de edad, ya no puedes votar");
}

//Operador ternario: condition ? true : false;
let numero = 1;
let resultado = numero === 1 ? "El valor es 1" : "El valor no es uno";
console.log(resultado);