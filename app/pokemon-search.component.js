var rx = require('rxjs');

(function(app) {
    app.PokemonSearchComponent = ng.core
        .Component({
            selector: 'pokemon-search',
            templateUrl: 'app/pokemon-search.component.html',
            styleUrls: ['app/pokemon-search.component.css']
        })
        .Class({
            constructor: [app.PokemonService, ng.router.Router, function(pokemonService, router) {
                this.pokemonService = pokemonService;
                this.router = router;
                this.searchTerms = new rx.Subject();
                this.loading = false;
                var that = this;
                this.searchTerms.subscribe(
                    function(x) {
                        console.log(x);
                    },
                    function(err) {
                        console.error(err);
                    },
                    function() {
                        that.loading = false;
                    }
                );
                // this.pokemonList = rx.Observable.of([]);
            }],
            search: function(term) {
                this.searchTerms.next(term);
            },
            ngOnInit: function() {
                var that = this;
                that.pokemonList = that.searchTerms
                    .debounceTime(300)
                    .distinctUntilChanged()
                    .switchMap(term => {
                        that.loading = true;
                        return term ? that.pokemonService.search(term) : rx.Observable.of([]);
                    })
                    .catch(error => {
                        console.log(error);
                        return rx.Observable.of([]);
                    });
            },
            gotoDetail: function(pokemon) {
                var link = ['/pokemon', pokemon.id];
                this.router.navigate(link);
            }
        });
})(window.app || (window.app = {}));
