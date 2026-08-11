# Fontainebleau Royal — site complet

Projet Next.js + TypeScript + GSAP.

## Installation

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Images à remplacer

Place tes vrais visuels dans `public/images/` avec ces noms :

- `church-interior.jpg`
- `building.jpg`
- `worship.jpg`

Le trousseau de clés est actuellement reconstruit en CSS pour que l’animation fonctionne immédiatement.
Quand tu auras les éléments détourés (clé, anneaux, chaînes, cadres), remplace le composant
`components/KeyRing.tsx` par tes PNG/WebP transparents.

## Sections incluses

- Header
- Hero / appel aux dons
- Histoire
- 3 piliers
- Projet
- Avancement / collecte
- Galerie
- Donation
- FAQ
- CTA final
- Footer

## Animation

GSAP + ScrollTrigger :
- mouvement vertical du trousseau au scroll
- rotations différenciées
- cartes avec retard
- parallaxe souris sur desktop
- désactivation automatique avec prefers-reduced-motion

## À personnaliser

1. Montants réels dans `components/Progress.tsx`
2. Lien de don dans `components/Donation.tsx`
3. Photos dans `public/images/`
4. Logo ICC dans `components/Header.tsx`
5. Textes définitifs
