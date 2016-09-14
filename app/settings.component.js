(function(app) {
    app.SettingsComponent =
        ng.core.Component({
            selector: 'settings',
            templateUrl: ['app/html/settings.component.html'],
            styleUrls: ['app/css/settings.component.css']
        })
        .Class({
            constructor: [app.SettingsService, app.PokemonService, function(settingsService, pokemonService) {
                this.settingsService = settingsService;
                this.pokemonService = pokemonService;
                this.languages = [];
                this.selectedLanguage = null;
            }],
            ngOnInit: function() {
                this.loadLanguages();
                this.selectedLanguage = global.language;
            },
            loadLanguages: function() {
                this.pokemonService.getLanguages(global.language).then(languages => {
                    this.languages = languages;
                });
            },
            onChange: function() {
                var settings = {
                    language: this.selectedLanguage
                };
                this.saveSettings(settings);
            },
            saveSettings: function(settings) {
                var that = this;
                this.settingsService.saveSettings(settings, function() {
                    global.language = settings.language;
                    that.loadLanguages();
                    console.log('saved settings');
                });
            },
            goBack: function() {
                window.history.back();
            }
        });
})(window.app || (window.app = {}));
