(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule, app.routing],
            declarations: [
                app.AppComponent,
                app.DashboardComponent,
                app.PokemonListComponent,
                app.PokemonDetailComponent,
                app.PokemonSearchComponent,
                app.SettingsComponent
            ],
            providers: [app.PokemonService, app.SettingsService],
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
