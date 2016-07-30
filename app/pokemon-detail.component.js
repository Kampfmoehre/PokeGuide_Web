(function(app) {
    app.PokemonDetailComponent = ng.core.Component({
        selector: 'pokemon-detail',
        template: `
<div *ngIf="pokemon">
    <h2>{{pokemon.name}} details!</h2>
    <div><label>id: </label>{{pokemon.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="pokemon.name" placeholder="name">
    </div>
</div>
        `
    }).Class({
        constructor: function() {
            this.pokemon = null;
        }
    });
})(window.app || (window.app = {}));
