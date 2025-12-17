# Test Technique - Symfony Login & Register

Ce projet est une application web réalisée avec Symfony 7 et Vue.js 3.
Elle implémente un système complet d'authentification (Inscription, Connexion, Déconnexion) avec une validation de mot de passe dynamique côté client.

## Pre-requis Techniques

Pour faire tourner le projet, vous avez besoin de :
*   PHP 8.2 ou supérieur (avec extensions sqlite3, intl, pdo)
*   Composer (Gestionnaire de paquets PHP)
*   Node.js 18+ & NPM (Pour compiler les assets Vue.js)
*   Symfony CLI (Optionnel, mais recommandé pour le serveur local)

## Installation & Lancement

Suivez ces étapes dans l'ordre pour démarrer le projet.

### 1. Cloner et Installer les dépendances
```bash
# Installer les dépendances Backend (Symfony)
composer install

# Installer les dépendances Frontend (Vue.js, Bootstrap)
npm install
```

### 2. Base de données (SQLite)
Le projet est configuré pour utiliser SQLite afin de faciliter le test (aucune configuration serveur requise).
Le fichier de base de données sera créé automatiquement dans var/data.db.

```bash
# Créer la base de données
php bin/console doctrine:database:create

# Exécuter les migrations pour créer la table User
php bin/console doctrine:migrations:migrate
```
(Répondez "yes" si on vous demande confirmation)

### 3. Compiler les Assets
Pour générer le CSS (Bootstrap) et le JS (Vue.js) :

```bash
# Compilation en mode développement
npm run dev
```

### 4. Démarrer le Serveur
Vous pouvez utiliser le serveur web de votre choix.

Option A : Avec Symfony CLI
```bash
symfony server:start
```
L'application sera accessible sur http://127.0.0.1:8000

Option B : Avec le serveur interne PHP
```bash
php -S localhost:8000 -t public/
```
Accédez à http://localhost:8000

