const exec = require('./exec');
const config = require('./config');
const logStep = require('./logStep');

module.exports = () => {
  logStep('Dumping local data', true);
  return exec(`mongodump --db ${config.local.database} --gzip --out ${config.local.targetDumpLocation}`);
};
