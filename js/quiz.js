/* ==========================================================
   OCTOBRE ROSE - quiz.js
   Quiz éducatif. Pour modifier les questions, changez
   uniquement la liste QUESTIONS ci-dessous.

   Chaque question contient :
   - question    : le texte de la question
   - options     : la liste des réponses possibles
   - correct     : la position de la bonne réponse (0 = la première)
   - explication : le texte pédagogique affiché après la réponse
   ========================================================== */

var QUESTIONS = [
  {
    question: "Une boule dans le sein signifie-t-elle automatiquement qu’il s’agit d’un cancer ?",
    options: [
      "Oui, une boule est toujours un cancer",
      "Non, mais elle doit être examinée par un professionnel de santé",
      "Non, on peut l’ignorer sans risque"
    ],
    correct: 1,
    explication: "Beaucoup de boules ne sont pas des cancers. Mais seul un professionnel de santé, avec des examens, peut savoir de quoi il s’agit. C’est pourquoi il est important de la faire examiner."
  },
  {
    question: "Que faut-il faire lorsqu’on remarque une modification inhabituelle du sein ?",
    options: [
      "Attendre en espérant que cela disparaisse",
      "Chercher un diagnostic sur Internet",
      "Prendre rendez-vous avec un professionnel de santé"
    ],
    correct: 2,
    explication: "Prendre rendez-vous est le bon réflexe. Plus on consulte tôt, plus il est facile de comprendre la cause et, si besoin, de proposer une prise en charge adaptée."
  },
  {
    question: "L’absence de facteur de risque signifie-t-elle qu’on ne peut pas avoir de cancer du sein ?",
    options: [
      "Oui, sans facteur de risque il n’y a aucun danger",
      "Non, une personne sans facteur de risque connu peut aussi être concernée"
    ],
    correct: 1,
    explication: "Selon l’OMS, une grande partie des cancers du sein touche des femmes qui n’ont pas de facteur de risque particulier en dehors de leur sexe et de leur âge. Rester attentive aux changements reste donc utile pour toutes."
  },
  {
    question: "Qui peut confirmer un diagnostic de cancer du sein ?",
    options: [
      "Un professionnel de santé, grâce à des examens médicaux",
      "Une amie ou un membre de la famille",
      "Un site Internet ou un questionnaire en ligne"
    ],
    correct: 0,
    explication: "Le diagnostic se fait avec des examens réalisés par des professionnels de santé, par exemple une imagerie et l’analyse d’un petit prélèvement. Ni un site Internet ni un proche ne peuvent le confirmer."
  },
  {
    question: "Le questionnaire de ce site peut-il diagnostiquer un cancer du sein ?",
    options: [
      "Oui, si j’obtiens un bon score",
      "Non, il est uniquement éducatif"
    ],
    correct: 1,
    explication: "Ce quiz sert à apprendre. Il ne peut ni confirmer ni exclure un cancer. Votre score ne dit rien sur votre santé."
  },
  {
    question: "Pourquoi est-il important de consulter lorsqu’une modification inhabituelle persiste ?",
    options: [
      "Pour que le changement soit examiné et que l’on agisse tôt si nécessaire",
      "Parce que toute modification est grave",
      "Ce n’est pas important"
    ],
    correct: 0,
    explication: "Consulter permet de comprendre l’origine du changement. Dans la plupart des cas, ce n’est pas grave, mais si un traitement est nécessaire, commencer tôt donne plus de possibilités."
  },
  {
    question: "Qu’est-ce que le dépistage ?",
    options: [
      "Un examen proposé à des femmes qui n’ont aucun symptôme, pour repérer une anomalie plus tôt",
      "Le fait de s’observer devant un miroir",
      "Un traitement du cancer"
    ],
    correct: 0,
    explication: "Le dépistage s’adresse à des personnes sans symptôme. Il est différent de la consultation, qui a lieu quand on remarque un changement, et différent du traitement."
  },
  {
    question: "Parmi ces situations, laquelle mérite un avis médical ?",
    options: [
      "Un mal de tête passager",
      "Un écoulement inhabituel du mamelon, notamment s’il est sanglant",
      "Une fatigue après une longue journée"
    ],
    correct: 1,
    explication: "Un écoulement inhabituel du mamelon, surtout s’il contient du sang, doit être montré à un professionnel de santé. Cela ne veut pas dire qu’il s’agit d’un cancer, mais il faut en chercher la cause."
  },
  {
    question: "Parmi ces éléments, lequel est un facteur sur lequel certaines habitudes peuvent avoir une influence ?",
    options: [
      "L’âge",
      "Les antécédents familiaux",
      "La consommation d’alcool"
    ],
    correct: 2,
    explication: "On ne peut pas changer son âge ni son histoire familiale. En revanche, limiter l’alcool, ne pas fumer et garder une activité physique régulière peuvent aider à réduire certains risques. L’objectif n’est pas de culpabiliser : chaque petit pas compte."
  },
  {
    question: "Pourquoi la détection précoce est-elle importante ?",
    options: [
      "Parce qu’elle laisse souvent plus de choix de soins et de meilleures chances",
      "Parce qu’elle remplace les soins",
      "Elle n’a aucun intérêt"
    ],
    correct: 0,
    explication: "Quand une maladie est repérée tôt, les soins sont souvent plus simples et plus efficaces. La détection précoce ne remplace pas les soins : elle permet de les commencer plus tôt."
  }
];

