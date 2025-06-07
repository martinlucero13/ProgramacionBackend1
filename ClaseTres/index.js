//Creacion un proyecto de node 
// Desde console tiramos el comando npm init -y
//Simpre conviene utilizar import, es mas rapido y solo se importa en el lugar donde lo vamos a utilizar
//Simpore que inicia ir al package.json e indicar que es de tipo modular


import moment from "moment";

const calculateDays = (newBirthday) => {
    const now = moment ();
    const birthday = moment(newBirthday, "DD-MM-YYYY");

    const days = now.diff(birthday, "days");

    console.log(days);
}

calculateDays("28/03/2000");