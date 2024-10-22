# Timy
Une application permettant de gérer son calendrier au format numérique

# Choix du sujet

Nous avons choisi de travailler sur une application type Google Calendar ou agenda car nous l'utilisons régulièrement dans nos vie quotidienne. Notamment pour organiser nos emploi du temps d'étudiant. Ce type d'application est très pratique car cela permet de planifier plus facilement les tâches, les rendez-vous et les échéance. Cela permert d'améliorer la productivité et la gestion du temps.

Nous ne sommes pas les seuls à utiliser ce genre d'application. Par exemple l'application GOOGLE CALENDAR compte plus de 500 millions d'utilisateurs dans le monde (Source : Zipdo)

# Utilité sociale

L'utilité sociale d'une application du type agenda numérique est principalement d'améliorer l'organisation des activités, aussi bien au niveau personnel que professionnel. Elle permet de mieux gérer le temps, d'éviter les oublis, et de structurer les journées de manière efficace, ce qui permet d'avoir une meilleure qualité de vie. 

Ce type d'application permet aussi d'améliorer la communication entre collègues ou membre de la famille en facilitant la planification de réunions, d'événements ou encore de projet collaboratifs. Cela a pour avantage de réduire les risques de malentendus comme l'horaire d'un rendez vous par exemple.

De plus dans des contextes de travail à distance ou d'emploi du temps chargé, ces applications jouent un rôle clé dans la fluidité des échanges et la coordination des équipes, permettant ainsi d'augmenter la productivité globale tout en ayant un équilibre entre vie personnelle et professionnelle.

# Effets de la numérisation

La numérisation des agendas a transformé profondément la manière dont nous gérons notre temps et nos activités. 

Les applications d'agenda numériques offrent une flexibilité et une accessibilité bien plus grandes. Elles permettent de modifier, partager et synchroniser des événements en temps réel, ce qui simplifie la coordination entre plusieurs utilisateurs.  Aussi bien dans un cardre professionnel ou personnel. 

Cette transition vers le numérique a également permis d'éliminer l'utilisation du papier, contribuant ainsi à une réduction de la consommation de ressources physiques. En effet chaque année près de 10 millions d'agendas papiers sont vendus.  

Cependant, cette numérisation a aussi un impact écologique : elle augmente la demande en énergie, notamment avec l'usage des serveurs de données pour le stockage et la synchronisation. De plus il faut aussi énormément de ressources pour fabriquer les smartphones, ordinateurs ou encore serveurs.

Par ailleurs, la dépendance accrue aux appareils numériques peut également poser des questions en termes d'accessibilité pour certaines populations moins connectées. Ou encore le fait d'être constamment innondé de notifcation. 

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

Les résultats sont les suivants : https://github.com/UTT-GL03/Timy/blob/c439041eccb6c04562678f8e45810a7b60e8d9a0/Analyse%20GreenIT.md

# Maquette de l'interface et échantillon de données

En tenant compte des services comparés, des exigences environnementales, et des scénarios d'usage retenus, nous avons conçu une maquette simple et optimisée de notre prototype d'agenda en ligne.

L'interface est composée de deux types de "pages" distinctes :

- Vue hebdomadaire : cette page permet de visualiser les événements de la semaine en cours. Dans un souci de sobriété numérique, nous avons réduit au maximum les options affichées. Seules deux actions sont proposées : créer un événement et changer de vue (par exemple, passer de la vue hebdomadaire à la vue mensuelle). Cette approche minimaliste permet de limiter les sollicitations des serveurs et les actions inutiles, contribuant ainsi à réduire l'empreinte écologique.

- Zoom sur un événement : lorsqu'un événement est sélectionné, une nouvelle page dédiée s'ouvre, affichant les détails de cet événement. Ces informations incluent le titre de l'événement, la catégorie (professionnelle, personnelle, etc.), la date, l'heure de début, la durée, le lieu, le créateur, les invités, ainsi qu'une description. Cette séparation permet de n’afficher que les informations pertinentes au bon moment, réduisant ainsi la complexité de l'interface.

![Template agenda](https://github.com/user-attachments/assets/5ffb1bb8-aa06-4069-9005-6af886492467)

