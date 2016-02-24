var file = '../data/foodfacts.db';
var outputFile = '../data/result.json';
var query = require('../data/query');

var fs = require('fs');
var Utils = require('./utils');
var db = Utils.loadDatabase(file);

console.log(query);

Utils
  .runQuery(db, query)
  .then(_exportResults)
  .catch(function(e){
    console.log(e);
  });

function _exportResults(results) {
  console.log(results);
  fs.writeFileSync(outputFile, JSON.stringify(results));
}
