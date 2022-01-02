import esbuildServe from 'esbuild-serve'

const config = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'build/assets',
  platform: 'browser',
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": `"dev"`
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

await esbuildServe(
  config,
  {
    port: 8000,
    root: 'build'
  }
)
