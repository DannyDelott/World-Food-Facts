var expect = require('expect');
var Result = require('../Result');
var Mocks = require('./mocks');
var result = new Result(Mocks.queries[0], Mocks.results[0].rows);

describe('Result', function () {
  it('should allow method chaining off of instantiation', function () {
    var psuedoClassical = !!new Result(Mocks.queries[0], Mocks.results[0].rows).hasOwnProperty;
    var classical = !!Result(Mocks.queries[0], Mocks.results[0].rows).hasOwnProperty;
    expect(psuedoClassical).toEqual(true);
    expect(classical).toEqual(true);
  });

  it('should have a query property', function () {
    expect(result.query).toBeA('string');
  });

  it('should have a rows property', function () {
    expect(result.rows).toBeAn('array');
  });
});
