var expect = require('expect');
var sqlite3 = require('sqlite3').verbose();
var Mocks = require('./mocks');
var Parser = require('../Parser');

describe('Parser', function () {
  var db;

  describe('#loadDatabase', function () {
    it('should throw an error if the input is not a string', function () {
      var loadDatabase = Parser.loadDatabase.bind(null, 23);
      expect(loadDatabase).toThrow('23 not found.');
    });

    it('should throw an error if the file does not exist', function () {
      var loadDatabase = Parser.loadDatabase.bind(null, 'foo.db');
      expect(loadDatabase).toThrow('foo.db not found.');
    });

    it('should load and return a sqlite3 database object', function () {
      db = Parser.loadDatabase(__dirname + '/mocks/mock.db');
      expect(db).toBeA(sqlite3.Database);
    });
  });

  xdescribe('#exportResults', function () { });
});
