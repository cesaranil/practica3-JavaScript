//var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');

var caja1 = document.getElementById('primeracaja');
caja1.textContent = "Soy la Caja 1";

//cajas[0].textContent = 'Hola Mundo';
//cajas[1].innerHTML = '<h1>Prueba</h1>';

//==== Creando Nodos =====//
var caja = document.createElement('div');
var contendio = document.createTextNode('Hola Mundo');
caja.appendChild(contendio);
caja.setAttribute('class', 'caja naranja');

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

 