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
    it('should load data from json files into a flat array', function () {
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

  describe('#generateEnumeratedFileNames', function () {
    it('should generate an array of 5 filenames', function () {
      var filepath = 'test-file';
      var extension = 'json';
      var quantity = 5;
      var filenames = FileUtils.generateEnumeratedFileNames(filepath, extension, quantity);
      var expectedFileNames= [
        'test-file1.json',
        'test-file2.json',
        'test-file3.json',
        'test-file4.json',
        'test-file5.json'
      ];
      expect(Array.isArray(filenames)).toBe(true);
      expect(filenames).toEqual(expectedFileNames);
    });
  });
});