(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":11}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":15}],6:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],7:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":2}],8:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":3}],9:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":1,"babel-runtime/core-js/object/set-prototype-of":4}],10:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],11:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":42}],12:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":42}],13:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":42,"../../modules/es6.object.get-own-property-descriptor":66}],14:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":20,"../../modules/es6.object.set-prototype-of":67}],15:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":20,"../modules/es6.object.to-string":68,"../modules/es6.promise":69,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],16:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],17:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":34}],18:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":19,"./$.wks":63}],19:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],20:[function(require,module,exports){
var core = module.exports = {};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],21:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.a-function":16}],22:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":20,"./$.global":27}],23:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],24:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":27,"./$.is-object":34}],25:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],26:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":17,"./$.ctx":21,"./$.is-array-iter":33,"./$.iter-call":36,"./$.to-length":60,"./core.get-iterator-method":64}],27:[function(require,module,exports){
var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
module.exports = global;
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],28:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],29:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":42,"./$.property-desc":47,"./$.support-desc":55}],30:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":27}],31:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],32:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":19}],33:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":41,"./$.wks":63}],34:[function(require,module,exports){
// http://jsperf.com/core-js-isobject
module.exports = function(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
};
},{}],35:[function(require,module,exports){
// Safari has buggy iterators w/o `next`
module.exports = 'keys' in [] && !('next' in [].keys());
},{}],36:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":17}],37:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":42,"./$.hide":29,"./$.property-desc":47,"./$.tag":56,"./$.wks":63}],38:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values';
var returnThis = function(){ return this; };
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  require('./$.iter-create')(Constructor, NAME, next);
  var createMethod = function(kind){
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = require('./$').getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    require('./$.tag')(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
  }
  // Define iterator
  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * require('./$.iter-buggy'), NAME, methods);
  }
};
},{"./$":42,"./$.def":22,"./$.has":28,"./$.hide":29,"./$.iter-buggy":35,"./$.iter-create":37,"./$.iterators":41,"./$.library":43,"./$.redef":48,"./$.tag":56,"./$.wks":63}],39:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":63}],40:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],41:[function(require,module,exports){
module.exports = {};
},{}],42:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],43:[function(require,module,exports){
module.exports = true;
},{}],44:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , head, last, notify;

function flush(){
  while(head){
    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
    head = head.next;
  } last = undefined;
}

// Node.js
if(require('./$.cof')(process) == 'process'){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":19,"./$.global":27,"./$.task":57}],45:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":48}],46:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":20,"./$.def":22,"./$.fails":25}],47:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],48:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":29}],49:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],50:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":42,"./$.an-object":17,"./$.ctx":21,"./$.is-object":34}],51:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":27}],52:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if(require('./$.support-desc') && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":42,"./$.support-desc":55,"./$.wks":63}],53:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],54:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":23,"./$.to-integer":58}],55:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":25}],56:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":28,"./$.hide":29,"./$.wks":63}],57:[function(require,module,exports){
'use strict';
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":19,"./$.ctx":21,"./$.dom-create":24,"./$.global":27,"./$.html":30,"./$.invoke":31}],58:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],59:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":23,"./$.iobject":32}],60:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":58}],61:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],62:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],63:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":27,"./$.shared":51,"./$.uid":61}],64:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./$.classof":18,"./$.core":20,"./$.iterators":41,"./$.wks":63}],65:[function(require,module,exports){
'use strict';
var setUnscope = require('./$.unscope')
  , step       = require('./$.iter-step')
  , Iterators  = require('./$.iterators')
  , toIObject  = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$.iter-define":38,"./$.iter-step":40,"./$.iterators":41,"./$.to-iobject":59,"./$.unscope":62}],66:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":46,"./$.to-iobject":59}],67:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":22,"./$.set-proto":50}],68:[function(require,module,exports){

},{}],69:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $def       = require('./$.def')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same')
  , species    = require('./$.species')
  , SPECIES    = require('./$.wks')('species')
  , RECORD     = require('./$.uid')('record')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var useNative = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.support-desc')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var isPromise = function(it){
  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
};
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      asap(function(){
        if(isUnhandled(record.p)){
          if(isNode){
            process.emit('unhandledRejection', value, record.p);
          } else if(global.console && console.error){
            console.error('Unhandled promise rejection', value);
          }
        }
        record.a = undefined;
      });
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    this[RECORD] = record;
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.mix')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = anObject(anObject(this).constructor)[SPECIES];
      var react = {
        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
        fail: typeof onRejected == 'function'  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = aFunction(res);
        react.rej = aFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
require('./$.tag')(P, PROMISE);
species(P);
species(Wrapper = require('./$.core')[PROMISE]);

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new this(function(res, rej){ rej(r); });
  }
});
$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isPromise(x) && sameConstructor(x.constructor, this)
      ? x : new this(function(res){ res(x); });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":42,"./$.a-function":16,"./$.an-object":17,"./$.classof":18,"./$.core":20,"./$.ctx":21,"./$.def":22,"./$.for-of":26,"./$.global":27,"./$.is-object":34,"./$.iter-detect":39,"./$.library":43,"./$.microtask":44,"./$.mix":45,"./$.same":49,"./$.set-proto":50,"./$.species":52,"./$.strict-new":53,"./$.support-desc":55,"./$.tag":56,"./$.uid":61,"./$.wks":63}],70:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":38,"./$.string-at":54}],71:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":41,"./es6.array.iterator":65}],72:[function(require,module,exports){
/**
 * HashMap - HashMap Class for JavaScript
 * @author Ariel Flesler <aflesler@gmail.com>
 * @version 2.0.3
 * Homepage: https://github.com/flesler/hashmap
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object') {
		// Node js environment
		var HashMap = module.exports = factory();
		// Keep it backwards compatible
		HashMap.HashMap = HashMap;
	} else {
		// Browser globals (this is window)
		this.HashMap = factory();
	}
}(function() {

	function HashMap(other) {
		this.clear();
		switch (arguments.length) {
			case 0: break;
			case 1: this.copy(other); break;
			default: multi(this, arguments); break;
		}
	}

	var proto = HashMap.prototype = {
		constructor:HashMap,

		get:function(key) {
			var data = this._data[this.hash(key)];
			return data && data[1];
		},

		set:function(key, value) {
			// Store original key as well (for iteration)
			this._data[this.hash(key)] = [key, value];
		},

		multi:function() {
			multi(this, arguments);
		},

		copy:function(other) {
			for (var key in other._data) {
				this._data[key] = other._data[key];
			}
		},

		has:function(key) {
			return this.hash(key) in this._data;
		},

		search:function(value) {
			for (var key in this._data) {
				if (this._data[key][1] === value) {
					return this._data[key][0];
				}
			}

			return null;
		},

		remove:function(key) {
			delete this._data[this.hash(key)];
		},

		type:function(key) {
			var str = Object.prototype.toString.call(key);
			var type = str.slice(8, -1).toLowerCase();
			// Some browsers yield DOMWindow for null and undefined, works fine on Node
			if (type === 'domwindow' && !key) {
				return key + '';
			}
			return type;
		},

		keys:function() {
			var keys = [];
			this.forEach(function(value, key) { keys.push(key); });
			return keys;
		},

		values:function() {
			var values = [];
			this.forEach(function(value) { values.push(value); });
			return values;
		},

		count:function() {
			return this.keys().length;
		},

		clear:function() {
			// TODO: Would Object.create(null) make any difference
			this._data = {};
		},

		clone:function() {
			return new HashMap(this);
		},

		hash:function(key) {
			switch (this.type(key)) {
				case 'undefined':
				case 'null':
				case 'boolean':
				case 'number':
				case 'regexp':
					return key + '';

				case 'date':
					return '♣' + key.getTime();

				case 'string':
					return '♠' + key;

				case 'array':
					var hashes = [];
					for (var i = 0; i < key.length; i++) {
						hashes[i] = this.hash(key[i]);
					}
					return '♥' + hashes.join('⁞');

				default:
					// TODO: Don't use expandos when Object.defineProperty is not available?
					if (!key._hmuid_) {
						key._hmuid_ = ++HashMap.uid;
						hide(key, '_hmuid_');
					}

					return '♦' + key._hmuid_;
			}
		},

		forEach:function(func, ctx) {
			for (var key in this._data) {
				var data = this._data[key];
				func.call(ctx || this, data[1], data[0]);
			}
		}
	};

	HashMap.uid = 0;

	//- Automatically add chaining to some methods

	for (var method in proto) {
		// Skip constructor, valueOf, toString and any other built-in method
		if (method === 'constructor' || !proto.hasOwnProperty(method)) {
			continue;
		}
		var fn = proto[method];
		if (fn.toString().indexOf('return ') === -1) {
			proto[method] = chain(fn);
		}
	}

	//- Utils

	function multi(map, args) {
		for (var i = 0; i < args.length; i += 2) {
			map.set(args[i], args[i+1]);
		}
	}

	function chain(fn) {
		return function() {
			fn.apply(this, arguments);
			return this;
		};
	}

	function hide(obj, prop) {
		// Make non iterable if supported
		if (Object.defineProperty) {
			Object.defineProperty(obj, prop, {enumerable:false});
		}
	}

	return HashMap;
}));

},{}],73:[function(require,module,exports){
module.exports.RTCSessionDescription = window.RTCSessionDescription ||
	window.mozRTCSessionDescription;
module.exports.RTCPeerConnection = window.RTCPeerConnection ||
	window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
module.exports.RTCIceCandidate = window.RTCIceCandidate ||
	window.mozRTCIceCandidate;

},{}],74:[function(require,module,exports){
var util = require('./util');
var EventEmitter = require('eventemitter3');
var Negotiator = require('./negotiator');
var Reliable = require('reliable');

/**
 * Wraps a DataChannel between two Peers.
 */
function DataConnection(peer, provider, options) {
  if (!(this instanceof DataConnection)) return new DataConnection(peer, provider, options);
  EventEmitter.call(this);

  this.options = util.extend({
    serialization: 'binary',
    reliable: false
  }, options);

  // Connection is not open yet.
  this.open = false;
  this.type = 'data';
  this.peer = peer;
  this.provider = provider;

  this.id = this.options.connectionId || DataConnection._idPrefix + util.randomToken();

  this.label = this.options.label || this.id;
  this.metadata = this.options.metadata;
  this.serialization = this.options.serialization;
  this.reliable = this.options.reliable;

  // Data channel buffering.
  this._buffer = [];
  this._buffering = false;
  this.bufferSize = 0;

  // For storing large data.
  this._chunkedData = {};

  if (this.options._payload) {
    this._peerBrowser = this.options._payload.browser;
  }

  Negotiator.startConnection(
    this,
    this.options._payload || {
      originator: true
    }
  );
}

util.inherits(DataConnection, EventEmitter);

DataConnection._idPrefix = 'dc_';

/** Called by the Negotiator when the DataChannel is ready. */
DataConnection.prototype.initialize = function(dc) {
  this._dc = this.dataChannel = dc;
  this._configureDataChannel();
}

DataConnection.prototype._configureDataChannel = function() {
  var self = this;
  if (util.supports.sctp) {
    this._dc.binaryType = 'arraybuffer';
  }
  this._dc.onopen = function() {
    util.log('Data channel connection success');
    self.open = true;
    self.emit('open');
  }

  // Use the Reliable shim for non Firefox browsers
  if (!util.supports.sctp && this.reliable) {
    this._reliable = new Reliable(this._dc, util.debug);
  }

  if (this._reliable) {
    this._reliable.onmessage = function(msg) {
      self.emit('data', msg);
    };
  } else {
    this._dc.onmessage = function(e) {
      self._handleDataMessage(e);
    };
  }
  this._dc.onclose = function(e) {
    util.log('DataChannel closed for:', self.peer);
    self.close();
  };
}

// Handles a DataChannel message.
DataConnection.prototype._handleDataMessage = function(e) {
  var self = this;
  var data = e.data;
  var datatype = data.constructor;
  if (this.serialization === 'binary' || this.serialization === 'binary-utf8') {
    if (datatype === Blob) {
      // Datatype should never be blob
      util.blobToArrayBuffer(data, function(ab) {
        data = util.unpack(ab);
        self.emit('data', data);
      });
      return;
    } else if (datatype === ArrayBuffer) {
      data = util.unpack(data);
    } else if (datatype === String) {
      // String fallback for binary data for browsers that don't support binary yet
      var ab = util.binaryStringToArrayBuffer(data);
      data = util.unpack(ab);
    }
  } else if (this.serialization === 'json') {
    data = JSON.parse(data);
  }

  // Check if we've chunked--if so, piece things back together.
  // We're guaranteed that this isn't 0.
  if (data.__peerData) {
    var id = data.__peerData;
    var chunkInfo = this._chunkedData[id] || {data: [], count: 0, total: data.total};

    chunkInfo.data[data.n] = data.data;
    chunkInfo.count += 1;

    if (chunkInfo.total === chunkInfo.count) {
      // Clean up before making the recursive call to `_handleDataMessage`.
      delete this._chunkedData[id];

      // We've received all the chunks--time to construct the complete data.
      data = new Blob(chunkInfo.data);
      this._handleDataMessage({data: data});
    }

    this._chunkedData[id] = chunkInfo;
    return;
  }

  this.emit('data', data);
}

/**
 * Exposed functionality for users.
 */

/** Allows user to close connection. */
DataConnection.prototype.close = function() {
  if (!this.open) {
    return;
  }
  this.open = false;
  Negotiator.cleanup(this);
  this.emit('close');
}

/** Allows user to send data. */
DataConnection.prototype.send = function(data, chunked) {
  if (!this.open) {
    this.emit('error', new Error('Connection is not open. You should listen for the `open` event before sending messages.'));
    return;
  }
  if (this._reliable) {
    // Note: reliable shim sending will make it so that you cannot customize
    // serialization.
    this._reliable.send(data);
    return;
  }
  var self = this;
  if (this.serialization === 'json') {
    this._bufferedSend(JSON.stringify(data));
  } else if (this.serialization === 'binary' || this.serialization === 'binary-utf8') {
    var blob = util.pack(data);

    // For Chrome-Firefox interoperability, we need to make Firefox "chunk"
    // the data it sends out.
    var needsChunking = util.chunkedBrowsers[this._peerBrowser] || util.chunkedBrowsers[util.browser];
    if (needsChunking && !chunked && blob.size > util.chunkedMTU) {
      this._sendChunks(blob);
      return;
    }

    // DataChannel currently only supports strings.
    if (!util.supports.sctp) {
      util.blobToBinaryString(blob, function(str) {
        self._bufferedSend(str);
      });
    } else if (!util.supports.binaryBlob) {
      // We only do this if we really need to (e.g. blobs are not supported),
      // because this conversion is costly.
      util.blobToArrayBuffer(blob, function(ab) {
        self._bufferedSend(ab);
      });
    } else {
      this._bufferedSend(blob);
    }
  } else {
    this._bufferedSend(data);
  }
}

DataConnection.prototype._bufferedSend = function(msg) {
  if (this._buffering || !this._trySend(msg)) {
    this._buffer.push(msg);
    this.bufferSize = this._buffer.length;
  }
}

// Returns true if the send succeeds.
DataConnection.prototype._trySend = function(msg) {
  try {
    this._dc.send(msg);
  } catch (e) {
    this._buffering = true;

    var self = this;
    setTimeout(function() {
      // Try again.
      self._buffering = false;
      self._tryBuffer();
    }, 100);
    return false;
  }
  return true;
}

// Try to send the first message in the buffer.
DataConnection.prototype._tryBuffer = function() {
  if (this._buffer.length === 0) {
    return;
  }

  var msg = this._buffer[0];

  if (this._trySend(msg)) {
    this._buffer.shift();
    this.bufferSize = this._buffer.length;
    this._tryBuffer();
  }
}

DataConnection.prototype._sendChunks = function(blob) {
  var blobs = util.chunk(blob);
  for (var i = 0, ii = blobs.length; i < ii; i += 1) {
    var blob = blobs[i];
    this.send(blob, true);
  }
}

DataConnection.prototype.handleMessage = function(message) {
  var payload = message.payload;

  switch (message.type) {
    case 'ANSWER':
      this._peerBrowser = payload.browser;

      // Forward to negotiator
      Negotiator.handleSDP(message.type, this, payload.sdp);
      break;
    case 'CANDIDATE':
      Negotiator.handleCandidate(this, payload.candidate);
      break;
    default:
      util.warn('Unrecognized message type:', message.type, 'from peer:', this.peer);
      break;
  }
}

