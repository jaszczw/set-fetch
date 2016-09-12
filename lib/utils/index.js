var _ = require('lodash');

module.exports = {
  getConfig: getConfig,
  geSetIdWithVersion: geSetIdWithVersion,
  getSetIdWithoutVersion: getSetIdWithoutVersion,
};

function getConfig(envVariableName, dirname) {
  var envConfig = process.env[envVariableName];

  if (envConfig) {
    return JSON.parse(envConfig);
  }

  return require(dirname + '/private-config.json');
}

function geSetIdWithVersion(setId) {
  return _.includes(setId, '-') ? setId : setId + '-1'; // Lego set series numbering
}

function getSetIdWithoutVersion(setId) {
  return setId.split('-')[0];
}
