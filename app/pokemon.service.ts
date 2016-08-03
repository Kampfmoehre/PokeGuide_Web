/// <reference path="../typings/index.d.ts"/>

import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONLIST } from './mock-pokemon';

import * as sqlite3 from 'sqlite3';

sqlite3.verbose();
let db = new sqlite3.Database('../data/pokedex.sqlite');

@Injectable()
export class PokemonService {
    constructor() { }

    getPokemonList() {
        let list: Pokemon[] = [];
        let that: any = this;

        // db.all('SELECT id, identifier FROM pokemon LIMIT 10', function(error, rows) {
        //
        //     if (error === null) {
        //         console.log('blub');
        //         for (let i = 0; i < rows.length; i++) {
        //             that.list.push({id: rows[i].id, name: rows[i].identifier});
        //         }
        //     } else {
        //         console.log(error);
        //     }
        // });
        return Promise.resolve(POKEMONLIST);
        // return Promise.resolve(function() {
        //     var pokemonList: Pokemon[] = [];
        //     let that = this;
        //
        //     // let db = new Sqlite<pokemon>('CRETAE TABLE IF NOT EXISTS pokemon (id INTEGER PRIMARY KEY, identifier TEXT NOT NULL)',
        //     //     (row) => {
        //     //         return new pokemon(row.id, row.identifier);
        //     //     }, function(error: Error) {
        //     //         if (error === null) {
        //     //             db.all(function(error: Error, pokemonList: pokemon[]) {
        //     //                 if (error === null) {
        //     //                     console.log(pokemonList);
        //     //                 } else {
        //     //                     console.log(error);
        //     //                 }
        //     //             })
        //     //         } else {
        //     //             console.log(error);
        //     //         }
        //     //     });
        //     return POKEMONLIST;
        // });
    }
    getPokemon(id: number) {
        return this.getPokemonList()
            .then(pokemonList => pokemonList.find(pokemon => pokemon.id === id));
    }
}
