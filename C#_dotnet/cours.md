# Introduction à C# .NET

## Qu'est-ce que C# ?

C# (prononcé "C sharp") est un langage de programmation moderne, orienté objet, développé par Microsoft. Il a été conçu pour être simple, puissant, sécurisé et adapté à divers domaines d'application, de la programmation système à la création d'applications web et mobiles. C# est principalement utilisé dans l'écosystème de développement logiciel Microsoft, mais il est également pris en charge par des frameworks open-source tels que .NET Core et Mono, permettant le développement multiplateforme.

## Qu'est-ce que .NET ?

.NET est une plateforme de développement logiciel complète, également développée par Microsoft. Elle comprend un large éventail de bibliothèques, de frameworks et d'outils qui simplifient et accélèrent le processus de développement d'applications. .NET prend en charge plusieurs langages de programmation, mais C# est le langage le plus couramment utilisé dans l'écosystème .NET.

## Pourquoi choisir C# .NET ?

C# .NET offre de nombreux avantages pour les développeurs :

- **Productivité**: Grâce à sa syntaxe claire et à ses fonctionnalités de haut niveau, C# permet aux développeurs de coder plus rapidement et efficacement.
- **Performance**: Les applications développées en C# .NET bénéficient généralement de performances élevées grâce à la compilation Just-In-Time (JIT) et à l'optimisation du code.
- **Sécurité**: C# intègre des fonctionnalités de sécurité telles que la gestion automatique de la mémoire et le typage fort, contribuant à réduire les erreurs et les vulnérabilités.
- **Interopérabilité**: Grâce à son intégration étroite avec la plateforme .NET, C# permet l'interopérabilité avec d'autres langages et technologies, facilitant l'intégration de composants existants dans vos applications.

## Fonctionnement du langage C

### Typage fort

C# est un langage à typage fort, ce qui signifie que chaque variable et chaque expression possède un type bien défini, connu à la compilation. Cela permet une détection précoce des erreurs de type et une meilleure sécurité lors de l'exécution du programme.

### Orienté objet

C# est un langage de programmation orienté objet (POO), ce qui signifie qu'il prend en charge les concepts de classe et d'objet. Les objets sont des instances de classes, qui encapsulent des données et des fonctionnalités. La POO favorise la modularité, la réutilisabilité et la maintenabilité du code.

### Héritage et polymorphisme

C# prend en charge l'héritage, permettant à une classe (appelée classe dérivée) d'hériter des propriétés et des méthodes d'une autre classe (appelée classe de base). Cela favorise la réutilisation du code et la création de hiérarchies de classes. De plus, C# prend en charge le polymorphisme, permettant à des objets de différentes classes de répondre de manière spécifique à des méthodes héritées.

### Encapsulation

L'encapsulation est un principe de la POO qui consiste à regrouper les données et les fonctionnalités connexes dans une seule unité, appelée classe. Les membres privés d'une classe sont accessibles uniquement à l'intérieur de celle-ci, tandis que les membres publics peuvent être accessibles depuis l'extérieur. Cela favorise la sécurité et la modularité du code.

### Abstraction

L'abstraction est un concept qui consiste à représenter les caractéristiques essentielles d'un objet, en ignorant les détails non pertinents. En C#, l'abstraction est souvent réalisée à l'aide de classes abstraites et d'interfaces, permettant de définir des contrats et des comportements communs pour des classes dérivées.

### Gestion automatique de la mémoire

C# intègre un ramasse-miettes (garbage collector) qui gère automatiquement la mémoire allouée aux objets. Cela libère les développeurs de la responsabilité de gérer manuellement la mémoire, réduisant ainsi les risques de fuites de mémoire et de corruption.

### Événements et délégués

C# prend en charge les événements et les délégués, permettant la mise en œuvre de modèles de conception tels que le modèle de conception observer et le modèle de conception stratégie. Les événements permettent à des objets de notifier d'autres objets d'un changement d'état, tandis que les délégués permettent de référencer et d'appeler des méthodes de manière asynchrone.

