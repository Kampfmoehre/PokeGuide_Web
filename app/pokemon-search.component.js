var rx = require('rxjs');

(function(app) {
    app.PokemonSearchComponent = ng.core
        .Component({
            selector: 'pokemon-search',
            templateUrl: 'app/html/pokemon-search.component.html',
            styleUrls: ['app/css/pokemon-search.component.css']
        })
        .Class({
            constructor: [app.PokemonService, ng.router.Router, ng.core.ChangeDetectorRef, function(pokemonService, router, changeDetector) {
                this.changeDetector = changeDetector;
                this.destroyed = false;

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

                // *******************************************************************
                // ToDo: find out, why angular updating does not work here
                // and remove this ugly workaround
                that.changeDetector.detach();
                setInterval(() => {
                    if (!that.destroyed)
                    that.changeDetector.detectChanges();
                }, 500);
                // *******************************************************************
            },
            ngOnChanges: function(changes) {
                console.log(changes);
            },
            gotoDetail: function(pokemon) {
                var link = ['/pokemon', pokemon.id];
                this.router.navigate(link);
            },
            ngOnDestroy: function() {
                this.destroyed = true;
            }
        });
})(window.app || (window.app = {}));
