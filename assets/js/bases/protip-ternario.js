const elMayor = (a, b)  => (a > b) ? a : b;
const tieneMembresia  = (miembro)=>(miembro) ? '2 Dolares' : '10 Dolares';

console.log( elMayor(20, 15));
console.log( tieneMembresia(false));

const amigo = false;

const amigoArr = [

    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
];
console.log(amigoArr);

const nota = 95;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({nota, grado});
