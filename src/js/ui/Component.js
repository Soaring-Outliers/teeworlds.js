import me from 'melonJS'
import game from '../game.js'

export default class Component extends me.GUI_Object {

  constructor(options) {
    super()
    var {
      x, y, width = 1, height = 1, isClickable = false, onClick = false, onEnterKey, onEscKey,
      centeredH = true, centeredV = true, onScreenResize
    } = options || {}

    if (x == undefined && centeredH !== false)
      x = me.game.viewport.width / 2 - width / 2
    else centeredH = false
    if (y == undefined && centeredV !== false)
      y = me.game.viewport.height / 2 - height / 2
    else centeredV = false

    var image = me.video.createCanvas(width, height)
    var renderer = new me.CanvasRenderer(
      image, width, height, {transparent: true}
    )

    super.init(x, y, {image})

    this.centeredH = centeredH
    this.centeredV = centeredV
    this.renderer = renderer
    this.renderer.needUpdate = true
    this.parent = null

    this.isClickable = onClick
    this._onClick = onClick || null
    this.alwaysUpdate = true
    this.onScreenResize = onScreenResize
    this.onEnterKey = onEnterKey
    this.onEscKey = onEscKey
  }

  centerV(options) {
    var {
      parentY = this.parent ? this.parent.pos.y : 0,
      parentHeight = this.parent ? this.parent.height : me.game.viewport.height
    } = options || {}
    this.moveTo({y: parentY + (parentHeight / 2 - this.height / 2)})

    this.centeredV = arguments.length == 0
    return this.pos.y
  }

  centerH(options) {
    var {
      parentX = this.parent ? this.parent.pos.x : 0,
      parentWidth = this.parent ? this.parent.width : me.game.viewport.width
    } = options || {}
    this.moveTo({x: parentX + (parentWidth / 2 - this.width / 2)})

    this.centeredH = arguments.length == 0
    return this.pos.x
  }

  resize({width, height}) {
    var resizeW = !!width
    var resizeH = !!height
    height = height || this.height
    width = width || this.width
    if(resizeH || resizeW) {
      super.resize(width, height)

      if (resizeW && this.centeredH) this.centerH()
      if (resizeH && this.centeredV) this.centerV()

      this.renderer.needUpdate = true
      this.renderer.resize(width, height)
      if(this.parent) {
        this.parent.onChildResize()
      }
    }
  }

  moveTo({x, y}) {
    if(x) {
      this.pos.x = x
      this.centeredH = false
    }
    if(y) {
      this.pos.y = y
      this.centeredV = false
    }
  }

  draw(renderer) {
    if(this.renderer.needUpdate) {
      this.renderer.prepareSurface()
      this.render()
    }
    super.draw.apply(this, arguments)
  }

  render() {
    if (game.debug)
      Component.renderDebugBox({
        color: "red", renderer: this.renderer,
        width: this.width, height: this.height
      })
    this.renderer.needUpdate = false
  }

  set onClick(cb) {
    this.isClickable = cb ? true : false
    this._onClick = cb
  }

  get onClick() {
    return this._onClick ? this._onClick : super.onClick
  }

  set onScreenResize(cb) {
    this._onScreenResize = () => {
      if(this.centeredV) this.centerV()
      if(this.centeredH) this.centerH()
      if(cb) cb()
    }
    return cb
  }

  onChildResize() {}

  onResetEvent() {
    me.event.subscribe(me.event.WINDOW_ONRESIZE, this._onScreenResize)
  }

  onDestroyEvent() {
    me.event.unsubscribe(me.event.WINDOW_ONRESIZE, this._onScreenResize)
  }

  static renderDebugBox({color, renderer, x = 0, y = 0, width, height} = {}) {
    var ctx = renderer.context
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    renderer.strokeRect(x, y, width, height)
  }

  static parsePadding(padding, defaultPadding) {
    if(typeof padding === "number")
      padding = {top: padding, bottom: padding, right: padding, left: padding}

    if(typeof padding !== "object")
      padding = {}

    if(padding.bottom === undefined) padding.bottom = defaultPadding
    if(padding.right === undefined) padding.right = defaultPadding
    if(padding.left === undefined) padding.left = defaultPadding
    if(padding.top === undefined) padding.top = defaultPadding
    return padding
  }
}
