# Architecture SEO Complète — location-photobooth.fr
**Version 1.0 | Février 2026 | Architecte : Senior SEO Engineer**

> ⚠️ DÉCISION STRATÉGIQUE CLÉE : Le domaine est `location-photobooth.fr` (générique national),
> PAS `photobooth-evenement.fr`. Structure `/lyon/` en sous-dossier.
> Dans 3 mois → créer `/marseille/`, `/bordeaux/` sans racheter un domaine.

---

## 1. STRUCTURE NATIONALE SCALABLE

```
location-photobooth.fr/              ← Homepage nationale (brand + toutes villes)
location-photobooth.fr/lyon/         ← Hub local Lyon      ✅ Phase 1
location-photobooth.fr/marseille/    ← Hub local Marseille ⏳ Phase 2
location-photobooth.fr/bordeaux/     ← Hub local Bordeaux  ⏳ Phase 3
location-photobooth.fr/blog/         ← Blog national (SEO contenu)
location-photobooth.fr/mentions-legales/
location-photobooth.fr/cgv/
```

---

## 2. ARBORESCENCE COMPLÈTE — PHASE 1 (LYON)

```
/
├── lyon/
│   ├── mariage/
│   ├── anniversaire/
│   ├── entreprise/
│   └── pas-cher/
├── blog/
│   ├── prix-location-photobooth/
│   ├── idees-animations-mariage-lyon/
│   └── photobooth-ouvert-ferme/
├── mentions-legales/
└── cgv/
```

**Nombre de pages Phase 1 :** 11 pages indexables

---

## 3. PAGES — DÉTAIL SEO COMPLET

---

### PAGE 1 — Homepage Nationale

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/` |
| **Priorité**  | Haute (brand + maillage) |
| **Contenu**   | 800–1 000 mots |

**Keywords**
- Principal : `location photobooth`
- Secondaires : `louer photobooth`, `photobooth événement`, `borne photo location`, `photobooth france`
- Longue traîne : `location photobooth pour mariage`, `location photobooth entreprise france`, `louer un photobooth avec impression`

**Balises**
```
TITLE     : Location Photobooth France — Animation Photo pour vos Événements
META DESC : Louez un photobooth pour mariage, anniversaire ou événement d'entreprise.
            Livraison dans toute la France. Devis gratuit en 24h ✓
            (154 caractères)
```

**Structure H**
```
H1 : Location Photobooth France — Animez tous vos événements
  H2 : Pourquoi choisir notre service de location photobooth ?
  H2 : Nos villes d'intervention
    H3 : Location photobooth Lyon
    H3 : Location photobooth Marseille (à venir)
    H3 : Location photobooth Bordeaux (à venir)
  H2 : Nos formules d'animation photo
  H2 : Comment ça marche ? (3 étapes simples)
  H2 : Ils nous ont fait confiance
