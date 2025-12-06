// Projects Data Configuration

export interface MagazineProject {
  id: string;
  title: string;
  description: string;
  category: 'magazine';
  images: string[];
  pdfUrl: string;
  year: string;
  tools: string[];
}

export interface PosterProject {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  category: 'poster';
  image: string;
  year: string;
  tools: string[];
}

export interface BrandingProject {
  id: string;
  title: string;
  description: string;
  category: 'branding';
  images: string[];
  pdfUrl?: string;
  year: string;
  tools: string[];
}

export type GraphicDesignProject = MagazineProject | PosterProject | BrandingProject;

// Magazine Projects
export const magazineProjects: MagazineProject[] = [
  {
    id: 'muse-magazine',
    title: 'Muse Magazine',
    description: 'A sophisticated editorial magazine featuring contemporary art and culture. The design emphasizes clean typography, balanced layouts, and thoughtful use of white space to let the content breathe.',
    category: 'magazine',
    images: [
      '/work/Graphic Design/magazine/Magazine_Muse/1.png',
      '/work/Graphic Design/magazine/Magazine_Muse/2.png',
      '/work/Graphic Design/magazine/Magazine_Muse/3.png',
      '/work/Graphic Design/magazine/Magazine_Muse/4.png',
      '/work/Graphic Design/magazine/Magazine_Muse/5.png',
    ],
    pdfUrl: '/work/Graphic Design/magazine/Magazine_Muse/muse.pdf',
    year: '2025',
    tools: ['InDesign', 'Photoshop', 'Illustrator']
  }
];

// Poster Projects
export const posterProjects: PosterProject[] = [
  {
    id: 'asian-american-diaspora',
    title: 'Asian American Diaspora – Learning Community Poster',
    shortTitle: 'Asian American Diaspora Learning Cluster',
    description: 'A promotional poster introducing a Spring 2026 learning community that connects research, writing, and cultural anthropology through immersive experiences in Boston\'s Chinatown.',
    category: 'poster',
    image: '/work/Graphic Design/posters/Asian American Diaspora – Learning Community Poster/image.png',
    year: '2025',
    tools: ['Illustrator', 'Photoshop']
  },
  {
    id: 'holiday-celebration',
    title: 'End-of-Semester Holiday Celebration Poster',
    shortTitle: 'Holiday Celebration Invitation',
    description: 'A festive invitation with warm holiday visuals, inviting students to a community celebration with an optional Yankee Swap activity.',
    category: 'poster',
    image: '/work/Graphic Design/posters/End-of-Semester Holiday Celebration Poster/image.png',
    year: '2025',
    tools: ['Illustrator', 'Photoshop']
  },
  {
    id: 'orientation-schedule',
    title: 'New International Student Orientation – Schedule Poster',
    shortTitle: 'Orientation Two-Day Schedule',
    description: 'A structured schedule design outlining the two-day orientation program for new international students, highlighting sessions, resources, and campus support.',
    category: 'poster',
    image: '/work/Graphic Design/posters/New International Student Orientation – Schedule Poster/International Community Day Poster/image.png',
    year: '2025',
    tools: ['Illustrator', 'InDesign']
  },
  {
    id: 'international-community-day',
    title: 'International Community Day Poster',
    shortTitle: 'International Community Day Announcement',
    description: 'A vibrant, inclusive poster inviting international students to learn about campus resources, safety practices, rights, and community support.',
    category: 'poster',
    image: '/work/Graphic Design/posters/International Community Day Poster/image.png',
    year: '2025',
    tools: ['Illustrator', 'Photoshop']
  },
  {
    id: 'orientation-wayfinding',
    title: 'Welcome to Orientation Wayfinding Poster',
    shortTitle: 'Orientation Welcome Sign',
    description: 'A clean, directional poster created to guide new international students on campus, emphasizing clarity and visual hierarchy.',
    category: 'poster',
    image: '/work/Graphic Design/posters/Welcome to Orientation Wayfinding Poster/image.png',
    year: '2025',
    tools: ['Illustrator']
  },
  {
    id: 'visual-hierarchy-typography',
    title: 'Visual Hierarchy - Typography Poster',
    shortTitle: 'Typography Study',
    description: 'An educational poster exploring the principles of visual hierarchy through typographic composition, demonstrating scale, weight, and spatial relationships.',
    category: 'poster',
    image: '/work/Graphic Design/posters/Visual Hierarchy - Typography Poster/image.png',
    year: '2025',
    tools: ['Illustrator', 'InDesign']
  }
];

// Product Design & Branding Projects
export const brandingProjects: BrandingProject[] = [
  {
    id: 'malesia-tea',
    title: 'Malësia Tea',
    description: 'Complete brand identity and product packaging design for Malësia, an artisanal tea company. The design draws inspiration from Albanian mountain heritage, featuring elegant typography and natural color palettes.',
    category: 'branding',
    images: [
      '/work/Graphic Design/product design & branding/malesia/1.png',
      '/work/Graphic Design/product design & branding/malesia/2.png',
      '/work/Graphic Design/product design & branding/malesia/3.png',
      '/work/Graphic Design/product design & branding/malesia/4.png',
      '/work/Graphic Design/product design & branding/malesia/5.png',
      '/work/Graphic Design/product design & branding/malesia/6.png',
      '/work/Graphic Design/product design & branding/malesia/7.png',
      '/work/Graphic Design/product design & branding/malesia/8.png',
      '/work/Graphic Design/product design & branding/malesia/9.png',
      '/work/Graphic Design/product design & branding/malesia/10.png',
      '/work/Graphic Design/product design & branding/malesia/11.png',
      '/work/Graphic Design/product design & branding/malesia/12.png',
      '/work/Graphic Design/product design & branding/malesia/13.png',
    ],
    pdfUrl: '/work/Graphic Design/product design & branding/malesia/Malesia.pdf',
    year: '2025',
    tools: ['Illustrator', 'Photoshop', 'InDesign']
  }
];

// Photography curated selection (subset of gallery)
export const photographyPreview = [
  { id: 'photo-1', img: '/gallery/buildings/IMG_9737%202.jpeg', height: 450 },
  { id: 'photo-2', img: '/gallery/buildings/IMG_3672 2.jpeg', height: 380 },
  { id: 'photo-3', img: 'gallery/BHCC/image00070.jpeg', height: 450 },
  { id: 'photo-4', img: '/gallery/BHCC/image00104.jpeg', height: 450 },
  { id: 'photo-5', img: '/gallery/buildings/IMG_3401%202.jpeg', height: 380 },
  { id: 'photo-6', img: '/gallery/buildings/IMG_8906 2.jpeg', height: 450 },
];

// Drawings curated selection (subset of gallery)
export const drawingsPreview = [
  { id: 'draw-1', img: '/gallery/drawings/IMG_1664.jpeg', height: 400 },
  { id: 'draw-2', img: '/gallery/drawings/IMG_1143.jpeg', height: 340 },
  { id: 'draw-3', img: '/gallery/drawings/IMG_2017.jpeg', height: 400 },
  { id: 'draw-4', img: '/gallery/drawings/IMG_3423.jpeg', height: 400 },
  { id: 'draw-5', img: '/gallery/drawings/02481AF7-D4AC-432A-86D7-FD58A780E2A8.JPG', height: 380 },
  { id: 'draw-6', img: '/gallery/drawings/IMG_3596.jpg', height: 400 },
];
