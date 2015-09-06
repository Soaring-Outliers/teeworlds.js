import me from 'melonJS'
import game from '../../game.js'

export default class Feet {
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
    this.floatingStand = {
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

  updateStand(stand) {
    if(this.currentStand !== stand) {
      this.currentStand = stand
      this.leftShadow.pos.copy(stand.left.pos)
      this.rightShadow.pos.copy(stand.right.pos)
      this.leftSprite.pos.copy(stand.left.pos).add(this.shadowToSpritePos)
      this.rightSprite.pos.copy(stand.right.pos).add(this.shadowToSpritePos)
      this.leftShadow.angle = this.leftSprite.angle = stand.left.angle
      this.rightShadow.angle = this.rightSprite.angle = stand.right.angle
      return true
    }
    return false
  }

  update(dt) {
    if(this.player.body.falling || this.player.body.jumping) {
      return this.updateStand(this.floatingStand)
    } else {
      return this.updateStand(this.defaultStand)
    }
  }

  drawLeftShadow(renderer) {this.leftShadow.draw(renderer)}
  drawRightShadow(renderer) {this.rightShadow.draw(renderer)}
  drawLeft(renderer) {this.leftSprite.draw(renderer)}
  drawRight(renderer) {this.rightSprite.draw(renderer)}
}
