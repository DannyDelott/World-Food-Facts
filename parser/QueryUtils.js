
/**
 * Returns a set of data grouping by the dimension and summing over all the
 * values in the measure.
 *
 * @param {String} dimension - the name of the dimension to group by
 * @param {String} measure - the name of the measure to sum over
 * @param {Array} data -
 * @return {Object} result - the set of data containg the results
 */
function sumOverMeasure(dimension, measure, data) {
  var result = {};
  data.forEach(function(set) {
    if (!result[set.dimension]) {
      result[set.dimension] = set.measure;
    } else {
      result[set.dimension] += set.measure;
    }
  });
  return result;
}

module.exports = { sumOverMeasure };
