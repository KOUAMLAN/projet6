Portfolio Sophie Bluel – Architecte d’Intérieur
Projet développé pour l’agence ArchiWebos
Développeur Front-End : [Votre Nom]

📝 Contexte & Scénario
Vous avez rejoint l’équipe ArchiWebos en tant que développeur front-end pour renforcer l’équipe en charge du site portfolio d’une architecte d’intérieur.

Brief d’équipe :
À la suite de votre première réunion, Charlotte, cheffe de projet, vous a transmis :

Le design Figma

Le code back-end (Node.js/Express + SQLite)

Le code front-end statique d’origine

Le Kanban avec vos tâches

🎯 Missions principales
Développer la page de présentation des travaux de l’architecte
(à partir du HTML fourni)

Créer la page de connexion de l’administrateur
(à concevoir de zéro)

Développer la modale d’upload de nouveaux médias
(à coder from scratch)

📁 Structure du projet
text
projet6/
│
├── Backend/
│   ├── app.js
│   ├── database.sqlite
│   ├── package.json
│   └── ...
│
├── FrontEnd/
│   ├── assets/
│   │   └── style.css
│   ├── index.html
│   ├── index.js
│   ├── login.js
│   ├── modal.js
│   ├── modale.html
│   ├── page_connexion.html
│   └── package-lock.json
│
└── README.md
⚙️ Installation & Lancement
1. Backend
Ouvre un terminal dans le dossier Backend :

bash
cd Backend
npm install
npm start
Le serveur démarre sur le port 5678.

La base de données SQLite est créée automatiquement si besoin.

2. FrontEnd
Le front-end est statique.
Aucune installation npm n’est nécessaire.

Ouvre le dossier FrontEnd dans VS Code.

Clique droit sur page_connexion.html ou index.html → Open with Live Server

🔑 Identifiants de connexion
Pour accéder à l’espace administrateur, utilise :

Email : sophie.bluel@test.tld

Mot de passe : SOphie


Erreur CORS
→ Le backend doit inclure app.use(cors()) dans app.js.

Erreur npm dans FrontEnd
→ Ne fais jamais npm install ou npm start dans FrontEnd.

Mot de passe incorrect
→ Vérifie bien la casse : SOphie (S et O majuscules).

💡 Conseils de l’équipe
Laisse toujours le terminal backend ouvert pendant que tu utilises le site.

Ouvre le frontend avec Live Server, jamais en double-cliquant sur le HTML.

Consulte le Kanban pour suivre l’avancement des tâches.

Pour toute modification du backend, relance npm start.

📄 Licence
Projet réalisé dans le cadre de la formation OpenClassrooms.


