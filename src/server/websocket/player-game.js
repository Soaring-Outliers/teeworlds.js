'use strict';

require('jay-inheritance');
var Map = require("collection").Map;

/**
 * @class
 * @constructor
 */
var GameList = Object.extend({

    /**
     * @ignore
     */
    init: function () {
        /**
         * @public
         * @type {Map}
         */
        this.games = new Map();

        /**
         * @public
         * @type {Map}
         */
        this.callbacks = new Map();
    },

    /**
     * @public
     * @function
     * @param {String} name
     * @returns {Game}
     */
    get: function (name) {
        return this.games.get(name);
    },

    /**
     * @public
     * @function
     * @param {String} name
     * @return {Game}
     */
    add: function (name) {
        var game = new Game(name, this);
        this.games.set(name, game);
        this.callbacks.each(function (callbackEntry) {
            callbackEntry.value()();
        });

        console.log('[GAME CREATED] name: ' + game.name);
        return game;
    },

    /**
     * @public
     * @function
     * @param {Game} game
     */
    remove: function (game) {
        if (this.games.has(game.name)) {
            game.destroy();
            this.games.remove(game.name);
            this.callbacks.each(function (callbackEntry) {
                callbackEntry.value()();
            });

            console.log('[GAME DELETED] name: ' + game.name);
        }
    },

    /**
     * @public
     * @function
     * @param {Player} observer
     */
    addObserver: function (observer) {
        var games = this.games;
        var callback = function () {
            observer.sendMsg('game list', games.keys());
        };
        this.callbacks.set(observer, callback);
        callback();

        console.log("[SUBSCRIPTION] player: " + observer.ID);
    },

    /**
     * @public
     * @function
     * @param {Player} observer
     */
    removeObserver: function (observer) {
        this.callbacks.remove(observer);

        console.log("[UN-SUBSCRIPTION] player: " + observer.ID);
    }

});

/**
 * @class
 * @constructor
 * @param {String} name
 * @param {GameList} gameList
 */
var Game = Object.extend({

    /**
     * @ignore
     */
    init: function (name, gameList) {
        /**
         * @public
         * @type {GameList}
         */
        this.gameList = gameList;

        /**
         * @public
         * @type {Player}
         */
        this.master = null;

        /**
         * @public
         * @type {Array}
         */
        this.players = [];

        /**
         * @public
         * @type {String}
         */
        this.name = name;
    },

    /**
     * @public
     * @function
     * @param {Player} player
     */
    addPlayer: function (player) {
        if (this.master === null)
            this.master = player;

        this.players.forEach(function (p) {
            p.sendMsg('player joined game', {id: player.ID});
        });
        this.players.push(player);
        console.log("[GAME JOINED] game: " + this.name + ", " + (this.master === player ? "master" : "player") + ": " + player.ID);
    },

    /**
     * @public
     * @function
     * @param {Player} player
     */
    removePlayer: function (player) {
        console.log("[GAME LEAVED] game: " + this.name + ", player: " + player.ID);

        if (player === this.master) {
            this.destroy();
            this.gameList.remove(this);
        } else {
            this.players.splice(this.players.indexOf(player), 1);
            this.players.forEach(function (p) {
                p.sendMsg('player left game', {id: player.ID});
            });
        }
    },

    /**
     * @public
     * @function
     */
    destroy: function () {
        this.players.forEach(function (p) {
            p.sendMsg('game deleted');
        });
    }

});


/**
 * @class
 * @constructor
 */
var PlayerList = Object.extend({

    /**
     * @ignore
     */
    init: function () {
        /**
         * @public
         * @type {Map}
         */
        this.players = new Map();

        /**
         * @public
         * @type {Number}
         */
        this.lastConnectionID = 0;
    },

    /**
     * @public
     * @function
     * @param connection
     * @return {Player}
     */
    add: function (connection) {
        var ID = this.lastConnectionID++;

        var player = new Player(connection, ID);
        player.sendMsg('confirm connect', {id: player.ID});
        this.players.set(ID, player);

        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' [' + player.ID + '] connected.');

        // On player connection close
        var players = this.players;
        connection.on('close', function (reasonCode, description) {
            player.leaveGame();
            players.remove(player.ID);
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' [' + player.ID + '] disconnected.');
        });

        return player;
    }

});

/**
 * @class
 * @constructor
 * @param {*} connection
 * @param {Number} id
 */
var Player = Object.extend({
    /**
     * @ignore
     */
    init: function (connection, id) {
        /**
         * @public
         * @type {Game}
         */
        this.game = null;

        /**
         * @public
         * @type {Map}
         */
        this.onHandlers = new Map();

        /**
         * @public
         * @type {*}
         */
        this.connection = connection;

        /**
         * @public
         * @type {Number}
         */
        this.ID = id;

        var onHandlers = this.onHandlers;
        this.connection.on('message', function (message) {
            if (message.type === 'utf8') {
                var json;

                try {
                    json = JSON.parse(message.utf8Data);
                } catch (e) {
                }

                if (json && onHandlers.get(json.type) != undefined)
                    onHandlers.get(json.type)(json.content);
            }
        });
    },

    /**
     * @public
     * @function
     * @param {Game} g
     */
    joinGame: function (g) {
        this.game = g;
        game.addPlayer(this);
    },

    /**
     * @public
     * @function
     */
    leaveGame: function () {
        if (this.game != null) {
            game.removePlayer(this);
            this.game = null;
        }
    },

    /**
     * @public
     * @function
     * @param {String} type
     * @param object
     */
    sendMsg: function (type, object) {
        this.connection.send(
            JSON.stringify({
                type: type,
                content: object
            })
        );
    },

    /**
     * @public
     * @function
     * @param {String} type
     * @param callback
     */
    onMsg: function (type, callback) {
        this.onHandlers.set(type, callback);
    },

    /**
     * @public
     * @function
     * @param {String} type
     */
    offMsg: function (type) {
        if (this.onHandlers.get(type) != undefined)
            this.onHandlers.remove(type);
    }

});

module.exports.Game = Game;
module.exports.GameList = GameList;

module.exports.Player = Player;
module.exports.PlayerList = PlayerList;
