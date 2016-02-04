var expect      = require('expect'),
    ParserUtils = require('../ParserUtils');

describe('ParserUtils', function () {
  describe('#parseRecordsByRequiredFields', function () {
    it('it should should get the list of records with two required fields', function () {
      var records = [
        { country: 'DE', stores: 'Aldi' },
        { country: 'DE', stores: 'Aldi' },
        { country: 'US' }
      ];
      var fields = ['country', 'stores'];
      var results = ParserUtils.parseRecordsByRequiredFields(records, fields);
      var expectedResults = [
        { country: 'DE', stores: 'Aldi' },
        { country: 'DE', stores: 'Aldi' },
      ];
      expect(results).toEqual(expectedResults);
    });
  });

  describe('#parseQueriesFromCommandLine', function () {
    it('it should should parse the required fields for a single query', function () {
      var args = [
        'node',
        './parser/index.js',
        '-f', 'countries', 'salt_100g', '-o', 'results/salt-100g-by-country.json',
        '-f', 'countries', 'saturated_fat_100g', '-o', 'results/saturated-fat-100g-by-country.json'
      ];
      var fields = ParserUtils.parseQueriesFromCommandLine(args);
      var expectedFields = [
        { fields: ['countries', 'salt_100g'], output: 'results/salt-100g-by-country.json' }
      ];
      expect(fields).toEqual(expectedFields);
    });

    it('it should should parse the required fields for multiple queries', function () {
      var args = [
        'node',
        './parser/index.js',
        '-f', 'countries', 'salt_100g', '-o', 'results/salt-100g-by-country.json',
        '-f', 'countries', 'sodium_100g', '-o', 'results/sodium-100g-by-country.json',
        '-f', 'countries', 'saturated_fat_100g', '-o', 'results/saturated-fat-100g-by-country.json'
      ];
      var fields = ParserUtils.parseQueriesFromCommandLine(args);
      var expectedFields = [
        { fields: ['countries', 'salt_100g'], output: 'results/salt-100g-by-country.json' },
        { fields: ['countries', 'sodium_100g'], output: 'results/sodium-100g-by-country.json' }
      ];
      expect(fields).toEqual(expectedFields);
    });
  });

  describe('#millisecondsToTime', function () {
    it('should convert a number of milliseconds to a human friendly format', function () {
      var milli = 319139;
      var timestamp = ParserUtils.millisecondsToTime(milli);
      var expectedTimestamp = 'Minutes: 5\tSeconds: 19\tMilliseconds: 139';
      expect(timestamp).toEqual(expectedTimestamp);
    });
  });
});
