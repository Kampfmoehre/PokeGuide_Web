var rx = require('rxjs');

(function(app) {
    app.PokemonSearchComponent = ng.core
        .Component({
            selector: 'pokemon-search',
            templateUrl: 'app/pokemon-search.component.html',
            styleUrls: ['app/pokemon-search.component.css']
        })
        .Class({
            constructor: [app.PokemonService, ng.router.Router, ng.core.ChangeDetectorRef, function(pokemonService, router, changeDetector) {
                // *******************************************************************
                // ToDo: find out, why angular updating does not work here
                // and remove this ugly workaround
                // this.changeDetector = changeDetector;
                changeDetector.detach();
                setInterval(() => {
                    changeDetector.detectChanges();
                }, 500);
                // *******************************************************************

                this.pokemonService = pokemonService;
                this.router = router;
                this.searchTerms = new rx.Subject();
            }],
            search: function(term) {
                this.searchTerms.next(term);
            },
            ngOnInit: function() {
                var that = this;
                this.pokemonList = this.searchTerms
                    .debounceTime(300)
                    .distinctUntilChanged()
                    .switchMap(term => {
                        return term ? that.pokemonService.search(term) : rx.Observable.of([]);
                    })
                    .catch(error => {
                        console.error(error);
                        return rx.Observable.of([]);
                    });

            },
            ngOnChanges: function(changes) {
                console.log(changes);
            },
            gotoDetail: function(pokemon) {
                var link = ['/pokemon', pokemon.id];
                this.router.navigate(link);
            }
        });
})(window.app || (window.app = {}));
