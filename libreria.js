const coleccion =[{
    "nombre": "El Libro Troll" ,
    "paginas": 192 ,
    "autor": "ElRubius" ,  
    "genero": ["Humor", "Comedia" ],
    "disponible": true 
}, 
{
    "nombre": "Los Secretos de Youtube" ,
    "paginas": 192 ,
    "autor": "David Canovas (TheGrefg)" ,  
    "genero": ["biogrefia", "autobiografia" ],
    "disponible": true 

}

]
function informacionlibros(Libro){
    console.log("nombre:", coleccion.nombre);
    console.log("paginas:",coleccion.paginas);
    console.log("autor:",coleccion.autor);
    console.log("genero:", coleccion.genero);
    console.log("disponible", coleccion.disponible);
}

function imprimirlibros(arreglolibros){
    for(let i = 0; i < arreglolibros.length; i++){
        const libro = arreglolibros[i]
        informacionlibros(libro)
    }
}
 imprimirlibros(coleccion);


