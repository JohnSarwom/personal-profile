const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'src', 'index.css'),
  path.join(__dirname, 'src', 'components', 'FeaturedCapabilities.tsx'),
  path.join(__dirname, 'src', 'components', 'About.tsx')
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    let originalLength = content.length;
    
    // Replace hex color
    content = content.replace(/#bfff07/gi, '#2adeb8');
    
    // Replace CSS variables reference text if present
    content = content.replace(/Neon Lime Green/gi, 'Aqua/Teal');
    
    // Replace RGB values (both spaced and unspaced)
    content = content.replace(/191,\s*255,\s*7/g, '42, 222, 184');
    
    fs.writeFileSync(f, content);
    console.log(`Updated ${path.basename(f)} - Changes made: ${content !== fs.readFileSync(f, 'utf8') ? 'yes' : 'checking'}`);
  }
});

console.log('All targeted color replacements have been processed.');
