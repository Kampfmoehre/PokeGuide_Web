(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent, [
            app.RouterProviders, app.PokemonService
        ]).catch(err => console.log(err));
    });
})(window.app || (window.app = {}));
