/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function(error, content) {
    if (error) {
      callback(error);
      // console.error("Failure reading file: ", error);
    } else {
      content += '';
      var firstLine = content.split('\n')[0];
      firstLine = firstLine.slice(0, firstLine.length - 1);
      // console.log(firstLine);
      callback(error, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request
  .get(url, function(error, response) {
    callback(error, response && response.statusCode); // 200
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
