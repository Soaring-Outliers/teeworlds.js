import me from 'melonJS'
import game from '../game.js'
import Component from './Component.js'
//import FramedRect from './FramedRect.js'

function formatText(text) {
  return text.trim()
             .replace(/\s*(\n)\s*/, "$1")
}

function computedTextSize(lines, lineSpacing) {
  var fontMeasure, textWidth = 0, textHeight = 0
  lines.map(line => {
    fontMeasure = game.font.measureText(me.video.renderer, line)
    textWidth = Math.max(textWidth, fontMeasure.width)
  })
  
  textHeight = lines.length * fontMeasure.height + lineSpacing * (lines.length - 1)
  
  return {textWidth, textHeight}
}

export default class TextBox extends Component {
  
  /**
   * options:
   *    options from Components
   *    text => (string) text too be displayed in the component
   *    align => (string) text alignement options: ex: "center middle"
   *    frame => (boolean) true if you want a FramedRect around the TextBox
   *    lineSpacing => (number) number of pixel between lines
   */
  constructor(options, frameOptions) {
    options = options || {}
    let text = formatText(options.text || "")
    let lines = text.split("\n")
    let {lineSpacing = 8} = options
    let {textWidth, textHeight} = computedTextSize(lines, lineSpacing)
    
    let {
      x, y,
      width = 0, height = 0,
      align = "center middle",
      frame = false,
      fitTextH = !width,
      fitTextV = !height
    } = options
    super({
      x, y, 
      width: fitTextH ? textWidth : width, 
      height: fitTextV ? textHeight : height
    })

    this.lines = lines
    this.lineSpacing = lineSpacing
    let alignArray = align.trim().toUpperCase().split(" ").sort()
    
    this.fitTextH = fitTextH
    this.fitTextV = fitTextV
    
    this.textZone = new Component({
      x: this.x, y: this.y, 
      width: textWidth, height: textHeight
    })
    if(alignArray.indexOf("CENTER") != -1)
      this.textZone.centerH({parentX: this.x, parentWidth: this.width})
    if(alignArray.indexOf("MIDDLE") != -1)
      this.textZone.centerV({parentY: this.y, parentHeight: this.height})
    
    this.renderer.needUpdate = true
    
    /*if(frame) {
      this.frame = new FramedRect(this, frameOptions)
      
      var padding = this.frame.getPadding()
      this.textZone.x = padding.top
      this.textZone.y = padding.right
    }*/
  }
  
  set width(width) {
    //this.textZone.width = width
    if(width != this.textWidth) {
      if(this.textZone.centeredH)
        this.textZone.centerH({parentX: this.x, parentWidth: width})
      this.fitTextH = false
    }
      
    //if(this.frame) {
    //  this.frame.setWidth(width)
    //  width = this.frame.width
    //}
    super.width = width
    this.renderer.needUpdate = true
  }
  
  set height(height) {
    //this.textZone.height = height
    if(height != this.textHeight) {
      if(this.textZone.centeredV)
        this.textZone.centerV({parentY: this.y, parentHeight: height})
      this.fitTextV = false
    }
      
    //if(this.frame) {
    //  this.frame.setWidth(width)
    //  width = this.frame.width
    //}
    super.height = height
    this.renderer.needUpdate = true
  }
  
  get height() {
    return super.height
  }

  get width() {
    return super.width
  }

  fitToText(fitTextH = this.fitTextH, fitTextV = this.fitTextV) {
     this.fitTextH = fitTextH
     this.fitTextV = fitTextV
  }
  
  set text(text) {
    this.lines = formatText(text).split('\n')
    this.renderer.needUpdate = true
    
    let {textWidth, textHeight} = computedTextSize(this.lines, this.lineSpacing)
    this.textWidth = textWidth
    this.textHeight = textHeight
  }
  
  render(renderer) {
    var posX = 0,//this.textZone.x,
        posY = 0//this.textZone.y
          
    //if(this.frame)
    //  ctx.drawImage(this.frame.cache, 0, 0, this.width, this.height)
        
    this.lines.map(line => {
      var textMesure = game.font.measureText(renderer, line)
      //if(this.align[0] === "CENTER")
      //  posX = this.textZone.pos.x + this.textPosX + (this.textWidth / 2) - (textMesure.width / 2)
      
      game.font.drawStroke(renderer, line, posX, posY)
      game.font.draw(renderer, line, posX, posY)
      posY += this.lineSpacing + textMesure.height
    }) 
    super.render()
  }
}
