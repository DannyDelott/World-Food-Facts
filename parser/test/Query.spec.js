var expect = require('expect');
var Mocks = require('./mocks');
var Query = require('../Query');
var db = require('../Utils').loadDatabase(__dirname + '/mocks/mock.db');

describe('Query', function () {
  describe('#getUniqueCountries', function (done) {
    it('should throw an error when passed a bad sqlite3 database object', function (done) {
      Query
        .getUniqueCountries({}, 'FoodFacts')
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });

    it('should throw an error when passed a bad table name', function (done) {
      Query
        .getUniqueCountries(db, 'Foo')
        .catch(function (e) {
          expect(e).toBeAn(Error);
          done();
        });
    });

    it('should return a Promise', function () {
      var promise = Query.getUniqueCountries(db, 'FoodFacts');
      expect(promise).toBeA(Promise);
    });

    it('should get the number of unique countries', function (done) {
      Query
        .getUniqueCountries(db, 'FoodFacts')
        .then(function (countries) {
          expect(JSON.stringify(countries)).toEqual(JSON.stringify(Mocks.uniqueCountries));
          done();
        });
    });
  });
});

