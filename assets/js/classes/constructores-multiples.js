/** Protip para simular tener multiples constructores */
class Persona{


    /** Metodo statico que devulve una nueva instancia de persona utilizando el constructor */
    static PorObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;
    }

    getInfo(){
        console.log(`Info: ${ this.nombre}, ${this.apellido}, ${this.pais}`);

    }
}

const nombre1   = "Cristian",
      apellido1 = "Soto",
      pais1     = "Colombia";


const david = {
    nombre:     'david',
    apellido:   'Cossio',
    pais:       'Mexico'
} 

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 =  Persona.PorObjeto(david);

persona1.getInfo();
persona2.getInfo();



