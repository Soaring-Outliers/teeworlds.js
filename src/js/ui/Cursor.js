import me from 'melonJS'
import game from '../game.js'

export default class Cursor extends me.Renderable {

  constructor(x = 0, y = 0) {
    super()
    super.init(x, y, 0, 0)
    this.switchVisor(Cursor.visors.GUN)

    // update worldPos at each MOUSEMOVE event
    me.event.subscribe(me.event.MOUSEMOVE, (e) => {
      this.pos.set(e.gameScreenX, e.gameScreenY)
    })

    this.z = Infinity
    this.isPersistent = true
    this.alwaysUpdate = true
    this.floating = true
  }

  switchVisor(visor) {
    this.visor = visor
    this.sprite = game.uiTexture.createSpriteFromName(this.visor)
    this.sprite.pos = this.pos
  }

  draw(renderer) {
    renderer.save()
    if(this.visor !== Cursor.visors.GUI) {
      renderer.translate(- Math.floor(this.sprite.width / 2), - Math.floor(this.sprite.height / 2))
    }
    this.sprite.draw(renderer)
    renderer.restore()
  }
}
Cursor.visors = {
  GUN: 'gun_visor',
  GUI: 'ui_cursor'
}
