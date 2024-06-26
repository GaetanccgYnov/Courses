## Exos
requete 1 : 
```
db.webtech.aggregate([{$group:{_id:"$BOROUGH",totalAccidents:{$sum:1}}},{$sort:{totalAccidents:-1}}])
```
```
db.webtech.aggregate([
    {
        $group: {
            _id: "$BOROUGH",
            totalAccidents: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            borough: "$_id",
            totalAccidents: 1
        }
    }
])

```
```
db.crashes.aggregate([
   { $group: { _id: "$BOROUGH", count: { $sum: 1 } } }
]);

```
requete 2 : 
```
db.crashes.aggregate([{$match:{"CONTRIBUTING FACTOR VEHICLE 1":"Driver Inattention/Distraction"}},{$count:"TotalAccidents"}])
```
```
db.crashes.find({"CONTRIBUTING FACTOR VEHICLE 1": "Driver Inattention/Distraction"}).itcount()
```
```
db.crashes.aggregate([
    {
        $match: {
            "CONTRIBUTING FACTOR VEHICLE 1": "Driver Inattention/Distraction"
        }
    },
    {
        $count: "TotalAccidents"
    }
])
```
requete 3 : 
```
db.crashes.updateMany({"BOROUGH":"MANHATTAN"},{$set:{"BOROUGH":"BRONX"}})

db.crashes.updateMany(
    { "BOROUGH": "MANHATTAN" },     { $set: { "BOROUGH": "BRONX" } }
)

```
requete 4 : 
```
db.restaurants.find({
  "grades.score": { $lt: 1 }
}, {
  _id: 0,
  name: 1,
  "grades.score": 1
})
```
requete 5 : 
```
db.restaurants.find({ $and: [{ "grades.score": { $lt: 10 } }, { "grades.score": { $not: { $gte: 10 } } }] })

```
requete 6 : 
```
var restaurants = [
    {
        name: "Restaurant 1",
        cuisine: "Italian",
        grades: [
            { date: new Date("2022-01-01"), grade: "A", score: 8 },
            { date: new Date("2022-02-01"), grade: "B", score: 7 }
        ]
    },
    {
        name: "Restaurant 2",
        cuisine: "French",
        grades: [
            { date: new Date("2022-01-01"), grade: "A", score: 9 },
            { date: new Date("2022-02-01"), grade: "B", score: 6 }
        ]
    },
];

db.restaurants.insertMany(restaurants)

```
requete 7 : 
```
db.restaurants.find({
    "grades": {
        $elemMatch: {
            "grade": "A",
            "score": { $gt: 15 }
        }
    }
})
```
requete 8 : 
```
db.restaurants.updateOne(
    { name: "Nirvana" },
    { $push: { 
        grades: {
            date: new Date(),
            grade: "A",
            score: 18
        }
    }}
)

```
requete 9 : 
```
db.restaurants.deleteMany({ cuisine: "Fast Food" })

```
requete 10 : 
```
db.restaurants.find({
    "grades.date": {
        $gte: new Date("2023-01-01"),
        $lte: new Date("2023-12-31")
    }
})

```
requete 11 : 
```
db.airbnb.createIndex({summary: "text", description: "text", name: "text"})

```
requete 12 : 
```
db.airbnb.find({ $text: { $search: "duplex" } })

```
requete 13 : 
```
db.airbnb.count({ bed_type: "King" })

```
requete 14 : 
```
db.airbnb.count({
  $and: [
    { description: /cozy/i },
    { description: /studio/i },
    { description: { $not: /furnish/i } }
  ]
})

```
# Exercices PDF GeoQuerry

```
db.restaurants.find({
  "address.coord": {
    $geoWithin: {
      $centerSphere: [[-73.975, 40.7675], 2 / 6371]
    }
  }
});
```

```
db.restaurants.find({
  "address.coord": {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          // Insérer les coordonnées du quartier désiré (par exemple, Greenwich Village)
          [
            [-74.001210, 40.730610],
            [-74.009880, 40.726590],
            [-73.998750, 40.720480],
            [-73.989120, 40.724500],
            [-74.001210, 40.730610]
          ]
        ]
      }
    }
  }
});
```

```
db.restaurants.find({
  "address.coord": {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.975, 40.7675]
      }
    }
  }
}).limit(5);
```

```
db.neighborhoods.find({
  "geometry": {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [-73.935242, 40.730610]
      }
    }
  }
});
```

