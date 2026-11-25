/**
 * Drop-in replacement for @mui/utils/generateUtilityClass.
 * MUI calls this while a module is loading, so the short name is what both
 * the server HTML and the client hydration render.
 *
 * The hash is inlined. Webpack resolves this file as if it still lived in
 * @mui/utils, so a relative require of lib/shortClass would miss.
 * Keep the algorithm identical to lib/shortClass.js.
 */
function shortClass(name) {
  let hash = 2166136261;
  for (let index = 0; index < name.length; index += 1) {
    hash ^= name.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `m${(hash >>> 0).toString(36).padStart(4, '0').slice(-4)}`;
}

const globalStateClasses = {
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

function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const state = globalStateClasses[slot];
  if (state) return shortClass(`${globalStatePrefix}-${state}`);
  return shortClass(`${componentName}-${slot}`);
}

function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}

module.exports = generateUtilityClass;
module.exports.default = generateUtilityClass;
module.exports.globalStateClasses = globalStateClasses;
module.exports.isGlobalState = isGlobalState;
