import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'pokemon-detail',
    templateUrl: './pokemon-detail.component.html'
})

export class PokemonDetailComponent implements OnInit {
    pokemon: Pokemon;

    constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.pokemonService.getPokemon(id).then(pokemon => this.pokemon = pokemon);
        });
    }

    goBack() {
        window.history.back();
    }
}
