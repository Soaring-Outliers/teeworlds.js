import me from 'melonJS'
import game from '../game.js'

export default class Cursor extends me.Renderable {

  constructor(x = 0, y = 0) {
    super()
    super.init(x, y, 0, 0)
    this.switchVisor(Cursor.visors.GUN)

    // update worldPos at each MOUSEMOVE event
    this.screenPos = new me.Vector2d(x, y)
    me.event.subscribe(me.event.MOUSEMOVE, (e) => {
      this.screenPos.set(e.gameScreenX, e.gameScreenY)
    })

    this.z = Infinity
    this.isPersistent = true
    this.alwaysUpdate = true
  }

  switchVisor(visor) {
    this.visor = visor
    this.sprite = game.uiTexture.createSpriteFromName(this.visor)
  }

  update() {
    this.inViewport = true
    return true
  }

  draw(renderer) {
    var worldPos = me.game.viewport.localToWorld(this.screenPos.x, this.screenPos.y)
    this.pos.set(worldPos.x, worldPos.y)
    if(this.visor !== Cursor.visors.GUI) {
      this.sprite.pos.x = this.pos.x - Math.floor(this.sprite.width / 2)
      this.sprite.pos.y = this.pos.y - Math.floor(this.sprite.height / 2)
    } else {
      this.sprite.pos.x = this.pos.x
      this.sprite.pos.y = this.pos.y
    }
    return this.sprite.draw(renderer)
  }
}
Cursor.visors = {
  GUN: 'gun_visor',
  GUI: 'ui_cursor'
}
