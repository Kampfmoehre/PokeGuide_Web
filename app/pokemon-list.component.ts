import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'pokemon-list',
    templateUrl: 'app/pokemon-list.component.html',
    styleUrls: ['app/pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
    pokemonList: Pokemon[];
    selectedPokemon: Pokemon;

    constructor(private router: Router, private pokemonService: PokemonService) { }

    getPokemonList() {
        this.pokemonService.getPokemonList().then(pokemonList => this.pokemonList = pokemonList);
    }
    ngOnInit() {
        this.getPokemonList();
    }
    onSelect(pokemon: Pokemon) { this.selectedPokemon = pokemon; }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedPokemon.id]);
    }
}
