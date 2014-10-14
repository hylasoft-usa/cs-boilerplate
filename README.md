cs-boilerplate
==============

A boilerplate set of tasks for .NET applications.

This boilerplate enforces coding standards for Hylasoft projects written in C# and fosters the usage of the [github workflow](https://guides.github.com/introduction/flow/index.html) for managing the repository. It contains:

- Ruleset for [stylecop](https://stylecop.codeplex.com/)
- Ruleset for [code analysis](http://msdn.microsoft.com/en-us/library/dd264939.aspx)
- [Grunt tasks](http://gruntjs.com/) to perform automated tasks on the code
- Guides and walkthroughs on how to contribute to the projects

## Before you start

The following software must be installed on your machine:

- Visual Studio 2012 or Visual Studio 2013
- [nodeJS](nodejs.org)

This project uses [Grunt](http://gruntjs.com/) to run the tasks If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. To install the Grunt command line interface, open a command line and type:

    npm install -g grunt-cli

## Create a new project

### First time (creating a solution)

- Create a new solution with Visual Studio (make sure to check "create directory for solution")
- Copy the following files from this repository in your newly created solution folder:
  - `package.json`
  - `rules.rulest`
  - `gruntfile.js`
  - `Settings.StyleCop`
- Change the variable `projectName` in the Gruntfile with the solution name (without the `.sln` extension)
- Enable Nuget package restore by right-clicking on the solution file in visual studio and selecting *Enable Nuget package restore*
- Add `BuildTools.StyleCopPlus` to the Nuget references for all the existing projects

### Creating a new project

After creating a new project, remember to add `BuildTools.StyleCopPlus` to the Nuget references for all the projects. Sometimes a file `deleteme.txt` is added to the project when stylecop is installed. If that's the case, you can remove it.

## Running the tasks

before running the tests, make sure to install the node dependencies:

    npm install

### Test

    grunt test

### Release

    grunt release

## Pimp your VS

If you wish to use stylecop inside your Visual Studio:

- Install [stylecop](http://stylecop.codeplex.com/releases/view/79972)
- To install **Stylecop Plus**, copy `packages\BuildTools.StylelCopPlus.[Version_Number]\tools\StyelCopPlus.dll` in the Nuget package folder of your solution to your stylecop installation folder.

## Contribute to the git repository

## TODOs

- [ ] git hooks to enforce test running
