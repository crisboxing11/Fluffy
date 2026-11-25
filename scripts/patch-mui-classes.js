/**
 * MUI computes utility class names while its modules load.
 * Patch the installed generator so the server render and the browser bundle
 * both emit the same short id. npm ci restores the original file; the next
 * build patches it again. The marker keeps a second run from stacking.
 */
const fs = require('fs');
const path = require('path');

const MARKER = 'FLUFFY_SHORT_CLASS';

const esm = `function shortClass(name) {
  let hash = 2166136261;
  for (let index = 0; index < name.length; index += 1) {
    hash ^= name.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return \`m\${(hash >>> 0).toString(36).padStart(4, '0').slice(-4)}\`;
}
export const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
/** ${MARKER} */
export default function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const state = globalStateClasses[slot];
  return shortClass(state ? \`\${globalStatePrefix}-\${state}\` : \`\${componentName}-\${slot}\`);
}
export function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}
`;

function patch(file, source) {
  if (!fs.existsSync(file)) return;
  fs.writeFileSync(file, source);
}

const cjs = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shortClass(name) {
  let hash = 2166136261;
  for (let index = 0; index < name.length; index += 1) {
    hash ^= name.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return "m" + (hash >>> 0).toString(36).padStart(4, "0").slice(-4);
}
const globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
/** ${MARKER} */
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const state = globalStateClasses[slot];
  return shortClass(state ? globalStatePrefix + "-" + state : componentName + "-" + slot);
}
function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}
exports.default = generateUtilityClass;
exports.globalStateClasses = globalStateClasses;
exports.isGlobalState = isGlobalState;
`;

const ICON_ESM = `'use client';
import * as React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
/** ${MARKER} icons render as masked spans so the server and client match. */
const BREAKS = [['xs', 0], ['sm', 600], ['md', 900], ['lg', 1200], ['xl', 1536]];
function cssSize(value) {
  if (value == null || value === 'medium') return '1.5rem';
  if (value === 'small') return '1.25rem';
  if (value === 'large') return '2.25rem';
  if (value === 'inherit') return 'inherit';
  if (typeof value === 'number') return value + 'px';
  if (typeof value === 'string') return value;
  return null;
}
const SPACE = { m: 'ma', mt: 'mt', mr: 'mr', mb: 'mb', ml: 'ml' };
function extraClasses(fontSize, sx) {
  const names = [];
  const raw = sx && sx.fontSize != null ? sx.fontSize : fontSize;
  if (raw && typeof raw === 'object') {
    const id = BREAKS.filter(([key]) => raw[key] != null).map(([key]) => key + String(raw[key]).replace('.', 'd')).join('-');
    if (id) names.push('fz-' + id);
  } else if (typeof raw === 'number') names.push('fz' + raw);
  else if (raw === 'small') names.push('fzsm');
  else if (raw === 'large') names.push('fzlg');
  else if (raw === 'inherit') names.push('fzin');
  if (sx) {
    for (const key of Object.keys(SPACE)) {
      if (typeof sx[key] === 'number') names.push(SPACE[key] + (sx[key] * 8));
    }
    if (sx.flexShrink === 0) names.push('sh0');
  }
  return names.join(' ');
}
export default function createSvgIcon(_path, displayName) {
  function Component(props, ref) {
    const { color, fontSize, inheritViewBox, htmlColor, titleAccess, viewBox, className, children, sx, ...other } = props;
    const paint = htmlColor || (sx && typeof sx.color === 'string' ? sx.color : '');
    return _jsx('span', {
      ...other,
      ref,
      'aria-hidden': other['aria-hidden'] ?? true,
      className: ['fi', 'fi-' + displayName, className, extraClasses(fontSize, sx)].filter(Boolean).join(' '),
      style: paint && !/^(primary|secondary|action|disabled|error|info|success|warning)$/.test(paint) ? { color: paint } : other.style,
    });
  }
  Component.muiName = 'SvgIcon';
  return React.memo(React.forwardRef(Component));
}
`;

const ICON_CJS = `"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
/** ${MARKER} */
var BREAKS = [['xs', 0], ['sm', 600], ['md', 900], ['lg', 1200], ['xl', 1536]];
function cssSize(value) {
  if (value == null || value === 'medium') return '1.5rem';
  if (value === 'small') return '1.25rem';
  if (value === 'large') return '2.25rem';
  if (value === 'inherit') return 'inherit';
  if (typeof value === 'number') return value + 'px';
  if (typeof value === 'string') return value;
  return null;
}
var SPACE = { m: 'ma', mt: 'mt', mr: 'mr', mb: 'mb', ml: 'ml' };
function extraClasses(fontSize, sx) {
  var names = [];
  var raw = sx && sx.fontSize != null ? sx.fontSize : fontSize;
  if (raw && typeof raw === 'object') {
    var id = [];
    for (var index = 0; index < BREAKS.length; index += 1) {
      if (raw[BREAKS[index][0]] != null) id.push(BREAKS[index][0] + String(raw[BREAKS[index][0]]).replace('.', 'd'));
    }
    if (id.length) names.push('fz-' + id.join('-'));
  } else if (typeof raw === 'number') names.push('fz' + raw);
  else if (raw === 'small') names.push('fzsm');
  else if (raw === 'large') names.push('fzlg');
  else if (raw === 'inherit') names.push('fzin');
  if (sx) {
    for (var key in SPACE) {
      if (typeof sx[key] === 'number') names.push(SPACE[key] + (sx[key] * 8));
    }
    if (sx.flexShrink === 0) names.push('sh0');
  }
  return names.join(' ');
}
function createSvgIcon(_path, displayName) {
  function Component(props, ref) {
    var className = props.className;
    var paint = props.htmlColor || (props.sx && typeof props.sx.color === 'string' ? props.sx.color : '');
    var other = { ref: ref };
    for (var key in props) {
      if (key !== 'color' && key !== 'fontSize' && key !== 'inheritViewBox' && key !== 'htmlColor' && key !== 'titleAccess' && key !== 'viewBox' && key !== 'className' && key !== 'children' && key !== 'sx') other[key] = props[key];
    }
    if (other['aria-hidden'] == null) other['aria-hidden'] = true;
    other.className = ['fi', 'fi-' + displayName, className, extraClasses(props.fontSize, props.sx)].filter(Boolean).join(' ');
    if (paint && !/^(primary|secondary|action|disabled|error|info|success|warning)$/.test(paint)) other.style = { color: paint };
    return jsxRuntime.jsx('span', other);
  }
  Component.muiName = 'SvgIcon';
  return React.memo(React.forwardRef(Component));
}
exports.default = createSvgIcon;
`;

function writeIcons() {
  const dir = path.join(__dirname, '..', 'node_modules', '@mui', 'icons-material');
  const outDir = path.join(__dirname, '..', 'public', 'icons');
  fs.mkdirSync(outDir, { recursive: true });
  const rules = [
    '.fi{display:inline-block;font-size:1.5rem;width:1em;height:1em;flex-shrink:0;background-color:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;vertical-align:baseline;}',
  ];
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.js') || name === 'index.js') continue;
    const source = fs.readFileSync(path.join(dir, name), 'utf8');
    const display = (source.match(/,\s*'([^']+)'\s*\)\s*;?\s*$/) || [])[1];
    const paths = [...source.matchAll(/\bd:\s*"([^"]+)"/g)].map((match) => match[1]);
    if (!display || paths.length === 0) continue;
    const body = paths.map((d) => `<path fill="#000" d="${d}"/>`).join('');
    fs.writeFileSync(
      path.join(outDir, `${display}.svg`),
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${body}</svg>\n`
    );
    rules.push(
      `.fi-${display}{-webkit-mask-image:url(/icons/${display}.svg);mask-image:url(/icons/${display}.svg);}`
    );
  }
  for (let size = 8; size <= 80; size += 1) rules.push(`.fz${size}{font-size:${size}px}`);
  rules.push('.fzsm{font-size:1.25rem}', '.fzlg{font-size:2.25rem}', '.fzin{font-size:inherit}', '.sh0{flex-shrink:0}');
  for (const [prefix, prop] of [['mt', 'margin-top'], ['mr', 'margin-right'], ['mb', 'margin-bottom'], ['ml', 'margin-left'], ['ma', 'margin']]) {
    for (const px of [0, 4, 8, 12, 16, 20, 24, 32, 40]) rules.push(`.${prefix}${px}{${prop}:${px}px}`);
  }
  const responsive = [
    ['xs28-md36', [[0, 28], [900, 36]]],
    ['xs20-sm24', [[0, 20], [600, 24]]],
    ['xs20-md22', [[0, 20], [900, 22]]],
    ['xs14-sm16-md16', [[0, 14], [600, 16], [900, 16]]],
    ['xs24-sm28-md36', [[0, 24], [600, 28], [900, 36]]],
    ['xs12-sm14-md20', [[0, 12], [600, 14], [900, 20]]],
    ['xs16-sm18-md20', [[0, 16], [600, 18], [900, 20]]],
    ['xs48-sm64', [[0, 48], [600, 64]]],
  ];
  for (const [id, steps] of responsive) {
    rules.push(`.fz-${id}{font-size:${steps[0][1]}px}`);
    for (const [min, size] of steps.slice(1)) {
      rules.push(`@media (min-width:${min}px){.fz-${id}{font-size:${size}px}}`);
    }
  }
  fs.writeFileSync(path.join(__dirname, '..', 'styles', 'icons.css'), `${rules.join('\n')}\n`);
}

