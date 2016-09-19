import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONLIST } from './mock-pokemon';

import * as sqlite3 from 'sqlite3';

sqlite3.verbose();
let db = new sqlite3.Database('./data/pokedex.sqlite');

@Injectable()
export class PokemonService {
    constructor() { }

    getPokemonList(): Promise<Pokemon[]> {
        return new Promise<Pokemon[]>((resolve, reject) => {
            let result: Pokemon[] = [];
            let query = `
SELECT l.id, ln.name \
FROM pokemon_species AS l \
LEFT JOIN(SELECT e.pokemon_species_id AS id, COALESCE(o.name, e.name) AS name \
          FROM pokemon_species_names AS e \
          LEFT OUTER JOIN pokemon_species_names AS o ON e.pokemon_species_id = o.pokemon_species_id AND o.local_language_id = ? \
          WHERE e.local_language_id = 9 \
          GROUP BY e.pokemon_species_id) \
AS ln ON l.id = ln.id
                        `;
            db.all(query, [6], (err: Error, rows: any[]) => {
                if (err)
                    reject(err);

                for (var i = 0; i < rows.length; i++) {
                    // let id: number = +rows[i].id;
                    // let name: string = String(rows[i].name);
                    let pokemon: Pokemon = { id: +rows[i].id, name: String(rows[i].name), type: 'Pflanze' };
                    // let pokemon = new Pokemon(id, name, 'blub');
                    result.push(pokemon);
                }
                resolve(result);
            });
        })
        // return Promise.resolve(POKEMONLIST);
    }
    getPokemon(id: number) {
        return this.getPokemonList()
            .then(pokemonList => pokemonList.find(pokemon => pokemon.id === id));
    }
}
