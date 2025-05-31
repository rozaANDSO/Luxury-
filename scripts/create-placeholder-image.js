const fs = require('fs');
const path = require('path');

const categories = [
  'social-media',
  'video-editing',
  'graphics',
  'paid-ads',
  'consulting'
];

const placeholderSvg = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f0f0f0"/>
  <text x="400" y="300" font-family="Arial" font-size="24" fill="#666" text-anchor="middle">
    Image Coming Soon
  </text>
</svg>
`;

const baseDir = path.join(__dirname, '../public/images');

categories.forEach(category => {
  const placeholderDir = path.join(baseDir, category, 'placeholders');
  
  if (!fs.existsSync(placeholderDir)) {
    fs.mkdirSync(placeholderDir, { recursive: true });
  }

  const placeholderPath = path.join(placeholderDir, 'project1.jpg');
  fs.writeFileSync(placeholderPath, placeholderSvg);
  console.log(`Created placeholder image: ${placeholderPath}`);
}); 