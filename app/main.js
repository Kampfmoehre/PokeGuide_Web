(function(app) {
    try {
        document.addEventListener('DOMContentLoaded', function() {
            ng.platformBrowserDynamic
                .platformBrowserDynamic()
                .bootstrapModule(app.AppModule);
        });
    } catch (e) {
        console.error(e);
        debugger;
    }

})(window.app || (window.app = {}));
