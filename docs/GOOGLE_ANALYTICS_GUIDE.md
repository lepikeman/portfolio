# Guide Google Analytics 4 - Portfolio

## ✅ Configuration Complétée

### Google Analytics 4 est maintenant intégré dans votre portfolio avec :

**📊 Tracking automatique :**

- ✅ Pages vues sur toutes les sections
- ✅ Sessions et utilisateurs uniques
- ✅ Données démographiques et technologiques
- ✅ Géolocalisation des visiteurs

**🎯 Événements personnalisés configurés :**

- ✅ **Navigation** - Scroll vers les sections (home, about, services, projects, contact)
- ✅ **Clics navigation** - Utilisation des boutons de navigation
- ✅ **Projets** - Clics sur "Voir le projet" pour chaque réalisation
- ✅ **Services** - Clics sur "En savoir plus" pour chaque service
- ✅ **Contact** - Soumission du formulaire de contact
- ✅ **Réseaux sociaux** - Clics sur LinkedIn et GitHub
- ✅ **Communication** - Clics sur email et téléphone
- ✅ **CTA** - Clics sur "Démarrer Mon Projet" et "Demander un Devis"

**📁 Fichiers intégrés :**

- ✅ `app/components/GoogleAnalytics.tsx` - Composant principal GA4
- ✅ `app/layout.tsx` - Intégration dans le layout
- ✅ `.env.example` - Configuration des variables d'environnement
- ✅ Tracking ajouté dans tous les composants d'interaction

---

## Configuration Google Analytics 4

### 1. Création du compte Google Analytics

1. Rendez-vous sur [Google Analytics](https://analytics.google.com/)
2. Créez un nouveau compte ou utilisez un compte existant
3. Créez une nouvelle propriété pour votre site web
4. Configurez un flux de données pour votre site web avec l'URL : `https://www.xhaflaireaxel.com`

### 2. Récupération de l'ID de mesure

1. Dans votre tableau de bord Google Analytics
2. Allez dans **Admin** (icône d'engrenage)
3. Dans la colonne **Propriété**, cliquez sur **Flux de données**
4. Cliquez sur votre flux de données web
5. Copiez l'**ID de mesure** (commence par `G-`)

### 3. Configuration dans le projet

1. Créez un fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_GA_ID=G-VOTRE-ID-ICI
```

2. Remplacez `G-VOTRE-ID-ICI` par votre véritable ID Google Analytics

### 4. Vérification de l'installation

Une fois déployé, vous pouvez vérifier que GA4 fonctionne :

1. Visitez votre site en production
2. Dans Google Analytics, allez dans **Rapports** > **Temps réel**
3. Vous devriez voir votre visite apparaître

## Fonctionnalités de tracking disponibles

### Tracking automatique

Le composant Google Analytics track automatiquement :

- ✅ **Pages vues** - Chaque changement de page
- ✅ **Sessions** - Durée des visites
- ✅ **Utilisateurs** - Visiteurs uniques
- ✅ **Données démographiques** - Âge, sexe, intérêts
- ✅ **Technologie** - Navigateur, OS, appareil
- ✅ **Géolocalisation** - Pays, ville des visiteurs

### Tracking personnalisé (disponible)

Le projet inclut des fonctions pour tracker des événements personnalisés :

```tsx
import { trackEvent, trackConversion } from "./app/components/GoogleAnalytics";

// Tracker un clic sur un bouton
trackEvent("click", "button", "contact-form");

// Tracker une conversion (contact, devis, etc.)
trackConversion("contact_form_submission", {
  event_category: "engagement",
  event_label: "header_contact",
  value: 1,
});
```

### Exemples d'utilisation

#### 1. Tracker les clics sur les projets

```tsx
// Dans un composant de projet
const handleProjectClick = (projectName: string) => {
  trackEvent("view_project", "portfolio", projectName);
  // ... logique d'ouverture du projet
};
```

#### 2. Tracker les téléchargements de CV

```tsx
const handleCVDownload = () => {
  trackEvent("download", "cv", "pdf");
  // ... logique de téléchargement
};
```

#### 3. Tracker les soumissions de formulaire

```tsx
const handleContactSubmit = () => {
  trackConversion("contact_form_submission", {
    event_category: "lead_generation",
    event_label: "contact_page",
    value: 1,
  });
};
```

## Rapports utiles dans Google Analytics

### 1. Pages les plus visitées

**Rapports** > **Engagement** > **Pages et écrans**

- Identifiez les pages les plus populaires
- Optimisez le contenu des pages performantes

### 2. Sources de trafic

**Rapports** > **Acquisition** > **Acquisition de trafic**

- Découvrez d'où viennent vos visiteurs
- Optimisez vos canaux de marketing

### 3. Comportement des utilisateurs

**Rapports** > **Engagement** > **Événements**

- Analysez les interactions sur votre site
- Mesurez l'efficacité de vos CTA

### 4. Conversions

**Rapports** > **Engagement** > **Conversions**

- Configurez des objectifs (ex: soumission de formulaire)
- Mesurez votre taux de conversion

## Optimisations recommandées

### 1. Objectifs à configurer

- **Contact form submission** - Formulaire de contact envoyé
- **CV download** - Téléchargement du CV
- **Project view** - Consultation d'un projet
- **Service page view** - Visite d'une page de service

### 2. Événements personnalisés à ajouter

- Temps passé sur la page d'accueil
- Scroll depth (profondeur de défilement)
- Clics sur les liens sociaux
- Interaction avec les animations

### 3. Audiences à créer

- **Prospects qualifiés** - Visiteurs ayant consulté plusieurs services
- **Clients potentiels** - Visiteurs ayant téléchargé le CV
- **Utilisateurs engagés** - Sessions > 2 minutes

## Conformité RGPD

Le code inclut déjà la stratégie `afterInteractive` pour charger GA4 après l'interaction utilisateur, respectant ainsi les bonnes pratiques de consentement.

Pour une conformité RGPD complète, considérez l'ajout d'une bannière de cookies avec :

- Consentement explicite pour les cookies analytiques
- Option de refus
- Politique de confidentialité mise à jour

## Troubleshooting

### Problème : Les données n'apparaissent pas

1. Vérifiez que l'ID GA4 est correct dans `.env.local`
2. Vérifiez que le site est bien en production (GA4 ne track pas localhost par défaut)
3. Attendez 24-48h pour voir les données complètes

### Problème : Données en double

- Assurez-vous de n'avoir qu'un seul script GA4 sur la page
- Vérifiez qu'il n'y a pas d'autre tracking GA dans le projet

### Problème : Événements personnalisés non visibles

- Vérifiez la console du navigateur pour les erreurs
- Attendez 30 minutes à 1 heure pour que les événements apparaissent dans GA4

## Support et ressources

- [Documentation officielle GA4](https://support.google.com/analytics/answer/10089681)
- [Guide des événements GA4](https://support.google.com/analytics/answer/9216061)
- [Configurateur d'objectifs GA4](https://support.google.com/analytics/answer/1012040)
