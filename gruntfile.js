module.exports = function(grunt){

	grunt.initConfig({
	  concat: {
	    script: {
	      src: ['jquery.min.js', 'main.js'],
	      dest: 'scripts.min.js',
	    },
	    style: {
	      src: ['style.css'],
	      dest: 'styles.min.css',
	    },
	  },
	  watch: {
	    js: {
	      files: ['*.js'],
	      tasks: ['concat:script'],
	    },
	    css: {
	      files: ['*.css'],
	      tasks: ['concat:style'],
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask("default", ["concat", "watch"]);

};