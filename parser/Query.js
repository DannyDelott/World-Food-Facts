var Result = require('./Result');

/**
 * Get a list of unique field values from the database.
 * @param {Object} db - The sqlite3 database object
 * @param {String} tableName - The table to query
 * @param {String} field - The field to select
 * @return {Promise<Array<String>>} uniques - A list of unique values
 */
var getUnique = function (db, tableName, field) {
  var query = 'SELECT DISTINCT(' + field + ') FROM ' + tableName;
  return runQuery(db, query);
};

/**
 * Get the list of table names in the database.
 * @param {Object} db - The sqlite3 database object
 * @return {Promise<Array<String>>} tables - The tables in the database
 */
var getTables = function (db) {
  var query = 'SELECT * FROM sqlite_master where type=\'table\'';
  return runQuery(db, query).then(_parseNames);
};

/**
 * Get the list of field names in the table.
 * @param {Object} db - The sqlite3 database object
 * @param {String} tableName - The table to use
 * @return {Promise<Array<String>>} fields - The fields in the table
 */
var getFields = function (db, tableName) {
  var query = 'PRAGMA table_info(' + tableName + ')';
  return runQuery(db, query).then(_parseNames);
};

/**
 * Run a SQL query and return all of the matching results in a promise.
 * @param {Object} db - The sqlite3 database object
 * @param {String} query - The query to run
 * @return {Promise<Result>} result - the query result
 */
var runQuery = function (db, query) {
  return new Promise(function (resolve, reject) {
    db.all(query, function (error, rows) {
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
var runQueries = function (db, queries) {
  var pending = queries.map(function (query) { return runQuery(db, query); });
  return Promise.all(pending);
};

module.exports = { getUnique, getTables, getFields, runQuery, runQueries };

function _parseNames(result) {
  return result.rows.reduce(function (names, row) { names.push(row.name); return names; }, []);
}
