(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'poke-guide-web',
            template: `
              <h1>{{title}}</h1>
              <nav>
                  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                  <a routerLink="/pokemon" routerLinkActive="active">Pokémon</a>
              </nav>
              <router-outlet></router-outlet>
            `,
            styleUrls: ['app/app.component.css'],
            providers: [app.PokemonService]
        })
        .Class({
            constructor: function() {
                this.title = 'PokeGuide Web';
            }
        });
})(window.app || (window.app = {}));
