'use strict';

const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
  default: { port: 3000, env: 'development' }
});

const config = {
  port: parseInt(process.env.PORT || args.port, 10),
  env: process.env.NODE_ENV || args.env,
  appName: 'aikido-vrp-lab',
  // Fake values for research purposes only - never real credentials
  features: {
    demoMode: true
  }
};

module.exports = config;
