import {
  AppItem,
  CreationItem,
  DocumentItem,
  ExploreCategory,
  HeroConfig,
  NavItem,
  ProjectItem,
  PromptItem,
  StatItem,
  VideoPromptItem,
} from '../types/index.ts';

// Import local generated image assets
import heroImage from '../assets/images/rdl_hero_creator_1789102908575.jpg';
import creationAlpine from '../assets/images/alpine_lake_sunset_1789102923666.jpg';
import creationPhone from '../assets/images/phone_tech_pedestal_1789102938851.jpg';
import creationPortrait from '../assets/images/royal_portrait_elegance_1789102959060.jpg';
import creationCity from '../assets/images/futuristic_city_sunset_1789102971879.jpg';
import creationPortal from '../assets/images/solar_portal_silhouette_1789102987996.jpg';
import characterSheetImage from '../assets/images/character_multiview_sheet_1789186117443.jpg';
import ugcSerumImage from '../assets/images/ugc_serum_male_skincare_1789186138477.jpg';

export const HERO_IMAGE = heroImage;
export const CHARACTER_SHEET_IMAGE = characterSheetImage;
export const UGC_SERUM_IMAGE = ugcSerumImage;

export const LAB_BRAND = {
  shortName: 'RDL',
  fullName: 'RAHUL DIGITAL LAB',
  tagline: 'Where Ideas Become Digital Reality.',
  pillars: 'Apps • AI • Creativity • Innovation',
  coreIdentity: 'Apps • AI • Creativity • Innovation',
  description:
    'RAHUL DIGITAL LAB is a creative technology space focused on building apps, experimenting with AI, developing digital tools, creating visual content, and documenting useful workflows.',
  copyright: '© 2026 Rahul Digital Lab. All rights reserved.',
  taglineSecondary: 'Made with ❤️ for a Smarter, More Creative World.',
  contactEmail: 'rahulmandalyt2020@gmail.com',
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Apps', path: '/apps' },
  { name: 'AI Prompts', path: '/prompts' },
  { name: 'Creations', path: '/creations' },
  { name: 'Video Prompts', path: '/video-prompts' },
  { name: 'Documents', path: '/documents' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const HERO_CONFIG: HeroConfig = {
  welcomeBadge: 'WELCOME TO RAHUL DIGITAL LAB',
  primaryHeadingLine1: 'Where Ideas Become',
  primaryHeadingLine2: 'Digital Reality.',
  supportingIdentity: 'Apps • AI • Creativity • Innovation',
  supportingDescription:
    'Explore a growing collection of innovative apps, powerful AI prompts, cinematic creations and useful resources — all in one place.',
  primaryCtaText: 'Explore Projects',
  primaryCtaPath: '/projects',
  secondaryCtaText: 'Watch Video',
  heroImage: heroImage,
  heroImageAlt: 'Rahul Digital Lab Lead Creator in Cyberpunk Studio',
  cardOverlayText: {
    title: 'Technology',
    item1: 'Creativity',
    item2: 'A Better You',
    item3: '—',
  },
};

export const STUDIO_STATS: StatItem[] = [
  { id: 'apps', value: '3', label: 'Featured Apps' },
  { id: 'prompts', value: 'Growing', label: 'AI Prompt Library' },
  { id: 'assets', value: 'Curated', label: 'Creative Experiments' },
  { id: 'future', value: 'Active', label: 'Ideas in Progress', highlight: true },
];

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  {
    id: 'apps',
    title: 'Apps',
    subtitle: 'My Applications',
    iconName: 'Smartphone',
    path: '/apps',
    accentColor: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.25)',
  },
  {
    id: 'prompts',
    title: 'AI Prompts',
    subtitle: 'Ready to Use',
    iconName: 'Sparkles',
    path: '/prompts',
    accentColor: 'from-purple-500 to-indigo-600',
    glowColor: 'rgba(168, 85, 247, 0.25)',
  },
  {
    id: 'creations',
    title: 'Image Gallery',
    subtitle: 'AI Creations',
    iconName: 'Image',
    path: '/creations',
    accentColor: 'from-teal-400 to-emerald-600',
    glowColor: 'rgba(20, 184, 166, 0.25)',
  },
  {
    id: 'video-prompts',
    title: 'Video Prompts',
    subtitle: 'Cinematic Ideas',
    iconName: 'Video',
    path: '/video-prompts',
    accentColor: 'from-pink-500 to-rose-600',
    glowColor: 'rgba(244, 63, 94, 0.25)',
  },
  {
    id: 'documents',
    title: 'Documents',
    subtitle: 'Guides & Resources',
    iconName: 'FileText',
    path: '/documents',
    accentColor: 'from-blue-500 to-sky-600',
    glowColor: 'rgba(59, 130, 246, 0.25)',
  },
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'All Works',
    iconName: 'Layers',
    path: '/projects',
    accentColor: 'from-indigo-500 to-purple-600',
    glowColor: 'rgba(99, 102, 241, 0.25)',
  },
];

