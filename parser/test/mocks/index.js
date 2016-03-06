var Result = require('../../Result');

var queries = [
  'SELECT created_t FROM FoodFacts LIMIT 1',
  'SELECT code FROM FoodFacts LIMIT 1',
];

var results = [
  new Result(queries[0], [{ created_t: '1447004364' }]),
  new Result(queries[1], [{ code: '000000000000012866' }]),
];

var uniqueCountries = ['France', 'United Kingdom', 'Spain'];

module.exports = { queries, results, uniqueCountries };
