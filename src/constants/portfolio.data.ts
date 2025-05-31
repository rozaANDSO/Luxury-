import type { Project, PortfolioCategory } from "@/types/portfolio.type";

const createPlaceholders = (category: PortfolioCategory, count: number): Project[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `placeholder-${category}-${i}`,
    slug: `placeholder-${category}-${i}`,
    title: "Coming Soon",
    category,
    images: [],
    challenges: [],
    description: "Exciting new project in development",
    date: "2025",
    client: "Confidential",
  }));
};

const portfolioData: Project[] = [
  {
    id: "luxury-fashion-campaign",
    slug: "luxury-fashion-campaign",
    title: "Luxury Fashion Social Campaign",
    category: "social-media-marketing",
    images: [
      {
        path: "/portfolio/social-media/client1/project3.jpg",
        title: "Luxury Fashion Campaign",
        description: "Social media campaign showcase",
      },
    ],
    challenges: [
      "Establishing consistent luxury brand voice",
      "Engaging high-net-worth audience",
      "Creating scroll-stopping content",
    ],
    testimonial: {
      quote: "The team transformed our social presence beautifully",
      name: "Sophie Laurent",
      position: "Marketing Director",
    },
    date: "2024",
    client: "Éclat Couture",
    description: "360° social media strategy for luxury fashion brand",
  },
  ...createPlaceholders("social-media-marketing", 9),

  {
    id: "prestige-watches-video",
    slug: "prestige-watches-video",
    title: "Luxury Watch Campaign Video",
    category: "video-editing",
    images: [
      {
        path: "/portfolio/video-editing/project1/still2.jpg",
        title: "Luxury Watch Campaign",
        description: "Cinematic product video",
      },
    ],
    challenges: [
      "Showcasing intricate craftsmanship",
      "Maintaining cinematic quality",
      "Creating emotional connection",
    ],
    date: "2024",
    client: "Horologe Masters",
    description: "Cinematic product video series",
  },
  ...createPlaceholders("video-editing", 9),

  {
    id: "luxury-resort-logo",
    slug: "luxury-resort-logo",
    title: "Boutique Resort Branding",
    category: "graphics",
    images: [
      {
        path: "/portfolio/graphics/client1/project2.jpg",
        title: "Boutique Resort Logo",
        description: "Luxury resort branding",
      },
    ],
    challenges: [
      "Capturing coastal elegance",
      "Creating versatile brand assets",
      "Maintaining luxury aesthetic",
    ],
    client: "Azure Resorts",
    date: "2023",
    description: "Complete brand identity design for luxury coastal resort",
  },
  ...createPlaceholders("graphics", 9),

  {
    id: "high-end-jewelry-ads",
    slug: "high-end-jewelry-ads",
    title: "Luxury Jewelry Ad Campaign",
    category: "paid-advertising",
    images: [
      {
        path: "/portfolio/paid-ads/client1/project1.jpg",
        title: "Luxury Jewelry Ad",
        description: "Paid advertising campaign",
      },
    ],
    challenges: [
      "Targeting HNWI audiences",
      "Maximizing CTR while maintaining brand integrity",
      "Optimizing for mobile-first viewing",
    ],
    client: "Lumière Jewelers",
    date: "2024",
    description: "Strategic paid advertising campaign for high-end jewelry collection",
  },
  ...createPlaceholders("paid-advertising", 9),

  {
    id: "luxury-automotive-management",
    slug: "luxury-automotive-management",
    title: "Premium Automotive Social Management",
    category: "consulting",
    images: [
      {
        path: "/portfolio/consulting/client1/consulting1.jpg",
        title: "Luxury Automotive Management",
        description: "Social media management",
      },
    ],
    challenges: [
      "Developing content calendar",
      "Crisis management strategy",
      "Audience growth analysis",
    ],
    client: "Veloce Motors",
    date: "2023",
    description: "Comprehensive social media strategy and management for luxury automotive brand",
  },
  ...createPlaceholders("consulting", 9),
];

export default portfolioData;
