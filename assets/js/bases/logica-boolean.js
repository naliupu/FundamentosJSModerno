const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}

const  regresaFalse = ()=>{
    console.log('Regresa false');
    return false;
}

console.warn('NOT o la negacion');

console.log(true);//TRUE
console.log(!true);//FALSE
console.log(!false);//TRUE

console.log( !regresaFalse());

console.warn('And');
console.log(true && true);//TRUE
console.log(true && !false);//TRUE


console.log('---------------------------');

console.log( regresaFalse() && regresaTrue());//FALSE
console.log( regresaTrue() && regresaFalse());//FALSE


console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log( regresaFalse() || regresaTrue());//TRUE



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull =null;
const soyFalse = false;

const a1 = false &&  'Hola mundo' && 10; 
const a2 = 'Como estas' &&  'Hola mundo' && soyFalse;
const a3 =  soyFalse || 'ya no soy falso';
const a4 =  soyFalse || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true;
console.log({a1 , a2, a3, a4});

