import { Component } from '@angular/core';

@Component({
    selector: 'poke-guide-web',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/pokemonlist" routerLinkActive="active">Pokémon</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    providers: []

})
export class AppComponent {
    title = 'PokeGuide Web';
}
