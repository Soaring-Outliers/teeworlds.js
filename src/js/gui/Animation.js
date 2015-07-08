import me from 'melonJS'
import extend from 'extend'
import Easing from 'easing'

export default class Animation {
  
  constructor(options) {
    var defaults = {
        from: 0,
        to: 1,
        sec: 1
      },
      options = extend(defaults, (options || {}))
    
    this.from = options.from
    this.to = options.to
    this.frames = options.frames || options.sec * me.sys.fps
    this.current = -1

    //Create animation array
    var delta = this.to - this.from
    this.animArray = new Easing(this.frames, 'sin').map(
      frame =>frame * delta
    )
  }
  
  nextStep() {
    return this.current < this.frames - 1 ? this.animArray[++this.current] : this.animArray[this.current]
  }
  
  prevStep() {
    return this.current > -1 ? this.animArray[--this.current] : this.animArray[this.current]
  }
  
  isLast() {
    return this.current == this.frames - 1
  }
  
  isFirst() {
    return this.current == -1
  }
  
  reset() {
    this.current = -1
  }
}