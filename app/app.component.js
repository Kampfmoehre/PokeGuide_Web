(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'poke-guide-web',
            template: `
              <h1>{{title}}</h1>
            `,
            providers: [app.PokemonService]
        })
        .Class({
            constructor: function() {
                this.title = 'PokeGuide Web';
            }
        });
})(window.app || (window.app = {}));