export const APPLICATIONS: AppItem[] = [
  {
    id: 'calendar-lite',
    name: 'CALENDAR lite',
    tagline: 'Simple, fast and easy to use calendar app for your daily life.',
    shortDescription: 'Simple, fast and easy to use calendar app for your daily life.',
    category: 'Productivity',
    status: 'Featured',
    version: 'v1.4.0',
    platform: 'Web & Android PWA',
    iconType: 'calendar',
    description: 'Simple, fast and easy to use calendar app for your daily life.',
    longDescription:
      'CALENDAR lite is engineered for minimalists who prioritize swift scheduling without sluggish telemetry. Packed with offline sync, custom event color coding, fluid gesture navigation, and zero distractions.',
    details:
      'CALENDAR lite is engineered for minimalists who prioritize swift scheduling without sluggish telemetry. Packed with offline sync, custom event color coding, fluid gesture navigation, and zero distractions.',
    badges: ['Featured', 'Productivity', 'Lightweight'],
    techStack: ['TypeScript', 'Vite', 'Local Engine', 'Tailwind'],
    technologies: ['TypeScript', 'Vite', 'Local Engine', 'Tailwind'],
    features: [
      'Instant offline agenda synchronization',
      'Ultra-compact memory footprint under 2MB',
      'Smart recurring event tags with custom hue accents',
      'Privacy-first architecture with zero external trackers',
    ],
    fileSize: '4.8 MB',
    releaseDate: '2026-02-15',
    heroImage: creationAlpine,
    screenshots: [creationAlpine, creationPhone],
    demoVideoPlaceholder: 'Demo Walkthrough Staged',
    featured: true,
  },
  {
    id: 'study-ai',
    name: 'STUDY AI',
    tagline: 'Your AI study companion for smarter learning.',
    shortDescription: 'Your AI study companion for smarter learning.',
    category: 'Education',
    status: 'In Development',
    version: 'v0.9.2-dev',
    platform: 'Web & Android Beta',
    iconType: 'study',
    description: 'Your AI study companion for smarter learning.',
    longDescription:
      'STUDY AI accelerates concept mastery by turning complex textbooks into interactive flashcards, spaced-repetition quizzes, and synthesized executive summaries tailored for high-focus students.',
    details:
      'STUDY AI accelerates concept mastery by turning complex textbooks into interactive flashcards, spaced-repetition quizzes, and synthesized executive summaries tailored for high-focus students.',
    badges: ['In Development', 'Education', 'AI Powered'],
    techStack: ['AI Engine', 'React', 'Cognitive UI', 'Vector Search'],
    technologies: ['AI Engine', 'React', 'Cognitive UI', 'Vector Search'],
    features: [
      'Automated knowledge distillation from lecture transcripts',
      'Adaptive spaced repetition memory algorithms',
      'Interactive Socratic question generator',
      'Focus session timer with ambient binaural synthesis',
    ],
    fileSize: '12.4 MB',
    releaseDate: 'Coming Soon',
    heroImage: creationCity,
    screenshots: [creationCity, creationPortal],
    demoVideoPlaceholder: 'Concept Preview Staged',
    featured: true,
  },
  {
    id: 'prompt-studio-pro',
    name: 'PROMPT STUDIO PRO',
    tagline: 'Precision parameter tuning for modern generative diffusion models.',
    shortDescription: 'Precision parameter tuning for modern generative diffusion models.',
    category: 'AI Tools',
    status: 'Concept',
    version: 'v0.5.0-concept',
    platform: 'Web Application',
    iconType: 'sparkle',
    description: 'Advanced prompt compiler with negative weighting, seed preservation, and token visualizer.',
    longDescription:
      'A specialized developer tool concept designed to refine generative image and video prompts. Offers token weight calculators, negative prompt presets, and aspect ratio previewers.',
    details:
      'A specialized developer tool concept designed to refine generative image and video prompts. Offers token weight calculators, negative prompt presets, and aspect ratio previewers.',
    badges: ['Concept', 'AI Tools', 'Developer'],
    techStack: ['WebAssembly', 'React', 'Canvas API', 'TypeScript'],
    technologies: ['WebAssembly', 'React', 'Canvas API', 'TypeScript'],
    features: [
      'Real-time token emphasis highlight syntax',
      'Preset style matrix: Photorealism, Cyberpunk, Cinematic, Vector',
      'Single-click batch export to JSON and Markdown',
    ],
    fileSize: '8.2 MB',
    releaseDate: 'Concept Staging',
    heroImage: creationPortal,
    screenshots: [creationPortal],
    demoVideoPlaceholder: 'Feature Reel In Preparation',
    featured: false,
  },
];

