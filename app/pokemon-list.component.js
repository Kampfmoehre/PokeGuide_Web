(function(app) {
    app.PokemonListComponent =
        ng.core.Component({
            selector: 'pokemon-list',
            templateUrl: 'app/html/pokemon-list.component.html',
            styleUrls: ['app/css/pokemon-list.component.css']
        })
        .Class({
            constructor: [app.PokemonService, ng.router.Router, function(service, router) {
                this.selectedPokemon = null;
                this.pokemonService = service;
                this.router = router;
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
            },
            gotoDetail: function() {
                this.router.navigate(['/pokemon', this.selectedPokemon.id]);
            }
        });
})(window.app || (window.app = {}));
