db.peliculas.find()
/*
BÚSQUEDAS FIND PARA ENONTRAR INFORMACIÓN
*/
db.peliculas.find({"Director": {$eq: "Rob Minkoff"}});

db.peliculas.find({"Director": "Rob Minkoff"});

db.peliculas.find( { "Nombre": "Avatar"});

/*
Número de documentos que cumple la condición
*/
db.peliculas.find({"Director": "Rob Minkoff"}).count()

db.peliculas.find({}).count()
