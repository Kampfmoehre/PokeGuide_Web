var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/pokedex.sqlite', sqlite3.OPEN_READONLY);

(function(app) {
    app.PokemonService =
        // ng.core.Injectable().Class({
        ng.core.Class({
            constructor: function() {},
            getPokemonList: function() {
                var promise = new Promise(function(resolve, reject) {
                    var result = [];
                    db.all('SELECT id, identifier FROM pokemon LIMIT 10', function(error, rows) {
                        for (var i = 0; i < rows.length; i++) {
                            result.push({
                                id: rows[i].id,
                                name: rows[i].identifier
                            });
                        }
                        resolve(result);
                    });
                });
                return promise;
            },
            getPokemon: function(id) {
                var promise = new Promise(function(resolve, reject) {
                    var result = null;
                    db.get('SELECT id, identifier FROM pokemon WHERE id = ?', [id], function(error, row) {
                        resolve({
                            id: row.id,
                            name: row.identifier
                        });
                    });
                });
                return promise;
            }
        });
})(window.app || (window.app = {}));
