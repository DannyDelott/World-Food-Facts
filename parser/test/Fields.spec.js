var expect = require('expect');
var Fields = require('../Fields');

describe('Fields', function () {
  describe('constructor', function () {
    it('should create a new Fields instance', function(){
      expect(new Fields()).toBeA(Fields);
    });
  });
  describe('#fields', function () {
    it('should have a property called fields', function(){
      expect(Fields.prototype.hasOwnProperty('fields')).toEqual(true);
    });
  });
  describe('#mode', function () {
    it('should have a property called mode', function(){
      expect(Fields.prototype.hasOwnProperty('mode')).toEqual(true);
    });
    it('should be a string', function(){
      expect(Fields.prototype.output).toBeA('string');
    });
  });
});
