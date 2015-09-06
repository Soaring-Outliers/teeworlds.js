import me from 'melonJS'
import game from '../game.js'
import Component from './Component.js'

function formatText(text) {
  return text.trim().replace(/\s*(\n)\s*/g, "$1")
}

function computedTextSize(text) {
  var fontMeasure, textWidth = 1
  var widthPadding =  text.font.lineWidth * 2 + (text.padding.right + text.padding.left) * game.uiScale
  var heightPadding = text.font.lineWidth * 2 + (text.padding.bottom + text.padding.top) * game.uiScale
  text.lines.map(line => {
    fontMeasure = text.font.measureText(text.renderer, line)
    // HACK: Some weird but necessary correction on text width
    var widthCorrection = line.length * 0.53
    textWidth = Math.max(textWidth, fontMeasure.width + widthPadding + widthCorrection)
  })
  var lineWidth = fontMeasure.height + heightPadding
  var textHeight = text.lines.length * lineWidth
  textHeight += (text.lines.length - 1) * (text.lineSpacing * game.uiScale)
  textHeight = ~~textHeight
  textWidth = ~~textWidth
  return {textWidth, textHeight, lineWidth}
}

export default class Text extends Component {

  /**
   * options:
   *    options from Components
   *    text => (string) text too be displayed in the component
   *    lineSpacing => (number) number of pixel between lines
   */
  constructor(options) {
    var {
      x, y, width, height, font = game.titleFont, centered = true,
      text, fitTextH = !width, fitTextV = !height, lineSpacing = -2, padding
    } = options || {}
    padding = Component.parsePadding(padding, 2)
    var lines = formatText(text || "").split("\n")
    var {textWidth, textHeight, lineWidth} =
      computedTextSize({lines, padding, lineSpacing, renderer: me.video.renderer, font})
    super({
      x, y,
      width: fitTextH ? textWidth : width,
      height: fitTextV ? textHeight : height
    })

    this.font = font
    this.centered = centered
    this.lines = lines
    this.lineSpacing = lineSpacing
    this.fitTextH = fitTextH
    this.fitTextV = fitTextV
    this.textWidth = textWidth
    this.textHeight = textHeight
    this.lineWidth = lineWidth
    this.padding = padding

    // HACK: Correct text position by rerendering
    setTimeout(() => {this.renderer.prepareSurface(); this.render()}, 500);
  }

  fitToText({fitTextH, fitTextV} = {}) {
     this.fitTextH = typeof fitTextH === "boolean" ? fitTextH : this.fitTextH
     this.fitTextV = typeof fitTextV === "boolean" ? fitTextV : this.fitTextV
     if(this.fitTextH) {
       this.resize({width: this.textWidth})
     }
     if(this.fitTextV) {
       this.resize({height: this.textHeight})
     }
  }

  set text(text) {
    var t = formatText(text)
    if(t !== this.text) {
      this.lines = t.split('\n')
      var {textWidth, textHeight, lineWidth} = computedTextSize(this)
      this.textWidth = textWidth
      this.textHeight = textHeight
      this.lineWidth = lineWidth
      this.renderer.needUpdate = true
      this.fitToText()
    }
  }

  get text() {
    return this.lines.join('\n')
  }

  render() {
    super.render()
    var posX = 0, posY = 0
    if(this.centered) posX = this.width / 2

    this.renderer.save()
    // HACK: Some very scientific calculation here
    var paddingCorrection = (this.padding.top + 5) * game.uiScale
    this.renderer.translate(0, paddingCorrection)
    this.lines.map(line => {
      if (me.debug.renderHitBox) {
        var measure = computedTextSize({
          lines: [line], padding: this.padding, lineSpacing: this.lineSpacing,
          renderer: this.renderer, font: this.font
        })
        Component.renderDebugBox({
          color: "blue", renderer: this.renderer,
          x: posX - measure.textWidth / 2, y: posY - paddingCorrection,
          width: measure.textWidth, height: measure.textHeight
        })
      }

      this.font.drawStroke(this.renderer, line, posX, posY)
      this.font.draw(this.renderer, line, posX, posY)
      posY += this.lineSpacing * game.uiScale + this.lineWidth
    })
    this.renderer.restore()
  }
}
