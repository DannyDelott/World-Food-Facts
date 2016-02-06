var expect    = require('expect'),
    fs        = require('fs'),
    FileUtils = require('../FileUtils');

var TEMP_FILE = './test_file.json';

describe('FileUtils', function () {
  describe('#exportRecords', function () {
    it('should save a list of records to a file', function () {
      var records = [
        { record: 0 },
        { record: 1 },
        { record: 2 }
      ];
      FileUtils.exportRecords(records, TEMP_FILE);
      expect(require('../../test_file.json')).toEqual(records);
    });
    afterEach(function () {
      fs.unlinkSync(TEMP_FILE);
    });
  });

  describe('#loadDataFromFiles', function () {
    it('should load data from multiple json files into one flat array', function () {
      var filenames = [
        './test/mocks/mock-facts1.json',
        './test/mocks/mock-facts2.json',
        './test/mocks/mock-facts3.json',
      ];
      var data = FileUtils.loadDataFromFiles(filenames);
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toEqual(15);
    });
  });

  describe('#getJsonFiles', function () {
    it('should get the json filenames from the mocks directory', function () {
      var filenames = FileUtils.getJsonFiles('parser/test/mocks/');
      expect(filenames.length).toEqual(3);
    });
  });
});
