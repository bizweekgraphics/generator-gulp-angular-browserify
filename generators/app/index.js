var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  method1: function() {
    this.src.copy('_test.html', 'test.html');
    this.log('method 1 just ran');
  }
});