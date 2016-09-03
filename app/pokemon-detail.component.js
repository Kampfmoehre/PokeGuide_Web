(function(app) {
    app.PokemonDetailComponent =
        ng.core.Component({
            selector: 'pokemon-detail',
            inputs: ['pokemon'],
            template: `
            <div *ngIf="pokemon">
                <h2>{{pokemon.name}} details</h2>
                <div><label>id: </label>{{pokemon.id}}</div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="pokemon.name" placeholder="Name">
                </div>
            </div>
            `
        })
        .Class({
            constructor: function() {
                // this.pokemon = null;
                // ng.core.Input(this.pokemon, this);
            },
            ngOnInit: function() {
                console.log(this.pokemon);
            }
        });
})(window.app || (window.app = {}));
