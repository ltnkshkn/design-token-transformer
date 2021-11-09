const { exec } = require("child_process");
const rimraf = require('rimraf');
const path = require('path');
require('dotenv').config();

if (!process.env.FIGMA_TOKEN) {
    throw new Error(`Put your Figma token in a .env in the root directory of this directory.
    The .env file should look like this:
    FIGMA_TOKEN='xxxx'`);
  }

const config = {
    env: process.env
};

rimraf('./src/assets/', function () { console.log('🧹 Icons cleaned'); });

exec(`figma-export use-config ./config/.figmaexportrc.js`, config, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`${stderr}`);
        console.log(`📦 Icons exported`);
        return;
    }
    console.log(`${stdout}`);
});
