var expect    = require('expect'),
    fs        = require('fs'),
    FileUtils = require('./FileUtils');

var TEST_FILE = './test_file.json';

describe('FileUtils', function () {
  describe('#exportRecords()', function () {
    it('should save a list of records to a file', function () {
      var records = [
        { record: 0 },
        { record: 1 },
        { record: 2 }
      ];
      FileUtils.exportRecords(records, TEST_FILE);
      expect(require('../../test_file.json')).toEqual(records);
    });
    after(function () {
      fs.unlinkSync('./test_file.json');
    });
  });
});

