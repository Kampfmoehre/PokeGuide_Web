(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule, app.routing, ng.forms.FormsModule],
            declarations: [app.AppComponent, app.PokemonListComponent, app.PokemonDetailComponent, app.DashboardComponent],
            providers: [app.PokemonService],
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
