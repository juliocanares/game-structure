/**
 * Author : www.juliocanares.com/cv
 * Email : juliocanares@gmail.com
 */

module.exports = function (grunt) {
    var srcFiles = ['./game/js/**/*.js'];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: srcFiles,
                dest: './public/game.dev.js'
            }
        },
        uglify: {
            dist: {
                src: './public/game.dev.js',
                dest: './public/game.min.js'
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
                    './public/game.css': 'game/stylus/**/*.styl'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['concat', 'uglify', 'stylus']);
    grunt.registerTask('watched', ['watch']);
    grunt.registerTask('imagemined', ['imagemin']);

};
