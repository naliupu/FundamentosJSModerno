
//Asi se definia antes , (navegadores viejos)
const cristian = {
    nombre: 'Cristian',
    edad: 20,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} - edad: ${ this.edad}`);
    }
}
const david = {
    nombre: 'David',
    edad: 20
}

// cristian.imprimir();


// ----------------------------

// Mejor manera de trabajar

function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
     this.nombre = nombre;
     this.edad = edad;

     this.imprimir = function(){
         console.log(`Nombre: ${this.nombre}- Edad: ${this.edad}`);

     }


}

const maria = new Persona('Maria', 30);
console.log(maria);
maria.imprimir();
