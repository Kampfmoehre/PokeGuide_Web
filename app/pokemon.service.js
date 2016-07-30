(function(app) {
    app.PokemonService = function() {
        this.get = function() {
            return [
                { id: 1, name: 'Bisasam' },
                { id: 4, name: 'Glumanda' },
                { id: 7, name: 'Schiggy' },
                { id: 10, name: 'Raupy' },
                { id: 13, name: 'Hornliu' },
                { id: 16, name: 'Taubsi' },
                { id: 19, name: 'Rattfratz' },
                { id: 21, name: 'Habitak' },
                { id: 23, name: 'Rettan' },
                { id: 25, name: 'Pikachu' }
            ];
        }
    }
})(window.app || (window.app = {}));
