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
 * Generate a list of enumerated filenames. Since raw data isn't changing, there
 * is no real need to have it read the filenames from disk, we can just generate them.
 * @param {String} filepath - filepath minus the extension
 * @param {String} extension - file type, ie: json
 * @param {Number} quantity - number of files to generate
 * @return {Array<String>} filenames - generated filenames
 */
var generateEnumeratedFileNames = function (filepath, extension, quantity) {
  return Array.apply(null, new Array(quantity)).map(function (item, i) { 
    return filepath + (i+1) + '.' + extension; 
  });
};

module.exports = { 
  loadDataFromFiles,
  generateEnumeratedFileNames,
  exportRecords
};

