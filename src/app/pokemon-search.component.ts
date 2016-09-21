import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router }            from '@angular/router';
// import { Observable }        from 'rxjs/Observable';
// import { Subject }           from 'rxjs/Subject';
import { Observable, Subject } from 'rxjs';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
    selector: 'pokemon-search',
    templateUrl: './pokemon-search.component.html',
    styleUrls:  ['./pokemon-search.component.css'],
    providers: [PokemonService]
})
export class PokemonSearchComponent implements OnInit {
    pokemonList: Observable<Pokemon[]>;
    private searchTerms = new Subject<string>();
    constructor( private pokemonService: PokemonService, private router: Router, private ref: ChangeDetectorRef) {
        ref.detach();
        setInterval(() => {
            this.ref.detectChanges();
        }, 500)
    }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        let that = this;
    this.pokemonList = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? that.pokemonService.search(term) : Observable.of<Pokemon[]>([]))
        .catch(error => {
            // TODO: real error handling
            console.error(error);
            return Observable.of<Pokemon[]>([]);
        });
    }
    gotoDetail(pokemon: Pokemon): void {
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}
