var expect = require('expect');
var Query = require('../types/Query');

describe('Query', function () {
  describe('constructor', function () {
    it('should create a new Query instance', function(){
      expect(new Query()).toBeA(Query);
    });
  });
  describe('#fields', function () {
    it('should have a property called fields', function(){
      var query = new Query();
      expect(query.hasOwnProperty('fields')).toEqual(true);
    });
    it('should be an array', function(){
      var query = new Query();
      expect(query.fields).toBeAn('array');
    });
  });
  describe('#output', function () {
    it('should have a property called output', function(){
      var query = new Query();
      expect(query.hasOwnProperty('output')).toEqual(true);
    });
    it('should be a string', function(){
      var query = new Query();
      expect(query.output).toBeA('string');
    });
  });
});
