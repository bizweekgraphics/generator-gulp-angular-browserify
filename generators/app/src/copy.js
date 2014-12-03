'use strict';

var files = require('../files.json');
var path = require('path');

var basename;
var src;

var copy = {

  templates: function(self) {
    files.templates.forEach(function(filePath) {
      self.template(filePath, filePath);
    })
  }

}

module.exports = copy