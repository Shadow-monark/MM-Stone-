'use client';

import { Box, Sparkles, Grid, Building, Layers, Truck, Hammer } from 'lucide-react';

export default function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case 'Box':
      return <Box className="w-4 h-4" />;
    case 'Sparkles':
      return <Sparkles className="w-4 h-4" />;
    case 'Grid':
      return <Grid className="w-4 h-4" />;
    case 'Building':
      return <Building className="w-4 h-4" />;
    case 'Layers':
      return <Layers className="w-4 h-4" />;
    case 'Truck':
      return <Truck className="w-4 h-4" />;
    default:
      return <Hammer className="w-4 h-4" />;
  }
}
