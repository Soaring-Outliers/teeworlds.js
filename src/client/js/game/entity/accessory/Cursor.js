game.entity.accessory.Cursor = me.Sprite.extend({

	init: function(x, y) {

		// call the parent constructor
		this._super(me.Sprite, "init", [x, y, me.loader.getImage("sun"), 256, 256]);

		this.screenPos = {
			x: x,
			y: y
		};

		var _this = this;
		me.event.subscribe(me.event.MOUSEMOVE, function(e) {
			_this.screenPos.x = e.gameScreenX;
			_this.screenPos.y = e.gameScreenY;
		});

		this.alwaysUpdate = true;
	},

	update: function() {
		this.inViewport = true;
		return true;
	},

	draw: function(renderer) {
		var vect = me.game.viewport.localToWorld(this.screenPos.x, this.screenPos.y);
		this.pos.x = vect.x - Math.floor(this.width / 2);
		this.pos.y = vect.y - Math.floor(this.height / 2);
		return this._super(me.Sprite, "draw", [renderer]);
	}

});