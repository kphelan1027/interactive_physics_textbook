/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow KaTeX CSS and other packages to be transpiled properly
  transpilePackages: ['react-markdown'],
  webpack: (config) => {
    // Allow better-sqlite3 native module
    config.externals = config.externals || []
    config.externals.push({ 'better-sqlite3': 'commonjs better-sqlite3' })
    return config
  },
}

export default nextConfig
