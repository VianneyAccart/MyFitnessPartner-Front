<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
    MyFitnessPartner est une application de suivi pour votre fitness.
    <br /><br />
    <a href="http://localhost:4200/">Découvrir l'application</a>
    ·
    Signaler un bug : <a href="https://github.com/VianneyAccart/WCS_Checkpoint_4_Front/issues">front</a> | <a href="https://github.com/VianneyAccart/WCS_Checkpoint_4_Front/pulls">back</a>
    ·
    Proposer une fonctionnalité : <a href="https://github.com/WildCodeSchool/P3-toctoc-front-javangular-2021/pulls">front</a> | <a href="https://github.com/VianneyAccart/WCS_Checkpoint_4_Back/pulls">back</a>   
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#about-the-project">A propos du projet</a>
      <ul>
        <li><a href="#built-with">Outils de développement</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Bien démarrer</a>
      <ul>
        <li><a href="#prerequisites">Pré-requis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Utilisation</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## A propos du projet

MyFitnessPartner est une application qui vous permet de suivre votre fitness : enregistrer vos séances, retrouvez vos records, suivez vos mesures physiques...

<p align="right">(<a href="#top">Haut de page</a>)</p>

### Outils de développement

- [Angular](https://angular.io/)
- [Java/Spring](https://spring.io/)
- [JPA](https://spring.io/projects/spring-data-jpa)
- [Hibernate](https://hibernate.org/)
- [MySQL](https://www.mysql.com/fr/)
- [Bootstrap](https://getbootstrap.com)

<p align="right">(<a href="#top">Haut de page</a>)</p>

<!-- GETTING STARTED -->

## Bien démarrer

Pour utiliser l'application, il vous sera nécessaire de suivre les étapes suivantes : <br/>

### Pré-requis

- npm
  ```sh
  npm install npm@latest -g
  ```

- Angular
  ```sh
  npm install -g @angular/cli
  ```

- MySQL
  ```sh
  npm install mysql
  ```

- Installer <a href="https://www.java.com/fr/download/help/download_options.html" target="_blank">Java</a>

- Installer <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html" target="_blank">Spring</a>
<br/>


### Installation

1. Cloner le repository front-end
   ```sh
   git clone https://github.com/VianneyAccart/WCS_Checkpoint_4_Front.git
   ```
<br/>

2. Installer le package NPM
   ```sh
   npm install
   ```
<br/>

3. Cloner le repository back-end
   ```sh
   git clone https://github.com/VianneyAccart/WCS_Checkpoint_4_Back.git
   ```
<br/>

4. Créer une base de donnée MySQL et mettre à jour le fichier ```application.properties```
   ```sh
   spring.datasource.url= jdbc:mysql://VOTRE_PORT/VOTRE_BASE_DE_DONNÉE?useSSL=false&serverTimezone=Europe/Paris
   spring.datasource.username= VOTRE_USERNAME
   spring.datasource.password= VOTRE_PASSWORD
   ```
<br/>

5. Lancer votre serveur ce qui va créer automatiquement les tables dans la base de données

6. Éxécuter le script SQL pour remplir la base de donnée avec les informations par défaut. Il est disponible dans la partie back-end : ```src/main/resources/initialization.sql```

7. Lancer votre front
   ```sh
   ng s -o
   ```

<p align="right">(<a href="#top">Haut de page</a>)</p>

<!-- CONTACT -->

## Contact

Vianney ACCART - [LinkedIn](https://www.linkedin.com/in/vianneyaccart/) - vianneyaccart@gmail.com - [GitHub](https://github.com/VianneyAccart)<br>

<p align="right">(<a href="#top">Haut de page</a>)</p>

