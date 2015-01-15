game.entity.accessory.Cursor = me.Sprite.extend({

	init: function(x, y) {

		// call the parent constructor
		this._super(me.Sprite, "init", [x, y, me.loader.getImage("sun"), 256, 256]);

		// screenPos is the position of the cursor on the melonjs screen (canvas)
		this.screenPos = new me.Vector2d(x, y);
		// center describes the real position of the cursor, in the maleonjs world
		this.center = this.screenPos; // Define with the screenPos, but changed at first draw
		

		// update screenPos at each MOUSEMOVE event
		var _this = this;
		me.event.subscribe(me.event.MOUSEMOVE, function(e) {
			_this.screenPos.set(e.gameScreenX, e.gameScreenY);
		});

		// Always launch update, because the position of cursor has to be updated,
		// as it is not updated by a move or a game interaction, but the mousemove event
		// and the viewport moves.
		this.alwaysUpdate = true;
	},

	update: function() {
		// Force draw whatever happens
		this.inViewport = true;
		return true;
	},

	draw: function(renderer) {
		// Update the position of cursor in world to follow moves of viewport
		this.center = me.game.viewport.localToWorld(this.screenPos.x, this.screenPos.y);
		this.pos.x = this.center.x - Math.floor(this.width / 2);
		this.pos.y = this.center.y - Math.floor(this.height / 2);
		return this._super(me.Sprite, "draw", [renderer]);
	}

});