
I've added a .gitignore and fixed package.json, bower.json and Gruntfile.js

This should be a clean install for the kids to do things with.

[sudo] npm install
bower install
grunt serve
or
cordova serve
or phonegap serve for the phonegap developer app

might have to do phonegap create, depending on how you did the folder - if so, back out one higher level and create the project with the existing folder's name again. This lets you run the phonegap developer's realtime version.
