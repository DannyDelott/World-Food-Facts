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
      expect(Query.prototype.hasOwnProperty('fields')).toEqual(true);
    });
    it('should be an array', function(){
      expect(Query.prototype.fields).toBeAn('array');
    });
  });
  describe('#output', function () {
    it('should have a property called output', function(){
      expect(Query.prototype.hasOwnProperty('output')).toEqual(true);
    });
    it('should be a string', function(){
      expect(Query.prototype.output).toBeA('string');
    });
  });
});
