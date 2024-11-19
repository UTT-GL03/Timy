# Timy
Une application permettant de gérer son calendrier au format numérique.

# Choix du sujet

Nous avons choisi de travailler sur une application de type Google Calendar ou une autre application d'agenda, car nous l'utilisons régulièrement dans notre vie quotidienne, notamment pour organiser nos emplois du temps d'étudiants. Ce type d'application est très pratique, car il permet de planifier plus facilement les tâches, les rendez-vous et les échéances. Cela améliore la productivité et la gestion du temps.

Nous ne sommes pas les seuls à utiliser ce genre d'application. Par exemple, l'application GOOGLE CALENDAR compte plus de 500 millions d'utilisateurs dans le monde (Source : [ExplodingTopics](https://explodingtopics.com/blog/google-workspace-stats)).

# Utilité sociale

L'utilité sociale d'une application de type agenda numérique est principalement d'améliorer l'organisation des activités, aussi bien au niveau personnel que professionnel. Elle permet de mieux gérer le temps, d'éviter les oublis, et de structurer les journées de manière efficace, cela contribue à une meilleure qualité de vie.

Ce type d'application améliore aussi la communication entre collègues ou membres de la famille en facilitant la planification de réunions, d'événements ou de projets collaboratifs. Cela réduit les risques de malentendus, comme l'horaire d'un rendez-vous, par exemple.

De plus, dans des contextes de travail à distance ou d'emploi du temps chargé, ces applications jouent un rôle clé dans la fluidité des échanges et la coordination des équipes, augmentant ainsi la productivité globale tout en facilitant l'équilibre entre vie personnelle et professionnelle.

# Effets de la numérisation

