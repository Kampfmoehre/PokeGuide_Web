(function(app) {
    app.DashboardComponent = ng.core.Component({
        selector: 'dashboard',
        templateUrl: 'app/dashboard.component.html',
    }).Class({
        constructor: [app.PokemonService, ng.router.Router,
            function(service, router) {
                this.selectedPokemon = null;
                this.pokemonService = service;
                this._router = router;
                this.pokemonList = [];
            }
        ],
        getPokemonList: function() {
            this.pokemonService.getPokemonList().then(pokemonList => this.pokemonList = pokemonList.slice(1, 5));
        },
        ngOnInit: function() {
            this.getPokemonList();
        },
        gotoDetail: function(pokemon) {
            var link = ['/pokemon', pokemon.id];
            this._router.navigate(link);
        }
    })
})(window.app || (window.app = {}));
