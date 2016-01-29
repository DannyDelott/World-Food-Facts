/**
 * Holds information about a query.
 * @typedef {Query} Query
 * @property {Array} fields - the required fields in each result
 * @property {String} output - the location to save the results
 */

/**
 * Return only records that contain a value for all the specified fields.
 * @param {Array<Object>} records
 * @param {Array<String>} fields
 * @return {Array<Object>} results
 */
function parseRecordsByRequiredFields (records, fields) {
  return records.filter(function (record) {
    return fields.reduce(function (meetsRequirements, requiredField) {
      return meetsRequirements ? !!record[requiredField] : false;
    }, true);
  });
}

/**
 * Get a list of command line arguments that represent the required fields.
 * @param {Array<String>} args - all arguments passed in via command line
 * @return {Array<Query>} fields - list of all queries and output files
 */
function parseQueriesFromCommandLine (args) {
  var isArgument = false;
  return args.filter(function (argument) {
    if (!isArgument && argument === '-f') {
      isArgument = true;
      return false;
    } else if (isArgument && argument !== '-o') {
      return true;
    } else if (isArgument && argument === '-o') {
      isArgument = false;
      return false;
    } else {
      return false;
    }
  });
}

/**
 * Convert milliseconds to a human-friendly timestamp.
 * @param {Number} milli - milliseconds to convert
 * @return {String} timestamp - human-friendly timestamp
 */
var millisecondsToTime = function (milli) {
  var milliseconds = Math.floor(milli % 1000);
  var seconds = Math.floor((milli / 1000) % 60);
  var minutes = Math.floor((milli / (60 * 1000)) % 60);
  return 'Minutes: ' + minutes + '\tSeconds: ' + seconds + '\tMilliseconds: ' + milliseconds;
};

module.exports = {
  parseRecordsByRequiredFields,
  parseQueriesFromCommandLine,
  millisecondsToTime
};
