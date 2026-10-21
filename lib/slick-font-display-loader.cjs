/**
 * Adds font-display: swap to the slick-carousel icon font so the
 * arrow glyphs do not block text. The rest of the theme CSS is unchanged.
 */
module.exports = function slickFontDisplayLoader(source) {
  const css = source.toString();
  if (css.includes("font-display")) return css;
  return css.replace(
    "font-style: normal;\n\n    src: url('./fonts/slick.eot');",
    "font-style: normal;\n    font-display: swap;\n\n    src: url('./fonts/slick.eot');",
  );
};
