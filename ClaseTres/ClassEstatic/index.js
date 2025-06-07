import crypto from "crypto";

const secretKey = "MiClave"
class UsersManager{
    //Propiedad estatica
    static users = [];

    static hashPassword = (password) => {
        //Todo esto nos devuelve un string con toda la clave ya hasheada
        const hashedPass = crypto.createHmac("sha256", secretKey).update(password).digest("hex");
        return hashedPass;
    }
    //Metodo Estatico
    static createUser = (user) =>{
        const hashedPassword = this.hashPassword(user.password);
        //Copiar datos de un lugar al otro con spreck(los ...)
        const newUser = {...user, password: hashedPassword} //Agrege la nueval clave al obj

        this.users.push(newUser);

        console.log("Nuevo usuario creado correctamente")
    }//no es necesario instanciar la clase para usarlo

    static showUsers = () =>{
        console.log(this.users);
    }

    //Para login vamos a recibir la clave en crudo y la vamos a hasear para poder compararla con la clave hasheada
    static login = (username, password) =>{
        const userFind = this.users.find ((user) => user.username === username)
        if(!userFind) return "Usuario no encontrado";

        //si lo encuentra al usuario y existe entonces hasheamos
        const hashedPassword = this.hashPassword(password);
        if(userFind.password !== hashedPassword) return "Error, contraseña incorrecta";

        return "Logueado correcto"
    }
}

//Lo llamo directamente sin hacer un constructor ni inicializart su valor
UsersManager.createUser({ fullname: "Martin Alejandro Lucero", username: "tinchin", password: "miclaverecopada"});
UsersManager.createUser({ fullname: "Rochi Lucero", username: "roro", password: "miclaverecopada2"});

UsersManager.showUsers();

console.log(UsersManager.login("roro","malaclave"));
console.log(UsersManager.login("roro22","malaclave"));
console.log(UsersManager.login("tinchin","miclaverecopada"));
//Hasheo es mas seguro que encriptar una informacion, ya que 
//Una encriptacion se puede hacer el proceso a LA inversa
//En cambio el hasheo es mas seguro porque no se puede revertir la info

