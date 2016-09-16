import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONLIST } from './mock-pokemon';

//import * as sqlite3 from 'sqlite3';

//sqlite3.verbose();
//let db = new sqlite3.Database('../../data/pokedex.sqlite');

@Injectable()
export class PokemonService {
    constructor() { }

    getPokemonList() {
        return Promise.resolve(POKEMONLIST);
    }
    getPokemon(id: number) {
        return this.getPokemonList()
            .then(pokemonList => pokemonList.find(pokemon => pokemon.id === id));
    }
}