export const PROMPTS_DATA: PromptItem[] = [
  {
    id: 'prompt-character-setup-multiview',
    title: 'Character Setup — Multi-View Reference Sheet',
    category: 'Character Prompts',
    subcategory: 'Character Setup / Reference Sheet',
    shortDescription:
      'Create a consistent character reference sheet showing multiple views of the same character for reliable image and video generation.',
    description:
      'Create a consistent character reference sheet showing multiple views of the same character for reliable image and video generation.',
    promptText:
      'Full-body character reference sheet with five clearly separated views of the same character: front view, back view, right-side view, left-side view, and a clear face zoom view. Maintain identical facial identity, hairstyle, body proportions, anatomy, outfit, accessories, and physical characteristics across every view. High-resolution professional studio photography, clean flat studio lighting, realistic skin texture, sharp facial details, consistent anatomy, consistent clothing, neutral solid background, evenly spaced composition, production-ready character reference sheet. [DESCRIBE BODY, FACE, HAIRSTYLE, OUTFIT AND ACCESSORIES].',
    useCase:
      'Character consistency for AI image generation, AI video generation, avatar creation, fashion references, cinematic characters, and UGC production.',
    modelFlexibilityRule:
      'If the male model/reference does not visually suit the requested creative concept, allow the creator to choose either: A. Replace the male model with a beautiful adult female model while preserving the same scene, composition, lighting, camera direction, styling quality, and action requirements; OR B. Add a beautiful adult female model beside the male model when the scene benefits from two-person composition. The replacement/addition must NOT change the core visual concept unnecessarily. Maintain photorealistic appearance, adult characters only, natural proportions, consistent identity, appropriate clothing, professional presentation, same visual quality, and same scene continuity.',
    tags: ['Character Setup', 'Reference Sheet', 'Multi-View', 'Consistency', 'Studio Lighting', 'Production Ready'],
    recommendedModel: 'Midjourney v6.1 / Flux Dev / SDXL',
    model: 'Flux Dev',
    tool: 'Midjourney v6.1',
    aspectRatio: '16:9',
    previewImage: characterSheetImage,
    referenceImage: characterSheetImage,
    featured: true,
  },
  {
    id: 'prompt-ugc-serum-skincare',
    title: 'UGC Serum — Luxury Skincare Video',
    category: 'Video Prompts',
    subcategory: 'UGC / Product Advertisement',
    shortDescription:
      'A photorealistic luxury skincare UGC video featuring a consistent male model, premium serum application, cinematic product shots, and natural beauty-commercial presentation.',
    description:
      'A photorealistic luxury skincare UGC video featuring a consistent male model, premium serum application, cinematic product shots, and natural beauty-commercial presentation.',
    promptText:
      'Photorealistic luxury skincare UGC commercial video. Consistent male model with natural groomed look, black graphic T-shirt, and white neckband earphones standing beside an elegant natural stone vanity in soft warm golden morning daylight through sheer curtains. He picks up a luxury glass serum bottle, turns it to catch the light, dispenses a luminous droplet onto his fingertips, and applies it smoothly to his face. Extreme macro details of serum texture and glowing hydrated skin. Relaxed, authentic confidence, shallow depth of field, 4K 60fps cinematic video. Dialogue: "True hydration is more than skincare... it\'s the confidence that shines through every day."',
    useCase:
      'Luxury skincare brand commercials, UGC creator video ads, high-converting TikTok/Reels marketing, AI video consistency benchmarks.',
    modelFlexibilityRule:
      'If the male model/reference does not visually suit the requested creative concept, allow the creator to choose either: A. Replace the male model with a beautiful adult female model while preserving the same scene, composition, lighting, camera direction, styling quality, and action requirements; OR B. Add a beautiful adult female model beside the male model when the scene benefits from two-person composition. The replacement/addition must NOT change the core visual concept unnecessarily. Maintain photorealistic appearance, adult characters only, natural proportions, consistent identity, appropriate clothing, professional presentation, same visual quality, and same scene continuity.',
    tags: ['UGC', 'Luxury Skincare', 'Commercial', 'Product Video', 'Male Model', 'Photorealistic', '4K'],
    recommendedModel: 'Runway Gen-3 Alpha / Kling AI / Luma',
    model: 'Runway Gen-3 Alpha',
    tool: 'Runway Gen-3',
    aspectRatio: '9:16 / 16:9',
    previewImage: ugcSerumImage,
    referenceImage: ugcSerumImage,
    featured: true,
  },
  {
    id: 'prompt-1',
    title: 'Cinematic Cyberpunk Creator Portrait',
    category: 'Character Prompts',
    shortDescription: 'High-detail character portrait with atmospheric studio rim lights and neon city bokeh.',
    description: 'High-detail character portrait with atmospheric studio rim lights and neon city bokeh.',
    promptText:
      'Cinematic medium shot of a stylish 25-year-old South Asian tech innovator wearing futuristic sunglasses and a sleek matte black hoodie with subtle electric cyan LED piping. Standing in a dark high-tech research lab with holographic HUD displays and purple neon city night bokeh. Shot on 85mm f/1.4 anamorphic lens, raytracing reflections, 8k resolution.',
    tags: ['Cyberpunk', 'Character', 'Anamorphic', 'Neon'],
    recommendedModel: 'Midjourney v6.1 / Flux Dev',
    model: 'Flux Dev',
    tool: 'Midjourney v6.1',
    aspectRatio: '3:4',
    featured: true,
  },
  {
    id: 'prompt-2',
    title: 'Photorealistic Alpine Sunset Reflection',
    category: 'Photography',
    shortDescription: 'Pristine mountain landscape with hyper-clear water reflection and golden hour glow.',
    description: 'Pristine mountain landscape with hyper-clear water reflection and golden hour glow.',
    promptText:
      'Ultra-wide architectural landscape photograph of majestic jagged snow-covered mountain peaks bathed in golden-purple twilight. In the foreground, a mirror-smooth turquoise glacial lake reflecting every ridge with pristine clarity. Flanked by deep emerald alpine pine forests with mist rising. Hasselblad X2D 100C, natural color grading, hyper-detailed textures.',
    tags: ['Nature', 'Landscape', 'Ultra-HD', 'Golden Hour'],
    recommendedModel: 'Flux Pro / SDXL',
    model: 'Flux Pro',
    tool: 'Flux Pro',
    aspectRatio: '16:9',
    featured: true,
  },
  {
    id: 'prompt-3',
    title: 'Next-Gen Titanium Smartphone Concept',
    category: 'App Development',
    shortDescription: 'Minimalist industrial design product render on dark monolithic pedestal.',
    description: 'Minimalist industrial design product render on dark monolithic pedestal.',
    promptText:
      'Studio product photography of an ultra-thin flagship titanium smartphone standing upright on a textured black obsidian stone pedestal. The phone features a satin frosted white ceramic back, seamless bezel-less display with soft blue ambient rim glow. Architectural studio lighting, soft specular highlights, clean minimalist composition, 8k.',
    tags: ['Industrial Design', 'Hardware', 'Minimalist', 'Product'],
    recommendedModel: 'Flux Dev / Midjourney v6',
    model: 'Flux Dev',
    tool: 'RDL Industrial Lab',
    aspectRatio: '1:1',
    featured: true,
  },
  {
    id: 'prompt-4',
    title: 'Heritage Royal Bridal Elegance',
    category: 'Character Prompts',
    shortDescription: 'Opulent traditional portrait with handcrafted embroidery and ornate gold jewelry.',
    description: 'Opulent traditional portrait with handcrafted embroidery and ornate gold jewelry.',
    promptText:
      'Breathtaking cinematic editorial portrait of a regal Indian woman wearing a handcrafted crimson red lehenga with intricate antique gold zardozi embroidery. Adorned with traditional Polki diamond and emerald necklace, matha patti, and delicate nose ring. Warm dramatic Rembrandt lighting, shallow depth of field, rich velvety tones, Vogue India cover quality.',
    tags: ['Editorial', 'Traditional', 'Couture', 'Portrait'],
    recommendedModel: 'Midjourney v6.1',
    model: 'Midjourney v6.1',
    tool: 'Midjourney v6.1',
    aspectRatio: '4:5',
    featured: false,
  },
  {
    id: 'prompt-5',
    title: 'Golden Sunset Neo-Metropolis',
    category: 'Cinematic',
    shortDescription: 'Futuristic architectural skyline with water channels and atmospheric haze.',
    description: 'Futuristic architectural skyline with water channels and atmospheric haze.',
    promptText:
      'Epic wide-angle cinematic shot of a soaring hyper-futuristic mega-city at golden hour sunset. Towering geometric skyscrapers with biophilic vertical gardens, crisscrossing elevated maglev transit lines, and expansive waterways reflecting the fiery orange and amber sunset sky. Volumetric light rays piercing through misty cloud layers, blade runner 2049 aesthetic.',
    tags: ['Sci-Fi', 'Metropolis', 'Architecture', 'Sunset'],
    recommendedModel: 'Flux Pro / SD 3.5',
    model: 'Flux Pro',
    tool: 'Flux Pro',
    aspectRatio: '16:9',
    featured: true,
  },
  {
    id: 'prompt-6',
    title: 'Ancient Cosmic Solar Gate Traveler',
    category: 'Image Prompts',
    shortDescription: 'Mystic sci-fi explorer silhouette before a blazing circular energy gate.',
    description: 'Mystic sci-fi explorer silhouette before a blazing circular energy gate.',
    promptText:
      'Cinematic low-angle wide shot of a solitary traveler in dark hooded tech-wear standing on a cracked desert cliff edge. Facing a massive ancient glowing ring portal blazing with swirling solar fire and warm amber plasma energy. In the distance, silhouetted monolithic spires against a hazy alien twin-sun sky. Moody atmospheric concept art, Christopher Nolan cinematic vibe.',
    tags: ['Concept Art', 'Portal', 'Cosmic', 'Atmospheric'],
    recommendedModel: 'Midjourney v6.1 / Flux Dev',
    model: 'Midjourney v6.1',
    tool: 'RDL Prompt Matrix',
    aspectRatio: '2:1',
    featured: true,
  },
  {
    id: 'prompt-7',
    title: 'High-Tech SaaS Interface Glassmorphism',
    category: 'App Development',
    shortDescription: 'Futuristic web dashboard UI with glowing dark mode graphs and sleek typography.',
    description: 'Futuristic web dashboard UI with glowing dark mode graphs and sleek typography.',
    promptText:
      'Clean UI/UX design showcase of an enterprise AI analytics dashboard on a dark midnight blue backdrop. Translucent glassmorphic metric cards, glowing cyan and violet line charts, neon status badges, modern sans-serif typography, clean 12-column grid hierarchy. Dribbble top trending, ultra-crisp vector look, 4k render.',
    tags: ['UI/UX', 'Dashboard', 'Design System', 'Modern Web'],
    recommendedModel: 'Flux Pro',
    model: 'Flux Pro',
    tool: 'Flux Pro',
    aspectRatio: '16:10',
    featured: false,
  },
  {
    id: 'prompt-8',
    title: 'Cinematic Drone Flythrough of Neon Alley',
    category: 'Video Prompts',
    shortDescription: 'Dynamic FP drone trajectory through rain-slicked neon street with steam vents.',
    description: 'Dynamic FP drone trajectory through rain-slicked neon street with steam vents.',
    promptText:
      'Seamless forward tracking drone shot moving smoothly at eye level down a rain-slicked Tokyo cyberpunk alleyway at midnight. Neon signs in vivid cyan, magenta, and amber reflect in wet asphalt puddles. Steam billows from street-level manholes. Cinematic anamorphic lens flare, 60fps fluid motion, hyper-realistic physics.',
    tags: ['Drone', 'Video Prompt', 'Neon', 'Rain'],
    recommendedModel: 'Runway Gen-3 Alpha / Kling AI',
    model: 'Runway Gen-3',
    tool: 'Runway Gen-3',
    aspectRatio: '16:9',
    featured: true,
  },
  {
    id: 'prompt-9',
    title: 'Biophilic Eco-Sanctuary Interior',
    category: 'Image Prompts',
    shortDescription: 'Sunlit modern conservatory blending architectural concrete with cascading flora.',
    description: 'Sunlit modern conservatory blending architectural concrete with cascading flora.',
    promptText:
      'Architectural photography of an expansive multi-level modern conservatory interior. Cascading hanging fern gardens and ficus trees integrate seamlessly with curved warm-toned architectural concrete walls and giant skylights. Dappled morning sunlight casting natural geometric shadows onto polished stone floors, quiet contemplative atmosphere.',
    tags: ['Interior', 'Biophilic', 'Architecture', 'Sunlight'],
    recommendedModel: 'Midjourney v6.1 / Flux Pro',
    model: 'Midjourney v6.1',
    tool: 'Midjourney v6.1',
    aspectRatio: '16:9',
    featured: false,
  },
  {
    id: 'prompt-10',
    title: 'Deep Orbit Lunar Horizon Transit',
    category: 'Cinematic',
    shortDescription: 'Grand slow-motion cinematic view of a planetary orbital module over moon craters.',
    description: 'Grand slow-motion cinematic view of a planetary orbital module over moon craters.',
    promptText:
      'Slow cinematic orbital tracking shot drifting gracefully over the stark desolation of lunar craters in deep space. Earth rises slowly in the dark star-sprinkled cosmic background, radiating blue and white atmospheric brilliance. Harsh directional sunlight catches the golden foil and carbon-fiber thrusters of a scientific observation module. IMAX 70mm space documentary realism.',
    tags: ['Space', 'Cinematic', 'Lunar', 'Cosmic'],
    recommendedModel: 'Runway Gen-3 / Flux Pro',
    model: 'Runway Gen-3',
    tool: 'Runway Gen-3',
    aspectRatio: '2.39:1',
    featured: false,
  },
];

