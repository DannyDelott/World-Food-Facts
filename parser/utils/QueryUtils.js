var QueryResult = require('../QueryResult');

/**
 * Returns a set of data grouping by the dimension and summing over all the
 * values in the measure.
 *
 * @param {String} dimension - the name of the dimension to group by
 * @param {String} measure - the name of the measure to sum over
 * @param {Array<Object>} data - the records to process
 * @return {Object} result - the set of data containg the results
 */
var sumOverMeasure = function (dimension, measure, data) {
  var result = {};
  data.forEach(function(set) {
    if (!result[set.dimension]) {
      result[set.dimension] = set.measure;
    } else {
      result[set.dimension] += set.measure;
    }
  });
  return result;
};

/**
 * Return the result of running a single query.
 * @param {Query} query - the query to perform
 * @param {Array<Object>} data - the records to process
 * @return {QueryResult} result - the result of the query
 */
var runQuery = function (query, data) {
  var result = data.filter(function (row) {
    return _rowContainsRequiredFields(row, query.fields);
  });
  return new QueryResult(result, query);
};

/**
 * Return the results of running multiple queries.
 * @param {Array<Queries>} queries - the queries to perform
 * @param {Array<Object>} data - the records to process
 * @return {Array<QueryResult>} results - the matching rows per query
 */
var runQueries = function (queries, data) {
  var results = queries.map(function (query) {
    return runQuery(query, data);
  });
  return results;
};

/**
 * Return true or false if the row contains the required fields.
 * @param {Object} row - the row to check
 * @param {Array<String>} requiredFields - the fields that must be present in the row
 * @return {Boolean} containsRequiredFields
 */
var _rowContainsRequiredFields = function (row, requiredFields) {
  return requiredFields.reduce(function (containsFields, field) {
    return containsFields ? row.hasOwnProperty(field) && row[field] : false;
  }, true);
};

module.exports = { sumOverMeasure, runQuery, runQueries };
