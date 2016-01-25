var fs = require('fs');

/**
 * Saves a list of records to a file.
 * @param {Array<Object>} records - list of records
 * @param {String} outputFile - file to save to
 */
var exportRecords = function (records, outputFile) {
  var file = fs.createWriteStream(outputFile);
  file.on('error', function (err) { 
    console.log(err);
  });
  file.write(JSON.stringify(records) + '\n'); 
  file.end();
};

/**
 * Converts milliseconds to a human-friendly timestamp.
 * @param {Number} milli - milliseconds to convert
 * @return {String} timestamp - human-friendly timestamp
 */
var millisecondsToTime = function (milli) {
  var milliseconds = Math.floor(milli % 1000);
  var seconds = Math.floor((milli / 1000) % 60);
  var minutes = Math.floor((milli / (60 * 1000)) % 60);
  return 'Minutes: ' + minutes + '\tSeconds: ' + seconds + '\tMilliseconds: ' + milliseconds;
}

/**
 * Loads a list of json files into a list of objects.
 * @param {Array<String>} filenames - list of filepaths
 * @return {Array<Object>} data - list of parsed record objects
 */
var loadFiles = function (filenames) {
  return filenames.map(function (filename, i) {
    return require(filename);
  });
}

/**
 * Generates a list of enumerated filenames. Since raw data isn't changing, there
 * is no real need to have it read the filenames from disk, we can just generate them.
 * @param {String} prefix - filepath and filename (minus the extension)
 * @param {String} extension - file type, ie: json
 * @param {Number} quantity - number of files to generate
 * @return {Array<String>} filenames - generated filenames
 */
var generateEnumeratedFileNames = function (prefix, extension, quantity) {
  return Array.apply(null, new Array(quantity)).map(function (item, i) { 
    return prefix + (i+1) + '.' + extension; 
  });
}

module.exports = { 
  millisecondsToTime,
  loadFiles,
  generateEnumeratedFileNames,
  exportRecords
};

