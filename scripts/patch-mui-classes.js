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
export default function createSvgIcon(_path, displayName) {
  function Component(props, ref) {
    const { color, fontSize, inheritViewBox, htmlColor, titleAccess, viewBox, className, children, sx, ...other } = props;
    return _jsx('span', {
      ...other,
      ref,
      'aria-hidden': other['aria-hidden'] ?? true,
      className: ['fi', 'fi-' + displayName, className].filter(Boolean).join(' '),
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
function createSvgIcon(_path, displayName) {
  function Component(props, ref) {
    var className = props.className;
    var other = { ref: ref };
    for (var key in props) {
      if (key !== 'color' && key !== 'fontSize' && key !== 'inheritViewBox' && key !== 'htmlColor' && key !== 'titleAccess' && key !== 'viewBox' && key !== 'className' && key !== 'children' && key !== 'sx') other[key] = props[key];
    }
    if (other['aria-hidden'] == null) other['aria-hidden'] = true;
    other.className = ['fi', 'fi-' + displayName, className].filter(Boolean).join(' ');
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
    '.fi{display:inline-block;width:1em;height:1em;flex-shrink:0;background-color:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;vertical-align:middle;}',
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
