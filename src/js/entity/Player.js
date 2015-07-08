import me from 'melonJS'
import game from '../game.js'
import {Cursor} from './Cursor.js'
import {Bullet} from './Bullet.js'


export default class Player extends me.Entity {

  constructor(x, y, settings) {
    super()
    super.init(x, y, settings)
    this.spritewidth = 33
    this.spriteheight = 33

    // set the default horizontal & vertical speed (accel vector)
    this.body.setVelocity(10, 20)
    //this.updateColRect(18, 32, 12, 52)

    this.renderable = game.texture.createSpriteFromName('tee')
      /*game.texture.createAnimationFromName([
        "jump_1", "jump_2", "jump_3",
        "stand_1", "stand_2", "stand_3",
        "walk_1", "walk_2", "walk_3", "walk_4"
      ])

      this.renderable.addAnimation("stand", ["stand_1", "stand_2"], 300)
      this.renderable.addAnimation("jump", ["jump_1", "jump_2", "jump_3"])
      this.renderable.addAnimation("walkRecursive", ["walk_1", "walk_2", "walk_3", "walk_4"], 50)*/

    //this.changeAnimation("stand")

    //this.anchorPoint.set(0, 0)
    //this.ylimit = me.game.currentLevel.height

    // set the display to follow our position on both axis
    //me.debug.renderHitBox = true
    this.alwaysUpdate = true

    this.walkRight = true
    this.renderable.flipX(!this.walkRight)

    me.game.viewport.follow(this, me.game.viewport.AXIS.BOTH)
    me.game.viewport.setDeadzone(0,0)
    //this.life = 1000

    // Creates the game cursor which will follow the computer cursor (mouse)
    this.cursor = new Cursor(this.pos.x, this.pos.y, {})
    me.game.world.addChild(this.cursor)

    // Register a pool with class Bullet to quickly instantiate bullets in update -> shoot
    me.pool.register("bullet", Bullet, true)
    this.body.collisionType = me.collision.types.PLAYER_OBJECT
  }

  /*changeAnimation(animationName) {
    if (!this.renderable.isCurrentAnimation(animationName)) {
      this.renderable.setCurrentAnimation(animationName)
    }
  }*/

  update(dt) {
    //socket.emit("action", )
    if (me.input.isKeyPressed('left') || me.input.isKeyPressed('right')) {
      if (me.input.isKeyPressed('left')) {
        this.walkRight = false

        // update the entity velocity
        this.body.vel.x -= this.body.accel.x * me.timer.tick
      }
      else {
        this.walkRight = true

        // update the entity velocity
        this.body.vel.x += this.body.accel.x * me.timer.tick
      }
      if (!this.jumping && !this.falling)
      //this.changeAnimation("walkRecursive")

        this.renderable.flipX(this.walkRight)
    }
    else {
      if (!this.jumping && !this.falling) {
      //this.changeAnimation("stand")
        this.body.vel.x = 0
      }
    }

    if (me.input.isKeyPressed('jump')) {
      //this.changeAnimation("jump")

      // make sure we are not already jumping or falling
      if (!this.jumping && !this.falling) {

        // set current vel to the maximum defined value
        // gravity will then do the rest
        this.body.vel.y = -this.body.maxVel.y * me.timer.tick
        // set the jumping flag
        this.jumping = true

        // play some audio
        //me.audio.play("jump")
      }
    }
    else {
      this.jumping = false
    }

    if (me.input.isKeyPressed('shoot')) {
      // Angle in radian between character and cursor
      var direction = this.angleToPoint(this.cursor.getCenter())

      // Shoot bullet
      var bullet = me.pool.pull(
        "bullet", 
        this.pos.x + Math.floor(this.width / 2), 
        this.pos.y + Math.floor(this.height / 2), 
        direction
      )
      me.game.world.addChild(bullet)
      // to remove the bullet : 
      // me.game.world.removeChild(bullet)
    }

    // check & update player movement
    this.body.update()
    me.collision.check(this)

    super.update(dt)
    return true
  }

  onCollision(response, other) {
    // Make all other objects solid
    //console.log("Collision with Other", other)
    return true
  }

}
