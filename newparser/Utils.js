var fs = require('fs');
var sqlite3 = require("sqlite3").verbose();

/**
 * Load a database file into a sqlite3 database object
 * @param {String} file - the .db file to load
 * @return {Object} db - the sqlite3 database object
 */
var loadDatabase = function(file) {
  var exists = fs.existsSync(file);
  if (!exists) {
    throw new Error(file + ' not found.');
  }
  return new sqlite3.Database(file);
};


/**
 * Run a SQL query and returns all of the matching results in a promise.
 * @param {Object} db - The sqlite3 database object
 * @param {String} query - The query to run
 * @return {Promise} rows - an array of matching rows
 */
var runQuery = function(db, query){
 return new Promise(function(resolve, reject) {
   db.all(query, function(error, rows) {
     if (error) reject(error);
     else resolve(rows);
   });
 });
};

module.exports = { loadDatabase, runQuery }
