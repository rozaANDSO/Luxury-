export type PortfolioCategory =
  | "social-media-marketing"
  | "video-editing"
  | "graphics"
  | "paid-advertising"
  | "consulting";

export interface CategoryInfo {
  id: PortfolioCategory;
  title: string;
  description: string;
  displayTitle: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  position?: string;
}

export interface ImageInfo {
  path: string;
  title?: string;
  description?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  images: ImageInfo[];
  client?: string;
  challenges?: string[];
  solutions?: string[];
  impact?: string;
  testimonial?: Testimonial;
  date?: string;
  year?: number;
}

export interface PortfolioFilterProps {
  activeCategory: PortfolioCategory;
  setActiveCategory: (category: PortfolioCategory) => void;
}
