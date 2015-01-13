game.entity.accessory.Bullet = me.Entity.extend({

    init: function(x, y, direction) {

        console.log(x, y);
        settings = {};
        settings.image = 'sun';
        settings.width = 256;
        settings.height = 256;
        x = x - Math.floor(settings.width / 2)
        y = y - Math.floor(settings.height / 2)

        this._super(me.Entity, "init", [x, y, settings]);
        this.collidable = true;

        this.type = me.game.COLLECTABLE_OBJECT;

        var initialSpeed = 3;
        this.velX = initialSpeed * Math.cos(direction);
        this.velY = initialSpeed * Math.sin(direction);
        this.body.setMaxVelocity(1000,1000);
        this.body.vel.set(this.velX, this.velY);
        
        this.body.accel.set(0, 0);
        this.body.setFriction(0, 0);
        this.body.gravity = 0;


        //this.flipX(!leftP);
        //this.gravity = (Math.random()-0.5)*1.5;
        this.startX = this.pos.x;
        this.life = 100;
        this.inViewport = true;
    },

    update: function(dt) {
        /*if (!this.visible) {
            // remove myself if not on the screen anymore
            me.game.world.removeChild(this);
        }

        if (Math.abs(this.pos.x - this.startX) >= 400)
            me.game.world.removeChild(this);

        //Collided with map
        if (this.vel.x === 0) {
            this.life = 5;
        }

        // check for collision
        var res = me.game.collide(this);
        if (res) {
            if (res.obj.isSolid) {
                this.life = 0;
            }
            if (res.obj.type == me.game.COLLECTABLE_OBJECT && res.obj.name != "winentity") {
                this.life = 0;
                me.game.world.removeChild(res.obj);
            }
            if (res.obj.type == me.game.ENEMY_OBJECT) {
                this.life = 0;
                me.game.world.removeChild(res.obj);
            }
        }

        this.life -= 5;
        if (this.life <= 0) {
            me.game.world.removeChild(this);
        }
        else*/ 
        //this.body.setVelocity(this.velX, this.velY);
        this.body.vel.set(this.velX, this.velY);
        this.body.accel.set(0, 0);
        this.body.update();
        console.log(this);

        this._super(me.Entity, "update", [dt]);
        return true;
    }
});