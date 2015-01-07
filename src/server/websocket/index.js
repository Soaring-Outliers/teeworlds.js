
//Websocket server impl
module.exports = {
    createServer: function (httpServer) {

        //Authorizes or not the connections based on origin
        var authorizedOrigin = function (origin) {
            return true;
        };

        // Init WebSocket server
        var ws = new (require('websocket').server)({
            httpServer: httpServer,
            autoAcceptConnections: false
        });

        var playerGame = require("./player-game"),
            GameList = playerGame.GameList,
            PlayerList = playerGame.PlayerList;

        // Global list of all player connected
        var players = new PlayerList();

        // Global list of all game created and active
        var games = new GameList();

        // New connection to WebSocket server
        ws.on("request", function (con) {
            // Filter connection
            if (!authorizedOrigin(con.origin)) {
                request.reject();
                return;
            }

            // Accept connection & Add player to global list
            var player = players.add(con.accept('echo-protocol', con.origin));

            // Create game
            player.onMsg('create game', function (object) {
                var ok;
                if (ok = (games.get(object.name) === undefined)) {
                    player.joinGame(games.add(object.name));
                }
                player.sendMsg('confirm game create', {"ok": ok});

            });

            // Join game
            player.onMsg('join game', function (object) {
                var ok, game;
                if (ok = ((game = games.get(object.name)) != undefined))
                    player.joinGame(game);

                player.sendMsg('confirm game join', {"ok": ok});
            });

            // Leave game
            player.onMsg('leave game', function () {
                player.leaveGame();
            });

            // Subscribe list game
            player.onMsg('subscribe list game', function () {
                games.addObserver(player);
            });

            // Un-subscribe list game
            player.onMsg('unsubscribe list game', function () {
                games.removeObserver(player);
            });

            /*// Player action
             player.onMsg('action', function(object) {
             if(connection.game) {
             var recipient = undefined;
             if(connection.game.player1 == connection.ID) {
             recipient = connection.game.player2;
             }
             else if(connection.game.player2 == connection.ID) {
             recipient = connection.game.player1;
             }

             if(recipient != undefined)
             connections[recipient].sendMsg(object, 'action');
             else
             connection.sendMsg({}, "error player disconnected");
             }
             });*/

        });

        return ws;
    }
};
