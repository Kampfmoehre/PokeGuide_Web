import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PokemonService } from './pokemon.service';

@Component({
    selector: 'poke-guide-web',
    // templateUrl: 'app/app.component.html',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/pokemon']" routerLinkActive="active">Pokemon</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [PokemonService]
})

export class AppComponent {
    title: 'PokeGuide';
}
