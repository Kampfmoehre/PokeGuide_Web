(function(app) {
    app.DashboardComponent =
        ng.core.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        })
        .Class({
            constructor: [app.PokemonService, ng.router.Router, function(service, router) {
                this.pokemonList = [];
                this.pokemonService = service;
                this.router = router;
            }],
            ngOnInit: function() {
                this.pokemonService.getPokemonList()
                    .then(pokemonList => this.pokemonList = pokemonList.slice(1, 5));
            },
            gotoDetail: function(pokemon) {
                var link = ['/pokemon', pokemon.id];
                this.router.navigate(link);
            }
        });
})(window.app || (window.app = {}));
