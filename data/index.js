var fs = require('fs');
var sqlite3 = require("sqlite3").verbose();

var file = './foodfacts.db';
var exists = fs.existsSync(file);
var db = new sqlite3.Database(file);
