(function(app) {
    app.PokemonDetailComponent = ng.core.Component({
        selector: 'pokemon-detail',
        templateUrl: 'app/pokemon-detail.component.html'
    }).Class({
        constructor: [app.PokemonService, ng.router.ActivatedRoute,
            function(service, route) {
                this.pokemon = null;
                this.sub = null;
                this.pokemonService = service;
                this._route = route;
            }
        ],
        ngOnInit: function() {
            this.sub = this._route.params.subscribe(params => {
                var id = +params['id'];
                this.pokemonService.getPokemon(id).then(pokemon => this.pokemon = pokemon);
            });
        },
        ngOnDestroy: function() {
            this.sub.unsubscribe();
        },
        goBack: function() {
            window.history.back();
        }
    });
})(window.app || (window.app = {}));
