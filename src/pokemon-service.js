var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/pokedex.sqlite', sqlite3.OPEN_READONLY);
var _ = require('lodash');

const pokemonService = class PokemonService {
    constructor() {}
    getLanguages(displayLanguage, callback) {
        var result = [],
            query =
            "SELECT l.id, ln.name \
                             FROM languages AS l \
                             LEFT JOIN(SELECT e.language_id AS id, COALESCE(o.name, e.name) AS name \
                                       FROM language_names AS e \
                                       LEFT OUTER JOIN language_names AS o ON e.language_id = o.language_id AND o.local_language_id = ? \
                                       WHERE e.local_language_id = 9 \
                                       GROUP BY e.language_id) \
                             AS ln ON l.id = ln.id ";
        db.all(query, [displayLanguage], function(error, rows) {
            if(error) {
                callback(error, null);
                return;
            }
            _.forEach(rows, function(row) {
                result.push({
                    id: row.id,
                    name: row.name
                });
            });
            callback(null, result);
        });
    }
};

module.exports = pokemonService;
