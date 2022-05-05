//Todo en JS son objetos menos los primitivos

// Todos los primitivos son pasados por valor y los objetos por referncia

//Primitivos
let nombre = 'Cris';
console.log( nombre );

nombre = 'Cristian';
console.log( nombre );



let esMarvel = true;
console.log( typeof  esMarvel );

let edad = 20;
console.log( typeof edad );

edad = 33.001
console.log( typeof edad );

let superPoder;
console.log( typeof superPoder );


// El tipo de dato null es un primitivo, aunque el navegador lo lea como objeto
let soyNull = null;
console.log( typeof soyNull );

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );
console.log( typeof symbol2 );


console.log( symbol1 === symbol2 );






