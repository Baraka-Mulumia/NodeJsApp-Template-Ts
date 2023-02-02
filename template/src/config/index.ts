import { merge } from 'lodash';

// set ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// set the stage
const stage = process.env.STAGE || 'local';

let envConfig = {};

if (stage == 'production') {
  envConfig = require('./prod').default;
} else if (stage == 'staging') {
  envConfig = require('./staging').default;
} else {
  envConfig = require('./dev').default;
}

const defaultConfig = merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: 8080,
    secrets: {
      // your secrtet keys here
    },
  },
  envConfig
);

export default defaultConfig;
