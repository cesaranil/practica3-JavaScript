var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

function validar(e){
    //Validación de Nombre
    if(nombre.value > 12){
        alert('No Puedes Ingresar mas de 12 caracateres');
    }else if(nombre.value == ""){
        alert('Debes de ingresar un nombre por favor');
    }

    //Validación de los radio button
    if(sexo[0].checked == false && sexo[1].checked == false){
        alert('Por Favor selecciona tu Sexo');
    }

    //validación de los terminos y condiciones
    if(!terminos.checked){
        alert('Por favor debes aceptar los terminos y condiciones');
    }

    //Evita que se envie el formulario
    e.preventDefault();
}

formulario.addEventListener('submit', validar);