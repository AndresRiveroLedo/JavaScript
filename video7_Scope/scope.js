var miNombre = "Diego";

function nombre(){
    var miApellido = "De Granda"
    console.log(miNombre+" "+miApellido); //Scope correcto: var miNombre es global
}

console.log(miNombre+" "+miApellido);//Scope incorrecto var miApellido es de scope local
