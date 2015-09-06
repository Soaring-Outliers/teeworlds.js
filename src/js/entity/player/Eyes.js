import game from '../../game.js'

export default class Eyes {
  constructor(player) {
    this.leftEye = game.texture.createSpriteFromName('tee_eye')
    this.rightEye = game.texture.createSpriteFromName('tee_eye')
    this.player = player

    this.angle = null
    this.h = Math.cos(Math.atan2(-1, -1))
    this.v = Math.sin(Math.atan2(-1, -1))
  }

  update(dt) {
    var angle = this.player.angleToCursor()
    if (angle !== this.angle) {
      this.angle = angle
      this.leftEye.pos.y = this.rightEye.pos.y = 10 + (Math.sin(angle) - this.v) * 6.5
      this.leftEye.pos.x = this.rightEye.pos.x = 7 + (Math.cos(angle) - this.h) * 9.5
      this.rightEye.pos.x += this.leftEye.width
      return true
    }
    return false
  }

  draw(renderer) {
    this.leftEye.draw(renderer)
    this.rightEye.draw(renderer)
  }
}
