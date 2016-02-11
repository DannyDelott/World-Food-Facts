var expect = require('expect');
var Query = require('../types/Query');
var QueryResult = require('../types/QueryResult');

describe('QueryResult', function () {
  describe('constructor', function () {
    it('should create a new QueryResult instance', function(){
      expect(new QueryResult()).toBeA(QueryResult);
    });
  });
  describe('#result', function () {
    it('should have a property called result', function(){
      expect(QueryResult.prototype.hasOwnProperty('result')).toEqual(true);
    });
    it('should be an array', function(){
      expect(QueryResult.prototype.result).toBeAn('array');
    });
  });
  describe('#query', function () {
    it('should have a property called query', function(){
      expect(QueryResult.prototype.hasOwnProperty('result')).toEqual(true);
    });
    it('should be a Query instance', function(){
      expect(QueryResult.prototype.query).toBeA(Query);
    });
  });
});
