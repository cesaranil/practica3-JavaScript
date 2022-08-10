// Permiten alterar los comportamientos del Ciclo

//BREAK
/*var amigos = ['Usirumani', 'Osmely', 'MariaCeleste', 'Andrea'];
for(amigo in amigos){
    document.write(amigos[amigo] + '<br>');

    if(amigos[amigo] == 'Osmely'){
        break;
    }
}*/

// CONTINUE

var amigos = ['Usirumani', 'Osmely', 'MariaCeleste', 'Andrea'];
for(amigo in amigos){
    if(amigos[amigo] == 'Osmely'){
        continue;
    }
    document.write(amigos[amigo] + '<br>');
    
}
