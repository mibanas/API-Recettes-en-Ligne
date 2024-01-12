# Application Recettes Backend

## Aperçu

Il s'agit du backend pour une application de recettes construite avec Node.js et Express.js, avec Swagger pour la documentation de l'API. L'API permet aux utilisateurs de gérer les origines et leur connexion aux recettes en utilisant les identifiants de plat.

## Table des matières

- [Application Recettes Backend](#application-recettes-backend)
  - [Aperçu](#aperçu)
  - [Table des matières](#table-des-matières)
  - [Pour commencer](#pour-commencer)
    - [Prérequis](#prérequis)
    - [Installation](#installation)
    - [Exécuter le serveur](#exécuter-le-serveur)
  - [Documentation de l'API](#documentation-de-lapi)
  - [Auteur](#auteur)
  - [En savoir plus](#en-savoir-plus)
    - [Contribuer](#contribuer)
  - [Licence](#licence)

## Pour commencer

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js
- npm (Gestionnaire de paquets Node)
- nodemon (devDependencies) : Nodemon est un utilitaire qui surveille les modifications dans les fichiers de votre application et redémarre automatiquement le serveur lorsque des modifications sont détectées. C'est principalement utilisé pendant le développement.
- dotenv (dependencies) : Dotenv est utilisé pour charger les variables d'environnement à partir d'un fichier .env dans votre application. Il est couramment utilisé pour stocker des configurations sensibles, telles que les clés d'API ou les informations de base de données, en dehors du code source.
- express (dependencies) : Express est un framework web pour Node.js qui facilite la création d'API et d'applications web. Il fournit des fonctionnalités robustes pour le routage, les gestionnaires de requêtes, etc.
- mongoose (dependencies) : Mongoose est une bibliothèque ODM (Object Data Modeling) pour MongoDB et Node.js. Il simplifie l'interaction avec une base de données MongoDB en fournissant un modèle d'objet pour les données.
- swagger-jsdoc (dependencies) : Swagger JSDoc est un module qui génère automatiquement une spécification Swagger (OpenAPI) à partir de commentaires JSDoc dans votre code. Cela facilite la documentation de votre API.
- swagger-ui-express (dependencies) : Swagger UI Express est un middleware pour Express qui sert la documentation Swagger générée par Swagger JSDoc sous forme d'interface utilisateur interactive.
  
### Installation

1. **Cloner le dépôt :**

   ```bash
   git clone [https://github.com/mibanas/API-Recettes-en-Ligne](https://github.com/mibanas/API-Recettes-en-Ligne.git)


2. **Exécuter le serveur :**

Pour exécuter le serveur, utilisez la commande suivante :

```bash
npm start


### Dependencies
**List of project dependencies:**

    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^8.0.4",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"

**Dev Dependencies:**
List of development dependencies:

    "nodemon": "^3.0.2"

## Author
[Mohamed Sanabi](https://github.com/mibanas).

## Learn More

- React.js Documentation: [https://react.dev/](https://react.dev/)
- json-server Documentation: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

### Contributing
If you would like to contribute to this project, please follow the Contribution Guidelines.

If you find issues or want to contribute, follow these steps:

1. Fork the project.
2. Create a branch for your feature: `git checkout -b feature/NewFeature`.
3. Commit your changes: `git commit -m "Add New Feature"`.
4. Push to the branch: `git push origin feature/NewFeature`.
5. Open a pull request.

## License
This project is licensed under the MIT License.

Feel free to customize this template according to your project's specific details and structure.

