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
      var matchingRows = QueryUtils.runQuery(query, data);
      expect(matchingRows.length).toEqual(1);
      expect(matchingRows[0].countries).toEqual('United Kingdom');
      expect(matchingRows[0].proteins_100g).toEqual(3.6);
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
          output: 'results/proteins-100g-by-country.json'
        }
      ];
      var matchingRows = QueryUtils.runQueries(queries, data);
      expect(matchingRows.length).toEqual(2);
      expect(matchingRows[0][0].countries).toEqual('United Kingdom');
      expect(matchingRows[0][0].proteins_100g).toEqual(3.6);
      expect(matchingRows[1][0].countries).toEqual('United States');
      expect(matchingRows[1][0].sodium_100g).toEqual(0.703);
    });
  });
});

