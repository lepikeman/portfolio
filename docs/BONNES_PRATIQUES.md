# 🎯 PORTFOLIO CLEAN CODE - BONNES PRATIQUES

## 📘 GUIDE DES BONNES PRATIQUES

### 🧩 DÉVELOPPEMENT DE COMPOSANTS

#### 1. Structure des Composants

```typescript
// ✅ BON : Structure claire avec types
interface MonComposantProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export default function MonComposant({
  title,
  description,
  onClick,
}: MonComposantProps) {
  return <div className="mon-composant">{/* Contenu */}</div>;
}
```

#### 2. Imports Organisés

```typescript
// ✅ BON : Imports organisés par source
import React from "react";
import { NextPage } from "next";
import { FaIcon } from "react-icons/fa";

// Architecture clean code
import { SITE_CONFIG } from "@/constants";
import { scrollToContact } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ServiceData } from "@/types";
```

#### 3. Utilisation des Composants UI

```typescript
// ✅ BON : Utiliser les composants réutilisables
<Button
  variant="primary"
  size="lg"
  onClick={scrollToContact}
>
  Contactez-moi
</Button>

// ❌ MAUVAIS : Créer des boutons personnalisés
<button className="px-8 py-3 bg-blue-500...">
  Contactez-moi
</button>
```

### 🔧 UTILITAIRES ET FONCTIONS

#### 1. Fonctions de Navigation

```typescript
// ✅ BON : Utiliser les utilitaires centralisés
import { scrollToContact, scrollToProjects } from "@/lib/utils";

const handleContactClick = () => {
  scrollToContact();
};

// ❌ MAUVAIS : Redéfinir la fonction localement
const handleContactClick = () => {
  const contactSection = document.getElementById("contact");
  contactSection?.scrollIntoView({ behavior: "smooth" });
};
```

#### 2. Validation et Formatage

```typescript
// ✅ BON : Utiliser les utilitaires existants
import { isValidEmail, formatPrice } from "@/lib/utils";

const validateForm = (email: string) => {
  return isValidEmail(email);
};

const displayPrice = (price: number) => {
  return formatPrice(price); // "1 500€"
};
```

### 🎨 STYLING ET CSS

#### 1. Classes Utilitaires

```typescript
// ✅ BON : Utiliser cn() pour combiner les classes
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>
```

#### 2. Variants de Composants

```typescript
// ✅ BON : Définir des variants clairs
const buttonVariants = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  outline: "border border-blue-500 text-blue-500",
};
```

### 📊 GESTION DES DONNÉES

#### 1. Types TypeScript

```typescript
// ✅ BON : Utiliser les types centralisés
import { ServiceData, ProjectData } from "@/types";

const services: ServiceData[] = SERVICES_DATA;

// ❌ MAUVAIS : Redéfinir les types
interface Service {
  title: string;
  // ...
}
```

#### 2. Constantes

```typescript
// ✅ BON : Utiliser les constantes centralisées
import { SITE_CONFIG, SERVICES_DATA } from "@/constants";

const siteTitle = SITE_CONFIG.title;
const services = SERVICES_DATA;

// ❌ MAUVAIS : Données hardcodées
const siteTitle = "Axel Xhaflaire - Portfolio";
```

### ⚡ PERFORMANCE

#### 1. Dynamic Imports

```typescript
// ✅ BON : Lazy loading des composants lourds
const ProjectPage = dynamic(() => import("./components/ProjectPage"), {
  loading: () => <LoadingSpinner />,
});

// ❌ MAUVAIS : Import statique pour tous les composants
import ProjectPage from "./components/ProjectPage";
```

#### 2. Optimisation des Images

```typescript
// ✅ BON : Utiliser Next.js Image avec optimisation
import Image from "next/image";

<Image
  src={imageSrc}
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>;
```

### 🔐 SÉCURITÉ ET VALIDATION

#### 1. Validation des Formulaires

```typescript
// ✅ BON : Validation côté client ET serveur
import { isValidEmail, isValidPhone } from "@/lib/utils";

const validateContactForm = (data: ContactFormData) => {
  const errors: Record<string, string> = {};

  if (!isValidEmail(data.email)) {
    errors.email = "Email invalide";
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = "Numéro de téléphone invalide";
  }

  return errors;
};
```

#### 2. Sanitisation des Données

```typescript
// ✅ BON : Nettoyer les entrées utilisateur
import { generateSlug } from "@/lib/utils";

const createServiceSlug = (title: string) => {
  return generateSlug(title); // "mon-service-web"
};
```

### 📝 DOCUMENTATION

#### 1. Commentaires JSDoc

```typescript
/**
 * Composant pour afficher une carte de service
 * @param title - Titre du service
 * @param description - Description détaillée
 * @param priceRange - Fourchette de prix
 * @returns JSX Element
 */
export default function ServiceCard({
  title,
  description,
  priceRange,
}: ServiceCardProps) {
  // ...
}
```

#### 2. Types Documentés

```typescript
/**
 * Configuration globale du site
 */
export interface SiteConfig {
  /** Nom du site */
  name: string;
  /** Titre affiché dans le navigateur */
  title: string;
  /** Description pour le SEO */
  description: string;
}
```

### 🧪 TESTS (À IMPLÉMENTER)

#### 1. Tests de Composants

```typescript
// tests/components/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/ui/Button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### 2. Tests d'Utilitaires

```typescript
// tests/lib/utils.test.ts
import { formatPrice, isValidEmail } from "@/lib/utils";

describe("formatPrice", () => {
  it("formats number correctly", () => {
    expect(formatPrice(1500)).toBe("1 500€");
  });
});

describe("isValidEmail", () => {
  it("validates email correctly", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);
  });
});
```

### 🚀 DÉPLOIEMENT

#### 1. Build et Vérification

```bash
# Vérifier le build
npm run build

# Lancer les tests de linting
npm run lint

# Vérifier les types TypeScript
npx tsc --noEmit
```

#### 2. Variables d'Environnement

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://axelxhaflaire.com
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

---

## 📋 CHECKLIST DE DÉVELOPPEMENT

### ✅ Avant de Committer

- [ ] Code formaté avec Prettier
- [ ] Aucune erreur ESLint
- [ ] Types TypeScript validés
- [ ] Build Next.js réussi
- [ ] Tests unitaires passés (si disponibles)
- [ ] Documentation mise à jour

### ✅ Nouveau Composant

- [ ] Interface TypeScript définie
- [ ] Props documentées avec JSDoc
- [ ] Styles avec Tailwind CSS
- [ ] Responsive design testé
- [ ] Accessibilité vérifiée
- [ ] Réutilisabilité maximisée

### ✅ Nouvelle Fonctionnalité

- [ ] Types ajoutés dans `@/types`
- [ ] Constantes dans `@/constants`
- [ ] Utilitaires dans `@/lib/utils`
- [ ] Tests unitaires créés
- [ ] Documentation mise à jour
- [ ] Performance optimisée

---

**🎉 Le portfolio suit maintenant les meilleures pratiques de développement !**

Cette architecture clean code garantit la maintenabilité, la scalabilité et la qualité du code pour le futur.
