/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.gyazo.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
      {
        protocol: "https",
        hostname: "cdn.1080designs.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/vehicles",
        destination: "https://fiveboard.io/ulc",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