```

**Maillage sortant :** → `/lyon/` | → `/blog/` | → `/lyon/mariage/` | → `/lyon/entreprise/`

---

### PAGE 2 — Hub Local Lyon ⭐ PAGE PILIER

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/lyon/` |
| **Priorité**  | CRITIQUE (pilier local, porte d'entrée SEO) |
| **Contenu**   | 1 500–2 000 mots |

**Keywords**
- Principal : `location photobooth lyon`
- Secondaires : `photobooth lyon`, `louer photobooth lyon`, `location borne photo lyon`, `photobooth à lyon`
- Longue traîne : `location photobooth lyon pas cher`, `location photobooth lyon avec accessoires`, `photobooth location lyon soirée privée`, `location photobooth lyon tarif`

**Balises**
```
TITLE     : Location Photobooth Lyon — Devis Gratuit pour votre Événement
META DESC : Location de photobooth à Lyon pour mariage, anniversaire ou soirée
            entreprise. Accessoires inclus, technicien sur place. Devis gratuit 24h ✓
            (157 caractères)
```

**Structure H**
```
H1 : Location Photobooth Lyon — Animation photo pour tous vos événements
  H2 : Photobooth Lyon : l'animation qui fait l'unanimité
  H2 : Nos prestations photobooth à Lyon
    H3 : Photobooth mariage Lyon
    H3 : Photobooth anniversaire Lyon
    H3 : Photobooth entreprise Lyon
    H3 : Location photobooth pas cher Lyon
  H2 : Zone de livraison autour de Lyon
  H2 : Pourquoi nous choisir pour votre photobooth à Lyon ?
  H2 : Nos tarifs photobooth Lyon
  H2 : FAQ — Location photobooth Lyon
```

**Maillage sortant :**
→ `/` | → `/lyon/mariage/` | → `/lyon/anniversaire/` | → `/lyon/entreprise/` | → `/lyon/pas-cher/` | → `/blog/prix-location-photobooth/`

**Données structurées :** `LocalBusiness` + `Service` + `FAQPage` + `BreadcrumbList`

---

### PAGE 3 — Mariage Lyon

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/lyon/mariage/` |
| **Priorité**  | Haute (forte valeur commerciale) |
| **Contenu**   | 1 200–1 500 mots |

**Keywords**
- Principal : `location photobooth mariage lyon`
- Secondaires : `photobooth mariage lyon`, `animation mariage photobooth lyon`, `borne photo mariage lyon`
- Longue traîne : `location photobooth mariage lyon prix`, `photobooth mariage lyon avis`, `animation photo originale mariage lyon`, `photobooth mariage lyon avec fond personnalisé`

**Balises**
```
TITLE     : Location Photobooth Mariage Lyon — Animation Photo Inoubliable
META DESC : Photobooth pour mariage à Lyon : impressions illimitées, accessoires,
            personnalisation. Faites de votre mariage un moment inoubliable. Devis ✓
            (158 caractères)
```

**Structure H**
```
H1 : Location Photobooth Mariage Lyon — L'animation photo qui enchante vos invités
  H2 : Pourquoi un photobooth pour votre mariage à Lyon ?
  H2 : Ce qui est inclus dans notre formule mariage
    H3 : Impressions photos illimitées
    H3 : Accessoires et props inclus
    H3 : Fond personnalisé aux couleurs de votre mariage
    H3 : Technicien dédié sur place
  H2 : Nos lieux partenaires pour les mariages à Lyon
  H2 : Témoignages de mariés lyonnais
  H2 : Tarifs photobooth mariage Lyon
  H2 : Comment réserver votre photobooth mariage ?
  H2 : FAQ mariage photobooth Lyon
```

**Maillage sortant :**
→ `/lyon/` | → `/lyon/anniversaire/` | → `/lyon/entreprise/` | → `/lyon/pas-cher/` | → `/blog/idees-animations-mariage-lyon/`

**Données structurées :** `Service` + `Offer` + `FAQPage` + `BreadcrumbList`

---

### PAGE 4 — Anniversaire Lyon

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/lyon/anniversaire/` |
| **Priorité**  | Haute |
| **Contenu**   | 1 000–1 200 mots |

**Keywords**
- Principal : `location photobooth anniversaire lyon`
- Secondaires : `photobooth anniversaire lyon`, `location borne photo anniversaire lyon`, `animation photobooth soirée lyon`
- Longue traîne : `location photobooth anniversaire adulte lyon`, `photobooth anniversaire enfant lyon`, `location photobooth anniversaire 30 ans lyon`, `animation photo fête anniversaire lyon`

**Balises**
```
TITLE     : Location Photobooth Anniversaire Lyon — Soirée Mémorable Garantie
META DESC : Animez votre anniversaire à Lyon avec notre photobooth ! Impressions
            instantanées, accessoires fun, personnalisation. Réservez maintenant ✓
            (156 caractères)
```

**Structure H**
```
H1 : Location Photobooth Anniversaire Lyon — L'animation qui met le feu à votre soirée
  H2 : Photobooth pour anniversaire : pourquoi ça cartonne à Lyon ?
  H2 : Nos formules anniversaire photobooth Lyon
    H3 : Anniversaire adulte (18, 30, 40, 50 ans...)
    H3 : Anniversaire enfant et ado
    H3 : Soirée privée et garden party
  H2 : Les + de notre service photobooth anniversaire
  H2 : Témoignages clients lyonnais
  H2 : Tarifs location photobooth anniversaire Lyon
  H2 : FAQ — Photobooth anniversaire Lyon
```

**Maillage sortant :**
→ `/lyon/` | → `/lyon/mariage/` | → `/lyon/entreprise/` | → `/lyon/pas-cher/` | → `/blog/prix-location-photobooth/`

---

### PAGE 5 — Entreprise Lyon

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/lyon/entreprise/` |
| **Priorité**  | Haute (panier moyen élevé) |
| **Contenu**   | 1 200–1 500 mots |

**Keywords**
- Principal : `location photobooth entreprise lyon`
- Secondaires : `photobooth événement entreprise lyon`, `animation photo soirée entreprise lyon`, `photobooth team building lyon`, `borne photo séminaire lyon`
- Longue traîne : `location photobooth séminaire lyon`, `photobooth soirée entreprise lyon prix`, `animation photobooth salon professionnel lyon`, `photobooth branded événement corporate lyon`

**Balises**
```
TITLE     : Location Photobooth Entreprise Lyon — Animation Corporate & Team Building
META DESC : Dynamisez vos événements d'entreprise à Lyon avec notre photobooth.
            Séminaires, soirées corporate, salons. Personnalisation aux couleurs de
            votre marque ✓  (158 caractères)
```

**Structure H**
```
H1 : Location Photobooth Entreprise Lyon — L'animation corporate qui marque les esprits
  H2 : Le photobooth, outil marketing événementiel incontournable
  H2 : Nos applications entreprise à Lyon
    H3 : Soirée d'entreprise et gala
    H3 : Séminaire et team building
    H3 : Salon, stand et événement commercial
    H3 : Lancement de produit
  H2 : Personnalisation aux couleurs de votre marque
  H2 : ROI et bénéfices marketing du photobooth
  H2 : Ils nous ont fait confiance à Lyon
  H2 : Formules et tarifs photobooth entreprise Lyon
  H2 : FAQ — Photobooth événementiel entreprise Lyon
```

**Maillage sortant :**
→ `/lyon/` | → `/lyon/mariage/` | → `/lyon/pas-cher/` | → `/blog/photobooth-ouvert-ferme/`

---

### PAGE 6 — Pas Cher Lyon (Page transactionnelle budget)

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/lyon/pas-cher/` |
| **Priorité**  | Moyenne-haute (volume longue traîne fort) |
| **Contenu**   | 1 000–1 200 mots |

**Keywords**
- Principal : `location photobooth pas cher lyon`
- Secondaires : `photobooth lyon pas cher`, `location photobooth lyon petit prix`, `photobooth économique lyon`, `photobooth lyon prix`
- Longue traîne : `location photobooth lyon moins de 300 euros`, `photobooth pas cher lyon avec impression`, `combien coûte un photobooth à lyon`, `tarif photobooth lyon`

**Balises**
```
TITLE     : Location Photobooth Pas Cher Lyon — Tarifs Clairs, Qualité Garantie
META DESC : Louez un photobooth à Lyon sans vous ruiner. Nos formules dès [X]€.
            Qualité pro, accessoires inclus, pas de frais cachés. Devis immédiat ✓
            (155 caractères)
```

**Structure H**
```
H1 : Location Photobooth Pas Cher Lyon — Nos tarifs transparents, sans surprise
  H2 : Nos formules photobooth Lyon et leurs tarifs
    H3 : Formule Essentiel
    H3 : Formule Premium
    H3 : Formule Corporate
  H2 : Ce qui est inclus dans nos prix photobooth Lyon
  H2 : Ce qui peut faire varier le prix
  H2 : Qualité/prix : notre engagement
  H2 : Photobooth pas cher ≠ photobooth low cost
  H2 : Obtenir votre devis photobooth Lyon gratuit
  H2 : FAQ — Tarifs photobooth Lyon
```

**Maillage sortant :**
→ `/lyon/` | → `/lyon/mariage/` | → `/lyon/anniversaire/` | → `/lyon/entreprise/` | → `/blog/prix-location-photobooth/`

---

## 4. BLOG — 3 ARTICLES SEO

---

### ARTICLE 1 — Guide des Prix

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/blog/prix-location-photobooth/` |
| **Intent**    | Informationnel → Décision (MOFU/BOFU) |
| **Contenu**   | 1 500–2 000 mots |
| **Pourquoi**  | Requête à fort volume, capte les leads en phase de décision budget |

**Keywords**
- Principal : `prix location photobooth`
- Secondaires : `combien coûte un photobooth`, `tarif location photobooth`, `budget photobooth mariage`
- Longue traîne : `prix location photobooth mariage`, `combien coûte la location d'un photobooth pour un mariage`, `tarif photobooth 4 heures`, `prix photobooth soirée`

**Balises**
```
TITLE     : Prix Location Photobooth 2026 : Combien Ça Coûte Vraiment ?
META DESC : Quel budget prévoir pour louer un photobooth ? Tarifs détaillés par
            type d'événement, durée et options. Comparatif complet 2026.
            (152 caractères)
```

**Structure H**
```
H1 : Prix location photobooth 2026 : le guide complet des tarifs
  H2 : Quel est le prix moyen de location d'un photobooth en France ?
  H2 : Les facteurs qui font varier le tarif
    H3 : La durée de location
    H3 : Le type de photobooth (ouvert / fermé / miroir)
    H3 : Les options (impression, GIF, cadre personnalisé...)
    H3 : Les frais de déplacement et d'installation
  H2 : Tableau comparatif des prix par type d'événement
  H2 : Prix photobooth à Lyon : les tarifs locaux
  H2 : Les pièges à éviter avec les offres "pas chères"
  H2 : Comment obtenir le meilleur rapport qualité/prix ?
```

**CTA internes :** → `/lyon/pas-cher/` | → `/lyon/`

---

### ARTICLE 2 — Animations Mariage Lyon

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/blog/idees-animations-mariage-lyon/` |
| **Intent**    | Informationnel / Inspiration (TOFU) |
| **Contenu**   | 1 800–2 200 mots |
| **Pourquoi**  | Mariés lyonnais en phase inspiration, concurrence modérée, fort engagement |

**Keywords**
- Principal : `animations mariage lyon`
- Secondaires : `idées animations mariage original lyon`, `animation soirée mariage lyon`, `animation vin d'honneur lyon`
- Longue traîne : `idées animations originales mariage lyon 2026`, `animation photobooth mariage lyon`, `que prévoir comme animations pour un mariage à lyon`

**Balises**
```
TITLE     : 10 Idées d'Animations Originales pour votre Mariage à Lyon (2026)
META DESC : Vin d'honneur, soirée dansante : 10 animations originales pour un
            mariage inoubliable à Lyon. Le photobooth en tête de liste !
            (150 caractères)
```

**Structure H**
```
H1 : 10 idées d'animations originales pour un mariage à Lyon en 2026
  H2 : #1 — Le photobooth : l'incontournable des mariages lyonnais
  H2 : #2 — Le quiz sur les mariés
  H2 : #3 — Le livre d'or photo interactif
  H2 : #4 — La cabine à confessions vidéo
  H2 : #5 — Le bar à cocktails participatif
  H2 : #6 — Les jeux géants (Jenga, pétanque...)
  H2 : #7 — Le photo wall personnalisé
  H2 : #8 — L'animation musicale live
  H2 : #9 — La candy bar et sa mise en scène Instagram
  H2 : #10 — La roue des cadeaux invités
  H2 : Comment combiner ces animations pour un mariage parfait ?
```

**CTA internes :** → `/lyon/mariage/` | → `/lyon/`

---

### ARTICLE 3 — Photobooth Ouvert vs Fermé

| Champ         | Valeur |
|---------------|--------|
| **URL**       | `https://location-photobooth.fr/blog/photobooth-ouvert-ferme/` |
| **Intent**    | Informationnel (TOFU) |
| **Contenu**   | 1 200–1 500 mots |
| **Pourquoi**  | Top-of-funnel, capte les personnes en phase découverte, fort taux d'engagement |

**Keywords**
- Principal : `photobooth ouvert ou fermé`
- Secondaires : `différence photobooth ouvert fermé`, `borne photo ouverte fermée`, `choisir son photobooth`
- Longue traîne : `photobooth ouvert pour mariage`, `photobooth fermé avantages inconvénients`, `quel photobooth choisir pour son événement`

**Balises**
```
TITLE     : Photobooth Ouvert ou Fermé : Lequel Choisir pour votre Événement ?
META DESC : Photobooth ouvert ou cabine fermée ? Avantages, inconvénients, tableau
            comparatif. Le guide pour faire le bon choix selon votre événement.
            (156 caractères)
```

**Structure H**
```
H1 : Photobooth ouvert ou fermé : le guide pour faire le bon choix
  H2 : Qu'est-ce qu'un photobooth ouvert ?
    H3 : Avantages du photobooth ouvert
    H3 : Inconvénients du photobooth ouvert
  H2 : Qu'est-ce qu'un photobooth fermé (cabine) ?
    H3 : Avantages de la cabine photobooth
    H3 : Inconvénients de la cabine photobooth
  H2 : Photobooth miroir : la troisième option tendance
  H2 : Tableau comparatif : ouvert vs fermé vs miroir
  H2 : Quel format pour quel événement ?
    H3 : Pour un mariage
    H3 : Pour un anniversaire
    H3 : Pour un événement d'entreprise
  H2 : Notre recommandation selon votre budget
```

**CTA internes :** → `/lyon/` | → `/lyon/mariage/` | → `/blog/prix-location-photobooth/`

---

## 5. MAILLAGE INTERNE — MATRICE COMPLÈTE

```
PAGE SOURCE                           → PAGES CIBLES
──────────────────────────────────────────────────────────────────────
/ (Homepage nationale)                → /lyon/
                                      → /blog/
                                      → /lyon/mariage/
                                      → /lyon/entreprise/

/lyon/ (Hub pilier)                   → / (retour brand)
                                      → /lyon/mariage/
                                      → /lyon/anniversaire/
                                      → /lyon/entreprise/
                                      → /lyon/pas-cher/
                                      → /blog/prix-location-photobooth/

/lyon/mariage/                        → /lyon/ (parent)
                                      → /lyon/anniversaire/
                                      → /lyon/entreprise/
                                      → /lyon/pas-cher/
                                      → /blog/idees-animations-mariage-lyon/

/lyon/anniversaire/                   → /lyon/ (parent)
                                      → /lyon/mariage/
                                      → /lyon/entreprise/
                                      → /lyon/pas-cher/
                                      → /blog/prix-location-photobooth/

/lyon/entreprise/                     → /lyon/ (parent)
                                      → /lyon/mariage/
                                      → /lyon/pas-cher/
                                      → /blog/photobooth-ouvert-ferme/

/lyon/pas-cher/                       → /lyon/ (parent)
                                      → /lyon/mariage/
                                      → /lyon/anniversaire/
                                      → /lyon/entreprise/
                                      → /blog/prix-location-photobooth/

/blog/ (Hub blog)                     → /lyon/
                                      → /blog/prix-location-photobooth/
                                      → /blog/idees-animations-mariage-lyon/
                                      → /blog/photobooth-ouvert-ferme/

/blog/prix-location-photobooth/       → /lyon/pas-cher/
                                      → /lyon/
                                      → /blog/photobooth-ouvert-ferme/ (related)

/blog/idees-animations-mariage-lyon/  → /lyon/mariage/
                                      → /lyon/
                                      → /blog/prix-location-photobooth/ (related)

/blog/photobooth-ouvert-ferme/        → /lyon/
                                      → /lyon/mariage/
                                      → /blog/prix-location-photobooth/ (related)
```

**Règle :** chaque page pointe vers son parent + ses sœurs + 1–2 articles de blog pertinents.
Maximum 5–7 liens internes éditoriaux par page (hors nav/footer).

---

## 6. DONNÉES STRUCTURÉES (Schema.org)

| Page | Schemas à implémenter |
|------|-----------------------|
| `/` | `Organization` + `WebSite` + `SiteNavigationElement` |
| `/lyon/` | `LocalBusiness` + `Service` + `FAQPage` + `BreadcrumbList` |
| `/lyon/mariage/` | `Service` + `Offer` + `FAQPage` + `BreadcrumbList` |
| `/lyon/anniversaire/` | `Service` + `Offer` + `FAQPage` + `BreadcrumbList` |
| `/lyon/entreprise/` | `Service` + `Offer` + `FAQPage` + `BreadcrumbList` |
| `/lyon/pas-cher/` | `Service` + `Offer` + `FAQPage` + `BreadcrumbList` |
| Articles blog | `Article` + `BreadcrumbList` + `Author` |

**LocalBusiness à renseigner sur `/lyon/` :**
```json
{
  "@type": "LocalBusiness",
  "name": "Location Photobooth",
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "priceRange": "€€"
}
```

---

## 7. BALISES CANONIQUES & TECHNIQUE

```
Chaque page → <link rel="canonical" href="URL-exacte-sans-trailing-slash" />
Pas de pagination → pas d'URL canonique complexe
Hreflang → non applicable (site FR uniquement)
robots.txt → bloquer /cgv/, /mentions-legales/ du crawl budget (optionnel)
Sitemap.xml → inclure les 11 pages Phase 1 uniquement
```

---

## 8. FEUILLE DE ROUTE PAR PRIORITÉ

| Ordre | Page | Priorité | Raison |
|-------|------|----------|--------|
| 1 | `/lyon/` | ⭐⭐⭐⭐⭐ | Pilier local, toutes les autres en dépendent |
| 2 | `/` | ⭐⭐⭐⭐ | Brand + maillage vers Lyon |
| 3 | `/lyon/mariage/` | ⭐⭐⭐⭐ | Meilleur volume + valeur commerciale |
| 4 | `/lyon/entreprise/` | ⭐⭐⭐⭐ | Panier moyen le plus élevé |
| 5 | `/blog/prix-location-photobooth/` | ⭐⭐⭐ | MOFU, capte leads budget |
| 6 | `/lyon/anniversaire/` | ⭐⭐⭐ | Volume correct |
| 7 | `/lyon/pas-cher/` | ⭐⭐⭐ | Longue traîne transactionnelle |
| 8 | `/blog/idees-animations-mariage-lyon/` | ⭐⭐ | TOFU local |
| 9 | `/blog/photobooth-ouvert-ferme/` | ⭐⭐ | TOFU national |

---

## 9. DUPLICATION VILLES (Phase 2+)

Pour ajouter Marseille, copier la structure Lyon et remplacer :
- Toutes les occurrences de `lyon` → `marseille` dans les URLs
- Toutes les mentions "Lyon" → "Marseille" dans les balises
- Adapter les **lieux partenaires** et **zones de livraison**
- Créer des **témoignages locaux distincts** (éviter le duplicate content)
- Villes cibles Phase 2 : Marseille, Bordeaux, Nantes, Toulouse, Lille

**RÈGLE CRITIQUE :** Ne JAMAIS copier-coller le contenu d'une ville à l'autre.
Chaque page locale doit avoir ≥ 40% de contenu original sous peine de pénalité Google.

---

*Document généré le 27/02/2026 — À réviser tous les 6 mois pour mise à jour des volumes de recherche.*