L’empreinte carbone d’un agenda papier de 150 à 250 pages est similaire à celle d’un livre de format équivalent. En moyenne, la production d’un livre papier de 200 pages génère entre 1,3 et 7,5 kg d’équivalent CO₂, avec des variations dues aux pratiques de production, à l’utilisation de papier recyclé ou non, et au transport des matériaux (Source : [Momox](https://www.momox.fr/trucs-et-astuces/l-empreinte-carbone-d-un-livre/) et [Bibliothérapie suisse](https://bibliotherapie-suisse.ch/livre-papier-numerique-empreinte-ecologique/)). Si l'on considère un impact intermédiaire de 4 kg pour un agenda papier et un usage professionnel d’environ 200 jours par an, cela représente un impact de 20 g de CO₂ par jour d’utilisation.

L’impact écologique d’un agenda papier est amorti par cet usage quotidien sur une année. Cependant, les alternatives numériques ont des spécificités différentes. Par exemple, si l’empreinte carbone d’une consultation numérique est estimée à environ 2 g de CO₂ (incluant les serveurs et l’affichage), l’agenda numérique dépasse l’impact quotidien d’un agenda papier lorsqu’il est consulté plus de 10 fois par jour. Ainsi, selon la fréquence d’usage, la balance écologique peut pencher en faveur du papier ou du numérique.

Les applications d’agenda numériques offrent néanmoins des avantages uniques, comme la gestion d’un calendrier partagé entre plusieurs utilisateurs (équipes de travail, familles, ou couples). Cela simplifie la coordination en permettant de modifier, partager et synchroniser des événements en temps réel. De plus, la synchronisation entre ordinateurs et smartphones renforce leur utilité dans un environnement connecté.

Cette transition vers le numérique a également permis de réduire l'utilisation du papier, contribuant ainsi à réduire la consommation de ressources physiques. En effet, chaque année, près de 10 millions d'agendas papier sont vendus.

Cependant, cette numérisation a aussi un impact écologique : elle augmente la demande en énergie, notamment avec l'usage des serveurs de données pour le stockage et la synchronisation. De plus, il faut énormément de ressources pour fabriquer les smartphones, ordinateurs, ou encore serveurs.

Par ailleurs, la dépendance accrue aux appareils numériques peut également poser des questions en termes d'accessibilité pour certaines populations moins connectées, ainsi que des problèmes liés aux notifications constantes.

# Scénarios d'usage et impacts

Nous faisons l'hypothèse que l’agenda en ligne est utilisé de manière régulière au quotidien pour organiser des événements personnels ou professionnels. Les fonctionnalités principales incluent la création, la modification, et la suppression d’événements, ainsi que la consultation de l'agenda sous différents formats (journée, semaine, mois). Dans ce cadre, nous avons identifié plusieurs scénarios d'usage qui permettent d’évaluer l'impact écologique lié à l’utilisation du service.

# Scénario : "Créer un événement"

1. L'utilisateur ouvre l'application d'agenda à partir d'un favori (sans passer par un moteur de recherche) sur son smartphone ou ordinateur.
2. Il crée un nouvel événement en renseignant un titre, une date et une heure.
3. L'événement est ajouté au calendrier avec une synchronisation automatique sur tous ses appareils.

# Scénario : "Modifier un événement"

1. L'utilisateur consulte son agenda pour vérifier les rendez-vous à venir.
2. Il modifie un événement existant en changeant sa description, sa date ou son heure.
3. La modification est immédiatement synchronisée avec les appareils connectés.

# Scénario : "Supprimer un événement"

1. L'utilisateur décide d'annuler un rendez-vous ou un événement.
2. Il sélectionne l'événement dans son agenda et choisit l’option pour le supprimer.
3. L'événement est supprimé sur tous ses appareils synchronisés.

# Scénario : "Changer de vue"

1. L'utilisateur souhaite consulter son emploi du temps pour la semaine ou pour le mois.
2. Il change la vue de son agenda, passant par exemple d'une vue hebdomadaire à une vue mensuelle.

# Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : EcoIndex, Octo, GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.
  
Nous avons choisi de comparer l'impact des scénarios sur différents agenda en ligne, connus de tous ou peu utilisés :

- Google Agenda,
- Outlook,
- Zimbra Messagerie,

[Les résultats sont les suivants](https://github.com/UTT-GL03/Timy/blob/c439041eccb6c04562678f8e45810a7b60e8d9a0/Analyse%20GreenIT.md)

L’analyse montre que Zimbra est le plus respectueux de l’environnement, avec une empreinte faible (EcoIndex A et B), une page légère, et peu de requêtes, générant ainsi moins de GES. En revanche, Google Agenda et Outlook sont beaucoup plus gourmands en ressources, avec des pages volumineuses et de nombreuses requêtes, entraînant une empreinte carbone bien plus élevée. Cependant, Zimbra présente un inconvénient : plus le nombre d’événements augmente, plus le nombre de requêtes nécessaires s’intensifie, ce qui impacte progressivement son efficacité écologique.

# Maquette de l'interface et échantillon de données

En tenant compte des services comparés, des exigences environnementales, et des scénarios d'usage retenus, nous avons conçu une maquette simple et optimisée de notre prototype d'agenda en ligne.

L'interface est composée de deux types de "pages" distinctes :

- Vue hebdomadaire : cette page permet de visualiser les événements de la semaine en cours. Dans un souci de sobriété numérique, nous avons réduit au maximum les options affichées. Seules deux actions sont proposées : créer un événement et changer de vue (par exemple, passer de la vue hebdomadaire à la vue mensuelle). Cette approche minimaliste permet de limiter les sollicitations des serveurs et les actions inutiles, contribuant ainsi à réduire l'empreinte écologique.

- Zoom sur un événement : lorsqu'un événement est sélectionné, une nouvelle page dédiée s'ouvre, affichant les détails de cet événement. Ces informations incluent le titre de l'événement, la catégorie (professionnelle, personnelle, etc.), la date, l'heure de début, la durée, le lieu, le créateur, les invités, ainsi qu'une description. Cette séparation permet de n’afficher que les informations pertinentes au bon moment, réduisant ainsi la complexité de l'interface.

![Template agenda](https://github.com/user-attachments/assets/5ffb1bb8-aa06-4069-9005-6af886492467)

Fig 1 : Maquette de l'interface du prototype

# Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données chargées de manière statique

Pour cette première version du prototype :

- L’échantillon de données est chargé de manière statique dans le code, permettant une visualisation immédiate des événements de la semaine.
- Les fonctionnalités implémentées se concentrent sur le scénario prioritaire, qui permet de charger la page d’une semaine et de naviguer entre les différentes semaines.
- Ce scénario nécessite une interface intuitive qui facilite la transition d’une semaine à l’autre tout en affichant clairement les événements programmés.

Ce prototype vise à établir une base fonctionnelle pour une gestion efficace du calendrier, tout en ouvrant la voie à des améliorations futures et à des fonctionnalités plus avancées.

<img width="947" alt="Site" src="https://github.com/user-attachments/assets/25011f9f-4f7c-4f75-82bb-913ec4cc1bbb">

Fig 2 : Prototype de la page de l'agenda



Pour réaliser notre agenda, nous avons utilisé la bibliothèque JavaScript Schedule-X qui permet de gérer des événements sous forme de calendrier. De plus cette bibliothèque dispose de nombreuses fonctionnalités de personnalisation.

Nous avons choisi d'utiliser cette bibliothèque car elle permet de créer un calendrier de manière simple et rapide, sans nécessiter de configuration complexe. Son intégration est facilitée par une gestion automatique des styles. Cette bibliothèque nous semblait simple d'utilisation, mais nous avons eu par la suite des difficultés à ajouter nos données (des événements) et les afficher dans l'agenda.

Pour cette première version du prototype, les fonctionnalités sont encore très limitées. Actuellement, il est nécessaire d’intégrer des options pour ajouter manuellement un événement, en supprimer, et potentiellement changer la vue de semaine à mois.

En ce qui concerne la phase d’analyse Green IT, nous avons examiné notre prototype en analysant le chargement d’une page selon deux scénarios : l’un sans événements affichés et l’autre avec des événements. Cette analyse a été réalisée dans deux modes : "développement" et "pré-production". 

Tester en mode développement permet de corriger rapidement les bugs et de valider les fonctionnalités dans un environnement contrôlé. En pré-production, on teste l'application dans des conditions proches de la production, ce qui permet de vérifier sa performance et sa stabilité avant le déploiement.

Nous avons obtenu d'excellents résultats, comparables à ceux de Zimbra Messagerie. Une différence notable est que, contrairement à Zimbra, notre application ne génère pas davantage de requêtes en fonction du nombre d’événements présents, ce qui contribue à une gestion plus efficace des ressources.



|        **Scénario**        |         | **EcoIndex** | **Eau (cl)** | **GES(gCO2e)** | **Taille du DOM** | **Requêtes** | **Taille de la page (Ko)** |
|:--------------------------:|:-------------------------------:|:------------:|:------------:|:--------------:|:-----------------:|:------------:|:--------------------------:|
| **Chargement de la page (sans events)**  |   Mode "Développement"          |   🟢 B 78.68   |     2.11     |      1.41      |        128        |       22      |              1 669             |
| **Chargement de la page (sans events)**  |   Mode "Pré-Production"         |   🟢 A 90.20   |     1.79     |      1.20      |        124        |      4      |            102            |

Tab 1 : Evaluation de l'impact du prototype I sans événements

|        **Scénario**        |         | **EcoIndex** | **Eau (cl)** | **GES(gCO2e)** | **Taille du DOM** | **Requêtes** | **Taille de la page (Ko)** |
|:--------------------------:|:-------------------------------:|:------------:|:------------:|:--------------:|:-----------------:|:------------:|:--------------------------:|
| **Chargement de la page (avec events)**  |   Mode "Développement"          |   🟢 B 79.37   |     2.12     |      1.41      |        138        |       22      |              1 672             |
| **Chargement de la page (avec events)**  |   Mode "Pré-Production"         |   🟢 A 89.90   |     1.80     |      1.20      |        134        |      4      |            103            |

Tab 2 : Evaluation de l'impact du prototype I avec événements

# Prototype n°2 : Fonctionnalités pour le scénario prioritaire avec données statiques chargées de manière dynamique

Pour cette deuxième version du prototype, les données (toujours statiques) sont désormais chargées par le frontend à travers le réseau immédiatement après un premier affichage à vide. Ce comportement, plus réaliste, n'a pour effet qu'une requête supplémentaire par page affichée.

|        **Scénario**        |         | **EcoIndex** | **Eau (cl)** | **GES(gCO2e)** | **Taille du DOM** | **Requêtes** | **Taille de la page (Ko)** |
|:--------------------------:|:-------------------------------:|:------------:|:------------:|:--------------:|:-----------------:|:------------:|:--------------------------:|
| **Chargement de la page**  |   Mode "Développement"          |   🟢 B 78.66   |     2.14     |      1.43      |        143        |       25      |              1 690             |
| **Chargement de la page**  |   Mode "Pré-Production"         |   🟢 A 86.61   |     1.81     |      1.21      |        139        |      5      |            105            |

Tab 3 : Evaluation de l'impact du prototype II avec événements

Concernant l'évaluation de l'impact environemental de ce scénario, par rapport au tableau précédent (cf. Tab.2), les résultats sont quasiment identiques. On peut noter une légère augmentation pour chaque paramètre qui nous semble négligeable.

Nous utiliserons désormais un autre logiciel, GreenFrame, qui évalue non seulement l'impact "environnemental" de la consultation, mais aussi l'impact direct de la consultation elle-même, de manière beaucoup plus fiable, en se basant sur les statistiques d'utilisation des ressources physiques : CPU, mémoire, réseau et disque. 

<img width="640" alt="GreenFrame Browser Scénario 1" src="https://github.com/user-attachments/assets/9410d7c2-9d71-4b6f-809c-19ba72c1124f">

Fig 3: Consommation de ressources lors de la consultation de l'agenda.


Lors de l'affichage de la page de l'agenda, nous pouvons observer un pic de consommation de CPU et de réseau. Mais en réalité, ce qui consomme le plus dans notre cas est l'écran. En effet, les autres composants (CPU, mémoire, disque...) ne consomment pas beaucoup, car notre application ne réalise pas de calculs complexes et ne stocke pas beaucoup d'informations pour l'instant. Ainsi, la consommation principale provient de l'écran, qui représente 94% de la consommation totale.

<img width="634" alt="GreenFrame Serveur Scénario 1" src="https://github.com/user-attachments/assets/4cdfea33-4ff3-4fb3-affb-e59703fae70b">

Fig 4 : Consommation de ressources par le navigateur lors de la consultation de l'agenda

Nous avons également évalué l'impact écologique de notre partie "Serveur". Nous pouvons observer que le serveur a un impact très faible (moins de 3%). En effet, la seule tâche du serveur pour le moment est de stocker des données statiques.

*Problème rencontré : Nous n'avons pas pu réaliser l'analyse des différents sites concurrents (Google Agenda, Zimbra, Outlook). En effet, pour effectuer l'analyse de ces agendas numériques, il est nécessaire de se connecter à un compte utilisateur. GreenFrame ne dispose pas de la capacité de se connecter automatiquement et se limite donc à analyser les pages de connexion. Cependant, en utilisant l'interface en ligne de commande, il est possible de créer un scénario personnalisé avec Playwright. Mais la synchronisation des actions est complexe, ce qui rend cette approche peu recommandée pour ce cas. De plus, la gestion des mots de passe personnels nécessite une attention particulière pour éviter toute fuite de données.*

# Prototype n°3 : Fonctionnalités pour le scénario prioritaire avec données stockées dans une base de données

Pour la troisième version du prototype, les données sont désormais stockées dans une base de données dynamique interrogeable via une API Web (CouchDB). Ce choix permet, d'une part, de faciliter l’ajout ou la modification des articles, et, d'autre part, de confier au serveur le filtrage des données pertinentes, rendant ainsi le système plus structuré et évolutif.

Dans ce deuxième prototype, les mesures révèlent une forte augmentation de la charge CPU, passant de 2.1 à 3.3, tandis que les autres paramètres évalués, tels que le trafic réseau, affiche une très légère baisse, et les ressources liées à l'affichage (screen) restent stables. Cette hausse du CPU indique une intensification des calculs ou traitements requis.


<img width="609" alt="augmentation" src="https://github.com/user-attachments/assets/c45aa016-b391-4956-80de-52a65adcbf0d">
<img width="603" alt="augmentation2" src="https://github.com/user-attachments/assets/420a4bf4-4981-4c74-ac2d-bac4790a48a3">


Fig 5 : Comparaison de l'impact de la consultation de la page d'un article entre les prototypes 3 (en haut) et 2 (en bas)

Cette baisse de l'impact réseau est néanmoins contrebalancée par une augmentation de l'utilisation du CPU, notamment par la base de données, dont la sollicitation semble persistante. Cette dynamique suggère que, bien que le réseau bénéficie d’une certaine optimisation, la gestion du traitement des données reste un domaine clé pour améliorer l'efficacité du système global.

<img width="602" alt="banckend" src="https://github.com/user-attachments/assets/4b6d399b-c81a-476b-b107-97a78d7ba10e">

Fig 6 : Profil dans le temps de l'impact de la base de données lors de la consultation de la page d'un article.


