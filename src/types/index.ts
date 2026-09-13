export type RoutePath =
  | '/'
  | '/apps'
  | '/prompts'
  | '/creations'
  | '/video-prompts'
  | '/documents'
  | '/projects'
  | '/about'
  | '/contact';

export interface NavItem {
  name: string;
  path: RoutePath;
  badge?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  highlight?: boolean;
}

export interface ExploreCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Smartphone' | 'Sparkles' | 'Image' | 'Video' | 'FileText' | 'Layers' | 'Palette' | 'Camera' | 'Code';
  path: RoutePath;
  accentColor: string;
  glowColor: string;
}

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription?: string;
  category: 'Productivity' | 'Education' | 'AI Tools' | 'Creative' | 'Utility' | string;
  status: 'Featured' | 'In Development' | 'Concept' | 'Coming Soon' | string;
  version: string;
  platform?: string;
  iconType: 'calendar' | 'study' | 'code' | 'sparkle' | 'plus' | string;
  icon?: string;
  heroImage?: string;
  screenshots?: string[];
  description: string;
  longDescription?: string;
  details?: string;
  features: string[];
  techStack: string[];
  technologies?: string[];
  badges: string[];
  downloadUrl?: string;
  apkUrl?: string;
  fileSize?: string;
  releaseDate?: string;
  demoVideoPlaceholder?: string;
  featured?: boolean;
}

export interface PromptItem {
  id: string;
  title: string;
  category:
    | 'Image Prompts'
    | 'Video Prompts'
    | 'Character Prompts'
    | 'Photography'
    | 'Cinematic'
    | 'App Development'
    | 'Creative Prompts'
    | string;
  subcategory?: string;
  shortDescription: string;
  description?: string;
  promptText: string;
  useCase?: string;
  tags: string[];
  tool?: string;
  model?: string;
  recommendedModel?: string;
  aspectRatio?: string;
  negativePrompt?: string;
  previewImage?: string;
  referenceImage?: string;
  modelFlexibilityRule?: string;
  featured?: boolean;
}

export interface CreationItem {
  id: string;
  title: string;
  category: 'Cinematic' | 'Architecture' | 'Portraits' | 'Concept Art' | 'Landscape' | 'Product' | string;
  description: string;
  image?: string;
  imageUrl: string;
  thumbnail?: string;
  promptSnippet?: string;
  aspectRatio: string;
  creationDate: string;
  tool?: string;
  model?: string;
  toolsUsed: string[];
  tags: string[];
  featured?: boolean;
}

export interface VideoPromptItem {
  id: string;
  title: string;
  genre: 'Cinematic' | 'Sci-Fi' | 'Commercial' | 'Anime & Stylized' | 'Atmospheric' | string;
  category?: string;
  subcategory?: string;
  description?: string;
  cinematicDescription?: string;
  visualDescription?: string;
  backgroundLocation?: string;
  modelStyling?: string;
  camera?: string;
  cameraMovement: string;
  cameraDirection?: string;
  lighting: string;
  environment?: string;
  characterAction?: string;
  performance?: string;
  audioTone?: string;
  dialogue?: string;
  visualQuality?: string;
  actionPacing?: string;
  duration: string;
  promptText: string;
  tool?: string;
  model?: string;
  modelRecommendation?: string;
  recommendedEngines: string[];
  tags: string[];
  aspectRatio?: string;
  previewImage?: string;
  referenceImage?: string;
  modelFlexibilityRule?: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  coverImage?: string;
  status?: string;
  timeline?: string;
  summary?: string;
  description: string;
  overview?: string;
  challenge: string;
  concept?: string;
  conceptDesign?: string;
  process?: string;
  workflow?: string;
  processWorkflow: string[];
  outcome?: string;
  results?: string[];
  measurableResults: string[];
  technologies?: string[];
  technologyStack: string[];
  media?: string[];
  screenshots?: string[];
  projectMedia?: {
    type: 'image' | 'video' | 'interactive';
    url: string;
    caption: string;
  }[];
  relatedApps?: string[];
  relatedPrompts?: string[];
  connectedResources?: {
    name: string;
    type: string;
    url: string;
  }[];
  externalLinks?: {
    label: string;
    url: string;
  }[];
  featured?: boolean;
}

export interface DocumentItem {
  id: string;
  title?: string;
  fileName: string;
  type: 'PDF' | 'DOCX' | 'TXT' | 'ZIP' | string;
  fileType?: string;
  fileSize: string;
  category: string;
  description: string;
  status?: 'Available' | 'In Preparation' | 'Coming Soon' | 'Not Available Yet' | string;
  previewUrl?: string;
  downloadUrl?: string;
  date?: string;
  updatedAt?: string;
  lastUpdated?: string;
  pageCount?: string;
  previewExcerpt?: string;
  featured?: boolean;
}

export interface HeroConfig {
  welcomeBadge: string;
  primaryHeadingLine1: string;
  primaryHeadingLine2: string;
  supportingIdentity: string;
  supportingDescription: string;
  primaryCtaText: string;
  primaryCtaPath: RoutePath;
  secondaryCtaText: string;
  heroImage: string;
  heroImageAlt: string;
  cardOverlayText: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
  };
}
