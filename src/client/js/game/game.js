var game = {
    data: {
        score: 0
    },

    width: 1152,
    height: 720,

    'onload': function () {
        if (!me.video.init("body", me.video.CANVAS, this.width, this.height, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        me.audio.init("mp3,ogg");
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(game.resources);
        me.state.change(me.state.LOADING);

        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
            window.onReady(function () {
                me.plugin.register.defer(this, me.debug.Panel, "debug");
            });
        }
    },

    'loaded': function () {
        //me.state.MENU_NEWGAME = me.state.USER;
        //me.state.MENU_JOINGAME = me.state.USER + 1;
        //me.state.MENU_INSTRUCTIONS = me.state.USER + 2;

        // add screens
        //me.state.set(me.state.MENU, new game.gui.screen.TitleScreen());
        //me.state.set(me.state.MENU_NEWGAME, new game.gui.screen.NewGameScreen());
        //me.state.set(me.state.MENU_JOINGAME, new game.gui.screen.JoinGameScreen());
        //me.state.set(me.state.MENU_INSTRUCTIONS, new game.gui.screen.InstructionsScreen());
        me.state.set(me.state.PLAY, new game.gui.screen.PlayScreen());
        //me.state.set(me.state.GAME_END, new game.gui.screen.WinScreen());
        //me.state.set(me.state.GAMEOVER, new game.gui.screen.LooseScreen());

        //Load gui texture file
        //game.guiTexture = new me.TextureAtlas(me.loader.getJSON("gui"), me.loader.getImage("gui"));
        //game.gui.font = new me.BitmapFont("32x32_font", 32);
        game.texture = new me.TextureAtlas(me.loader.getJSON("simon"), me.loader.getImage("simon"));

        me.pool.register("player1", game.entity.mob.Player);

        // in melonJS 1.0.0, viewport size is set to Infinity by default
        me.game.viewport.setBounds(0, 0, this.width, this.height);
        me.state.change(me.state.PLAY);
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
