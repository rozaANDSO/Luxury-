import fs from 'fs';
import path from 'path';

const categories = [
  'social-media-marketing',
  'video-editing',
  'graphics',
  'paid-advertising',
  'consulting'
];

const baseSvg = `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f1f1f1"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666" text-anchor="middle" dy=".3em">
    Placeholder
  </text>
</svg>
`;

const publicPath = path.join(__dirname, '../public/portfolio');

async function generatePlaceholders() {
  for (const category of categories) {
    const categoryPath = path.join(publicPath, category);
    
    // Create category directory if it doesn't exist
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }

    // Generate 10 placeholder SVGs
    for (let i = 1; i <= 10; i++) {
      const filePath = path.join(categoryPath, `placeholder-${i}.svg`);
      
      // Only create if file doesn't exist
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, baseSvg);
      }
    }
  }
}

generatePlaceholders().catch(console.error);
