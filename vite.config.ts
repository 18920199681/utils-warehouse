const fs = require("fs")
const path = require("path")

// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv")

const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

module.exports = {
  open: true,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: process.env.VITE_HOST,
  port: process.env.VITE_PORT,
  base: process.env.VITE_BASE_URL,
  outDir: process.env.VITE_OUTPUT_DIR,
  // https: false,
  // ssr: false,
  proxy: {
    // "/api": {
    //   target: process.env.DOMAIN,
    //   changeOrigin: true,
    //   secure: false,
    //   //   ws: true,
    //   //   rewrite: path => path.replace(/^\/api/, '')
    // },
  }
}