module.exports = DataConnection;

},{"./negotiator":76,"./util":79,"eventemitter3":80,"reliable":83}],75:[function(require,module,exports){
var util = require('./util');
var EventEmitter = require('eventemitter3');
var Negotiator = require('./negotiator');

/**
 * Wraps the streaming interface between two Peers.
 */
function MediaConnection(peer, provider, options) {
  if (!(this instanceof MediaConnection)) return new MediaConnection(peer, provider, options);
  EventEmitter.call(this);

  this.options = util.extend({}, options);

  this.open = false;
  this.type = 'media';
  this.peer = peer;
  this.provider = provider;
  this.metadata = this.options.metadata;
  this.localStream = this.options._stream;

  this.id = this.options.connectionId || MediaConnection._idPrefix + util.randomToken();
  if (this.localStream) {
    Negotiator.startConnection(
      this,
      {_stream: this.localStream, originator: true}
    );
  }
};

util.inherits(MediaConnection, EventEmitter);

MediaConnection._idPrefix = 'mc_';

MediaConnection.prototype.addStream = function(remoteStream) {
  util.log('Receiving stream', remoteStream);

  this.remoteStream = remoteStream;
  this.emit('stream', remoteStream); // Should we call this `open`?

};

MediaConnection.prototype.handleMessage = function(message) {
  var payload = message.payload;

  switch (message.type) {
    case 'ANSWER':
      // Forward to negotiator
      Negotiator.handleSDP(message.type, this, payload.sdp);
      this.open = true;
      break;
    case 'CANDIDATE':
      Negotiator.handleCandidate(this, payload.candidate);
      break;
    default:
      util.warn('Unrecognized message type:', message.type, 'from peer:', this.peer);
      break;
  }
}

MediaConnection.prototype.answer = function(stream) {
  if (this.localStream) {
    util.warn('Local stream already exists on this MediaConnection. Are you answering a call twice?');
    return;
  }

  this.options._payload._stream = stream;

  this.localStream = stream;
  Negotiator.startConnection(
    this,
    this.options._payload
  )
  // Retrieve lost messages stored because PeerConnection not set up.
  var messages = this.provider._getMessages(this.id);
  for (var i = 0, ii = messages.length; i < ii; i += 1) {
    this.handleMessage(messages[i]);
  }
  this.open = true;
};

/**
 * Exposed functionality for users.
 */

/** Allows user to close connection. */
MediaConnection.prototype.close = function() {
  if (!this.open) {
    return;
  }
  this.open = false;
  Negotiator.cleanup(this);
  this.emit('close')
};

module.exports = MediaConnection;

},{"./negotiator":76,"./util":79,"eventemitter3":80}],76:[function(require,module,exports){
var util = require('./util');
var RTCPeerConnection = require('./adapter').RTCPeerConnection;
var RTCSessionDescription = require('./adapter').RTCSessionDescription;
var RTCIceCandidate = require('./adapter').RTCIceCandidate;

/**
 * Manages all negotiations between Peers.
 */
var Negotiator = {
  pcs: {
    data: {},
    media: {}
  }, // type => {peerId: {pc_id: pc}}.
  //providers: {}, // provider's id => providers (there may be multiple providers/client.
  queue: [] // connections that are delayed due to a PC being in use.
}

Negotiator._idPrefix = 'pc_';

/** Returns a PeerConnection object set up correctly (for data, media). */
Negotiator.startConnection = function(connection, options) {
  var pc = Negotiator._getPeerConnection(connection, options);

  if (connection.type === 'media' && options._stream) {
    // Add the stream.
    pc.addStream(options._stream);
  }

  // Set the connection's PC.
  connection.pc = connection.peerConnection = pc;
  // What do we need to do now?
  if (options.originator) {
    if (connection.type === 'data') {
      // Create the datachannel.
      var config = {};
      // Dropping reliable:false support, since it seems to be crashing
      // Chrome.
      /*if (util.supports.sctp && !options.reliable) {
        // If we have canonical reliable support...
        config = {maxRetransmits: 0};
      }*/
      // Fallback to ensure older browsers don't crash.
      if (!util.supports.sctp) {
        config = {reliable: options.reliable};
      }
      var dc = pc.createDataChannel(connection.label, config);
      connection.initialize(dc);
    }

    if (!util.supports.onnegotiationneeded) {
      Negotiator._makeOffer(connection);
    }
  } else {
    Negotiator.handleSDP('OFFER', connection, options.sdp);
  }
}

Negotiator._getPeerConnection = function(connection, options) {
  if (!Negotiator.pcs[connection.type]) {
    util.error(connection.type + ' is not a valid connection type. Maybe you overrode the `type` property somewhere.');
  }

  if (!Negotiator.pcs[connection.type][connection.peer]) {
    Negotiator.pcs[connection.type][connection.peer] = {};
  }
  var peerConnections = Negotiator.pcs[connection.type][connection.peer];

  var pc;
  // Not multiplexing while FF and Chrome have not-great support for it.
  /*if (options.multiplex) {
    ids = Object.keys(peerConnections);
    for (var i = 0, ii = ids.length; i < ii; i += 1) {
      pc = peerConnections[ids[i]];
      if (pc.signalingState === 'stable') {
        break; // We can go ahead and use this PC.
      }
    }
  } else */
  if (options.pc) { // Simplest case: PC id already provided for us.
    pc = Negotiator.pcs[connection.type][connection.peer][options.pc];
  }

  if (!pc || pc.signalingState !== 'stable') {
    pc = Negotiator._startPeerConnection(connection);
  }
  return pc;
}

/*
Negotiator._addProvider = function(provider) {
  if ((!provider.id && !provider.disconnected) || !provider.socket.open) {
    // Wait for provider to obtain an ID.
    provider.on('open', function(id) {
      Negotiator._addProvider(provider);
    });
  } else {
    Negotiator.providers[provider.id] = provider;
  }
}*/


/** Start a PC. */
Negotiator._startPeerConnection = function(connection) {
  util.log('Creating RTCPeerConnection.');

  var id = Negotiator._idPrefix + util.randomToken();
  var optional = {};

  if (connection.type === 'data' && !util.supports.sctp) {
    optional = {optional: [{RtpDataChannels: true}]};
  } else if (connection.type === 'media') {
    // Interop req for chrome.
    optional = {optional: [{DtlsSrtpKeyAgreement: true}]};
  }

  var pc = new RTCPeerConnection(connection.provider.options.config, optional);
  Negotiator.pcs[connection.type][connection.peer][id] = pc;

  Negotiator._setupListeners(connection, pc, id);

  return pc;
}

/** Set up various WebRTC listeners. */
Negotiator._setupListeners = function(connection, pc, pc_id) {
  var peerId = connection.peer;
  var connectionId = connection.id;
  var provider = connection.provider;

  // ICE CANDIDATES.
  util.log('Listening for ICE candidates.');
  pc.onicecandidate = function(evt) {
    if (evt.candidate) {
      util.log('Received ICE candidates for:', connection.peer);
      provider.socket.send({
        type: 'CANDIDATE',
        payload: {
          candidate: evt.candidate,
          type: connection.type,
          connectionId: connection.id
        },
        dst: peerId
      });
    }
  };

  pc.oniceconnectionstatechange = function() {
    switch (pc.iceConnectionState) {
      case 'disconnected':
      case 'failed':
        util.log('iceConnectionState is disconnected, closing connections to ' + peerId);
        connection.close();
        break;
      case 'completed':
        pc.onicecandidate = util.noop;
        break;
    }
  };

  // Fallback for older Chrome impls.
  pc.onicechange = pc.oniceconnectionstatechange;

  // ONNEGOTIATIONNEEDED (Chrome)
  util.log('Listening for `negotiationneeded`');
  pc.onnegotiationneeded = function() {
    util.log('`negotiationneeded` triggered');
    if (pc.signalingState == 'stable') {
      Negotiator._makeOffer(connection);
    } else {
      util.log('onnegotiationneeded triggered when not stable. Is another connection being established?');
    }
  };

  // DATACONNECTION.
  util.log('Listening for data channel');
  // Fired between offer and answer, so options should already be saved
  // in the options hash.
  pc.ondatachannel = function(evt) {
    util.log('Received data channel');
    var dc = evt.channel;
    var connection = provider.getConnection(peerId, connectionId);
    connection.initialize(dc);
  };

  // MEDIACONNECTION.
  util.log('Listening for remote stream');
  pc.onaddstream = function(evt) {
    util.log('Received remote stream');
    var stream = evt.stream;
    var connection = provider.getConnection(peerId, connectionId);
    // 10/10/2014: looks like in Chrome 38, onaddstream is triggered after
    // setting the remote description. Our connection object in these cases
    // is actually a DATA connection, so addStream fails.
    // TODO: This is hopefully just a temporary fix. We should try to
    // understand why this is happening.
    if (connection.type === 'media') {
      connection.addStream(stream);
    }
  };
}

Negotiator.cleanup = function(connection) {
  util.log('Cleaning up PeerConnection to ' + connection.peer);

  var pc = connection.pc;

  if (!!pc && (pc.readyState !== 'closed' || pc.signalingState !== 'closed')) {
    pc.close();
    connection.pc = null;
  }
}

Negotiator._makeOffer = function(connection) {
  var pc = connection.pc;
  pc.createOffer(function(offer) {
    util.log('Created offer.');

    if (!util.supports.sctp && connection.type === 'data' && connection.reliable) {
      offer.sdp = Reliable.higherBandwidthSDP(offer.sdp);
    }

    pc.setLocalDescription(offer, function() {
      util.log('Set localDescription: offer', 'for:', connection.peer);
      connection.provider.socket.send({
        type: 'OFFER',
        payload: {
          sdp: offer,
          type: connection.type,
          label: connection.label,
          connectionId: connection.id,
          reliable: connection.reliable,
          serialization: connection.serialization,
          metadata: connection.metadata,
          browser: util.browser
        },
        dst: connection.peer
      });
    }, function(err) {
      connection.provider.emitError('webrtc', err);
      util.log('Failed to setLocalDescription, ', err);
    });
  }, function(err) {
    connection.provider.emitError('webrtc', err);
    util.log('Failed to createOffer, ', err);
  }, connection.options.constraints);
}

Negotiator._makeAnswer = function(connection) {
  var pc = connection.pc;

  pc.createAnswer(function(answer) {
    util.log('Created answer.');

    if (!util.supports.sctp && connection.type === 'data' && connection.reliable) {
      answer.sdp = Reliable.higherBandwidthSDP(answer.sdp);
    }

    pc.setLocalDescription(answer, function() {
      util.log('Set localDescription: answer', 'for:', connection.peer);
      connection.provider.socket.send({
        type: 'ANSWER',
        payload: {
          sdp: answer,
          type: connection.type,
          connectionId: connection.id,
          browser: util.browser
        },
        dst: connection.peer
      });
    }, function(err) {
      connection.provider.emitError('webrtc', err);
      util.log('Failed to setLocalDescription, ', err);
    });
  }, function(err) {
    connection.provider.emitError('webrtc', err);
    util.log('Failed to create answer, ', err);
  });
}

/** Handle an SDP. */
Negotiator.handleSDP = function(type, connection, sdp) {
  sdp = new RTCSessionDescription(sdp);
  var pc = connection.pc;

  util.log('Setting remote description', sdp);
  pc.setRemoteDescription(sdp, function() {
    util.log('Set remoteDescription:', type, 'for:', connection.peer);

    if (type === 'OFFER') {
      Negotiator._makeAnswer(connection);
    }
  }, function(err) {
    connection.provider.emitError('webrtc', err);
    util.log('Failed to setRemoteDescription, ', err);
  });
}

/** Handle a candidate. */
Negotiator.handleCandidate = function(connection, ice) {
  var candidate = ice.candidate;
  var sdpMLineIndex = ice.sdpMLineIndex;
  connection.pc.addIceCandidate(new RTCIceCandidate({
    sdpMLineIndex: sdpMLineIndex,
    candidate: candidate
  }));
  util.log('Added ICE candidate for:', connection.peer);
}

module.exports = Negotiator;

},{"./adapter":73,"./util":79}],77:[function(require,module,exports){
var util = require('./util');
var EventEmitter = require('eventemitter3');
var Socket = require('./socket');
var MediaConnection = require('./mediaconnection');
var DataConnection = require('./dataconnection');

/**
 * A peer who can initiate connections with other peers.
 */
function Peer(id, options) {
  if (!(this instanceof Peer)) return new Peer(id, options);
  EventEmitter.call(this);

  // Deal with overloading
  if (id && id.constructor == Object) {
    options = id;
    id = undefined;
  } else if (id) {
    // Ensure id is a string
    id = id.toString();
  }
  //

  // Configurize options
  options = util.extend({
    debug: 0, // 1: Errors, 2: Warnings, 3: All logs
    host: util.CLOUD_HOST,
    port: util.CLOUD_PORT,
    key: 'peerjs',
    path: '/',
    token: util.randomToken(),
    config: util.defaultConfig
  }, options);
  this.options = options;
  // Detect relative URL host.
  if (options.host === '/') {
    options.host = window.location.hostname;
  }
  // Set path correctly.
  if (options.path[0] !== '/') {
    options.path = '/' + options.path;
  }
  if (options.path[options.path.length - 1] !== '/') {
    options.path += '/';
  }

  // Set whether we use SSL to same as current host
  if (options.secure === undefined && options.host !== util.CLOUD_HOST) {
    options.secure = util.isSecure();
  }
  // Set a custom log function if present
  if (options.logFunction) {
    util.setLogFunction(options.logFunction);
  }
  util.setLogLevel(options.debug);
  //

  // Sanity checks
  // Ensure WebRTC supported
  if (!util.supports.audioVideo && !util.supports.data ) {
    this._delayedAbort('browser-incompatible', 'The current browser does not support WebRTC');
    return;
  }
  // Ensure alphanumeric id
  if (!util.validateId(id)) {
    this._delayedAbort('invalid-id', 'ID "' + id + '" is invalid');
    return;
  }
  // Ensure valid key
  if (!util.validateKey(options.key)) {
    this._delayedAbort('invalid-key', 'API KEY "' + options.key + '" is invalid');
    return;
  }
  // Ensure not using unsecure cloud server on SSL page
  if (options.secure && options.host === '0.peerjs.com') {
    this._delayedAbort('ssl-unavailable',
      'The cloud server currently does not support HTTPS. Please run your own PeerServer to use HTTPS.');
    return;
  }
  //

  // States.
  this.destroyed = false; // Connections have been killed
  this.disconnected = false; // Connection to PeerServer killed but P2P connections still active
  this.open = false; // Sockets and such are not yet open.
  //

  // References
  this.connections = {}; // DataConnections for this peer.
  this._lostMessages = {}; // src => [list of messages]
  //

  // Start the server connection
  this._initializeServerConnection();
  if (id) {
    this._initialize(id);
  } else {
    this._retrieveId();
  }
  //
}

util.inherits(Peer, EventEmitter);

// Initialize the 'socket' (which is actually a mix of XHR streaming and
// websockets.)
Peer.prototype._initializeServerConnection = function() {
  var self = this;
  this.socket = new Socket(this.options.secure, this.options.host, this.options.port, this.options.path, this.options.key);
  this.socket.on('message', function(data) {
    self._handleMessage(data);
  });
  this.socket.on('error', function(error) {
    self._abort('socket-error', error);
  });
  this.socket.on('disconnected', function() {
    // If we haven't explicitly disconnected, emit error and disconnect.
    if (!self.disconnected) {
      self.emitError('network', 'Lost connection to server.');
      self.disconnect();
    }
  });
  this.socket.on('close', function() {
    // If we haven't explicitly disconnected, emit error.
    if (!self.disconnected) {
      self._abort('socket-closed', 'Underlying socket is already closed.');
    }
  });
};

/** Get a unique ID from the server via XHR. */
Peer.prototype._retrieveId = function(cb) {
  var self = this;
  var http = new XMLHttpRequest();
  var protocol = this.options.secure ? 'https://' : 'http://';
  var url = protocol + this.options.host + ':' + this.options.port +
    this.options.path + this.options.key + '/id';
  var queryString = '?ts=' + new Date().getTime() + '' + Math.random();
  url += queryString;

  // If there's no ID we need to wait for one before trying to init socket.
  http.open('get', url, true);
  http.onerror = function(e) {
    util.error('Error retrieving ID', e);
    var pathError = '';
    if (self.options.path === '/' && self.options.host !== util.CLOUD_HOST) {
      pathError = ' If you passed in a `path` to your self-hosted PeerServer, ' +
        'you\'ll also need to pass in that same path when creating a new ' +
        'Peer.';
    }
    self._abort('server-error', 'Could not get an ID from the server.' + pathError);
  };
  http.onreadystatechange = function() {
    if (http.readyState !== 4) {
      return;
    }
    if (http.status !== 200) {
      http.onerror();
      return;
    }
    self._initialize(http.responseText);
  };
  http.send(null);
};

/** Initialize a connection with the server. */
Peer.prototype._initialize = function(id) {
  this.id = id;
  this.socket.start(this.id, this.options.token);
};

/** Handles messages from the server. */
Peer.prototype._handleMessage = function(message) {
  var type = message.type;
  var payload = message.payload;
  var peer = message.src;
  var connection;

  switch (type) {
    case 'OPEN': // The connection to the server is open.
      this.emit('open', this.id);
      this.open = true;
      break;
    case 'ERROR': // Server error.
      this._abort('server-error', payload.msg);
      break;
    case 'ID-TAKEN': // The selected ID is taken.
      this._abort('unavailable-id', 'ID `' + this.id + '` is taken');
      break;
    case 'INVALID-KEY': // The given API key cannot be found.
      this._abort('invalid-key', 'API KEY "' + this.options.key + '" is invalid');
      break;

    //
    case 'LEAVE': // Another peer has closed its connection to this peer.
      util.log('Received leave message from', peer);
      this._cleanupPeer(peer);
      break;

    case 'EXPIRE': // The offer sent to a peer has expired without response.
      this.emitError('peer-unavailable', 'Could not connect to peer ' + peer);
      break;
    case 'OFFER': // we should consider switching this to CALL/CONNECT, but this is the least breaking option.
      var connectionId = payload.connectionId;
      connection = this.getConnection(peer, connectionId);

      if (connection) {
        util.warn('Offer received for existing Connection ID:', connectionId);
        //connection.handleMessage(message);
      } else {
        // Create a new connection.
        if (payload.type === 'media') {
          connection = new MediaConnection(peer, this, {
            connectionId: connectionId,
            _payload: payload,
            metadata: payload.metadata
          });
          this._addConnection(peer, connection);
          this.emit('call', connection);
        } else if (payload.type === 'data') {
          connection = new DataConnection(peer, this, {
            connectionId: connectionId,
            _payload: payload,
            metadata: payload.metadata,
            label: payload.label,
            serialization: payload.serialization,
            reliable: payload.reliable
          });
          this._addConnection(peer, connection);
          this.emit('connection', connection);
        } else {
          util.warn('Received malformed connection type:', payload.type);
          return;
        }
        // Find messages.
        var messages = this._getMessages(connectionId);
        for (var i = 0, ii = messages.length; i < ii; i += 1) {
          connection.handleMessage(messages[i]);
        }
      }
      break;
    default:
      if (!payload) {
        util.warn('You received a malformed message from ' + peer + ' of type ' + type);
        return;
      }

      var id = payload.connectionId;
      connection = this.getConnection(peer, id);

      if (connection && connection.pc) {
        // Pass it on.
        connection.handleMessage(message);
      } else if (id) {
        // Store for possible later use
        this._storeMessage(id, message);
      } else {
        util.warn('You received an unrecognized message:', message);
      }
      break;
  }
};

/** Stores messages without a set up connection, to be claimed later. */
Peer.prototype._storeMessage = function(connectionId, message) {
  if (!this._lostMessages[connectionId]) {
    this._lostMessages[connectionId] = [];
  }
  this._lostMessages[connectionId].push(message);
};

/** Retrieve messages from lost message store */
Peer.prototype._getMessages = function(connectionId) {
  var messages = this._lostMessages[connectionId];
  if (messages) {
    delete this._lostMessages[connectionId];
    return messages;
  } else {
    return [];
  }
};

/**
 * Returns a DataConnection to the specified peer. See documentation for a
 * complete list of options.
 */
Peer.prototype.connect = function(peer, options) {
  if (this.disconnected) {
    util.warn('You cannot connect to a new Peer because you called ' +
      '.disconnect() on this Peer and ended your connection with the ' +
      'server. You can create a new Peer to reconnect, or call reconnect ' +
      'on this peer if you believe its ID to still be available.');
    this.emitError('disconnected', 'Cannot connect to new Peer after disconnecting from server.');
    return;
  }
  var connection = new DataConnection(peer, this, options);
  this._addConnection(peer, connection);
  return connection;
};

/**
 * Returns a MediaConnection to the specified peer. See documentation for a
 * complete list of options.
 */
Peer.prototype.call = function(peer, stream, options) {
  if (this.disconnected) {
    util.warn('You cannot connect to a new Peer because you called ' +
      '.disconnect() on this Peer and ended your connection with the ' +
      'server. You can create a new Peer to reconnect.');
    this.emitError('disconnected', 'Cannot connect to new Peer after disconnecting from server.');
    return;
  }
  if (!stream) {
    util.error('To call a peer, you must provide a stream from your browser\'s `getUserMedia`.');
    return;
  }
  options = options || {};
  options._stream = stream;
  var call = new MediaConnection(peer, this, options);
  this._addConnection(peer, call);
  return call;
};

/** Add a data/media connection to this peer. */
Peer.prototype._addConnection = function(peer, connection) {
  if (!this.connections[peer]) {
    this.connections[peer] = [];
  }
  this.connections[peer].push(connection);
};

/** Retrieve a data/media connection for this peer. */
Peer.prototype.getConnection = function(peer, id) {
  var connections = this.connections[peer];
  if (!connections) {
    return null;
  }
  for (var i = 0, ii = connections.length; i < ii; i++) {
    if (connections[i].id === id) {
      return connections[i];
    }
  }
  return null;
};

Peer.prototype._delayedAbort = function(type, message) {
  var self = this;
  util.setZeroTimeout(function(){
    self._abort(type, message);
  });
};

/**
 * Destroys the Peer and emits an error message.
 * The Peer is not destroyed if it's in a disconnected state, in which case
 * it retains its disconnected state and its existing connections.
 */
Peer.prototype._abort = function(type, message) {
  util.error('Aborting!');
  if (!this._lastServerId) {
    this.destroy();
  } else {
    this.disconnect();
  }
  this.emitError(type, message);
};

/** Emits a typed error message. */
Peer.prototype.emitError = function(type, err) {
  util.error('Error:', err);
  if (typeof err === 'string') {
    err = new Error(err);
  }
  err.type = type;
  this.emit('error', err);
};

/**
 * Destroys the Peer: closes all active connections as well as the connection
 *  to the server.
 * Warning: The peer can no longer create or accept connections after being
 *  destroyed.
 */
Peer.prototype.destroy = function() {
  if (!this.destroyed) {
    this._cleanup();
    this.disconnect();
    this.destroyed = true;
  }
};


/** Disconnects every connection on this peer. */
Peer.prototype._cleanup = function() {
  if (this.connections) {
    var peers = Object.keys(this.connections);
    for (var i = 0, ii = peers.length; i < ii; i++) {
      this._cleanupPeer(peers[i]);
    }
  }
  this.emit('close');
};

/** Closes all connections to this peer. */
Peer.prototype._cleanupPeer = function(peer) {
  var connections = this.connections[peer];
  for (var j = 0, jj = connections.length; j < jj; j += 1) {
    connections[j].close();
  }
};

/**
 * Disconnects the Peer's connection to the PeerServer. Does not close any
 *  active connections.
 * Warning: The peer can no longer create or accept connections after being
 *  disconnected. It also cannot reconnect to the server.
 */
Peer.prototype.disconnect = function() {
  var self = this;
  util.setZeroTimeout(function(){
    if (!self.disconnected) {
      self.disconnected = true;
      self.open = false;
      if (self.socket) {
        self.socket.close();
      }
      self.emit('disconnected', self.id);
      self._lastServerId = self.id;
      self.id = null;
    }
  });
};

/** Attempts to reconnect with the same ID. */
Peer.prototype.reconnect = function() {
  if (this.disconnected && !this.destroyed) {
    util.log('Attempting reconnection to server with ID ' + this._lastServerId);
    this.disconnected = false;
    this._initializeServerConnection();
    this._initialize(this._lastServerId);
  } else if (this.destroyed) {
    throw new Error('This peer cannot reconnect to the server. It has already been destroyed.');
  } else if (!this.disconnected && !this.open) {
    // Do nothing. We're still connecting the first time.
    util.error('In a hurry? We\'re still trying to make the initial connection!');
  } else {
    throw new Error('Peer ' + this.id + ' cannot reconnect because it is not disconnected from the server!');
  }
};

/**
 * Get a list of available peer IDs. If you're running your own server, you'll
 * want to set allow_discovery: true in the PeerServer options. If you're using
 * the cloud server, email team@peerjs.com to get the functionality enabled for
 * your key.
 */
Peer.prototype.listAllPeers = function(cb) {
  cb = cb || function() {};
  var self = this;
  var http = new XMLHttpRequest();
  var protocol = this.options.secure ? 'https://' : 'http://';
  var url = protocol + this.options.host + ':' + this.options.port +
    this.options.path + this.options.key + '/peers';
  var queryString = '?ts=' + new Date().getTime() + '' + Math.random();
  url += queryString;

  // If there's no ID we need to wait for one before trying to init socket.
  http.open('get', url, true);
  http.onerror = function(e) {
    self._abort('server-error', 'Could not get peers from the server.');
    cb([]);
  };
  http.onreadystatechange = function() {
    if (http.readyState !== 4) {
      return;
    }
    if (http.status === 401) {
      var helpfulError = '';
      if (self.options.host !== util.CLOUD_HOST) {
        helpfulError = 'It looks like you\'re using the cloud server. You can email ' +
          'team@peerjs.com to enable peer listing for your API key.';
      } else {
        helpfulError = 'You need to enable `allow_discovery` on your self-hosted ' +
          'PeerServer to use this feature.';
      }
      cb([]);
      throw new Error('It doesn\'t look like you have permission to list peers IDs. ' + helpfulError);
    } else if (http.status !== 200) {
      cb([]);
    } else {
      cb(JSON.parse(http.responseText));
    }
  };
  http.send(null);
};

module.exports = Peer;

},{"./dataconnection":74,"./mediaconnection":75,"./socket":78,"./util":79,"eventemitter3":80}],78:[function(require,module,exports){
var util = require('./util');
var EventEmitter = require('eventemitter3');

/**
 * An abstraction on top of WebSockets and XHR streaming to provide fastest
 * possible connection for peers.
 */
function Socket(secure, host, port, path, key) {
  if (!(this instanceof Socket)) return new Socket(secure, host, port, path, key);

  EventEmitter.call(this);

  // Disconnected manually.
  this.disconnected = false;
  this._queue = [];

  var httpProtocol = secure ? 'https://' : 'http://';
  var wsProtocol = secure ? 'wss://' : 'ws://';
  this._httpUrl = httpProtocol + host + ':' + port + path + key;
  this._wsUrl = wsProtocol + host + ':' + port + path + 'peerjs?key=' + key;
}

util.inherits(Socket, EventEmitter);


/** Check in with ID or get one from server. */
Socket.prototype.start = function(id, token) {
  this.id = id;

  this._httpUrl += '/' + id + '/' + token;
  this._wsUrl += '&id=' + id + '&token=' + token;

  this._startXhrStream();
  this._startWebSocket();
}


/** Start up websocket communications. */
Socket.prototype._startWebSocket = function(id) {
  var self = this;

  if (this._socket) {
    return;
  }

  this._socket = new WebSocket(this._wsUrl);

  this._socket.onmessage = function(event) {
    try {
      var data = JSON.parse(event.data);
    } catch(e) {
      util.log('Invalid server message', event.data);
      return;
    }
    self.emit('message', data);
  };

  this._socket.onclose = function(event) {
    util.log('Socket closed.');
    self.disconnected = true;
    self.emit('disconnected');
  };

  // Take care of the queue of connections if necessary and make sure Peer knows
  // socket is open.
  this._socket.onopen = function() {
    if (self._timeout) {
      clearTimeout(self._timeout);
      setTimeout(function(){
        self._http.abort();
        self._http = null;
      }, 5000);
    }
    self._sendQueuedMessages();
    util.log('Socket open');
  };
}

/** Start XHR streaming. */
Socket.prototype._startXhrStream = function(n) {
  try {
    var self = this;
    this._http = new XMLHttpRequest();
    this._http._index = 1;
    this._http._streamIndex = n || 0;
    this._http.open('post', this._httpUrl + '/id?i=' + this._http._streamIndex, true);
    this._http.onerror = function() {
      // If we get an error, likely something went wrong.
      // Stop streaming.
      clearTimeout(self._timeout);
      self.emit('disconnected');
    }
    this._http.onreadystatechange = function() {
      if (this.readyState == 2 && this.old) {
        this.old.abort();
        delete this.old;
      } else if (this.readyState > 2 && this.status === 200 && this.responseText) {
        self._handleStream(this);
      }
    };
    this._http.send(null);
    this._setHTTPTimeout();
  } catch(e) {
    util.log('XMLHttpRequest not available; defaulting to WebSockets');
  }
}


/** Handles onreadystatechange response as a stream. */
Socket.prototype._handleStream = function(http) {
  // 3 and 4 are loading/done state. All others are not relevant.
  var messages = http.responseText.split('\n');

  // Check to see if anything needs to be processed on buffer.
  if (http._buffer) {
    while (http._buffer.length > 0) {
      var index = http._buffer.shift();
      var bufferedMessage = messages[index];
      try {
        bufferedMessage = JSON.parse(bufferedMessage);
      } catch(e) {
        http._buffer.shift(index);
        break;
      }
      this.emit('message', bufferedMessage);
    }
  }

  var message = messages[http._index];
  if (message) {
    http._index += 1;
    // Buffering--this message is incomplete and we'll get to it next time.
    // This checks if the httpResponse ended in a `\n`, in which case the last
    // element of messages should be the empty string.
    if (http._index === messages.length) {
      if (!http._buffer) {
        http._buffer = [];
      }
      http._buffer.push(http._index - 1);
    } else {
      try {
        message = JSON.parse(message);
      } catch(e) {
        util.log('Invalid server message', message);
        return;
      }
      this.emit('message', message);
    }
  }
}

Socket.prototype._setHTTPTimeout = function() {
  var self = this;
  this._timeout = setTimeout(function() {
    var old = self._http;
    if (!self._wsOpen()) {
      self._startXhrStream(old._streamIndex + 1);
      self._http.old = old;
    } else {
      old.abort();
    }
  }, 25000);
}

/** Is the websocket currently open? */
Socket.prototype._wsOpen = function() {
  return this._socket && this._socket.readyState == 1;
}

/** Send queued messages. */
Socket.prototype._sendQueuedMessages = function() {
  for (var i = 0, ii = this._queue.length; i < ii; i += 1) {
    this.send(this._queue[i]);
  }
}

/** Exposed send for DC & Peer. */
Socket.prototype.send = function(data) {
  if (this.disconnected) {
    return;
  }

  // If we didn't get an ID yet, we can't yet send anything so we should queue
  // up these messages.
  if (!this.id) {
    this._queue.push(data);
    return;
  }

  if (!data.type) {
    this.emit('error', 'Invalid message');
    return;
  }

  var message = JSON.stringify(data);
  if (this._wsOpen()) {
    this._socket.send(message);
  } else {
    var http = new XMLHttpRequest();
    var url = this._httpUrl + '/' + data.type.toLowerCase();
    http.open('post', url, true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(message);
  }
}

Socket.prototype.close = function() {
  if (!this.disconnected && this._wsOpen()) {
    this._socket.close();
    this.disconnected = true;
  }
}

module.exports = Socket;

},{"./util":79,"eventemitter3":80}],79:[function(require,module,exports){
var defaultConfig = {'iceServers': [{ 'url': 'stun:stun.l.google.com:19302' }]};
var dataCount = 1;

var BinaryPack = require('js-binarypack');
var RTCPeerConnection = require('./adapter').RTCPeerConnection;

var util = {
  noop: function() {},

  CLOUD_HOST: '0.peerjs.com',
  CLOUD_PORT: 9000,

  // Browsers that need chunking:
  chunkedBrowsers: {'Chrome': 1},
  chunkedMTU: 16300, // The original 60000 bytes setting does not work when sending data from Firefox to Chrome, which is "cut off" after 16384 bytes and delivered individually.

  // Logging logic
  logLevel: 0,
  setLogLevel: function(level) {
    var debugLevel = parseInt(level, 10);
    if (!isNaN(parseInt(level, 10))) {
      util.logLevel = debugLevel;
    } else {
      // If they are using truthy/falsy values for debug
      util.logLevel = level ? 3 : 0;
    }
    util.log = util.warn = util.error = util.noop;
    if (util.logLevel > 0) {
      util.error = util._printWith('ERROR');
    }
    if (util.logLevel > 1) {
      util.warn = util._printWith('WARNING');
    }
    if (util.logLevel > 2) {
      util.log = util._print;
    }
  },
  setLogFunction: function(fn) {
    if (fn.constructor !== Function) {
      util.warn('The log function you passed in is not a function. Defaulting to regular logs.');
    } else {
      util._print = fn;
    }
  },

  _printWith: function(prefix) {
    return function() {
      var copy = Array.prototype.slice.call(arguments);
      copy.unshift(prefix);
      util._print.apply(util, copy);
    };
  },
  _print: function () {
    var err = false;
    var copy = Array.prototype.slice.call(arguments);
    copy.unshift('PeerJS: ');
    for (var i = 0, l = copy.length; i < l; i++){
      if (copy[i] instanceof Error) {
        copy[i] = '(' + copy[i].name + ') ' + copy[i].message;
        err = true;
      }
    }
    err ? console.error.apply(console, copy) : console.log.apply(console, copy);
  },
  //

  // Returns browser-agnostic default config
  defaultConfig: defaultConfig,
  //

  // Returns the current browser.
  browser: (function() {
    if (window.mozRTCPeerConnection) {
      return 'Firefox';
    } else if (window.webkitRTCPeerConnection) {
      return 'Chrome';
    } else if (window.RTCPeerConnection) {
      return 'Supported';
    } else {
      return 'Unsupported';
    }
  })(),
  //

  // Lists which features are supported
  supports: (function() {
    if (typeof RTCPeerConnection === 'undefined') {
      return {};
    }

    var data = true;
    var audioVideo = true;

    var binaryBlob = false;
    var sctp = false;
    var onnegotiationneeded = !!window.webkitRTCPeerConnection;

    var pc, dc;
    try {
      pc = new RTCPeerConnection(defaultConfig, {optional: [{RtpDataChannels: true}]});
    } catch (e) {
      data = false;
      audioVideo = false;
    }

    if (data) {
      try {
        dc = pc.createDataChannel('_PEERJSTEST');
      } catch (e) {
        data = false;
      }
    }

    if (data) {
      // Binary test
      try {
        dc.binaryType = 'blob';
        binaryBlob = true;
      } catch (e) {
      }

      // Reliable test.
      // Unfortunately Chrome is a bit unreliable about whether or not they
      // support reliable.
      var reliablePC = new RTCPeerConnection(defaultConfig, {});
      try {
        var reliableDC = reliablePC.createDataChannel('_PEERJSRELIABLETEST', {});
        sctp = reliableDC.reliable;
      } catch (e) {
      }
      reliablePC.close();
    }

    // FIXME: not really the best check...
    if (audioVideo) {
      audioVideo = !!pc.addStream;
    }

    // FIXME: this is not great because in theory it doesn't work for
    // av-only browsers (?).
    if (!onnegotiationneeded && data) {
      // sync default check.
      var negotiationPC = new RTCPeerConnection(defaultConfig, {optional: [{RtpDataChannels: true}]});
      negotiationPC.onnegotiationneeded = function() {
        onnegotiationneeded = true;
        // async check.
        if (util && util.supports) {
          util.supports.onnegotiationneeded = true;
        }
      };
      negotiationPC.createDataChannel('_PEERJSNEGOTIATIONTEST');

      setTimeout(function() {
        negotiationPC.close();
      }, 1000);
    }

    if (pc) {
      pc.close();
    }

    return {
      audioVideo: audioVideo,
      data: data,
      binaryBlob: binaryBlob,
      binary: sctp, // deprecated; sctp implies binary support.
      reliable: sctp, // deprecated; sctp implies reliable data.
      sctp: sctp,
      onnegotiationneeded: onnegotiationneeded
    };
  }()),
  //

  // Ensure alphanumeric ids
  validateId: function(id) {
    // Allow empty ids
    return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.exec(id);
  },

  validateKey: function(key) {
    // Allow empty keys
    return !key || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.exec(key);
  },


  debug: false,

  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  extend: function(dest, source) {
    for(var key in source) {
      if(source.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
    return dest;
  },
  pack: BinaryPack.pack,
  unpack: BinaryPack.unpack,

  log: function () {
    if (util.debug) {
      var err = false;
      var copy = Array.prototype.slice.call(arguments);
      copy.unshift('PeerJS: ');
      for (var i = 0, l = copy.length; i < l; i++){
        if (copy[i] instanceof Error) {
          copy[i] = '(' + copy[i].name + ') ' + copy[i].message;
          err = true;
        }
      }
      err ? console.error.apply(console, copy) : console.log.apply(console, copy);
    }
  },

  setZeroTimeout: (function(global) {
    var timeouts = [];
    var messageName = 'zero-timeout-message';

    // Like setTimeout, but only takes a function argument.	 There's
    // no time argument (always zero) and no arguments (you have to
    // use a closure).
    function setZeroTimeoutPostMessage(fn) {
      timeouts.push(fn);
      global.postMessage(messageName, '*');
    }

    function handleMessage(event) {
      if (event.source == global && event.data == messageName) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (timeouts.length) {
          timeouts.shift()();
        }
      }
    }
    if (global.addEventListener) {
      global.addEventListener('message', handleMessage, true);
    } else if (global.attachEvent) {
      global.attachEvent('onmessage', handleMessage);
    }
    return setZeroTimeoutPostMessage;
  }(window)),

  // Binary stuff

  // chunks a blob.
  chunk: function(bl) {
    var chunks = [];
    var size = bl.size;
    var start = index = 0;
    var total = Math.ceil(size / util.chunkedMTU);
    while (start < size) {
      var end = Math.min(size, start + util.chunkedMTU);
      var b = bl.slice(start, end);

      var chunk = {
        __peerData: dataCount,
        n: index,
        data: b,
        total: total
      };

      chunks.push(chunk);

      start = end;
      index += 1;
    }
    dataCount += 1;
    return chunks;
  },

  blobToArrayBuffer: function(blob, cb){
    var fr = new FileReader();
    fr.onload = function(evt) {
      cb(evt.target.result);
    };
    fr.readAsArrayBuffer(blob);
  },
  blobToBinaryString: function(blob, cb){
    var fr = new FileReader();
    fr.onload = function(evt) {
      cb(evt.target.result);
    };
    fr.readAsBinaryString(blob);
  },
  binaryStringToArrayBuffer: function(binary) {
    var byteArray = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      byteArray[i] = binary.charCodeAt(i) & 0xff;
    }
    return byteArray.buffer;
  },
  randomToken: function () {
    return Math.random().toString(36).substr(2);
  },
  //

  isSecure: function() {
    return location.protocol === 'https:';
  }
};

module.exports = util;

},{"./adapter":73,"js-binarypack":81}],80:[function(require,module,exports){
'use strict';

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} once Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Holds the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  if (!this._events || !this._events[event]) return [];
  if (this._events[event].fn) return [this._events[event].fn];

  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
    ee[i] = this._events[event][i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  if (!this._events || !this._events[event]) return false;

  var listeners = this._events[event]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
  if (!this._events || !this._events[event]) return this;

  var listeners = this._events[event]
    , events = [];

  if (fn) {
    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
      events.push(listeners);
    }
    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
        events.push(listeners[i]);
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[event] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[event];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[event];
  else this._events = {};

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the module.
//
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.EventEmitter2 = EventEmitter;
EventEmitter.EventEmitter3 = EventEmitter;

//
// Expose the module.
//
module.exports = EventEmitter;

},{}],81:[function(require,module,exports){
var BufferBuilder = require('./bufferbuilder').BufferBuilder;
var binaryFeatures = require('./bufferbuilder').binaryFeatures;

var BinaryPack = {
  unpack: function(data){
    var unpacker = new Unpacker(data);
    return unpacker.unpack();
  },
  pack: function(data){
    var packer = new Packer();
    packer.pack(data);
    var buffer = packer.getBuffer();
    return buffer;
  }
};

module.exports = BinaryPack;

function Unpacker (data){
  // Data is ArrayBuffer
  this.index = 0;
  this.dataBuffer = data;
  this.dataView = new Uint8Array(this.dataBuffer);
  this.length = this.dataBuffer.byteLength;
}

Unpacker.prototype.unpack = function(){
  var type = this.unpack_uint8();
  if (type < 0x80){
    var positive_fixnum = type;
    return positive_fixnum;
  } else if ((type ^ 0xe0) < 0x20){
    var negative_fixnum = (type ^ 0xe0) - 0x20;
    return negative_fixnum;
  }
  var size;
  if ((size = type ^ 0xa0) <= 0x0f){
    return this.unpack_raw(size);
  } else if ((size = type ^ 0xb0) <= 0x0f){
    return this.unpack_string(size);
  } else if ((size = type ^ 0x90) <= 0x0f){
    return this.unpack_array(size);
  } else if ((size = type ^ 0x80) <= 0x0f){
    return this.unpack_map(size);
  }
  switch(type){
    case 0xc0:
      return null;
    case 0xc1:
      return undefined;
    case 0xc2:
      return false;
    case 0xc3:
      return true;
    case 0xca:
      return this.unpack_float();
    case 0xcb:
      return this.unpack_double();
    case 0xcc:
      return this.unpack_uint8();
    case 0xcd:
      return this.unpack_uint16();
    case 0xce:
      return this.unpack_uint32();
    case 0xcf:
      return this.unpack_uint64();
    case 0xd0:
      return this.unpack_int8();
    case 0xd1:
      return this.unpack_int16();
    case 0xd2:
      return this.unpack_int32();
    case 0xd3:
      return this.unpack_int64();
    case 0xd4:
      return undefined;
    case 0xd5:
      return undefined;
    case 0xd6:
      return undefined;
    case 0xd7:
      return undefined;
    case 0xd8:
      size = this.unpack_uint16();
      return this.unpack_string(size);
    case 0xd9:
      size = this.unpack_uint32();
      return this.unpack_string(size);
    case 0xda:
      size = this.unpack_uint16();
      return this.unpack_raw(size);
    case 0xdb:
      size = this.unpack_uint32();
      return this.unpack_raw(size);
    case 0xdc:
      size = this.unpack_uint16();
      return this.unpack_array(size);
    case 0xdd:
      size = this.unpack_uint32();
      return this.unpack_array(size);
    case 0xde:
      size = this.unpack_uint16();
      return this.unpack_map(size);
    case 0xdf:
      size = this.unpack_uint32();
      return this.unpack_map(size);
  }
}

Unpacker.prototype.unpack_uint8 = function(){
  var byte = this.dataView[this.index] & 0xff;
  this.index++;
  return byte;
};

Unpacker.prototype.unpack_uint16 = function(){
  var bytes = this.read(2);
  var uint16 =
    ((bytes[0] & 0xff) * 256) + (bytes[1] & 0xff);
  this.index += 2;
  return uint16;
}

Unpacker.prototype.unpack_uint32 = function(){
  var bytes = this.read(4);
  var uint32 =
     ((bytes[0]  * 256 +
       bytes[1]) * 256 +
       bytes[2]) * 256 +
       bytes[3];
  this.index += 4;
  return uint32;
}

Unpacker.prototype.unpack_uint64 = function(){
  var bytes = this.read(8);
  var uint64 =
   ((((((bytes[0]  * 256 +
       bytes[1]) * 256 +
       bytes[2]) * 256 +
       bytes[3]) * 256 +
       bytes[4]) * 256 +
       bytes[5]) * 256 +
       bytes[6]) * 256 +
       bytes[7];
  this.index += 8;
  return uint64;
}


Unpacker.prototype.unpack_int8 = function(){
  var uint8 = this.unpack_uint8();
  return (uint8 < 0x80 ) ? uint8 : uint8 - (1 << 8);
};

Unpacker.prototype.unpack_int16 = function(){
  var uint16 = this.unpack_uint16();
  return (uint16 < 0x8000 ) ? uint16 : uint16 - (1 << 16);
}

Unpacker.prototype.unpack_int32 = function(){
  var uint32 = this.unpack_uint32();
  return (uint32 < Math.pow(2, 31) ) ? uint32 :
    uint32 - Math.pow(2, 32);
}

Unpacker.prototype.unpack_int64 = function(){
  var uint64 = this.unpack_uint64();
  return (uint64 < Math.pow(2, 63) ) ? uint64 :
    uint64 - Math.pow(2, 64);
}

Unpacker.prototype.unpack_raw = function(size){
  if ( this.length < this.index + size){
    throw new Error('BinaryPackFailure: index is out of range'
      + ' ' + this.index + ' ' + size + ' ' + this.length);
  }
  var buf = this.dataBuffer.slice(this.index, this.index + size);
  this.index += size;

    //buf = util.bufferToString(buf);

  return buf;
}

Unpacker.prototype.unpack_string = function(size){
  var bytes = this.read(size);
  var i = 0, str = '', c, code;
  while(i < size){
    c = bytes[i];
    if ( c < 128){
      str += String.fromCharCode(c);
      i++;
    } else if ((c ^ 0xc0) < 32){
      code = ((c ^ 0xc0) << 6) | (bytes[i+1] & 63);
      str += String.fromCharCode(code);
      i += 2;
    } else {
      code = ((c & 15) << 12) | ((bytes[i+1] & 63) << 6) |
        (bytes[i+2] & 63);
      str += String.fromCharCode(code);
      i += 3;
    }
  }
  this.index += size;
  return str;
}

Unpacker.prototype.unpack_array = function(size){
  var objects = new Array(size);
  for(var i = 0; i < size ; i++){
    objects[i] = this.unpack();
  }
  return objects;
}

Unpacker.prototype.unpack_map = function(size){
  var map = {};
  for(var i = 0; i < size ; i++){
    var key  = this.unpack();
    var value = this.unpack();
    map[key] = value;
  }
  return map;
}

Unpacker.prototype.unpack_float = function(){
  var uint32 = this.unpack_uint32();
  var sign = uint32 >> 31;
  var exp  = ((uint32 >> 23) & 0xff) - 127;
  var fraction = ( uint32 & 0x7fffff ) | 0x800000;
  return (sign == 0 ? 1 : -1) *
    fraction * Math.pow(2, exp - 23);
}

Unpacker.prototype.unpack_double = function(){
  var h32 = this.unpack_uint32();
  var l32 = this.unpack_uint32();
  var sign = h32 >> 31;
  var exp  = ((h32 >> 20) & 0x7ff) - 1023;
  var hfrac = ( h32 & 0xfffff ) | 0x100000;
  var frac = hfrac * Math.pow(2, exp - 20) +
    l32   * Math.pow(2, exp - 52);
  return (sign == 0 ? 1 : -1) * frac;
}

Unpacker.prototype.read = function(length){
  var j = this.index;
  if (j + length <= this.length) {
    return this.dataView.subarray(j, j + length);
  } else {
    throw new Error('BinaryPackFailure: read index out of range');
  }
}

function Packer(){
  this.bufferBuilder = new BufferBuilder();
}

Packer.prototype.getBuffer = function(){
  return this.bufferBuilder.getBuffer();
}

Packer.prototype.pack = function(value){
  var type = typeof(value);
  if (type == 'string'){
    this.pack_string(value);
  } else if (type == 'number'){
    if (Math.floor(value) === value){
      this.pack_integer(value);
    } else{
      this.pack_double(value);
    }
  } else if (type == 'boolean'){
    if (value === true){
      this.bufferBuilder.append(0xc3);
    } else if (value === false){
      this.bufferBuilder.append(0xc2);
    }
  } else if (type == 'undefined'){
    this.bufferBuilder.append(0xc0);
  } else if (type == 'object'){
    if (value === null){
      this.bufferBuilder.append(0xc0);
    } else {
      var constructor = value.constructor;
      if (constructor == Array){
        this.pack_array(value);
      } else if (constructor == Blob || constructor == File) {
        this.pack_bin(value);
      } else if (constructor == ArrayBuffer) {
        if(binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value));
        } else {
          this.pack_bin(value);
        }
      } else if ('BYTES_PER_ELEMENT' in value){
        if(binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value.buffer));
        } else {
          this.pack_bin(value.buffer);
        }
      } else if (constructor == Object){
        this.pack_object(value);
      } else if (constructor == Date){
        this.pack_string(value.toString());
      } else if (typeof value.toBinaryPack == 'function'){
        this.bufferBuilder.append(value.toBinaryPack());
      } else {
        throw new Error('Type "' + constructor.toString() + '" not yet supported');
      }
    }
  } else {
    throw new Error('Type "' + type + '" not yet supported');
  }
  this.bufferBuilder.flush();
}


