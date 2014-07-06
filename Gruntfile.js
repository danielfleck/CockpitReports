module.exports = function( grunt ) {
	grunt.initConfig({
		uglify : {
			options : {
				mangle : true
			},
			my_target : {
				files : {
					'build/js/cockpit-reports.js' : [
						'src/_js/CockpitReports.js',
						'src/_js/CR/Ferramentas.js',
						'src/_js/CR/Cockpit.js',
						'src/_js/CR/Dashboard.js'
					]
				}
			}
		}, // uglify

		sass : {
            dist : {
        		options : { style : 'compressed' },
        		files : {
          			'build/css/cockpit-reports.css' : 'src/_sass/style.sass'
        		}
      		}
    	}, // sass

    	watch : {
			dist : {
				files : [
					'src/_js/**/*',
					'src/_sass/**/*',
					'Gruntfile.js'
				],

				tasks : [ 'jshint', 'uglify', 'sass' ]
			}
		}, // watch

		jshint: {
	      all: ['src/_js/*.js'],
	    },

	}); 

	// Plugins do Grunt
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// Tarefas que serão executadas
    grunt.registerTask( 'default', [ 'jshint', 'uglify', 'sass' ] );



    // Tarefa para Watch
  	grunt.registerTask( 'w', [ 'watch' ] );

};