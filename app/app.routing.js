(function(app) {
    var routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: app.DashboardComponent
    }, {
        path: 'pokemon',
        component: app.PokemonListComponent
    }, {
        path: 'pokemon/:id',
        component: app.PokemonDetailComponent
    }, {
        path: 'settings',
        component: app.SettingsComponent
    }];

    app.routing = ng.router.RouterModule.forRoot(routes);
})(window.app || (window.app = {}));
