import me from 'melonJS'
import extend from 'extend'
import Component from './Component.js'
import ButtonSelectionHandler from './ButtonSelectionHandler.js'
import Button from './Button.js'

export default class Panel extends Component {

  constructor(options) {
    let defaults = {
        spacing: 20,
        height: 0,
        width: 0,
        layout: Panel.VERTICAL,
        components: undefined
      }
    options = extend(defaults, (options || {}))
    super({
      y: options.y,
      width: options.width,
      height: options.height,
      cache: false
    })

    this.spacing = options.spacing
    this.layout = options.layout
    this.buttonSelectionHandler = new ButtonSelectionHandler({layout: options.layout})
    this.components = []

    this.add(options.components)
  }

  setSpacing(spacing) {
    this.spacing = spacing
  }

  setX(x) {
    super.setX(x)
    if (this.layout === Panel.VERTICAL) {
      this.components.map(cmp => {
        cmp.centerH({parentX: this.pos.x, parentWidth: this.width})
      })
    }
    else {
      var posX = this.pos.x
      this.components.map(cmp => {
        cmp.setX(posX)
        posX += cmp.width + this.spacing
      })
    }
  }

  setY(y) {
    super.setY(y)
    if (this.layout === Panel.VERTICAL) {
      var posY = this.pos.y
      this.components.map(cmp => {
        cmp.setY(posY)
        posY += cmp.height + this.spacing
      })
    }
    else {
      this.components.map( cmp => {
        cmp.centerV({parentY: this.pos.y, parentHeight: this.height})
      })
    }
  }

  adjustComponents() {
    var height, width
    if (this.layout === Panel.VERTICAL) {
      height = 0
      width = this.width

      this.components.map( cmp => {
        height += cmp.height + this.spacing
        width = Math.max(cmp.width, width)
      }, this)
      height -= this.spacing
    }
    else {
      height = this.height
      width = 0

      this.components.map(cmp => {
        width += cmp.width + this.spacing
        height = Math.max(cmp.height, height)
      })
      width -= this.spacing
    }

    if (height != this.height) this.setHeight(height)
    if (width != this.width) this.setWidth(width)

    this.setX(this.pos.x)
    this.setY(this.pos.y)
  }

  add(component) {
    if (component != null && component != undefined) {
      if (component instanceof Array) {
        component.map(cmp => {
          this.components.push(cmp)
          if (cmp instanceof Button)
            this.buttonSelectionHandler.add(cmp)
        })
      } else this.components.push(component)

      this.adjustComponents()
    }
  }
  
  clear() {
    this.onDestroyEvent()
    this.components = []  
  }

  remove(component) {
    this.components.remove(component)

    if (component instanceof Button)
      this.buttonSelectionHandler.remove(component)

    this.adjustComponents()
  }

  onResetEvent() {
    this.components.map(cmp => {
      if (cmp != null && cmp != undefined && cmp.onResetEvent != undefined)
        cmp.onResetEvent()
    })
    this.buttonSelectionHandler.onResetEvent()
  }

  onDestroyEvent() {
    this.components.map(cmp => {
      if (cmp != null && cmp != undefined && cmp.onDestroyEvent != undefined)
        cmp.onDestroyEvent()
    })
    this.buttonSelectionHandler.onDestroyEvent()
  }

  draw(context) {
    this.buttonSelectionHandler.update()
    this.components.map(cmp => {
      cmp.draw(context)
    })
  }
}
Panel.HORIZONTAL = 1
Panel.VERTICAL = 0