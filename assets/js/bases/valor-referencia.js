
// Cuando trabajamos con prmitivos, cualquier asignacion, se esta realizando por valor, es decir:
// si transformamos el valor de la variable o la asignamos a otra cosa, no se afecta el mismo lugar en memoria


// Cuando se pasa por referencia , se ocupada el mismo lugar en memoria , por lo tanto queda con el mismo valor las variables

// Objetos : pasan por referencia
// Primitivos pasan por valor

let a  =  10;
let b = a;
a = 30;

console.log({ a, b});

// ... rest =  cuando se pone como argumento despues de los (... persona) = une todos los argumentos en una sola variable 
// y transfomr acomo un arreglo

// ... spread = cuando se pone en otro lugar diferente a argumentos , se llama como operador spread y 
// rompe  las referencia en JS , y poder apuntar en diferentes espacios en memoria


let juan  = { nombre: 'Juan'};
let ana  = { ...juan};// SPREAD : los ... sirve para romper la referencia que hay de cuando se pasa pro referencia
ana.nombre = 'Ana';

console.log(juan, ana);


const cambiarNombre = (persona) =>{
    persona.nombre =  'Tony';
    return persona;
}

let peter = { nombre: 'peter'};
let tony =  cambiarNombre(peter);

console.log({peter, tony});


//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');//Para mirar los tiempos
const otrasFrutas = frutas.slice();
// const otrasFrutas = frutas;
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas})

