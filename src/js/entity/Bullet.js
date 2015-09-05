import me from 'melonJS'
import game from '../game.js'

export default class Bullet extends me.Entity {

  constructor(x, y, angle) {
    super()
    this.init(x, y, angle)
  }

  init(x, y, angle) {
    var bullet = game.texture.createSpriteFromName('gun_bullet')
    bullet.angle = angle

    x = x - Math.floor(bullet.width / 2)
    y = y - Math.floor(bullet.height / 2)
    var height = bullet.height
    var width = bullet.width

    super.init(x, y, {width, height})

    this.renderable = bullet

    this.body.setFriction(0, 0)
    this.body.gravity = 0
    this.body.setVelocity(50, 50)
    this.body.addShape(bullet.toPolygon().rotate(angle))
    this.body.removeShapeAt(0)
    this.body.collisionType = me.collision.types.PROJECTILE_OBJECT
    this.body.collisionMask = me.collision.types.WORLD_SHAPE | me.collision.types.ENEMY_OBJECT
  }

  update(dt) {
    this.body.vel.x = this.body.accel.x * Math.cos(this.renderable.angle)
    this.body.vel.y = this.body.accel.y * Math.sin(this.renderable.angle)

    this.body.update()
    me.collision.check(this)

    super.update(dt)
    return true
  }

  onCollision(response, other) {
    me.game.world.removeChildNow(this)
    return false
  }
}