function patchPaper(file) {
  if (!fs.existsSync(file)) return;
  let source = fs.readFileSync(file, 'utf8');
  if (source.includes('FLUFFY_PAPER_SHADOW')) return;
  source = source.replace(
    `style: {
      boxShadow: 'var(--Paper-shadow)',
      backgroundImage: 'var(--Paper-overlay)'
    }`,
    `style: ({ theme, ownerState }) => ({
      boxShadow: theme.shadows[ownerState.elevation] || theme.shadows[1]
      /* FLUFFY_PAPER_SHADOW */
    })`
  );
  source = source.replace(
    `'--Paper-shadow': (theme.vars || theme).shadows[elevation],`,
    `/* FLUFFY_PAPER_SHADOW inline removed */`
  );
  fs.writeFileSync(file, source);
}

function patchComposeClasses() {
  const { keptShortClasses } = require('../lib/keptUtilityClasses');
  const keep = JSON.stringify([...keptShortClasses()]);
  const body = `const KEEP = new Set(${keep});
function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    const parts = [];
    for (let index = 0; index < slot.length; index += 1) {
      const value = slot[index];
      if (!value) continue;
      const utility = getUtilityClass(value);
      if (utility && KEEP.has(utility) && parts.indexOf(utility) === -1) parts.push(utility);
      if (classes && classes[value]) {
        const extras = String(classes[value]).split(' ');
        for (let extra = 0; extra < extras.length; extra += 1) {
          if (extras[extra] && parts.indexOf(extras[extra]) === -1) parts.push(extras[extra]);
        }
      }
    }
    output[slotName] = parts.join(' ');
  }
  return output;
}
`;
  const root = path.join(__dirname, '..', 'node_modules', '@mui', 'utils');
  const cjs = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** FLUFFY_KEPT_CLASSES */
${body}
exports.default = composeClasses;
`;
  const esm = `/** FLUFFY_KEPT_CLASSES */
${body}
export default composeClasses;
`;
  patch(path.join(root, 'composeClasses', 'composeClasses.js'), cjs);
  patch(path.join(root, 'esm', 'composeClasses', 'composeClasses.js'), esm);
  patch(path.join(root, 'modern', 'composeClasses', 'composeClasses.js'), esm);
}

function patchEmotionHash() {
  const dir = path.join(__dirname, '..', 'node_modules', '@emotion', 'serialize', 'dist');
  if (!fs.existsSync(dir)) return;
  const pattern = /var name = (hashString(?:__default\["default"\])?)\(styles\) \+ identifierName;/;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.js')) continue;
    const file = path.join(dir, name);
    let source = fs.readFileSync(file, 'utf8');
    if (source.includes('FLUFFY_SHORT_HASH') || !pattern.test(source)) continue;
    source = source.replace(
      pattern,
      `var fullHash = $1(styles);
  var name = fullHash.slice(0, 5) + identifierName;
  var seenCss = globalThis.__FLUFFY_CSS_NAMES || (globalThis.__FLUFFY_CSS_NAMES = new Map());
  var previousCss = seenCss.get(name);
  if (previousCss !== undefined && previousCss !== styles) {
    throw new Error('FLUFFY_SHORT_HASH collision ' + name);
  }
  seenCss.set(name, styles); /* FLUFFY_SHORT_HASH */`
    );
    fs.writeFileSync(file, source);
  }
}

function main() {
  const root = path.join(__dirname, '..', 'node_modules', '@mui', 'utils');
  const cjsFile = path.join(root, 'generateUtilityClass', 'generateUtilityClass.js');
  if (fs.existsSync(cjsFile)) fs.writeFileSync(cjsFile, cjs);
  for (const folder of ['esm', 'modern']) {
    patch(path.join(root, folder, 'generateUtilityClass', 'generateUtilityClass.js'), esm);
  }
  const material = path.join(__dirname, '..', 'node_modules', '@mui', 'material');
  patch(path.join(material, 'utils', 'createSvgIcon.js'), ICON_ESM);
  patch(path.join(material, 'node', 'utils', 'createSvgIcon.js'), ICON_CJS);
  patch(path.join(material, 'modern', 'utils', 'createSvgIcon.js'), ICON_ESM);
  for (const folder of ['', 'node/', 'modern/']) {
    patchPaper(path.join(material, folder, 'Paper', 'Paper.js'));
  }
  writeIcons();
  patchComposeClasses();
  patchEmotionHash();
}

main();
