class Persona {

   
    static _conteo = 0;

    static get conteo() {
        return ' instancias: ' + Persona._conteo;
    }

    static mensaje() {
        console.log('Hola a todos soy un metodo estatico!');
    }

    _nombre = '';
    _cedula = '';
    _saludo = '';
    _comida = '';

    constructor(nombre = 'Sin nombre', cedula = 'Sin cedula', saludo = 'Sin frase') {
        console.log('Hola!');
        this._nombre = nombre;
        this._cedula = cedula;
        this._saludo = saludo;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this._comida = comida;
    }

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

/**
 * Herencia = Extender clase
 *      
 *      -La herencia nos permite utilizar las propiedades de la clase, de la cual extendimos.
 * 
 *      -Para extender lo hacemos con la palabra extends.
 * 
 *      -Al extender una clase y al querer crear un constructor, siempre debemos llamar al constructor 
 *      de la clase de cual estamos extendiendo , con la palabra 'super();', al realizar esto , podremos utilizar los arguymentos 
 *      que esta reciviendo el constructor de la clase extendida.
 * 
 *      -Si tenemos un metodo con el mismo nombre de la clase extendida , y no lo queremos sobrescribir ,
 *      le agregamos la palabra 'super.nombre del metodo de la clase extendida'
 */
class Heroe extends Persona{
    _clan = 'sin clan'

    constructor(nombre, cedula, saludo){
        super(nombre, cedula, saludo);
        this._clan = 'DC fills'
    }

    quienSoy(){
        console.log(`Soy ${this._nombre}, mi clan es: ${this._clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Batman', 3274, 'Buen dia');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();
