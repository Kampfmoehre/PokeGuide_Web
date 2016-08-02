(function(app) {
    app.AppComponent = ng.core.Component({
        selector: 'poke-guide-web',
        template: `
<h1>{{title}}</h1>
<nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/pokemonlist']" routerLinkActive="active">Pokemon</a>
</nav>
<router-outlet></router-outlet>
        `,
        directives: [ng.router.ROUTER_DIRECTIVES],
        providers: [ng.router_deprecated.ROUTER_PROVIDERS]
    }).Class({
        constructor: function() {
            this.title = 'PokeGuide';
        }
    });
})(window.app || (window.app = {}));
