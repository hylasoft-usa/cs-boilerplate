'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    // Set this variables for different projects
    projectName: 'your_solution_name_here', // the name of the solution (without *.sln)
    testProjectPath: 'tests/', // the path to the test project (without *.csproj)
    nuspecFile: 'package.nuspec',

    // These variables shouldn't be changed, but sometimes it might be necessary
    srcPath: './',
    solutionName: '<%= projectName %>.sln',
    platform: 'Any CPU',
    dotNetVersion: '4.5.0',
    styleCopRules: 'Settings.StyleCop',
    ruleSet: 'rules.ruleset',

    pkg: grunt.file.readJSON('package.json'),
    assemblyVersion: grunt.file.readJSON('package.json').version.replace(/\-[a-z]+/g,""), //version to remove the 'alpha'-like tags from the semver version

    assemblyinfo: {
      options: {
        files: ['<%= srcPath %><%= solutionName %>'],
        info: {
          version: '<%= assemblyVersion %>',
          fileVersion: '<%= pkg.version %>',
          company: 'hylasoft',
          copyright: ' ',
          product: '<%= projectName %>'
        }
      }
    },

    msbuild: {
      release: {
        src: ['<%= srcPath %><%= solutionName %>'],
        options: {
          projectConfiguration: 'Release',
          platform: '<%= platform %>',
          targets: ['Clean', 'Rebuild'],
          version: 4.0,
          buildParameters: {
            StyleCopEnabled: false
          }
        }
      },
      debug: {
        src: ['<%= srcPath %><%= solutionName %>'],
        options: {
          projectConfiguration: 'Debug',
          platform: '<%= platform %>',
          targets: ['Clean', 'Rebuild'],
          version: 4.0,
          buildParameters: {
            StyleCopEnabled: true,
            StyleCopTreatErrorsAsWarnings: false,
            StyleCopOverrideSettingsFile: process.cwd() + '/<%= styleCopRules %>',
            RunCodeAnalysis: true,
            CodeAnalysisRuleSet: process.cwd() + '/<%= ruleSet %>',
            TreatWarningsAsErrors: true
          },
        }
      }
    },

    mstest: {
      debug: {
        src: ['<%= srcPath %>/<%= testProjectPath %>/bin/Debug/*.dll'] // Points to test dll
      }
    },

    nugetrestore: {
      restore: {
        src: '<%= srcPath %>/<%= solutionName %>',
        dest: '<%= srcPath %>/packages/',
        options: {
          msbuildversion: 4
        }
      }
    },

    nugetpack: {
      dist: {
        src: '<%= nuspecFile %>',
        dest: '.',

        options: {
          version: '<%= pkg.version %>',
          basePath: '<%= projectName %>/bin/Release',
          includeReferencedProjects: true,
          excludeEmptyDirectories: true
        }
      }
    }

  });



  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['nugetrestore','msbuild:release']);
  grunt.registerTask('test', ['nugetrestore','msbuild:debug', 'mstest']);
  grunt.registerTask('release', ['assemblyinfo', 'test']);
};