En comprenant ces concepts fondamentaux du fonctionnement de C#, vous serez en mesure de créer des applications robustes et efficaces en utilisant ce langage puissant et polyvalent.

### Architecture à plusieurs niveaux

C# .NET prend en charge une architecture à plusieurs niveaux, permettant de séparer logiquement les différentes parties d'une application en couches distinctes, telles que la présentation, la logique métier et l'accès aux données. Cette approche favorise la modularité, la réutilisabilité et la maintenabilité du code.

### Modèles de conception

C# .NET encourage l'utilisation de modèles de conception tels que le modèle MVC (Modèle-Vue-Contrôleur) et le modèle MVVM (Modèle-Vue-VueModèle) pour organiser et structurer les applications de manière claire et efficace. Ces modèles fournissent des directives sur la façon de séparer les responsabilités et de rendre les applications extensibles et évolutives.

### Développement cloud

C# .NET permet aux développeurs de créer des applications qui s'exécutent dans le cloud plutôt que sur des serveurs locaux. Cela offre de nombreux avantages, tels que la flexibilité, l'évolutivité et la disponibilité élevée. En utilisant des services cloud tels que Microsoft Azure, les développeurs peuvent déployer et gérer facilement leurs applications, accéder à des ressources à la demande et bénéficier de fonctionnalités telles que le stockage, la mise en cache et la gestion des données.

### Frameworks

En C# .NET, les frameworks sont des ensembles de bibliothèques, d'outils et de conventions qui simplifient le développement d'applications en fournissant des fonctionnalités prêtes à l'emploi pour des tâches spécifiques. Ces frameworks permettent aux développeurs de gagner du temps et d'améliorer la qualité de leur code en évitant de réinventer la roue pour des fonctionnalités courantes.

### Exemples de frameworks couramment utilisés

- **ASP.NET Core**: Framework web open-source pour la création d'applications web modernes et évolutives.
- **Entity Framework Core**: Framework de mappage objet-relationnel (ORM) pour accéder et manipuler des données dans une base de données relationnelle.
- **Xamarin**: Framework pour le développement d'applications mobiles multiplateformes en utilisant C#.
- **WPF (Windows Presentation Foundation)**: Framework pour la création d'applications de bureau Windows avec une interface utilisateur riche et interactive.
- **Unity**: Framework pour le développement de jeux vidéo et d'applications interactives en 2D et 3D.

## Avantages de .NET

### Un modèle de programmation commun

.NET offre un modèle de programmation commun qui unifie le développement d'applications pour différentes plateformes. Grâce à des langages tels que C#, VB.NET et F#, ainsi qu'à des frameworks comme ASP.NET, Xamarin et WPF, les développeurs peuvent utiliser les mêmes compétences et les mêmes outils pour créer des applications pour Windows, macOS, Linux, iOS et Android. Cette cohérence facilite la collaboration entre les équipes de développement, réduit les coûts de formation et accélère le développement d'applications multiplateformes.

### Une bibliothèque de classes unique

.NET propose une vaste bibliothèque de classes (la Base Class Library) qui fournit un ensemble riche de fonctionnalités pour le développement d'applications. Cette bibliothèque couvre un large éventail de domaines, notamment le traitement des chaînes, l'accès aux fichiers, la gestion des exceptions, la sécurité, les communications réseau et bien plus encore. En utilisant cette bibliothèque de classes unique, les développeurs peuvent éviter de réinventer la roue et se concentrer sur le développement de fonctionnalités spécifiques à leur application, ce qui permet de gagner du temps et de garantir la cohérence et la fiabilité du code.

### Interopérabilité accrue

