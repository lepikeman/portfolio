// Types centralisés pour le portfolio

export interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  popularBadge?: boolean;
  serviceSlug: string;
  color?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'api' | 'dashboard';
  featured?: boolean;
}

export interface TestimonialData {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  service?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface TechnologyData {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface StatsData {
  label: string;
  value: string | number;
  suffix?: string;
  icon?: React.ReactNode;
}

// Props interfaces - supprimées car redondantes avec les types de base
// Utiliser directement ServiceData, ProjectData, TestimonialData

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  external?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'gradient';
}
