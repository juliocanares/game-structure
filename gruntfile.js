/**
 * Author : www.juliocanares.com/cv
 * Email : juliocanares@gmail.com
 */

module.exports = function (grunt) {
    var srcFiles = ['./app/js/**/*.js'];
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
        },
        watch: {
            js: {
                files: srcFiles,
                tasks: ['concat', 'uglify'],
                options: {
                    livereload: true
                }
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: './public/img/',
                        src: ['**/*.png'],
                        dest: './public/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: './public/img/',
                        src: ['**/*.jpg'],
                        dest: './public/img/',
                        ext: '.jpg'
                    }
                ]
            }
        },
        stylus: {
            compile: {
                files: {
                    './public/css/app.css': 'src/stylus/**/*.styl'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('watched', ['watch']);
    grunt.registerTask('imagemined', ['imagemin']);

};
