import me from 'melonJS'
import game from '../game.js'
import {Bullet} from './Bullet.js'

class Body extends me.Renderable {
  constructor() {
    var shadow = game.texture.createSpriteFromName('tee_body_shadow')
    super()
    super.init(0, 0, shadow.width, shadow.height)
    this.shadow = shadow
    this.sprite = game.texture.createSpriteFromName('tee_body')
    this.sprite.pos.add(new me.Vector2d(3, 2))
  }

  drawShadow(renderer) {
    this.shadow.draw(renderer)
  }

  draw(renderer) {
    this.sprite.draw(renderer)
  }
}

class Eyes extends me.Renderable {
  constructor(player) {
    super()
    super.init(11, 11, 1, 1)
    this.leftEye = game.texture.createSpriteFromName('tee_eye')
    this.rightEye = game.texture.createSpriteFromName('tee_eye')
    this.player = player

    this.h = Math.cos(Math.atan2(-1, -1))
    this.v = Math.sin(Math.atan2(-1, -1))
  }

  update(dt) {
    var angle = this.player.angleToCursor()
    this.pos.x = 11 + (Math.cos(angle) - this.h) * 15
    this.pos.y = 9 + (Math.sin(angle) - this.v) * 10
    this.leftEye.pos.y = this.rightEye.pos.y = this.pos.y
    this.leftEye.pos.x = this.pos.x
    this.rightEye.pos.x = this.pos.x + this.leftEye.width + 1
  }

  draw(renderer) {
    this.leftEye.draw(renderer)
    this.rightEye.draw(renderer)
  }
}

class Foot extends me.Renderable {
  constructor(parentHeight, x = 0) {
    var shadow = game.texture.createSpriteFromName('tee_foot_shadow')
    super()
    super.init(5 + x, parentHeight - shadow.height - 4, shadow.width, shadow.height)
    this.shadow = shadow
    this.shadow.pos.setV(this.pos)
    this.shadow.scale(1.4, 1.4)
    this.sprite = game.texture.createSpriteFromName('tee_foot')
    this.sprite.pos.setV(this.pos)
    this.sprite.pos.add(new me.Vector2d(2, 2))
    this.sprite.scale(1.5, 1.5)
  }

  drawShadow(renderer) {
    this.shadow.draw(renderer)
  }

  draw(renderer) {
    this.sprite.draw(renderer)
  }
}

export default class Player extends me.Entity {
  constructor(x, y, settings) {
    super()
    super.init(x, y, settings)
    this.spritewidth = 33
    this.spriteheight = 33

    // set the default horizontal & vertical speed (accel vector)
    this.body.setVelocity(10, 18.5)
    this.body.gravity = 0.58
    // Customize collision size and type
    var hitBoxCorrection = 8
    this.body.setShape(
      hitBoxCorrection, hitBoxCorrection,
      this.width - hitBoxCorrection, this.height - hitBoxCorrection
    )
    this.body.collisionType = me.collision.types.PLAYER_OBJECT

    this.renderable = new Body()
    this.eyes = new Eyes(this)
    this.leftFoot = new Foot(this.height)
    this.rightFoot = new Foot(this.height, 25)

    // set the display to follow o  ur position on both axis
    //me.debug.renderHitBox = true
    this.alwaysUpdate = true

    this.getCenter = () => new me.Vector2d(
      this.pos.x + this.getBounds().width / 2,
      this.pos.y + this.getBounds().height / 2
    )
    this.center = this.getCenter()

    me.game.viewport.follow(this.center, me.game.viewport.AXIS.BOTH)
    me.game.viewport.setDeadzone(0,0)

    this.life = 10
    this.shield = 10

    this.multipleJump = 1

    // Register a pool with class Bullet to quickly instantiate bullets in update -> shoot
    me.pool.register("bullet", Bullet, true)

    window.player = this
  }

  angleToCursor() {
    return this.angleToPoint(game.cursor.pos)
  }

  update(dt) {
    this.eyes.update(dt)
    //socket.emit("action", )

    if (me.input.isKeyPressed('left'))    {
      this.body.vel.x -= this.body.accel.x * me.timer.tick
    } else if (me.input.isKeyPressed('right')) {
      this.body.vel.x += this.body.accel.x * me.timer.tick
    } else {
      this.body.vel.x += -this.body.vel.x * 0.5
    }

    if (me.input.isKeyPressed('jump')) {
      this.body.jumping = true;

      if (this.multipleJump <= 2) {
        // easy 'math' for double jump
        this.body.vel.y -= (this.body.maxVel.y * this.multipleJump++) * me.timer.tick;
      }
    }
    else if (!this.body.falling && !this.body.jumping) {
      // reset the multipleJump flag if on the ground
      this.multipleJump = 1;
    }
    else if (this.body.falling && this.multipleJump < 2) {
      // reset the multipleJump flag if falling
      this.multipleJump = 2;
    }

    // check & update player movement
    this.body.update(dt)
    me.collision.check(this)
    this.center.setV(this.getCenter())

    if (me.input.isKeyPressed('shoot')) {
      var direction = this.angleToCursor()
      var bullet = me.pool.pull("bullet", this.center.x, this.center.y, direction)
      me.game.world.addChild(bullet)
    }

    if (this.body.vel.x != 0 || this.body.vel.y != 0) {
      super.update(dt)
      return true
    }
    return false
  }

  onCollision(response, other) {
    // Make all other objects solid
    //console.log("Collision with Other", other)
    return true
  }

  draw(renderer) {
    // draw the sprite if defined
    if (this.renderable) {
        // translate the renderable position (relative to the entity)
        // and keeps it in the entity defined bounds
        var x = ~~(0.5 + this.pos.x + this.body.pos.x + (
            this.anchorPoint.x * (this.body.width - this.renderable.width)
        ))
        var y = ~~(0.5 + this.pos.y + this.body.pos.y + (
            this.anchorPoint.y * (this.body.height - this.renderable.height)
        ))

        renderer.save()
        renderer.translate(x, y)
        //Shadows sprite
        this.leftFoot.drawShadow(renderer)
        this.renderable.drawShadow(renderer)
        this.rightFoot.drawShadow(renderer)
        //Front sprite
        this.leftFoot.draw(renderer)
        this.renderable.draw(renderer)
        this.eyes.draw(renderer)
        this.rightFoot.draw(renderer)
        renderer.restore()
    }
  }

}
