# PokeGuide_Web
A offline Pokedex made with nw.js and AngularJS

Requirements:
- node.js
- npm
- nw.js

To install sqlite3 you need to run following command (where target is the version of nw.js that you want to use:
"npm install sqlite3 --build-from-source --runtime=node-webkit --target_arch=x64 --target=0.16.0"

npm install will download all dependencies for you. After that there should be a typings folder, if not run "npm run typings install" in your Terminal/Console.

To install typings for sqlite3 run "typings install dt~sqlite3 --global --save"

To run the app you need nw.js from http://nwjs.io/. Download it for your platform und put it in the folder nw.js. Now run "nw.js/nw ." from the base folder in your Terminal/Console and the app should start.
