//creamos una conexion a la base de datos 
//Luego abrimos la consola de mongo en open mongo sell
//show dbs nos mustra las bases
//comando use puede ser para utilizar una base ya creada o crear una nueva
//use coderApp al no existir la creo automaticamente
//coleccion (es un erray o coleccion de datos que guarda mongo)
//cada objeto se llama documentos y se encuentra dentro de una coleccion de datos
//si quiero crear una coleccion de datos 
//db.createCollection("nombredelacoleccion")
//ver las colecciones que tenemos dentro de la base seleccionada
//show collection


//Insertar un dato pasamos un objeto
//db.users.insertOne({name: "Juan", lastname: "Pepe"})
//nunca insertamos un id ya que al hacer el insert mongo nos los debuelve como dato
//Insertar varios obj
//db.users.insertMany([{name: "Federico", lastname: "Pauza"}, {name: "Santiago", age: 30}, {name: "Martin", lastname: "Lucero"}])
//Id generado de forma automatica por mongo, con timpo de dato ObjetId




//Hicimos una importaciond esde in JSON
//Ahora usamos el metodo find
//db["users"].find() trae todo

//Buscamos con filtro
//db.users.find( {verified: true} )

//Buscamos con el operador de comparacion $ y luego eq significa equals
//db.users.find( {verified: { $eq: true }} )
//Hacemos una negacion con not equals
//db.users.find( {verified: { $ne: true }} )


//Buscamos con condicionales > < 
//Trae los user que tiene el campó seguidores mayor a 800 gt-> greater than
//db.users.find({followers: {$gt:800}})

//Trae los user que tiene el campó seguidores mayor igual >= a 800 gte-> greater than equals
//db.users.find({followers: {$gte:800}})


//Trae los user que tiene el campó seguidores menor a 800 lt-> lest than
//db.users.find({followers: {$lt:800}})

//Trae los user que tiene el campó seguidores menor igual <= a 800 lte-> lest than equals
//db.users.find({followers: {$lte:800}})




//OPERADORES LOGICOS
//PARA PODER AGREGAR VARIAS CONDICIONES
//operador log and
//db.users.find( { $and: [ {location: "Buenos Aires, Argentina"}, {followers: {$gte:800}} ] } )


//operador or
//db.users.find( { $or: [ {location: "Buenos Aires, Argentina"}, {followers: {$gte:800}} ] } )


//Vamos a buscar la informacin que se encuentra anidada dentro de un array 

//db.users.find({"posts.likes" : {$gt: 100}})

//Multiples filtros en un array $selenMatch
//db.user.find({
//  posts: {
//      $selenMatch: {likes: {$gt: 100}, comments: {$gt: 12}}
//  }
//})


//Seleccionar los campos que queremos untilizar
//Lo hacemos con proyecciones
//en este caso me quiero traer el campo fullname, por eso le pongo el 1 y como no quiero traer el id le pongo el 0
//de un lado de la coma los filtros del otro las proyecciones
//al final podemos hacer un order con .sort y ponemos 1 para ordenar y -1 para la inversa
//db.users.find( {verified: true}, {fullname: 1, _id:0}).sort({fullname: 1})

//Paginacion
//Limitar la cantidad de documentos a 3 .limit
//Tambien puedo decir la cantidad de documentos que quiero saltear .skip
//db.users.find( {verified: true}, {fullname: 1, _id:0}).limit(3).skip(0)
//selecionon de a tres en la pagina 0 luego tres pero salto las primeras tres luego 3 pweo salto las primeras 6


//UPDATE
//primero el filtro luego el set $set
//db.user.updateOne({_id: objectId("")}, {$set: {fullname: "Carlitos Carloncho Carolo"}})


//db.users.updateMany( {location: "Buenos Aires, Argentina"}, {$set: {bio: "No lo se Rick, parece falso"}} )



//DELETE
//db.users.deleteOne({_id: ObjetId("dassdaaskjdahsbiuadhiubws")})
//db.users.deleteMany({verified: false})