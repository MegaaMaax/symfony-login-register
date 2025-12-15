# Test Technique - Symfony Login & Register

Ce projet est une application Symfony 7 avec Vue.js 3, réalisée dans le cadre d'un test technique.
L'objectif est de fournir une page de création de compte et de connexion fonctionnelle, avec une validation dynamique du mot de passe côté client en Vue.js.

## Stack Technique

*   **Backend**: PHP 8.3 / Symfony 7.4
*   **Frontend**: Vue.js 3, Bootstrap 5, Webpack Encore
*   **Base de données**: SQLite (Pour faciliter le setup sans serveur externe)

## Pré-requis

Assurez-vous d'avoir installé sur votre machine :
*   PHP 8.2+
*   Composer
*   Node.js & NPM

## Installation Rapide

1.  **Installer les dépendances PHP et JS**
    ```bash
    composer install
    npm install
    ```

2.  **Préparer la base de données**
    Le projet utilise SQLite. Le fichier de base de données sera créé dans `var/data.db`.
    Exécutez cette commande pour créer la structure des tables (Entité User) :
    ```bash
    php bin/console doctrine:database:create
    php bin/console doctrine:schema:update --force
    ```

3.  **Compiler les assets (Vue.js / CSS)**
    Pour générer les fichiers CSS et JS finaux :
    ```bash
    npm run build
    ```

## Lancer l'application

Vous pouvez utiliser le serveur de développement de Symfony ou le serveur interne de PHP.

```bash
symfony server:start
```
Ou
```bash
php -S localhost:8000 -t public/
```

L'application sera accessible sur [http://localhost:8000](http://localhost:8000).
