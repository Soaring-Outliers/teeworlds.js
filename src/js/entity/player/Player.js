import me from 'melonJS'
import game from '../../game.js'
import Bullet from '../Bullet.js'
import Body from './Body.js'
import Eyes from './Eyes.js'
import Hands from './Hands.js'
import Feet from './Feet.js'

export default class Player extends me.Entity {
  constructor(x, y, settings) {
    settings.width = 44
    settings.height = 44
    super()
    super.init(x, y, settings)

    // Horizontal & vertical speed and gravity
    this.body.setVelocity(9, 12.2)
    this.body.gravity = 0.4

    // Hitbox definition and collision type
    this.body.addShape(new me.Rect(0, 0, 32, 32))
    this.body.removeShapeAt(0)
    this.body.collisionType = me.collision.types.PLAYER_OBJECT

    // Body parts
    this.renderable = new Body()
    this.hands = new Hands(this)
    this.eyes = new Eyes(this)
    this.feet = new Feet(this)

    this.alwaysUpdate = true

    this.getCenter = () => new me.Vector2d(
      this.pos.x + this.getBounds().width / 2,
      this.pos.y + this.getBounds().height / 2
    )
    this.center = this.getCenter()

    me.game.viewport.follow(this.center, me.game.viewport.AXIS.BOTH)
    me.game.viewport.setDeadzone(1, 1)

    this.life = 10
    this.shield = 10

    this.multipleJump = 1
    this.wasWalking = false

    // Register a pool with class Bullet to quickly instantiate bullets in update -> shoot
    me.pool.register("bullet", Bullet, true)

    window.player = this
  }

  angleToCursor() {
    return this.angleToPoint(
      me.game.viewport.localToWorld(game.cursor.pos.x, game.cursor.pos.y)
    )
  }

  update(dt) {
    //socket.emit("action", )
    var updated = false
    var floating = this.body.falling || this.body.jumping

    if (me.input.isKeyPressed('jump')) {
      this.body.jumping = true

      if (this.multipleJump <= 2) {
        this.body.maxVel.y = this.multipleJump === 2 ? 11 : 12.2

        this.body.vel.y -= (this.body.maxVel.y * this.multipleJump++) * me.timer.tick
        updated = true
      }
    }
    else if (!floating) {
      this.multipleJump = 1
    }
    else if (this.body.falling && this.multipleJump < 2) {
      this.multipleJump = 2
    }

    var left = me.input.isKeyPressed('left')
    var right = me.input.isKeyPressed('right')
    var walking = left || right
    if (walking) {
      this.body.maxVel.x = !this.wasWalking && floating ? 5 : 9

      var accel = this.body.accel.x * me.timer.tick
      this.body.vel.x = this.body.vel.x + (left ? -accel : accel)
      updated = true
    } else if(this.body.vel.x !== 0) {
      this.body.vel.x = Math.max(0, this.body.vel.x - this.body.vel.x * 0.9)
      updated = true
    }
    this.wasWalking = walking

    // check & update player movement
    updated = this.body.update(dt) || updated
    me.collision.check(this)
    this.center.setV(this.getCenter())

    // Update body parts
    updated = this.renderable.update(dt) || updated
    updated = this.hands.update(dt) || updated
    updated = this.eyes.update(dt) || updated
    updated = this.feet.update(dt) || updated

    if (me.input.isKeyPressed('shoot')) {
      this.hands.shoot()
    }
    return updated
  }

  onCollision(response, other) {
    // Make all other objects solid
    //console.log("Collision with Other", other)
    return true
  }

  draw(renderer) {
    var x = ~~(0.5 + this.pos.x + this.body.pos.x + (
        this.anchorPoint.x * (this.body.width - this.renderable.width)
    ))
    var y = ~~(0.5 + this.pos.y + this.body.pos.y - 8 + (
        this.anchorPoint.y * (this.body.height - this.renderable.height)
    ))

    renderer.translate(x, y)

    // Hands
    this.hands.draw(renderer)

    //Body parts shadows
    this.feet.drawLeftShadow(renderer)
    this.renderable.drawShadow(renderer)
    this.feet.drawRightShadow(renderer)

    //Body part
    this.feet.drawLeft(renderer)
    this.renderable.draw(renderer)
    this.eyes.draw(renderer)
    this.feet.drawRight(renderer)

    renderer.translate(-x, -y)
  }

}
