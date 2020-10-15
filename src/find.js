db.peliculas.find()
db.peliculas.find({"Director": "Rob Minkoff"})
db.peliculas.find({"Director": {$eq: "Rob Minkoff"}})