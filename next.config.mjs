/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove problematic settings that can cause performance issues
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // images: {
  //   unoptimized: true,
  // },
  
  // Add performance optimizations
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Optimize bundle splitting
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
