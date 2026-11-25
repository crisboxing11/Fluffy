/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Utility classes that must stay on the element.
 *
 * MUI adds a utility class for every slot. The stylesheet only selects a few
 * of them, plus the selectors in our own source. Both renders share this set,
 * so dropping the rest does not change which rules match.
 */
const fs = require('fs');
const path = require('path');
const { shortClass } = require('./shortClass');

const LOGICAL = [
  'Mui-active',
  'Mui-checked',
  'Mui-completed',
  'Mui-disabled',
  'Mui-error',
  'Mui-expanded',
  'Mui-focused',
  'Mui-focusVisible',
  'Mui-open',
  'Mui-readOnly',
  'Mui-required',
  'Mui-selected',
  'MuiTypography-root',
  'MuiButton-loading',
  'MuiButton-startIcon',
  'MuiIconButton-loading',
  'MuiGrid-item',
  'MuiChip-avatar',
  'MuiChip-avatarColorPrimary',
  'MuiChip-avatarColorSecondary',
  'MuiChip-avatarSmall',
  'MuiChip-icon',
  'MuiChip-deleteIcon',
  'MuiChip-deleteIconSmall',
  'MuiChip-clickable',
  'MuiChip-iconSmall',
  'MuiChip-label',
  'MuiOutlinedInput-root',
  'MuiOutlinedInput-notchedOutline',
  'MuiInputBase-formControl',
  'MuiDrawer-paper',
  'MuiAccordionSummary-content',
  'MuiRating-iconActive',
  'MuiRating-visuallyHidden',
  'MuiRating-iconFilled',
  'MuiListItemText-primary',
  'MuiListItemText-secondary',
];

function sourceSelectors(root) {
  const names = new Set();
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(tsx|ts|jsx|js|css)$/.test(entry.name)) {
        const source = fs.readFileSync(full, 'utf8');
        for (const match of source.matchAll(/\.Mui[A-Za-z0-9-]+/g)) names.add(match[0].slice(1));
      }
    }
  }
  for (const dir of ['pages', 'components', 'styles']) walk(path.join(root, dir));
  return names;
}

function keptShortClasses(root = path.join(__dirname, '..')) {
  const keep = new Set(LOGICAL.map((name) => shortClass(name)));
  for (const name of sourceSelectors(root)) keep.add(shortClass(name));
  return keep;
}

module.exports = { LOGICAL, keptShortClasses };
