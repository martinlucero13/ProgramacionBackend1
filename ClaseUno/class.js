//Clases en js -> Viene de la mano de la POO (caracteristicas, propiedades que se compartes pero que tenemos valores diferentes)
//Metodos -> funciones que comparte la clase (arrancar frenar etc)
// declarar clase -> sentencia class
//Por convencion la primera letar va en mayuscula
//Esturctura que creamos (molde)

class Persona{
    //Declarar e inicializar porpiedades
    //Crear el consturctor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //Metodos 
    saludar(){
        const mensaje = `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`
        return mensaje;
    }


}

//Crear instancia de clase
const persona1 = new Persona("Martin", 25)
const persona2 = new Persona("Nico", 25)
const persona3 = new Persona("Rochi", 21)

console.log(persona1.nombre,persona1.edad)
console.log(persona1.saludar())


//Actvidad
//Crear dos clases, una es la del array de productos y la otra es la de producto ´para darle las props a los productos
//UNa es la class product
//La otra es la class products


class Product{
    constructor(id, title, description, price, thumbnail, code, stock){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


class ProductManager{
    constructor(){
        this.products =  [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        // Este método debe agregar un producto al arreglo de productos inicial.
        // Debe validar que no se repita el campo code y que todos los campos sean obligatorios.
        // Al agregar un producto, debe crearse con un id autoincrementable.
        const cant = this.products.length;
        const id = cant + 1;
        const prod = new Product(id, title, description, price, thumbnail, code, stock);
        this.products.push(prod)
    }

    getProducts(){
        //Este método debe devolver el arreglo con todos los productos creados hasta el momento.
        this.products.forEach(product => {
            console.log(`ID: ${product.id} \nTitulo: ${product.title} \nDescripción: ${product.description} \nPrecio: ${product.price} \nRuta Img: ${product.thumbnail} \nCodigo: ${product.code} \nStock: ${product.stock}`)
        });
    }

    getProductById(id){
        //Este método debe buscar en el arreglo el producto que coincida con el id.
        // En caso de no encontrar ningún id coincidente, debe mostrar en consola el error "Not found".
        try {
            const product = this.products.find(p => p.id === id)
            if(product === undefined){
                console.error("Not found");
            }
            else{
                console.log(`ID: ${product.id} \nTitulo: ${product.title} \nDescripción: ${product.description} \nPrecio: ${product.price} \nRuta Img: ${product.thumbnail} \nCodigo: ${product.code} \nStock: ${product.stock}`)
            }
        } catch (error) {
            console.error("Not found");
        }
    }
}


const p1 = new ProductManager();

console.log("Cargando Productos...")
p1.addProduct("Volver al Futuro", "La mejor peli de la historia del cine", 200, "/img/VAF", "0001", 20);
p1.addProduct("Volver al Futuro 2", "La mejor peli de la historia del cine X2", 200, "/img/VAF2", "0002", 20);
p1.addProduct("El señor de los anillos", "Una pelicula de aventura", 300, "/img/ESA", "0003", 25);
console.log("-----------------------------------------------------------------------------------------------------------")

console.log("Obteniendo Productos...")
p1.getProducts();
console.log("-----------------------------------------------------------------------------------------------------------")

console.log("Obteniendo Producto por ID...")
p1.getProductById(2);
console.log("-----------------------------------------------------------------------------------------------------------")