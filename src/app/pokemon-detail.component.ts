import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Pokemon } from './model/pokemon';
import { PokemonService } from './service/pokemon.service';

@Component({
    selector: 'pokemon-detail',
    templateUrl: './pokemon-detail.component.html'
})

export class PokemonDetailComponent implements OnInit {
    pokemon: Pokemon;

    constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.pokemonService.getPokemon(+params['id']))
            .subscribe(pokemon => this.pokemon = pokemon);
        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.pokemonService.getPokemon(id).then(pokemon => this.pokemon = pokemon);
        // });
    }

    goBack() {
        window.history.back();
    }
}
