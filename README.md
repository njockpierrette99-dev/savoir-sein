# Octobre Rose — Je connais mes seins

Site d'information et de sensibilisation au cancer du sein, en français, destiné aux femmes et aux jeunes femmes, notamment au Cameroun.

**Ce site n'est pas un outil médical.** Il ne pose aucun diagnostic, ne collecte aucune donnée personnelle et encourage à consulter un professionnel de santé.

Technologies : HTML5, CSS3, JavaScript (sans framework).

---

## 1. Les fichiers du projet

```
octobre-rose/
├── index.html          Page d'accueil
├── cancer.html         Comprendre le cancer du sein
├── signes.html         Les signes à connaître
├── risques.html        Les facteurs de risque
├── consultation.html   Que faire si je remarque un changement ?
├── depistage.html      Dépistage et diagnostic
├── quiz.html           Quiz éducatif
├── ressources.html     Ressources fiables
├── css/style.css       Toute la mise en forme (couleurs, tailles, mise en page mobile)
├── js/main.js          Menu pour téléphone + année du footer
├── js/quiz.js          Le quiz (questions, progression, résultat)
├── images/             Dossier pour vos images (vide pour l'instant)
└── README.md           Ce fichier
```

À quoi sert chaque type de fichier :

- **.html** : le contenu de chaque page (titres, textes, boutons).
- **.css** : l'apparence (couleurs, espaces, taille des textes, adaptation au téléphone).
- **.js** : les comportements (ouvrir le menu, faire fonctionner le quiz).

---

## 2. Lancer le site sur votre ordinateur

**Méthode la plus simple :** double-cliquez sur `index.html`. Il s'ouvre dans votre navigateur.

