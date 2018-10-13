module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
    var webpackCommon = require('./webpack.config');
    var webpackConfig = require('./webpack.dev.config');
    var webpackConfigProd = require('./webpack.production.config');
    
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
            common: webpackCommon,
            prod: webpackConfigProd,
            dev: webpackConfig,
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
            js: {
                files: ['frontend/**/*.js'],
                tasks: ['webpack:common'],
                options: {
                    spawn: false
                }
            },
            stylesheets: {
                files: ['assets/styles/**/*.scss'],
                tasks: [
                    'sass', 'cssmin'
                ],
                options: {
                    spawn: false
                }
            }
        }
		});
		
    grunt.registerTask('build-prod', ['webpack:prod', 'sass', 'cssmin']);
    grunt.registerTask('build-dev', ['webpack:dev', 'sass', 'cssmin']);
};
