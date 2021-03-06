# PokeGuide_Web
A offline Pokedex made with nw.js and AngularJS

## Requirements:
- node.js
- npm
- nw-gyp
- nw.js

### NW.js (Node-Webkit)
To run the app you need nw.js from http://nwjs.io/. Download it for your platform und put it in the folder nw.js.

### node.js
You can get nodejs from https://nodejs.org/en/
This should install npm as well

### SQLite3 (node-sqlite3)
To install sqlite3 you need the following:
- nw-gyp:
 > npm install -g nw-gyp
- sqlite3:
In the project directory run
> "npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=x64 --target=X.XX.X"

where X.XX.X is the version of nw.js you are using, for example 0.17.1. You can find the NW.js by running nw.js/nw --version.
Dependent on your OS multiple tools may be neccessary to build SQLite properly (like Python 2.7). Additional help can be found here: https://github.com/mapbox/node-sqlite3#building-for-node-webkit

### NPM
> npm install

This will download all other dependencies for you.

## Run
Now run
> nw.js/nw .

from the base folder in your Terminal/Console and the app should start.

## Additional
As of now, rxjs has a bug that prevents routing from working properly. The temporary workaround is to go in
> node_modules/rxjs/bundles/Rx.umd.js

and replace the line
> Observable_1.Observable.prototype.catch = catch_1._catch;

with this
> Observable_1.Observable.prototype._catch = catch_1._catch;


as described in https://github.com/angular/angular/issues/11300#issuecomment-245016599