.NET favorise l'interopérabilité en permettant aux développeurs d'intégrer facilement des composants développés dans d'autres langages ou frameworks dans leurs applications. Grâce à des mécanismes tels que les services web, les interfaces COM (Component Object Model) et les appels de code natif, les applications .NET peuvent interagir avec des systèmes et des services tiers de manière transparente. Cette interopérabilité facilite l'intégration des nouvelles fonctionnalités, la réutilisation des composants existants et l'adoption progressive de nouvelles technologies, ce qui contribue à la flexibilité et à l'extensibilité des applications.

## .NET Core, ASP.NET et Entity Framework

### .NET Core

.NET Core est une version modulaire, légère et multiplateforme de la plateforme .NET. Conçue pour fonctionner sur différentes plateformes telles que Windows, macOS et Linux, .NET Core offre une flexibilité accrue pour le développement d'applications modernes. Grâce à sa modularité, les développeurs peuvent choisir uniquement les composants nécessaires à leurs applications, ce qui réduit la taille de l'application, améliore les performances et simplifie le déploiement.

### ASP.NET

ASP.NET est un framework web open-source développé par Microsoft, construit sur la plateforme .NET. Il offre un ensemble d'outils puissants et flexibles pour la création d'applications web modernes et évolutives. ASP.NET prend en charge différents modèles de développement web, tels que MVC (Modèle-Vue-Contrôleur) et Razor Pages, ainsi que des fonctionnalités avancées telles que la gestion des authentifications, le routage, le caching et bien plus encore. Avec ASP.NET, les développeurs peuvent créer des applications web performantes, sécurisées et faciles à maintenir.

### Entity Framework

Entity Framework est un framework de mappage objet-relationnel (ORM) développé par Microsoft, qui simplifie l'accès aux données dans les applications .NET. Il permet aux développeurs de travailler avec des données sous forme d'objets et de requêtes LINQ (Language Integrated Query), sans avoir à écrire de code SQL directement. Entity Framework automatise de nombreuses tâches liées à l'accès aux données, telles que la création, la mise à jour et la suppression d'objets, ce qui permet aux développeurs de se concentrer sur la logique métier de leurs applications. Avec Entity Framework, les développeurs peuvent créer des applications robustes et évolutives, tout en bénéficiant de fonctionnalités avancées telles que le suivi des modifications, la gestion des transactions et la gestion des migrations de base de données.

## Outils de développement en C# .NET

### Visual Studio

Visual Studio est l'environnement de développement intégré (IDE) phare de Microsoft, largement utilisé par les développeurs C# .NET. Il offre une suite complète d'outils de développement, y compris un éditeur de code puissant, des fonctionnalités de débogage avancées, des outils de test, des intégrations avec des outils de gestion de code source tels que Git, et bien plus encore.

### NuGet

NuGet est un gestionnaire de packages pour les projets .NET, permettant aux développeurs de découvrir, d'installer et de gérer des bibliothèques de code tierces, des outils et des frameworks dans leurs applications. Avec NuGet, les développeurs peuvent facilement intégrer des fonctionnalités tierces à leurs projets, réduisant ainsi le temps de développement et améliorant la qualité du code en utilisant des packages éprouvés par la communauté.

### Microsoft Azure

Microsoft Azure est une plateforme cloud complète qui offre une gamme de services pour le déploiement, la gestion et l'évolutivité des applications .NET. Avec Azure, les développeurs peuvent héberger leurs applications .NET dans le cloud, bénéficier de la scalabilité automatique, de la haute disponibilité et de la sécurité avancée, et accéder à une variété de services complémentaires tels que les bases de données, la gestion des identités, l'analyse des données et bien plus encore.

### Communauté et documentation

La communauté .NET est vaste et dynamique, avec des millions de développeurs à travers le monde qui contribuent à l'écosystème .NET en partageant leurs connaissances, leurs expériences et leurs projets open-source. Des forums en ligne, des blogs, des groupes d'utilisateurs locaux et des événements communautaires tels que les conférences et les meetups fournissent un soutien et des ressources précieuses pour les développeurs .NET. De plus, Microsoft offre une documentation complète et à jour sur le développement en C# .NET, comprenant des tutoriels, des guides de démarrage, des références API et des exemples de code, pour aider les développeurs à tirer le meilleur parti de la plateforme .NET.

