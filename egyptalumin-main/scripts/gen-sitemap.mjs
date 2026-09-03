// Generates public/sitemap.xml from the built output in dist/.
// Runs automatically after `npm run build` (see package.json "postbuild").
// The previous hand-maintained sitemap listed 10 of 56 pages.
import { readdir, writeFile, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const SITE = 'https://techaluminum.com';
const DIST = 'dist';

// Priority and change frequency by URL shape. First match wins.
const RULES = [
  [/^\/en\/$/,                      1.00, 'weekly'],
  [/^\/(de|fr|it)\/$/,              0.95, 'weekly'],
  [/adc12/,                         0.95, 'weekly'],   // the push product
  [/^\/en\/products\/[^/]+\/$/,     0.90, 'monthly'],
  [/^\/(de|fr|it)\/(produkte|produits|prodotti)\//, 0.90, 'monthly'],
  [/^\/en\/industries\/[^/]+\/$/,   0.85, 'monthly'],
  [/cbam|guide-cbam|leitfaden/,     0.85, 'monthly'],
  [/^\/en\/(contact|quality)\/$/,   0.80, 'monthly'],
  [/^\/(de|fr|it)\/(kontakt|contact|contatti|qualitaet|qualita|qualite)\/$/, 0.80, 'monthly'],
  [/^\/en\/blog\/[^/]+\/$/,         0.70, 'monthly'],
  [/blog/,                          0.65, 'weekly'],
  [/(privacy|cookie)/,              0.20, 'yearly'],
];

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p));
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
}

const files = await walk(DIST);
const today = new Date().toISOString().slice(0, 10);

const urls = files
  .map((f) => {
    let u = '/' + relative(DIST, f).split(sep).slice(0, -1).join('/');
    if (u !== '/') u += '/';
    return u;
  })
  // drop the bare root redirect stub; /en/ is the canonical entry point
  .filter((u) => u !== '/')
  .sort();

const body = urls.map((u) => {
  const rule = RULES.find(([re]) => re.test(u));
  const priority = (rule ? rule[1] : 0.5).toFixed(2);
  const changefreq = rule ? rule[2] : 'monthly';
  return `  <url>
    <loc>${SITE}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

await writeFile('public/sitemap.xml', xml, 'utf8');
await writeFile(join(DIST, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml: ${urls.length} URLs`);
