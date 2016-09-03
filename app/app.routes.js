(function(app) {

    const routes = ng.router.RouterModule.forRoot([
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: app.DashboardComponent },
        { path: 'pokemon', component: app.PokemonListComponent },
        { path: 'pokemon/:id', component: app.PokemonDetailComponent }
    ]);
    app.routing = ng.router.RouterModule.forRoot(routes);
})(window.app || (window.app = {}));
