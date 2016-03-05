var expect = require('expect');
var sqlite3 = require('sqlite3').verbose();
var Utils = require('../Utils');
var queries = require('./mock/queries');

describe('Utils', function() {
  var promise;
  var db;

  describe('#loadDatabase', function() {
    it('should throw an error if the input is not a string', function(){
      var loadDatabase = Utils.loadDatabase.bind(null, 23);
      expect(loadDatabase).toThrow('23 not found.');
    });
    it('should throw an error if the file does not exist', function(){
      var loadDatabase = Utils.loadDatabase.bind(null, 'foo.db');
      expect(loadDatabase).toThrow('foo.db not found.');
    });
    it('should load and return a sqlite3 database object', function() {
      db = Utils.loadDatabase(__dirname + '/mock/mock.db');
      expect(db).toBeA(sqlite3.Database);
    });
  });

  describe('#runQuery', function() {
    it('should return a promise', function() {
      promise = Utils.runQuery(db, queries[0]);
      expect(promise).toBeA(Promise);
    });
    it('should run the query and resolve with the match rows', function(done) {
      promise.then(function(rows) {
         expect(rows).toBeAn(Array);
         done();
       });
    });
    it('should reject the promise on error', function(done) {
     Utils
       .runQuery(db, 'SELET * from FoodFacts')
       .catch(function(e) {
         expect(e).toBeAn(Error);
         done();
       });
    });
  });
});
