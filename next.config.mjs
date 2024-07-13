/** @type {import('next').NextConfig} */
const nextConfig = {
    source: "api/products",
    destination: "https://api.timbu.cloud/products",
    images: {
      domains: ["api.timbu.cloud", "encrypted-tbn0.gstatic.com"],
    },
  };
  
  export default nextConfig;
  