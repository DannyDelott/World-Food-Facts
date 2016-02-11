var Query = require('./Query');
/**
 * Holds the matching rows of a query and the file where the results should eventually be stored.
 * @param {Array<Object>} result - the matching rows for the query
 * @param {Query} query - the original query
 */
var QueryResult = function(result, query){
  this.result = result ? result : this.result;
  this.query = query ? query : this.query;
};
QueryResult.prototype.result = [];
QueryResult.prototype.query = new Query();

module.exports = QueryResult;
