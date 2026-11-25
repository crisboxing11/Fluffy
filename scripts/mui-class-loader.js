/**
 * Rewrites literal MUI selectors in our source (`.MuiButton-root`, `.Mui-focused`)
 * to the same short id generateUtilityClass emits. Theme keys such as `MuiButton:`
 * are left alone because they are not class selectors.
 */
const { shortClass } = require('../lib/shortClass');

module.exports = function muiClassLoader(source) {
  return source.replace(/\.Mui[A-Za-z0-9-]+/g, (token) => `.${shortClass(token.slice(1))}`);
};
