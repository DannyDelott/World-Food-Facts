var Utils = require('./Utils');

/**
 * Get a list of unique countries from the database.
 * This method also parses rows that contain multiple, comma-separated countries.
 * @param {Object} db - The sqlite3 database object
 * @param {String} tableName - The table to use
 * @return {Promise<Array<String>>} - uniqueCountries - A list of unique countries
 */
var getUniqueCountries = function (db, tableName) {
  return Utils.runQuery(db, 'SELECT DISTINCT(countries_en) FROM ' + tableName)
    .then(_parseCountries);
};

module.exports = { getUniqueCountries };

/**
 * Converts query results into a list of unique country names.
 * @param {Result} result - Must contain a countries_en property in each row
 * @return {Array<String>} countries - The unique countries in the result
 */
function _parseCountries(result) {
  return result.rows.reduce(function (countries, row) {
    var uniques = _filterUniqueCountries(countries, row.countries_en.split(','));
    return countries.concat(uniques);
  }, []);
}

/**
 * Filter the list of countries against what is already present in the master list.
 * @param {Array<String>} list - The master list to check against
 * @param {Array<String>} countries - The list of the country names to evaluate
 * @return {Array<String>} uniques - The unique country names not appearing in the list
 */
function _filterUniqueCountries(list, countries) {
  return countries.filter(function (country) {
    return list.indexOf(country) === -1;
  });
}

/*
SELECT SUM(proteins_100g) as protein FROM FoodFacts GROUP BY countries_en
SELECT SUM(salt_100g) as salt FROM FoodFacts GROUP BY countries_en
SELECT SUM(sodium_100g) as sodium FROM FoodFacts GROUP BY countries_en
SELECT SUM(sugars_100g) as sugars FROM FoodFacts GROUP BY countries_en
SELECT SUM(fat_100g) as fat FROM FoodFacts GROUP BY countries_en
SELECT SUM(saturated_fat_100g) as saturated_fat FROM FoodFacts GROUP BY countries_en
SELECT SUM(trans_fat_100g) as trans_fat FROM FoodFacts GROUP BY countries_en
*/
