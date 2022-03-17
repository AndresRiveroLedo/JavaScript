let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifono", cost: 1700}
];

//Metodo Filter
let articulosFiltrados = articulos.filter(
    function(articulo){
        return articulo.costo <= 500;
    }

);

console.log(articulosFiltrados);

//Metodo Map
let nombreArticulos = articulos.map(
    function(articulo){
        return articulo.nombre;
    }
);
console.log();
console.log(nombreArticulos);