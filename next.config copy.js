/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3333",
  },
  swcMinify: true,
};
const withImage = require("next-images");
module.exports = withImage({
  esModule: true,
});
module.exports = nextConfig;
