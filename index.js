const fs = require('fs');
const core = require('@actions/core');

async function run() {
  try {
    const token = core.getInput('token');
    core.setSecret(token);
    fs.writeFile('.npmrc', `//registry.npmjs.org/:_authToken=${token}`, error => {
      if (error) {
        core.setFailed(error.message);
      }
    })

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
