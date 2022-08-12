// Las variables pueden ser de 2 tipos: Globales y locales

// Variable Local
/*function saludo(){
    var texto = "Hola Mundo";
    document.write(texto);
}

saludo();*/

//Variables con funciones anidadas
/*function nombre(){
    var texto = "Hola Mundo";
    function mensaje(){
        document.write(texto);
    }
    mensaje();
}
nombre();*/

// VARIABLES GLOBALES
/*var texto = "Hola mundo";

function saludo(){
    document.write(texto);
}
saludo();*/

//IMPORTANTE = variables dentro de una función que pueden ser globares
function saludo(){
    mensaje = "Hola mundo"
}
saludo();
document.write(mensaje);