## Modèles de développement : Web Forms et MVC pour ASP.NET

### Web Forms

#### Interopérabilité

Web Forms est un modèle de développement d'applications web pour ASP.NET qui offre une interopérabilité élevée avec d'autres technologies Microsoft, telles que les services web, les contrôles ActiveX et les services de données ADO.NET. Cette interopérabilité permet aux développeurs de créer des applications web qui s'intègrent facilement avec d'autres systèmes et services, offrant ainsi une expérience utilisateur transparente et cohérente.

#### Gestion de l'état

Web Forms offre une gestion de l'état intégrée grâce à des fonctionnalités telles que ViewState, qui permet de stocker automatiquement l'état des contrôles de page entre les requêtes HTTP. Cette fonctionnalité facilite le développement d'applications web interactives en préservant l'état des contrôles et des données utilisateur, ce qui permet de créer des expériences utilisateur fluides et réactives.

#### Contrôle côté serveur

Web Forms repose sur un modèle de développement centré sur les contrôles côté serveur, où les contrôles ASP.NET sont rendus côté serveur et génèrent du code HTML qui est ensuite envoyé au navigateur du client. Cette approche permet aux développeurs de créer des interfaces utilisateur riches et interactives en utilisant une variété de contrôles prédéfinis et personnalisés, offrant ainsi une grande flexibilité dans la conception des applications web.

#### Sécurité

Web Forms intègre des fonctionnalités de sécurité telles que la gestion des authentifications et des autorisations, les validations côté serveur et les mécanismes de protection contre les attaques courantes telles que les attaques par injection SQL et les attaques de scripts intersites (XSS). En utilisant ces fonctionnalités, les développeurs peuvent créer des applications web sécurisées et protéger les données sensibles de leurs utilisateurs contre les menaces potentielles.

#### Extensibilité

Web Forms offre une grande extensibilité grâce à son modèle d'événements et de contrôles personnalisés, permettant aux développeurs d'étendre facilement les fonctionnalités de base du framework pour répondre à des besoins spécifiques.

#### Support d'API Web

Bien que Web Forms soit principalement conçu pour le développement d'applications web traditionnelles, il est possible d'intégrer des services web RESTful en utilisant des technologies telles que ASP.NET Web API, offrant ainsi une intégration avec des applications clientes et des services tiers.

#### Évolution vers ASP.NET Core

Bien que Web Forms ne soit pas directement compatible avec ASP.NET Core, les applications Web Forms existantes peuvent être migrées vers ASP.NET Core en utilisant des outils de migration fournis par Microsoft, offrant ainsi une voie d'évolution vers une plateforme plus moderne et plus légère.

#### Support de Razor

Bien que Razor soit principalement associé au modèle de développement MVC, il est également possible d'utiliser Razor avec Web Forms pour créer des vues dynamiques en utilisant la syntaxe Razor concise et expressive, offrant ainsi une alternative aux contrôles de serveur ASP.NET traditionnels.

#### Intégration avec Visual Studio

Web Forms bénéficie d'une intégration étroite avec Visual Studio, offrant un environnement de développement riche et productif pour la création d'applications web. Visual Studio fournit des outils avancés tels que l'éditeur de code, le débogueur, les outils de test et les fonctionnalités de déploiement, facilitant ainsi le développement, le débogage et la gestion des applications Web Forms.

### MVC (Modèle-Vue-Contrôleur) pour ASP.NET

#### Interopérabilité (Unique Identifier)

