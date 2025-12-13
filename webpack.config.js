const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

// Detect build target from npm script name
const buildTarget = process.env.npm_lifecycle_event?.includes(':backend:') 
  ? 'backend' 
  : 'frontend';

// Determine entry file based on target
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
    clean: false,
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
