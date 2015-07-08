'use strict'
//Custom utilities
var Arrays = {
    diff: function(array, otherArray) {
        return array.filter(function(i) {return otherArray.indexOf(i) < 0;});
    }
}

var Promises = {
    silent: function(promise) {
        return new Promise(function (onFullfilled, onRejected) {
            promise.then(onFullfilled,function(){onFullfilled(null)});
        }.bind(promise));
    }
}
