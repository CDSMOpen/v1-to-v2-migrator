const exec = require('./exec');
const config = require('./config');
const logStep = require('./logStep');

const sourceDb = config.source.database;

module.exports = () => {
  logStep('Restoring local data', true);
  return exec(`mongorestore -h ${config.local.hosts} --db ${config.local.database} --gzip --noIndexRestore ${config.local.sourceDumpLocation}/${sourceDb.name}`);
};
