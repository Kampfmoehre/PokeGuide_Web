(function(app) {
    app.RouterProviders = ng.router.provideRouter([
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: app.DashboardComponent, useAsDefault: true },
        { path: 'pokemonlist', component: app.PokemonListComponent },
        { path: 'pokemon/:id', component: app.PokemonDetailComponent }
    ]);
})(window.app || (window.app = {}));
