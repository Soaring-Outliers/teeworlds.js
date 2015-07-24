import me from 'melonJS'
import extend from 'extend'


export default class Component extends me.GUI_Object {

  constructor(options) {
    super()
    let {
      x, y, width = 1, height = 1,
      centeredH = true, centeredV = true
    } = options || {}
    
    if (x == undefined && centeredH !== false) 
      x = me.game.viewport.width / 2 - width / 2
    else centeredH = false
    if (y == undefined && centeredV !== false) 
      y = me.game.viewport.height / 2 - height / 2
    else centeredV = false
    
    const image = me.video.createCanvas(width, height)
    const renderer = new me.CanvasRenderer(
      image, width, height,
      {transparent: true}
    )
    
    super.init(x, y, {image})

    this.z = Infinity
    this.isPersistent = true
    this.floating = true
    
    this.centeredH = centeredH
    this.centeredV = centeredV
    this.renderer = renderer
    this.renderer.needUpdate = true
  }
  
  centerV(options) {
    const { parentY = 0, parentHeight = me.game.viewport.height } = options || {}
    this.y = parentY + (parentHeight / 2 - this.height / 2)

    if (arguments.length == 0) {
      this.centeredV = true
    } else {
      this.centeredV = false
    }
    return this.pos.y
  }
  
  centerH(options) {
    const { parentX = 0, parentWidth = me.game.viewport.width } = options || {}
    this.x = parentX + (parentWidth / 2 - this.width / 2)

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

    this.renderer.needUpdate = true
    this.renderer.resize(width, this.height)
  }
  
  set height(height) {
    this.resizeBounds(this.width, height)
    
    if (this.centeredV) this.centerV()
    
    this.renderer.needUpdate = true
    this.renderer.resize(this.width, height)
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
    this.renderer.needUpdate = true
  }

  set y(y) {
    this.pos.y = y
    this.centeredV = false
    this.renderer.needUpdate = true
  }

  get x() {
    return this.pos.x
  }
  
  get y() {
    return this.pos.y
  }

  draw(renderer) {
    if(this.renderer.needUpdate) {
      this.renderer.prepareSurface()
      this.render(this.renderer)
    }
    super.draw(renderer)
  }
  
  render(renderer) {
    this.renderer.needUpdate = false
  }

  onDeactivateEvent() {
    me.event.unsubscribe(me.event.WINDOW_ONRESIZE);
  }

  onActivateEvent() {
    me.event.subscribe(me.event.WINDOW_ONRESIZE, () => {
      if(this.centeredV) this.centerV();
      if(this.centeredH) this.centerH();
    })
  }
}
