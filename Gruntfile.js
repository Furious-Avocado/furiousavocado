module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var PathConfig = require('./grunt-settings.js');
    const sass = require('node-sass');
    // tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: PathConfig,

        //clean files
        clean: {
            options: { force: true },
            temp: {
                src: [
                    "<%= config.cssDir %>**/*.map",
                    "<%= config.cssMainFileDir %>**/*.map",
                    "./jpgtmp.jpg"
                ]
            }
        },

        /** watch file changes */
        watch: {
            options: {
                debounceDelay: 1,
            },
            images: {
                files: ['<%= config.imgSourceDir %>**/*.*'],
                tasks: ['newer:copy:images'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['<%= config.sassDir %>**/*.scss'],
                tasks: ['sass:dev', 'cmq:dev', 'postcss:dev', 'cssmin:dev'],
                options: {
                    spawn: false,
                }
            },
            js: {
                files: ['<%= config.jsSourceDir %>**/*.js'],
                tasks: ['copy:js', 'babel', 'uglify'],
                options: {
                    spawn: false
                }
            }
        },

        /** Keep multiple browsers & devices in sync when building websites. */
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['*.html', '*.php','*/**.php', '*/**.css','*/**.js']
                },
                options: {
                    proxy: '<%= config.proxy %>',
                    host: '<%= config.host %>',
                    open: 'external',
                    watchTask: true
                }
            }
        },

        /** copy images, js and external css files from resources dir to destination dir */
        copy: {
            images: {
                expand: true,
                cwd: '<%= config.imgSourceDir %>',
                src: '**',
                dest: '<%= config.imgDir %>',
                filter: 'isFile',
            },
            js: {
                expand: true,
                cwd: '<%= config.jsSourceDir %>',
                src: '*',
                dest: '<%= config.jsDir %>',
                filter: 'isFile'
            },
            css: {
                expand: true,
                cwd: '<%= config.externalCssDir %>',
                src: '*',
                dest: '<%= config.cssMainFileDir %>',
                filter: 'isFile'
            }
        },

        /** IMAGE OPTIMIZATION TASKS START */

        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= config.imgSourceDir %>',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: '<%= config.imgDir %>'
                }]
            }
        },

        /** IMAGE OPTIMIZATION TASKS END */
    
        /** CSS TASKS START */

        // compile sass to css
        sass: {
            options: PathConfig.hasBower,
            dev: {
                options: {
                    implementation: sass,
                    sourceMap: true,
                    outputStyle: 'expanded',
                    expand: true
                },
                files: {
                    '<%= config.cssDir %><%= config.cssMainFileName %>.css': '<%= config.sassDir %><%= config.sassFileName %>.scss',
                    '<%= config.cssMainFileDir %><%= config.cssMainFileName %>.css': '<%= config.sassDir %><%= config.sassFileName %>.scss'
                }
            },
            dist: {
                options: {
                    implementation: sass,
                    sourceMap: false,
                    style: 'nested',
                    expand: true
                },
                files: {
                    '<%= config.cssDir %><%= config.cssMainFileName %>.css': '<%= config.sassDir %><%= config.sassFileName %>.scss'
                }
            }
        },

        // create css maps
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')
                ]
            },
            dev: {
                options: { map: true },
                src: [
                    '<%= config.cssDir %><%= config.cssMainFileName %>.css',
                    '<%= config.cssMainFileDir %><%= config.cssMainFileName %>*.css'
                ]
            },
            dist: {
                options: { map: false },
                src: [
                    '<%= config.cssMainFileDir %><%= config.cssMainFileName %>.css',
                ]
            }
        },

        // combine media queries
        cmq: {
            options: {
                log: false,
                expand: true
            },
            dev: {
                files: {
                    '<%= config.cssDir %><%= config.cssMainFileName %>.css': '<%= config.cssDir %><%= config.cssMainFileName %>.css',
                    '<%= config.cssMainFileDir %><%= config.cssMainFileName %>.css': '<%= config.cssDir %><%= config.cssMainFileName %>.css'
                },
            },
            dist: {
                files: {
                    '<%= config.cssDir %><%= config.cssMainFileName %>.css': '<%= config.cssDir %><%= config.cssMainFileName %>.css'
                },
            }
        },

        // minify final css
        cssmin: {
            options: {
                expand: true
            },
            dev: {
                files: {
                    '<%= config.cssDir %>main.min.css': '<%= config.cssMainFileDir %>main.css',
                    '<%= config.cssMainFileDir %>main.min.css': '<%= config.cssMainFileDir %>main.css'
                }
            },
            dist: {
                files: {
                    '<%= config.cssMainFileDir %>main.min.css': '<%= config.cssMainFileDir %>main.css'
                }
            }
        },

        // purge unused css from final css file
        purgecss: {
            target: {
                options: {
                    content: ['**/*.php', '**/*.js'],
                    whitelist: ['aos'],
                    whitelistPatterns: [/^aos/]
                },
                files: {
                    '<%= config.cssMainFileDir %>main.css': ['<%= config.cssDir %>main.css']
                }
            }
        },

        /** CSS TASKS END */

        /** JS TASKS START */

        // Transpile JS to older / more widely supported syntax
        babel: {
            options: {
                presets: ["@babel/preset-env",]
            },
            main: {
                expand: true,
                cwd: '<%= config.jsDir %>',
                src: '<%= config.jsMainFileName %>.js',
                dest: '<%= config.jsDir %>'
            }
        },

        // minify final JS files
        uglify: {
            target: {
                files: {
                    '<%= config.jsDir %><%= config.jsMainFileName %>.min.js': ['<%= config.jsDir %><%= config.jsMainFileName %>.js']
                }
            }
        }

        /** JS TASKS END */
    });


    //css for development (no purge css)
    grunt.registerTask('css-dev', ['sass:dev', 'cmq:dev', 'postcss:dev', 'cssmin:dev']);

    //css beautiful (for distribution - with purge css)
    grunt.registerTask('cssbeauty', ['sass:dist', 'cmq:dist', 'postcss:dist', 'purgecss', 'cssmin:dist']);

    //img minify
    grunt.registerTask('imgmin', ['image']);


    /**
     * Main tasks
     * grunt build - first project build
     * grunt - watch and browsersync
     * grunt dist - ready for distribution
     * */

    //first build
    grunt.registerTask('build', ['css-dev', 'copy:js', 'babel', 'uglify', 'imgmin', 'copy:css']);

    //watch + browser sync
    grunt.registerTask('default', ['browserSync', 'watch']);

    //final build
    grunt.registerTask('dist', ['clean:temp', 'imgmin', 'cssbeauty', 'copy:js', 'babel', 'uglify', 'copy:css']);

};
