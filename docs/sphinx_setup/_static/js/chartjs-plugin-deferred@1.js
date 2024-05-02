/*!
 * @license
 * chartjs-plugin-deferred v1.0.2
 * https://chartjs-plugin-deferred.netlify.app
 * (c) 2016-2021 chartjs-plugin-deferred contributors
 * Released under the MIT license
 */
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
      ? t(require("chart.js"))
      : "function" == typeof define && define.amd ? define([ "chart.js" ], t)
                                                  : t(e.Chart)
}(this, function(e) {
  "use strict";
  var r = (e = e && e.hasOwnProperty("default") ? e.default : e).helpers,
      a = "$chartjs_deferred", i = "$deferred";
  function d(e, t) {
    t ? window.setTimeout(e, t) : r.requestAnimFrame.call(window, e)
  }
  function o(e, t) {
    var n = parseInt(e, 10);
    return isNaN(n)                                     ? 0
        : "string" == typeof e && -1 !== e.indexOf("%") ? n / 100 * t
                                                        : n
  }
  function f(e) {
    var t = e[i].options, n = e.chart.canvas;
    if (n && null !== n.offsetParent) {
      e = n.getBoundingClientRect(), n = o(t.yOffset || 0, e.height),
      t = o(t.xOffset || 0, e.width);
      return 0 <= e.right - t && 0 <= e.bottom - n &&
          e.left + t <= window.innerWidth && e.top + n <= window.innerHeight
    }
  }
  function l(e) {
    var o = e.target[a];
    o.ticking ||
        (o.ticking = !0, d(function() {
           for (var e, t = o.charts.slice(), n = t.length, r = 0; r < n; ++r)
             f(e = t[r]) && (s(e), e[i].appeared = !0, e.update());
           o.ticking = !1
         }))
  }
  function n(e) {
    for (var t, n = e.chart.canvas.parentElement; n;)
      !function(e) {
        if (e.nodeType !== Node.ELEMENT_NODE)
          return e.nodeType === Node.DOCUMENT_NODE;
        var t = r.getStyle(e, "overflow-x"), e = r.getStyle(e, "overflow-y");
        return "auto" === t || "scroll" === t || "auto" === e || "scroll" === e
      }(n) ||
          (0 ===
                   (t = (t = n[a] || (n[a] = {})).charts || (t.charts = []))
                       .length &&
               r.addEvent(n, "scroll", l),
           t.push(e),
           e[i].elements.push(n)),
          n = n.parentElement || n.ownerDocument
  }
  function s(n) {
    n[i].elements.forEach(function(e) {
      var t = e[a].charts;
      t.splice(t.indexOf(n), 1),
          t.length || (r.removeEvent(e, "scroll", l), delete e[a])
    }),
        n[i].elements = []
  }
  e.defaults.global.plugins.deferred = {xOffset : 0, yOffset : 0, delay : 0},
  e.plugins.register({
    id : "deferred",
    beforeInit : function(e, t) {
      e[i] = {
        options : t,
        appeared : !1,
        delayed : !1,
        loaded : !1,
        elements : []
      },
      n(e)
    },
    beforeDatasetsUpdate : function(e, t) {
      var n = e[i];
      if (!n.loaded) {
        if (!n.appeared && !f(e))
          return !1;
        if (n.appeared = !0, n.loaded = !0, s(e), 0 < t.delay)
          return n.delayed = !0, d(function() {
                   e.ctx && (n.delayed = !1, e.update())
                 }, t.delay), !1
      }
      if (n.delayed)
        return !1
    },
    destroy : function(e) {
      s(e)
    }
  })
});