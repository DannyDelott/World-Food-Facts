var Utils = require('./Utils');

/**
 * Get a list of unique countries from the database.
 * This method also parses rows that contain multiple, comma-separated countries.
 * @param {Object} db - The sqlite3 database object
 * @param {String} tableName - The table to use
 * @return {Promise<Array<String>>} - uniqueCountries - A list of unique countries
 */
var getUniqueCountries = function (db, tableName) {
  return Utils
    .runQuery(db, 'SELECT DISTINCT(countries_en) FROM ' + tableName)
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
 * Filter the countries against what is already present in the list.
 * @param {Array<String>} list - The list to check against
 * @param {Array<String>} countries - The country names to evaluate
 * @return {Array<String>} uniques - The country names not appearing in the list
 */
function _filterUniqueCountries(list, countries) {
  return countries.filter(function (country) {
    return _isUnique(list, country);
  });
}

/**
 * Check if a country is valid and is unique with respect to the list.
 * @param {Array<String>} list - The list to check against
 * @param {String} country - The country name to evaluate
 * @return {Boolean} isUnique - Whether or not the country name is valid and unique to the list
 */
function _isUnique(list, country) {
  return list.indexOf(country) === -1 &&
    country.indexOf(':') === -1 &&
    country.toLowerCase().indexOf('other') === -1 &&
    country.length > 2 &&
    country !== 'European Union' &&
    country !== 'Hawaii' &&
    country !== 'Hong Kong' &&
    country !== 'Irlande' &&
    country !== 'Nederland' &&
    country !== 'Polska' &&
    country !== 'Republique-de-chine';
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
