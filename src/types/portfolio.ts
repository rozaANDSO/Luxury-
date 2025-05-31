export type PortfolioCategory =
  | 'social-media-marketing'
  | 'video-editing'
  | 'graphics'
  | 'paid-advertising'
  | 'consulting';

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  images: {
    thumbnail: string;
    gallery: string[];
  };
  client?: string;
  testimonial?: {
    text: string;
    author: string;
    position?: string;
  };
  challenges?: string[];
  solutions?: string[];
  impact?: string;
}

export interface CategoryInfo {
  id: PortfolioCategory;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: PortfolioCategory;
  description: string;
  images: string[];
  client: string;
  year: number;
} 