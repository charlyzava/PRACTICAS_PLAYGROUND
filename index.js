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

/*function palabraMasLarga(oracion){
    let palabra ="";
    let palabraLarga ="";
    for ( i=0 ; i < oracion.length ; i++ ){

        if (oracion[i] == " " ){
            if (palabra.length >= palabraLarga.length){
                palabraLarga = palabra;
            }
            palabra="";
        } else {
            palabra=palabra + oracion[i];
        }
        
    }
    if (palabra.length >= palabraLarga.length){
        palabraLarga = palabra;
    }
    return palabraLarga;
}*/
/* *******************************************************************************************************
Éste es el ejercicio resuelto, pero no contempla la última palabra si la frase con finaliza con un espacio
**********************************************************************************************************
function PalabraMásLarga(oración) {
    //Obtengo el largo de la oración para poder recorrerla
    const largo = oración.length;
    //Inicializo la variable que contendrá la palabra
    // más larga
    let palabraMásLarga = "";
    //Inicializo la variable que contendrá la palabra
    // que voy leyendo
    let palabraActual = "";
    //Ciclo para recorrer cada posición de la oración
    // i va de 0 a el largo-1
    for (let i = 0; i < largo; i++) {
    //Obtengo el caracter en la posición i del texto
    const caracter = oración[i];
    //Si el caracter es un espacio
    if (caracter == " ") {
    if (palabraActual.length >= palabraMásLarga.length) {
    palabraMásLarga = palabraActual;
    }
    //Reinicio la palabra
    palabraActual = "";
    } else {
    //Agrego el caracter a palabra ya que es
    // parte de la palabra
    palabraActual += caracter;
    }
    }
    //Devuelvo la palabra más larga
    return palabraMásLarga;
    }*/
console.log(palabraMasLarga("Hay que disfrutar la vida y ser felizzzzzz!"));
console.log("Prueba Git en linea");