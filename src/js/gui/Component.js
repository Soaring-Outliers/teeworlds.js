import me from 'melonJS'
import extend from 'extend'

function computeCenterV({
    parentY = 0, 
    parentHeight = me.video.getPos().height, 
    height = 0
}) {
  return parentY + (parentHeight / 2 - ((height || 0) / 2))
}

function computeCenterH({
    parentX = 0,
    parentWidth = me.video.getPos().width, 
    width = 0
}) {
  return parentX + (parentWidth / 2 - ((width || 0) / 2))
}

export default class Component extends me.GUI_Object {

  constructor(options) {
    super()
    var {
      x, y,
      pos,
      width = 0,
      height = 0,
      centeredH = true,
      centeredV = true
    } = options || {}
    
    if (pos) {
      x = pos.x
      y = pos.y
    } else {
      if (x == undefined && centeredH != false) 
        x = computeCenterH({width})
      else centeredH = false
      if (y == undefined && centeredV != false) 
        y = computeCenterV({height})
      else centeredV = false
    }
    
    let image = me.video.createCanvas(width, height)
    let imageRenderer = new me.CanvasRenderer(
      image,
      width,
      height,
      {transparent: true}
    )
    
    super.init(x, y, {image})

    this.z = Infinity
    this.isPersistent = true
    this.floating = true
    
    this.centeredH = centeredH
    this.centeredV = centeredV
    this.imageRenderer = imageRenderer
    this.imageRenderer.needUpdate = true
  }
  
  centerV({parentY, parentHeight}) {
    this.y = computeCenterV({
      parentY, parentHeight, height: this.height
    })

    if (arguments.length == 0) {
      this.centeredV = true
    } else {
      this.centeredV = false
    }
    
    return this.pos.y
  }
  
  centerH({parentX, parentWidth}) {
    this.x = computeCenterH({
      parentX, parentWidth, width: this.width
    })

    if (arguments.length == 0) {
      this.centeredH = true
    } else {
      this.centeredH = false
    }

    return this.pos.x
  }
  
  set width(width) {
    this.resizeBounds(width, this.height)
    
    if (this.centeredH) this.centerH()

    this.imageRenderer.needUpdate = true
    this.imageRenderer.resize(width, this.height)
  }
  
  set height(height) {
    this.resizeBounds(this.width, height)
    
    if (this.centeredV) this.centerV()
    
    this.imageRenderer.needUpdate = true
    this.imageRenderer.resize(this.width, height)
  }

  get height() {
    return super.height
  }

  get width() {
    return super.width
  }
  
  set x(x) {
    this.pos.x = x
    this.centeredH = false
    this.imageRenderer.needUpdate = true
  }

  set y(y) {
    this.pos.y = y
    this.centeredV = false
    this.imageRenderer.needUpdate = true
  }

  get x() {
    return this.pos.x
  }
  
  get y() {
    return this.pos.y
  }

  draw(renderer) {
    if(this.imageRenderer.needUpdate) {
      this.render(this.imageRenderer)
    }
    super.draw(renderer)
  }
  
  render(renderer) {
    this.imageRenderer.needUpdate = false
  }

  onDeactivateEvent() {
    me.event.unsubscribe(me.event.WINDOW_ONRESIZE);
  }

  onActivateEvent() {
    me.event.subscribe(me.event.WINDOW_ONRESIZE, () => {
      if(this.centeredV) this.centerV({});
      if(this.centeredH) this.centerH({});
    })
  }
}
