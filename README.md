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

    $ npm install -g grunt-cli

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

    $ npm install

### Test

    $ grunt test

This task builds the solution in debug mode, runs the Code Analysis, runs the Stylecop Analysis and runs the test. You should pass this task without errors to get your pull request approved.

### Release

    $ grunt release

This tasks updates your AssemblyInfo files with the version number specified in the `package.json`, and then runs `grunt test`. This task must be ran before committing a new release.

## Pimp your VS

If you wish to use stylecop inside your Visual Studio:

- Install [stylecop](http://stylecop.codeplex.com/releases/view/79972)
- To install **Stylecop Plus**, copy `packages\BuildTools.StylelCopPlus.[Version_Number]\tools\StyelCopPlus.dll` in the Nuget package folder of your solution to your stylecop installation folder.

## Contribute to the git repository

Before contributing to the repository be sure to document yourself about git in general, and about [github workflow](https://guides.github.com/introduction/flow/index.html) in particular.

### Committing and branching with style

In extreme synthesis here's how github flow works. Any time you start working on a new task (could be an issue, a bugfix...) pull the recent version of master and branch out by doing:
````
$ git checkout -b <branchname>
````
the `<branchaname>` must briefly describe what you are accomplishing in this branch. Examples of good branch names are: `fix-login-form-bug`,`add-back-button`,`improve-db-connector-performance`,`prepare-release-0.1`...

In your branch, try to make your commits reasonably atomic, and perform a quick `git-diff` to check that you are committing only what you want to commit. Think of a commit as a small step that contribute to complete your branch task. Give the commit a sound name that explains what you did and use present tense. Examples of good commit names are: `all the tests pass now`, `refactor and prepare to merge to master`, `add class UserController`, `add unit tests`.

Use unit testing as much as possible. If you are adding a functionality, you should try to describe the functionality in terms of the tests you write.

When you think you are ready to commit back to master, it's time to test your branch.

If the master has been updated, make sure to update your branch as well:
````
$ git checkout master
$ git pull
$ git checkout <branchname>
$ git merge master
````
After that you can open a pull request on github. Make sure your code adheres to the standards and passes all the tests:
````
$ grunt test
````
Your code will be discussed and changes may be requested. Remember, the smaller the changes on the codebase, the faster and easier will be the review.

## TODOs

- [ ] git hooks to enforce test running
