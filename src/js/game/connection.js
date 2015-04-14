/**
 * @depend game.js 
 */
game.connection = {
    bootstrapPeers: [],
    init: function() {
        var peerJSAPIKey = "@@peerJSAPIKey";
        var mainConnection = new Peer({key: peerJSAPIKey});
        
        var bootstrapPeers = this.bootstrapPeers;
        mainConnection.on('open', function() {
            function createBootStrapPeer(id) {
                var peer = new Peer({'id': id, key: peerJSAPIKey});
                peer.on('open', function(){
                    bootstrapPeers.push(peer);
                });
            }
            
            function addBootStrapPeer(id) {
                var peer = mainConnection.connect(id);
                peer.on('error', function(err) {
                  createBootStrapPeer(id);
                });
                peer.on('open', function() {
                    bootstrapPeers.push(peer);
                    if(id < 4) addBootStrapPeer(id++);
                });
            }
            addBootStrapPeer(0);
        });
    }
};
