var expect = require('expect');
var FileUtils = require('../FileUtils');
var QueryUtils = require('../QueryUtils');
var Query = require('../types/Query');
var QueryResult = require('../types/QueryResult');

var filenames = [
  './test/mocks/mock-facts1.json',
  './test/mocks/mock-facts2.json',
  './test/mocks/mock-facts3.json',
];
var data = FileUtils.loadDataFromFiles(filenames);

describe('QueryUtils', function () {
  describe('#runQuery', function () {
    var fields = ['countries', 'proteins_100g'];
    var output = 'results/proteins-100g-by-country.json';
    var query = new Query(fields, output);
    var result = QueryUtils.runQuery(query, data);
    it('should return a QueryResult instance', function () {
      expect(result).toBeA(QueryResult);
    });
    it('should run a single query and get back the matching rows', function () {
      expect(result.result.length).toEqual(1);
      expect(result.query).toEqual(query);
      expect(result.result[0].countries).toEqual('United Kingdom');
      expect(result.result[0].proteins_100g).toEqual(3.6);
    });
  });

  describe('#runQueries', function () {
    var queries = [
      {
        fields: ['countries','proteins_100g'],
        output: 'results/proteins-100g-by-country.json'
      },
      {
        fields: ['countries','sodium_100g'],
        output: 'results/sodium-100g-by-country.json'
      }
    ];
    var results = QueryUtils.runQueries(queries, data);
    it('should return an array of QueryResult instances', function () {
      expect(results).toBeAn('array');
      var allAreQueryResults = results.reduce(function(areQueryResults, queryResult){
        return areQueryResults ? queryResult instanceof QueryResult : false;
      }, true);
      expect(allAreQueryResults).toEqual(true);
    });
    it('should run multiple queries and get back the matching rows', function () {
      results.forEach(function(result, i) {
        expect(result.result.length).toEqual(1);
        expect(result.query).toEqual(queries[i]);
      });
      expect(results[0].result[0].countries).toEqual('United Kingdom');
      expect(results[0].result[0].proteins_100g).toEqual(3.6);
      expect(results[1].result[0].countries).toEqual('United States');
      expect(results[1].result[0].sodium_100g).toEqual(0.703);
    });
  });
});

