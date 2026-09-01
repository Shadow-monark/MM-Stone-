export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  description: string;
  features: string[];
  applications: string;
  material: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'quarry-slicing',
    title: 'Primary Mine Extraction & Gangsaw Slicing',
    subtitle: 'Direct reserve block sourcing from Bayana ML 13/2022',
    iconName: 'Box',
    image: '/row_photos/IMG-20260823-WA0010.jpg',
    description:
      'We extract raw red sandstone blocks directly from our Bayana reserves (ML No. 13/2022) in District Bharatpur. Using heavy-duty multi-wire Gangsaw machines, we produce uniform, calibrated stone slabs from 20mm up to 150mm thick and lengths up to 3 meters.',
    features: [
      'Single-vein color consistency guarantee',
      'Custom block slicing up to 3m slab length',
      'Micro-calibrated slab thickness tolerances',
      'Direct quarry price without agent markup',
    ],
    applications: 'Large-scale facade projects, raw block inventory, slab distributor supply',
    material: 'Bansi Paharpur Red & Dholpur Sandstone',
  },
  {
    id: 'cnc-carving',
    title: '3D High-Precision CNC Stone Relief Carving',
    subtitle: 'Multi-axis CNC relief panels, murals & iconographic artwork',
    iconName: 'Sparkles',
    image: '/row_photos/IMG-20260823-WA0041.jpg',
    description:
      'State-of-the-art multi-axis CNC carving machines translate intricate 2D/3D CAD models directly onto solid sandstone blocks. From monumental 3D relief murals to high-relief deity panels and lotus friezes, we achieve ultra-precise depth and crisp edge definition.',
    features: [
      '3D CAD file & blueprint translation',
      'Deep undercut relief depth capabilities',
      'High-speed batch production for architectural panels',
      'Hand-finished detailing over CNC roughing',
    ],
    applications: 'Memorial halls, luxury hotel foyers, temple entryways, feature walls',
    material: 'Bansi Paharpur Red Sandstone, Makrana White Marble',
  },
  {
    id: 'jali-screens',
    title: 'Hand-Carved & CNC Perforated Jali Screens',
    subtitle: 'Traditional Rajasthani lattice screens & breeze partitions',
    iconName: 'Grid',
    image: '/craft/craft_16.jpeg',
    description:
      'Traditional Jali screens combine aesthetic geometric elegance with passive solar shading and natural ventilation. Our quarry artisans hand-carve and CNC-cut custom perforated screens with intricate floral, geometric, and radial medallion patterns.',
    features: [
      'Custom geometric, floral & Islamic lattice designs',
      'Backlit translucent screen options',
      'Double-sided polished or honed finishes',
      'Modular panel interlocking for large elevations',
    ],
    applications: 'Villa facades, courtyard privacy screens, window apertures, stairwells',
    material: 'Bansi Paharpur Red & Dholpur Pink Sandstone',
  },
  {
    id: 'temple-architecture',
    title: 'Heritage Temple Architecture & Monolithic Fabrication',
    subtitle: 'Complete turnkey components for Mandirs, Pillars, Domes & Gates',
    iconName: 'Building',
    image: '/extra_gallery/IMG-20260823-WA0064.jpg',
    description:
      'End-to-end design and fabrication of traditional temple structures according to Shilpa Shastra proportions. We create turned fluted pillars, carved capitals, cusped jharokha arches, kalash domes, stone chhatris, and grand toran entrance gates.',
    features: [
      'Traditional Shilpa Shastra compliant carving',
      'Solid turned columns & fluted pedestal bases',
      'Pre-assembled dry-fit verification prior to dispatch',
      'Comprehensive piece numbering for easy site assembly',
    ],
    applications: 'Public Mandirs, private estate sanctuaries, heritage restorations',
    material: 'Bansi Paharpur Red Sandstone & Marble',
  },
  {
    id: 'facade-cladding',
    title: 'Architectural Wall Cladding & Calibrated Slabs',
    subtitle: 'Precision exterior & interior sandstone cladding systems',
    iconName: 'Layers',
    image: '/craft/craft_03.jpeg',
    description:
      'We supply micro-calibrated sandstone wall cladding slabs with custom surface textures including bush-hammered, flamed, honed, grooved, and hand-chiseled finishes. Designed for dry-hang mechanical cladding or traditional wet-mortar installation.',
    features: [
      'Calibrated thickness for fast dry-hang installation',
      'Vast array of surface finishes (Honed, Bush-Hammered, Flamed)',
      'Beveled edges and anti-drip drip-grooves',
      'Weatherproof and thermal-insulating stone body',
    ],
    applications: 'Commercial facades, boundary walls, luxury villa exteriors',
    material: 'Bansi Paharpur Red, Dholpur & Jaisalmer Sandstone',
  },
  {
    id: 'consultation-logistics',
    title: 'Design Consultation, CAD Mapping & Pan-India Logistics',
    subtitle: 'End-to-end project management from blueprint to site delivery',
    iconName: 'Truck',
    image: '/row_photos/IMG-20260823-WA0061.jpg',
    description:
      'We work directly with architects, interior designers, and temple trusts. From 3D CAD blueprint consultation to protective heavy-duty wooden crate packaging and insured freight transport across India and international ports, we ensure zero damage in transit.',
    features: [
      'Architectural drawing analysis & quantity estimation',
      'Custom wooden crate packaging with protective foam padding',
      'Pan-India road transport & export container loading',
      'On-site installation support & structural anchoring advice',
    ],
    applications: 'Pan-India architectural contracts, export shipments',
    material: 'All Stone Varieties',
  },
];

export const STONE_MATERIALS = [
  'Bansi Paharpur Red Sandstone',
  'Bansi Paharpur Pink Sandstone',
  'Dholpur Red Sandstone',
  'Dholpur Beige / Pink Sandstone',
  'Makrana White Marble',
  'Jaisalmer Yellow Sandstone',
] as const;
