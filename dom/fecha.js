function mostrarTiempo(){
    var fecha = new Date();
    var parrafo = document.getElementById('fecha')
    parrafo.innerHTML = fecha
}

var intervalo = setInterval(mostrarTiempo, 1000)