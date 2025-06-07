console.log("Hola jajajaj")

//Declaracion de variables
//let uso por bloque y puede ser variable 
//const uso por bloque pero se tiene que declarar e inicializar pero no se puede modificar
//var variable accesible de forma globar, modificable pero puede caudar errores al momento de ejecutar por lo que no es recomendable utilizar


let nombre = "MARTIN"
nombre = nombre + ", LUCERO"

const nro = 8

console.log(nombre, nro)


function authUser(){

}

//Definir propiedades y metodos
class User {}


const estudiantes = ["Tincho", "Nico", "Rochi"]

estudiantes.forEach(estudiante => {
    console.log(estudiante)
});

const estudiantesJson = [
    {
        nombre : "Martin",
        titulo : "Tec. en programacion"
    },
        {
        nombre : "Nico",
        titulo : "Lic. Bioquimico"
    },
        {
        nombre : "Rochi",
        titulo : "Lic. Diseño"
    },
]

estudiantesJson.forEach(estudiante => {
    console.log("Nombre: " + estudiante.nombre);
    console.log("Titulo: " + estudiante.titulo);
});

function sumar(num1, num2){
    return num1 + num2
}

console.log(sumar(10,8))

//Puede tener el return implicito cuando no ponemos {} si, si los poonemos ahi si tenemos que utilizar el return
const sumarArrowFuncion = (a, b) =>{
    return a + b
};

console.log(sumarArrowFuncion(2,8))
