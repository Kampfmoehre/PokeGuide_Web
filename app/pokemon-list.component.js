(function(app) {
    app.PokemonListComponent = ng.core.Component({
        selector: 'pokemon-list',
        template: 'app/pokemon-list.component.html',
        styleUrls: ['app/pokemon-list.component.css']
    }).Class({
        constructor: [app.PokemonService, ng.router.Router,
            function(service, router) {
                this.selectedPokemon = null;
                this.pokemonService = service;
                this.router = router;
            }
        ],
        onSelect: function(pokemon) {
            this.selectedPokemon = pokemon;
        },
        getPokemonList: function() {
            this.pokemonService.getPokemonList().then(pokemonList =>
                this.pokemonList = pokemonList);
        },
        ngOnInit: function() {
            this.getPokemonList();
        },
        gotoDetail: function() {
            this.router.navigate(['/detail', this.selectedPokemon.id]);
        }
    });
})(window.app || (window.app = {}));
