(function(app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'poke-guide-web',
            template: `
                <a (click)="gotoSettings()" Class="button pull-right">Einstellungen</a>
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a routerLink="/pokemon" routerLinkActive="active">Pokémon</a>
                </nav>
                <router-outlet></router-outlet>
            `,
            styleUrls: ['app/css/app.component.css'],
            providers: [app.PokemonService, app.SettingsService]
        })
        .Class({
            constructor: [ng.router.Router, app.SettingsService, function(router, settingsService) {
                this.title = 'PokeGuide Web';
                this.router = router;
                this.settingsService = settingsService;
            }],
            ngOnInit: function() {
                this.settingsService.loadSettings(function(settings) {
                    global.language = settings.language;
                });
            },
            gotoSettings: function() {
                this.router.navigate(['/settings']);
            }
        });
})(window.app || (window.app = {}));
