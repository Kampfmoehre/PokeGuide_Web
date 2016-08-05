/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'sqlite3': 'node_modules/sqlite3'
        // 'sqlite3': 'node_modules/sqlite3/lib/binding/node-webkit-v0.16.0-win32-x64/node_sqlite3.node'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'sqlite3': {
            main: 'sqlite3.js',
            defaultExtension: 'js',
            map: { 'node-pre-gyp': './node_modules/node-pre-gyp/', 'path': '@node/path', 'events': '@node/events', 'util': '@node/util' }
        }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages,
        // packageConfigPaths: ['./node_modules/sqlite3/node_modules/node-pre-gyp/package.json'],
        // paths: {
        //     'node-pre-gyp': './node_modules/sqlite3/node_modules/node-pre-gyp/*'
        // }
    };
    System.config(config);
})(this);
