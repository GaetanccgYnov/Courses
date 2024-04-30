# Réponses TP LinQ

1) Réponses TP LinQ :

```csharp
using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        int[] nombres = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        var nombresPairs = nombres.Where(n => n % 2 == 0).ToArray();
        var nombresImpairs = nombres.Where(n => n % 2 != 0).ToArray();

        Console.WriteLine("Nombres pairs :");
        foreach (var nombre in nombresPairs)
        {
            Console.WriteLine(nombre);
        }

        Console.WriteLine("Nombres impairs :");
        foreach (var nombre in nombresImpairs)
        {
            Console.WriteLine(nombre);
        }
    }
}
```

2) Les méthodes LINQ mentionnées correspondent à :

- `FirstOrDefault()`: Renvoie le premier élément d'une séquence ou la valeur par défaut si la séquence est vide.
- `LastOrDefault()`: Renvoie le dernier élément d'une séquence ou la valeur par défaut si la séquence est vide.
- `ElementAt(int index)`: Renvoie l'élément à la position spécifiée dans une séquence.
- `ElementAtOrDefault(int index)`: Renvoie l'élément à la position spécifiée dans une séquence ou la valeur par défaut si l'index est hors limites.

3) Informations communes dans deux tableaux :

```csharp
using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        // Déclaration des deux tableaux d'entiers
        int[] premiers = { 2, 3, 5, 7, 11 };
        int[] impairs = { 1, 3, 5, 7, 9, 11 };

        // Utilisation de Join pour trouver les valeurs communes entre les deux tableaux
        var infosCommunes = premiers.Join(impairs, p => p, i => i, (p, i) => new { Premier = p, Impair = i }).ToList();

        // Affichage des informations communes
        foreach (var info in infosCommunes)
        {
            Console.WriteLine($"Premier : {info.Premier}, Impair : {info.Impair}");
        }
    }
}
```

4) Opérations sur les tableaux :

```csharp
using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        // Déclaration de deux tableaux d'entiers
        int[] premiers = { 2, 3, 5, 7, 11 };
        int[] impairs = { 1, 3, 5, 7, 9, 11 };

        // Concaténation des deux tableaux
        Console.WriteLine("----------");
        var concat = premiers.Concat(impairs); // Concaténation
        foreach (int nb in concat)
        {
            Console.WriteLine(nb); // Affichage des nombres concaténés
        }

        // Intersection des deux tableaux
        Console.WriteLine("----------");
        var intersect = premiers.Intersect(impairs); // Intersection
        foreach (int nb in intersect)
        {
            Console.WriteLine(nb); // Affichage des nombres communs
        }

        // Différence entre les deux tableaux
        Console.WriteLine("----------");
        var except = premiers.Except(impairs); // Différence (premiers - impairs)
        var exceptBis = impairs.Except(premiers); // Différence (impairs - premiers)
        foreach (int nb in except)
        {
            Console.WriteLine(nb); // Affichage des nombres présents uniquement dans premiers
        }
    }
}
```

5) Création de clients avec nom, mail et budget :

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

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

public class Program
{
    public static void Main()
    {
        List<Client> clients = new List<Client>()
        {
            new Client(1, "Anthony", 10000, "Anthony@mail.fr"),
            new Client(2, "Jean", 5000, "Jean@mail.fr"),
            new Client(3, "Marc", 15000, "Marc@mail.fr"),
            new Client(4, "John", 20000, "John@mail.fr"),
            new Client(5, "Lea", 100000, "Lea@mail.fr"),
            new Client(6, "Zoe", 50000, "Zoe@mail.fr"),
        };

        // Utilisation de LINQ pour sélectionner les clients avec le nom, le budget et le mail
        var clientsAvecNomMailBudget = clients.Select(c => new { Nom = c.Nom, Budget = c.Budget, Mail = c.Mail }).ToList();

        Console.WriteLine("Clients sélectionnés :");
        foreach (var client in clientsAvecNomMailBudget)
        {
            Console.WriteLine($"Nom : {client.Nom}, Budget : {client.Budget}, Mail : {client.Mail}");
        }
    }
}

```

6) Sélection de clients avec un budget défini :

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

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

public class Program
{
    public static void Main()
    {
        List<Client> clients = new List<Client>()
        {
            new Client(1, "Anthony", 10000, "Anthony@mail.fr"),
            new Client(2, "Jean", 5000, "Jean@mail.fr"),
            new Client(3, "Marc", 15000, "Marc@mail.fr"),
            new Client(4, "John", 20000, "John@mail.fr"),
            new Client(5, "Lea", 100000, "Lea@mail.fr"),
            new Client(6, "Zoe", 50000, "Zoe@mail.fr"),
        };

        double budgetRecherche = 10000;

        // Utilisation de LINQ pour sélectionner les clients avec le budget recherché
        var clientsAvecBudget = clients.Where(c => c.Budget == budgetRecherche).ToList();

        Console.WriteLine("Clients sélectionnés :");
        foreach (var client in clientsAvecBudget)
        {
            Console.WriteLine($"ID : {client.Id}, Nom : {client.Nom}, Budget : {client.Budget}, Mail : {client.Mail}");
        }
    }
}
```