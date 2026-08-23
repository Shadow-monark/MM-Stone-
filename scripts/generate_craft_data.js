const fs = require('fs');
const path = require('path');

const extraDir = path.join(__dirname, '../public/extra_gallery');
const files = fs.readdirSync(extraDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));

const categories = [
  'Jali & Screens',
  'Temple & Reliefs',
  'Pillars & Friezes',
  'Lanterns & Landscape',
  'Quarry & Workshop'
];

const materials = [
  'Bansi Paharpur Red Sandstone',
  'Dholpur Pink Sandstone',
  'Dholpur Red Sandstone',
  'Makrana White Marble',
  'Jaisalmer Yellow Sandstone'
];

const applications = [
  'Temple Sanctums & Facades',
  'Terrace Railings & Boundary Walls',
  'Heritage Courtyard Entryways',
  'Luxury Residential Feature Walls',
  'Monumental Pillars & Porticos',
  'Landscape Gardens & Pathways',
  'Quarry Stock & Slab Yards'
];

const masterItems = [
  {
    id: 'craft-master-01',
    title: 'Mahatma Jyotirao Phule & Savitribai Phule Red Sandstone Relief',
    category: 'Temple & Reliefs',
    material: 'Bansi Paharpur Red Sandstone',
    description: 'Bespoke 3D high-relief wall panel depicting Mahatma Phule & Savitribai Phule with books, framed in an ornate deep-carved floral border.',
    dimensions: '5.5ft x 3.5ft x 100mm monolithic slab',
    application: 'Educational Institutions, Memorial Halls, Heritage Entryways',
    image: '/extra_gallery/IMG-20260823-WA0064.jpg',
    featured: true
  },
  {
    id: 'craft-master-02',
    title: 'Kevat Samvad & River Passage High-Relief Panel',
    category: 'Temple & Reliefs',
    material: 'Warm Red Sandstone with Backlight',
    description: 'Sculptural masterpiece depicting Shri Ram, Sita, Lakshman, and Kevat in a carved wooden boat over lotus waters with glowing halo accents.',
    dimensions: '6ft x 4ft x 120mm relief slab',
    application: 'Grand Mandir Sanctums, Cultural Centers, Luxury Foyer Reliefs',
    image: '/extra_gallery/IMG-20260823-WA0079.jpg',
    featured: true
  },
  {
    id: 'craft-master-03',
    title: 'Monumental OM & Deity Temple Facade Relief Jali',
    category: 'Temple & Reliefs',
    material: 'Dholpur Red Sandstone',
    description: 'Comprehensive temple entrance relief with central radial OM medallion, micro-perforated lattice Jali backdrop, and hanging bell friezes.',
    dimensions: '8ft width x 5ft height custom assembly',
    application: 'Temple Main Portals, Sanctum Entrances, Heritage Gates',
    image: '/extra_gallery/IMG-20260823-WA0033.jpg',
    featured: true
  },
  {
    id: 'craft-master-04',
    title: 'Imperial Sanctum Mandir Architecture with Cusped Arches',
    category: 'Temple & Reliefs',
    material: 'Makrana Marble & Sandstone',
    description: 'Complete indoor devotional sanctum with lit cusped jharokha arches, turned fluted columns, hanging brass bells, and lotus floor rosettes.',
    dimensions: 'Bespoke Architectural Installation',
    application: 'Private Villa Temples, Luxury Residential Sanctums',
    image: '/extra_gallery/IMG-20260823-WA0084.jpg',
    featured: true
  },
  {
    id: 'craft-master-05',
    title: 'Lord Murugan (Kartikeya) High-Relief Sandstone Statue',
    category: 'Temple & Reliefs',
    material: 'Bansi Paharpur Red Sandstone',
    description: 'Iconographic relief carving of Lord Murugan holding Vel spear in an arched moulding frame, detailed down to crown ornamentations.',
    dimensions: '4ft height x 2.2ft width',
    application: 'Temple Niches, Devotional Pillars, Sanctuary Entrance Portals',
    image: '/extra_gallery/IMG-20260823-WA0109.jpg',
    featured: true
  },
  {
    id: 'craft-master-06',
    title: 'Precision Carved Floral Lattice Window Screen (Jali)',
    category: 'Jali & Screens',
    material: 'Bansi Paharpur Red Sandstone',
    description: 'Geometrically aligned geometric & floral lattice screen designed for natural ventilation and architectural shadow play.',
    dimensions: '4ft x 2.5ft x 50mm slab',
    application: 'Window Apertures, Courtyard Screens, Villa Facades',
    image: '/extra_gallery/IMG-20260823-WA0018.jpg',
    featured: true
  }
];

const generatedItems = files.map((file, idx) => ({
  id: 'gallery-item-' + String(idx + 1).padStart(3, '0'),
  title: 'Architectural Commission Spec #' + String(idx + 1).padStart(3, '0'),
  category: categories[idx % categories.length],
  material: materials[idx % materials.length],
  description: 'Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.',
  dimensions: 'Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)',
  application: applications[idx % applications.length],
  image: '/extra_gallery/' + file
}));

const allItems = [...masterItems, ...generatedItems];

const header = `export interface CraftItem {
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

export const CRAFT_ITEMS: CraftItem[] = `;

const content = header + JSON.stringify(allItems, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, '../data/craftData.ts'), content);
console.log('Successfully generated craftData.ts with ' + allItems.length + ' items from to put in more folder');
