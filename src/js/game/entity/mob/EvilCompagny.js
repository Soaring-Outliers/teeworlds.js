game.entity.mob.EvilCompagny = me.Entity.extend({
	init: function(x, y, settings) {
	
		var companies = [
			{
				image: "castle",
				spritewidth: 25,
				spriteheight: 51
			},
			{
				image: "helium",
				spritewidth: 41,
				spriteheight: 42
			},
			{
				image: "prizm",
				spritewidth: 83,
				spriteheight: 41
			}
		];
		settings = $.extend((settings || {}), companies[Math.floor(Math.random() * 3)]);
 
		// call the parent constructor
		this._super(me.Entity,  "init", [x, y, settings]);
		
		if(compagny == 2)  //Little hit box correction for prizm
			this.updateColRect(21, 62, 2, 39);
 
		this.startX = x;
		this.endX = x + settings.width - settings.spritewidth;
		// size of sprite
 
		// make him start from the right
		this.pos.x = x + (Math.floor(Math.random() * (settings.width - settings.spritewidth)) + 1);
		this.walkLeft = (Math.floor(Math.random() * 2) + 1) == 1;
 
		// walking & jumping speed
		this.setVelocity(2.5, 6);
 
		// make it collidable
		this.collidable = true;
		// make it a enemy object
		this.type = me.game.ENEMY_OBJECT;
 
	},
 
	onCollision: function(res, obj) {
		// res.y >0 means touched by something on the bottom
		// which mean at top position for this one
		if (this.alive && (res.y > 0) && obj.falling) {
			this.renderable.flicker(45);
		}
	},
 
	update: function() {
		// do nothing if not in viewport
		if (!this.inViewport)
			return false;
 
		if (this.alive) {
			if (this.walkLeft && this.pos.x <= this.startX) {
				this.walkLeft = false;
			} else if (!this.walkLeft && this.pos.x >= this.endX) {
				this.walkLeft = true;
			}
			// make it walk
			this.flipX(this.walkLeft);
			this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
			
			if(this.vel.x == 0) this.walkLeft != this.walkLeft;
		} else {
			this.vel.x = 0;
		}
		 
		// check and update movement
		this.updateMovement();
		 
		// update animation if necessary
		if (this.vel.x!=0 || this.vel.y!=0) {
			// update object animation
			this._super(me.Entity, "update");
			return true;
		}
		return false;
	}
});