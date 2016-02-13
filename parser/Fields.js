/**
 * Holds the specs about a query's field requirements 
 *
 * @param {Array<String>} fields - the fields or column names
 * @param {String} mode="ALL" - matching rows must contain values for all fields 
 */
var Fields = function(fields, mode){
  this.fields = fields ? fields : this.fields;
  this.mode = mode ? mode : this.mode;
};
Fields.prototype.fields = [];
Fields.prototype.mode = 'ALL';

module.exports = Fields;
