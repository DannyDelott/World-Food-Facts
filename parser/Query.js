/**
 * Holds information about a query.
 * @property {Array} fields - the required fields in each result
 * @property {String} output - the location to save the results
 */
var Query = function(fields, output){
  this.fields = fields ? fields : this.fields;
  this.output = output ? output : this.output;
};
Query.prototype.fields = [];
Query.prototype.output = '';

module.exports = Query;
