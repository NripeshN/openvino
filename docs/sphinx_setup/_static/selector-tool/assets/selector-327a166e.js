var qp = Object.defineProperty;
var ef = (e, t, n) => t in e
    ? qp(e, t, {enumerable : !0, configurable : !0, writable : !0, value : n})
    : e[t] = n;
var Ee = (e, t, n) => (ef(e, typeof t != "symbol" ? t + "" : t, n), n);
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e
}
var pc = {exports : {}}, hi = {}, fc = {exports : {}},
    D = {}; /**
             * @license React
             * react.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var Qo = Symbol.for("react.element"), tf = Symbol.for("react.portal"),
    nf = Symbol.for("react.fragment"), of = Symbol.for("react.strict_mode"),
    rf = Symbol.for("react.profiler"), sf = Symbol.for("react.provider"),
    lf = Symbol.for("react.context"), af = Symbol.for("react.forward_ref"),
    uf = Symbol.for("react.suspense"), cf = Symbol.for("react.memo"),
    df = Symbol.for("react.lazy"), _a = Symbol.iterator;
function pf(e) {
  return e === null || typeof e != "object"
      ? null
      : (e = _a && e[_a] || e["@@iterator"], typeof e == "function" ? e : null)
}
var hc = {
  isMounted : function() {
    return !1
  },
  enqueueForceUpdate : function() {},
  enqueueReplaceState : function() {},
  enqueueSetState : function() {}
},
    gc = Object.assign, mc = {};
function no(e, t, n) {
  this.props = e, this.context = t, this.refs = mc, this.updater = n || hc
}
no.prototype.isReactComponent = {};
no.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
no.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};
function vc() {}
vc.prototype = no.prototype;
function fl(e, t, n) {
  this.props = e, this.context = t, this.refs = mc, this.updater = n || hc
}
var hl = fl.prototype = new vc;
hl.constructor = fl;
gc(hl, no.prototype);
hl.isPureReactComponent = !0;
var Oa = Array.isArray, yc = Object.prototype.hasOwnProperty,
    gl = {current : null},
    kc = {key : !0, ref : !0, __self : !0, __source : !0};
function wc(e, t, n) {
  var o, r = {}, i = null, s = null;
  if (t != null)
    for (o in t.ref !== void 0 && (s = t.ref),
         t.key !== void 0 && (i = "" + t.key),
         t)
      yc.call(t, o) && !kc.hasOwnProperty(o) && (r[o] = t[o]);
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    r.children = a
  }
  if (e && e.defaultProps)
    for (o in l = e.defaultProps, l)
      r[o] === void 0 && (r[o] = l[o]);
  return {
    $$typeof: Qo, type: e, key: i, ref: s, props: r, _owner: gl.current
  }
}
function ff(e, t) {
  return {
    $$typeof: Qo, type: e.type, key: t, ref: e.ref, props: e.props,
        _owner: e._owner
  }
}
function ml(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qo
}
function hf(e) {
  var t = {"=" : "=0", ":" : "=2"};
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var Na = /\/+/g;
function Fi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hf("" + e.key)
                                                             : t.toString(36)
}
function Er(e, t, n, o, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null)
    s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qo:
          case tf:
            s = !0
        }
    }
  if (s)
    return s = e, r = r(s), e = o === "" ? "." + Fi(s, 0) : o,
           Oa(r) ? (n = "",
                    e != null && (n = e.replace(Na, "$&/") + "/"),
                    Er(r,
                       t,
                       n,
                       "",
                       function(u) {
                         return u
                       }))
                 : r != null &&
                   (ml(r) &&
                        (r = ff(
                             r,
                             n +
                                 (!r.key || s && s.key === r.key
                                      ? ""
                                      : ("" + r.key).replace(Na, "$&/") + "/") +
                                 e)),
                    t.push(r)),
           1;
  if (s = 0, o = o === "" ? "." : o + ":", Oa(e))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = o + Fi(i, l);
      s += Er(i, t, n, a, r)
    }
  else if (a = pf(e), typeof a == "function")
    for (e = a.call(e), l = 0; !(i = e.next()).done;)
      i = i.value, a = o + Fi(i, l++), s += Er(i, t, n, a, r);
  else if (i === "object")
    throw t = String(e),
          Error(
              "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                   ? "object with keys {" + Object.keys(e).join(", ") + "}"
                   : t) +
              "). If you meant to render a collection of children, use an array instead.");
  return s
}
function ir(e, t, n) {
  if (e == null)
    return e;
  var o = [], r = 0;
  return Er(e, o, "", "", function(i) {
           return t.call(n, i, r++)
         }), o
}
function gf(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(),
    t.then(
        function(n) {
          (e._status === 0 || e._status === -1) &&
              (e._status = 1, e._result = n)
        },
        function(n) {
          (e._status === 0 || e._status === -1) &&
              (e._status = 2, e._result = n)
        }),
    e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result
}
var _e = {current : null}, Cr = {transition : null}, mf = {
  ReactCurrentDispatcher : _e,
  ReactCurrentBatchConfig : Cr,
  ReactCurrentOwner : gl
};
D.Children = {
  map : ir,
  forEach : function(e, t, n) {
    ir(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count : function(e) {
    var t = 0;
    return ir(e, function() {
             t++
           }), t
  },
  toArray : function(e) {
    return ir(e, function(t) {
             return t
           }) || []
  },
  only : function(e) {
    if (!ml(e))
      throw Error(
          "React.Children.only expected to receive a single React element child.");
    return e
  }
};
D.Component = no;
D.Fragment = nf;
D.Profiler = rf;
D.PureComponent = fl;
D.StrictMode = of;
D.Suspense = uf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mf;
D.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
        e + ".");
  var o = gc({}, e.props), r = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = gl.current),
        t.key !== void 0 && (r = "" + t.key),
        e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (a in t)
      yc.call(t, a) && !kc.hasOwnProperty(a) &&
          (o[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2;
  if (a === 1)
    o.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    o.children = l
  }
  return {
    $$typeof: Qo, type: e.type, key: r, ref: i, props: o, _owner: s
  }
};
D.createContext = function(e) {
  return e = {
    $$typeof : lf,
    _currentValue : e,
    _currentValue2 : e,
    _threadCount : 0,
    Provider : null,
    Consumer : null,
    _defaultValue : null,
    _globalName : null
  },
         e.Provider = {$$typeof : sf, _context : e}, e.Consumer = e
};
D.createElement = wc;
D.createFactory = function(e) {
  var t = wc.bind(null, e);
  return t.type = e, t
};
D.createRef = function() {
  return {
    current: null
  }
};
D.forwardRef = function(e) {
  return {
    $$typeof: af, render: e
  }
};
D.isValidElement = ml;
D.lazy = function(e) {
  return {
    $$typeof: df, _payload: {_status: -1, _result: e}, _init: gf
  }
};
D.memo = function(e, t) {
  return {
    $$typeof: cf, type: e, compare: t === void 0 ? null : t
  }
};
D.startTransition = function(e) {
  var t = Cr.transition;
  Cr.transition = {};
  try {
    e()
  } finally {
    Cr.transition = t
  }
};
D.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.")
};
D.useCallback = function(e, t) {
  return _e.current.useCallback(e, t)
};
D.useContext = function(e) {
  return _e.current.useContext(e)
};
D.useDebugValue = function() {};
D.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e)
};
D.useEffect = function(e, t) {
  return _e.current.useEffect(e, t)
};
D.useId = function() {
  return _e.current.useId()
};
D.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n)
};
D.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t)
};
D.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t)
};
D.useMemo = function(e, t) {
  return _e.current.useMemo(e, t)
};
D.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n)
};
D.useRef = function(e) {
  return _e.current.useRef(e)
};
D.useState = function(e) {
  return _e.current.useState(e)
};
D.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n)
};
D.useTransition = function() {
  return _e.current.useTransition()
};
D.version = "18.2.0";
fc.exports = D;
var F = fc.exports;
const vf = dc(F); /**
                   * @license React
                   * react-jsx-runtime.production.min.js
                   *
                   * Copyright (c) Facebook, Inc. and its affiliates.
                   *
                   * This source code is licensed under the MIT license found in
                   * the LICENSE file in the root directory of this source tree.
                   */
var yf = F, kf = Symbol.for("react.element"), wf = Symbol.for("react.fragment"),
    Sf = Object.prototype.hasOwnProperty,
    _f =
        yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Of = {key : !0, ref : !0, __self : !0, __source : !0};
function Sc(e, t, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
  for (o in t)
    Sf.call(t, o) && !Of.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in t = e.defaultProps, t)
      r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: kf, type: e, key: i, ref: s, props: r, _owner: _f.current
  }
}
hi.Fragment = wf;
hi.jsx = Sc;
hi.jsxs = Sc;
pc.exports = hi;
var vl = pc.exports;
const zr = vl.Fragment, y = vl.jsx, T = vl.jsxs;
document.body.style.cssText +=
    `
overflow: hidden;
`;
const Nf = () => {
  const e = {type : "size", height : document.body.offsetHeight};
  window.parent.postMessage(e)
};
new ResizeObserver(Nf).observe(document.body);
function de(e) {
  "@babel/helpers - typeof";
  return de = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol &&
            t !== Symbol.prototype
        ? "symbol"
        : typeof t
  }, de(e)
}
function ct(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
function xf(e, t) {
  if (de(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (de(o) !== "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}
function _c(e) {
  var t = xf(e, "string");
  return de(t) === "symbol" ? t : String(t)
}
function xa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0,
    "value" in o && (o.writable = !0), Object.defineProperty(e, _c(o.key), o)
  }
}
function dt(e, t, n) {
  return t && xa(e.prototype, t), n && xa(e, n),
         Object.defineProperty(e, "prototype", {writable : !1}), e
}
function Wt(e) {
  if (e === void 0)
    throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called");
  return e
}
function gs(e, t) {
  return gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o
  }, gs(e, t)
}
function gi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(
      t && t.prototype,
      {constructor : {value : e, writable : !0, configurable : !0}}),
  Object.defineProperty(e, "prototype", {writable : !1}), t && gs(e, t)
}
function Xo(e, t) {
  if (t && (de(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError(
        "Derived constructors may only return object or undefined");
  return Wt(e)
}
function Ot(e) {
  return Ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n)
  }, Ot(e)
}
function Je(e, t, n) {
  return t = _c(t),
         t in e ? Object.defineProperty(e, t, {
           value : n,
           enumerable : !0,
           configurable : !0,
           writable : !0
         })
                : e[t] = n,
         e
}
function Oc(e) {
  if (Array.isArray(e))
    return e
}
function Pf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null ||
      e["@@iterator"] != null)
    return Array.from(e)
}
function Pa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o
}
function Nc(e, t) {
  if (e) {
    if (typeof e == "string")
      return Pa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Pa(e, t)
  }
}
function xc() {
  throw new TypeError(
      `Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Ef(e) {
  return Oc(e) || Pf(e) || Nc(e) || xc()
}
function Ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ea(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ea(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
var Cf = {
  type : "logger",
  log : function(t) {
    this.output("log", t)
  },
  warn : function(t) {
    this.output("warn", t)
  },
  error : function(t) {
    this.output("error", t)
  },
  output : function(t, n) {
    console && console[t] && console[t].apply(console, n)
  }
},
    bf = function() {
      function e(t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        ct(this, e), this.init(t, n)
      }
      return dt(e,
                [
                  {
                    key : "init",
                    value : function(n) {
                      var o = arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {};
                      this.prefix = o.prefix || "i18next:",
                      this.logger = n || Cf, this.options = o,
                      this.debug = o.debug
                    }
                  },
                  {
                    key : "setDebug",
                    value : function(n) {
                      this.debug = n
                    }
                  },
                  {
                    key : "log",
                    value : function() {
                      for (var n = arguments.length, o = new Array(n), r = 0;
                           r < n;
                           r++)
                        o[r] = arguments[r];
                      return this.forward(o, "log", "", !0)
                    }
                  },
                  {
                    key : "warn",
                    value : function() {
                      for (var n = arguments.length, o = new Array(n), r = 0;
                           r < n;
                           r++)
                        o[r] = arguments[r];
                      return this.forward(o, "warn", "", !0)
                    }
                  },
                  {
                    key : "error",
                    value : function() {
                      for (var n = arguments.length, o = new Array(n), r = 0;
                           r < n;
                           r++)
                        o[r] = arguments[r];
                      return this.forward(o, "error", "")
                    }
                  },
                  {
                    key : "deprecate",
                    value : function() {
                      for (var n = arguments.length, o = new Array(n), r = 0;
                           r < n;
                           r++)
                        o[r] = arguments[r];
                      return this.forward(o, "warn", "WARNING DEPRECATED: ", !0)
                    }
                  },
                  {
                    key : "forward",
                    value : function(n, o, r, i) {
                      return i && !this.debug
                          ? null
                          : (typeof n[0] == "string" &&
                                 (n[0] = "".concat(r)
                                             .concat(this.prefix, " ")
                                             .concat(n[0])),
                             this.logger[o](n))
                    }
                  },
                  {
                    key : "create",
                    value : function(n) {
                      return new e(
                          this.logger,
                          Ca(Ca({}, {
                               prefix :
                                   "".concat(this.prefix, ":").concat(n, ":")
                             }),
                             this.options))
                    }
                  },
                  {
                    key : "clone",
                    value : function(n) {
                      return n = n || this.options,
                             n.prefix = n.prefix || this.prefix,
                             new e(this.logger, n)
                    }
                  }
                ]),
             e
    }(), yt = new bf, tn = function() {
      function e() {
        ct(this, e), this.observers = {}
      }
      return dt(e,
                [
                  {
                    key : "on",
                    value : function(n, o) {
                      var r = this;
                      return n.split(" ").forEach(function(i) {
                        r.observers[i] = r.observers[i] || [],
                        r.observers[i].push(o)
                      }),
                             this
                    }
                  },
                  {
                    key : "off",
                    value : function(n, o) {
                      if (this.observers[n]) {
                        if (!o) {
                          delete this.observers[n];
                          return
                        }
                        this.observers[n] =
                            this.observers[n].filter(function(r) {
                              return r !== o
                            })
                      }
                    }
                  },
                  {
                    key : "emit",
                    value : function(n) {
                      for (var o = arguments.length,
                               r = new Array(o > 1 ? o - 1 : 0),
                               i = 1;
                           i < o;
                           i++)
                        r[i - 1] = arguments[i];
                      if (this.observers[n]) {
                        var s = [].concat(this.observers[n]);
                        s.forEach(function(a) {
                          a.apply(void 0, r)
                        })
                      }
                      if (this.observers["*"]) {
                        var l = [].concat(this.observers["*"]);
                        l.forEach(function(a) {
                          a.apply(a, [ n ].concat(r))
                        })
                      }
                    }
                  }
                ]),
             e
    }();
function lo() {
  var e, t, n = new Promise(function(o, r) {
              e = o, t = r
            });
  return n.resolve = e, n.reject = t, n
}
function ba(e) {
  return e == null ? "" : "" + e
}
function Lf(e, t, n) {
  e.forEach(function(o) {
    t[o] && (n[o] = t[o])
  })
}
function yl(e, t, n) {
  function o(l) {
    return l && l.indexOf("###") > -1 ? l.replace(/###/g, ".") : l
  }
  function r() {
    return !e || typeof e == "string"
  }
  for (var i = typeof t != "string" ? [].concat(t) : t.split(".");
       i.length > 1;) {
    if (r())
      return {};
    var s = o(i.shift());
    !e[s] && n && (e[s] = new n),
        Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {}
  }
  return r() ? {} : {obj : e, k : o(i.shift())}
}
function La(e, t, n) {
  var o = yl(e, t, Object), r = o.obj, i = o.k;
  r[i] = n
}
function Tf(e, t, n, o) {
  var r = yl(e, t, Object), i = r.obj, s = r.k;
  i[s] = i[s] || [], o && (i[s] = i[s].concat(n)), o || i[s].push(n)
}
function Vr(e, t) {
  var n = yl(e, t), o = n.obj, r = n.k;
  if (o)
    return o[r]
}
function Ta(e, t, n) {
  var o = Vr(e, n);
  return o !== void 0 ? o : Vr(t, n)
}
function Pc(e, t, n) {
  for (var o in t)
    o !== "__proto__" && o !== "constructor" &&
        (o in e ? typeof e[o] == "string" || e[o] instanceof String ||
                     typeof t[o] == "string" || t[o] instanceof String
                 ? n && (e[o] = t[o])
                 : Pc(e[o], t[o], n)
                : e[o] = t[o]);
  return e
}
function En(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var If = {
  "&" : "&amp;",
  "<" : "&lt;",
  ">" : "&gt;",
  '"' : "&quot;",
  "'" : "&#39;",
  "/" : "&#x2F;"
};
function Rf(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
    return If[t]
  }) : e
}
var mi = typeof window < "u" && window.navigator &&
    typeof window.navigator.userAgentData > "u" && window.navigator.userAgent &&
    window.navigator.userAgent.indexOf("MSIE") > -1,
    jf = [ " ", ",", "?", "!", ";" ];
function Ff(e, t, n) {
  t = t || "", n = n || "";
  var o = jf.filter(function(l) {
    return t.indexOf(l) < 0 && n.indexOf(l) < 0
  });
  if (o.length === 0)
    return !0;
  var r = new RegExp("(".concat(
          o.map(function(l) {
             return l === "?" ? "\\?" : l
           }).join("|"),
          ")")),
      i = !r.test(e);
  if (!i) {
    var s = e.indexOf(n);
    s > 0 && !r.test(e.substring(0, s)) && (i = !0)
  }
  return i
}
function Ia(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ia(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ia(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function Df(e) {
  var t = Af();
  return function() {
    var o = Ot(e), r;
    if (t) {
      var i = Ot(this).constructor;
      r = Reflect.construct(o, arguments, i)
    } else
      r = o.apply(this, arguments);
    return Xo(this, r)
  }
}
function Af() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(
               Reflect.construct(Boolean, [], function() {})),
           !0
  } catch {
    return !1
  }
}
function Ec(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (e) {
    if (e[t])
      return e[t];
    for (var o = t.split(n), r = e, i = 0; i < o.length; ++i) {
      if (!r || typeof r[o[i]] == "string" && i + 1 < o.length)
        return;
      if (r[o[i]] === void 0) {
        for (var s = 2, l = o.slice(i, i + s).join(n), a = r[l];
             a === void 0 && o.length > i + s;)
          s++, l = o.slice(i, i + s).join(n), a = r[l];
        if (a === void 0)
          return;
        if (a === null)
          return null;
        if (t.endsWith(l)) {
          if (typeof a == "string")
            return a;
          if (l && typeof a[l] == "string")
            return a[l]
        }
        var u = o.slice(i + s).join(n);
        return u ? Ec(a, u, n) : void 0
      }
      r = r[o[i]]
    }
    return r
  }
}
var Uf = function(e) {
  gi(n, e);
  var t = Df(n);
  function n(o) {
    var r,
        i = arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : {ns : [ "translation" ], defaultNS : "translation"};
    return ct(this, n),
           r = t.call(this), mi && tn.call(Wt(r)), r.data = o || {},
           r.options = i,
           r.options.keySeparator === void 0 && (r.options.keySeparator = "."),
           r.options.ignoreJSONStructure === void 0 &&
               (r.options.ignoreJSONStructure = !0),
           r
  }
  return dt(n,
            [
              {
                key : "addNamespaces",
                value : function(r) {
                  this.options.ns.indexOf(r) < 0 && this.options.ns.push(r)
                }
              },
              {
                key : "removeNamespaces",
                value : function(r) {
                  var i = this.options.ns.indexOf(r);
                  i > -1 && this.options.ns.splice(i, 1)
                }
              },
              {
                key : "getResource",
                value : function(r, i, s) {
                  var l = arguments.length > 3 && arguments[3] !== void 0
                      ? arguments[3]
                      : {},
                      a = l.keySeparator !== void 0 ? l.keySeparator
                                                    : this.options.keySeparator,
                      u = l.ignoreJSONStructure !== void 0
                      ? l.ignoreJSONStructure
                      : this.options.ignoreJSONStructure,
                      f = [ r, i ];
                  s && typeof s != "string" && (f = f.concat(s)),
                      s && typeof s == "string" &&
                      (f = f.concat(a ? s.split(a) : s)),
                      r.indexOf(".") > -1 && (f = r.split("."));
                  var d = Vr(this.data, f);
                  return d || !u || typeof s != "string"
                      ? d
                      : Ec(this.data && this.data[r] && this.data[r][i], s, a)
                }
              },
              {
                key : "addResource",
                value : function(r, i, s, l) {
                  var a = arguments.length > 4 && arguments[4] !== void 0
                      ? arguments[4]
                      : {silent : !1},
                      u = this.options.keySeparator;
                  u === void 0 && (u = ".");
                  var f = [ r, i ];
                  s && (f = f.concat(u ? s.split(u) : s)),
                      r.indexOf(".") > -1 &&
                      (f = r.split("."), l = i, i = f[1]),
                      this.addNamespaces(i), La(this.data, f, l),
                      a.silent || this.emit("added", r, i, s, l)
                }
              },
              {
                key : "addResources",
                value : function(r, i, s) {
                  var l = arguments.length > 3 && arguments[3] !== void 0
                      ? arguments[3]
                      : {silent : !1};
                  for (var a in s)
                    (typeof s[a] == "string" ||
                     Object.prototype.toString.apply(s[a]) ===
                         "[object Array]") &&
                        this.addResource(r, i, a, s[a], {silent : !0});
                  l.silent || this.emit("added", r, i, s)
                }
              },
              {
                key : "addResourceBundle",
                value : function(r, i, s, l, a) {
                  var u = arguments.length > 5 && arguments[5] !== void 0
                      ? arguments[5]
                      : {silent : !1},
                      f = [ r, i ];
                  r.indexOf(".") > -1 &&
                      (f = r.split("."), l = s, s = i, i = f[1]),
                      this.addNamespaces(i);
                  var d = Vr(this.data, f) || {};
                  l ? Pc(d, s, a) : d = sr(sr({}, d), s), La(this.data, f, d),
                                    u.silent || this.emit("added", r, i, s)
                }
              },
              {
                key : "removeResourceBundle",
                value : function(r, i) {
                  this.hasResourceBundle(r, i) && delete this.data[r][i],
                      this.removeNamespaces(i), this.emit("removed", r, i)
                }
              },
              {
                key : "hasResourceBundle",
                value : function(r, i) {
                  return this.getResource(r, i) !== void 0
                }
              },
              {
                key : "getResourceBundle",
                value : function(r, i) {
                  return i || (i = this.options.defaultNS),
                         this.options.compatibilityAPI === "v1"
                             ? sr(sr({}, {}), this.getResource(r, i))
                             : this.getResource(r, i)
                }
              },
              {
                key : "getDataByLanguage",
                value : function(r) {
                  return this.data[r]
                }
              },
              {
                key : "hasLanguageSomeTranslations",
                value : function(r) {
                  var i = this.getDataByLanguage(r),
                      s = i && Object.keys(i) || [];
                  return !!s.find(function(l) {
                    return i[l] && Object.keys(i[l]).length > 0
                  })
                }
              },
              {
                key : "toJSON",
                value : function() {
                  return this.data
                }
              }
            ]),
         n
}(tn), Cc = {
  processors : {},
  addPostProcessor : function(t) {
    this.processors[t.name] = t
  },
  handle : function(t, n, o, r, i) {
    var s = this;
    return t.forEach(function(l) {
      s.processors[l] && (n = s.processors[l].process(n, o, r, i))
    }),
           n
  }
};
function Ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ra(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function Mf(e) {
  var t = zf();
  return function() {
    var o = Ot(e), r;
    if (t) {
      var i = Ot(this).constructor;
      r = Reflect.construct(o, arguments, i)
    } else
      r = o.apply(this, arguments);
    return Xo(this, r)
  }
}
function zf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(
               Reflect.construct(Boolean, [], function() {})),
           !0
  } catch {
    return !1
  }
}
var ja = {}, Fa = function(e) {
  gi(n, e);
  var t = Mf(n);
  function n(o) {
    var r,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ct(this, n),
           r = t.call(this), mi && tn.call(Wt(r)),
           Lf(
               [
                 "resourceStore",
                 "languageUtils",
                 "pluralResolver",
                 "interpolator",
                 "backendConnector",
                 "i18nFormat",
                 "utils"
               ],
               o,
               Wt(r)),
           r.options = i,
           r.options.keySeparator === void 0 && (r.options.keySeparator = "."),
           r.logger = yt.create("translator"), r
  }
  return dt(n,
            [
              {
                key : "changeLanguage",
                value : function(r) {
                  r && (this.language = r)
                }
              },
              {
                key : "exists",
                value : function(r) {
                  var i = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {interpolation : {}};
                  if (r == null)
                    return !1;
                  var s = this.resolve(r, i);
                  return s && s.res !== void 0
                }
              },
              {
                key : "extractFromKey",
                value : function(r, i) {
                  var s = i.nsSeparator !== void 0 ? i.nsSeparator
                                                   : this.options.nsSeparator;
                  s === void 0 && (s = ":");
                  var l = i.keySeparator !== void 0 ? i.keySeparator
                                                    : this.options.keySeparator,
                      a = i.ns || this.options.defaultNS || [],
                      u = s && r.indexOf(s) > -1,
                      f = !this.options.userDefinedKeySeparator &&
                      !i.keySeparator && !this.options.userDefinedNsSeparator &&
                      !i.nsSeparator && !Ff(r, s, l);
                  if (u && !f) {
                    var d = r.match(this.interpolator.nestingRegexp);
                    if (d && d.length > 0)
                      return {key : r, namespaces : a};
                    var h = r.split(s);
                    (s !== l ||
                     s === l && this.options.ns.indexOf(h[0]) > -1) &&
                        (a = h.shift()),
                        r = h.join(l)
                  }
                  return typeof a == "string" && (a = [ a ]), {
                    key: r, namespaces: a
                  }
                }
              },
              {
                key : "translate",
                value : function(r, i, s) {
                  var l = this;
                  if (de(i) !== "object" &&
                          this.options.overloadTranslationOptionHandler &&
                          (i = this.options.overloadTranslationOptionHandler(
                               arguments)),
                      i || (i = {}),
                      r == null)
                    return "";
                  Array.isArray(r) || (r = [ String(r) ]);
                  var a = i.returnDetails !== void 0
                      ? i.returnDetails
                      : this.options.returnDetails,
                      u = i.keySeparator !== void 0 ? i.keySeparator
                                                    : this.options.keySeparator,
                      f = this.extractFromKey(r[r.length - 1], i), d = f.key,
                      h = f.namespaces, m = h[h.length - 1],
                      v = i.lng || this.language,
                      w = i.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;
                  if (v && v.toLowerCase() === "cimode") {
                    if (w) {
                      var O = i.nsSeparator || this.options.nsSeparator;
                      return a ? {
                        res : "".concat(m).concat(O).concat(d),
                        usedKey : d,
                        exactUsedKey : d,
                        usedLng : v,
                        usedNS : m
                      }
                               : "".concat(m).concat(O).concat(d)
                    }
                    return a ? {
                      res : d,
                      usedKey : d,
                      exactUsedKey : d,
                      usedLng : v,
                      usedNS : m
                    }
                             : d
                  }
                  var p = this.resolve(r, i), c = p && p.res,
                      g = p && p.usedKey || d, k = p && p.exactUsedKey || d,
                      _ = Object.prototype.toString.apply(c),
                      S =
                          [
                            "[object Number]",
                            "[object Function]",
                            "[object RegExp]"
                          ],
                      x = i.joinArrays !== void 0 ? i.joinArrays
                                                  : this.options.joinArrays,
                      P = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      R = typeof c != "string" && typeof c != "boolean" &&
                      typeof c != "number";
                  if (P && c && R && S.indexOf(_) < 0 &&
                      !(typeof x == "string" && _ === "[object Array]")) {
                    if (!i.returnObjects && !this.options.returnObjects) {
                      this.options.returnedObjectHandler ||
                          this.logger.warn(
                              "accessing an object - but returnObjects options is not enabled!");
                      var E = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                                g, c, ke(ke({}, i), {}, {ns : h}))
                          : "key '".concat(d, " (").concat(
                                this.language,
                                ")' returned an object instead of string.");
                      return a ? (p.res = E, p) : E
                    }
                    if (u) {
                      var H = _ === "[object Array]", Pe = H ? [] : {},
                          Nt = H ? k : g;
                      for (var et in c)
                        if (Object.prototype.hasOwnProperty.call(c, et)) {
                          var Nn = "".concat(Nt).concat(u).concat(et);
                          Pe[et] = this.translate(
                              Nn, ke(ke({}, i), {joinArrays : !1, ns : h})),
                          Pe[et] === Nn && (Pe[et] = c[et])
                        }
                      c = Pe
                    }
                  } else if (
                      P && typeof x == "string" && _ === "[object Array]")
                    c = c.join(x),
                    c && (c = this.extendTranslation(c, r, i, s));
                  else {
                    var ft = !1, tt = !1,
                        C = i.count !== void 0 && typeof i.count != "string",
                        I = n.hasDefaultValue(i),
                        j = C ? this.pluralResolver.getSuffix(v, i.count, i)
                              : "",
                        M = i["defaultValue".concat(j)] || i.defaultValue;
                    !this.isValidLookup(c) && I && (ft = !0, c = M),
                        this.isValidLookup(c) || (tt = !0, c = d);
                    var Q = i.missingKeyNoValueFallbackToKey ||
                        this.options.missingKeyNoValueFallbackToKey,
                        xt = Q && tt ? void 0 : c,
                        Fe = I && M !== c && this.options.updateMissing;
                    if (tt || ft || Fe) {
                      if (this.logger.log(
                              Fe ? "updateKey" : "missingKey",
                              v,
                              m,
                              d,
                              Fe ? M : c),
                          u) {
                        var xn = this.resolve(
                            d, ke(ke({}, i), {}, {keySeparator : !1}));
                        xn && xn.res &&
                            this.logger.warn(
                                "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                      }
                      var De = [],
                          Pt = this.languageUtils.getFallbackCodes(
                              this.options.fallbackLng, i.lng || this.language);
                      if (this.options.saveMissingTo === "fallback" && Pt &&
                          Pt[0])
                        for (var Ii = 0; Ii < Pt.length; Ii++)
                          De.push(Pt[Ii]);
                      else
                        this.options.saveMissingTo === "all"
                            ? De = this.languageUtils.toResolveHierarchy(
                                  i.lng || this.language)
                            : De.push(i.lng || this.language);
                      var ka = function(Pn, ji, wa) {
                        var Sa = I && wa !== c ? wa : xt;
                        l.options.missingKeyHandler
                            ? l.options.missingKeyHandler(Pn, m, ji, Sa, Fe, i)
                            : l.backendConnector &&
                                l.backendConnector.saveMissing &&
                                l.backendConnector.saveMissing(
                                    Pn, m, ji, Sa, Fe, i),
                            l.emit("missingKey", Pn, m, ji, c)
                      };
                      this.options.saveMissing &&
                          (this.options.saveMissingPlurals && C
                               ? De.forEach(function(Ri) {
                                   l.pluralResolver.getSuffixes(Ri, i).forEach(
                                       function(Pn) {
                                         ka([ Ri ],
                                            d + Pn,
                                            i["defaultValue".concat(Pn)] || M)
                                       })
                                 })
                               : ka(De, d, M))
                    }
                    c = this.extendTranslation(c, r, i, p, s),
                    tt && c === d && this.options.appendNamespaceToMissingKey &&
                        (c = "".concat(m, ":").concat(d)),
                    (tt || ft) && this.options.parseMissingKeyHandler &&
                        (this.options.compatibilityAPI !== "v1"
                             ? c = this.options.parseMissingKeyHandler(
                                   this.options.appendNamespaceToMissingKey
                                       ? "".concat(m, ":").concat(d)
                                       : d,
                                   ft ? c : void 0)
                             : c = this.options.parseMissingKeyHandler(c))
                  }
                  return a ? (p.res = c, p) : c
                }
              },
              {
                key : "extendTranslation",
                value : function(r, i, s, l, a) {
                  var u = this;
                  if (this.i18nFormat && this.i18nFormat.parse)
                    r = this.i18nFormat.parse(
                        r,
                        ke(ke({}, this.options.interpolation.defaultVariables),
                           s),
                        l.usedLng,
                        l.usedNS,
                        l.usedKey,
                        {resolved : l});
                  else if (!s.skipInterpolation) {
                    s.interpolation && this.interpolator.init(ke(ke({}, s), {
                      interpolation : ke(
                          ke({}, this.options.interpolation), s.interpolation)
                    }));
                    var f = typeof r == "string" &&
                        (s && s.interpolation &&
                                 s.interpolation.skipOnVariables !== void 0
                             ? s.interpolation.skipOnVariables
                             : this.options.interpolation.skipOnVariables),
                        d;
                    if (f) {
                      var h = r.match(this.interpolator.nestingRegexp);
                      d = h && h.length
                    }
                    var m = s.replace && typeof s.replace != "string"
                        ? s.replace
                        : s;
                    if (this.options.interpolation.defaultVariables &&
                            (m =
                                 ke(ke({},
                                       this.options.interpolation
                                           .defaultVariables),
                                    m)),
                        r = this.interpolator.interpolate(
                            r, m, s.lng || this.language, s),
                        f) {
                      var v = r.match(this.interpolator.nestingRegexp),
                          w = v && v.length;
                      d < w && (s.nest = !1)
                    }
                    s.nest !== !1 && (r = this.interpolator.nest(r, function() {
                      for (var c = arguments.length, g = new Array(c), k = 0;
                           k < c;
                           k++)
                        g[k] = arguments[k];
                      return a && a[0] === g[0] && !s.context
                          ? (u.logger.warn(
                                 "It seems you are nesting recursively key: "
                                     .concat(g[0], " in key: ")
                                     .concat(i[0])),
                             null)
                          : u.translate.apply(u, g.concat([ i ]))
                    }, s)), s.interpolation && this.interpolator.reset()
                  }
                  var O = s.postProcess || this.options.postProcess,
                      p = typeof O == "string" ? [ O ] : O;
                  return r != null && p && p.length &&
                             s.applyPostProcessor !== !1 &&
                             (r = Cc.handle(
                                  p,
                                  r,
                                  i,
                                  this.options &&
                                          this.options.postProcessPassResolved
                                      ? ke({i18nResolved : l}, s)
                                      : s,
                                  this)),
                         r
                }
              },
              {
                key : "resolve",
                value : function(r) {
                  var i = this,
                      s = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                      l, a, u, f, d;
                  return typeof r == "string" && (r = [ r ]), r.forEach(function(h) {
                    if (!i.isValidLookup(l)) {
                      var m = i.extractFromKey(h, s), v = m.key;
                      a = v;
                      var w = m.namespaces;
                      i.options.fallbackNS &&
                          (w = w.concat(i.options.fallbackNS));
                      var O = s.count !== void 0 && typeof s.count != "string",
                          p = O && !s.ordinal && s.count === 0 &&
                          i.pluralResolver.shouldUseIntlApi(),
                          c = s.context !== void 0 &&
                          (typeof s.context == "string" ||
                           typeof s.context == "number") &&
                          s.context !== "",
                          g = s.lngs ? s.lngs
                                     : i.languageUtils.toResolveHierarchy(
                                           s.lng || i.language, s.fallbackLng);
                      w.forEach(function(k) {
                        i.isValidLookup(l) ||
                            (d = k,
                             !ja["".concat(g[0], "-").concat(k)] && i.utils &&
                                 i.utils.hasLoadedNamespace &&
                                 !i.utils.hasLoadedNamespace(d) &&
                                 (ja["".concat(g[0], "-").concat(k)] = !0,
                                  i.logger.warn(
                                      'key "'.concat(a, '" for languages "')
                                          .concat(
                                              g.join(", "),
                                              `" won't get resolved as namespace "`)
                                          .concat(d, '" was not yet loaded'),
                                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                             g.forEach(function(_) {
                               if (!i.isValidLookup(l)) {
                                 f = _;
                                 var S = [ v ];
                                 if (i.i18nFormat && i.i18nFormat.addLookupKeys)
                                   i.i18nFormat.addLookupKeys(S, v, _, k, s);
                                 else {
                                   var x;
                                   O &&
                                       (x = i.pluralResolver.getSuffix(
                                            _, s.count, s));
                                   var P = "".concat(
                                       i.options.pluralSeparator, "zero");
                                   if (O && (S.push(v + x), p && S.push(v + P)),
                                       c) {
                                     var R =
                                         "".concat(v)
                                             .concat(i.options.contextSeparator)
                                             .concat(s.context);
                                     S.push(R),
                                         O &&
                                         (S.push(R + x), p && S.push(R + P))
                                   }
                                 }
                                 for (var E; E = S.pop();)
                                   i.isValidLookup(l) ||
                                       (u = E, l = i.getResource(_, k, E, s))
                               }
                             }))
                      })
                    }
                  }),
                  {
                    res: l, usedKey: a, exactUsedKey: u, usedLng: f, usedNS: d
                  }
                }
              },
              {
                key : "isValidLookup",
                value : function(r) {
                  return r !== void 0 &&
                      !(!this.options.returnNull && r === null) &&
                      !(!this.options.returnEmptyString && r === "")
                }
              },
              {
                key : "getResource",
                value : function(r, i, s) {
                  var l = arguments.length > 3 && arguments[3] !== void 0
                      ? arguments[3]
                      : {};
                  return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(r, i, s, l)
                      : this.resourceStore.getResource(r, i, s, l)
                }
              }
            ],
            [ {
              key : "hasDefaultValue",
              value : function(r) {
                var i = "defaultValue";
                for (var s in r)
                  if (Object.prototype.hasOwnProperty.call(r, s) &&
                      i === s.substring(0, i.length) && r[s] !== void 0)
                    return !0;
                return !1
              }
            } ]),
         n
}(tn);
function Di(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
var Da =
        function() {
  function e(t) {
    ct(this, e), this.options = t,
                 this.supportedLngs = this.options.supportedLngs || !1,
                 this.logger = yt.create("languageUtils")
  }
  return dt(e,
            [
              {
                key : "getScriptPartFromCode",
                value : function(n) {
                  if (!n || n.indexOf("-") < 0)
                    return null;
                  var o = n.split("-");
                  return o.length === 2 ||
                          (o.pop(), o[o.length - 1].toLowerCase() === "x")
                      ? null
                      : this.formatLanguageCode(o.join("-"))
                }
              },
              {
                key : "getLanguagePartFromCode",
                value : function(n) {
                  if (!n || n.indexOf("-") < 0)
                    return n;
                  var o = n.split("-");
                  return this.formatLanguageCode(o[0])
                }
              },
              {
                key : "formatLanguageCode",
                value : function(n) {
                  if (typeof n == "string" && n.indexOf("-") > -1) {
                    var o =
                            [
                              "hans",
                              "hant",
                              "latn",
                              "cyrl",
                              "cans",
                              "mong",
                              "arab"
                            ],
                        r = n.split("-");
                    return this.options.lowerCaseLng ? r = r.map(function(i) {
                      return i.toLowerCase()
                    })
                               : r.length === 2
                               ? (r[0] = r[0].toLowerCase(),
                                  r[1] = r[1].toUpperCase(),
                                  o.indexOf(r[1].toLowerCase()) > -1 &&
                                      (r[1] = Di(r[1].toLowerCase())))
                               : r.length === 3 &&
                                   (r[0] = r[0].toLowerCase(),
                                    r[1].length === 2 &&
                                        (r[1] = r[1].toUpperCase()),
                                    r[0] !== "sgn" && r[2].length === 2 &&
                                        (r[2] = r[2].toUpperCase()),
                                    o.indexOf(r[1].toLowerCase()) > -1 &&
                                        (r[1] = Di(r[1].toLowerCase())),
                                    o.indexOf(r[2].toLowerCase()) > -1 &&
                                        (r[2] = Di(r[2].toLowerCase()))),
                                                       r.join("-")
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                      ? n.toLowerCase()
                      : n
                }
              },
              {
                key : "isSupportedCode",
                value : function(n) {
                  return (this.options.load === "languageOnly" ||
                          this.options.nonExplicitSupportedLngs) &&
                             (n = this.getLanguagePartFromCode(n)),
                         !this.supportedLngs || !this.supportedLngs.length ||
                             this.supportedLngs.indexOf(n) > -1
                }
              },
              {
                key : "getBestMatchFromCodes",
                value : function(n) {
                  var o = this;
                  if (!n)
                    return null;
                  var r;
                  return n.forEach(function(i) {
                    if (!r) {
                      var s = o.formatLanguageCode(i);
                      (!o.options.supportedLngs || o.isSupportedCode(s)) &&
                          (r = s)
                    }
                  }),
                         !r && this.options.supportedLngs &&
                             n.forEach(function(i) {
                               if (!r) {
                                 var s = o.getLanguagePartFromCode(i);
                                 if (o.isSupportedCode(s))
                                   return r = s;
                                 r = o.options.supportedLngs.find(function(l) {
                                   if (l.indexOf(s) === 0)
                                     return l
                                 })
                               }
                             }),
                         r ||
                             (r = this.getFallbackCodes(
                                  this.options.fallbackLng)[0]),
                         r
                }
              },
              {
                key : "getFallbackCodes",
                value : function(n, o) {
                  if (!n)
                    return [];
                  if (typeof n == "function" && (n = n(o)),
                      typeof n == "string" && (n = [ n ]),
                      Object.prototype.toString.apply(n) === "[object Array]")
                    return n;
                  if (!o)
                    return n.default || [];
                  var r = n[o];
                  return r || (r = n[this.getScriptPartFromCode(o)]),
                         r || (r = n[this.formatLanguageCode(o)]),
                         r || (r = n[this.getLanguagePartFromCode(o)]),
                         r || (r = n.default), r || []
                }
              },
              {
                key : "toResolveHierarchy",
                value : function(n, o) {
                  var r = this,
                      i = this.getFallbackCodes(
                          o || this.options.fallbackLng || [], n),
                      s = [], l = function(u) {
                        u &&
                            (r.isSupportedCode(u)
                                 ? s.push(u)
                                 : r.logger.warn(
                                       "rejecting language code not found in supportedLngs: "
                                           .concat(u)))
                      };
                  return typeof n == "string" && n.indexOf("-") > -1
                             ? (this.options.load !== "languageOnly" &&
                                    l(this.formatLanguageCode(n)),
                                this.options.load !== "languageOnly" &&
                                    this.options.load !== "currentOnly" &&
                                    l(this.getScriptPartFromCode(n)),
                                this.options.load !== "currentOnly" &&
                                    l(this.getLanguagePartFromCode(n)))
                             : typeof n == "string" &&
                                 l(this.formatLanguageCode(n)),
                         i.forEach(function(a) {
                           s.indexOf(a) < 0 && l(r.formatLanguageCode(a))
                         }),
                         s
                }
              }
            ]),
         e
}(),
    Vf =
        [
          {
            lngs : [
              "ach", "ak",  "am", "arn", "br", "fil", "gun",
              "ln",  "mfe", "mg", "mi",  "oc", "pt",  "pt-BR",
              "tg",  "tl",  "ti", "tr",  "uz", "wa"
            ],
            nr : [ 1, 2 ],
            fc : 1
          },
          {
            lngs : [
              "af",  "an",  "ast", "az",    "bg", "bn",  "ca", "da",  "de",
              "dev", "el",  "en",  "eo",    "es", "et",  "eu", "fi",  "fo",
              "fur", "fy",  "gl",  "gu",    "ha", "hi",  "hu", "hy",  "ia",
              "it",  "kk",  "kn",  "ku",    "lb", "mai", "ml", "mn",  "mr",
              "nah", "nap", "nb",  "ne",    "nl", "nn",  "no", "nso", "pa",
              "pap", "pms", "ps",  "pt-PT", "rm", "sco", "se", "si",  "so",
              "son", "sq",  "sv",  "sw",    "ta", "te",  "tk", "ur",  "yo"
            ],
            nr : [ 1, 2 ],
            fc : 2
          },
          {
            lngs : [
              "ay", "bo", "cgg", "fa", "ht", "id", "ja",  "jbo",
              "ka", "km", "ko",  "ky", "lo", "ms", "sah", "su",
              "th", "tt", "ug",  "vi", "wo", "zh"
            ],
            nr : [ 1 ],
            fc : 3
          },
          {
            lngs : [ "be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk" ],
            nr : [ 1, 2, 5 ],
            fc : 4
          },
          {lngs : [ "ar" ], nr : [ 0, 1, 2, 3, 11, 100 ], fc : 5},
          {lngs : [ "cs", "sk" ], nr : [ 1, 2, 5 ], fc : 6},
          {lngs : [ "csb", "pl" ], nr : [ 1, 2, 5 ], fc : 7},
          {lngs : [ "cy" ], nr : [ 1, 2, 3, 8 ], fc : 8},
          {lngs : [ "fr" ], nr : [ 1, 2 ], fc : 9},
          {lngs : [ "ga" ], nr : [ 1, 2, 3, 7, 11 ], fc : 10},
          {lngs : [ "gd" ], nr : [ 1, 2, 3, 20 ], fc : 11},
          {lngs : [ "is" ], nr : [ 1, 2 ], fc : 12},
          {lngs : [ "jv" ], nr : [ 0, 1 ], fc : 13},
          {lngs : [ "kw" ], nr : [ 1, 2, 3, 4 ], fc : 14},
          {lngs : [ "lt" ], nr : [ 1, 2, 10 ], fc : 15},
          {lngs : [ "lv" ], nr : [ 1, 2, 0 ], fc : 16},
          {lngs : [ "mk" ], nr : [ 1, 2 ], fc : 17},
          {lngs : [ "mnk" ], nr : [ 0, 1, 2 ], fc : 18},
          {lngs : [ "mt" ], nr : [ 1, 2, 11, 20 ], fc : 19},
          {lngs : [ "or" ], nr : [ 2, 1 ], fc : 2},
          {lngs : [ "ro" ], nr : [ 1, 2, 20 ], fc : 20},
          {lngs : [ "sl" ], nr : [ 5, 1, 2, 3 ], fc : 21},
          {lngs : [ "he", "iw" ], nr : [ 1, 2, 20, 21 ], fc : 22}
        ],
    $f = {
      1 : function(t) {
        return +(t > 1)
      },
      2 : function(t) {
        return +(t != 1)
      },
      3 : function(t) {
        return 0
      },
      4 : function(t) {
        return t % 10 == 1 && t % 100 != 11                                 ? 0
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1
                                                                            : 2
      },
      5 : function(t) {
        return t == 0                       ? 0
            : t == 1                        ? 1
            : t == 2                        ? 2
            : t % 100 >= 3 && t % 100 <= 10 ? 3
            : t % 100 >= 11                 ? 4
                                            : 5
      },
      6 : function(t) {
        return t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2
      },
      7 : function(t) {
        return t == 1                                                       ? 0
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1
                                                                            : 2
      },
      8 : function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3
      },
      9 : function(t) {
        return +(t >= 2)
      },
      10 : function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4
      },
      11 : function(t) {
        return t == 1 || t == 11 ? 0
            : t == 2 || t == 12  ? 1
            : t > 2 && t < 20    ? 2
                                 : 3
      },
      12 : function(t) {
        return +(t % 10 != 1 || t % 100 == 11)
      },
      13 : function(t) {
        return +(t !== 0)
      },
      14 : function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3
      },
      15 : function(t) {
        return t % 10 == 1 && t % 100 != 11                  ? 0
            : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1
                                                             : 2
      },
      16 : function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2
      },
      17 : function(t) {
        return t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1
      },
      18 : function(t) {
        return t == 0 ? 0 : t == 1 ? 1 : 2
      },
      19 : function(t) {
        return t == 1                               ? 0
            : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1
            : t % 100 > 10 && t % 100 < 20          ? 2
                                                    : 3
      },
      20 : function(t) {
        return t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2
      },
      21 : function(t) {
        return t % 100 == 1                ? 1
            : t % 100 == 2                 ? 2
            : t % 100 == 3 || t % 100 == 4 ? 3
                                           : 0
      },
      22 : function(t) {
        return t == 1                          ? 0
            : t == 2                           ? 1
            : (t < 0 || t > 10) && t % 10 == 0 ? 2
                                               : 3
      }
    },
    Bf = [ "v1", "v2", "v3" ],
    Aa = {zero : 0, one : 1, two : 2, few : 3, many : 4, other : 5};
function Kf() {
  var e = {};
  return Vf.forEach(function(t) {
    t.lngs.forEach(function(n) {
      e[n] = { numbers : t.nr, plurals : $f[t.fc] }
    })
  }),
         e
}
var Hf = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ct(this, e), this.languageUtils = t, this.options = n,
                 this.logger = yt.create("pluralResolver"),
                 (!this.options.compatibilityJSON ||
                  this.options.compatibilityJSON === "v4") &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        (this.options.compatibilityJSON = "v3",
         this.logger.error(
             "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                 this.rules = Kf()
  }
  return dt(e,
            [
              {
                key : "addRule",
                value : function(n, o) {
                  this.rules[n] = o
                }
              },
              {
                key : "getRule",
                value : function(n) {
                  var o = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  if (this.shouldUseIntlApi())
                    try {
                      return new Intl.PluralRules(
                          n, {type : o.ordinal ? "ordinal" : "cardinal"})
                    } catch {
                      return
                    }
                  return this.rules[n] ||
                      this.rules[this.languageUtils.getLanguagePartFromCode(n)]
                }
              },
              {
                key : "needsPlural",
                value : function(n) {
                  var o = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                      r = this.getRule(n, o);
                  return this.shouldUseIntlApi()
                      ? r && r.resolvedOptions().pluralCategories.length > 1
                      : r && r.numbers.length > 1
                }
              },
              {
                key : "getPluralFormsOfKey",
                value : function(n, o) {
                  var r = arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  return this.getSuffixes(n, r).map(function(i) {
                    return "".concat(o).concat(i)
                  })
                }
              },
              {
                key : "getSuffixes",
                value : function(n) {
                  var o = this,
                      r = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                      i = this.getRule(n, r);
                  return i ? this.shouldUseIntlApi()
                          ? i.resolvedOptions()
                                .pluralCategories
                                .sort(function(s, l) {
                                  return Aa[s] - Aa[l]
                                })
                                .map(function(s) {
                                  return "".concat(o.options.prepend).concat(s)
                                })
                           : i.numbers.map(function(s) {
                              return o.getSuffix(n, s, r)
                            })
                           : []
                }
              },
              {
                key : "getSuffix",
                value : function(n, o) {
                  var r = arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {},
                      i = this.getRule(n, r);
                  return i ? this.shouldUseIntlApi()
                          ? "".concat(this.options.prepend).concat(i.select(o))
                          : this.getSuffixRetroCompatible(i, o)
                           : (this.logger.warn(
                                  "no plural rule found for: ".concat(n)),
                              "")
                }
              },
              {
                key : "getSuffixRetroCompatible",
                value : function(n, o) {
                  var r = this,
                      i = n.noAbs ? n.plurals(o) : n.plurals(Math.abs(o)),
                      s = n.numbers[i];
                  this.options.simplifyPluralSuffix && n.numbers.length === 2 &&
                      n.numbers[0] === 1 &&
                      (s === 2 ? s = "plural" : s === 1 && (s = ""));
                  var l = function() {
                    return r.options.prepend && s.toString()
                        ? r.options.prepend + s.toString()
                        : s.toString()
                  };
                  return this.options.compatibilityJSON === "v1" ? s === 1 ? ""
                          : typeof s == "number"
                          ? "_plural_".concat(s.toString())
                          : l()
                      : this.options.compatibilityJSON === "v2" ||
                          this.options.simplifyPluralSuffix &&
                              n.numbers.length === 2 && n.numbers[0] === 1
                      ? l()
                      : this.options.prepend && i.toString()
                      ? this.options.prepend + i.toString()
                      : i.toString()
                }
              },
              {
                key : "shouldUseIntlApi",
                value : function() {
                  return !Bf.includes(this.options.compatibilityJSON)
                }
              }
            ]),
         e
}();
function Ua(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ua(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ua(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
var Wf = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ct(this, e),
        this.logger = yt.create("interpolator"), this.options = t,
        this.format = t.interpolation && t.interpolation.format || function(n) {
          return n
        }, this.init(t)
  }
  return dt(e,
            [
              {
                key : "init",
                value : function() {
                  var n = arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  n.interpolation || (n.interpolation = {escapeValue : !0});
                  var o = n.interpolation;
                  this.escape = o.escape !== void 0 ? o.escape : Rf,
                  this.escapeValue =
                      o.escapeValue !== void 0 ? o.escapeValue : !0,
                  this.useRawValueToEscape = o.useRawValueToEscape !== void 0
                      ? o.useRawValueToEscape
                      : !1,
                  this.prefix =
                      o.prefix ? En(o.prefix) : o.prefixEscaped || "{{",
                  this.suffix =
                      o.suffix ? En(o.suffix) : o.suffixEscaped || "}}",
                  this.formatSeparator = o.formatSeparator
                      ? o.formatSeparator
                      : o.formatSeparator || ",",
                  this.unescapePrefix =
                      o.unescapeSuffix ? "" : o.unescapePrefix || "-",
                  this.unescapeSuffix =
                      this.unescapePrefix ? "" : o.unescapeSuffix || "",
                  this.nestingPrefix = o.nestingPrefix
                      ? En(o.nestingPrefix)
                      : o.nestingPrefixEscaped || En("$t("),
                  this.nestingSuffix = o.nestingSuffix
                      ? En(o.nestingSuffix)
                      : o.nestingSuffixEscaped || En(")"),
                  this.nestingOptionsSeparator = o.nestingOptionsSeparator
                      ? o.nestingOptionsSeparator
                      : o.nestingOptionsSeparator || ",",
                  this.maxReplaces = o.maxReplaces ? o.maxReplaces : 1e3,
                  this.alwaysFormat =
                      o.alwaysFormat !== void 0 ? o.alwaysFormat : !1,
                  this.resetRegExp()
                }
              },
              {
                key : "reset",
                value : function() {
                  this.options && this.init(this.options)
                }
              },
              {
                key : "resetRegExp",
                value : function() {
                  var n = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                  this.regexp = new RegExp(n, "g");
                  var o = "".concat(this.prefix)
                              .concat(this.unescapePrefix, "(.+?)")
                              .concat(this.unescapeSuffix)
                              .concat(this.suffix);
                  this.regexpUnescape = new RegExp(o, "g");
                  var r = "".concat(this.nestingPrefix, "(.+?)")
                              .concat(this.nestingSuffix);
                  this.nestingRegexp = new RegExp(r, "g")
                }
              },
              {
                key : "interpolate",
                value : function(n, o, r, i) {
                  var s = this, l, a, u,
                      f = this.options && this.options.interpolation &&
                          this.options.interpolation.defaultVariables ||
                      {};
                  function d(O) {
                    return O.replace(/\$/g, "$$$$")
                  }
                  var h = function(p) {
                    if (p.indexOf(s.formatSeparator) < 0) {
                      var c = Ta(o, f, p);
                      return s.alwaysFormat
                          ? s.format(c, void 0, r, nt(nt(nt({}, i), o), {}, {
                                       interpolationkey : p
                                     }))
                          : c
                    }
                    var g = p.split(s.formatSeparator), k = g.shift().trim(),
                        _ = g.join(s.formatSeparator).trim();
                    return s.format(
                        Ta(o, f, k),
                        _,
                        r,
                        nt(nt(nt({}, i), o), {}, {interpolationkey : k}))
                  };
                  this.resetRegExp();
                  var m = i && i.missingInterpolationHandler ||
                      this.options.missingInterpolationHandler,
                      v = i && i.interpolation &&
                          i.interpolation.skipOnVariables !== void 0
                      ? i.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables,
                      w = [
                        {
                          regex : this.regexpUnescape,
                          safeValue : function(p) {
                            return d(p)
                          }
                        },
                        {
                          regex : this.regexp,
                          safeValue : function(p) {
                            return s.escapeValue ? d(s.escape(p)) : d(p)
                          }
                        }
                      ];
                  return w.forEach(function(O) {
                    for (u = 0; l = O.regex.exec(n);) {
                      var p = l[1].trim();
                      if (a = h(p), a === void 0)
                        if (typeof m == "function") {
                          var c = m(n, l, i);
                          a = typeof c == "string" ? c : ""
                        } else if (
                            i && Object.prototype.hasOwnProperty.call(i, p))
                          a = "";
                        else if (v) {
                          a = l[0];
                          continue
                        } else
                          s.logger.warn("missed to pass in variable "
                                            .concat(p, " for interpolating ")
                                            .concat(n)),
                              a = "";
                      else
                        typeof a != "string" && !s.useRawValueToEscape &&
                            (a = ba(a));
                      var g = O.safeValue(a);
                      if (n = n.replace(l[0], g),
                          v ? (O.regex.lastIndex += a.length,
                               O.regex.lastIndex -= l[0].length)
                            : O.regex.lastIndex = 0,
                          u++,
                          u >= s.maxReplaces)
                        break
                    }
                  }),
                         n
                }
              },
              {
                key : "nest",
                value : function(n, o) {
                  var r = this,
                      i = arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {},
                      s, l, a;
                  function u(m, v) {
                    var w = this.nestingOptionsSeparator;
                    if (m.indexOf(w) < 0)
                      return m;
                    var O = m.split(new RegExp("".concat(w, "[ ]*{"))),
                        p = "{".concat(O[1]);
                    m = O[0], p = this.interpolate(p, a);
                    var c = p.match(/'/g), g = p.match(/"/g);
                    (c && c.length % 2 === 0 && !g || g.length % 2 !== 0) &&
                        (p = p.replace(/'/g, '"'));
                    try {
                      a = JSON.parse(p), v && (a = nt(nt({}, v), a))
                    } catch (k) {
                      return this.logger.warn(
                                 "failed parsing options string in nesting for key "
                                     .concat(m),
                                 k),
                             "".concat(m).concat(w).concat(p)
                    }
                    return delete a.defaultValue, m
                  }
                  for (; s = this.nestingRegexp.exec(n);) {
                    var f = [];
                    a = nt({}, i),
                    a = a.replace && typeof a.replace != "string" ? a.replace
                                                                  : a,
                    a.applyPostProcessor = !1, delete a.defaultValue;
                    var d = !1;
                    if (s[0].indexOf(this.formatSeparator) !== -1 &&
                        !/{.*}/.test(s[1])) {
                      var h = s[1].split(this.formatSeparator).map(function(m) {
                        return m.trim()
                      });
                      s[1] = h.shift(), f = h, d = !0
                    }
                    if (l = o(u.call(this, s[1].trim(), a), a),
                        l && s[0] === n && typeof l != "string")
                      return l;
                    typeof l != "string" && (l = ba(l)),
                        l ||
                        (this.logger.warn(
                             "missed to resolve ".concat(s[1], " for nesting ")
                                 .concat(n)),
                         l = ""),
                        d &&
                        (l = f.reduce(
                             function(m, v) {
                               return r.format(m, v, i.lng, nt(nt({}, i), {}, {
                                                 interpolationkey : s[1].trim()
                                               }))
                             },
                             l.trim())),
                        n = n.replace(s[0], l), this.regexp.lastIndex = 0
                  }
                  return n
                }
              }
            ]),
         e
}();
function Ma(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ma(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ma(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function Yf(e) {
  var t = e.toLowerCase().trim(), n = {};
  if (e.indexOf("(") > -1) {
    var o = e.split("(");
    t = o[0].toLowerCase().trim();
    var r = o[1].substring(0, o[1].length - 1);
    if (t === "currency" && r.indexOf(":") < 0)
      n.currency || (n.currency = r.trim());
    else if (t === "relativetime" && r.indexOf(":") < 0)
      n.range || (n.range = r.trim());
    else {
      var i = r.split(";");
      i.forEach(function(s) {
        if (s) {
          var l = s.split(":"), a = Ef(l), u = a[0], f = a.slice(1),
              d = f.join(":").trim().replace(/^'+|'+$/g, "");
          n[u.trim()] || (n[u.trim()] = d), d === "false" && (n[u.trim()] = !1),
              d === "true" && (n[u.trim()] = !0),
              isNaN(d) || (n[u.trim()] = parseInt(d, 10))
        }
      })
    }
  }
  return {
    formatName: t, formatOptions: n
  }
}
function Cn(e) {
  var t = {};
  return function(o, r, i) {
    var s = r + JSON.stringify(i), l = t[s];
    return l || (l = e(r, i), t[s] = l), l(o)
  }
}
var Gf = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ct(this, e), this.logger = yt.create("formatter"), this.options = t,
                 this.formats = {
                   number : Cn(function(n, o) {
                     var r = new Intl.NumberFormat(n, Et({}, o));
                     return function(i) {
                       return r.format(i)
                     }
                   }),
                   currency : Cn(function(n, o) {
                     var r = new Intl.NumberFormat(
                         n, Et(Et({}, o), {}, {style : "currency"}));
                     return function(i) {
                       return r.format(i)
                     }
                   }),
                   datetime : Cn(function(n, o) {
                     var r = new Intl.DateTimeFormat(n, Et({}, o));
                     return function(i) {
                       return r.format(i)
                     }
                   }),
                   relativetime : Cn(function(n, o) {
                     var r = new Intl.RelativeTimeFormat(n, Et({}, o));
                     return function(i) {
                       return r.format(i, o.range || "day")
                     }
                   }),
                   list : Cn(function(n, o) {
                     var r = new Intl.ListFormat(n, Et({}, o));
                     return function(i) {
                       return r.format(i)
                     }
                   })
                 },
                 this.init(t)
  }
  return dt(e,
            [
              {
                key : "init",
                value : function(n) {
                  var o = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {interpolation : {}},
                      r = o.interpolation;
                  this.formatSeparator = r.formatSeparator
                      ? r.formatSeparator
                      : r.formatSeparator || ","
                }
              },
              {
                key : "add",
                value : function(n, o) {
                  this.formats[n.toLowerCase().trim()] = o
                }
              },
              {
                key : "addCached",
                value : function(n, o) {
                  this.formats[n.toLowerCase().trim()] = Cn(o)
                }
              },
              {
                key : "format",
                value : function(n, o, r) {
                  var i = this,
                      s = arguments.length > 3 && arguments[3] !== void 0
                      ? arguments[3]
                      : {},
                      l = o.split(this.formatSeparator),
                      a = l.reduce(function(u, f) {
                        var d = Yf(f), h = d.formatName, m = d.formatOptions;
                        if (i.formats[h]) {
                          var v = u;
                          try {
                            var w = s && s.formatParams &&
                                    s.formatParams[s.interpolationkey] ||
                                {},
                                O = w.locale || w.lng || s.locale || s.lng || r;
                            v = i.formats[h](u, O, Et(Et(Et({}, m), s), w))
                          } catch (p) {
                            i.logger.warn(p)
                          }
                          return v
                        } else
                          i.logger.warn(
                              "there was no format function for ".concat(h));
                        return u
                      }, n);
                  return a
                }
              }
            ]),
         e
}();
function za(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function Va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? za(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : za(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function Qf(e) {
  var t = Xf();
  return function() {
    var o = Ot(e), r;
    if (t) {
      var i = Ot(this).constructor;
      r = Reflect.construct(o, arguments, i)
    } else
      r = o.apply(this, arguments);
    return Xo(this, r)
  }
}
function Xf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(
               Reflect.construct(Boolean, [], function() {})),
           !0
  } catch {
    return !1
  }
}
function Jf(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
var Zf = function(e) {
  gi(n, e);
  var t = Qf(n);
  function n(o, r, i) {
    var s,
        l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return ct(this, n),
           s = t.call(this), mi && tn.call(Wt(s)), s.backend = o, s.store = r,
           s.services = i, s.languageUtils = i.languageUtils, s.options = l,
           s.logger = yt.create("backendConnector"), s.waitingReads = [],
           s.maxParallelReads = l.maxParallelReads || 10, s.readingCalls = 0,
           s.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5,
           s.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350,
           s.state = {}, s.queue = [],
           s.backend && s.backend.init && s.backend.init(i, l.backend, l), s
  }
  return dt(n,
            [
              {
                key : "queueLoad",
                value : function(r, i, s, l) {
                  var a = this, u = {}, f = {}, d = {}, h = {};
                  return r.forEach(function(m) {
                    var v = !0;
                    i.forEach(function(w) {
                      var O = "".concat(m, "|").concat(w);
                      !s.reload && a.store.hasResourceBundle(m, w)
                          ? a.state[O] = 2
                          : a.state[O] < 0 ||
                              (a.state[O] === 1
                                   ? f[O] === void 0 && (f[O] = !0)
                                   : (a.state[O] = 1,
                                      v = !1,
                                      f[O] === void 0 && (f[O] = !0),
                                      u[O] === void 0 && (u[O] = !0),
                                      h[w] === void 0 && (h[w] = !0)))
                    }),
                        v || (d[m] = !0)
                  }),
                         (Object.keys(u).length || Object.keys(f).length) &&
                             this.queue.push({
                               pending : f,
                               pendingCount : Object.keys(f).length,
                               loaded : {},
                               errors : [],
                               callback : l
                             }),
                  {
                    toLoad: Object.keys(u), pending: Object.keys(f),
                        toLoadLanguages: Object.keys(d),
                        toLoadNamespaces: Object.keys(h)
                  }
                }
              },
              {
                key : "loaded",
                value : function(r, i, s) {
                  var l = r.split("|"), a = l[0], u = l[1];
                  i && this.emit("failedLoading", a, u, i),
                      s && this.store.addResourceBundle(a, u, s),
                      this.state[r] = i ? -1 : 2;
                  var f = {};
                  this.queue.forEach(function(d) {
                    Tf(d.loaded, [ a ], u), Jf(d, r), i && d.errors.push(i),
                        d.pendingCount === 0 && !d.done &&
                        (Object.keys(d.loaded).forEach(function(h) {
                          f[h] || (f[h] = {});
                          var m = d.loaded[h];
                          m.length && m.forEach(function(v) {
                            f[h][v] === void 0 && (f[h][v] = !0)
                          })
                        }),
                         d.done = !0,
                         d.errors.length ? d.callback(d.errors) : d.callback())
                  }),
                      this.emit("loaded", f),
                      this.queue = this.queue.filter(function(d) {
                        return !d.done
                      })
                }
              },
              {
                key : "read",
                value : function(r, i, s) {
                  var l = this,
                      a = arguments.length > 3 && arguments[3] !== void 0
                      ? arguments[3]
                      : 0,
                      u = arguments.length > 4 && arguments[4] !== void 0
                      ? arguments[4]
                      : this.retryTimeout,
                      f = arguments.length > 5 ? arguments[5] : void 0;
                  if (!r.length)
                    return f(null, {});
                  if (this.readingCalls >= this.maxParallelReads) {
                    this.waitingReads.push({
                      lng : r,
                      ns : i,
                      fcName : s,
                      tried : a,
                      wait : u,
                      callback : f
                    });
                    return
                  }
                  this.readingCalls++;
                  var d = function(w, O) {
                    if (l.readingCalls--, l.waitingReads.length > 0) {
                      var p = l.waitingReads.shift();
                      l.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback)
                    }
                    if (w && O && a < l.maxRetries) {
                      setTimeout(function() {
                        l.read.call(l, r, i, s, a + 1, u * 2, f)
                      }, u);
                      return
                    }
                    f(w, O)
                  }, h = this.backend[s].bind(this.backend);
                  if (h.length === 2) {
                    try {
                      var m = h(r, i);
                      m && typeof m.then == "function" ? m.then(function(v) {
                                                            return d(null, v)
                                                          }).catch(d)
                                                       : d(null, m)
                    } catch (v) {
                      d(v)
                    }
                    return
                  }
                  return h(r, i, d)
                }
              },
              {
                key : "prepareLoading",
                value : function(r, i) {
                  var s = this,
                      l = arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {},
                      a = arguments.length > 3 ? arguments[3] : void 0;
                  if (!this.backend)
                    return this.logger.warn(
                               "No backend was added via i18next.use. Will not load resources."),
                           a && a();
                  typeof r == "string" &&
                      (r = this.languageUtils.toResolveHierarchy(r)),
                      typeof i == "string" && (i = [ i ]);
                  var u = this.queueLoad(r, i, l, a);
                  if (!u.toLoad.length)
                    return u.pending.length || a(), null;
                  u.toLoad.forEach(function(f) {
                    s.loadOne(f)
                  })
                }
              },
              {
                key : "load",
                value : function(r, i, s) {
                  this.prepareLoading(r, i, {}, s)
                }
              },
              {
                key : "reload",
                value : function(r, i, s) {
                  this.prepareLoading(r, i, {reload : !0}, s)
                }
              },
              {
                key : "loadOne",
                value : function(r) {
                  var i = this,
                      s = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : "",
                      l = r.split("|"), a = l[0], u = l[1];
                  this.read(a, u, "read", void 0, void 0, function(f, d) {
                    f &&
                        i.logger.warn(
                            "".concat(s, "loading namespace ")
                                .concat(u, " for language ")
                                .concat(a, " failed"),
                            f),
                        !f && d &&
                        i.logger.log(
                            "".concat(s, "loaded namespace ")
                                .concat(u, " for language ")
                                .concat(a),
                            d),
                        i.loaded(r, f, d)
                  })
                }
              },
              {
                key : "saveMissing",
                value : function(r, i, s, l, a) {
                  var u = arguments.length > 5 && arguments[5] !== void 0
                      ? arguments[5]
                      : {},
                      f = arguments.length > 6 && arguments[6] !== void 0
                      ? arguments[6]
                      : function() {};
                  if (this.services.utils &&
                      this.services.utils.hasLoadedNamespace &&
                      !this.services.utils.hasLoadedNamespace(i)) {
                    this.logger.warn(
                        'did not save key "'.concat(s, '" as the namespace "')
                            .concat(i, '" was not yet loaded'),
                        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    return
                  }
                  if (!(s == null || s === "")) {
                    if (this.backend && this.backend.create) {
                      var d = Va(Va({}, u), {}, {isUpdate : a}),
                          h = this.backend.create.bind(this.backend);
                      if (h.length < 6)
                        try {
                          var m;
                          h.length === 5 ? m = h(r, i, s, l, d)
                                         : m = h(r, i, s, l),
                                           m && typeof m.then == "function"
                              ? m.then(function(v) {
                                   return f(null, v)
                                 }).catch(f)
                              : f(null, m)
                        } catch (v) {
                          f(v)
                        }
                      else
                        h(r, i, s, l, f, d)
                    }
                    !r || !r[0] || this.store.addResource(r[0], i, s, l)
                  }
                }
              }
            ]),
         n
}(tn);
function $a() {
  return {
    debug: !1, initImmediate: !0, ns: [ "translation" ],
        defaultNS: [ "translation" ], fallbackLng: [ "dev" ], fallbackNS: !1,
        supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all",
        preload: !1, simplifyPluralSuffix: !0, keySeparator: ".",
        nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_",
        partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1,
        saveMissingTo: "fallback", saveMissingPlurals: !0,
        missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1,
        postProcessPassResolved: !1, returnNull: !0, returnEmptyString: !0,
        returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1,
        parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
          var n = {};
          if (de(t[1]) === "object" && (n = t[1]),
              typeof t[1] == "string" && (n.defaultValue = t[1]),
              typeof t[2] == "string" && (n.tDescription = t[2]),
              de(t[2]) === "object" || de(t[3]) === "object") {
            var o = t[3] || t[2];
            Object.keys(o).forEach(function(r) {
              n[r] = o[r]
            })
          }
          return n
        }, interpolation: {
          escapeValue: !0,
          format : function(t, n, o, r) {
            return t
          },
          prefix : "{{",
          suffix : "}}",
          formatSeparator : ",",
          unescapePrefix : "-",
          nestingPrefix : "$t(",
          nestingSuffix : ")",
          nestingOptionsSeparator : ",",
          maxReplaces : 1e3,
          skipOnVariables : !0
        }
  }
}
function Ba(e) {
  return typeof e.ns == "string" && (e.ns = [ e.ns ]),
         typeof e.fallbackLng == "string" &&
             (e.fallbackLng = [ e.fallbackLng ]),
         typeof e.fallbackNS == "string" && (e.fallbackNS = [ e.fallbackNS ]),
         e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 &&
             (e.supportedLngs = e.supportedLngs.concat([ "cimode" ])),
         e
}
function Ka(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ka(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ka(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function qf(e) {
  var t = eh();
  return function() {
    var o = Ot(e), r;
    if (t) {
      var i = Ot(this).constructor;
      r = Reflect.construct(o, arguments, i)
    } else
      r = o.apply(this, arguments);
    return Xo(this, r)
  }
}
function eh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(
               Reflect.construct(Boolean, [], function() {})),
           !0
  } catch {
    return !1
  }
}
function lr() {}
function th(e) {
  var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
  t.forEach(function(n) {
    typeof e[n] == "function" && (e[n] = e[n].bind(e))
  })
}
var $r = function(e) {
  gi(n, e);
  var t = qf(n);
  function n() {
    var o,
        r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        i = arguments.length > 1 ? arguments[1] : void 0;
    if (ct(this, n),
        o = t.call(this),
        mi && tn.call(Wt(o)),
        o.options = Ba(r),
        o.services = {},
        o.logger = yt,
        o.modules = {external : []},
        th(Wt(o)),
        i && !o.isInitialized && !r.isClone) {
      if (!o.options.initImmediate)
        return o.init(r, i), Xo(o, Wt(o));
      setTimeout(function() {
        o.init(r, i)
      }, 0)
    }
    return o
  }
  return dt(n,
            [
              {
                key : "init",
                value : function() {
                  var r = this,
                      i = arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                      s = arguments.length > 1 ? arguments[1] : void 0;
                  typeof i == "function" && (s = i, i = {}),
                      !i.defaultNS && i.defaultNS !== !1 && i.ns &&
                      (typeof i.ns == "string"
                           ? i.defaultNS = i.ns
                           : i.ns.indexOf("translation") < 0 &&
                               (i.defaultNS = i.ns[0]));
                  var l = $a();
                  this.options = ht(ht(ht({}, l), this.options), Ba(i)),
                  this.options.compatibilityAPI !== "v1" &&
                      (this.options.interpolation =
                           ht(ht({}, l.interpolation),
                              this.options.interpolation)),
                  i.keySeparator !== void 0 &&
                      (this.options.userDefinedKeySeparator = i.keySeparator),
                  i.nsSeparator !== void 0 &&
                      (this.options.userDefinedNsSeparator = i.nsSeparator);
                  function a(p) {
                    return p ? typeof p == "function" ? new p : p : null
                  }
                  if (!this.options.isClone) {
                    this.modules.logger
                        ? yt.init(a(this.modules.logger), this.options)
                        : yt.init(null, this.options);
                    var u;
                    this.modules.formatter ? u = this.modules.formatter
                                           : typeof Intl < "u" && (u = Gf);
                    var f = new Da(this.options);
                    this.store = new Uf(this.options.resources, this.options);
                    var d = this.services;
                    d.logger = yt, d.resourceStore = this.store,
                    d.languageUtils = f,
                    d.pluralResolver = new Hf(f, {
                      prepend : this.options.pluralSeparator,
                      compatibilityJSON : this.options.compatibilityJSON,
                      simplifyPluralSuffix : this.options.simplifyPluralSuffix
                    }),
                    u &&
                        (!this.options.interpolation.format ||
                         this.options.interpolation.format ===
                             l.interpolation.format) &&
                        (d.formatter = a(u),
                         d.formatter.init(d, this.options),
                         this.options.interpolation.format =
                             d.formatter.format.bind(d.formatter)),
                    d.interpolator = new Wf(this.options), d.utils = {
                      hasLoadedNamespace : this.hasLoadedNamespace.bind(this)
                    },
                    d.backendConnector = new Zf(
                        a(this.modules.backend),
                        d.resourceStore,
                        d,
                        this.options),
                    d.backendConnector.on(
                        "*",
                        function(p) {
                          for (var c = arguments.length,
                                   g = new Array(c > 1 ? c - 1 : 0),
                                   k = 1;
                               k < c;
                               k++)
                            g[k - 1] = arguments[k];
                          r.emit.apply(r, [ p ].concat(g))
                        }),
                    this.modules.languageDetector &&
                        (d.languageDetector = a(this.modules.languageDetector),
                         d.languageDetector.init &&
                             d.languageDetector.init(
                                 d, this.options.detection, this.options)),
                    this.modules.i18nFormat &&
                        (d.i18nFormat = a(this.modules.i18nFormat),
                         d.i18nFormat.init && d.i18nFormat.init(this)),
                    this.translator = new Fa(this.services, this.options),
                    this.translator.on("*", function(p) {
                      for (var c = arguments.length,
                               g = new Array(c > 1 ? c - 1 : 0),
                               k = 1;
                           k < c;
                           k++)
                        g[k - 1] = arguments[k];
                      r.emit.apply(r, [ p ].concat(g))
                    }), this.modules.external.forEach(function(p) {
                      p.init && p.init(r)
                    })
                  }
                  if (this.format = this.options.interpolation.format,
                      s || (s = lr),
                      this.options.fallbackLng &&
                          !this.services.languageDetector &&
                          !this.options.lng) {
                    var h = this.services.languageUtils.getFallbackCodes(
                        this.options.fallbackLng);
                    h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0])
                  }
                  !this.services.languageDetector && !this.options.lng &&
                      this.logger.warn(
                          "init: no languageDetector is used and no lng is defined");
                  var m = [
                    "getResource",
                    "hasResourceBundle",
                    "getResourceBundle",
                    "getDataByLanguage"
                  ];
                  m.forEach(function(p) {
                    r[p] = function() {
                      var c;
                      return (c = r.store)[p].apply(c, arguments)
                    }
                  });
                  var v = [
                    "addResource",
                    "addResources",
                    "addResourceBundle",
                    "removeResourceBundle"
                  ];
                  v.forEach(function(p) {
                    r[p] = function() {
                      var c;
                      return (c = r.store)[p].apply(c, arguments), r
                    }
                  });
                  var w = lo(), O = function() {
                    var c = function(k, _) {
                      r.isInitialized && !r.initializedStoreOnce &&
                          r.logger.warn(
                              "init: i18next is already initialized. You should call init just once!"),
                          r.isInitialized = !0,
                          r.options.isClone ||
                          r.logger.log("initialized", r.options),
                          r.emit("initialized", r.options), w.resolve(_),
                          s(k, _)
                    };
                    if (r.languages && r.options.compatibilityAPI !== "v1" &&
                        !r.isInitialized)
                      return c(null, r.t.bind(r));
                    r.changeLanguage(r.options.lng, c)
                  };
                  return this.options.resources || !this.options.initImmediate
                             ? O()
                             : setTimeout(O, 0),
                         w
                }
              },
              {
                key : "loadResources",
                value : function(r) {
                  var i = this,
                      s = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : lr,
                      l = s, a = typeof r == "string" ? r : this.language;
                  if (typeof r == "function" && (l = r),
                      !this.options.resources ||
                          this.options.partialBundledLanguages) {
                    if (a && a.toLowerCase() === "cimode")
                      return l();
                    var u = [], f = function(m) {
                      if (m) {
                        var v = i.services.languageUtils.toResolveHierarchy(m);
                        v.forEach(function(w) {
                          u.indexOf(w) < 0 && u.push(w)
                        })
                      }
                    };
                    if (a)
                      f(a);
                    else {
                      var d = this.services.languageUtils.getFallbackCodes(
                          this.options.fallbackLng);
                      d.forEach(function(h) {
                        return f(h)
                      })
                    }
                    this.options.preload &&
                        this.options.preload.forEach(function(h) {
                          return f(h)
                        }),
                        this.services.backendConnector.load(
                            u, this.options.ns, function(h) {
                              !h && !i.resolvedLanguage && i.language &&
                                  i.setResolvedLanguage(i.language),
                                  l(h)
                            })
                  } else
                    l(null)
                }
              },
              {
                key : "reloadResources",
                value : function(r, i, s) {
                  var l = lo();
                  return r || (r = this.languages), i || (i = this.options.ns),
                         s || (s = lr),
                         this.services.backendConnector.reload(
                             r,
                             i,
                             function(a) {
                               l.resolve(), s(a)
                             }),
                         l
                }
              },
              {
                key : "use",
                value : function(r) {
                  if (!r)
                    throw new Error(
                        "You are passing an undefined module! Please check the object you are passing to i18next.use()");
                  if (!r.type)
                    throw new Error(
                        "You are passing a wrong module! Please check the object you are passing to i18next.use()");
                  return r.type === "backend" && (this.modules.backend = r),
                         (r.type === "logger" || r.log && r.warn && r.error) &&
                             (this.modules.logger = r),
                         r.type === "languageDetector" &&
                             (this.modules.languageDetector = r),
                         r.type === "i18nFormat" &&
                             (this.modules.i18nFormat = r),
                         r.type === "postProcessor" && Cc.addPostProcessor(r),
                         r.type === "formatter" && (this.modules.formatter = r),
                         r.type === "3rdParty" && this.modules.external.push(r),
                         this
                }
              },
              {
                key : "setResolvedLanguage",
                value : function(r) {
                  if (!(!r || !this.languages) &&
                      !([ "cimode", "dev" ].indexOf(r) > -1))
                    for (var i = 0; i < this.languages.length; i++) {
                      var s = this.languages[i];
                      if (!([ "cimode", "dev" ].indexOf(s) > -1) &&
                          this.store.hasLanguageSomeTranslations(s)) {
                        this.resolvedLanguage = s;
                        break
                      }
                    }
                }
              },
              {
                key : "changeLanguage",
                value : function(r, i) {
                  var s = this;
                  this.isLanguageChangingTo = r;
                  var l = lo();
                  this.emit("languageChanging", r);
                  var a = function(h) {
                    s.language = h,
                    s.languages =
                        s.services.languageUtils.toResolveHierarchy(h),
                    s.resolvedLanguage = void 0, s.setResolvedLanguage(h)
                  }, u = function(h, m) {
                    m ? (a(m),
                         s.translator.changeLanguage(m),
                         s.isLanguageChangingTo = void 0,
                         s.emit("languageChanged", m),
                         s.logger.log("languageChanged", m))
                      : s.isLanguageChangingTo = void 0,
                        l.resolve(function() {
                          return s.t.apply(s, arguments)
                        }),
                        i && i(h, function() {
                          return s.t.apply(s, arguments)
                        })
                  }, f = function(h) {
                    !r && !h && s.services.languageDetector && (h = []);
                    var m = typeof h == "string"
                        ? h
                        : s.services.languageUtils.getBestMatchFromCodes(h);
                    m &&
                        (s.language || a(m),
                         s.translator.language ||
                             s.translator.changeLanguage(m),
                         s.services.languageDetector &&
                             s.services.languageDetector.cacheUserLanguage &&
                             s.services.languageDetector.cacheUserLanguage(m)),
                        s.loadResources(m, function(v) {
                          u(v, m)
                        })
                  };
                  return!r&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(r),l
                }
              },
              {
                key : "getFixedT",
                value : function(r, i, s) {
                  var l = this, a = function u(f, d) {
                    var h;
                    if (de(d) !== "object") {
                      for (var m = arguments.length,
                               v = new Array(m > 2 ? m - 2 : 0),
                               w = 2;
                           w < m;
                           w++)
                        v[w - 2] = arguments[w];
                      h = l.options.overloadTranslationOptionHandler(
                          [ f, d ].concat(v))
                    } else
                      h = ht({}, d);
                    h.lng = h.lng || u.lng, h.lngs = h.lngs || u.lngs,
                    h.ns = h.ns || u.ns,
                    h.keyPrefix = h.keyPrefix || s || u.keyPrefix;
                    var O = l.options.keySeparator || ".", p;
                    return h.keyPrefix && Array.isArray(f) ? p = f.map(function(
                                                                 c) {
                      return "".concat(h.keyPrefix).concat(O).concat(c)
                    })
                                                           : p = h.keyPrefix
                                   ? "".concat(h.keyPrefix).concat(O).concat(f)
                                   : f,
                                                             l.t(p, h)
                  };
                  return typeof r == "string" ? a.lng = r : a.lngs = r,
                                                a.ns = i, a.keyPrefix = s, a
                }
              },
              {
                key : "t",
                value : function() {
                  var r;
                  return this.translator &&
                      (r = this.translator).translate.apply(r, arguments)
                }
              },
              {
                key : "exists",
                value : function() {
                  var r;
                  return this.translator &&
                      (r = this.translator).exists.apply(r, arguments)
                }
              },
              {
                key : "setDefaultNamespace",
                value : function(r) {
                  this.options.defaultNS = r
                }
              },
              {
                key : "hasLoadedNamespace",
                value : function(r) {
                  var i = this,
                      s = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  if (!this.isInitialized)
                    return this.logger.warn(
                               "hasLoadedNamespace: i18next was not initialized",
                               this.languages),
                           !1;
                  if (!this.languages || !this.languages.length)
                    return this.logger.warn(
                               "hasLoadedNamespace: i18n.languages were undefined or empty",
                               this.languages),
                           !1;
                  var l = this.resolvedLanguage || this.languages[0],
                      a = this.options ? this.options.fallbackLng : !1,
                      u = this.languages[this.languages.length - 1];
                  if (l.toLowerCase() === "cimode")
                    return !0;
                  var f = function(m, v) {
                    var w = i.services.backendConnector
                                .state["".concat(m, "|").concat(v)];
                    return w === -1 || w === 2
                  };
                  if (s.precheck) {
                    var d = s.precheck(this, f);
                    if (d !== void 0)
                      return d
                  }
                  return !!(
                      this.hasResourceBundle(l, r) ||
                      !this.services.backendConnector.backend ||
                      this.options.resources &&
                          !this.options.partialBundledLanguages ||
                      f(l, r) && (!a || f(u, r)))
                }
              },
              {
                key : "loadNamespaces",
                value : function(r, i) {
                  var s = this, l = lo();
                  return this.options.ns
                      ? (typeof r == "string" && (r = [ r ]),
                         r.forEach(function(a) {
                           s.options.ns.indexOf(a) < 0 && s.options.ns.push(a)
                         }),
                         this.loadResources(function(a) {
                           l.resolve(), i && i(a)
                         }),
                         l)
                      : (i && i(), Promise.resolve())
                }
              },
              {
                key : "loadLanguages",
                value : function(r, i) {
                  var s = lo();
                  typeof r == "string" && (r = [ r ]);
                  var l = this.options.preload || [], a = r.filter(function(u) {
                    return l.indexOf(u) < 0
                  });
                  return a.length ? (this.options.preload = l.concat(a),
                                     this.loadResources(function(u) {
                                       s.resolve(), i && i(u)
                                     }),
                                     s)
                                  : (i && i(), Promise.resolve())
                }
              },
              {
                key : "dir",
                value : function(r) {
                  if (r ||
                          (r = this.resolvedLanguage ||
                               (this.languages && this.languages.length > 0
                                    ? this.languages[0]
                                    : this.language)),
                      !r)
                    return "rtl";
                  var i =
                          [
                            "ar",  "shu", "sqr", "ssh", "xaa", "yhd", "yud",
                            "aao", "abh", "abv", "acm", "acq", "acw", "acx",
                            "acy", "adf", "ads", "aeb", "aec", "afb", "ajp",
                            "apc", "apd", "arb", "arq", "ars", "ary", "arz",
                            "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz",
                            "pga", "he",  "iw",  "ps",  "pbt", "pbu", "pst",
                            "prp", "prd", "ug",  "ur",  "ydd", "yds", "yih",
                            "ji",  "yi",  "hbo", "men", "xmn", "fa",  "jpr",
                            "peo", "pes", "prs", "dv",  "sam", "ckb"
                          ],
                      s = this.services && this.services.languageUtils ||
                      new Da($a());
                  return i.indexOf(s.getLanguagePartFromCode(r)) > -1 ||
                          r.toLowerCase().indexOf("-arab") > 1
                      ? "rtl"
                      : "ltr"
                }
              },
              {
                key : "cloneInstance",
                value : function() {
                  var r = this,
                      i = arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                      s = arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : lr,
                      l = ht(ht(ht({}, this.options), i), {isClone : !0}),
                      a = new n(l);
                  (i.debug !== void 0 || i.prefix !== void 0) &&
                      (a.logger = a.logger.clone(i));
                  var u = [ "store", "services", "language" ];
                  return u.forEach(function(f) {
                    a[f] = r[f]
                  }),
                         a.services = ht({}, this.services),
                         a.services.utils = {
                           hasLoadedNamespace : a.hasLoadedNamespace.bind(a)
                         },
                         a.translator = new Fa(a.services, a.options),
                         a.translator.on(
                             "*",
                             function(f) {
                               for (var d = arguments.length,
                                        h = new Array(d > 1 ? d - 1 : 0),
                                        m = 1;
                                    m < d;
                                    m++)
                                 h[m - 1] = arguments[m];
                               a.emit.apply(a, [ f ].concat(h))
                             }),
                         a.init(l, s), a.translator.options = a.options,
                         a.translator.backendConnector.services.utils = {
                           hasLoadedNamespace : a.hasLoadedNamespace.bind(a)
                         },
                         a
                }
              },
              {
                key : "toJSON",
                value : function() {
                  return {
                    options: this.options, store: this.store,
                        language: this.language, languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                  }
                }
              }
            ]),
         n
}(tn);
Je($r, "createInstance", function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
  return new $r(e, t)
});
var ae = $r.createInstance();
ae.createInstance = $r.createInstance;
ae.createInstance;
ae.dir;
ae.init;
ae.loadResources;
ae.reloadResources;
ae.use;
ae.changeLanguage;
ae.getFixedT;
ae.t;
ae.exists;
ae.setDefaultNamespace;
ae.hasLoadedNamespace;
ae.loadNamespaces;
ae.loadLanguages;
function nh(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n
}
function kl(e, t) {
  if (e == null)
    return {};
  var n = nh(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r],
      !(t.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o])
  }
  return n
}
var oh = {
  area : !0,
  base : !0,
  br : !0,
  col : !0,
  embed : !0,
  hr : !0,
  img : !0,
  input : !0,
  link : !0,
  meta : !0,
  param : !0,
  source : !0,
  track : !0,
  wbr : !0
};
const rh = dc(oh);
var ih = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ha(e) {
  var t = {
    type : "tag",
    name : "",
    voidElement : !1,
    attrs : {},
    children : []
  },
      n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n &&
      (t.name = n[1],
       (rh[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0),
       t.name.startsWith("!--"))) {
    var o = e.indexOf("-->");
    return {
      type: "comment", comment: o !== -1 ? e.slice(4, o) : ""
    }
  }
  for (var r = new RegExp(ih), i = null; (i = r.exec(e)) !== null;)
    if (i[0].trim())
      if (i[1]) {
        var s = i[1].trim(), l = [ s, "" ];
        s.indexOf("=") > -1 && (l = s.split("=")), t.attrs[l[0]] = l[1],
                                                   r.lastIndex--
      } else
        i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
  return t
}
var sh = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, lh = /^\s*$/,
    ah = Object.create(null);
function bc(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e+="<"+t.name+(t.attrs?function(n){var o=[];for(var r in n)o.push(r+'="'+n[r]+'"');return o.length?" "+o.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(bc,"")+"</"+t.name+">";
    case "comment":
      return e + "<!--" + t.comment + "-->"
  }
}
var uh = {
  parse : function(e, t) {
    t || (t = {}), t.components || (t.components = ah);
    var n, o = [], r = [], i = -1, s = !1;
    if (e.indexOf("<") !== 0) {
      var l = e.indexOf("<");
      o.push({type : "text", content : l === -1 ? e : e.substring(0, l)})
    }
    return e.replace(sh, function(a, u) {
      if (s) {
        if (a !== "</" + n.name + ">")
          return;
        s = !1
      }
      var f, d = a.charAt(1) !== "/", h = a.startsWith("<!--"),
             m = u + a.length, v = e.charAt(m);
      if (h) {
        var w = Ha(a);
        return i < 0 ? (o.push(w), o) : ((f = r[i]).children.push(w), o)
      }
      if (d &&
              (i++,
               (n = Ha(a)).type === "tag" && t.components[n.name] &&
                   (n.type = "component", s = !0),
               n.voidElement || s || !v || v === "<" || n.children.push({
                 type : "text",
                 content : e.slice(m, e.indexOf("<", m))
               }),
               i === 0 && o.push(n),
               (f = r[i - 1]) && f.children.push(n),
               r[i] = n),
          (!d || n.voidElement) &&
              (i > -1 && (n.voidElement || n.name === a.slice(2, -1)) &&
                   (i--, n = i === -1 ? o : r[i]),
               !s && v !== "<" && v)) {
        f = i === -1 ? o : r[i].children;
        var O = e.indexOf("<", m), p = e.slice(m, O === -1 ? void 0 : O);
        lh.test(p) && (p = " "),
            (O > -1 && i + f.length >= 0 || p !== " ") &&
            f.push({type : "text", content : p})
      }
    }), o
  },
  stringify : function(e) {
    return e.reduce(function(t, n) {
      return t + bc("", n)
    }, "")
  }
};
function br() {
  if (console && console.warn) {
    for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    typeof n[0] == "string" && (n[0] = "react-i18next:: ".concat(n[0])),
        (e = console).warn.apply(e, n)
  }
}
var Wa = {};
function Br() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Wa[t[0]] ||
      (typeof t[0] == "string" && (Wa[t[0]] = new Date), br.apply(void 0, t))
}
function Ya(e, t, n) {
  e.loadNamespaces(t, function() {
    if (e.isInitialized)
      n();
    else {
      var o = function r() {
        setTimeout(function() {
          e.off("initialized", r)
        }, 0), n()
      };
      e.on("initialized", o)
    }
  })
}
function ch(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = t.languages[0], r = t.options ? t.options.fallbackLng : !1,
      i = t.languages[t.languages.length - 1];
  if (o.toLowerCase() === "cimode")
    return !0;
  var s = function(a, u) {
    var f = t.services.backendConnector.state["".concat(a, "|").concat(u)];
    return f === -1 || f === 2
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 &&
          t.services.backendConnector.backend && t.isLanguageChangingTo &&
          !s(t.isLanguageChangingTo, e)
      ? !1
      : !!(t.hasResourceBundle(o, e) || !t.services.backendConnector.backend ||
           t.options.resources && !t.options.partialBundledLanguages ||
           s(o, e) && (!r || s(i, e)))
}
function dh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return Br("i18n.languages were undefined or empty", t.languages), !0;
  var o = t.options.ignoreJSONStructure !== void 0;
  return o ? t.hasLoadedNamespace(e, {
    precheck : function(i, s) {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 &&
          i.services.backendConnector.backend && i.isLanguageChangingTo &&
          !s(i.isLanguageChangingTo, e))
        return !1
    }
  })
           : ch(e, t, n)
}
var ph =
        /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    fh = {
      "&amp;" : "&",
      "&#38;" : "&",
      "&lt;" : "<",
      "&#60;" : "<",
      "&gt;" : ">",
      "&#62;" : ">",
      "&apos;" : "'",
      "&#39;" : "'",
      "&quot;" : '"',
      "&#34;" : '"',
      "&nbsp;" : " ",
      "&#160;" : " ",
      "&copy;" : "©",
      "&#169;" : "©",
      "&reg;" : "®",
      "&#174;" : "®",
      "&hellip;" : "…",
      "&#8230;" : "…",
      "&#x2F;" : "/",
      "&#47;" : "/"
    },
    hh = function(t) {
      return fh[t]
    }, gh = function(t) {
      return t.replace(ph, hh)
    };
function Ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function Qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ga(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ga(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
var ms = {
  bindI18n : "languageChanged",
  bindI18nStore : "",
  transEmptyNodeValue : "",
  transSupportBasicHtmlNodes : !0,
  transWrapTextNodes : "",
  transKeepBasicHtmlNodesFor : [ "br", "strong", "i", "p" ],
  useSuspense : !0,
  unescape : gh
};
function mh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ms = Qa(Qa({}, ms), e)
}
function Lc() {
  return ms
}
var Tc;
function vh(e) {
  Tc = e
}
function wl() {
  return Tc
}
var yh = [ "format" ], kh = [
  "children",
  "count",
  "parent",
  "i18nKey",
  "context",
  "tOptions",
  "values",
  "defaults",
  "components",
  "ns",
  "i18n",
  "t",
  "shouldUnescape"
];
function Xa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xa(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xa(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function Ai(e, t) {
  if (!e)
    return !1;
  var n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n
}
function Ui(e) {
  return e ? e.props ? e.props.children : e.children : []
}
function wh(e) {
  return Object.prototype.toString.call(e) !== "[object Array]"
      ? !1
      : e.every(function(t) {
          return F.isValidElement(t)
        })
}
function vo(e) {
  return Array.isArray(e) ? e : [ e ]
}
function Sh(e, t) {
  var n = oe({}, t);
  return n.props = Object.assign(e.props, t.props), n
}
function Ic(e, t) {
  if (!e)
    return "";
  var n = "", o = vo(e),
      r = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor
      ? t.transKeepBasicHtmlNodesFor
      : [];
  return o.forEach(function(i, s) {
    if (typeof i == "string")
      n += "".concat(i);
    else if (F.isValidElement(i)) {
      var l = Object.keys(i.props).length, a = r.indexOf(i.type) > -1,
          u = i.props.children;
      if (!u && a && l === 0)
        n += "<".concat(i.type, "/>");
      else if (!u && (!a || l !== 0))
        n += "<".concat(s, "></").concat(s, ">");
      else if (i.props.i18nIsDynamicList)
        n += "<".concat(s, "></").concat(s, ">");
      else if (a && l === 1 && typeof u == "string")
        n += "<".concat(i.type, ">").concat(u, "</").concat(i.type, ">");
      else {
        var f = Ic(u, t);
        n += "<".concat(s, ">").concat(f, "</").concat(s, ">")
      }
    } else if (i === null)
      br("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (de(i) === "object") {
      var d = i.format, h = kl(i, yh), m = Object.keys(h);
      if (m.length === 1) {
        var v = d ? "".concat(m[0], ", ").concat(d) : m[0];
        n += "{{".concat(v, "}}")
      } else
        br("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",
           i)
    } else
      br("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",
         i)
  }),
         n
}
function _h(e, t, n, o, r, i) {
  if (t === "")
    return [];
  var s = o.transKeepBasicHtmlNodesFor || [],
      l = t && new RegExp(s.join("|")).test(t);
  if (!e && !l)
    return [ t ];
  var a = {};
  function u(O) {
    var p = vo(O);
    p.forEach(function(c) {
      typeof c != "string" &&
          (Ai(c) ? u(Ui(c))
                 : de(c) === "object" && !F.isValidElement(c) &&
                   Object.assign(a, c))
    })
  }
  u(e);
  var f = uh.parse("<0>".concat(t, "</0>")), d = oe(oe({}, a), r);
  function h(O, p, c) {
    var g = Ui(O), k = v(g, p.children, c);
    return wh(g) && k.length === 0 ? g : k
  }
  function m(O, p, c, g, k) {
    O.dummy && (O.children = p),
        c.push(F.cloneElement(
            O, oe(oe({}, O.props), {}, {key : g}), k ? void 0 : p))
  }
  function v(O, p, c) {
    var g = vo(O), k = vo(p);
    return k.reduce(function(_, S, x) {
      var P = S.children && S.children[0] && S.children[0].content &&
          n.services.interpolator.interpolate(
              S.children[0].content, d, n.language);
      if (S.type === "tag") {
        var R = g[parseInt(S.name, 10)];
        !R && c.length === 1 && c[0][S.name] && (R = c[0][S.name]),
            R || (R = {});
        var E = Object.keys(S.attrs).length !== 0 ? Sh({props : S.attrs}, R)
                                                  : R,
            H = F.isValidElement(E), Pe = H && Ai(S, !0) && !S.voidElement,
            Nt = l && de(E) === "object" && E.dummy && !H,
            et = de(e) === "object" && e !== null &&
            Object.hasOwnProperty.call(e, S.name);
        if (typeof E == "string") {
          var Nn = n.services.interpolator.interpolate(E, d, n.language);
          _.push(Nn)
        } else if (Ai(E) || Pe) {
          var ft = h(E, S, c);
          m(E, ft, _, x)
        } else if (Nt) {
          var tt = v(g, S.children, c);
          _.push(F.cloneElement(E, oe(oe({}, E.props), {}, {key : x}), tt))
        } else if (Number.isNaN(parseFloat(S.name)))
          if (et) {
            var C = h(E, S, c);
            m(E, C, _, x, S.voidElement)
          } else if (o.transSupportBasicHtmlNodes && s.indexOf(S.name) > -1)
            if (S.voidElement)
              _.push(F.createElement(
                  S.name, {key : "".concat(S.name, "-").concat(x)}));
            else {
              var I = v(g, S.children, c);
              _.push(F.createElement(
                  S.name, {key : "".concat(S.name, "-").concat(x)}, I))
            }
          else if (S.voidElement)
            _.push("<".concat(S.name, " />"));
          else {
            var j = v(g, S.children, c);
            _.push("<".concat(S.name, ">").concat(j, "</").concat(S.name, ">"))
          }
        else if (de(E) === "object" && !H) {
          var M = S.children[0] ? P : null;
          M && _.push(M)
        } else
          S.children.length === 1 && P
              ? _.push(F.cloneElement(E, oe(oe({}, E.props), {}, {key : x}), P))
              : _.push(F.cloneElement(E, oe(oe({}, E.props), {}, {key : x})))
      } else if (S.type === "text") {
        var Q = o.transWrapTextNodes,
            xt = i
            ? o.unescape(
                  n.services.interpolator.interpolate(S.content, d, n.language))
            : n.services.interpolator.interpolate(S.content, d, n.language);
        Q ? _.push(F.createElement(
                Q, {key : "".concat(S.name, "-").concat(x)}, xt))
          : _.push(xt)
      }
      return _
    }, [])
  }
  var w = v([ {dummy : !0, children : e || []} ], f, vo(e || []));
  return Ui(w[0])
}
function Oh(e) {
  var t = e.children, n = e.count, o = e.parent, r = e.i18nKey, i = e.context,
      s = e.tOptions, l = s === void 0 ? {} : s, a = e.values, u = e.defaults,
      f = e.components, d = e.ns, h = e.i18n, m = e.t, v = e.shouldUnescape,
      w = kl(e, kh), O = h || wl();
  if (!O)
    return Br("You will need to pass in an i18next instance by using i18nextReactModule"),
           t;
  var p = m || O.t.bind(O) || function(Pe) {
    return Pe
  };
  i && (l.context = i);
  var c = oe(oe({}, Lc()), O.options && O.options.react),
      g = d || p.ns || O.options && O.options.defaultNS;
  g = typeof g == "string" ? [ g ] : g || [ "translation" ];
  var k = u || Ic(t, c) || c.transEmptyNodeValue || r, _ = c.hashTransKey,
      S = r || (_ ? _(k) : k), x = a ? l.interpolation : {
        interpolation :
            oe(oe({}, l.interpolation), {}, {prefix : "#$?", suffix : "?$#"})
      },
      P =
          oe(oe(oe(oe({}, l), {}, {count : n}, a), x),
             {},
             {defaultValue : k, ns : g}),
      R = S ? p(S, P) : k, E = _h(f || t, R, O, c, P, v),
      H = o !== void 0 ? o : c.defaultTransParent;
  return H ? F.createElement(H, w, E) : E
}
var Nh = {
  type : "3rdParty",
  init : function(t) {
    mh(t.options.react), vh(t)
  }
},
    Rc = F.createContext(),
    xh =
        function() {
      function e() {
        ct(this, e), this.usedNamespaces = {}
      }
      return dt(e,
                [
                  {
                    key : "addUsedNamespaces",
                    value : function(n) {
                      var o = this;
                      n.forEach(function(r) {
                        o.usedNamespaces[r] || (o.usedNamespaces[r] = !0)
                      })
                    }
                  },
                  {
                    key : "getUsedNamespaces",
                    value : function() {
                      return Object.keys(this.usedNamespaces)
                    }
                  }
                ]),
             e
    }(),
    Ph = [
      "children",
      "count",
      "parent",
      "i18nKey",
      "context",
      "tOptions",
      "values",
      "defaults",
      "components",
      "ns",
      "i18n",
      "t",
      "shouldUnescape"
    ];
function Ja(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function Eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ja(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ja(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
function z(e) {
  var t = e.children, n = e.count, o = e.parent, r = e.i18nKey, i = e.context,
      s = e.tOptions, l = s === void 0 ? {} : s, a = e.values, u = e.defaults,
      f = e.components, d = e.ns, h = e.i18n, m = e.t, v = e.shouldUnescape,
      w = kl(e, Ph), O = F.useContext(Rc) || {}, p = O.i18n, c = O.defaultNS,
      g = h || p || wl(), k = m || g && g.t.bind(g);
  return Oh(
      Eh({
        children : t,
        count : n,
        parent : o,
        i18nKey : r,
        context : i,
        tOptions : l,
        values : a,
        defaults : u,
        components : f,
        ns : d || k && k.ns || c || g && g.options && g.options.defaultNS,
        i18n : g,
        t : m,
        shouldUnescape : v
      },
         w))
}
function Ch(e, t) {
  var n = e == null
      ? null
      : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, s, l = [], a = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        a = !1
      } else
        for (; !(a = (o = i.call(n)).done) && (l.push(o.value), l.length !== t);
             a = !0)
          ;
    } catch (f) {
      u = !0, r = f
    } finally {
      try {
        if (!a && n.return != null && (s = n.return(), Object(s) !== s))
          return
      } finally {
        if (u)
          throw r
      }
    }
    return l
  }
}
function bh(e, t) {
  return Oc(e) || Ch(e, t) || Nc(e, t) || xc()
}
function Za(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable
    })),
        n.push.apply(n, o)
  }
  return n
}
function Mi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Za(Object(n), !0).forEach(function(o) {
      Je(e, o, n[o])
    })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Za(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
          })
  }
  return e
}
var Lh = function(t, n) {
  var o = F.useRef();
  return F.useEffect(function() {
    o.current = n ? o.current : t
  }, [ t, n ]), o.current
};
function B(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.i18n, o = F.useContext(Rc) || {}, r = o.i18n, i = o.defaultNS,
      s = n || r || wl();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new xh), !s) {
    Br("You will need to pass in an i18next instance by using initReactI18next");
    var l = function(R, E) {
      return typeof E == "string" ? E
          : E && de(E) === "object" && typeof E.defaultValue == "string"
          ? E.defaultValue
          : Array.isArray(R) ? R[R.length - 1]
                             : R
    }, a = [ l, {}, !1 ];
    return a.t = l, a.i18n = {}, a.ready = !1, a
  }
  s.options.react && s.options.react.wait !== void 0 &&
      Br("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var u = Mi(Mi(Mi({}, Lc()), s.options.react), t), f = u.useSuspense,
      d = u.keyPrefix, h = e || i || s.options && s.options.defaultNS;
  h = typeof h == "string" ? [ h ] : h || [ "translation" ],
  s.reportNamespaces.addUsedNamespaces &&
      s.reportNamespaces.addUsedNamespaces(h);
  var m = (s.isInitialized || s.initializedStoreOnce) && h.every(function(P) {
    return dh(P, s, u)
  });
  function v() {
    return s.getFixedT(null, u.nsMode === "fallback" ? h : h[0], d)
  }
  var w = F.useState(v), O = bh(w, 2), p = O[0], c = O[1], g = h.join(),
      k = Lh(g), _ = F.useRef(!0);
  F.useEffect(function() {
    var P = u.bindI18n, R = u.bindI18nStore;
    _.current = !0, !m && !f && Ya(s, h, function() {
      _.current && c(v)
    }), m && k && k !== g && _.current && c(v);
    function E() {
      _.current && c(v)
    }
    return P && s && s.on(P, E), R && s && s.store.on(R, E), function() {
      _.current = !1, P && s && P.split(" ").forEach(function(H) {
        return s.off(H, E)
      }),
      R && s && R.split(" ").forEach(function(H) {
        return s.store.off(H, E)
      })
    }
  }, [ s, g ]);
  var S = F.useRef(!0);
  F.useEffect(function() {
    _.current && !S.current && c(v), S.current = !1
  }, [ s, d ]);
  var x = [ p, s, m ];
  if (x.t = p, x.i18n = s, x.ready = m, m || !m && !f)
    return x;
  throw new Promise(function(P) {
    Ya(s, h, function() {
      P()
    })
  })
}
const
    Th = {
      installationInstructions : "安装说明",
      getStarted : "入门指南",
      notebooks : "笔记本电脑",
      troubleshooting : "故障排除指南"
    },
    Ih = {
      copy : "复制",
      copied : "已复制"
    },
    Rh = {
      distributionLinks : Th,
      copyCommand : Ih
    },
    jh = {
      titles : {
        recommended : "推荐",
        stable : "稳定",
        latestLTS : "最新的 LTS 版本",
        hddlSupport : "包含 NCS2/HDDL 支持",
        previousLTS : "旧 LTS 版本",
        LTS : "LTS",
        latestBuild : "最新内部版本",
        nightly : "隔夜预览",
        nightlyBuild : "每日构建版"
      }
    },
    Fh = {
      devTools :
          {title : "开发工具", subtitle : "开发和优化深度学习模型的最佳选择。"},
      runtime :
          {title : "运行时", subtitle : "您已拥有模型，并且希望对其运行推理。"}
    },
    Dh = {
      common : {
        requirements : {
          ubuntu18 : "Ubuntu 18.04 长期支持 (LTS)（64 位）",
          ubuntu20 : "Ubuntu 20.04 长期支持 (LTS)（64 位）",
          ubuntu22 : "Ubuntu 22.04 长期支持 (LTS)（64 位）",
          armPluginFootnote :
              "搭载 M1 处理器的 Macintosh 计算机针对 OpenVINO 工具套件 2022.3.0 LTS 及更高版本使用 ARM 插件。此插件是社区提供支持的。由于英特尔不提供任何支持，它不适用 LTS 的两年支持政策。"
        },
        modules : {
          runtime : "运行时/推理引擎",
          modelOptimizer : "模型优化器",
          benchmarkTool : "基准测试工具",
          accuracyChecker : "准确性检查程序",
          annotationConverter : "批注转换器",
          pot : "训练后优化工具",
          openCVPython : "OpenCV Python",
          omz : "模型下载程序和其他 Open Model Zoo 工具"
        },
        includesNPUPlugin : "包括 NPU"
      },
      openVINOArchives : "OpenVINO 归档文件",
      source : "源",
      offlineInstaller : "离线安装程序",
      recommendedOption : "推荐选项",
      pythonAPIOnly : "仅限 Python API",
      CAPIOnly : "仅限 C++ API",
      jsAPIOnly : "仅限 JavaScript API"
    },
    Ah = {
      versions : jh,
      environment : Fh,
      distributions : Dh
    },
    Uh = {
      titles : {
        envinronment : "环境",
        os : "操作系统",
        version : "版本",
        distribution : "分发",
        frameworks : "框架"
      },
      prevReleases : "旧版",
      devCloud : {
        label : "在英特尔® Developer Cloud 中试用",
        href :
            "https://www.intel.cn/content/www/cn/zh/developer/tools/devcloud/overview.html"
      },
      nncf : "高级优化工具可单独购买：<1>了解 NNCF</1>",
      simplifiedInstallOptions :
          "我们简化了安装选项（示例：运行时工具和开发工具整合）：<1>了解详情</1>"
    },
    Mh = {
      learnMore : "了解详情",
      title : "系统要求",
      fullRequirements :
          {text : "如需查看支持硬件的完整列表，请参见<1>系统要求</1>。"}
    },
    zh = {
      apt : {
        title : "使用 APT 安装",
        downloadTitle : "下载",
        steps : {
          download :
              "<0>第 1 步：</0>下载 <2>{{filename}}</2>。您也可以使用以下命令",
          addKey : "<0>第 2 步：</0>将此密钥添加到系统密钥环。",
          addRepository : "<0>第 3 步：</0>通过以下命令添加存储库。",
          updateList : "<0>第 4 步：</0>使用更新命令更新软件包列表。",
          verify :
              "<0>第 5 步：</0>验证 APT 存储库的设置是否正确。使用 apt-cache 命令查看包含所有可用 OpenVINO 程序包和组件的列表",
          install : "<0>第 6 步：</0>安装 OpenVINO 运行时。"
        }
      },
      download : {
        title : "下载",
        download : "下载",
        downloadArchives : "下载归档文件",
        gotoDocker : "转到 Docker"
      },
      githubGitee : {
        openSource :
            "使用开源存储库，在发布版本之间获取最新版本，并为开源社区做出贡献。",
        installationInstructions : "安装说明",
        githubRepository : "OpenVINO 工具套件 GitHub 存储库",
        giteeRepository : "OpenVINO 工具套件 Gitee 存储库",
        titleGitee : "基于 Gitee 上的源构建",
        titleGithub : "基于 GitHub 上的源构建",
        steps : {
          useGitClone :
              "<0>第 1 步：</0>运用 Git 克隆 OpenVINO 工具套件存储库。",
          buildInstructions : "<0>第 2 步：</0>按照<2>说明从源代码构建</2>"
        }
      },
      pip : {
        downloadRuntime : "下载 OpenVINO™ 运行时",
        downloadDevtools : "下载 OpenVINO™ 开发工具",
        install : "使用 PIP 安装",
        steps : {
          createVenv : "<0>第 1 步：</0>创建虚拟环境。",
          activateVenv : "<0>第 2 步：</0>激活虚拟环境。",
          upgradePip : "<0>第 3 步：</0>将 pip 升级到最新版本。",
          install : "<0>第 4 步：</0>下载并安装程序包。"
        }
      },
      conda : {
        download : "下载 OpenVINO™ 运行时",
        install : "使用 Conda 安装",
        steps : {
          createEnv :
              "<0>第 1 步：</0>创建 Anaconda 环境（以 Python 3.10 为例）",
          activateEnv : "<0>第 2 步：</0>激活 Anaconda 环境",
          update : "<0>第 3 步：</0>将 Anaconda 环境更新至最新版本",
          install : "<0>第 4 步：</0>下载并安装程序包。"
        }
      },
      conan : {
        install : "使用 Conan 安装",
        steps : {
          createConanFile :
              '<0>第 1 步：</0>在OpenVINO项目中创建<2>{{txtFilename}}</2>文件，并加入"openvino"作为依赖库。',
          install :
              "<0>第 2 步：</0>运行以下命令来创建<2>{{cmakeFilename}}</2>文件，此文件会被用来将你的项目与OpenVINO一起进行编译。",
          compile : "<0>第 3 步：</0>配置并编译你的项目。"
        }
      },
      brew : {
        download : "下载 OpenVINO™ 运行时",
        install : "使用 Homebrew 安装",
        steps : {install : "下载并安装程序包"}
      },
      vcpkg :
          {install : "使用 vcpkg 安装", steps : {install : "下载并安装程序包"}},
      yum : {
        title : "使用 YUM 安装",
        downloadTitle : "下载",
        steps : {
          createRepoFile :
              "<0>第 1 步：</0>以正常用户身份在 /tmp 目录中创建 YUM 存储库文件。",
          moveFile :
              "<0>第 2 步：</0>将新的 openvino-{{year}}.repo 文件移动到 YUM 配置目录 <4>{{directory}}</4>。",
          verify : "<0>第 3 步：</0>使用以下命令验证新建存储库的设置是否正确。",
          install : "<0>第 4 步：</0>安装 OpenVINO 运行时。"
        }
      },
      npm : {install : "使用 npm 安装", steps : {install : "下载并安装程序包"}}
    },
    Vh = {
      frameworks : {
        install : "安装框架",
        tooltip :
            `我们假设所需的框架已经安装到您的环境中。如果没有，您可以使用 OpenVINO 工具套件安装该框架。
可用框架：Caffe、Kaldi、Apache MXNet、PyTorch、ONNX、TensorFlow。`
      },
      selectorForm : {titles : {install : "安装"}},
      distributions : {
        aptYum : {followInstructions : "按照<1>安装说明进行操作</1>"},
        download : {useFollowingLink : "使用下方链接："}
      }
    },
    $h = {
      selectorForm : Uh,
      systemRequirements : Mh,
      distributions : zh,
      compact : Vh
    },
    Bh = {
      translation : $h,
      common : Rh,
      core : Ah
    },
    Kh = {
      installationInstructions : "Installation Instructions",
      getStarted : "Get Started Guide",
      notebooks : "Notebooks",
      troubleshooting : "Troubleshooting Guide"
    },
    Hh = {
      copy : "Copy",
      copied : "Copied"
    },
    Wh = {
      distributionLinks : Kh,
      copyCommand : Hh
    },
    Yh = {
      titles : {
        recommended : "Recommended",
        stable : "Stable",
        latestLTS : "Latest LTS release",
        hddlSupport : "Includes NCS2/HDDL support",
        previousLTS : "Previous LTS release",
        LTS : "LTS",
        latestBuild : "Latest Build",
        nightly : "Nightly Preview",
        nightlyBuild : "Nightly Build"
      }
    },
    Gh = {
      devTools : {
        title : "Development Tools",
        subtitle :
            "Your best option to develop and optimize deep learning models."
      },
      runtime : {
        title : "Runtime",
        subtitle : "You already have a model and want to run inference on it."
      }
    },
    Qh = {
      common : {
        requirements : {
          ubuntu18 : "Ubuntu 18.04 long-term support (LTS) (64 bit)",
          ubuntu20 : "Ubuntu 20.04 long-term support (LTS) (64 bit)",
          ubuntu22 : "Ubuntu 22.04 long-term support (LTS) (64 bit)",
          armPluginFootnote :
              "Macintosh computers using the M1 processor use the ARM Plug-in on OpenVINO toolkit 2022.3.0 LTS and later. This plugin is community supported; no support is provided by Intel and it doesn't fall under the LTS 2 year support policy."
        },
        modules : {
          runtime : "Runtime/Inference Engine",
          modelOptimizer : "Model Optimizer",
          benchmarkTool : "Benchmark Tool",
          accuracyChecker : "Accuracy Checker",
          annotationConverter : "Annotation Converter",
          pot : "Post-Training Optimization Tool",
          openCVPython : "OpenCV Python",
          omz : "Model Downloader and other Open Model Zoo Tools"
        },
        includesNPUPlugin : "Includes NPU plugin"
      },
      openVINOArchives : "OpenVINO Archives",
      source : "Source",
      offlineInstaller : "Offline Installer",
      recommendedOption : "Recommended option",
      pythonAPIOnly : "Python API only",
      CAPIOnly : "C++ API only",
      jsAPIOnly : "JavaScript API only"
    },
    Xh = {
      versions : Yh,
      environment : Gh,
      distributions : Qh
    },
    Jh = {
      titles : {
        envinronment : "Environment",
        os : "Operating System",
        version : "Version",
        distribution : "Distribution",
        frameworks : "Frameworks"
      },
      prevReleases : "Previous Releases",
      devCloud : {
        label : "Try in the Intel® Developer Cloud",
        href :
            "https://www.intel.com/content/www/us/en/developer/tools/devcloud/overview.html"
      },
      nncf :
          "Advanced Optimization tool available separately: <1>Learn about NNCF</1>",
      simplifiedInstallOptions :
          "We have simplified the install options (example: consolidation of Runtime and Development Tools): <1>Learn more</1>"
    },
    Zh = {
      learnMore : "Learn more",
      title : "System Requirements",
      fullRequirements : {
        text :
            "For a complete list of supported hardware, see the <1>system requirements</1>."
      }
    },
    qh = {
      apt : {
        title : "Install with APT",
        downloadTitle : "Download",
        steps : {
          download :
              "<0>Step 1:</0> Download the <2>{{filename}}</2>. You can also use the following command",
          addKey : "<0>Step 2:</0> Add this key to the system keyring",
          addRepository :
              "<0>Step 3:</0> Add the repository via the following command",
          updateList :
              "<0>Step 4:</0> Update the list of packages via the update command",
          verify :
              "<0>Step 5:</0> Verify that the APT repository is properly set up. Run the apt-cache command to see a list of all available OpenVINO packages and components",
          install : "<0>Step 6:</0> Install OpenVINO Runtime"
        }
      },
      download : {
        title : "Download",
        download : "Download",
        downloadArchives : "Download Archives",
        gotoDocker : "Go to Docker"
      },
      githubGitee : {
        openSource :
            "Use an open source repository, get the most recent version in between releases, and contribute to the open source community.",
        installationInstructions : "Installation instructions",
        githubRepository : "OpenVINO Toolkit GitHub Repository",
        giteeRepository : "OpenVINO Toolkit Gitee Repository",
        titleGitee : "Build from Source on Gitee",
        titleGithub : "Build from Source on GitHub",
        steps : {
          useGitClone :
              "<0>Step 1:</0> Use Git to clone the OpenVINO toolkit repository",
          buildInstructions :
              "<0>Step 2:</0> Follow the <2>instructions to build from source</2>"
        }
      },
      pip : {
        downloadRuntime : "Download OpenVINO™ Runtime",
        downloadDevtools : "Download OpenVINO™ Development Tools",
        install : "Install with PIP",
        steps : {
          createVenv : "<0>Step 1:</0> Create virtual environment",
          activateVenv : "<0>Step 2:</0> Activate virtual environment",
          upgradePip : "<0>Step 3:</0> Upgrade pip to latest version",
          install : "<0>Step 4:</0> Download and install the package"
        }
      },
      conda : {
        download : "Download OpenVINO™ Runtime",
        install : "Install with Conda",
        steps : {
          createEnv :
              "<0>Step 1:</0> Create the Anaconda environment (Python 3.10 used as an example)",
          activateEnv : "<0>Step 2:</0> Activate the Anaconda environment",
          update :
              "<0>Step 3:</0> Update the Anaconda environment to the latest version",
          install : "<0>Step 4:</0> Download and install the package"
        }
      },
      conan : {
        install : "Install with Conan",
        steps : {
          createConanFile :
              "<0>Step 1:</0> Create a <2>{{txtFilename}}</2> file for your OpenVINO project and add “openvino” dependency in there",
          install :
              "<0>Step 2:</0> Run the command below to create <2>{{cmakeFilename}}</2> file, which will be used to compile your project with OpenVINO",
          compile :
              "<0>Step 3:</0> Configure and compile your project with OpenVINO"
        }
      },
      brew : {
        download : "Download OpenVINO™ Runtime",
        install : "Install with Homebrew",
        steps : {install : "Download and install the package"}
      },
      vcpkg : {
        install : "Install with vcpkg",
        steps : {install : "Download and install the package"}
      },
      yum : {
        title : "Install with YUM",
        downloadTitle : "Download",
        steps : {
          createRepoFile :
              "<0>Step 1:</0> Create the YUM repo file in the /tmp directory as a normal user",
          moveFile :
              "<0>Step 2:</0> Move the new openvino-{{year}}.repo file to the YUM configuration directory <4>{{directory}}</4>",
          verify :
              "<0>Step 3:</0> Verify that the new repo is properly set up by running the following command",
          install : "<0>Step 4:</0> Install OpenVINO Runtime"
        }
      },
      npm : {
        install : "Install with npm",
        steps : {install : "Download and install the package"}
      }
    },
    eg = {
      frameworks : {
        install : "Install Frameworks",
        tooltip :
            `We assume that needed frameworks are already installed in your environment. If not, you can install them with OpenVINO toolkit.
Available frameworks: Caffe, Kaldi, Apache MXNet, PyTorch, ONNX, TensorFlow.`
      },
      selectorForm : {titles : {install : "Install"}},
      distributions : {
        aptYum : {
          followInstructions : "Follow the <1>Installation Instructions</1>"
        },
        download : {useFollowingLink : "Use the following link:"}
      }
    },
    tg = {
      selectorForm : Jh,
      systemRequirements : Zh,
      distributions : qh,
      compact : eg
    },
    ng = {
      translation : tg,
      common : Wh,
      core : Xh
    },
    Gn = {
      en : ng,
      cn : Bh
    },
    vs = "en";
if (!(vs in Gn))
  throw new Error(`'${vs}' language is not supported`);
ae.use(Nh).init({
  debug : !1,
  resources : Gn,
  lng : vs,
  fallbackLng : "en",
  interpolation : {escapeValue : !1},
  supportedLngs : Object.keys(Gn),
  returnObjects : !1,
  returnNull : !1
});
ae.t;
var ys = {}, jc = {exports : {}}, $e = {}, Fc = {exports : {}},
    Dc = {}; /**
              * @license React
              * scheduler.production.min.js
              *
              * Copyright (c) Facebook, Inc. and its affiliates.
              *
              * This source code is licensed under the MIT license found in the
              * LICENSE file in the root directory of this source tree.
              */
(function(e) {
function t(C, I) {
  var j = C.length;
  C.push(I);
  e: for (; 0 < j;) {
    var M = j - 1 >>> 1, Q = C[M];
    if (0 < r(Q, I))
      C[M] = I, C[j] = Q, j = M;
    else
      break e
  }
}
function n(C) {
  return C.length === 0 ? null : C[0]
}
function o(C) {
  if (C.length === 0)
    return null;
  var I = C[0], j = C.pop();
  if (j !== I) {
    C[0] = j;
    e: for (var M = 0, Q = C.length, xt = Q >>> 1; M < xt;) {
      var Fe = 2 * (M + 1) - 1, xn = C[Fe], De = Fe + 1, Pt = C[De];
      if (0 > r(xn, j))
        De<Q && 0>r(Pt, xn) ? (C[M] = Pt, C[De] = j, M = De)
                            : (C[M] = xn, C[Fe] = j, M = Fe);
      else if (De < Q && 0 > r(Pt, j))
        C[M] = Pt, C[De] = j, M = De;
      else
        break e
    }
  }
  return I
}
function r(C, I) {
  var j = C.sortIndex - I.sortIndex;
  return j !== 0 ? j : C.id - I.id
}
if (typeof performance == "object" && typeof performance.now == "function") {
  var i = performance;
  e.unstable_now = function() {
    return i.now()
  }
} else {
  var s = Date, l = s.now();
  e.unstable_now = function() {
    return s.now() - l
  }
}
var a = [], u = [], f = 1, d = null, h = 3, m = !1, v = !1, w = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
typeof navigator < "u" && navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
function g(C) {
  for (var I = n(u); I !== null;) {
    if (I.callback === null)
      o(u);
    else if (I.startTime <= C)
      o(u), I.sortIndex = I.expirationTime, t(a, I);
    else
      break;
    I = n(u)
  }
}
function k(C) {
  if (w = !1, g(C), !v)
    if (n(a) !== null)
      v = !0, ft(_);
    else {
      var I = n(u);
      I !== null && tt(k, I.startTime - C)
    }
}
function _(C, I) {
  v = !1, w && (w = !1, p(P), P = -1), m = !0;
  var j = h;
  try {
    for (g(I), d = n(a);
         d !== null && (!(d.expirationTime > I) || C && !H());) {
      var M = d.callback;
      if (typeof M == "function") {
        d.callback = null, h = d.priorityLevel;
        var Q = M(d.expirationTime <= I);
        I = e.unstable_now(),
        typeof Q == "function" ? d.callback = Q : d === n(a) && o(a), g(I)
      } else
        o(a);
      d = n(a)
    }
    if (d !== null)
      var xt = !0;
    else {
      var Fe = n(u);
      Fe !== null && tt(k, Fe.startTime - I), xt = !1
    }
    return xt
  } finally {
    d = null, h = j, m = !1
  }
}
var S = !1, x = null, P = -1, R = 5, E = -1;
function H() {
  return !(e.unstable_now() - E < R)
}
function Pe() {
  if (x !== null) {
    var C = e.unstable_now();
    E = C;
    var I = !0;
    try {
      I = x(!0, C)
    } finally {
      I ? Nt() : (S = !1, x = null)
    }
  } else
    S = !1
}
var Nt;
if (typeof c == "function")
  Nt = function() {
    c(Pe)
  };
else if (typeof MessageChannel < "u") {
  var et = new MessageChannel, Nn = et.port2;
  et.port1.onmessage = Pe, Nt = function() {
    Nn.postMessage(null)
  }
} else
  Nt = function() {
    O(Pe, 0)
  };
function ft(C) {
  x = C, S || (S = !0, Nt())
}
function tt(C, I) {
  P = O(function() {
    C(e.unstable_now())
  }, I)
}
e
    .unstable_IdlePriority = 5,
   e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4,
   e.unstable_NormalPriority = 3, e.unstable_Profiling = null,
   e.unstable_UserBlockingPriority = 2,
   e.unstable_cancelCallback = function(C) {
     C.callback = null
   }, e.unstable_continueExecution = function() {
     v || m || (v = !0, ft(_))
   }, e.unstable_forceFrameRate = function(C) {
     0 > C || 125 < C
         ? console.error(
               "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
         : R = 0 < C ? Math.floor(1e3 / C) : 5
   }, e.unstable_getCurrentPriorityLevel = function() {
     return h
   }, e.unstable_getFirstCallbackNode = function() {
     return n(a)
   }, e.unstable_next = function(C) {
     switch (h) {
       case 1:
       case 2:
       case 3:
         var I = 3;
         break;
       default:
         I = h
     }
     var j = h;
     h = I;
     try {
       return C()
     } finally {
       h = j
     }
   }, e.unstable_pauseExecution = function() {
   }, e.unstable_requestPaint = function() {
   }, e.unstable_runWithPriority = function(C, I) {
     switch (C) {
       case 1:
       case 2:
       case 3:
       case 4:
       case 5:
         break;
       default:
         C = 3
     }
     var j = h;
     h = C;
     try {
       return I()
     } finally {
       h = j
     }
   }, e.unstable_scheduleCallback = function(C, I, j) {
     var M = e.unstable_now();
     switch (typeof j == "object" && j !== null
                 ? (j = j.delay, j = typeof j == "number" && 0 < j ? M + j : M)
                 : j = M,
             C) {
       case 1:
         var Q = -1;
         break;
       case 2:
         Q = 250;
         break;
       case 5:
         Q = 1073741823;
         break;
       case 4:
         Q = 1e4;
         break;
       default:
         Q = 5e3
     }
     return Q = j + Q, C = {
       id : f++,
       callback : I,
       priorityLevel : C,
       startTime : j,
       expirationTime : Q,
       sortIndex : -1
     },
            j > M ? (C.sortIndex = j,
                     t(u, C),
                     n(a) === null && C === n(u) &&
                         (w ? (p(P), P = -1) : w = !0, tt(k, j - M)))
                  : (C.sortIndex = Q, t(a, C), v || m || (v = !0, ft(_))),
            C
   }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(C) {
     var I = h;
     return function() {
       var j = h;
       h = I;
       try {
         return C.apply(this, arguments)
       } finally {
         h = j
       }
     }
   }
})(Dc);
Fc.exports = Dc;
var og =
    Fc.exports; /**
                 * @license React
                 * react-dom.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in
                 * the LICENSE file in the root directory of this source tree.
                 */
var Ac = F, Ve = og;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
           n = 1;
       n < arguments.length;
       n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Uc = new Set, Io = {};
function Sn(e, t) {
  Qn(e, t), Qn(e + "Capture", t)
}
function Qn(e, t) {
  for (Io[e] = t, e = 0; e < t.length; e++)
    Uc.add(t[e])
}
var Rt =
        !(typeof window > "u" || typeof window.document > "u" ||
          typeof window.document.createElement > "u"),
    ks = Object.prototype.hasOwnProperty,
    rg =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    qa = {}, eu = {};
function ig(e) {
  return ks.call(eu, e) ? !0
      : ks.call(qa, e)  ? !1
      : rg.test(e)      ? eu[e] = !0
                        : (qa[e] = !0, !1)
}
function sg(e, t, n, o) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o ? !1
          : n !== null
          ? !n.acceptsBooleans
          : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}
function lg(e, t, n, o) {
  if (t === null || typeof t > "u" || sg(e, t, n, o))
    return !0;
  if (o)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Oe(e, t, n, o, r, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o,
  this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e,
  this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function(e) {
      fe[e] = new Oe(e, 0, !1, e, null, !1, !1)
    });
[[ "acceptCharset", "accept-charset" ],
 [ "className", "class" ],
 [ "htmlFor", "for" ],
 [ "httpEquiv", "http-equiv" ]]
    .forEach(function(e) {
      var t = e[0];
      fe[t] = new Oe(t, 1, !1, e[1], null, !1, !1)
    });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"]
    .forEach(function(e) {
      fe[e] = new Oe(e, 2, !1, e, null, !1, !1)
    });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function(e) {
      fe[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
    });
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new Oe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  fe[e] = new Oe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new Oe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Sl = /[\-:]([a-z])/g;
function _l(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function(e) {
      var t = e.replace(Sl, _l);
      fe[t] = new Oe(t, 1, !1, e, null, !1, !1)
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function(e) {
      var t = e.replace(Sl, _l);
      fe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    });
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Sl, _l);
  fe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new Oe(
    "xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Ol(e, t, n, o) {
  var r = fe.hasOwnProperty(t) ? fe[t] : null;
  (r !== null ? r.type !== 0
              : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" ||
           t[1] !== "n" && t[1] !== "N") &&
      (lg(t, n, r, o) && (n = null),
       o || r === null ? ig(t) &&
               (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
           : r.mustUseProperty
           ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n
           : (t = r.attributeName,
              o = r.attributeNamespace,
              n === null
                  ? e.removeAttribute(t)
                  : (r = r.type,
                     n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
                     o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
}
var At = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ar = Symbol.for("react.element"), Ln = Symbol.for("react.portal"),
    Tn = Symbol.for("react.fragment"), Nl = Symbol.for("react.strict_mode"),
    ws = Symbol.for("react.profiler"), Mc = Symbol.for("react.provider"),
    zc = Symbol.for("react.context"), xl = Symbol.for("react.forward_ref"),
    Ss = Symbol.for("react.suspense"), _s = Symbol.for("react.suspense_list"),
    Pl = Symbol.for("react.memo"), zt = Symbol.for("react.lazy"),
    Vc = Symbol.for("react.offscreen"), tu = Symbol.iterator;
function ao(e) {
  return e === null || typeof e != "object"
      ? null
      : (e = tu && e[tu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Z = Object.assign, zi;
function yo(e) {
  if (zi === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zi = t && t[1] || ""
    }
  return `
` + zi +
      e
}
var Vi = !1;
function $i(e, t) {
  if (!e || Vi)
    return "";
  Vi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t =
              function() {
                throw Error()
              },
          Object.defineProperty(t.prototype, "props", {
            set : function() {
              throw Error()
            }
          }),
          typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var o = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          o = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        o = u
      }
      e()
    }
  } catch (u) {
    if (u && o && typeof u.stack == "string") {
      for (var r = u.stack.split(`
`),
               i = o.stack.split(`
`),
               s = r.length - 1,
               l = i.length - 1;
           1 <= s && 0 <= l && r[s] !== i[l];)
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (r[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if (s--, l--, 0 > l || r[s] !== i[l]) {
                var a =
                    `
` + r[s].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") &&
                           (a = a.replace("<anonymous>", e.displayName)),
                       a
              }
            while (1 <= s && 0 <= l);
          break
        }
    }
  } finally {
    Vi = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? yo(e) : ""
}
function ag(e) {
  switch (e.tag) {
    case 5:
      return yo(e.type);
    case 16:
      return yo("Lazy");
    case 13:
      return yo("Suspense");
    case 19:
      return yo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $i(e.type, !1), e;
    case 11:
      return e = $i(e.type.render, !1), e;
    case 1:
      return e = $i(e.type, !0), e;
    default:
      return ""
  }
}
function Os(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Ln:
      return "Portal";
    case ws:
      return "Profiler";
    case Nl:
      return "StrictMode";
    case Ss:
      return "Suspense";
    case _s:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zc:
        return (e.displayName || "Context") + ".Consumer";
      case Mc:
        return (e._context.displayName || "Context") + ".Provider";
      case xl:
        var t = e.render;
        return e = e.displayName,
               e ||
                   (e = t.displayName || t.name || "",
                    e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
               e;
      case Pl:
        return t = e.displayName || null, t !== null ? t : Os(e.type) || "Memo";
      case zt:
        t = e._payload, e = e._init;
        try {
          return Os(e(t))
        } catch {
        }
    }
  return null
}
function ug(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "",
             t.displayName ||
                 (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Os(t);
    case 8:
      return t === Nl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t
  }
  return null
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}
function $c(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
}
function cg(e) {
  var t = $c(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" &&
      typeof n.set == "function") {
    var r = n.get, i = n.set;
    return Object.defineProperty(e, t, {
      configurable : !0,
      get : function() {
        return r.call(this)
      },
      set : function(s) {
        o = "" + s, i.call(this, s)
      }
    }),
           Object.defineProperty(e, t, {enumerable : n.enumerable}), {
      getValue: function() {
        return o
      }, setValue: function(s) {
        o = "" + s
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = cg(e))
}
function Bc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), o = "";
  return e && (o = $c(e) ? e.checked ? "true" : "false" : e.value),
         e = o, e !== n ? (t.setValue(e), !0) : !1
}
function Kr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Ns(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked : void 0,
    defaultValue : void 0,
    value : void 0,
    checked : n ?? e._wrapperState.initialChecked
  })
}
function nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
  n = nn(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked : o,
    initialValue : n,
    controlled : t.type === "checkbox" || t.type === "radio" ? t.checked != null
                                                             : t.value != null
  }
}
function Kc(e, t) {
  t = t.checked, t != null && Ol(e, "checked", t, !1)
}
function xs(e, t) {
  Kc(e, t);
  var n = nn(t.value), o = t.type;
  if (n != null)
    o === "number"
        ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
  else if (o === "submit" || o === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value")
      ? Ps(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ps(e, t.type, nn(t.defaultValue)),
      t.checked == null && t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var o = t.type;
    if (!(o !== "submit" && o !== "reset" ||
          t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t),
    e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""),
  e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}
function Ps(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) &&
      (n == null ? e.defaultValue = "" + e._wrapperState.initialValue
                 : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ko = Array.isArray;
function $n(e, t, n, o) {
  if (e = e.options, t) {
    t = {};
    for (var r = 0; r < n.length; r++)
      t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      r = t.hasOwnProperty("$" + e[n].value),
      e[n].selected !== r && (e[n].selected = r),
      r && o && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + nn(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        e[r].selected = !0, o && (e[r].defaultSelected = !0);
        return
      }
      t !== null || e[r].disabled || (t = e[r])
    }
    t !== null && (t.selected = !0)
  }
}
function Es(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(N(91));
  return Z({}, t, {
    value : void 0,
    defaultValue : void 0,
    children : "" + e._wrapperState.initialValue
  })
}
function ru(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(N(92));
      if (ko(n)) {
        if (1 < n.length)
          throw Error(N(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = { initialValue : nn(n) }
}
function Hc(e, t) {
  var n = nn(t.value), o = nn(t.defaultValue);
  n != null &&
      (n = "" + n,
       n !== e.value && (e.value = n),
       t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      o != null && (e.defaultValue = "" + o)
}
function iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Wc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function Cs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Wc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e
}
var cr, Yc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, r) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, o, r)
    })
  } : e
}(function(e, t) {
          if (e.namespaceURI !== "http://www.w3.org/2000/svg" ||
              "innerHTML" in e)
            e.innerHTML = t;
          else {
            for (cr = cr || document.createElement("div"),
                cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                t = cr.firstChild;
                 e.firstChild;)
              e.removeChild(e.firstChild);
            for (; t.firstChild;)
              e.appendChild(t.firstChild)
          }
        });
function Ro(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var _o = {
  animationIterationCount : !0,
  aspectRatio : !0,
  borderImageOutset : !0,
  borderImageSlice : !0,
  borderImageWidth : !0,
  boxFlex : !0,
  boxFlexGroup : !0,
  boxOrdinalGroup : !0,
  columnCount : !0,
  columns : !0,
  flex : !0,
  flexGrow : !0,
  flexPositive : !0,
  flexShrink : !0,
  flexNegative : !0,
  flexOrder : !0,
  gridArea : !0,
  gridRow : !0,
  gridRowEnd : !0,
  gridRowSpan : !0,
  gridRowStart : !0,
  gridColumn : !0,
  gridColumnEnd : !0,
  gridColumnSpan : !0,
  gridColumnStart : !0,
  fontWeight : !0,
  lineClamp : !0,
  lineHeight : !0,
  opacity : !0,
  order : !0,
  orphans : !0,
  tabSize : !0,
  widows : !0,
  zIndex : !0,
  zoom : !0,
  fillOpacity : !0,
  floodOpacity : !0,
  stopOpacity : !0,
  strokeDasharray : !0,
  strokeDashoffset : !0,
  strokeMiterlimit : !0,
  strokeOpacity : !0,
  strokeWidth : !0
},
    dg = [ "Webkit", "ms", "Moz", "O" ];
Object.keys(_o).forEach(function(e) {
  dg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _o[t] = _o[e]
  })
});
function Gc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? ""
      : n || typeof t != "number" || t === 0 || _o.hasOwnProperty(e) && _o[e]
      ? ("" + t).trim()
      : t + "px"
}
function Qc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0, r = Gc(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, r) : e[n] = r
    }
}
var pg = Z({menuitem : !0}, {
  area : !0,
  base : !0,
  br : !0,
  col : !0,
  embed : !0,
  hr : !0,
  img : !0,
  input : !0,
  keygen : !0,
  link : !0,
  meta : !0,
  param : !0,
  source : !0,
  track : !0,
  wbr : !0
});
function bs(e, t) {
  if (t) {
    if (pg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML))
        throw Error(N(61))
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(N(62))
  }
}
function Ls(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var Ts = null;
function El(e) {
  return e = e.target || e.srcElement || window,
         e.correspondingUseElement && (e = e.correspondingUseElement),
         e.nodeType === 3 ? e.parentNode : e
}
var Is = null, Bn = null, Kn = null;
function su(e) {
  if (e = qo(e)) {
    if (typeof Is != "function")
      throw Error(N(280));
    var t = e.stateNode;
    t && (t = Si(t), Is(e.stateNode, e.type, t))
  }
}
function Xc(e) {
  Bn ? Kn ? Kn.push(e) : Kn = [ e ] : Bn = e
}
function Jc() {
  if (Bn) {
    var e = Bn, t = Kn;
    if (Kn = Bn = null, su(e), t)
      for (e = 0; e < t.length; e++)
        su(t[e])
  }
}
function Zc(e, t) {
  return e(t)
}
function qc() {}
var Bi = !1;
function ed(e, t, n) {
  if (Bi)
    return e(t, n);
  Bi = !0;
  try {
    return Zc(e, t, n)
  } finally {
    Bi = !1, (Bn !== null || Kn !== null) && (qc(), Jc())
  }
}
function jo(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var o = Si(n);
  if (o === null)
    return null;
  n = o[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
          (e = e.type,
           o =
               !(e === "button" || e === "input" || e === "select" ||
                 e === "textarea")),
          e = !o;
      break e;
    default:
      e = !1
  }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(N(231, t, typeof n));
  return n
}
var Rs = !1;
if (Rt)
  try {
    var uo = {};
    Object.defineProperty(uo, "passive", {
      get : function() {
        Rs = !0
      }
    }),
        window.addEventListener("test", uo, uo),
        window.removeEventListener("test", uo, uo)
  } catch {
    Rs = !1
  }
function fg(e, t, n, o, r, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (f) {
    this.onError(f)
  }
}
var Oo = !1, Hr = null, Wr = !1, js = null, hg = {
  onError : function(e) {
    Oo = !0, Hr = e
  }
};
function gg(e, t, n, o, r, i, s, l, a) {
  Oo = !1, Hr = null, fg.apply(hg, arguments)
}
function mg(e, t, n, o, r, i, s, l, a) {
  if (gg.apply(this, arguments), Oo) {
    if (Oo) {
      var u = Hr;
      Oo = !1, Hr = null
    } else
      throw Error(N(198));
    Wr || (Wr = !0, js = u)
  }
}
function _n(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return;)
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e)
  }
  return t.tag === 3 ? n : null
}
function td(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)),
        t !== null)
      return t.dehydrated
  }
  return null
}
function lu(e) {
  if (_n(e) !== e)
    throw Error(N(188))
}
function vg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = _n(e), t === null)
      throw Error(N(188));
    return t !== e ? null : e
  }
  for (var n = e, o = t;;) {
    var r = n.return;
    if (r === null)
      break;
    var i = r.alternate;
    if (i === null) {
      if (o = r.return, o !== null) {
        n = o;
        continue
      }
      break
    }
    if (r.child === i.child) {
      for (i = r.child; i;) {
        if (i === n)
          return lu(r), e;
        if (i === o)
          return lu(r), t;
        i = i.sibling
      }
      throw Error(N(188))
    }
    if (n.return !== o.return)
      n = r, o = i;
    else {
      for (var s = !1, l = r.child; l;) {
        if (l === n) {
          s = !0, n = r, o = i;
          break
        }
        if (l === o) {
          s = !0, o = r, n = i;
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = i.child; l;) {
          if (l === n) {
            s = !0, n = i, o = r;
            break
          }
          if (l === o) {
            s = !0, o = i, n = r;
            break
          }
          l = l.sibling
        }
        if (!s)
          throw Error(N(189))
      }
    }
    if (n.alternate !== o)
      throw Error(N(190))
  }
  if (n.tag !== 3)
    throw Error(N(188));
  return n.stateNode.current === n ? e : t
}
function nd(e) {
  return e = vg(e), e !== null ? od(e) : null
}
function od(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null;) {
    var t = od(e);
    if (t !== null)
      return t;
    e = e.sibling
  }
  return null
}
var rd = Ve.unstable_scheduleCallback, au = Ve.unstable_cancelCallback,
    yg = Ve.unstable_shouldYield, kg = Ve.unstable_requestPaint,
    te = Ve.unstable_now, wg = Ve.unstable_getCurrentPriorityLevel,
    Cl = Ve.unstable_ImmediatePriority, id = Ve.unstable_UserBlockingPriority,
    Yr = Ve.unstable_NormalPriority, Sg = Ve.unstable_LowPriority,
    sd = Ve.unstable_IdlePriority, vi = null, kt = null;
function _g(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}
var lt = Math.clz32 ? Math.clz32 : xg, Og = Math.log, Ng = Math.LN2;
function xg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Og(e) / Ng | 0) | 0
}
var dr = 64, pr = 4194304;
function wo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var o = 0, r = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~r;
    l !== 0 ? o = wo(l) : (i &= s, i !== 0 && (o = wo(i)))
  } else
    s = n & ~r, s !== 0 ? o = wo(s) : i !== 0 && (o = wo(i));
  if (o === 0)
    return 0;
  if (t !== 0 && t !== o && !(t & r) &&
      (r = o & -o, i = t & -t, r >= i || r === 16 && (i & 4194240) !== 0))
    return t;
  if (o & 4 && (o |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= o; 0 < t;)
      n = 31 - lt(t), r = 1 << n, o |= e[n], t &= ~r;
  return o
}
function Pg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}
function Eg(e, t) {
  for (var n = e.suspendedLanes,
           o = e.pingedLanes,
           r = e.expirationTimes,
           i = e.pendingLanes;
       0 < i;) {
    var s = 31 - lt(i), l = 1 << s, a = r[s];
    a === -1 ? (!(l & n) || l & o) && (r[s] = Pg(l, t))
             : a <= t && (e.expiredLanes |= l),
        i &= ~l
  }
}
function Fs(e) {
  return e = e.pendingLanes & -1073741825,
         e !== 0              ? e
             : e & 1073741824 ? 1073741824
                              : 0
}
function ld() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e
}
function Ki(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t
}
function Jo(e, t, n) {
  e.pendingLanes |= t,
      t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0),
      e = e.eventTimes, t = 31 - lt(t), e[t] = n
}
function Cg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0,
  e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t,
  t = e.entanglements;
  var o = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var r = 31 - lt(n), i = 1 << r;
    t[r] = 0, o[r] = -1, e[r] = -1, n &= ~i
  }
}
function bl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var o = 31 - lt(n), r = 1 << o;
    r&t|e[o]&t && (e[o] |= t), n &= ~r
  }
}
var $ = 0;
function ad(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ud, Ll, cd, dd, pd,
    Ds = !1, fr = [], Yt = null, Gt = null, Qt = null, Fo = new Map,
    Do = new Map, $t = [],
    bg =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit"
            .split(" ");
function uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Fo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Do.delete(t.pointerId)
  }
}
function co(e, t, n, o, r, i) {
  return e === null || e.nativeEvent !== i
      ? (e = {
          blockedOn : t,
          domEventName : n,
          eventSystemFlags : o,
          nativeEvent : i,
          targetContainers : [ r ]
        },
         t !== null && (t = qo(t), t !== null && Ll(t)),
         e)
      : (e.eventSystemFlags |= o,
         t = e.targetContainers,
         r !== null && t.indexOf(r) === -1 && t.push(r),
         e)
}
function Lg(e, t, n, o, r) {
  switch (t) {
    case "focusin":
      return Yt = co(Yt, e, t, n, o, r), !0;
    case "dragenter":
      return Gt = co(Gt, e, t, n, o, r), !0;
    case "mouseover":
      return Qt = co(Qt, e, t, n, o, r), !0;
    case "pointerover":
      var i = r.pointerId;
      return Fo.set(i, co(Fo.get(i) || null, e, t, n, o, r)), !0;
    case "gotpointercapture":
      return i = r.pointerId, Do.set(i, co(Do.get(i) || null, e, t, n, o, r)),
             !0
  }
  return !1
}
function fd(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = td(n), t !== null) {
          e.blockedOn = t, pd(e.priority, function() {
            cd(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}
function Lr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = As(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var o = new n.constructor(n.type, n);
      Ts = o, n.target.dispatchEvent(o), Ts = null
    } else
      return t = qo(n), t !== null && Ll(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}
function cu(e, t, n) {
  Lr(e) && n.delete(t)
}
function Tg() {
  Ds = !1, Yt !== null && Lr(Yt) && (Yt = null),
  Gt !== null && Lr(Gt) && (Gt = null), Qt !== null && Lr(Qt) && (Qt = null),
  Fo.forEach(cu), Do.forEach(cu)
}
function po(e, t) {
  e.blockedOn === t &&
      (e.blockedOn = null,
       Ds ||
           (Ds = !0,
            Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Tg)))
}
function Ao(e) {
  function t(r) {
    return po(r, e)
  }
  if (0 < fr.length) {
    po(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var o = fr[n];
      o.blockedOn === e && (o.blockedOn = null)
    }
  }
  for (Yt !== null && po(Yt, e),
       Gt !== null && po(Gt, e),
       Qt !== null && po(Qt, e),
       Fo.forEach(t),
       Do.forEach(t),
       n = 0;
       n < $t.length;
       n++)
    o = $t[n], o.blockedOn === e && (o.blockedOn = null);
  for (; 0 < $t.length && (n = $t[0], n.blockedOn === null);)
    fd(n), n.blockedOn === null && $t.shift()
}
var Hn = At.ReactCurrentBatchConfig, Qr = !0;
function Ig(e, t, n, o) {
  var r = $, i = Hn.transition;
  Hn.transition = null;
  try {
    $ = 1, Tl(e, t, n, o)
  } finally {
    $ = r, Hn.transition = i
  }
}
function Rg(e, t, n, o) {
  var r = $, i = Hn.transition;
  Hn.transition = null;
  try {
    $ = 4, Tl(e, t, n, o)
  } finally {
    $ = r, Hn.transition = i
  }
}
function Tl(e, t, n, o) {
  if (Qr) {
    var r = As(e, t, n, o);
    if (r === null)
      es(e, t, o, Xr, n), uu(e, o);
    else if (Lg(r, e, t, n, o))
      o.stopPropagation();
    else if (uu(e, o), t & 4 && -1 < bg.indexOf(e)) {
      for (; r !== null;) {
        var i = qo(r);
        if (i !== null && ud(i),
            i = As(e, t, n, o),
            i === null && es(e, t, o, Xr, n),
            i === r)
          break;
        r = i
      }
      r !== null && o.stopPropagation()
    } else
      es(e, t, o, null, n)
  }
}
var Xr = null;
function As(e, t, n, o) {
  if (Xr = null, e = El(o), e = dn(e), e !== null)
    if (t = _n(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = td(t), e !== null)
        return e;
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
    } else
      t !== e && (e = null);
  return Xr = e, null
}
function hd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wg()) {
        case Cl:
          return 1;
        case id:
          return 4;
        case Yr:
        case Sg:
          return 16;
        case sd:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var Kt = null, Il = null, Tr = null;
function gd() {
  if (Tr)
    return Tr;
  var e, t = Il, n = t.length, o, r = "value" in Kt ? Kt.value : Kt.textContent,
         i = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++)
    ;
  var s = n - e;
  for (o = 1; o <= s && t[n - o] === r[i - o]; o++)
    ;
  return Tr = r.slice(e, 1 < o ? 1 - o : void 0)
}
function Ir(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13))
                         : e = t,
                           e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}
function hr() {
  return !0
}
function du() {
  return !1
}
function Be(e) {
  function t(n, o, r, i, s) {
    this._reactName = n, this._targetInst = r, this.type = o,
    this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented =
               (i.defaultPrevented != null ? i.defaultPrevented
                                           : i.returnValue === !1)
               ? hr
               : du,
           this.isPropagationStopped = du, this
  }
  return Z(t.prototype, {
           preventDefault : function() {
             this.defaultPrevented = !0;
             var n = this.nativeEvent;
             n &&
                 (n.preventDefault ? n.preventDefault()
                                   : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                  this.isDefaultPrevented = hr)
           },
           stopPropagation : function() {
             var n = this.nativeEvent;
             n &&
                 (n.stopPropagation ? n.stopPropagation()
                                    : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                  this.isPropagationStopped = hr)
           },
           persist : function() {},
           isPersistent : hr
         }),
         t
}
var oo = {
  eventPhase : 0,
  bubbles : 0,
  cancelable : 0,
  timeStamp : function(e) {
    return e.timeStamp || Date.now()
  },
  defaultPrevented : 0,
  isTrusted : 0
},
    Rl = Be(oo), Zo = Z({}, oo, {view : 0, detail : 0}), jg = Be(Zo), Hi, Wi,
    fo,
    yi = Z({}, Zo, {
      screenX : 0,
      screenY : 0,
      clientX : 0,
      clientY : 0,
      pageX : 0,
      pageY : 0,
      ctrlKey : 0,
      shiftKey : 0,
      altKey : 0,
      metaKey : 0,
      getModifierState : jl,
      button : 0,
      buttons : 0,
      relatedTarget : function(e) {
        return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement ? e.toElement : e.fromElement
            : e.relatedTarget
      },
      movementX : function(e) {
        return "movementX" in e
            ? e.movementX
            : (e !== fo &&
                   (fo && e.type === "mousemove" ? (Hi = e.screenX - fo.screenX,
                                                    Wi = e.screenY - fo.screenY)
                                                 : Wi = Hi = 0,
                    fo = e),
               Hi)
      },
      movementY : function(e) {
        return "movementY" in e ? e.movementY : Wi
      }
    }),
    pu = Be(yi), Fg = Z({}, yi, {dataTransfer : 0}), Dg = Be(Fg),
    Ag = Z({}, Zo, {relatedTarget : 0}), Yi = Be(Ag),
    Ug = Z({}, oo, {animationName : 0, elapsedTime : 0, pseudoElement : 0}),
    Mg = Be(Ug),
    zg = Z({}, oo, {
      clipboardData : function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    Vg = Be(zg), $g = Z({}, oo, {data : 0}), fu = Be($g), Bg = {
      Esc : "Escape",
      Spacebar : " ",
      Left : "ArrowLeft",
      Up : "ArrowUp",
      Right : "ArrowRight",
      Down : "ArrowDown",
      Del : "Delete",
      Win : "OS",
      Menu : "ContextMenu",
      Apps : "ContextMenu",
      Scroll : "ScrollLock",
      MozPrintableKey : "Unidentified"
    },
    Kg = {
      8 : "Backspace",
      9 : "Tab",
      12 : "Clear",
      13 : "Enter",
      16 : "Shift",
      17 : "Control",
      18 : "Alt",
      19 : "Pause",
      20 : "CapsLock",
      27 : "Escape",
      32 : " ",
      33 : "PageUp",
      34 : "PageDown",
      35 : "End",
      36 : "Home",
      37 : "ArrowLeft",
      38 : "ArrowUp",
      39 : "ArrowRight",
      40 : "ArrowDown",
      45 : "Insert",
      46 : "Delete",
      112 : "F1",
      113 : "F2",
      114 : "F3",
      115 : "F4",
      116 : "F5",
      117 : "F6",
      118 : "F7",
      119 : "F8",
      120 : "F9",
      121 : "F10",
      122 : "F11",
      123 : "F12",
      144 : "NumLock",
      145 : "ScrollLock",
      224 : "Meta"
    },
    Hg = {
      Alt : "altKey",
      Control : "ctrlKey",
      Meta : "metaKey",
      Shift : "shiftKey"
    };
function Wg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hg[e]) ? !!t[e] : !1
}
function jl() {
  return Wg
}
var Yg = Z({}, Zo, {
  key : function(e) {
    if (e.key) {
      var t = Bg[e.key] || e.key;
      if (t !== "Unidentified")
        return t
    }
    return e.type === "keypress"
        ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Kg[e.keyCode] || "Unidentified"
        : ""
  },
  code : 0,
  location : 0,
  ctrlKey : 0,
  shiftKey : 0,
  altKey : 0,
  metaKey : 0,
  repeat : 0,
  locale : 0,
  getModifierState : jl,
  charCode : function(e) {
    return e.type === "keypress" ? Ir(e) : 0
  },
  keyCode : function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which : function(e) {
    return e.type === "keypress"                     ? Ir(e)
        : e.type === "keydown" || e.type === "keyup" ? e.keyCode
                                                     : 0
  }
}),
    Gg = Be(Yg), Qg = Z({}, yi, {
                   pointerId : 0,
                   width : 0,
                   height : 0,
                   pressure : 0,
                   tangentialPressure : 0,
                   tiltX : 0,
                   tiltY : 0,
                   twist : 0,
                   pointerType : 0,
                   isPrimary : 0
                 }),
    hu = Be(Qg), Xg = Z({}, Zo, {
                   touches : 0,
                   targetTouches : 0,
                   changedTouches : 0,
                   altKey : 0,
                   metaKey : 0,
                   ctrlKey : 0,
                   shiftKey : 0,
                   getModifierState : jl
                 }),
    Jg = Be(Xg),
    Zg = Z({}, oo, {propertyName : 0, elapsedTime : 0, pseudoElement : 0}),
    qg = Be(Zg), em = Z({}, yi, {
                   deltaX : function(e) {
                     return "deltaX" in e     ? e.deltaX
                         : "wheelDeltaX" in e ? -e.wheelDeltaX
                                              : 0
                   },
                   deltaY : function(e) {
                     return "deltaY" in e     ? e.deltaY
                         : "wheelDeltaY" in e ? -e.wheelDeltaY
                         : "wheelDelta" in e  ? -e.wheelDelta
                                              : 0
                   },
                   deltaZ : 0,
                   deltaMode : 0
                 }),
    tm = Be(em), nm = [ 9, 13, 27, 32 ],
    Fl = Rt && "CompositionEvent" in window, No = null;
Rt && "documentMode" in document && (No = document.documentMode);
var om = Rt && "TextEvent" in window && !No,
    md = Rt && (!Fl || No && 8 < No && 11 >= No), gu = String.fromCharCode(32),
    mu = !1;
function vd(e, t) {
  switch (e) {
    case "keyup":
      return nm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}
function yd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var In = !1;
function rm(e, t) {
  switch (e) {
    case "compositionend":
      return yd(t);
    case "keypress":
      return t.which !== 32 ? null : (mu = !0, gu);
    case "textInput":
      return e = t.data, e === gu && mu ? null : e;
    default:
      return null
  }
}
function im(e, t) {
  if (In)
    return e === "compositionend" || !Fl && vd(e, t)
        ? (e = gd(), Tr = Il = Kt = null, In = !1, e)
        : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return md && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var sm = {
  color : !0,
  date : !0,
  datetime : !0,
  "datetime-local" : !0,
  email : !0,
  month : !0,
  number : !0,
  password : !0,
  range : !0,
  search : !0,
  tel : !0,
  text : !0,
  time : !0,
  url : !0,
  week : !0
};
function vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sm[e.type] : t === "textarea"
}
function kd(e, t, n, o) {
  Xc(o), t = Jr(t, "onChange"),
         0 < t.length &&
      (n = new Rl("onChange", "change", null, n, o),
       e.push({event : n, listeners : t}))
}
var xo = null, Uo = null;
function lm(e) {
  Ld(e, 0)
}
function ki(e) {
  var t = Fn(e);
  if (Bc(t))
    return e
}
function am(e, t) {
  if (e === "change")
    return t
}
var wd = !1;
if (Rt) {
  var Gi;
  if (Rt) {
    var Qi = "oninput" in document;
    if (!Qi) {
      var yu = document.createElement("div");
      yu.setAttribute("oninput", "return;"),
          Qi = typeof yu.oninput == "function"
    }
    Gi = Qi
  } else
    Gi = !1;
  wd = Gi && (!document.documentMode || 9 < document.documentMode)
}
function ku() {
  xo && (xo.detachEvent("onpropertychange", Sd), Uo = xo = null)
}
function Sd(e) {
  if (e.propertyName === "value" && ki(Uo)) {
    var t = [];
    kd(t, Uo, e, El(e)), ed(lm, t)
  }
}
function um(e, t, n) {
  e === "focusin"
      ? (ku(), xo = t, Uo = n, xo.attachEvent("onpropertychange", Sd))
      : e === "focusout" && ku()
}
function cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ki(Uo)
}
function dm(e, t) {
  if (e === "click")
    return ki(t)
}
function pm(e, t) {
  if (e === "input" || e === "change")
    return ki(t)
}
function fm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ut = typeof Object.is == "function" ? Object.is : fm;
function Mo(e, t) {
  if (ut(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  for (o = 0; o < n.length; o++) {
    var r = n[o];
    if (!ks.call(t, r) || !ut(e[r], t[r]))
      return !1
  }
  return !0
}
function wu(e) {
  for (; e && e.firstChild;)
    e = e.firstChild;
  return e
}
function Su(e, t) {
  var n = wu(e);
  e = 0;
  for (var o; n;) {
    if (n.nodeType === 3) {
      if (o = e + n.textContent.length, e <= t && o >= t)
        return {node : n, offset : t - e};
      e = o
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      } n = void 0
    } n = wu(n)
  }
}
function _d(e, t) {
  return e && t ? e === t             ? !0
          : e && e.nodeType === 3     ? !1
          : t && t.nodeType === 3     ? _d(e, t.parentNode)
          : "contains" in e           ? e.contains(t)
          : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
                                      : !1
                : !1
}
function Od() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Kr(e.document)
  }
  return t
}
function Dl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t &&
      (t === "input" &&
           (e.type === "text" || e.type === "search" || e.type === "tel" ||
            e.type === "url" || e.type === "password") ||
       t === "textarea" || e.contentEditable === "true")
}
function hm(e) {
  var t = Od(), n = e.focusedElem, o = e.selectionRange;
  if (t !== n && n && n.ownerDocument &&
      _d(n.ownerDocument.documentElement, n)) {
    if (o !== null && Dl(n)) {
      if (t = o.start,
          e = o.end,
          e === void 0 && (e = t),
          "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (
          e = (t = n.ownerDocument || document) && t.defaultView || window,
          e.getSelection) {
        e = e.getSelection();
        var r = n.textContent.length, i = Math.min(o.start, r);
        o = o.end === void 0 ? i : Math.min(o.end, r),
        !e.extend && i > o && (r = o, o = i, i = r), r = Su(n, i);
        var s = Su(n, o);
        r && s &&
            (e.rangeCount !== 1 || e.anchorNode !== r.node ||
             e.anchorOffset !== r.offset || e.focusNode !== s.node ||
             e.focusOffset !== s.offset) &&
            (t = t.createRange(),
             t.setStart(r.node, r.offset),
             e.removeAllRanges(),
             i > o ? (e.addRange(t), e.extend(s.node, s.offset))
                   : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;)
      e.nodeType === 1 &&
          t.push({element : e, left : e.scrollLeft, top : e.scrollTop});
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var gm = Rt && "documentMode" in document && 11 >= document.documentMode,
    Rn = null, Us = null, Po = null, Ms = !1;
function _u(e, t, n) {
  var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ms || Rn == null || Rn !== Kr(o) ||
      (o = Rn,
       "selectionStart" in o && Dl(o)
           ? o = {start : o.selectionStart, end : o.selectionEnd}
           : (o = (o.ownerDocument && o.ownerDocument.defaultView || window)
                      .getSelection(),
              o = {
                anchorNode : o.anchorNode,
                anchorOffset : o.anchorOffset,
                focusNode : o.focusNode,
                focusOffset : o.focusOffset
              }),
       Po && Mo(Po, o) ||
           (Po = o,
            o = Jr(Us, "onSelect"),
            0 < o.length &&
                (t = new Rl("onSelect", "select", null, t, n),
                 e.push({event : t, listeners : o}),
                 t.target = Rn)))
}
function gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t,
         n["Moz" + e] = "moz" + t, n
}
var jn = {
  animationend : gr("Animation", "AnimationEnd"),
  animationiteration : gr("Animation", "AnimationIteration"),
  animationstart : gr("Animation", "AnimationStart"),
  transitionend : gr("Transition", "TransitionEnd")
},
    Xi = {}, Nd = {};
Rt &&
    (Nd = document.createElement("div").style,
     "AnimationEvent" in window ||
         (delete jn.animationend.animation,
          delete jn.animationiteration.animation,
          delete jn.animationstart.animation),
     "TransitionEvent" in window || delete jn.transitionend.transition);
function wi(e) {
  if (Xi[e])
    return Xi[e];
  if (!jn[e])
    return e;
  var t = jn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Nd)
      return Xi[e] = t[n];
  return e
}
var xd = wi("animationend"), Pd = wi("animationiteration"),
    Ed = wi("animationstart"), Cd = wi("transitionend"), bd = new Map,
    Ou =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel"
            .split(" ");
function rn(e, t) {
  bd.set(e, t), Sn(t, [ e ])
}
for (var Ji = 0; Ji < Ou.length; Ji++) {
  var Zi = Ou[Ji], mm = Zi.toLowerCase(),
      vm = Zi[0].toUpperCase() + Zi.slice(1);
  rn(mm, "on" + vm)
}
rn(xd, "onAnimationEnd");
rn(Pd, "onAnimationIteration");
rn(Ed, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Cd, "onTransitionEnd");
Qn("onMouseEnter", [ "mouseout", "mouseover" ]);
Qn("onMouseLeave", [ "mouseout", "mouseover" ]);
Qn("onPointerEnter", [ "pointerout", "pointerover" ]);
Qn("onPointerLeave", [ "pointerout", "pointerover" ]);
Sn("onChange",
   "change click focusin focusout input keydown keyup selectionchange".split(
       " "));
Sn("onSelect",
   "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange"
       .split(" "));
Sn("onBeforeInput", [ "compositionend", "keypress", "textInput", "paste" ]);
Sn("onCompositionEnd",
   "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart",
   "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate",
   "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var So =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting"
            .split(" "),
    ym = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(So));
function Nu(e, t, n) {
  var o = e.type || "unknown-event";
  e.currentTarget = n, mg(o, t, void 0, e), e.currentTarget = null
}
function Ld(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var o = e[n], r = o.event;
    o = o.listeners;
    e: {
      var i = void 0; if (t) for (var s = o.length - 1; 0 <= s; s--) {
        var l = o[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && r.isPropagationStopped())
          break e;
        Nu(r, l, u), i = a
      } else for (s = 0; s < o.length; s++) {
        if (l = o[s],
            a = l.instance,
            u = l.currentTarget,
            l = l.listener,
            a !== i && r.isPropagationStopped())
          break e;
        Nu(r, l, u), i = a
      }
    }
  }
  if (Wr)
    throw e = js, Wr = !1, js = null, e
}
function W(e, t) {
  var n = t[Ks];
  n === void 0 && (n = t[Ks] = new Set);
  var o = e + "__bubble";
  n.has(o) || (Td(t, e, 2, !1), n.add(o))
}
function qi(e, t, n) {
  var o = 0;
  t && (o |= 4), Td(n, e, o, t)
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function zo(e) {
  if (!e[mr]) {
    e[mr] = !0, Uc.forEach(function(n) {
      n !== "selectionchange" && (ym.has(n) || qi(n, !1, e), qi(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || (t[mr] = !0, qi("selectionchange", !1, t))
  }
}
function Td(e, t, n, o) {
  switch (hd(t)) {
    case 1:
      var r = Ig;
      break;
    case 4:
      r = Rg;
      break;
    default:
      r = Tl
  }
  n = r.bind(null, t, n, e), r = void 0,
  !Rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
  o ? r !== void 0 ? e.addEventListener(t, n, {capture : !0, passive : r})
                   : e.addEventListener(t, n, !0)
      : r !== void 0 ? e.addEventListener(t, n, {passive : r})
                     : e.addEventListener(t, n, !1)
}
function es(e, t, n, o, r) {
  var i = o;
  if (!(t & 1) && !(t & 2) && o !== null)
    e: for (;;) {
      if (o === null)
        return;
      var s = o.tag;
      if (s === 3 || s === 4) {
        var l = o.stateNode.containerInfo;
        if (l === r || l.nodeType === 8 && l.parentNode === r)
          break;
        if (s === 4)
          for (s = o.return; s !== null;) {
            var a = s.tag;
            if ((a === 3 || a === 4) &&
                (a = s.stateNode.containerInfo,
                 a === r || a.nodeType === 8 && a.parentNode === r))
              return;
            s = s.return
          }
        for (; l !== null;) {
          if (s = dn(l), s === null)
            return;
          if (a = s.tag, a === 5 || a === 6) {
            o = i = s;
            continue e
          }
          l = l.parentNode
        }
      }
      o = o.return
    }
  ed(function() {
    var u = i, f = El(n), d = [];
    e: {
      var h = bd.get(e); if (h !== void 0) {
        var m = Rl, v = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            m = Gg;
            break;
          case "focusin":
            v = "focus", m = Yi;
            break;
          case "focusout":
            v = "blur", m = Yi;
            break;
          case "beforeblur":
          case "afterblur":
            m = Yi;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Dg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Jg;
            break;
          case xd:
          case Pd:
          case Ed:
            m = Mg;
            break;
          case Cd:
            m = qg;
            break;
          case "scroll":
            m = jg;
            break;
          case "wheel":
            m = tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Vg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = hu
        }
        var w = (t & 4) !== 0, O = !w && e === "scroll",
            p = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var c = u, g; c !== null;) {
          g = c;
          var k = g.stateNode;
          if (g.tag === 5 && k !== null &&
                  (g = k,
                   p !== null &&
                       (k = jo(c, p), k != null && w.push(Vo(c, k, g)))),
              O)
            break;
          c = c.return
        }
        0 < w.length &&
            (h = new m(h, v, null, n, f), d.push({event : h, listeners : w}))
      }
    } if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover",
            m = e === "mouseout" || e === "pointerout",
            h && n !== Ts && (v = n.relatedTarget || n.fromElement) &&
                (dn(v) || v[jt])) break e;
        if ((m || h) &&
            (h = f.window === f          ? f
                 : (h = f.ownerDocument) ? h.defaultView || h.parentWindow
                                         : window,
             m ? (v = n.relatedTarget || n.toElement,
                  m = u,
                  v = v ? dn(v) : null,
                  v !== null &&
                      (O = _n(v), v !== O || v.tag !== 5 && v.tag !== 6) &&
                      (v = null))
               : (m = null, v = u),
             m !== v)) {
          if (w = pu,
              k = "onMouseLeave",
              p = "onMouseEnter",
              c = "mouse",
              (e === "pointerout" || e === "pointerover") &&
                  (w = hu,
                   k = "onPointerLeave",
                   p = "onPointerEnter",
                   c = "pointer"),
              O = m == null ? h : Fn(m),
              g = v == null ? h : Fn(v),
              h = new w(k, c + "leave", m, n, f),
              h.target = O,
              h.relatedTarget = g,
              k = null,
              dn(f) === u &&
                  (w = new w(p, c + "enter", v, n, f),
                   w.target = g,
                   w.relatedTarget = O,
                   k = w),
              O = k,
              m && v)
            t: {
              for (w = m, p = v, c = 0, g = w; g; g = bn(g)) c++;
              for (g = 0, k = p; k; k = bn(k)) g++;
              for (; 0 < c - g;) w = bn(w), c--;
              for (; 0 < g - c;) p = bn(p), g--;
              for (; c--;) {
                if (w === p || p !== null && w === p.alternate)
                  break t;
                w = bn(w), p = bn(p)
              } w = null
            } else w = null;
          m !== null && xu(d, h, m, w, !1),
              v !== null && O !== null && xu(d, O, v, w, !0)
        }
      } e: {
        if (h = u ? Fn(u) : window,
            m = h.nodeName && h.nodeName.toLowerCase(),
            m === "select" || m === "input" && h.type === "file") var _ = am;
        else if (vu(h)) if (wd) _ = pm;
        else {
          _ = cm;
          var S = um
        } else(m = h.nodeName) &&
        m.toLowerCase() === "input" &&
        (h.type === "checkbox" || h.type === "radio") && (_ = dm);
        if (_ && (_ = _(e, u))) {
          kd(d, _, n, f);
          break e
        } S &&
            S(e, h, u),
        e === "focusout" && (S = h._wrapperState) && S.controlled &&
            h.type === "number" && Ps(h, "number", h.value)
      } switch (S = u ? Fn(u) : window, e) {
        case "focusin":
          (vu(S) || S.contentEditable === "true") &&
              (Rn = S, Us = u, Po = null);
          break;
        case "focusout":
          Po = Us = Rn = null;
          break;
        case "mousedown":
          Ms = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ms = !1, _u(d, n, f);
          break;
        case "selectionchange":
          if (gm)
            break;
        case "keydown":
        case "keyup":
          _u(d, n, f)
      }
      var x;
      if (Fl)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e
          } P = void 0
        } else In
            ? vd(e, n) && (P = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 &&
                (P = "onCompositionStart");
      P &&
          (md && n.locale !== "ko" &&
               (In || P !== "onCompositionStart"
                    ? P === "onCompositionEnd" && In && (x = gd())
                    : (Kt = f,
                       Il = "value" in Kt ? Kt.value : Kt.textContent,
                       In = !0)),
           S = Jr(u, P),
           0 < S.length &&
               (P = new fu(P, e, null, n, f),
                d.push({event : P, listeners : S}),
                x ? P.data = x : (x = yd(n), x !== null && (P.data = x)))),
          (x = om ? rm(e, n) : im(e, n)) &&
          (u = Jr(u, "onBeforeInput"),
           0 < u.length &&
               (f = new fu("onBeforeInput", "beforeinput", null, n, f),
                d.push({event : f, listeners : u}),
                f.data = x))
    }
    Ld(d, t)
  })
}
function Vo(e, t, n) {
  return {
    instance: e, listener: t, currentTarget: n
  }
}
function Jr(e, t) {
  for (var n = t + "Capture", o = []; e !== null;) {
    var r = e, i = r.stateNode;
    r.tag === 5 && i !== null &&
        (r = i,
         i = jo(e, n),
         i != null && o.unshift(Vo(e, i, r)),
         i = jo(e, t),
         i != null && o.push(Vo(e, i, r))),
        e = e.return
  }
  return o
}
function bn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function xu(e, t, n, o, r) {
  for (var i = t._reactName, s = []; n !== null && n !== o;) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === o)
      break;
    l.tag === 5 && u !== null &&
        (l = u,
         r ? (a = jo(n, i), a != null && s.unshift(Vo(n, a, l)))
           : r || (a = jo(n, i), a != null && s.push(Vo(n, a, l)))),
        n = n.return
  }
  s.length !== 0 && e.push({event : t, listeners : s})
}
var km = /\r\n?/g, wm = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e)
      .replace(
          km,
          `
`).replace(wm, "")
}
function vr(e, t, n) {
  if (t = Pu(t), Pu(e) !== t && n)
    throw Error(N(425))
}
function Zr() {}
var zs = null, Vs = null;
function $s(e, t) {
  return e === "textarea" || e === "noscript" ||
      typeof t.children == "string" || typeof t.children == "number" ||
      typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null
}
var Bs=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(Om)}:Bs;
function Om(e) {
  setTimeout(function() {
    throw e
  })
}
function ts(e, t) {
  var n = t, o = 0;
  do {
    var r = n.nextSibling;
    if (e.removeChild(n), r && r.nodeType === 8)
      if (n = r.data, n === "/$") {
        if (o === 0) {
          e.removeChild(r), Ao(t);
          return
        }
        o--
      } else
        n !== "$" && n !== "$?" && n !== "$!" || o++;
    n = r
  } while (n);
  Ao(t)
}
function Xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null
    }
  }
  return e
}
function Cu(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--
      } else
        n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var ro = Math.random().toString(36).slice(2), vt = "__reactFiber$" + ro,
    $o = "__reactProps$" + ro, jt = "__reactContainer$" + ro,
    Ks = "__reactEvents$" + ro, Nm = "__reactListeners$" + ro,
    xm = "__reactHandles$" + ro;
function dn(e) {
  var t = e[vt];
  if (t)
    return t;
  for (var n = e.parentNode; n;) {
    if (t = n[jt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Cu(e); e !== null;) {
          if (n = e[vt])
            return n;
          e = Cu(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}
function qo(e) {
  return e = e[vt] || e[jt],
         !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null
                                                                         : e
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(N(33))
}
function Si(e) {
  return e[$o] || null
}
var Hs = [], Dn = -1;
function sn(e) {
  return {
    current: e
  }
}
function Y(e) {
  0 > Dn || (e.current = Hs[Dn], Hs[Dn] = null, Dn--)
}
function K(e, t) {
  Dn++, Hs[Dn] = e.current, e.current = t
}
var on = {}, ve = sn(on), Le = sn(!1), mn = on;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return on;
  var o = e.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
    return o.__reactInternalMemoizedMaskedChildContext;
  var r = {}, i;
  for (i in n)
    r[i] = t[i];
  return o &&
             (e = e.stateNode,
              e.__reactInternalMemoizedUnmaskedChildContext = t,
              e.__reactInternalMemoizedMaskedChildContext = r),
         r
}
function Te(e) {
  return e = e.childContextTypes, e != null
}
function qr() {
  Y(Le), Y(ve)
}
function bu(e, t, n) {
  if (ve.current !== on)
    throw Error(N(168));
  K(ve, t), K(Le, n)
}
function Id(e, t, n) {
  var o = e.stateNode;
  if (t = t.childContextTypes, typeof o.getChildContext != "function")
    return n;
  o = o.getChildContext();
  for (var r in o)
    if (!(r in t))
      throw Error(N(108, ug(e) || "Unknown", r));
  return Z({}, n, o)
}
function ei(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext ||
             on,
         mn = ve.current, K(ve, e), K(Le, Le.current), !0
}
function Lu(e, t, n) {
  var o = e.stateNode;
  if (!o)
    throw Error(N(169));
  n ? (e = Id(e, t, mn),
       o.__reactInternalMemoizedMergedChildContext = e,
       Y(Le),
       Y(ve),
       K(ve, e))
    : Y(Le),
      K(Le, n)
}
var bt = null, _i = !1, ns = !1;
function Rd(e) {
  bt === null ? bt = [ e ] : bt.push(e)
}
function Pm(e) {
  _i = !0, Rd(e)
}
function ln() {
  if (!ns && bt !== null) {
    ns = !0;
    var e = 0, t = $;
    try {
      var n = bt;
      for ($ = 1; e < n.length; e++) {
        var o = n[e];
        do
          o = o(!0);
        while (o !== null)
      }
      bt = null, _i = !1
    } catch (r) {
      throw bt !== null && (bt = bt.slice(e + 1)), rd(Cl, ln), r
    } finally {
      $ = t, ns = !1
    }
  }
  return null
}
var An = [], Un = 0, ti = null, ni = 0, Ke = [], He = 0, vn = null, Lt = 1,
    Tt = "";
function an(e, t) {
  An[Un++] = ni, An[Un++] = ti, ti = e, ni = t
}
function jd(e, t, n) {
  Ke[He++] = Lt, Ke[He++] = Tt, Ke[He++] = vn, vn = e;
  var o = Lt;
  e = Tt;
  var r = 32 - lt(o) - 1;
  o &= ~(1 << r), n += 1;
  var i = 32 - lt(t) + r;
  if (30 < i) {
    var s = r - r % 5;
    i = (o & (1 << s) - 1).toString(32), o >>= s, r -= s,
    Lt = 1 << 32 - lt(t) + r | n << r | o, Tt = i + e
  } else
    Lt = 1 << i | n << r | o, Tt = e
}
function Al(e) {
  e.return !== null && (an(e, 1), jd(e, 1, 0))
}
function Ul(e) {
  for (; e === ti;)
    ti = An[--Un], An[Un] = null, ni = An[--Un], An[Un] = null;
  for (; e === vn;)
    vn = Ke[--He], Ke[He] = null, Tt = Ke[--He], Ke[He] = null, Lt = Ke[--He],
    Ke[He] = null
}
var ze = null, Me = null, G = !1, st = null;
function Fd(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions,
  t === null ? (e.deletions = [ n ], e.flags |= 16) : t.push(n)
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 ||
                     n.toLowerCase() !== t.nodeName.toLowerCase()
                 ? null
                 : t,
             t !== null ? (e.stateNode = t, ze = e, Me = Xt(t.firstChild), !0)
                        : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
             t !== null ? (e.stateNode = t, ze = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t,
             t !== null ? (n = vn !== null ? {id : Lt, overflow : Tt} : null,
                           e.memoizedState = {
                             dehydrated : t,
                             treeContext : n,
                             retryLane : 1073741824
                           },
                           n = We(18, null, null, 0),
                           n.stateNode = t,
                           n.return = e,
                           e.child = n,
                           ze = e,
                           Me = null,
                           !0)
                        : !1;
    default:
      return !1
  }
}
function Ws(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ys(e) {
  if (G) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Tu(e, t)) {
        if (Ws(e))
          throw Error(N(418));
        t = Xt(n.nextSibling);
        var o = ze;
        t && Tu(e, t) ? Fd(o, n)
                      : (e.flags = e.flags & -4097 | 2, G = !1, ze = e)
      }
    } else {
      if (Ws(e))
        throw Error(N(418));
      e.flags = e.flags & -4097 | 2, G = !1, ze = e
    }
  }
}
function Iu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  ze = e
}
function yr(e) {
  if (e !== ze)
    return !1;
  if (!G)
    return Iu(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) &&
          (t = e.type,
           t = t !== "head" && t !== "body" && !$s(e.type, e.memoizedProps)),
      t && (t = Me)) {
    if (Ws(e))
      throw Dd(), Error(N(418));
    for (; t;)
      Fd(e, t), t = Xt(t.nextSibling)
  }
  if (Iu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Xt(e.nextSibling);
              break e
            }
            t--
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      } Me = null
    }
  } else
    Me = ze ? Xt(e.stateNode.nextSibling) : null;
  return !0
}
function Dd() {
  for (var e = Me; e;)
    e = Xt(e.nextSibling)
}
function Jn() {
  Me = ze = null, G = !1
}
function Ml(e) {
  st === null ? st = [ e ] : st.push(e)
}
var Em = At.ReactCurrentBatchConfig;
function rt(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}
var oi = sn(null), ri = null, Mn = null, zl = null;
function Vl() {
  zl = Mn = ri = null
}
function $l(e) {
  var t = oi.current;
  Y(oi), e._currentValue = t
}
function Gs(e, t, n) {
  for (; e !== null;) {
    var o = e.alternate;
    if ((e.childLanes & t) !== t
            ? (e.childLanes |= t, o !== null && (o.childLanes |= t))
            : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
      break;
    e = e.return
  }
}
function Wn(e, t) {
  ri = e, zl = Mn = null, e = e.dependencies,
  e !== null && e.firstContext !== null &&
      (e.lanes & t && (be = !0), e.firstContext = null)
}
function Qe(e) {
  var t = e._currentValue;
  if (zl !== e)
    if (e = {context : e, memoizedValue : t, next : null}, Mn === null) {
      if (ri === null)
        throw Error(N(308));
      Mn = e, ri.dependencies = { lanes : 0, firstContext : e }
    } else
      Mn = Mn.next = e;
  return t
}
var pn = null;
function Bl(e) {
  pn === null ? pn = [ e ] : pn.push(e)
}
function Ad(e, t, n, o) {
  var r = t.interleaved;
  return r === null ? (n.next = n, Bl(t)) : (n.next = r.next, r.next = n),
         t.interleaved = n, Ft(e, o)
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t),
                       n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var Vt = !1;
function Kl(e) {
  e.updateQueue = {
    baseState : e.memoizedState,
    firstBaseUpdate : null,
    lastBaseUpdate : null,
    shared : {pending : null, interleaved : null, lanes : 0},
    effects : null
  }
}
function Ud(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                       baseState : e.baseState,
                       firstBaseUpdate : e.firstBaseUpdate,
                       lastBaseUpdate : e.lastBaseUpdate,
                       shared : e.shared,
                       effects : e.effects
                     })
}
function It(e, t) {
  return {
    eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null
  }
}
function Jt(e, t, n) {
  var o = e.updateQueue;
  if (o === null)
    return null;
  if (o = o.shared, A & 2) {
    var r = o.pending;
    return r === null ? t.next = t : (t.next = r.next, r.next = t),
                        o.pending = t, Ft(e, n)
  }
  return r = o.interleaved,
         r === null ? (t.next = t, Bl(o)) : (t.next = r.next, r.next = t),
         o.interleaved = t, Ft(e, n)
}
function Rr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var o = t.lanes;
    o &= e.pendingLanes, n |= o, t.lanes = n, bl(e, n)
  }
}
function Ru(e, t) {
  var n = e.updateQueue, o = e.alternate;
  if (o !== null && (o = o.updateQueue, n === o)) {
    var r = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = {
          eventTime : n.eventTime,
          lane : n.lane,
          tag : n.tag,
          payload : n.payload,
          callback : n.callback,
          next : null
        };
        i === null ? r = i = s : i = i.next = s, n = n.next
      } while (n !== null);
      i === null ? r = i = t : i = i.next = t
    } else
      r = i = t;
    n = {
      baseState : o.baseState,
      firstBaseUpdate : r,
      lastBaseUpdate : i,
      shared : o.shared,
      effects : o.effects
    },
    e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t,
  n.lastBaseUpdate = t
}
function ii(e, t, n, o) {
  var r = e.updateQueue;
  Vt = !1;
  var i = r.firstBaseUpdate, s = r.lastBaseUpdate, l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var f = e.alternate;
    f !== null &&
        (f = f.updateQueue,
         l = f.lastBaseUpdate,
         l !== s &&
             (l === null ? f.firstBaseUpdate = u : l.next = u,
              f.lastBaseUpdate = a))
  }
  if (i !== null) {
    var d = r.baseState;
    s = 0, f = u = a = null, l = i;
    do {
      var h = l.lane, m = l.eventTime;
      if ((o & h) === h) {
        f !== null && (f = f.next = {
          eventTime : m,
          lane : 0,
          tag : l.tag,
          payload : l.payload,
          callback : l.callback,
          next : null
        });
        e: {
          var v = e, w = l; switch (h = t, m = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                d = v.call(m, d, h);
                break e
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload,
                  h = typeof v == "function" ? v.call(m, d, h) : v,
                  h == null)
                break e;
              d = Z({}, d, h);
              break e;
            case 2:
              Vt = !0
          }
        } l.callback !== null &&
            l.lane !== 0 &&
            (e.flags |= 64,
             h = r.effects,
             h === null ? r.effects = [ l ] : h.push(l))
      } else
        m = {
          eventTime : m,
          lane : h,
          tag : l.tag,
          payload : l.payload,
          callback : l.callback,
          next : null
        },
        f === null ? (u = f = m, a = d) : f = f.next = m, s |= h;
      if (l = l.next, l === null) {
        if (l = r.shared.pending, l === null)
          break;
        h = l, l = h.next, h.next = null, r.lastBaseUpdate = h,
        r.shared.pending = null
      }
    } while (1);
    if (f === null && (a = d),
        r.baseState = a,
        r.firstBaseUpdate = u,
        r.lastBaseUpdate = f,
        t = r.shared.interleaved,
        t !== null) {
      r = t;
      do
        s |= r.lane, r = r.next;
      while (r !== t)
    } else
      i === null && (r.shared.lanes = 0);
    kn |= s, e.lanes = s, e.memoizedState = d
  }
}
function ju(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var o = e[t], r = o.callback;
      if (r !== null) {
        if (o.callback = null, o = n, typeof r != "function")
          throw Error(N(191, r));
        r.call(o)
      }
    }
}
var Md = new Ac.Component().refs;
function Qs(e, t, n, o) {
  t = e.memoizedState, n = n(o, t), n = n == null ? t : Z({}, t, n),
  e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Oi = {
  isMounted : function(e) {
    return (e = e._reactInternals) ? _n(e) === e : !1
  },
  enqueueSetState : function(e, t, n) {
    e = e._reactInternals;
    var o = Se(), r = qt(e), i = It(o, r);
    i.payload = t, n != null && (i.callback = n), t = Jt(e, i, r),
    t !== null && (at(t, e, r, o), Rr(t, e, r))
  },
  enqueueReplaceState : function(e, t, n) {
    e = e._reactInternals;
    var o = Se(), r = qt(e), i = It(o, r);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jt(e, i, r),
    t !== null && (at(t, e, r, o), Rr(t, e, r))
  },
  enqueueForceUpdate : function(e, t) {
    e = e._reactInternals;
    var n = Se(), o = qt(e), r = It(n, o);
    r.tag = 2, t != null && (r.callback = t), t = Jt(e, r, o),
    t !== null && (at(t, e, o, n), Rr(t, e, o))
  }
};
function Fu(e, t, n, o, r, i, s) {
  return e = e.stateNode,
         typeof e.shouldComponentUpdate == "function"
             ? e.shouldComponentUpdate(o, i, s)
             : t.prototype && t.prototype.isPureReactComponent
             ? !Mo(n, o) || !Mo(r, i)
             : !0
}
function zd(e, t, n) {
  var o = !1, r = on, i = t.contextType;
  return typeof i == "object" && i !== null
             ? i = Qe(i)
             : (r = Te(t) ? mn : ve.current,
                o = t.contextTypes,
                i = (o = o != null) ? Xn(e, r) : on),
               t = new t(n, i),
               e.memoizedState =
                   t.state !== null && t.state !== void 0 ? t.state : null,
               t.updater = Oi, e.stateNode = t, t._reactInternals = e,
               o &&
             (e = e.stateNode,
              e.__reactInternalMemoizedUnmaskedChildContext = r,
              e.__reactInternalMemoizedMaskedChildContext = i),
               t
}
function Du(e, t, n, o) {
  e = t.state,
  typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, o),
  typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, o),
  t.state !== e && Oi.enqueueReplaceState(t, t.state, null)
}
function Xs(e, t, n, o) {
  var r = e.stateNode;
  r.props = n, r.state = e.memoizedState, r.refs = Md, Kl(e);
  var i = t.contextType;
  typeof i == "object" &&i !== null
      ? r.context = Qe(i)
      : (i = Te(t) ? mn : ve.current, r.context = Xn(e, i)),
        r.state = e.memoizedState, i = t.getDerivedStateFromProps,
        typeof i == "function" && (Qs(e, t, i, n), r.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      typeof r.UNSAFE_componentWillMount != "function" &&
          typeof r.componentWillMount != "function" ||
      (t = r.state,
       typeof r.componentWillMount == "function" && r.componentWillMount(),
       typeof r.UNSAFE_componentWillMount == "function" &&
           r.UNSAFE_componentWillMount(),
       t !== r.state && Oi.enqueueReplaceState(r, r.state, null),
       ii(e, n, r, o),
       r.state = e.memoizedState),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}
function ho(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(N(309));
        var o = n.stateNode
      }
      if (!o)
        throw Error(N(147, e));
      var r = o, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" &&
              t.ref._stringRef === i
          ? t.ref
          : (t = function(s) {
              var l = r.refs;
              l === Md && (l = r.refs = {}), s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
    }
    if (typeof e != "string")
      throw Error(N(284));
    if (!n._owner)
      throw Error(N(290, e))
  }
  return e
}
function kr(e, t) {
  throw e = Object.prototype.toString.call(t),
        Error(
            N(31,
              e === "[object Object]"
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e))
}
function Au(e) {
  var t = e._init;
  return t(e._payload)
}
function Vd(e) {
  function t(p, c) {
    if (e) {
      var g = p.deletions;
      g === null ? (p.deletions = [ c ], p.flags |= 16) : g.push(c)
    }
  }
  function n(p, c) {
    if (!e)
      return null;
    for (; c !== null;)
      t(p, c), c = c.sibling;
    return null
  }
  function o(p, c) {
    for (p = new Map; c !== null;)
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
    return p
  }
  function r(p, c) {
    return p = en(p, c), p.index = 0, p.sibling = null, p
  }
  function i(p, c, g) {
    return p.index = g,
           e ? (g = p.alternate,
                g !== null ? (g = g.index, g < c ? (p.flags |= 2, c) : g)
                           : (p.flags |= 2, c))
             : (p.flags |= 1048576, c)
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function l(p, c, g, k) {
    return c === null || c.tag !== 6 ? (c = us(g, p.mode, k), c.return = p, c)
                                     : (c = r(c, g), c.return = p, c)
  }
  function a(p, c, g, k) {
    var _ = g.type;
    return _ === Tn ? f(p, c, g.props.children, k, g.key)
        : c !== null &&
            (c.elementType === _ ||
             typeof _ == "object" && _ !== null && _.$$typeof === zt &&
                 Au(_) === c.type)
        ? (k = r(c, g.props), k.ref = ho(p, c, g), k.return = p, k)
        : (k = Mr(g.type, g.key, g.props, null, p.mode, k),
           k.ref = ho(p, c, g),
           k.return = p,
           k)
  }
  function u(p, c, g, k) {
    return c === null || c.tag !== 4 ||
            c.stateNode.containerInfo !== g.containerInfo ||
            c.stateNode.implementation !== g.implementation
        ? (c = cs(g, p.mode, k), c.return = p, c)
        : (c = r(c, g.children || []), c.return = p, c)
  }
  function f(p, c, g, k, _) {
    return c === null || c.tag !== 7
        ? (c = gn(g, p.mode, k, _), c.return = p, c)
        : (c = r(c, g), c.return = p, c)
  }
  function d(p, c, g) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = us("" + c, p.mode, g), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ar:
          return g = Mr(c.type, c.key, c.props, null, p.mode, g),
                 g.ref = ho(p, null, c), g.return = p, g;
        case Ln:
          return c = cs(c, p.mode, g), c.return = p, c;
        case zt:
          var k = c._init;
          return d(p, k(c._payload), g)
      }
      if (ko(c) || ao(c))
        return c = gn(c, p.mode, g, null), c.return = p, c;
      kr(p, c)
    }
    return null
  }
  function h(p, c, g, k) {
    var _ = c !== null ? c.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return _ !== null ? null : l(p, c, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ar:
          return g.key === _ ? a(p, c, g, k) : null;
        case Ln:
          return g.key === _ ? u(p, c, g, k) : null;
        case zt:
          return _ = g._init, h(p, c, _(g._payload), k)
      }
      if (ko(g) || ao(g))
        return _ !== null ? null : f(p, c, g, k, null);
      kr(p, g)
    }
    return null
  }
  function m(p, c, g, k, _) {
    if (typeof k == "string" && k !== "" || typeof k == "number")
      return p = p.get(g) || null, l(c, p, "" + k, _);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ar:
          return p = p.get(k.key === null ? g : k.key) || null, a(c, p, k, _);
        case Ln:
          return p = p.get(k.key === null ? g : k.key) || null, u(c, p, k, _);
        case zt:
          var S = k._init;
          return m(p, c, g, S(k._payload), _)
      }
      if (ko(k) || ao(k))
        return p = p.get(g) || null, f(c, p, k, _, null);
      kr(c, k)
    }
    return null
  }
  function v(p, c, g, k) {
    for (var _ = null, S = null, x = c, P = c = 0, R = null;
         x !== null && P < g.length;
         P++) {
      x.index > P ? (R = x, x = null) : R = x.sibling;
      var E = h(p, x, g[P], k);
      if (E === null) {
        x === null && (x = R);
        break
      }
      e && x && E.alternate === null && t(p, x),
          c = i(E, c, P), S === null ? _ = E : S.sibling = E, S = E, x = R
    }
    if (P === g.length)
      return n(p, x), G && an(p, P), _;
    if (x === null) {
      for (; P < g.length; P++)
        x = d(p, g[P], k),
        x !== null &&
            (c = i(x, c, P), S === null ? _ = x : S.sibling = x, S = x);
      return G && an(p, P), _
    }
    for (x = o(p, x); P < g.length; P++)
      R = m(x, p, P, g[P], k),
      R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? P : R.key),
           c = i(R, c, P),
           S === null ? _ = R : S.sibling = R,
           S = R);
    return e && x.forEach(function(H) {
      return t(p, H)
    }),
           G && an(p, P), _
  }
  function w(p, c, g, k) {
    var _ = ao(g);
    if (typeof _ != "function")
      throw Error(N(150));
    if (g = _.call(g), g == null)
      throw Error(N(151));
    for (var S = _ = null, x = c, P = c = 0, R = null, E = g.next();
         x !== null && !E.done;
         P++, E = g.next()) {
      x.index > P ? (R = x, x = null) : R = x.sibling;
      var H = h(p, x, E.value, k);
      if (H === null) {
        x === null && (x = R);
        break
      }
      e && x && H.alternate === null && t(p, x),
          c = i(H, c, P), S === null ? _ = H : S.sibling = H, S = H, x = R
    }
    if (E.done)
      return n(p, x), G && an(p, P), _;
    if (x === null) {
      for (; !E.done; P++, E = g.next())
        E = d(p, E.value, k),
        E !== null &&
            (c = i(E, c, P), S === null ? _ = E : S.sibling = E, S = E);
      return G && an(p, P), _
    }
    for (x = o(p, x); !E.done; P++, E = g.next())
      E = m(x, p, P, E.value, k),
      E !== null &&
          (e && E.alternate !== null && x.delete(E.key === null ? P : E.key),
           c = i(E, c, P),
           S === null ? _ = E : S.sibling = E,
           S = E);
    return e && x.forEach(function(Pe) {
      return t(p, Pe)
    }),
           G && an(p, P), _
  }
  function O(p, c, g, k) {
    if (typeof g == "object" && g !== null && g.type === Tn && g.key === null &&
            (g = g.props.children),
        typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ar:
          e: {
            for (var _ = g.key, S = c; S !== null;) {
              if (S.key === _) {
                if (_ = g.type, _ === Tn) {
                  if (S.tag === 7) {
                    n(p, S.sibling), c = r(S, g.props.children), c.return = p,
                                     p = c;
                    break e
                  }
                } else if (
                    S.elementType === _ ||
                    typeof _ == "object" && _ !== null && _.$$typeof === zt &&
                        Au(_) === S.type) {
                  n(p, S.sibling), c = r(S, g.props), c.ref = ho(p, S, g),
                                   c.return = p, p = c;
                  break e
                }
                n(p, S);
                break
              } else
                t(p, S);
              S = S.sibling
            } g.type === Tn
                ? (c = gn(g.props.children, p.mode, k, g.key),
                   c.return = p,
                   p = c)
                : (k = Mr(g.type, g.key, g.props, null, p.mode, k),
                   k.ref = ho(p, c, g),
                   k.return = p,
                   p = k)
          } return s(p);
        case Ln:
          e: {
            for (S = g.key; c !== null;) {
              if (c.key === S)
                if (c.tag === 4 &&
                    c.stateNode.containerInfo === g.containerInfo &&
                    c.stateNode.implementation === g.implementation) {
                  n(p, c.sibling), c = r(c, g.children || []), c.return = p,
                                   p = c;
                  break e
                } else {
                  n(p, c);
                  break
                }
              else
                t(p, c);
              c = c.sibling
            } c = cs(g, p.mode, k),
            c.return = p,
            p = c
          } return s(p);
        case zt:
          return S = g._init, O(p, c, S(g._payload), k)
      }
      if (ko(g))
        return v(p, c, g, k);
      if (ao(g))
        return w(p, c, g, k);
      kr(p, g)
    }
    return typeof g == "string" && g !== "" || typeof g == "number"
        ? (g = "" + g,
           c !== null && c.tag === 6
               ? (n(p, c.sibling), c = r(c, g), c.return = p, p = c)
               : (n(p, c), c = us(g, p.mode, k), c.return = p, p = c),
           s(p))
        : n(p, c)
  }
  return O
}
var Zn = Vd(!0), $d = Vd(!1), er = {}, wt = sn(er), Bo = sn(er), Ko = sn(er);
function fn(e) {
  if (e === er)
    throw Error(N(174));
  return e
}
function Hl(e, t) {
  switch (K(Ko, t), K(Bo, e), K(wt, er), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName,
      t = Cs(t, e)
  }
  Y(wt), K(wt, t)
}
function qn() {
  Y(wt), Y(Bo), Y(Ko)
}
function Bd(e) {
  fn(Ko.current);
  var t = fn(wt.current), n = Cs(t, e.type);
  t !== n && (K(Bo, e), K(wt, n))
}
function Wl(e) {
  Bo.current === e && (Y(wt), Y(Bo))
}
var X = sn(0);
function si(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null &&
          (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e)
      break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var os = [];
function Yl() {
  for (var e = 0; e < os.length; e++)
    os[e]._workInProgressVersionPrimary = null;
  os.length = 0
}
var jr = At.ReactCurrentDispatcher, rs = At.ReactCurrentBatchConfig, yn = 0,
    J = null, re = null, se = null, li = !1, Eo = !1, Ho = 0, Cm = 0;
function he() {
  throw Error(N(321))
}
function Gl(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ut(e[n], t[n]))
      return !1;
  return !0
}
function Ql(e, t, n, o, r, i) {
  if (yn = i,
      J = t,
      t.memoizedState = null,
      t.updateQueue = null,
      t.lanes = 0,
      jr.current = e === null || e.memoizedState === null ? Im : Rm,
      e = n(o, r),
      Eo) {
    i = 0;
    do {
      if (Eo = !1, Ho = 0, 25 <= i)
        throw Error(N(301));
      i += 1, se = re = null, t.updateQueue = null, jr.current = jm, e = n(o, r)
    } while (Eo)
  }
  if (jr.current = ai,
      t = re !== null && re.next !== null,
      yn = 0,
      se = re = J = null,
      li = !1,
      t)
    throw Error(N(300));
  return e
}
function Xl() {
  var e = Ho !== 0;
  return Ho = 0, e
}
function mt() {
  var e = {
    memoizedState : null,
    baseState : null,
    baseQueue : null,
    queue : null,
    next : null
  };
  return se === null ? J.memoizedState = se = e : se = se.next = e, se
}
function Xe() {
  if (re === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null
  } else
    e = re.next;
  var t = se === null ? J.memoizedState : se.next;
  if (t !== null)
    se = t, re = e;
  else {
    if (e === null)
      throw Error(N(310));
    re = e, e = {
      memoizedState : re.memoizedState,
      baseState : re.baseState,
      baseQueue : re.baseQueue,
      queue : re.queue,
      next : null
    },
    se === null ? J.memoizedState = se = e : se = se.next = e
  }
  return se
}
function Wo(e, t) {
  return typeof t == "function" ? t(e) : t
}
function is(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(N(311));
  n.lastRenderedReducer = e;
  var o = re, r = o.baseQueue, i = n.pending;
  if (i !== null) {
    if (r !== null) {
      var s = r.next;
      r.next = i.next, i.next = s
    }
    o.baseQueue = r = i, n.pending = null
  }
  if (r !== null) {
    i = r.next, o = o.baseState;
    var l = s = null, a = null, u = i;
    do {
      var f = u.lane;
      if ((yn & f) === f)
        a !== null && (a = a.next = {
          lane : 0,
          action : u.action,
          hasEagerState : u.hasEagerState,
          eagerState : u.eagerState,
          next : null
        }),
            o = u.hasEagerState ? u.eagerState : e(o, u.action);
      else {
        var d = {
          lane : f,
          action : u.action,
          hasEagerState : u.hasEagerState,
          eagerState : u.eagerState,
          next : null
        };
        a === null ? (l = a = d, s = o) : a = a.next = d, J.lanes |= f, kn |= f
      }
      u = u.next
    } while (u !== null && u !== i);
    a === null ? s = o : a.next = l, ut(o, t.memoizedState) || (be = !0),
                 t.memoizedState = o, t.baseState = s, t.baseQueue = a,
                 n.lastRenderedState = o
  }
  if (e = n.interleaved, e !== null) {
    r = e;
    do
      i = r.lane, J.lanes |= i, kn |= i, r = r.next;
    while (r !== e)
  } else
    r === null && (n.lanes = 0);
  return [ t.memoizedState, n.dispatch ]
}
function ss(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(N(311));
  n.lastRenderedReducer = e;
  var o = n.dispatch, r = n.pending, i = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var s = r = r.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== r);
    ut(i, t.memoizedState) || (be = !0),
        t.memoizedState = i, t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
  }
  return [ i, o ]
}
function Kd() {}
function Hd(e, t) {
  var n = J, o = Xe(), r = t(), i = !ut(o.memoizedState, r);
  if (i && (o.memoizedState = r, be = !0),
      o = o.queue,
      Jl(Gd.bind(null, n, o, e), [ e ]),
      o.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048,
        Yo(9, Yd.bind(null, n, o, r, t), void 0, null),
        le === null)
      throw Error(N(349));
    yn&30 || Wd(n, t, r)
  }
  return r
}
function Wd(e, t, n) {
  e.flags |= 16384,
      e = {getSnapshot : t, value : n}, t = J.updateQueue,
      t === null ? (t = {lastEffect : null, stores : null},
                    J.updateQueue = t,
                    t.stores = [ e ])
                 : (n = t.stores, n === null ? t.stores = [ e ] : n.push(e))
}
function Yd(e, t, n, o) {
  t.value = n, t.getSnapshot = o, Qd(t) && Xd(e)
}
function Gd(e, t, n) {
  return n(function() {
    Qd(t) && Xd(e)
  })
}
function Qd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n)
  } catch {
    return !0
  }
}
function Xd(e) {
  var t = Ft(e, 1);
  t !== null && at(t, e, 1, -1)
}
function Uu(e) {
  var t = mt();
  return typeof e == "function" && (e = e()),
         t.memoizedState = t.baseState = e, e = {
           pending : null,
           interleaved : null,
           lanes : 0,
           dispatch : null,
           lastRenderedReducer : Wo,
           lastRenderedState : e
         },
         t.queue = e, e = e.dispatch = Tm.bind(null, J, e),
         [ t.memoizedState, e ]
}
function Yo(e, t, n, o) {
  return e = {tag : e, create : t, destroy : n, deps : o, next : null},
         t = J.updateQueue,
         t === null
             ? (t = {lastEffect : null, stores : null},
                J.updateQueue = t,
                t.lastEffect = e.next = e)
             : (n = t.lastEffect,
                n === null
                    ? t.lastEffect = e.next = e
                    : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)),
         e
}
function Jd() {
  return Xe().memoizedState
}
function Fr(e, t, n, o) {
  var r = mt();
  J.flags |= e, r.memoizedState = Yo(1 | t, n, void 0, o === void 0 ? null : o)
}
function Ni(e, t, n, o) {
  var r = Xe();
  o = o === void 0 ? null : o;
  var i = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (i = s.destroy, o !== null && Gl(o, s.deps)) {
      r.memoizedState = Yo(t, n, i, o);
      return
    }
  }
  J.flags |= e, r.memoizedState = Yo(1 | t, n, i, o)
}
function Mu(e, t) {
  return Fr(8390656, 8, e, t)
}
function Jl(e, t) {
  return Ni(2048, 8, e, t)
}
function Zd(e, t) {
  return Ni(4, 2, e, t)
}
function qd(e, t) {
  return Ni(4, 4, e, t)
}
function ep(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null)
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null
    }
}
function tp(e, t, n) {
  return n = n != null ? n.concat([ e ]) : null,
         Ni(4, 4, ep.bind(null, t, e), n)
}
function Zl() {}
function np(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var o = n.memoizedState;
  return o !== null && t !== null && Gl(t, o[1])
      ? o[0]
      : (n.memoizedState = [ e, t ], e)
}
function op(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var o = n.memoizedState;
  return o !== null && t !== null && Gl(t, o[1])
      ? o[0]
      : (e = e(), n.memoizedState = [ e, t ], e)
}
function rp(e, t, n) {
  return yn & 21
      ? (ut(n, t) || (n = ld(), J.lanes |= n, kn |= n, e.baseState = !0), t)
      : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n)
}
function bm(e, t) {
  var n = $;
  $ = n !== 0 && 4 > n ? n : 4, e(!0);
  var o = rs.transition;
  rs.transition = {};
  try {
    e(!1), t()
  } finally {
    $ = n, rs.transition = o
  }
}
function ip() {
  return Xe().memoizedState
}
function Lm(e, t, n) {
  var o = qt(e);
  if (n = {
        lane : o,
        action : n,
        hasEagerState : !1,
        eagerState : null,
        next : null
      },
      sp(e))
    lp(t, n);
  else if (n = Ad(e, t, n, o), n !== null) {
    var r = Se();
    at(n, e, o, r), ap(n, t, o)
  }
}
function Tm(e, t, n) {
  var o = qt(e), r = {
    lane : o,
    action : n,
    hasEagerState : !1,
    eagerState : null,
    next : null
  };
  if (sp(e))
    lp(t, r);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) &&
        (i = t.lastRenderedReducer, i !== null))
      try {
        var s = t.lastRenderedState, l = i(s, n);
        if (r.hasEagerState = !0, r.eagerState = l, ut(l, s)) {
          var a = t.interleaved;
          a === null ? (r.next = r, Bl(t)) : (r.next = a.next, a.next = r),
              t.interleaved = r;
          return
        }
      } catch {
      } finally {
      }
    n = Ad(e, t, r, o), n !== null && (r = Se(), at(n, e, o, r), ap(n, t, o))
  }
}
function sp(e) {
  var t = e.alternate;
  return e === J || t !== null && t === J
}
function lp(e, t) {
  Eo = li = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}
function ap(e, t, n) {
  if (n & 4194240) {
    var o = t.lanes;
    o &= e.pendingLanes, n |= o, t.lanes = n, bl(e, n)
  }
}
var ai = {
  readContext : Qe,
  useCallback : he,
  useContext : he,
  useEffect : he,
  useImperativeHandle : he,
  useInsertionEffect : he,
  useLayoutEffect : he,
  useMemo : he,
  useReducer : he,
  useRef : he,
  useState : he,
  useDebugValue : he,
  useDeferredValue : he,
  useTransition : he,
  useMutableSource : he,
  useSyncExternalStore : he,
  useId : he,
  unstable_isNewReconciler : !1
},
    Im = {
      readContext : Qe,
      useCallback : function(e, t) {
        return mt().memoizedState = [ e, t === void 0 ? null : t ], e
      },
      useContext : Qe,
      useEffect : Mu,
      useImperativeHandle : function(e, t, n) {
        return n = n != null ? n.concat([ e ]) : null,
               Fr(4194308, 4, ep.bind(null, t, e), n)
      },
      useLayoutEffect : function(e, t) {
        return Fr(4194308, 4, e, t)
      },
      useInsertionEffect : function(e, t) {
        return Fr(4, 2, e, t)
      },
      useMemo : function(e, t) {
        var n = mt();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [ e, t ],
               e
      },
      useReducer : function(e, t, n) {
        var o = mt();
        return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t,
               e = {
                 pending : null,
                 interleaved : null,
                 lanes : 0,
                 dispatch : null,
                 lastRenderedReducer : e,
                 lastRenderedState : t
               },
               o.queue = e, e = e.dispatch = Lm.bind(null, J, e),
               [ o.memoizedState, e ]
      },
      useRef : function(e) {
        var t = mt();
        return e = {current : e}, t.memoizedState = e
      },
      useState : Uu,
      useDebugValue : Zl,
      useDeferredValue : function(e) {
        return mt().memoizedState = e
      },
      useTransition : function() {
        var e = Uu(!1), t = e[0];
        return e = bm.bind(null, e[1]), mt().memoizedState = e, [ t, e ]
      },
      useMutableSource : function() {},
      useSyncExternalStore : function(e, t, n) {
        var o = J, r = mt();
        if (G) {
          if (n === void 0)
            throw Error(N(407));
          n = n()
        } else {
          if (n = t(), le === null)
            throw Error(N(349));
          yn&30 || Wd(o, t, n)
        }
        r.memoizedState = n;
        var i = {value : n, getSnapshot : t};
        return r.queue = i, Mu(Gd.bind(null, o, i, e), [ e ]), o.flags |= 2048,
               Yo(9, Yd.bind(null, o, i, n, t), void 0, null), n
      },
      useId : function() {
        var e = mt(), t = le.identifierPrefix;
        if (G) {
          var n = Tt, o = Lt;
          n = (o & ~(1 << 32 - lt(o) - 1)).toString(32) + n,
          t = ":" + t + "R" + n, n = Ho++, 0 < n && (t += "H" + n.toString(32)),
          t += ":"
        } else
          n = Cm++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
      },
      unstable_isNewReconciler : !1
    },
    Rm = {
      readContext : Qe,
      useCallback : np,
      useContext : Qe,
      useEffect : Jl,
      useImperativeHandle : tp,
      useInsertionEffect : Zd,
      useLayoutEffect : qd,
      useMemo : op,
      useReducer : is,
      useRef : Jd,
      useState : function() {
        return is(Wo)
      },
      useDebugValue : Zl,
      useDeferredValue : function(e) {
        var t = Xe();
        return rp(t, re.memoizedState, e)
      },
      useTransition : function() {
        var e = is(Wo)[0], t = Xe().memoizedState;
        return [ e, t ]
      },
      useMutableSource : Kd,
      useSyncExternalStore : Hd,
      useId : ip,
      unstable_isNewReconciler : !1
    },
    jm = {
      readContext : Qe,
      useCallback : np,
      useContext : Qe,
      useEffect : Jl,
      useImperativeHandle : tp,
      useInsertionEffect : Zd,
      useLayoutEffect : qd,
      useMemo : op,
      useReducer : ss,
      useRef : Jd,
      useState : function() {
        return ss(Wo)
      },
      useDebugValue : Zl,
      useDeferredValue : function(e) {
        var t = Xe();
        return re === null ? t.memoizedState = e : rp(t, re.memoizedState, e)
      },
      useTransition : function() {
        var e = ss(Wo)[0], t = Xe().memoizedState;
        return [ e, t ]
      },
      useMutableSource : Kd,
      useSyncExternalStore : Hd,
      useId : ip,
      unstable_isNewReconciler : !1
    };
function eo(e, t) {
  try {
    var n = "", o = t;
    do
      n += ag(o), o = o.return;
    while (o);
    var r = n
  } catch (i) {
    r = `
Error generating stack: ` +
        i.message +
        `
` + i.stack
  }
  return {
    value: e, source: t, stack: r, digest: null
  }
}
function ls(e, t, n) {
  return {
    value: e, source: null, stack: n ?? null, digest: t ?? null
  }
}
function Js(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var Fm = typeof WeakMap == "function" ? WeakMap : Map;
function up(e, t, n) {
  n = It(-1, n), n.tag = 3, n.payload = {element : null};
  var o = t.value;
  return n.callback = function() {
    ci || (ci = !0, ll = o), Js(e, t)
  }, n
}
function cp(e, t, n) {
  n = It(-1, n), n.tag = 3;
  var o = e.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var r = t.value;
    n.payload = function() {
      return o(r)
    }, n.callback = function() {
      Js(e, t)
    }
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" &&
             (n.callback =
                  function() {
                    Js(e, t),
                        typeof o != "function" &&
                        (Zt === null ? Zt = new Set([ this ]) : Zt.add(this));
                    var s = t.stack;
                    this.componentDidCatch(
                        t.value, {componentStack : s !== null ? s : ""})
                  }),
         n
}
function zu(e, t, n) {
  var o = e.pingCache;
  if (o === null) {
    o = e.pingCache = new Fm;
    var r = new Set;
    o.set(t, r)
  } else
    r = o.get(t), r === void 0 && (r = new Set, o.set(t, r));
  r.has(n) || (r.add(n), e = Qm.bind(null, e, t, n), t.then(e, e))
}
function Vu(e) {
  do {
    var t;
    if ((t = e.tag === 13) &&
            (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0),
        t)
      return e;
    e = e.return
  } while (e !== null);
  return null
}
function $u(e, t, n, o, r) {
  return e.mode & 1
      ? (e.flags |= 65536, e.lanes = r, e)
      : (e === t ? e.flags |= 65536
                 : (e.flags |= 128,
                    n.flags |= 131072,
                    n.flags &= -52805,
                    n.tag === 1 &&
                        (n.alternate === null
                             ? n.tag = 17
                             : (t = It(-1, 1), t.tag = 2, Jt(n, t, 1))),
                    n.lanes |= 1),
         e)
}
var Dm = At.ReactCurrentOwner, be = !1;
function we(e, t, n, o) {
  t.child = e === null ? $d(t, null, n, o) : Zn(t, e.child, n, o)
}
function Bu(e, t, n, o, r) {
  n = n.render;
  var i = t.ref;
  return Wn(t, r), o = Ql(e, t, n, o, i, r), n = Xl(),
                   e !== null && !be
             ? (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~r,
                Dt(e, t, r))
             : (G && n && Al(t), t.flags |= 1, we(e, t, o, r), t.child)
}
function Ku(e, t, n, o, r) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !sa(i) && i.defaultProps === void 0 &&
            n.compare === null && n.defaultProps === void 0
        ? (t.tag = 15, t.type = i, dp(e, t, i, o, r))
        : (e = Mr(n.type, null, o, t, t.mode, r),
           e.ref = t.ref,
           e.return = t,
           t.child = e)
  }
  if (i = e.child, !(e.lanes & r)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mo, n(s, o) && e.ref === t.ref)
      return Dt(e, t, r)
  }
  return t.flags |= 1, e = en(i, o), e.ref = t.ref, e.return = t, t.child = e
}
function dp(e, t, n, o, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mo(i, o) && e.ref === t.ref)
      if (be = !1, t.pendingProps = o = i, (e.lanes & r) !== 0)
        e.flags&131072 && (be = !0);
      else
        return t.lanes = e.lanes, Dt(e, t, r)
  }
  return Zs(e, t, n, o, r)
}
function pp(e, t, n) {
  var o = t.pendingProps, r = o.children,
      i = e !== null ? e.memoizedState : null;
  if (o.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = {baseLanes : 0, cachePool : null, transitions : null},
      K(Vn, Ae), Ae |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n,
               t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                 baseLanes : e,
                 cachePool : null,
                 transitions : null
               },
               t.updateQueue = null, K(Vn, Ae), Ae |= e, null;
      t.memoizedState = {baseLanes : 0, cachePool : null, transitions : null},
      o = i !== null ? i.baseLanes : n, K(Vn, Ae), Ae |= o
    }
  else
    i !== null ? (o = i.baseLanes | n, t.memoizedState = null) : o = n,
                                                                 K(Vn, Ae),
                                                                 Ae |= o;
  return we(e, t, r, n), t.child
}
function fp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) &&
      (t.flags |= 512, t.flags |= 2097152)
}
function Zs(e, t, n, o, r) {
  var i = Te(n) ? mn : ve.current;
  return i = Xn(t, i), Wn(t, r), n = Ql(e, t, n, o, i, r), o = Xl(),
         e !== null && !be
             ? (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~r,
                Dt(e, t, r))
             : (G && o && Al(t), t.flags |= 1, we(e, t, n, r), t.child)
}
function Hu(e, t, n, o, r) {
  if (Te(n)) {
    var i = !0;
    ei(t)
  } else
    i = !1;
  if (Wn(t, r), t.stateNode === null)
    Dr(e, t), zd(t, n, o), Xs(t, n, o, r), o = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null
        ? u = Qe(u)
        : (u = Te(n) ? mn : ve.current, u = Xn(t, u));
    var f = n.getDerivedStateFromProps,
        d = typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
        typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function" ||
        (l !== o || a !== u) && Du(t, s, o, u),
        Vt = !1;
    var h = t.memoizedState;
    s.state = h, ii(t, o, s, r), a = t.memoizedState,
    l !== o || h !== a || Le.current || Vt
        ? (typeof f == "function" && (Qs(t, n, f, o), a = t.memoizedState),
           (l = Vt || Fu(t, n, l, o, h, a, u))
               ? (d ||
                      typeof s.UNSAFE_componentWillMount != "function" &&
                          typeof s.componentWillMount != "function" ||
                      (typeof s.componentWillMount == "function" &&
                           s.componentWillMount(),
                       typeof s.UNSAFE_componentWillMount == "function" &&
                           s.UNSAFE_componentWillMount()),
                  typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308))
               : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  t.memoizedProps = o,
                  t.memoizedState = a),
           s.props = o,
           s.state = a,
           s.context = u,
           o = l)
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
           o = !1)
  } else {
    s = t.stateNode, Ud(e, t), l = t.memoizedProps,
    u = t.type === t.elementType ? l : rt(t.type, l), s.props = u,
    d = t.pendingProps, h = s.context, a = n.contextType,
    typeof a == "object" && a !== null
        ? a = Qe(a)
        : (a = Te(n) ? mn : ve.current, a = Xn(t, a));
    var m = n.getDerivedStateFromProps;
    (f = typeof m == "function" ||
         typeof s.getSnapshotBeforeUpdate == "function") ||
        typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function" ||
        (l !== d || h !== a) && Du(t, s, o, a),
        Vt = !1, h = t.memoizedState, s.state = h, ii(t, o, s, r);
    var v = t.memoizedState;
    l !== d || h !== v || Le.current || Vt
        ? (typeof m == "function" && (Qs(t, n, m, o), v = t.memoizedState),
           (u = Vt || Fu(t, n, u, o, h, v, a) || !1)
               ? (f ||
                      typeof s.UNSAFE_componentWillUpdate != "function" &&
                          typeof s.componentWillUpdate != "function" ||
                      (typeof s.componentWillUpdate == "function" &&
                           s.componentWillUpdate(o, v, a),
                       typeof s.UNSAFE_componentWillUpdate == "function" &&
                           s.UNSAFE_componentWillUpdate(o, v, a)),
                  typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                  typeof s.getSnapshotBeforeUpdate == "function" &&
                      (t.flags |= 1024))
               : (typeof s.componentDidUpdate != "function" ||
                      l === e.memoizedProps && h === e.memoizedState ||
                      (t.flags |= 4),
                  typeof s.getSnapshotBeforeUpdate != "function" ||
                      l === e.memoizedProps && h === e.memoizedState ||
                      (t.flags |= 1024),
                  t.memoizedProps = o,
                  t.memoizedState = v),
           s.props = o,
           s.state = v,
           s.context = a,
           o = u)
        : (typeof s.componentDidUpdate != "function" ||
               l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
           typeof s.getSnapshotBeforeUpdate != "function" ||
               l === e.memoizedProps && h === e.memoizedState ||
               (t.flags |= 1024),
           o = !1)
  }
  return qs(e, t, n, o, i, r)
}
function qs(e, t, n, o, r, i) {
  fp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!o && !s)
    return r && Lu(t, n, !1), Dt(e, t, i);
  o = t.stateNode, Dm.current = t;
  var l =
      s && typeof n.getDerivedStateFromError != "function" ? null : o.render();
  return t.flags |= 1,
         e !== null && s
             ? (t.child = Zn(t, e.child, null, i), t.child = Zn(t, null, l, i))
             : we(e, t, l, i),
         t.memoizedState = o.state, r && Lu(t, n, !0), t.child
}
function hp(e) {
  var t = e.stateNode;
  t.pendingContext ? bu(e, t.pendingContext, t.pendingContext !== t.context)
                   : t.context && bu(e, t.context, !1),
      Hl(e, t.containerInfo)
}
function Wu(e, t, n, o, r) {
  return Jn(), Ml(r), t.flags |= 256, we(e, t, n, o), t.child
}
var el = {dehydrated : null, treeContext : null, retryLane : 0};
function tl(e) {
  return {
    baseLanes: e, cachePool: null, transitions: null
  }
}
function gp(e, t, n) {
  var o = t.pendingProps, r = X.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) ||
          (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
      l ? (i = !0, t.flags &= -129)
        : (e === null || e.memoizedState !== null) && (r |= 1),
      K(X, r & 1),
      e === null)
    return Ys(t), e = t.memoizedState,
                  e !== null && (e = e.dehydrated, e !== null)
               ? (t.mode & 1
                      ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824
                      : t.lanes = 1,
                  null)
               : (s = o.children,
                  e = o.fallback,
                  i ? (o = t.mode,
                       i = t.child,
                       s = {mode : "hidden", children : s},
                       !(o & 1) && i !== null
                           ? (i.childLanes = 0, i.pendingProps = s)
                           : i = Ei(s, o, 0, null),
                       e = gn(e, o, n, null),
                       i.return = t,
                       e.return = t,
                       i.sibling = e,
                       t.child = i,
                       t.child.memoizedState = tl(n),
                       t.memoizedState = el,
                       e)
                    : ql(t, s));
  if (r = e.memoizedState, r !== null && (l = r.dehydrated, l !== null))
    return Am(e, t, s, o, l, r, n);
  if (i) {
    i = o.fallback, s = t.mode, r = e.child, l = r.sibling;
    var a = {mode : "hidden", children : o.children};
    return !(s & 1) && t.child !== r
               ? (o = t.child,
                  o.childLanes = 0,
                  o.pendingProps = a,
                  t.deletions = null)
               : (o = en(r, a), o.subtreeFlags = r.subtreeFlags & 14680064),
           l !== null ? i = en(l, i) : (i = gn(i, s, n, null), i.flags |= 2),
                        i.return = t, o.return = t, o.sibling = i, t.child = o,
                        o = i, i = t.child, s = e.child.memoizedState,
                        s = s === null ? tl(n) : {
                          baseLanes : s.baseLanes | n,
                          cachePool : null,
                          transitions : s.transitions
                        },
                        i.memoizedState = s, i.childLanes = e.childLanes & ~n,
                        t.memoizedState = el, o
  }
  return i = e.child, e = i.sibling,
         o = en(i, {mode : "visible", children : o.children}),
         !(t.mode & 1) && (o.lanes = n), o.return = t, o.sibling = null,
         e !== null &&
             (n = t.deletions,
              n === null ? (t.deletions = [ e ], t.flags |= 16) : n.push(e)),
         t.child = o, t.memoizedState = null, o
}
function ql(e, t) {
  return t = Ei({mode : "visible", children : t}, e.mode, 0, null),
         t.return = e, e.child = t
}
function wr(e, t, n, o) {
  return o !== null && Ml(o), Zn(t, e.child, null, n),
         e = ql(t, t.pendingProps.children), e.flags |= 2,
         t.memoizedState = null, e
}
function Am(e, t, n, o, r, i, s) {
  if (n)
    return t.flags & 256
        ? (t.flags &= -257, o = ls(Error(N(422))), wr(e, t, s, o))
        : t.memoizedState !== null
        ? (t.child = e.child, t.flags |= 128, null)
        : (i = o.fallback,
           r = t.mode,
           o = Ei({mode : "visible", children : o.children}, r, 0, null),
           i = gn(i, r, s, null),
           i.flags |= 2,
           o.return = t,
           i.return = t,
           o.sibling = i,
           t.child = o,
           t.mode & 1 && Zn(t, e.child, null, s),
           t.child.memoizedState = tl(s),
           t.memoizedState = el,
           i);
  if (!(t.mode & 1))
    return wr(e, t, s, null);
  if (r.data === "$!") {
    if (o = r.nextSibling && r.nextSibling.dataset, o)
      var l = o.dgst;
    return o = l, i = Error(N(419)), o = ls(i, o, void 0), wr(e, t, s, o)
  }
  if (l = (s & e.childLanes) !== 0, be || l) {
    if (o = le, o !== null) {
      switch (s & -s) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0
      }
      r = r & (o.suspendedLanes | s) ? 0 : r,
      r !== 0 && r !== i.retryLane &&
          (i.retryLane = r, Ft(e, r), at(o, e, r, -1))
    }
    return ia(), o = ls(Error(N(421))), wr(e, t, s, o)
  }
  return r.data === "$?" ? (t.flags |= 128,
                            t.child = e.child,
                            t = Xm.bind(null, e),
                            r._reactRetry = t,
                            null)
                         : (e = i.treeContext,
                            Me = Xt(r.nextSibling),
                            ze = t,
                            G = !0,
                            st = null,
                            e !== null &&
                                (Ke[He++] = Lt,
                                 Ke[He++] = Tt,
                                 Ke[He++] = vn,
                                 Lt = e.id,
                                 Tt = e.overflow,
                                 vn = t),
                            t = ql(t, o.children),
                            t.flags |= 4096,
                            t)
}
function Yu(e, t, n) {
  e.lanes |= t;
  var o = e.alternate;
  o !== null && (o.lanes |= t), Gs(e.return, t, n)
}
function as (e, t, n, o, r) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = {
    isBackwards : t,
    rendering : null,
    renderingStartTime : 0,
    last : o,
    tail : n,
    tailMode : r
  }
             : (i.isBackwards = t,
                i.rendering = null,
                i.renderingStartTime = 0,
                i.last = o,
                i.tail = n,
                i.tailMode = r)
}
function mp(e, t, n) {
  var o = t.pendingProps, r = o.revealOrder, i = o.tail;
  if (we(e, t, o.children, n), o = X.current, o & 2)
    o = o & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13)
          e.memoizedState !== null && Yu(e, n, t);
        else if (e.tag === 19)
          Yu(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue
        }
        if (e === t)
          break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
    o &= 1
  }
  if (K(X, o), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null;)
          e = n.alternate, e !== null && si(e) === null && (r = n),
          n = n.sibling;
        n = r,
        n === null ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), as (t, !1, r, n, i);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null;) {
          if (e = r.alternate, e !== null && si(e) === null) {
            t.child = r;
            break
          }
          e = r.sibling, r.sibling = n, n = r, r = e
        }
        as (t, !0, n, null, i);
        break;
      case "together":
        as (t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null
    }
  return t.child
}
function Dr(e, t) {
  !(t.mode & 1) && e !== null &&
      (e.alternate = null, t.alternate = null, t.flags |= 2)
}
function Dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
      kn |= t.lanes,
      !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
         e.sibling !== null;)
      e = e.sibling, n = n.sibling = en(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}
function Um(e, t, n) {
  switch (t.tag) {
    case 3:
      hp(t), Jn();
      break;
    case 5:
      Bd(t);
      break;
    case 1:
      Te(t.type) && ei(t);
      break;
    case 4:
      Hl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var o = t.type._context, r = t.memoizedProps.value;
      K(oi, o._currentValue), o._currentValue = r;
      break;
    case 13:
      if (o = t.memoizedState, o !== null)
        return o.dehydrated !== null
            ? (K(X, X.current & 1), t.flags |= 128, null)
            : n & t.child.childLanes ? gp(e, t, n)
                                     : (K(X, X.current & 1),
                                        e = Dt(e, t, n),
                                        e !== null ? e.sibling : null);
      K(X, X.current & 1);
      break;
    case 19:
      if (o = (n & t.childLanes) !== 0, e.flags & 128) {
        if (o)
          return mp(e, t, n);
        t.flags |= 128
      }
      if (r = t.memoizedState,
          r !== null &&
              (r.rendering = null, r.tail = null, r.lastEffect = null),
          K(X, X.current),
          o)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, pp(e, t, n)
  }
  return Dt(e, t, n)
}
var vp, nl, yp, kp;
vp = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t)
      break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t)
        return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
nl = function() {};
yp = function(e, t, n, o) {
  var r = e.memoizedProps;
  if (r !== o) {
    e = t.stateNode, fn(wt.current);
    var i = null;
    switch (n) {
      case "input":
        r = Ns(e, r), o = Ns(e, o), i = [];
        break;
      case "select":
        r = Z({}, r, {value : void 0}), o = Z({}, o, {value : void 0}), i = [];
        break;
      case "textarea":
        r = Es(e, r), o = Es(e, o), i = [];
        break;
      default:
        typeof r.onClick != "function" && typeof o.onClick == "function" &&
            (e.onclick = Zr)
    }
    bs(n, o);
    var s;
    n = null;
    for (u in r)
      if (!o.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var l = r[u];
          for (s in l)
            l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" && u !== "autoFocus" &&
              (Io.hasOwnProperty(u) ? i || (i = [])
                                    : (i = i || []).push(u, null));
    for (u in o) {
      var a = o[u];
      if (l = r != null ? r[u] : void 0,
          o.hasOwnProperty(u) && a !== l && (a != null || l != null))
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) ||
                  (n || (n = {}), n[s] = "");
            for (s in a)
              a.hasOwnProperty(s) && l[s] !== a[s] &&
                  (n || (n = {}), n[s] = a[s])
          } else
            n || (i || (i = []), i.push(u, n)), n = a;
        else
          u === "dangerouslySetInnerHTML"
              ? (a = a ? a.__html : void 0,
                 l = l ? l.__html : void 0,
                 a != null && l !== a && (i = i || []).push(u, a))
              : u === "children"
              ? typeof a != "string" && typeof a != "number" ||
                  (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  (Io.hasOwnProperty(u)
                       ? (a != null && u === "onScroll" && W("scroll", e),
                          i || l === a || (i = []))
                       : (i = i || []).push(u, a))
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
kp = function(e, t, n, o) {
  n !== o && (t.flags |= 4)
};
function go(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null;)
          n.alternate !== null && (o = n), n = n.sibling;
        o === null
            ? t || e.tail === null ? e.tail = null : e.tail.sibling = null
            : o.sibling = null
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
  if (t)
    for (var r = e.child; r !== null;)
      n |= r.lanes | r.childLanes, o |= r.subtreeFlags & 14680064,
          o |= r.flags & 14680064, r.return = e, r = r.sibling;
  else
    for (r = e.child; r !== null;)
      n |= r.lanes | r.childLanes, o |= r.subtreeFlags, o |= r.flags,
          r.return = e, r = r.sibling;
  return e.subtreeFlags |= o, e.childLanes = n, t
}
function Mm(e, t, n) {
  var o = t.pendingProps;
  switch (Ul(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return Te(t.type) && qr(), ge(t), null;
    case 3:
      return o = t.stateNode, qn(), Y(Le), Y(ve), Yl(),
             o.pendingContext &&
                 (o.context = o.pendingContext, o.pendingContext = null),
             (e === null || e.child === null) &&
                 (yr(t) ? t.flags |= 4
                        : e === null ||
                          e.memoizedState.isDehydrated && !(t.flags & 256) ||
                          (t.flags |= 1024,
                           st !== null && (cl(st), st = null))),
             nl(e, t), ge(t), null;
    case 5:
      Wl(t);
      var r = fn(Ko.current);
      if (n = t.type, e !== null && t.stateNode != null)
        yp(e, t, n, o, r),
            e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!o) {
          if (t.stateNode === null)
            throw Error(N(166));
          return ge(t), null
        }
        if (e = fn(wt.current), yr(t)) {
          o = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (o[vt] = t, o[$o] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", o), W("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", o);
              break;
            case "video":
            case "audio":
              for (r = 0; r < So.length; r++)
                W(So[r], o);
              break;
            case "source":
              W("error", o);
              break;
            case "img":
            case "image":
            case "link":
              W("error", o), W("load", o);
              break;
            case "details":
              W("toggle", o);
              break;
            case "input":
              nu(o, i), W("invalid", o);
              break;
            case "select":
              o._wrapperState = {wasMultiple : !!i.multiple}, W("invalid", o);
              break;
            case "textarea":
              ru(o, i), W("invalid", o)
          }
          bs(n, i), r = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children" ? typeof l == "string"
                      ? o.textContent !== l &&
                          (i.suppressHydrationWarning !== !0 &&
                               vr(o.textContent, l, e),
                           r = [ "children", l ])
                      : typeof l == "number" && o.textContent !== "" + l &&
                          (i.suppressHydrationWarning !== !0 &&
                               vr(o.textContent, l, e),
                           r = [ "children", "" + l ])
                               : Io.hasOwnProperty(s) && l != null &&
                      s === "onScroll" && W("scroll", o)
            }
          switch (n) {
            case "input":
              ur(o), ou(o, i, !0);
              break;
            case "textarea":
              ur(o), iu(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (o.onclick = Zr)
          }
          o = r, t.updateQueue = o, o !== null && (t.flags |= 4)
        } else {
          s = r.nodeType === 9 ? r : r.ownerDocument,
          e === "http://www.w3.org/1999/xhtml" && (e = Wc(n)),
          e === "http://www.w3.org/1999/xhtml" ? n === "script"
                  ? (e = s.createElement("div"),
                     e.innerHTML = "<script><\/script>",
                     e = e.removeChild(e.firstChild))
                  : typeof o.is == "string"
                  ? e = s.createElement(n, {is : o.is})
                  : (e = s.createElement(n),
                     n === "select" &&
                         (s = e,
                          o.multiple ? s.multiple = !0
                                     : o.size && (s.size = o.size)))
                                               : e = s.createElementNS(e, n),
          e[vt] = t, e[$o] = o, vp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ls(n, o), n) {
              case "dialog":
                W("cancel", e), W("close", e), r = o;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), r = o;
                break;
              case "video":
              case "audio":
                for (r = 0; r < So.length; r++)
                  W(So[r], e);
                r = o;
                break;
              case "source":
                W("error", e), r = o;
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), r = o;
                break;
              case "details":
                W("toggle", e), r = o;
                break;
              case "input":
                nu(e, o), r = Ns(e, o), W("invalid", e);
                break;
              case "option":
                r = o;
                break;
              case "select":
                e._wrapperState = {wasMultiple : !!o.multiple},
                r = Z({}, o, {value : void 0}), W("invalid", e);
                break;
              case "textarea":
                ru(e, o), r = Es(e, o), W("invalid", e);
                break;
              default:
                r = o
            } bs(n, r),
            l = r;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Qc(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? (a = a ? a.__html : void 0, a != null && Yc(e, a))
                  : i === "children" ? typeof a == "string"
                      ? (n !== "textarea" || a !== "") && Ro(e, a)
                      : typeof a == "number" && Ro(e, "" + a)
                                     : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" && i !== "autoFocus" &&
                      (Io.hasOwnProperty(i)
                           ? a != null && i === "onScroll" && W("scroll", e)
                           : a != null && Ol(e, i, a, s))
            } switch (n) {
              case "input":
                ur(e), ou(e, o, !1);
                break;
              case "textarea":
                ur(e), iu(e);
                break;
              case "option":
                o.value != null && e.setAttribute("value", "" + nn(o.value));
                break;
              case "select":
                e.multiple = !!o.multiple, i = o.value,
                i != null ? $n(e, !!o.multiple, i, !1)
                          : o.defaultValue != null &&
                        $n(e, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = Zr)
            } switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1
            }
          } o &&
              (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null)
        kp(e, t, e.memoizedProps, o);
      else {
        if (typeof o != "string" && t.stateNode === null)
          throw Error(N(166));
        if (n = fn(Ko.current), fn(wt.current), yr(t)) {
          if (o = t.stateNode,
              n = t.memoizedProps,
              o[vt] = t,
              (i = o.nodeValue !== n) && (e = ze, e !== null))
            switch (e.tag) {
              case 3:
                vr(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                    vr(o.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o),
          o[vt] = t, t.stateNode = o
      }
      return ge(t), null;
    case 13:
      if (Y(X),
          o = t.memoizedState,
          e === null ||
              e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Me !== null && t.mode & 1 && !(t.flags & 128))
          Dd(), Jn(), t.flags |= 98560, i = !1;
        else if (i = yr(t), o !== null && o.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(N(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(N(317));
            i[vt] = t
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ge(t), i = !1
        } else
          st !== null && (cl(st), st = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null
      }
      return t.flags & 128
          ? (t.lanes = n, t)
          : (o = o !== null,
             o !== (e !== null && e.memoizedState !== null) && o &&
                 (t.child.flags |= 8192,
                  t.mode & 1 &&
                      (e === null || X.current & 1 ? ie === 0 && (ie = 3)
                                                   : ia())),
             t.updateQueue !== null && (t.flags |= 4),
             ge(t),
             null);
    case 4:
      return qn(), nl(e, t), e === null && zo(t.stateNode.containerInfo), ge(t),
             null;
    case 10:
      return $l(t.type._context), ge(t), null;
    case 17:
      return Te(t.type) && qr(), ge(t), null;
    case 19:
      if (Y(X), i = t.memoizedState, i === null)
        return ge(t), null;
      if (o = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (o)
          go(i, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (s = si(e), s !== null) {
                for (t.flags |= 128,
                     go(i, !1),
                     o = s.updateQueue,
                     o !== null && (t.updateQueue = o, t.flags |= 4),
                     t.subtreeFlags = 0,
                     o = n,
                     n = t.child;
                     n !== null;)
                  i = n, e = o, i.flags &= 14680066, s = i.alternate,
                  s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null)
                             : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                  lanes : e.lanes,
                                  firstContext : e.firstContext
                                }),
                  n = n.sibling;
                return K(X, X.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null && te() > to &&
              (t.flags |= 128, o = !0, go(i, !1), t.lanes = 4194304)
        }
      else {
        if (!o)
          if (e = si(s), e !== null) {
            if (t.flags |= 128,
                o = !0,
                n = e.updateQueue,
                n !== null && (t.updateQueue = n, t.flags |= 4),
                go(i, !0),
                i.tail === null && i.tailMode === "hidden" && !s.alternate &&
                    !G)
              return ge(t), null
          } else
            2 * te() - i.renderingStartTime > to && n !== 1073741824 &&
                (t.flags |= 128, o = !0, go(i, !1), t.lanes = 4194304);
        i.isBackwards
            ? (s.sibling = t.child, t.child = s)
            : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
      }
      return i.tail !== null ? (t = i.tail,
                                i.rendering = t,
                                i.tail = t.sibling,
                                i.renderingStartTime = te(),
                                t.sibling = null,
                                n = X.current,
                                K(X, o ? n & 1 | 2 : n & 1),
                                t)
                             : (ge(t), null);
    case 22:
    case 23:
      return ra(),
             o = t.memoizedState !== null,
             e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
             o && t.mode & 1 ? Ae & 1073741824 &&
                     (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                             : ge(t),
             null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(N(156, t.tag))
}
function zm(e, t) {
  switch (Ul(t), t.tag) {
    case 1:
      return Te(t.type) && qr(),
             e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return qn(), Y(Le), Y(ve), Yl(),
             e = t.flags,
             e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wl(t), null;
    case 13:
      if (Y(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(N(340));
        Jn()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Y(X), null;
    case 4:
      return qn(), null;
    case 10:
      return $l(t.type._context), null;
    case 22:
    case 23:
      return ra(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var Sr = !1, me = !1, Vm = typeof WeakSet == "function" ? WeakSet : Set,
    b = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (o) {
        q(e, t, o)
      }
    else
      n.current = null
}
function ol(e, t, n) {
  try {
    n()
  } catch (o) {
    q(e, t, o)
  }
}
var Gu = !1;
function $m(e, t) {
  if (zs = Qr, e = Od(), Dl(e)) {
    if ("selectionStart" in e)
      var n = {start : e.selectionStart, end : e.selectionEnd};
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var r = o.anchorOffset, i = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null;
            break e
          }
          var s = 0, l = -1, a = -1, u = 0, f = 0, d = e, h = null;
          t: for (;;) {
            for (var m; d !== n || r !== 0 && d.nodeType !== 3 || (l = s + r),
                        d !== i || o !== 0 && d.nodeType !== 3 || (a = s + o),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (m = d.firstChild) !== null;)
              h = d, d = m;
            for (;;) {
              if (d === e)
                break t;
              if (h === n && ++u === r && (l = s),
                  h === i && ++f === o && (a = s),
                  (m = d.nextSibling) !== null)
                break;
              d = h, h = d.parentNode
            }
            d = m
          }
          n = l === -1 || a === -1 ? null : {start : l, end : a}
        } else n = null
      } n = n || {
        start: 0, end: 0
      }
  } else
    n = null;
  for (Vs = {focusedElem : e, selectionRange : n}, Qr = !1, b = t; b !== null;)
    if (t = b, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, b = e;
    else
      for (; b !== null;) {
        t = b;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps, O = v.memoizedState, p = t.stateNode,
                      c = p.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? w : rt(t.type, w), O);
                  p.__reactInternalSnapshotBeforeUpdate = c
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1 ? g.textContent = ""
                                 : g.nodeType === 9 && g.documentElement &&
                        g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163))
            }
        } catch (k) {
          q(t, t.return, k)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, b = e;
          break
        }
        b = t.return
      }
  return v = Gu, Gu = !1, v
}
function Co(e, t, n) {
  var o = t.updateQueue;
  if (o = o !== null ? o.lastEffect : null, o !== null) {
    var r = o = o.next;
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        r.destroy = void 0, i !== void 0 && ol(t, n, i)
      }
      r = r.next
    } while (r !== o)
  }
}
function xi(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var o = n.create;
        n.destroy = o()
      }
      n = n.next
    } while (n !== t)
  }
}
function rl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}
function wp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, wp(t)),
      e.child = null, e.deletions = null, e.sibling = null,
      e.tag === 5 &&
      (t = e.stateNode,
       t !== null &&
           (delete t[vt],
            delete t[$o],
            delete t[Ks],
            delete t[Nm],
            delete t[xm])),
      e.stateNode = null, e.return = null, e.dependencies = null,
      e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null,
      e.stateNode = null, e.updateQueue = null
}
function Sp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Qu(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Sp(e.return))
        return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling;
         e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4)
        continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2))
      return e.stateNode
  }
}
function il(e, t, n) {
  var o = e.tag;
  if (o === 5 || o === 6)
    e = e.stateNode,
    t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t)
                         : n.insertBefore(e, t)
      : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n))
                          : (t = n, t.appendChild(e)),
         n = n._reactRootContainer,
         n != null || t.onclick !== null || (t.onclick = Zr));
  else if (o !== 4 && (e = e.child, e !== null))
    for (il(e, t, n), e = e.sibling; e !== null;)
      il(e, t, n), e = e.sibling
}
function sl(e, t, n) {
  var o = e.tag;
  if (o === 5 || o === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (o !== 4 && (e = e.child, e !== null))
    for (sl(e, t, n), e = e.sibling; e !== null;)
      sl(e, t, n), e = e.sibling
}
var ue = null, it = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null;)
    _p(e, t, n), n = n.sibling
}
function _p(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(vi, n)
    } catch {
    }
  switch (n.tag) {
    case 5:
      me || zn(n, t);
    case 6:
      var o = ue, r = it;
      ue = null, Mt(e, t, n), ue = o, it = r,
      ue !== null &&
          (it ? (e = ue,
                 n = n.stateNode,
                 e.nodeType === 8 ? e.parentNode.removeChild(n)
                                  : e.removeChild(n))
              : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
          (it ? (e = ue,
                 n = n.stateNode,
                 e.nodeType === 8 ? ts(e.parentNode, n)
                                  : e.nodeType === 1 && ts(e, n),
                 Ao(e))
              : ts(ue, n.stateNode));
      break;
    case 4:
      o = ue, r = it, ue = n.stateNode.containerInfo, it = !0, Mt(e, t, n),
      ue = o, it = r;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me &&
          (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
        r = o = o.next;
        do {
          var i = r, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && ol(n, t, s), r = r.next
        } while (r !== o)
      }
      Mt(e, t, n);
      break;
    case 1:
      if (!me &&
          (zn(n, t),
           o = n.stateNode,
           typeof o.componentWillUnmount == "function"))
        try {
          o.props = n.memoizedProps, o.state = n.memoizedState,
          o.componentWillUnmount()
        } catch (l) {
          q(n, t, l)
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode&1
          ? (me = (o = me) || n.memoizedState !== null, Mt(e, t, n), me = o)
          : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n)
  }
}
function Xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vm), t.forEach(function(o) {
      var r = Jm.bind(null, e, o);
      n.has(o) || (n.add(o), o.then(r, r))
    })
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var r = n[o];
      try {
        var i = e, s = t, l = s;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              ue = l.stateNode, it = !1;
              break e;
            case 3:
              ue = l.stateNode.containerInfo, it = !0;
              break e;
            case 4:
              ue = l.stateNode.containerInfo, it = !0;
              break e
          }
          l = l.return
        }
        if (ue === null)
          throw Error(N(160));
        _p(i, s, r), ue = null, it = !1;
        var a = r.alternate;
        a !== null && (a.return = null), r.return = null
      } catch (u) {
        q(r, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
      Op(t, e), t = t.sibling
}
function Op(e, t) {
  var n = e.alternate, o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(t, e), gt(e), o & 4) {
        try {
          Co(3, e, e.return), xi(3, e)
        } catch (w) {
          q(e, e.return, w)
        }
        try {
          Co(5, e, e.return)
        } catch (w) {
          q(e, e.return, w)
        }
      }
      break;
    case 1:
      ot(t, e), gt(e), o&512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (ot(t, e),
          gt(e),
          o & 512 && n !== null && zn(n, n.return),
          e.flags & 32) {
        var r = e.stateNode;
        try {
          Ro(r, "")
        } catch (w) {
          q(e, e.return, w)
        }
      }
      if (o & 4 && (r = e.stateNode, r != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i,
            l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            l === "input" && i.type === "radio" && i.name != null && Kc(r, i),
                Ls(l, s);
            var u = Ls(l, i);
            for (s = 0; s < a.length; s += 2) {
              var f = a[s], d = a[s + 1];
              f === "style"                         ? Qc(r, d)
                  : f === "dangerouslySetInnerHTML" ? Yc(r, d)
                  : f === "children"                ? Ro(r, d)
                                                    : Ol(r, f, d, u)
            }
            switch (l) {
              case "input":
                xs(r, i);
                break;
              case "textarea":
                Hc(r, i);
                break;
              case "select":
                var h = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null ? $n(r, !!i.multiple, m, !1)
                          : h !== !!i.multiple &&
                        (i.defaultValue != null
                             ? $n(r, !!i.multiple, i.defaultValue, !0)
                             : $n(r, !!i.multiple, i.multiple ? [] : "", !1))
            }
            r[$o] = i
          } catch (w) {
            q(e, e.return, w)
          }
      }
      break;
    case 6:
      if (ot(t, e), gt(e), o & 4) {
        if (e.stateNode === null)
          throw Error(N(162));
        r = e.stateNode, i = e.memoizedProps;
        try {
          r.nodeValue = i
        } catch (w) {
          q(e, e.return, w)
        }
      }
      break;
    case 3:
      if (ot(t, e), gt(e), o & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Ao(t.containerInfo)
        } catch (w) {
          q(e, e.return, w)
        }
      break;
    case 4:
      ot(t, e), gt(e);
      break;
    case 13:
      ot(t, e), gt(e), r = e.child,
                       r.flags & 8192 &&
          (i = r.memoizedState !== null,
           r.stateNode.isHidden = i,
           !i || r.alternate !== null && r.alternate.memoizedState !== null ||
               (na = te())),
                       o & 4 && Xu(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null,
          e.mode & 1 ? (me = (u = me) || f, ot(t, e), me = u) : ot(t, e),
          gt(e),
          o & 8192) {
        if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
          for (b = e, f = e.child; f !== null;) {
            for (d = b = f; b !== null;) {
              switch (h = b, m = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Co(4, h, h.return);
                  break;
                case 1:
                  zn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    o = h, n = h.return;
                    try {
                      t = o, v.props = t.memoizedProps,
                      v.state = t.memoizedState, v.componentWillUnmount()
                    } catch (w) {
                      q(o, n, w)
                    }
                  }
                  break;
                case 5:
                  zn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Zu(d);
                    continue
                  }
              }
              m !== null ? (m.return = h, b = m) : Zu(d)
            }
            f = f.sibling
          }
        e: for (f = null, d = e;;) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                r = d.stateNode,
                u ? (i = r.style,
                     typeof i.setProperty == "function"
                         ? i.setProperty("display", "none", "important")
                         : i.display = "none")
                  : (l = d.stateNode,
                     a = d.memoizedProps.style,
                     s = a != null && a.hasOwnProperty("display") ? a.display
                                                                  : null,
                     l.style.display = Gc("display", s))
              } catch (w) {
                q(e, e.return, w)
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps
              } catch (w) {
                q(e, e.return, w)
              }
          } else if (
              (d.tag !== 22 && d.tag !== 23 || d.memoizedState === null ||
               d === e) &&
              d.child !== null) {
            d.child.return = d, d = d.child;
            continue
          }
          if (d === e)
            break e;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === e)
              break e;
            f === d && (f = null), d = d.return
          }
          f === d && (f = null), d.sibling.return = d.return, d = d.sibling
        }
      }
      break;
    case 19:
      ot(t, e), gt(e), o&4 && Xu(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), gt(e)
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Sp(n)) {
            var o = n;
            break e
          }
          n = n.return
        } throw Error(N(160))
      } switch (o.tag) {
        case 5:
          var r = o.stateNode;
          o.flags&32 && (Ro(r, ""), o.flags &= -33);
          var i = Qu(e);
          sl(e, i, r);
          break;
        case 3:
        case 4:
          var s = o.stateNode.containerInfo, l = Qu(e);
          il(e, l, s);
          break;
        default:
          throw Error(N(161))
      }
    } catch (a) {
      q(e, e.return, a)
    }
    e.flags &= -3
  }
  t&4096 && (e.flags &= -4097)
}
function Bm(e, t, n) {
  b = e, Np(e)
}
function Np(e, t, n) {
  for (var o = (e.mode & 1) !== 0; b !== null;) {
    var r = b, i = r.child;
    if (r.tag === 22 && o) {
      var s = r.memoizedState !== null || Sr;
      if (!s) {
        var l = r.alternate, a = l !== null && l.memoizedState !== null || me;
        l = Sr;
        var u = me;
        if (Sr = s, (me = a) && !u)
          for (b = r; b !== null;)
            s = b, a = s.child,
            s.tag === 22 && s.memoizedState !== null ? qu(r)
                : a !== null                         ? (a.return = s, b = a)
                                                     : qu(r);
        for (; i !== null;)
          b = i, Np(i), i = i.sibling;
        b = r, Sr = l, me = u
      }
      Ju(e)
    } else
      r.subtreeFlags&8772 && i !== null ? (i.return = r, b = i) : Ju(e)
  }
}
function Ju(e) {
  for (; b !== null;) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || xi(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null)
                  o.componentDidMount();
                else {
                  var r =
                      t.elementType === t.type ? n.memoizedProps
                                               : rt(t.type, n.memoizedProps);
                  o.componentDidUpdate(
                      r, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue;
              i !== null && ju(t, i, o);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode
                  }
                ju(t, s, n)
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src)
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Ao(d)
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163))
          }
        me || t.flags&512 && rl(t)
      } catch (h) {
        q(t, t.return, h)
      }
    }
    if (t === e) {
      b = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, b = n;
      break
    }
    b = t.return
  }
}
function Zu(e) {
  for (; b !== null;) {
    var t = b;
    if (t === e) {
      b = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, b = n;
      break
    }
    b = t.return
  }
}
function qu(e) {
  for (; b !== null;) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xi(4, t)
          } catch (a) {
            q(t, n, a)
          }
          break;
        case 1:
          var o = t.stateNode;
          if (typeof o.componentDidMount == "function") {
            var r = t.return;
            try {
              o.componentDidMount()
            } catch (a) {
              q(t, r, a)
            }
          }
          var i = t.return;
          try {
            rl(t)
          } catch (a) {
            q(t, i, a)
          }
          break;
        case 5:
          var s = t.return;
          try {
            rl(t)
          } catch (a) {
            q(t, s, a)
          }
      }
    } catch (a) {
      q(t, t.return, a)
    }
    if (t === e) {
      b = null;
      break
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, b = l;
      break
    }
    b = t.return
  }
}
var Km = Math.ceil, ui = At.ReactCurrentDispatcher, ea = At.ReactCurrentOwner,
    Ge = At.ReactCurrentBatchConfig, A = 0, le = null, ne = null, pe = 0,
    Ae = 0, Vn = sn(0), ie = 0, Go = null, kn = 0, Pi = 0, ta = 0, bo = null,
    Ce = null, na = 0, to = 1 / 0, Ct = null, ci = !1, ll = null, Zt = null,
    _r = !1, Ht = null, di = 0, Lo = 0, al = null, Ar = -1, Ur = 0;
function Se() {
  return A & 6 ? te() : Ar !== -1 ? Ar : Ar = te()
}
function qt(e) {
  return e.mode & 1 ? A & 2 && pe !== 0 ? pe & -pe
          : Em.transition !== null
          ? (Ur === 0 && (Ur = ld()), Ur)
          : (e = $,
             e !== 0 || (e = window.event, e = e === void 0 ? 16 : hd(e.type)),
             e)
                    : 1
}
function at(e, t, n, o) {
  if (50 < Lo)
    throw Lo = 0, al = null, Error(N(185));
  Jo(e, n, o),
      (!(A & 2) || e !== le) &&
      (e === le && (!(A & 2) && (Pi |= n), ie === 4 && Bt(e, pe)),
       Ie(e, o),
       n === 1 && A === 0 && !(t.mode & 1) && (to = te() + 500, _i && ln()))
}
function Ie(e, t) {
  var n = e.callbackNode;
  Eg(e, t);
  var o = Gr(e, e === le ? pe : 0);
  if (o === 0)
    n !== null && au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = o & -o, e.callbackPriority !== t) {
    if (n != null && au(n), t === 1)
      e.tag === 0 ? Pm(ec.bind(null, e)) : Rd(ec.bind(null, e)), _m(function() {
        !(A & 6) && ln()
      }),
          n = null;
    else {
      switch (ad(o)) {
        case 1:
          n = Cl;
          break;
        case 4:
          n = id;
          break;
        case 16:
          n = Yr;
          break;
        case 536870912:
          n = sd;
          break;
        default:
          n = Yr
      }
      n = Ip(n, xp.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}
function xp(e, t) {
  if (Ar = -1, Ur = 0, A & 6)
    throw Error(N(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n)
    return null;
  var o = Gr(e, e === le ? pe : 0);
  if (o === 0)
    return null;
  if (o & 30 || o & e.expiredLanes || t)
    t = pi(e, o);
  else {
    t = o;
    var r = A;
    A |= 2;
    var i = Ep();
    (le !== e || pe !== t) && (Ct = null, to = te() + 500, hn(e, t));
    do
      try {
        Ym();
        break
      } catch (l) {
        Pp(e, l)
      }
    while (1);
    Vl(), ui.current = i, A = r,
          ne !== null ? t = 0 : (le = null, pe = 0, t = ie)
  }
  if (t !== 0) {
    if (t === 2 && (r = Fs(e), r !== 0 && (o = r, t = ul(e, r))), t === 1)
      throw n = Go, hn(e, 0), Bt(e, o), Ie(e, te()), n;
    if (t === 6)
      Bt(e, o);
    else {
      if (r = e.current.alternate,
          !(o & 30) && !Hm(r) &&
              (t = pi(e, o),
               t === 2 && (i = Fs(e), i !== 0 && (o = i, t = ul(e, i))),
               t === 1))
        throw n = Go, hn(e, 0), Bt(e, o), Ie(e, te()), n;
      switch (e.finishedWork = r, e.finishedLanes = o, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          un(e, Ce, Ct);
          break;
        case 3:
          if (Bt(e, o),
              (o & 130023424) === o && (t = na + 500 - te(), 10 < t)) {
            if (Gr(e, 0) !== 0)
              break;
            if (r = e.suspendedLanes, (r & o) !== o) {
              Se(), e.pingedLanes |= e.suspendedLanes & r;
              break
            }
            e.timeoutHandle = Bs(un.bind(null, e, Ce, Ct), t);
            break
          }
          un(e, Ce, Ct);
          break;
        case 4:
          if (Bt(e, o), (o & 4194240) === o)
            break;
          for (t = e.eventTimes, r = -1; 0 < o;) {
            var s = 31 - lt(o);
            i = 1 << s, s = t[s], s > r && (r = s), o &= ~i
          }
          if (o = r,
              o = te() - o,
              o = (120 > o        ? 120
                       : 480 > o  ? 480
                       : 1080 > o ? 1080
                       : 1920 > o ? 1920
                       : 3e3 > o  ? 3e3
                       : 4320 > o ? 4320
                                  : 1960 * Km(o / 1960)) -
                  o,
              10 < o) {
            e.timeoutHandle = Bs(un.bind(null, e, Ce, Ct), o);
            break
          }
          un(e, Ce, Ct);
          break;
        case 5:
          un(e, Ce, Ct);
          break;
        default:
          throw Error(N(329))
      }
    }
  }
  return Ie(e, te()), e.callbackNode === n ? xp.bind(null, e) : null
}
function ul(e, t) {
  var n = bo;
  return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
         e = pi(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && cl(t)), e
}
function cl(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}
function Hm(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var o = 0; o < n.length; o++) {
          var r = n[o], i = r.getSnapshot;
          r = r.value;
          try {
            if (!ut(i(), r))
              return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}
function Bt(e, t) {
  for (t &= ~ta,
       t &= ~Pi,
       e.suspendedLanes |= t,
       e.pingedLanes &= ~t,
       e = e.expirationTimes;
       0 < t;) {
    var n = 31 - lt(t), o = 1 << n;
    e[n] = -1, t &= ~o
  }
}
function ec(e) {
  if (A & 6)
    throw Error(N(327));
  Yn();
  var t = Gr(e, 0);
  if (!(t & 1))
    return Ie(e, te()), null;
  var n = pi(e, t);
  if (e.tag !== 0 && n === 2) {
    var o = Fs(e);
    o !== 0 && (t = o, n = ul(e, o))
  }
  if (n === 1)
    throw n = Go, hn(e, 0), Bt(e, t), Ie(e, te()), n;
  if (n === 6)
    throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t,
         un(e, Ce, Ct), Ie(e, te()), null
}
function oa(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t)
  } finally {
    A = n, A === 0 && (to = te() + 500, _i && ln())
  }
}
function wn(e) {
  Ht !== null && Ht.tag === 0 && !(A & 6) && Yn();
  var t = A;
  A |= 1;
  var n = Ge.transition, o = $;
  try {
    if (Ge.transition = null, $ = 1, e)
      return e()
  } finally {
    $ = o, Ge.transition = n, A = t, !(A & 6) && ln()
  }
}
function ra() {
  Ae = Vn.current, Y(Vn)
}
function hn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Sm(n)), ne !== null)
    for (n = ne.return; n !== null;) {
      var o = n;
      switch (Ul(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && qr();
          break;
        case 3:
          qn(), Y(Le), Y(ve), Yl();
          break;
        case 5:
          Wl(o);
          break;
        case 4:
          qn();
          break;
        case 13:
          Y(X);
          break;
        case 19:
          Y(X);
          break;
        case 10:
          $l(o.type._context);
          break;
        case 22:
        case 23:
          ra()
      }
      n = n.return
    }
  if (le = e,
      ne = e = en(e.current, null),
      pe = Ae = t,
      ie = 0,
      Go = null,
      ta = Pi = kn = 0,
      Ce = bo = null,
      pn !== null) {
    for (t = 0; t < pn.length; t++)
      if (n = pn[t], o = n.interleaved, o !== null) {
        n.interleaved = null;
        var r = o.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = r, o.next = s
        }
        n.pending = o
      }
    pn = null
  }
  return e
}
function Pp(e, t) {
  do {
    var n = ne;
    try {
      if (Vl(), jr.current = ai, li) {
        for (var o = J.memoizedState; o !== null;) {
          var r = o.queue;
          r !== null && (r.pending = null), o = o.next
        }
        li = !1
      }
      if (yn = 0,
          se = re = J = null,
          Eo = !1,
          Ho = 0,
          ea.current = null,
          n === null || n.return === null) {
        ie = 1, Go = t, ne = null;
        break
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = pe,
            l.flags |= 32768,
            a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, f = l, d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h ? (f.updateQueue = h.updateQueue,
                 f.memoizedState = h.memoizedState,
                 f.lanes = h.lanes)
              : (f.updateQueue = null, f.memoizedState = null)
          }
          var m = Vu(s);
          if (m !== null) {
            m.flags &= -257, $u(m, s, l, i, t), m.mode & 1 && zu(i, u, t),
                t = m, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set;
              w.add(a), t.updateQueue = w
            } else
              v.add(a);
            break e
          } else {
            if (!(t & 1)) {
              zu(i, u, t), ia();
              break e
            }
            a = Error(N(426))
          }
        } else if (G && l.mode & 1) {
          var O = Vu(s);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), $u(O, s, l, i, t),
                Ml(eo(a, l));
            break e
          }
        } i = a = eo(a, l),
        ie !== 4 && (ie = 2),
        bo === null ? bo = [ i ] : bo.push(i),
        i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = up(i, a, t);
              Ru(i, p);
              break e;
            case 1:
              l = a;
              var c = i.type, g = i.stateNode;
              if (!(i.flags & 128) &&
                  (typeof c.getDerivedStateFromError == "function" ||
                   g !== null && typeof g.componentDidCatch == "function" &&
                       (Zt === null || !Zt.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = cp(i, l, t);
                Ru(i, k);
                break e
              }
          }
          i = i.return
        } while (i !== null)
      } bp(n)
    } catch (_) {
      t = _, ne === n && n !== null && (ne = n = n.return);
      continue
    }
    break
  } while (1)
}
function Ep() {
  var e = ui.current;
  return ui.current = ai, e === null ? ai : e
}
function ia() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
      le === null || !(kn & 268435455) && !(Pi & 268435455) || Bt(le, pe)
}
function pi(e, t) {
  var n = A;
  A |= 2;
  var o = Ep();
  (le !== e || pe !== t) && (Ct = null, hn(e, t));
  do
    try {
      Wm();
      break
    } catch (r) {
      Pp(e, r)
    }
  while (1);
  if (Vl(), A = n, ui.current = o, ne !== null)
    throw Error(N(261));
  return le = null, pe = 0, ie
}
function Wm() {
  for (; ne !== null;)
    Cp(ne)
}
function Ym() {
  for (; ne !== null && !yg();)
    Cp(ne)
}
function Cp(e) {
  var t = Tp(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? bp(e) : ne = t,
  ea.current = null
}
function bp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = zm(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, ne = null;
        return
      }
    } else if (n = Mm(n, t, Ae), n !== null) {
      ne = n;
      return
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return
    }
    ne = t = e
  } while (t !== null);
  ie === 0 && (ie = 5)
}
function un(e, t, n) {
  var o = $, r = Ge.transition;
  try {
    Ge.transition = null, $ = 1, Gm(e, t, n, o)
  } finally {
    Ge.transition = r, $ = o
  }
  return null
}
function Gm(e, t, n, o) {
  do
    Yn();
  while (Ht !== null);
  if (A & 6)
    throw Error(N(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Cg(e, i),
      e === le && (ne = le = null, pe = 0),
      !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r ||
          (_r = !0,
           Ip(Yr,
              function() {
                return Yn(), null
              })),
      i = (n.flags & 15990) !== 0,
      n.subtreeFlags & 15990 || i) {
    i = Ge.transition, Ge.transition = null;
    var s = $;
    $ = 1;
    var l = A;
    A |= 4, ea.current = null, $m(e, n), Op(n, e), hm(Vs), Qr = !!zs,
            Vs = zs = null, e.current = n, Bm(n), kg(), A = l, $ = s,
            Ge.transition = i
  } else
    e.current = n;
  if (_r && (_r = !1, Ht = e, di = r),
      i = e.pendingLanes,
      i === 0 && (Zt = null),
      _g(n.stateNode),
      Ie(e, te()),
      t !== null)
    for (o = e.onRecoverableError, n = 0; n < t.length; n++)
      r = t[n], o(r.value, {componentStack : r.stack, digest : r.digest});
  if (ci)
    throw ci = !1, e = ll, ll = null, e;
  return di & 1 && e.tag !== 0 && Yn(),
         i = e.pendingLanes,
         i & 1 ? e === al ? Lo++ : (Lo = 0, al = e) : Lo = 0, ln(), null
}
function Yn() {
  if (Ht !== null) {
    var e = ad(di), t = Ge.transition, n = $;
    try {
      if (Ge.transition = null, $ = 16 > e ? 16 : e, Ht === null)
        var o = !1;
      else {
        if (e = Ht, Ht = null, di = 0, A & 6)
          throw Error(N(331));
        var r = A;
        for (A |= 4, b = e.current; b !== null;) {
          var i = b, s = i.child;
          if (b.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (b = u; b !== null;) {
                  var f = b;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(8, f, i)
                  }
                  var d = f.child;
                  if (d !== null)
                    d.return = f, b = d;
                  else
                    for (; b !== null;) {
                      f = b;
                      var h = f.sibling, m = f.return;
                      if (wp(f), f === u) {
                        b = null;
                        break
                      }
                      if (h !== null) {
                        h.return = m, b = h;
                        break
                      }
                      b = m
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var O = w.sibling;
                    w.sibling = null, w = O
                  } while (w !== null)
                }
              }
              b = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null)
            s.return = i, b = s;
          else
            e: for (; b !== null;) {
              if (i = b, i.flags & 2048)
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Co(9, i, i.return)
                }
              var p = i.sibling;
              if (p !== null) {
                p.return = i.return, b = p;
                break e
              }
              b = i.return
            }
        }
        var c = e.current;
        for (b = c; b !== null;) {
          s = b;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null)
            g.return = s, b = g;
          else
            e: for (s = c; b !== null;) {
              if (l = b, l.flags & 2048)
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xi(9, l)
                  }
                } catch (_) {
                  q(l, l.return, _)
                }
              if (l === s) {
                b = null;
                break e
              }
              var k = l.sibling;
              if (k !== null) {
                k.return = l.return, b = k;
                break e
              }
              b = l.return
            }
        }
        if (A = r, ln(), kt && typeof kt.onPostCommitFiberRoot == "function")
          try {
            kt.onPostCommitFiberRoot(vi, e)
          } catch {
          }
        o = !0
      }
      return o
    } finally {
      $ = n, Ge.transition = t
    }
  }
  return !1
}
function tc(e, t, n) {
  t = eo(n, t), t = up(e, t, 1), e = Jt(e, t, 1), t = Se(),
  e !== null && (Jo(e, 1, t), Ie(e, t))
}
function q(e, t, n) {
  if (e.tag === 3)
    tc(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        tc(t, e, n);
        break
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" ||
            typeof o.componentDidCatch == "function" &&
                (Zt === null || !Zt.has(o))) {
          e = eo(n, e), e = cp(t, e, 1), t = Jt(t, e, 1), e = Se(),
          t !== null && (Jo(t, 1, e), Ie(t, e));
          break
        }
      }
      t = t.return
    }
}
function Qm(e, t, n) {
  var o = e.pingCache;
  o !== null && o.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n,
                             le === e && (pe & n) === n &&
      (ie === 4 || ie === 3 && (pe & 130023424) === pe && 500 > te() - na
           ? hn(e, 0)
           : ta |= n),
                             Ie(e, t)
}
function Lp(e, t) {
  t === 0 &&
      (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304))
                  : t = 1);
  var n = Se();
  e = Ft(e, t), e !== null && (Jo(e, t, n), Ie(e, n))
}
function Xm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Lp(e, n)
}
function Jm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var o = e.stateNode, r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      o = e.stateNode;
      break;
    default:
      throw Error(N(314))
  }
  o !== null && o.delete(t), Lp(e, n)
}
var Tp;
Tp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current)
      be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return be = !1, Um(e, t, n);
      be = !!(e.flags & 131072)
    }
  else
    be = !1, G && t.flags & 1048576 && jd(t, ni, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var o = t.type;
      Dr(e, t), e = t.pendingProps;
      var r = Xn(t, ve.current);
      Wn(t, n), r = Ql(null, t, o, e, r, n);
      var i = Xl();
      return t.flags |= 1,
             typeof r == "object" && r !== null &&
                     typeof r.render == "function" && r.$$typeof === void 0
                 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Te(o) ? (i = !0, ei(t)) : i = !1,
                    t.memoizedState =
                        r.state !== null && r.state !== void 0 ? r.state : null,
                    Kl(t),
                    r.updater = Oi,
                    t.stateNode = r,
                    r._reactInternals = t,
                    Xs(t, o, e, n),
                    t = qs(null, t, o, !0, i, n))
                 : (t.tag = 0, G && i && Al(t), we(null, t, r, n), t = t.child),
             t;
    case 16:
      o = t.elementType;
      e: {
        switch (Dr(e, t),
                e = t.pendingProps,
                r = o._init,
                o = r(o._payload),
                t.type = o,
                r = t.tag = qm(o),
                e = rt(o, e),
                r) {
          case 0:
            t = Zs(null, t, o, e, n);
            break e;
          case 1:
            t = Hu(null, t, o, e, n);
            break e;
          case 11:
            t = Bu(null, t, o, e, n);
            break e;
          case 14:
            t = Ku(null, t, o, rt(o.type, e), n);
            break e
        } throw Error(N(306, o, ""))
      } return t;
    case 0:
      return o = t.type, r = t.pendingProps,
             r = t.elementType === o ? r : rt(o, r), Zs(e, t, o, r, n);
    case 1:
      return o = t.type, r = t.pendingProps,
             r = t.elementType === o ? r : rt(o, r), Hu(e, t, o, r, n);
    case 3:
      e: {
        if (hp(t), e === null) throw Error(N(387)); o = t.pendingProps,
                                                    i = t.memoizedState,
                                                    r = i.element,
                                                    Ud(e, t),
                                                    ii(t, o, null, n);
        var s = t.memoizedState;
        if (o = s.element, i.isDehydrated) if (
            i = {
              element : o,
              isDehydrated : !1,
              cache : s.cache,
              pendingSuspenseBoundaries : s.pendingSuspenseBoundaries,
              transitions : s.transitions
            },
            t.updateQueue.baseState = i,
            t.memoizedState = i,
            t.flags & 256) {
          r = eo(Error(N(423)), t), t = Wu(e, t, o, n, r);
          break e
        } else if (o !== r) {
          r = eo(Error(N(424)), t), t = Wu(e, t, o, n, r);
          break e
        } else for (Me = Xt(t.stateNode.containerInfo.firstChild),
                    ze = t,
                    G = !0,
                    st = null,
                    n = $d(t, null, o, n),
                    t.child = n;
                    n;) n.flags = n.flags & -3 | 4096,
        n = n.sibling;
        else {
          if (Jn(), o === r) {
            t = Dt(e, t, n);
            break e
          }
          we(e, t, o, n)
        } t = t.child
      } return t;
    case 5:
      return Bd(t), e === null && Ys(t),
             o = t.type, r = t.pendingProps,
             i = e !== null ? e.memoizedProps : null, s = r.children,
             $s(o, r) ? s = null : i !== null && $s(o, i) && (t.flags |= 32),
             fp(e, t), we(e, t, s, n), t.child;
    case 6:
      return e === null && Ys(t), null;
    case 13:
      return gp(e, t, n);
    case 4:
      return Hl(t, t.stateNode.containerInfo),
             o = t.pendingProps,
             e === null ? t.child = Zn(t, null, o, n) : we(e, t, o, n), t.child;
    case 11:
      return o = t.type, r = t.pendingProps,
             r = t.elementType === o ? r : rt(o, r), Bu(e, t, o, r, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (o = t.type._context,
            r = t.pendingProps,
            i = t.memoizedProps,
            s = r.value,
            K(oi, o._currentValue),
            o._currentValue = s,
            i !== null) if (ut(i.value, s)) {
          if (i.children === r.children && !Le.current) {
            t = Dt(e, t, n);
            break e
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null;) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null;) {
              if (a.context === o) {
                if (i.tag === 1) {
                  a = It(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var f = u.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a),
                                 u.pending = a
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n),
                              Gs(i.return, n, t), l.lanes |= n;
                break
              }
              a = a.next
            }
          } else if (i.tag === 10)
            s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null)
              throw Error(N(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n),
                          Gs(s, n, t), s = i.sibling
          } else
            s = i.child;
          if (s !== null)
            s.return = i;
          else
            for (s = i; s !== null;) {
              if (s === t) {
                s = null;
                break
              }
              if (i = s.sibling, i !== null) {
                i.return = s.return, s = i;
                break
              }
              s = s.return
            }
          i = s
        } we(e, t, r.children, n),
        t = t.child
      } return t;
    case 9:
      return r = t.type, o = t.pendingProps.children, Wn(t, n), r = Qe(r),
             o = o(r), t.flags |= 1, we(e, t, o, n), t.child;
    case 14:
      return o = t.type, r = rt(o, t.pendingProps), r = rt(o.type, r),
             Ku(e, t, o, r, n);
    case 15:
      return dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return o = t.type, r = t.pendingProps,
             r = t.elementType === o ? r : rt(o, r), Dr(e, t), t.tag = 1,
             Te(o) ? (e = !0, ei(t)) : e = !1, Wn(t, n), zd(t, o, r),
             Xs(t, o, r, n), qs(null, t, o, !0, e, n);
    case 19:
      return mp(e, t, n);
    case 22:
      return pp(e, t, n)
  }
  throw Error(N(156, t.tag))
};
function Ip(e, t) {
  return rd(e, t)
}
function Zm(e, t, n, o) {
  this.tag = e, this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type =
      this.elementType = null,
  this.index = 0, this.ref = null, this.pendingProps = t,
  this.dependencies = this.memoizedState = this.updateQueue =
      this.memoizedProps = null,
  this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null,
  this.childLanes = this.lanes = 0, this.alternate = null
}
function We(e, t, n, o) {
  return new Zm(e, t, n, o)
}
function sa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}
function qm(e) {
  if (typeof e == "function")
    return sa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xl)
      return 11;
    if (e === Pl)
      return 14
  }
  return 2
}
function en(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode),
                       n.elementType = e.elementType,
                       n.type = e.type,
                       n.stateNode = e.stateNode,
                       n.alternate = e,
                       e.alternate = n)
                    : (n.pendingProps = t,
                       n.type = e.type,
                       n.flags = 0,
                       n.subtreeFlags = 0,
                       n.deletions = null),
         n.flags = e.flags & 14680064, n.childLanes = e.childLanes,
         n.lanes = e.lanes, n.child = e.child,
         n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState,
         n.updateQueue = e.updateQueue, t = e.dependencies,
         n.dependencies = t === null
             ? null
             : {lanes : t.lanes, firstContext : t.firstContext},
         n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}
function Mr(e, t, n, o, r, i) {
  var s = 2;
  if (o = e, typeof e == "function")
    sa(e) && (s = 1);
  else if (typeof e == "string")
    s = 5;
  else
    e: switch (e) {
      case Tn:
        return gn(n.children, r, i, t);
      case Nl:
        s = 8, r |= 8;
        break;
      case ws:
        return e = We(12, n, t, r | 2), e.elementType = ws, e.lanes = i, e;
      case Ss:
        return e = We(13, n, t, r), e.elementType = Ss, e.lanes = i, e;
      case _s:
        return e = We(19, n, t, r), e.elementType = _s, e.lanes = i, e;
      case Vc:
        return Ei(n, r, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mc:
              s = 10;
              break e;
            case zc:
              s = 9;
              break e;
            case xl:
              s = 11;
              break e;
            case Pl:
              s = 14;
              break e;
            case zt:
              s = 16, o = null;
              break e
          }
        throw Error(N(130, e == null ? e : typeof e, ""))
    }
  return t = We(s, n, t, r), t.elementType = e, t.type = o, t.lanes = i, t
}
function gn(e, t, n, o) {
  return e = We(7, e, o, t), e.lanes = n, e
}
function Ei(e, t, n, o) {
  return e = We(22, e, o, t), e.elementType = Vc, e.lanes = n,
         e.stateNode = {isHidden : !1}, e
}
function us(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e
}
function cs(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t),
         t.lanes = n, t.stateNode = {
           containerInfo : e.containerInfo,
           pendingChildren : null,
           implementation : e.implementation
         },
         t
}
function ev(e, t, n, o, r) {
  this.tag = t, this.containerInfo = e,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren =
      null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0, this.eventTimes = Ki(0),
  this.expirationTimes = Ki(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes =
      this.expiredLanes = this.pingedLanes = this.suspendedLanes =
          this.pendingLanes = 0,
  this.entanglements = Ki(0), this.identifierPrefix = o,
  this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null
}
function la(e, t, n, o, r, i, s, l, a) {
  return e = new ev(e, t, n, l, a),
         t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0,
         i = We(3, null, null, t), e.current = i, i.stateNode = e,
         i.memoizedState = {
           element : o,
           isDehydrated : n,
           cache : null,
           transitions : null,
           pendingSuspenseBoundaries : null
         },
         Kl(i), e
}
function tv(e, t, n) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln, key: o == null ? null : "" + o, children: e, containerInfo: t,
        implementation: n
  }
}
function Rp(e) {
  if (!e)
    return on;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(N(170)); var t = e; do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(N(171))
  } if (e.tag === 1) {
    var n = e.type;
    if (Te(n))
      return Id(e, n, t)
  }
  return t
}
function jp(e, t, n, o, r, i, s, l, a) {
  return e = la(n, o, !0, e, r, i, s, l, a), e.context = Rp(null),
         n = e.current, o = Se(), r = qt(n), i = It(o, r),
         i.callback = t ?? null, Jt(n, i, r), e.current.lanes = r, Jo(e, r, o),
         Ie(e, o), e
}
function Ci(e, t, n, o) {
  var r = t.current, i = Se(), s = qt(r);
  return n = Rp(n), t.context === null ? t.context = n : t.pendingContext = n,
         t = It(i, s), t.payload = {element : e}, o = o === void 0 ? null : o,
         o !== null && (t.callback = o), e = Jt(r, t, s),
         e !== null && (at(e, r, s, i), Rr(e, r, s)), s
}
function fi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}
function nc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function aa(e, t) {
  nc(e, t), (e = e.alternate) && nc(e, t)
}
function nv() {
  return null
}
var Fp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};
function ua(e) {
  this._internalRoot = e
}
bi.prototype.render = ua.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(N(409));
  Ci(e, t, null, null)
};
bi.prototype.unmount = ua.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function() {
      Ci(null, e, null, null)
    }),
        t[jt] = null
  }
};
function bi(e) {
  this._internalRoot = e
}
bi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = dd();
    e = {blockedOn : null, target : e, priority : t};
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++)
      ;
    $t.splice(n, 0, e), n === 0 && fd(e)
  }
};
function ca(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Li(e) {
  return !(
      !e ||
      e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function oc() {}
function ov(e, t, n, o, r) {
  if (r) {
    if (typeof o == "function") {
      var i = o;
      o = function() {
        var u = fi(s);
        i.call(u)
      }
    }
    var s = jp(t, o, e, 0, null, !1, !1, "", oc);
    return e._reactRootContainer = s, e[jt] = s.current,
           zo(e.nodeType === 8 ? e.parentNode : e), wn(), s
  }
  for (; r = e.lastChild;)
    e.removeChild(r);
  if (typeof o == "function") {
    var l = o;
    o = function() {
      var u = fi(a);
      l.call(u)
    }
  }
  var a = la(e, 0, !1, null, null, !1, !1, "", oc);
  return e._reactRootContainer = a, e[jt] = a.current,
         zo(e.nodeType === 8 ? e.parentNode : e), wn(function() {
           Ci(t, a, n, o)
         }),
         a
}
function Ti(e, t, n, o, r) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = fi(s);
        l.call(a)
      }
    }
    Ci(t, s, e, r)
  } else
    s = ov(n, t, e, r, o);
  return fi(s)
}
ud = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wo(t.pendingLanes);
        n !== 0 &&
            (bl(t, n | 1), Ie(t, te()), !(A & 6) && (to = te() + 500, ln()))
      }
      break;
    case 13:
      wn(function() {
        var o = Ft(e, 1);
        if (o !== null) {
          var r = Se();
          at(o, e, 1, r)
        }
      }),
          aa(e, 1)
  }
};
Ll = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Se();
      at(t, e, 134217728, n)
    }
    aa(e, 134217728)
  }
};
cd = function(e) {
  if (e.tag === 13) {
    var t = qt(e), n = Ft(e, t);
    if (n !== null) {
      var o = Se();
      at(n, e, t, o)
    }
    aa(e, t)
  }
};
dd = function() {
  return $
};
pd = function(e, t) {
  var n = $;
  try {
    return $ = e, t()
  } finally {
    $ = n
  }
};
Is = function(e, t, n) {
  switch (t) {
    case "input":
      if (xs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;)
          n = n.parentNode;
        for (n = n.querySelectorAll(
                 "input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0;
             t < n.length;
             t++) {
          var o = n[t];
          if (o !== e && o.form === e.form) {
            var r = Si(o);
            if (!r)
              throw Error(N(90));
            Bc(o), xs(o, r)
          }
        }
      }
      break;
    case "textarea":
      Hc(e, n);
      break;
    case "select":
      t = n.value, t != null && $n(e, !!n.multiple, t, !1)
  }
};
Zc = oa;
qc = wn;
var rv = {usingClientEntryPoint : !1, Events : [ qo, Fn, Si, Xc, Jc, oa ]},
    mo = {
      findFiberByHostInstance : dn,
      bundleType : 0,
      version : "18.2.0",
      rendererPackageName : "react-dom"
    },
    iv = {
      bundleType : mo.bundleType,
      version : mo.version,
      rendererPackageName : mo.rendererPackageName,
      rendererConfig : mo.rendererConfig,
      overrideHookState : null,
      overrideHookStateDeletePath : null,
      overrideHookStateRenamePath : null,
      overrideProps : null,
      overridePropsDeletePath : null,
      overridePropsRenamePath : null,
      setErrorHandler : null,
      setSuspenseHandler : null,
      scheduleUpdate : null,
      currentDispatcherRef : At.ReactCurrentDispatcher,
      findHostInstanceByFiber : function(e) {
        return e = nd(e), e === null ? null : e.stateNode
      },
      findFiberByHostInstance : mo.findFiberByHostInstance || nv,
      findHostInstancesForRefresh : null,
      scheduleRefresh : null,
      scheduleRoot : null,
      setRefreshHandler : null,
      getCurrentFiber : null,
      reconcilerVersion : "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber)
    try {
      vi = Or.inject(iv), kt = Or
    } catch {
    }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rv;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ca(t))
    throw Error(N(200));
  return tv(e, t, null, n)
};
$e.createRoot = function(e, t) {
  if (!ca(e))
    throw Error(N(299));
  var n = !1, o = "", r = Fp;
  return t != null &&
             (t.unstable_strictMode === !0 && (n = !0),
              t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
              t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
         t = la(e, 1, !1, null, null, n, !1, o, r), e[jt] = t.current,
         zo(e.nodeType === 8 ? e.parentNode : e), new ua(t)
};
$e.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
        ? Error(N(188))
        : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = nd(t), e = e === null ? null : e.stateNode, e
};
$e.flushSync = function(e) {
  return wn(e)
};
$e.hydrate = function(e, t, n) {
  if (!Li(t))
    throw Error(N(200));
  return Ti(null, e, t, !0, n)
};
$e.hydrateRoot = function(e, t, n) {
  if (!ca(e))
    throw Error(N(405));
  var o = n != null && n.hydratedSources || null, r = !1, i = "", s = Fp;
  if (n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
           n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
           n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      t = jp(t, null, e, 1, n ?? null, r, !1, i, s),
      e[jt] = t.current,
      zo(e),
      o)
    for (e = 0; e < o.length; e++)
      n = o[e], r = n._getVersion, r = r(n._source),
      t.mutableSourceEagerHydrationData == null
          ? t.mutableSourceEagerHydrationData = [ n, r ]
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new bi(t)
};
$e.render = function(e, t, n) {
  if (!Li(t))
    throw Error(N(200));
  return Ti(null, e, t, !1, n)
};
$e.unmountComponentAtNode = function(e) {
  if (!Li(e))
    throw Error(N(40));
  return e._reactRootContainer ? (wn(function() {
                                    Ti(null, null, e, !1, function() {
                                      e._reactRootContainer = null, e[jt] = null
                                    })
                                  }),
                                  !0)
                               : !1
};
$e.unstable_batchedUpdates = oa;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
  if (!Li(n))
    throw Error(N(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(N(38));
  return Ti(e, t, n, !1, o)
};
$e.version = "18.2.0-next-9e3b772b8-20220608";
function Dp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)
    } catch (e) {
      console.error(e)
    }
}
Dp(), jc.exports = $e;
var sv = jc.exports, rc = sv;
ys.createRoot = rc.createRoot, ys.hydrateRoot = rc.hydrateRoot;
const da = ae.createInstance(), dl = "en";
if (!(dl in Gn))
  throw new Error(`'${dl}' language is not supported`);
da.init({
  debug : !1,
  resources : Gn,
  lng : dl,
  fallbackLng : "en",
  supportedLngs : Object.keys(Gn)
});
const ee = da.getFixedT(null, "core"), lv = e => da.getFixedT(null, "core", e);
var L =
        (e =>
             (e.ROOT = "ROOT",
              e.VERSION = "VERSION",
              e.ENVIRONMENT = "ENVIRONMENT",
              e.OP_SYSTEM = "OP_SYSTEM",
              e.DISTRIBUTION = "DISTRIBUTION",
              e.FRAMEWORK = "FRAMEWORK",
              e))(L || {}),
    pa = (e => (e.ROOT = "ROOT", e))(pa || {}),
    Ut =
        (e =>
             (e.v_2022_3_1 = "v_2022_3_1",
              e.v_2023_3_0 = "v_2023_3_0",
              e.v_2024_0_0 = "v_2024_0_0",
              e.NIGHTLY = "NIGHTLY",
              e))(Ut || {}),
    tr = (e => (e.DEV_TOOLS = "DEV_TOOLS", e.RUNTIME = "RUNTIME", e))(tr || {}),
    Ye =
        (e => (e.WINDOWS = "WINDOWS", e.MACOS = "MACOS", e.LINUX = "LINUX", e))(
            Ye || {});
const av = {
  title : "Windows"
},
      uv = {
        title : "macOS"
      },
      cv = {
        title : "Linux"
      };
var U =
        (e =>
             (e.PIP = "PIP",
              e.ARCHIVE = "ARCHIVE",
              e.GITHUB = "GITHUB",
              e.GITEE = "GITEE",
              e.DOCKER = "DOCKER",
              e.APT = "APT",
              e.YUM = "YUM",
              e.CONDA = "CONDA",
              e.BREW = "BREW",
              e.VCPKG = "VCPKG",
              e.CONAN = "CONAN",
              e.NPM = "NPM",
              e))(U || {}),
    Ue =
        (e =>
             (e.CAFFE = "CAFFE",
              e.PYTORCH = "PYTORCH",
              e.TENSORFLOW_1 = "TENSORFLOW_1",
              e.TENSORFLOW_2 = "TENSORFLOW_2",
              e.ONNX = "ONNX",
              e.KALDI = "KALDI",
              e.MXNET = "MXNET",
              e))(Ue || {});
class ce {
  constructor(t, n = []) {
    Ee(this, "level");
    Ee(this, "key");
    Ee(this, "metadata");
    Ee(this, "children", []);
    Ee(this, "isDefault", !1);
    Ee(this, "checked", !1);
    Ee(this, "childrenSelector");
    this.level = t.level, this.key = t.key, this.metadata = t.metadata,
    this.children = n, this.childrenSelector = t.childrenSelector
  }
  default() {
    return this.isDefault = !0, this.checked = !0, this
  }
  toOption() {
    return {
      level: this.level, key: this.key, metadata: this.metadata,
          checked: this.checked, hasFootnote: !1
    }
  }
}
const
    To = lv("distributions.common"),
    St = {
      UBUNTU_18 : To("requirements.ubuntu18"),
      UBUNTU_20 : To("requirements.ubuntu20"),
      UBUNTU_22 : To("requirements.ubuntu22")
    },
    Ap = {
      text : `* ${To("requirements.armPluginFootnote")}`,
      learnMoreLink :
          "https://docs.openvino.ai/2022.3/openvino_docs_OV_UG_supported_plugins_ARM_CPU.html"
    };
class Ze extends ce {
  constructor(n, o = []) {
    super(n, o);
    Ee(this, "footnoteLevel", null)
  }
  toOption() {
    return {
      ...super.toOption(), key: this.key, data: this.data
    }
  }
  addFootnote(n) {
    return this.footnoteLevel = n, this
  }
  includesNPUPlugin() {
    const n = To("includesNPUPlugin");
    return this.metadata.subtitle
               ? this.metadata.subtitle = [ n, this.metadata.subtitle ].join(
                     `
`)
               : this.metadata.subtitle = n,
                 this
  }
}
class fa extends Ze {
  constructor(t) {
    super({level : L.DISTRIBUTION, key : U.APT, metadata : {title : "APT"}}),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: gv
    }
  }
  cApiOnly() {
    return this.metadata.subtitle = ee("distributions.CAPIOnly"), this
  }
}
const pl = "GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB",
      ic = `https://apt.repos.intel.com/intel-gpg-keys/${pl}`, sc = {
        [St.UBUNTU_18] : 18,
        [St.UBUNTU_20] : 20,
        [St.UBUNTU_22] : 22
      },
      dv = {
        alias : {22 : "jammy", 20 : "focal", 18 : "bionic"},
        numberName : {22 : "ubuntu22", 20 : "ubuntu20", 18 : "ubuntu18"}
      },
      pv = new Set([ Ut.v_2022_3_1 ]), fv = (e, t) => {
        const n = pv.has(e.key) ? "alias" : "numberName";
        return dv[n][t]
      }, hv = (e, t) => {
        const n = fv(e, t);
        return `echo "deb https://apt.repos.intel.com/openvino/${
            e.metadata.aptYear} ${
            n} main" | sudo tee /etc/apt/sources.list.d/intel-openvino-${
            e.metadata.aptYear}.list`
      }, gv = {
        keyFilename : pl,
        keyHref : ic,
        downloadKeyCommand : `wget ${ic}`,
        addKeyCommand : `sudo apt-key add ${pl}`,
        getAddRepositoryCommands : (e, t) =>
            t.map(n => ({ubuntuVersionNumber : sc[n], command : hv(e, sc[n])})),
        updatePackagesCommand : "sudo apt update",
        verifyAptCacheCommand : "apt-cache search openvino",
        getInstallCommand : e =>
            `sudo apt install openvino-${e.metadata.aptVersion}`
      };
class qe extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.ARCHIVE,
      metadata : {title : ee("distributions.openVINOArchives")}
    }),
        this.data = t
  }
}
class Up extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.BREW,
      metadata : {title : "Homebrew"}
    }),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: mv
    }
  }
}
const mv = {
  install : "brew install openvino"
};
class io extends Ze {
  constructor(t) {
    super(
        {level : L.DISTRIBUTION, key : U.CONAN, metadata : {title : "Conan"}}),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: yv
    }
  }
}
const lc="conanfile.txt",ac="conan_toolchain.cmake",vv=e=>`[requires]
openvino/${e.metadata.conanVersion}
[generators]
CMakeDeps
CMakeToolchain
[layout]
cmake_layout`,yv={conanTXTContent:vv,txtFilename:lc,cmakeFilename:ac,install:`conan install ${lc} --build=missing`,compile:`cmake -DCMAKE_TOOLCHAIN_FILE=<path to ${ac}> -DCMAKE_BUILD_TYPE=Release -S <path to CMakeLists.txt of your project> -B <build dir>
cmake --build <build dir> --parallel`};
class so extends Ze {
  constructor(t) {
    super(
        {level : L.DISTRIBUTION, key : U.CONDA, metadata : {title : "Conda"}}),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: kv
    }
  }
}
const kv = {
  createEnv : "conda create --name py310 python=3.10",
  activateEnv : "conda activate py310",
  update : "conda update --all",
  getInstall : ({metadata : e}) =>
      `conda install -c conda-forge openvino=${e.condaVersion}`
};
class On extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.DOCKER,
      metadata : {title : "Docker"}
    }),
        this.data = t
  }
}
class Ne extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.GITEE,
      metadata : {title : "Gitee", subtitle : ee("distributions.source")}
    }),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: wv, links: Sv
    }
  }
}
const wv = {
  getCloneCommand(e) {
    return `git clone -b ${
        e.metadata
            .giteeVersion} https://gitee.com/openvinotoolkit-prc/openvino.git`
  }
},
      Sv = {
        getBuildInstructionsLink : e =>
            `https://github.com/openvinotoolkit/openvino/blob/${
                e.metadata.giteeVersion}/docs/dev/build.md`,
        getRepositoryLink : e =>
            `https://gitee.com/openvinotoolkit-prc/openvino/tree/${
                e.metadata.giteeVersion}`
      };
class xe extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.GITHUB,
      metadata : {title : "GitHub", subtitle : ee("distributions.source")}
    }),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: _v, links: Ov
    }
  }
}
const _v = {
  getCloneCommand(e) {
    return `git clone -b ${
        e.metadata
            .githubVersion} https://github.com/openvinotoolkit/openvino.git`
  }
},
      Ov = {
        getBuildInstructionsLink : e =>
            `https://github.com/openvinotoolkit/openvino/blob/${
                e.metadata.githubVersion}/docs/dev/build.md`,
        getRepositoryLink : e =>
            `https://github.com/openvinotoolkit/openvino/tree/${
                e.metadata.githubVersion}`
      };
class ha extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.NPM,
      metadata : {title : "npm", subtitle : ee("distributions.jsAPIOnly")}
    }),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: Nv
    }
  }
}
const
    Nv = {
      getInstall : ({metadata : e}) =>
          `npm install openvino-node@${e.npmVersion}`
    },
    xv =
        (e, t) => {
          e.forEach(
              n => {
                  n.key === Ue.TENSORFLOW_1&& n.checked&& t ===
                              Ue.TENSORFLOW_2 ||
                          n.key === Ue.TENSORFLOW_2&& n.checked&& t ===
                              Ue.TENSORFLOW_1
                      ? n.checked = !1
                      : t === n.key && (n.checked = !n.checked)})
        },
    Pv =
        (e, t) => {
          e.forEach(n => {
            n.checked = n.key === t,
            n.key === U.PIP && n.checked &&
                n.children.forEach(o => o.checked = o.isDefault)
          })
        },
    Ev = () =>
        [new ce({
           level : L.FRAMEWORK,
           key : Ue.CAFFE,
           metadata : {title : "Caffe", pipKey : "caffe"}
         }),
         new ce({
           level : L.FRAMEWORK,
           key : Ue.KALDI,
           metadata : {title : "Kaldi", pipKey : "kaldi"}
         }),
         new ce({
           level : L.FRAMEWORK,
           key : Ue.MXNET,
           metadata : {title : "Apache MXNet", pipKey : "mxnet"}
         }),
         new ce({
           level : L.FRAMEWORK,
           key : Ue.ONNX,
           metadata :
               {title : "Open Neural Network Exchange (ONNX)", pipKey : "ONNX"}
         }),
         new ce({
           level : L.FRAMEWORK,
           key : Ue.PYTORCH,
           metadata : {title : "PyTorch", pipKey : "pytorch"}
         }),
         new ce({
           level : L.FRAMEWORK,
           key : Ue.TENSORFLOW_1,
           metadata : {title : "TensorFlow 1.x", pipKey : "tensorflow"}
         }),
         new ce({
           level : L.FRAMEWORK,
           key : Ue.TENSORFLOW_2,
           metadata : {title : "TensorFlow 2.x", pipKey : "tensorflow2"}
         })];
class ye extends Ze {
  constructor(t, {hasFrameworks : n, pythonAPI: o} = {}) {
    super(
        {
          level : L.DISTRIBUTION,
          key : U.PIP,
          metadata : {
            title : "PIP",
            subtitle : o ? ee("distributions.pythonAPIOnly") : void 0
          },
          childrenSelector : xv
        },
        n ? Ev() : []),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: Tv,
          frameworks:
              this.children.filter(({checked : t}) => t).map(t => t.toOption())
    }
  }
}
function Mp(e) {
  return e.key === Ut.NIGHTLY ? "openvino_nightly_env" : "openvino_env"
}
function Cv(e, t) {
  const n = Mp(t);
  return e.key === Ye.WINDOWS ? `python -m venv ${n}` : `python3 -m venv ${n}`
}
function bv(e, t) {
  const n = Mp(t);
  return e.key === Ye.WINDOWS ? `${n}\\Scripts\\activate`
                              : `source ${n}/bin/activate`
}
function Lv({environment : e, os : t, version : n, distribution : o}) {
  const r = o.data.frameworks.map(a => a.metadata.pipKey),
        i = r.length ? `[${r.join(",")}]` : "";
  if (n.key === Ut.NIGHTLY)
    return "pip install --upgrade openvino-nightly";
  let l = `${
      (e == null ? void 0 : e.key) === tr.DEV_TOOLS
          ? "openvino-dev"
          : "openvino"}${i}==${n.metadata.pipVersion}`;
  return t.key === Ye.MACOS && (l = `'${l}'`), `pip install ${l}`
}
const Tv = {
  getCreateVenvCommand : Cv,
  getActivateVenvCommand : bv,
  upgradeCommand : "python -m pip install --upgrade pip",
  getInstallCommand : Lv
};
class ga extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.VCPKG,
      metadata : {title : "vcpkg", subtitle : ee("distributions.source")}
    }),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: Iv
    }
  }
}
const Iv = {
  install : "vcpkg install openvino"
};
class ma extends Ze {
  constructor(t) {
    super({
      level : L.DISTRIBUTION,
      key : U.YUM,
      metadata : {title : "YUM", subtitle : ee("distributions.CAPIOnly")}
    }),
        this._data = t
  }
  get data() {
    return {
      ...this._data, commands: Rv
    }
  }
}
const uc="/etc/yum.repos.d",Rv={directory:uc,getCreateRepoCommand:e=>`tee > /tmp/openvino-${e.metadata.yumYear}.repo << EOF
[OpenVINO]
name=Intel(R) Distribution of OpenVINO ${e.metadata.yumYear}
baseurl=https://yum.repos.intel.com/openvino/${e.metadata.yumYear}
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://yum.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB
EOF`,getMoveRepoFileCommand:e=>`sudo mv /tmp/openvino-${e.metadata.yumYear}.repo ${uc}`,verifyRepoCommand:"yum repolist | grep -i openvino",getInstallCommand:e=>`sudo yum install openvino-${e.metadata.yumVersion}`},jv={title:ee("versions.titles.nightlyBuild"),compactTitle:ee("versions.titles.nightlyBuild"),pipVersion:"",githubVersion:"master",giteeVersion:"master",systemRequirementsLink:"https://docs.openvino.ai/nightly/system_requirements.html"};
class Fv extends ce {
  constructor(t) {
    super({level : L.VERSION, key : Ut.NIGHTLY, metadata : jv}, t)
  }
}
const Dv = {
  title : "2024.0",
  subtitle : ee("versions.titles.recommended"),
  compactTitle : "2024.0",
  compactSubtitle : ee("versions.titles.recommended"),
  pipVersion : "2024.0.0",
  githubVersion : "2024.0.0",
  giteeVersion : "2024.0.0",
  aptYear : 2024,
  aptVersion : "2024.0.0",
  yumYear : 2024,
  yumVersion : "2024.0.0",
  condaVersion : "2024.0.0",
  conanVersion : "2024.0.0",
  npmVersion : "2024.0.0",
  systemRequirementsLink :
      "https://docs.openvino.ai/2024/about-openvino/system-requirements.html"
};
class Av extends ce {
  constructor(t) {
    super({level : L.VERSION, key : Ut.v_2024_0_0, metadata : Dv}, t)
  }
}
const Uv = {
  title : `2023.3 ${ee("versions.titles.LTS")}`,
  subtitle : "",
  compactTitle : `2023.3 ${ee("versions.titles.LTS")}`,
  compactSubtitle : "",
  pipVersion : "2023.3.0",
  githubVersion : "2023.3.0",
  giteeVersion : "2023.3.0",
  aptYear : 2023,
  aptVersion : "2023.3.0",
  yumYear : 2023,
  yumVersion : "2023.3.0",
  condaVersion : "2023.3.0",
  conanVersion : "2023.3.0",
  systemRequirementsLink :
      "https://docs.openvino.ai/2023.3/system_requirements.html"
};
class Mv extends ce {
  constructor(t) {
    super({level : L.VERSION, key : Ut.v_2023_3_0, metadata : Uv}, t)
  }
}
const zv = {
  title : `2022.3.1 ${ee("versions.titles.LTS")}`,
  subtitle : ee("versions.titles.hddlSupport"),
  compactTitle : `2022.3.1 ${ee("versions.titles.LTS")}`,
  compactSubtitle : ee("versions.titles.hddlSupport"),
  pipVersion : "2022.3.1",
  githubVersion : "2022.3.1",
  giteeVersion : "2022.3.1",
  aptYear : 2022,
  aptVersion : "2022.3.1",
  yumYear : 2022,
  yumVersion : "2022.3.1",
  systemRequirementsLink : "https://docs.openvino.ai/systemrequirements"
};
class zp extends ce {
  constructor(t) {
    super({level : L.VERSION, key : Ut.v_2022_3_1, metadata : zv}, t)
  }
}
class va extends ce {
  constructor(t, n, o) {
    super(
        {level : L.OP_SYSTEM, key : t, metadata : n, childrenSelector : Pv}, o),
        this._setDefaultOS()
  }
  _setDefaultOS() {
    const t = this._detectOS() || Ye.WINDOWS;
    this.key === t && this.default()
  }
  _detectOS() {
    const {userAgent : t} = navigator, n = {
      windows : /(Windows|Win)/g,
      macOS : /(Macintosh|Mac)/g,
      linux : /(Linux|X11)/g
    };
    return n.windows.test(t) ? Ye.WINDOWS
        : n.macOS.test(t)    ? Ye.MACOS
        : n.linux.test(t)    ? Ye.LINUX
                             : null
  }
}
class nr extends va {
  constructor(t) {
    super(Ye.WINDOWS, av, t)
  }
}
class or extends va {
  constructor(t) {
    super(Ye.MACOS, uv, t)
  }
}
class rr extends va {
  constructor(t) {
    super(Ye.LINUX, cv, t)
  }
}
const Vv = new rr([
  new qe({
    linksSet : {
      installation :
          "https://docs.openvino.ai/nightly/openvino_docs_install_guides_installing_openvino_from_archive_linux.html",
      getStarted : "https://docs.openvino.ai/nightly/get_started.html",
      notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
      troubleshooting :
          "https://docs.openvino.ai/nightly/openvino_docs_get_started_guide_troubleshooting.html"
    },
    downloadLink :
        "https://storage.openvinotoolkit.org/repositories/openvino/packages/nightly/latest"
  }).default(),
  new ye(
      {
        linksSet : {
          installation :
              "https://docs.openvino.ai/nightly/openvino_docs_install_guides_installing_openvino_pip.html",
          getStarted : "https://docs.openvino.ai/nightly/get_started.html",
          notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
          troubleshooting :
              "https://docs.openvino.ai/nightly/openvino_docs_get_started_guide_troubleshooting.html"
        },
        frameworks : []
      },
      {pythonAPI : !0})
      .includesNPUPlugin(),
  new xe({}),
  new Ne({})
]),
      $v = new or([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/nightly/openvino_docs_install_guides_installing_openvino_from_archive_macos.html",
            getStarted : "https://docs.openvino.ai/nightly/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/nightly/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/nightly/latest"
        }).default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/nightly/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted :
                    "https://docs.openvino.ai/nightly/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/nightly/openvino_docs_get_started_guide_troubleshooting.html"
              },
              frameworks : []
            },
            {pythonAPI : !0}),
        new xe({}),
        new Ne({})
      ]),
      Bv = new nr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/nightly/openvino_docs_install_guides_installing_openvino_from_archive_windows.html",
            getStarted : "https://docs.openvino.ai/nightly/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/nightly/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/nightly/latest"
        }).default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/nightly/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted :
                    "https://docs.openvino.ai/nightly/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/nightly/openvino_docs_get_started_guide_troubleshooting.html"
              },
              frameworks : []
            },
            {pythonAPI : !0})
            .includesNPUPlugin(),
        new xe({}),
        new Ne({})
      ]),
      Vp = new Fv([ Bv, $v, Vv ]);
class Kv extends ce {
  constructor(t) {
    super(
        {
          level : L.ENVIRONMENT,
          key : tr.RUNTIME,
          metadata : {
            title : ee("environment.runtime.title"),
            subtitle : ee("environment.runtime.subtitle")
          }
        },
        t)
  }
}
class Hv extends ce {
  constructor(t) {
    super(
        {
          level : L.ENVIRONMENT,
          key : tr.DEV_TOOLS,
          metadata : {
            title : ee("environment.devTools.title"),
            subtitle : ee("environment.devTools.subtitle")
          }
        },
        t)
  }
}
const Wv = new rr([
  new ye(
      {
        linksSet : {
          installation :
              "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_install_dev_tools.html",
          getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
          notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
          troubleshooting :
              "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
        },
        frameworks : []
      },
      {hasFrameworks : !0})
      .default(),
  new xe({}),
  new Ne({}),
  new On({
    linksSet : {
      installation :
          "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_docker_linux.html",
      getStarted :
          "https://docs.openvino.ai/2022.3/openvino_docs_get_started_get_started_demos.html",
      notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
      troubleshooting :
          "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
    },
    downloadLink :
        "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_docker_linux.html"
  })
]),
      ds = {
        note : Ap
      },
      Yv = new or([
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_install_dev_tools.html",
                getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
              },
              systemRequirements : ds,
              frameworks : []
            },
            {hasFrameworks : !0})
            .addFootnote(L.OP_SYSTEM)
            .default(),
        new xe({systemRequirements : ds}).addFootnote(L.OP_SYSTEM),
        new Ne({systemRequirements : ds}).addFootnote(L.OP_SYSTEM)
      ]),
      Gv = new nr([
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_install_dev_tools.html",
                getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
              },
              frameworks : []
            },
            {hasFrameworks : !0})
            .default(),
        new xe({}),
        new Ne({})
      ]),
      Qv = new Hv([ Gv, Yv, Wv ]),
      Xv = new rr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_from_archive_linux.html",
            getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2022.3.1/linux"
        }).default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
              },
              frameworks : []
            },
            {pythonAPI : !0}),
        new fa({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_apt.html",
            getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          },
          os : [ St.UBUNTU_18, St.UBUNTU_20 ]
        }),
        new ma({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_yum.html",
            getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          }
        }),
        new xe({}),
        new Ne({}),
        new On({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_docker_linux.html",
            getStarted :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_get_started_demos.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          },
          downloadLink :
              "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_docker_linux.html"
        })
      ]),
      Nr = {
        note : Ap
      },
      Jv = new or([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_from_archive_macos.html",
            getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2022.3.1/macos",
          systemRequirements : Nr
        })
            .addFootnote(L.OP_SYSTEM)
            .default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
              },
              systemRequirements : Nr,
              frameworks : []
            },
            {pythonAPI : !0})
            .addFootnote(L.OP_SYSTEM),
        new xe({systemRequirements : Nr}).addFootnote(L.OP_SYSTEM),
        new Ne({systemRequirements : Nr}).addFootnote(L.OP_SYSTEM)
      ]),
      Zv = new nr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_from_archive_windows.html",
            getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2022.3.1/windows"
        }).default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted : "https://docs.openvino.ai/2022.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
              },
              frameworks : []
            },
            {pythonAPI : !0}),
        new xe({}),
        new Ne({}),
        new On({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_docker_windows.html",
            getStarted :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_get_started_demos.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2022.3/openvino_docs_get_started_guide_troubleshooting_steps.html"
          },
          downloadLink :
              "https://docs.openvino.ai/2022.3/openvino_docs_install_guides_installing_openvino_docker_windows.html"
        })
      ]),
      qv = new Kv([ Zv, Jv, Xv ]), $p = new zp([ Qv.default(), qv ]),
      ey = new rr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_from_archive_linux.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2023.3/linux"
        })
            .includesNPUPlugin()
            .default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
              },
              frameworks : []
            },
            {pythonAPI : !0}),
        new fa({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_apt.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          },
          os : [ St.UBUNTU_18, St.UBUNTU_20, St.UBUNTU_22 ]
        }),
        new ma({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_yum.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        }),
        new xe({}),
        new Ne({}),
        new On({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_docker.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_docker.html"
        }),
        new so({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_conda.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        }),
        new io({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_conan.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        })
      ]),
      ty = new or([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_from_archive_macos.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2023.3/macos"
        }).default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
              },
              frameworks : []
            },
            {pythonAPI : !0}),
        new xe({}),
        new Ne({}),
        new so({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_conda.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        }),
        new io({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_conan.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        })
      ]),
      ny = new nr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_from_archive_windows.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2023.3/windows"
        })
            .includesNPUPlugin()
            .default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_pip.html",
                getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
              },
              frameworks : []
            },
            {pythonAPI : !0}),
        new xe({}),
        new Ne({}),
        new On({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_docker.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          },
          downloadLink :
              "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_docker.html"
        }),
        new so({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_conda.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        }),
        new io({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2023.3/openvino_docs_install_guides_installing_openvino_conan.html",
            getStarted : "https://docs.openvino.ai/2023.3/get_started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2023.3/openvino_docs_get_started_guide_troubleshooting.html"
          }
        })
      ]),
      Bp = new Mv([ ny, ty, ey ]),
      oy = new rr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-archive-linux.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2024.0/linux"
        })
            .includesNPUPlugin()
            .default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-pip.html",
                getStarted : "https://docs.openvino.ai/2024/get-started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
              },
              frameworks : []
            },
            {pythonAPI : !0})
            .includesNPUPlugin(),
        new fa({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-apt.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          },
          os : [ St.UBUNTU_20, St.UBUNTU_22 ]
        }),
        new ma({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-yum.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new xe({}),
        new Ne({}),
        new On({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-docker-linux.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          },
          downloadLink :
              "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-docker-linux.html"
        }),
        new so({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-conda.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new Up({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-brew.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new ga({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-vcpkg.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new io({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-conan.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new ha({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-npm.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        })
      ]),
      ry =
          new or(
              [
                new qe({
                  linksSet : {
                    installation :
                        "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-archive-macos.html",
                    getStarted :
                        "https://docs.openvino.ai/2024/get-started.html",
                    notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
                    troubleshooting :
                        "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                  },
                  downloadLink :
                      "https://storage.openvinotoolkit.org/repositories/openvino/packages/2024.0/macos"
                }).default(),
                new ye(
                    {
                      linksSet :
                          {
                            installation :
                                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-pip.html",
                            getStarted :
                                "https://docs.openvino.ai/2024/get-started.html",
                            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
                            troubleshooting : "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                          },
                      frameworks : []
                    },
                    {pythonAPI : !0}),
                new xe({}),
                new Ne({}),
                new so(
                    {
                      linksSet :
                          {
                            installation :
                                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-conda.html",
                            getStarted :
                                "https://docs.openvino.ai/2024/get-started.html",
                            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
                            troubleshooting : "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                          }
                    }),
                new Up(
                    {
                      linksSet :
                          {
                            installation : "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-brew.html",
                            getStarted :
                                "https://docs.openvino.ai/2024/get-started.html",
                            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
                            troubleshooting : "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                          }
                    }),
                new ga(
                    {
                      linksSet : {
                        installation :
                            "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-vcpkg.html",
                        getStarted :
                            "https://docs.openvino.ai/2024/get-started.html",
                        notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
                        troubleshooting : "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                      }
                    }),
                new io(
                    {
                      linksSet : {
                        installation :
                            "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-conan.html",
                        getStarted :
                            "https://docs.openvino.ai/2024/get-started.html",
                        notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
                        troubleshooting : "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                      }
                    }),
                new ha(
                    {
                      linksSet : {
                        installation :
                            "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-npm.html",
                        getStarted :
                            "https://docs.openvino.ai/2024/get-started.html",
                        notebooks :
                            "https://github.com/openvinotoolkit/openvino_notebooks",
                        troubleshooting : "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
                      }
                    })
              ]),
      iy = new nr([
        new qe({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-archive-windows.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          },
          downloadLink :
              "https://storage.openvinotoolkit.org/repositories/openvino/packages/2024.0/windows"
        })
            .includesNPUPlugin()
            .default(),
        new ye(
            {
              linksSet : {
                installation :
                    "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-pip.html",
                getStarted : "https://docs.openvino.ai/2024/get-started.html",
                notebooks :
                    "https://github.com/openvinotoolkit/openvino_notebooks",
                troubleshooting :
                    "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
              },
              frameworks : []
            },
            {pythonAPI : !0})
            .includesNPUPlugin(),
        new xe({}),
        new Ne({}),
        new On({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-docker-linux.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          },
          downloadLink :
              "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-docker-linux.html"
        }),
        new so({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-conda.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new ga({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-vcpkg.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new io({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-conan.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        }),
        new ha({
          linksSet : {
            installation :
                "https://docs.openvino.ai/2024/get-started/install-openvino/install-openvino-npm.html",
            getStarted : "https://docs.openvino.ai/2024/get-started.html",
            notebooks : "https://github.com/openvinotoolkit/openvino_notebooks",
            troubleshooting :
                "https://docs.openvino.ai/2024/get-started/troubleshooting-install-config.html"
          }
        })
      ]),
      Kp = new Av([ iy, ry, oy ]),
      sy = new ce(
               {level : L.ROOT, key : pa.ROOT, metadata : {title : "ROOT"}},
               [ Kp.default(), Vp, Bp, $p ])
               .default(),
      ly = new ce(
               {level : L.ROOT, key : pa.ROOT, metadata : {title : "ROOT"}},
               [ Kp.default(), Vp, Bp, $p ])
               .default();
function ay(e, t) {
  var r, i;
  if (t.key === U.DOCKER || !t.footnoteLevel)
    return e;
  const n = (r = e[t.footnoteLevel]) == null ? void 0 : r.selected,
        o = (i = e[t.footnoteLevel]) == null ? void 0 : i.nodes;
  return !n || !o ||
             ((Array.isArray(n) ? [...n, ...o ] : [ n ])
                  .forEach(s => s.hasFootnote = !0),
              o.forEach(s => s.checked && (s.hasFootnote = !0))),
         e
}
class Hp {
  constructor() {
    Ee(this, "_root", sy)
  }
  getState() {
    try {
      return this._getState()
    } catch (t) {
      return console.error(t), this._selectDefaults(this._root),
             this._getState()
    }
  }
  _getState() {
    const t = this._root.children, n = this._get_selected(t),
          {environments : o, environment : r, systems : i, system : s} =
              this._processVersion(n),
          l = s.children, a = this._get_selected(l),
          u = this._processDistribution(a), f = {
            [L.VERSION] :
                {nodes : t.map(d => d.toOption()), selected : n.toOption()},
            [L.ENVIRONMENT] : r && o
                ? {nodes : o.map(d => d.toOption()), selected : r.toOption()}
                : null,
            [L.OP_SYSTEM] :
                {nodes : i.map(d => d.toOption()), selected : s.toOption()},
            [L.DISTRIBUTION] :
                {nodes : l.map(d => d.toOption()), selected : a.toOption()},
            [L.FRAMEWORK] : u != null && u.length ? {
              nodes : u.map(d => d.toOption()),
              selected : u.filter(({checked : d}) => d).map(d => d.toOption())
            }
                                                  : null
          };
    return ay(f, a)
  }
  _get_selected(t) {
    t.some(({checked : o}) => o) || this._selectDefaultsForLevel(t[0].level);
    const n = t.find(({checked : o}) => o);
    if (!n)
      throw new Error("Not valid tree");
    return n
  }
  _processVersion(t) {
    if (t instanceof zp) {
      const r = t.children, i = this._get_selected(r), s = i.children,
            l = this._get_selected(s);
      return {
        environments: r, environment: i, systems: s, system: l
      }
    }
    const n = t.children, o = this._get_selected(n);
    return {
      environments: null, environment: null, systems: n, system: o
    }
  }
  _processDistribution(t) {
    return t instanceof ye ? t.children : null
  }
  setState(t) {
    this._setState(t)
  }
  _setState(t, n = this._root) {
    if (!n.children.length)
      return;
    const o = n.children[0].level, r = uy(t[o]);
    n.children.forEach(i => i.checked = r.includes(i.key)),
        n.children.forEach(i => this._setState(t, i))
  }
  select(t, n) {
    return this._select(t, n), this.getState()
  }
  _select(t, n, o = this._root) {
    var r;
    if (((r = o.children[0]) == null ? void 0 : r.level) !== t) {
      o.children.forEach(i => this._select(t, n, i));
      return
    }
    if (o.childrenSelector) {
      o.childrenSelector(o.children, n);
      return
    }
    o.children.forEach(i => i.checked = i.key === n)
  }
  _selectDefaultsForLevel(t, n = this._root) {
    if (n.children.length) {
      if (n.children[0].level !== t) {
        n.children.forEach(o => this._selectDefaultsForLevel(t, o));
        return
      }
      this._selectDefaults(n)
    }
  }
  _selectDefaults(t) {
    t.children.forEach(n => {n.checked = n.isDefault, this._selectDefaults(n)})
  }
}
const Wp = new Hp;
function uy(e) {
  const t = [];
  return Array.isArray(e) ? t.push(...e) : e && t.push(e), t
}
class cy extends Hp {
  constructor() {
    super(...arguments);
    Ee(this, "_root", ly)
  }
}
function Yp(e, {serializeVersion : t} = {
  serializeVersion : !0
}) {
  var r, i;
  const n =
            [
              [ L.VERSION, t ? e.VERSION.selected.key : null ],
              [
                L.ENVIRONMENT,
                (r = e.ENVIRONMENT) == null ? void 0 : r.selected.key
              ],
              [ L.OP_SYSTEM, e.OP_SYSTEM.selected.key ],
              [ L.DISTRIBUTION, e.DISTRIBUTION.selected.key ],
              [
                L.FRAMEWORK,
                (i = e.FRAMEWORK) == null ? void 0
                                          : i.selected.map(s => s.key).join(",")
              ]
            ],
        o = new URLSearchParams;
  for (const [s, l] of n)
    l && o.set(s, l);
  return o
}
function Gp(e) {
  function t(o, r) {
    const i = e.get(o);
    if (!i)
      throw new Error(`Cannot extract value for: ${o}`);
    if (!r[i])
      throw new Error(`Bad node key for: ${o}`);
    return r[i]
  }
  function n(o, r) {
    const i = e.get(o);
    return i ? i.split(",").map(l => {
      if (!l || !r[l])
        throw new Error(`Bad node key for: ${o}`);
      return r[l]
    })
             : null
  }
  try {
    return {
      [L.VERSION]: e.has(L.VERSION) ? t(L.VERSION, Ut) : null,
          [ L.ENVIRONMENT ]: e.has(L.ENVIRONMENT) ? t(L.ENVIRONMENT, tr) : null,
          [ L.OP_SYSTEM ]: t(L.OP_SYSTEM, Ye),
          [ L.DISTRIBUTION ]: t(L.DISTRIBUTION, U),
          [ L.FRAMEWORK ]: n(L.FRAMEWORK, Ue)
    }
  } catch (o) {
    return console.log(`Cannot restore state from url due to error "${o}"`),
           null
  }
}
function dy() {
  const e = window.parent;
  if (!e.location.search)
    return null;
  const t = new URLSearchParams(e.location.search);
  return Gp(t)
}
function py(e, t, n, {serializeVersion : o} = {
  serializeVersion : !0
}) {
  F.useEffect(() => {
    const r = window.parent, i = Yp(t, {serializeVersion : o}).toString(),
          s = new URL(r.location.toString());
    if (!s.search) {
      s.search = i, r.history.replaceState(null, "", s);
      return
    }
    s.search.slice(1) !== i && (s.search = i, r.history.pushState(null, "", s))
  }),
      parent.onpopstate = () => {
        const r = window.parent, i = new URLSearchParams(r.location.search),
              s = Gp(i);
        s && (e.setState(s), n(e.getState()))
      }
}
const ps = function(e) {
  let t, n = !1;
  return function(...o) {
    return n || (t = e(o), n = !0), t
  }
};
function fy(e) {
  var t, n;
  return typeof ((n = (t = e.wap_tms) == null ? void 0 : t.custom) == null ? void 0 : n.trackComponentClick) !=
          "function"
      ? null
      : e.wap_tms.custom.trackComponentClick.bind(e.wap_tms.custom)
}
class hy {
  constructor() {
    Ee(this, "_window");
    Ee(this, "_consoleNotification", {
      notInitialized :
          ps(() => console.log("Adobe analytics is not initialized")),
      notFound : ps(() => console.log("Adobe analytics not found on a page")),
      devMode : ps(() => console.log("Analytics in dev mode"))
    });
    Ee(this, "_send", t => {
      if (!this._window) {
        this._consoleNotification.notInitialized();
        return
      }
      const n = Yp(Wp.getState()).toString(), o = fy(this._window);
      if (!o) {
        this._consoleNotification.notFound();
        return
      }
      try {
        o(t, n)
      } catch (r) {
        console.error(r)
      }
    })
  }
  initialize(t) {
    this._window = t
  }
  install() {
    this._send("install")
  }
  combinationView() {
    this._send("combination-view")
  }
}
const Re = new hy;
F.createContext((e, t) => {Wp.select(e, t)});
function gy() {
  const e = new cy, t = dy();
  t && e.setState(t);
  const n = F.createContext((r, i) => {e.select(r, i)});
  function o() {
    const [r, i] = F.useState(e.getState());
    return py(e, r, i), [ r, (s, l) => i(e.select(s, l)) ]
  }
  return {
    CompactSelectorContext: n, useCompactSelector: o
  }
}
async function my(e) {
  e && (navigator.clipboard ? await navigator.clipboard.writeText(e) : vy(e))
}
function vy(e) {
  const t = yy(e);
  document.body.append(t), t.select(), document.execCommand("copy"), t.remove()
}
function yy(e) {
  const t = document.createElement("textarea");
  t.style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0",
  t.style.margin = "0", t.style.position = "absolute", t.style.left = "-9999px";
  const n = window.pageYOffset || document.documentElement.scrollTop;
  return t.style.top = `${n}px`, t.setAttribute("readonly", ""), t.value = e, t
}
function ky() {
  return T("svg", {
    version : "1.1",
    width : "24",
    height : "24",
    viewBox : "0 0 205 205",
    xmlns : "http://www.w3.org/2000/svg",
    className : "svg-icon",
    children : [
      y("path", {
        fill : "none",
        stroke : "currentColor",
        strokeWidth : "10",
        d : "M 50 145 a 15 15 0 0 1 -15 -15 v -90 a 15 15 0 0 1 15 -15 h 70 a 15 15 0 0 1 15 15 v 5"
      }),
      y("rect", {
        x : "65",
        y : "60",
        width : "100",
        height : "120",
        rx : "15",
        fill : "none",
        stroke : "currentColor",
        strokeWidth : "10"
      })
    ]
  })
}
function wy() {
  return y("svg", {
    version : "1.1",
    width : "24",
    height : "24",
    viewBox : "0 0 200 200",
    xmlns : "http://www.w3.org/2000/svg",
    className : "svg-icon",
    children : y("path", {
      strokeLinejoin : "round",
      strokeLinecap : "round",
      fill : "none",
      stroke : "currentColor",
      strokeWidth : "15",
      d : "M 40 100 L 90 150 L 170 40"
    })
  })
}
function Sy() {
  return T("svg", {
    version : "1.1",
    width : "24",
    height : "24",
    viewBox : "0 0 200 200",
    xmlns : "http://www.w3.org/2000/svg",
    className : "svg-icon",
    children : [
      y("circle", {
        cx : "100",
        cy : "100",
        r : "90",
        fill : "none",
        strokeWidth : "15",
        stroke : "currentColor"
      }),
      y("path", {
        fill : "none",
        stroke : "currentColor",
        strokeWidth : "15",
        strokeLinecap : "round",
        d : "M 65 80 A 35 35 0 1 1 100 115"
      }),
      y("circle", {
        cx : "100",
        cy : "150",
        r : "3",
        fill : "none",
        stroke : "currentColor",
        strokeWidth : "15"
      })
    ]
  })
}
const
    V =
        ({comment : e, command : t, onCopy : n}) => {
          const [o, r] = F.useState(!1);
          return T("div", {
            className : "st-code-snippet",
            "data-cy" : "instructions-step",
            children : [
              e && y(Qp, {children : e}),
              T("div", {
                "data-cy" : "command",
                children : [
                  t &&
                      y("code",
                        {className : "st-code-snippet-content", children : t}),
                  t && y("button", {
                    className : "copy-button",
                    type : "button",
                    "aria-label" : "Copy",
                    "data-cy" : "copy",
                    onClick : async () => {
                        o ||
                        (await my(t),
                         r(!0),
                         setTimeout(() => r(!1), 1500),
                         n == null || n())},
                    children : o ? y(wy, {}) : y(ky, {})
                  })
                ]
              })
            ]
          })
        },
    Qp = ({children : e}) => T(
        "pre", {className : "st-code-snippet-comment", children : [ "# ", e ]}),
    _y = ({comment : e, snippets : t}) => T("div", {
      className : "st-code-snippet-multi-line",
      "data-cy" : "command",
      children :
          [ e && y(Qp, {children : e}), t.map(n => y(V, {...n}, n.command)) ]
    });
function Oy(e) {
  return e.host === "docs.openvino.ai"
}
const fs = {
  link :
      "spark-hyperlink spark-hyperlink-primary spark-hyperlink-standard spark-focus-visible spark-focus-visible-self spark-focus-visible-snap spark-focus-visible-background",
  button :
      "spark-button spark-button-action spark-button-size-m spark-focus-visible spark-focus-visible-self spark-focus-visible-snap",
  buttonContent : "spark-button-content"
},
      _t =
          ({
            href : e,
            children : t,
            type : n = "link",
            testId : o = "link",
            onClick : r
          }) => {
            const i = Oy(new URL(e)) ? "_parent" : "_blank";
            return n === "link"
                ? y("a", {
                    href : e,
                    className : fs.link,
                    target : i,
                    rel : "noreferrer noopener",
                    "data-cy" : o,
                    onClick : () => r == null ? void 0 : r(),
                    children : t
                  })
                : y("span", {
                    className : fs.button,
                    children : y("span", {
                      className : fs.buttonContent,
                      children : y("a", {
                        href : e,
                        target : i,
                        rel : "noreferrer noopener",
                        "data-cy" : o,
                        onClick : () => r == null ? void 0 : r(),
                        children : t
                      })
                    })
                  })
          },
      Xp = ({children : e}) => {
        const {t} = B("translation", {keyPrefix : "selectorForm"});
        return T("div", {
          "data-cy" : "link-set",
          children : [
            T("div", {
              className : "st-distribution-links",
              children : [
                e,
                y(_t, {
                  href : "https://github.com/openvinotoolkit/openvino/releases",
                  testId : "previous-releases-link",
                  children : t("prevReleases")
                })
              ]
            }),
            y("div", {
              className : "nncf-link",
              children : T(z, {
                ns : "translation",
                i18nKey : "selectorForm.nncf",
                children : [
                  "Advanced Optimization tool available separately:",
                  y(_t, {
                    href :
                        "https://docs.openvino.ai/2024/openvino-workflow/model-optimization-guide/compressing-models-during-training.html",
                    testId : "nncf-link",
                    children : "Learn about NNCF"
                  })
                ]
              })
            })
          ]
        })
      }, pt = ({installUrl : e}) => {
        const {t} = B("common", {keyPrefix : "distributionLinks"});
        return y(Xp, {
          children : y(_t, {
            href : e,
            testId : "install-instructions-link",
            children : t("installationInstructions")
          })
        })
      };
const
    Ny = {
      heading : "spark-heading spark-font-200"
    },
    je = ({title : e, accent : t = !1, children : n, testId : o}) => T("div", {
      className : `st-section ${t ? "st-section-accent" : ""}`,
      "data-cy" : o,
      children : [
        y("span", {className : `st-section-title ${Ny.heading}`, children : e}),
        y("div", {
          className : "st-section-content",
          children : F.Children.map(n, r => y(xy, {children : r}))
        })
      ]
    }),
    xy = ({children : e}) =>
        y("div", {className : "st-section-content-row", children : e}),
    Py = ({version : e, distribution : t}) => {
      if (t.data.docsOnly)
        return y(Ey, {distribution : t});
      const {
        t : n
      } = B("translation", {keyPrefix : "distributions.apt"}),
     {t : o} = B("translation", {keyPrefix : "compact.selectorForm.titles"}),
     {commands : r} = t.data, i = {
       comment : T(z, {
         ns : "translation",
         i18nKey : "distributions.apt.steps.addRepository",
         children : [
           y("b", {children : "Step 3:"}),
           " Add the repository via the following command"
         ]
       }),
       snippets : r.getAddRepositoryCommands(e, t.data.os)
                      .map(
                          ({ubuntuVersionNumber : l, command : a}) =>
                              ({comment : `Ubuntu ${l}`, command : a}))
     },
     s = {
       downloadKey : {
         comment : T(z, {
           ns : "translation",
           i18nKey : "distributions.apt.steps.download",
           values : {filename : r.keyFilename},
           children : [
             y("b", {children : "Step 1:"}),
             " Download the ",
             y(_t, {href : r.keyHref, children : r.keyFilename}),
             ". You can also use the following command"
           ]
         }),
         command : r.downloadKeyCommand
       },
       addKey : {
         comment : T(z, {
           t : n,
           i18nKey : "steps.addKey",
           children : [
             y("b", {children : "Step 2:"}),
             " Add this key to the system keyring"
           ]
         }),
         command : r.addKeyCommand
       },
       addRepository : i,
       updatePackages : {
         comment : T(z, {
           t : n,
           i18nKey : "steps.updateList",
           children : [
             y("b", {children : "Step 4:"}),
             " Update the list of packages via the update command"
           ]
         }),
         command : r.updatePackagesCommand
       },
       verifyAptCache : {
         comment : T(z, {
           t : n,
           i18nKey : "steps.verify",
           children : [
             y("b", {children : "Step 5:"}),
             " Verify that the APT repository is properly set up. Run the apt-cache command to see a list of all available OpenVINO packages and components"
           ]
         }),
         command : r.verifyAptCacheCommand
       },
       install : {
         comment : T(z, {
           t : n,
           i18nKey : "steps.install",
           children :
               [ y("b", {children : "Step 6:"}), " Install OpenVINO Runtime" ]
         }),
         command : r.getInstallCommand(e),
         onCopy : () => Re.install()
       }
     };
      return T(je, {
        title : o("install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {...s.downloadKey}),
          y(V, {...s.addKey}),
          y(_y, {...s.addRepository}),
          y(V, {...s.updatePackages}),
          y(V, {...s.verifyAptCache}),
          y(V, {...s.install}),
          y(pt, {installUrl : t.data.linksSet.installation})
        ]
      })
    }, Ey = ({distribution : e}) => {
      const {t} = B("translation", {keyPrefix : "compact"}),
            n = T(z, {
              t,
              i18nKey : "distributions.aptYum.followInstructions",
              children : [
                "Follow the",
                y(_t, {
                  href : e.data.linksSet.installation,
                  testId : "install-instructions-button",
                  onClick : () => Re.install(),
                  children : "Installation instructions"
                })
              ]
            });
      return T(je, {
        title : t("selectorForm.titles.install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {comment : n}),
          y(pt, {installUrl : e.data.linksSet.installation})
        ]
      })
    }, Cy = ({distribution : e}) => {
      const {t} = B("translation", {keyPrefix : "distributions.brew.steps"}),
            {t : n} =
                B("translation", {keyPrefix : "compact.selectorForm.titles"}),
            {linksSet : o, commands : r} = e.data, i = {
              install : {
                comment : y(z, {
                  t,
                  i18nKey : "install",
                  children : "Download and install the package"
                }),
                command : r.install,
                onCopy : () => Re.install()
              }
            };
      return T(je, {
        title : n("install"),
        accent : !0,
        testId : "instructions",
        children :
            [ y(V, {...i.install}), y(pt, {installUrl : o.installation}) ]
      })
    }, by = ({version : e, distribution : t}) => {
      const {
        t : n
      } = B("translation", {keyPrefix : "distributions.conan.steps"}),
     {t : o} = B("translation", {keyPrefix : "compact.selectorForm.titles"}),
     {commands : r} = t.data, {txtFilename : i, cmakeFilename : s} = r, l = {
       createConanFile : {
         comment : T(z, {
           t : n,
           i18nKey : "createConanFile",
           values : {txtFilename : i},
           children : [
             y("b", {children : "Step 1:"}),
             " Create a ",
             y("b", {children : i}),
             " file for your OpenVINO project and add “openvino” dependency in there"
           ]
         }),
         command : r.conanTXTContent(e)
       },
       install : {
         comment : T(z, {
           t : n,
           i18nKey : "install",
           values : {cmakeFilename : s},
           children : [
             y("b", {children : "Step 2:"}),
             " Run the command below to create ",
             y("b", {children : s}),
             " file, which will be used to compile your project with OpenVINO"
           ]
         }),
         command : r.install,
         onCopy : () => Re.install()
       },
       compile : {
         comment : T(z, {
           t : n,
           i18nKey : "compile",
           children : [
             y("b", {children : "Step 3:"}),
             " Configure and compile your project with OpenVINO"
           ]
         }),
         command : r.compile
       }
     };
      return T(je, {
        title : o("install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {...l.createConanFile}),
          y(V, {...l.install}),
          y(V, {...l.compile}),
          y(pt, {installUrl : t.data.linksSet.installation})
        ]
      })
    }, Ly = ({version : e, distribution : t}) => {
      const {
        t : n
      } = B("translation", {keyPrefix : "distributions.conda.steps"}),
     {t : o} = B("translation", {keyPrefix : "compact.selectorForm.titles"}),
     {linksSet : r, commands : i} = t.data, s = {
       createEnv : {
         comment : T(z, {
           t : n,
           i18nKey : "createEnv",
           children : [
             y("b", {children : "Step 1:"}),
             " Create the Anaconda environment (Python 3.10 used as an example)"
           ]
         }),
         command : i.createEnv
       },
       activateEnv : {
         comment : T(z, {
           t : n,
           i18nKey : "activateEnv",
           children : [
             y("b", {children : "Step 2:"}),
             " Activate the Anaconda environment"
           ]
         }),
         command : i.activateEnv
       },
       upgradePip : {
         comment : T(z, {
           t : n,
           i18nKey : "update",
           children : [
             y("b", {children : "Step 3:"}),
             " Update the Anaconda to latest version"
           ]
         }),
         command : i.update
       },
       install : {
         comment : T(z, {
           t : n,
           i18nKey : "install",
           children : [
             y("b", {children : "Step 4:"}),
             " Download and install the package"
           ]
         }),
         command : i.getInstall(e),
         onCopy : () => Re.install()
       }
     };
      return T(je, {
        title : o("install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {...s.createEnv}),
          y(V, {...s.activateEnv}),
          y(V, {...s.upgradePip}),
          y(V, {...s.install}),
          y(pt, {installUrl : r.installation})
        ]
      })
    }, cc = ({distribution : e}) => {
      const {
          t} = B("translation", {keyPrefix : "distributions.download"}),
         {t : n} = B("translation", {keyPrefix : "compact"}),
         o = {[U.ARCHIVE] : t("downloadArchives"), [U.DOCKER] : t("gotoDocker")}
             [e.key],
         r = T(zr, {
           children : [
             n("distributions.download.useFollowingLink"),
             y("br", {}),
             y("b", {
               children : y(_t, {
                 href : e.data.downloadLink,
                 testId : "download-button",
                 onClick : () => Re.install(),
                 children : o
               })
             })
           ]
         });
      return T(je, {
        title : n("selectorForm.titles.install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {comment : r}),
          y(pt, {installUrl : e.data.linksSet.installation})
        ]
      })
    }, Ty = ({version : e, distribution : t}) => {
      const {
        t : n
      } = B("common", {keyPrefix : "distributionLinks"}),
     {t : o} = B("translation", {keyPrefix : "distributions.githubGitee"}),
     {t : r} = B("translation", {keyPrefix : "compact.selectorForm.titles"}),
     i = {
       build : {
         href : t.data.links.getBuildInstructionsLink(e),
         text : n("installationInstructions")
       },
       repository : {
         href : t.data.links.getRepositoryLink(e),
         text : t.key === U.GITHUB ? o("githubRepository")
                                   : o("giteeRepository")
       }
     },
     s = {
       clone : {
         comment : T(z, {
           t : o,
           i18nKey : "steps.useGitClone",
           children : [
             y("b", {children : "Step 1:"}),
             " Use Git to clone the OpenVINO toolkit repository"
           ]
         }),
         command : t.data.commands.getCloneCommand(e),
         onCopy : () => Re.install()
       },
       build : {
         comment : T(z, {
           t : o,
           i18nKey : "steps.buildInstructions",
           children : [
             y("b", {children : "Step 2:"}),
             " Follow the",
             y(_t, {
               href : i.build.href,
               testId : "build-instructions-link",
               children : i.build.text
             })
           ]
         })
       }
     };
      return T(je, {
        title : r("install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {...s.clone}),
          y(V, {...s.build}),
          T(Xp, {
            children : [
              y(_t, {
                href : i.build.href,
                testId : "install-instructions-link",
                children : i.build.text
              }),
              y(_t, {
                href : i.repository.href,
                testId : "repository-link",
                children : i.repository.text
              })
            ]
          })
        ]
      })
    }, Iy = ({distribution : e, version : t}) => {
      const {t : n} = B("translation", {keyPrefix : "distributions.npm.steps"}),
                 {t : o} =
                     B("translation",
                       {keyPrefix : "compact.selectorForm.titles"}),
                 {linksSet : r, commands : i} = e.data, s = {
                   install : {
                     comment : y(z, {
                       t : n,
                       i18nKey : "install",
                       children : "Download and install the package"
                     }),
                     command : i.getInstall(t),
                     onCopy : () => Re.install()
                   }
                 };
      return T(je, {
        title : o("install"),
        accent : !0,
        testId : "instructions",
        children :
            [ y(V, {...s.install}), y(pt, {installUrl : r.installation}) ]
      })
    }, Ry = ({environment : e, os : t, version : n, distribution : o}) => {
      const {
        t : r
      } = B("translation", {keyPrefix : "distributions.pip.steps"}),
     {t : i} = B("translation", {keyPrefix : "compact.selectorForm.titles"}),
     {linksSet : s, commands : l} = o.data, a = l.getCreateVenvCommand(t, n),
     u = l.getActivateVenvCommand(t, n),
     f = l.getInstallCommand(
         {environment : e, os : t, version : n, distribution : o}),
     d = {
       createEnv : {
         comment : T(z, {
           t : r,
           i18nKey : "createVenv",
           children :
               [ y("b", {children : "Step 1:"}), " Create virtual environment" ]
         }),
         command : a
       },
       activateEnv : {
         comment : T(z, {
           t : r,
           i18nKey : "activateVenv",
           children : [
             y("b", {children : "Step 2:"}),
             " Activate virtual environment"
           ]
         }),
         command : u
       },
       upgradePip : {
         comment : T(z, {
           t : r,
           i18nKey : "upgradePip",
           children : [
             y("b", {children : "Step 3:"}),
             " Upgrade pip to latest version"
           ]
         }),
         command : l.upgradeCommand
       },
       install : {
         comment : T(z, {
           t : r,
           i18nKey : "install",
           children : [
             y("b", {children : "Step 4:"}),
             " Download and install the package"
           ]
         }),
         command : f,
         onCopy : () => Re.install()
       }
     };
      return T(je, {
        title : i("install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {...d.createEnv}),
          y(V, {...d.activateEnv}),
          y(V, {...d.upgradePip}),
          y(V, {...d.install}),
          y(pt, {installUrl : s.installation})
        ]
      })
    }, jy = ({distribution : e}) => {
      const {t} = B("translation", {keyPrefix : "distributions.vcpkg.steps"}),
            {t : n} =
                B("translation", {keyPrefix : "compact.selectorForm.titles"}),
            {linksSet : o, commands : r} = e.data, i = {
              install : {
                comment : y(z, {
                  t,
                  i18nKey : "install",
                  children : "Download and install the package"
                }),
                command : r.install,
                onCopy : () => Re.install()
              }
            };
      return T(je, {
        title : n("install"),
        accent : !0,
        testId : "instructions",
        children :
            [ y(V, {...i.install}), y(pt, {installUrl : o.installation}) ]
      })
    }, Fy = ({version : e, distribution : t}) => {
      if (t.data.docsOnly)
        return y(Dy, {distribution : t});
      const {
        t : n
      } = B("translation", {keyPrefix : "distributions.yum"}),
     {t : o} = B("translation", {keyPrefix : "compact.selectorForm.titles"}),
     {yumYear : r} = e.metadata, {commands : i} = t.data, s = {
       createRepo : {
         comment : T(z, {
           ns : "translation",
           i18nKey : "distributions.yum.steps.createRepoFile",
           children : [
             y("b", {children : "Step 1:"}),
             " Create the YUM repo file in the /tmp directory as a normal user"
           ]
         }),
         command : i.getCreateRepoCommand(e)
       },
       moveRepoFile : {
         comment : T(z, {
           ns : "translation",
           i18nKey : "distributions.yum.steps.moveFile",
           values : {year : r, directory : i.directory},
           children : [
             y("b", {children : "Step 2:"}),
             " Move the new openvino-",
             {year : r},
             ".repo file to the YUM configuration directory ",
             y("b", {children : i.directory})
           ]
         }),
         command : i.getMoveRepoFileCommand(e)
       },
       verifyRepo : {
         comment : T(z, {
           t : n,
           i18nKey : "steps.verify",
           children : [
             y("b", {children : "Step 3:"}),
             " Verify that the new repo is properly setup by running the following command"
           ]
         }),
         command : i.verifyRepoCommand
       },
       install : {
         comment : T(z, {
           t : n,
           i18nKey : "steps.install",
           children :
               [ y("b", {children : "Step 4:"}), " Install OpenVINO Runtime" ]
         }),
         command : i.getInstallCommand(e),
         onCopy : () => Re.install()
       }
     };
      return T(je, {
        title : o("install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {...s.createRepo}),
          y(V, {...s.moveRepoFile}),
          y(V, {...s.verifyRepo}),
          y(V, {...s.install}),
          y(pt, {installUrl : t.data.linksSet.installation})
        ]
      })
    }, Dy = ({distribution : e}) => {
      const {t} = B("translation", {keyPrefix : "compact"}),
            n = T(z, {
              t,
              i18nKey : "distributions.aptYum.followInstructions",
              children : [
                "Follow the",
                y(_t, {
                  href : e.data.linksSet.installation,
                  testId : "install-instructions-button",
                  onClick : () => Re.install(),
                  children : "Installation instructions"
                })
              ]
            });
      return T(je, {
        title : t("selectorForm.titles.install"),
        accent : !0,
        testId : "instructions",
        children : [
          y(V, {comment : n}),
          y(pt, {installUrl : e.data.linksSet.installation})
        ]
      })
    }, Ay = ({state : e}) => {
      var o;
      const t = {
        environment : (o = e.ENVIRONMENT) == null ? void 0 : o.selected,
        os : e.OP_SYSTEM.selected,
        version : e.VERSION.selected,
        distribution : e.DISTRIBUTION.selected
      };
      if (t.distribution.key === U.PIP)
        return y(Ry, {...t, distribution : t.distribution});
      if (t.distribution.key === U.ARCHIVE)
        return y(cc, {...t, distribution : t.distribution});
      if (t.distribution.key === U.DOCKER)
        return y(cc, {...t, distribution : t.distribution});
      if (t.distribution.key === U.GITHUB || t.distribution.key === U.GITEE)
        return y(Ty, {...t, distribution : t.distribution});
      if (t.distribution.key === U.APT)
        return y(Py, {...t, distribution : t.distribution});
      if (t.distribution.key === U.YUM)
        return y(Fy, {...t, distribution : t.distribution});
      if (t.distribution.key === U.CONDA)
        return y(Ly, {...t, distribution : t.distribution});
      if (t.distribution.key === U.BREW)
        return y(Cy, {...t, distribution : t.distribution});
      if (t.distribution.key === U.VCPKG)
        return y(jy, {...t, distribution : t.distribution});
      if (t.distribution.key === U.CONAN)
        return y(by, {...t, distribution : t.distribution});
      if (t.distribution.key === U.NPM)
        return y(Iy, {...t, distribution : t.distribution});
      const n = t.distribution;
      throw new Error(`${n}`)
    };
const xr = {
  tooltipToggle : "spark-tooltip-toggle",
  tooltipPopover :
      "spark-tooltip spark-tooltip-size-m spark-shadow spark-tooltip-bottom",
  tooltipLabel : "spark-tooltip-label",
  tooltipArrow : "spark-tooltip-tip"
},
      Uy = ({content : e}) => {
        const [t, n] = F.useState(!1);
        return y("div", {
          className : "help-tooltip",
          children : T("div", {
            className : xr.tooltipToggle,
            onMouseEnter : () => n(!0),
            onMouseLeave : () => n(!1),
            children : [
              y("div", {
                "aria-hidden" : "true",
                role : "img",
                className : "help-tooltip-icon",
                children : y(Sy, {})
              }),
              t && T("div", {
                className : `help-tooltip-popover ${xr.tooltipPopover}`,
                role : "tooltip",
                children : [
                  y("span", {
                    className :
                        `help-tooltip-popover-content ${xr.tooltipLabel}`,
                    children : e
                  }),
                  y("span", {className : xr.tooltipArrow})
                ]
              })
            ]
          })
        })
      };
const hs = {
  toggleSwitchField :
      "spark-fieldlabel spark-fieldlabel-size-m spark-toggle-switch spark-toggle-switch-action spark-toggle-switch-size-l",
  toggleSwitchInput :
      "spark-focus-visible spark-focus-visible-suppress spark-focus-visible-adjacent",
  toggleSwitchSelector :
      "spark-toggle-switch-selector spark-focus-visible spark-focus-visible-snap"
},
      My = ({label : e, checked : t = !1, onClick : n, testId : o}) =>
          T("label", {
            className : hs.toggleSwitchField,
            "data-cy" : o,
            children : [
              y("input", {
                type : "checkbox",
                className : hs.toggleSwitchInput,
                role : "switch",
                checked : t,
                onChange : () => n == null ? void 0 : n()
              }),
              y("span", {className : hs.toggleSwitchSelector}),
              y("div", {children : e})
            ]
          });
const cn = {
  toggleButton :
      "spark-button spark-button-size-l spark-focus-visible spark-focus-visible-self spark-focus-visible-snap",
  toggleButtonGroup :
      "spark-button-group spark-button-group-orientation-horizontal spark-button-group-align-start spark-button-group-spacing-l",
  actionButton : "spark-button-action",
  secondaryButton : "spark-button-secondary",
  disabledButton : "spark-button-disabled",
  buttonContent : "spark-button-content",
  fontXs : "spark-font-25"
},
      Jp = ({
        onClick : e,
        checked : t = !1,
        disabled : n = !1,
        title : o,
        subtitle : r,
        value : i
      }) => y("button", {
        className :
            `${cn.toggleButton} ${t ? cn.actionButton : cn.secondaryButton} ${
                n && cn.disabledButton}`,
        type : "button",
        role : "radio",
        "aria-checked" : t,
        onClick : () => e == null ? void 0 : e(),
        "data-cy" : i,
        "aria-label" : o,
        children : T("span", {
          className : cn.buttonContent,
          children : [
            y("span", {className : "title", children : o}),
            r && y("span", {className : `${cn.fontXs} subtitle`, children : r})
          ]
        })
      }),
      Zp = ({children : e, className : t}) => y("div", {
        className : `option-button-group ${t || ""} ${cn.toggleButtonGroup}`,
        children : e
      });
function zy({title : e, options : t, level : n}) {
  const o = F.useContext(ya), r = t.some(({checked : u}) => u),
        [ i, s ] = F.useState(r),
        l = t.map(
            ({level : u, key : f, checked : d, metadata : h}) =>
                y(Jp,
                  {
                    value : `${u}_${f}`,
                    checked : d,
                    title : h.title,
                    onClick : () => o(u, f)
                  },
                  f)),
        {t : a} = B("translation", {keyPrefix : "compact.frameworks"});
  return T(je, {
    title : e,
    testId : n,
    children : [
      T(zr, {
        children : [
          y(My, {
            label : a("install"),
            checked : i,
            onClick : () => s(!i),
            testId : "frameworks-toggle-switch"
          }),
          y(Uy, {content : a("tooltip")})
        ]
      }),
      y(zr, {children : i && y(Zp, {children : l})})
    ]
  })
}
function Pr({title : e, options : t, level : n}) {
  const o = F.useContext(ya),
        r = t.map(
            ({level : i, key : s, checked : l, metadata : a}) =>
                y(Jp,
                  {
                    value : `${i}_${s}`,
                    checked : l,
                    title : a.compactTitle || a.title,
                    subtitle : a.compactSubtitle || a.subtitle,
                    onClick : () => o(i, s)
                  },
                  s));
  return y(je, {title : e, testId : n, children : y(Zp, {children : r})})
}
function Vy({state : e}) {
  var l, a;
  const t = e.VERSION.nodes.map(
            u => ({...u, metadata : {...u.metadata, subtitle : void 0}})),
        n = (l = e.ENVIRONMENT) == null
      ? void 0
      : l.nodes.map(
            u => ({...u, metadata : {...u.metadata, subtitle : void 0}})),
        o = e.OP_SYSTEM.nodes, r = e.DISTRIBUTION.nodes,
        i = (a = e.FRAMEWORK) == null ? void 0 : a.nodes;
  F.useEffect(() => Re.combinationView(), [ e ]);
  const {t : s} = B("translation", {keyPrefix : "selectorForm.titles"});
  return T(zr, {
    children : [
      y(Pr, {title : s("version"), options : t, level : L.VERSION}),
      n &&
          y(Pr,
            {title : s("envinronment"), options : n, level : L.ENVIRONMENT}),
      y(Pr, {title : s("os"), options : o, level : L.OP_SYSTEM}),
      y(Pr, {title : s("distribution"), options : r, level : L.DISTRIBUTION}),
      i && y(zy, {title : s("frameworks"), options : i, level : L.FRAMEWORK})
    ]
  })
}
const {CompactSelectorContext : ya, useCompactSelector : $y} = gy();
Re.initialize(window.parent);
function By() {
  const [e, t] = $y();
  return y("div", {
    className : "st-responsive-container",
    children :
        T(ya.Provider,
          {value : t, children : [ y(Vy, {state : e}), y(Ay, {state : e}) ]})
  })
}
ys.createRoot(document.getElementById("root")).render(y(vf.StrictMode, {
  children : y(By, {})
}));
