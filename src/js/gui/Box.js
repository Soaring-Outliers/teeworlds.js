import me from 'melonJS'
import game from '../game.js'
import Component from './Component.js'

export default class Box extends Component {

  constructor(a, b) {
    let innerComponent = null
    let options
    if(a instanceof Component) {
      innerComponent = a
      options = b || {}
    } else {
      options = a || {}
    }
    let {
      padding = 20,
      radius = 10,
      topLeftRadius = radius,
      topRightRadius = radius,
      bottomLeftRadius = radius,
      bottomRightRadius = radius,
      color = "black",
      alpha = 0.8
    } = options

    if(innerComponent != null) {
      super({
        width: innerComponent.width + padding * 2,
        height: innerComponent.height + padding * 2,
      })
      if(innerComponent.centeredV) this.centerV()
      if(innerComponent.centeredH) this.centerH()
      this.innerComponent = innerComponent
    } else {
      super(options)
      this.innerComponent = null
    }

    this.padding = padding
    this.radius = radius
    this.topLeftRadius = topLeftRadius
    this.topRightRadius = topRightRadius
    this.bottomLeftRadius = bottomLeftRadius
    this.bottomRightRadius = bottomRightRadius
    this.color = color
    this.alpha = alpha
  }

  set inner(inner) {
    this.innerComponent = inner
    super.width = inner.width + this.padding * 2
    super.height = inner.height + this.padding * 2
    this.renderer.needUpdate = true
  }

  get inner() {
    this.renderer.needUpdate = true
    return this.innerComponent
  }

  set width(width) {
    this.innerComponent.width = width
    super.width = this.innerComponent.width + this.padding * 2
    this.renderer.needUpdate = true
  }

  set height(height) {
    this.innerComponent.height = height
    super.height = this.innerComponent.height + this.padding * 2
    this.renderer.needUpdate = true
  }

  render(renderer) {
    super.render(renderer)

    let ctx = renderer.context
    let width = ~~this.width
    let height = ~~this.height
    let topLeftRadius = ~~this.topLeftRadius
    let topRightRadius = ~~this.topRightRadius
    let bottomLeftRadius = ~~this.bottomLeftRadius
    let bottomRightRadius = ~~this.bottomRightRadius
    ctx.beginPath()
    ctx.moveTo(topLeftRadius, 0)
    ctx.lineTo(width - topRightRadius, 0)
    ctx.quadraticCurveTo(width, 0, width, topRightRadius)
    ctx.lineTo(width, height - bottomRightRadius)
    ctx.quadraticCurveTo(width, height, width - bottomRightRadius, height)
    ctx.lineTo(bottomLeftRadius, height)
    ctx.quadraticCurveTo(0, height, 0, height - bottomLeftRadius)
    ctx.lineTo(0, topLeftRadius)
    ctx.quadraticCurveTo(0, 0, topLeftRadius, 0)
    ctx.closePath()

    let oldAlpha = renderer.globalAlpha();
	  renderer.setGlobalAlpha(this.alpha)
    ctx.fillStyle = this.color
    ctx.fill()
	  renderer.setGlobalAlpha(oldAlpha)

    if(this.innerComponent != null) {
      renderer.save()
      renderer.translate(this.padding, this.padding)
      this.innerComponent.render(renderer)
      renderer.restore()
    }
  }

  get height() {
    return super.height
  }
  get width() {
    return super.width
  }
  get x() {
    return super.x
  }
  get y() {
    return super.y
  }
  set x(x) {
    super.x = x
  }
  set y(y) {
    super.y = y
  }
}
