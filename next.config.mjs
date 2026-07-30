/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}

export default nextConfig;
