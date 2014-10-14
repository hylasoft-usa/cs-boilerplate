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

## Running the tasks

#### Editing the Gruntfile

### Test

### Release

## Pimp your VS

If you wish to use stylecop inside your Visual Studio:

- Install [stylecop](http://stylecop.codeplex.com/releases/view/79972)
- To install **Stylecop Plus**, copy `packages\styelcopPlus.[Version_Number]\tools\styelcopPlus.dll` in the nuget package folder of your project in your stylecop installation folder.

## Contribute to the git repository

## TODOs

- [ ] git hooks to enforce test running