export const CREATIONS_DATA: CreationItem[] = [
  {
    id: 'creation-1',
    title: 'Cyberpunk Lab Architect',
    category: 'Portraits',
    description: 'Portrait study capturing the fusion of modern tech innovators with futuristic ambient neon laboratories.',
    imageUrl: creationPortal,
    image: creationPortal,
    thumbnail: creationPortal,
    aspectRatio: '3:4',
    creationDate: 'March 2026',
    toolsUsed: ['RDL Prompt Studio', 'Midjourney v6.1', 'Photoshop'],
    tool: 'RDL Prompt Studio',
    model: 'Midjourney v6.1',
    tags: ['Futuristic', 'Portrait', 'Cyberpunk', 'Neon'],
    promptSnippet: 'Cinematic shot of tech innovator in cyber lab with violet bokeh...',
    featured: true,
  },
  {
    id: 'creation-2',
    title: 'Alpine Mirror Sunset',
    category: 'Landscape',
    description: 'Tranquil glacial lake mirroring snow-capped jagged peaks under radiant evening skies.',
    imageUrl: creationAlpine,
    image: creationAlpine,
    thumbnail: creationAlpine,
    aspectRatio: '1:1',
    creationDate: 'March 2026',
    toolsUsed: ['Flux Pro', 'Lightroom Pro'],
    tool: 'Flux Pro',
    model: 'Flux Pro',
    tags: ['Alpine', 'Landscape', 'Sunset', 'Glacial'],
    promptSnippet: 'Ultra-wide architectural landscape photograph of jagged snow peaks...',
    featured: true,
  },
  {
    id: 'creation-3',
    title: 'Titanium Monolith Device',
    category: 'Product',
    description: 'Minimalist product industrial design exploring ceramic glass textures and satin metal edges.',
    imageUrl: creationPhone,
    image: creationPhone,
    thumbnail: creationPhone,
    aspectRatio: '1:1',
    creationDate: 'February 2026',
    toolsUsed: ['RDL Industrial Lab', 'Flux Dev'],
    tool: 'RDL Industrial Lab',
    model: 'Flux Dev',
    tags: ['Product', 'Minimalist', 'Titanium', 'Hardware'],
    promptSnippet: 'Studio product photography of flagship smartphone on obsidian pedestal...',
    featured: true,
  },
  {
    id: 'creation-4',
    title: 'Royal Heritage Couturière',
    category: 'Portraits',
    description: 'Celebration of classic royal embroidery, hand-set Polki stones, and deep crimson silks.',
    imageUrl: creationPortrait,
    image: creationPortrait,
    thumbnail: creationPortrait,
    aspectRatio: '1:1',
    creationDate: 'March 2026',
    toolsUsed: ['Midjourney v6.1', 'Topaz Gigapixel'],
    tool: 'Midjourney v6.1',
    model: 'Midjourney v6.1',
    tags: ['Couture', 'Indian Heritage', 'Royal', 'Editorial'],
    promptSnippet: 'Editorial portrait of regal woman in handcrafted crimson lehenga...',
    featured: true,
  },
  {
    id: 'creation-5',
    title: 'Metropolis Horizon 2099',
    category: 'Architecture',
    description: 'Visionary concept of vertical mega-cities incorporating solar-harvesting architectural towers.',
    imageUrl: creationCity,
    image: creationCity,
    thumbnail: creationCity,
    aspectRatio: '1:1',
    creationDate: 'January 2026',
    toolsUsed: ['Flux Pro', 'After Effects'],
    tool: 'Flux Pro',
    model: 'Flux Pro',
    tags: ['Architecture', 'Cityscape', 'Sunset', 'Sci-Fi'],
    promptSnippet: 'Epic wide-angle cinematic shot of soaring hyper-futuristic mega-city...',
    featured: true,
  },
  {
    id: 'creation-6',
    title: 'The Solar Gatekeeper',
    category: 'Concept Art',
    description: 'Sci-fi exploratory visual illustrating interdimensional portal gateways on remote worlds.',
    imageUrl: creationPortal,
    image: creationPortal,
    thumbnail: creationPortal,
    aspectRatio: '1:1',
    creationDate: 'February 2026',
    toolsUsed: ['Midjourney v6.1', 'RDL Prompt Matrix'],
    tool: 'RDL Prompt Matrix',
    model: 'Midjourney v6.1',
    tags: ['Concept Art', 'Portal', 'Cosmic', 'Atmospheric'],
    promptSnippet: 'Cinematic low-angle wide shot of solitary traveler facing blazing portal...',
    featured: true,
  },
];

