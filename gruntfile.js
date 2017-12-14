'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['sass/*.scss'],
			tasks: 'sass:dev',
			options: {
				livereload: true,
			},
		},
		sass: {
			dev: {
		  		options : {
			  		style : 'expanded'
			  	},
			  	files: {
					'style.css':'sass/style.scss',
				}
			},
			release: {
		  		options : {
			  		style : 'expanded'
			  	},
			  	files: {
					'style.css':'sass/style.scss',
				}
			},
		},
		autoprefixer: {
            options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9']
			},
			single_file: {
				src: 'style.css',
				dest: 'style.css'
			}
		},

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask( 'default', [
    	'sass:dev'
    ]);
    grunt.registerTask( 'release', [
    	'sass:release',
		'autoprefixer'
	]);

};