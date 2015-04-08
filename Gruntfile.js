module.exports = function(grunt) {

	var festConfig = {
		expand: true,
		cwd: 'fest',
		src: ['**/*.xml'],
		dest: 'js/tpl',
		ext: '.js'
    };
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		fest: {
			dev: {
				files: [festConfig],
				options: {
					template: function (data) {
						return grunt.template.process(
							'define(function () { return <%= contents %> ; });',
							{
								data: data
							}
						);
					},
					compile: {
						debug: true,
						beautify: true
					}
				}
			}
		},
		watch: {
			fest: {
				files: ['fest/**/*.xml'],
				tasks: ['fest:dev'],
				options: {
					atBegin: true 
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-fest');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};