**Méthode avec un petit serveur local** (recommandée, plus proche d'un vrai site). Ouvrez un terminal dans le dossier `octobre-rose` :

```
cd octobre-rose
python3 -m http.server 8000
```

Puis ouvrez dans votre navigateur : `http://localhost:8000`

Sous Windows, si `python3` ne marche pas, essayez `python -m http.server 8000` ou `py -m http.server 8000`.
Pour arrêter le serveur : appuyez sur `Ctrl + C` dans le terminal.

Avec VS Code, vous pouvez aussi installer l'extension « Live Server », puis faire clic droit sur `index.html` et choisir « Open with Live Server ».

---

## 3. Tester le site

Faites cette liste de vérification :

1. Cliquez sur chaque lien du menu : toutes les pages doivent s'ouvrir.
2. Sur la page Quiz : répondez aux 10 questions, vérifiez la barre de progression, le résultat et le bouton « Recommencer le quiz ».
3. Réduisez la largeur de la fenêtre (ou ouvrez le site sur votre téléphone) : le bouton « Menu » doit apparaître.
4. Dans le navigateur, faites F12 puis l'icône « téléphone » pour simuler un smartphone.
5. Essayez de naviguer avec la touche Tab : un contour violet doit montrer où vous êtes.
6. Recherchez des emojis : il ne doit y en avoir aucun.

Pour voir le site sur votre téléphone (même Wi-Fi que l'ordinateur) : lancez le serveur local, trouvez l'adresse IP de l'ordinateur, puis ouvrez `http://ADRESSE-IP:8000` sur le téléphone.

---

## 4. Modifier les textes

Ouvrez le fichier `.html` de la page, puis changez le texte entre les balises, par exemple :

```html
<h2>Pourquoi Octobre Rose est important</h2>
<p>Votre texte ici.</p>
```

Ne touchez pas aux balises (`<p>`, `</p>`, `<div class="...">`), seulement au texte entre elles. Enregistrez, puis actualisez la page dans le navigateur (F5).

Le menu et le pied de page sont répétés dans chaque page : si vous les modifiez, faites-le dans les 8 fichiers.

**Important :** si vous changez une information médicale, vérifiez-la dans une source fiable (OMS, autorité sanitaire) et mettez à jour la section « Sources » de la page.

---

## 5. Modifier les couleurs

Dans `css/style.css`, tout en haut, la section `COULEURS` contient les couleurs principales :

```css
--rose-600: #c2185b;   /* rose des boutons et liens */
--rose-700: #a0134a;   /* rose foncé */
--mauve-600: #6b3fa0;  /* touches de mauve */
```

Changez le code couleur (par exemple `#c2185b`), enregistrez, actualisez. Gardez des couleurs assez foncées pour le texte et les boutons, afin que la lecture reste facile.

---

## 6. Ajouter des images

1. Copiez l'image dans le dossier `images/` (par exemple `images/atelier.jpg`).
2. Dans le fichier HTML, à l'endroit voulu, ajoutez :

```html
<img src="images/atelier.jpg" alt="Description courte de l'image" width="800" height="500">
```

Le texte `alt` est important : il décrit l'image pour les personnes qui ne la voient pas.

Conseils : utilisez des images légères (moins de 300 Ko), et n'utilisez que des images dont vous avez le droit de vous servir (les vôtres, ou libres de droits avec la source indiquée).

---

## 7. Modifier le quiz

Ouvrez `js/quiz.js`. Tout en haut se trouve la liste `QUESTIONS`. Chaque question ressemble à ceci :

```js
{
  question: "Votre question ?",
  options: ["Réponse A", "Réponse B", "Réponse C"],
  correct: 1,
  explication: "Le texte qui explique la bonne réponse."
}
```

- `correct: 1` signifie que la bonne réponse est la 2e (on compte à partir de 0 : 0 = la première).
- Pour ajouter une question : copiez un bloc, collez-le avec une virgule entre les blocs, puis changez les textes.
- Pour en supprimer une : supprimez tout le bloc entre les accolades `{ ... }` et sa virgule.
- Le score total s'adapte automatiquement au nombre de questions.
- Gardez un ton rassurant dans les explications.

---

## 8. Sources médicales utilisées

- OMS, Cancer du sein (aide-mémoire) : https://www.who.int/fr/news-room/fact-sheets/detail/breast-cancer
- OMS / CIRC, communiqué du 1er février 2024 sur le fardeau mondial du cancer
- OMS Afrique, Évaluation des capacités de lutte contre le cancer du sein dans la Région africaine
- ONU Info, février 2025, rapport de l'OMS sur le cancer du sein en Afrique subsaharienne
- OMS, Initiative mondiale contre le cancer du sein
- Ministère de la Santé publique du Cameroun, CIRC, Institut national du cancer (France)

Chiffres affichés (estimations 2022) : 2,3 millions de nouveaux cas dans le monde, environ 670 000 décès, cancer du sein le plus fréquent chez la femme dans 157 pays sur 185, survie à cinq ans souvent inférieure à 50 % dans la Région africaine de l'OMS.

### Points à vérifier avant de présenter le projet

- **Liens externes** : ouvrez chaque lien de la page Ressources. Certaines adresses de sites officiels peuvent changer. Corrigez-les si besoin.
- **Chiffres pour le Cameroun** : ce site n'affiche pas de chiffre propre au Cameroun, faute de source vérifiée. Si vous en ajoutez un, citez sa source (par exemple l'Observatoire mondial du cancer du CIRC : https://gco.iarc.who.int).
- **Centres de santé** : aucune liste de centres n'est donnée pour ne pas publier d'information non vérifiée. Si vous en ajoutez, vérifiez chaque nom, adresse et numéro auprès de la structure ou du ministère.
- **Relecture** : faites relire les textes médicaux par un professionnel de santé avant toute diffusion publique.

---

## 9. Confidentialité

Le site ne contient aucun formulaire, aucun cookie de suivi, et ne demande aucune donnée personnelle ni médicale. Les réponses du quiz restent dans le navigateur et ne sont ni envoyées ni enregistrées. Si vous ajoutez un jour un formulaire, rédigez d'abord une vraie politique de confidentialité.

La seule ressource externe chargée est la police de caractères Google Fonts. Sans connexion Internet, le site utilise des polices du système et reste lisible.

## 10. Idées pour la suite

- Ajouter des illustrations ou des photos libres de droits.
- Ajouter une page « Témoignages » avec le consentement écrit des personnes.
- Mettre le site en ligne gratuitement (GitHub Pages, Netlify).
