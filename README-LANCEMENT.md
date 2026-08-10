# Avant la mise en ligne

Ce site est codé et prêt, mais certaines informations réelles ne pouvaient
pas être inventées. Voici tout ce qu'il reste à compléter — chaque élément
est repéré dans le code par un badge **« À compléter »** ou **« À configurer »**.

## Obligatoire avant publication

- [ ] **Assurance RC professionnelle** — à souscrire en premier (elle
      conditionne le droit d'exercer sereinement). Une fois souscrite,
      compléter dans `/mentions-legales/index.html` : nom de l'assureur,
      adresse, couverture géographique.
- [ ] **Adresse professionnelle** à publier dans les mentions légales —
      décider domicile ou domiciliation commerciale, puis remplacer le
      placeholder dans `/mentions-legales/index.html`.
- [ ] **SIREN / SIRET** — à ajouter dans `/mentions-legales/index.html`.
- [ ] **Hébergeur retenu** (France ou UE, sans base de données requise) —
      raison sociale, adresse, téléphone, dans `/mentions-legales/index.html`.
- [ ] **Numéro de téléphone professionnel** — à ajouter en pied de page de
      chaque fichier `index.html` (recherchez `tag-todo`) et sur `/contact/`,
      avec un lien `tel:+33...`.

## À configurer

- [ ] **Lien Microsoft Bookings** — créer la page de réservation (créneaux
      de 20 min) dans Microsoft 365, puis remplacer
      `https://outlook.office.com/book/A-CONFIGURER/` dans
      `/contact/index.html`.
- [ ] **Boîte email professionnelle `contact@sirotteau.fr`** (ou l'adresse
      choisie) — le site l'utilise partout comme email de contact ; vérifier
      qu'elle est bien créée et surveillée avant publication.
- [ ] **Photo de Lorenzo Sirotteau** sur `/a-propos/` — remplacer le
      bloc « Photo à ajouter » par une vraie photo (chemise, terrain, pas de
      costume-cravate). Fichier à déposer dans `/assets/img/`.
- [ ] **Nom de domaine** — le site est écrit pour `sirotteau.fr`
      (balises canonical, Open Graph, schema.org). Si le domaine final
      diffère, remplacer `https://www.sirotteau.fr/` dans tous les
      fichiers `<head>`.
- [ ] **Mesure d'audience (optionnel)** — pas de Google Analytics. Si vous
      voulez des statistiques de visite, ajouter un script Plausible ou
      Umami auto-hébergé ou hébergé en UE, sans cookie ni bannière requise.

## Hébergement

Le site est 100 % statique (HTML/CSS + un peu de JS, sans build, sans base
de données) : il peut être déposé tel quel sur n'importe quel hébergeur
statique basé en France ou dans l'UE (OVH, Infomaniak, Scaleway, etc.), en
servant chaque dossier (`/methode/`, `/offres/`…) via son `index.html`.

## Vérifications rapides avant d'annoncer le site

- [ ] Tester le formulaire de contact sur mobile et desktop (il ouvre le
      client mail avec le message pré-rempli).
- [ ] Vérifier l'impression de `/offres/` (feuille de style print incluse).
- [ ] Vérifier tous les liens du menu et du pied de page une fois le nom de
      domaine définitif branché.
