import me from 'melonJS'
import game from '../../game.js'

export default class Body extends me.Renderable {
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
