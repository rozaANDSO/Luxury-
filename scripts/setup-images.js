const fs = require('fs');
const path = require('path');

const categories = [
  'social-media',
  'video-editing',
  'graphics',
  'paid-ads',
  'consulting'
];

const baseDir = path.join(__dirname, '../public/images');

// Create base directory if it doesn't exist
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Create category folders and client subfolders
categories.forEach(category => {
  const categoryPath = path.join(baseDir, category);
  
  // Create category folder
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
  }

  // Create placeholders folder
  const placeholdersPath = path.join(categoryPath, 'placeholders');
  if (!fs.existsSync(placeholdersPath)) {
    fs.mkdirSync(placeholdersPath, { recursive: true });
  }

  // Create client subfolders
  for (let i = 1; i <= 5; i++) {
    const clientPath = path.join(categoryPath, `client${i}`);
    if (!fs.existsSync(clientPath)) {
      fs.mkdirSync(clientPath, { recursive: true });
    }

    // Create placeholder files
    for (let j = 1; j <= 3; j++) {
      const placeholderPath = path.join(clientPath, `project${j}.jpg`);
      if (!fs.existsSync(placeholderPath)) {
        // Create an empty file as a placeholder
        fs.writeFileSync(placeholderPath, '');
        console.log(`Created placeholder: ${placeholderPath}`);
      }
    }
  }
}); 