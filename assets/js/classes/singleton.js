/** Patron de diseño - Singleton
 *      -Cuando hablamos de singleton, significa que solo tendresmos una unica instancia para todo
 *      -Nos sirve para que tener una unica instancia
 *      siempre devuelva la misma instancia, sin importar cuantas veces instanciemos
*/

class Singleton{
    
    /** Instancia inicialisada de esta clase, cuando se intente inicializar y si ya esta inicializada regresara ese valor */
    static instancia; //Undefined
    nombre = '';

    constructor(nombre =  ''){

        // !! = false
        /** Si ya existe una instancia , retorne la instancia que se instancio primero  */
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        console.log(Singleton.instancia);


        /** Si la instancia no existe se asigna de la siguente manera */
        /** El this hace referenncia a la instancia de la clase */
        Singleton.instancia  = this;
        this.nombre = nombre;
        return this;
    }


}

const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Batman');
const instancia3 = new Singleton('SuperMan');

console.log(`Nombre de la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre de la instancia 2 es: ${instancia3.nombre}`);