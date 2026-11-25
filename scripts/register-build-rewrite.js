/**
 * Run the HTML rewrite when `next build` exits.
 *
 * Vercel's Next.js preset invokes `next build`, which does not run npm's
 * postbuild hook. The exit listener is synchronous file IO, so it still runs
 * when Next calls process.exit. Export workers load this config too; they
 * must not rewrite a half-finished pages directory.
 */
const isBuild = process.argv.includes('build');
const isExportWorker = process.env.NEXT_IS_EXPORT_WORKER === 'true';

if (isBuild && !isExportWorker && !global.__FLUFFY_REWRITE_REGISTERED__) {
  global.__FLUFFY_REWRITE_REGISTERED__ = true;
  process.on('exit', (code) => {
    if (code !== 0) return;
    // Next ends a successful build with process.exit(0). Listeners still run,
    // and this work is synchronous file IO.
    try {
      require('./externalize-render-css.js').main();
    } catch (error) {
      console.error(error);
      process.exitCode = 1;
    }
  });
}