(function () {
  var conteneur = document.getElementById("quiz");
  if (!conteneur) return;

  var index = 0;
  var score = 0;
  var aRepondu = false;

  function el(tag, classe, texte) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texte) e.textContent = texte;
    return e;
  }

  function barreProgression(valeur, total, texteGauche) {
    var haut = el("div", "progress-label");
    haut.appendChild(el("span", "", texteGauche));
    haut.appendChild(el("span", "", Math.round((valeur / total) * 100) + " %"));

    var piste = el("div", "progress-track");
    piste.setAttribute("role", "progressbar");
    piste.setAttribute("aria-valuemin", "0");
    piste.setAttribute("aria-valuemax", String(total));
    piste.setAttribute("aria-valuenow", String(valeur));
    piste.setAttribute("aria-label", "Progression du quiz");
    var barre = el("div", "progress-bar");
    barre.style.width = "0";
    piste.appendChild(barre);
    // petite pause pour que l'animation de la barre soit visible
    setTimeout(function () { barre.style.width = (valeur / total) * 100 + "%"; }, 30);

    var bloc = document.createDocumentFragment();
    bloc.appendChild(haut);
    bloc.appendChild(piste);
    return bloc;
  }

  function afficherQuestion() {
    aRepondu = false;
    conteneur.innerHTML = "";
    var q = QUESTIONS[index];
    var carte = el("div", "quiz-card");

    // la barre indique les questions déjà terminées
    carte.appendChild(barreProgression(index, QUESTIONS.length, "Question " + (index + 1) + " sur " + QUESTIONS.length));

    var titre = el("h2", "quiz-question", q.question);
    titre.setAttribute("tabindex", "-1");
    carte.appendChild(titre);

    var liste = el("div", "options");
    liste.setAttribute("role", "group");
    liste.setAttribute("aria-label", "Réponses possibles");
    q.options.forEach(function (texte, i) {
      var b = el("button", "option", texte);
      b.type = "button";
      b.addEventListener("click", function () { repondre(i, liste, carte); });
      liste.appendChild(b);
    });
    carte.appendChild(liste);

    var zone = el("div", "");
    zone.id = "zone-retour";
    zone.setAttribute("aria-live", "polite");
    carte.appendChild(zone);

    conteneur.appendChild(carte);
    titre.focus({ preventScroll: true });
  }

  function repondre(choix, liste, carte) {
    if (aRepondu) return;
    aRepondu = true;
    var q = QUESTIONS[index];
    var bonne = choix === q.correct;
    if (bonne) score++;

    var boutons = liste.querySelectorAll("button");
    boutons.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.correct) b.classList.add("is-correct");
      if (i === choix && !bonne) b.classList.add("is-wrong");
    });

    var retour = el("div", "feedback " + (bonne ? "good" : "retry"));
    retour.appendChild(el("strong", "", bonne ? "Bonne réponse" : "Réponse à revoir ensemble"));
    retour.appendChild(el("p", "", q.explication));
    var zone = carte.querySelector("#zone-retour");
    zone.appendChild(retour);

    var dernier = index === QUESTIONS.length - 1;
    var suivant = el("button", "btn", dernier ? "Voir mon résultat" : "Question suivante");
    suivant.type = "button";
    suivant.addEventListener("click", function () {
      index++;
      if (index < QUESTIONS.length) afficherQuestion();
      else afficherResultat();
    });
    zone.appendChild(suivant);
    suivant.focus();
  }

  function afficherResultat() {
    conteneur.innerHTML = "";
    var carte = el("div", "quiz-card");
    carte.appendChild(barreProgression(QUESTIONS.length, QUESTIONS.length, "Quiz terminé"));

    var titre = el("h2", "", "Votre résultat");
    titre.setAttribute("tabindex", "-1");
    carte.appendChild(titre);

    carte.appendChild(el("p", "score", "Vous avez obtenu " + score + "/" + QUESTIONS.length + "."));
    carte.appendChild(el("p", "", "Continuez à vous informer sur la santé du sein."));

    var message;
    if (score >= 8) message = "Bravo, vous connaissez bien les messages essentiels. Pensez à les partager autour de vous.";
    else if (score >= 5) message = "Vous avez déjà de bonnes bases. Les pages du site peuvent vous aider à aller plus loin.";
    else message = "Ce n’est pas grave : l’important est d’apprendre. Relisez les pages du site, puis refaites le quiz quand vous voulez.";
    carte.appendChild(el("p", "", message));

    var note = el("p", "quiz-note", "Ce quiz est uniquement éducatif. Il ne constitue pas un examen médical et ne permet pas de diagnostiquer un cancer du sein.");
    carte.appendChild(note);

    var rangee = el("div", "btn-row");
    var recommencer = el("button", "btn", "Recommencer le quiz");
    recommencer.type = "button";
    recommencer.addEventListener("click", function () {
      index = 0;
      score = 0;
      afficherQuestion();
    });
    rangee.appendChild(recommencer);

    var lien = el("a", "btn btn-outline", "Que faire si je remarque un changement ?");
    lien.href = "consultation.html";
    rangee.appendChild(lien);
    carte.appendChild(rangee);

    conteneur.appendChild(carte);
    titre.focus({ preventScroll: true });
  }

  afficherQuestion();
})();
