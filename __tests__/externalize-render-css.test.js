const {
  aliasPrelude,
  buildAliasMap,
  importantize,
  rewriteClassAttribute,
  rewriteCss,
  shouldKeepInlineStyle,
} = require('../scripts/externalize-render-css');

test('aliases emotion and MUI selectors without dropping at-rules', () => {
  const css =
    '.css-a{color:red}.MuiButton-root:hover{color:blue}@media (min-width:0px){.css-a .MuiGrid-item{padding:8px}}@keyframes spin{0%{transform:none}}';
  const map = buildAliasMap(css);
  expect(map.get('css-a')).toBe('e0');
  expect(map.get('MuiButton-root')).toBe('e1');
  expect(map.get('MuiGrid-item')).toBe('e2');
  expect(rewriteCss(css, map)).toBe(
    '.css-a,.e0{color:red}.MuiButton-root:hover,.e1:hover{color:blue}@media (min-width:0px){.css-a .MuiGrid-item,.e0 .e2{padding:8px}}@keyframes spin{0%{transform:none}}'
  );
});

test('keeps the original selector for :not and comma lists', () => {
  const map = new Map([
    ['Mui-disabled', 'e0'],
    ['css-a', 'e1'],
  ]);
  expect(aliasPrelude('.css-a:not(.Mui-disabled),.Mui-disabled', map)).toBe(
    '.css-a:not(.Mui-disabled),.Mui-disabled,.e1:not(.e0),.e0'
  );
});

test('drops unused MUI classes and dedupes the ones CSS references', () => {
  const map = new Map([['MuiButton-root', 'e0']]);
  expect(
    rewriteClassAttribute('MuiButton-root MuiButton-root css-missing slick-slide MuiBox-root', map)
  ).toBe('e0 slick-slide');
});

test('leaves animated inline styles in place and marks static ones important', () => {
  expect(shouldKeepInlineStyle('opacity:0;transform:translateY(-30px)')).toBe(true);
  expect(shouldKeepInlineStyle('--Paper-shadow:0 1px 2px rgba(0,0,0,0.2)')).toBe(false);
  expect(importantize('color:transparent;filter:drop-shadow(0 0 1px #000)')).toBe(
    'color:transparent !important;filter:drop-shadow(0 0 1px #000) !important'
  );
});
