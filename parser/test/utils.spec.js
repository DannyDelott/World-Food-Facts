var expect = require('expect');
var sqlite3 = require('sqlite3').verbose();
var Utils = require('../Utils');
var Mocks = require('./mocks');

describe('Utils', function () {
  var db;

  describe('#loadDatabase', function () {
    it('should throw an error if the input is not a string', function () {
      var loadDatabase = Utils.loadDatabase.bind(null, 23);
      expect(loadDatabase).toThrow('23 not found.');
    });

    it('should throw an error if the file does not exist', function () {
      var loadDatabase = Utils.loadDatabase.bind(null, 'foo.db');
      expect(loadDatabase).toThrow('foo.db not found.');
    });

    it('should load and return a sqlite3 database object', function () {
      db = Utils.loadDatabase(__dirname + '/mocks/mock.db');
      expect(db).toBeA(sqlite3.Database);
    });
  });

  describe('#getTables', function () {
    var promise;

    it('should return a Promise', function () {
      promise = Utils.getTables(db);
      expect(promise).toBeA(Promise);
    });

    it('should resolve with the table names', function (done) {
      promise.then(function (tables) {
         expect(JSON.stringify(tables)).toEqual(JSON.stringify(Mocks.tables));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      Utils
        .getTables(null, null)
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });
  });

  describe('#getFields', function () {
    var promise;

    it('should return a Promise', function () {
      promise = Utils.getFields(db, Mocks.tables[0]);
      expect(promise).toBeA(Promise);
    });

    it('should resolve with the field names', function (done) {
      promise.then(function (fields) {
         expect(JSON.stringify(fields)).toEqual(JSON.stringify(Mocks.fields));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      Utils
        .getFields(null, null)
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });
  });

  describe('#runQuery', function () {
    var promise;

    it('should return a Promise', function () {
      promise = Utils.runQuery(db, Mocks.queries[0]);
      expect(promise).toBeA(Promise);
    });

    it('should run the query and resolve with the result', function (done) {
      promise.then(function (result) {
         expect(JSON.stringify(result)).toEqual(JSON.stringify(Mocks.results[0]));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      Utils
        .runQuery(null, null)
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });
  });

  describe('#runQueries', function () {
    var promise;

    it('should return a Promise', function () {
      promise = Utils.runQueries(db, Mocks.queries);
      expect(promise).toBeA(Promise);
    });

    it('should run the query and resolve with the results', function (done) {
      promise.then(function (result) {
         expect(JSON.stringify(result)).toEqual(JSON.stringify(Mocks.results));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      var queries = ['SELET * FROM ' + Mocks.tableName + '', 'SLECT * FROM ' + Mocks.tableName];
      Utils
        .runQueries(db, queries)
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });
  });
});
