const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

// Determine build target from environment variable or default to frontend
const buildTarget = process.env.BUILD_TARGET || 'frontend';
const entryFile = buildTarget === 'frontend' 
  ? './ui/src/main-frontend.tsx' 
  : './ui/src/main-backend.tsx';

module.exports = {
  ...defaultConfig,
  entry: {
    scripts: path.resolve(__dirname, entryFile),
  },
  output: {
    ...defaultConfig.output,
    path: path.resolve(__dirname, `ui/assets/${buildTarget}`),
    filename: 'scripts.js',
  },
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      ...defaultConfig.resolve.alias,
      '@': path.resolve(__dirname, './ui/src'),
      '@config': path.resolve(__dirname, './'),
    },
  },
};

