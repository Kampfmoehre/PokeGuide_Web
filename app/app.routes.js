(function(app) {
    app.routing = ng.router.RouterModule.forRoot([
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: app.DashboardComponent },
        { path: 'pokemon', component: app.PokemonListComponent },
        { path: 'pokemon/:id', component: app.PokemonDetailComponent }
    ]);
})(window.app || (window.app = {}));
