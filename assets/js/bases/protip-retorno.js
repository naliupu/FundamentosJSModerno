    // Forma 1 
// function crearPerson(nombre, apellido){
//     return{
//         nombre: nombre,
//         apellido: apellido
//     }
// }

    // Forma 2
// function crearPerson(nombre, apellido){
//     return{
//         nombre,
//         apellido
//     }
// }

    // Forma 3
const crearPerson= (nombre, apellido) =>({ nombre, apellido });

const person = crearPerson('Cristian', 'Cossio');
console.log(person);



//Funcion clasica
function imprimeArgumentos(){
    console.log( arguments);
}

//Funcion flecha se le debe pasar un argumento en los parametros de la funcion, ya que la function flecha no los entiende
//y por ultimo pasarle ... antes del argumento, ya que si no se lo pasamos solo incuentra el primer parametro


// ... rest =  cuando se pone como argumento despues de los (... persona) = une todos los argumentos en una sola variable 
// y transfomr acomo un arreglo

// ... spread = cuando se pone en otro lugar diferente a argumentos , se llama como operador spread y 
// rompe  las referencia en JS , y poder apuntar en diferentes espacios en memoria

imprimeArgumentos2 = ( args ) => console.log(args);
imprimeArgumentos3 = ( ...args ) => {return args};


imprimeArgumentos(20, 'Cristian', 'Cossio', 1.00), true;
imprimeArgumentos2(20, 'Cristian', 'Cossio', 1.00), true;
const [casado, vivo, nombre, saludo] = imprimeArgumentos3(20, 'Cristian', 'Cossio', 1.00, true);
console.log({ casado, vivo, nombre, saludo });



const {apellido: newApellido} = crearPerson('david', 'soto');
console.log(newApellido);



let personaje = {
    nombre: 'Berlin',
    // apellido: 'B',
    codeName:'Casas de papel 1',
    vivo:false,
    edad:40,

}

const imprimirPropiedadesPersonaje = ({nombre, codeName, vivo, edad, apellido = 'NaN'}) =>{ 

    //Pasarle el valor a 0 si no esta declarada esa varible
    // apellido = apellido || 0;

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({apellido});
}

imprimirPropiedadesPersonaje(personaje);