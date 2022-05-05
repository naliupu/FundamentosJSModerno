let juegos = ['GTA', 'FIFA21', 'PES2021', 'FreeFire', 'PES2021', 'PUGB'];

console.log('Largo: ', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let aggNewPlay = juegos.push( 'Forza Horizon' );
console.log({ aggNewPlay , juegos});


aggNewPlay = juegos.unshift( 'Clash Royale' );
console.log({ aggNewPlay , juegos});

let playDelete = juegos.pop();
console.log({ playDelete, juegos});

let pos = 1;
let playDeletePlays = juegos.splice(pos, 2);
console.log({playDeletePlays, juegos});

let GTAIndex = juegos.indexOf('PES2021');
console.log({GTAIndex, juegos});

let GTAIndex2 = juegos.lastIndexOf('PES2021');
console.log({GTAIndex2, juegos});