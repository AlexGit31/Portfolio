# 日本 — Carnet de voyage

Site photo personnel, sombre & cinématique, déployé sur GitHub Pages.

## ✨ Ce qui se passe quand tu push une photo

1. Tu déposes un fichier `.jpg`, `.png`, `.webp`, etc. dans `photos/`
2. `git add . && git commit -m "..." && git push`
3. GitHub Actions :
   - relance `scripts/build-manifest.py`
   - régénère `manifest.json` (tri : dernière photo ajoutée en haut)
   - redéploie le site sur GitHub Pages

Pas de JSON à éditer, pas d'EXIF à corriger, pas de nom de fichier à formater.
Le tri est basé sur la **date du commit Git** qui introduit le fichier — ça marche
même avec un vieil appareil aux métadonnées foireuses.

## 🚀 Mise en route (une seule fois)

1. **Créer le repo sur GitHub**, pousser tout ce dossier sur la branche `main`.
2. Aller dans **Settings → Pages** :
   - *Source* : **GitHub Actions**
3. Pousser un premier commit (ou cliquer "Run workflow" dans l'onglet Actions).
4. Le site est en ligne à : `https://<ton-username>.github.io/<nom-du-repo>/`

## 📂 Structure

```
.
├── index.html           # Page principale
├── style.css            # Design sombre cinématique
├── script.js            # Galerie + lightbox
├── manifest.json        # Généré automatiquement, ne pas éditer
├── photos/              # Tes photos vont ici
│   └── .gitkeep
├── scripts/
│   └── build-manifest.py
└── .github/workflows/
    └── deploy.yml
```

## 🖼️ Conseils sur les photos

- **Formats acceptés** : `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`
- **Taille** : GitHub Pages a une limite douce d'1 Go par repo et 100 Mo par
  fichier. Pour des photos plein écran, vise **2000–2500 px** sur le côté
  long et compresse (qualité ~80 %). [Squoosh](https://squoosh.app) ou
  `cwebp` font ça très bien.
- **Nom du fichier** : ce que tu veux, il n'est jamais affiché — il sert
  juste d'identifiant interne.

## 🛠️ Tester en local

```bash
# Génère le manifest avec ton historique git
python scripts/build-manifest.py

# Sert le site (n'importe quel petit serveur statique)
python -m http.server 8000
# puis ouvre http://localhost:8000
```

Note : hors d'un repo Git, le script retombe sur la date de modification
du fichier (`mtime`) pour le tri.

## 🎨 Personnaliser

- **Couleurs et typo** : les variables CSS sont en haut de `style.css`
  (`--bg`, `--accent`, `--font-display`, etc.).
- **Titre et intro** : modifie le texte dans `index.html`
  (sections `.brand` et `.intro`).
- **Densité de la grille** : la propriété `column-count` dans
  `.gallery` (par défaut 3 colonnes desktop, 2 tablette, 1 mobile).

## ⌨️ Navigation

- **Clic** sur une photo → lightbox plein écran
- **← / →** → photo précédente / suivante
- **Échap** → fermer
