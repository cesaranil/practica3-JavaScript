var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');

var caja1 = document.getElementById('primeracaja');
caja1.textContent = "Soy la Caja 1";

//cajas[0].textContent = 'Hola Mundo';
//cajas[1].innerHTML = '<h1>Prueba</h1>';

//==== Creando Nodos =====//
var caja = document.createElement('div');
var contendio = document.createTextNode('Hola Mundo');
caja.appendChild(contendio);
//caja.setAttribute('class', 'caja naranja');

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//==== Modificando la Clase o id de un elemento =====//

 //otra forma de modificar el id y la clase
 caja.id = 'primera';
 caja.className = 'caja naranja';

 // === Conociendo el elemnto padre === //
 var padre = cajas[0].parentNode;
 //padre.insertBefore(caja, caja1);

 padre.replaceChild(caja, cajas[1]);

 //como eliminar nodos
 padre.removeChild(cajas[3]);

 