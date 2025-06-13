import {
  FaGlobe,
  FaRocket,
  FaMobile,
  FaChartBar,
  FaServer,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiPrisma,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { ServiceData, TechnologyData, NavigationItem, StatsData } from "@/types/index";

export const SITE_CONFIG = {
  name: "Axel Xhaflaire",
  title: "Développeur Full-Stack | Axel Xhaflaire",
  description: "Développeur Full-Stack spécialisé en React, Next.js et Node.js. Création de sites web, applications mobiles et APIs performantes.",
  url: "https://www.xhaflaireaxel.com",
  email: "xhaflaire.axel@gmail.com",
  phone: "+33667394256",
  location: "France",
  social: {
    github: "https://github.com/axelxhaflaire",
    linkedin: "https://linkedin.com/in/axelxhaflaire",
  },
} as const;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES_DATA: ServiceData[] = [
  {
    icon: <FaGlobe />,
    title: "Site Vitrine",
    description: "Un site professionnel pour présenter votre activité avec un design moderne et responsive.",
    features: [
      "Design sur-mesure et responsive",
      "Optimisation SEO incluse",
      "Formulaire de contact",
      "Hébergement et nom de domaine",
      "Support technique 6 mois",
    ],
    priceRange: "À partir de 1 500€",
    popularBadge: true,
    serviceSlug: "site-vitrine",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaRocket />,
    title: "Application Web",
    description: "Une solution web complète et interactive adaptée à vos besoins métier spécifiques.",
    features: [
      "Interface utilisateur moderne",
      "Base de données sécurisée",
      "Authentification utilisateurs",
      "Tableau de bord admin",
      "API REST complète",
    ],
    priceRange: "À partir de 5 000€",
    serviceSlug: "application-web",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <FaMobile />,
    title: "Application Mobile",
    description: "Une app native ou hybride pour iOS et Android avec une expérience utilisateur optimale.",
    features: [
      "Compatible iOS & Android",
      "Design natif et fluide",
      "Notifications push",
      "Mode hors-ligne",
      "Publication sur les stores",
    ],
    priceRange: "À partir de 8 000€",
    serviceSlug: "application-mobile",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <FaChartBar />,
    title: "Dashboard Admin",
    description: "Un espace d'administration intuitif pour gérer facilement vos données et activités.",
    features: [
      "Interface d'administration",
      "Graphiques et statistiques",
      "Gestion des utilisateurs",
      "Export de données",
      "Sécurité renforcée",
    ],
    priceRange: "À partir de 3 000€",
    serviceSlug: "dashboard-admin",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <FaServer />,
    title: "API & Backend",
    description: "Une API robuste et sécurisée pour connecter vos applications et services entre eux.",
    features: [
      "Architecture microservices",
      "Documentation complète",
      "Authentification JWT",
      "Rate limiting et sécurité",
      "Monitoring et logs",
    ],
    priceRange: "À partir de 2 500€",
    serviceSlug: "api-backend",
    color: "from-cyan-500 to-cyan-600",
  },
] as const;

export const TECHNOLOGIES_DATA: TechnologyData[] = [
  { name: "React", icon: <FaReact />, category: "frontend", level: "expert" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend", level: "expert" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend", level: "expert" },
  { name: "Node.js", icon: <FaNodeJs />, category: "backend", level: "advanced" },
  { name: "Express.js", icon: <SiExpress />, category: "backend", level: "advanced" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "database", level: "advanced" },
  { name: "MongoDB", icon: <SiMongodb />, category: "database", level: "intermediate" },
  { name: "Redis", icon: <SiRedis />, category: "database", level: "intermediate" },
  { name: "Prisma", icon: <SiPrisma />, category: "backend", level: "advanced" },
  { name: "Docker", icon: <FaDocker />, category: "tools", level: "intermediate" },
  { name: "AWS", icon: <FaAws />, category: "tools", level: "intermediate" },
  { name: "Git", icon: <FaGitAlt />, category: "tools", level: "expert" },
  { name: "Vercel", icon: <SiVercel />, category: "tools", level: "advanced" },
  { name: "Supabase", icon: <SiSupabase />, category: "backend", level: "advanced" },
] as const;

export const STATS_DATA: StatsData[] = [
  { label: "Projets réalisés", value: 25, suffix: "+" },
  { label: "Clients satisfaits", value: 20, suffix: "+" },
  { label: "Années d'expérience", value: 3, suffix: "+" },
  { label: "Technologies maîtrisées", value: 15, suffix: "+" },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;
