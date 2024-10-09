import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://euphonious-bombolone-5185ab.netlify.app';
const outputDir = path.join(__dirname, 'public', 'downloaded_site');

async function downloadFile(url, filePath) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  await fs.promises.writeFile(filePath, response.data);
  console.log(`Downloaded: ${filePath}`);
}

async function processPage(url, filePath) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  // Download CSS files
  $('link[rel="stylesheet"]').each((_, element) => {
    const href = $(element).attr('href');
    if (href) {
      const cssUrl = new URL(href, url).href;
      const cssPath = path.join(outputDir, new URL(cssUrl).pathname);
      downloadFile(cssUrl, cssPath);
    }
  });

  // Download JavaScript files
  $('script[src]').each((_, element) => {
    const src = $(element).attr('src');
    if (src) {
      const jsUrl = new URL(src, url).href;
      const jsPath = path.join(outputDir, new URL(jsUrl).pathname);
      downloadFile(jsUrl, jsPath);
    }
  });

  // Download images
  $('img[src]').each((_, element) => {
    const src = $(element).attr('src');
    if (src) {
      const imgUrl = new URL(src, url).href;
      const imgPath = path.join(outputDir, new URL(imgUrl).pathname);
      downloadFile(imgUrl, imgPath);
    }
  });

  // Save the HTML file
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  await fs.promises.writeFile(filePath, response.data);
  console.log(`Saved HTML: ${filePath}`);
}

async function downloadSite() {
  await processPage(baseUrl, path.join(outputDir, 'index.html'));
  console.log('Site downloaded successfully!');
}

downloadSite().catch(console.error);