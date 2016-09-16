import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'pokemon-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    pokemonList: Pokemon[] = [];

    constructor(private router: Router, private pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemonService.getPokemonList()
            .then(pokemon => this.pokemonList = pokemon.slice(1, 5));
    }
    gotoDetail(pokemon: Pokemon) {
        let link = ['/detail', pokemon.id];
        this.router.navigate(link);
    }
}