let estudiantes = ["María", "Sara", "Sergio", "Andres"];

function saludarEstudiantes(estudiante){
   console.log(`Hola, ${estudiante}`);
}

//loop for
for(let i = 0; i < estudiantes.length;i++ ){
     saludarEstudiantes(estudiantes[i]);
}

//loop for..of
for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

saludarEstudiantes(estudiantes);//el argumento es el array. una prueba