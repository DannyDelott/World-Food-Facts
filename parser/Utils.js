var fs = require('fs');
var sqlite3 = require("sqlite3").verbose();
var Result = require('./Result');

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
 * Run a SQL query and return all of the matching results in a promise.
 * @param {Object} db - The sqlite3 database object
 * @param {String} query - The query to run
 * @return {Promise<Result>} result - the query result
 */
var runQuery = function(db, query) {
 return new Promise(function(resolve, reject) {
   db.all(query, function(error, rows) {
     if (error) reject(error);
     else resolve(new Result(query, rows));
   });
 });
};

/**
 * Run a list of queries and return the matching rows in an array of promises.
 * @param {Object} db - The sqlite3 database object
 * @param {Array<String>} queries - The queries to run
 * @return {Promise<Array<Result>>} result - a list of query results
 */
var runQueries = function(db, queries) {
  var pending = queries.map(function(query) {
    return runQuery(db, query);
  });
  return Promise.all(pending);
}
module.exports = { loadDatabase, runQuery, runQueries };
