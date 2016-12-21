# PokeGuide_Web
A offline Pokedex made with nw.js and React

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

## Build
- Running `npm run start` will start webpack which will listen for file changes and redploy them to `dist/dev`.
- running `npm run build` will run webpack which will put the output to `dist/prod`.

## Run
 Run either `nw.js/nw dist/dev` or `nw.js/nw dist/prod`, depending on the build step above.
