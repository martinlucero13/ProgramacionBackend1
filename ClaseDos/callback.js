//Llamada de callback
//Se utiliza mayormente en operaciones async 

function saludar(nombre, callback){
    console.log(`Hola ${nombre} sos alto puto`);
    //Ejecuto la funcion despedir
    callback();
}

function despedir(){
    console.log("Chau gato");
}

//Se va a ejecutar saludodar y luego la de despedir
//Lo paso como variable sin parentesis para que despedir dependa de saludar
saludar("Federico", despedir);


let arrayNum = [1,2,3,4,5,6,7,8,9,0];
let nuevoArray = arrayNum.map( (numero) => numero + 1);
console.log(nuevoArray);


const funcionCallBack = (numero) =>{
    if(numero%2 === 0){
        return numero;
    }else{
        return "No es par"
    }
};
const evaluarPares = arrayNum.map(funcionCallBack);

console.log(evaluarPares);