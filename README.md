# Symfony Login & Register

Ce projet est une application web réalisée avec Symfony 7 et Vue.js 3.
Elle implémente un système complet d'authentification (Inscription, Connexion, Déconnexion) avec une validation de mot de passe dynamique côté client.

## Fonctionnalités

1.  **Authentification Complète**
    *   **Inscription (/register)** : Création de compte avec validation de mot de passe dynamique (Vue.js).
    *   **Connexion (/login)** : Accès sécurisé avec vérification des identifiants.
    *   **Déconnexion (/logout)** : Fin de session sécurisée.

2.  **Page d'accueil (/)**
    *   Affiche un message personnalisé si vous êtes connecté.
    *   Bouton de déconnexion fonctionnel.

3.  **Mon Profil (/profile)**
    *   Accessible via la barre de navigation une fois connecté.
    *   Upload de photo de profil (JPG/PNG).
    *   Modification de la biographie.
    *   Changement de mot de passe sécurisé avec validation dynamique (Vue.js).

## Lancement via Docker

1. **Démarrer l'application** :
   ```bash
   docker compose up -d --build
   ```
   L'installation des dépendances, la compilation des assets et la base de données sont gérées automatiquement.

2. **Accéder au site** :
   Ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.
