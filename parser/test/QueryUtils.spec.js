var expect      = require('expect'),
    FileUtils   = require('../FileUtils'),
    QueryUtils  = require('../QueryUtils');

var filenames = [
  './test/mocks/mock-facts1.json',
  './test/mocks/mock-facts2.json',
  './test/mocks/mock-facts3.json',
];
var data = FileUtils.loadDataFromFiles(filenames);

describe('QueryUtils', function () {
  describe('#runQuery', function () {
    it('should run a single query and get back the matching rows', function () {
      var query = {
        fields: ['countries','proteins_100g'],
        output: 'results/proteins-100g-by-country.json'
      };
      var results = QueryUtils.runQuery(query, data);
      expect(results.data.length).toEqual(1);
      expect(results.output).toEqual(query.output);
      expect(results.data[0].countries).toEqual('United Kingdom');
      expect(results.data[0].proteins_100g).toEqual(3.6);
    });
  });
  describe('#runQueries', function () {
    it('should run multiple queries and get back the matching rows', function () {
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

      results.forEach(function(result, i) {
        expect(result.data.length).toEqual(1);
        expect(result.output).toEqual(queries[i].output);
      });
      expect(results[0].data[0].countries).toEqual('United Kingdom');
      expect(results[0].data[0].proteins_100g).toEqual(3.6);
      expect(results[1].data[0].countries).toEqual('United States');
      expect(results[1].data[0].sodium_100g).toEqual(0.703);
    });
  });
});

