import me from 'melonJS'
import extend from 'extend'
import game from '../game.js'
import Component from './Component.js'

/**
 * Textured frame used as a border for GUI Components
 */
export default class FramedRect extends Component {
  /**
   * parentRect:  the Rect around which the TexturedFrame should be drawn
   */
  constructor(parentRect, options) {
    var defaults = {
        x: 0, y: 0,
        bgImage: game.gui.getImageFromTexture("bg")
      },
      options = extend(defaults, options || {})
    super(options)

    this.parts = ["tr", "tl", "br", "bl", "ht", "hb", "vr", "vl"]

    this.sprites = {}
    this.parts.map(part => {
      var region = game.guiTexture.getRegion(part)
      this.sprites[part] = new me.Sprite(0, 0, {image: game.guiTexture.getTexture(), framewidth: region.width, frameheight: region.height})
      this.sprites[part].offset.setV(region.offset)
    })

    this.padding = {
      top: this.sprites["tr"].height,
      bottom: this.sprites["br"].height,
      right: this.sprites["tr"].width,
      left: this.sprites["tl"].width
    }

    let dimension = this.adaptDimensions({
      width: parentRect.width,
      height: parentRect.height
    })
    super.setHeight(dimension.height)
    super.setWidth(dimension.width)

    this.initCornerSpritePos()

    if (options.bgColor) this.bgColor = options.bgColor
    else this.bgImage = options.bgImage
  }

  initCornerSpritePos() {
    this.sprites["tr"].pos = new me.Vector2d(0, 0)
    this.sprites["tl"].pos = new me.Vector2d(this.width - this.sprites["tl"].width, 0)
    this.sprites["br"].pos = new me.Vector2d(0, this.height - this.sprites["tl"].height)
    this.sprites["bl"].pos = new me.Vector2d(this.width - this.sprites["tl"].width, this.height - this.sprites["tl"].height)
  }

  adaptDimensions(values) {
    values = (values || {})

    if (values.width)
      values.width = values.width + this.padding.right + this.padding.left
    if (values.height)
      values.height = values.height + this.padding.top + this.padding.bottom
    if (values.x)
      values.x = values.x - this.padding.right
    if (values.y)
      values.y = values.y - this.padding.top

    return values
  }

  setWidth(width) {
    super.setWidth(this.adaptDimensions({width: width}).width)
  }

  setHeight(height) {
    super.setHeight(this.adaptDimensions({height: height}).height)
  }

  getPadding() {
    return this.padding
  }

  setBgColor(color) {
    if (this.bgColor != color) {
      this.bgColor = color
      this.needUpdate = true
      this.bgImage = null
    }
  }

  getBgColor() {
    return this.bgColor
  }

  setBgImage(image) {
    if (this.bgImage == undefined || this.bgImage !== image) {
      this.bgImage = image
      this.needUpdate = true
    }
  }

  getBgImage() {
    return this.bgImage
  }

  draw(context) {
    super.draw(
        context,
        ctx => {
          this.initCornerSpritePos()

          var topRight = this.sprites["tr"]

          if (this.bgImage != undefined && this.bgImage != null)
            ctx.fillStyle = ctx.createPattern(this.bgImage, 'repeat')
          else
            ctx.fillStyle = this.bgColor

          ctx.fillRect(
            topRight.pos.x + (topRight.width / 2),
            topRight.pos.y + (topRight.height / 2),
            this.width - (topRight.width),
            this.height - (this.sprites["tr"].height)
          )

          this.parts.map(part => {
            if (part.indexOf("t") === 0 || part.indexOf("b") === 0)
              this.sprites[part].draw(ctx)
            else {
              ctx.fillStyle = ctx.createPattern(game.gui.getImageFromSprite(part, this.sprites[part]), 'repeat')

              var x, y,
                width, height

              if (part.indexOf("h") === 0) {
                x = this.sprites["tr"].width
                width = this.sprites["tl"].pos.x - x

                y = part === "ht" ? 0 : this.sprites["br"].pos.y
                height = this.sprites[part].height
              }
              else {
                y = this.sprites["tr"].height
                height = this.sprites["br"].pos.y - y

                x = part === "vr" ? 0 : this.sprites["tl"].pos.x
                width = this.sprites[part].width
              }

              ctx.fillRect(x, y, width, height)
            }
          })
        }
    )
  }
}