export const VIDEO_PROMPTS_DATA: VideoPromptItem[] = [
  {
    id: 'vp-ugc-serum-skincare',
    title: 'UGC Serum — Luxury Skincare Video',
    genre: 'Commercial',
    category: 'UGC / Product Advertisement',
    subcategory: 'UGC / Product Advertisement',
    description:
      'A photorealistic luxury skincare UGC video featuring a consistent male model, premium serum application, cinematic product shots, and natural beauty-commercial presentation.',
    cinematicDescription:
      'The video begins with the male model standing beside an elegant stone vanity in warm golden morning light filtering softly through sheer curtains. He naturally picks up a premium glass serum bottle and slowly turns it toward the camera, allowing the light to highlight the refined packaging and glossy texture. He dispenses a small luminous drop onto his fingertips, then gently applies the serum across his cheeks and forehead. Close-up shots capture the serum absorbing into his skin, leaving a fresh, hydrated, healthy-looking glow. The model looks naturally confident and relaxed, with subtle authentic UGC-style expressions. Finish with a refined hero shot of the serum bottle beside him on the vanity.',
    visualDescription:
      'The video begins with the male model standing beside an elegant stone vanity in warm golden morning light filtering softly through sheer curtains. He naturally picks up a premium glass serum bottle and slowly turns it toward the camera, allowing the light to highlight the refined packaging and glossy texture. He dispenses a small luminous drop onto his fingertips, then gently applies the serum across his cheeks and forehead. Close-up shots capture the serum absorbing into his skin, leaving a fresh, hydrated, healthy-looking glow. The model looks naturally confident and relaxed, with subtle authentic UGC-style expressions. Finish with a refined hero shot of the serum bottle beside him on the vanity.',
    backgroundLocation:
      'High-end modern beauty studio inspired by luxury interiors, featuring a natural stone vanity, soft sheer curtains, warm morning daylight, decorative mirror, minimal premium accessories, and a clean neutral color palette.',
    modelStyling:
      'Use the exact male model from the provided reference images. Preserve his facial features, hairstyle, skin tone, body proportions, and overall appearance consistently throughout the video. He wears the same black graphic T-shirt, black pants, black sneakers, and white neckband earphones as shown in the reference. Groomed but natural appearance, authentic masculine skincare UGC aesthetic.',
    camera:
      'Begin with a cinematic medium shot, followed by extreme macro product details, close-up shots of the model\'s face and skin, detailed shots of the serum drop on fingertips, and natural side-angle application shots. Use slow cinematic dolly movements, subtle handheld UGC motion, shallow depth of field, soft background bokeh, and smooth seamless transitions. Include an overhead vanity composition and a final product hero shot.',
    cameraMovement:
      'Slow cinematic dolly movements, subtle handheld UGC motion, shallow depth of field, soft background bokeh, smooth seamless transitions',
    cameraDirection:
      'Cinematic medium shot to extreme macro product details, side-angle application, overhead vanity composition, final product hero shot',
    lighting:
      'Warm golden morning daylight, soft diffused highlights on the skin, realistic natural shadows, subtle specular reflections on the glass serum bottle, premium beauty-commercial lighting without excessive retouching.',
    environment:
      'High-end modern beauty studio, natural stone vanity, soft sheer curtains, warm morning daylight, minimal accessories, clean neutral palette',
    characterAction:
      'Model picks up serum, dispenses drop to fingertips, applies gently to cheeks and forehead, smiles with relaxed confidence',
    performance:
      'The model behaves naturally and confidently rather than posing excessively. He looks at the serum, briefly acknowledges the camera with a subtle confident expression, applies the product gently, and finishes with a relaxed natural smile.',
    audioTone:
      'Calm, sophisticated male luxury skincare advertisement voice with a warm, confident, premium tone. Soft ambient morning atmosphere and subtle elegant background music.',
    dialogue:
      'True hydration is more than skincare... it\'s the confidence that shines through every day.',
    visualQuality:
      'Photorealistic luxury skincare commercial, realistic skin texture, natural facial movement, premium product cinematography, 4K detail, cinematic depth of field, smooth motion, consistent identity, no facial distortion, no changes to clothing or hairstyle, no artificial-looking skin.',
    actionPacing:
      'Smooth, natural, unhurried UGC beauty commercial pacing with organic transitions',
    duration: '15 to 30 seconds',
    aspectRatio: '9:16 / 16:9',
    modelRecommendation: 'Runway Gen-3 Alpha / Kling AI / Luma Dream Machine',
    model: 'Runway Gen-3 Alpha',
    tool: 'Runway Gen-3',
    recommendedEngines: ['Runway Gen-3 Alpha', 'Kling AI 1.5', 'Luma Dream Machine', 'OpenAI Sora'],
    tags: ['UGC', 'Luxury Skincare', 'Commercial', 'Product Video', 'Male Model', 'Photorealistic', '4K'],
    promptText:
      'Photorealistic luxury skincare UGC commercial video. Consistent male model with natural groomed look, black graphic T-shirt, and white neckband earphones standing beside an elegant natural stone vanity in soft warm golden morning daylight through sheer curtains. He picks up a luxury glass serum bottle, turns it to catch the light, dispenses a luminous droplet onto his fingertips, and applies it smoothly to his face. Extreme macro details of serum texture and glowing hydrated skin. Relaxed, authentic confidence, shallow depth of field, 4K 60fps cinematic video. Dialogue: "True hydration is more than skincare... it\'s the confidence that shines through every day."',
    modelFlexibilityRule:
      'If the male model/reference does not visually suit the requested creative concept, allow the creator to choose either: A. Replace the male model with a beautiful adult female model while preserving the same scene, composition, lighting, camera direction, styling quality, and action requirements; OR B. Add a beautiful adult female model beside the male model when the scene benefits from two-person composition. The replacement/addition must NOT change the core visual concept unnecessarily. Maintain photorealistic appearance, adult characters only, natural proportions, consistent identity, appropriate clothing, professional presentation, same visual quality, and same scene continuity.',
    previewImage: ugcSerumImage,
    referenceImage: ugcSerumImage,
    featured: true,
  },
  {
    id: 'vp-1',
    title: 'Cinematic Drone Arc — Neon Cyberpunk Skyline',
    genre: 'Cinematic',
    category: 'Cinematic Motion',
    cameraMovement: 'Smooth orbital 360 drone arc at high elevation descending toward rooftop',
    cameraDirection: 'Descending 360-degree orbital trajectory around rooftop helipad',
    lighting: 'Deep midnight blue with volumetric cyan and magenta neon rim lights',
    environment: 'Rain-slicked Neo-Tokyo skyline with mist and neon skyscraper reflections',
    actionPacing: 'Smooth, continuous cinematic glide at 60fps',
    duration: '5 to 10 seconds',
    aspectRatio: '16:9',
    modelRecommendation: 'Runway Gen-3 Alpha / Luma Dream Machine',
    model: 'Runway Gen-3 Alpha',
    tool: 'Luma Dream Machine',
    recommendedEngines: ['Runway Gen-3', 'Luma Dream Machine', 'Kling AI'],
    tags: ['Drone Arc', 'Neon City', 'Nighttime', '4K 60fps'],
    cinematicDescription:
      'High-speed seamless orbital drone camera shot sweeping 180 degrees around a futuristic rooftop helipad in Neo-Tokyo. Atmospheric rain mist, lens condensation, wet asphalt reflecting intense neon signage. Anamorphic lens flare, photorealistic motion blur.',
    description:
      'High-speed seamless orbital drone camera shot sweeping 180 degrees around a futuristic rooftop helipad in Neo-Tokyo. Atmospheric rain mist, lens condensation, wet asphalt reflecting intense neon signage. Anamorphic lens flare, photorealistic motion blur.',
    promptText:
      'High-speed seamless orbital drone camera shot sweeping 180 degrees around a futuristic rooftop helipad in Neo-Tokyo. Atmospheric rain mist, lens condensation, wet asphalt reflecting intense neon signage. Anamorphic lens flare, photorealistic motion blur.',
    featured: true,
  },
  {
    id: 'vp-2',
    title: 'Slow-Motion Macro — Liquid Mercury Ripple',
    genre: 'Commercial',
    category: 'Commercial & Product',
    cameraMovement: 'Extreme macro push-in with ultra-shallow depth of field (f/1.2)',
    cameraDirection: 'Centered top-down macro zoom tracking concentric ripple waves',
    lighting: 'Soft overhead studio softbox with high-contrast chrome reflections',
    environment: 'Studio environment with dark reflective surface and high specular isolation',
    actionPacing: 'Ultra slow-motion 120fps fluid deceleration',
    duration: '4 to 8 seconds',
    aspectRatio: '16:9',
    modelRecommendation: 'Kling AI 1.5 / Sora',
    model: 'Kling AI 1.5',
    tool: 'Kling AI',
    recommendedEngines: ['Kling AI 1.5', 'OpenAI Sora', 'Hailuo MiniMax'],
    tags: ['Macro', 'Fluid Simulation', 'Liquid Metal', 'Commercial'],
    cinematicDescription:
      'Ultra slow motion 120fps macro shot of a single drop of liquid metallic chrome falling onto a still pool of mercury. Perfectly symmetrical concentric ripples propagate outward. Flawless reflections of studio softbox lights, pristine zero-gravity fluidity.',
    description:
      'Ultra slow motion 120fps macro shot of a single drop of liquid metallic chrome falling onto a still pool of mercury. Perfectly symmetrical concentric ripples propagate outward. Flawless reflections of studio softbox lights, pristine zero-gravity fluidity.',
    promptText:
      'Ultra slow motion 120fps macro shot of a single drop of liquid metallic chrome falling onto a still pool of mercury. Perfectly symmetrical concentric ripples propagate outward. Flawless reflections of studio softbox lights, pristine zero-gravity fluidity.',
    featured: true,
  },
  {
    id: 'vp-3',
    title: 'Character Tracking Shot — Desert Wanderer',
    genre: 'Sci-Fi',
    category: 'Sci-Fi & Urban',
    cameraMovement: 'Low-angle forward dolly tracking shot matching actor walking pace',
    cameraDirection: 'Reverse dolly tracking backward ahead of the advancing subject',
    lighting: 'Harsh midday sun with warm dust haze and golden sand bouncing light',
    environment: 'Endless wind-swept golden dunes under an alien desert sky',
    actionPacing: 'Steady, deliberate forward walking rhythm with fluttering cloak physics',
    duration: '6 to 10 seconds',
    aspectRatio: '16:9',
    modelRecommendation: 'Runway Gen-3 / Pika 2.0',
    model: 'Runway Gen-3',
    tool: 'Pika 2.0',
    recommendedEngines: ['Runway Gen-3', 'Pika 2.0', 'Kling AI'],
    tags: ['Dolly Track', 'Sci-Fi', 'Wanderer', 'Atmospheric'],
    cinematicDescription:
      'Low-angle tracking shot moving backwards ahead of a solitary space wanderer walking across wind-swept golden dunes. Fabric of the tattered desert cloak billows in strong crosswinds. Heat shimmer rising on the distant horizon, 35mm film grain aesthetic.',
    description:
      'Low-angle tracking shot moving backwards ahead of a solitary space wanderer walking across wind-swept golden dunes. Fabric of the tattered desert cloak billows in strong crosswinds. Heat shimmer rising on the distant horizon, 35mm film grain aesthetic.',
    promptText:
      'Low-angle tracking shot moving backwards ahead of a solitary space wanderer walking across wind-swept golden dunes. Fabric of the tattered desert cloak billows in strong crosswinds. Heat shimmer rising on the distant horizon, 35mm film grain aesthetic.',
    featured: true,
  },
  {
    id: 'vp-4',
    title: 'Anime Stylized — Sakura Petal Blossom Transition',
    genre: 'Anime & Stylized',
    category: 'Cinematic Motion',
    cameraMovement: 'Upward spiral crane shot through swirling flower petals',
    cameraDirection: 'Vertical ascending spiral pivoting around the central blossom crown',
    lighting: 'Dreamy pastel springtime morning illumination with soft god-rays',
    environment: 'Historic Japanese hillside courtyard surrounded by ancient blossoming cherry trees',
    actionPacing: 'Dynamic breeze gust accelerating floral particle dispersion',
    duration: '5 seconds',
    aspectRatio: '16:9',
    modelRecommendation: 'Kling AI / Runway',
    model: 'Kling AI',
    tool: 'Runway Gen-3',
    recommendedEngines: ['Kling AI', 'Runway Gen-3', 'Pika 2.0'],
    tags: ['Anime', 'Sakura', 'Spring', 'Stylized'],
    cinematicDescription:
      'Makoto Shinkai aesthetic animation sequence. Camera spirals upward around a blooming cherry blossom tree as gust of wind scatters thousands of pink sakura petals into the sunlight. High vibrance, sparkling lens particles, painterly watercolor sky.',
    description:
      'Makoto Shinkai aesthetic animation sequence. Camera spirals upward around a blooming cherry blossom tree as gust of wind scatters thousands of pink sakura petals into the sunlight. High vibrance, sparkling lens particles, painterly watercolor sky.',
    promptText:
      'Makoto Shinkai aesthetic animation sequence. Camera spirals upward around a blooming cherry blossom tree as gust of wind scatters thousands of pink sakura petals into the sunlight. High vibrance, sparkling lens particles, painterly watercolor sky.',
    featured: false,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'calendar-lite-project',
    title: 'CALENDAR lite',
    category: 'Productivity Application',
    status: 'Production Release',
    timeline: 'Q1 2026',
    coverImage: creationAlpine,
    description:
      'A blazing-fast, distraction-free scheduling engine engineered to eliminate bloat and empower seamless daily planning.',
    summary:
      'A blazing-fast, distraction-free scheduling engine engineered to eliminate bloat and empower seamless daily planning.',
    overview:
      'Engineered an ultra-lean local-first architecture with instantaneous keyboard triggers, high-contrast dark mode legibility, and zero tracking dependencies.',
    challenge:
      'Modern calendar suites suffer from heavy memory consumption, slow cold boot times, and intrusive account sync requirements that hinder instant note and event capture.',
    concept:
      'Engineered an ultra-lean local-first architecture with instantaneous keyboard triggers, high-contrast dark mode legibility, and zero tracking dependencies.',
    conceptDesign:
      'Engineered an ultra-lean local-first architecture with instantaneous keyboard triggers, high-contrast dark mode legibility, and zero tracking dependencies.',
    workflow:
      'Rapid prototype iterations focusing on sub-millisecond local transaction times, followed by responsive mobile testing and ergonomic interaction polish.',
    process:
      'Rapid prototype iterations focusing on sub-millisecond local transaction times, followed by responsive mobile testing and ergonomic interaction polish.',
    processWorkflow: [
      'Architectural blueprinting of local database indices for sub-10ms query execution',
      'Ergonomic UI wireframing prioritizing one-thumb mobile event entry',
      'High-performance rendering pipeline ensuring 60fps calendar grid scrolling',
      'Rigorous offline battery optimization and stress benchmarking',
    ],
    outcome:
      'Sub-150ms cold startup time with full local offline transaction handling under 2MB bundle footprint.',
    results: [
      'Development Goal: Sub-150ms application cold startup time',
      'Project Focus: Complete offline functionality leveraging local browser storage',
      'Target Outcome: Under 2MB total production bundle size',
      'Concept Result: Zero user telemetry or external data harvesting',
    ],
    measurableResults: [
      'Development Goal: Sub-150ms application cold startup time',
      'Project Focus: Complete offline functionality leveraging local browser storage',
      'Target Outcome: Under 2MB total production bundle size',
      'Concept Result: Zero user telemetry or external data harvesting',
    ],
    technologies: ['TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Service Worker'],
    technologyStack: ['TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Service Worker'],
    screenshots: [creationAlpine, creationPhone],
    relatedApps: ['calendar-lite'],
    relatedPrompts: ['prompt-3', 'prompt-7'],
    connectedResources: [
      { name: 'CALENDAR lite Spec Sheet (PDF)', type: 'PDF', url: '#' },
      { name: 'Architecture Whitepaper', type: 'DOCX', url: '#' },
    ],
    externalLinks: [
      { label: 'View in Apps Directory', url: '/apps' },
      { label: 'Documentation', url: '/documents' },
    ],
    featured: true,
  },
  {
    id: 'study-ai-project',
    title: 'STUDY AI',
    category: 'Cognitive Education Suite',
    status: 'In Development',
    timeline: 'Q1 2026',
    coverImage: creationCity,
    description:
      'An intelligent study companion concept converting educational syllabus material into adaptive knowledge retention cards.',
    summary:
      'An intelligent study companion concept converting educational syllabus material into adaptive knowledge retention cards.',
    overview:
      'Developing a cognitive assistant combining semantic text distillation, automatic flashcard synthesis, and an interactive Socratic questioning framework.',
    challenge:
      'Students frequently get overwhelmed by dense textbook chapters and struggle to structure spaced repetition systems without significant manual overhead.',
    concept:
      'Developing a cognitive assistant combining semantic text distillation, automatic flashcard synthesis, and an interactive Socratic questioning framework.',
    conceptDesign:
      'Developing a cognitive assistant combining semantic text distillation, automatic flashcard synthesis, and an interactive Socratic questioning framework.',
    workflow:
      'Designing a multi-stage cognitive distillation pipeline that splits study notes into core concepts, followed by active-recall deck compilation.',
    process:
      'Designing a multi-stage cognitive distillation pipeline that splits study notes into core concepts, followed by active-recall deck compilation.',
    processWorkflow: [
      'Semantic parsing engine development for chapter keypoint extraction',
      'Implementation of spaced repetition algorithmic intervals for active recall',
      'Focused dark-mode study interface minimizing eye strain during late-night reviews',
      'Interactive testing prototype with sample study modules',
    ],
    outcome:
      'Automated topic distillation prototype with dynamic flashcard synthesis and focus timer.',
    results: [
      'Development Goal: Automated topic distillation from study notes and transcripts',
      'Project Focus: Structured spaced repetition intervals based on retention algorithms',
      'Target Outcome: Interactive Socratic study prompts for active recall',
      'Concept Result: Distraction-free study companion prototype with modular flashcards',
    ],
    measurableResults: [
      'Development Goal: Automated topic distillation from study notes and transcripts',
      'Project Focus: Structured spaced repetition intervals based on retention algorithms',
      'Target Outcome: Interactive Socratic study prompts for active recall',
      'Concept Result: Distraction-free study companion prototype with modular flashcards',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vector Algorithms', 'Web Speech API'],
    technologyStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vector Algorithms', 'Web Speech API'],
    screenshots: [creationCity, creationPortal],
    relatedApps: ['study-ai'],
    relatedPrompts: ['prompt-1', 'prompt-6'],
    connectedResources: [
      { name: 'Study AI Research Paper', type: 'PDF', url: '#' },
      { name: 'Curriculum Templates (ZIP)', type: 'ZIP', url: '#' },
    ],
    externalLinks: [
      { label: 'View in Apps Directory', url: '/apps' },
      { label: 'Connect in Lab', url: '/contact' },
    ],
    featured: true,
  },
  {
    id: 'rdl-prompt-engine',
    title: 'RDL Prompt Matrix Engine',
    category: 'AI Tooling & Automation',
    status: 'Laboratory Tool',
    timeline: 'Q4 2025 - Q1 2026',
    coverImage: creationPortal,
    description:
      'A structured generative AI prompt compiler designed to standardize parameters, lighting tags, and camera syntax for creative workflows.',
    summary:
      'A structured generative AI prompt compiler designed to standardize parameters, lighting tags, and camera syntax for creative workflows.',
    overview:
      'A unified parameter matrix with real-time token highlighting, negative prompt presets, aspect ratio calculators, and instant one-click copy feedback.',
    challenge:
      'Generative creators encounter friction due to disorganized prompt vocabulary and inconsistent weighting syntax across diverse generative models.',
    concept:
      'A unified parameter matrix with real-time token highlighting, negative prompt presets, aspect ratio calculators, and instant one-click copy feedback.',
    conceptDesign:
      'A unified parameter matrix with real-time token highlighting, negative prompt presets, aspect ratio calculators, and instant one-click copy feedback.',
    workflow:
      'Cataloged high-yield visual descriptors to build an ergonomic web builder with live tag scoring and cross-platform formatting.',
    process:
      'Cataloged high-yield visual descriptors to build an ergonomic web builder with live tag scoring and cross-platform formatting.',
    processWorkflow: [
      'Taxonomy categorization of essential visual descriptors, lens optics, and lighting setups',
      'Zero-latency browser tokenizer with visual emphasis indicators',
      'Syntax mapping across Midjourney, Flux, Stable Diffusion, and Runway',
    ],
    outcome:
      'Standardized taxonomy across image and video models with instant one-click copy workflow.',
    results: [
      'Development Goal: Standardized syntax and parameter taxonomy across image and video models',
      'Project Focus: Real-time token weighting and lighting keyword categorization',
      'Target Outcome: Fast cross-model prompt structuring and one-click copy workflows',
      'Concept Result: Integrated prompt library supporting diverse generative creative styles',
    ],
    measurableResults: [
      'Development Goal: Standardized syntax and parameter taxonomy across image and video models',
      'Project Focus: Real-time token weighting and lighting keyword categorization',
      'Target Outcome: Fast cross-model prompt structuring and one-click copy workflows',
      'Concept Result: Integrated prompt library supporting diverse generative creative styles',
    ],
    technologies: ['TypeScript', 'React', 'Regex Lexer', 'Clipboard API', 'Tailwind'],
    technologyStack: ['TypeScript', 'React', 'Regex Lexer', 'Clipboard API', 'Tailwind'],
    screenshots: [creationPortal],
    relatedApps: ['prompt-studio-pro'],
    relatedPrompts: ['prompt-1', 'prompt-5', 'prompt-8'],
    connectedResources: [
      { name: 'RDL Master Prompt Guide (PDF)', type: 'PDF', url: '#' },
    ],
    externalLinks: [
      { label: 'Explore Prompts', url: '/prompts' },
      { label: 'Video Prompts', url: '/video-prompts' },
    ],
    featured: true,
  },
];

export const DOCUMENTS_DATA: DocumentItem[] = [
  {
    id: 'doc-1',
    title: 'RDL Master Prompt Architecture 2026',
    fileName: 'RDL_Master_Prompt_Architecture_2026.pdf',
    type: 'PDF',
    fileType: 'PDF',
    fileSize: '4.2 MB',
    category: 'Prompt Cheat Sheet',
    status: 'In Preparation',
    description:
      'Comprehensive reference manual detailing syntax rules, token weights, cinematic lens tags, and lighting keywords for Flux, Midjourney, and SDXL.',
    updatedAt: 'March 2026',
    lastUpdated: 'March 2026',
    date: 'March 2026',
    pageCount: '48 pages',
    previewExcerpt:
      'SECTION 01: THE ANATOMY OF HIGH-YIELD PROMPTS. Every high-fidelity generative visual stems from four balanced pillars: Subject Specification, Environmental Lighting, Cinematic Lens Optics, and Stylistic Medium...',
    featured: true,
  },
  {
    id: 'doc-2',
    title: 'CALENDAR lite Technical Architecture Spec',
    fileName: 'CALENDAR_lite_Technical_Spec.docx',
    type: 'DOCX',
    fileType: 'DOCX',
    fileSize: '1.8 MB',
    category: 'Developer Guide',
    status: 'In Preparation',
    description:
      'Full technical architecture specification for CALENDAR lite including local IndexedDB schema, battery optimization routines, and zero-telemetry benchmarks.',
    updatedAt: 'February 2026',
    lastUpdated: 'February 2026',
    date: 'February 2026',
    pageCount: '24 pages',
    previewExcerpt:
      'SYSTEM ARCHITECTURE: The client application enforces a strict local-first data model. Database transactions are committed asynchronously to IndexedDB using typed transaction queues with zero network roundtrips...',
    featured: true,
  },
  {
    id: 'doc-3',
    title: 'Generative AI Quick Keywords Reference',
    fileName: 'Generative_AI_Quick_Keywords.txt',
    type: 'TXT',
    fileType: 'TXT',
    fileSize: '128 KB',
    category: 'Workflow Template',
    status: 'In Preparation',
    description:
      'Plain-text reference list of verified camera lenses, color palettes, lighting styles, and artistic rendering tags for rapid terminal and web copy-paste.',
    updatedAt: 'March 2026',
    lastUpdated: 'March 2026',
    date: 'March 2026',
    pageCount: 'Plain Text (1,200 lines)',
    previewExcerpt:
      '// RDL QUICK KEYWORDS REFERENCE v2.4\n// LENSES: 85mm f/1.4 anamorphic, 35mm vintage Leica, 100mm macro f/2.8, 24mm ultra-wide tilt-shift\n// LIGHTING: Rembrandt lighting, volumetric god-rays, neon rim light, softbox diffusion, golden hour...',
    featured: true,
  },
  {
    id: 'doc-4',
    title: 'RDL Design System Assets & Token Archive',
    fileName: 'RDL_Design_System_Icons_Assets.zip',
    type: 'ZIP',
    fileType: 'ZIP',
    fileSize: '18.6 MB',
    category: 'Design Spec',
    status: 'In Preparation',
    description:
      'Production archive containing vector SVG icons, dark cyber color swatches, Figma style tokens, and logo marks used across Rahul Digital Lab.',
    updatedAt: 'March 2026',
    lastUpdated: 'March 2026',
    date: 'March 2026',
    pageCount: 'Archive (42 Files)',
    previewExcerpt:
      'ZIP CONTENTS:\n- /vectors/rdl-logo-monogram.svg\n- /vectors/rdl-brand-badge.svg\n- /tokens/tailwind-theme-tokens.json\n- /palettes/midnight-cyan-palette.aco',
    featured: true,
  },
  {
    id: 'doc-5',
    title: 'STUDY AI Beta Curriculum & Pedagogy Guide',
    fileName: 'STUDY_AI_Beta_Curriculum_Guide.pdf',
    type: 'PDF',
    fileType: 'PDF',
    fileSize: '3.1 MB',
    category: 'Developer Guide',
    status: 'In Preparation',
    description:
      'Curriculum integration handbook demonstrating how educators and self-directed learners can generate custom spaced-repetition modules using STUDY AI.',
    updatedAt: 'March 2026',
    lastUpdated: 'March 2026',
    date: 'March 2026',
    pageCount: '32 pages',
    previewExcerpt:
      'PEDAGOGICAL FRAMEWORK: Spaced repetition enhances long-term retention by optimizing recall intervals. STUDY AI dynamically calculates forgetting curves using empirical revision milestones...',
    featured: true,
  },
];

export const CREATIVE_WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Ideation & Vision',
    description:
      'Every breakthrough starts with a bold digital concept. We translate abstract ideas into structured roadmaps and creative requirements.',
    icon: 'Lightbulb',
  },
  {
    step: '02',
    title: 'AI Synthesis & Prototyping',
    description:
      'Leveraging advanced prompt frameworks, generative models, and rapid web prototyping to explore aesthetics, user flows, and capabilities.',
    icon: 'Cpu',
  },
  {
    step: '03',
    title: 'Engineering & Refinement',
    description:
      'Transforming prototypes into production-grade web applications with modern TypeScript, responsive interfaces, and crisp performance.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'Deployment & Digital Reality',
    description:
      'Releasing polished software tools, open prompts, and visual case studies into the global creative ecosystem.',
    icon: 'Rocket',
  },
];

export const SOCIAL_LINKS = [
  { name: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { name: 'X', url: 'https://x.com', icon: 'Twitter' },
  { name: 'Pinterest', url: 'https://pinterest.com', icon: 'Pin' },
];
