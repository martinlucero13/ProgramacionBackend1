class ProductManager {
    //Declaracion de una propiedad privada
    //Tiene que estar arriba de todo
    #admin;
    constructor(products){
        this.products = products
        this.#admin = true;
    }

    /*getProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data))
    }*/

    async getProducts(){
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            //console.log(data)
            this.products = data;
        } catch (error) {
            console.error(error.message)
        }
    }

    deleteProductsById(productId){
        try {
            if (this.#admin) {
                const newList = this.products.filter((product) => product.id !== productId);
                this.products = newList;
            } else {
                //Corto la ejecucion y salto al cath mandando un mensaje de error
                throw new Error("Permiso Denegado");
            }
        } catch (error) {
            console.error(error.message)
        }
    }

}


const main = async() => {
    try {
        console.log("Iniciaando...")
        const productManager = new ProductManager([]);
        await productManager.getProducts();
        productManager.deleteProductsById(20);
        console.log(productManager.products);
    } catch (error) {
        console.error(error.message);
    }
}
//Llama y ejecuta
main()