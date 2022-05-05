//OBJETO
//Podemos definirla en const, si lo que buscamos es : que no se redefina el objeto, pero podremos modificar las propiedades del objeto
let personaje = {
    nombre: 'Berlin',
    codeName:'Casas de papel 1',
    vivo:false,
    edad:40,
    coords:{
        lat: 34.080,
        lng: -1128.32
    },
    trajes: ['jumpsuit Rojo', 'traje de gala'],
    direccion:{
        zip: '8787 - 9889',
        direccion:'España, Madrid',
    }, 
    'Ultima-pelicula':'Casa de papel 2'
}

console.log('Personaje: ' , personaje);
console.log('Nombre Personaje: ' , personaje.nombre);
console.log('Nombre Personaje: ' , personaje['nombre']);//Otra forma de buscar el valor

console.log(personaje.trajes[0]);
console.log(personaje.direccion.zip);

console.log('N° trajes personaje: ', personaje.trajes.length);
console.log('Ultimo traje personaje: ', personaje.trajes[personaje.trajes.length - 1]);

const x  = 'vivo';
console.log('Vivo: ', personaje[x])

console.log(personaje["Ultima-pelicula"]);

//MAS

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);
console.table(entriesPares);

//Bloquear propiedades del obejeto directo, para no poder modificarla , pero no bloqueara los objetos dentro del objeto
//Object.freeze: bloquea las propiedades del objeto principal, mas no las de adentro de ese objeto principal, para bloquear objetos 
// secundarios tocaria pasarlo por el object.freeze
Object.freeze(personaje);

personaje.dinero = 1.000;
personaje.direccion.ubicacion = "Costa Rica"
console.log(personaje);


// Obtener nombre de propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);