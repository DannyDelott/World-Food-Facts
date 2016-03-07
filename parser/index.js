var file = process.argv[2];
var outputFile = process.argv[3];

var fs = require('fs');
var Query = require('./Query');
var db = require('./Utils').loadDatabase(file);

var countries;
var nutrients;

function runParser() {
  setCountriesAndNutrients(db, 'FoodFacts')
    .then(function () {
      console.log('done');
    })
    .catch(function (e) {
      console.log(e);
    });

  // TODO: average all nutrients for each country
}

function setCountriesAndNutrients(db, table) {
  var pending = [];
  pending.push(Query.getUniqueCountries(db, table).then(_setCountries));
  pending.push(Query.getNutrientNames(db, table).then(_setNutrients));
  return Promise.all(pending);
};

function exportResults(results) {
  console.log(results);
  fs.writeFileSync(outputFile, JSON.stringify(results));
}

function _setCountries(_) { countries = _; }
function _setNutrients(_) { nutrients = _; }

module.exports = runParser();
