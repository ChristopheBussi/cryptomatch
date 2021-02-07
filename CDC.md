# CRYPTO-MATCH

## Présentation du projet

Le site organise un concours de trading sur les crypto-monnaies sans argent réel.

Chaque participant obtiendra un capital de départ de 10 000 dollars fictifs qu’il pourra investir sur les crypto-monnaies de son choix sur une période donnée (par exemple 1 mois). Le gagnant est celui qui aura engendré la plus grande plus-value.

## Fonctionnalités du MVP et arborescence

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

### Evolutions possibles

- affichage du nombre de participants en cours d’inscription
- mise à jour des cotations en temps réel via websocket
- laisser libre le choix de la devise de contrepartie.
- traduire le site en anglais

## Les technologies :

React, SCSS + Symfony

## Le public visé :

les amateurs de crypto-monnaies de trading, et de spéculation boursière.

## Les navigateurs compatibles :

Google Chrome, Mozilla Firefox, Microsoft Edge

## Les Routes

| URL               | Description                            | Nom       | Controlleur        | Méthode     | Requête      |
| :---------------- | :------------------------------------- | :-------- | :----------------- | :---------- | :----------- |
| `/`               | accueil                                | homepage  | `MainController`   | `home`      | `GET`        |
| `/connexion/`     | connexion/insciption                   | login     | `LoginController`  | `login`     | `GET / POST` |
| `/list/`          | liste des cryptos                      | list      | `CryptoController` | `list`      | `GET`        |
| `/orders/[name]`  | page de la crypto et passation d’ordre | order     | `CryptoController` | `order`     | `GET / POST` |
| `/dashboard`      | portefeuille/hostorique                | dashboard | `UserController`   | `dashboard` | `GET `       |
| `/qui-somme-nous` | description de l'équipe                |           |                    |             |              |

## Users Stories

| ID  | Thème   | En tant que... | j'ai besoin de...               | afin de...             |
| --- | :------ | :------------- | :------------------------------ | :--------------------- |
| 1   | Acceuil | Utilisateur    | connaitre les régles du concour | savoir utilisé le site |

## Rôles

Reste à attribuer : 
- Scrum master
- Lead dev front
- Lead dev back
  
| Nom        | Rôle          |
| ---------- | ------------- |
| Christophe | Product Owner |
| Walid      | ----          |
| Julien     | ----          |
| Jocelyn    | Git master    |