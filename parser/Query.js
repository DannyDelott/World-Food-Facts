var Utils = require('./Utils');

/**
 * Get a list of unique countries from the database.
 * This method also parses rows that contain multiple, comma-separated countries.
 * @param {Object} db - The sqlite3 database object
 * @return {Promise<Array<String>>} - uniqueCountries - a list of unique countries
 */
var getUniqueCountries = function (db) {
  return Utils.runQuery(db, 'SELECT DISTINCT(countries_en) FROM FoodFacts')
    .then(_parseCountries);
};

module.exports = { getUniqueCountries };

function _parseCountries(result) {
  return result.rows.reduce(function (countries, row) {
    var uniques = row.countries_en
      .split(',')
      .filter(function (country) {
        return countries.indexOf(country) === -1;
      });
    return countries.concat(uniques);
  }, []);
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
