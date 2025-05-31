import type { Project } from '@/types/portfolio.type';

const portfolioProjects: Project[] = [
  // === Paid Advertising (Real Project) ===
  {
    id: 'luxury-watch-campaign-1',
    slug: 'luxury-watch-campaign',
    title: 'Luxury Watch Campaign',
    category: 'paid-advertising' as const,
    description: 'High-converting Facebook and Instagram ad campaign for premium timepieces.',
    images: [
      {
        path: '/portfolio/paid-ads/client1/project1.jpg',
        title: 'Luxury Timepiece ROAS Boost',
        description: 'Targeted luxury audience with 4.2X ROAS and 67% lower acquisition cost.',
      },
      {
        path: '/portfolio/paid-ads/client1/project2.jpg',
        title: 'Prestige Brand Storytelling',
        description: 'Focused on high-end aesthetics, exclusivity, and trust building.',
      },
      {
        path: '/portfolio/paid-ads/client1/project3.jpg',
        title: 'Dynamic Retargeting Strategy',
        description: 'Personalized dynamic product ads increased conversion rate significantly.',
      },
      {
        path: '/portfolio/paid-ads/client1/project4.jpg',
        title: 'Motion-Powered Product Launch',
        description: 'Elegant video-first creatives for new collection roll-out.',
      },
    ],
    client: 'Chrono Élite',
    date: '2024',
    challenges: ['Reaching niche luxury audience', 'Maintaining brand exclusivity in visuals'],
    solutions: ['Tailored creatives per persona', 'Advanced Facebook Ads funnel'],
    impact: 'Boosted conversions by 47% YoY, achieved 4.2x ROAS',
    testimonial: {
      quote: 'They elevated our brand presence and delivered tangible results.',
      name: 'Jean-Michel Cartier',
      position: 'Head of Digital Marketing',
    },
  },

  // === Social Media Marketing (Real Project) ===
  {
    id: 'royal-retreat-social',
    slug: 'royal-retreat-social-launch',
    title: 'Royal Retreat Resort – Social Media Launch',
    category: 'social-media-marketing' as const,
    description: 'Luxury resort awareness campaign across Instagram and TikTok.',
    images: [
      {
        path: '/portfolio/social-media/client2/project1.jpg',
        title: 'Luxury Lifestyle Grid Aesthetic',
        description: 'Curated visual identity with vibrant tones and elegant fonts.',
      },
      {
        path: '/portfolio/social-media/client2/project2.jpg',
        title: 'TikTok Engagement Strategy',
        description: 'Short-form reels promoting exclusive experiences drove 3x engagement.',
      },
      {
        path: '/portfolio/social-media/client2/project3.jpg',
        title: 'Influencer-Driven Campaign',
        description: 'Collaborated with micro-influencers to target affluent travelers.',
      },
    ],
    client: 'Royal Retreat',
    date: '2023',
    challenges: ['Launch visibility in competitive market', 'Consistent high-end branding'],
    solutions: ['Engaging content calendar', 'Influencer partnerships & UGC'],
    impact: 'Tripled followers in 2 months, 140% increase in booking inquiries',
    testimonial: {
      quote: 'Their strategy captured our brand essence and expanded our reach rapidly.',
      name: 'Selam Ayele',
      position: 'Marketing Director',
    },
  },

  // === Graphics (Logo & Poster) (Real Project) ===
  {
    id: 'velvet-logo-branding',
    slug: 'velvet-logo-branding',
    title: 'Velvet Bloom – Luxury Branding & Logo',
    category: 'graphics' as const,
    description: 'Complete visual identity design for a boutique floral brand.',
    images: [
      {
        path: '/portfolio/graphics/client3/project1.jpg',
        title: 'Elegant Monogram Logo',
        description: 'Custom serif typeface with rose gold gradient finish.',
      },
      {
        path: '/portfolio/graphics/client3/project2.jpg',
        title: 'Brand Guidelines Poster',
        description: 'Poster outlining logo usage, colors, and luxury positioning.',
      },
      {
        path: '/portfolio/graphics/client3/project3.jpg',
        title: 'Packaging & Print Concepts',
        description: 'Premium box and label mockups with minimal yet opulent design.',
      },
    ],
    client: 'Velvet Bloom',
    date: '2024',
    challenges: ['Creating unique yet timeless identity', 'Appealing to affluent female clientele'],
    solutions: ['Minimalist luxury logo design', 'Color psychology & tactile texture emphasis'],
    impact: 'Brand launch received 95% positive feedback, featured in "Luxury Daily"',
    testimonial: {
      quote: 'Their designs translated our vision into something truly iconic.',
      name: 'Liya Mekonnen',
      position: 'Founder & Creative Director',
    },
  },

  // === Paid Advertising (Placeholders) ===
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `paid-ad-placeholder${i + 1}`,
    slug: `paid-ad-placeholder${i + 1}`,
    title: 'Coming Soon',
    category: 'paid-advertising' as const,
    description: 'Upcoming paid advertising project.',
    images: [
      {
        path: `/portfolio/paid-ads/client3/project${i + 1}.jpg`,
        title: 'Ad Campaign Preview',
        description: 'Creative concept coming soon.',
      },
    ],
    date: '',
    challenges: [],
    solutions: [],
    impact: '',
  })),

  // === Social Media Marketing (Placeholders) ===
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `smm-placeholder${i + 1}`,
    slug: `social-media-marketing${i + 1}`,
    title: 'Coming Soon',
    category: 'social-media-marketing' as const,
    description: 'Upcoming social media strategy and execution project.',
    images: [
      {
        path: `/portfolio/social-media/client1/project${i + 1}.jpg`,
        title: 'Social Media Design',
        description: 'Visual content and engagement strategy preview.',
      },
    ],
    date: '',
    challenges: [],
    solutions: [],
    impact: '',
  })),

  // === Video Editing (Placeholders) ===
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `video-editing-placeholder${i + 1}`,
    slug: `video-editing${i + 1}`,
    title: 'Coming Soon',
    category: 'video-editing' as const,
    description: 'Upcoming luxury product or event video edit.',
    images: [
      {
        path: `/portfolio/video-editing/client4/project${i + 1}.jpg`,
        title: 'Edited Video Frame',
        description: 'Snapshot from upcoming video editing project.',
      },
    ],
    date: '',
    challenges: [],
    solutions: [],
    impact: '',
  })),

  // === Graphics (Placeholders) ===
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `graphics-placeholder${i + 1}`,
    slug: `graphics${i + 1}`,
    title: 'Coming Soon',
    category: 'graphics' as const,
    description: 'Future logo or poster design project.',
    images: [
      {
        path: `/portfolio/graphics/client1/project${i + 1}.jpg`,
        title: 'Design Concept',
        description: 'Elegant branding visuals coming soon.',
      },
    ],
    date: '',
    challenges: [],
    solutions: [],
    impact: '',
  })),

  // === Consulting & Social Media Management (Placeholders) ===
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `consulting-placeholder${i + 1}`,
    slug: `consulting${i + 1}`,
    title: 'Coming Soon',
    category: 'consulting' as const,
    description: 'Strategic consulting and account management project.',
    images: [
      {
        path: `/portfolio/consulting/client2/project${i + 1}.jpg`,
        title: 'Consulting Snapshot',
        description: 'Client success visuals coming soon.',
      },
    ],
    date: '',
    challenges: [],
    solutions: [],
    impact: '',
  })),
];

export default portfolioProjects;
