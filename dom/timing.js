// ======= setTimeout() =======//
function saludo(){

    alert("Hola Mundo")
}

/*document.getElementById("iniciar").addEventListener("click", function(){
    setTimeout(saludo, 3000);
})*/

// ======= setInterval() =======//

var intervalo = setInterval(saludo, 3000)
document.getElementById("detener").addEventListener("click", function(){
    clearInterval(intervalo);
})