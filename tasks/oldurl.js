/*
 * grunt oldurl
 * http://gruntjs.org/
 *
 * Copyright (c) 2013 JST-CN contributors
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  'use strict';

  /**
   * Custom task to generate the old URL page
   **/
  grunt.registerTask('oldurl', 'Copy new page file to old position for SEO', function () {
    var done = this.async(),
        buildPath = "./build/",
        urlMappingsJSON = "./misc/urlMappings.json",
        readJSON = function( filepath ){
            var data = {};
            try {
                data = grunt.file.readJSON( filepath );
            } catch(e) {
            }
            return data;
        },
        urlMappings = readJSON( urlMappingsJSON ),
        mapItem,
        count = 0;

    grunt.log.ok('Copying pages to old position for SEO ...');
    for (var i in urlMappings) {
        mapItem = urlMappings[i];
        grunt.file.copy(buildPath + mapItem["new"], buildPath + mapItem["old"]);
        count ++;
    }
    grunt.log.ok('Copied ' + count + ' to old position.');
    done();
  });

};

