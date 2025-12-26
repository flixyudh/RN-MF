#!/usr/bin/env node
const concurrently = require('concurrently');

concurrently([
  { command: 'yarn workspace azko start', name: 'azko', prefixColor: 'blue' },
  { command: 'yarn workspace notes start', name: 'notes', prefixColor: 'green' },
], {
  killOthersOn: ['failure', 'success'], // kill all if one fails or succeeds
  restartTries: 0
})