MVC est un modèle de développement d'applications web pour ASP.NET qui offre une interopérabilité étendue avec d'autres frameworks et technologies, notamment les services web RESTful, les services cloud et les bibliothèques JavaScript. Cette interopérabilité permet aux développeurs de créer des applications web modernes et évolutives en utilisant les technologies les plus adaptées à leurs besoins spécifiques.

#### Gestion de l'état (Unique Identifier)

MVC repose sur un modèle de développement basé sur l'état HTTP, où l'état de l'application est stocké sur le serveur ou transmis entre le client et le serveur via des mécanismes tels que les cookies ou les paramètres d'URL. Cette approche favorise la scalabilité et la maintenabilité des applications web en réduisant la dépendance à l'état de session côté serveur et en favorisant une séparation claire des préoccupations entre les différentes couches de l'application.

#### Contrôle côté serveur (Unique Identifier)

MVC suit le modèle de conception Modèle-Vue-Contrôleur, où le contrôleur gère les requêtes HTTP, le modèle représente les données de l'application et la vue affiche l'interface utilisateur. Cette séparation claire des préoccupations permet aux développeurs de créer des applications web bien structurées, évolutives et faciles à maintenir, en favorisant la réutilisabilité du code et la modularité de l'architecture.

#### Sécurité (Unique Identifier)

MVC intègre des fonctionnalités de sécurité telles que les filtres d'action, les attributs d'autorisation et les stratégies de gestion des rôles, permettant de sécuriser efficacement les actions et les contrôleurs de l'application contre les accès non autorisés. En utilisant ces fonctionnalités, les développeurs peuvent mettre en place des mécanismes de sécurité robustes et protéger les données sensibles de leurs utilisateurs contre les menaces potentielles.

#### Extensibilité (Unique Identifier)

MVC offre une grande extensibilité grâce à son architecture modulaire et ses points d'extension flexibles, permettant aux développeurs d'ajouter facilement de nouvelles fonctionnalités et de personnaliser le comportement du framework selon leurs besoins spécifiques.

#### Support d'API Web (Unique Identifier)

MVC intègre un support natif pour la création d'API Web à l'aide du framework ASP.NET Web API, offrant ainsi une solution intégrée pour le développement d'applications web et d'API RESTful dans le même projet MVC.

#### Évolution vers ASP.NET Core (Unique Identifier)

MVC a été évolué vers ASP.NET Core, une version modernisée, légère et multiplateforme du framework ASP.NET. Les applications MVC existantes peuvent être migrées vers ASP.NET Core en utilisant des outils de migration fournis par Microsoft, offrant ainsi une voie d'évolution vers une plateforme plus moderne et plus flexible.

#### Support de Razor (Unique Identifier)

MVC utilise Razor comme moteur de rendu par défaut pour générer des vues dynamiques, offrant une syntaxe concise et expressive pour la création de vues HTML. Razor permet également l'intégration transparente de code C# dans les vues, ce qui facilite la création d'applications web riches et interactives.

#### Intégration avec Visual Studio (Unique Identifier)

MVC bénéficie d'une intégration étroite avec Visual Studio, offrant un environnement de développement riche et productif pour la création d'applications web. Visual Studio fournit des outils avancés pour le développement MVC, y compris l'éditeur de code, le débogueur, les outils de test et les fonctionnalités de déploiement, facilitant ainsi le développement, le débogage et la gestion des applications MVC.


# CONNEXION A UN SGBD

```
using System;
using System.Data.SqlClient;

namespace YourNamespace
{
    class Program
    {
        static void Main(string[] args)
        {
            string connectionString = "Data Source=YourServer;Initial Catalog=YourDatabase;User ID=YourUsername;Password=YourPassword";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    Console.WriteLine("Connection successful!");

                    // Perform database operations here

                    // Example: Execute a query
                    string query = "SELECT * FROM YourTable";
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                // Access data from the reader
                                int id = reader.GetInt32(0);
                                string name = reader.GetString(1);
                                // ...
                            }
                        }
                    }

                    connection.Close();
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
}
```
