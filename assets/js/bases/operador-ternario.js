// dia de semana abrimos a las 11,
// fines de semana a las 9
//Entra a un sitio web a ver si esta abierto hoy
const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

// if(dia === 0 || dia === 6){
// if( [0,6].includes(dia)){
//     console.log('fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia en semana');
//     horaApertura = 11;
// }

// Operador ternario
horaApertura =([0,6].includes(dia)) ? 9 :11;

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje=`Esta cerrado, hoy abrimos a las: ${ horaApertura }`
// }

mensaje = horaActual >= horaApertura ? mensaje  = 'Esta abierto' : mensaje=`Esta cerrado, hoy abrimos a las: ${ horaApertura }`


console.log(horaApertura, mensaje);
