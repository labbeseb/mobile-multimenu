module.exports = function(grunt){
    grunt.initConfig({

        uglify: {
            dist: {
                files: {
                    'assets/js/mobilemultimenu.min.js': 'assets/js/mobilemultimenu.js'
                }
            }
        },

        cssmin: {
            mini: {
                options: {
                    keepSpecialComments: '0'
                },
                files: {
                    'assets/css/mobilemultimenu.min.css': 'assets/css/mobilemultimenu.css'
                }
            }
        },

        less: {
            development: {
                files: {
                    "assets/css/mobilemultimenu.css": "assets/less/mobilemultimenu.less"
                }
            }
        },


        watch: {
            convLess: {
                files: ['assets/less/*.less'],
                tasks: ['less'],
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['uglify', 'cssmin']);
};