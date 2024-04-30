# Réponses TP LinQ

1) Pour récupérer les nombres pairs dans un tableau et les nombres impairs dans un autre, vous pouvez utiliser LINQ de la manière suivante :

```csharp
int[] nombres = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

var nombresPairs = nombres.Where(n => n % 2 == 0).ToArray();
var nombresImpairs = nombres.Where(n => n % 2 != 0).ToArray();
```

2) Les méthodes LINQ mentionnées correspondent à :

- `FirstOrDefault()`: Renvoie le premier élément d'une séquence ou la valeur par défaut si la séquence est vide.
- `LastOrDefault()`: Renvoie le dernier élément d'une séquence ou la valeur par défaut si la séquence est vide.
- `ElementAt(int index)`: Renvoie l'élément à la position spécifiée dans une séquence.
- `ElementAtOrDefault(int index)`: Renvoie l'élément à la position spécifiée dans une séquence ou la valeur par défaut si l'index est hors limites.

3) Pour récupérer les informations des deux tableaux où les informations se trouvent dans les deux tableaux, vous pouvez utiliser la méthode `Join` de LINQ :

```csharp
var infosCommunes = premiers.Join(impairs, p => p, i => i, (p, i) => new { Premier = p, Impair = i }).ToList();
```

4) Pour les différentes opérations (concaténation, intersection et différence), vous pouvez les tester comme suit :

```csharp
// Concatenation
Console.WriteLine("----------");
var concat = premiers.Concat(impairs);
foreach (int nb in concat)
{
    Console.WriteLine(nb);
}

// Intersection
Console.WriteLine("----------");
var intersect = premiers.Intersect(impairs);
foreach (int nb in intersect)
{
    Console.WriteLine(nb);
}

// Différence
Console.WriteLine("----------");
var except = premiers.Except(impairs);
var exceptBis = impairs.Except(premiers);
foreach (int nb in except)
{
    Console.WriteLine(nb);
}
```

5) Pour créer un client avec un nom, budget et mail, vous pouvez définir une classe Client et une liste de clients comme suit :

```csharp
public class Client
{
    public int Id { get; set; }
    public string Nom { get; set; }
    public double Budget { get; set; }
    public string Mail { get; set; }

    public Client(int id, string nom, double budget, string mail)
    {
        Id = id;
        Nom = nom;
        Budget = budget;
        Mail = mail;
    }
}

public static List<Client> clients = new List<Client>()
{
    new Client(1, "Anthony", 10000, "Anthony@mail.fr"),
    new Client(2, "Jean", 5000, "Jean@mail.fr"),
    new Client(3, "Marc", 15000, "Marc@mail.fr"),
    new Client(4, "John", 20000, "John@mail.fr"),
    new Client(5, "Lea", 100000, "Lea@mail.fr"),
    new Client(6, "Zoe", 50000, "Zoe@mail.fr"),
};
```

6) Pour sélectionner tous les clients avec un budget défini, vous pouvez utiliser LINQ comme ceci :

```csharp
double budgetRecherche = 10000;
var clientsAvecBudget = clients.Where(c => c.Budget == budgetRecherche).ToList();
```
