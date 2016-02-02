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
 * Get a list of command line arguments that represent the queries.
 * @param {Array<String>} args - all arguments passed in via command line
 * @return {Array<Query>} queries - list of all queries
 */
function parseQueriesFromCommandLine (args) {
  return splitAndFilter(args.join(), '-f')
    .reduce(function(queries, query){
      var outputFlag = query.split('-o');
      var fields = splitAndFilter(outputFlag[0], ',')
        .reduce(function(fields, field){
          if (field.length > 0) {
            fields.push(field);
          }
          return fields;
        }, []);
      var output = splitAndFilter(outputFlag[1], ',')
        .reduce(function(file, filename){
          console.log(filename);
          return filename.length > 0 ? filename: file;
        }, '');
      queries.push({ fields, output });
      return queries;
    }, []);

  function splitAndFilter(outputString, delimiter){
    return outputString
      .split(delimiter)
      .filter(function(str){
        return str.length > 0;
      });
  }
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
