module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
    var webpackConfig = require('./webpack.config');


    grunt.initConfig({
        pkg: grunt
            .file
            .readJSON('package.json'),
        sass: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/styles',
                        src: ['base.scss'],
                        dest: 'dist/styles/css',
                        ext: '.css'
                    }
                ]
            }
        },
        webpack: {
            webpackConfig
          },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/styles/css',
                        src: ['base.css'],
                        dest: 'dist/styles/minified',
                        ext: '.min.css'
                    }
                ]
            }
        },
        watch: {
            stylesheets: {
                files: ['assets/styles/**/*.scss'],
                tasks: [
                    'sass', 'cssmin'
                ],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['frontend/**/*.js'],
                tasks: ['webpack'],
                options: {
                    spawn: false
                }
            }
        }
		});
		
    grunt.registerTask('compass', ['sass', 'cssmin']);
};