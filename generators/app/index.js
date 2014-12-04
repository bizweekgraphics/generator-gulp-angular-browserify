'use strict';

var generators = require('yeoman-generator');
var copy = require('./src/copy.js');

module.exports = generators.Base.extend({
  promptName: function() {
    var done = this.async();

    var prompts = [
      {
        type: 'input',
        name: 'app',
        message: 'What is the Angular app name?',
        default: this.appname
      }
    ]

    this.prompt(prompts, function(answers) {
      this.appName = answers.app

      done();
    }.bind(this));
  },

  copySrc: function() {
    copy.staticFiles(this);
    copy.templates(this);
  },

  install: function() {
    this.npmInstall();
  }
  
});