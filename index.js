//*****************************************************************************/
//                        Alfabetización Digital III
//*****************************************************************************/


/*function invertirPalabra(palabra){
    nuevaPalabra = "";
    for (i=palabra.length - 1; i != -1 ; ) {
        nuevaPalabra=nuevaPalabra + palabra[i];
        i--;
    }
    return nuevaPalabra;
}
console.log(invertirPalabra("Mi Zapallo es grande"));*/
/*
function primeraPalabra(oracion){
    let primeraPalabra = "";
    for (i=0; i < oracion.length; i++){
        if(oracion[i]===" "){
            return primeraPalabra + 5;
        }
        primeraPalabra+=oracion[i];
    }
}
console.log(primeraPalabra("La vida pasa rápido, disfrútala"));*/

//Funciónn que fallaba en devolver la última palabra
/*function ultimaPalabra(oracion){
    let palabra = "";
    let array = [];
    for (i=0; i < oracion.length; i++){
        if (oracion[i]===" "){
           array.push(palabra);
            palabra="";
        } else {
        palabra +=oracion[i];
        }
    }
    array.push(palabra);
    //return palabra;
    return array[array.length -1];
}*/

/*
function ultimaPalabra(oracion){
    let array = oracion.split(" ");
    return array[array.length -1];
}*/
//console.log(ultimaPalabra("Hay que ser feliz y disfrutar la vida!"));
/*
function listaDePalabras(oracion){
    let lista = '["';
    for ( i=0; i < oracion.length; i++){
        if (oracion[i]===" "){
            lista+= '","';
        } else {
            lista+=oracion[i];
        }
        
    }
    return lista;
}
console.log(listaDePalabras("Hay que disfrutar la vida y ser feliz!"));*/
//Palabra Mâs Larga
