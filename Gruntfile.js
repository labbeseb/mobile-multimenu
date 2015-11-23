module.exports = function(grunt){
    grunt.initConfig({

        uglify: {
            dist: {
                files: {
                    'assets/js/jquery-mobilemultimenu.min.js': 'assets/js/jquery-mobilemultimenu.js'
                }
            }
        },

        cssmin: {
            mini: {
                options: {
                    keepSpecialComments: '0'
                },
                files: {
                    'assets/css/jquery-mobilemultimenu.min.css': 'assets/css/jquery-mobilemultimenu.css'
                }
            }
        },

        less: {
            development: {
                files: {
                    "assets/css/jquery-mobilemultimenu.css": "assets/less/jquery-mobilemultimenu.less"
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