game.entity.accessory.Bullet = me.Entity.extend({

    init: function (x, y, leftP) {
    	
    	settings = {};
    	settings.image = 'bullet';
    	
        this._super(me.Entity, "init", [x, y, settings]);
        this.collidable = true;
        this.vel.x = leftP? - 18 : 18;
        this.flipX(!leftP);
        this.gravity = (Math.random()-0.5)*1.5;
        this.startX = this.pos.x;
        this.life = 100;
    },

    update: function () {
        
		if (!this.visible){
			// remove myself if not on the screen anymore
            me.game.remove(this);
		}
		
		if (Math.abs(this.pos.x - this.startX) >= 400)
			me.game.remove(this);
		
		//Collided with map
		if(this.vel.x === 0) {
			this.life = 5;
		}
		
		// check for collision
        var res = me.game.collide(this);
        if (res) {
        	if( res.obj.isSolid ){
        		this.life = 0;
            }
        	if (res.obj.type == me.game.COLLECTABLE_OBJECT && res.obj.name != "winentity" ) {
        		this.life = 0;
                me.game.remove(res.obj);
        	}
        	if (res.obj.type == me.game.ENEMY_OBJECT) {
        		this.life = 0;
                me.game.remove(res.obj);
        	}
        }

		this.life-=5;
		if (this.life <= 0) {
			me.game.remove(this);
		}
		else this.updateMovement();
		
        return true;
    }
});