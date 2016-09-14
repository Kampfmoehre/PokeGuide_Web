var fs = require('fs');
var node_path = require('path');

(function(app) {
    app.SettingsService =
        // ng.core.Injectable().Class({
        ng.core.Class({
            constructor: function() {},
            saveSettings: function(settings, callback) {
                var filePath = this.getSettingsFilePath();
                fs.writeFile(filePath, JSON.stringify(settings, null, 4), function(err) {
                    if(err) {
                        console.info("Could not save settings");
                        console.error(err);
                        return;
                    } else if(callback) {
                        callback();
                    }
                });
            },
            loadSettings: function(callback) {
                var filePath = this.getSettingsFilePath();
                fs.stat(filePath, function(error, stats) {

                    var settings = {
                        language: 6
                    };
                    if(error)
                        console.error(error);
                    if(error || !stats.isFile())
                        callback(settings);

                    fs.readFile(filePath, function(error, data) {
                        if(error)
                            console.error(error);
                        else
                            settings = JSON.parse(data);

                        callback(settings);
                    });
                });
            },
            getSettingsFilePath() {
                return node_path.join(nw.App.dataPath, 'settings.json');
            }
        });
})(window.app || (window.app = {}));
