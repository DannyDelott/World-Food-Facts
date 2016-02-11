/**
 * DESCRIPTION:
 * Export records that contain a value for all required fields.
 *
 * USAGE:
 * node parse-records-by-required-fields.js -f <field1> <field2> -o <outputfilename>
 */
(function () {
  var now = require('performance-now');
  var FileUtils = require('./FileUtils');
  var ParserUtils = require('./ParserUtils');
  var QueryUtils = require('./QueryUtils');

  var START_TIMER = now();
  var queries = ParserUtils.parseQueriesFromCommandLine(process.argv);
  var files = FileUtils.getJsonFiles('../data/json/');

  console.log('Loading data from', files.length, 'file(s)...');
  var data = FileUtils.loadDataFromFiles(files);

  console.log('Looking up records...');
  var results = QueryUtils.runQueries(queries, data);

  console.log('Exporting results...');
  results.forEach(function(result) {
    // TODO: export the results
  });

  var END_TIMER = now();
  var TIME = END_TIMER - START_TIMER;
  console.log('Execution time:\t\t' + ParserUtils.millisecondsToTime(TIME));
  // TODO: print information
})();
