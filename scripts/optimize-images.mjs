import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

async function optimizeImages() {
  // Update paths to match your project structure
  const directories = [
    'public/assets/images/gallery',
    'public/assets/images/about',
    'public/assets/images/aboutBg',
    'public/assets/images/icon',
    'public/assets/images/services',
    'public/assets/images/partners',
    'public/assets/images/poster',
    'public/assets/images/footerBg',
    'public/assets/images/brand'
  ].map(dir => path.join(projectRoot, dir));

  for (const dir of directories) {
    try {
      // Create directory if it doesn't exist
      await fs.mkdir(dir, { recursive: true });
      console.log(`✓ Ensuring directory exists: ${dir}`);

      const files = await fs.readdir(dir);
      
      if (files.length === 0) {
        console.log(`⚠ No images found in ${dir}`);
        continue;
      }

      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          const inputPath = path.join(dir, file);
          const outputPath = path.join(dir, `${path.parse(file).name}.webp`);

          try {
            await sharp(inputPath)
              .webp({ 
                quality: 80,
                effort: 6 // Higher compression effort
              })
              .toFile(outputPath);

            console.log(`✓ Optimized: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
          } catch (error) {
            console.error(`❌ Error processing ${file}:`, error.message);
          }
        }
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠ Creating directory: ${dir}`);
        await fs.mkdir(dir, { recursive: true });
      } else {
        console.error(`❌ Error processing directory ${dir}:`, error.message);
      }
    }
  }
}

console.log('🔄 Starting image optimization...');
optimizeImages()
  .then(() => console.log('✅ Image optimization complete!'))
  .catch(error => console.error('❌ Fatal error:', error));