import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
export class PokemonSearchComponent implements OnInit, OnDestroy {
    pokemonList: Observable<Pokemon[]>;
    private searchTerms = new Subject<string>();
    constructor( private pokemonService: PokemonService, private router: Router, private ref: ChangeDetectorRef) {
        ref.detach();
    }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.pokemonList = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.pokemonService.search(term) : Observable.of<Pokemon[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.error(error);
                return Observable.of<Pokemon[]>([]);
            });

        setInterval(this.changeDetectionHack, 500, this);
    }
    ngOnDestroy(): void { window.clearInterval(this.changeDetectionHack, this);
    }
    gotoDetail(pokemon: Pokemon): void {
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
    // So for some reason change detection on observable is not working in nw.js context
    // until we find a real solution this is a nasty hack around the problem
    changeDetectionHack(context: any): void {
        if (context.ref.destroyed) {
            // clearInterval(this.changeDetectionHack);
            return;
        }
        context.ref.detectChanges();
    }
}
