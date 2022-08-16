/*function saludo(){
    alert('Hola');
}

function saludo2(){
    alert('Hola2');
}

var btnSaludar = document.getElementById('btn-saludar');
btnSaludar.addEventListener('click', saludo);
btnSaludar.addEventListener('click', saludo2);

// Sirve para eliminar algun evento
btnSaludar.removeEventListener('click', saludo);*/

//=====================================================================================//

function crearCaja(){
    var contenedor = document.getElementById('contenedor');
    var caja = document.createElement('div');
    caja.className = 'caja';
    contenedor.appendChild(caja);
}

var btnCaja = document.getElementById('caja');
btnCaja.addEventListener('click', crearCaja);