import me from 'melonJS'
import game from '../game.js'
import Cursor from './Cursor.js'
import Menubar from './Menubar.js'

class UILayer extends me.Renderable {
    constructor(screen) {
      super()
      super.init(0, 0, 1, 1)
      this.components = []
      this.alwaysUpdate = true
      this.isPersistent = true
      this.floating = true
      this.z = 100
      this.screen = screen
      this.menubar = new Menubar(screen)

      me.input.bindKey(me.input.KEY.ENTER, "enter", true)
      me.input.bindKey(me.input.KEY.ESC, "esc", true)
    }

    add(c) {
      this.remove(this.menubar)
      this.components.push(c)
      c.onResetEvent()
    }

    remove(c) {
      this.components.remove(c)
      c.onDestroyEvent()
    }

    draw(renderer) {
      this.components.map((c) => c.draw(renderer))
    }

    update(dt) {
      var activeComponent = this.components.length >= 1 ?
        this.components[this.components.length - 1] :
        undefined

      if(me.input.isKeyPressed("esc")) {
        if(!activeComponent) {
          this.screen.open(this.menubar)
        } else if(activeComponent.onEscKey) {
          activeComponent.onEscKey()
        }
      }
      if(activeComponent && me.input.isKeyPressed("enter")) {
        if(activeComponent.onEnterKey) {
          activeComponent.onEnterKey()
        }
      }
      this.components.map((c) => c.update(dt))
      return true
    }

    isEmpty() {
      return this.components.length < 1
    }
}

export default class Screen extends me.ScreenObject {

  constructor() {
    super()
    super.init()
    this.uiLayer = new UILayer(this)
    me.game.world.addChild(this.uiLayer)
  }

  onResetEvent() {
    me.event.subscribe(me.event.LEVEL_LOADED, () =>
      this.bgTileLayer = me.game.world.getChildByName("background")[0]
    )
    me.levelDirector.loadLevel("dm1")

    // Subscribe to the viewport change event; fires when the viewport scrolls
    //me.event.subscribe(me.event.VIEWPORT_ONCHANGE, (pos) => {
    //  // Copy the viewport position into the tile layer position, then divide by 2...
    //  if (this.bgTileLayer) {
    //    var {x, y} = pos.scale(this.bgTileLayer.ratio, this.bgTileLayer.ratio)
    //    //this.bgTileLayer.updateBoundsPos(x, y)
    //  }
    //})
    this.bindKeys()
  }

  onDestroyEvent() {
    this.unbindKeys()
  }

  bindKeys() {
    me.input.bindKey(me.input.KEY.Q, "left")
    me.input.bindKey(me.input.KEY.D, "right")
    me.input.bindKey(me.input.KEY.SPACE, "jump", true)
    me.input.bindKey(me.input.KEY.X, "shoot", true)
    me.input.bindPointer(me.input.KEY.X)
  }

  unbindKeys() {
    me.input.unbindKey(me.input.KEY.Q)
    me.input.unbindKey(me.input.KEY.D)
    me.input.unbindKey(me.input.KEY.SPACE)
    me.input.unbindKey(me.input.KEY.X)
    me.input.unbindPointer()
  }

  open(c) {
    if(this.uiLayer.isEmpty()) {
      this.unbindKeys()
      game.cursor.switchVisor(Cursor.visors.GUI)
    }
    this.uiLayer.add(c)
    c.onResetEvent()
  }

  close(c) {
    this.uiLayer.remove(c)
    if(this.uiLayer.isEmpty()) {
      this.bindKeys()
      game.cursor.switchVisor(Cursor.visors.GUN)
    }
  }
}
