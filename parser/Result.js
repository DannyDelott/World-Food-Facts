/**
 * The result of running a query.
 * @param {String} query - the original query
 * @param {Array<Object>} rows - the matching rows
 * @returns {Result} - result - return the result object to allow method chaining
 */
var Result = function(query, rows) {
  this.query = query;
  this.rows = rows;
  return this;
};
module.exports = Result;