Packer.prototype.pack_bin = function(blob){
  var length = blob.length || blob.byteLength || blob.size;
  if (length <= 0x0f){
    this.pack_uint8(0xa0 + length);
  } else if (length <= 0xffff){
    this.bufferBuilder.append(0xda) ;
    this.pack_uint16(length);
  } else if (length <= 0xffffffff){
    this.bufferBuilder.append(0xdb);
    this.pack_uint32(length);
  } else{
    throw new Error('Invalid length');
  }
  this.bufferBuilder.append(blob);
}

Packer.prototype.pack_string = function(str){
  var length = utf8Length(str);

  if (length <= 0x0f){
    this.pack_uint8(0xb0 + length);
  } else if (length <= 0xffff){
    this.bufferBuilder.append(0xd8) ;
    this.pack_uint16(length);
  } else if (length <= 0xffffffff){
    this.bufferBuilder.append(0xd9);
    this.pack_uint32(length);
  } else{
    throw new Error('Invalid length');
  }
  this.bufferBuilder.append(str);
}

Packer.prototype.pack_array = function(ary){
  var length = ary.length;
  if (length <= 0x0f){
    this.pack_uint8(0x90 + length);
  } else if (length <= 0xffff){
    this.bufferBuilder.append(0xdc)
    this.pack_uint16(length);
  } else if (length <= 0xffffffff){
    this.bufferBuilder.append(0xdd);
    this.pack_uint32(length);
  } else{
    throw new Error('Invalid length');
  }
  for(var i = 0; i < length ; i++){
    this.pack(ary[i]);
  }
}

