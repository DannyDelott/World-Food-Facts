/**
 * DESCRIPTION:
 * Export records that contain a value for all required fields.
 *
 * USAGE:
 * node parse-records-by-required-fields.js -f <field1> <field2> -o <outputfilename>
 */
var now   = require('performance-now'),
    utils = require('./utils');

var START_TIMER = now();
var REQUIRED_FIELDS = parseRequiredFieldsFromCommandLine(process.argv);
var OUTPUT_FILE = process.argv[process.argv.length-1];

var files = utils.generateEnumeratedFileNames('../raw/json/food-facts', 'json', 7);

console.log('Loading data from', files.length, 'file(s)...');
var data = utils.loadFiles(files);
var dataMerged = [].concat.apply([], data);

console.log('Looking up records...');
var cleanData = parseRecordsByRequiredFields(dataMerged, REQUIRED_FIELDS);
var cleanDataMerged = [].concat.apply([], cleanData);

console.log('Exporting results...');
utils.exportRecords(cleanDataMerged, OUTPUT_FILE);

var END_TIMER = now();
var TIME = END_TIMER - START_TIMER;

console.log('Total # of rows:\t' + dataMerged.length);
console.log('Total # of results:\t' + cleanDataMerged.length);
console.log('Required fields:\t' + REQUIRED_FIELDS.join('\t'));
console.log('Execution time:\t\t' + utils.millisecondsToTime(TIME));

/**
 * Returns only records that contain a value for all the specified fields.
 * @param {Array<Object>} records
 * @param {Array<String>} fields
 * @return {Array<Object>} results
 */
function parseRecordsByRequiredFields (records, fields) {
  return records.filter(function(record){
    return fields.reduce(function(meetsRequirements, requiredField){
      return meetsRequirements ? !!record[requiredField] : false;
    }, true);
  });
};

/**
 * Gets a list of command line arguments that represent the required fields.
 * @param {Array<String>} args - all arguments passed in via command line
 * @return {Array<String>} fields - names of fields that are required by the user
 */
function parseRequiredFieldsFromCommandLine(args){
  var isArgument = false;
  return args.filter(function(argument){
    if (!isArgument && argument === '-f') {
      isArgument = true;
      return false;
    } else if (isArgument && argument !== '-o') {
      return true;
    } else if (isArgument && argument === '-o') {
      isArgument = false;
      return false;
    } else {
      return false
    }
  });
};

