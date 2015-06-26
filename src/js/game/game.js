var game = {

    width: 1280,
    height: 720,

    'loaded': function () {
        me.state.set(me.state.PLAY, new game.gui.screen.PlayScreen());
        game.texture = new me.video.renderer.Texture(me.loader.getJSON("game"), me.loader.getImage("game"));

        me.pool.register("player1", game.entity.mob.Player);
        
        //me.game.viewport.setBounds(0, 0, this.width, this.height);
        me.state.change(me.state.PLAY);
        game.connection.init();
    },

    entity: {accessory: {}, mob: {}},
    gui: {
        component: {},
        screen: {
            screens: [],
            add: function (screen) {
                if (screen instanceof me.ScreenObject) {
                    var s = new screen();
                    this.screens.push(s);
                    return s
                }
                return false;
            }
        },
        images: {},
        newCanvasRenderer: function (height, width) {
            return me.CanvasRenderer.init(
                me.video.createCanvas(height, width, false),
                height,
                width
            );
        },
        getImageFromTexture: function (regionName) {
            if (this.images[regionName])
                return this.images[regionName];
            else {
                var region = game.guiTexture.getRegion(regionName);
                if (region) {
                    var sprite = new me.Sprite(0, 0, game.guiTexture.getTexture(), region.width, region.height);
                    sprite.offset.setV(region.offset);

                    return this.getImageFromSprite(regionName, sprite);
                }
                return undefined;
            }
        },
        getImageFromSprite: function (regionName, sprite) {
            if (this.images[regionName])
                return this.images[regionName];
            else {
                if (sprite) {
                    var canvasRenderer = this.newCanvasRenderer(sprite.height, sprite.width);

                    sprite.draw(canvasRenderer);

                    return this.images[regionName] = canvasRenderer.getCanvas();
                }
                return undefined;
            }
        }
    },
    screens: {}
};

window.onReady(function() {
    var ok = me.video.init(
        game.width*2.1, 
        game.height*2.1, 
        {
            renderer: me.video.CANVAS, 
            antiAlias: true, 
            scale : 'auto', 
            scaleMethod: "fill-max"
            
        }
    );
    if (!ok) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }
    
    me.audio.init("mp3,ogg");
    me.loader.onload = game.loaded.bind(game);
    me.loader.preload(game.resources);
    me.state.change(me.state.LOADING);
    
    // add "#debug" to the URL to enable the debug Panel
    if (document.location.hash === "#debug") {
        me.plugin.register.defer(game, me.debug.Panel, "debug");
    }
});