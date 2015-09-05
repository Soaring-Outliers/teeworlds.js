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

    var horizontalPadding = game.uiScale * (padding.right + padding.left)
    var verticalPadding = game.uiScale * (padding.top + padding.bottom)
    if(innerComponent) {
      super({
        x, y,
        width: width || innerComponent.width + horizontalPadding,
        height: height || innerComponent.height + verticalPadding,
      })
    } else super(options)
    this._inner = null

    this.padding = padding
    this.radius = radius
    this.color = color
    this.overOpacity = overOpacity
    this.outOpacity = opacity
    this.setOpacity(opacity)

    if(innerComponent) {
      this.innerComponent = innerComponent
      if(width) innerComponent.resize({width: width - horizontalPadding})
      if(height) innerComponent.resize({height: height - verticalPadding})
    }
  }

  get innerComponent() {
    return this._inner
  }

  set innerComponent(component) {
    if(component) {
      this._inner = component
      component.parent = this
      component.moveTo({
        x: this.pos.x + this.padding.left * game.uiScale,
        y: this.pos.y + this.padding.top * game.uiScale
      })
      this.resize(component, false)
    }
  }

  moveTo({x, y} = {}) {
    x = x || this.pos.x
    y = y || this.pos.y
    super.moveTo({x, y})
    if(this._inner) {
      this._inner.moveTo({
        x: x + this.padding.left * game.uiScale,
        y: y + this.padding.top * game.uiScale
      })
    }
  }

  resize({width, height} = {}, childResize = true) {
    if(this._inner) {
      if(childResize) {
        this._inner.resize({width, height})
      }
      super.resize({
        width: this._inner.width + (this.padding.right + this.padding.left) * game.uiScale,
        height: this._inner.height + (this.padding.top + this.padding.bottom) * game.uiScale
      })
    } else {
      super.resize({width, height})
    }
  }

  update(dt) {
    var updated = super.update(dt)
    if(this._inner) {
      updated = this._inner.update(dt) || updated
    }
    return updated
  }

  draw(renderer) {
    super.draw.apply(this, arguments)
    if(this._inner) {
      this._inner.draw.apply(this._inner, arguments)
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
    var topLeft = ~~(game.uiScale * Math.min(this.radius.topLeft, midWidth, midHeight))
    var topRight = ~~(game.uiScale * Math.min(this.radius.topRight, midWidth, midHeight))
    var bottomLeft = ~~(game.uiScale * Math.min(this.radius.bottomLeft, midWidth, midHeight))
    var bottomRight = ~~(game.uiScale * Math.min(this.radius.bottomRight, midWidth, midHeight))
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
    if(this._inner) {
      this.resize(this._inner, false)
    }
  }

  onResetEvent() {
    super.onResetEvent()
    if(this._inner) this._inner.onResetEvent()
  }

  onDestroyEvent() {
    super.onDestroyEvent()
    if(this._inner) this._inner.onDestroyEvent()
  }
}
