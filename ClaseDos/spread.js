const lista = ["Notebook", "Mouse", "Teclado"];
const listaNueva = ["Monitor", "Impresora"];

//spread operatos agarra todos los valores y los copia en el nuevo array 
//Ya no hace referencia al array anterior
const todosLosProductos = [ ...lista, ...listaNueva];
//Funciona con objetos tambien
console.log(todosLosProductos)