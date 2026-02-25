'use strict';

const { nextConfig } = require('next/config');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  // Other Next.js configurations go here
};
