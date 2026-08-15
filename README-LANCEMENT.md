# Avant la mise en ligne

Ce site est codé et prêt, mais certaines informations réelles ne pouvaient
pas être inventées. Voici tout ce qu'il reste à compléter — chaque élément
est repéré dans le code par un badge **« À compléter »** ou **« À configurer »**.

## Obligatoire avant publication

- [ ] **SIREN / SIRET** — la page affiche « En cours d'immatriculation ».
      Dès réception du numéro, le remplacer dans
      `/mentions-legales/index.html` (loi pour la confiance dans
      l'économie numérique : le SIRET doit apparaître dès qu'il est
      délivré).
- [ ] **Hébergeur du site** — à la demande de Lorenzo, la mention de
      l'hébergeur a été retirée des mentions légales. Pour rester
      conforme à la LCEN, pensez à la réintégrer (raison sociale,
      adresse, téléphone) une fois l'hébergeur choisi.
- [ ] **Assurance RC professionnelle** — à la demande de Lorenzo, cette
      section a été retirée des mentions légales. L'assurance elle-même
      reste recommandée avant toute mise en ligne effective, même si ses
      références ne sont plus publiées sur le site.

## À configurer

- [ ] **Lien Microsoft Bookings** — créer la page de réservation (créneaux
      de 20 min) dans Microsoft 365, puis remplacer
      `https://outlook.office.com/book/A-CONFIGURER/` dans
      `/contact/index.html`.
- [ ] **Boîte email professionnelle `contact@sirotteau-gestion.fr`** (ou l'adresse
      choisie) — le site l'utilise partout comme email de contact ; vérifier
      qu'elle est bien créée et surveillée avant publication.
- [ ] **Photo de Lorenzo Sirotteau** sur `/engagements/` — remplacer le
      bloc « Photo à ajouter » par une vraie photo (chemise, sans veste ni
      cravate). Fichier à déposer dans `/assets/img/`.
- [x] **Nom de domaine** — le fichier `CNAME` pointe désormais vers
      `sirotteau-gestion.fr` ; toutes les balises canonical, Open Graph et
      schema.org du site ont été alignées dessus.
- [ ] **Mesure d'audience (optionnel)** — pas de Google Analytics. Si vous
      voulez des statistiques de visite, ajouter un script Plausible ou
      Umami auto-hébergé ou hébergé en UE, sans cookie ni bannière requise.

## Hébergement

Le site est 100 % statique (HTML/CSS + un peu de JS, sans build, sans base
de données) : il peut être déposé tel quel sur n'importe quel hébergeur
statique basé en France ou dans l'UE (OVH, Infomaniak, Scaleway, etc.), en
servant chaque dossier (`/methode/`, `/offres/`…) via son `index.html`.

⚠️ Le fichier `CNAME` présent à la racine indique que **GitHub Pages** est
actuellement utilisé pour héberger le site. GitHub Pages sert le contenu
depuis une infrastructure américaine (Fastly/GitHub, hors UE), ce qui ne
respecte pas l'exigence « hébergement en France ou dans l'UE » du cahier
des charges initial. À garder en tête si ce point compte encore, sinon
aucune action requise.

## Vérifications rapides avant d'annoncer le site

- [ ] Tester le formulaire de contact sur mobile et desktop (il ouvre le
      client mail avec le message pré-rempli).
- [ ] Vérifier l'impression de `/offres/` (feuille de style print incluse).
- [ ] Vérifier tous les liens du menu et du pied de page une fois le nom de
      domaine définitif branché.
