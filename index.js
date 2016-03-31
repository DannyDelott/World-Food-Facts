/*
 * TODO: Describe interface
 */
var file = process.argv[2];
var outputFile = process.argv[3];

var Parser = require('./parser/Parser');
var db = Parser.loadDatabase(file);
var Query = Parser.Query;

var _countries;
var _visualizationData;

/* *********
 * Run app *
 * *********/

queryCountries(db, 'FoodFacts')
  .then(queryVisualizationData)
  .catch(function (e) { console.log(e); });

/**
 * Query the database for unique country names and store them in an outside array.
 * TODO: Find a way to remove this side-effect
 * @param {Object} db - The sqlite3 database object
 * @param {String} tableName - The table to query
 * @return {Promise<Array<String>>} countries - returned here and also stored in array
 */
function queryCountries(db, tableName) {
  var field = 'countries_en';
  return Query.getUnique(db, tableName, field).then(_parseCountries);
}

/**
 *
 */
function queryVisualizationData(countries) {
  var queries;

  // _visualizationData =
  // TODO find the average of each nutrient for each country, use runQueries instead
  // (this is the correct query)
  // Query.runQuery(db,
  // 'SELECT
  //    AVG(proteins_100g) as protein, COUNT(proteins_100g) as total_items, countries_en as country
  //  FROM FoodFacts
  //  WHERE countries_en LIKE \'%United Kingdom%\'')
  //   .then(function(results) {
  //     console.log(JSON.stringify(results));
  //   })
  //   .catch(function (e) { console.log(e); });
  return _visualizationData;
}

function _parseCountries(result) {
  _countries = result.rows.reduce(function (countries, row) {
    var uniques = _filterUniqueCountries(countries, row.countries_en.split(','));
    return countries.concat(uniques);
  }, []);
  return _countries;
}

function _filterUniqueCountries(list, countries) {
  return countries.filter(function (country) {
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
  });
}

