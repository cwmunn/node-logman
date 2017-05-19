
module.exports = function(grunt) {
  grunt.loadTasks('grunt/tasks');

  grunt.registerTask('default', ['build']);

  grunt.registerTask('unit_test', ['tslint:test', 'ts:test', 'mocha_istanbul:ts']);
  grunt.registerTask('test', ['unit_test']);


  grunt.registerTask('compile', [
      'tslint:source',
      'ts:source',
  ]);

  grunt.registerTask('build', [
      'clean',
      'compile'
  ]);
};


if (require.main == module) {
    var path = require('path');

    var nodeModulesPath = path.resolve(__dirname, 'node_modules');
    var grunt = require(path.resolve(nodeModulesPath, 'grunt'));

    var buildProfile = {}; 

    buildProfile.base = path.resolve(__dirname);
    buildProfile.gruntfile = path.resolve(buildProfile.base, 'Gruntfile.js');

    buildProfile['no-color'] = true;

    grunt.cli(buildProfile);
}
