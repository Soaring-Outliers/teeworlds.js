
export default class Arrays {
  static diff(array, otherArray) {
    return array.filter(function(i) {return otherArray.indexOf(i) < 0})
  }

  static range(from, to) {
    var i = from
    return Array.apply(0, Array(to - from + 1))
      .map(() => i++)
  }
}
