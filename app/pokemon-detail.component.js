(function(app) {
    app.PokemonDetailComponent = ng.core.Component({
        selector: 'pokemon-detail',
        templateUrl: 'app/pokemon-detail.component.html'
    }).Class({
        constructor: function() {
            this.pokemon = {id: 1, name: 'blub', type: 'blubber'}
        }
    });
})(window.app || (window.app = {}));
