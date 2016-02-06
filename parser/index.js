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
  var QUERIES = ParserUtils.parseQueriesFromCommandLine(process.argv);
  var FILES = FileUtils.generateEnumeratedFileNames('../data/json/food-facts', 'json', 8);

  console.log('Loading data from', FILES.length, 'file(s)...');
  var data = FileUtils.loadDataFromFiles(FILES);

  console.log('Looking up records...');
  var results = QueryUtils.runQueries(QUERIES, data);

  console.log('Exporting results...');
  FileUtils.exportRecords(results, OUTPUT_FILE);

  var END_TIMER = now();
  var TIME = END_TIMER - START_TIMER;

  console.log('Total # of rows:\t' + dataMerged.length);
  console.log('Total # of results:\t' + cleanDataMerged.length);
  console.log('Required fields:\t' + REQUIRED_FIELDS.join('\t'));
  console.log('Execution time:\t\t' + ParserUtils.millisecondsToTime(TIME));
})();
