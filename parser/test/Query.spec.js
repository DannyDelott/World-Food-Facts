var expect = require('expect');
var Mocks = require('./mocks');
var Parser = require('../Parser');
var Query = Parser.Query;
var db = Parser.loadDatabase(__dirname + '/mocks/mock.db');

describe('Query', function () {
  describe('#getUnique', function (done) {
    it('should return a Promise', function () {
      var promise = Query.getUnique(db, Mocks.tables[0], 'countries_en');
      expect(promise).toBeA(Promise);
    });

    it('should reject the promise on error', function (done) {
      Query
        .getUnique(null, null, null)
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });

    it('should resolve with the list of unique field values', function (done) {
      Query
        .getUnique(db, Mocks.tables[0], 'countries_en')
        .then(function (result) {
          expect(JSON.stringify(result)).toEqual(JSON.stringify(Mocks.getUniqueResult));
          done();
        });
    });
  });

  describe('#getTables', function () {
    var promise;

    it('should return a Promise', function () {
      promise = Query.getTables(db);
      expect(promise).toBeA(Promise);
    });

    it('should resolve with the table names', function (done) {
      promise.then(function (tables) {
         expect(JSON.stringify(tables)).toEqual(JSON.stringify(Mocks.tables));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      Query
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
      promise = Query.getFields(db, Mocks.tables[0]);
      expect(promise).toBeA(Promise);
    });

    it('should resolve with the field names', function (done) {
      promise.then(function (fields) {
         expect(JSON.stringify(fields)).toEqual(JSON.stringify(Mocks.fields));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      Query
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
      promise = Query.runQuery(db, Mocks.queries[0]);
      expect(promise).toBeA(Promise);
    });

    it('should run the query and resolve with the result', function (done) {
      promise.then(function (result) {
         expect(JSON.stringify(result)).toEqual(JSON.stringify(Mocks.results[0]));
         done();
       });
    });

    it('should reject the promise on error', function (done) {
      Query
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
      promise = Query.runQueries(db, Mocks.queries);
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
      Query
        .runQueries(db, queries)
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });
  });
});

