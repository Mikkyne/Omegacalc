import process from 'process'
import esbuild from 'esbuild'
import htmlPlugin from '@chialab/esbuild-plugin-html';

const config = {
  entryPoints: ['src/index.html'],
  bundle: true,
  outdir: 'build',
  platform: 'browser',
  sourcemap: true,
  plugins: [
    htmlPlugin({}),
  ],
  loader: {
    '.png': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
    '.svg': 'dataurl',
  },
}

esbuild.build(config).catch(() => process.exit(0))
