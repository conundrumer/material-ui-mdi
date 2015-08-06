'use strict';

var https = require('https');
var fs = require('fs');
var join = require('path').join;

function getMdiApi(path, cb) {
  return https.get({
    host: 'materialdesignicons.com',
    path: '/api' + path
  }, function(response) {
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      var parsed = null;
      try {
        parsed = JSON.parse(body);
      } catch (e) {
        console.error('Did not receive JSON:', body);
      }
      cb(parsed);
    });
  });
}

function buildSvg(pathData) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="' + pathData + '" /></svg>';
}

function writeSvg(svg, name) {
  fs.writeFile(join(__dirname, 'svg', name + '.svg'), svg, function(err) {
    if (err) {
      console.error('Error while writing svg:', err);
    }
  });
}

getMdiApi('/init', function (init) {
  var mainPackageId = init.packages[0].id;
  getMdiApi('/package/' + mainPackageId, function(data) {
    data.icons.forEach(function (icon) {
      writeSvg(buildSvg(icon.data), icon.name);
    });
  });
});
