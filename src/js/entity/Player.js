import me from 'melonJS'
import game from '../game.js'
import Bullet from './Bullet.js'

class Body extends me.Renderable {
  constructor() {
    var shadow = game.texture.createSpriteFromName('tee_body_shadow')
    shadow.pos.add(new me.Vector2d(0, 4))
    super()
    super.init(0, 0, shadow.width, shadow.height)
    this.shadow = shadow
    this.sprite = game.texture.createSpriteFromName('tee_body')
    this.sprite.pos.add(new me.Vector2d(2, 6))
  }

  drawShadow(renderer) {
    this.shadow.draw(renderer)
  }

  draw(renderer) {
    this.sprite.draw(renderer)
  }
}

class Hands {
  constructor(player) {
    this.player = player
    this.hand = game.texture.createSpriteFromName('tee_hand')
    this.gun = game.texture.createSpriteFromName('gun')
    this.gun.anchorPoint.set(0.0, 0.5)
    this.gun.pos.set(this.player.width / 2, 15)
  }

  update(dt) {
    var angle = this.player.angleToCursor()
    if(angle < 1.5 && angle > -1.5 ) {
      this.gun.flipY(false)
      this.gun.angle = angle
      //this.hand.angle = angle
    } else {
      this.gun.flipY(true)
      this.gun.angle = -angle
      //this.hand.angle = -angle
    }
  }

  shoot() {
    var angle = this.player.angleToCursor()
    var bullet = me.pool.pull("bullet", this.player.center.x, this.player.center.y, angle)
    me.game.world.addChild(bullet)
  }

  draw(renderer) {
    this.gun.draw(renderer)
    //this.hand.draw(renderer)
  }
}

class Eyes {
  constructor(player) {
    this.leftEye = game.texture.createSpriteFromName('tee_eye')
    this.leftEye.scale(0.85, 0.85)
    this.rightEye = game.texture.createSpriteFromName('tee_eye')
    this.rightEye.scale(0.85, 0.85)
    this.player = player

    this.h = Math.cos(Math.atan2(-1, -1))
    this.v = Math.sin(Math.atan2(-1, -1))
  }

  update(dt) {
    var angle = this.player.angleToCursor()
    this.leftEye.pos.y = this.rightEye.pos.y = 10 + (Math.sin(angle) - this.v) * 6.5
    this.leftEye.pos.x = 7 + (Math.cos(angle) - this.h) * 9.5
    this.rightEye.pos.x = this.leftEye.pos.x + this.leftEye.width - 1
  }

  draw(renderer) {
    this.leftEye.draw(renderer)
    this.rightEye.draw(renderer)
  }
}

class Feet {
  constructor(player) {
    this.leftShadow = game.texture.createSpriteFromName('tee_foot_shadow')
    this.rightShadow = game.texture.createSpriteFromName('tee_foot_shadow')
    this.leftSprite = game.texture.createSpriteFromName('tee_foot')
    this.rightSprite = game.texture.createSpriteFromName('tee_foot')

    this.player = player
    this.shadowToSpritePos = new me.Vector2d(3, 2)
    var shadowHeight = this.leftShadow.height
    var x = 0, y = player.height - shadowHeight + 5
    this.currentStand = null
    this.defaultStand = {
      right: {pos: new me.Vector2d(x + 17, y), angle: 0},
      left: {pos: new me.Vector2d(x, y), angle: 0}
    }
    this.midAirStand = {
      right: {pos: new me.Vector2d(x + 12, y), angle: -0.6},
      left: {pos: new me.Vector2d(x + 4, y), angle: -0.6}
    }
    this.walking = false
    this.walkingStands = [
      {
        right: {},
        left: {}
      }
    ]
  }

  changeStand(stand) {
    if(this.currentStand !== stand) {
      this.currentStand = stand
      this.leftShadow.pos.setV(stand.left.pos)
      this.rightShadow.pos.setV(stand.right.pos)
      this.leftSprite.pos.setV(stand.left.pos)
      this.leftSprite.pos.add(this.shadowToSpritePos)
      this.rightSprite.pos.setV(stand.right.pos)
      this.rightSprite.pos.add(this.shadowToSpritePos)
      this.leftShadow.angle = this.leftSprite.angle = stand.left.angle
      this.rightShadow.angle = this.rightSprite.angle = stand.right.angle
    }
  }

  update(dt) {
    if(this.player.body.falling || this.player.body.jumping) {
      this.changeStand(this.midAirStand)
    } else {
      this.changeStand(this.defaultStand)
    }
  }

  drawLeftShadow(renderer) {this.leftShadow.draw(renderer)}
  drawRightShadow(renderer) {this.rightShadow.draw(renderer)}
  drawLeft(renderer) {this.leftSprite.draw(renderer)}
  drawRight(renderer) {this.rightSprite.draw(renderer)}
}


export default class Player extends me.Entity {
  constructor(x, y, settings) {
    settings.width = 44
    settings.height = 44
    super()
    super.init(x, y, settings)

    // Horizontal & vertical speed and gravity
    this.body.setVelocity(9, 12.2)
    this.body.midAirVelX = 2
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

    if (me.input.isKeyPressed('jump')) {
      this.body.jumping = true

      if (this.multipleJump <= 2) {
        if(this.multipleJump === 2) {
          this.body.maxVel.y = 11
        } else {
          this.body.maxVel.y = 12.2
        }
        this.body.vel.y -= (this.body.maxVel.y * this.multipleJump++) * me.timer.tick
      }
    }
    else if (!this.body.falling && !this.body.jumping) {
      this.multipleJump = 1
    }
    else if (this.body.falling && this.multipleJump < 2) {
      this.multipleJump = 2
    }

    var left = me.input.isKeyPressed('left')
    var right = me.input.isKeyPressed('right')
    if (left || right) {
      if (this.body.falling || this.body.jumping) {
        this.body.maxVel.x = (!this.wasWalking) ? 5.5 :
          Math.max(5.5, this.body.maxVel.x - 0.05)
      }

      //console.log("accel: "+this.body.accel.x+", vel: "+this.body.vel.x + ", maxVel: "+this.body.maxVel.x)
      if(left) {
        this.body.vel.x -= this.body.accel.x * me.timer.tick
      } else {
        this.body.vel.x += this.body.accel.x * me.timer.tick
      }
      this.wasWalking = true
    } else {
      this.body.vel.x += -this.body.vel.x * 0.9
      this.body.maxVel.x = 9
      this.wasWalking = false
    }

    // check & update player movement
    this.body.update(dt)
    me.collision.check(this)
    this.center.setV(this.getCenter())
    this.hands.update(dt)
    this.eyes.update(dt)
    this.feet.update(dt)

    if (me.input.isKeyPressed('shoot')) {
      this.hands.shoot()
    }

    if (this.body.vel.x !== 0 || this.body.vel.y !== 0) {
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
    var x = (0.5 + this.pos.x + this.body.pos.x + (
        this.anchorPoint.x * (this.body.width - this.renderable.width)
    ))
    var y = (0.5 + this.pos.y + this.body.pos.y - 8 + (
        this.anchorPoint.y * (this.body.height - this.renderable.height)
    ))

    renderer.save()
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

    renderer.restore()
  }

}
