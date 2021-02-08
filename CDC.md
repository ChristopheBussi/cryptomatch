# CRYPTO-MATCH

## Présentation du projet

Le site organise un concours de trading sur les crypto-monnaies sans argent réel.

Chaque participant obtiendra un capital de départ de 10 000 dollars fictifs qu’il pourra investir sur les crypto-monnaies de son choix sur une période donnée (par exemple 1 mois). Le gagnant est celui qui aura engendré la plus grande plus-value.

## Fonctionnalités du MVP

### MVP

- page d’accueil avec la présentation des règles du concours
- authentification des utilisateurs pour s’inscrire
- page listant des crypto-monnaies et leurs cotations
    - nom de la crypto-monnaie
    - dernier prix
    - variation sur les 24 h
- page de passation d’ordres
    - graphique du prix
    - quantité à négocier
    - boutons achat/vente
- page de tableau de bord avec la valeur et la composition du portefeuille.
    - historique des ordres, calcul des gains et pertes
- page de classement des participants qui se met à jour quotidiennement.
    - badges
- mise à jour des cotations en temps réel via websocket
  
### Evolutions possibles

- acceder au portfeuille d'un autre utilisateur via le classement
- page de gestion du compte
- affichage du nombre de participants en cours d’inscription
- laisser libre le choix de la devise de contrepartie.
- traduire le site en anglais

## Les technologies

React, SCSS + Symfony

## Le public visé

les amateurs de crypto-monnaies de trading, et de spéculation boursière.

## Les navigateurs compatibles

Google Chrome, Mozilla Firefox, Microsoft Edge

## L'arborescence

https://www.gloomaps.com/Pd9EmFlQCE

## Les Routes

| URL                | Description                            | Nom       | Controlleur        | Méthode     | Requête      |
| :----------------- | :------------------------------------- | :-------- | :----------------- | :---------- | :----------- |
| `/`                | accueil                                | homepage  | `MainController`   | `home`      | `GET`        |
| `/connexion/`      | connexion/insciption                   | login     | `LoginController`  | `login`     | `GET / POST` |
| `/list/`           | liste des cryptos                      | list      | `CryptoController` | `list`      | `GET`        |
| `/orders/[name]`   | page de la crypto et passation d’ordre | order     | `CryptoController` | `order`     | `GET / POST` |
| `/dashboard`       | portefeuille/historique                | dashboard | `UserController`   | `dashboard` | `GET `       |
| `/classement`      | classement des participants            | rank      | `UserController`   | `rank`      | `GET `       |
| `/qui-sommes-nous` | description de l'équipe                |           |                    |             |              |
| `/erreur`          | page 404                               |           |                    |             |              |

## Users Stories

| ID  | Page            | En tant que... | j'ai besoin de...                                  | afin de...                                                                        |
| --- | :-------------- | :------------- | :------------------------------------------------- | :-------------------------------------------------------------------------------- |
| 1   | Acceuil         | Utilisateur    | connaitre les régles du concours                   | savoir utiliser le site                                                           |
| 2   | Acceuil         | Utilisateur    | pouvoir acceder à la page de list                  | voir toutes les cryptos disponible sur le site                                    |
| 3   | Connexion       | Utilisateur    | pouvoir s'inscrire                                 | pouvoir participer                                                                |
| 4   | Connexion       | Utilisateur    | pouvoir me connecter                               | accéder a mon contenu                                                             |
| 5   | List            | Utilisateur    | pouvoir acceder à la liste des cryptos disponibles | voir les cours en temps réel                                                      |
| 6   | List            | Utilisateur    | pouvoir rechercher une crypto                      | la selectionner plus rapidement                                                   |
| 6   | List            | Utilisateur    | pouvoir selectionner une crypto                    | accéder à sa page d'ordre                                                         |
| 7   | Ordre           | Utilisateur    | passer des ordres                                  | de constituer mon portefeuille                                                    |
| 7   | Ordre           | Utilisateur    | voir le graphique de la crypto                     | suivre l'évolution du cours                                                       |
| 8   | Dashboard       | Utilisateur    | acceder à mon portefeuille                         | afin de voir l'état des plus ou moins values, voir ma position dans le classement |
| 9   | Dashboard       | Utilisateur    | voir l'historique de mes ordres                    | retrouver les cryptos sur lesquelles j'ai misé                                    |
| 9   | Classement      | Utilisateur    | voir le classement                                 | savoir ma position                                                                |
| 10  | Qui-sommes-nous | Utilisateur    | voir les membres de l'équipe                       | connaitre les créateurs du site                                                   |

## Rôles

| Nom        | Rôle                          |
| ---------- | ----------------------------- |
| Christophe | Product Owner et Scrum master |
| Walid      | Lead dev back                 |
| Julien     | Lead dev front                |
| Jocelyn    | Git master                    |

## BDD

###  MCD

### Dico des données 

| Nom                     | Description               | Type     | Commentaire | Entité    |
| ----------------------- | :------------------------ | :------- | :---------- | :-------- |
| username                | pseudo de l'utilisateur   | string   |             | User      |
| email                   | email de l'utilisateur    | string   |             | User      |
| password                | mot de passe              | string   |             | User      |
| created_at              | date de la création       | datetime |             | User      |
| USD_amount              | valeur en USD             | float    |             | User      |
| rank_valorisation_amout | valeur du portefeuille    | float    |             | User      |
|                         |                           |          |             |           |
| id                      | id de l'ordre             | integer  |             | Order     |
| datetime                | date de passage d'ordre   | datetime |             | Order     |
| quantity                | quantité de crypto        | float    |             | Order     |
| order_type              | vente ou achat(buy, sell) | string   |             | Order     |
| amount                  | prix en USD               | float    |             | Order     |
|                         |                           |          |             |           |
| pair_name               | nom de la crypto          | string   |             | Crypto    |
|                         |                           |          |             |           |
| id_portfolio            | id du portefeuille        | integer  | table pivot | Hold      |
| pair_name               | nom de la crypto          | string   | table pivot | Hold      |
|                         |                           |          |             |           |
| id_portfolio            | id du portefeuille        | string   |             | Portfolio |
| actual_quantity         | quantité de la crypto     | float    |             | Portfolio |
| average_price           | prix moyen                | float    |             | Portfolio |
