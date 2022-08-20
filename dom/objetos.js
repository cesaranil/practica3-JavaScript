/*var cesar = {
    nombre: 'Cesar Orellana',
    edad: 27,
    pais: 'Venezuela',
    bio:function(){
        return this.nombre + ' Tiene ' + this.edad + ' años y es de ' + this.pais
    }
}

document.write(cesar.bio())*/

// ======= Constructor de objetos =======//
function persona(nombre, edad, pais){
    this.nombre = nombre
    this.edad = edad
    this.pais = pais
}

var amiga = new persona('Usirumani', 26, 'Venezuela') 
var amiga2 = new persona('Osmely', 26, 'Venezuela') 

document.write(amiga.nombre)
document.write('<br>')
document.write(amiga2.nombre)
