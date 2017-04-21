/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(error, content) {
      if (error) {
        reject(error);
        // console.error("Failure reading file: ", error);
      } else {
        content += '';
        var firstLine = content.split('\n')[0];
        firstLine = firstLine.slice(0, firstLine.length - 1);
        // console.log(firstLine);
        resolve(firstLine);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise(function(resolve, reject) {
    request
      .get(url, function(error, response) {
        if (error) {
          reject(error);
        } else {
          resolve(response.statusCode); // 200
        }
      });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
