var file = '../data/foodfacts.db';

var fs = require('fs');
var Utils = require('./utils');
var db = Utils.loadDatabase(file);

Utils
  .runQuery(db, 'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND trans_fat_100g > 0.0;')
  .then(function(rows) {
    console.log('# of matching rows:', rows.length);
  });
