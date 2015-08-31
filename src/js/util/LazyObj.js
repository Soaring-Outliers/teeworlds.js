
/**
 * Creates objects on which you can attach values evaluted only on first access
 *  using a function that will create this value
 */
export default class LazyObj {

  constructor(obj) {
    for(var key in obj) {
      this.def(key, obj[key])
    }
  }

  static def(obj, key, value) {
    if(typeof value === "function") {
      var cache = null
      Object.defineProperty(obj, key, {
        get: () => cache = cache || value.apply(obj)
      })
    } else obj[key] = name
  }

  def(key, value) {
    LazyObj.def(this, key, value)
  }

}
