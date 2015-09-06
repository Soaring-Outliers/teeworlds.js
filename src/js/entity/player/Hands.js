import me from 'melonJS'
import game from '../../game.js'

export default class Hands {
  constructor(player) {
    this.player = player
    this.hand = game.texture.createSpriteFromName('tee_hand')
    this.gun = game.texture.createSpriteFromName('gun')
    this.gun.anchorPoint.set(0.0, 0.5)
    this.gun.pos.set(this.player.width / 2, 15)
    this.angle = null
  }

  update(dt) {
    var angle = this.player.angleToCursor()
    if (angle !== this.angle) {
      this.angle = angle
      if (angle < 1.5 && angle > -1.5 ) {
        this.gun.flipY(false)
        this.gun.angle = angle
        //this.hand.angle = angle
      } else {
        this.gun.flipY(true)
        this.gun.angle = -angle
        //this.hand.angle = -angle
      }
      return true
    }
    return false
  }

  shoot() {
    me.game.world.addChild(
      me.pool.pull("bullet", this.player.center.x, this.player.center.y, this.angle)
    )
  }

  draw(renderer) {
    this.gun.draw(renderer)
    //this.hand.draw(renderer)
  }
}
