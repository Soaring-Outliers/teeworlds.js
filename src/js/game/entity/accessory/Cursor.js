game.entity.accessory.Cursor = me.Renderable.extend({

    init: function (x, y) {
        this.sprite = game.texture.createSpriteFromName('gun_visor');

        // call the parent constructor
        this._super(me.Renderable, "init", [x, y, 0, 0]);

        // screenPos is the position of the cursor on the melonjs screen (canvas)
        this.screenPos = new me.Vector2d(x, y);
        // center describes the real position of the cursor, in the melonjs world
        this.sprite.center = this.screenPos; // Define with the screenPos, but changed at first draw

        // update screenPos at each MOUSEMOVE event
        var _this = this;
        me.event.subscribe(me.event.MOUSEMOVE, function (e) {
            _this.screenPos.set(e.gameScreenX, e.gameScreenY);
        });

        // Always launch update, because the position of cursor has to be updated,
        // as it is not updated by a move or a game interaction, but the mousemove event
        // and the viewport moves.
        this.alwaysUpdate = true;
    },

    getCenter: function () {
        return this.sprite.center;
    },

    update: function () {
        // Force draw whatever happens
        this.inViewport = true;
        return true;
    },

    draw: function (renderer) {
        // Update the position of cursor in world to follow moves of viewport
        this.sprite.center = me.game.viewport.localToWorld(this.screenPos.x, this.screenPos.y);
        this.sprite.pos.x = this.sprite.center.x - Math.floor(this.sprite.width / 2);
        this.sprite.pos.y = this.sprite.center.y - Math.floor(this.sprite.height / 2);
        return this.sprite.draw(renderer);
    }

});