Packer.prototype.pack_integer = function(num){
  if ( -0x20 <= num && num <= 0x7f){
    this.bufferBuilder.append(num & 0xff);
  } else if (0x00 <= num && num <= 0xff){
    this.bufferBuilder.append(0xcc);
    this.pack_uint8(num);
  } else if (-0x80 <= num && num <= 0x7f){
    this.bufferBuilder.append(0xd0);
    this.pack_int8(num);
  } else if ( 0x0000 <= num && num <= 0xffff){
    this.bufferBuilder.append(0xcd);
    this.pack_uint16(num);
  } else if (-0x8000 <= num && num <= 0x7fff){
    this.bufferBuilder.append(0xd1);
    this.pack_int16(num);
  } else if ( 0x00000000 <= num && num <= 0xffffffff){
    this.bufferBuilder.append(0xce);
    this.pack_uint32(num);
  } else if (-0x80000000 <= num && num <= 0x7fffffff){
    this.bufferBuilder.append(0xd2);
    this.pack_int32(num);
  } else if (-0x8000000000000000 <= num && num <= 0x7FFFFFFFFFFFFFFF){
    this.bufferBuilder.append(0xd3);
    this.pack_int64(num);
  } else if (0x0000000000000000 <= num && num <= 0xFFFFFFFFFFFFFFFF){
    this.bufferBuilder.append(0xcf);
    this.pack_uint64(num);
  } else{
    throw new Error('Invalid integer');
  }
}

Packer.prototype.pack_double = function(num){
  var sign = 0;
  if (num < 0){
    sign = 1;
    num = -num;
  }
  var exp  = Math.floor(Math.log(num) / Math.LN2);
  var frac0 = num / Math.pow(2, exp) - 1;
  var frac1 = Math.floor(frac0 * Math.pow(2, 52));
  var b32   = Math.pow(2, 32);
  var h32 = (sign << 31) | ((exp+1023) << 20) |
      (frac1 / b32) & 0x0fffff;
  var l32 = frac1 % b32;
  this.bufferBuilder.append(0xcb);
  this.pack_int32(h32);
  this.pack_int32(l32);
}

Packer.prototype.pack_object = function(obj){
  var keys = Object.keys(obj);
  var length = keys.length;
  if (length <= 0x0f){
    this.pack_uint8(0x80 + length);
  } else if (length <= 0xffff){
    this.bufferBuilder.append(0xde);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff){
    this.bufferBuilder.append(0xdf);
    this.pack_uint32(length);
  } else{
    throw new Error('Invalid length');
  }
  for(var prop in obj){
    if (obj.hasOwnProperty(prop)){
      this.pack(prop);
      this.pack(obj[prop]);
    }
  }
}

Packer.prototype.pack_uint8 = function(num){
  this.bufferBuilder.append(num);
}

Packer.prototype.pack_uint16 = function(num){
  this.bufferBuilder.append(num >> 8);
  this.bufferBuilder.append(num & 0xff);
}

