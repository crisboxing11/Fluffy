const fs = require('fs');
const path = require('path');
const { shortClass } = require('../lib/shortClass');
const { keptShortClasses } = require('../lib/keptUtilityClasses');
const generateUtilityClass = require('../lib/generateUtilityClass');
const loader = require('../scripts/mui-class-loader');

test('short class ids are stable and safe in a selector', () => {
  expect(shortClass('MuiButton-root')).toMatch(/^m[0-9a-z]+$/);
  expect(shortClass('MuiButton-root')).toBe(shortClass('MuiButton-root'));
  expect(shortClass('MuiButton-root')).not.toBe(shortClass('MuiButton-text'));
});

test('utility classes and literal selectors share one id', () => {
  const fromGenerator = generateUtilityClass('MuiButton', 'root');
  const fromSource = loader.call(null, 'sx={{ "& .MuiButton-root": { color: "red" } }}');
  expect(fromSource).toContain(`.${fromGenerator}`);
  expect(fromSource).not.toContain('.MuiButton-root');
  expect(loader.call(null, 'MuiButton: { styleOverrides: {} }')).toContain('MuiButton:');
});

test('state classes use the Mui prefix, not the component name', () => {
  expect(generateUtilityClass('MuiButton', 'disabled')).toBe(shortClass('Mui-disabled'));
  expect(generateUtilityClass('MuiInput', 'focused')).toBe(shortClass('Mui-focused'));
});

test('kept utility classes include site selectors and rendered slots', () => {
  const keep = keptShortClasses();
  expect(keep.has(shortClass('MuiGrid-item'))).toBe(true);
  expect(keep.has(shortClass('MuiTypography-root'))).toBe(true);
  expect(keep.has(shortClass('Mui-focused'))).toBe(true);
  expect(keep.has(shortClass('MuiButton-text'))).toBe(false);
});

test('every Mui selector in the site maps to a unique id', () => {
  const roots = ['pages', 'components', 'styles'].map((dir) => path.join(__dirname, '..', dir));
  const names = new Set();
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        const source = fs.readFileSync(full, 'utf8');
        for (const match of source.matchAll(/\.Mui[A-Za-z0-9-]+/g)) names.add(match[0].slice(1));
      }
    }
  }
  roots.forEach(walk);
  const ids = [...names].map((name) => shortClass(name));
  expect(new Set(ids).size).toBe(ids.length);
  expect(names.size).toBeGreaterThan(10);
});
