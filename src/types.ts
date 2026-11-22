export type ProductStatus =
  | 'MVP / Pre-commercial pilot under development'
  | 'Prototype / Evaluation'
  | 'Functional prototype under development'
  | 'Technology prototype'
  | 'Prototype';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  statusColor: 'emerald' | 'blue' | 'cyan' | 'amber' | 'indigo';
  website?: string;
  primaryImage: string;
  gallery: string[];
  keyFeatures: string[];
  technicalArchitecture: string[];
  problemSolved: string;
  stageDetails: string;
  technologies: string[];
}

export interface Capability {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  badge: string;
}

export interface Solution {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  coreCapabilities: string[];
  targetSectors: string[];
  technologies: string[];
  relatedProducts?: string[];
}
