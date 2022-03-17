let frutas = ["Manzana", "Mango", "Platano", "Cerezas", "Fresas"];

console.log(frutas);
console.log("Cuantos elementos tiene: %s elementos",frutas.length);
console.log(frutas[0]);

//metodos de un array
frutas.push("Uvas"); //agregamos un elemento al array.
console.log(frutas);

frutas.pop();//eliminamos el ultimo elemento al array.
console.log(frutas);

frutas.unshift("guayaba"); //añadimos un elementos al inicio del Arrays 
console.log(frutas);

frutas.shift(); //borramos el primer elemento de la lista
console.log(frutas);

console.log(frutas.indexOf("Mango")); //para saber la posicion de un elemento

frutas.forEach(function(elemento, indice, array){
        console.log(elemento, indice);
})

frutas.splice(1, 3);
console.log(frutas);
