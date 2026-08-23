export interface CraftItem {
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

export const CRAFT_ITEMS: CraftItem[] = [
  {
    "id": "craft-master-01",
    "title": "Mahatma Jyotirao Phule & Savitribai Phule Red Sandstone Relief",
    "category": "Temple & Reliefs",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke 3D high-relief wall panel depicting Mahatma Phule & Savitribai Phule with books, framed in an ornate deep-carved floral border.",
    "dimensions": "5.5ft x 3.5ft x 100mm monolithic slab",
    "application": "Educational Institutions, Memorial Halls, Heritage Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0064.jpg",
    "featured": true
  },
  {
    "id": "craft-master-02",
    "title": "Kevat Samvad & River Passage High-Relief Panel",
    "category": "Temple & Reliefs",
    "material": "Warm Red Sandstone with Backlight",
    "description": "Sculptural masterpiece depicting Shri Ram, Sita, Lakshman, and Kevat in a carved wooden boat over lotus waters with glowing halo accents.",
    "dimensions": "6ft x 4ft x 120mm relief slab",
    "application": "Grand Mandir Sanctums, Cultural Centers, Luxury Foyer Reliefs",
    "image": "/extra_gallery/IMG-20260823-WA0079.jpg",
    "featured": true
  },
  {
    "id": "craft-master-03",
    "title": "Monumental OM & Deity Temple Facade Relief Jali",
    "category": "Temple & Reliefs",
    "material": "Dholpur Red Sandstone",
    "description": "Comprehensive temple entrance relief with central radial OM medallion, micro-perforated lattice Jali backdrop, and hanging bell friezes.",
    "dimensions": "8ft width x 5ft height custom assembly",
    "application": "Temple Main Portals, Sanctum Entrances, Heritage Gates",
    "image": "/extra_gallery/IMG-20260823-WA0033.jpg",
    "featured": true
  },
  {
    "id": "craft-master-04",
    "title": "Imperial Sanctum Mandir Architecture with Cusped Arches",
    "category": "Temple & Reliefs",
    "material": "Makrana Marble & Sandstone",
    "description": "Complete indoor devotional sanctum with lit cusped jharokha arches, turned fluted columns, hanging brass bells, and lotus floor rosettes.",
    "dimensions": "Bespoke Architectural Installation",
    "application": "Private Villa Temples, Luxury Residential Sanctums",
    "image": "/extra_gallery/IMG-20260823-WA0084.jpg",
    "featured": true
  },
  {
    "id": "craft-master-05",
    "title": "Lord Murugan (Kartikeya) High-Relief Sandstone Statue",
    "category": "Temple & Reliefs",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Iconographic relief carving of Lord Murugan holding Vel spear in an arched moulding frame, detailed down to crown ornamentations.",
    "dimensions": "4ft height x 2.2ft width",
    "application": "Temple Niches, Devotional Pillars, Sanctuary Entrance Portals",
    "image": "/extra_gallery/IMG-20260823-WA0109.jpg",
    "featured": true
  },
  {
    "id": "craft-master-06",
    "title": "Precision Carved Floral Lattice Window Screen (Jali)",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Geometrically aligned geometric & floral lattice screen designed for natural ventilation and architectural shadow play.",
    "dimensions": "4ft x 2.5ft x 50mm slab",
    "application": "Window Apertures, Courtyard Screens, Villa Facades",
    "image": "/extra_gallery/IMG-20260823-WA0018.jpg",
    "featured": true
  },
  {
    "id": "gallery-item-001",
    "title": "Architectural Commission Spec #001",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0018.jpg"
  },
  {
    "id": "gallery-item-002",
    "title": "Architectural Commission Spec #002",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0019.jpg"
  },
  {
    "id": "gallery-item-003",
    "title": "Architectural Commission Spec #003",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0021.jpg"
  },
  {
    "id": "gallery-item-004",
    "title": "Architectural Commission Spec #004",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0024.jpg"
  },
  {
    "id": "gallery-item-005",
    "title": "Architectural Commission Spec #005",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0025.jpg"
  },
  {
    "id": "gallery-item-006",
    "title": "Architectural Commission Spec #006",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0026.jpg"
  },
  {
    "id": "gallery-item-007",
    "title": "Architectural Commission Spec #007",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0028.jpg"
  },
  {
    "id": "gallery-item-008",
    "title": "Architectural Commission Spec #008",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0029.jpg"
  },
  {
    "id": "gallery-item-009",
    "title": "Architectural Commission Spec #009",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0031.jpg"
  },
  {
    "id": "gallery-item-010",
    "title": "Architectural Commission Spec #010",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0032.jpg"
  },
  {
    "id": "gallery-item-011",
    "title": "Architectural Commission Spec #011",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0033.jpg"
  },
  {
    "id": "gallery-item-012",
    "title": "Architectural Commission Spec #012",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0034.jpg"
  },
  {
    "id": "gallery-item-013",
    "title": "Architectural Commission Spec #013",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0036.jpg"
  },
  {
    "id": "gallery-item-014",
    "title": "Architectural Commission Spec #014",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0037.jpg"
  },
  {
    "id": "gallery-item-015",
    "title": "Architectural Commission Spec #015",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0038.jpg"
  },
  {
    "id": "gallery-item-016",
    "title": "Architectural Commission Spec #016",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0043.jpg"
  },
  {
    "id": "gallery-item-017",
    "title": "Architectural Commission Spec #017",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0046.jpg"
  },
  {
    "id": "gallery-item-018",
    "title": "Architectural Commission Spec #018",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0048.jpg"
  },
  {
    "id": "gallery-item-019",
    "title": "Architectural Commission Spec #019",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0055.jpg"
  },
  {
    "id": "gallery-item-020",
    "title": "Architectural Commission Spec #020",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0056.jpg"
  },
  {
    "id": "gallery-item-021",
    "title": "Architectural Commission Spec #021",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0057.jpg"
  },
  {
    "id": "gallery-item-022",
    "title": "Architectural Commission Spec #022",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0060.jpg"
  },
  {
    "id": "gallery-item-023",
    "title": "Architectural Commission Spec #023",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0062.jpg"
  },
  {
    "id": "gallery-item-024",
    "title": "Architectural Commission Spec #024",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0064.jpg"
  },
  {
    "id": "gallery-item-025",
    "title": "Architectural Commission Spec #025",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0070.jpg"
  },
  {
    "id": "gallery-item-026",
    "title": "Architectural Commission Spec #026",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0072.jpg"
  },
  {
    "id": "gallery-item-027",
    "title": "Architectural Commission Spec #027",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0078.jpg"
  },
  {
    "id": "gallery-item-028",
    "title": "Architectural Commission Spec #028",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0079.jpg"
  },
  {
    "id": "gallery-item-029",
    "title": "Architectural Commission Spec #029",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0080.jpg"
  },
  {
    "id": "gallery-item-030",
    "title": "Architectural Commission Spec #030",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0082.jpg"
  },
  {
    "id": "gallery-item-031",
    "title": "Architectural Commission Spec #031",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0083.jpg"
  },
  {
    "id": "gallery-item-032",
    "title": "Architectural Commission Spec #032",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0084.jpg"
  },
  {
    "id": "gallery-item-033",
    "title": "Architectural Commission Spec #033",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0085.jpg"
  },
  {
    "id": "gallery-item-034",
    "title": "Architectural Commission Spec #034",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0087.jpg"
  },
  {
    "id": "gallery-item-035",
    "title": "Architectural Commission Spec #035",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0088.jpg"
  },
  {
    "id": "gallery-item-036",
    "title": "Architectural Commission Spec #036",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0089.jpg"
  },
  {
    "id": "gallery-item-037",
    "title": "Architectural Commission Spec #037",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0090.jpg"
  },
  {
    "id": "gallery-item-038",
    "title": "Architectural Commission Spec #038",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0091.jpg"
  },
  {
    "id": "gallery-item-039",
    "title": "Architectural Commission Spec #039",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0095.jpg"
  },
  {
    "id": "gallery-item-040",
    "title": "Architectural Commission Spec #040",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0098.jpg"
  },
  {
    "id": "gallery-item-041",
    "title": "Architectural Commission Spec #041",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0099.jpg"
  },
  {
    "id": "gallery-item-042",
    "title": "Architectural Commission Spec #042",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0100.jpg"
  },
  {
    "id": "gallery-item-043",
    "title": "Architectural Commission Spec #043",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0101.jpg"
  },
  {
    "id": "gallery-item-044",
    "title": "Architectural Commission Spec #044",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0102.jpg"
  },
  {
    "id": "gallery-item-045",
    "title": "Architectural Commission Spec #045",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0103.jpg"
  },
  {
    "id": "gallery-item-046",
    "title": "Architectural Commission Spec #046",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0105.jpg"
  },
  {
    "id": "gallery-item-047",
    "title": "Architectural Commission Spec #047",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0107.jpg"
  },
  {
    "id": "gallery-item-048",
    "title": "Architectural Commission Spec #048",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0109.jpg"
  },
  {
    "id": "gallery-item-049",
    "title": "Architectural Commission Spec #049",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0110.jpg"
  },
  {
    "id": "gallery-item-050",
    "title": "Architectural Commission Spec #050",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0111.jpg"
  },
  {
    "id": "gallery-item-051",
    "title": "Architectural Commission Spec #051",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0112.jpg"
  },
  {
    "id": "gallery-item-052",
    "title": "Architectural Commission Spec #052",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0113.jpg"
  },
  {
    "id": "gallery-item-053",
    "title": "Architectural Commission Spec #053",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0114.jpg"
  },
  {
    "id": "gallery-item-054",
    "title": "Architectural Commission Spec #054",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0115.jpg"
  },
  {
    "id": "gallery-item-055",
    "title": "Architectural Commission Spec #055",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0116.jpg"
  },
  {
    "id": "gallery-item-056",
    "title": "Architectural Commission Spec #056",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0118.jpg"
  },
  {
    "id": "gallery-item-057",
    "title": "Architectural Commission Spec #057",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0121.jpg"
  },
  {
    "id": "gallery-item-058",
    "title": "Architectural Commission Spec #058",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0123.jpg"
  },
  {
    "id": "gallery-item-059",
    "title": "Architectural Commission Spec #059",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0124.jpg"
  },
  {
    "id": "gallery-item-060",
    "title": "Architectural Commission Spec #060",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0126.jpg"
  },
  {
    "id": "gallery-item-061",
    "title": "Architectural Commission Spec #061",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0127.jpg"
  },
  {
    "id": "gallery-item-062",
    "title": "Architectural Commission Spec #062",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0128.jpg"
  },
  {
    "id": "gallery-item-063",
    "title": "Architectural Commission Spec #063",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0129.jpg"
  },
  {
    "id": "gallery-item-064",
    "title": "Architectural Commission Spec #064",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0130.jpg"
  },
  {
    "id": "gallery-item-065",
    "title": "Architectural Commission Spec #065",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0132.jpg"
  },
  {
    "id": "gallery-item-066",
    "title": "Architectural Commission Spec #066",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0134.jpg"
  },
  {
    "id": "gallery-item-067",
    "title": "Architectural Commission Spec #067",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0135.jpg"
  },
  {
    "id": "gallery-item-068",
    "title": "Architectural Commission Spec #068",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0136.jpg"
  },
  {
    "id": "gallery-item-069",
    "title": "Architectural Commission Spec #069",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0137.jpg"
  },
  {
    "id": "gallery-item-070",
    "title": "Architectural Commission Spec #070",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0138.jpg"
  },
  {
    "id": "gallery-item-071",
    "title": "Architectural Commission Spec #071",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0139.jpg"
  },
  {
    "id": "gallery-item-072",
    "title": "Architectural Commission Spec #072",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0140.jpg"
  },
  {
    "id": "gallery-item-073",
    "title": "Architectural Commission Spec #073",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0141.jpg"
  },
  {
    "id": "gallery-item-074",
    "title": "Architectural Commission Spec #074",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0142.jpg"
  },
  {
    "id": "gallery-item-075",
    "title": "Architectural Commission Spec #075",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0143.jpg"
  },
  {
    "id": "gallery-item-076",
    "title": "Architectural Commission Spec #076",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0144.jpg"
  },
  {
    "id": "gallery-item-077",
    "title": "Architectural Commission Spec #077",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0145.jpg"
  },
  {
    "id": "gallery-item-078",
    "title": "Architectural Commission Spec #078",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0146.jpg"
  },
  {
    "id": "gallery-item-079",
    "title": "Architectural Commission Spec #079",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0147.jpg"
  },
  {
    "id": "gallery-item-080",
    "title": "Architectural Commission Spec #080",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0148.jpg"
  },
  {
    "id": "gallery-item-081",
    "title": "Architectural Commission Spec #081",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0149.jpg"
  },
  {
    "id": "gallery-item-082",
    "title": "Architectural Commission Spec #082",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0150.jpg"
  },
  {
    "id": "gallery-item-083",
    "title": "Architectural Commission Spec #083",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0151.jpg"
  },
  {
    "id": "gallery-item-084",
    "title": "Architectural Commission Spec #084",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0152.jpg"
  },
  {
    "id": "gallery-item-085",
    "title": "Architectural Commission Spec #085",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0153.jpg"
  },
  {
    "id": "gallery-item-086",
    "title": "Architectural Commission Spec #086",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0154.jpg"
  },
  {
    "id": "gallery-item-087",
    "title": "Architectural Commission Spec #087",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0155.jpg"
  },
  {
    "id": "gallery-item-088",
    "title": "Architectural Commission Spec #088",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0156.jpg"
  },
  {
    "id": "gallery-item-089",
    "title": "Architectural Commission Spec #089",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0157.jpg"
  },
  {
    "id": "gallery-item-090",
    "title": "Architectural Commission Spec #090",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0158.jpg"
  },
  {
    "id": "gallery-item-091",
    "title": "Architectural Commission Spec #091",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0159.jpg"
  },
  {
    "id": "gallery-item-092",
    "title": "Architectural Commission Spec #092",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0160.jpg"
  },
  {
    "id": "gallery-item-093",
    "title": "Architectural Commission Spec #093",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0161.jpg"
  },
  {
    "id": "gallery-item-094",
    "title": "Architectural Commission Spec #094",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0163.jpg"
  },
  {
    "id": "gallery-item-095",
    "title": "Architectural Commission Spec #095",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0164.jpg"
  },
  {
    "id": "gallery-item-096",
    "title": "Architectural Commission Spec #096",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0165.jpg"
  },
  {
    "id": "gallery-item-097",
    "title": "Architectural Commission Spec #097",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0167.jpg"
  },
  {
    "id": "gallery-item-098",
    "title": "Architectural Commission Spec #098",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0168.jpg"
  },
  {
    "id": "gallery-item-099",
    "title": "Architectural Commission Spec #099",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0169.jpg"
  },
  {
    "id": "gallery-item-100",
    "title": "Architectural Commission Spec #100",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0170.jpg"
  },
  {
    "id": "gallery-item-101",
    "title": "Architectural Commission Spec #101",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0171.jpg"
  },
  {
    "id": "gallery-item-102",
    "title": "Architectural Commission Spec #102",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0172.jpg"
  },
  {
    "id": "gallery-item-103",
    "title": "Architectural Commission Spec #103",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0173.jpg"
  },
  {
    "id": "gallery-item-104",
    "title": "Architectural Commission Spec #104",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0174.jpg"
  },
  {
    "id": "gallery-item-105",
    "title": "Architectural Commission Spec #105",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0175.jpg"
  },
  {
    "id": "gallery-item-106",
    "title": "Architectural Commission Spec #106",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0176.jpg"
  },
  {
    "id": "gallery-item-107",
    "title": "Architectural Commission Spec #107",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0177.jpg"
  },
  {
    "id": "gallery-item-108",
    "title": "Architectural Commission Spec #108",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0178.jpg"
  },
  {
    "id": "gallery-item-109",
    "title": "Architectural Commission Spec #109",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0179.jpg"
  },
  {
    "id": "gallery-item-110",
    "title": "Architectural Commission Spec #110",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0180.jpg"
  },
  {
    "id": "gallery-item-111",
    "title": "Architectural Commission Spec #111",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0181.jpg"
  },
  {
    "id": "gallery-item-112",
    "title": "Architectural Commission Spec #112",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0182.jpg"
  },
  {
    "id": "gallery-item-113",
    "title": "Architectural Commission Spec #113",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0183.jpg"
  },
  {
    "id": "gallery-item-114",
    "title": "Architectural Commission Spec #114",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0184.jpg"
  },
  {
    "id": "gallery-item-115",
    "title": "Architectural Commission Spec #115",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0185.jpg"
  },
  {
    "id": "gallery-item-116",
    "title": "Architectural Commission Spec #116",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0186.jpg"
  },
  {
    "id": "gallery-item-117",
    "title": "Architectural Commission Spec #117",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0187.jpg"
  },
  {
    "id": "gallery-item-118",
    "title": "Architectural Commission Spec #118",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0188.jpg"
  },
  {
    "id": "gallery-item-119",
    "title": "Architectural Commission Spec #119",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0189.jpg"
  },
  {
    "id": "gallery-item-120",
    "title": "Architectural Commission Spec #120",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0190.jpg"
  },
  {
    "id": "gallery-item-121",
    "title": "Architectural Commission Spec #121",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0191.jpg"
  },
  {
    "id": "gallery-item-122",
    "title": "Architectural Commission Spec #122",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0192.jpg"
  },
  {
    "id": "gallery-item-123",
    "title": "Architectural Commission Spec #123",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0193.jpg"
  },
  {
    "id": "gallery-item-124",
    "title": "Architectural Commission Spec #124",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0194.jpg"
  },
  {
    "id": "gallery-item-125",
    "title": "Architectural Commission Spec #125",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0195.jpg"
  },
  {
    "id": "gallery-item-126",
    "title": "Architectural Commission Spec #126",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0197.jpg"
  },
  {
    "id": "gallery-item-127",
    "title": "Architectural Commission Spec #127",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0201.jpg"
  },
  {
    "id": "gallery-item-128",
    "title": "Architectural Commission Spec #128",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0202.jpg"
  },
  {
    "id": "gallery-item-129",
    "title": "Architectural Commission Spec #129",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0204.jpg"
  },
  {
    "id": "gallery-item-130",
    "title": "Architectural Commission Spec #130",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0205.jpg"
  },
  {
    "id": "gallery-item-131",
    "title": "Architectural Commission Spec #131",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0207.jpg"
  },
  {
    "id": "gallery-item-132",
    "title": "Architectural Commission Spec #132",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0208.jpg"
  },
  {
    "id": "gallery-item-133",
    "title": "Architectural Commission Spec #133",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0209.jpg"
  },
  {
    "id": "gallery-item-134",
    "title": "Architectural Commission Spec #134",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0212.jpg"
  },
  {
    "id": "gallery-item-135",
    "title": "Architectural Commission Spec #135",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0213.jpg"
  },
  {
    "id": "gallery-item-136",
    "title": "Architectural Commission Spec #136",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0214.jpg"
  },
  {
    "id": "gallery-item-137",
    "title": "Architectural Commission Spec #137",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0215.jpg"
  },
  {
    "id": "gallery-item-138",
    "title": "Architectural Commission Spec #138",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0216.jpg"
  },
  {
    "id": "gallery-item-139",
    "title": "Architectural Commission Spec #139",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0217.jpg"
  },
  {
    "id": "gallery-item-140",
    "title": "Architectural Commission Spec #140",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0218.jpg"
  },
  {
    "id": "gallery-item-141",
    "title": "Architectural Commission Spec #141",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0219.jpg"
  },
  {
    "id": "gallery-item-142",
    "title": "Architectural Commission Spec #142",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0220.jpg"
  },
  {
    "id": "gallery-item-143",
    "title": "Architectural Commission Spec #143",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0221.jpg"
  },
  {
    "id": "gallery-item-144",
    "title": "Architectural Commission Spec #144",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0222.jpg"
  },
  {
    "id": "gallery-item-145",
    "title": "Architectural Commission Spec #145",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0223.jpg"
  },
  {
    "id": "gallery-item-146",
    "title": "Architectural Commission Spec #146",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0224.jpg"
  },
  {
    "id": "gallery-item-147",
    "title": "Architectural Commission Spec #147",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0225.jpg"
  },
  {
    "id": "gallery-item-148",
    "title": "Architectural Commission Spec #148",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0226.jpg"
  },
  {
    "id": "gallery-item-149",
    "title": "Architectural Commission Spec #149",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0231.jpg"
  },
  {
    "id": "gallery-item-150",
    "title": "Architectural Commission Spec #150",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0235.jpg"
  },
  {
    "id": "gallery-item-151",
    "title": "Architectural Commission Spec #151",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0237.jpg"
  },
  {
    "id": "gallery-item-152",
    "title": "Architectural Commission Spec #152",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0240.jpg"
  },
  {
    "id": "gallery-item-153",
    "title": "Architectural Commission Spec #153",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0242.jpg"
  },
  {
    "id": "gallery-item-154",
    "title": "Architectural Commission Spec #154",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0244.jpg"
  },
  {
    "id": "gallery-item-155",
    "title": "Architectural Commission Spec #155",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0245.jpg"
  },
  {
    "id": "gallery-item-156",
    "title": "Architectural Commission Spec #156",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0246.jpg"
  },
  {
    "id": "gallery-item-157",
    "title": "Architectural Commission Spec #157",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0247.jpg"
  },
  {
    "id": "gallery-item-158",
    "title": "Architectural Commission Spec #158",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0250.jpg"
  },
  {
    "id": "gallery-item-159",
    "title": "Architectural Commission Spec #159",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0251.jpg"
  },
  {
    "id": "gallery-item-160",
    "title": "Architectural Commission Spec #160",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0252.jpg"
  },
  {
    "id": "gallery-item-161",
    "title": "Architectural Commission Spec #161",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0253.jpg"
  },
  {
    "id": "gallery-item-162",
    "title": "Architectural Commission Spec #162",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0254.jpg"
  },
  {
    "id": "gallery-item-163",
    "title": "Architectural Commission Spec #163",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0255.jpg"
  },
  {
    "id": "gallery-item-164",
    "title": "Architectural Commission Spec #164",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0256.jpg"
  },
  {
    "id": "gallery-item-165",
    "title": "Architectural Commission Spec #165",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0257.jpg"
  },
  {
    "id": "gallery-item-166",
    "title": "Architectural Commission Spec #166",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Monumental Pillars & Porticos",
    "image": "/extra_gallery/IMG-20260823-WA0258.jpg"
  },
  {
    "id": "gallery-item-167",
    "title": "Architectural Commission Spec #167",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Landscape Gardens & Pathways",
    "image": "/extra_gallery/IMG-20260823-WA0259.jpg"
  },
  {
    "id": "gallery-item-168",
    "title": "Architectural Commission Spec #168",
    "category": "Pillars & Friezes",
    "material": "Dholpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Quarry Stock & Slab Yards",
    "image": "/extra_gallery/IMG-20260823-WA0260.jpg"
  },
  {
    "id": "gallery-item-169",
    "title": "Architectural Commission Spec #169",
    "category": "Lanterns & Landscape",
    "material": "Makrana White Marble",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Temple Sanctums & Facades",
    "image": "/extra_gallery/IMG-20260823-WA0261.jpg"
  },
  {
    "id": "gallery-item-170",
    "title": "Architectural Commission Spec #170",
    "category": "Quarry & Workshop",
    "material": "Jaisalmer Yellow Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Terrace Railings & Boundary Walls",
    "image": "/extra_gallery/IMG-20260823-WA0262.jpg"
  },
  {
    "id": "gallery-item-171",
    "title": "Architectural Commission Spec #171",
    "category": "Jali & Screens",
    "material": "Bansi Paharpur Red Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Heritage Courtyard Entryways",
    "image": "/extra_gallery/IMG-20260823-WA0263.jpg"
  },
  {
    "id": "gallery-item-172",
    "title": "Architectural Commission Spec #172",
    "category": "Temple & Reliefs",
    "material": "Dholpur Pink Sandstone",
    "description": "Bespoke natural stone fabrication crafted at our Bayana quarry facility. Micro-calibrated thickness and custom hand-finished texture.",
    "dimensions": "Custom Sizing (Standard 3ft x 5ft / Slabs up to 3m)",
    "application": "Luxury Residential Feature Walls",
    "image": "/extra_gallery/IMG-20260823-WA0264.jpg"
  }
];