Packer.prototype.pack_uint32 = function(num){
  var n = num & 0xffffffff;
  this.bufferBuilder.append((n & 0xff000000) >>> 24);
  this.bufferBuilder.append((n & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((n & 0x0000ff00) >>>  8);
  this.bufferBuilder.append((n & 0x000000ff));
}

Packer.prototype.pack_uint64 = function(num){
  var high = num / Math.pow(2, 32);
  var low  = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 0xff000000) >>> 24);
  this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((high & 0x0000ff00) >>>  8);
  this.bufferBuilder.append((high & 0x000000ff));
  this.bufferBuilder.append((low  & 0xff000000) >>> 24);
  this.bufferBuilder.append((low  & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((low  & 0x0000ff00) >>>  8);
  this.bufferBuilder.append((low  & 0x000000ff));
}

Packer.prototype.pack_int8 = function(num){
  this.bufferBuilder.append(num & 0xff);
}

Packer.prototype.pack_int16 = function(num){
  this.bufferBuilder.append((num & 0xff00) >> 8);
  this.bufferBuilder.append(num & 0xff);
}

Packer.prototype.pack_int32 = function(num){
  this.bufferBuilder.append((num >>> 24) & 0xff);
  this.bufferBuilder.append((num & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((num & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((num & 0x000000ff));
}

Packer.prototype.pack_int64 = function(num){
  var high = Math.floor(num / Math.pow(2, 32));
  var low  = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 0xff000000) >>> 24);
  this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((high & 0x0000ff00) >>>  8);
  this.bufferBuilder.append((high & 0x000000ff));
  this.bufferBuilder.append((low  & 0xff000000) >>> 24);
  this.bufferBuilder.append((low  & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((low  & 0x0000ff00) >>>  8);
  this.bufferBuilder.append((low  & 0x000000ff));
}

function _utf8Replace(m){
  var code = m.charCodeAt(0);

  if(code <= 0x7ff) return '00';
  if(code <= 0xffff) return '000';
  if(code <= 0x1fffff) return '0000';
  if(code <= 0x3ffffff) return '00000';
  return '000000';
}

function utf8Length(str){
  if (str.length > 600) {
    // Blob method faster for large strings
    return (new Blob([str])).size;
  } else {
    return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
  }
}

},{"./bufferbuilder":82}],82:[function(require,module,exports){
var binaryFeatures = {};
binaryFeatures.useBlobBuilder = (function(){
  try {
    new Blob([]);
    return false;
  } catch (e) {
    return true;
  }
})();

binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && (function(){
  try {
    return (new Blob([new Uint8Array([])])).size === 0;
  } catch (e) {
    return true;
  }
})();

module.exports.binaryFeatures = binaryFeatures;
var BlobBuilder = module.exports.BlobBuilder;
if (typeof window != 'undefined') {
  BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder ||
    window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
}

function BufferBuilder(){
  this._pieces = [];
  this._parts = [];
}

BufferBuilder.prototype.append = function(data) {
  if(typeof data === 'number') {
    this._pieces.push(data);
  } else {
    this.flush();
    this._parts.push(data);
  }
};

BufferBuilder.prototype.flush = function() {
  if (this._pieces.length > 0) {
    var buf = new Uint8Array(this._pieces);
    if(!binaryFeatures.useArrayBufferView) {
      buf = buf.buffer;
    }
    this._parts.push(buf);
    this._pieces = [];
  }
};

BufferBuilder.prototype.getBuffer = function() {
  this.flush();
  if(binaryFeatures.useBlobBuilder) {
    var builder = new BlobBuilder();
    for(var i = 0, ii = this._parts.length; i < ii; i++) {
      builder.append(this._parts[i]);
    }
    return builder.getBlob();
  } else {
    return new Blob(this._parts);
  }
};

module.exports.BufferBuilder = BufferBuilder;

},{}],83:[function(require,module,exports){
var util = require('./util');

/**
 * Reliable transfer for Chrome Canary DataChannel impl.
 * Author: @michellebu
 */
function Reliable(dc, debug) {
  if (!(this instanceof Reliable)) return new Reliable(dc);
  this._dc = dc;

  util.debug = debug;

  // Messages sent/received so far.
  // id: { ack: n, chunks: [...] }
  this._outgoing = {};
  // id: { ack: ['ack', id, n], chunks: [...] }
  this._incoming = {};
  this._received = {};

  // Window size.
  this._window = 1000;
  // MTU.
  this._mtu = 500;
  // Interval for setInterval. In ms.
  this._interval = 0;

  // Messages sent.
  this._count = 0;

  // Outgoing message queue.
  this._queue = [];

  this._setupDC();
};

// Send a message reliably.
Reliable.prototype.send = function(msg) {
  // Determine if chunking is necessary.
  var bl = util.pack(msg);
  if (bl.size < this._mtu) {
    this._handleSend(['no', bl]);
    return;
  }

  this._outgoing[this._count] = {
    ack: 0,
    chunks: this._chunk(bl)
  };

  if (util.debug) {
    this._outgoing[this._count].timer = new Date();
  }

  // Send prelim window.
  this._sendWindowedChunks(this._count);
  this._count += 1;
};

// Set up interval for processing queue.
Reliable.prototype._setupInterval = function() {
  // TODO: fail gracefully.

  var self = this;
  this._timeout = setInterval(function() {
    // FIXME: String stuff makes things terribly async.
    var msg = self._queue.shift();
    if (msg._multiple) {
      for (var i = 0, ii = msg.length; i < ii; i += 1) {
        self._intervalSend(msg[i]);
      }
    } else {
      self._intervalSend(msg);
    }
  }, this._interval);
};

Reliable.prototype._intervalSend = function(msg) {
  var self = this;
  msg = util.pack(msg);
  util.blobToBinaryString(msg, function(str) {
    self._dc.send(str);
  });
  if (self._queue.length === 0) {
    clearTimeout(self._timeout);
    self._timeout = null;
    //self._processAcks();
  }
};

// Go through ACKs to send missing pieces.
Reliable.prototype._processAcks = function() {
  for (var id in this._outgoing) {
    if (this._outgoing.hasOwnProperty(id)) {
      this._sendWindowedChunks(id);
    }
  }
};

// Handle sending a message.
// FIXME: Don't wait for interval time for all messages...
Reliable.prototype._handleSend = function(msg) {
  var push = true;
  for (var i = 0, ii = this._queue.length; i < ii; i += 1) {
    var item = this._queue[i];
    if (item === msg) {
      push = false;
    } else if (item._multiple && item.indexOf(msg) !== -1) {
      push = false;
    }
  }
  if (push) {
    this._queue.push(msg);
    if (!this._timeout) {
      this._setupInterval();
    }
  }
};

// Set up DataChannel handlers.
Reliable.prototype._setupDC = function() {
  // Handle various message types.
  var self = this;
  this._dc.onmessage = function(e) {
    var msg = e.data;
    var datatype = msg.constructor;
    // FIXME: msg is String until binary is supported.
    // Once that happens, this will have to be smarter.
    if (datatype === String) {
      var ab = util.binaryStringToArrayBuffer(msg);
      msg = util.unpack(ab);
      self._handleMessage(msg);
    }
  };
};

// Handles an incoming message.
Reliable.prototype._handleMessage = function(msg) {
  var id = msg[1];
  var idata = this._incoming[id];
  var odata = this._outgoing[id];
  var data;
  switch (msg[0]) {
    // No chunking was done.
    case 'no':
      var message = id;
      if (!!message) {
        this.onmessage(util.unpack(message));
      }
      break;
    // Reached the end of the message.
    case 'end':
      data = idata;

      // In case end comes first.
      this._received[id] = msg[2];

      if (!data) {
        break;
      }

      this._ack(id);
      break;
    case 'ack':
      data = odata;
      if (!!data) {
        var ack = msg[2];
        // Take the larger ACK, for out of order messages.
        data.ack = Math.max(ack, data.ack);

        // Clean up when all chunks are ACKed.
        if (data.ack >= data.chunks.length) {
          util.log('Time: ', new Date() - data.timer);
          delete this._outgoing[id];
        } else {
          this._processAcks();
        }
      }
      // If !data, just ignore.
      break;
    // Received a chunk of data.
    case 'chunk':
      // Create a new entry if none exists.
      data = idata;
      if (!data) {
        var end = this._received[id];
        if (end === true) {
          break;
        }
        data = {
          ack: ['ack', id, 0],
          chunks: []
        };
        this._incoming[id] = data;
      }

      var n = msg[2];
      var chunk = msg[3];
      data.chunks[n] = new Uint8Array(chunk);

      // If we get the chunk we're looking for, ACK for next missing.
      // Otherwise, ACK the same N again.
      if (n === data.ack[2]) {
        this._calculateNextAck(id);
      }
      this._ack(id);
      break;
    default:
      // Shouldn't happen, but would make sense for message to just go
      // through as is.
      this._handleSend(msg);
      break;
  }
};

// Chunks BL into smaller messages.
Reliable.prototype._chunk = function(bl) {
  var chunks = [];
  var size = bl.size;
  var start = 0;
  while (start < size) {
    var end = Math.min(size, start + this._mtu);
    var b = bl.slice(start, end);
    var chunk = {
      payload: b
    }
    chunks.push(chunk);
    start = end;
  }
  util.log('Created', chunks.length, 'chunks.');
  return chunks;
};

// Sends ACK N, expecting Nth blob chunk for message ID.
Reliable.prototype._ack = function(id) {
  var ack = this._incoming[id].ack;

  // if ack is the end value, then call _complete.
  if (this._received[id] === ack[2]) {
    this._complete(id);
    this._received[id] = true;
  }

  this._handleSend(ack);
};

// Calculates the next ACK number, given chunks.
Reliable.prototype._calculateNextAck = function(id) {
  var data = this._incoming[id];
  var chunks = data.chunks;
  for (var i = 0, ii = chunks.length; i < ii; i += 1) {
    // This chunk is missing!!! Better ACK for it.
    if (chunks[i] === undefined) {
      data.ack[2] = i;
      return;
    }
  }
  data.ack[2] = chunks.length;
};

// Sends the next window of chunks.
Reliable.prototype._sendWindowedChunks = function(id) {
  util.log('sendWindowedChunks for: ', id);
  var data = this._outgoing[id];
  var ch = data.chunks;
  var chunks = [];
  var limit = Math.min(data.ack + this._window, ch.length);
  for (var i = data.ack; i < limit; i += 1) {
    if (!ch[i].sent || i === data.ack) {
      ch[i].sent = true;
      chunks.push(['chunk', id, i, ch[i].payload]);
    }
  }
  if (data.ack + this._window >= ch.length) {
    chunks.push(['end', id, ch.length])
  }
  chunks._multiple = true;
  this._handleSend(chunks);
};

// Puts together a message from chunks.
Reliable.prototype._complete = function(id) {
  util.log('Completed called for', id);
  var self = this;
  var chunks = this._incoming[id].chunks;
  var bl = new Blob(chunks);
  util.blobToArrayBuffer(bl, function(ab) {
    self.onmessage(util.unpack(ab));
  });
  delete this._incoming[id];
};

// Ups bandwidth limit on SDP. Meant to be called during offer/answer.
Reliable.higherBandwidthSDP = function(sdp) {
  // AS stands for Application-Specific Maximum.
  // Bandwidth number is in kilobits / sec.
  // See RFC for more info: http://www.ietf.org/rfc/rfc2327.txt

  // Chrome 31+ doesn't want us munging the SDP, so we'll let them have their
  // way.
  var version = navigator.appVersion.match(/Chrome\/(.*?) /);
  if (version) {
    version = parseInt(version[1].split('.').shift());
    if (version < 31) {
      var parts = sdp.split('b=AS:30');
      var replace = 'b=AS:102400'; // 100 Mbps
      if (parts.length > 1) {
        return parts[0] + replace + parts[1];
      }
    }
  }

  return sdp;
};

// Overwritten, typically.
Reliable.prototype.onmessage = function(msg) {};

module.exports.Reliable = Reliable;

},{"./util":84}],84:[function(require,module,exports){
var BinaryPack = require('js-binarypack');

var util = {
  debug: false,
  
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  extend: function(dest, source) {
    for(var key in source) {
      if(source.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
    return dest;
  },
  pack: BinaryPack.pack,
  unpack: BinaryPack.unpack,
  
  log: function () {
    if (util.debug) {
      var copy = [];
      for (var i = 0; i < arguments.length; i++) {
        copy[i] = arguments[i];
      }
      copy.unshift('Reliable: ');
      console.log.apply(console, copy);
    }
  },

  setZeroTimeout: (function(global) {
    var timeouts = [];
    var messageName = 'zero-timeout-message';

    // Like setTimeout, but only takes a function argument.	 There's
    // no time argument (always zero) and no arguments (you have to
    // use a closure).
    function setZeroTimeoutPostMessage(fn) {
      timeouts.push(fn);
      global.postMessage(messageName, '*');
    }		

    function handleMessage(event) {
      if (event.source == global && event.data == messageName) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (timeouts.length) {
          timeouts.shift()();
        }
      }
    }
    if (global.addEventListener) {
      global.addEventListener('message', handleMessage, true);
    } else if (global.attachEvent) {
      global.attachEvent('onmessage', handleMessage);
    }
    return setZeroTimeoutPostMessage;
  }(this)),
  
  blobToArrayBuffer: function(blob, cb){
    var fr = new FileReader();
    fr.onload = function(evt) {
      cb(evt.target.result);
    };
    fr.readAsArrayBuffer(blob);
  },
  blobToBinaryString: function(blob, cb){
    var fr = new FileReader();
    fr.onload = function(evt) {
      cb(evt.target.result);
    };
    fr.readAsBinaryString(blob);
  },
  binaryStringToArrayBuffer: function(binary) {
    var byteArray = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      byteArray[i] = binary.charCodeAt(i) & 0xff;
    }
    return byteArray.buffer;
  },
  randomToken: function () {
    return Math.random().toString(36).substr(2);
  }
};

module.exports = util;

},{"js-binarypack":81}],85:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hashmap = require('hashmap');

var _peerjs = require('peerjs');

var _peerjs2 = _interopRequireDefault(_peerjs);

//import {Promise} from 'kew'

var PeerConnection = (function () {
  function PeerConnection(peerJSConnection) {
    _classCallCheck(this, PeerConnection);

    this.peerJSConnection = peerJSConnection;
    this.connectedDataConnections = new _hashmap.HashMap();

    peerJSConnection.on('connection', this.addDataConnection.bind(this));

    this.on = peerJSConnection.on.bind(peerJSConnection);
    this.once = peerJSConnection.once.bind(peerJSConnection);
    this.off = peerJSConnection.off.bind(peerJSConnection);
    this.id = peerJSConnection.id;
  }

  _createClass(PeerConnection, [{
    key: 'addDataConnection',
    value: function addDataConnection(dataConnection) {
      var _this = this;

      if (!this.connectedDataConnections.has(dataConnection.peer)) {
        console.log('Requested connection: ' + dataConnection.peer);
        this.connectedDataConnections.set(dataConnection.peer, dataConnection);
        dataConnection.on('close', function () {
          return _this.connectedDataConnections.remove(dataConnection.peer);
        });
      }
    }
  }, {
    key: 'connect',
    value: function connect(peerId) {
      var _this2 = this;

      return new _Promise(function (resolve, reject) {
        var dataConnection = _this2.peerJSConnection.connect(peerId);
        _this2.peerJSConnection.once('error', reject);
        dataConnection.once('open', function () {
          _this2.peerJSConnection.off('error', reject);
          _this2.addDataConnection.apply(_this2, [dataConnection]);
          resolve(dataConnection);
        });
      });
    }
  }], [{
    key: 'create',
    value: function create(id) {
      return new _Promise(function (resolve, reject) {
        var peerJSConnection = new _peerjs2['default'](id, { key: PeerConnection.peerJSAPIKey, debug: 3 });
        peerJSConnection.once('open', function () {
          peerJSConnection.off('error', reject);
          resolve(new PeerConnection(peerJSConnection));
        }).once('error', reject);
      });
    }
  }]);

  return PeerConnection;
})();

PeerConnection.peerJSAPIKey = '4fiqbw9owvm6xbt9';

// Connection
var peerConnection = null;
exports['default'] = {
  init: function init(id) {
    return PeerConnection.create(id).then(function (c) {
      return peerConnection = c;
    });
  },
  connectTo: function connectTo(id) {
    return peerConnection.connect(id);
  }
};
module.exports = exports['default'];

},{"babel-runtime/core-js/promise":5,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/interop-require-default":10,"hashmap":72,"peerjs":77}],86:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var Bullet = (function (_me$Entity) {
  function Bullet(x, y, angle) {
    _classCallCheck(this, Bullet);

    _get(Object.getPrototypeOf(Bullet.prototype), 'constructor', this).call(this);
    this.init(x, y, angle);
  }

  _inherits(Bullet, _me$Entity);

  _createClass(Bullet, [{
    key: 'init',
    value: function init(x, y, angle) {
      var bullet = _gameJs2['default'].texture.createSpriteFromName('gun_bullet');
      bullet.angle = angle;

      x = x - Math.floor(bullet.width / 2);
      y = y - Math.floor(bullet.height / 2);
      var height = bullet.height;
      var width = bullet.width;

      _get(Object.getPrototypeOf(Bullet.prototype), 'init', this).call(this, x, y, { width: width, height: height });

      this.renderable = bullet;

      this.body.setFriction(0, 0);
      this.body.gravity = 0;
      this.body.setVelocity(50, 50);
      this.body.addShape(bullet.toPolygon().rotate(angle));
      this.body.removeShapeAt(0);
      this.body.collisionType = _melonJS2['default'].collision.types.PROJECTILE_OBJECT;
      this.body.collisionMask = _melonJS2['default'].collision.types.WORLD_SHAPE | _melonJS2['default'].collision.types.ENEMY_OBJECT;
    }
  }, {
    key: 'update',
    value: function update(dt) {
      this.body.vel.x = this.body.accel.x * Math.cos(this.renderable.angle);
      this.body.vel.y = this.body.accel.y * Math.sin(this.renderable.angle);

      this.body.update();
      _melonJS2['default'].collision.check(this);

      _get(Object.getPrototypeOf(Bullet.prototype), 'update', this).call(this, dt);
      return true;
    }
  }, {
    key: 'onCollision',
    value: function onCollision(response, other) {
      _melonJS2['default'].game.world.removeChildNow(this);
      return false;
    }
  }]);

  return Bullet;
})(_melonJS2['default'].Entity);

exports['default'] = Bullet;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],87:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _BulletJs = require('./Bullet.js');

var _BulletJs2 = _interopRequireDefault(_BulletJs);

var Body = (function (_me$Renderable) {
  function Body() {
    _classCallCheck(this, Body);

    var shadow = _gameJs2['default'].texture.createSpriteFromName('tee_body_shadow');
    shadow.pos.add(new _melonJS2['default'].Vector2d(0, 4));
    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).call(this);
    _get(Object.getPrototypeOf(Body.prototype), 'init', this).call(this, 0, 0, shadow.width, shadow.height);
    this.shadow = shadow;
    this.sprite = _gameJs2['default'].texture.createSpriteFromName('tee_body');
    this.sprite.pos.add(new _melonJS2['default'].Vector2d(2, 6));
  }

  _inherits(Body, _me$Renderable);

  _createClass(Body, [{
    key: 'drawShadow',
    value: function drawShadow(renderer) {
      this.shadow.draw(renderer);
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      this.sprite.draw(renderer);
    }
  }]);

  return Body;
})(_melonJS2['default'].Renderable);

var Hands = (function () {
  function Hands(player) {
    _classCallCheck(this, Hands);

    this.player = player;
    this.hand = _gameJs2['default'].texture.createSpriteFromName('tee_hand');
    this.gun = _gameJs2['default'].texture.createSpriteFromName('gun');
    this.gun.anchorPoint.set(0.0, 0.5);
    this.gun.pos.set(this.player.width / 2, 15);
  }

  _createClass(Hands, [{
    key: 'update',
    value: function update(dt) {
      var angle = this.player.angleToCursor();
      if (angle < 1.5 && angle > -1.5) {
        this.gun.flipY(false);
        this.gun.angle = angle
        //this.hand.angle = angle
        ;
      } else {
        this.gun.flipY(true);
        this.gun.angle = -angle
        //this.hand.angle = -angle
        ;
      }
    }
  }, {
    key: 'shoot',
    value: function shoot() {
      var angle = this.player.angleToCursor();
      var bullet = _melonJS2['default'].pool.pull('bullet', this.player.center.x, this.player.center.y, angle);
      _melonJS2['default'].game.world.addChild(bullet);
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      this.gun.draw(renderer);
    }
  }]);

  return Hands;
})();

var Eyes = (function () {
  function Eyes(player) {
    _classCallCheck(this, Eyes);

    this.leftEye = _gameJs2['default'].texture.createSpriteFromName('tee_eye');
    this.leftEye.scale(0.85, 0.85);
    this.rightEye = _gameJs2['default'].texture.createSpriteFromName('tee_eye');
    this.rightEye.scale(0.85, 0.85);
    this.player = player;

    this.h = Math.cos(Math.atan2(-1, -1));
    this.v = Math.sin(Math.atan2(-1, -1));
  }

  _createClass(Eyes, [{
    key: 'update',
    value: function update(dt) {
      var angle = this.player.angleToCursor();
      this.leftEye.pos.y = this.rightEye.pos.y = 10 + (Math.sin(angle) - this.v) * 6.5;
      this.leftEye.pos.x = 7 + (Math.cos(angle) - this.h) * 9.5;
      this.rightEye.pos.x = this.leftEye.pos.x + this.leftEye.width - 1;
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      this.leftEye.draw(renderer);
      this.rightEye.draw(renderer);
    }
  }]);

  return Eyes;
})();

var Feet = (function () {
  function Feet(player) {
    _classCallCheck(this, Feet);

    this.leftShadow = _gameJs2['default'].texture.createSpriteFromName('tee_foot_shadow');
    this.rightShadow = _gameJs2['default'].texture.createSpriteFromName('tee_foot_shadow');
    this.leftSprite = _gameJs2['default'].texture.createSpriteFromName('tee_foot');
    this.rightSprite = _gameJs2['default'].texture.createSpriteFromName('tee_foot');

    this.player = player;
    this.shadowToSpritePos = new _melonJS2['default'].Vector2d(3, 2);
    var shadowHeight = this.leftShadow.height;
    var x = 0,
        y = player.height - shadowHeight + 5;
    this.currentStand = null;
    this.defaultStand = {
      right: { pos: new _melonJS2['default'].Vector2d(x + 17, y), angle: 0 },
      left: { pos: new _melonJS2['default'].Vector2d(x, y), angle: 0 }
    };
    this.midAirStand = {
      right: { pos: new _melonJS2['default'].Vector2d(x + 12, y), angle: -0.6 },
      left: { pos: new _melonJS2['default'].Vector2d(x + 4, y), angle: -0.6 }
    };
    this.walking = false;
    this.walkingStands = [{
      right: {},
      left: {}
    }];
  }

  _createClass(Feet, [{
    key: 'changeStand',
    value: function changeStand(stand) {
      if (this.currentStand !== stand) {
        this.currentStand = stand;
        this.leftShadow.pos.setV(stand.left.pos);
        this.rightShadow.pos.setV(stand.right.pos);
        this.leftSprite.pos.setV(stand.left.pos);
        this.leftSprite.pos.add(this.shadowToSpritePos);
        this.rightSprite.pos.setV(stand.right.pos);
        this.rightSprite.pos.add(this.shadowToSpritePos);
        this.leftShadow.angle = this.leftSprite.angle = stand.left.angle;
        this.rightShadow.angle = this.rightSprite.angle = stand.right.angle;
      }
    }
  }, {
    key: 'update',
    value: function update(dt) {
      if (this.player.body.falling || this.player.body.jumping) {
        this.changeStand(this.midAirStand);
      } else {
        this.changeStand(this.defaultStand);
      }
    }
  }, {
    key: 'drawLeftShadow',
    value: function drawLeftShadow(renderer) {
      this.leftShadow.draw(renderer);
    }
  }, {
    key: 'drawRightShadow',
    value: function drawRightShadow(renderer) {
      this.rightShadow.draw(renderer);
    }
  }, {
    key: 'drawLeft',
    value: function drawLeft(renderer) {
      this.leftSprite.draw(renderer);
    }
  }, {
    key: 'drawRight',
    value: function drawRight(renderer) {
      this.rightSprite.draw(renderer);
    }
  }]);

  return Feet;
})();

