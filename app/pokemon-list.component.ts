import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'pokemon-list',
    templateUrl: 'app/pokemon-list.component.html',
    styleUrls: ['app/pokemon-list.component.css'],
    providers: []

})
export class PokemonListComponent implements OnInit {
    selectedPokemon: Pokemon;
    pokemonList: Pokemon[];

    constructor(private router: Router, private pokemonService: PokemonService) {}

    ngOnInit() {
        this.getPokemonList();
    }

    getPokemonList() {
        this.pokemonService.getPokemonList().then(pokemonList => this.pokemonList = pokemonList);
    }

    onSelect(pokemon: Pokemon) {
        this.selectedPokemon = pokemon;
    }
    gotoDetail() {
        let link = ['/detail', this.selectedPokemon.id];
        this.router.navigate(link);
    }
}
