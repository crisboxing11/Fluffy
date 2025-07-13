const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fluffypetwash.com';
const { urls: exclude } = require('./data/semrush-exclude.json');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude,
};
