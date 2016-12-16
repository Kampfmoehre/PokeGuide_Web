import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Generation } from './../model/generation';
import { Pokemon } from './../model/pokemon';

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
            SELECT ps.id, psn.name
            FROM pokemon_species AS ps
            LEFT JOIN(SELECT e.pokemon_species_id AS id, COALESCE(o.name, e.name) AS name
                      FROM pokemon_species_names AS e
                      LEFT OUTER JOIN pokemon_species_names AS o ON e.pokemon_species_id = o.pokemon_species_id AND o.local_language_id = ?
                      WHERE e.local_language_id = 9
                      GROUP BY e.pokemon_species_id)
            AS psn ON ps.id = psn.id
            ORDER BY ps.id
                        `;
            db.all(query, [6], (err: Error, rows: any[]) => {
                if (err)
                    reject(err);

                for (var i = 0; i < rows.length; i++) {
                    let pokemon: Pokemon = { id: +rows[i].id, name: String(rows[i].name), type: 'Pflanze', baseExp: 0 };
                    result.push(pokemon);
                }
                resolve(result);
            });
        });
    }
    getPokemon(id: number): Promise<Pokemon> {
        return new Promise<Pokemon>((resolve, reject) => {
            let query = `
            SELECT ps.id, psn.name
            FROM pokemon_species AS ps
            LEFT JOIN(SELECT e.pokemon_species_id AS id, COALESCE(o.name, e.name) AS name
                      FROM pokemon_species_names AS e
                      LEFT OUTER JOIN pokemon_species_names AS o ON e.pokemon_species_id = o.pokemon_species_id AND o.local_language_id = ?
                      WHERE e.local_language_id = 9
                      GROUP BY e.pokemon_species_id)
            AS psn ON ps.id = psn.id
            WHERE ps.id = ?
            LIMIT 1
            `;

            db.get(query, [6, id], (err: Error, row: any) => {
                if (err)
                    reject(err);
                let pokemon: Pokemon = { id:+row.id, name:row.name, type: 'Feuer', baseExp: 0 };
                resolve(pokemon);
            });
        });
    }
    search(term: string): Observable<Pokemon[]> {
        return new Observable<Pokemon[]>((observer: Observer<Pokemon[]>) => {
            let result: Pokemon[] = [];
            let field = "name";
            let query = `
            SELECT ps.id, pdn.pokedex_number, psn.name
            FROM pokemon_species AS ps
            LEFT JOIN pokemon_dex_numbers AS pdn ON ps.id = pdn.species_id
            LEFT JOIN (SELECT e.pokemon_species_id AS id, COALESCE(o.name, e.name) AS name
                       FROM pokemon_species_names AS e
                       LEFT OUTER JOIN pokemon_species_names AS o ON e.pokemon_species_id = o.pokemon_species_id AND o.local_language_id = ?
                       WHERE e.local_language_id = 9
                       GROUP BY e.pokemon_species_id)
            AS psn ON ps.id = psn.id
            WHERE pdn.pokedex_id = 1 AND ${field} like '%${term}%' LIMIT 10
            `;

            db.all(query, [6], (err: Error, rows: any[]) => {
                if (err)
                    observer.error(err);
                for (var i = 0; i < rows.length; i++) {
                    let pokemon: Pokemon = {id: +rows[i].pokedex_number, name: rows[i].name, type: 'Wasser', baseExp: 0};
                    result.push(pokemon);
                }
                observer.next(result);
                observer.complete();
            });
        });
    }
    getGenerations(): Promise<Generation[]> {
        return new Promise<Generation[]>((resolve, reject) => {
            let result: Generation[] = [];
            let query = this.getLocalizedListQuery(6, 'generations', 'generation_names', 'generation_id');

            db.all(query, [], (err: Error, rows: any[]) => {
                if (err)
                    reject(err);
                for (let i = 0; i < rows.length; i++) {
                    let generation: Generation = {id: rows[i].id, name: rows[i].name};
                    result.push(generation);
                }
                resolve(result);
            });
        });
    }
    getLocalizedListQuery(languageId: number, table: string, localizationTable: string, idColumn?: string): string {
        if (!idColumn)
            idColumn = `${table}_id`;
        let query = `
        SELECT t.id, tn.name
FROM ${table} AS t
LEFT JOIN (SELECT e.${idColumn} AS id, COALESCE(o.name, e.name) AS name
	FROM ${localizationTable} AS e
	LEFT OUTER JOIN ${localizationTable} AS o ON e.${idColumn} = o.${idColumn} AND o.local_language_id = ${languageId}
	WHERE e.local_language_id = 9
	GROUP BY e.${idColumn})
AS tn ON t.id = tn.id
        `;
        return query;
    }
}
