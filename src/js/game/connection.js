/**
 * @depend game.js 
 */
game.connection = {
    init: function() {
        var peerJSAPIKey = "@@peerJSAPIKey";
        var mainConnection = new Peer({key: peerJSAPIKey, secure: true});
        
        mainConnection.on('open', function(id) {
            console.log(id);
        });
    }
};
