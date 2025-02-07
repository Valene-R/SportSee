# SportSee FR-Version/[EN-Version](#en-version)

### FR-Version

## Un tableau de bord d'analyse sportive

SportSee est une application d'analyse sportive permettant de suivre les performances des utilisateurs via un tableau de bord moderne.
Ce projet inclut un **backend (micro-API)** et un **frontend** construit avec **React**, **Vite**, et **Tailwind CSS**.

## Technologies utilisées

Le projet utilise les technologies et outils suivants :

- **Docker Desktop** : Conteneurisation des environnements Backend et Frontend
- **React** : Bibliothèque JavaScript pour le Frontend
- **Vite** : Outil de développement rapide pour React
- **Tailwind CSS** : Framework CSS utilitaire pour un design efficace
- **ESLint** : Vérification de la qualité du code pour maintenir un code propre et sans erreur
- **Prettier** : Formatage automatique du code pour un code cohérent
- **Postman** : Test et documentation des API pour faciliter la visualisation des endpoints du Backend
- **Recharts** : Librairie de graphiques pour React
- **Axios** : Gestion des requêtes HTTP

## Endpoints Backend

Consultez les endpoints exposés par le backend dans le fichier **README du Backend**.

**Aperçu rapide des routes disponibles pour l’API** :

**Récupérer les informations d'un utilisateur** :
`GET /user/:userId` : - `http://localhost:3000/user/12` `http://localhost:3000/user/18`

**Récupérer les activités de l'utilisateur** :
`GET /user/:userId/activity` : - `http://localhost:3000/user/12/activity` `http://localhost:3000/user/18/activity`

**Récupérer les sessions moyennes** :
`GET /user/:userId/average-sessions` : - `http://localhost:3000/user/12/average-sessions` `http://localhost:3000/user/18/average-sessions`

**Récupérer les performances de l'utilisateur** :
`GET /user/:userId/performance` : - `http://localhost:3000/user/12/performance` `http://localhost:3000/user/18/performance`

**Attention, actuellement seuls deux utilisateurs ont été moqués. Ils ont respectivement les identifiants utilisateur 12 et 18.**

## Comment démarrer le projet ?

**Cloner ce dépôt** :

```sh
git clone https://github.com/Valene-R/SportSee.git
cd < nom-du-repo >
```

## Avec Docker Desktop (Recommandé)

### Prérequis

- **Docker Desktop** installé et en cours d'exécution : [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **WSL Version 2** activé sur Windows

Pour lancer le projet complet avec **Docker** :

**Se placer à la racine du projet**

1. **Lancer les services avec Docker Compose** :
   `docker-compose up --build`

2. **Accéder à l'application** :

- Frontend : http://localhost:5173
- Backend : http://localhost:3000

4. **Les logs des services peuvent être consultés avec** :
   `docker-compose logs`

5. **Vérifier que les conteneurs sont bien en cours d'exécution** :
   `docker ps`

   Si une liste de conteneurs actifs est affichée, tout fonctionne correctement.

### Arrêter et Réinitialiser Docker

**Arrêter les services Docker** :
`docker-compose down`

**Supprimer les anciens conteneurs, images et volumes** :
Si vous souhaitez une installation propre, exécutez :

`docker-compose down --rmi all --volumes`

Puis relancez l'application avec :
`docker-compose up --build`

**Lancer l'application en production**
Si vous devez exécuter l'application pour un **déploiement en production**, utilisez :

```sh
docker-compose down --rmi all --volumes
docker-compose -f docker-compose.yml up --build
```

### Notes importantes

- Assurez-vous que **Docker Desktop** est bien démarré avant de lancer les commandes.
- En cas de problème avec WSL, redémarrez **Docker Desktop** et exécutez `wsl --shutdown` puis relancez Docker.

## Sans Docker Desktop

### Prérequis

- **NodeJS** (version 12.18) ou plus (testé jusqu'à Node 20.0)
- **NPM** installé

**Lancer le projet manuellement** :

- `cd Backend` : se référer au fichier **README du Backend**

```sh
cd Frontend
npm install
npm run dev
```

### EN-Version

## A sports analytics dashboard

SportSee is a sports analytics application that allows users to track their performance via a modern dashboard.
This project includes a **backend (micro-API)** and a **frontend** built with **React**, **Vite**, and **Tailwind CSS**.

## Technologies used

This project uses the following technologies and tools:

- **Docker Desktop** : Containerization of Backend and Frontend environments
- **React** : JavaScript library for the Frontend
- **Vite** : Fast development tool for React
- **Tailwind CSS** : Utility-first CSS framework for efficient design
- **ESLint** : Code quality verification to maintain clean and error-free code
- **Prettier** : Automatic code formatting for a consistent structure
- **Postman** : API testing and documentation to facilitate Backend visualization
- **Recharts** : Charting library for React
- **Axios** : HTTP request management

## Endpoints Backend

Check out the backend-exposed endpoints in the file **README du Backend**.

**Quick overview of available API routes** :

**Retrieve user information including the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.)** :
`GET /user/:userId` : - `http://localhost:3000/user/12` `http://localhost:3000/user/18`

**Retrieve a user's activity day by day with kilograms and calories** :
`GET /user/:userId/activity` : - `http://localhost:3000/user/12/activity` `http://localhost:3000/user/18/activity`

**Retrieve the average sessions of a user per day** :
`GET /user/:userId/average-sessions` : - `http://localhost:3000/user/12/average-sessions` `http://localhost:3000/user/18/average-sessions`

**Retrieve a user's performance** :
`GET /user/:userId/performance` : - `http://localhost:3000/user/12/performance` `http://localhost:3000/user/18/performance`

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

## How to start the project?

**Clone this repository** :

```sh
git clone https://github.com/Valene-R/SportSee.git
cd < nom-du-repo >
```

## Using Docker Desktop (Recommended)

### Prerequisites

- **Docker Desktop** installed and running : [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **WSL Version 2** enabled on Windows

Start the complete project with **Docker** :

**Navigate to the project root**

1. **Launch the services avec Docker Compose** :
   `docker-compose up --build`

2. **Access the application** :

- Frontend : http://localhost:5173
- Backend : http://localhost:3000

4. **The service logs can be viewed with** :
   `docker-compose logs`

5. **Check that the containers are running** :
   `docker ps`
   If a list of active containers is displayed, everything works fine.

### Stop and Reset Docker

**Stop Docker services** :
`docker-compose down`

**Delete old containers, images and volumes** :
If you want a clean install, run :
`docker-compose down --rmi all --volumes`

Then restart the application with :
`docker-compose up --build`

**Launch the application in production**
If you need to run the application for **production deployment**, use :

```sh
docker-compose down --rmi all --volumes
docker-compose -f docker-compose.yml up --build
```

### Important notes

- Make sure **Docker Desktop** is started before running commands.
- If there is a problem with WSL, restart **Docker Desktop** and run `wsl --shutdown` then restart Docker.

## Without Docker Desktop

### Prerequisites

- **NodeJS** (version 12.18) or higher (tested up to Node 20.0)
- **NPM** installed

**Start the project manually**
`cd Backend` : refer to the file **README of the Backend**

```sh
cd Frontend
npm install
npm run dev
```
