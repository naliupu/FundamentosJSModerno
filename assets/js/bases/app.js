// console.log('Hola Mundo');

let a = 10,
    b = 11, 
    c = 12
    x = a + b;

const saludo  =  "¿Hola como estas?"

// Agregar CSS al console.log
console.log('%c Mis variables ', 'color:blue; font-weight:bold');

console.log('LET a', a);// Para monstrar lo que hay dentor
console.warn('Warning b', b);// Para monstrar un warning
console.error('Error a',c);// Para monstrar un error
console.info(x);//->Para monstrar informacion

// Una fomra mas facil de monstrar el nombre de la variable, constante ETC
console.warn({b});// Para monstrar un warning
console.error({c});// Para monstrar un error
console.info({x});// Para monstrar informacion

// Imprimir varias variables 
console.log(a, b);

console.log('%c Tabla de variables ', 'color:green; font-weight:bold');
console.table({a, b, c, x});

var miNombreUno = "Cristian";
let miNombreDos = "David";