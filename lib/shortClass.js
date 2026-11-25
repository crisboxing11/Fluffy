/**
 * Stable short stand-in for a MUI utility class.
 * The same input always returns the same ident, on the server and in the browser.
 */
function shortClass(name) {
  let hash = 2166136261;
  for (let index = 0; index < name.length; index += 1) {
    hash ^= name.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `m${(hash >>> 0).toString(36).padStart(4, '0').slice(-4)}`;
}

module.exports = { shortClass };
