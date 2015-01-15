game.entity.mob.Player = me.Entity.extend({

    init: function(x, y, settings) {

        this._super(me.Entity, "init", [x, y, settings]);
        this.spritewidth = 33;
        this.spriteheight = 33;

        // set the default horizontal & vertical speed (accel vector)
        this.body.setVelocity(5, 18);
        //this.updateColRect(18, 32, 12, 52);

        this.renderable = game.texture.createAnimationFromName([
            "jump_1", "jump_2", "jump_3",
            "stand_1", "stand_2", "stand_3",
            "walk_1", "walk_2", "walk_3", "walk_4"
        ]);

        this.renderable.addAnimation("stand", ["stand_1", "stand_2"], 300);
        this.renderable.addAnimation("jump", ["jump_1", "jump_2", "jump_3"]);
        this.renderable.addAnimation("walkRecursive", ["walk_1", "walk_2", "walk_3", "walk_4"], 50);

        this.changeAnimation("stand");

        //this.anchorPoint.set(0, 0);
        //this.ylimit = me.game.currentLevel.height;

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        //me.debug.renderHitBox = true;
        this.alwaysUpdate = true;

        this.walkRight = true;
        this.renderable.flipX(!this.walkRight);

        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        //this.life = 1000;
        
        // Creates the game cursor which will follow the computer cursor (mouse)
        this.cursor = new game.entity.accessory.Cursor(this.pos.x, this.pos.y, {});
        me.game.world.addChild(this.cursor);

        // Register a pool with class Bullet to quickly instantiate bullets in update -> shoot
        me.pool.register("bullet", game.entity.accessory.Bullet, true);
    },

    changeAnimation: function(animationName) {
        if (!this.renderable.isCurrentAnimation(animationName)) {
            this.renderable.setCurrentAnimation(animationName);
        }
    },

    update: function(dt) {
        //socket.emit("action", )
        if (me.input.isKeyPressed('left') || me.input.isKeyPressed('right')) {
            if (me.input.isKeyPressed('left')) {
                this.walkRight = false;

                // update the entity velocity
                this.body.vel.x -= this.body.accel.x * me.timer.tick;
            }
            else {
                this.walkRight = true;

                // update the entity velocity
                this.body.vel.x += this.body.accel.x * me.timer.tick;
            }
            if (!this.jumping && !this.falling)
                this.changeAnimation("walkRecursive");

            this.renderable.flipX(this.walkRight);
        }
        else {
            if (!this.jumping && !this.falling)
                this.changeAnimation("stand");

            this.body.vel.x = 0;
        }

        if (me.input.isKeyPressed('jump')) {
            this.changeAnimation("jump");

            // make sure we are not already jumping or falling
            //if (!this.jumping && !this.falling) {

            // set current vel to the maximum defined value
            // gravity will then do the rest
            this.body.vel.y = -this.body.maxVel.y * me.timer.tick;
            // set the jumping flag
            this.jumping = true;

            // play some audio
            //me.audio.play("jump");
            //}
        }
        else {
            this.jumping = false;
        }

        if (me.input.isKeyPressed('shoot')) {
            // Angle in radian between character and cursor
            var direction = this.angleToPoint(this.cursor.center);
            
            // Shoot bullet
            var bullet = me.pool.pull("bullet", this.pos.x, this.pos.y, direction);
            me.game.world.addChild(bullet);
            // to remove the bullet : 
            // me.game.world.removeChild(bullet);
            
            
            //me.game.HUD.updateItemValue("score", -1);
        }

        // check & update player movement
        this.body.update();
        me.collision.check(this);

        this._super(me.Entity, "update", [dt]);
        return true;
    },

    onCollision: function(response, other) {
        // Make all other objects solid
        //console.log("Collision with Other", other);
        return true;
    }

});
