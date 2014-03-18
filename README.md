PayPal Kraken Forge by the Node Firm
====================================

March 17-19, 2014<br>
PayPal San Jose<br>
with Daniel Shaw (@dshaw) and Eli Insua (@tmpvar)<br>
(pkf-3)

### Room locations

* 17th March: Fringe 15.3.009
* 18th March: Chin Wagger 12.2.205
* 19th March: Bread Bowl 10.1.047 

## Objectives

Kraken Forge is a custom tailored training experience where each day builds upon the next. We kick off on Day 1 diving deep into Node Core to establish understanding of the underlying platform we will be using. Day 2 builds on the understandings of Core and introduces best practices and useland modules that our key components for building Node.js applications at PayPal. Finally on Day 3, we culminate with the Kraken.js framework and supporting technologies. Kraken.js enables large-scale collaboration across teams and projects at PayPal encouraging industry standard best practices.

**[Please feel free to log issues throughout course.](https://github.com/nodefirm/pkf-3/issues)**

## NodeReady

Welcome to Node.js training with The Node Firm. We have compiled a resources and frequently asked questions to help you prepare to learn how to work effectively on the Node.js platform. Additionally, we have a self guided application called NodeReady that will introduce you to Node and walk you through an introduction to server-side and provide some orientation exercise with Node.

### Installing Node.js

* We'll be using the latest stable version of Node. Node now ships with an easy to use installer.
* Head to http://nodejs.org and download and install the version for your operating system.
* The current stable release is v0.10.26.

### Node on Windows

* [Windows tools and special instructions](./nodeready/windows-faq.md)

### Running the NodeReady Workshopper

The NodeReady Workshopper should take you 1-2 hours to complete. Don't cram it in at the last minute. Allow yourself time to learn and explore the exercises.

NOTE: The following assumes you've already checked out this repo and are in the base directory.

```bash
$ npm install ./nodeready/nodeready.tar.gz -g
$ nodeready
```

## Native addons

Many packages for Node come with a native build component. To be able to install these packages you need to have build tools for your platform.

To test if native builds work on your computer try:

```sh
$ npm install buffertools
```

The build will either succeed or fail, a failure will likely mean you don't have the build toolchain installed. Follow the instructions below for your platform:

### Mac OS

You need `python`, `make` and a C++ compiler. The easiest way to install a compiler is by downloading the XCode Command Line Tools, available from the [Apple Developer site](https://developer.apple.com/downloads/index.action) (account required).

### Windows

 * Download and install [Python 2.7.6](http://www.python.org/download/releases/2.7.6) (version 3.x won't work)
 * Download and install [Microsoft Visual Studio C++ 2012](http://go.microsoft.com/?linkid=9816758)

Run `npm install buffertools` again to confirm that your new toolchain works.

## Schedule

Pre-training resources are available immediately. Source files are distributed the morning of each day. Slides and labs are distributed at the end of each day. Self-Assessment will be distributed following the course and online review will be scheduled following the completion of this training.

* Pre-training
    * [NodeReady](./nodeready)
* Day 1: Node Core
    * [Syllabus and Learning Objectives](./syllabus/day1-syllabus.pdf)
    * [Source Files](./day1)
    * Slides
    * Labs
* Day 2: Userland and Best Practice
    * [Syllabus and Learning Objectives](./syllabus/day2-syllabus.pdf)
    * Source Files
    * Slides
    * Labs
* Day 3: Kraken.js / PayPal
    * [Syllabus and Learning Objectives](./syllabus/day3-syllabus.pdf)
    * Source Files
    * Slides
    * Labs
* Post-training
    * Self-Assessment online
    	* Thursday Mar 27, 2014
    * Online Review Session with the Node Firm
        * Thursday Apr 3, 2014
        * http://firm.io/pkf-3-review

## Workspaces

We have created labs [workspaces](./workspaces) for everyone. If you'd like to clone this repo and submit your lab work or any other code you hack on during the exercises which you would like to have The Node Firm review, we'll provide feedback on your pull requests.

```bash
$ git clone git@github.com:nodefirm/pkf-3.git kraken-forge
$ cd kraken-forge
$ git checkout -b $USER-day1
$ git push -u origin $USER-day1
$ open https://github.com/nodefirm/pkf-3
```

Then, simply submit a pull request for each day.

Put your username in brackets at the beginning of your pull requests an issues so we can more readily filter and group your messages.<br>
e.g. `[dshaw] Day 1 Labs`
