export interface GalleryImage {
  id: string;
  img: string;
  url: string;
  height: number;
  category: string;
}

const bhccImages = [
  'image00002.jpeg',
  'image00011.jpeg',
  'image00018.jpeg',
  'image00023.jpeg',
  'image00025.jpeg',
  'image00027.jpeg',
  'image00058.jpeg',
  'image00059.jpeg',
  'image00064.jpeg',
  'image00066.jpeg',
  'image00069.jpeg',
  'image00070.jpeg',
  'image00076.jpeg',
  'image00078.jpeg',
  'image00084.jpeg',
  'image00101.jpeg',
  'image00104.jpeg',
  'image00107.jpeg',
];

const buildingImages = [
  'IMG_0305 2.jpeg',
  'IMG_1843 2.jpeg',
  'IMG_1845 2.jpeg',
  'IMG_1868 2.jpeg',
  'IMG_2298 2.jpeg',
  'IMG_2812 2.jpeg',
  'IMG_2984 2.jpeg',
  'IMG_3016 2.jpeg',
  'IMG_3207 2.jpeg',
  'IMG_3401 2.jpeg',
  'IMG_3672 2.jpeg',
  'IMG_3720 2.jpeg',
  'IMG_3730 2.jpeg',
  'IMG_5313 2.jpeg',
  'IMG_5317 2.jpeg',
  'IMG_5834 2.jpeg',
  'IMG_7419_jpg 2.jpeg',
  'IMG_8440 2.jpeg',
  'IMG_8906 2.jpeg',
  'IMG_8917 2.jpeg',
  'IMG_9317 2.jpeg',
  'IMG_9737 2.jpeg',
  'IMG_9790 2.jpeg',
];

const drawingImages = [
  '02481AF7-D4AC-432A-86D7-FD58A780E2A8.JPG',
  '279D9503-0193-47AD-B9FA-46B942A1CE93.jpg',
  'B5E4BC22-A0BD-4705-A791-191F81AF8209.JPG',
  'F8B0255A-4B8C-4703-881A-71AF5DD5642C.JPG',
  'IMG_1143.jpeg',
  'IMG_1664.jpeg',
  'IMG_2017.jpeg',
  'IMG_2337.jpg',
  'IMG_3423.jpeg',
  'IMG_3596.jpg',
];

// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create gallery data with fixed heights
const bhccData = bhccImages.map((img, index) => ({
  id: `bhcc-${index}`,
  img: `/gallery/BHCC/${img}`,
  url: `/gallery/BHCC/${img}`,
  height: 300 + (index % 5) * 60,
  category: 'BHCC'
}));

const buildingsData = buildingImages.map((img, index) => ({
  id: `buildings-${index}`,
  img: `/gallery/buildings/${img}`,
  url: `/gallery/buildings/${img}`,
  height: 300 + (index % 5) * 60,
  category: 'BUILDINGS'
}));

const drawingsData = drawingImages.map((img, index) => ({
  id: `drawings-${index}`,
  img: `/gallery/drawings/${img}`,
  url: `/gallery/drawings/${img}`,
  height: 300 + (index % 5) * 60,
  category: 'DRAWINGS'
}));

// Shuffle once on initialization
export const galleryData: GalleryImage[] = shuffleArray([
  ...bhccData,
  ...buildingsData,
  ...drawingsData
]);
