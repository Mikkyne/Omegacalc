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
}

esbuild.build(config).catch(() => process.exit(0))
