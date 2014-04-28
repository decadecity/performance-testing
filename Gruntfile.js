module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    throttle: {
      default: {
        remote_port: 80,
        local_port: 8001,
        upstream: 20*1024, // Bites per second
        downstream: 20*1024,
        keepalive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-throttle');

  // Default task(s).
  grunt.registerTask('default', ['throttle']);

};
