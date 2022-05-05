class Persona {

    /** Orden de como se debe definir todo dentro de la clase(propiedades, metodos ETC):
     * 
     *      Propiedades y metodos estaticos
     *      Propiedades de la clase
     *      Constructor
     *      Set y get
     *      Metodos
     * */

    /** Estaticos:
     * 
     *      Las propiedades, GETS  y metodos esaticos:
     *      Nos permiten utilizar los metodos y propiedades de la clase, sin necesidad de instanciar la clase 
     *      Las propiedades, gets y metodos estaticos los definimos con la palabra reservada 'static'
     *      En las propiedades staticas , no se puede hacer referencia a las propiedades de la clase, puede sacar error o monstra el valro como undefined
     */

    /** Propiedades estaticas  */
    static _conteo = 0;

    /** Get estatico */
    static get conteo() {
        return ' instancias: ' + Persona._conteo;
    }

    /** Metodos estatico */
    static mensaje() {
        console.log('Hola a todos soy un metodo estatico!');
    }

    /** Propiedades de clases */
    _nombre = '';
    _cedula = '';
    _saludo = '';
    _comida = '';

    /** Constructor es el unico metodo que  retorna sin tener la necesidad de agregarle la palabra reservada return() */
    constructor(nombre = 'Sin nombre', cedula = 'Sin cedula', saludo = 'Sin frase') {
        console.log('Hola!');
        this._nombre = nombre;
        this._cedula = cedula;
        this._saludo = saludo;

        /** Utilizamos la propiedad estatica de conteo */
        Persona._conteo++;
    }

    /** 
     * SET:
     * 
     *      Nos sirve para controlar la propiedad, estableciendole un valor.
     *      El set solo deberia recivir un argumento.
     *      No debe tener el mismo nombre de la propiedad de la clase, por eso se le pone un '_', para que este diferente. */
    set setComidaFavorita(comida) {
        this._comida = comida;
    }

    /**
     * GET:
     * 
     *      Nos sirve para obtener un valor.
     *      Siempre en el GET es recomendable return algo.
     */
    get getComidaFavorita() {
        return `La comida favorita de ${this._nombre} es : ${this._comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this._nombre}, mi cedula es: ${this._cedula}`);
    }

    saludoPersona() {
        this.quienSoy();
        console.log(`${this._nombre} dice: ${this._saludo}`);
    }
}

const cristian = new Persona('cristian', 88769, 'hola');
const david = new Persona('David', 10000, 'como estas?');
// console.log(cristian);
// console.log(david);

// cristian.quienSoy();
// david.quienSoy();
cristian.saludoPersona();
david.saludoPersona();

cristian.setComidaFavorita = 'Los frijoles es la comida favorita';
cristian.getComidaFavorita = 'Los frijoles es la comida favorita';

// console.log(cristian);
// console.log(cristian.getComidaFavorita);

console.log('Conteo staico', Persona._conteo);
console.log(Persona._conteo);
Persona.mensaje();