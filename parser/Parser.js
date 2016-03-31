var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

/**
 * Load a database file into a sqlite3 database object
 * @param {String} file - the .db file to load
 * @return {Object} db - the sqlite3 database object
 */
var loadDatabase = function (file) {
  var exists = fs.existsSync(file);
  if (!exists) throw new Error(file + ' not found.');
  return new sqlite3.Database(file);
};

/**
 * TODO
 */
var exportResults = function (results) {
  console.log(results);
  fs.writeFileSync(outputFile, JSON.stringify(results));
};

module.exports = { Query: require('./Query'), loadDatabase, exportResults };
