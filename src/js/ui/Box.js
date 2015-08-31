import me from 'melonJS'
import game from '../game.js'
import Component from './Component.js'

export default class Box extends Component {

  constructor(a, b) {
    var innerComponent = null
    var options
    if(a instanceof Component) {
      innerComponent = a
      options = b || {}
    } else options = a || {}

    var {
      x, y, width, height,
      padding, radius = 20,
      color = "black", opacity = 0.6, overOpacity = opacity,
      onClick
    } = options
    padding = Component.parsePadding(padding, 10)

    if(typeof radius === "number")
      radius = {topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius}

    if(innerComponent) {
      super({
        x, y,
        width: width || innerComponent.width + padding.right + padding.left,
        height: height || innerComponent.height + padding.top + padding.bottom,
      })
      innerComponent.parent = this
      this.innerComponent = innerComponent
    } else {
      super(options)
      this.innerComponent = null
    }

    this.padding = padding
    this.radius = radius
    this.color = color
    this.overOpacity = overOpacity
    this.outOpacity = opacity
    this.setOpacity(opacity)

    if(innerComponent) {
      this.innerComponent.moveTo({x: this.pos.x + padding.top, y: this.pos.y + padding.left})
      if(width) this.innerComponent.resize({width: width + padding.right + padding.left})
      if(height) this.innerComponent.resize({height: height + padding.top + padding.bottom})
    }
  }

  moveTo({x, y}) {
    x = x || this.pos.x
    y = y || this.pos.y
    super.moveTo({x, y})
    if(this.innerComponent)
      this.innerComponent.moveTo({x: x + this.padding.top, y: y + this.padding.left})
  }

  resize({width, height}, childResize = true) {
    if(this.innerComponent) {
      if(childResize)
        this.innerComponent.resize({width, height})
      super.resize({
        width: this.innerComponent.width + this.padding.right + this.padding.left,
        height: this.innerComponent.height + this.padding.top + this.padding.bottom
      })
    } else {
      super.resize({width, height})
    }
  }

  update(dt) {
    var updated = super.update(dt)
    if(this.innerComponent) {
      updated = this.innerComponent.update(dt) || updated
    }
    return updated
  }

  draw(renderer) {
    super.draw.apply(this, arguments)
    if(this.innerComponent) {
      this.innerComponent.draw.apply(this.innerComponent, arguments)
    }
  }

  onOver(event) {
    this.setOpacity(this.overOpacity)
    this.renderer.needUpdate = true
  }

  onOut(event) {
    this.setOpacity(this.outOpacity)
    this.renderer.needUpdate = true
  }

  render() {
    super.render()

    var ctx = this.renderer.context
    var width = ~~this.width
    var height = ~~this.height
    var midHeight = height / 2
    var midWidth = width / 2
    var topLeft = ~~Math.min(this.radius.topLeft, midWidth, midHeight)
    var topRight = ~~Math.min(this.radius.topRight, midWidth, midHeight)
    var bottomLeft = ~~Math.min(this.radius.bottomLeft, midWidth, midHeight)
    var bottomRight = ~~Math.min(this.radius.bottomRight, midWidth, midHeight)
    ctx.beginPath()
    ctx.moveTo(topLeft, 0)
    ctx.lineTo(width - topRight, 0)
    ctx.quadraticCurveTo(width, 0, width, topRight)
    ctx.lineTo(width, height - bottomRight)
    ctx.quadraticCurveTo(width, height, width - bottomRight, height)
    ctx.lineTo(bottomLeft, height)
    ctx.quadraticCurveTo(0, height, 0, height - bottomLeft)
    ctx.lineTo(0, topLeft)
    ctx.quadraticCurveTo(0, 0, topLeft, 0)
    ctx.closePath()

    ctx.fillStyle = this.color
    ctx.fill()
  }

  onChildResize() {
    if(this.innerComponent) {
      this.resize(this.innerComponent, false)
    }
  }

  onResetEvent() {
    super.onResetEvent()
    if(this.innerComponent) this.innerComponent.onResetEvent()
  }

  onDestroyEvent() {
    super.onDestroyEvent()
    if(this.innerComponent) this.innerComponent.onDestroyEvent()
  }
}
