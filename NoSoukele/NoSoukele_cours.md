## NoSQL
# Not only SQL

# MongoDB Atlas pour heberger :)

# Base
- Fonctionne avec des schémas de données
- Pas de jointures, on utilise des agrégats
- Plus grande scalabilité, on ajoute des réplicat et des collections pour allimenter
- Plus rapide en lecture et ecriture et adapté a des données diversifiées


# Les différentes typologies NoSQL
- KEY6VALUE STORE
- DOCUMENT-ORIENTED STORE
- COLUMN-ORIENTED STORE

# Les documents
Le Mango DB stock les données en format BSON (un json binaire).
Les données sont stockés comme en JSON en terme de structure.

# Les index
Jouent un role crucial dans l'opti des requêtes. Ils permettent au moteur de trouver rapidement les documents sans avoir a scaner chaque document d'une collection.



# Installation
``` 
docker rm -f mongodb
docker ps -a
docker run -d -p 27017:27017 --name mongodb mongo 
docker exec -it mongodb mongosh
use [database]
```

# Creation User
```
db.users.insertOne({"name":"Paire", "firstname":"Benoit"})
db.users.updateOne({"name":"Paire"},{$set:{"age":32}})
db.users.updateOne({"name":"Paire"},{$unset:{"age":1}})
db.users.find()
```

# Import data
```
docker cp .\restaurants.json mongodb:/data/restaurants.json
docker exec -it mongodb /bin/bash
```

# Exemple init collection
```
db.stores.insert(
	[
		{_id: 1, name:"Java Hut", descritption: "Coffee and cakes"},
		{_id: 2, name:"Burger Buns", descritption: "Gourmet hamburgers"},
		{_id: 3, name:"Coffee Shop", descritption: "Just coffee"},
		{_id: 4, name:"Clothes Clothes Clothes", descritption: "Discount clothing"},
		{_id: 5, name:"Java Shopping", descritption: "Indonesian goods"},
	]
)
```


# Création Index
```
db.stores.createIndex({name:"text", description: "text"})
```

# Utilisation Index
* include :
```
db.stores.find({$text: {$search: "\"coffee shop\""}})
```
* exclude :
```
db.stores.find({$text: {$search: "java shop -coffee"}})
```
* sorting :
```
db.stores.find({$text: {$search: "java shop coffee"}}, {score: {$meta: "textScore"}}).sort({score:{$meta: "textScore"}})
```


# Utilisation Geodata

```
db.neighborhoods.findOne({geometry: { $geoIntersects: { $geometry: {type: "Point", coordinates: [ -73.93414657, 40.82302903]}}}})
```
```
db.restaurants.find({ location: {$geoWithin: { $centerSphere: [[-73.93414657, 40.82302903], 8 / 6378.1]}}})
```
```
var METERS_PER_MILE = 1609.34
db.restaurants.find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903] }, $maxDistance: 5 * METERS_PER_MILE }}})
```

# Authentification
L'authentification n'est pas fourni pas défaut, on doit le créer nous même.

* Pour créer son compte avec mdp:
```
use admin
db.createUser({user: 'root', pwd: passwordPrompt(), roles:['root']})
```
* Créer le container avec l'image et l'auth:
```
docker run -p 27017:27017 -v /mongodb/data/db:/data/db --name mongo -d mongo --auth
```

* Pour se connecter avec l'utilisateur et le mdp:
```
docker exec -it mongo mongosh -u root -p root --authenticationDatabase admin
```

# Replicasets
Le fameux master / slave 

* Créer un network docker:
```
docker network create mongo-cluster
```

* Créer les instances Mongo:
```
docker run -d --network mongo-cluster -p 27017:27017 --name mongo1 mongo mongod --replSet mongo-set --port 27017

docker run -d --network mongo-cluster -p 27018:27018 --name mongo2 mongo mongod --replSet mongo-set --port 27018

docker run -d --network mongo-cluster -p 27019:27019 --name mongo3 mongo mongod --replSet mongo-set --port 27019
```
* Se connecter dans n'importe quel shell mongo
```
docker exec -it mongo1 mongosh
```
* On crée un ensemble de répliques:
```
db = (new Mongo('localhost:27017')).getDB('users')
config={"_id":"mongo-set",
"members":[{"_id":0,"host":"mongo1:27017"},{"_id":1,"host":"mongo2:27018"},{"_id":2,"host":"mongo3:27019"}]}
```
* On start la réplique en exécutant:
```
rs.initiate(config)
```
* On va donc faire une insertion pour tester la réplication:
```
db.users.insertOne({name: 'benoit'})
```
* Puis on vérifie que la relplication fonctionne bien:
```
db2 = (new Mongo('mongo2:27018')).getDB('users')
db.setReadPref("primaryPreferred") // db.setSecondaryOk() 
db2.users.find()
```

# Sauvegarde et Restauration
MONGODUMP / MONGOSTORE
