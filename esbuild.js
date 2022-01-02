import process from 'process'
import esbuild from 'esbuild'

const config = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'build/assets',
  platform: 'browser',
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": "production"
  },
  loader: {
    '.png': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
    '.svg': 'dataurl',
  },
}

await esbuild.build(config).catch(() => process.exit(0))
