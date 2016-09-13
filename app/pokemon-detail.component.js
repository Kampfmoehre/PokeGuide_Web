(function(app) {
    app.PokemonDetailComponent =
        ng.core.Component({
            selector: 'pokemon-detail',
            // inputs: ['pokemon'],
            templateUrl: 'app/html/pokemon-detail.component.html',
            styleUrls: ['app/css/pokemon-detail.component.css']
        })
        .Class({
            constructor: [app.PokemonService, ng.router.ActivatedRoute, function(service, route) {
                this.pokemon = null;
                this.pokemonService = service;
                this.route = route;
            }],
            ngOnInit: function() {
                this.route.params.forEach((params) => {
                    var id = +params['id'];

                    this.pokemonService.getPokemon(id)
                    .then(pokemon => this.pokemon = pokemon);
                })
            },
            goBack: function() {
                window.history.back();
            }
        });
})(window.app || (window.app = {}));
