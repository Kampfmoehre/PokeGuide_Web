(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent, [
            app.RouterProviders, app.PokemonService, ng.router_deprecated.ROUTER_PROVIDERS
        ]).catch(err => console.log(err));
    });
})(window.app || (window.app = {}));
