const fs = require('fs');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fluffypetwash.com';

// Grab blog slugs and dates from the TypeScript data file without requiring a
// build step. This allows the sitemap to include pages generated via
// `getStaticPaths`.
const file = fs.readFileSync('./data/posted.ts', 'utf8');
const postRegex = /slug: '([^']+)',[\s\S]*?date: '([^']+)'/g;
const posts = [];
let match;
while ((match = postRegex.exec(file))) {
  posts.push({ slug: match[1], date: match[2] });
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'dist',
  additionalPaths: async () =>
    posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date,
    })),
};
