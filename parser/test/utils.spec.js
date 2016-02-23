var expect = require('expect');
var sqlite3 = require('sqlite3').verbose();
var Utils = require('../Utils');

describe('Utils', function() {
  describe('#loadDatabase', function() {
    it('should throw an error if the file does not exist', function(){
      var loadDatabase = Utils.loadDatabase.bind(null, 'foo');
      expect(loadDatabase).toThrow('foo not found.');
    });
    it('should load and return a sqlite3 database object', function() {
      var db = Utils.loadDatabase('./data/mock/mock.db');
      expect(db).toBeA(sqlite3.Database);
    });
  });
});
