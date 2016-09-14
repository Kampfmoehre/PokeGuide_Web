var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/pokedex.sqlite', sqlite3.OPEN_READONLY);
var rx = require('rxjs');
var _ = require('lodash');

(function(app) {
    app.PokemonService =
        // ng.core.Injectable().Class({
        ng.core.Class({
            constructor: function() {},
            getLanguages: function(displayLanguage) {
                var promise = new Promise(function(resolve, reject) {
                    var result = [],
                        query = "SELECT l.id, ln.name \
                                 FROM languages AS l \
                                 LEFT JOIN(SELECT e.language_id AS id, COALESCE(o.name, e.name) AS name \
                                           FROM language_names AS e \
                                           LEFT OUTER JOIN language_names AS o ON e.language_id = o.language_id AND o.local_language_id = ? \
                                           WHERE e.local_language_id = 9 \
                                           GROUP BY e.language_id) \
                                 AS ln ON l.id = ln.id ";
                    db.all(query, [displayLanguage], function(error, rows) {
                        if(error)
                            reject(error);
                        _.forEach(rows, function(row) {
                            result.push({
                                id: row.id,
                                name: row.name
                            });
                        });
                        resolve(result);
                    });
                });
                return promise;
            },
            getPokemonList: function() {
                var promise = new Promise(function(resolve, reject) {
                    var result = [];
                    db.all('SELECT id, identifier FROM pokemon LIMIT 10', function(error, rows) {
                        for(var i = 0; i < rows.length; i++) {
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
            },
            search: function(idOrName, displayLanguage) {
                var source = new rx.Observable(observer => {
                    var result = [],
                        field = isNaN(idOrName) ? 'name' : 'pokedex_number',
                        query = "SELECT ps.id, pdn.pokedex_number, psn.name \
                                 FROM pokemon_species AS ps \
                                 LEFT JOIN pokemon_dex_numbers AS pdn ON ps.id = pdn.species_id \
                                 LEFT JOIN (SELECT e.pokemon_species_id AS id, COALESCE(o.name, e.name) AS name \
                                            FROM pokemon_species_names AS e \
                                            LEFT OUTER JOIN pokemon_species_names AS o ON e.pokemon_species_id = o.pokemon_species_id AND o.local_language_id = ? \
                                            WHERE e.local_language_id = 9 \
                                            GROUP BY e.pokemon_species_id) \
                                 AS psn ON ps.id = psn.id \
                                 WHERE pdn.pokedex_id = 1 AND " + field + " like '%" + idOrName + "%' LIMIT 10";

                    db.all(query, [displayLanguage], function(error, rows) {
                        if(error)
                            oberver.error(error);
                        for(var i = 0; i < rows.length; i++) {
                            result.push({
                                id: rows[i].pokedex_number,
                                name: rows[i].name
                            });
                        }
                        observer.next(result);
                        observer.complete();
                    });
                });
                return source;
            }
        });
})(window.app || (window.app = {}));
