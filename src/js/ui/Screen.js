import me from 'melonJS'
import game from '../game.js'
import UIUtil from './UIUtil.js'
import Cursor from './Cursor.js'
import Menubar from './Menubar.js'

export default class Screen extends me.ScreenObject {

  constructor() {
    super()
    super.init()
    this.menubar = new Menubar(this)
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
    var askUserName = this.askUserName.bind(this)
    this.close(this.menubar)
    UIUtil.prompt("Enter your username", {cancelable: false, okText: "Start"})
      .then((username) => {
        UIUtil.alert("Connecting...", {closable: false})
        return game.connection.init(username)
      })
      .then(
        () => UIUtil.alert("You are connected"),
        (err) => alertFromErr(err).then(askUserName)
      )
  }

  joinUser() {
    var joinUser = this.joinUser.bind(this)
    this.close(this.menubar)
    UIUtil.prompt("Enter the username of \nthe player you want to join")
      .then((username) => {
        UIUtil.alert("Connecting...", {closable: false})
        return game.connection.connectTo(username)
      })
      .then(
        (c) => UIUtil.alert("You have joined " + c.peer),
        (err) => {
          if(err !== "UIUtil: prompt canceled")
            alertFromErr(err).then(joinUser)
        }
      )
  }
}

function alertFromErr(err) {
  var message = "Connection error"
  if(err.type === "unavailable-id")
    message = "Username already taken"
  else if(err.type === "peer-unavailable")
    message = "User not connected"
  console.log(err)
  return UIUtil.alert("Error: " + message)
}

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
