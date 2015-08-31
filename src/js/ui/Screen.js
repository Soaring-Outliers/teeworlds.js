import me from 'melonJS'
import game from '../game.js'
import UIUtil from './UIUtil.js'
import Cursor from './Cursor.js'
import Menubar from './Menubar.js'

class MasterComponent extends me.Renderable {
    constructor(screen) {
      super()
      super.init(0, 0, 1, 1)
      this.components = []
      this.alwaysUpdate = true
      this.isPersistent = true
      this.floating = true
      this.z = 100
      this.screen = screen

      me.input.bindKey(me.input.KEY.ENTER, "enter", true)
      me.input.bindKey(me.input.KEY.ESC, "esc", true)
    }

    add(c) {
      this.components.push(c)
      c.onResetEvent()
    }

    remove(c) {
      this.components.remove(c)
      c.onDestroyEvent()
    }

    draw() {
      this.components.map((c) => c.draw.apply(c, arguments))
    }

    update(dt) {
      var activeComponent = this.components.length >= 1 ?
        this.components[this.components.length - 1] :
        undefined

      if(me.input.isKeyPressed("esc")) {
        if(!activeComponent) {
          this.screen.open(this.screen.menubar)
        } else if(activeComponent.onEscKey) {
          activeComponent.onEscKey()
        }
      }
      if(activeComponent && me.input.isKeyPressed("enter")) {
        if(activeComponent.onEnterKey) {
          activeComponent.onEnterKey()
        }
      }
      this.components.map((c) => c.update.apply(c, arguments))
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
    this.menubar = new Menubar()
    this.masterComponent = new MasterComponent(this)
    me.game.world.addChild(this.masterComponent)
  }

  onResetEvent() {
    me.levelDirector.loadLevel("mini")
    this.bindKeys()
    this.askUserName()
  }

  onDestroyEvent() {
    this.unbindKeys()
  }

  bindKeys() {
    me.input.bindKey(me.input.KEY.Q, "left")
    me.input.bindKey(me.input.KEY.D, "right")
    me.input.bindKey(me.input.KEY.SPACE, "jump", false)
    me.input.bindKey(me.input.KEY.X, "shoot", true)
    me.input.bindPointer(me.input.KEY.X)
  }

  unbindKeys() {
    me.input.unbindKey(me.input.KEY.Q)
    me.input.unbindKey(me.input.KEY.D)
    me.input.unbindKey(me.input.KEY.SPACE)
    me.input.unbindKey(me.input.KEY.X)
    me.input.unbindPointer(me.input.KEY.X)
  }

  open(c) {
    if(this.masterComponent.isEmpty()) {
      this.unbindKeys()
      game.cursor.switchVisor(Cursor.visors.GUI)
    }
    this.masterComponent.add(c)
    c.onResetEvent()
  }

  close(c) {
    this.masterComponent.remove(c)
    if(this.masterComponent.isEmpty()) {
      this.bindKeys()
      game.cursor.switchVisor(Cursor.visors.GUN)
    }
  }

  askUserName() {
    var askUserName = UIUtil.prompt("Enter your username", false)
      .then((username) => {
        localStorage.setItem("twjs.username", username)
        return game.connection.init(username)
      })
      .then(
        () => UIUtil.alert("You are connected"),
        (err) => {
          console.log(err)
          UIUtil.alert("Error: try again")
            .then(askUserName)
        }
      )
  }

  joinUser() {
    var joinUser = UIUtil.prompt("Enter the username of \nthe player you want to join", true)
      .then((username) => game.connection.connectTo(username))
      .then(
        () => {},
        (err) => {
          console.log(err)
          UIUtil.alert("Error: try again")
            .then(joinUser)
        }
      )
  }
}
