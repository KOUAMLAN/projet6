Sophie Bluel - Portfolio Architecte d’Intérieur
Projet 6 - OpenClassrooms
Développé par [Ton Nom]

🚀 Présentation
Ce projet est une application web de portfolio pour Sophie Bluel, architecte d’intérieur.
Il comporte :

Un frontend statique (HTML/CSS/JS)

Un backend Node.js/Express avec une base de données SQLite

📁 Structure du projet
text
projet6/
│
├── backend/
│   ├── server.js
│   ├── database.sqlite
│   └── ... (autres fichiers backend)
│
├── Frontend/
│   ├── login.html
│   ├── index.html
│   ├── js/
│   │   ├── login.js
│   │   └── api.js
│   └── assets/
│       └── style.css
│
└── README.md
⚙️ Installation & Lancement
1. Backend
Ouvre un terminal dans le dossier backend puis tape :

bash
cd backend
npm install
npm start
Le serveur démarre sur le port 5678.

La base de données SQLite est automatiquement créée si elle n’existe pas.

2. Frontend
Le frontend est statique.
Aucune installation npm n’est nécessaire dans Frontend !

📢 Ouvre le dossier Frontend dans VS Code, puis :
Clic droit sur login.html → Open with Live Server

L’URL doit être :
http://127.0.0.1:5500/Frontend/login.html
ou
http://127.0.0.1:5500/login.html (si tu as ouvert le dossier Frontend directement)

🔑 Identifiants de connexion
Utilise ces identifiants pour te connecter :

Email : sophie.bluel@test.tld

Mot de passe : SOphie

Après connexion, il peut t’être demandé de changer ton mot de passe (fonctionnalité de sécurité).
Tu seras ensuite redirigé(e) vers la page principale du site.

🛠️ Dépannage
Erreur npm start dans Frontend
→ Ne fais jamais npm start dans Frontend. Utilise uniquement Live Server.

Erreur “Failed to fetch”
→ Vérifie que le backend tourne et que l’URL du fetch dans le JS est bien http://localhost:5678/api/users/login ou http://127.0.0.1:5678/api/users/login.

Erreur CORS
→ Le backend doit avoir app.use(cors()) dans server.js.

Mot de passe incorrect
→ Vérifie bien la casse : SOphie (majuscule S, O).

💡 Conseils
Laisse toujours le terminal backend ouvert pendant que tu utilises le site.

Ouvre le frontend avec Live Server, jamais en double-cliquant sur le HTML.

Pour toute modification du backend, relance npm start.

📄 Licence
Projet réalisé dans le cadre de la formation OpenClassrooms.

Bon test !
N’hésite pas à me contacter pour toute question ou amélioration.
