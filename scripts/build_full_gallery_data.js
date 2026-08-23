const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));

const categories = [
  'Jali & Screens',
  'Temple & Reliefs',
  'Pillars & Friezes',
  'Lanterns & Landscape',
  'Quarry & Workshop',
];

const materials = [
  'Bansi Paharpur Red Sandstone',
  'Dholpur Pink Sandstone',
  'Dholpur Red Sandstone',
  'Makrana White Marble',
  'Jaisalmer Yellow Sandstone',
];

const applications = [
  'Temple Sanctums & Facades',
  'Terrace Railings & Boundary Walls',
  'Heritage Courtyard Entryways',
  'Luxury Residential Feature Walls',
  'Monumental Pillars & Porticos',
  'Landscape Gardens & Pathways',
  'Quarry Stock & Slab Yards',
];

const featuredImages = [
  {
    id: 'craft-master-01',
    title: 'Mahatma Jyotirao Phule & Savitribai Phule Red Sandstone Relief',
    category: 'Temple & Reliefs',
    material: 'Bansi Paharpur Red Sandstone',
    description: 'Bespoke 3D high-relief wall panel depicting Mahatma Phule & Savitribai Phule with books, framed in an ornate deep-carved floral border.',
    dimensions: '5.5ft x 3.5ft x 100mm monolithic slab',
    application: 'Educational Institutions, Memorial Halls, Heritage Entryways',
    image: '/bg/about_mandir.jpg',
    featured: true,
  },
  {
    id: 'craft-master-02',
    title: 'Kevat Samvad & River Passage High-Relief Panel',
    category: 'Temple & Reliefs',
    material: 'Warm Red Sandstone with Backlight',
    description: 'Sculptural masterpiece depicting Shri Ram, Sita, Lakshman, and Kevat in a carved wooden boat over lotus waters with glowing halo accents.',
    dimensions: '6ft x 4ft x 120mm relief slab',
    application: 'Grand Mandir Sanctums, Cultural Centers, Luxury Foyer Reliefs',
    image: '/bg/hero_carving.jpg',
    featured: true,
  },
  {
    id: 'craft-master-03',
    title: 'Monumental OM & Deity Temple Facade Relief Jali',
    category: 'Temple & Reliefs',
    material: 'Dholpur Red Sandstone',
    description: 'Comprehensive temple entrance relief with central radial OM medallion, micro-perforated lattice Jali backdrop, and hanging bell friezes.',
    dimensions: '8ft width x 5ft height custom assembly',
    application: 'Temple Main Portals, Sanctum Entrances, Heritage Gates',
    image: '/bg/om_temple.jpg',
    featured: true,
  },
  {
    id: 'craft-master-04',
    title: 'Imperial Sanctum Mandir Architecture with Cusped Arches',
    category: 'Temple & Reliefs',
    material: 'Makrana Marble & Sandstone',
    description: 'Complete indoor devotional sanctum with lit cusped jharokha arches, turned fluted columns, hanging brass bells, and lotus floor rosettes.',
    dimensions: 'Bespoke Architectural Installation',
    application: 'Private Villa Temples, Luxury Residential Sanctums',
    image: '/bg/sanctum_interior.jpg',
    featured: true,
  },
  {
    id: 'craft-master-05',
    title: 'Lord Murugan (Kartikeya) High-Relief Sandstone Statue',
    category: 'Temple & Reliefs',
    material: 'Bansi Paharpur Red Sandstone',
    description: 'Iconographic relief carving of Lord Murugan holding Vel spear in an arched moulding frame, detailed down to crown ornamentations.',
    dimensions: '4ft height x 2.2ft width',
    application: 'Temple Niches, Devotional Pillars, Sanctuary Entrance Portals',
    image: '/bg/deity_relief.jpg',
    featured: true,
  },
  {
    id: 'craft-master-06',
    title: 'Precision Carved Floral Lattice Window Screen (Jali)',
    category: 'Jali & Screens',
    material: 'Bansi Paharpur Red Sandstone',
    description: 'Geometrically aligned geometric & floral lattice screen designed for natural ventilation and architectural shadow play.',
    dimensions: '4ft x 2.5ft x 50mm slab',
    application: 'Window Apertures, Courtyard Screens, Villa Facades',
    image: '/gallery/IMG-20260823-WA0079.jpg',
    featured: true,
  },
];

let items = [...featuredImages];
let idCounter = 1;

files.forEach((file) => {
  const imagePath = `/gallery/${file}`;
  if (featuredImages.some(f => f.image === imagePath)) return;

  const catIdx = (idCounter - 1) % categories.length;
  const matIdx = (idCounter - 1) % materials.length;
  const appIdx = (idCounter - 1) % applications.length;

  items.push({
    id: `gallery-item-${String(idCounter).padStart(3, '0')}`,
    title: `Architectural Commission Spec #${String(idCounter).padStart(3, '0')}`,
    category: categories[catIdx],
    material: materials[matIdx],
    description: `Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.`,
    dimensions: `Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)`,
    application: applications[appIdx],
    image: imagePath,
  });

  idCounter++;
});

const fileContent = `export interface CraftItem {
  id: string;
  title: string;
  category: 'Jali & Screens' | 'Temple & Reliefs' | 'Pillars & Friezes' | 'Lanterns & Landscape' | 'Quarry & Workshop';
  material: string;
  description: string;
  dimensions?: string;
  application: string;
  image: string;
  featured?: boolean;
}

export const CRAFT_CATEGORIES = [
  'All Works',
  'Jali & Screens',
  'Temple & Reliefs',
  'Pillars & Friezes',
  'Lanterns & Landscape',
  'Quarry & Workshop',
] as const;

export const CRAFT_ITEMS: CraftItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../data/craftData.ts'), fileContent, 'utf-8');
console.log(`Successfully generated craftData.ts with ${items.length} total items!`);