```
db.restaurants.aggregate([
  {
    $lookup: {
      from: "neighborhoods",
      localField: "borough",
      foreignField: "name",
      as: "neighborhood"
    }
  },
  {
    $group: {
      _id: "$neighborhood.name",
      count: { $sum: 1 }
    }
  }
]);
```

```
db.restaurants.aggregate([
  {
    $lookup: {
      from: "neighborhoods",
      localField: "borough",
      foreignField: "name",
      as: "neighborhood"
    }
  },
  {
    $match: {
      neighborhood: { $ne: [] } // Filtrer les restaurants avec quartier associé
    }
  },
  {
    $group: {
      _id: "$neighborhood.name",
      count: { $sum: 1 }
    }
  }
]);
```

```
db.restaurants.find({
  "address.coord": {
    $geoWithin: {
      $centerSphere: [[-73.935242, 40.730610], 5 / 6371] // Centre du cercle (longitude, latitude), rayon en radians (5 km)
    }
  }
});

db.restaurants.find({
  "address.coord": {
    $geoIntersects: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          // Insérer les coordonnées du quartier spécifique (par exemple, "Financial District")
          [
            [-74.013776, 40.707436],
            [-74.009720, 40.707436],
            [-74.009720, 40.701919],
            [-74.013776, 40.701919],
            [-74.013776, 40.707436]
          ]
        ]
      }
    }
  }
});
```

```
db.restaurants.find({
  "cuisine": "Italian",
  "address.coord": {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.975, 40.7675]
      },
      $maxDistance: 3000
    }
  }
});
```

```
db.restaurants.updateOne(
  { name: "NomDuRestaurant" }, // Filtre pour le restaurant spécifique à mettre à jour
  {
    $set: {
      "address.coord": {
        type: "Point",
        coordinates: [-74.0000, 40.7000] // Nouvelles coordonnées géographiques (longitude, latitude)
      }
    }
  }
);
```

```
db.restaurants.aggregate([
  {
    $match: {
      "cuisine": { $all: ["Italian", "Pizza"] } // Rechercher les restaurants avec les cuisines Italian et Pizza
    }
  },
  {
    $lookup: {
      from: "neighborhoods",
      localField: "borough",
      foreignField: "name",
      as: "neighborhood"
    }
  },
  {
    $unwind: "$neighborhood" // Déplier le tableau neighborhood pour chaque restaurant
  },
  {
    $group: {
      _id: "$neighborhood.name",
      count: { $sum: 1 }
    }
  }
]);
```

```
Quel est le quartier avec la plus haute densité de restaurants par kilomètre carré ?

Pour déterminer la densité de restaurants par kilomètre carré dans chaque quartier,
 vous auriez besoin de données sur la superficie de chaque quartier ainsi que du nombre de restaurants. 
Ce calcul peut être effectué en dehors de MongoDB en utilisant les données extraites de votre base de données.

db.neighborhoods.aggregate([
  {
    $lookup: {
      from: "restaurants",
      localField: "name",
      foreignField: "borough",
      as: "restaurants"
    }
  },
  {
    $addFields: {
      restaurantCount: { $size: "$restaurants" } // Ajoute le nombre de restaurants dans chaque quartier
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      areaSqMeters: { $sum: "$geometry.coordinates" }, // Calcule la superficie du quartier en mètres carrés
      restaurantCount: 1
    }
  },
  {
    $addFields: {
      areaSqKm: { $divide: ["$areaSqMeters", 1000000] } // Convertit la superficie en kilomètres carrés
    }
  },
  {
    $addFields: {
      restaurantDensity: { $divide: ["$restaurantCount", "$areaSqKm"] } // Calcule la densité des restaurants par kilomètre carré
    }
  },
  {
    $sort: { restaurantDensity: -1 } // Trie par densité des restaurants décroissante
  },
  {
    $limit: 1 // Limite les résultats à un seul quartier avec la plus haute densité de restaurants par kilomètre carré
  }
]);
```

Comment trouver le restaurant le plus éloigné d'un point donné ?

Pour trouver le restaurant le plus éloigné d'un point donné, vous devez d'abord calculer la distance de ce point à tous les restaurants, puis trier les restaurants par distance pour obtenir celui qui est le plus éloigné. Cependant, cela nécessite des calculs de distance en dehors des capacités standard de MongoDB.


Peut-on identifier un chemin (liste de points) passant par au moins 3 restaurants différents sans sortir d'un quartier spécifique ?

L'identification d'un chemin passant par plusieurs restaurants sans sortir d'un quartier spécifique implique des calculs de chemins géographiques complexes qui dépassent les capacités de MongoDB seul. Cela pourrait nécessiter l'utilisation d'outils spécialisés en géo-analyse.


