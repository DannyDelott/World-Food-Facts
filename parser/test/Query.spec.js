var expect = require('expect');
var Query = require('../Query');

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
  });
  describe('#output', function () {
    it('should have a property called output', function(){
      expect(Query.prototype.hasOwnProperty('output')).toEqual(true);
    });
    it('should be a string', function(){
      expect(Query.prototype.output).toBeA('string');
    });
  });
  describe('#run', function () {
    it('should have a property called run', function(){
      expect(Query.prototype.hasOwnProperty('output')).toEqual(true);
    });
    it('should be a function', function(){
      expect(Query.prototype.run).toBeA('function');
    });
  });
});
