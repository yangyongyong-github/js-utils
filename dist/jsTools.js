!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.package = t())
    : (e.package = t())
})(self, () =>
  (() => {
    'use strict'
    var e = {
        d: (t, r) => {
          for (var n in r)
            e.o(r, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: r[n] })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }
      },
      t = {}
    e.r(t), e.d(t, { default: () => u })
    var r = {}
    e.r(r), e.d(r, { typeOf: () => o })
    var n = {}
    e.r(n),
      e.d(n, {
        dateFormat: () => a,
        dayDiff: () => i,
        formatDate: () => s,
        timeHepler: () => c
      })
    const o = (e) =>
      Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
    function a(e = 0, t = +new Date()) {
      switch (((t = new Date(t)), e)) {
        case 0:
          return t.toLocaleString()
        case 1:
          return t.toLocaleDateString()
        case 2:
          return t.toLocaleTimeString().slice(0, 5)
        default:
          return 'date param error'
      }
    }
    function s(e = +new Date(), t = 'yyyy-MM-dd hh:mm:ss') {
      if (
        (e instanceof Date || (e = new Date(/^\d+$/.test(e) ? 1 * e : e)),
        'Invalid Date' === e.toString())
      )
        return 'Invalid Date'
      function r(e, t, r) {
        return (
          (e = '' + e),
          r
            ? e.length > t
              ? (e = e.substring(0, t))
              : e.length < t && (e += '0000'.substring(0, t - e.length))
            : e.length < t && (e = '0000'.substring(0, t - e.length) + e),
          e
        )
      }
      return t.replace(/([yMdhmsqS])\1*/g, function (t) {
        switch (t.charAt(0)) {
          case 'y':
            return r(e.getFullYear(), t.length)
          case 'M':
            return r(e.getMonth() + 1, t.length)
          case 'd':
            return r(e.getDate(), t.length)
          case 'h':
            return r(e.getHours(), t.length)
          case 'm':
            return r(e.getMinutes(), t.length)
          case 's':
            return r(e.getSeconds(), t.length)
          case 'q':
            return r(Math.floor((e.getMonth() + 3) / 3), t.length)
          case 'S':
            return r(e.getMilliseconds(), t.length, !0)
        }
      })
    }
    function c(e) {
      if (!Number(e) || e < 1e3) return 'time Param Error'
      const t = moment.duration(e),
        r = t.days(),
        n = t.hours(),
        o = t.minutes(),
        a = t.seconds()
      return r > 0
        ? r + '天' + n + '小时' + o + '分钟'
        : n > 0
        ? n + '小时' + o + '分钟'
        : 0 == a
        ? o + '分钟'
        : o + '分钟' + a + '秒'
    }
    const i = (e, t) => (
        (e = new Date(e)),
        (t = new Date(t)),
        Math.ceil(Math.abs(e.getTime() - t.getTime()) / 864e5) || 'param error'
      ),
      u = { ...r, ...n }
    return t
  })()
)
