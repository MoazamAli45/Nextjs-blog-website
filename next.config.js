/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = (phase) => {
  // in case of npm run dev
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "SyedMoazamAli",
        mongodb_password: "shahg2000",
        mongodb_clustername: "cluster0",
        mongodb_database: "AlSyedBlogs-dev",
      },
    };
  }

  // in case of npm run build or npm run start or other  commands on server as well

  return {
    env: {
      mongodb_username: "SyedMoazamAli",
      mongodb_password: "shahg2000",
      mongodb_clustername: "cluster0",
      mongodb_database: "AlSyedBlogs",
    },
  };
};
