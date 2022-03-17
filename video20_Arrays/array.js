let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifono", cost: 1700}
];

//Metodo .find()
let encuentraArticulo = articulos.find(
    function(articulo){
        return articulo.nombre === "Tv";
    }
);
console.log(encuentraArticulo);

//Metodo .forEach
articulos.forEach(
    function(articulo){
        console.log(articulo.nombre);
    }
);

//Metodo .Some(): solo nos devuelve true o false
var articulosBaratos = articulos.some(
    function(articulo){
        return articulo.costo <= 700;
    }
);

console.log(articulosBaratos);

