class Rectangulo{

    /**
     * Propiedades privadas
     *      - Las propiedades privadas, solo pueden ser modificadas dentro de la clase.
     * 
     *      - Para definir una propiedad privada, solo basta con agregarle el '#'.
     *      
     *      - Hasta el momento de tomar el curso, JS no tiene metodos privados y las propiedades privadas,
     *      no son aceptadas por todos los navegadores
     */
    
    #_area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#_area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#_area = 1000000;   
console.log(rectangulo)