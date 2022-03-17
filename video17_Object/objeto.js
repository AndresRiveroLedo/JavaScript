var miAuto = {
    marca : "Toyota",
    modelo: "Corolla",
    anio: 2020,
    //metodo de objeto
    detalleDeAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
};

console.log(miAuto);
console.log(miAuto.anio)
console.log(miAuto.detalleDeAuto());