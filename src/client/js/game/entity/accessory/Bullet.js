game.entity.accessory.Bullet = me.Entity.extend({

    init: function (x, y, direction) {
        var bullet = game.texture2.createSpriteFromName('gun_bullet');
        bullet.angle = direction;
        // I don't want to comment that.
        x = x - Math.floor(bullet.width / 2);
        y = y - Math.floor(bullet.height / 2);
        var height = bullet.height;
        var width = bullet.width;

        this._super(me.Entity, "init", [x, y, {width: width, height: height}]);
        this.renderable = bullet;

        // Totally random multiplier. CowboyCoder style.
        //var initialSpeed = 20;
        // Go check your basic trignometry, bitch.
        //this.velX = initialSpeed * Math.cos(direction);
        //this.velY = initialSpeed * Math.sin(direction);
        // Warning : Use precautionaly melonjs functions, as it is coded by
        //   TerroristCoders, not aware of basic rules of physics.
        // #theyAreBenLaden
        //this.body.setMaxVelocity(1000,1000);
        //this.body.vel.set(this.velX, this.velY); // yep, not body.setVelocity, because it's a fuckin' absurd function

        // Oh yeah, and set to 0 this stupid accel, because it's used nowhere and just here to bother you.
        //this.body.accel.set(0, 0);
        // No friction, as we don't want the bullet to slow down
        //this.body.setFriction(0, 0);
        // Maybe later, we could do projectiles with various gravities.

        // Fir the moment, I'm lazy.
        //this.body.gravity = 0;

        // And not round projectiles... But really, I'm lazy.
        //this.flipX(!leftP);

        // Just keepin' in comment this wonderfully absurd peace of code by a TerroristCoder.
        //this.gravity = (Math.random()-0.5)*1.5;

        //this.startX = this.pos.x;
        //this.life = 100;
        //this.inViewport = true;


        // Actually setting the bullet's acceleration in X and Y
        this.body.setVelocity(20, 20);

        this.body.addShape((new me.Polygon(
            0, 0, [
                new me.Vector2d(), new me.Vector2d(width, 0),
                new me.Vector2d(width, height), new me.Vector2d(0, height)
            ]
        )).rotate(direction));

        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;
        this.body.collisionMask = me.collision.types.WORLD_SHAPE;
    },

    update: function (dt) {
        //this.body.setVelocity(this.velX, this.velY); // Haha. Don't use that, really. Let it commented.

        //this.body.vel.set(this.velX, this.velY); // Yeah, better idea.

        this.body.vel.x = this.body.accel.x * Math.cos(this.renderable.angle);
        this.body.vel.y = this.body.accel.x * Math.sin(this.renderable.angle);
        //this.body.accel.set(0, 0); // DON'T MOVE, BITCH.

        this.body.update(); // pos += vel (should also take in account dt, but really, melonjs doen't care about physics. Just make as it it is normal, please. #IMLazy)

        me.collision.check(this);

        this._super(me.Entity, "update", [dt]);
        return true;
    },

    onCollision: function (response, other) {
        // Destroy bullet if colliding
        me.game.world.removeChild(this);
        return true;
    }
});