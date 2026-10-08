export type PageId = 'home' | 'about' | 'services' | 'projects' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  accentColor: string;
  features: string[];
  subCategories: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'interior' | 'exterior';
  categoryLabel: string;
  location: string;
  description: string;
  fullStory?: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  palette: { name: string; hex: string }[];
  completionTime: string;
  clientType: string;
  highlights: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'interiors' | 'exteriors' | 'homes' | 'commercial' | 'color' | 'before_after';
  categoryLabel: string;
  image: string;
  caption: string;
  location: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  accent: string;
  category: string;
  description: string;
  mood: string;
  bestFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  property: string;
  avatar: string;
  rating: number;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  serviceRequired: string;
  location: string;
  preferredStartDate: string;
  propertySize: string;
  message: string;
}
