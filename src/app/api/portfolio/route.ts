import { NextResponse } from 'next/server';

// Sample portfolio data - you should replace this with your actual data source
const portfolioItems = [
  {
    id: 1,
    title: 'Business Strategy Development',
    category: 'consulting',
    description: 'Developed comprehensive business strategies for Fortune 500 companies',
    image: '/images/portfolio/consulting-1.jpg',
  },
  {
    id: 2,
    title: 'Digital Transformation',
    category: 'consulting',
    description: 'Led digital transformation initiatives for enterprise clients',
    image: '/images/portfolio/consulting-2.jpg',
  },
  // Add more portfolio items as needed
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let filteredItems = portfolioItems;
    
    if (category) {
      filteredItems = portfolioItems.filter(
        item => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json({
      items: filteredItems,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch portfolio items', success: false },
      { status: 500 }
    );
  }
} 