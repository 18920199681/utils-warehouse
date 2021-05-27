const path = require("path")

module.exports = {
  open: true,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: 'localhost',
  port: 9090,
  base: './',
  outDir: 'dist',
  // https: false,
  // ssr: false,
  // proxy: {
  //   "/api": {
  //     target: process.env.DOMAIN,
  //     changeOrigin: true,
  //     secure: false,
  //     //   ws: true,
  //     //   rewrite: path => path.replace(/^\/api/, '')
  //   },
  // }
}
