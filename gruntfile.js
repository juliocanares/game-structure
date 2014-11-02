/**
 * Author : www.juliocanares.com/cv
 * Email : juliocanares@gmail.com
 */

module.exports = function (grunt) {
    var srcFiles = ['./app/src/**/*.js'];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: srcFiles,
                dest: './public/js/app.dev.js'
            }
        },
        uglify: {
            dist: {
                src: './public/js/app.dev.js',
                dest: './public/js/app.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
