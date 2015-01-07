/**
 * Client-side websocket handling
 */
game.connection = {
    socket: undefined,
    remote: {},
    onHandlers: {},

    init: function() {
        var WebSocketClient = window.WebSocket || window.MozWebSocket;

        if(WebSocketClient) {
            this.socket = new WebSocketClient(location.origin.replace(/^http/, 'ws'), 'echo-protocol');

            var con = this;
            this.socket.onopen = function() {
                con.on("warn", function(object) {
                    console.log("[WARN] " + object.msg);
                });
                con.on("action", function(object) {
                    this.remote = object;
                });
                con.on("confirm connect", function(object) {
                    console.log('Socket connection opened [id:' + object.id + ']');
                });
            };
            //this.socket.onerror; //Stuff to do when error occurs

            var onHandlers = this.onHandlers;
            this.socket.onmessage = function(message) {
                var json;

                try {
                    json = JSON.parse(message.data);
                }
                catch(e) {/*Error parsing message JSON data (causes: data not string or JSON malformed)*/}

                if(json) {
                    if(onHandlers[json.type] != undefined)
                        onHandlers[json.type](json.content);
                }
            };

            this.socket.onclose = function(e) {
                console.log("Socket connection closed");
            };

            return true;
        }
        else return false;
    },

    on: function(type, callback) {
        this.onHandlers[type] = callback;
    },

    off: function(type) {
        if(this.onHandlers[type] != undefined)
            delete this.onHandlers[type];
    },

    sendMsg: function(type, object) {
        if(this.isOpened() && this.socket != undefined) {
            var message = JSON.stringify({type: type, content: object});
            this.socket.send(message);
            console.log(message);
            return true;
        }
        else return false;
    },

    isClosed: function() {
        return this.socket == undefined || this.socket.readyState === this.socket.CLOSED || this.socket.readyState === this.socket.CLOSING;
    },

    isOpened: function() {
        return this.socket != undefined && this.socket.readyState === this.socket.OPEN;
    }
};