var Player = (function (_me$Entity) {
  function Player(x, y, settings) {
    var _this = this;

    _classCallCheck(this, Player);

    settings.width = 44;
    settings.height = 44;
    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this);
    _get(Object.getPrototypeOf(Player.prototype), 'init', this).call(this, x, y, settings);

    // Horizontal & vertical speed and gravity
    this.body.setVelocity(9, 12.2);
    this.body.midAirVelX = 2;
    this.body.gravity = 0.4;

    // Hitbox definition and collision type
    this.body.addShape(new _melonJS2['default'].Rect(0, 0, 32, 32));
    this.body.removeShapeAt(0);
    this.body.collisionType = _melonJS2['default'].collision.types.PLAYER_OBJECT;

    // Body parts
    this.renderable = new Body();
    this.hands = new Hands(this);
    this.eyes = new Eyes(this);
    this.feet = new Feet(this);

    this.alwaysUpdate = true;

    this.getCenter = function () {
      return new _melonJS2['default'].Vector2d(_this.pos.x + _this.getBounds().width / 2, _this.pos.y + _this.getBounds().height / 2);
    };
    this.center = this.getCenter();

    _melonJS2['default'].game.viewport.follow(this.center, _melonJS2['default'].game.viewport.AXIS.BOTH);
    _melonJS2['default'].game.viewport.setDeadzone(1, 1);

    this.life = 10;
    this.shield = 10;

    this.multipleJump = 1;
    this.wasWalking = false;

    // Register a pool with class Bullet to quickly instantiate bullets in update -> shoot
    _melonJS2['default'].pool.register('bullet', _BulletJs2['default'], true);

    window.player = this;
  }

  _inherits(Player, _me$Entity);

  _createClass(Player, [{
    key: 'angleToCursor',
    value: function angleToCursor() {
      return this.angleToPoint(_melonJS2['default'].game.viewport.localToWorld(_gameJs2['default'].cursor.pos.x, _gameJs2['default'].cursor.pos.y));
    }
  }, {
    key: 'update',
    value: function update(dt) {
      //socket.emit("action", )

      if (_melonJS2['default'].input.isKeyPressed('jump')) {
        this.body.jumping = true;

        if (this.multipleJump <= 2) {
          if (this.multipleJump == 2) {
            this.body.maxVel.y = 11;
          } else {
            this.body.maxVel.y = 12.2;
          }
          this.body.vel.y -= this.body.maxVel.y * this.multipleJump++ * _melonJS2['default'].timer.tick;
        }
      } else if (!this.body.falling && !this.body.jumping) {
        this.multipleJump = 1;
      } else if (this.body.falling && this.multipleJump < 2) {
        this.multipleJump = 2;
      }

      var left = _melonJS2['default'].input.isKeyPressed('left');
      var right = _melonJS2['default'].input.isKeyPressed('right');
      if (left || right) {
        if (!this.wasWalking && (this.body.falling || this.body.jumping)) {
          this.body.maxVel.x = 5.5;
        }

        //console.log("accel: "+this.body.accel.x+", vel: "+this.body.vel.x + ", maxVel: "+this.body.maxVel.x)
        if (left) {
          this.body.vel.x -= this.body.accel.x * _melonJS2['default'].timer.tick;
        } else {
          this.body.vel.x += this.body.accel.x * _melonJS2['default'].timer.tick;
        }
        this.wasWalking = true;
      } else {
        this.body.vel.x += -this.body.vel.x * 0.9;
        this.body.maxVel.x = 9;
        this.wasWalking = false;
      }

      // check & update player movement
      this.body.update(dt);
      _melonJS2['default'].collision.check(this);
      this.center.setV(this.getCenter());
      this.hands.update(dt);
      this.eyes.update(dt);
      this.feet.update(dt);

      if (_melonJS2['default'].input.isKeyPressed('shoot')) {
        this.hands.shoot();
      }

      if (this.body.vel.x != 0 || this.body.vel.y != 0) {
        _get(Object.getPrototypeOf(Player.prototype), 'update', this).call(this, dt);
        return true;
      }
      return false;
    }
  }, {
    key: 'onCollision',
    value: function onCollision(response, other) {
      // Make all other objects solid
      //console.log("Collision with Other", other)
      return true;
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      var x = ~ ~(0.5 + this.pos.x + this.body.pos.x + this.anchorPoint.x * (this.body.width - this.renderable.width));
      var y = ~ ~(0.5 + this.pos.y + this.body.pos.y - 8 + this.anchorPoint.y * (this.body.height - this.renderable.height));

      renderer.save();
      renderer.translate(x, y);

      // Hands
      this.hands.draw(renderer);

      //Body parts shadows
      this.feet.drawLeftShadow(renderer);
      this.renderable.drawShadow(renderer);
      this.feet.drawRightShadow(renderer);

      //Body part
      this.feet.drawLeft(renderer);
      this.renderable.draw(renderer);
      this.eyes.draw(renderer);
      this.feet.drawRight(renderer);

      renderer.restore();
    }
  }]);

  return Player;
})(_melonJS2['default'].Entity);

exports['default'] = Player;
module.exports = exports['default'];
//this.hand.draw(renderer)

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"./Bullet.js":86,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],88:[function(require,module,exports){
(function (global){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _entityPlayerJs = require('./entity/Player.js');

var _entityPlayerJs2 = _interopRequireDefault(_entityPlayerJs);

var _uiCursorJs = require('./ui/Cursor.js');

var _uiCursorJs2 = _interopRequireDefault(_uiCursorJs);

var _uiScreenJs = require('./ui/Screen.js');

var _uiScreenJs2 = _interopRequireDefault(_uiScreenJs);

var game = {

  uiScale: 1.2,
  width: 1152 * 1.2,
  height: 720 * 1.2,

  connection: require('./connection.js'),
  resources: require('./resources.js'),

  titleFont: null,
  font: null,
  uiTexture: null,
  texture: null,

  load: function load() {
    var ok = _melonJS2['default'].video.init(game.width, game.height, {
      renderer: _melonJS2['default'].video.CANVAS,
      antiAlias: true,
      scale: 'auto',
      scaleMethod: 'fill-max'
    });
    if (!ok) {
      alert('Your browser does not support HTML5 canvas.');
      return;
    }

    _melonJS2['default'].audio.init('mp3,ogg');
    _melonJS2['default'].loader.onload = game.loaded;
    _melonJS2['default'].loader.preload(game.resources);
    _melonJS2['default'].state.change(_melonJS2['default'].state.LOADING);

    // add "#debug" to the URL to enable the debug Panel
    game.debug = false;
    if (document.location.hash === '#debug') {
      game.debug = true;
      _melonJS2['default'].debug.renderHitBox = true;
      _melonJS2['default'].plugin.register.defer(game, _melonJS2['default'].debug.Panel, 'debug');
    }
  },

  loaded: function loaded() {
    game.texture = new _melonJS2['default'].video.renderer.Texture(_melonJS2['default'].loader.getJSON('game'), _melonJS2['default'].loader.getImage('game'));
    game.uiTexture = new _melonJS2['default'].video.renderer.Texture(_melonJS2['default'].loader.getJSON('ui'), _melonJS2['default'].loader.getImage('ui'));

    function initFont(size) {
      var font = new _melonJS2['default'].Font('dejavu_sansbook', size * game.uiScale, '#FFFFFF');
      font.strokeStyle.parseCSS('rgba(0, 0, 0, 0.60)');
      font.lineWidth = 5 * game.uiScale;
      font.textAlign = 'center';
      font.textBaseline = 'hanging';
      return font;
    }
    game.font = initFont(16);
    game.titleFont = initFont(22);

    // Creates the game cursor which will follow the computer cursor (mouse)
    var canvas = _melonJS2['default'].video.renderer.getCanvas();
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    if (canvas.requestPointerLock) {
      canvas.requestPointerLock();
    }
    game.cursor = new _uiCursorJs2['default']();
    _melonJS2['default'].game.world.addChild(game.cursor);

    _melonJS2['default'].pool.register('player1', _entityPlayerJs2['default']);

    game.screen = new _uiScreenJs2['default']();
    _melonJS2['default'].state.set(_melonJS2['default'].state.PLAY, game.screen);
    _melonJS2['default'].state.change(_melonJS2['default'].state.PLAY);
  }
};

window.onReady(game.load);
window.game = game;

exports['default'] = game;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./connection.js":85,"./entity/Player.js":87,"./resources.js":89,"./ui/Cursor.js":93,"./ui/Screen.js":97,"babel-runtime/helpers/interop-require-default":10}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = [
// mini map
{ name: "mini", type: "tmx", src: "data/map/mini.tmx" }, { name: "grass_main", type: "image", src: "data/mapres/grass_main.png" },
//    {name: "sun",			type: "image",	src: "data/mapres/sun.png"},
//    {name: "mountains",		type: "image",	src: "data/mapres/mountains.png"},
//    {name: "bg_cloud3",		type:"image",	src: "data/mapres/bg_cloud3.png"},

// Main sprite
{ name: "game", type: "json", src: "data/game/game.json" }, { name: "game", type: "image", src: "data/game/game.png" },

// Gui texture
{ name: "ui", type: "json", src: "data/ui/ui.json" }, { name: "ui", type: "image", src: "data/ui/ui.png" }];
module.exports = exports["default"];

},{}],90:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var Box = (function (_Component) {
  function Box(a, b) {
    _classCallCheck(this, Box);

    var innerComponent = null;
    var options;
    if (a instanceof _ComponentJs2['default']) {
      innerComponent = a;
      options = b || {};
    } else options = a || {};

    var x = options.x;
    var y = options.y;
    var width = options.width;
    var height = options.height;
    var padding = options.padding;
    var _options$radius = options.radius;
    var radius = _options$radius === undefined ? 20 * _gameJs2['default'].uiScale : _options$radius;
    var _options$color = options.color;
    var color = _options$color === undefined ? 'black' : _options$color;
    var _options$opacity = options.opacity;
    var opacity = _options$opacity === undefined ? 0.6 : _options$opacity;
    var _options$overOpacity = options.overOpacity;
    var overOpacity = _options$overOpacity === undefined ? opacity : _options$overOpacity;
    var onClick = options.onClick;

    padding = _ComponentJs2['default'].parsePadding(padding, 10 * _gameJs2['default'].uiScale);

    if (typeof radius === 'number') radius = { topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius };

    if (innerComponent) {
      _get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this, {
        x: x, y: y,
        width: width || innerComponent.width + padding.right + padding.left,
        height: height || innerComponent.height + padding.top + padding.bottom
      });
    } else _get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this, options);
    this._inner = null;

    this.padding = padding;
    this.radius = radius;
    this.color = color;
    this.overOpacity = overOpacity;
    this.outOpacity = opacity;
    this.setOpacity(opacity);

    if (innerComponent) {
      this.innerComponent = innerComponent;
      if (width) innerComponent.resize({ width: width + padding.right + padding.left });
      if (height) innerComponent.resize({ height: height + padding.top + padding.bottom });
    }
  }

  _inherits(Box, _Component);

  _createClass(Box, [{
    key: 'moveTo',
    value: function moveTo() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var x = _ref.x;
      var y = _ref.y;

      x = x || this.pos.x;
      y = y || this.pos.y;
      _get(Object.getPrototypeOf(Box.prototype), 'moveTo', this).call(this, { x: x, y: y });
      if (this._inner) this._inner.moveTo({ x: x + this.padding.left, y: y + this.padding.top });
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var width = _ref2.width;
      var height = _ref2.height;
      var childResize = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      if (this._inner) {
        if (childResize) this._inner.resize({ width: width, height: height });
        _get(Object.getPrototypeOf(Box.prototype), 'resize', this).call(this, {
          width: this._inner.width + this.padding.right + this.padding.left,
          height: this._inner.height + this.padding.top + this.padding.bottom
        });
      } else {
        _get(Object.getPrototypeOf(Box.prototype), 'resize', this).call(this, { width: width, height: height });
      }
    }
  }, {
    key: 'update',
    value: function update(dt) {
      var updated = _get(Object.getPrototypeOf(Box.prototype), 'update', this).call(this, dt);
      if (this._inner) {
        updated = this._inner.update(dt) || updated;
      }
      return updated;
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      _get(Object.getPrototypeOf(Box.prototype), 'draw', this).apply(this, arguments);
      if (this._inner) {
        this._inner.draw.apply(this._inner, arguments);
      }
    }
  }, {
    key: 'onOver',
    value: function onOver(event) {
      this.setOpacity(this.overOpacity);
      this.renderer.needUpdate = true;
    }
  }, {
    key: 'onOut',
    value: function onOut(event) {
      this.setOpacity(this.outOpacity);
      this.renderer.needUpdate = true;
    }
  }, {
    key: 'render',
    value: function render() {
      _get(Object.getPrototypeOf(Box.prototype), 'render', this).call(this);

      var ctx = this.renderer.context;
      var width = ~ ~this.width;
      var height = ~ ~this.height;
      var midHeight = height / 2;
      var midWidth = width / 2;
      var topLeft = ~ ~Math.min(this.radius.topLeft, midWidth, midHeight);
      var topRight = ~ ~Math.min(this.radius.topRight, midWidth, midHeight);
      var bottomLeft = ~ ~Math.min(this.radius.bottomLeft, midWidth, midHeight);
      var bottomRight = ~ ~Math.min(this.radius.bottomRight, midWidth, midHeight);
      ctx.beginPath();
      ctx.moveTo(topLeft, 0);
      ctx.lineTo(width - topRight, 0);
      ctx.quadraticCurveTo(width, 0, width, topRight);
      ctx.lineTo(width, height - bottomRight);
      ctx.quadraticCurveTo(width, height, width - bottomRight, height);
      ctx.lineTo(bottomLeft, height);
      ctx.quadraticCurveTo(0, height, 0, height - bottomLeft);
      ctx.lineTo(0, topLeft);
      ctx.quadraticCurveTo(0, 0, topLeft, 0);
      ctx.closePath();

      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }, {
    key: 'onChildResize',
    value: function onChildResize() {
      if (this._inner) {
        this.resize(this._inner, false);
      }
    }
  }, {
    key: 'onResetEvent',
    value: function onResetEvent() {
      _get(Object.getPrototypeOf(Box.prototype), 'onResetEvent', this).call(this);
      if (this._inner) this._inner.onResetEvent();
    }
  }, {
    key: 'onDestroyEvent',
    value: function onDestroyEvent() {
      _get(Object.getPrototypeOf(Box.prototype), 'onDestroyEvent', this).call(this);
      if (this._inner) this._inner.onDestroyEvent();
    }
  }, {
    key: 'innerComponent',
    set: function set(component) {
      if (component) {
        this._inner = component;
        component.parent = this;
        component.moveTo({ x: this.pos.x + this.padding.left, y: this.pos.y + this.padding.top });
        this.resize(component, false);
      }
    }
  }]);

  return Box;
})(_ComponentJs2['default']);

exports['default'] = Box;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"./Component.js":92,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],91:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _BoxJs = require('./Box.js');

var _BoxJs2 = _interopRequireDefault(_BoxJs);

var _TextJs = require('./Text.js');

var _TextJs2 = _interopRequireDefault(_TextJs);

var Button = (function (_Box) {
  function Button(options) {
    _classCallCheck(this, Button);

    var _ref = options || {};

    var text = _ref.text;
    var _ref$font = _ref.font;
    var font = _ref$font === undefined ? _gameJs2['default'].font : _ref$font;
    var width = _ref.width;
    var _ref$color = _ref.color;
    var color = _ref$color === undefined ? 'white' : _ref$color;
    var _ref$overOpacity = _ref.overOpacity;
    var overOpacity = _ref$overOpacity === undefined ? 0.75 : _ref$overOpacity;
    var onClick = _ref.onClick;
    var _ref$radius = _ref.radius;
    var radius = _ref$radius === undefined ? 5 * _gameJs2['default'].uiScale : _ref$radius;
    var _ref$padding = _ref.padding;
    var padding = _ref$padding === undefined ? { top: 2 * _gameJs2['default'].uiScale, bottom: 2 * _gameJs2['default'].uiScale, right: 5 * _gameJs2['default'].uiScale, left: 5 * _gameJs2['default'].uiScale } : _ref$padding;

    var textCmp = new _TextJs2['default']({ text: text, width: width, font: font, padding: { top: -2 * _gameJs2['default'].uiScale } });
    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, textCmp, { color: color, overOpacity: overOpacity, onClick: onClick, radius: radius, padding: padding });
    this._text = textCmp;
  }

  _inherits(Button, _Box);

  _createClass(Button, [{
    key: 'text',
    get: function get() {
      return this._text.text;
    },
    set: function set(t) {
      return this._text.text = t;
    }
  }]);

  return Button;
})(_BoxJs2['default']);

