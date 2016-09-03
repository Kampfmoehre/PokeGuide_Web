(function(app) {
    app.PokemonListComponent =
        ng.core.Component({
            selector: 'pokemon-list',
            template: `
              <h2>Meine Pokémon</h2>
              <ul class="pokemonList">
                  <li *ngFor="let pokemon of pokemonList"
                      (click)="onSelect(pokemon)"
                      [class.selected]="pokemon == selectedPokemon">
                      <span class="badge">{{pokemon.id}}</span> {{pokemon.name}}
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
            `]
        })
        .Class({
            constructor: [app.PokemonService, function(service) {
                this.selectedPokemon = null;
                this.pokemonService = service;
            }],
            ngOnInit: function() {
                this.getPokemonList();
            },
            onSelect: function(pokemon) {
                this.selectedPokemon = pokemon;
            },
            getPokemonList: function() {
                this.pokemonService.getPokemonList()
                    .then(pokemonList => this.pokemonList = pokemonList);
            }
        });
})(window.app || (window.app = {}));
