/**
 *  npm link  grunt-concat-json grunt-contrib-commands grunt-contrib-jshint grunt-contrib-watch grunt-encoding grunt-fixmyjs grunt-html grunt-htmllint grunt-jsbeautifier grunt-jsonlint grunt-uncss grunt-xmllint grunt
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-commands');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-encoding');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('jsb', ['jsbeautifier']);

  grunt.initConfig({
    jshint: {
      files: [
        "./mod/**/*.js",
        "./public/**/*.js",
        "./routes/**/*.js"
      ],
      options: {
        reporter: require('jshint-stylish'),
        globals: {
          jQuery: true,
          node: true
        }
      }
    },

    encoding: {
      options: {
        encoding: 'UTF8'
      },
      files: {
        src: [
        "./mod/**/*.js",
        "./public/**/*.js",
        "./routes/**/*.js"
      ]
      },
    },

    jsonlint: {
      sample: {
        src: ['package.json']
      }
    },

    htmllint: {
      all: ['index.html', 'public/index.html'],
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    // added grunt shell commands
    command: {
      run_shell: {
        type: 'bash',
        cmd: 'gls -l'
      },
      run_cmd: {
        cmd: ['mkdir __tmp__cmd', 'mkdir __tmp__']
      }
    },

    jsbeautifier: {
      files: [
        "./mod/**/*.js",
        "./public/**/*.js",
        "./routes/**/*.js"
      ],
      options: {
        html: {
          braceStyle: 'collapse',
          indentChar: ' ',
          indentScripts: 'keep',
          indentSize: 2,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u'],
          wrapLineLength: 0
        },
        css: {
          indentChar: ' ',
          indentSize: 2
        },
        js: {
          braceStyle: 'collapse',
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: ' ',
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 2,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true,
          wrap_attributes: 'auto',
          wrap_attributes_indent_size: 2
        }
      }
    },
  });
};