exports['default'] = Button;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"./Box.js":90,"./Text.js":98,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],92:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var Component = (function (_me$GUI_Object) {
  function Component(options) {
    _classCallCheck(this, Component);

    _get(Object.getPrototypeOf(Component.prototype), 'constructor', this).call(this);

    var _ref = options || {};

    var x = _ref.x;
    var y = _ref.y;
    var _ref$width = _ref.width;
    var width = _ref$width === undefined ? 1 : _ref$width;
    var _ref$height = _ref.height;
    var height = _ref$height === undefined ? 1 : _ref$height;
    var _ref$isClickable = _ref.isClickable;
    var isClickable = _ref$isClickable === undefined ? false : _ref$isClickable;
    var _ref$onClick = _ref.onClick;
    var onClick = _ref$onClick === undefined ? false : _ref$onClick;
    var onEnterKey = _ref.onEnterKey;
    var onEscKey = _ref.onEscKey;
    var _ref$centeredH = _ref.centeredH;
    var centeredH = _ref$centeredH === undefined ? true : _ref$centeredH;
    var _ref$centeredV = _ref.centeredV;
    var centeredV = _ref$centeredV === undefined ? true : _ref$centeredV;

    if (x == undefined && centeredH !== false) x = _melonJS2['default'].game.viewport.width / 2 - width / 2;else centeredH = false;
    if (y == undefined && centeredV !== false) y = _melonJS2['default'].game.viewport.height / 2 - height / 2;else centeredV = false;

    var image = _melonJS2['default'].video.createCanvas(width, height);
    var renderer = new _melonJS2['default'].CanvasRenderer(image, width, height, { transparent: true });

    _get(Object.getPrototypeOf(Component.prototype), 'init', this).call(this, x, y, { image: image });

    this.centeredH = centeredH;
    this.centeredV = centeredV;
    this.renderer = renderer;
    this.renderer.needUpdate = true;
    this.parent = null;

    this.onClick = onClick;
    this.alwaysUpdate = true;
    this.onEnterKey = onEnterKey;
    this.onEscKey = onEscKey;
  }

  _inherits(Component, _me$GUI_Object);

  _createClass(Component, [{
    key: 'centerV',
    value: function centerV(options) {
      var _ref2 = options || {};

      var _ref2$parentY = _ref2.parentY;
      var parentY = _ref2$parentY === undefined ? this.parent ? this.parent.pos.y : 0 : _ref2$parentY;
      var _ref2$parentHeight = _ref2.parentHeight;
      var parentHeight = _ref2$parentHeight === undefined ? this.parent ? this.parent.height : _melonJS2['default'].game.viewport.height : _ref2$parentHeight;

      this.moveTo({ y: parentY + (parentHeight / 2 - this.height / 2) });

      this.centeredV = arguments.length == 0;
      return this.pos.y;
    }
  }, {
    key: 'centerH',
    value: function centerH(options) {
      var _ref3 = options || {};

      var _ref3$parentX = _ref3.parentX;
      var parentX = _ref3$parentX === undefined ? this.parent ? this.parent.pos.x : 0 : _ref3$parentX;
      var _ref3$parentWidth = _ref3.parentWidth;
      var parentWidth = _ref3$parentWidth === undefined ? this.parent ? this.parent.width : _melonJS2['default'].game.viewport.width : _ref3$parentWidth;

      this.moveTo({ x: parentX + (parentWidth / 2 - this.width / 2) });

      this.centeredH = arguments.length == 0;
      return this.pos.x;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var width = _ref4.width;
      var height = _ref4.height;

      var resizeW = !!width;
      var resizeH = !!height;
      height = height || this.height;
      width = width || this.width;
      if (resizeH || resizeW) {
        _get(Object.getPrototypeOf(Component.prototype), 'resize', this).call(this, width, height);

        if (resizeW && this.centeredH) this.centerH();
        if (resizeH && this.centeredV) this.centerV();

        this.renderer.needUpdate = true;
        this.renderer.resize(width, height);
        if (this.parent) {
          this.parent.onChildResize();
        }
      }
    }
  }, {
    key: 'moveTo',
    value: function moveTo() {
      var _ref5 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var x = _ref5.x;
      var y = _ref5.y;

      if (x) {
        this.pos.x = x;
        this.centeredH = false;
      }
      if (y) {
        this.pos.y = y;
        this.centeredV = false;
      }
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      if (this.renderer.needUpdate) {
        this.renderer.prepareSurface();
        this.render();
      }
      _get(Object.getPrototypeOf(Component.prototype), 'draw', this).apply(this, arguments);
    }
  }, {
    key: 'render',
    value: function render() {
      if (_gameJs2['default'].debug) {
        Component.renderDebugBox({
          color: 'red', renderer: this.renderer,
          width: this.width, height: this.height
        });
      }
      this.renderer.needUpdate = false;
    }
  }, {
    key: 'onScreenResize',
    value: function onScreenResize() {
      if (this.centeredV) this.centerV();
      if (this.centeredH) this.centerH();
    }
  }, {
    key: 'onChildResize',
    value: function onChildResize() {}
  }, {
    key: 'onResetEvent',
    value: function onResetEvent() {
      _melonJS2['default'].event.subscribe(_melonJS2['default'].event.WINDOW_ONRESIZE, this.onScreenResize.bind(this));
    }
  }, {
    key: 'onDestroyEvent',
    value: function onDestroyEvent() {
      _melonJS2['default'].event.unsubscribe(_melonJS2['default'].event.WINDOW_ONRESIZE, this.onScreenResize.bind(this));
    }
  }, {
    key: 'onClick',
    set: function set(cb) {
      this.isClickable = cb ? true : false;
      this._onClick = cb;
    },
    get: function get() {
      return this._onClick ? this._onClick : _get(Object.getPrototypeOf(Component.prototype), 'onClick', this);
    }
  }], [{
    key: 'renderDebugBox',
    value: function renderDebugBox() {
      var _ref6 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var color = _ref6.color;
      var renderer = _ref6.renderer;
      var _ref6$x = _ref6.x;
      var x = _ref6$x === undefined ? 0 : _ref6$x;
      var _ref6$y = _ref6.y;
      var y = _ref6$y === undefined ? 0 : _ref6$y;
      var width = _ref6.width;
      var height = _ref6.height;

      var ctx = renderer.context;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      renderer.strokeRect(x, y, width, height);
    }
  }, {
    key: 'parsePadding',
    value: function parsePadding(padding, defaultPadding) {
      if (typeof padding === 'number') padding = { top: padding, bottom: padding, right: padding, left: padding };

      if (typeof padding !== 'object') padding = {};

      if (padding.bottom === undefined) padding.bottom = defaultPadding;
      if (padding.right === undefined) padding.right = defaultPadding;
      if (padding.left === undefined) padding.left = defaultPadding;
      if (padding.top === undefined) padding.top = defaultPadding;
      return padding;
    }
  }]);

  return Component;
})(_melonJS2['default'].GUI_Object);

exports['default'] = Component;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],93:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var Cursor = (function (_me$Renderable) {
  function Cursor() {
    var _this = this;

    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, Cursor);

    _get(Object.getPrototypeOf(Cursor.prototype), 'constructor', this).call(this);
    _get(Object.getPrototypeOf(Cursor.prototype), 'init', this).call(this, x, y, 0, 0);
    this.switchVisor(Cursor.visors.GUN);

    // update worldPos at each MOUSEMOVE event
    _melonJS2['default'].event.subscribe(_melonJS2['default'].event.MOUSEMOVE, function (e) {
      _this.pos.set(e.gameScreenX, e.gameScreenY);
    });

    this.z = Infinity;
    this.isPersistent = true;
    this.alwaysUpdate = true;
    this.floating = true;
  }

  _inherits(Cursor, _me$Renderable);

  _createClass(Cursor, [{
    key: 'switchVisor',
    value: function switchVisor(visor) {
      this.visor = visor;
      this.sprite = _gameJs2['default'].uiTexture.createSpriteFromName(this.visor);
      this.sprite.pos = this.pos;
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      renderer.save();
      if (this.visor !== Cursor.visors.GUI) {
        renderer.translate(-Math.floor(this.sprite.width / 2), -Math.floor(this.sprite.height / 2));
      }
      this.sprite.draw(renderer);
      renderer.restore();
    }
  }]);

  return Cursor;
})(_melonJS2['default'].Renderable);

exports['default'] = Cursor;

Cursor.visors = {
  GUN: 'gun_visor',
  GUI: 'ui_cursor'
};
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],94:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _TextJs = require('./Text.js');

var _TextJs2 = _interopRequireDefault(_TextJs);

var _utilArraysJs = require('../util/Arrays.js');

var Key = (function () {
  function Key(code) {
    var lock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var preventDefault = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    _classCallCheck(this, Key);

    this.code = code;
    this.string = code == 189 ? '-' : String.fromCharCode(code);
    this.name = 'key' + code;
    this.lock = lock;
    this.preventDefault = preventDefault;
    this.coolDown = 0;
  }

  _createClass(Key, [{
    key: 'update',
    value: function update(dt) {
      var pressed = this.isPressed();
      if (pressed) {
        this.coolDown -= dt;
        if (this.coolDown <= 0) {
          this.coolDown = 300;
          return true;
        }
      } else this.coolDown = 0;
      return false;
    }
  }, {
    key: 'isPressed',
    value: function isPressed() {
      return _melonJS2['default'].input.isKeyPressed(this.name);
    }
  }]);

  return Key;
})();

Key.isPressed = function (k) {
  return k.isPressed();
};
Key.bind = function (k) {
  return _melonJS2['default'].input.bindKey(k.code, k.name, k.lock, k.preventDefault);
};
Key.unbind = function (k) {
  return _melonJS2['default'].input.unbindKey(k.code);
};

var modifKeys, majKey, typeableKeys;
var allKeys = Array.prototype.concat(
// Meta(Left-Right) - Ctrl - Alt
modifKeys = [_melonJS2['default'].input.KEY.WINDOW_KEY, 93, _melonJS2['default'].input.KEY.CTRL, _melonJS2['default'].input.KEY.ALT].map(function (k) {
  return new Key(k, true, false);
}),

// Maj keys
majKey = new Key(_melonJS2['default'].input.KEY.SHIFT, false, true),

// Key codes from A to Z, 0 to 9 and minus/dash
typeableKeys = (function () {
  var keyCodes = (0, _utilArraysJs.range)(_melonJS2['default'].input.KEY.A, _melonJS2['default'].input.KEY.Z) // A to Z
  .concat((0, _utilArraysJs.range)(_melonJS2['default'].input.KEY.NUM0, _melonJS2['default'].input.KEY.NUM9)) // 0 to 9
  .concat([_melonJS2['default'].input.KEY.MINUS]); // minus/dash
  var delKey = new Key(_melonJS2['default'].input.KEY.BACKSPACE, false, true);
  return keyCodes.map(function (k) {
    return new Key(k, false, false);
  }).concat([delKey]);
})());

var InputText = (function (_Text) {
  function InputText(options) {
    _classCallCheck(this, InputText);

    var _ref = options || {};

    var _ref$text = _ref.text;
    var text = _ref$text === undefined ? '' : _ref$text;
    var _ref$maxTextLength = _ref.maxTextLength;
    var maxTextLength = _ref$maxTextLength === undefined ? 25 : _ref$maxTextLength;

    _get(Object.getPrototypeOf(InputText.prototype), 'constructor', this).call(this, {
      text: Array(maxTextLength + 1).join('H') //, height: game.titleFont.height + 6
    });

    this.maxTextLength = maxTextLength;
    this.textValue = text;
    this.fitTextH = false;
    this.textCursor = new TextCursor(this);
    this.text = text;

    this.onResetEvent();
  }

  _inherits(InputText, _Text);

  _createClass(InputText, [{
    key: 'update',
    value: function update(dt) {
      var _this = this;

      _get(Object.getPrototypeOf(InputText.prototype), 'update', this).call(this, dt);

      var cancelTyping = modifKeys.some(Key.isPressed);
      if (!cancelTyping) {
        var majIsPressed = majKey.isPressed();

        var updated = false;
        typeableKeys.map(function (key) {
          if (key.update(dt)) {
            if (key.code === _melonJS2['default'].input.KEY.BACKSPACE) {
              // Delete character
              _this.textValue = _this.textValue.substr(0, _this.textValue.length - 1);
            } else if (_this.textValue.length < _this.maxTextLength) {
              // Type character
              _this.textValue += majIsPressed ? key.string.toUpperCase() : key.string.toLowerCase();
            }
            updated = true;
          }
        });
        if (updated) this.text = this.textValue;
      }

      if (this.textCursor.update(dt)) this.renderer.needUpdate = true;

      return true;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.text = this.textValue = '';
    }
  }, {
    key: 'onResetEvent',
    value: function onResetEvent() {
      _get(Object.getPrototypeOf(InputText.prototype), 'onResetEvent', this).call(this);
      this.clear();
      allKeys.map(Key.bind);
    }
  }, {
    key: 'onDestroyEvent',
    value: function onDestroyEvent() {
      _get(Object.getPrototypeOf(InputText.prototype), 'onDestroyEvent', this).call(this);
      allKeys.map(Key.unbind);
    }
  }, {
    key: 'render',
    value: function render() {
      //this.renderer.save()
      //this.renderer.translate(this.textCursor.width, 0)
      _get(Object.getPrototypeOf(InputText.prototype), 'render', this).call(this);
      this.textCursor.render();
    }
  }]);

  return InputText;
})(_TextJs2['default']);

exports['default'] = InputText;

var TextCursor = (function () {
  function TextCursor(input) {
    _classCallCheck(this, TextCursor);

    this.char = '_';
    this.size = input.font.measureText(input.renderer, this.char);
    this.blinkDuration = 0;
    this.isVisible = true;
    this.input = input;
  }

  _createClass(TextCursor, [{
    key: 'render',
    value: function render() {
      if (!this.isVisible) {
        var posX = this.input.width / 2 + this.input.textWidth / 2;
        this.input.font.drawStroke(this.input.renderer, this.char, posX, 7);
        this.input.font.draw(this.input.renderer, this.char, posX, 7);
      }
    }
  }, {
    key: 'update',
    value: function update(dt) {
      var canAppear = this.input.textValue.length < this.input.maxTextLength;
      if (!canAppear) return false;

      this.blinkDuration -= dt;
      if (this.blinkDuration <= 0) {
        this.isVisible = !this.isVisible;
        this.blinkDuration = 400;
        return true;
      }
      return false;
    }
  }, {
    key: 'width',
    get: function get() {
      return this.isVisible ? this._width : 0;
    }
  }]);

  return TextCursor;
})();

module.exports = exports['default'];
//this.renderer.restore()

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util/Arrays.js":100,"./Component.js":92,"./Text.js":98,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],95:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _BoxJs = require('./Box.js');

var _BoxJs2 = _interopRequireDefault(_BoxJs);

var _PanelJs = require('./Panel.js');

var _PanelJs2 = _interopRequireDefault(_PanelJs);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var Menubar = (function (_Box) {
  function Menubar(screen) {
    var _this = this;

    _classCallCheck(this, Menubar);

    var margin = 15 * _gameJs2['default'].uiScale,
        padding = 15 * _gameJs2['default'].uiScale,
        radius = 10 * _gameJs2['default'].uiScale;
    _get(Object.getPrototypeOf(Menubar.prototype), 'constructor', this).call(this, { x: margin, y: margin, padding: padding, radius: radius });
    var joinButton = new _ButtonJs2['default']({ text: 'Join User' });
    joinButton.onClick = screen.joinUser.bind(screen);
    this.innerComponent = new _PanelJs2['default']([joinButton], { layout: _PanelJs2['default'].HORIZONTAL });
    this.widthResize = function () {
      return _this.resize({ width: me.game.viewport.width - margin * 2 - padding * 2 });
    };
    this.widthResize();
    this.onEscKey = function () {
      return screen.close(_this);
    };
  }

  _inherits(Menubar, _Box);

  _createClass(Menubar, [{
    key: 'onScreenResize',
    value: function onScreenResize() {
      _get(Object.getPrototypeOf(Menubar.prototype), 'onScreenResize', this).call(this);
      this.widthResize();
    }

    //onChangeUsername() {
    //  Screen.askUserName()
    //}

  }]);

  return Menubar;
})(_BoxJs2['default']);

exports['default'] = Menubar;
module.exports = exports['default'];

},{"../game.js":88,"./Box.js":90,"./Button.js":91,"./Panel.js":96,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],96:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

function computeLayoutSize(panel) {
  if (panel.components) {
    var width = 0,
        height = 0;
    if (panel.isVertical) {
      panel.components.map(function (cmp) {
        height += cmp.height + panel.spacing;
        width = Math.max(cmp.width, width);
      });
      height -= panel.spacing;
    } else {
      panel.components.map(function (cmp) {
        width += cmp.width + panel.spacing;
        height = Math.max(cmp.height, height);
      });
      width -= panel.spacing;
    }
    return { width: width, height: height };
  }
  return {};
}

var Panel = (function (_Component) {
  function Panel(a, b) {
    _classCallCheck(this, Panel);

    var components = null;
    var options = {};
    if (a instanceof Array || a instanceof _ComponentJs2['default']) {
      components = a instanceof Array ? a : [a];
      options = b || options;
    } else options = a || options;

    var _ref = options || {};

    var x = _ref.x;
    var y = _ref.y;
    var width = _ref.width;
    var height = _ref.height;
    var _ref$fill = _ref.fill;
    var fill = _ref$fill === undefined ? Panel.FIT : _ref$fill;
    var _ref$spacing = _ref.spacing;
    var spacing = _ref$spacing === undefined ? 20 * _gameJs2['default'].uiScale : _ref$spacing;
    var _ref$layout = _ref.layout;
    var layout = _ref$layout === undefined ? Panel.VERTICAL : _ref$layout;
    var _ref$start = _ref.start;
    var start = _ref$start === undefined ? Panel.TOPLEFT : _ref$start;

    var isVertical = layout === Panel.VERTICAL,
        isHorizontal = !isVertical;
    var isLeading = start === Panel.TOPLEFT,
        isTrealing = !isLeading;
    var isFillGrow = fill === Panel.GROW,
        isFillFit = !isFillGrow;
    var size = computeLayoutSize({ components: components, isVertical: isVertical, spacing: spacing });
    _get(Object.getPrototypeOf(Panel.prototype), 'constructor', this).call(this, { x: x, y: y, width: width || size.width, height: height || size.height });

    this.spacing = spacing;
    this.layout = layout;
    this.isVertical = isVertical;
    this.isHorizontal = isHorizontal;
    this.isLeading = isLeading;
    this.isTrealing = isTrealing;
    this.start = start;
    this.components = [];
    this.add(components);
  }

  _inherits(Panel, _Component);

  _createClass(Panel, [{
    key: 'moveTo',
    value: function moveTo(_ref2) {
      var x = _ref2.x;
      var y = _ref2.y;

      _get(Object.getPrototypeOf(Panel.prototype), 'moveTo', this).call(this, { x: x, y: y });
      this.adjustComponentsPos();
    }
  }, {
    key: 'adjustComponentsPos',
    value: function adjustComponentsPos() {
      var _this = this;

      var parentX = this.pos.x,
          parentWidth = this.width;
      var parentY = this.pos.y,
          parentHeight = this.height;

      if (this.isVertical) {
        var posY = this.pos.y;
        if (this.isTrealing) posY += this.height;

        this.components.map(function (cmp) {
          cmp.centerH({ parentX: parentX, parentWidth: parentWidth });
          cmp.moveTo({ y: _this.isLeading ? posY : posY - cmp.height });

          var delta = cmp.height + _this.spacing;
          posY = posY + (_this.isLeading ? delta : -delta);
        });
      } else {
        var posX = this.pos.x;
        if (this.isTrealing) posX += this.width;

        this.components.map(function (cmp) {
          cmp.centerV({ parentY: parentY, parentHeight: parentHeight });
          cmp.moveTo({ x: _this.isLeading ? posX : posX - cmp.width });

          var delta = cmp.width + _this.spacing;
          posX = posX + (_this.isLeading ? delta : -delta);
        });
      }
    }
  }, {
    key: 'add',
    value: function add(component) {
      var _this2 = this;

      var adjust = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      if (component) {
        if (component instanceof Array) {
          component.map(function (cmp) {
            return _this2.add(cmp, false);
          });
        } else if (component instanceof _ComponentJs2['default']) {
          this.components.push(component);
          component.parent = this;
        }

        if (adjust) {
          this.resize(computeLayoutSize(this));
          this.adjustComponentsPos();
        }
      }
    }
  }, {
    key: 'remove',
    value: function remove(component) {
      if (component && component instanceof _ComponentJs2['default']) {
        this.components.remove(component);
        this.resize(computeLayoutSize(this));
        this.adjustComponentsPos();
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.onDestroyEvent();
      this.components = [];
    }
  }, {
    key: 'onChildResize',
    value: function onChildResize() {
      this.resize(computeLayoutSize(this));
      this.adjustComponentsPos();
    }
  }, {
    key: 'onResetEvent',
    value: function onResetEvent() {
      _get(Object.getPrototypeOf(Panel.prototype), 'onResetEvent', this).call(this);
      this.components.map(function (cmp) {
        return cmp.onResetEvent();
      });
    }
  }, {
    key: 'onDestroyEvent',
    value: function onDestroyEvent() {
      _get(Object.getPrototypeOf(Panel.prototype), 'onDestroyEvent', this).call(this);
      this.components.map(function (cmp) {
        return cmp.onDestroyEvent();
      });
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      var _arguments = arguments;

      _get(Object.getPrototypeOf(Panel.prototype), 'draw', this).apply(this, arguments);
      this.components.map(function (cmp) {
        return cmp.draw.apply(cmp, _arguments);
      });
    }
  }, {
    key: 'update',
    value: function update(dt) {
      var updated = _get(Object.getPrototypeOf(Panel.prototype), 'update', this).call(this, dt);
      this.components.map(function (cmp) {
        return updated = cmp.update(dt) || updated;
      });
      return updated;
    }
  }]);

  return Panel;
})(_ComponentJs2['default']);

exports['default'] = Panel;

Panel.HORIZONTAL = 1;
Panel.VERTICAL = 0;
Panel.TOPLEFT = 2;
Panel.BOTTOMRIGHT = 3;
Panel.FIT = 4;
Panel.GROW = 5;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"./Component.js":92,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],97:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _UIUtilJs = require('./UIUtil.js');

