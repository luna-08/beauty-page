# Optique et Audition Wave

Site vitrine d'une boutique d'optique et d'audition située rue de Trévise, à Paris (9e).
Projet scolaire : les noms, prix, avis, équipe, horaires et chiffres sont fictifs.

Site statique en HTML, CSS et JavaScript, sans framework ni étape de compilation.

## Lancer le site

Ouvrir `index.html` dans un navigateur. Aucune installation n'est nécessaire.

Pour un serveur local (utile pour tester les liens et le plan d'accès) :

```bash
python3 -m http.server 8000
```

puis ouvrir http://localhost:8000.

## Pages

| Page | Fichier | Contenu |
|---|---|---|
| Accueil | `index.html` | Hero, tuiles par univers, réservation en ligne, présentation de la boutique, chiffres clés, avis, FAQ |
| Lunettes | `pages/lunettes.html` | Choix des verres par onglets, valeurs, entretien |
| Montures | `pages/montures.html` | Catalogue filtrable par forme |
| Lentilles | `pages/lentilles.html` | Types de lentilles par onglets, liste de bons réflexes |
| Audition | `pages/audition.html` | Introduction, auto-évaluation en 5 questions, services |
| À propos | `pages/apropos.html` | Histoire, équipe, facilités de paiement |
| Contact | `pages/contact.html` | Formulaire, horaires, plan d'accès |

## Structure du projet

```
.
├── index.html
├── css/
│   └── style.css        # tout le style, variables de couleur en tête de fichier
├── js/
│   ├── main.js          # menu mobile, animations au défilement, compteurs
│   ├── booking.js       # réservation de créneau (accueil)
│   ├── contact.js       # formulaire et préremplissage depuis l'URL
│   ├── montures.js      # filtre du catalogue
│   ├── tabs.js          # onglets accessibles
│   ├── checklist.js     # liste de bons réflexes
│   └── quiz.js          # auto-évaluation auditive
├── images/
│   ├── boutique/        # photos de la présentation de la boutique
│   └── montures/        # photos du catalogue
└── pages/               # pages secondaires
```

## Fonctionnalités

- **Réservation en ligne :** choix du service, du jour (les six prochains jours ouverts, hors dimanche) et de l'horaire. Certains créneaux sont désactivés pour simuler des rendez-vous déjà pris. Le choix est transmis au formulaire de contact par l'URL.
- **Catalogue de montures :** filtre par forme, compteur de modèles, lien « Réserver l'essayage » prérempli.
- **Onglets et liste de réflexes :** navigables au clavier, avec les attributs ARIA adaptés.
- **Auto-évaluation auditive :** score sur 5 et résultat indicatif.
- **Design responsive :** menu « hamburger » sur mobile, mise en page en une colonne.
- **Animations :** apparition au défilement, compteurs animés, désactivées si l'utilisateur demande de réduire les animations.

## Personnaliser

- **Couleurs :** les variables `--primary`, `--primary-dark`, `--primary-light`, `--sand`, `--ink`, `--muted` et `--accent` sont au début de `css/style.css`.
- **Adresse email du formulaire :** la constante `CONTACT_EMAIL` en tête de `js/contact.js`. Elle vaut encore `ton.email@example.com`.
- **Réseaux sociaux :** les liens Instagram et LinkedIn du pied de page (`ton_compte`, `ton-profil`) sont à remplacer dans chaque page.
- **Horaires :** ils figurent dans le pied de page, sur la page Contact et dans `js/booking.js` (objet `OPENING`).

## Limites connues

- Le formulaire de contact ouvre la messagerie du visiteur avec un message prérempli. Il n'envoie rien directement : cela demanderait un service externe (par exemple Formspree) ou un serveur.
- La réservation ne vérifie pas de vraies disponibilités.
- L'image de la page Audition (`pages/audition.html`) est encore hébergée sur un autre site.
- Les polices Google Fonts et le plan d'accès Google Maps nécessitent une connexion internet.

## Crédits

- Photos des montures et de la boutique : [Pexels](https://www.pexels.com), licence libre.
- Polices : [Fraunces](https://fonts.google.com/specimen/Fraunces) et [Inter](https://fonts.google.com/specimen/Inter).

## Contribuer

Le travail se fait sur des branches (jamais directement sur `main`), une branche par sujet, par exemple `feature/design-accueil`.
Les messages de commit suivent le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(portée): résumé court à l'impératif

Explication de ce qui a été fait et pourquoi.
```

Types utilisés : `feat`, `fix`, `style`, `refactor`, `docs`, `chore`.