```
db.neighborhoods.aggregate([
  {
    $lookup: {
      from: "restaurants",
      localField: "name",
      foreignField: "borough",
      as: "restaurants"
    }
  },
  {
    $match: {
      restaurants: { $size: 0 }
    }
  },
  {
    $project: {
      _id: 0,
      neighborhood: "$name"
    }
  }
]);
```

```
db.restaurants.aggregate([
  {
    $match: {
      borough: "Manhattan", // Assuming Midtown is in Manhattan
      neighborhood: "Midtown"
    }
  },
  {
    $unwind: "$cuisine"
  },
  {
    $group: {
      _id: "$cuisine",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 3
  },
  {
    $project: {
      _id: 0,
      cuisine: "$_id",
      count: 1
    }
  }
]);
```

```
db.neighborhoods.aggregate([
  {
    $lookup: {
      from: "restaurants",
      let: { neighborhoodName: "$name" },
      pipeline: [
        {
          $geoNear: {
            near: { type: "Point", coordinates: [-73.975, 40.7675] }, // Coordonnées de référence (par exemple, centre du quartier)
            distanceField: "distance",
            spherical: true,
            query: { $expr: { $eq: ["$borough", "$$neighborhoodName"] } }, // Correspondance du quartier
            limit: 1 // Limite pour obtenir le restaurant le plus proche
          }
        },
        { $sort: { distance: 1 } }, // Tri par distance croissante
        { $limit: 1 } // Limite pour obtenir le restaurant le plus proche
      ],
      as: "nearestRestaurant"
    }
  },
  {
    $unwind: "$nearestRestaurant"
  },
  {
    $project: {
      _id: 0,
      neighborhood: "$name",
      nearestRestaurant: 1
    }
  }
]);

db.restaurants.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-73.975, 40.7675] }, // Coordonnées de référence
      distanceField: "distance",
      spherical: true,
      maxDistance: 500, // Distance maximale pour rechercher près des limites
      query: {}, // Ajuster éventuellement la requête pour filtrer les restaurants spécifiques
      includeLocs: "location",
      num: 1 // Limite pour obtenir le restaurant le plus proche
    }
  },
  {
    $lookup: {
      from: "neighborhoods",
      let: { restaurantLocation: "$location.coordinates" },
      pipeline: [
        {
          $geoIntersects: {
            geometry: { type: "Point", coordinates: "$$restaurantLocation" }
          }
        }
      ],
      as: "borderingNeighborhoods"
    }
  },
  {
    $match: {
      $expr: { $gt: [{ $size: "$borderingNeighborhoods" }, 1] } // Filtrer les restaurants à la frontière de plusieurs quartiers
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      cuisine: 1,
      address: 1,
      distance: { $round: ["$distance", 2] },
      borderingNeighborhoods: 1
    }
  }
]);
```

```
db.restaurants.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-73.975, 40.7675] }, // Coordonnées du point spécifique
      distanceField: "distance",
      spherical: true,
      maxDistance: 5000, // Rayon de 5 km (5000 mètres)
      query: {}, // Vous pouvez ajouter des critères de filtrage supplémentaires ici
      includeLocs: "location" // Champ contenant les coordonnées géospatiales
    }
  },
  {
    $sort: { "grades.score": -1 } // Trier par note (suppose qu'il y a un champ "grades.score")
  },
  {
    $limit: 1 // Limite pour obtenir le restaurant le mieux noté dans le rayon spécifié
  },
  {
    $project: {
      _id: 0,
      name: 1,
      cuisine: 1,
      address: 1,
      distance: { $round: ["$distance", 2] },
      bestScore: { $arrayElemAt: ["$grades", 0] } // Obtenir la meilleure note
    }
  }
]);
```

```
db.restaurants.aggregate([
  {
    $group: {
      _id: {
        neighborhood: "$neighborhood",
        cuisine: "$cuisine"
      },
      count: { $sum: 1 }
    }
  },
  {
    $group: {
      _id: "$_id.neighborhood",
      cuisines: {
        $push: {
          cuisine: "$_id.cuisine",
          count: "$count"
        }
      },
      totalRestaurants: { $sum: "$count" }
    }
  },
  {
    $project: {
      _id: 0,
      neighborhood: "$_id",
      cuisines: 1,
      totalRestaurants: 1
    }
  },
  {
    $sort: { totalRestaurants: -1 } // Triez par le nombre total de restaurants dans chaque quartier (optionnel)
  }
]);
```