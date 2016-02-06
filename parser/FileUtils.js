var fs = require('fs');

/**
 * Save a list of records to a file synchronously.
 * @param {Array<Object>} records - list of records
 * @param {String} outputFile - file to save to
 */
var exportRecords = function (records, outputFile) {
  var stringified = JSON.stringify(records) + '\n';
  var options = { encoding: 'utf8' };
  fs.writeFileSync(outputFile, stringified, options);
};


/**
 * Syncronously import data from a list of json files.
 * @param {Array<String>} filenames - list of filepaths
 * @return {Array<Object>} data - list of records
 */
var loadDataFromFiles = function (filenames) {
  var data = filenames.map(function (filename) {
    return require(filename);
  });
  return [].concat.apply([], data);
};

/**
 * Get a list of json files in the directory.
 * @param {String} directory - directory to scan
 * @return {Array<String>} filenames - json files in the directory
 */
var getJsonFiles = function (directory) {
  var files = fs.readdirSync(directory);
  return files.map(function(file){
    return directory.concat(file);
  });
};

module.exports = {
  loadDataFromFiles,
  getJsonFiles,
  exportRecords
};

