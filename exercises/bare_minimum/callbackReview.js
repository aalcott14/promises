/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var http = require('http');
var https = require('https');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data)=> {
    var firstLine = data ? data.split('\n')[0] : '';
    console.log('First line', firstLine);
    firstLine ? callback(err, firstLine) : callback(err);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response.statusCode);  
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
