(function(app) {
    app.PokemonListComponent = ng.core.Component({
        selector: 'pokemon-list',
        template: 'app/pokemon-list.component.html',
        styleUrls: ['app/pokemon-list.component.css']
    }).Class({
        constructor: function() {}
    });
})(window.app || (window.app = {}));