var _UIUtilJs2 = _interopRequireDefault(_UIUtilJs);

var _CursorJs = require('./Cursor.js');

var _CursorJs2 = _interopRequireDefault(_CursorJs);

var _MenubarJs = require('./Menubar.js');

var _MenubarJs2 = _interopRequireDefault(_MenubarJs);

var Screen = (function (_me$ScreenObject) {
  function Screen() {
    _classCallCheck(this, Screen);

    _get(Object.getPrototypeOf(Screen.prototype), 'constructor', this).call(this);
    _get(Object.getPrototypeOf(Screen.prototype), 'init', this).call(this);
    this.menubar = new _MenubarJs2['default'](this);
    this.masterComponent = new MasterComponent(this);
    _melonJS2['default'].game.world.addChild(this.masterComponent);
  }

  _inherits(Screen, _me$ScreenObject);

  _createClass(Screen, [{
    key: 'onResetEvent',
    value: function onResetEvent() {
      _melonJS2['default'].levelDirector.loadLevel('mini');
      this.bindKeys();
      this.askUserName();
    }
  }, {
    key: 'onDestroyEvent',
    value: function onDestroyEvent() {
      this.unbindKeys();
    }
  }, {
    key: 'bindKeys',
    value: function bindKeys() {
      _melonJS2['default'].input.bindKey(_melonJS2['default'].input.KEY.Q, 'left');
      _melonJS2['default'].input.bindKey(_melonJS2['default'].input.KEY.D, 'right');
      _melonJS2['default'].input.bindKey(_melonJS2['default'].input.KEY.SPACE, 'jump', true);
      _melonJS2['default'].input.bindKey(_melonJS2['default'].input.KEY.X, 'shoot', true);
      _melonJS2['default'].input.bindPointer(_melonJS2['default'].input.KEY.X);
    }
  }, {
    key: 'unbindKeys',
    value: function unbindKeys() {
      _melonJS2['default'].input.unbindKey(_melonJS2['default'].input.KEY.Q);
      _melonJS2['default'].input.unbindKey(_melonJS2['default'].input.KEY.D);
      _melonJS2['default'].input.unbindKey(_melonJS2['default'].input.KEY.SPACE);
      _melonJS2['default'].input.unbindKey(_melonJS2['default'].input.KEY.X);
      _melonJS2['default'].input.unbindPointer(_melonJS2['default'].input.KEY.X);
    }
  }, {
    key: 'open',
    value: function open(c) {
      if (this.masterComponent.isEmpty()) {
        this.unbindKeys();
        _gameJs2['default'].cursor.switchVisor(_CursorJs2['default'].visors.GUI);
      }
      this.masterComponent.add(c);
      c.onResetEvent();
    }
  }, {
    key: 'close',
    value: function close(c) {
      this.masterComponent.remove(c);
      if (this.masterComponent.isEmpty()) {
        this.bindKeys();
        _gameJs2['default'].cursor.switchVisor(_CursorJs2['default'].visors.GUN);
      }
    }
  }, {
    key: 'askUserName',
    value: function askUserName() {
      var askUserName = this.askUserName.bind(this);
      this.close(this.menubar);
      _UIUtilJs2['default'].prompt('Enter your username', { cancelable: false, okText: 'Start' }).then(function (username) {
        _UIUtilJs2['default'].alert('Connecting...', { closable: false });
        return _gameJs2['default'].connection.init(username);
      }).then(function () {
        return _UIUtilJs2['default'].alert('You are connected');
      }, function (err) {
        return alertFromErr(err).then(askUserName);
      });
    }
  }, {
    key: 'joinUser',
    value: function joinUser() {
      var joinUser = this.joinUser.bind(this);
      this.close(this.menubar);
      _UIUtilJs2['default'].prompt('Enter the username of \nthe player you want to join').then(function (username) {
        _UIUtilJs2['default'].alert('Connecting...', { closable: false });
        return _gameJs2['default'].connection.connectTo(username);
      }).then(function (c) {
        return _UIUtilJs2['default'].alert('You have joined ' + c.peer);
      }, function (err) {
        if (err !== 'UIUtil: prompt canceled') alertFromErr(err).then(joinUser);
      });
    }
  }]);

  return Screen;
})(_melonJS2['default'].ScreenObject);

exports['default'] = Screen;

function alertFromErr(err) {
  var message = 'Connection error';
  if (err.type === 'unavailable-id') message = 'Username already taken';else if (err.type === 'peer-unavailable') message = 'User not connected';
  console.log(err);
  return _UIUtilJs2['default'].alert('Error: ' + message);
}

var MasterComponent = (function (_me$Renderable) {
  function MasterComponent(screen) {
    _classCallCheck(this, MasterComponent);

    _get(Object.getPrototypeOf(MasterComponent.prototype), 'constructor', this).call(this);
    _get(Object.getPrototypeOf(MasterComponent.prototype), 'init', this).call(this, 0, 0, 1, 1);
    this.components = [];
    this.alwaysUpdate = true;
    this.isPersistent = true;
    this.floating = true;
    this.z = 100;
    this.screen = screen;

    _melonJS2['default'].input.bindKey(_melonJS2['default'].input.KEY.ENTER, 'enter', true);
    _melonJS2['default'].input.bindKey(_melonJS2['default'].input.KEY.ESC, 'esc', true);
  }

  _inherits(MasterComponent, _me$Renderable);

  _createClass(MasterComponent, [{
    key: 'add',
    value: function add(c) {
      this.components.push(c);
      c.onResetEvent();
    }
  }, {
    key: 'remove',
    value: function remove(c) {
      this.components.remove(c);
      c.onDestroyEvent();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _arguments = arguments;

      this.components.map(function (c) {
        return c.draw.apply(c, _arguments);
      });
    }
  }, {
    key: 'update',
    value: function update(dt) {
      var _arguments2 = arguments;

      var activeComponent = this.components.length >= 1 ? this.components[this.components.length - 1] : undefined;

      if (_melonJS2['default'].input.isKeyPressed('esc')) {
        if (!activeComponent) {
          this.screen.open(this.screen.menubar);
        } else if (activeComponent.onEscKey) {
          activeComponent.onEscKey();
        }
      }
      if (activeComponent && _melonJS2['default'].input.isKeyPressed('enter')) {
        if (activeComponent.onEnterKey) {
          activeComponent.onEnterKey();
        }
      }
      this.components.map(function (c) {
        return c.update.apply(c, _arguments2);
      });
      return true;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.components.length < 1;
    }
  }]);

  return MasterComponent;
})(_melonJS2['default'].Renderable);

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"./Cursor.js":93,"./Menubar.js":95,"./UIUtil.js":99,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],98:[function(require,module,exports){
(function (global){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

function formatText(text) {
  return text.trim().replace(/\s*(\n)\s*/g, '$1');
}

function computedTextSize(text) {
  var fontMeasure,
      textWidth = 1;
  var widthPadding = text.padding.left + text.font.lineWidth * 2 + text.padding.right;
  var heightPadding = text.padding.top + text.font.lineWidth * 2 + text.padding.bottom;
  text.lines.map(function (line) {
    fontMeasure = text.font.measureText(text.renderer, line);
    // HACK: Some weird but necessary correction on text width
    var widthCorrection = line.length * 0.53;
    textWidth = Math.max(textWidth, fontMeasure.width + widthPadding + widthCorrection);
  });
  var lineWidth = fontMeasure.height + heightPadding;
  var textHeight = text.lines.length * lineWidth;
  textHeight += (text.lines.length - 1) * text.lineSpacing;
  return { textWidth: textWidth, textHeight: textHeight, lineWidth: lineWidth };
}

var Text = (function (_Component) {

  /**
   * options:
   *    options from Components
   *    text => (string) text too be displayed in the component
   *    lineSpacing => (number) number of pixel between lines
   */

  function Text(options) {
    var _this = this;

    _classCallCheck(this, Text);

    var _ref = options || {};

    var x = _ref.x;
    var y = _ref.y;
    var width = _ref.width;
    var height = _ref.height;
    var _ref$font = _ref.font;
    var font = _ref$font === undefined ? _gameJs2['default'].titleFont : _ref$font;
    var _ref$centered = _ref.centered;
    var centered = _ref$centered === undefined ? true : _ref$centered;
    var text = _ref.text;
    var _ref$lineSpacing = _ref.lineSpacing;
    var lineSpacing = _ref$lineSpacing === undefined ? -2 * _gameJs2['default'].uiScale : _ref$lineSpacing;
    var _ref$fitTextH = _ref.fitTextH;
    var fitTextH = _ref$fitTextH === undefined ? !width : _ref$fitTextH;
    var _ref$fitTextV = _ref.fitTextV;
    var fitTextV = _ref$fitTextV === undefined ? !height : _ref$fitTextV;
    var padding = _ref.padding;

    padding = _ComponentJs2['default'].parsePadding(padding, 2 * _gameJs2['default'].uiScale);
    var lines = formatText(text || '').split('\n');

    var _computedTextSize = computedTextSize({ lines: lines, padding: padding, lineSpacing: lineSpacing, renderer: _melonJS2['default'].video.renderer, font: font });

    var textWidth = _computedTextSize.textWidth;
    var textHeight = _computedTextSize.textHeight;
    var lineWidth = _computedTextSize.lineWidth;

    _get(Object.getPrototypeOf(Text.prototype), 'constructor', this).call(this, {
      x: x, y: y,
      width: fitTextH ? textWidth : width,
      height: fitTextV ? textHeight : height
    });

    this.font = font;
    this.centered = centered;
    this.lines = lines;
    this.lineSpacing = lineSpacing;
    this.fitTextH = fitTextH;
    this.fitTextV = fitTextV;
    this.textWidth = textWidth;
    this.textHeight = textHeight;
    this.lineWidth = lineWidth;
    this.padding = padding;

    // HACK: Correct text position by rerendering
    setTimeout(function () {
      _this.renderer.prepareSurface();_this.render();
    }, 500);
  }

  _inherits(Text, _Component);

  _createClass(Text, [{
    key: 'fitToText',
    value: function fitToText() {
      var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var fitTextH = _ref2.fitTextH;
      var fitTextV = _ref2.fitTextV;

      this.fitTextH = typeof fitTextH === 'boolean' ? fitTextH : this.fitTextH;
      this.fitTextV = typeof fitTextV === 'boolean' ? fitTextV : this.fitTextV;
      if (this.fitTextH) {
        this.resize({ width: this.textWidth });
      }
      if (this.fitTextV) {
        this.resize({ height: this.textHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      _get(Object.getPrototypeOf(Text.prototype), 'render', this).call(this);
      var posX = 0,
          posY = 0;
      if (this.centered) posX = this.width / 2;

      this.renderer.save();
      // HACK: Some very scientific calculation here
      var padding = this.padding.top + 5 * _gameJs2['default'].uiScale;
      this.renderer.translate(0, padding);
      this.lines.map(function (line) {
        if (_gameJs2['default'].debug) {
          var measure = computedTextSize({
            lines: [line], padding: _this2.padding, lineSpacing: _this2.lineSpacing,
            renderer: _this2.renderer, font: _this2.font
          });
          _ComponentJs2['default'].renderDebugBox({
            color: 'blue', renderer: _this2.renderer,
            x: posX - measure.textWidth / 2, y: posY - padding,
            width: measure.textWidth, height: measure.textHeight
          });
        }

        _this2.font.drawStroke(_this2.renderer, line, posX, posY);
        _this2.font.draw(_this2.renderer, line, posX, posY);
        posY += _this2.lineSpacing + _this2.lineWidth;
      });
      this.renderer.restore();
    }
  }, {
    key: 'text',
    set: function set(text) {
      var t = formatText(text);
      if (t !== this.text) {
        this.lines = t.split('\n');

        var _computedTextSize2 = computedTextSize(this);

        var textWidth = _computedTextSize2.textWidth;
        var textHeight = _computedTextSize2.textHeight;
        var lineWidth = _computedTextSize2.lineWidth;

        this.textWidth = textWidth;
        this.textHeight = textHeight;
        this.lineWidth = lineWidth;
        this.renderer.needUpdate = true;
        this.fitToText();
      }
    },
    get: function get() {
      return this.lines.join('\n');
    }
  }]);

  return Text;
})(_ComponentJs2['default']);

exports['default'] = Text;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"./Component.js":92,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],99:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _melonJS = (typeof window !== "undefined" ? window['me'] : typeof global !== "undefined" ? global['me'] : null);

var _melonJS2 = _interopRequireDefault(_melonJS);

var _gameJs = require('../game.js');

var _gameJs2 = _interopRequireDefault(_gameJs);

var _PanelJs = require('./Panel.js');

var _PanelJs2 = _interopRequireDefault(_PanelJs);

var _BoxJs = require('./Box.js');

var _BoxJs2 = _interopRequireDefault(_BoxJs);

var _TextJs = require('./Text.js');

var _TextJs2 = _interopRequireDefault(_TextJs);

var _InputTextJs = require('./InputText.js');

var _InputTextJs2 = _interopRequireDefault(_InputTextJs);

var _ButtonJs = require('./Button.js');

var _ButtonJs2 = _interopRequireDefault(_ButtonJs);

var _utilLazyObjJs = require('../util/LazyObj.js');

var _utilLazyObjJs2 = _interopRequireDefault(_utilLazyObjJs);

// Initialize prompt
var Prompt = new _utilLazyObjJs2['default']({
  titleText: function titleText() {
    return new _TextJs2['default']({ text: '' });
  },
  inputText: function inputText() {
    return new _InputTextJs2['default']();
  },
  okButton: function okButton() {
    return new _ButtonJs2['default']({ text: 'Ok', width: 100 * _gameJs2['default'].uiScale });
  },
  cancelButton: function cancelButton() {
    return new _ButtonJs2['default']({ text: 'Cancel', width: 100 * _gameJs2['default'].uiScale });
  },
  bottomPanel: function bottomPanel() {
    return new _PanelJs2['default']([Prompt.okButton], { layout: _PanelJs2['default'].HORIZONTAL });
  },
  box: function box() {
    return new _BoxJs2['default'](new _PanelJs2['default']([Prompt.titleText, new _BoxJs2['default'](Prompt.inputText, { color: 'white', padding: 7 * _gameJs2['default'].uiScale, radius: 10 * _gameJs2['default'].uiScale }), Prompt.bottomPanel]));
  }
});

// Initialize alert
var Alert = new _utilLazyObjJs2['default']({
  titleText: function titleText() {
    return new _TextJs2['default']({ text: '' });
  },
  okButton: function okButton() {
    return new _ButtonJs2['default']({ text: 'Ok', width: 100 * _gameJs2['default'].uiScale });
  },
  panel: function panel() {
    return new _PanelJs2['default']([Alert.titleText, Alert.okButton]);
  },
  box: function box() {
    return new _BoxJs2['default'](Alert.panel);
  }
});

var promptOpened = false;
var alertOpened = false;

var UIUtil = (function () {
  function UIUtil() {
    _classCallCheck(this, UIUtil);
  }

  _createClass(UIUtil, null, [{
    key: 'prompt',
    value: function prompt(title) {
      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref$cancelable = _ref.cancelable;
      var cancelable = _ref$cancelable === undefined ? true : _ref$cancelable;
      var _ref$okText = _ref.okText;
      var okText = _ref$okText === undefined ? 'Ok' : _ref$okText;
      var _ref$cancelText = _ref.cancelText;
      var cancelText = _ref$cancelText === undefined ? 'Cancel' : _ref$cancelText;

      if (promptOpened) _gameJs2['default'].screen.close(Prompt.box);
      Prompt.titleText.text = title;
      Prompt.okButton.text = okText;
      Prompt.cancelButton.text = cancelText;
      Prompt.bottomPanel.remove(Prompt.cancelButton);
      if (cancelable) Prompt.bottomPanel.add(Prompt.cancelButton);

      return new _Promise(function (resolve, reject) {
        Prompt.box.onEnterKey = Prompt.okButton.onClick = function () {
          if (Prompt.inputText.textValue !== '') {
            _gameJs2['default'].screen.close(Prompt.box);
            promptOpened = false;
            resolve(Prompt.inputText.textValue);
          }
        };
        if (cancelable) {
          Prompt.box.onEscKey = Prompt.cancelButton.onClick = function () {
            _gameJs2['default'].screen.close(Prompt.box);
            promptOpened = false;
            reject('UIUtil: prompt canceled');
          };
        }
        _gameJs2['default'].screen.open(Prompt.box);
        promptOpened = true;
      });
    }
  }, {
    key: 'alert',
    value: function alert(title) {
      var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref2$closable = _ref2.closable;
      var closable = _ref2$closable === undefined ? true : _ref2$closable;

      if (alertOpened) _gameJs2['default'].screen.close(Alert.box);
      Alert.titleText.text = title;
      Alert.panel.remove(Alert.okButton);
      if (closable) Alert.panel.add(Alert.okButton);
      return new _Promise(function (resolve, reject) {
        if (closable) {
          Alert.box.onEnterKey = Alert.box.onEscKey = Alert.okButton.onClick = function () {
            _gameJs2['default'].screen.close(Alert.box);
            alertOpened = false;
            resolve();
          };
        }
        _gameJs2['default'].screen.open(Alert.box);
        alertOpened = true;
      });
    }
  }]);

  return UIUtil;
})();

exports['default'] = UIUtil;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../game.js":88,"../util/LazyObj.js":101,"./Box.js":90,"./Button.js":91,"./InputText.js":94,"./Panel.js":96,"./Text.js":98,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7,"babel-runtime/helpers/interop-require-default":10}],100:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Arrays = (function () {
  function Arrays() {
    _classCallCheck(this, Arrays);
  }

  _createClass(Arrays, null, [{
    key: "diff",
    value: function diff(array, otherArray) {
      return array.filter(function (i) {
        return otherArray.indexOf(i) < 0;
      });
    }
  }, {
    key: "range",
    value: function range(from, to) {
      var i = from;
      return Array.apply(0, Array(to - from + 1)).map(function () {
        return i++;
      });
    }
  }]);

  return Arrays;
})();

exports["default"] = Arrays;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7}],101:[function(require,module,exports){

/**
 * Creates objects on which you can attach values evaluted only on first access
 *  using a function that will create this value
 */
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var LazyObj = (function () {
  function LazyObj(obj) {
    _classCallCheck(this, LazyObj);

    for (var key in obj) {
      this.def(key, obj[key]);
    }
  }

  _createClass(LazyObj, [{
    key: "def",
    value: function def(key, value) {
      LazyObj.def(this, key, value);
    }
  }], [{
    key: "def",
    value: function def(obj, key, value) {
      if (typeof value === "function") {
        var cache = null;
        _Object$defineProperty(obj, key, {
          get: function get() {
            return cache = cache || value.apply(obj);
          }
        });
      } else obj[key] = name;
    }
  }]);

  return LazyObj;
})();

exports["default"] = LazyObj;
module.exports = exports["default"];

},{"babel-runtime/core-js/object/define-property":2,"babel-runtime/helpers/class-call-check":6,"babel-runtime/helpers/create-class":7}]},{},[88]);
