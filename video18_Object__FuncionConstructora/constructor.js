function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

let miAuto = new auto("Nissan", "Juke", 2021);
let autoNuevo = new auto("Tesla", "Model 3", 2020);
let autoNuevo2 = new auto("Tesla", "Model X", 2021);
console.log(miAuto);
console.log(autoNuevo);
console.log(autoNuevo2);