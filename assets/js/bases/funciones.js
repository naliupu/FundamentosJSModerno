
//Las funciones de flecha son mas eficicentes que las funciones tradicionaless

//Las funciones siempre retornan , en caso de no agg el return retornaria undefined
function saludar(){
    console.log('Hola mundo');
}
const saludarDos = function(){
    console.log('Hola mundo 2 ');
}

function saludar3( nombre ){
    console.log('Hola ' + nombre);
}

const  saludarFunctionFlecha = () =>{
    console.log('Hola Flecha');
}

const  saludarFunctionFlecha2 = (nombre) =>{
    console.log('Hola Flecha ' + nombre);
}

saludar();
saludarDos();
saludar3('Cristian');
saludarFunctionFlecha();
saludarFunctionFlecha2('Cristian2');

const retornoSaludar = saludar3('cristianD');
console.log('Retorno: ', retornoSaludar);

function sumar1(a, b){
    return a + b;
}
// Funcion flecha resumido
const sumar2 = (a, b)=> a + b;

console.log( 'Resultado suma1: ' + sumar1(1 , 2) );
console.log( 'Resultado suma2: ' + sumar2(5 , 5) );


// Numero aleatorio

function getNumRandom(){
    return Math.random();
}

const getNumRandom2 = () => Math.random();

console.log(getNumRandom()  );
console.log(getNumRandom2()  );