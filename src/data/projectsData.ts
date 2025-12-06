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
    year: '2024',
    tools: ['InDesign', 'Photoshop', 'Illustrator']
  }
];

// Poster Projects (placeholder - add actual posters when available)
export const posterProjects: PosterProject[] = [
  // Add poster projects here when available
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
    year: '2024',
    tools: ['Illustrator', 'Photoshop', 'InDesign']
  }
];

// Photography curated selection (subset of gallery)
export const photographyPreview = [
  { id: 'photo-1', img: '/gallery/BHCC/image00002.jpeg', height: 350 },
  { id: 'photo-2', img: '/gallery/buildings/IMG_3672 2.jpeg', height: 420 },
  { id: 'photo-3', img: '/gallery/BHCC/image00018.jpeg', height: 300 },
  { id: 'photo-4', img: '/gallery/buildings/IMG_2812 2.jpeg', height: 380 },
  { id: 'photo-5', img: '/gallery/BHCC/image00064.jpeg', height: 340 },
  { id: 'photo-6', img: '/gallery/buildings/IMG_8906 2.jpeg', height: 400 },
];

// Drawings curated selection (subset of gallery)
export const drawingsPreview = [
  { id: 'draw-1', img: '/gallery/drawings/IMG_1143.jpeg', height: 400 },
  { id: 'draw-2', img: '/gallery/drawings/IMG_1664.jpeg', height: 350 },
  { id: 'draw-3', img: '/gallery/drawings/IMG_2017.jpeg', height: 380 },
  { id: 'draw-4', img: '/gallery/drawings/IMG_3423.jpeg', height: 420 },
  { id: 'draw-5', img: '/gallery/drawings/02481AF7-D4AC-432A-86D7-FD58A780E2A8.JPG', height: 360 },
  { id: 'draw-6', img: '/gallery/drawings/B5E4BC22-A0BD-4705-A791-191F81AF8209.JPG', height: 390 },
];
