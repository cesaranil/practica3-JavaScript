/* ESTRUCTURA DE UN FOR
for(inicio, condicion, actualizacion){
    //codigo
}
*/

// Ciclo del 1 al 10
/*for (var i= 0; i < 10; i++ ) {
    document.write(i);
    document.write('<br >');   
}*/

//Ciclo del 10 al 1
/*for (var i = 9; i >= 0; i--) {
    document.write(i);
    document.write('<br>');   
}*/

//Ejemplo recorriendo un arreglo

var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto',
            'Septiembre','Octubre','Noviembre','Diciembre'];

/*            for(var i = 0; i < meses.length; i++){
                document.write(i+1 + ') ' + meses[i]);
                document.write('<br>');
            }*/

            for (mes in meses) {
                document.write(meses[mes]);
                document.write('<br>');
            }
