var expect = require('expect');
var Query = require('../types/Query');
var QueryResult = require('../types/QueryResult');

describe('QueryResult', function () {
  describe('constructor', function () {
    it('should create a new QueryResult instance', function(){
      var queryResult = new QueryResult();
      expect(queryResult).toBeA(QueryResult);
    });
  });
  describe('#result', function () {
    it('should have a property called result', function(){
      var queryResult = new QueryResult();
      expect(queryResult.hasOwnProperty('result')).toEqual(true);
    });
    it('should be an array', function(){
      var queryResult = new QueryResult();
      expect(queryResult.result).toBeAn(Array);
    });
  });
  describe('#query', function () {
    it('should have a property called query', function(){
      var queryResult = new QueryResult();
      expect(queryResult.hasOwnProperty('result')).toEqual(true);
    });
    it('should be a Query instance', function(){
      var queryResult = new QueryResult();
      expect(queryResult.query).toBeA(Query);
    });
  });
});
