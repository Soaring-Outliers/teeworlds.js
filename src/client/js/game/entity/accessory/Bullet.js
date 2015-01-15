game.entity.accessory.Bullet = me.Entity.extend({

    init: function(x, y, direction) {

        console.log(x, y);
        settings = {};
        // We should definitely change that, as it is crazy to shoot suns. No, really.
        settings.image = 'sun';
        settings.width = 256;
        settings.height = 256;
        // I don't want to comment that.
        x = x - Math.floor(settings.width / 2)
        y = y - Math.floor(settings.height / 2)

        this._super(me.Entity, "init", [x, y, settings]);
        this.collidable = true;

        // Huh, this is totally stupid, but not commented in documentation of melonjs, so maybe someone could look in there code ?
        this.type = me.game.COLLECTABLE_OBJECT;

        // Totally random multiplier. CowboyCoder style.
        var initialSpeed = 3;
        // Go check your basic trignometry, bitch.
        this.velX = initialSpeed * Math.cos(direction);
        this.velY = initialSpeed * Math.sin(direction);
        // Warning : Use precautionaly melonjs functions, as it is coded by
        //   TerroristCoders, not aware of basic rules of physics.
        // #theyAreBenLaden
        this.body.setMaxVelocity(1000,1000);
        this.body.vel.set(this.velX, this.velY); // yep, not body.setVelocity, because it's a fuckin' absurd function
        
        // Oh yeah, and set to 0 this stupid accel, because it's used nowhere and just here to bother you.
        this.body.accel.set(0, 0);
        // No friction, as we don't want the bullet to slow down
        this.body.setFriction(0, 0);
        // Maybe later, we could do projectiles with various gravities.
        // Fir the moment, I'm lazy.
        this.body.gravity = 0;

        // And not round projectiles... But really, I'm lazy.
        //this.flipX(!leftP);
        
        // Just keepin' in comment this wonderfully absurd peace of code by a TerroristCoder.
        //this.gravity = (Math.random()-0.5)*1.5;
        
        this.startX = this.pos.x;
        this.life = 100;
        this.inViewport = true;
    },

    update: function(dt) {
        // To decomment when we will do real bullets.
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
        
        //this.body.setVelocity(this.velX, this.velY); // Haha. Don't use that, really. Let it commented.
        
        this.body.vel.set(this.velX, this.velY); // Yeah, better idea.
        
        this.body.accel.set(0, 0); // DON'T MOVE, BITCH.
        
        this.body.update(); // pos += vel (should also take in account dt, but really, melonjs doen't care about physics. Just make as it it is normal, please. #IMLazy)

        this._super(me.Entity, "update", [dt]);
        return true;
    }
});