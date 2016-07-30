(function(app) {
    app.AppComponent = ng.core.Component({
        selector: 'pokeguide',
        template:`
<h1>{{title}}</h1>
<h2>Pokemon:</h2>
<ul class="pokemonList">
    <li *ngFor="let pokemon of pokemonList" (click)="onSelect(pokemon)" [class.selected]="pokemon === selectedPokemon">
        <span class="badge">{{pokemon.id}}</span>{{pokemon.name}}
    </li>
</ul>

<pokemon-detail [pokemon]="selectedPokemon"></pokemon-detail>
        `,
        styles: [`
.selected {
    background-color: #CFD8DC !important;
    color: white;
}
.pokemonList {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
.pokemonList li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
}
.pokemonList li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
}
.pokemonList li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
}
.pokemonList .text {
    position: relative;
    top: -3px;
}
.pokemonList .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
}
        `],
        directives: [app.PokemonDetailComponent]
    }).Class({
        constructor: function() {
            this.title = 'PokeGuide Web';
            this.selectedPokemon = null;
            this.pokemonList = [
                { id: 1, name: 'Bisasam' },
                { id: 4, name: 'Glumanda' },
                { id: 7, name: 'Schiggy' },
                { id: 10, name: 'Raupy' },
                { id: 13, name: 'Hornliu' },
                { id: 16, name: 'Taubsi' },
                { id: 19, name: 'Rattfratz' },
                { id: 21, name: 'Habitak' },
                { id: 23, name: 'Rettan' },
                { id: 25, name: 'Pikachu' }
            ];
        },
        onSelect: function(pokemon) {
            this.selectedPokemon = pokemon;
        }
    });
})(window.app || (window.app = {}));
