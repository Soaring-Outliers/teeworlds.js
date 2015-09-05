import me from 'melonJS'
import game from '../game.js'
import Component from './Component.js'

function computeLayoutSize(panel) {
  if(panel.components) {
    var width = 0, height = 0
    if (panel.isVertical) {
      panel.components.map(cmp => {
        height += cmp.height + panel.spacing * game.uiScale
        width = Math.max(cmp.width, width)
      })
      height -= panel.spacing * game.uiScale
    } else {
      panel.components.map(cmp => {
        width += cmp.width + panel.spacing * game.uiScale
        height = Math.max(cmp.height, height)
      })
      width -= panel.spacing * game.uiScale
    }
    return {width, height}
  }
  return {}
}

export default class Panel extends Component {

  constructor(a, b) {
    var components = null
    var options = {}
    if(a instanceof Array || a instanceof Component) {
      components = a instanceof Array ? a : [a]
      options = b || options
    } else options = a || options

    var {
      x, y, width, height, fill = Panel.FIT,
      spacing = 20, layout = Panel.VERTICAL, start = Panel.TOPLEFT
    } = options || {}
    var isVertical = layout === Panel.VERTICAL, isHorizontal = !isVertical
    var isLeading = start === Panel.TOPLEFT, isTrealing = !isLeading
    var isFillGrow = fill === Panel.GROW, isFillFit = !isFillGrow
    var size = computeLayoutSize({components, isVertical, spacing})
    super({x, y, width: width || size.width, height: height || size.height})

    this.spacing = spacing
    this.layout = layout
    this.isVertical = isVertical
    this.isHorizontal = isHorizontal
    this.isLeading = isLeading
    this.isTrealing = isTrealing
    this.start = start
    this.components = []
    this.add(components)
  }

  moveTo({x, y}) {
    super.moveTo({x, y})
    this.adjustComponentsPos()
  }

  adjustComponentsPos() {
    var parentX = this.pos.x, parentWidth = this.width
    var parentY = this.pos.y, parentHeight = this.height

    if (this.isVertical) {
      var posY = this.pos.y
      if(this.isTrealing) posY += this.height

      this.components.map(cmp => {
        cmp.centerH({parentX, parentWidth})
        cmp.moveTo({y: (this.isLeading ? posY : posY - cmp.height)})

        var delta = cmp.height + this.spacing
        posY = posY + (this.isLeading ? delta : -delta)
      })
    } else {
      var posX = this.pos.x
      if(this.isTrealing) posX += this.width

      this.components.map(cmp => {
        cmp.centerV({parentY, parentHeight})
        cmp.moveTo({x: (this.isLeading ? posX : posX - cmp.width)})

        var delta = cmp.width + this.spacing
        posX = posX + (this.isLeading ? delta : -delta)
      })
    }
  }

  insert(component, index) {
    if(component && component instanceof Component) {
      this.components.splice(index, 0, component)
      component.parent = this
      this.resize(computeLayoutSize(this))
      this.adjustComponentsPos()
    }
  }

  add(component, adjust = true) {
    if (component) {
      if (component instanceof Array) {
        component.map(cmp => this.add(cmp, false))
      }
      else if(component instanceof Component) {
        this.components.push(component)
        component.parent = this
      }

      if(adjust) {
        this.resize(computeLayoutSize(this))
        this.adjustComponentsPos()
      }
    }
  }

  remove(component) {
    if (component && component instanceof Component) {
      this.components.remove(component);
      this.resize(computeLayoutSize(this))
      this.adjustComponentsPos()
    }
  }

  clear() {
    this.onDestroyEvent()
    this.components = []
  }

  onChildResize() {
    this.resize(computeLayoutSize(this))
    this.adjustComponentsPos()
  }

  onResetEvent() {
    super.onResetEvent()
    this.components.map(cmp => cmp.onResetEvent())
  }

  onDestroyEvent() {
    super.onDestroyEvent()
    this.components.map(cmp => cmp.onDestroyEvent())
  }

  draw(renderer) {
    super.draw.apply(this, arguments)
    this.components.map(cmp => cmp.draw.apply(cmp, arguments))
  }

  update(dt) {
    var updated = super.update(dt)
    this.components.map(cmp => updated = cmp.update(dt) || updated)
    return updated
  }
}
Panel.HORIZONTAL = 1
Panel.VERTICAL = 0
Panel.TOPLEFT = 2
Panel.BOTTOMRIGHT = 3
Panel.FIT = 4
Panel.GROW = 5
