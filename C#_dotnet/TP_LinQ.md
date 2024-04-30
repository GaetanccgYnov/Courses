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

2) Méthodes LINQ :

```csharp
using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        // Votre code LINQ ici

        Console.WriteLine("Vos résultats ici");
    }
}
```

3) Informations communes dans deux tableaux :

```csharp
using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        int[] premiers = { 2, 3, 5, 7, 11 };
        int[] impairs = { 1, 3, 5, 7, 9, 11 };

        var infosCommunes = premiers.Join(impairs, p => p, i => i, (p, i) => new { Premier = p, Impair = i }).ToList();

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
        int[] premiers = { 2, 3, 5, 7, 11 };
        int[] impairs = { 1, 3, 5, 7, 9, 11 };

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
    }
}
```

5) Création de clients :

```csharp
using System;
using System.Collections.Generic;

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

        // Votre code ici

        Console.WriteLine("Clients sélectionnés :");
        foreach (var client in clientsAvecBudget)
        {
            Console.WriteLine($"ID : {client.Id}, Nom : {client.Nom}, Budget : {client.Budget}, Mail : {client.Mail}");
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
        var clientsAvecBudget = clients.Where(c => c.Budget == budgetRecherche).ToList();

        Console.WriteLine("Clients sélectionnés :");
        foreach (var client in clientsAvecBudget)
        {
            Console.WriteLine($"ID : {client.Id}, Nom : {client.Nom}, Budget : {client.Budget}, Mail : {client.Mail}");
        }
    }
}
```