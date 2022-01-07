(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module2, copyDefault, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module2, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports2, module2) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty13 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty13.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports2) {
      "use strict";
      var l = require_object_assign();
      var n = 60103;
      var p = 60106;
      exports2.Fragment = 60107;
      exports2.StrictMode = 60108;
      exports2.Profiler = 60114;
      var q = 60109;
      var r = 60110;
      var t = 60112;
      exports2.Suspense = 60113;
      var u = 60115;
      var v = 60116;
      if (typeof Symbol === "function" && Symbol.for) {
        w = Symbol.for;
        n = w("react.element");
        p = w("react.portal");
        exports2.Fragment = w("react.fragment");
        exports2.StrictMode = w("react.strict_mode");
        exports2.Profiler = w("react.profiler");
        q = w("react.provider");
        r = w("react.context");
        t = w("react.forward_ref");
        exports2.Suspense = w("react.suspense");
        u = w("react.memo");
        v = w("react.lazy");
      }
      var w;
      var x = typeof Symbol === "function" && Symbol.iterator;
      function y(a) {
        if (a === null || typeof a !== "object")
          return null;
        a = x && a[x] || a["@@iterator"];
        return typeof a === "function" ? a : null;
      }
      function z(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var A = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var B = {};
      function C(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = B;
        this.updater = c || A;
      }
      C.prototype.isReactComponent = {};
      C.prototype.setState = function(a, b) {
        if (typeof a !== "object" && typeof a !== "function" && a != null)
          throw Error(z(85));
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      C.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function D() {
      }
      D.prototype = C.prototype;
      function E(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = B;
        this.updater = c || A;
      }
      var F = E.prototype = new D();
      F.constructor = E;
      l(F, C.prototype);
      F.isPureReactComponent = true;
      var G = { current: null };
      var H = Object.prototype.hasOwnProperty;
      var I = { key: true, ref: true, __self: true, __source: true };
      function J(a, b, c) {
        var e, d = {}, k = null, h = null;
        if (b != null)
          for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
            H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
        var g = arguments.length - 2;
        if (g === 1)
          d.children = c;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++)
            f[m] = arguments[m + 2];
          d.children = f;
        }
        if (a && a.defaultProps)
          for (e in g = a.defaultProps, g)
            d[e] === void 0 && (d[e] = g[e]);
        return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
      }
      function K(a, b) {
        return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function L(a) {
        return typeof a === "object" && a !== null && a.$$typeof === n;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var M = /\/+/g;
      function N(a, b) {
        return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
      }
      function O(a, b, c, e, d) {
        var k = typeof a;
        if (k === "undefined" || k === "boolean")
          a = null;
        var h = false;
        if (a === null)
          h = true;
        else
          switch (k) {
            case "string":
            case "number":
              h = true;
              break;
            case "object":
              switch (a.$$typeof) {
                case n:
                case p:
                  h = true;
              }
          }
        if (h)
          return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
            return a2;
          })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
        h = 0;
        e = e === "" ? "." : e + ":";
        if (Array.isArray(a))
          for (var g = 0; g < a.length; g++) {
            k = a[g];
            var f = e + N(k, g);
            h += O(k, b, c, f, d);
          }
        else if (f = y(a), typeof f === "function")
          for (a = f.call(a), g = 0; !(k = a.next()).done; )
            k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
        else if (k === "object")
          throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
        return h;
      }
      function P(a, b, c) {
        if (a == null)
          return a;
        var e = [], d = 0;
        O(a, e, "", "", function(a2) {
          return b.call(c, a2, d++);
        });
        return e;
      }
      function Q(a) {
        if (a._status === -1) {
          var b = a._result;
          b = b();
          a._status = 0;
          a._result = b;
          b.then(function(b2) {
            a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
          }, function(b2) {
            a._status === 0 && (a._status = 2, a._result = b2);
          });
        }
        if (a._status === 1)
          return a._result;
        throw a._result;
      }
      var R = { current: null };
      function S() {
        var a = R.current;
        if (a === null)
          throw Error(z(321));
        return a;
      }
      var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l };
      exports2.Children = { map: P, forEach: function(a, b, c) {
        P(a, function() {
          b.apply(this, arguments);
        }, c);
      }, count: function(a) {
        var b = 0;
        P(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return P(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!L(a))
          throw Error(z(143));
        return a;
      } };
      exports2.Component = C;
      exports2.PureComponent = E;
      exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
      exports2.cloneElement = function(a, b, c) {
        if (a === null || a === void 0)
          throw Error(z(267, a));
        var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
        if (b != null) {
          b.ref !== void 0 && (k = b.ref, h = G.current);
          b.key !== void 0 && (d = "" + b.key);
          if (a.type && a.type.defaultProps)
            var g = a.type.defaultProps;
          for (f in b)
            H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (f === 1)
          e.children = c;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++)
            g[m] = arguments[m + 2];
          e.children = g;
        }
        return {
          $$typeof: n,
          type: a.type,
          key: d,
          ref: k,
          props: e,
          _owner: h
        };
      };
      exports2.createContext = function(a, b) {
        b === void 0 && (b = null);
        a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
        a.Provider = { $$typeof: q, _context: a };
        return a.Consumer = a;
      };
      exports2.createElement = J;
      exports2.createFactory = function(a) {
        var b = J.bind(null, a);
        b.type = a;
        return b;
      };
      exports2.createRef = function() {
        return { current: null };
      };
      exports2.forwardRef = function(a) {
        return { $$typeof: t, render: a };
      };
      exports2.isValidElement = L;
      exports2.lazy = function(a) {
        return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
      };
      exports2.memo = function(a, b) {
        return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
      };
      exports2.useCallback = function(a, b) {
        return S().useCallback(a, b);
      };
      exports2.useContext = function(a, b) {
        return S().useContext(a, b);
      };
      exports2.useDebugValue = function() {
      };
      exports2.useEffect = function(a, b) {
        return S().useEffect(a, b);
      };
      exports2.useImperativeHandle = function(a, b, c) {
        return S().useImperativeHandle(a, b, c);
      };
      exports2.useLayoutEffect = function(a, b) {
        return S().useLayoutEffect(a, b);
      };
      exports2.useMemo = function(a, b) {
        return S().useMemo(a, b);
      };
      exports2.useReducer = function(a, b, c) {
        return S().useReducer(a, b, c);
      };
      exports2.useRef = function(a) {
        return S().useRef(a);
      };
      exports2.useState = function(a) {
        return S().useState(a);
      };
      exports2.version = "17.0.2";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports2, module2) {
      "use strict";
      if (true) {
        module2.exports = require_react_production_min();
      } else {
        module2.exports = null;
      }
    }
  });

  // node_modules/@fluentui/react-component-ref/node_modules/react-is/cjs/react-is.production.min.js
  var require_react_is_production_min = __commonJS({
    "node_modules/@fluentui/react-component-ref/node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
      "use strict";
      var b = typeof Symbol === "function" && Symbol.for;
      var c = b ? Symbol.for("react.element") : 60103;
      var d = b ? Symbol.for("react.portal") : 60106;
      var e = b ? Symbol.for("react.fragment") : 60107;
      var f = b ? Symbol.for("react.strict_mode") : 60108;
      var g = b ? Symbol.for("react.profiler") : 60114;
      var h = b ? Symbol.for("react.provider") : 60109;
      var k = b ? Symbol.for("react.context") : 60110;
      var l = b ? Symbol.for("react.async_mode") : 60111;
      var m = b ? Symbol.for("react.concurrent_mode") : 60111;
      var n = b ? Symbol.for("react.forward_ref") : 60112;
      var p = b ? Symbol.for("react.suspense") : 60113;
      var q = b ? Symbol.for("react.suspense_list") : 60120;
      var r = b ? Symbol.for("react.memo") : 60115;
      var t = b ? Symbol.for("react.lazy") : 60116;
      var v = b ? Symbol.for("react.block") : 60121;
      var w = b ? Symbol.for("react.fundamental") : 60117;
      var x = b ? Symbol.for("react.responder") : 60118;
      var y = b ? Symbol.for("react.scope") : 60119;
      function z(a) {
        if (typeof a === "object" && a !== null) {
          var u = a.$$typeof;
          switch (u) {
            case c:
              switch (a = a.type, a) {
                case l:
                case m:
                case e:
                case g:
                case f:
                case p:
                  return a;
                default:
                  switch (a = a && a.$$typeof, a) {
                    case k:
                    case n:
                    case t:
                    case r:
                    case h:
                      return a;
                    default:
                      return u;
                  }
              }
            case d:
              return u;
          }
        }
      }
      function A(a) {
        return z(a) === m;
      }
      exports2.AsyncMode = l;
      exports2.ConcurrentMode = m;
      exports2.ContextConsumer = k;
      exports2.ContextProvider = h;
      exports2.Element = c;
      exports2.ForwardRef = n;
      exports2.Fragment = e;
      exports2.Lazy = t;
      exports2.Memo = r;
      exports2.Portal = d;
      exports2.Profiler = g;
      exports2.StrictMode = f;
      exports2.Suspense = p;
      exports2.isAsyncMode = function(a) {
        return A(a) || z(a) === l;
      };
      exports2.isConcurrentMode = A;
      exports2.isContextConsumer = function(a) {
        return z(a) === k;
      };
      exports2.isContextProvider = function(a) {
        return z(a) === h;
      };
      exports2.isElement = function(a) {
        return typeof a === "object" && a !== null && a.$$typeof === c;
      };
      exports2.isForwardRef = function(a) {
        return z(a) === n;
      };
      exports2.isFragment = function(a) {
        return z(a) === e;
      };
      exports2.isLazy = function(a) {
        return z(a) === t;
      };
      exports2.isMemo = function(a) {
        return z(a) === r;
      };
      exports2.isPortal = function(a) {
        return z(a) === d;
      };
      exports2.isProfiler = function(a) {
        return z(a) === g;
      };
      exports2.isStrictMode = function(a) {
        return z(a) === f;
      };
      exports2.isSuspense = function(a) {
        return z(a) === p;
      };
      exports2.isValidElementType = function(a) {
        return typeof a === "string" || typeof a === "function" || a === e || a === m || a === g || a === f || a === p || a === q || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
      };
      exports2.typeOf = z;
    }
  });

  // node_modules/@fluentui/react-component-ref/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/@fluentui/react-component-ref/node_modules/react-is/index.js"(exports2, module2) {
      "use strict";
      if (true) {
        module2.exports = require_react_is_production_min();
      } else {
        module2.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports2) {
      "use strict";
      var f;
      var g;
      var h;
      var k;
      if (typeof performance === "object" && typeof performance.now === "function") {
        l = performance;
        exports2.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports2.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      if (typeof window === "undefined" || typeof MessageChannel !== "function") {
        t = null, u = null, w = function() {
          if (t !== null)
            try {
              var a = exports2.unstable_now();
              t(true, a);
              t = null;
            } catch (b) {
              throw setTimeout(w, 0), b;
            }
        };
        f = function(a) {
          t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
        };
        g = function(a, b) {
          u = setTimeout(a, b);
        };
        h = function() {
          clearTimeout(u);
        };
        exports2.unstable_shouldYield = function() {
          return false;
        };
        k = exports2.unstable_forceFrameRate = function() {
        };
      } else {
        x = window.setTimeout, y = window.clearTimeout;
        if (typeof console !== "undefined") {
          z = window.cancelAnimationFrame;
          typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
          typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        A = false, B = null, C = -1, D = 5, E = 0;
        exports2.unstable_shouldYield = function() {
          return exports2.unstable_now() >= E;
        };
        k = function() {
        };
        exports2.unstable_forceFrameRate = function(a) {
          0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1e3 / a) : 5;
        };
        F = new MessageChannel(), G = F.port2;
        F.port1.onmessage = function() {
          if (B !== null) {
            var a = exports2.unstable_now();
            E = a + D;
            try {
              B(true, a) ? G.postMessage(null) : (A = false, B = null);
            } catch (b) {
              throw G.postMessage(null), b;
            }
          } else
            A = false;
        };
        f = function(a) {
          B = a;
          A || (A = true, G.postMessage(null));
        };
        g = function(a, b) {
          C = x(function() {
            a(exports2.unstable_now());
          }, b);
        };
        h = function() {
          y(C);
          C = -1;
        };
      }
      var t;
      var u;
      var w;
      var x;
      var y;
      var z;
      var A;
      var B;
      var C;
      var D;
      var E;
      var F;
      var G;
      function H(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; ; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (e !== void 0 && 0 < I(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function J(a) {
        a = a[0];
        return a === void 0 ? null : a;
      }
      function K(a) {
        var b = a[0];
        if (b !== void 0) {
          var c = a.pop();
          if (c !== b) {
            a[0] = c;
            a:
              for (var d = 0, e = a.length; d < e; ) {
                var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
                if (n !== void 0 && 0 > I(n, c))
                  r !== void 0 && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
                else if (r !== void 0 && 0 > I(r, c))
                  a[d] = r, a[v] = c, d = v;
                else
                  break a;
              }
          }
          return b;
        }
        return null;
      }
      function I(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return c !== 0 ? c : a.id - b.id;
      }
      var L = [];
      var M = [];
      var N = 1;
      var O = null;
      var P = 3;
      var Q = false;
      var R = false;
      var S = false;
      function T(a) {
        for (var b = J(M); b !== null; ) {
          if (b.callback === null)
            K(M);
          else if (b.startTime <= a)
            K(M), b.sortIndex = b.expirationTime, H(L, b);
          else
            break;
          b = J(M);
        }
      }
      function U(a) {
        S = false;
        T(a);
        if (!R)
          if (J(L) !== null)
            R = true, f(V);
          else {
            var b = J(M);
            b !== null && g(U, b.startTime - a);
          }
      }
      function V(a, b) {
        R = false;
        S && (S = false, h());
        Q = true;
        var c = P;
        try {
          T(b);
          for (O = J(L); O !== null && (!(O.expirationTime > b) || a && !exports2.unstable_shouldYield()); ) {
            var d = O.callback;
            if (typeof d === "function") {
              O.callback = null;
              P = O.priorityLevel;
              var e = d(O.expirationTime <= b);
              b = exports2.unstable_now();
              typeof e === "function" ? O.callback = e : O === J(L) && K(L);
              T(b);
            } else
              K(L);
            O = J(L);
          }
          if (O !== null)
            var m = true;
          else {
            var n = J(M);
            n !== null && g(U, n.startTime - b);
            m = false;
          }
          return m;
        } finally {
          O = null, P = c, Q = false;
        }
      }
      var W = k;
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        R || Q || (R = true, f(V));
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return P;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return J(L);
      };
      exports2.unstable_next = function(a) {
        switch (P) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = P;
        }
        var c = P;
        P = b;
        try {
          return a();
        } finally {
          P = c;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = W;
      exports2.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = P;
        P = a;
        try {
          return b();
        } finally {
          P = c;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b, c) {
        var d = exports2.unstable_now();
        typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: N++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, H(M, a), J(L) === null && a === J(M) && (S ? h() : S = true, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = true, f(V)));
        return a;
      };
      exports2.unstable_wrapCallback = function(a) {
        var b = P;
        return function() {
          var c = P;
          P = b;
          try {
            return a.apply(this, arguments);
          } finally {
            P = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports2, module2) {
      "use strict";
      if (true) {
        module2.exports = require_scheduler_production_min();
      } else {
        module2.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports2) {
      "use strict";
      var aa = require_react();
      var m = require_object_assign();
      var r = require_scheduler();
      function y(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      if (!aa)
        throw Error(y(227));
      var ba = /* @__PURE__ */ new Set();
      var ca = {};
      function da(a, b) {
        ea(a, b);
        ea(a + "Capture", b);
      }
      function ea(a, b) {
        ca[a] = b;
        for (a = 0; a < b.length; a++)
          ba.add(b[a]);
      }
      var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
      var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var ia = Object.prototype.hasOwnProperty;
      var ja = {};
      var ka = {};
      function la(a) {
        if (ia.call(ka, a))
          return true;
        if (ia.call(ja, a))
          return false;
        if (ha.test(a))
          return ka[a] = true;
        ja[a] = true;
        return false;
      }
      function ma(a, b, c, d) {
        if (c !== null && c.type === 0)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (c !== null)
              return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return a !== "data-" && a !== "aria-";
          default:
            return false;
        }
      }
      function na(a, b, c, d) {
        if (b === null || typeof b === "undefined" || ma(a, b, c, d))
          return true;
        if (d)
          return false;
        if (c !== null)
          switch (c.type) {
            case 3:
              return !b;
            case 4:
              return b === false;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function B(a, b, c, d, e, f, g) {
        this.acceptsBooleans = b === 2 || b === 3 || b === 4;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var D = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        D[a] = new B(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        D[b] = new B(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        D[a] = new B(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        D[a] = new B(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        D[a] = new B(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        D[a] = new B(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var oa = /[\-:]([a-z])/g;
      function pa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(oa, pa);
        D[b] = new B(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(oa, pa);
        D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(oa, pa);
        D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
      });
      D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function qa(a, b, c, d) {
        var e = D.hasOwnProperty(b) ? D[b] : null;
        var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
        f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
      }
      var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var sa = 60103;
      var ta = 60106;
      var ua = 60107;
      var wa = 60108;
      var xa = 60114;
      var ya = 60109;
      var za = 60110;
      var Aa = 60112;
      var Ba = 60113;
      var Ca = 60120;
      var Da = 60115;
      var Ea = 60116;
      var Fa = 60121;
      var Ga = 60128;
      var Ha = 60129;
      var Ia = 60130;
      var Ja = 60131;
      if (typeof Symbol === "function" && Symbol.for) {
        E = Symbol.for;
        sa = E("react.element");
        ta = E("react.portal");
        ua = E("react.fragment");
        wa = E("react.strict_mode");
        xa = E("react.profiler");
        ya = E("react.provider");
        za = E("react.context");
        Aa = E("react.forward_ref");
        Ba = E("react.suspense");
        Ca = E("react.suspense_list");
        Da = E("react.memo");
        Ea = E("react.lazy");
        Fa = E("react.block");
        E("react.scope");
        Ga = E("react.opaque.id");
        Ha = E("react.debug_trace_mode");
        Ia = E("react.offscreen");
        Ja = E("react.legacy_hidden");
      }
      var E;
      var Ka = typeof Symbol === "function" && Symbol.iterator;
      function La(a) {
        if (a === null || typeof a !== "object")
          return null;
        a = Ka && a[Ka] || a["@@iterator"];
        return typeof a === "function" ? a : null;
      }
      var Ma;
      function Na(a) {
        if (Ma === void 0)
          try {
            throw Error();
          } catch (c) {
            var b = c.stack.trim().match(/\n( *(at )?)/);
            Ma = b && b[1] || "";
          }
        return "\n" + Ma + a;
      }
      var Oa = false;
      function Pa(a, b) {
        if (!a || Oa)
          return "";
        Oa = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b)
            if (b = function() {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (k) {
                var d = k;
              }
              Reflect.construct(a, [], b);
            } else {
              try {
                b.call();
              } catch (k) {
                d = k;
              }
              a.call(b.prototype);
            }
          else {
            try {
              throw Error();
            } catch (k) {
              d = k;
            }
            a();
          }
        } catch (k) {
          if (k && d && typeof k.stack === "string") {
            for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
              h--;
            for (; 1 <= g && 0 <= h; g--, h--)
              if (e[g] !== f[h]) {
                if (g !== 1 || h !== 1) {
                  do
                    if (g--, h--, 0 > h || e[g] !== f[h])
                      return "\n" + e[g].replace(" at new ", " at ");
                  while (1 <= g && 0 <= h);
                }
                break;
              }
          }
        } finally {
          Oa = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
      }
      function Qa(a) {
        switch (a.tag) {
          case 5:
            return Na(a.type);
          case 16:
            return Na("Lazy");
          case 13:
            return Na("Suspense");
          case 19:
            return Na("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Pa(a.type, false), a;
          case 11:
            return a = Pa(a.type.render, false), a;
          case 22:
            return a = Pa(a.type._render, false), a;
          case 1:
            return a = Pa(a.type, true), a;
          default:
            return "";
        }
      }
      function Ra(a) {
        if (a == null)
          return null;
        if (typeof a === "function")
          return a.displayName || a.name || null;
        if (typeof a === "string")
          return a;
        switch (a) {
          case ua:
            return "Fragment";
          case ta:
            return "Portal";
          case xa:
            return "Profiler";
          case wa:
            return "StrictMode";
          case Ba:
            return "Suspense";
          case Ca:
            return "SuspenseList";
        }
        if (typeof a === "object")
          switch (a.$$typeof) {
            case za:
              return (a.displayName || "Context") + ".Consumer";
            case ya:
              return (a._context.displayName || "Context") + ".Provider";
            case Aa:
              var b = a.render;
              b = b.displayName || b.name || "";
              return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
            case Da:
              return Ra(a.type);
            case Fa:
              return Ra(a._render);
            case Ea:
              b = a._payload;
              a = a._init;
              try {
                return Ra(a(b));
              } catch (c) {
              }
          }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a)
          return false;
        var b = a._valueTracker;
        if (!b)
          return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || (typeof document !== "undefined" ? document : void 0);
        if (typeof a === "undefined")
          return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
        c = Sa(b.value != null ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
      }
      function $a(a, b) {
        b = b.checked;
        b != null && qa(a, "checked", b, false);
      }
      function ab(a, b) {
        $a(a, b);
        var c = Sa(b.value), d = b.type;
        if (c != null)
          if (d === "number") {
            if (c === 0 && a.value === "" || a.value != c)
              a.value = "" + c;
          } else
            a.value !== "" + c && (a.value = "" + c);
        else if (d === "submit" || d === "reset") {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
        b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
      }
      function cb(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
            return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        c !== "" && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        c !== "" && (a.name = c);
      }
      function bb(a, b, c) {
        if (b !== "number" || Xa(a.ownerDocument) !== a)
          c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      function db(a) {
        var b = "";
        aa.Children.forEach(a, function(a2) {
          a2 != null && (b += a2);
        });
        return b;
      }
      function eb(a, b) {
        a = m({ children: void 0 }, b);
        if (b = db(b.children))
          a.children = b;
        return a;
      }
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++)
            b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++)
            e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            b !== null || a[e].disabled || (b = a[e]);
          }
          b !== null && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (b.dangerouslySetInnerHTML != null)
          throw Error(y(91));
        return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (c == null) {
          c = b.children;
          b = b.defaultValue;
          if (c != null) {
            if (b != null)
              throw Error(y(92));
            if (Array.isArray(c)) {
              if (!(1 >= c.length))
                throw Error(y(93));
              c = c[0];
            }
            b = c;
          }
          b == null && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
        d != null && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
      }
      var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
      function lb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function mb(a, b) {
        return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
      }
      var nb;
      var ob = function(a) {
        return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if (a.namespaceURI !== kb.svg || "innerHTML" in a)
          a.innerHTML = b;
        else {
          nb = nb || document.createElement("div");
          nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = nb.firstChild; a.firstChild; )
            a.removeChild(a.firstChild);
          for (; b.firstChild; )
            a.appendChild(b.firstChild);
        }
      });
      function pb(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && c.nodeType === 3) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var qb = {
        animationIterationCount: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var rb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(qb).forEach(function(a) {
        rb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          qb[b] = qb[a];
        });
      });
      function sb(a, b, c) {
        return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
      }
      function tb(a, b) {
        a = a.style;
        for (var c in b)
          if (b.hasOwnProperty(c)) {
            var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
            c === "float" && (c = "cssFloat");
            d ? a.setProperty(c, e) : a[c] = e;
          }
      }
      var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function vb(a, b) {
        if (b) {
          if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
            throw Error(y(137, a));
          if (b.dangerouslySetInnerHTML != null) {
            if (b.children != null)
              throw Error(y(60));
            if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
              throw Error(y(61));
          }
          if (b.style != null && typeof b.style !== "object")
            throw Error(y(62));
        }
      }
      function wb(a, b) {
        if (a.indexOf("-") === -1)
          return typeof b.is === "string";
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return a.nodeType === 3 ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if (typeof yb !== "function")
            throw Error(y(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b)
            for (a = 0; a < b.length; a++)
              Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb(a, b, c, d, e) {
        return a(b, c, d, e);
      }
      function Ib() {
      }
      var Jb = Gb;
      var Kb = false;
      var Lb = false;
      function Mb() {
        if (zb !== null || Ab !== null)
          Ib(), Fb();
      }
      function Nb(a, b, c) {
        if (Lb)
          return a(b, c);
        Lb = true;
        try {
          return Jb(a, b, c);
        } finally {
          Lb = false, Mb();
        }
      }
      function Ob(a, b) {
        var c = a.stateNode;
        if (c === null)
          return null;
        var d = Db(c);
        if (d === null)
          return null;
        c = d[b];
        a:
          switch (b) {
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
              (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
              a = !d;
              break a;
            default:
              a = false;
          }
        if (a)
          return null;
        if (c && typeof c !== "function")
          throw Error(y(231, b, typeof c));
        return c;
      }
      var Pb = false;
      if (fa)
        try {
          Qb = {};
          Object.defineProperty(Qb, "passive", { get: function() {
            Pb = true;
          } });
          window.addEventListener("test", Qb, Qb);
          window.removeEventListener("test", Qb, Qb);
        } catch (a) {
          Pb = false;
        }
      var Qb;
      function Rb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (n) {
          this.onError(n);
        }
      }
      var Sb = false;
      var Tb = null;
      var Ub = false;
      var Vb = null;
      var Wb = { onError: function(a) {
        Sb = true;
        Tb = a;
      } };
      function Xb(a, b, c, d, e, f, g, h, k) {
        Sb = false;
        Tb = null;
        Rb.apply(Wb, arguments);
      }
      function Yb(a, b, c, d, e, f, g, h, k) {
        Xb.apply(this, arguments);
        if (Sb) {
          if (Sb) {
            var l = Tb;
            Sb = false;
            Tb = null;
          } else
            throw Error(y(198));
          Ub || (Ub = true, Vb = l);
        }
      }
      function Zb(a) {
        var b = a, c = a;
        if (a.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a = b;
          do
            b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
          while (a);
        }
        return b.tag === 3 ? c : null;
      }
      function $b(a) {
        if (a.tag === 13) {
          var b = a.memoizedState;
          b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
          if (b !== null)
            return b.dehydrated;
        }
        return null;
      }
      function ac(a) {
        if (Zb(a) !== a)
          throw Error(y(188));
      }
      function bc(a) {
        var b = a.alternate;
        if (!b) {
          b = Zb(a);
          if (b === null)
            throw Error(y(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (e === null)
            break;
          var f = e.alternate;
          if (f === null) {
            d = e.return;
            if (d !== null) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c)
                return ac(e), a;
              if (f === d)
                return ac(e), b;
              f = f.sibling;
            }
            throw Error(y(188));
          }
          if (c.return !== d.return)
            c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g)
                throw Error(y(189));
            }
          }
          if (c.alternate !== d)
            throw Error(y(190));
        }
        if (c.tag !== 3)
          throw Error(y(188));
        return c.stateNode.current === c ? a : b;
      }
      function cc(a) {
        a = bc(a);
        if (!a)
          return null;
        for (var b = a; ; ) {
          if (b.tag === 5 || b.tag === 6)
            return b;
          if (b.child)
            b.child.return = b, b = b.child;
          else {
            if (b === a)
              break;
            for (; !b.sibling; ) {
              if (!b.return || b.return === a)
                return null;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return null;
      }
      function dc(a, b) {
        for (var c = a.alternate; b !== null; ) {
          if (b === a || b === c)
            return true;
          b = b.return;
        }
        return false;
      }
      var ec;
      var fc;
      var gc;
      var hc;
      var ic = false;
      var jc = [];
      var kc = null;
      var lc = null;
      var mc = null;
      var nc = /* @__PURE__ */ new Map();
      var oc = /* @__PURE__ */ new Map();
      var pc = [];
      var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function rc(a, b, c, d, e) {
        return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
      }
      function sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            kc = null;
            break;
          case "dragenter":
          case "dragleave":
            lc = null;
            break;
          case "mouseover":
          case "mouseout":
            mc = null;
            break;
          case "pointerover":
          case "pointerout":
            nc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            oc.delete(b.pointerId);
        }
      }
      function tc(a, b, c, d, e, f) {
        if (a === null || a.nativeEvent !== f)
          return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        e !== null && b.indexOf(e) === -1 && b.push(e);
        return a;
      }
      function uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return kc = tc(kc, a, b, c, d, e), true;
          case "dragenter":
            return lc = tc(lc, a, b, c, d, e), true;
          case "mouseover":
            return mc = tc(mc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function vc(a) {
        var b = wc(a.target);
        if (b !== null) {
          var c = Zb(b);
          if (c !== null) {
            if (b = c.tag, b === 13) {
              if (b = $b(c), b !== null) {
                a.blockedOn = b;
                hc(a.lanePriority, function() {
                  r.unstable_runWithPriority(a.priority, function() {
                    gc(c);
                  });
                });
                return;
              }
            } else if (b === 3 && c.stateNode.hydrate) {
              a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function xc(a) {
        if (a.blockedOn !== null)
          return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (c !== null)
            return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function zc(a, b, c) {
        xc(a) && c.delete(b);
      }
      function Ac() {
        for (ic = false; 0 < jc.length; ) {
          var a = jc[0];
          if (a.blockedOn !== null) {
            a = Cb(a.blockedOn);
            a !== null && ec(a);
            break;
          }
          for (var b = a.targetContainers; 0 < b.length; ) {
            var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
            if (c !== null) {
              a.blockedOn = c;
              break;
            }
            b.shift();
          }
          a.blockedOn === null && jc.shift();
        }
        kc !== null && xc(kc) && (kc = null);
        lc !== null && xc(lc) && (lc = null);
        mc !== null && xc(mc) && (mc = null);
        nc.forEach(zc);
        oc.forEach(zc);
      }
      function Bc(a, b) {
        a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
      }
      function Cc(a) {
        function b(b2) {
          return Bc(b2, a);
        }
        if (0 < jc.length) {
          Bc(jc[0], a);
          for (var c = 1; c < jc.length; c++) {
            var d = jc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        kc !== null && Bc(kc, a);
        lc !== null && Bc(lc, a);
        mc !== null && Bc(mc, a);
        nc.forEach(b);
        oc.forEach(b);
        for (c = 0; c < pc.length; c++)
          d = pc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
          vc(c), c.blockedOn === null && pc.shift();
      }
      function Dc(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") };
      var Fc = {};
      var Gc = {};
      fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
      function Hc(a) {
        if (Fc[a])
          return Fc[a];
        if (!Ec[a])
          return a;
        var b = Ec[a], c;
        for (c in b)
          if (b.hasOwnProperty(c) && c in Gc)
            return Fc[a] = b[c];
        return a;
      }
      var Ic = Hc("animationend");
      var Jc = Hc("animationiteration");
      var Kc = Hc("animationstart");
      var Lc = Hc("transitionend");
      var Mc = /* @__PURE__ */ new Map();
      var Nc = /* @__PURE__ */ new Map();
      var Oc = [
        "abort",
        "abort",
        Ic,
        "animationEnd",
        Jc,
        "animationIteration",
        Kc,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        Lc,
        "transitionEnd",
        "waiting",
        "waiting"
      ];
      function Pc(a, b) {
        for (var c = 0; c < a.length; c += 2) {
          var d = a[c], e = a[c + 1];
          e = "on" + (e[0].toUpperCase() + e.slice(1));
          Nc.set(d, b);
          Mc.set(d, e);
          da(e, [d]);
        }
      }
      var Qc = r.unstable_now;
      Qc();
      var F = 8;
      function Rc(a) {
        if ((1 & a) !== 0)
          return F = 15, 1;
        if ((2 & a) !== 0)
          return F = 14, 2;
        if ((4 & a) !== 0)
          return F = 13, 4;
        var b = 24 & a;
        if (b !== 0)
          return F = 12, b;
        if ((a & 32) !== 0)
          return F = 11, 32;
        b = 192 & a;
        if (b !== 0)
          return F = 10, b;
        if ((a & 256) !== 0)
          return F = 9, 256;
        b = 3584 & a;
        if (b !== 0)
          return F = 8, b;
        if ((a & 4096) !== 0)
          return F = 7, 4096;
        b = 4186112 & a;
        if (b !== 0)
          return F = 6, b;
        b = 62914560 & a;
        if (b !== 0)
          return F = 5, b;
        if (a & 67108864)
          return F = 4, 67108864;
        if ((a & 134217728) !== 0)
          return F = 3, 134217728;
        b = 805306368 & a;
        if (b !== 0)
          return F = 2, b;
        if ((1073741824 & a) !== 0)
          return F = 1, 1073741824;
        F = 8;
        return a;
      }
      function Sc(a) {
        switch (a) {
          case 99:
            return 15;
          case 98:
            return 10;
          case 97:
          case 96:
            return 8;
          case 95:
            return 2;
          default:
            return 0;
        }
      }
      function Tc(a) {
        switch (a) {
          case 15:
          case 14:
            return 99;
          case 13:
          case 12:
          case 11:
          case 10:
            return 98;
          case 9:
          case 8:
          case 7:
          case 6:
          case 4:
          case 5:
            return 97;
          case 3:
          case 2:
          case 1:
            return 95;
          case 0:
            return 90;
          default:
            throw Error(y(358, a));
        }
      }
      function Uc(a, b) {
        var c = a.pendingLanes;
        if (c === 0)
          return F = 0;
        var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
        if (f !== 0)
          d = f, e = F = 15;
        else if (f = c & 134217727, f !== 0) {
          var k = f & ~g;
          k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
        } else
          f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
        if (d === 0)
          return 0;
        d = 31 - Vc(d);
        d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
        if (b !== 0 && b !== d && (b & g) === 0) {
          Rc(b);
          if (e <= F)
            return b;
          F = e;
        }
        b = a.entangledLanes;
        if (b !== 0)
          for (a = a.entanglements, b &= d; 0 < b; )
            c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function Wc(a) {
        a = a.pendingLanes & -1073741825;
        return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function Xc(a, b) {
        switch (a) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
          case 10:
            return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
          case 8:
            return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
          case 2:
            return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
        }
        throw Error(y(358, a));
      }
      function Yc(a) {
        return a & -a;
      }
      function Zc(a) {
        for (var b = [], c = 0; 31 > c; c++)
          b.push(a);
        return b;
      }
      function $c(a, b, c) {
        a.pendingLanes |= b;
        var d = b - 1;
        a.suspendedLanes &= d;
        a.pingedLanes &= d;
        a = a.eventTimes;
        b = 31 - Vc(b);
        a[b] = c;
      }
      var Vc = Math.clz32 ? Math.clz32 : ad;
      var bd = Math.log;
      var cd = Math.LN2;
      function ad(a) {
        return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
      }
      var dd = r.unstable_UserBlockingPriority;
      var ed = r.unstable_runWithPriority;
      var fd = true;
      function gd(a, b, c, d) {
        Kb || Ib();
        var e = hd, f = Kb;
        Kb = true;
        try {
          Hb(e, a, b, c, d);
        } finally {
          (Kb = f) || Mb();
        }
      }
      function id(a, b, c, d) {
        ed(dd, hd.bind(null, a, b, c, d));
      }
      function hd(a, b, c, d) {
        if (fd) {
          var e;
          if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
            a = rc(null, a, b, c, d), jc.push(a);
          else {
            var f = yc(a, b, c, d);
            if (f === null)
              e && sc(a, d);
            else {
              if (e) {
                if (-1 < qc.indexOf(a)) {
                  a = rc(f, a, b, c, d);
                  jc.push(a);
                  return;
                }
                if (uc(f, a, b, c, d))
                  return;
                sc(a, d);
              }
              jd(a, b, d, null, c);
            }
          }
        }
      }
      function yc(a, b, c, d) {
        var e = xb(d);
        e = wc(e);
        if (e !== null) {
          var f = Zb(e);
          if (f === null)
            e = null;
          else {
            var g = f.tag;
            if (g === 13) {
              e = $b(f);
              if (e !== null)
                return e;
              e = null;
            } else if (g === 3) {
              if (f.stateNode.hydrate)
                return f.tag === 3 ? f.stateNode.containerInfo : null;
              e = null;
            } else
              f !== e && (e = null);
          }
        }
        jd(a, b, d, e, c);
        return null;
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md)
          return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++)
          ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
          ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
        a === 10 && (a = 13);
        return 32 <= a || a === 13 ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a)
            a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        m(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = m({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a)
          return a.movementX;
        a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = m({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = m({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = m({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = m({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = m({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if (b !== "Unidentified")
            return b;
        }
        return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return a.type === "keypress" ? od(a) : 0;
      }, keyCode: function(a) {
        return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
      }, which: function(a) {
        return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = m({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = fa && "CompositionEvent" in window;
      var be = null;
      fa && "documentMode" in document && (be = document.documentMode);
      var ce = fa && "TextEvent" in window && !be;
      var de = fa && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return $d.indexOf(b.keyCode) !== -1;
          case "keydown":
            return b.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return typeof a === "object" && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (b.which !== 32)
              return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie)
          return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && b.locale !== "ko" ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b))
          return a;
      }
      function ve(a, b) {
        if (a === "change")
          return b;
      }
      var we = false;
      if (fa) {
        if (fa) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = typeof ze.oninput === "function";
          }
          xe = ye;
        } else
          xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if (a.propertyName === "value" && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          a = re;
          if (Kb)
            a(b);
          else {
            Kb = true;
            try {
              Gb(a, b);
            } finally {
              Kb = false, Mb();
            }
          }
        }
      }
      function Ce(a, b, c) {
        a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
      }
      function De(a) {
        if (a === "selectionchange" || a === "keyup" || a === "keydown")
          return te(qe);
      }
      function Ee(a, b) {
        if (a === "click")
          return te(b);
      }
      function Fe(a, b) {
        if (a === "input" || a === "change")
          return te(b);
      }
      function Ge(a, b) {
        return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = typeof Object.is === "function" ? Object.is : Ge;
      var Ie = Object.prototype.hasOwnProperty;
      function Je(a, b) {
        if (He(a, b))
          return true;
        if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
          return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length)
          return false;
        for (d = 0; d < c.length; d++)
          if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
            return false;
        return true;
      }
      function Ke(a) {
        for (; a && a.firstChild; )
          a = a.firstChild;
        return a;
      }
      function Le(a, b) {
        var c = Ke(a);
        a = 0;
        for (var d; c; ) {
          if (c.nodeType === 3) {
            d = a + c.textContent.length;
            if (a <= b && d >= b)
              return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Ke(c);
        }
      }
      function Me(a, b) {
        return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Ne() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = typeof b.contentWindow.location.href === "string";
          } catch (d) {
            c = false;
          }
          if (c)
            a = b.contentWindow;
          else
            break;
          b = Xa(a.document);
        }
        return b;
      }
      function Oe(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
      }
      var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
        Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
      Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
      Pc(Oc, 2);
      for (Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
        Nc.set(Ve[We], 0);
      var Ve;
      var We;
      ea("onMouseEnter", ["mouseout", "mouseover"]);
      ea("onMouseLeave", ["mouseout", "mouseover"]);
      ea("onPointerEnter", ["pointerout", "pointerover"]);
      ea("onPointerLeave", ["pointerout", "pointerover"]);
      da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
      function Ze(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Yb(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = (b & 4) !== 0;
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b)
              for (var g = d.length - 1; 0 <= g; g--) {
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                Ze(e, h, l);
                f = k;
              }
            else
              for (g = 0; g < d.length; g++) {
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                Ze(e, h, l);
                f = k;
              }
          }
        }
        if (Ub)
          throw a = Vb, Ub = false, Vb = null, a;
      }
      function G(a, b) {
        var c = $e(b), d = a + "__bubble";
        c.has(d) || (af(b, a, 2, false), c.add(d));
      }
      var bf = "_reactListening" + Math.random().toString(36).slice(2);
      function cf(a) {
        a[bf] || (a[bf] = true, ba.forEach(function(b) {
          Ye.has(b) || df(b, false, a, null);
          df(b, true, a, null);
        }));
      }
      function df(a, b, c, d) {
        var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
        a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
        if (d !== null && !b && Ye.has(a)) {
          if (a !== "scroll")
            return;
          e |= 2;
          f = d;
        }
        var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
        g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
      }
      function af(a, b, c, d) {
        var e = Nc.get(b);
        switch (e === void 0 ? 2 : e) {
          case 0:
            e = gd;
            break;
          case 1:
            e = id;
            break;
          default:
            e = hd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
        d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function jd(a, b, c, d, e) {
        var f = d;
        if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
          a:
            for (; ; ) {
              if (d === null)
                return;
              var g = d.tag;
              if (g === 3 || g === 4) {
                var h = d.stateNode.containerInfo;
                if (h === e || h.nodeType === 8 && h.parentNode === e)
                  break;
                if (g === 4)
                  for (g = d.return; g !== null; ) {
                    var k = g.tag;
                    if (k === 3 || k === 4) {
                      if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                        return;
                    }
                    g = g.return;
                  }
                for (; h !== null; ) {
                  g = wc(h);
                  if (g === null)
                    return;
                  k = g.tag;
                  if (k === 5 || k === 6) {
                    d = f = g;
                    continue a;
                  }
                  h = h.parentNode;
                }
              }
              d = d.return;
            }
        Nb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = Mc.get(a);
            if (h2 !== void 0) {
              var k2 = td, x = a;
              switch (a) {
                case "keypress":
                  if (od(c) === 0)
                    break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  x = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  x = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (c.button === 2)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case Ic:
                case Jc:
                case Kc:
                  k2 = Hd;
                  break;
                case Lc:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
              w = [];
              for (var t = d2, q; t !== null; ) {
                q = t;
                var v = q.stateNode;
                q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
                if (z)
                  break;
                t = t.return;
              }
              0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({ event: h2, listeners: w }));
            }
          }
          if ((b & 7) === 0) {
            a: {
              h2 = a === "mouseover" || a === "pointerover";
              k2 = a === "mouseout" || a === "pointerout";
              if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
                break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
                    x = null;
                } else
                  k2 = null, x = d2;
                if (k2 !== x) {
                  w = Bd;
                  v = "onMouseLeave";
                  u = "onMouseEnter";
                  t = "mouse";
                  if (a === "pointerout" || a === "pointerover")
                    w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
                  z = k2 == null ? h2 : ue(k2);
                  q = x == null ? h2 : ue(x);
                  h2 = new w(v, t + "leave", k2, c, e2);
                  h2.target = z;
                  h2.relatedTarget = q;
                  v = null;
                  wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
                  z = v;
                  if (k2 && x)
                    b: {
                      w = k2;
                      u = x;
                      t = 0;
                      for (q = w; q; q = gf(q))
                        t++;
                      q = 0;
                      for (v = u; v; v = gf(v))
                        q++;
                      for (; 0 < t - q; )
                        w = gf(w), t--;
                      for (; 0 < q - t; )
                        u = gf(u), q--;
                      for (; t--; ) {
                        if (w === u || u !== null && w === u.alternate)
                          break b;
                        w = gf(w);
                        u = gf(u);
                      }
                      w = null;
                    }
                  else
                    w = null;
                  k2 !== null && hf(g2, h2, k2, w, false);
                  x !== null && z !== null && hf(g2, z, x, w, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if (k2 === "select" || k2 === "input" && h2.type === "file")
                var J = ve;
              else if (me(h2))
                if (we)
                  J = Fe;
                else {
                  J = De;
                  var K = Ce;
                }
              else
                (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
              if (J && (J = J(a, d2))) {
                ne(g2, J, c, e2);
                break a;
              }
              K && K(a, h2, d2);
              a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
            }
            K = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(K) || K.contentEditable === "true")
                  Qe = K, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe)
                  break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var Q;
            if (ae)
              b: {
                switch (a) {
                  case "compositionstart":
                    var L = "onCompositionStart";
                    break b;
                  case "compositionend":
                    L = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    L = "onCompositionUpdate";
                    break b;
                }
                L = void 0;
              }
            else
              ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
            L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({ event: L, listeners: K }), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
            if (Q = ce ? je(a, c) : ke(a, c))
              d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = Q);
          }
          se(g2, b);
        });
      }
      function ef(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; a !== null; ) {
          var e = a, f = e.stateNode;
          e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function gf(a) {
        if (a === null)
          return null;
        do
          a = a.return;
        while (a && a.tag !== 5);
        return a ? a : null;
      }
      function hf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; c !== null && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (k !== null && k === d)
            break;
          h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
          c = c.return;
        }
        g.length !== 0 && a.push({ event: b, listeners: g });
      }
      function jf() {
      }
      var kf = null;
      var lf = null;
      function mf(a, b) {
        switch (a) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!b.autoFocus;
        }
        return false;
      }
      function nf(a, b) {
        return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
      }
      var of = typeof setTimeout === "function" ? setTimeout : void 0;
      var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
      function qf(a) {
        a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
      }
      function rf(a) {
        for (; a != null; a = a.nextSibling) {
          var b = a.nodeType;
          if (b === 1 || b === 3)
            break;
        }
        return a;
      }
      function sf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (a.nodeType === 8) {
            var c = a.data;
            if (c === "$" || c === "$!" || c === "$?") {
              if (b === 0)
                return a;
              b--;
            } else
              c === "/$" && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var tf = 0;
      function uf(a) {
        return { $$typeof: Ga, toString: a, valueOf: a };
      }
      var vf = Math.random().toString(36).slice(2);
      var wf = "__reactFiber$" + vf;
      var xf = "__reactProps$" + vf;
      var ff = "__reactContainer$" + vf;
      var yf = "__reactEvents$" + vf;
      function wc(a) {
        var b = a[wf];
        if (b)
          return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[ff] || c[wf]) {
            c = b.alternate;
            if (b.child !== null || c !== null && c.child !== null)
              for (a = sf(a); a !== null; ) {
                if (c = a[wf])
                  return c;
                a = sf(a);
              }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[wf] || a[ff];
        return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
      }
      function ue(a) {
        if (a.tag === 5 || a.tag === 6)
          return a.stateNode;
        throw Error(y(33));
      }
      function Db(a) {
        return a[xf] || null;
      }
      function $e(a) {
        var b = a[yf];
        b === void 0 && (b = a[yf] = /* @__PURE__ */ new Set());
        return b;
      }
      var zf = [];
      var Af = -1;
      function Bf(a) {
        return { current: a };
      }
      function H(a) {
        0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
      }
      function I(a, b) {
        Af++;
        zf[Af] = a.current;
        a.current = b;
      }
      var Cf = {};
      var M = Bf(Cf);
      var N = Bf(false);
      var Df = Cf;
      function Ef(a, b) {
        var c = a.type.contextTypes;
        if (!c)
          return Cf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c)
          e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Ff(a) {
        a = a.childContextTypes;
        return a !== null && a !== void 0;
      }
      function Gf() {
        H(N);
        H(M);
      }
      function Hf(a, b, c) {
        if (M.current !== Cf)
          throw Error(y(168));
        I(M, b);
        I(N, c);
      }
      function If(a, b, c) {
        var d = a.stateNode;
        a = b.childContextTypes;
        if (typeof d.getChildContext !== "function")
          return c;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in a))
            throw Error(y(108, Ra(b) || "Unknown", e));
        return m({}, c, d);
      }
      function Jf(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
        Df = M.current;
        I(M, a);
        I(N, N.current);
        return true;
      }
      function Kf(a, b, c) {
        var d = a.stateNode;
        if (!d)
          throw Error(y(169));
        c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
        I(N, c);
      }
      var Lf = null;
      var Mf = null;
      var Nf = r.unstable_runWithPriority;
      var Of = r.unstable_scheduleCallback;
      var Pf = r.unstable_cancelCallback;
      var Qf = r.unstable_shouldYield;
      var Rf = r.unstable_requestPaint;
      var Sf = r.unstable_now;
      var Tf = r.unstable_getCurrentPriorityLevel;
      var Uf = r.unstable_ImmediatePriority;
      var Vf = r.unstable_UserBlockingPriority;
      var Wf = r.unstable_NormalPriority;
      var Xf = r.unstable_LowPriority;
      var Yf = r.unstable_IdlePriority;
      var Zf = {};
      var $f = Rf !== void 0 ? Rf : function() {
      };
      var ag = null;
      var bg = null;
      var cg = false;
      var dg = Sf();
      var O = 1e4 > dg ? Sf : function() {
        return Sf() - dg;
      };
      function eg() {
        switch (Tf()) {
          case Uf:
            return 99;
          case Vf:
            return 98;
          case Wf:
            return 97;
          case Xf:
            return 96;
          case Yf:
            return 95;
          default:
            throw Error(y(332));
        }
      }
      function fg(a) {
        switch (a) {
          case 99:
            return Uf;
          case 98:
            return Vf;
          case 97:
            return Wf;
          case 96:
            return Xf;
          case 95:
            return Yf;
          default:
            throw Error(y(332));
        }
      }
      function gg(a, b) {
        a = fg(a);
        return Nf(a, b);
      }
      function hg(a, b, c) {
        a = fg(a);
        return Of(a, b, c);
      }
      function ig() {
        if (bg !== null) {
          var a = bg;
          bg = null;
          Pf(a);
        }
        jg();
      }
      function jg() {
        if (!cg && ag !== null) {
          cg = true;
          var a = 0;
          try {
            var b = ag;
            gg(99, function() {
              for (; a < b.length; a++) {
                var c = b[a];
                do
                  c = c(true);
                while (c !== null);
              }
            });
            ag = null;
          } catch (c) {
            throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
          } finally {
            cg = false;
          }
        }
      }
      var kg = ra.ReactCurrentBatchConfig;
      function lg(a, b) {
        if (a && a.defaultProps) {
          b = m({}, b);
          a = a.defaultProps;
          for (var c in a)
            b[c] === void 0 && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      var mg = Bf(null);
      var ng = null;
      var og = null;
      var pg = null;
      function qg() {
        pg = og = ng = null;
      }
      function rg(a) {
        var b = mg.current;
        H(mg);
        a.type._context._currentValue = b;
      }
      function sg(a, b) {
        for (; a !== null; ) {
          var c = a.alternate;
          if ((a.childLanes & b) === b)
            if (c === null || (c.childLanes & b) === b)
              break;
            else
              c.childLanes |= b;
          else
            a.childLanes |= b, c !== null && (c.childLanes |= b);
          a = a.return;
        }
      }
      function tg(a, b) {
        ng = a;
        pg = og = null;
        a = a.dependencies;
        a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
      }
      function vg(a, b) {
        if (pg !== a && b !== false && b !== 0) {
          if (typeof b !== "number" || b === 1073741823)
            pg = a, b = 1073741823;
          b = { context: a, observedBits: b, next: null };
          if (og === null) {
            if (ng === null)
              throw Error(y(308));
            og = b;
            ng.dependencies = { lanes: 0, firstContext: b, responders: null };
          } else
            og = og.next = b;
        }
        return a._currentValue;
      }
      var wg = false;
      function xg(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
      }
      function yg(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function zg(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function Ag(a, b) {
        a = a.updateQueue;
        if (a !== null) {
          a = a.shared;
          var c = a.pending;
          c === null ? b.next = b : (b.next = c.next, c.next = b);
          a.pending = b;
        }
      }
      function Bg(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (d !== null && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (c !== null) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              f === null ? e = f = g : f = f.next = g;
              c = c.next;
            } while (c !== null);
            f === null ? e = f = b : f = f.next = b;
          } else
            e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        a === null ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function Cg(a, b, c, d) {
        var e = a.updateQueue;
        wg = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (h !== null) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          g === null ? f = l : g.next = l;
          g = k;
          var n = a.alternate;
          if (n !== null) {
            n = n.updateQueue;
            var A = n.lastBaseUpdate;
            A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
          }
        }
        if (f !== null) {
          A = e.baseState;
          g = 0;
          n = l = k = null;
          do {
            h = f.lane;
            var p = f.eventTime;
            if ((d & h) === h) {
              n !== null && (n = n.next = {
                eventTime: p,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null
              });
              a: {
                var C = a, x = f;
                h = b;
                p = c;
                switch (x.tag) {
                  case 1:
                    C = x.payload;
                    if (typeof C === "function") {
                      A = C.call(p, A, h);
                      break a;
                    }
                    A = C;
                    break a;
                  case 3:
                    C.flags = C.flags & -4097 | 64;
                  case 0:
                    C = x.payload;
                    h = typeof C === "function" ? C.call(p, A, h) : C;
                    if (h === null || h === void 0)
                      break a;
                    A = m({}, A, h);
                    break a;
                  case 2:
                    wg = true;
                }
              }
              f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
            } else
              p = { eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
            f = f.next;
            if (f === null)
              if (h = e.shared.pending, h === null)
                break;
              else
                f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
          } while (1);
          n === null && (k = A);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = n;
          Dg |= g;
          a.lanes = g;
          a.memoizedState = A;
        }
      }
      function Eg(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (a !== null)
          for (b = 0; b < a.length; b++) {
            var d = a[b], e = d.callback;
            if (e !== null) {
              d.callback = null;
              d = c;
              if (typeof e !== "function")
                throw Error(y(191, e));
              e.call(d);
            }
          }
      }
      var Fg = new aa.Component().refs;
      function Gg(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = c === null || c === void 0 ? b : m({}, b, c);
        a.memoizedState = c;
        a.lanes === 0 && (a.updateQueue.baseState = c);
      }
      var Kg = { isMounted: function(a) {
        return (a = a._reactInternals) ? Zb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = Hg(), e = Ig(a), f = zg(d, e);
        f.payload = b;
        c !== void 0 && c !== null && (f.callback = c);
        Ag(a, f);
        Jg(a, e, d);
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = Hg(), e = Ig(a), f = zg(d, e);
        f.tag = 1;
        f.payload = b;
        c !== void 0 && c !== null && (f.callback = c);
        Ag(a, f);
        Jg(a, e, d);
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = Hg(), d = Ig(a), e = zg(c, d);
        e.tag = 2;
        b !== void 0 && b !== null && (e.callback = b);
        Ag(a, e);
        Jg(a, d, c);
      } };
      function Lg(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
      }
      function Mg(a, b, c) {
        var d = false, e = Cf;
        var f = b.contextType;
        typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
        b = new b(c, f);
        a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
        b.updater = Kg;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Ng(a, b, c, d) {
        a = b.state;
        typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
        typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
      }
      function Og(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = Fg;
        xg(a);
        var f = b.contextType;
        typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
        Cg(a, c, e, d);
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
        typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
        typeof e.componentDidMount === "function" && (a.flags |= 4);
      }
      var Pg = Array.isArray;
      function Qg(a, b, c) {
        a = c.ref;
        if (a !== null && typeof a !== "function" && typeof a !== "object") {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (c.tag !== 1)
                throw Error(y(309));
              var d = c.stateNode;
            }
            if (!d)
              throw Error(y(147, a));
            var e = "" + a;
            if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
              return b.ref;
            b = function(a2) {
              var b2 = d.refs;
              b2 === Fg && (b2 = d.refs = {});
              a2 === null ? delete b2[e] : b2[e] = a2;
            };
            b._stringRef = e;
            return b;
          }
          if (typeof a !== "string")
            throw Error(y(284));
          if (!c._owner)
            throw Error(y(290, a));
        }
        return a;
      }
      function Rg(a, b) {
        if (a.type !== "textarea")
          throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
      }
      function Sg(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.lastEffect;
            d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
            c2.nextEffect = null;
            c2.flags = 8;
          }
        }
        function c(c2, d2) {
          if (!a)
            return null;
          for (; d2 !== null; )
            b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); b2 !== null; )
            b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Tg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a)
            return c2;
          d2 = b2.alternate;
          if (d2 !== null)
            return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
          b2.flags = 2;
          return c2;
        }
        function g(b2) {
          a && b2.alternate === null && (b2.flags = 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (b2 === null || b2.tag !== 6)
            return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          if (b2 !== null && b2.elementType === c2.type)
            return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
          d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Qg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
            return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function n(a2, b2, c2, d2, f2) {
          if (b2 === null || b2.tag !== 7)
            return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function A(a2, b2, c2) {
          if (typeof b2 === "string" || typeof b2 === "number")
            return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
          if (typeof b2 === "object" && b2 !== null) {
            switch (b2.$$typeof) {
              case sa:
                return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
              case ta:
                return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
            }
            if (Pg(b2) || La(b2))
              return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Rg(a2, b2);
          }
          return null;
        }
        function p(a2, b2, c2, d2) {
          var e2 = b2 !== null ? b2.key : null;
          if (typeof c2 === "string" || typeof c2 === "number")
            return e2 !== null ? null : h(a2, b2, "" + c2, d2);
          if (typeof c2 === "object" && c2 !== null) {
            switch (c2.$$typeof) {
              case sa:
                return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
              case ta:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            }
            if (Pg(c2) || La(c2))
              return e2 !== null ? null : n(a2, b2, c2, d2, null);
            Rg(a2, c2);
          }
          return null;
        }
        function C(a2, b2, c2, d2, e2) {
          if (typeof d2 === "string" || typeof d2 === "number")
            return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if (typeof d2 === "object" && d2 !== null) {
            switch (d2.$$typeof) {
              case sa:
                return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
              case ta:
                return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            }
            if (Pg(d2) || La(d2))
              return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
            Rg(b2, d2);
          }
          return null;
        }
        function x(e2, g2, h2, k2) {
          for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
            u.index > z ? (q = u, u = null) : q = u.sibling;
            var n2 = p(e2, u, h2[z], k2);
            if (n2 === null) {
              u === null && (u = q);
              break;
            }
            a && u && n2.alternate === null && b(e2, u);
            g2 = f(n2, g2, z);
            t === null ? l2 = n2 : t.sibling = n2;
            t = n2;
            u = q;
          }
          if (z === h2.length)
            return c(e2, u), l2;
          if (u === null) {
            for (; z < h2.length; z++)
              u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
            return l2;
          }
          for (u = d(e2, u); z < h2.length; z++)
            q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          return l2;
        }
        function w(e2, g2, h2, k2) {
          var l2 = La(h2);
          if (typeof l2 !== "function")
            throw Error(y(150));
          h2 = l2.call(h2);
          if (h2 == null)
            throw Error(y(151));
          for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
            u.index > z ? (q = u, u = null) : q = u.sibling;
            var w2 = p(e2, u, n2.value, k2);
            if (w2 === null) {
              u === null && (u = q);
              break;
            }
            a && u && w2.alternate === null && b(e2, u);
            g2 = f(w2, g2, z);
            t === null ? l2 = w2 : t.sibling = w2;
            t = w2;
            u = q;
          }
          if (n2.done)
            return c(e2, u), l2;
          if (u === null) {
            for (; !n2.done; z++, n2 = h2.next())
              n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
            return l2;
          }
          for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
            n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          return l2;
        }
        return function(a2, d2, f2, h2) {
          var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
          k2 && (f2 = f2.props.children);
          var l2 = typeof f2 === "object" && f2 !== null;
          if (l2)
            switch (f2.$$typeof) {
              case sa:
                a: {
                  l2 = f2.key;
                  for (k2 = d2; k2 !== null; ) {
                    if (k2.key === l2) {
                      switch (k2.tag) {
                        case 7:
                          if (f2.type === ua) {
                            c(a2, k2.sibling);
                            d2 = e(k2, f2.props.children);
                            d2.return = a2;
                            a2 = d2;
                            break a;
                          }
                          break;
                        default:
                          if (k2.elementType === f2.type) {
                            c(a2, k2.sibling);
                            d2 = e(k2, f2.props);
                            d2.ref = Qg(a2, k2, f2);
                            d2.return = a2;
                            a2 = d2;
                            break a;
                          }
                      }
                      c(a2, k2);
                      break;
                    } else
                      b(a2, k2);
                    k2 = k2.sibling;
                  }
                  f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case ta:
                a: {
                  for (k2 = f2.key; d2 !== null; ) {
                    if (d2.key === k2)
                      if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                        c(a2, d2.sibling);
                        d2 = e(d2, f2.children || []);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      } else {
                        c(a2, d2);
                        break;
                      }
                    else
                      b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Wg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
            }
          if (typeof f2 === "string" || typeof f2 === "number")
            return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
          if (Pg(f2))
            return x(a2, d2, f2, h2);
          if (La(f2))
            return w(a2, d2, f2, h2);
          l2 && Rg(a2, f2);
          if (typeof f2 === "undefined" && !k2)
            switch (a2.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(y(152, Ra(a2.type) || "Component"));
            }
          return c(a2, d2);
        };
      }
      var Yg = Sg(true);
      var Zg = Sg(false);
      var $g = {};
      var ah = Bf($g);
      var bh = Bf($g);
      var ch = Bf($g);
      function dh(a) {
        if (a === $g)
          throw Error(y(174));
        return a;
      }
      function eh(a, b) {
        I(ch, b);
        I(bh, a);
        I(ah, $g);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
            break;
          default:
            a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
        }
        H(ah);
        I(ah, b);
      }
      function fh() {
        H(ah);
        H(bh);
        H(ch);
      }
      function gh(a) {
        dh(ch.current);
        var b = dh(ah.current);
        var c = mb(b, a.type);
        b !== c && (I(bh, a), I(ah, c));
      }
      function hh(a) {
        bh.current === a && (H(ah), H(bh));
      }
      var P = Bf(0);
      function ih(a) {
        for (var b = a; b !== null; ) {
          if (b.tag === 13) {
            var c = b.memoizedState;
            if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
              return b;
          } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
            if ((b.flags & 64) !== 0)
              return b;
          } else if (b.child !== null) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a)
            break;
          for (; b.sibling === null; ) {
            if (b.return === null || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var jh = null;
      var kh = null;
      var lh = false;
      function mh(a, b) {
        var c = nh(5, null, null, 0);
        c.elementType = "DELETED";
        c.type = "DELETED";
        c.stateNode = b;
        c.return = a;
        c.flags = 8;
        a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
      }
      function oh(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return b !== null ? (a.stateNode = b, true) : false;
          case 6:
            return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
          case 13:
            return false;
          default:
            return false;
        }
      }
      function ph(a) {
        if (lh) {
          var b = kh;
          if (b) {
            var c = b;
            if (!oh(a, b)) {
              b = rf(c.nextSibling);
              if (!b || !oh(a, b)) {
                a.flags = a.flags & -1025 | 2;
                lh = false;
                jh = a;
                return;
              }
              mh(jh, c);
            }
            jh = a;
            kh = rf(b.firstChild);
          } else
            a.flags = a.flags & -1025 | 2, lh = false, jh = a;
        }
      }
      function qh(a) {
        for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
          a = a.return;
        jh = a;
      }
      function rh(a) {
        if (a !== jh)
          return false;
        if (!lh)
          return qh(a), lh = true, false;
        var b = a.type;
        if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
          for (b = kh; b; )
            mh(a, b), b = rf(b.nextSibling);
        qh(a);
        if (a.tag === 13) {
          a = a.memoizedState;
          a = a !== null ? a.dehydrated : null;
          if (!a)
            throw Error(y(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (a.nodeType === 8) {
                var c = a.data;
                if (c === "/$") {
                  if (b === 0) {
                    kh = rf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  c !== "$" && c !== "$!" && c !== "$?" || b++;
              }
              a = a.nextSibling;
            }
            kh = null;
          }
        } else
          kh = jh ? rf(a.stateNode.nextSibling) : null;
        return true;
      }
      function sh() {
        kh = jh = null;
        lh = false;
      }
      var th = [];
      function uh() {
        for (var a = 0; a < th.length; a++)
          th[a]._workInProgressVersionPrimary = null;
        th.length = 0;
      }
      var vh = ra.ReactCurrentDispatcher;
      var wh = ra.ReactCurrentBatchConfig;
      var xh = 0;
      var R = null;
      var S = null;
      var T = null;
      var yh = false;
      var zh = false;
      function Ah() {
        throw Error(y(321));
      }
      function Bh(a, b) {
        if (b === null)
          return false;
        for (var c = 0; c < b.length && c < a.length; c++)
          if (!He(a[c], b[c]))
            return false;
        return true;
      }
      function Ch(a, b, c, d, e, f) {
        xh = f;
        R = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        vh.current = a === null || a.memoizedState === null ? Dh : Eh;
        a = c(d, e);
        if (zh) {
          f = 0;
          do {
            zh = false;
            if (!(25 > f))
              throw Error(y(301));
            f += 1;
            T = S = null;
            b.updateQueue = null;
            vh.current = Fh;
            a = c(d, e);
          } while (zh);
        }
        vh.current = Gh;
        b = S !== null && S.next !== null;
        xh = 0;
        T = S = R = null;
        yh = false;
        if (b)
          throw Error(y(300));
        return a;
      }
      function Hh() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        T === null ? R.memoizedState = T = a : T = T.next = a;
        return T;
      }
      function Ih() {
        if (S === null) {
          var a = R.alternate;
          a = a !== null ? a.memoizedState : null;
        } else
          a = S.next;
        var b = T === null ? R.memoizedState : T.next;
        if (b !== null)
          T = b, S = a;
        else {
          if (a === null)
            throw Error(y(310));
          S = a;
          a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
          T === null ? R.memoizedState = T = a : T = T.next = a;
        }
        return T;
      }
      function Jh(a, b) {
        return typeof b === "function" ? b(a) : b;
      }
      function Kh(a) {
        var b = Ih(), c = b.queue;
        if (c === null)
          throw Error(y(311));
        c.lastRenderedReducer = a;
        var d = S, e = d.baseQueue, f = c.pending;
        if (f !== null) {
          if (e !== null) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (e !== null) {
          e = e.next;
          d = d.baseState;
          var h = g = f = null, k = e;
          do {
            var l = k.lane;
            if ((xh & l) === l)
              h !== null && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
            else {
              var n = {
                lane: l,
                action: k.action,
                eagerReducer: k.eagerReducer,
                eagerState: k.eagerState,
                next: null
              };
              h === null ? (g = h = n, f = d) : h = h.next = n;
              R.lanes |= l;
              Dg |= l;
            }
            k = k.next;
          } while (k !== null && k !== e);
          h === null ? f = d : h.next = g;
          He(d, b.memoizedState) || (ug = true);
          b.memoizedState = d;
          b.baseState = f;
          b.baseQueue = h;
          c.lastRenderedState = d;
        }
        return [b.memoizedState, c.dispatch];
      }
      function Lh(a) {
        var b = Ih(), c = b.queue;
        if (c === null)
          throw Error(y(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (e !== null) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (ug = true);
          b.memoizedState = f;
          b.baseQueue === null && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Mh(a, b, c) {
        var d = b._getVersion;
        d = d(b._source);
        var e = b._workInProgressVersionPrimary;
        if (e !== null)
          a = e === d;
        else if (a = a.mutableReadLanes, a = (xh & a) === a)
          b._workInProgressVersionPrimary = d, th.push(b);
        if (a)
          return c(b._source);
        th.push(b);
        throw Error(y(350));
      }
      function Nh(a, b, c, d) {
        var e = U;
        if (e === null)
          throw Error(y(349));
        var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
          return Mh(e, b, c);
        }), l = k[1], n = k[0];
        k = T;
        var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
        A = A.subscribe;
        var w = R;
        a.memoizedState = { refs: p, source: b, subscribe: d };
        h.useEffect(function() {
          p.getSnapshot = c;
          p.setSnapshot = l;
          var a2 = f(b._source);
          if (!He(g, a2)) {
            a2 = c(b._source);
            He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
            a2 = e.mutableReadLanes;
            e.entangledLanes |= a2;
            for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
              var k2 = 31 - Vc(h2), v = 1 << k2;
              d2[k2] |= a2;
              h2 &= ~v;
            }
          }
        }, [c, b, d]);
        h.useEffect(function() {
          return d(b._source, function() {
            var a2 = p.getSnapshot, c2 = p.setSnapshot;
            try {
              c2(a2(b._source));
              var d2 = Ig(w);
              e.mutableReadLanes |= d2 & e.pendingLanes;
            } catch (q) {
              c2(function() {
                throw q;
              });
            }
          });
        }, [b, d]);
        He(C, c) && He(x, b) && He(A, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
        return n;
      }
      function Ph(a, b, c) {
        var d = Ih();
        return Nh(d, a, b, c);
      }
      function Qh(a) {
        var b = Hh();
        typeof a === "function" && (a = a());
        b.memoizedState = b.baseState = a;
        a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
        a = a.dispatch = Oh.bind(null, R, a);
        return [b.memoizedState, a];
      }
      function Rh(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = R.updateQueue;
        b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function Sh(a) {
        var b = Hh();
        a = { current: a };
        return b.memoizedState = a;
      }
      function Th() {
        return Ih().memoizedState;
      }
      function Uh(a, b, c, d) {
        var e = Hh();
        R.flags |= a;
        e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
      }
      function Vh(a, b, c, d) {
        var e = Ih();
        d = d === void 0 ? null : d;
        var f = void 0;
        if (S !== null) {
          var g = S.memoizedState;
          f = g.destroy;
          if (d !== null && Bh(d, g.deps)) {
            Rh(b, c, f, d);
            return;
          }
        }
        R.flags |= a;
        e.memoizedState = Rh(1 | b, c, f, d);
      }
      function Wh(a, b) {
        return Uh(516, 4, a, b);
      }
      function Xh(a, b) {
        return Vh(516, 4, a, b);
      }
      function Yh(a, b) {
        return Vh(4, 2, a, b);
      }
      function Zh(a, b) {
        if (typeof b === "function")
          return a = a(), b(a), function() {
            b(null);
          };
        if (b !== null && b !== void 0)
          return a = a(), b.current = a, function() {
            b.current = null;
          };
      }
      function $h(a, b, c) {
        c = c !== null && c !== void 0 ? c.concat([a]) : null;
        return Vh(4, 2, Zh.bind(null, b, a), c);
      }
      function ai() {
      }
      function bi(a, b) {
        var c = Ih();
        b = b === void 0 ? null : b;
        var d = c.memoizedState;
        if (d !== null && b !== null && Bh(b, d[1]))
          return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ci(a, b) {
        var c = Ih();
        b = b === void 0 ? null : b;
        var d = c.memoizedState;
        if (d !== null && b !== null && Bh(b, d[1]))
          return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function di(a, b) {
        var c = eg();
        gg(98 > c ? 98 : c, function() {
          a(true);
        });
        gg(97 < c ? 97 : c, function() {
          var c2 = wh.transition;
          wh.transition = 1;
          try {
            a(false), b();
          } finally {
            wh.transition = c2;
          }
        });
      }
      function Oh(a, b, c) {
        var d = Hg(), e = Ig(a), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
        g === null ? f.next = f : (f.next = g.next, g.next = f);
        b.pending = f;
        g = a.alternate;
        if (a === R || g !== null && g === R)
          zh = yh = true;
        else {
          if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
            try {
              var h = b.lastRenderedState, k = g(h, c);
              f.eagerReducer = g;
              f.eagerState = k;
              if (He(k, h))
                return;
            } catch (l) {
            } finally {
            }
          Jg(a, e, d);
        }
      }
      var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false };
      var Dh = { readContext: vg, useCallback: function(a, b) {
        Hh().memoizedState = [a, b === void 0 ? null : b];
        return a;
      }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
        c = c !== null && c !== void 0 ? c.concat([a]) : null;
        return Uh(4, 2, Zh.bind(null, b, a), c);
      }, useLayoutEffect: function(a, b) {
        return Uh(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Hh();
        b = b === void 0 ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Hh();
        b = c !== void 0 ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        a = a.dispatch = Oh.bind(null, R, a);
        return [d.memoizedState, a];
      }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
        var b = Qh(a), c = b[0], d = b[1];
        Wh(function() {
          var b2 = wh.transition;
          wh.transition = 1;
          try {
            d(a);
          } finally {
            wh.transition = b2;
          }
        }, [a]);
        return c;
      }, useTransition: function() {
        var a = Qh(false), b = a[0];
        a = di.bind(null, a[1]);
        Sh(a);
        return [a, b];
      }, useMutableSource: function(a, b, c) {
        var d = Hh();
        d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
        return Nh(d, a, b, c);
      }, useOpaqueIdentifier: function() {
        if (lh) {
          var a = false, b = uf(function() {
            a || (a = true, c("r:" + (tf++).toString(36)));
            throw Error(y(355));
          }), c = Qh(b)[1];
          (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
            c("r:" + (tf++).toString(36));
          }, void 0, null));
          return b;
        }
        b = "r:" + (tf++).toString(36);
        Qh(b);
        return b;
      }, unstable_isNewReconciler: false };
      var Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
        return Kh(Jh);
      }, useDebugValue: ai, useDeferredValue: function(a) {
        var b = Kh(Jh), c = b[0], d = b[1];
        Xh(function() {
          var b2 = wh.transition;
          wh.transition = 1;
          try {
            d(a);
          } finally {
            wh.transition = b2;
          }
        }, [a]);
        return c;
      }, useTransition: function() {
        var a = Kh(Jh)[0];
        return [
          Th().current,
          a
        ];
      }, useMutableSource: Ph, useOpaqueIdentifier: function() {
        return Kh(Jh)[0];
      }, unstable_isNewReconciler: false };
      var Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
        return Lh(Jh);
      }, useDebugValue: ai, useDeferredValue: function(a) {
        var b = Lh(Jh), c = b[0], d = b[1];
        Xh(function() {
          var b2 = wh.transition;
          wh.transition = 1;
          try {
            d(a);
          } finally {
            wh.transition = b2;
          }
        }, [a]);
        return c;
      }, useTransition: function() {
        var a = Lh(Jh)[0];
        return [
          Th().current,
          a
        ];
      }, useMutableSource: Ph, useOpaqueIdentifier: function() {
        return Lh(Jh)[0];
      }, unstable_isNewReconciler: false };
      var ei = ra.ReactCurrentOwner;
      var ug = false;
      function fi(a, b, c, d) {
        b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
      }
      function gi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        tg(b, e);
        d = Ch(a, b, c, d, f, e);
        if (a !== null && !ug)
          return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
        b.flags |= 1;
        fi(a, b, d, e);
        return b.child;
      }
      function ii(a, b, c, d, e, f) {
        if (a === null) {
          var g = c.type;
          if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
            return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
          a = Vg(c.type, null, d, b, b.mode, f);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        g = a.child;
        if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
          return hi(a, b, f);
        b.flags |= 1;
        a = Tg(g, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function ki(a, b, c, d, e, f) {
        if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
          if (ug = false, (f & e) !== 0)
            (a.flags & 16384) !== 0 && (ug = true);
          else
            return b.lanes = a.lanes, hi(a, b, f);
        return li(a, b, c, d, f);
      }
      function mi(a, b, c) {
        var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
        if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
          if ((b.mode & 4) === 0)
            b.memoizedState = { baseLanes: 0 }, ni(b, c);
          else if ((c & 1073741824) !== 0)
            b.memoizedState = { baseLanes: 0 }, ni(b, f !== null ? f.baseLanes : c);
          else
            return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
        else
          f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
        fi(a, b, e, c);
        return b.child;
      }
      function oi(a, b) {
        var c = b.ref;
        if (a === null && c !== null || a !== null && a.ref !== c)
          b.flags |= 128;
      }
      function li(a, b, c, d, e) {
        var f = Ff(c) ? Df : M.current;
        f = Ef(b, f);
        tg(b, e);
        c = Ch(a, b, c, d, f, e);
        if (a !== null && !ug)
          return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
        b.flags |= 1;
        fi(a, b, c, e);
        return b.child;
      }
      function pi(a, b, c, d, e) {
        if (Ff(c)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        tg(b, e);
        if (b.stateNode === null)
          a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
        else if (a === null) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
          var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
          A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
          wg = false;
          var p = b.memoizedState;
          g.state = p;
          Cg(b, d, g, e);
          k = b.memoizedState;
          h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
        } else {
          g = b.stateNode;
          yg(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : lg(b.type, h);
          g.props = l;
          A = b.pendingProps;
          p = g.context;
          k = c.contextType;
          typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
          var C = c.getDerivedStateFromProps;
          (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
          wg = false;
          p = b.memoizedState;
          g.state = p;
          Cg(b, d, g, e);
          var x = b.memoizedState;
          h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
        }
        return qi(a, b, c, d, f, e);
      }
      function qi(a, b, c, d, e, f) {
        oi(a, b);
        var g = (b.flags & 64) !== 0;
        if (!d && !g)
          return e && Kf(b, c, false), hi(a, b, f);
        d = b.stateNode;
        ei.current = b;
        var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
        b.flags |= 1;
        a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
        b.memoizedState = d.state;
        e && Kf(b, c, true);
        return b.child;
      }
      function ri(a) {
        var b = a.stateNode;
        b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
        eh(a, b.containerInfo);
      }
      var si = { dehydrated: null, retryLane: 0 };
      function ti(a, b, c) {
        var d = b.pendingProps, e = P.current, f = false, g;
        (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
        g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
        I(P, e & 1);
        if (a === null) {
          d.fallback !== void 0 && ph(b);
          a = d.children;
          e = d.fallback;
          if (f)
            return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
          if (typeof d.unstable_expectedLoadTime === "number")
            return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
          c = vi({ mode: "visible", children: a }, b.mode, c, null);
          c.return = b;
          return b.child = c;
        }
        if (a.memoizedState !== null) {
          if (f)
            return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
          c = xi(a, b, d.children, c);
          b.memoizedState = null;
          return c;
        }
        if (f)
          return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
        c = xi(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }
      function ui(a, b, c, d) {
        var e = a.mode, f = a.child;
        b = { mode: "hidden", children: b };
        (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
        c = Xg(c, e, d, null);
        f.return = a;
        c.return = a;
        f.sibling = c;
        a.child = f;
        return c;
      }
      function xi(a, b, c, d) {
        var e = a.child;
        a = e.sibling;
        c = Tg(e, { mode: "visible", children: c });
        (b.mode & 2) === 0 && (c.lanes = d);
        c.return = b;
        c.sibling = null;
        a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
        return b.child = c;
      }
      function wi(a, b, c, d, e) {
        var f = b.mode, g = a.child;
        a = g.sibling;
        var h = { mode: "hidden", children: c };
        (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
        a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
        d.return = b;
        c.return = b;
        c.sibling = d;
        b.child = c;
        return d;
      }
      function yi(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        c !== null && (c.lanes |= b);
        sg(a.return, b);
      }
      function zi(a, b, c, d, e, f) {
        var g = a.memoizedState;
        g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
      }
      function Ai(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        fi(a, b, d.children, c);
        d = P.current;
        if ((d & 2) !== 0)
          d = d & 1 | 2, b.flags |= 64;
        else {
          if (a !== null && (a.flags & 64) !== 0)
            a:
              for (a = b.child; a !== null; ) {
                if (a.tag === 13)
                  a.memoizedState !== null && yi(a, c);
                else if (a.tag === 19)
                  yi(a, c);
                else if (a.child !== null) {
                  a.child.return = a;
                  a = a.child;
                  continue;
                }
                if (a === b)
                  break a;
                for (; a.sibling === null; ) {
                  if (a.return === null || a.return === b)
                    break a;
                  a = a.return;
                }
                a.sibling.return = a.return;
                a = a.sibling;
              }
          d &= 1;
        }
        I(P, d);
        if ((b.mode & 2) === 0)
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c = b.child;
              for (e = null; c !== null; )
                a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
              c = e;
              c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
              zi(b, false, e, c, f, b.lastEffect);
              break;
            case "backwards":
              c = null;
              e = b.child;
              for (b.child = null; e !== null; ) {
                a = e.alternate;
                if (a !== null && ih(a) === null) {
                  b.child = e;
                  break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
              }
              zi(b, true, c, null, f, b.lastEffect);
              break;
            case "together":
              zi(b, false, null, null, void 0, b.lastEffect);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function hi(a, b, c) {
        a !== null && (b.dependencies = a.dependencies);
        Dg |= b.lanes;
        if ((c & b.childLanes) !== 0) {
          if (a !== null && b.child !== a.child)
            throw Error(y(153));
          if (b.child !== null) {
            a = b.child;
            c = Tg(a, a.pendingProps);
            b.child = c;
            for (c.return = b; a.sibling !== null; )
              a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
            c.sibling = null;
          }
          return b.child;
        }
        return null;
      }
      var Bi;
      var Ci;
      var Di;
      var Ei;
      Bi = function(a, b) {
        for (var c = b.child; c !== null; ) {
          if (c.tag === 5 || c.tag === 6)
            a.appendChild(c.stateNode);
          else if (c.tag !== 4 && c.child !== null) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b)
            break;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === b)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Ci = function() {
      };
      Di = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          dh(ah.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "option":
              e = eb(a, e);
              d = eb(a, d);
              f = [];
              break;
            case "select":
              e = m({}, e, { value: void 0 });
              d = m({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
          }
          vb(c, d);
          var g;
          c = null;
          for (l in e)
            if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
              if (l === "style") {
                var h = e[l];
                for (g in h)
                  h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
              } else
                l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = e != null ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
              if (l === "style")
                if (h) {
                  for (g in h)
                    !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                  for (g in k)
                    k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                } else
                  c || (f || (f = []), f.push(l, c)), c = k;
              else
                l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l)
            b.flags |= 4;
        }
      };
      Ei = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Fi(a, b) {
        if (!lh)
          switch (a.tailMode) {
            case "hidden":
              b = a.tail;
              for (var c = null; b !== null; )
                b.alternate !== null && (c = b), b = b.sibling;
              c === null ? a.tail = null : c.sibling = null;
              break;
            case "collapsed":
              c = a.tail;
              for (var d = null; c !== null; )
                c.alternate !== null && (d = c), c = c.sibling;
              d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
          }
      }
      function Gi(a, b, c) {
        var d = b.pendingProps;
        switch (b.tag) {
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
            return null;
          case 1:
            return Ff(b.type) && Gf(), null;
          case 3:
            fh();
            H(N);
            H(M);
            uh();
            d = b.stateNode;
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (a === null || a.child === null)
              rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
            Ci(b);
            return null;
          case 5:
            hh(b);
            var e = dh(ch.current);
            c = b.type;
            if (a !== null && b.stateNode != null)
              Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
            else {
              if (!d) {
                if (b.stateNode === null)
                  throw Error(y(166));
                return null;
              }
              a = dh(ah.current);
              if (rh(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[wf] = b;
                d[xf] = f;
                switch (c) {
                  case "dialog":
                    G("cancel", d);
                    G("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    G("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < Xe.length; a++)
                      G(Xe[a], d);
                    break;
                  case "source":
                    G("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    G("error", d);
                    G("load", d);
                    break;
                  case "details":
                    G("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    G("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    G("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), G("invalid", d);
                }
                vb(c, f);
                a = null;
                for (var g in f)
                  f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
                switch (c) {
                  case "input":
                    Va(d);
                    cb(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof f.onClick === "function" && (d.onclick = jf);
                }
                d = a;
                b.updateQueue = d;
                d !== null && (b.flags |= 4);
              } else {
                g = e.nodeType === 9 ? e : e.ownerDocument;
                a === kb.html && (a = lb(c));
                a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[wf] = b;
                a[xf] = d;
                Bi(a, b, false, false);
                b.stateNode = a;
                g = wb(c, d);
                switch (c) {
                  case "dialog":
                    G("cancel", a);
                    G("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    G("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Xe.length; e++)
                      G(Xe[e], a);
                    e = d;
                    break;
                  case "source":
                    G("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    G("error", a);
                    G("load", a);
                    e = d;
                    break;
                  case "details":
                    G("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    G("invalid", a);
                    break;
                  case "option":
                    e = eb(a, d);
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = m({}, d, { value: void 0 });
                    G("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    G("invalid", a);
                    break;
                  default:
                    e = d;
                }
                vb(c, e);
                var h = e;
                for (f in h)
                  if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
                  }
                switch (c) {
                  case "input":
                    Va(a);
                    cb(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    d.value != null && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                    break;
                  default:
                    typeof e.onClick === "function" && (a.onclick = jf);
                }
                mf(c, d) && (b.flags |= 4);
              }
              b.ref !== null && (b.flags |= 128);
            }
            return null;
          case 6:
            if (a && b.stateNode != null)
              Ei(a, b, a.memoizedProps, d);
            else {
              if (typeof d !== "string" && b.stateNode === null)
                throw Error(y(166));
              c = dh(ch.current);
              dh(ah.current);
              rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
            }
            return null;
          case 13:
            H(P);
            d = b.memoizedState;
            if ((b.flags & 64) !== 0)
              return b.lanes = c, b;
            d = d !== null;
            c = false;
            a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
            if (d && !c && (b.mode & 2) !== 0)
              if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
                V === 0 && (V = 3);
              else {
                if (V === 0 || V === 3)
                  V = 4;
                U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
              }
            if (d || c)
              b.flags |= 4;
            return null;
          case 4:
            return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
          case 10:
            return rg(b), null;
          case 17:
            return Ff(b.type) && Gf(), null;
          case 19:
            H(P);
            d = b.memoizedState;
            if (d === null)
              return null;
            f = (b.flags & 64) !== 0;
            g = d.rendering;
            if (g === null)
              if (f)
                Fi(d, false);
              else {
                if (V !== 0 || a !== null && (a.flags & 64) !== 0)
                  for (a = b.child; a !== null; ) {
                    g = ih(a);
                    if (g !== null) {
                      b.flags |= 64;
                      Fi(d, false);
                      f = g.updateQueue;
                      f !== null && (b.updateQueue = f, b.flags |= 4);
                      d.lastEffect === null && (b.firstEffect = null);
                      b.lastEffect = d.lastEffect;
                      d = c;
                      for (c = b.child; c !== null; )
                        f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                      I(P, P.current & 1 | 2);
                      return b.child;
                    }
                    a = a.sibling;
                  }
                d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
              }
            else {
              if (!f)
                if (a = ih(g), a !== null) {
                  if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
                    return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
                } else
                  2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
              d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
            }
            return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
          case 23:
          case 24:
            return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
        }
        throw Error(y(156, b.tag));
      }
      function Li(a) {
        switch (a.tag) {
          case 1:
            Ff(a.type) && Gf();
            var b = a.flags;
            return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
          case 3:
            fh();
            H(N);
            H(M);
            uh();
            b = a.flags;
            if ((b & 64) !== 0)
              throw Error(y(285));
            a.flags = b & -4097 | 64;
            return a;
          case 5:
            return hh(a), null;
          case 13:
            return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
          case 19:
            return H(P), null;
          case 4:
            return fh(), null;
          case 10:
            return rg(a), null;
          case 23:
          case 24:
            return Ki(), null;
          default:
            return null;
        }
      }
      function Mi(a, b) {
        try {
          var c = "", d = b;
          do
            c += Qa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e };
      }
      function Ni(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Oi = typeof WeakMap === "function" ? WeakMap : Map;
      function Pi(a, b, c) {
        c = zg(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Qi || (Qi = true, Ri = d);
          Ni(a, b);
        };
        return c;
      }
      function Si(a, b, c) {
        c = zg(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if (typeof d === "function") {
          var e = b.value;
          c.payload = function() {
            Ni(a, b);
            return d(e);
          };
        }
        var f = a.stateNode;
        f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
          typeof d !== "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
        });
        return c;
      }
      var Ui = typeof WeakSet === "function" ? WeakSet : Set;
      function Vi(a) {
        var b = a.ref;
        if (b !== null)
          if (typeof b === "function")
            try {
              b(null);
            } catch (c) {
              Wi(a, c);
            }
          else
            b.current = null;
      }
      function Xi(a, b) {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (b.flags & 256 && a !== null) {
              var c = a.memoizedProps, d = a.memoizedState;
              a = b.stateNode;
              b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
              a.__reactInternalSnapshotBeforeUpdate = b;
            }
            return;
          case 3:
            b.flags & 256 && qf(b.stateNode.containerInfo);
            return;
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(y(163));
      }
      function Yi(a, b, c) {
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            b = c.updateQueue;
            b = b !== null ? b.lastEffect : null;
            if (b !== null) {
              a = b = b.next;
              do {
                if ((a.tag & 3) === 3) {
                  var d = a.create;
                  a.destroy = d();
                }
                a = a.next;
              } while (a !== b);
            }
            b = c.updateQueue;
            b = b !== null ? b.lastEffect : null;
            if (b !== null) {
              a = b = b.next;
              do {
                var e = a;
                d = e.next;
                e = e.tag;
                (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
                a = d;
              } while (a !== b);
            }
            return;
          case 1:
            a = c.stateNode;
            c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
            b = c.updateQueue;
            b !== null && Eg(c, b, a);
            return;
          case 3:
            b = c.updateQueue;
            if (b !== null) {
              a = null;
              if (c.child !== null)
                switch (c.child.tag) {
                  case 5:
                    a = c.child.stateNode;
                    break;
                  case 1:
                    a = c.child.stateNode;
                }
              Eg(c, b, a);
            }
            return;
          case 5:
            a = c.stateNode;
            b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
            return;
          case 6:
            return;
          case 4:
            return;
          case 12:
            return;
          case 13:
            c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
            return;
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(y(163));
      }
      function aj(a, b) {
        for (var c = a; ; ) {
          if (c.tag === 5) {
            var d = c.stateNode;
            if (b)
              d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
            else {
              d = c.stateNode;
              var e = c.memoizedProps.style;
              e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
              d.style.display = sb("display", e);
            }
          } else if (c.tag === 6)
            c.stateNode.nodeValue = b ? "" : c.memoizedProps;
          else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === a)
            break;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === a)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      }
      function bj(a, b) {
        if (Mf && typeof Mf.onCommitFiberUnmount === "function")
          try {
            Mf.onCommitFiberUnmount(Lf, b);
          } catch (f) {
          }
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            a = b.updateQueue;
            if (a !== null && (a = a.lastEffect, a !== null)) {
              var c = a = a.next;
              do {
                var d = c, e = d.destroy;
                d = d.tag;
                if (e !== void 0)
                  if ((d & 4) !== 0)
                    Zi(b, c);
                  else {
                    d = b;
                    try {
                      e();
                    } catch (f) {
                      Wi(d, f);
                    }
                  }
                c = c.next;
              } while (c !== a);
            }
            break;
          case 1:
            Vi(b);
            a = b.stateNode;
            if (typeof a.componentWillUnmount === "function")
              try {
                a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
              } catch (f) {
                Wi(b, f);
              }
            break;
          case 5:
            Vi(b);
            break;
          case 4:
            cj(a, b);
        }
      }
      function dj(a) {
        a.alternate = null;
        a.child = null;
        a.dependencies = null;
        a.firstEffect = null;
        a.lastEffect = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.return = null;
        a.updateQueue = null;
      }
      function ej(a) {
        return a.tag === 5 || a.tag === 3 || a.tag === 4;
      }
      function fj(a) {
        a: {
          for (var b = a.return; b !== null; ) {
            if (ej(b))
              break a;
            b = b.return;
          }
          throw Error(y(160));
        }
        var c = b;
        b = c.stateNode;
        switch (c.tag) {
          case 5:
            var d = false;
            break;
          case 3:
            b = b.containerInfo;
            d = true;
            break;
          case 4:
            b = b.containerInfo;
            d = true;
            break;
          default:
            throw Error(y(161));
        }
        c.flags & 16 && (pb(b, ""), c.flags &= -17);
        a:
          b:
            for (c = a; ; ) {
              for (; c.sibling === null; ) {
                if (c.return === null || ej(c.return)) {
                  c = null;
                  break a;
                }
                c = c.return;
              }
              c.sibling.return = c.return;
              for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
                if (c.flags & 2)
                  continue b;
                if (c.child === null || c.tag === 4)
                  continue b;
                else
                  c.child.return = c, c = c.child;
              }
              if (!(c.flags & 2)) {
                c = c.stateNode;
                break a;
              }
            }
        d ? gj(a, c, b) : hj(a, c, b);
      }
      function gj(a, b, c) {
        var d = a.tag, e = d === 5 || d === 6;
        if (e)
          a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
        else if (d !== 4 && (a = a.child, a !== null))
          for (gj(a, b, c), a = a.sibling; a !== null; )
            gj(a, b, c), a = a.sibling;
      }
      function hj(a, b, c) {
        var d = a.tag, e = d === 5 || d === 6;
        if (e)
          a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (d !== 4 && (a = a.child, a !== null))
          for (hj(a, b, c), a = a.sibling; a !== null; )
            hj(a, b, c), a = a.sibling;
      }
      function cj(a, b) {
        for (var c = b, d = false, e, f; ; ) {
          if (!d) {
            d = c.return;
            a:
              for (; ; ) {
                if (d === null)
                  throw Error(y(160));
                e = d.stateNode;
                switch (d.tag) {
                  case 5:
                    f = false;
                    break a;
                  case 3:
                    e = e.containerInfo;
                    f = true;
                    break a;
                  case 4:
                    e = e.containerInfo;
                    f = true;
                    break a;
                }
                d = d.return;
              }
            d = true;
          }
          if (c.tag === 5 || c.tag === 6) {
            a:
              for (var g = a, h = c, k = h; ; )
                if (bj(g, k), k.child !== null && k.tag !== 4)
                  k.child.return = k, k = k.child;
                else {
                  if (k === h)
                    break a;
                  for (; k.sibling === null; ) {
                    if (k.return === null || k.return === h)
                      break a;
                    k = k.return;
                  }
                  k.sibling.return = k.return;
                  k = k.sibling;
                }
            f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
          } else if (c.tag === 4) {
            if (c.child !== null) {
              e = c.stateNode.containerInfo;
              f = true;
              c.child.return = c;
              c = c.child;
              continue;
            }
          } else if (bj(a, c), c.child !== null) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b)
            break;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === b)
              return;
            c = c.return;
            c.tag === 4 && (d = false);
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      }
      function ij(a, b) {
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var c = b.updateQueue;
            c = c !== null ? c.lastEffect : null;
            if (c !== null) {
              var d = c = c.next;
              do
                (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
              while (d !== c);
            }
            return;
          case 1:
            return;
          case 5:
            c = b.stateNode;
            if (c != null) {
              d = b.memoizedProps;
              var e = a !== null ? a.memoizedProps : d;
              a = b.type;
              var f = b.updateQueue;
              b.updateQueue = null;
              if (f !== null) {
                c[xf] = d;
                a === "input" && d.type === "radio" && d.name != null && $a(c, d);
                wb(a, e);
                b = wb(a, d);
                for (e = 0; e < f.length; e += 2) {
                  var g = f[e], h = f[e + 1];
                  g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
                }
                switch (a) {
                  case "input":
                    ab(c, d);
                    break;
                  case "textarea":
                    ib(c, d);
                    break;
                  case "select":
                    a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
                }
              }
            }
            return;
          case 6:
            if (b.stateNode === null)
              throw Error(y(162));
            b.stateNode.nodeValue = b.memoizedProps;
            return;
          case 3:
            c = b.stateNode;
            c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
            return;
          case 12:
            return;
          case 13:
            b.memoizedState !== null && (jj = O(), aj(b.child, true));
            kj(b);
            return;
          case 19:
            kj(b);
            return;
          case 17:
            return;
          case 23:
          case 24:
            aj(b, b.memoizedState !== null);
            return;
        }
        throw Error(y(163));
      }
      function kj(a) {
        var b = a.updateQueue;
        if (b !== null) {
          a.updateQueue = null;
          var c = a.stateNode;
          c === null && (c = a.stateNode = new Ui());
          b.forEach(function(b2) {
            var d = lj.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function mj(a, b) {
        return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
      }
      var nj = Math.ceil;
      var oj = ra.ReactCurrentDispatcher;
      var pj = ra.ReactCurrentOwner;
      var X = 0;
      var U = null;
      var Y = null;
      var W = 0;
      var qj = 0;
      var rj = Bf(0);
      var V = 0;
      var sj = null;
      var tj = 0;
      var Dg = 0;
      var Hi = 0;
      var uj = 0;
      var vj = null;
      var jj = 0;
      var Ji = Infinity;
      function wj() {
        Ji = O() + 500;
      }
      var Z = null;
      var Qi = false;
      var Ri = null;
      var Ti = null;
      var xj = false;
      var yj = null;
      var zj = 90;
      var Aj = [];
      var Bj = [];
      var Cj = null;
      var Dj = 0;
      var Ej = null;
      var Fj = -1;
      var Gj = 0;
      var Hj = 0;
      var Ij = null;
      var Jj = false;
      function Hg() {
        return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
      }
      function Ig(a) {
        a = a.mode;
        if ((a & 2) === 0)
          return 1;
        if ((a & 4) === 0)
          return eg() === 99 ? 1 : 2;
        Gj === 0 && (Gj = tj);
        if (kg.transition !== 0) {
          Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
          a = Gj;
          var b = 4186112 & ~Hj;
          b &= -b;
          b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
          return b;
        }
        a = eg();
        (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
        return a;
      }
      function Jg(a, b, c) {
        if (50 < Dj)
          throw Dj = 0, Ej = null, Error(y(185));
        a = Kj(a, b);
        if (a === null)
          return null;
        $c(a, b, c);
        a === U && (Hi |= b, V === 4 && Ii(a, W));
        var d = eg();
        b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c));
        vj = a;
      }
      function Kj(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        c !== null && (c.lanes |= b);
        c = a;
        for (a = a.return; a !== null; )
          a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
        return c.tag === 3 ? c.stateNode : null;
      }
      function Mj(a, b) {
        for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
          var h = 31 - Vc(g), k = 1 << h, l = f[h];
          if (l === -1) {
            if ((k & d) === 0 || (k & e) !== 0) {
              l = b;
              Rc(k);
              var n = F;
              f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
            }
          } else
            l <= b && (a.expiredLanes |= k);
          g &= ~k;
        }
        d = Uc(a, a === U ? W : 0);
        b = F;
        if (d === 0)
          c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
        else {
          if (c !== null) {
            if (a.callbackPriority === b)
              return;
            c !== Zf && Pf(c);
          }
          b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Nj(a) {
        Fj = -1;
        Hj = Gj = 0;
        if ((X & 48) !== 0)
          throw Error(y(327));
        var b = a.callbackNode;
        if (Oj() && a.callbackNode !== b)
          return null;
        var c = Uc(a, a === U ? W : 0);
        if (c === 0)
          return null;
        var d = c;
        var e = X;
        X |= 16;
        var f = Pj();
        if (U !== a || W !== d)
          wj(), Qj(a, d);
        do
          try {
            Rj();
            break;
          } catch (h) {
            Sj(a, h);
          }
        while (1);
        qg();
        oj.current = f;
        X = e;
        Y !== null ? d = 0 : (U = null, W = 0, d = V);
        if ((tj & Hi) !== 0)
          Qj(a, 0);
        else if (d !== 0) {
          d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
          if (d === 1)
            throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
          a.finishedWork = a.current.alternate;
          a.finishedLanes = c;
          switch (d) {
            case 0:
            case 1:
              throw Error(y(345));
            case 2:
              Uj(a);
              break;
            case 3:
              Ii(a, c);
              if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
                if (Uc(a, 0) !== 0)
                  break;
                e = a.suspendedLanes;
                if ((e & c) !== c) {
                  Hg();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = of(Uj.bind(null, a), d);
                break;
              }
              Uj(a);
              break;
            case 4:
              Ii(a, c);
              if ((c & 4186112) === c)
                break;
              d = a.eventTimes;
              for (e = -1; 0 < c; ) {
                var g = 31 - Vc(c);
                f = 1 << g;
                g = d[g];
                g > e && (e = g);
                c &= ~f;
              }
              c = e;
              c = O() - c;
              c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
              if (10 < c) {
                a.timeoutHandle = of(Uj.bind(null, a), c);
                break;
              }
              Uj(a);
              break;
            case 5:
              Uj(a);
              break;
            default:
              throw Error(y(329));
          }
        }
        Mj(a, O());
        return a.callbackNode === b ? Nj.bind(null, a) : null;
      }
      function Ii(a, b) {
        b &= ~uj;
        b &= ~Hi;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - Vc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Lj(a) {
        if ((X & 48) !== 0)
          throw Error(y(327));
        Oj();
        if (a === U && (a.expiredLanes & W) !== 0) {
          var b = W;
          var c = Tj(a, b);
          (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
        } else
          b = Uc(a, 0), c = Tj(a, b);
        a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
        if (c === 1)
          throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Uj(a);
        Mj(a, O());
        return null;
      }
      function Vj() {
        if (Cj !== null) {
          var a = Cj;
          Cj = null;
          a.forEach(function(a2) {
            a2.expiredLanes |= 24 & a2.pendingLanes;
            Mj(a2, O());
          });
        }
        ig();
      }
      function Wj(a, b) {
        var c = X;
        X |= 1;
        try {
          return a(b);
        } finally {
          X = c, X === 0 && (wj(), ig());
        }
      }
      function Xj(a, b) {
        var c = X;
        X &= -2;
        X |= 8;
        try {
          return a(b);
        } finally {
          X = c, X === 0 && (wj(), ig());
        }
      }
      function ni(a, b) {
        I(rj, qj);
        qj |= b;
        tj |= b;
      }
      function Ki() {
        qj = rj.current;
        H(rj);
      }
      function Qj(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        c !== -1 && (a.timeoutHandle = -1, pf(c));
        if (Y !== null)
          for (c = Y.return; c !== null; ) {
            var d = c;
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                d !== null && d !== void 0 && Gf();
                break;
              case 3:
                fh();
                H(N);
                H(M);
                uh();
                break;
              case 5:
                hh(d);
                break;
              case 4:
                fh();
                break;
              case 13:
                H(P);
                break;
              case 19:
                H(P);
                break;
              case 10:
                rg(d);
                break;
              case 23:
              case 24:
                Ki();
            }
            c = c.return;
          }
        U = a;
        Y = Tg(a.current, null);
        W = qj = tj = b;
        V = 0;
        sj = null;
        uj = Hi = Dg = 0;
      }
      function Sj(a, b) {
        do {
          var c = Y;
          try {
            qg();
            vh.current = Gh;
            if (yh) {
              for (var d = R.memoizedState; d !== null; ) {
                var e = d.queue;
                e !== null && (e.pending = null);
                d = d.next;
              }
              yh = false;
            }
            xh = 0;
            T = S = R = null;
            zh = false;
            pj.current = null;
            if (c === null || c.return === null) {
              V = 1;
              sj = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = W;
              h.flags |= 2048;
              h.firstEffect = h.lastEffect = null;
              if (k !== null && typeof k === "object" && typeof k.then === "function") {
                var l = k;
                if ((h.mode & 2) === 0) {
                  var n = h.alternate;
                  n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
                }
                var A = (P.current & 1) !== 0, p = g;
                do {
                  var C;
                  if (C = p.tag === 13) {
                    var x = p.memoizedState;
                    if (x !== null)
                      C = x.dehydrated !== null ? true : false;
                    else {
                      var w = p.memoizedProps;
                      C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
                    }
                  }
                  if (C) {
                    var z = p.updateQueue;
                    if (z === null) {
                      var u = /* @__PURE__ */ new Set();
                      u.add(l);
                      p.updateQueue = u;
                    } else
                      z.add(l);
                    if ((p.mode & 2) === 0) {
                      p.flags |= 64;
                      h.flags |= 16384;
                      h.flags &= -2981;
                      if (h.tag === 1)
                        if (h.alternate === null)
                          h.tag = 17;
                        else {
                          var t = zg(-1, 1);
                          t.tag = 2;
                          Ag(h, t);
                        }
                      h.lanes |= 1;
                      break a;
                    }
                    k = void 0;
                    h = b;
                    var q = f.pingCache;
                    q === null ? (q = f.pingCache = new Oi(), k = /* @__PURE__ */ new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = /* @__PURE__ */ new Set(), q.set(l, k)));
                    if (!k.has(h)) {
                      k.add(h);
                      var v = Yj.bind(null, f, l, h);
                      l.then(v, v);
                    }
                    p.flags |= 4096;
                    p.lanes = b;
                    break a;
                  }
                  p = p.return;
                } while (p !== null);
                k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
              }
              V !== 5 && (V = 2);
              k = Mi(k, h);
              p = g;
              do {
                switch (p.tag) {
                  case 3:
                    f = k;
                    p.flags |= 4096;
                    b &= -b;
                    p.lanes |= b;
                    var J = Pi(p, f, b);
                    Bg(p, J);
                    break a;
                  case 1:
                    f = k;
                    var K = p.type, Q = p.stateNode;
                    if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                      p.flags |= 4096;
                      b &= -b;
                      p.lanes |= b;
                      var L = Si(p, f, b);
                      Bg(p, L);
                      break a;
                    }
                }
                p = p.return;
              } while (p !== null);
            }
            Zj(c);
          } catch (va) {
            b = va;
            Y === c && c !== null && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Pj() {
        var a = oj.current;
        oj.current = Gh;
        return a === null ? Gh : a;
      }
      function Tj(a, b) {
        var c = X;
        X |= 16;
        var d = Pj();
        U === a && W === b || Qj(a, b);
        do
          try {
            ak();
            break;
          } catch (e) {
            Sj(a, e);
          }
        while (1);
        qg();
        X = c;
        oj.current = d;
        if (Y !== null)
          throw Error(y(261));
        U = null;
        W = 0;
        return V;
      }
      function ak() {
        for (; Y !== null; )
          bk(Y);
      }
      function Rj() {
        for (; Y !== null && !Qf(); )
          bk(Y);
      }
      function bk(a) {
        var b = ck(a.alternate, a, qj);
        a.memoizedProps = a.pendingProps;
        b === null ? Zj(a) : Y = b;
        pj.current = null;
      }
      function Zj(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if ((b.flags & 2048) === 0) {
            c = Gi(c, b, qj);
            if (c !== null) {
              Y = c;
              return;
            }
            c = b;
            if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
              for (var d = 0, e = c.child; e !== null; )
                d |= e.lanes | e.childLanes, e = e.sibling;
              c.childLanes = d;
            }
            a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
          } else {
            c = Li(b);
            if (c !== null) {
              c.flags &= 2047;
              Y = c;
              return;
            }
            a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
          }
          b = b.sibling;
          if (b !== null) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (b !== null);
        V === 0 && (V = 5);
      }
      function Uj(a) {
        var b = eg();
        gg(99, dk.bind(null, a, b));
        return null;
      }
      function dk(a, b) {
        do
          Oj();
        while (yj !== null);
        if ((X & 48) !== 0)
          throw Error(y(327));
        var c = a.finishedWork;
        if (c === null)
          return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current)
          throw Error(y(177));
        a.callbackNode = null;
        var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
        a.pendingLanes = e;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= e;
        a.mutableReadLanes &= e;
        a.entangledLanes &= e;
        e = a.entanglements;
        for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
          var k = 31 - Vc(f), l = 1 << k;
          e[k] = 0;
          g[k] = -1;
          h[k] = -1;
          f &= ~l;
        }
        Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
        a === U && (Y = U = null, W = 0);
        1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
        if (d !== null) {
          e = X;
          X |= 32;
          pj.current = null;
          kf = fd;
          g = Ne();
          if (Oe(g)) {
            if ("selectionStart" in g)
              h = { start: g.selectionStart, end: g.selectionEnd };
            else
              a:
                if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
                  h = l.anchorNode;
                  f = l.anchorOffset;
                  k = l.focusNode;
                  l = l.focusOffset;
                  try {
                    h.nodeType, k.nodeType;
                  } catch (va) {
                    h = null;
                    break a;
                  }
                  var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
                  b:
                    for (; ; ) {
                      for (var u; ; ) {
                        w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                        w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                        w.nodeType === 3 && (n += w.nodeValue.length);
                        if ((u = w.firstChild) === null)
                          break;
                        z = w;
                        w = u;
                      }
                      for (; ; ) {
                        if (w === g)
                          break b;
                        z === h && ++C === f && (A = n);
                        z === k && ++x === l && (p = n);
                        if ((u = w.nextSibling) !== null)
                          break;
                        w = z;
                        z = w.parentNode;
                      }
                      w = u;
                    }
                  h = A === -1 || p === -1 ? null : { start: A, end: p };
                } else
                  h = null;
            h = h || { start: 0, end: 0 };
          } else
            h = null;
          lf = { focusedElem: g, selectionRange: h };
          fd = false;
          Ij = null;
          Jj = false;
          Z = d;
          do
            try {
              ek();
            } catch (va) {
              if (Z === null)
                throw Error(y(330));
              Wi(Z, va);
              Z = Z.nextEffect;
            }
          while (Z !== null);
          Ij = null;
          Z = d;
          do
            try {
              for (g = a; Z !== null; ) {
                var t = Z.flags;
                t & 16 && pb(Z.stateNode, "");
                if (t & 128) {
                  var q = Z.alternate;
                  if (q !== null) {
                    var v = q.ref;
                    v !== null && (typeof v === "function" ? v(null) : v.current = null);
                  }
                }
                switch (t & 1038) {
                  case 2:
                    fj(Z);
                    Z.flags &= -3;
                    break;
                  case 6:
                    fj(Z);
                    Z.flags &= -3;
                    ij(Z.alternate, Z);
                    break;
                  case 1024:
                    Z.flags &= -1025;
                    break;
                  case 1028:
                    Z.flags &= -1025;
                    ij(Z.alternate, Z);
                    break;
                  case 4:
                    ij(Z.alternate, Z);
                    break;
                  case 8:
                    h = Z;
                    cj(g, h);
                    var J = h.alternate;
                    dj(h);
                    J !== null && dj(J);
                }
                Z = Z.nextEffect;
              }
            } catch (va) {
              if (Z === null)
                throw Error(y(330));
              Wi(Z, va);
              Z = Z.nextEffect;
            }
          while (Z !== null);
          v = lf;
          q = Ne();
          t = v.focusedElem;
          g = v.selectionRange;
          if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
            g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
            q = [];
            for (v = t; v = v.parentNode; )
              v.nodeType === 1 && q.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
            typeof t.focus === "function" && t.focus();
            for (t = 0; t < q.length; t++)
              v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
          }
          fd = !!kf;
          lf = kf = null;
          a.current = c;
          Z = d;
          do
            try {
              for (t = a; Z !== null; ) {
                var K = Z.flags;
                K & 36 && Yi(t, Z.alternate, Z);
                if (K & 128) {
                  q = void 0;
                  var Q = Z.ref;
                  if (Q !== null) {
                    var L = Z.stateNode;
                    switch (Z.tag) {
                      case 5:
                        q = L;
                        break;
                      default:
                        q = L;
                    }
                    typeof Q === "function" ? Q(q) : Q.current = q;
                  }
                }
                Z = Z.nextEffect;
              }
            } catch (va) {
              if (Z === null)
                throw Error(y(330));
              Wi(Z, va);
              Z = Z.nextEffect;
            }
          while (Z !== null);
          Z = null;
          $f();
          X = e;
        } else
          a.current = c;
        if (xj)
          xj = false, yj = a, zj = b;
        else
          for (Z = d; Z !== null; )
            b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
        d = a.pendingLanes;
        d === 0 && (Ti = null);
        d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
        c = c.stateNode;
        if (Mf && typeof Mf.onCommitFiberRoot === "function")
          try {
            Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
          } catch (va) {
          }
        Mj(a, O());
        if (Qi)
          throw Qi = false, a = Ri, Ri = null, a;
        if ((X & 8) !== 0)
          return null;
        ig();
        return null;
      }
      function ek() {
        for (; Z !== null; ) {
          var a = Z.alternate;
          Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
          var b = Z.flags;
          (b & 256) !== 0 && Xi(a, Z);
          (b & 512) === 0 || xj || (xj = true, hg(97, function() {
            Oj();
            return null;
          }));
          Z = Z.nextEffect;
        }
      }
      function Oj() {
        if (zj !== 90) {
          var a = 97 < zj ? 97 : zj;
          zj = 90;
          return gg(a, fk);
        }
        return false;
      }
      function $i(a, b) {
        Aj.push(b, a);
        xj || (xj = true, hg(97, function() {
          Oj();
          return null;
        }));
      }
      function Zi(a, b) {
        Bj.push(b, a);
        xj || (xj = true, hg(97, function() {
          Oj();
          return null;
        }));
      }
      function fk() {
        if (yj === null)
          return false;
        var a = yj;
        yj = null;
        if ((X & 48) !== 0)
          throw Error(y(331));
        var b = X;
        X |= 32;
        var c = Bj;
        Bj = [];
        for (var d = 0; d < c.length; d += 2) {
          var e = c[d], f = c[d + 1], g = e.destroy;
          e.destroy = void 0;
          if (typeof g === "function")
            try {
              g();
            } catch (k) {
              if (f === null)
                throw Error(y(330));
              Wi(f, k);
            }
        }
        c = Aj;
        Aj = [];
        for (d = 0; d < c.length; d += 2) {
          e = c[d];
          f = c[d + 1];
          try {
            var h = e.create;
            e.destroy = h();
          } catch (k) {
            if (f === null)
              throw Error(y(330));
            Wi(f, k);
          }
        }
        for (h = a.current.firstEffect; h !== null; )
          a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
        X = b;
        ig();
        return true;
      }
      function gk(a, b, c) {
        b = Mi(c, b);
        b = Pi(a, b, 1);
        Ag(a, b);
        b = Hg();
        a = Kj(a, 1);
        a !== null && ($c(a, 1, b), Mj(a, b));
      }
      function Wi(a, b) {
        if (a.tag === 3)
          gk(a, a, b);
        else
          for (var c = a.return; c !== null; ) {
            if (c.tag === 3) {
              gk(c, a, b);
              break;
            } else if (c.tag === 1) {
              var d = c.stateNode;
              if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
                a = Mi(b, a);
                var e = Si(c, a, 1);
                Ag(c, e);
                e = Hg();
                c = Kj(c, 1);
                if (c !== null)
                  $c(c, 1, e), Mj(c, e);
                else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
                  try {
                    d.componentDidCatch(b, a);
                  } catch (f) {
                  }
                break;
              }
            }
            c = c.return;
          }
      }
      function Yj(a, b, c) {
        var d = a.pingCache;
        d !== null && d.delete(b);
        b = Hg();
        a.pingedLanes |= a.suspendedLanes & c;
        U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
        Mj(a, b);
      }
      function lj(a, b) {
        var c = a.stateNode;
        c !== null && c.delete(b);
        b = 0;
        b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
        c = Hg();
        a = Kj(a, b);
        a !== null && ($c(a, b, c), Mj(a, c));
      }
      var ck;
      ck = function(a, b, c) {
        var d = b.lanes;
        if (a !== null)
          if (a.memoizedProps !== b.pendingProps || N.current)
            ug = true;
          else if ((c & d) !== 0)
            ug = (a.flags & 16384) !== 0 ? true : false;
          else {
            ug = false;
            switch (b.tag) {
              case 3:
                ri(b);
                sh();
                break;
              case 5:
                gh(b);
                break;
              case 1:
                Ff(b.type) && Jf(b);
                break;
              case 4:
                eh(b, b.stateNode.containerInfo);
                break;
              case 10:
                d = b.memoizedProps.value;
                var e = b.type._context;
                I(mg, e._currentValue);
                e._currentValue = d;
                break;
              case 13:
                if (b.memoizedState !== null) {
                  if ((c & b.child.childLanes) !== 0)
                    return ti(a, b, c);
                  I(P, P.current & 1);
                  b = hi(a, b, c);
                  return b !== null ? b.sibling : null;
                }
                I(P, P.current & 1);
                break;
              case 19:
                d = (c & b.childLanes) !== 0;
                if ((a.flags & 64) !== 0) {
                  if (d)
                    return Ai(a, b, c);
                  b.flags |= 64;
                }
                e = b.memoizedState;
                e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
                I(P, P.current);
                if (d)
                  break;
                else
                  return null;
              case 23:
              case 24:
                return b.lanes = 0, mi(a, b, c);
            }
            return hi(a, b, c);
          }
        else
          ug = false;
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            d = b.type;
            a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            e = Ef(b, M.current);
            tg(b, c);
            e = Ch(null, b, d, a, e, c);
            b.flags |= 1;
            if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
              b.tag = 1;
              b.memoizedState = null;
              b.updateQueue = null;
              if (Ff(d)) {
                var f = true;
                Jf(b);
              } else
                f = false;
              b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
              xg(b);
              var g = d.getDerivedStateFromProps;
              typeof g === "function" && Gg(b, d, g, a);
              e.updater = Kg;
              b.stateNode = e;
              e._reactInternals = b;
              Og(b, d, a, c);
              b = qi(null, b, d, true, f, c);
            } else
              b.tag = 0, fi(null, b, e, c), b = b.child;
            return b;
          case 16:
            e = b.elementType;
            a: {
              a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
              a = b.pendingProps;
              f = e._init;
              e = f(e._payload);
              b.type = e;
              f = b.tag = hk(e);
              a = lg(e, a);
              switch (f) {
                case 0:
                  b = li(null, b, e, a, c);
                  break a;
                case 1:
                  b = pi(null, b, e, a, c);
                  break a;
                case 11:
                  b = gi(null, b, e, a, c);
                  break a;
                case 14:
                  b = ii(null, b, e, lg(e.type, a), d, c);
                  break a;
              }
              throw Error(y(306, e, ""));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
          case 3:
            ri(b);
            d = b.updateQueue;
            if (a === null || d === null)
              throw Error(y(282));
            d = b.pendingProps;
            e = b.memoizedState;
            e = e !== null ? e.element : null;
            yg(a, b);
            Cg(b, d, null, c);
            d = b.memoizedState.element;
            if (d === e)
              sh(), b = hi(a, b, c);
            else {
              e = b.stateNode;
              if (f = e.hydrate)
                kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
              if (f) {
                a = e.mutableSourceEagerHydrationData;
                if (a != null)
                  for (e = 0; e < a.length; e += 2)
                    f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
                c = Zg(b, null, d, c);
                for (b.child = c; c; )
                  c.flags = c.flags & -3 | 1024, c = c.sibling;
              } else
                fi(a, b, d, c), sh();
              b = b.child;
            }
            return b;
          case 5:
            return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
          case 6:
            return a === null && ph(b), null;
          case 13:
            return ti(a, b, c);
          case 4:
            return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
          case 7:
            return fi(a, b, b.pendingProps, c), b.child;
          case 8:
            return fi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return fi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              g = b.memoizedProps;
              f = e.value;
              var h = b.type._context;
              I(mg, h._currentValue);
              h._currentValue = f;
              if (g !== null)
                if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
                  if (g.children === e.children && !N.current) {
                    b = hi(a, b, c);
                    break a;
                  }
                } else
                  for (h = b.child, h !== null && (h.return = b); h !== null; ) {
                    var k = h.dependencies;
                    if (k !== null) {
                      g = h.child;
                      for (var l = k.firstContext; l !== null; ) {
                        if (l.context === d && (l.observedBits & f) !== 0) {
                          h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                          h.lanes |= c;
                          l = h.alternate;
                          l !== null && (l.lanes |= c);
                          sg(h.return, c);
                          k.lanes |= c;
                          break;
                        }
                        l = l.next;
                      }
                    } else
                      g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
                    if (g !== null)
                      g.return = h;
                    else
                      for (g = h; g !== null; ) {
                        if (g === b) {
                          g = null;
                          break;
                        }
                        h = g.sibling;
                        if (h !== null) {
                          h.return = g.return;
                          g = h;
                          break;
                        }
                        g = g.return;
                      }
                    h = g;
                  }
              fi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
          case 14:
            return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
          case 15:
            return ki(a, b, b.type, b.pendingProps, d, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
          case 19:
            return Ai(a, b, c);
          case 23:
            return mi(a, b, c);
          case 24:
            return mi(a, b, c);
        }
        throw Error(y(156, b.tag));
      };
      function ik(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.flags = 0;
        this.lastEffect = this.firstEffect = this.nextEffect = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function nh(a, b, c, d) {
        return new ik(a, b, c, d);
      }
      function ji(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function hk(a) {
        if (typeof a === "function")
          return ji(a) ? 1 : 0;
        if (a !== void 0 && a !== null) {
          a = a.$$typeof;
          if (a === Aa)
            return 11;
          if (a === Da)
            return 14;
        }
        return 2;
      }
      function Tg(a, b) {
        var c = a.alternate;
        c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Vg(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if (typeof a === "function")
          ji(a) && (g = 1);
        else if (typeof a === "string")
          g = 5;
        else
          a:
            switch (a) {
              case ua:
                return Xg(c.children, e, f, b);
              case Ha:
                g = 8;
                e |= 16;
                break;
              case wa:
                g = 8;
                e |= 1;
                break;
              case xa:
                return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
              case Ba:
                return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
              case Ca:
                return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
              case Ia:
                return vi(c, e, f, b);
              case Ja:
                return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
              default:
                if (typeof a === "object" && a !== null)
                  switch (a.$$typeof) {
                    case ya:
                      g = 10;
                      break a;
                    case za:
                      g = 9;
                      break a;
                    case Aa:
                      g = 11;
                      break a;
                    case Da:
                      g = 14;
                      break a;
                    case Ea:
                      g = 16;
                      d = null;
                      break a;
                    case Fa:
                      g = 22;
                      break a;
                  }
                throw Error(y(130, a == null ? a : typeof a, ""));
            }
        b = nh(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Xg(a, b, c, d) {
        a = nh(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function vi(a, b, c, d) {
        a = nh(23, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        return a;
      }
      function Ug(a, b, c) {
        a = nh(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Wg(a, b, c) {
        b = nh(4, a.children !== null ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function jk(a, b, c) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.pendingContext = this.context = null;
        this.hydrate = c;
        this.callbackNode = null;
        this.callbackPriority = 0;
        this.eventTimes = Zc(0);
        this.expirationTimes = Zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = Zc(0);
        this.mutableSourceEagerHydrationData = null;
      }
      function kk(a, b, c) {
        var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function lk(a, b, c, d) {
        var e = b.current, f = Hg(), g = Ig(e);
        a:
          if (c) {
            c = c._reactInternals;
            b: {
              if (Zb(c) !== c || c.tag !== 1)
                throw Error(y(170));
              var h = c;
              do {
                switch (h.tag) {
                  case 3:
                    h = h.stateNode.context;
                    break b;
                  case 1:
                    if (Ff(h.type)) {
                      h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                      break b;
                    }
                }
                h = h.return;
              } while (h !== null);
              throw Error(y(171));
            }
            if (c.tag === 1) {
              var k = c.type;
              if (Ff(k)) {
                c = If(c, k, h);
                break a;
              }
            }
            c = h;
          } else
            c = Cf;
        b.context === null ? b.context = c : b.pendingContext = c;
        b = zg(f, g);
        b.payload = { element: a };
        d = d === void 0 ? null : d;
        d !== null && (b.callback = d);
        Ag(e, b);
        Jg(e, g, f);
        return g;
      }
      function mk(a) {
        a = a.current;
        if (!a.child)
          return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function nk(a, b) {
        a = a.memoizedState;
        if (a !== null && a.dehydrated !== null) {
          var c = a.retryLane;
          a.retryLane = c !== 0 && c < b ? c : b;
        }
      }
      function ok(a, b) {
        nk(a, b);
        (a = a.alternate) && nk(a, b);
      }
      function pk() {
        return null;
      }
      function qk(a, b, c) {
        var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
        c = new jk(a, b, c != null && c.hydrate === true);
        b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
        c.current = b;
        b.stateNode = c;
        xg(b);
        a[ff] = c.current;
        cf(a.nodeType === 8 ? a.parentNode : a);
        if (d)
          for (a = 0; a < d.length; a++) {
            b = d[a];
            var e = b._getVersion;
            e = e(b._source);
            c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
          }
        this._internalRoot = c;
      }
      qk.prototype.render = function(a) {
        lk(a, this._internalRoot, null, null);
      };
      qk.prototype.unmount = function() {
        var a = this._internalRoot, b = a.containerInfo;
        lk(null, a, null, function() {
          b[ff] = null;
        });
      };
      function rk(a) {
        return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
      }
      function sk(a, b) {
        b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
        if (!b)
          for (var c; c = a.lastChild; )
            a.removeChild(c);
        return new qk(a, 0, b ? { hydrate: true } : void 0);
      }
      function tk(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f._internalRoot;
          if (typeof e === "function") {
            var h = e;
            e = function() {
              var a2 = mk(g);
              h.call(a2);
            };
          }
          lk(b, g, a, e);
        } else {
          f = c._reactRootContainer = sk(c, d);
          g = f._internalRoot;
          if (typeof e === "function") {
            var k = e;
            e = function() {
              var a2 = mk(g);
              k.call(a2);
            };
          }
          Xj(function() {
            lk(b, g, a, e);
          });
        }
        return mk(g);
      }
      ec = function(a) {
        if (a.tag === 13) {
          var b = Hg();
          Jg(a, 4, b);
          ok(a, 4);
        }
      };
      fc = function(a) {
        if (a.tag === 13) {
          var b = Hg();
          Jg(a, 67108864, b);
          ok(a, 67108864);
        }
      };
      gc = function(a) {
        if (a.tag === 13) {
          var b = Hg(), c = Ig(a);
          Jg(a, c, b);
          ok(a, c);
        }
      };
      hc = function(a, b) {
        return b();
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            ab(a, c);
            b = c.name;
            if (c.type === "radio" && b != null) {
              for (c = a; c.parentNode; )
                c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e)
                    throw Error(y(90));
                  Wa(d);
                  ab(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, b != null && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Wj;
      Hb = function(a, b, c, d, e) {
        var f = X;
        X |= 4;
        try {
          return gg(98, a.bind(null, b, c, d, e));
        } finally {
          X = f, X === 0 && (wj(), ig());
        }
      };
      Ib = function() {
        (X & 49) === 0 && (Vj(), Oj());
      };
      Jb = function(a, b) {
        var c = X;
        X |= 2;
        try {
          return a(b);
        } finally {
          X = c, X === 0 && (wj(), ig());
        }
      };
      function uk(a, b) {
        var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!rk(b))
          throw Error(y(200));
        return kk(a, b, null, c);
      }
      var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] };
      var wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
      var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = cc(a);
        return a === null ? null : a.stateNode;
      }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
        yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!yk.isDisabled && yk.supportsFiber)
          try {
            Lf = yk.inject(xk), Mf = yk;
          } catch (a) {
          }
      }
      var yk;
      exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
      exports2.createPortal = uk;
      exports2.findDOMNode = function(a) {
        if (a == null)
          return null;
        if (a.nodeType === 1)
          return a;
        var b = a._reactInternals;
        if (b === void 0) {
          if (typeof a.render === "function")
            throw Error(y(188));
          throw Error(y(268, Object.keys(a)));
        }
        a = cc(b);
        a = a === null ? null : a.stateNode;
        return a;
      };
      exports2.flushSync = function(a, b) {
        var c = X;
        if ((c & 48) !== 0)
          return a(b);
        X |= 1;
        try {
          if (a)
            return gg(99, a.bind(null, b));
        } finally {
          X = c, ig();
        }
      };
      exports2.hydrate = function(a, b, c) {
        if (!rk(b))
          throw Error(y(200));
        return tk(null, a, b, true, c);
      };
      exports2.render = function(a, b, c) {
        if (!rk(b))
          throw Error(y(200));
        return tk(null, a, b, false, c);
      };
      exports2.unmountComponentAtNode = function(a) {
        if (!rk(a))
          throw Error(y(40));
        return a._reactRootContainer ? (Xj(function() {
          tk(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[ff] = null;
          });
        }), true) : false;
      };
      exports2.unstable_batchedUpdates = Wj;
      exports2.unstable_createPortal = function(a, b) {
        return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
      };
      exports2.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!rk(c))
          throw Error(y(200));
        if (a == null || a._reactInternals === void 0)
          throw Error(y(38));
        return tk(a, b, c, false, d);
      };
      exports2.version = "17.0.2";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports2, module2) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module2.exports = require_react_dom_production_min();
      } else {
        module2.exports = null;
      }
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module2.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/factoryWithThrowingShims.js
  var require_factoryWithThrowingShims = __commonJS({
    "node_modules/prop-types/factoryWithThrowingShims.js"(exports2, module2) {
      "use strict";
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      module2.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = "Invariant Violation";
          throw err;
        }
        ;
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        ;
        var ReactPropTypes = {
          array: shim,
          bigint: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports2, module2) {
      if (false) {
        ReactIs2 = null;
        throwOnDirectAccess = true;
        module2.exports = null(ReactIs2.isElement, throwOnDirectAccess);
      } else {
        module2.exports = require_factoryWithThrowingShims()();
      }
      var ReactIs2;
      var throwOnDirectAccess;
    }
  });

  // node_modules/exenv/index.js
  var require_exenv = __commonJS({
    "node_modules/exenv/index.js"(exports2, module2) {
      (function() {
        "use strict";
        var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        var ExecutionEnvironment = {
          canUseDOM,
          canUseWorkers: typeof Worker !== "undefined",
          canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
          canUseViewport: canUseDOM && !!window.screen
        };
        if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define(function() {
            return ExecutionEnvironment;
          });
        } else if (typeof module2 !== "undefined" && module2.exports) {
          module2.exports = ExecutionEnvironment;
        } else {
          window.ExecutionEnvironment = ExecutionEnvironment;
        }
      })();
    }
  });

  // node_modules/@semantic-ui-react/event-stack/lib/cjs/event-stack.production.js
  var require_event_stack_production = __commonJS({
    "node_modules/@semantic-ui-react/event-stack/lib/cjs/event-stack.production.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var env = require_exenv();
      require_prop_types();
      var React55 = require_react();
      function _typeof(e) {
        return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        })(e);
      }
      function _classCallCheck(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
        }
      }
      function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
      }
      function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
      }
      function _inherits(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: true, configurable: true } }), t && _setPrototypeOf2(e, t);
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e2) {
          return e2.__proto__ || Object.getPrototypeOf(e2);
        })(e);
      }
      function _setPrototypeOf2(e, t) {
        return (_setPrototypeOf2 = Object.setPrototypeOf || function(e2, t2) {
          return e2.__proto__ = t2, e2;
        })(e, t);
      }
      function _assertThisInitialized2(e) {
        if (e === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function _possibleConstructorReturn(e, t) {
        return !t || typeof t != "object" && typeof t != "function" ? _assertThisInitialized2(e) : t;
      }
      var EventSet = function() {
        function e(t) {
          _classCallCheck(this, e), _defineProperty(this, "handlers", void 0), this.handlers = t.slice(0);
        }
        return _createClass(e, [{ key: "addHandlers", value: function(t) {
          for (var n = this.handlers.slice(0), r = t.length, o = 0; o < r; o += 1)
            n.push(t[o]);
          return new e(n);
        } }, { key: "dispatchEvent", value: function(e2, t) {
          var n = this.handlers.length - 1;
          if (t) {
            for (var r = n; r >= 0; r -= 1)
              this.handlers[r].called || (this.handlers[r].called = true, this.handlers[r](e2));
            for (var o = n; o >= 0; o -= 1)
              this.handlers[o].called = false;
          } else {
            (0, this.handlers[n])(e2);
          }
        } }, { key: "hasHandlers", value: function() {
          return this.handlers.length > 0;
        } }, { key: "removeHandlers", value: function(t) {
          for (var n = [], r = this.handlers.length, o = 0; o < r; o += 1) {
            var a = this.handlers[o];
            t.indexOf(a) === -1 && n.push(a);
          }
          return new e(n);
        } }]), e;
      }();
      function cloneMap(e) {
        var t = /* @__PURE__ */ new Map();
        return e.forEach(function(e2, n) {
          t.set(n, e2);
        }), t;
      }
      function normalizeHandlers(e) {
        return Array.isArray(e) ? e : [e];
      }
      var isRefObject = function(e) {
        return e !== null && _typeof(e) === "object" && e.hasOwnProperty("current");
      };
      function normalizeTarget(e) {
        return e === "document" ? document : e === "window" ? window : isRefObject(e) ? e.current || document : e || document;
      }
      var EventPool = function() {
        function e(t, n) {
          _classCallCheck(this, e), _defineProperty(this, "handlerSets", void 0), _defineProperty(this, "poolName", void 0), this.handlerSets = n, this.poolName = t;
        }
        return _createClass(e, [{ key: "addHandlers", value: function(t, n) {
          var r = cloneMap(this.handlerSets);
          if (r.has(t)) {
            var o = r.get(t);
            r.set(t, o.addHandlers(n));
          } else
            r.set(t, new EventSet(n));
          return new e(this.poolName, r);
        } }, { key: "dispatchEvent", value: function(e2, t) {
          var n = this.handlerSets.get(e2), r = this.poolName === "default";
          n && n.dispatchEvent(t, r);
        } }, { key: "hasHandlers", value: function(e2) {
          if (!e2)
            return this.handlerSets.size > 0;
          var t = this.handlerSets.get(e2);
          return !!t && t.hasHandlers();
        } }, { key: "removeHandlers", value: function(t, n) {
          var r = cloneMap(this.handlerSets);
          if (!r.has(t))
            return new e(this.poolName, r);
          var o = r.get(t).removeHandlers(n);
          return o.hasHandlers() ? r.set(t, o) : r.delete(t), new e(this.poolName, r);
        } }]), e;
      }();
      _defineProperty(EventPool, "createByType", function(e, t, n) {
        var r = /* @__PURE__ */ new Map();
        return r.set(t, new EventSet(n)), new EventPool(e, r);
      });
      var EventTarget = function() {
        function e(t) {
          var n = this;
          _classCallCheck(this, e), _defineProperty(this, "handlers", /* @__PURE__ */ new Map()), _defineProperty(this, "pools", /* @__PURE__ */ new Map()), _defineProperty(this, "target", void 0), _defineProperty(this, "createEmitter", function(e2) {
            return function(t2) {
              n.pools.forEach(function(n2) {
                n2.dispatchEvent(e2, t2);
              });
            };
          }), this.target = t;
        }
        return _createClass(e, [{ key: "addHandlers", value: function(e2, t, n) {
          if (this.pools.has(e2)) {
            var r = this.pools.get(e2);
            this.pools.set(e2, r.addHandlers(t, n));
          } else
            this.pools.set(e2, EventPool.createByType(e2, t, n));
          this.handlers.has(t) || this.addTargetHandler(t);
        } }, { key: "hasHandlers", value: function() {
          return this.handlers.size > 0;
        } }, { key: "removeHandlers", value: function(e2, t, n) {
          if (this.pools.has(e2)) {
            var r = this.pools.get(e2).removeHandlers(t, n);
            r.hasHandlers() ? this.pools.set(e2, r) : this.pools.delete(e2);
            var o = false;
            this.pools.forEach(function(e3) {
              return o = o || e3.hasHandlers(t);
            }), o || this.removeTargetHandler(t);
          }
        } }, { key: "addTargetHandler", value: function(e2) {
          var t = this.createEmitter(e2);
          this.handlers.set(e2, t), this.target.addEventListener(e2, t, true);
        } }, { key: "removeTargetHandler", value: function(e2) {
          this.handlers.has(e2) && (this.target.removeEventListener(e2, this.handlers.get(e2), true), this.handlers.delete(e2));
        } }]), e;
      }();
      var EventStack3 = function() {
        function e() {
          var t = this;
          _classCallCheck(this, e), _defineProperty(this, "targets", /* @__PURE__ */ new Map()), _defineProperty(this, "getTarget", function(e2) {
            var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r = normalizeTarget(e2);
            if (t.targets.has(r))
              return t.targets.get(r);
            if (!n)
              return null;
            var o = new EventTarget(r);
            return t.targets.set(r, o), o;
          }), _defineProperty(this, "removeTarget", function(e2) {
            t.targets.delete(normalizeTarget(e2));
          });
        }
        return _createClass(e, [{ key: "sub", value: function(e2, t) {
          var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (env.canUseDOM) {
            var r = n.target, o = r === void 0 ? document : r, a = n.pool, s = a === void 0 ? "default" : a;
            this.getTarget(o).addHandlers(s, e2, normalizeHandlers(t));
          }
        } }, { key: "unsub", value: function(e2, t) {
          var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (env.canUseDOM) {
            var r = n.target, o = r === void 0 ? document : r, a = n.pool, s = a === void 0 ? "default" : a, i = this.getTarget(o, false);
            i && (i.removeHandlers(s, e2, normalizeHandlers(t)), i.hasHandlers() || this.removeTarget(o));
          }
        } }]), e;
      }();
      var instance = new EventStack3();
      var EventStack$1 = function(e) {
        function t() {
          return _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments));
        }
        return _inherits(t, React55.PureComponent), _createClass(t, [{ key: "componentDidMount", value: function() {
          this.subscribe(this.props);
        } }, { key: "componentDidUpdate", value: function(e2) {
          this.unsubscribe(e2), this.subscribe(this.props);
        } }, { key: "componentWillUnmount", value: function() {
          this.unsubscribe(this.props);
        } }, { key: "subscribe", value: function(e2) {
          var t2 = e2.name, n = e2.on, r = e2.pool, o = e2.target;
          instance.sub(t2, n, { pool: r, target: o });
        } }, { key: "unsubscribe", value: function(e2) {
          var t2 = e2.name, n = e2.on, r = e2.pool, o = e2.target;
          instance.unsub(t2, n, { pool: r, target: o });
        } }, { key: "render", value: function() {
          return null;
        } }]), t;
      }();
      _defineProperty(EventStack$1, "defaultProps", { pool: "default", target: "document" }), EventStack$1.propTypes = {}, exports2.instance = instance, exports2.default = EventStack$1;
    }
  });

  // node_modules/@semantic-ui-react/event-stack/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@semantic-ui-react/event-stack/lib/index.js"(exports2, module2) {
      "use strict";
      var stack;
      if (true) {
        stack = require_event_stack_production();
      } else {
        stack = null;
      }
      module2.exports = stack.default;
      module2.exports.instance = stack.instance;
    }
  });

  // node_modules/keyboard-key/src/keyboardKey.js
  var require_keyboardKey = __commonJS({
    "node_modules/keyboard-key/src/keyboardKey.js"(exports2, module2) {
      "use strict";
      var isObject2 = function isObject3(val) {
        return val !== null && !Array.isArray(val) && typeof val === "object";
      };
      var codes = {
        3: "Cancel",
        6: "Help",
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        28: "Convert",
        29: "NonConvert",
        30: "Accept",
        31: "ModeChange",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        41: "Select",
        42: "Print",
        43: "Execute",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        48: ["0", ")"],
        49: ["1", "!"],
        50: ["2", "@"],
        51: ["3", "#"],
        52: ["4", "$"],
        53: ["5", "%"],
        54: ["6", "^"],
        55: ["7", "&"],
        56: ["8", "*"],
        57: ["9", "("],
        91: "OS",
        93: "ContextMenu",
        144: "NumLock",
        145: "ScrollLock",
        181: "VolumeMute",
        182: "VolumeDown",
        183: "VolumeUp",
        186: [";", ":"],
        187: ["=", "+"],
        188: [",", "<"],
        189: ["-", "_"],
        190: [".", ">"],
        191: ["/", "?"],
        192: ["`", "~"],
        219: ["[", "{"],
        220: ["\\", "|"],
        221: ["]", "}"],
        222: ["'", '"'],
        224: "Meta",
        225: "AltGraph",
        246: "Attn",
        247: "CrSel",
        248: "ExSel",
        249: "EraseEof",
        250: "Play",
        251: "ZoomOut"
      };
      for (i = 0; i < 24; i += 1) {
        codes[112 + i] = "F" + (i + 1);
      }
      var i;
      for (j = 0; j < 26; j += 1) {
        n = j + 65;
        codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
      }
      var n;
      var j;
      var keyboardKey3 = {
        codes,
        getCode: function getCode(eventOrKey) {
          if (isObject2(eventOrKey)) {
            return eventOrKey.keyCode || eventOrKey.which || this[eventOrKey.key];
          }
          return this[eventOrKey];
        },
        getKey: function getKey(eventOrCode) {
          var isEvent = isObject2(eventOrCode);
          if (isEvent && eventOrCode.key) {
            return eventOrCode.key;
          }
          var name = codes[isEvent ? eventOrCode.keyCode || eventOrCode.which : eventOrCode];
          if (Array.isArray(name)) {
            if (isEvent) {
              name = name[eventOrCode.shiftKey ? 1 : 0];
            } else {
              name = name[0];
            }
          }
          return name;
        },
        Cancel: 3,
        Help: 6,
        Backspace: 8,
        Tab: 9,
        Clear: 12,
        Enter: 13,
        Shift: 16,
        Control: 17,
        Alt: 18,
        Pause: 19,
        CapsLock: 20,
        Escape: 27,
        Convert: 28,
        NonConvert: 29,
        Accept: 30,
        ModeChange: 31,
        " ": 32,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Select: 41,
        Print: 42,
        Execute: 43,
        PrintScreen: 44,
        Insert: 45,
        Delete: 46,
        0: 48,
        ")": 48,
        1: 49,
        "!": 49,
        2: 50,
        "@": 50,
        3: 51,
        "#": 51,
        4: 52,
        $: 52,
        5: 53,
        "%": 53,
        6: 54,
        "^": 54,
        7: 55,
        "&": 55,
        8: 56,
        "*": 56,
        9: 57,
        "(": 57,
        a: 65,
        A: 65,
        b: 66,
        B: 66,
        c: 67,
        C: 67,
        d: 68,
        D: 68,
        e: 69,
        E: 69,
        f: 70,
        F: 70,
        g: 71,
        G: 71,
        h: 72,
        H: 72,
        i: 73,
        I: 73,
        j: 74,
        J: 74,
        k: 75,
        K: 75,
        l: 76,
        L: 76,
        m: 77,
        M: 77,
        n: 78,
        N: 78,
        o: 79,
        O: 79,
        p: 80,
        P: 80,
        q: 81,
        Q: 81,
        r: 82,
        R: 82,
        s: 83,
        S: 83,
        t: 84,
        T: 84,
        u: 85,
        U: 85,
        v: 86,
        V: 86,
        w: 87,
        W: 87,
        x: 88,
        X: 88,
        y: 89,
        Y: 89,
        z: 90,
        Z: 90,
        OS: 91,
        ContextMenu: 93,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        F13: 124,
        F14: 125,
        F15: 126,
        F16: 127,
        F17: 128,
        F18: 129,
        F19: 130,
        F20: 131,
        F21: 132,
        F22: 133,
        F23: 134,
        F24: 135,
        NumLock: 144,
        ScrollLock: 145,
        VolumeMute: 181,
        VolumeDown: 182,
        VolumeUp: 183,
        ";": 186,
        ":": 186,
        "=": 187,
        "+": 187,
        ",": 188,
        "<": 188,
        "-": 189,
        _: 189,
        ".": 190,
        ">": 190,
        "/": 191,
        "?": 191,
        "`": 192,
        "~": 192,
        "[": 219,
        "{": 219,
        "\\": 220,
        "|": 220,
        "]": 221,
        "}": 221,
        "'": 222,
        '"': 222,
        Meta: 224,
        AltGraph: 225,
        Attn: 246,
        CrSel: 247,
        ExSel: 248,
        EraseEof: 249,
        Play: 250,
        ZoomOut: 251
      };
      keyboardKey3.Spacebar = keyboardKey3[" "];
      keyboardKey3.Digit0 = keyboardKey3["0"];
      keyboardKey3.Digit1 = keyboardKey3["1"];
      keyboardKey3.Digit2 = keyboardKey3["2"];
      keyboardKey3.Digit3 = keyboardKey3["3"];
      keyboardKey3.Digit4 = keyboardKey3["4"];
      keyboardKey3.Digit5 = keyboardKey3["5"];
      keyboardKey3.Digit6 = keyboardKey3["6"];
      keyboardKey3.Digit7 = keyboardKey3["7"];
      keyboardKey3.Digit8 = keyboardKey3["8"];
      keyboardKey3.Digit9 = keyboardKey3["9"];
      keyboardKey3.Tilde = keyboardKey3["~"];
      keyboardKey3.GraveAccent = keyboardKey3["`"];
      keyboardKey3.ExclamationPoint = keyboardKey3["!"];
      keyboardKey3.AtSign = keyboardKey3["@"];
      keyboardKey3.PoundSign = keyboardKey3["#"];
      keyboardKey3.PercentSign = keyboardKey3["%"];
      keyboardKey3.Caret = keyboardKey3["^"];
      keyboardKey3.Ampersand = keyboardKey3["&"];
      keyboardKey3.PlusSign = keyboardKey3["+"];
      keyboardKey3.MinusSign = keyboardKey3["-"];
      keyboardKey3.EqualsSign = keyboardKey3["="];
      keyboardKey3.DivisionSign = keyboardKey3["/"];
      keyboardKey3.MultiplicationSign = keyboardKey3["*"];
      keyboardKey3.Comma = keyboardKey3[","];
      keyboardKey3.Decimal = keyboardKey3["."];
      keyboardKey3.Colon = keyboardKey3[":"];
      keyboardKey3.Semicolon = keyboardKey3[";"];
      keyboardKey3.Pipe = keyboardKey3["|"];
      keyboardKey3.BackSlash = keyboardKey3["\\"];
      keyboardKey3.QuestionMark = keyboardKey3["?"];
      keyboardKey3.SingleQuote = keyboardKey3["'"];
      keyboardKey3.DoubleQuote = keyboardKey3['"'];
      keyboardKey3.LeftCurlyBrace = keyboardKey3["{"];
      keyboardKey3.RightCurlyBrace = keyboardKey3["}"];
      keyboardKey3.LeftParenthesis = keyboardKey3["("];
      keyboardKey3.RightParenthesis = keyboardKey3[")"];
      keyboardKey3.LeftAngleBracket = keyboardKey3["<"];
      keyboardKey3.RightAngleBracket = keyboardKey3[">"];
      keyboardKey3.LeftSquareBracket = keyboardKey3["["];
      keyboardKey3.RightSquareBracket = keyboardKey3["]"];
      module2.exports = keyboardKey3;
    }
  });

  // node_modules/shallowequal/index.js
  var require_shallowequal = __commonJS({
    "node_modules/shallowequal/index.js"(exports2, module2) {
      module2.exports = function shallowEqual2(objA, objB, compare, compareContext) {
        var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
        if (ret !== void 0) {
          return !!ret;
        }
        if (objA === objB) {
          return true;
        }
        if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
        for (var idx = 0; idx < keysA.length; idx++) {
          var key = keysA[idx];
          if (!bHasOwnProperty(key)) {
            return false;
          }
          var valueA = objA[key];
          var valueB = objB[key];
          ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
          if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // src/components/App/index.tsx
  var import_react52 = __toESM(require_react(), 1);

  // node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }

  // node_modules/@fluentui/react-component-ref/dist/es/Ref.js
  var React3 = __toESM(require_react());
  var ReactIs = __toESM(require_react_is());

  // node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }

  // node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  // node_modules/@fluentui/react-component-ref/dist/es/RefFindNode.js
  var React = __toESM(require_react());
  var ReactDOM = __toESM(require_react_dom());

  // node_modules/@fluentui/react-component-ref/dist/es/utils.js
  var handleRef = function handleRef2(ref, node) {
    if (false) {
      if (typeof ref === "string") {
        throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
      }
    }
    if (typeof ref === "function") {
      ref(node);
      return;
    }
    if (ref !== null && typeof ref === "object") {
      ref.current = node;
    }
  };

  // node_modules/@fluentui/react-component-ref/dist/es/RefFindNode.js
  var RefFindNode = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(RefFindNode2, _React$Component);
    function RefFindNode2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.prevNode = null;
      return _this;
    }
    var _proto = RefFindNode2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      var currentNode = ReactDOM.findDOMNode(this);
      if (false) {
        if (isFiberRef(currentNode)) {
          currentNode = null;
        }
      }
      this.prevNode = currentNode;
      handleRef(this.props.innerRef, currentNode);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var currentNode = ReactDOM.findDOMNode(this);
      if (false) {
        if (isFiberRef(currentNode)) {
          currentNode = null;
        }
      }
      if (this.prevNode !== currentNode) {
        this.prevNode = currentNode;
        handleRef(this.props.innerRef, currentNode);
      }
      if (prevProps.innerRef !== this.props.innerRef) {
        handleRef(this.props.innerRef, currentNode);
      }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      handleRef(this.props.innerRef, null);
      delete this.prevNode;
    };
    _proto.render = function render() {
      var children = this.props.children;
      return children;
    };
    return RefFindNode2;
  }(React.Component);

  // node_modules/@fluentui/react-component-ref/dist/es/RefForward.js
  var React2 = __toESM(require_react());
  var RefForward = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(RefForward2, _React$Component);
    function RefForward2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.currentNode = null;
      _this.handleRefOverride = function(node) {
        var _this$props = _this.props, children = _this$props.children, innerRef = _this$props.innerRef;
        handleRef(children.ref, node);
        handleRef(innerRef, node);
        _this.currentNode = node;
      };
      return _this;
    }
    var _proto = RefForward2.prototype;
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (prevProps.innerRef !== this.props.innerRef) {
        handleRef(this.props.innerRef, this.currentNode);
      }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      delete this.currentNode;
    };
    _proto.render = function render() {
      var children = this.props.children;
      return /* @__PURE__ */ React2.cloneElement(children, {
        ref: this.handleRefOverride
      });
    };
    return RefForward2;
  }(React2.Component);

  // node_modules/@fluentui/react-component-ref/dist/es/Ref.js
  var Ref = function Ref2(props) {
    var children = props.children, innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, ["children", "innerRef"]);
    var child = React3.Children.only(children);
    var ElementType = ReactIs.isForwardRef(child) ? RefForward : RefFindNode;
    var childWithProps = child && rest && Object.keys(rest).length > 0 ? /* @__PURE__ */ React3.cloneElement(child, rest) : child;
    return /* @__PURE__ */ React3.createElement(ElementType, {
      innerRef
    }, childWithProps);
  };

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/lodash-es/_isKey.js
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray_default(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var isKey_default = isKey;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto4 = Object.prototype;
  var hasOwnProperty3 = objectProto4.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty3.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/lodash-es/_hashHas.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty4 = objectProto5.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
  }
  var hashHas_default = hashHas;

  // node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash_default(),
      "map": new (Map_default || ListCache_default)(),
      "string": new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // node_modules/lodash-es/_getMapData.js
  function getMapData(map2, key) {
    var data = map2.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // node_modules/lodash-es/memoize.js
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache_default)();
    return memoized;
  }
  memoize.Cache = MapCache_default;
  var memoize_default = memoize;

  // node_modules/lodash-es/_memoizeCapped.js
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize_default(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var memoizeCapped_default = memoizeCapped;

  // node_modules/lodash-es/_stringToPath.js
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped_default(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var stringToPath_default = stringToPath;

  // node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // node_modules/lodash-es/_baseToString.js
  var INFINITY = 1 / 0;
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray_default(value)) {
      return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var baseToString_default = baseToString;

  // node_modules/lodash-es/toString.js
  function toString(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default = toString;

  // node_modules/lodash-es/_castPath.js
  function castPath(value, object) {
    if (isArray_default(value)) {
      return value;
    }
    return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
  }
  var castPath_default = castPath;

  // node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/lodash-es/isArguments.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty5 = objectProto6.hasOwnProperty;
  var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/lodash-es/_toKey.js
  var INFINITY2 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol_default(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
  }
  var toKey_default = toKey;

  // node_modules/lodash-es/_hasPath.js
  function hasPath(object, path, hasFunc) {
    path = castPath_default(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey_default(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
  }
  var hasPath_default = hasPath;

  // node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var apply_default = apply;

  // node_modules/lodash-es/last.js
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  var last_default = last;

  // node_modules/lodash-es/_baseGet.js
  function baseGet(object, path) {
    path = castPath_default(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey_default(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var baseGet_default = baseGet;

  // node_modules/lodash-es/_baseSlice.js
  function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  var baseSlice_default = baseSlice;

  // node_modules/lodash-es/_parent.js
  function parent(object, path) {
    return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
  }
  var parent_default = parent;

  // node_modules/lodash-es/_baseInvoke.js
  function baseInvoke(object, path, args) {
    path = castPath_default(path, object);
    object = parent_default(object, path);
    var func = object == null ? object : object[toKey_default(last_default(path))];
    return func == null ? void 0 : apply_default(func, object, args);
  }
  var baseInvoke_default = baseInvoke;

  // node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/lodash-es/_overRest.js
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply_default(func, this, otherArgs);
    };
  }
  var overRest_default = overRest;

  // node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default = constant;

  // node_modules/lodash-es/_defineProperty.js
  var defineProperty = function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var defineProperty_default = defineProperty;

  // node_modules/lodash-es/_baseSetToString.js
  var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
    return defineProperty_default(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant_default(string),
      "writable": true
    });
  };
  var baseSetToString_default = baseSetToString;

  // node_modules/lodash-es/_shortOut.js
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var shortOut_default = shortOut;

  // node_modules/lodash-es/_setToString.js
  var setToString = shortOut_default(baseSetToString_default);
  var setToString_default = setToString;

  // node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default = baseRest;

  // node_modules/lodash-es/invoke.js
  var invoke = baseRest_default(baseInvoke_default);
  var invoke_default = invoke;

  // node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }

  // node_modules/lodash-es/isUndefined.js
  function isUndefined(value) {
    return value === void 0;
  }
  var isUndefined_default = isUndefined;

  // node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // node_modules/lodash-es/toFinite.js
  var INFINITY3 = 1 / 0;
  var MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber_default(value);
    if (value === INFINITY3 || value === -INFINITY3) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  var toFinite_default = toFinite;

  // node_modules/lodash-es/toInteger.js
  function toInteger(value) {
    var result = toFinite_default(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  var toInteger_default = toInteger;

  // node_modules/lodash-es/_arrayFilter.js
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var arrayFilter_default = arrayFilter;

  // node_modules/lodash-es/_createBaseFor.js
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var createBaseFor_default = createBaseFor;

  // node_modules/lodash-es/_baseFor.js
  var baseFor = createBaseFor_default();
  var baseFor_default = baseFor;

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty6 = objectProto7.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/lodash-es/_isPrototype.js
  var objectProto8 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto8;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/lodash-es/_baseKeys.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty7.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // node_modules/lodash-es/_baseForOwn.js
  function baseForOwn(object, iteratee) {
    return object && baseFor_default(object, iteratee, keys_default);
  }
  var baseForOwn_default = baseForOwn;

  // node_modules/lodash-es/_createBaseEach.js
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_default(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var createBaseEach_default = createBaseEach;

  // node_modules/lodash-es/_baseEach.js
  var baseEach = createBaseEach_default(baseForOwn_default);
  var baseEach_default = baseEach;

  // node_modules/lodash-es/_baseFilter.js
  function baseFilter(collection, predicate) {
    var result = [];
    baseEach_default(collection, function(value, index, collection2) {
      if (predicate(value, index, collection2)) {
        result.push(value);
      }
    });
    return result;
  }
  var baseFilter_default = baseFilter;

  // node_modules/lodash-es/_stackClear.js
  function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
  }
  var stackClear_default = stackClear;

  // node_modules/lodash-es/_stackDelete.js
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var stackDelete_default = stackDelete;

  // node_modules/lodash-es/_stackGet.js
  function stackGet(key) {
    return this.__data__.get(key);
  }
  var stackGet_default = stackGet;

  // node_modules/lodash-es/_stackHas.js
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var stackHas_default = stackHas;

  // node_modules/lodash-es/_stackSet.js
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache_default) {
      var pairs = data.__data__;
      if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var stackSet_default = stackSet;

  // node_modules/lodash-es/_Stack.js
  function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear_default;
  Stack.prototype["delete"] = stackDelete_default;
  Stack.prototype.get = stackGet_default;
  Stack.prototype.has = stackHas_default;
  Stack.prototype.set = stackSet_default;
  var Stack_default = Stack;

  // node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // node_modules/lodash-es/_SetCache.js
  function SetCache(values2) {
    var index = -1, length = values2 == null ? 0 : values2.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values2[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // node_modules/lodash-es/_arraySome.js
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  var arraySome_default = arraySome;

  // node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // node_modules/lodash-es/_equalArrays.js
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome_default(other, function(othValue2, othIndex) {
          if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var equalArrays_default = equalArrays;

  // node_modules/lodash-es/_Uint8Array.js
  var Uint8Array2 = root_default.Uint8Array;
  var Uint8Array_default = Uint8Array2;

  // node_modules/lodash-es/_mapToArray.js
  function mapToArray(map2) {
    var index = -1, result = Array(map2.size);
    map2.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  var mapToArray_default = mapToArray;

  // node_modules/lodash-es/_setToArray.js
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // node_modules/lodash-es/_equalByTag.js
  var COMPARE_PARTIAL_FLAG2 = 1;
  var COMPARE_UNORDERED_FLAG2 = 2;
  var boolTag2 = "[object Boolean]";
  var dateTag2 = "[object Date]";
  var errorTag2 = "[object Error]";
  var mapTag2 = "[object Map]";
  var numberTag2 = "[object Number]";
  var regexpTag2 = "[object RegExp]";
  var setTag2 = "[object Set]";
  var stringTag2 = "[object String]";
  var symbolTag2 = "[object Symbol]";
  var arrayBufferTag2 = "[object ArrayBuffer]";
  var dataViewTag2 = "[object DataView]";
  var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag2:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag2:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
          return false;
        }
        return true;
      case boolTag2:
      case dateTag2:
      case numberTag2:
        return eq_default(+object, +other);
      case errorTag2:
        return object.name == other.name && object.message == other.message;
      case regexpTag2:
      case stringTag2:
        return object == other + "";
      case mapTag2:
        var convert = mapToArray_default;
      case setTag2:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
        convert || (convert = setToArray_default);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG2;
        stack.set(object, other);
        var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag2:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var equalByTag_default = equalByTag;

  // node_modules/lodash-es/_arrayPush.js
  function arrayPush(array, values2) {
    var index = -1, length = values2.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values2[index];
    }
    return array;
  }
  var arrayPush_default = arrayPush;

  // node_modules/lodash-es/_baseGetAllKeys.js
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
  }
  var baseGetAllKeys_default = baseGetAllKeys;

  // node_modules/lodash-es/stubArray.js
  function stubArray() {
    return [];
  }
  var stubArray_default = stubArray;

  // node_modules/lodash-es/_getSymbols.js
  var objectProto10 = Object.prototype;
  var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable2.call(object, symbol);
    });
  };
  var getSymbols_default = getSymbols;

  // node_modules/lodash-es/_getAllKeys.js
  function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
  }
  var getAllKeys_default = getAllKeys;

  // node_modules/lodash-es/_equalObjects.js
  var COMPARE_PARTIAL_FLAG3 = 1;
  var objectProto11 = Object.prototype;
  var hasOwnProperty8 = objectProto11.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var equalObjects_default = equalObjects;

  // node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // node_modules/lodash-es/_getTag.js
  var mapTag3 = "[object Map]";
  var objectTag2 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag3 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag3 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag3 || Map_default && getTag(new Map_default()) != mapTag3 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag3 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag3;
          case mapCtorString:
            return mapTag3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag3;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/lodash-es/_baseIsEqualDeep.js
  var COMPARE_PARTIAL_FLAG4 = 1;
  var argsTag3 = "[object Arguments]";
  var arrayTag2 = "[object Array]";
  var objectTag3 = "[object Object]";
  var objectProto12 = Object.prototype;
  var hasOwnProperty9 = objectProto12.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
    objTag = objTag == argsTag3 ? objectTag3 : objTag;
    othTag = othTag == argsTag3 ? objectTag3 : othTag;
    var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer_default(object)) {
      if (!isBuffer_default(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack_default());
      return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
      var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack_default());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
  }
  var baseIsEqualDeep_default = baseIsEqualDeep;

  // node_modules/lodash-es/_baseIsEqual.js
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqual_default = baseIsEqual;

  // node_modules/lodash-es/_baseIsMatch.js
  var COMPARE_PARTIAL_FLAG5 = 1;
  var COMPARE_UNORDERED_FLAG3 = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack_default();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  var baseIsMatch_default = baseIsMatch;

  // node_modules/lodash-es/_isStrictComparable.js
  function isStrictComparable(value) {
    return value === value && !isObject_default(value);
  }
  var isStrictComparable_default = isStrictComparable;

  // node_modules/lodash-es/_getMatchData.js
  function getMatchData(object) {
    var result = keys_default(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable_default(value)];
    }
    return result;
  }
  var getMatchData_default = getMatchData;

  // node_modules/lodash-es/_matchesStrictComparable.js
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  var matchesStrictComparable_default = matchesStrictComparable;

  // node_modules/lodash-es/_baseMatches.js
  function baseMatches(source) {
    var matchData = getMatchData_default(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch_default(object, source, matchData);
    };
  }
  var baseMatches_default = baseMatches;

  // node_modules/lodash-es/get.js
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet_default(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_default = get;

  // node_modules/lodash-es/_baseHasIn.js
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  var baseHasIn_default = baseHasIn;

  // node_modules/lodash-es/hasIn.js
  function hasIn(object, path) {
    return object != null && hasPath_default(object, path, baseHasIn_default);
  }
  var hasIn_default = hasIn;

  // node_modules/lodash-es/_baseMatchesProperty.js
  var COMPARE_PARTIAL_FLAG6 = 1;
  var COMPARE_UNORDERED_FLAG4 = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey_default(path) && isStrictComparable_default(srcValue)) {
      return matchesStrictComparable_default(toKey_default(path), srcValue);
    }
    return function(object) {
      var objValue = get_default(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
    };
  }
  var baseMatchesProperty_default = baseMatchesProperty;

  // node_modules/lodash-es/_baseProperty.js
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  var baseProperty_default = baseProperty;

  // node_modules/lodash-es/_basePropertyDeep.js
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet_default(object, path);
    };
  }
  var basePropertyDeep_default = basePropertyDeep;

  // node_modules/lodash-es/property.js
  function property(path) {
    return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
  }
  var property_default = property;

  // node_modules/lodash-es/_baseIteratee.js
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity_default;
    }
    if (typeof value == "object") {
      return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
    }
    return property_default(value);
  }
  var baseIteratee_default = baseIteratee;

  // node_modules/lodash-es/filter.js
  function filter(collection, predicate) {
    var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
    return func(collection, baseIteratee_default(predicate, 3));
  }
  var filter_default = filter;

  // node_modules/lodash-es/isEmpty.js
  var mapTag4 = "[object Map]";
  var setTag4 = "[object Set]";
  var objectProto13 = Object.prototype;
  var hasOwnProperty10 = objectProto13.hasOwnProperty;
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
      return !value.length;
    }
    var tag = getTag_default(value);
    if (tag == mapTag4 || tag == setTag4) {
      return !value.size;
    }
    if (isPrototype_default(value)) {
      return !baseKeys_default(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty10.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  var isEmpty_default = isEmpty;

  // node_modules/lodash-es/_baseFindIndex.js
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  var baseFindIndex_default = baseFindIndex;

  // node_modules/lodash-es/_baseIsNaN.js
  function baseIsNaN(value) {
    return value !== value;
  }
  var baseIsNaN_default = baseIsNaN;

  // node_modules/lodash-es/_strictIndexOf.js
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  var strictIndexOf_default = strictIndexOf;

  // node_modules/lodash-es/_baseIndexOf.js
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
  }
  var baseIndexOf_default = baseIndexOf;

  // node_modules/lodash-es/_arrayIncludes.js
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf_default(array, value, 0) > -1;
  }
  var arrayIncludes_default = arrayIncludes;

  // node_modules/lodash-es/_arrayIncludesWith.js
  function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }
  var arrayIncludesWith_default = arrayIncludesWith;

  // node_modules/lodash-es/isArrayLikeObject.js
  function isArrayLikeObject(value) {
    return isObjectLike_default(value) && isArrayLike_default(value);
  }
  var isArrayLikeObject_default = isArrayLikeObject;

  // node_modules/lodash-es/_arrayEach.js
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var arrayEach_default = arrayEach;

  // node_modules/lodash-es/_castFunction.js
  function castFunction(value) {
    return typeof value == "function" ? value : identity_default;
  }
  var castFunction_default = castFunction;

  // node_modules/lodash-es/forEach.js
  function forEach(collection, iteratee) {
    var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
    return func(collection, castFunction_default(iteratee));
  }
  var forEach_default = forEach;

  // node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js
  var import_react = __toESM(require_react());
  var getDefaultPropName = function getDefaultPropName2(prop) {
    return "default" + (prop[0].toUpperCase() + prop.slice(1));
  };
  var getAutoControlledStateValue = function getAutoControlledStateValue2(propName, props, state, includeDefaults) {
    if (includeDefaults === void 0) {
      includeDefaults = false;
    }
    var propValue = props[propName];
    if (propValue !== void 0)
      return propValue;
    if (includeDefaults) {
      var defaultProp = props[getDefaultPropName(propName)];
      if (defaultProp !== void 0)
        return defaultProp;
      if (state) {
        var initialState = state[propName];
        if (initialState !== void 0)
          return initialState;
      }
    }
    if (propName === "checked")
      return false;
    if (propName === "value")
      return props.multiple ? [] : "";
  };
  var ModernAutoControlledComponent = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(ModernAutoControlledComponent2, _React$Component);
    function ModernAutoControlledComponent2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      var _this$constructor = _this.constructor, autoControlledProps = _this$constructor.autoControlledProps, getAutoControlledStateFromProps = _this$constructor.getAutoControlledStateFromProps;
      var state = invoke_default(_assertThisInitialized(_this), "getInitialAutoControlledState", _this.props) || {};
      if (false) {
        var _this$constructor2 = _this.constructor, defaultProps = _this$constructor2.defaultProps, name = _this$constructor2.name, propTypes = _this$constructor2.propTypes, getDerivedStateFromProps = _this$constructor2.getDerivedStateFromProps;
        if (getDerivedStateFromProps !== ModernAutoControlledComponent2.getDerivedStateFromProps) {
          console.error("Auto controlled " + name + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps().");
        }
        forEach_default(autoControlledProps, function(prop) {
          var defaultProp = getDefaultPropName(prop);
          if (!has_default(propTypes, defaultProp)) {
            console.error(name + ' is missing "' + defaultProp + '" propTypes validation for auto controlled prop "' + prop + '".');
          }
          if (!has_default(propTypes, prop)) {
            console.error(name + ' is missing propTypes validation for auto controlled prop "' + prop + '".');
          }
        });
        var illegalDefaults = intersection_default(autoControlledProps, keys_default(defaultProps));
        if (!isEmpty_default(illegalDefaults)) {
          console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + name + ' props: "' + illegalDefaults + '".'].join(" "));
        }
        var illegalAutoControlled = filter_default(autoControlledProps, function(prop) {
          return startsWith_default(prop, "default");
        });
        if (!isEmpty_default(illegalAutoControlled)) {
          console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + name + ' autoControlledProps: "' + illegalAutoControlled + '".'].join(" "));
        }
      }
      var initialAutoControlledState = autoControlledProps.reduce(function(acc, prop) {
        acc[prop] = getAutoControlledStateValue(prop, _this.props, state, true);
        if (false) {
          var defaultPropName = getDefaultPropName(prop);
          var _name = _this.constructor.name;
          if (!isUndefined_default(_this.props[defaultPropName]) && !isUndefined_default(_this.props[prop])) {
            console.error(_name + ' prop "' + prop + '" is auto controlled. Specify either ' + defaultPropName + " or " + prop + ", but not both.");
          }
        }
        return acc;
      }, {});
      _this.state = _extends({}, state, initialAutoControlledState, {
        autoControlledProps,
        getAutoControlledStateFromProps
      });
      return _this;
    }
    ModernAutoControlledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      var autoControlledProps = state.autoControlledProps, getAutoControlledStateFromProps = state.getAutoControlledStateFromProps;
      var newStateFromProps = autoControlledProps.reduce(function(acc, prop) {
        var isNextDefined = !isUndefined_default(props[prop]);
        if (isNextDefined)
          acc[prop] = props[prop];
        return acc;
      }, {});
      if (getAutoControlledStateFromProps) {
        var computedState = getAutoControlledStateFromProps(props, _extends({}, state, newStateFromProps), state);
        return _extends({}, newStateFromProps, computedState);
      }
      return newStateFromProps;
    };
    ModernAutoControlledComponent2.getAutoControlledStateFromProps = function getAutoControlledStateFromProps() {
      return null;
    };
    return ModernAutoControlledComponent2;
  }(import_react.default.Component);

  // node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
  var childrenUtils_exports = {};
  __export(childrenUtils_exports, {
    findByType: () => findByType,
    isNil: () => isNil,
    someByType: () => someByType
  });

  // node_modules/lodash-es/_createFind.js
  function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike_default(collection)) {
        var iteratee = baseIteratee_default(predicate, 3);
        collection = keys_default(collection);
        predicate = function(key) {
          return iteratee(iterable[key], key, iterable);
        };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
    };
  }
  var createFind_default = createFind;

  // node_modules/lodash-es/findIndex.js
  var nativeMax2 = Math.max;
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
    if (index < 0) {
      index = nativeMax2(length + index, 0);
    }
    return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index);
  }
  var findIndex_default = findIndex;

  // node_modules/lodash-es/find.js
  var find = createFind_default(findIndex_default);
  var find_default = find;

  // node_modules/lodash-es/_baseSome.js
  function baseSome(collection, predicate) {
    var result;
    baseEach_default(collection, function(value, index, collection2) {
      result = predicate(value, index, collection2);
      return !result;
    });
    return !!result;
  }
  var baseSome_default = baseSome;

  // node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // node_modules/lodash-es/some.js
  function some(collection, predicate, guard) {
    var func = isArray_default(collection) ? arraySome_default : baseSome_default;
    if (guard && isIterateeCall_default(collection, predicate, guard)) {
      predicate = void 0;
    }
    return func(collection, baseIteratee_default(predicate, 3));
  }
  var some_default = some;

  // node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
  var import_react2 = __toESM(require_react());
  var someByType = function someByType2(children, type) {
    return some_default(import_react2.Children.toArray(children), {
      type
    });
  };
  var findByType = function findByType2(children, type) {
    return find_default(import_react2.Children.toArray(children), {
      type
    });
  };
  var isNil = function isNil2(children) {
    return children === null || children === void 0 || Array.isArray(children) && children.length === 0;
  };

  // node_modules/semantic-ui-react/dist/es/lib/numberToWord.js
  var numberToWordMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen"
  };
  function numberToWord(value) {
    var type = typeof value;
    if (type === "string" || type === "number") {
      return numberToWordMap[value] || value;
    }
    return "";
  }

  // node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
  var useKeyOnly = function useKeyOnly2(val, key) {
    return val && key;
  };
  var useValueAndKey = function useValueAndKey2(val, key) {
    return val && val !== true && val + " " + key;
  };
  var useKeyOrValueAndKey = function useKeyOrValueAndKey2(val, key) {
    return val && (val === true ? key : val + " " + key);
  };
  var useMultipleProp = function useMultipleProp2(val, key) {
    if (!val || val === true)
      return null;
    return val.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(prop) {
      return prop.replace("-", " ") + " " + key;
    }).join(" ");
  };
  var useTextAlignProp = function useTextAlignProp2(val) {
    return val === "justified" ? "justified" : useValueAndKey(val, "aligned");
  };
  var useVerticalAlignProp = function useVerticalAlignProp2(val) {
    return useValueAndKey(val, "aligned");
  };
  var useWidthProp = function useWidthProp2(val, widthClass, canEqual) {
    if (widthClass === void 0) {
      widthClass = "";
    }
    if (canEqual === void 0) {
      canEqual = false;
    }
    if (canEqual && val === "equal") {
      return "equal width";
    }
    var valType = typeof val;
    if ((valType === "string" || valType === "number") && widthClass) {
      return numberToWord(val) + " " + widthClass;
    }
    return numberToWord(val);
  };

  // node_modules/lodash-es/_baseDifference.js
  var LARGE_ARRAY_SIZE2 = 200;
  function baseDifference(array, values2, iteratee, comparator) {
    var index = -1, includes2 = arrayIncludes_default, isCommon = true, length = array.length, result = [], valuesLength = values2.length;
    if (!length) {
      return result;
    }
    if (iteratee) {
      values2 = arrayMap_default(values2, baseUnary_default(iteratee));
    }
    if (comparator) {
      includes2 = arrayIncludesWith_default;
      isCommon = false;
    } else if (values2.length >= LARGE_ARRAY_SIZE2) {
      includes2 = cacheHas_default;
      isCommon = false;
      values2 = new SetCache_default(values2);
    }
    outer:
      while (++index < length) {
        var value = array[index], computed = iteratee == null ? value : iteratee(value);
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values2[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        } else if (!includes2(values2, computed, comparator)) {
          result.push(value);
        }
      }
    return result;
  }
  var baseDifference_default = baseDifference;

  // node_modules/lodash-es/_isFlattenable.js
  var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  var isFlattenable_default = isFlattenable;

  // node_modules/lodash-es/_baseFlatten.js
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable_default);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush_default(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var baseFlatten_default = baseFlatten;

  // node_modules/lodash-es/difference.js
  var difference = baseRest_default(function(array, values2) {
    return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true)) : [];
  });
  var difference_default = difference;

  // node_modules/lodash-es/_hasUnicode.js
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f";
  var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
  var rsComboSymbolsRange = "\\u20d0-\\u20ff";
  var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsZWJ = "\\u200d";
  var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  var hasUnicode_default = hasUnicode;

  // node_modules/lodash-es/_baseAssignValue.js
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty_default) {
      defineProperty_default(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseAssignValue_default = baseAssignValue;

  // node_modules/lodash-es/_assignValue.js
  var objectProto14 = Object.prototype;
  var hasOwnProperty11 = objectProto14.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty11.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignValue_default = assignValue;

  // node_modules/lodash-es/_baseSet.js
  function baseSet(object, path, value, customizer) {
    if (!isObject_default(object)) {
      return object;
    }
    path = castPath_default(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index < length) {
      var key = toKey_default(path[index]), newValue = value;
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return object;
      }
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
        }
      }
      assignValue_default(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  var baseSet_default = baseSet;

  // node_modules/lodash-es/_basePickBy.js
  function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {};
    while (++index < length) {
      var path = paths[index], value = baseGet_default(object, path);
      if (predicate(value, path)) {
        baseSet_default(result, castPath_default(path, object), value);
      }
    }
    return result;
  }
  var basePickBy_default = basePickBy;

  // node_modules/lodash-es/_basePick.js
  function basePick(object, paths) {
    return basePickBy_default(object, paths, function(value, path) {
      return hasIn_default(object, path);
    });
  }
  var basePick_default = basePick;

  // node_modules/lodash-es/flatten.js
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten_default(array, 1) : [];
  }
  var flatten_default = flatten;

  // node_modules/lodash-es/_flatRest.js
  function flatRest(func) {
    return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
  }
  var flatRest_default = flatRest;

  // node_modules/lodash-es/pick.js
  var pick = flatRest_default(function(object, paths) {
    return object == null ? {} : basePick_default(object, paths);
  });
  var pick_default = pick;

  // node_modules/lodash-es/_getPrototype.js
  var getPrototype = overArg_default(Object.getPrototypeOf, Object);
  var getPrototype_default = getPrototype;

  // node_modules/lodash-es/isPlainObject.js
  var objectTag4 = "[object Object]";
  var funcProto3 = Function.prototype;
  var objectProto15 = Object.prototype;
  var funcToString3 = funcProto3.toString;
  var hasOwnProperty12 = objectProto15.hasOwnProperty;
  var objectCtorString = funcToString3.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag4) {
      return false;
    }
    var proto = getPrototype_default(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty12.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
  }
  var isPlainObject_default = isPlainObject;

  // node_modules/lodash-es/isNil.js
  function isNil3(value) {
    return value == null;
  }
  var isNil_default = isNil3;

  // node_modules/lodash-es/_baseMap.js
  function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
    baseEach_default(collection, function(value, key, collection2) {
      result[++index] = iteratee(value, key, collection2);
    });
    return result;
  }
  var baseMap_default = baseMap;

  // node_modules/lodash-es/map.js
  function map(collection, iteratee) {
    var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
    return func(collection, baseIteratee_default(iteratee, 3));
  }
  var map_default = map;

  // node_modules/lodash-es/noop.js
  function noop() {
  }
  var noop_default = noop;

  // node_modules/lodash-es/_createSet.js
  var INFINITY4 = 1 / 0;
  var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY4) ? noop_default : function(values2) {
    return new Set_default(values2);
  };
  var createSet_default = createSet;

  // node_modules/lodash-es/_baseUniq.js
  var LARGE_ARRAY_SIZE3 = 200;
  function baseUniq(array, iteratee, comparator) {
    var index = -1, includes2 = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
    if (comparator) {
      isCommon = false;
      includes2 = arrayIncludesWith_default;
    } else if (length >= LARGE_ARRAY_SIZE3) {
      var set = iteratee ? null : createSet_default(array);
      if (set) {
        return setToArray_default(set);
      }
      isCommon = false;
      includes2 = cacheHas_default;
      seen = new SetCache_default();
    } else {
      seen = iteratee ? [] : result;
    }
    outer:
      while (++index < length) {
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        } else if (!includes2(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
    return result;
  }
  var baseUniq_default = baseUniq;

  // node_modules/lodash-es/uniq.js
  function uniq(array) {
    return array && array.length ? baseUniq_default(array) : [];
  }
  var uniq_default = uniq;

  // node_modules/lodash-es/isNumber.js
  var numberTag3 = "[object Number]";
  function isNumber(value) {
    return typeof value == "number" || isObjectLike_default(value) && baseGetTag_default(value) == numberTag3;
  }
  var isNumber_default = isNumber;

  // node_modules/lodash-es/isString.js
  var stringTag3 = "[object String]";
  function isString(value) {
    return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag3;
  }
  var isString_default = isString;

  // node_modules/lodash-es/isBoolean.js
  var boolTag3 = "[object Boolean]";
  function isBoolean(value) {
    return value === true || value === false || isObjectLike_default(value) && baseGetTag_default(value) == boolTag3;
  }
  var isBoolean_default = isBoolean;

  // node_modules/clsx/dist/clsx.m.js
  function toVal(mix) {
    var k, y, str = "";
    if (typeof mix === "string" || typeof mix === "number") {
      str += mix;
    } else if (typeof mix === "object") {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k]) {
            if (y = toVal(mix[k])) {
              str && (str += " ");
              str += y;
            }
          }
        }
      } else {
        for (k in mix) {
          if (mix[k]) {
            str && (str += " ");
            str += k;
          }
        }
      }
    }
    return str;
  }
  function clsx_m_default() {
    var i = 0, tmp, x, str = "";
    while (i < arguments.length) {
      if (tmp = arguments[i++]) {
        if (x = toVal(tmp)) {
          str && (str += " ");
          str += x;
        }
      }
    }
    return str;
  }

  // node_modules/semantic-ui-react/dist/es/lib/factories.js
  var React5 = __toESM(require_react());
  function createShorthand(Component11, mapValueToProps, val, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof Component11 !== "function" && typeof Component11 !== "string") {
      throw new Error("createShorthand() Component must be a string or function.");
    }
    if (isNil_default(val) || isBoolean_default(val)) {
      return null;
    }
    var valIsString = isString_default(val);
    var valIsNumber = isNumber_default(val);
    var valIsFunction = isFunction_default(val);
    var valIsReactElement = /* @__PURE__ */ React5.isValidElement(val);
    var valIsPropsObject = isPlainObject_default(val);
    var valIsPrimitiveValue = valIsString || valIsNumber || isArray_default(val);
    if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
      if (false) {
        console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof val + "."].join(""));
      }
      return null;
    }
    var _options = options, _options$defaultProps = _options.defaultProps, defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps;
    var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val);
    var _options2 = options, _options2$overridePro = _options2.overrideProps, overrideProps = _options2$overridePro === void 0 ? {} : _options2$overridePro;
    overrideProps = isFunction_default(overrideProps) ? overrideProps(_extends({}, defaultProps, usersProps)) : overrideProps;
    var props = _extends({}, defaultProps, usersProps, overrideProps);
    if (defaultProps.className || overrideProps.className || usersProps.className) {
      var mergedClassesNames = clsx_m_default(defaultProps.className, overrideProps.className, usersProps.className);
      props.className = uniq_default(mergedClassesNames.split(" ")).join(" ");
    }
    if (defaultProps.style || overrideProps.style || usersProps.style) {
      props.style = _extends({}, defaultProps.style, usersProps.style, overrideProps.style);
    }
    if (isNil_default(props.key)) {
      var childKey = props.childKey;
      var _options3 = options, _options3$autoGenerat = _options3.autoGenerateKey, autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;
      if (!isNil_default(childKey)) {
        props.key = typeof childKey === "function" ? childKey(props) : childKey;
        delete props.childKey;
      } else if (autoGenerateKey && (valIsString || valIsNumber)) {
        props.key = val;
      }
    }
    if (valIsReactElement) {
      return /* @__PURE__ */ React5.cloneElement(val, props);
    }
    if (typeof props.children === "function") {
      return props.children(Component11, _extends({}, props, {
        children: void 0
      }));
    }
    if (valIsPrimitiveValue || valIsPropsObject) {
      return /* @__PURE__ */ React5.createElement(Component11, props);
    }
    if (valIsFunction) {
      if (false) {
        if (!DEPRECATED_CALLS[Component11]) {
          DEPRECATED_CALLS[Component11] = true;
          console.warn('Warning: There is a deprecated shorthand function usage for "' + Component11 + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029');
        }
      }
      return val(Component11, props, props.children);
    }
  }
  function createShorthandFactory(Component11, mapValueToProps) {
    if (typeof Component11 !== "function" && typeof Component11 !== "string") {
      throw new Error("createShorthandFactory() Component must be a string or function.");
    }
    return function(val, options) {
      return createShorthand(Component11, mapValueToProps, val, options);
    };
  }
  var createHTMLInput = /* @__PURE__ */ createShorthandFactory("input", function(val) {
    return {
      type: val
    };
  });

  // node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
  var getUnhandledProps = function getUnhandledProps2(Component11, props) {
    var _Component$handledPro = Component11.handledProps, handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
    return Object.keys(props).reduce(function(acc, prop) {
      if (prop === "childKey")
        return acc;
      if (handledProps.indexOf(prop) === -1)
        acc[prop] = props[prop];
      return acc;
    }, {});
  };
  var getUnhandledProps_default = getUnhandledProps;

  // node_modules/semantic-ui-react/dist/es/lib/getElementType.js
  function getElementType(Component11, props, getDefault) {
    var _Component$defaultPro = Component11.defaultProps, defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro;
    if (props.as && props.as !== defaultProps.as)
      return props.as;
    if (getDefault) {
      var computedDefault = getDefault();
      if (computedDefault)
        return computedDefault;
    }
    if (props.href)
      return "a";
    return defaultProps.as || "div";
  }
  var getElementType_default = getElementType;

  // node_modules/lodash-es/_baseValues.js
  function baseValues(object, props) {
    return arrayMap_default(props, function(key) {
      return object[key];
    });
  }
  var baseValues_default = baseValues;

  // node_modules/lodash-es/values.js
  function values(object) {
    return object == null ? [] : baseValues_default(object, keys_default(object));
  }
  var values_default = values;

  // node_modules/lodash-es/includes.js
  var nativeMax3 = Math.max;
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike_default(collection) ? collection : values_default(collection);
    fromIndex = fromIndex && !guard ? toInteger_default(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax3(length + fromIndex, 0);
    }
    return isString_default(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf_default(collection, value, fromIndex) > -1;
  }
  var includes_default = includes;

  // node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js
  var htmlInputAttrs = [
    "selected",
    "defaultValue",
    "defaultChecked",
    "accept",
    "autoCapitalize",
    "autoComplete",
    "autoCorrect",
    "autoFocus",
    "checked",
    "disabled",
    "form",
    "id",
    "inputMode",
    "lang",
    "list",
    "max",
    "maxLength",
    "min",
    "minLength",
    "multiple",
    "name",
    "pattern",
    "placeholder",
    "readOnly",
    "required",
    "step",
    "title",
    "type",
    "value"
  ];
  var htmlInputEvents = [
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onClick",
    "onContextMenu",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onSelect",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart"
  ];
  var htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);
  var htmlImageProps = ["alt", "height", "src", "srcSet", "width", "loading"];
  var partitionHTMLProps = function partitionHTMLProps2(props, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$htmlProps = _options.htmlProps, htmlProps = _options$htmlProps === void 0 ? htmlInputProps : _options$htmlProps, _options$includeAria = _options.includeAria, includeAria = _options$includeAria === void 0 ? true : _options$includeAria;
    var inputProps = {};
    var rest = {};
    forEach_default(props, function(val, prop) {
      var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === "role");
      var target = includes_default(htmlProps, prop) || possibleAria ? inputProps : rest;
      target[prop] = val;
    });
    return [inputProps, rest];
  };

  // node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
  var hasDocument = typeof document === "object" && document !== null;
  var hasWindow = typeof window === "object" && window !== null && window.self === window;
  var isBrowser = function isBrowser2() {
    return !isNil_default(isBrowser2.override) ? isBrowser2.override : hasDocument && hasWindow;
  };
  var isBrowser_default = isBrowser;

  // node_modules/lodash-es/_baseInRange.js
  var nativeMax4 = Math.max;
  var nativeMin = Math.min;
  function baseInRange(number, start, end) {
    return number >= nativeMin(start, end) && number < nativeMax4(start, end);
  }
  var baseInRange_default = baseInRange;

  // node_modules/lodash-es/inRange.js
  function inRange(number, start, end) {
    start = toFinite_default(start);
    if (end === void 0) {
      end = start;
      start = 0;
    } else {
      end = toFinite_default(end);
    }
    number = toNumber_default(number);
    return baseInRange_default(number, start, end);
  }
  var inRange_default = inRange;

  // node_modules/lodash-es/head.js
  function head(array) {
    return array && array.length ? array[0] : void 0;
  }
  var head_default = head;

  // node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
  var doesNodeContainClick = function doesNodeContainClick2(node, e) {
    if (some_default([e, node], isNil_default))
      return false;
    if (e.target) {
      invoke_default(e.target, "setAttribute", "data-suir-click-target", true);
      if (document.querySelector("[data-suir-click-target=true]")) {
        invoke_default(e.target, "removeAttribute", "data-suir-click-target");
        return node.contains(e.target);
      }
    }
    var clientX = e.clientX, clientY = e.clientY;
    if (some_default([clientX, clientY], isNil_default))
      return false;
    var clientRects = node.getClientRects();
    if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length)
      return false;
    var _first2 = head_default(clientRects), top = _first2.top, bottom = _first2.bottom, left = _first2.left, right = _first2.right;
    if (some_default([top, bottom, left, right], isNil_default))
      return false;
    return inRange_default(clientY, top, bottom + 1e-3) && inRange_default(clientX, left, right + 1e-3);
  };
  var doesNodeContainClick_default = doesNodeContainClick;

  // node_modules/lodash-es/isEqual.js
  function isEqual(value, other) {
    return baseIsEqual_default(value, other);
  }
  var isEqual_default = isEqual;

  // node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
  var import_react18 = __toESM(require_react());

  // node_modules/lodash-es/without.js
  var without = baseRest_default(function(array, values2) {
    return isArrayLikeObject_default(array) ? baseDifference_default(array, values2) : [];
  });
  var without_default = without;

  // node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
  var import_react4 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js
  var import_react3 = __toESM(require_react());
  function IconGroup(props) {
    var children = props.children, className = props.className, content = props.content, size2 = props.size;
    var classes = clsx_m_default(size2, "icons", className);
    var rest = getUnhandledProps_default(IconGroup, props);
    var ElementType = getElementType_default(IconGroup, props);
    return /* @__PURE__ */ import_react3.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  IconGroup.handledProps = ["as", "children", "className", "content", "size"];
  IconGroup.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    size: import_prop_types.default.oneOf(without_default(SUI_exports.SIZES, "medium"))
  } : {};
  IconGroup.defaultProps = {
    as: "i"
  };
  var IconGroup_default = IconGroup;

  // node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
  var Icon = /* @__PURE__ */ function(_PureComponent) {
    _inheritsLoose(Icon2, _PureComponent);
    function Icon2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
      _this.handleClick = function(e) {
        var disabled = _this.props.disabled;
        if (disabled) {
          e.preventDefault();
          return;
        }
        invoke_default(_this.props, "onClick", e, _this.props);
      };
      return _this;
    }
    var _proto = Icon2.prototype;
    _proto.getIconAriaOptions = function getIconAriaOptions() {
      var ariaOptions = {};
      var _this$props = this.props, ariaLabel = _this$props["aria-label"], ariaHidden = _this$props["aria-hidden"];
      if (isNil_default(ariaLabel)) {
        ariaOptions["aria-hidden"] = "true";
      } else {
        ariaOptions["aria-label"] = ariaLabel;
      }
      if (!isNil_default(ariaHidden)) {
        ariaOptions["aria-hidden"] = ariaHidden;
      }
      return ariaOptions;
    };
    _proto.render = function render() {
      var _this$props2 = this.props, bordered = _this$props2.bordered, circular = _this$props2.circular, className = _this$props2.className, color = _this$props2.color, corner = _this$props2.corner, disabled = _this$props2.disabled, fitted = _this$props2.fitted, flipped = _this$props2.flipped, inverted = _this$props2.inverted, link = _this$props2.link, loading = _this$props2.loading, name = _this$props2.name, rotated = _this$props2.rotated, size2 = _this$props2.size;
      var classes = clsx_m_default(color, name, size2, useKeyOnly(bordered, "bordered"), useKeyOnly(circular, "circular"), useKeyOnly(disabled, "disabled"), useKeyOnly(fitted, "fitted"), useKeyOnly(inverted, "inverted"), useKeyOnly(link, "link"), useKeyOnly(loading, "loading"), useKeyOrValueAndKey(corner, "corner"), useValueAndKey(flipped, "flipped"), useValueAndKey(rotated, "rotated"), "icon", className);
      var rest = getUnhandledProps_default(Icon2, this.props);
      var ElementType = getElementType_default(Icon2, this.props);
      var ariaOptions = this.getIconAriaOptions();
      return /* @__PURE__ */ import_react4.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }));
    };
    return Icon2;
  }(import_react4.PureComponent);
  Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
  Icon.propTypes = false ? {
    as: import_prop_types.default.elementType,
    bordered: import_prop_types.default.bool,
    circular: import_prop_types.default.bool,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    corner: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["top left", "top right", "bottom left", "bottom right"])]),
    disabled: import_prop_types.default.bool,
    fitted: import_prop_types.default.bool,
    flipped: import_prop_types.default.oneOf(["horizontally", "vertically"]),
    inverted: import_prop_types.default.bool,
    link: import_prop_types.default.bool,
    loading: import_prop_types.default.bool,
    name: customPropTypes_exports.suggest(SUI_exports.ALL_ICONS_IN_ALL_CONTEXTS),
    rotated: import_prop_types.default.oneOf(["clockwise", "counterclockwise"]),
    size: import_prop_types.default.oneOf(without_default(SUI_exports.SIZES, "medium")),
    "aria-hidden": import_prop_types.default.string,
    "aria-label": import_prop_types.default.string
  } : {};
  Icon.defaultProps = {
    as: "i"
  };
  Icon.Group = IconGroup_default;
  Icon.create = createShorthandFactory(Icon, function(value) {
    return {
      name: value
    };
  });
  var Icon_default = Icon;

  // node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
  var import_react14 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
  var import_react11 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
  var import_react9 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
  var import_event_stack = __toESM(require_lib());
  var import_keyboard_key = __toESM(require_keyboardKey());
  var import_react6 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js
  var import_react5 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());
  var PortalInner = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(PortalInner2, _Component);
    function PortalInner2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.handleRef = function(c) {
        handleRef(_this.props.innerRef, c);
      };
      return _this;
    }
    var _proto = PortalInner2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      invoke_default(this.props, "onMount", null, this.props);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      invoke_default(this.props, "onUnmount", null, this.props);
    };
    _proto.render = function render() {
      if (!isBrowser_default())
        return null;
      var _this$props = this.props, children = _this$props.children, _this$props$mountNode = _this$props.mountNode, mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
      return /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react5.default.createElement(Ref, {
        innerRef: this.handleRef
      }, children), mountNode);
    };
    return PortalInner2;
  }(import_react5.Component);
  PortalInner.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
  PortalInner.propTypes = false ? {
    children: import_prop_types.default.node.isRequired,
    innerRef: customPropTypes_exports.ref,
    mountNode: import_prop_types.default.any,
    onMount: import_prop_types.default.func,
    onUnmount: import_prop_types.default.func
  } : {};
  var PortalInner_default = PortalInner;

  // node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
  var Portal = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Portal2, _Component);
    function Portal2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.contentRef = /* @__PURE__ */ import_react6.default.createRef();
      _this.triggerRef = /* @__PURE__ */ import_react6.default.createRef();
      _this.latestDocumentMouseDownEvent = null;
      _this.handleDocumentMouseDown = function(e) {
        _this.latestDocumentMouseDownEvent = e;
      };
      _this.handleDocumentClick = function(e) {
        var closeOnDocumentClick = _this.props.closeOnDocumentClick;
        var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
        _this.latestDocumentMouseDownEvent = null;
        if (!_this.contentRef.current || doesNodeContainClick_default(_this.triggerRef.current, e) || currentMouseDownEvent && doesNodeContainClick_default(_this.contentRef.current, currentMouseDownEvent) || doesNodeContainClick_default(_this.contentRef.current, e)) {
          return;
        }
        if (closeOnDocumentClick) {
          _this.close(e);
        }
      };
      _this.handleEscape = function(e) {
        if (!_this.props.closeOnEscape)
          return;
        if (import_keyboard_key.default.getCode(e) !== import_keyboard_key.default.Escape)
          return;
        _this.close(e);
      };
      _this.handlePortalMouseLeave = function(e) {
        var _this$props = _this.props, closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave, mouseLeaveDelay = _this$props.mouseLeaveDelay;
        if (!closeOnPortalMouseLeave)
          return;
        if (e.target !== _this.contentRef.current)
          return;
        _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
      };
      _this.handlePortalMouseEnter = function() {
        var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
        if (!closeOnPortalMouseLeave)
          return;
        clearTimeout(_this.mouseLeaveTimer);
      };
      _this.handleTriggerBlur = function(e) {
        var _this$props2 = _this.props, trigger = _this$props2.trigger, closeOnTriggerBlur = _this$props2.closeOnTriggerBlur;
        for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          rest[_key2 - 1] = arguments[_key2];
        }
        invoke_default.apply(void 0, [trigger, "props.onBlur", e].concat(rest));
        var target = e.relatedTarget || document.activeElement;
        var didFocusPortal = invoke_default(_this.contentRef.current, "contains", target);
        if (!closeOnTriggerBlur || didFocusPortal)
          return;
        _this.close(e);
      };
      _this.handleTriggerClick = function(e) {
        var _this$props3 = _this.props, trigger = _this$props3.trigger, closeOnTriggerClick = _this$props3.closeOnTriggerClick, openOnTriggerClick = _this$props3.openOnTriggerClick;
        var open = _this.state.open;
        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rest[_key3 - 1] = arguments[_key3];
        }
        invoke_default.apply(void 0, [trigger, "props.onClick", e].concat(rest));
        if (open && closeOnTriggerClick) {
          _this.close(e);
        } else if (!open && openOnTriggerClick) {
          _this.open(e);
        }
      };
      _this.handleTriggerFocus = function(e) {
        var _this$props4 = _this.props, trigger = _this$props4.trigger, openOnTriggerFocus = _this$props4.openOnTriggerFocus;
        for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          rest[_key4 - 1] = arguments[_key4];
        }
        invoke_default.apply(void 0, [trigger, "props.onFocus", e].concat(rest));
        if (!openOnTriggerFocus)
          return;
        _this.open(e);
      };
      _this.handleTriggerMouseLeave = function(e) {
        clearTimeout(_this.mouseEnterTimer);
        var _this$props5 = _this.props, trigger = _this$props5.trigger, closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave, mouseLeaveDelay = _this$props5.mouseLeaveDelay;
        for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          rest[_key5 - 1] = arguments[_key5];
        }
        invoke_default.apply(void 0, [trigger, "props.onMouseLeave", e].concat(rest));
        if (!closeOnTriggerMouseLeave)
          return;
        _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
      };
      _this.handleTriggerMouseEnter = function(e) {
        clearTimeout(_this.mouseLeaveTimer);
        var _this$props6 = _this.props, trigger = _this$props6.trigger, mouseEnterDelay = _this$props6.mouseEnterDelay, openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter;
        for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          rest[_key6 - 1] = arguments[_key6];
        }
        invoke_default.apply(void 0, [trigger, "props.onMouseEnter", e].concat(rest));
        if (!openOnTriggerMouseEnter)
          return;
        _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
      };
      _this.open = function(e) {
        invoke_default(_this.props, "onOpen", e, _extends({}, _this.props, {
          open: true
        }));
        _this.setState({
          open: true
        });
      };
      _this.openWithTimeout = function(e, delay) {
        var eventClone = _extends({}, e);
        return setTimeout(function() {
          return _this.open(eventClone);
        }, delay || 0);
      };
      _this.close = function(e) {
        _this.setState({
          open: false
        });
        invoke_default(_this.props, "onClose", e, _extends({}, _this.props, {
          open: false
        }));
      };
      _this.closeWithTimeout = function(e, delay) {
        var eventClone = _extends({}, e);
        return setTimeout(function() {
          return _this.close(eventClone);
        }, delay || 0);
      };
      _this.handleMount = function() {
        invoke_default(_this.props, "onMount", null, _this.props);
      };
      _this.handleUnmount = function() {
        invoke_default(_this.props, "onUnmount", null, _this.props);
      };
      _this.handleTriggerRef = function(c) {
        _this.triggerRef.current = c;
        handleRef(_this.props.triggerRef, c);
      };
      return _this;
    }
    var _proto = Portal2.prototype;
    _proto.componentWillUnmount = function componentWillUnmount() {
      clearTimeout(this.mouseEnterTimer);
      clearTimeout(this.mouseLeaveTimer);
    };
    _proto.render = function render() {
      var _this$props7 = this.props, children = _this$props7.children, eventPool = _this$props7.eventPool, mountNode = _this$props7.mountNode, trigger = _this$props7.trigger;
      var open = this.state.open;
      if (false) {
        validateTrigger(trigger);
      }
      return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, open && /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(PortalInner_default, {
        innerRef: this.contentRef,
        mountNode,
        onMount: this.handleMount,
        onUnmount: this.handleUnmount
      }, children), /* @__PURE__ */ import_react6.default.createElement(import_event_stack.default, {
        name: "mouseleave",
        on: this.handlePortalMouseLeave,
        pool: eventPool,
        target: this.contentRef
      }), /* @__PURE__ */ import_react6.default.createElement(import_event_stack.default, {
        name: "mouseenter",
        on: this.handlePortalMouseEnter,
        pool: eventPool,
        target: this.contentRef
      }), /* @__PURE__ */ import_react6.default.createElement(import_event_stack.default, {
        name: "mousedown",
        on: this.handleDocumentMouseDown,
        pool: eventPool
      }), /* @__PURE__ */ import_react6.default.createElement(import_event_stack.default, {
        name: "click",
        on: this.handleDocumentClick,
        pool: eventPool
      }), /* @__PURE__ */ import_react6.default.createElement(import_event_stack.default, {
        name: "keydown",
        on: this.handleEscape,
        pool: eventPool
      })), trigger && /* @__PURE__ */ import_react6.default.createElement(Ref, {
        innerRef: this.handleTriggerRef
      }, /* @__PURE__ */ import_react6.default.cloneElement(trigger, {
        onBlur: this.handleTriggerBlur,
        onClick: this.handleTriggerClick,
        onFocus: this.handleTriggerFocus,
        onMouseLeave: this.handleTriggerMouseLeave,
        onMouseEnter: this.handleTriggerMouseEnter
      })));
    };
    return Portal2;
  }(ModernAutoControlledComponent);
  Portal.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
  Portal.propTypes = false ? {
    children: import_prop_types.default.node.isRequired,
    closeOnDocumentClick: import_prop_types.default.bool,
    closeOnEscape: import_prop_types.default.bool,
    closeOnPortalMouseLeave: import_prop_types.default.bool,
    closeOnTriggerBlur: import_prop_types.default.bool,
    closeOnTriggerClick: import_prop_types.default.bool,
    closeOnTriggerMouseLeave: import_prop_types.default.bool,
    defaultOpen: import_prop_types.default.bool,
    eventPool: import_prop_types.default.string,
    mountNode: import_prop_types.default.any,
    mouseEnterDelay: import_prop_types.default.number,
    mouseLeaveDelay: import_prop_types.default.number,
    onClose: import_prop_types.default.func,
    onMount: import_prop_types.default.func,
    onOpen: import_prop_types.default.func,
    onUnmount: import_prop_types.default.func,
    open: import_prop_types.default.bool,
    openOnTriggerClick: import_prop_types.default.bool,
    openOnTriggerFocus: import_prop_types.default.bool,
    openOnTriggerMouseEnter: import_prop_types.default.bool,
    trigger: import_prop_types.default.node,
    triggerRef: customPropTypes_exports.ref
  } : {};
  Portal.defaultProps = {
    closeOnDocumentClick: true,
    closeOnEscape: true,
    eventPool: "default",
    openOnTriggerClick: true
  };
  Portal.autoControlledProps = ["open"];
  Portal.Inner = PortalInner_default;
  var Portal_default = Portal;

  // node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js
  var import_react7 = __toESM(require_react());
  function DimmerDimmable(props) {
    var blurring = props.blurring, className = props.className, children = props.children, content = props.content, dimmed = props.dimmed;
    var classes = clsx_m_default(useKeyOnly(blurring, "blurring"), useKeyOnly(dimmed, "dimmed"), "dimmable", className);
    var rest = getUnhandledProps_default(DimmerDimmable, props);
    var ElementType = getElementType_default(DimmerDimmable, props);
    return /* @__PURE__ */ import_react7.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
  DimmerDimmable.propTypes = false ? {
    as: import_prop_types.default.elementType,
    blurring: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    dimmed: import_prop_types.default.bool
  } : {};
  var DimmerDimmable_default = DimmerDimmable;

  // node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js
  var import_react8 = __toESM(require_react());
  var DimmerInner = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(DimmerInner2, _Component);
    function DimmerInner2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.containerRef = /* @__PURE__ */ (0, import_react8.createRef)();
      _this.contentRef = /* @__PURE__ */ (0, import_react8.createRef)();
      _this.handleClick = function(e) {
        var contentRef = _this.contentRef.current;
        invoke_default(_this.props, "onClick", e, _this.props);
        if (contentRef && contentRef !== e.target && doesNodeContainClick_default(contentRef, e)) {
          return;
        }
        invoke_default(_this.props, "onClickOutside", e, _this.props);
      };
      return _this;
    }
    var _proto = DimmerInner2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      var active = this.props.active;
      this.toggleStyles(active);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var currentActive = this.props.active;
      var prevActive = prevProps.active;
      if (prevActive !== currentActive)
        this.toggleStyles(currentActive);
    };
    _proto.toggleStyles = function toggleStyles(active) {
      var containerRef = this.containerRef.current;
      if (!containerRef || !containerRef.style)
        return;
      if (active) {
        containerRef.style.setProperty("display", "flex", "important");
      } else {
        containerRef.style.removeProperty("display");
      }
    };
    _proto.render = function render() {
      var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, disabled = _this$props.disabled, inverted = _this$props.inverted, page = _this$props.page, simple = _this$props.simple, verticalAlign = _this$props.verticalAlign;
      var classes = clsx_m_default("ui", useKeyOnly(active, "active transition visible"), useKeyOnly(disabled, "disabled"), useKeyOnly(inverted, "inverted"), useKeyOnly(page, "page"), useKeyOnly(simple, "simple"), useVerticalAlignProp(verticalAlign), "dimmer", className);
      var rest = getUnhandledProps_default(DimmerInner2, this.props);
      var ElementType = getElementType_default(DimmerInner2, this.props);
      var childrenContent = childrenUtils_exports.isNil(children) ? content : children;
      return /* @__PURE__ */ import_react8.default.createElement(Ref, {
        innerRef: this.containerRef
      }, /* @__PURE__ */ import_react8.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), childrenContent && /* @__PURE__ */ import_react8.default.createElement("div", {
        className: "content",
        ref: this.contentRef
      }, childrenContent)));
    };
    return DimmerInner2;
  }(import_react8.Component);
  DimmerInner.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
  DimmerInner.propTypes = false ? {
    as: import_prop_types.default.elementType,
    active: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    disabled: import_prop_types.default.bool,
    onClick: import_prop_types.default.func,
    onClickOutside: import_prop_types.default.func,
    inverted: import_prop_types.default.bool,
    page: import_prop_types.default.bool,
    simple: import_prop_types.default.bool,
    verticalAlign: import_prop_types.default.oneOf(["bottom", "top"])
  } : {};

  // node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
  var Dimmer = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Dimmer2, _Component);
    function Dimmer2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.handlePortalMount = function() {
        if (!isBrowser_default())
          return;
        document.body.classList.add("dimmed");
        document.body.classList.add("dimmable");
      };
      _this.handlePortalUnmount = function() {
        if (!isBrowser_default())
          return;
        document.body.classList.remove("dimmed");
        document.body.classList.remove("dimmable");
      };
      return _this;
    }
    var _proto = Dimmer2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, active = _this$props.active, page = _this$props.page;
      var rest = getUnhandledProps_default(Dimmer2, this.props);
      if (page) {
        return /* @__PURE__ */ import_react9.default.createElement(Portal_default, {
          closeOnEscape: false,
          closeOnDocumentClick: false,
          onMount: this.handlePortalMount,
          onUnmount: this.handlePortalUnmount,
          open: active,
          openOnTriggerClick: false
        }, /* @__PURE__ */ import_react9.default.createElement(DimmerInner, _extends({}, rest, {
          active,
          page
        })));
      }
      return /* @__PURE__ */ import_react9.default.createElement(DimmerInner, _extends({}, rest, {
        active,
        page
      }));
    };
    return Dimmer2;
  }(import_react9.Component);
  Dimmer.handledProps = ["active", "page"];
  Dimmer.propTypes = false ? {
    active: import_prop_types.default.bool,
    page: import_prop_types.default.bool
  } : {};
  Dimmer.Dimmable = DimmerDimmable_default;
  Dimmer.Inner = DimmerInner;
  Dimmer.create = createShorthandFactory(Dimmer, function(value) {
    return {
      content: value
    };
  });

  // node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js
  var import_react10 = __toESM(require_react());
  function ImageGroup(props) {
    var children = props.children, className = props.className, content = props.content, size2 = props.size;
    var classes = clsx_m_default("ui", size2, className, "images");
    var rest = getUnhandledProps_default(ImageGroup, props);
    var ElementType = getElementType_default(ImageGroup, props);
    return /* @__PURE__ */ import_react10.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
  ImageGroup.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    size: import_prop_types.default.oneOf(SUI_exports.SIZES)
  } : {};
  var ImageGroup_default = ImageGroup;

  // node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
  function Image(props) {
    var avatar = props.avatar, bordered = props.bordered, centered = props.centered, children = props.children, circular = props.circular, className = props.className, content = props.content, dimmer = props.dimmer, disabled = props.disabled, floated = props.floated, fluid = props.fluid, hidden = props.hidden, href = props.href, inline = props.inline, label = props.label, rounded = props.rounded, size2 = props.size, spaced = props.spaced, verticalAlign = props.verticalAlign, wrapped = props.wrapped, ui = props.ui;
    var classes = clsx_m_default(useKeyOnly(ui, "ui"), size2, useKeyOnly(avatar, "avatar"), useKeyOnly(bordered, "bordered"), useKeyOnly(circular, "circular"), useKeyOnly(centered, "centered"), useKeyOnly(disabled, "disabled"), useKeyOnly(fluid, "fluid"), useKeyOnly(hidden, "hidden"), useKeyOnly(inline, "inline"), useKeyOnly(rounded, "rounded"), useKeyOrValueAndKey(spaced, "spaced"), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign, "aligned"), "image", className);
    var rest = getUnhandledProps_default(Image, props);
    var _partitionHTMLProps = partitionHTMLProps(rest, {
      htmlProps: htmlImageProps
    }), imgTagProps = _partitionHTMLProps[0], rootProps = _partitionHTMLProps[1];
    var ElementType = getElementType_default(Image, props, function() {
      if (!isNil_default(dimmer) || !isNil_default(label) || !isNil_default(wrapped) || !childrenUtils_exports.isNil(children)) {
        return "div";
      }
    });
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react11.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), children);
    }
    if (!childrenUtils_exports.isNil(content)) {
      return /* @__PURE__ */ import_react11.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), content);
    }
    if (ElementType === "img") {
      return /* @__PURE__ */ import_react11.default.createElement(ElementType, _extends({}, rootProps, imgTagProps, {
        className: classes
      }));
    }
    return /* @__PURE__ */ import_react11.default.createElement(ElementType, _extends({}, rootProps, {
      className: classes,
      href
    }), Dimmer.create(dimmer, {
      autoGenerateKey: false
    }), Label.create(label, {
      autoGenerateKey: false
    }), /* @__PURE__ */ import_react11.default.createElement("img", imgTagProps));
  }
  Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
  Image.Group = ImageGroup_default;
  Image.propTypes = false ? {
    as: import_prop_types.default.elementType,
    avatar: import_prop_types.default.bool,
    bordered: import_prop_types.default.bool,
    centered: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    circular: import_prop_types.default.bool,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    disabled: import_prop_types.default.bool,
    dimmer: customPropTypes_exports.itemShorthand,
    floated: import_prop_types.default.oneOf(SUI_exports.FLOATS),
    fluid: customPropTypes_exports.every([import_prop_types.default.bool, customPropTypes_exports.disallow(["size"])]),
    hidden: import_prop_types.default.bool,
    href: import_prop_types.default.string,
    inline: import_prop_types.default.bool,
    label: customPropTypes_exports.itemShorthand,
    rounded: import_prop_types.default.bool,
    size: import_prop_types.default.oneOf(SUI_exports.SIZES),
    spaced: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["left", "right"])]),
    ui: import_prop_types.default.bool,
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
    wrapped: import_prop_types.default.bool
  } : {};
  Image.defaultProps = {
    as: "img",
    ui: true
  };
  Image.create = createShorthandFactory(Image, function(value) {
    return {
      src: value
    };
  });
  var Image_default = Image;

  // node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js
  var import_react12 = __toESM(require_react());
  function LabelDetail(props) {
    var children = props.children, className = props.className, content = props.content;
    var classes = clsx_m_default("detail", className);
    var rest = getUnhandledProps_default(LabelDetail, props);
    var ElementType = getElementType_default(LabelDetail, props);
    return /* @__PURE__ */ import_react12.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  LabelDetail.handledProps = ["as", "children", "className", "content"];
  LabelDetail.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand
  } : {};
  LabelDetail.create = createShorthandFactory(LabelDetail, function(val) {
    return {
      content: val
    };
  });
  var LabelDetail_default = LabelDetail;

  // node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js
  var import_react13 = __toESM(require_react());
  function LabelGroup(props) {
    var children = props.children, circular = props.circular, className = props.className, color = props.color, content = props.content, size2 = props.size, tag = props.tag;
    var classes = clsx_m_default("ui", color, size2, useKeyOnly(circular, "circular"), useKeyOnly(tag, "tag"), "labels", className);
    var rest = getUnhandledProps_default(LabelGroup, props);
    var ElementType = getElementType_default(LabelGroup, props);
    return /* @__PURE__ */ import_react13.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
  LabelGroup.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    circular: import_prop_types.default.bool,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    content: customPropTypes_exports.contentShorthand,
    size: import_prop_types.default.oneOf(SUI_exports.SIZES),
    tag: import_prop_types.default.bool
  } : {};
  var LabelGroup_default = LabelGroup;

  // node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
  var Label = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Label2, _Component);
    function Label2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.handleClick = function(e) {
        var onClick = _this.props.onClick;
        if (onClick)
          onClick(e, _this.props);
      };
      _this.handleIconOverrides = function(predefinedProps) {
        return {
          onClick: function onClick(e) {
            invoke_default(predefinedProps, "onClick", e);
            invoke_default(_this.props, "onRemove", e, _this.props);
          }
        };
      };
      return _this;
    }
    var _proto = Label2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, active = _this$props.active, attached = _this$props.attached, basic = _this$props.basic, children = _this$props.children, circular = _this$props.circular, className = _this$props.className, color = _this$props.color, content = _this$props.content, corner = _this$props.corner, detail = _this$props.detail, empty = _this$props.empty, floating = _this$props.floating, horizontal = _this$props.horizontal, icon = _this$props.icon, image = _this$props.image, onRemove = _this$props.onRemove, pointing = _this$props.pointing, prompt = _this$props.prompt, removeIcon = _this$props.removeIcon, ribbon = _this$props.ribbon, size2 = _this$props.size, tag = _this$props.tag;
      var pointingClass = pointing === true && "pointing" || (pointing === "left" || pointing === "right") && pointing + " pointing" || (pointing === "above" || pointing === "below") && "pointing " + pointing;
      var classes = clsx_m_default("ui", color, pointingClass, size2, useKeyOnly(active, "active"), useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(empty, "empty"), useKeyOnly(floating, "floating"), useKeyOnly(horizontal, "horizontal"), useKeyOnly(image === true, "image"), useKeyOnly(prompt, "prompt"), useKeyOnly(tag, "tag"), useKeyOrValueAndKey(corner, "corner"), useKeyOrValueAndKey(ribbon, "ribbon"), useValueAndKey(attached, "attached"), "label", className);
      var rest = getUnhandledProps_default(Label2, this.props);
      var ElementType = getElementType_default(Label2, this.props);
      if (!childrenUtils_exports.isNil(children)) {
        return /* @__PURE__ */ import_react14.default.createElement(ElementType, _extends({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }
      var removeIconShorthand = isUndefined_default(removeIcon) ? "delete" : removeIcon;
      return /* @__PURE__ */ import_react14.default.createElement(ElementType, _extends({
        className: classes,
        onClick: this.handleClick
      }, rest), Icon_default.create(icon, {
        autoGenerateKey: false
      }), typeof image !== "boolean" && Image_default.create(image, {
        autoGenerateKey: false
      }), content, LabelDetail_default.create(detail, {
        autoGenerateKey: false
      }), onRemove && Icon_default.create(removeIconShorthand, {
        autoGenerateKey: false,
        overrideProps: this.handleIconOverrides
      }));
    };
    return Label2;
  }(import_react14.Component);
  Label.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
  Label.propTypes = false ? {
    as: import_prop_types.default.elementType,
    active: import_prop_types.default.bool,
    attached: import_prop_types.default.oneOf(["top", "bottom", "top right", "top left", "bottom left", "bottom right"]),
    basic: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    circular: import_prop_types.default.bool,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    content: customPropTypes_exports.contentShorthand,
    corner: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["left", "right"])]),
    detail: customPropTypes_exports.itemShorthand,
    empty: customPropTypes_exports.every([import_prop_types.default.bool, customPropTypes_exports.demand(["circular"])]),
    floating: import_prop_types.default.bool,
    horizontal: import_prop_types.default.bool,
    icon: customPropTypes_exports.itemShorthand,
    image: import_prop_types.default.oneOfType([import_prop_types.default.bool, customPropTypes_exports.itemShorthand]),
    onClick: import_prop_types.default.func,
    onRemove: import_prop_types.default.func,
    pointing: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["above", "below", "left", "right"])]),
    prompt: import_prop_types.default.bool,
    removeIcon: customPropTypes_exports.itemShorthand,
    ribbon: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["right"])]),
    size: import_prop_types.default.oneOf(SUI_exports.SIZES),
    tag: import_prop_types.default.bool
  } : {};
  Label.Detail = LabelDetail_default;
  Label.Group = LabelGroup_default;
  Label.create = createShorthandFactory(Label, function(value) {
    return {
      content: value
    };
  });

  // node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js
  var import_react15 = __toESM(require_react());
  function ButtonContent(props) {
    var children = props.children, className = props.className, content = props.content, hidden = props.hidden, visible = props.visible;
    var classes = clsx_m_default(useKeyOnly(visible, "visible"), useKeyOnly(hidden, "hidden"), "content", className);
    var rest = getUnhandledProps_default(ButtonContent, props);
    var ElementType = getElementType_default(ButtonContent, props);
    return /* @__PURE__ */ import_react15.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
  ButtonContent.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    hidden: import_prop_types.default.bool,
    visible: import_prop_types.default.bool
  } : {};
  var ButtonContent_default = ButtonContent;

  // node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js
  var import_react16 = __toESM(require_react());
  function ButtonGroup(props) {
    var attached = props.attached, basic = props.basic, buttons = props.buttons, children = props.children, className = props.className, color = props.color, compact2 = props.compact, content = props.content, floated = props.floated, fluid = props.fluid, icon = props.icon, inverted = props.inverted, labeled = props.labeled, negative = props.negative, positive = props.positive, primary = props.primary, secondary = props.secondary, size2 = props.size, toggle = props.toggle, vertical = props.vertical, widths = props.widths;
    var classes = clsx_m_default("ui", color, size2, useKeyOnly(basic, "basic"), useKeyOnly(compact2, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(icon, "icon"), useKeyOnly(inverted, "inverted"), useKeyOnly(labeled, "labeled"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(primary, "primary"), useKeyOnly(secondary, "secondary"), useKeyOnly(toggle, "toggle"), useKeyOnly(vertical, "vertical"), useKeyOrValueAndKey(attached, "attached"), useValueAndKey(floated, "floated"), useWidthProp(widths), "buttons", className);
    var rest = getUnhandledProps_default(ButtonGroup, props);
    var ElementType = getElementType_default(ButtonGroup, props);
    if (isNil_default(buttons)) {
      return /* @__PURE__ */ import_react16.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childrenUtils_exports.isNil(children) ? content : children);
    }
    return /* @__PURE__ */ import_react16.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), map_default(buttons, function(button) {
      return Button_default.create(button);
    }));
  }
  ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
  ButtonGroup.propTypes = false ? {
    as: import_prop_types.default.elementType,
    attached: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["left", "right", "top", "bottom"])]),
    basic: import_prop_types.default.bool,
    buttons: customPropTypes_exports.collectionShorthand,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    compact: import_prop_types.default.bool,
    content: customPropTypes_exports.contentShorthand,
    floated: import_prop_types.default.oneOf(SUI_exports.FLOATS),
    fluid: import_prop_types.default.bool,
    icon: import_prop_types.default.bool,
    inverted: import_prop_types.default.bool,
    labeled: import_prop_types.default.bool,
    negative: import_prop_types.default.bool,
    positive: import_prop_types.default.bool,
    primary: import_prop_types.default.bool,
    secondary: import_prop_types.default.bool,
    size: import_prop_types.default.oneOf(SUI_exports.SIZES),
    toggle: import_prop_types.default.bool,
    vertical: import_prop_types.default.bool,
    widths: import_prop_types.default.oneOf(SUI_exports.WIDTHS)
  } : {};
  var ButtonGroup_default = ButtonGroup;

  // node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js
  var import_react17 = __toESM(require_react());
  function ButtonOr(props) {
    var className = props.className, text = props.text;
    var classes = clsx_m_default("or", className);
    var rest = getUnhandledProps_default(ButtonOr, props);
    var ElementType = getElementType_default(ButtonOr, props);
    return /* @__PURE__ */ import_react17.default.createElement(ElementType, _extends({}, rest, {
      className: classes,
      "data-text": text
    }));
  }
  ButtonOr.handledProps = ["as", "className", "text"];
  ButtonOr.propTypes = false ? {
    as: import_prop_types.default.elementType,
    className: import_prop_types.default.string,
    text: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])
  } : {};
  var ButtonOr_default = ButtonOr;

  // node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
  var Button = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Button2, _Component);
    function Button2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.ref = /* @__PURE__ */ (0, import_react18.createRef)();
      _this.computeElementType = function() {
        var _this$props = _this.props, attached = _this$props.attached, label = _this$props.label;
        if (!isNil_default(attached) || !isNil_default(label))
          return "div";
      };
      _this.computeTabIndex = function(ElementType) {
        var _this$props2 = _this.props, disabled = _this$props2.disabled, tabIndex = _this$props2.tabIndex;
        if (!isNil_default(tabIndex))
          return tabIndex;
        if (disabled)
          return -1;
        if (ElementType === "div")
          return 0;
      };
      _this.focus = function() {
        return invoke_default(_this.ref.current, "focus");
      };
      _this.handleClick = function(e) {
        var disabled = _this.props.disabled;
        if (disabled) {
          e.preventDefault();
          return;
        }
        invoke_default(_this.props, "onClick", e, _this.props);
      };
      _this.hasIconClass = function() {
        var _this$props3 = _this.props, labelPosition = _this$props3.labelPosition, children = _this$props3.children, content = _this$props3.content, icon = _this$props3.icon;
        if (icon === true)
          return true;
        return icon && (labelPosition || childrenUtils_exports.isNil(children) && isNil_default(content));
      };
      return _this;
    }
    var _proto = Button2.prototype;
    _proto.computeButtonAriaRole = function computeButtonAriaRole(ElementType) {
      var role = this.props.role;
      if (!isNil_default(role))
        return role;
      if (ElementType !== "button")
        return "button";
    };
    _proto.render = function render() {
      var _this$props4 = this.props, active = _this$props4.active, animated = _this$props4.animated, attached = _this$props4.attached, basic = _this$props4.basic, children = _this$props4.children, circular = _this$props4.circular, className = _this$props4.className, color = _this$props4.color, compact2 = _this$props4.compact, content = _this$props4.content, disabled = _this$props4.disabled, floated = _this$props4.floated, fluid = _this$props4.fluid, icon = _this$props4.icon, inverted = _this$props4.inverted, label = _this$props4.label, labelPosition = _this$props4.labelPosition, loading = _this$props4.loading, negative = _this$props4.negative, positive = _this$props4.positive, primary = _this$props4.primary, secondary = _this$props4.secondary, size2 = _this$props4.size, toggle = _this$props4.toggle;
      var baseClasses = clsx_m_default(color, size2, useKeyOnly(active, "active"), useKeyOnly(basic, "basic"), useKeyOnly(circular, "circular"), useKeyOnly(compact2, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(this.hasIconClass(), "icon"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(primary, "primary"), useKeyOnly(secondary, "secondary"), useKeyOnly(toggle, "toggle"), useKeyOrValueAndKey(animated, "animated"), useKeyOrValueAndKey(attached, "attached"));
      var labeledClasses = clsx_m_default(useKeyOrValueAndKey(labelPosition || !!label, "labeled"));
      var wrapperClasses = clsx_m_default(useKeyOnly(disabled, "disabled"), useValueAndKey(floated, "floated"));
      var rest = getUnhandledProps_default(Button2, this.props);
      var ElementType = getElementType_default(Button2, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);
      if (!isNil_default(label)) {
        var buttonClasses = clsx_m_default("ui", baseClasses, "button", className);
        var containerClasses = clsx_m_default("ui", labeledClasses, "button", className, wrapperClasses);
        var labelElement = Label.create(label, {
          defaultProps: {
            basic: true,
            pointing: labelPosition === "left" ? "right" : "left"
          },
          autoGenerateKey: false
        });
        return /* @__PURE__ */ import_react18.default.createElement(ElementType, _extends({}, rest, {
          className: containerClasses,
          onClick: this.handleClick
        }), labelPosition === "left" && labelElement, /* @__PURE__ */ import_react18.default.createElement(Ref, {
          innerRef: this.ref
        }, /* @__PURE__ */ import_react18.default.createElement("button", {
          className: buttonClasses,
          "aria-pressed": toggle ? !!active : void 0,
          disabled,
          tabIndex
        }, Icon_default.create(icon, {
          autoGenerateKey: false
        }), " ", content)), (labelPosition === "right" || !labelPosition) && labelElement);
      }
      var classes = clsx_m_default("ui", baseClasses, wrapperClasses, labeledClasses, "button", className);
      var hasChildren = !childrenUtils_exports.isNil(children);
      var role = this.computeButtonAriaRole(ElementType);
      return /* @__PURE__ */ import_react18.default.createElement(Ref, {
        innerRef: this.ref
      }, /* @__PURE__ */ import_react18.default.createElement(ElementType, _extends({}, rest, {
        className: classes,
        "aria-pressed": toggle ? !!active : void 0,
        disabled: disabled && ElementType === "button" || void 0,
        onClick: this.handleClick,
        role,
        tabIndex
      }), hasChildren && children, !hasChildren && Icon_default.create(icon, {
        autoGenerateKey: false
      }), !hasChildren && content));
    };
    return Button2;
  }(import_react18.Component);
  Button.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"];
  Button.propTypes = false ? {
    as: import_prop_types.default.elementType,
    active: import_prop_types.default.bool,
    animated: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["fade", "vertical"])]),
    attached: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["left", "right", "top", "bottom"])]),
    basic: import_prop_types.default.bool,
    children: customPropTypes_exports.every([import_prop_types.default.node, customPropTypes_exports.disallow(["label"]), customPropTypes_exports.givenProps({
      icon: import_prop_types.default.oneOfType([import_prop_types.default.string.isRequired, import_prop_types.default.object.isRequired, import_prop_types.default.element.isRequired])
    }, customPropTypes_exports.disallow(["icon"]))]),
    circular: import_prop_types.default.bool,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf([].concat(SUI_exports.COLORS, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
    compact: import_prop_types.default.bool,
    content: customPropTypes_exports.contentShorthand,
    disabled: import_prop_types.default.bool,
    floated: import_prop_types.default.oneOf(SUI_exports.FLOATS),
    fluid: import_prop_types.default.bool,
    icon: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.element]),
    inverted: import_prop_types.default.bool,
    label: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.element]),
    labelPosition: import_prop_types.default.oneOf(["right", "left"]),
    loading: import_prop_types.default.bool,
    negative: import_prop_types.default.bool,
    onClick: import_prop_types.default.func,
    positive: import_prop_types.default.bool,
    primary: import_prop_types.default.bool,
    role: import_prop_types.default.string,
    secondary: import_prop_types.default.bool,
    size: import_prop_types.default.oneOf(SUI_exports.SIZES),
    tabIndex: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
    toggle: import_prop_types.default.bool
  } : {};
  Button.defaultProps = {
    as: "button"
  };
  Button.Content = ButtonContent_default;
  Button.Group = ButtonGroup_default;
  Button.Or = ButtonOr_default;
  Button.create = createShorthandFactory(Button, function(value) {
    return {
      content: value
    };
  });
  var Button_default = Button;

  // node_modules/lodash-es/_arrayReduce.js
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  var arrayReduce_default = arrayReduce;

  // node_modules/lodash-es/_baseReduce.js
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection2) {
      accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
    });
    return accumulator;
  }
  var baseReduce_default = baseReduce;

  // node_modules/lodash-es/reduce.js
  function reduce(collection, iteratee, accumulator) {
    var func = isArray_default(collection) ? arrayReduce_default : baseReduce_default, initAccum = arguments.length < 3;
    return func(collection, baseIteratee_default(iteratee, 4), accumulator, initAccum, baseEach_default);
  }
  var reduce_default = reduce;

  // node_modules/lodash-es/_basePropertyOf.js
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? void 0 : object[key];
    };
  }
  var basePropertyOf_default = basePropertyOf;

  // node_modules/lodash-es/_deburrLetter.js
  var deburredLetters = {
    "\xC0": "A",
    "\xC1": "A",
    "\xC2": "A",
    "\xC3": "A",
    "\xC4": "A",
    "\xC5": "A",
    "\xE0": "a",
    "\xE1": "a",
    "\xE2": "a",
    "\xE3": "a",
    "\xE4": "a",
    "\xE5": "a",
    "\xC7": "C",
    "\xE7": "c",
    "\xD0": "D",
    "\xF0": "d",
    "\xC8": "E",
    "\xC9": "E",
    "\xCA": "E",
    "\xCB": "E",
    "\xE8": "e",
    "\xE9": "e",
    "\xEA": "e",
    "\xEB": "e",
    "\xCC": "I",
    "\xCD": "I",
    "\xCE": "I",
    "\xCF": "I",
    "\xEC": "i",
    "\xED": "i",
    "\xEE": "i",
    "\xEF": "i",
    "\xD1": "N",
    "\xF1": "n",
    "\xD2": "O",
    "\xD3": "O",
    "\xD4": "O",
    "\xD5": "O",
    "\xD6": "O",
    "\xD8": "O",
    "\xF2": "o",
    "\xF3": "o",
    "\xF4": "o",
    "\xF5": "o",
    "\xF6": "o",
    "\xF8": "o",
    "\xD9": "U",
    "\xDA": "U",
    "\xDB": "U",
    "\xDC": "U",
    "\xF9": "u",
    "\xFA": "u",
    "\xFB": "u",
    "\xFC": "u",
    "\xDD": "Y",
    "\xFD": "y",
    "\xFF": "y",
    "\xC6": "Ae",
    "\xE6": "ae",
    "\xDE": "Th",
    "\xFE": "th",
    "\xDF": "ss",
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010A": "C",
    "\u010C": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010B": "c",
    "\u010D": "c",
    "\u010E": "D",
    "\u0110": "D",
    "\u010F": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011A": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011B": "e",
    "\u011C": "G",
    "\u011E": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011D": "g",
    "\u011F": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012A": "I",
    "\u012C": "I",
    "\u012E": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012B": "i",
    "\u012D": "i",
    "\u012F": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013B": "L",
    "\u013D": "L",
    "\u013F": "L",
    "\u0141": "L",
    "\u013A": "l",
    "\u013C": "l",
    "\u013E": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014A": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014B": "n",
    "\u014C": "O",
    "\u014E": "O",
    "\u0150": "O",
    "\u014D": "o",
    "\u014F": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015A": "S",
    "\u015C": "S",
    "\u015E": "S",
    "\u0160": "S",
    "\u015B": "s",
    "\u015D": "s",
    "\u015F": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016A": "U",
    "\u016C": "U",
    "\u016E": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016B": "u",
    "\u016D": "u",
    "\u016F": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017B": "Z",
    "\u017D": "Z",
    "\u017A": "z",
    "\u017C": "z",
    "\u017E": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017F": "s"
  };
  var deburrLetter = basePropertyOf_default(deburredLetters);
  var deburrLetter_default = deburrLetter;

  // node_modules/lodash-es/deburr.js
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var rsComboMarksRange2 = "\\u0300-\\u036f";
  var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
  var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
  var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
  var rsCombo = "[" + rsComboRange2 + "]";
  var reComboMark = RegExp(rsCombo, "g");
  function deburr(string) {
    string = toString_default(string);
    return string && string.replace(reLatin, deburrLetter_default).replace(reComboMark, "");
  }
  var deburr_default = deburr;

  // node_modules/lodash-es/compact.js
  function compact(array) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var compact_default = compact;

  // node_modules/lodash-es/_arrayEvery.js
  function arrayEvery(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }
  var arrayEvery_default = arrayEvery;

  // node_modules/lodash-es/_baseEvery.js
  function baseEvery(collection, predicate) {
    var result = true;
    baseEach_default(collection, function(value, index, collection2) {
      result = !!predicate(value, index, collection2);
      return result;
    });
    return result;
  }
  var baseEvery_default = baseEvery;

  // node_modules/lodash-es/every.js
  function every(collection, predicate, guard) {
    var func = isArray_default(collection) ? arrayEvery_default : baseEvery_default;
    if (guard && isIterateeCall_default(collection, predicate, guard)) {
      predicate = void 0;
    }
    return func(collection, baseIteratee_default(predicate, 3));
  }
  var every_default = every;

  // node_modules/lodash-es/dropRight.js
  function dropRight(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    n = guard || n === void 0 ? 1 : toInteger_default(n);
    n = length - n;
    return baseSlice_default(array, 0, n < 0 ? 0 : n);
  }
  var dropRight_default = dropRight;

  // node_modules/lodash-es/_asciiSize.js
  var asciiSize = baseProperty_default("length");
  var asciiSize_default = asciiSize;

  // node_modules/lodash-es/_unicodeSize.js
  var rsAstralRange2 = "\\ud800-\\udfff";
  var rsComboMarksRange3 = "\\u0300-\\u036f";
  var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
  var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
  var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
  var rsVarRange2 = "\\ufe0e\\ufe0f";
  var rsAstral = "[" + rsAstralRange2 + "]";
  var rsCombo2 = "[" + rsComboRange3 + "]";
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:" + rsCombo2 + "|" + rsFitz + ")";
  var rsNonAstral = "[^" + rsAstralRange2 + "]";
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ2 = "\\u200d";
  var reOptMod = rsModifier + "?";
  var rsOptVar = "[" + rsVarRange2 + "]?";
  var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:" + [rsNonAstral + rsCombo2 + "?", rsCombo2, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
  var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }
  var unicodeSize_default = unicodeSize;

  // node_modules/lodash-es/_stringSize.js
  function stringSize(string) {
    return hasUnicode_default(string) ? unicodeSize_default(string) : asciiSize_default(string);
  }
  var stringSize_default = stringSize;

  // node_modules/lodash-es/size.js
  var mapTag5 = "[object Map]";
  var setTag5 = "[object Set]";
  function size(collection) {
    if (collection == null) {
      return 0;
    }
    if (isArrayLike_default(collection)) {
      return isString_default(collection) ? stringSize_default(collection) : collection.length;
    }
    var tag = getTag_default(collection);
    if (tag == mapTag5 || tag == setTag5) {
      return collection.size;
    }
    return baseKeys_default(collection).length;
  }
  var size_default = size;

  // node_modules/lodash-es/union.js
  var union = baseRest_default(function(arrays) {
    return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true));
  });
  var union_default = union;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js
  var import_event_stack2 = __toESM(require_lib());
  var import_keyboard_key2 = __toESM(require_keyboardKey());
  var import_react27 = __toESM(require_react());
  var import_shallowequal = __toESM(require_shallowequal());

  // node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js
  var import_react19 = __toESM(require_react());
  var Flag = /* @__PURE__ */ function(_PureComponent) {
    _inheritsLoose(Flag2, _PureComponent);
    function Flag2() {
      return _PureComponent.apply(this, arguments) || this;
    }
    var _proto = Flag2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, className = _this$props.className, name = _this$props.name;
      var classes = clsx_m_default(name, "flag", className);
      var rest = getUnhandledProps_default(Flag2, this.props);
      var ElementType = getElementType_default(Flag2, this.props);
      return /* @__PURE__ */ import_react19.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }));
    };
    return Flag2;
  }(import_react19.PureComponent);
  Flag.handledProps = ["as", "className", "name"];
  Flag.propTypes = false ? {
    as: import_prop_types.default.elementType,
    className: import_prop_types.default.string,
    name: customPropTypes_exports.suggest(names)
  } : {};
  Flag.defaultProps = {
    as: "i"
  };
  Flag.create = createShorthandFactory(Flag, function(value) {
    return {
      name: value
    };
  });
  var Flag_default = Flag;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownDivider.js
  var import_react20 = __toESM(require_react());
  function DropdownDivider(props) {
    var className = props.className;
    var classes = clsx_m_default("divider", className);
    var rest = getUnhandledProps_default(DropdownDivider, props);
    var ElementType = getElementType_default(DropdownDivider, props);
    return /* @__PURE__ */ import_react20.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }));
  }
  DropdownDivider.handledProps = ["as", "className"];
  DropdownDivider.propTypes = false ? {
    as: import_prop_types.default.elementType,
    className: import_prop_types.default.string
  } : {};
  var DropdownDivider_default = DropdownDivider;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownItem.js
  var import_react21 = __toESM(require_react());
  var DropdownItem = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(DropdownItem2, _Component);
    function DropdownItem2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.handleClick = function(e) {
        invoke_default(_this.props, "onClick", e, _this.props);
      };
      return _this;
    }
    var _proto = DropdownItem2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, active = _this$props.active, children = _this$props.children, className = _this$props.className, content = _this$props.content, disabled = _this$props.disabled, description = _this$props.description, flag = _this$props.flag, icon = _this$props.icon, image = _this$props.image, label = _this$props.label, selected = _this$props.selected, text = _this$props.text;
      var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(selected, "selected"), "item", className);
      var iconName = isNil_default(icon) ? childrenUtils_exports.someByType(children, "DropdownMenu") && "dropdown" : icon;
      var rest = getUnhandledProps_default(DropdownItem2, this.props);
      var ElementType = getElementType_default(DropdownItem2, this.props);
      var ariaOptions = {
        role: "option",
        "aria-disabled": disabled,
        "aria-checked": active,
        "aria-selected": selected
      };
      if (!childrenUtils_exports.isNil(children)) {
        return /* @__PURE__ */ import_react21.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }
      var flagElement = Flag_default.create(flag, {
        autoGenerateKey: false
      });
      var iconElement = Icon_default.create(iconName, {
        autoGenerateKey: false
      });
      var imageElement = Image_default.create(image, {
        autoGenerateKey: false
      });
      var labelElement = Label.create(label, {
        autoGenerateKey: false
      });
      var descriptionElement = createShorthand("span", function(val) {
        return {
          children: val
        };
      }, description, {
        defaultProps: {
          className: "description"
        },
        autoGenerateKey: false
      });
      var textElement = createShorthand("span", function(val) {
        return {
          children: val
        };
      }, childrenUtils_exports.isNil(content) ? text : content, {
        defaultProps: {
          className: "text"
        },
        autoGenerateKey: false
      });
      return /* @__PURE__ */ import_react21.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
    };
    return DropdownItem2;
  }(import_react21.Component);
  DropdownItem.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
  DropdownItem.propTypes = false ? {
    as: import_prop_types.default.elementType,
    active: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    description: customPropTypes_exports.itemShorthand,
    disabled: import_prop_types.default.bool,
    flag: customPropTypes_exports.itemShorthand,
    icon: customPropTypes_exports.itemShorthand,
    image: customPropTypes_exports.itemShorthand,
    label: customPropTypes_exports.itemShorthand,
    onClick: import_prop_types.default.func,
    selected: import_prop_types.default.bool,
    text: customPropTypes_exports.contentShorthand,
    value: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.number, import_prop_types.default.string])
  } : {};
  DropdownItem.create = createShorthandFactory(DropdownItem, function(opts) {
    return opts;
  });
  var DropdownItem_default = DropdownItem;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownHeader.js
  var import_react22 = __toESM(require_react());
  function DropdownHeader(props) {
    var children = props.children, className = props.className, content = props.content, icon = props.icon;
    var classes = clsx_m_default("header", className);
    var rest = getUnhandledProps_default(DropdownHeader, props);
    var ElementType = getElementType_default(DropdownHeader, props);
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react22.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), children);
    }
    return /* @__PURE__ */ import_react22.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), Icon_default.create(icon, {
      autoGenerateKey: false
    }), content);
  }
  DropdownHeader.handledProps = ["as", "children", "className", "content", "icon"];
  DropdownHeader.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    icon: customPropTypes_exports.itemShorthand
  } : {};
  DropdownHeader.create = createShorthandFactory(DropdownHeader, function(content) {
    return {
      content
    };
  });
  var DropdownHeader_default = DropdownHeader;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownMenu.js
  var import_react23 = __toESM(require_react());
  function DropdownMenu(props) {
    var children = props.children, className = props.className, content = props.content, direction = props.direction, open = props.open, scrolling = props.scrolling;
    var classes = clsx_m_default(direction, useKeyOnly(open, "visible"), useKeyOnly(scrolling, "scrolling"), "menu transition", className);
    var rest = getUnhandledProps_default(DropdownMenu, props);
    var ElementType = getElementType_default(DropdownMenu, props);
    return /* @__PURE__ */ import_react23.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  DropdownMenu.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
  DropdownMenu.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    direction: import_prop_types.default.oneOf(["left", "right"]),
    open: import_prop_types.default.bool,
    scrolling: import_prop_types.default.bool
  } : {};
  var DropdownMenu_default = DropdownMenu;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownSearchInput.js
  var import_react24 = __toESM(require_react());
  var DropdownSearchInput = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(DropdownSearchInput2, _Component);
    function DropdownSearchInput2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.handleChange = function(e) {
        var value = get_default(e, "target.value");
        invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
          value
        }));
      };
      return _this;
    }
    var _proto = DropdownSearchInput2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, autoComplete = _this$props.autoComplete, className = _this$props.className, tabIndex = _this$props.tabIndex, type = _this$props.type, value = _this$props.value;
      var classes = clsx_m_default("search", className);
      var rest = getUnhandledProps_default(DropdownSearchInput2, this.props);
      return /* @__PURE__ */ import_react24.default.createElement("input", _extends({}, rest, {
        "aria-autocomplete": "list",
        autoComplete,
        className: classes,
        onChange: this.handleChange,
        tabIndex,
        type,
        value
      }));
    };
    return DropdownSearchInput2;
  }(import_react24.Component);
  DropdownSearchInput.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
  DropdownSearchInput.propTypes = false ? {
    as: import_prop_types.default.elementType,
    autoComplete: import_prop_types.default.string,
    className: import_prop_types.default.string,
    tabIndex: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
    type: import_prop_types.default.string,
    value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])
  } : {};
  DropdownSearchInput.defaultProps = {
    autoComplete: "off",
    type: "text"
  };
  DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, function(type) {
    return {
      type
    };
  });
  var DropdownSearchInput_default = DropdownSearchInput;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownText.js
  var import_react25 = __toESM(require_react());
  function DropdownText(props) {
    var children = props.children, className = props.className, content = props.content;
    var classes = clsx_m_default("divider", className);
    var rest = getUnhandledProps_default(DropdownText, props);
    var ElementType = getElementType_default(DropdownText, props);
    return /* @__PURE__ */ import_react25.default.createElement(ElementType, _extends({
      "aria-atomic": true,
      "aria-live": "polite",
      role: "alert"
    }, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  DropdownText.handledProps = ["as", "children", "className", "content"];
  DropdownText.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand
  } : {};
  DropdownText.create = createShorthandFactory(DropdownText, function(val) {
    return {
      content: val
    };
  });
  var DropdownText_default = DropdownText;

  // node_modules/lodash-es/escapeRegExp.js
  var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
  var reHasRegExpChar = RegExp(reRegExpChar2.source);
  function escapeRegExp(string) {
    string = toString_default(string);
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
  }
  var escapeRegExp_default = escapeRegExp;

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/utils/getMenuOptions.js
  var import_react26 = __toESM(require_react());
  function getMenuOptions(config) {
    var additionLabel = config.additionLabel, additionPosition = config.additionPosition, allowAdditions = config.allowAdditions, deburr2 = config.deburr, multiple = config.multiple, options = config.options, search = config.search, searchQuery = config.searchQuery, value = config.value;
    var filteredOptions = options;
    if (multiple) {
      filteredOptions = filter_default(filteredOptions, function(opt) {
        return !includes_default(value, opt.value);
      });
    }
    if (search && searchQuery) {
      if (isFunction_default(search)) {
        filteredOptions = search(filteredOptions, searchQuery);
      } else {
        var strippedQuery = deburr2 ? deburr_default(searchQuery) : searchQuery;
        var re = new RegExp(escapeRegExp_default(strippedQuery), "i");
        filteredOptions = filter_default(filteredOptions, function(opt) {
          return re.test(deburr2 ? deburr_default(opt.text) : opt.text);
        });
      }
    }
    if (allowAdditions && search && searchQuery && !some_default(filteredOptions, {
      text: searchQuery
    })) {
      var additionLabelElement = /* @__PURE__ */ import_react26.default.isValidElement(additionLabel) ? /* @__PURE__ */ import_react26.default.cloneElement(additionLabel, {
        key: "addition-label"
      }) : additionLabel || "";
      var addItem = {
        key: "addition",
        text: [additionLabelElement, /* @__PURE__ */ import_react26.default.createElement("b", {
          key: "addition-query"
        }, searchQuery)],
        value: searchQuery,
        className: "addition",
        "data-additional": true
      };
      if (additionPosition === "top")
        filteredOptions.unshift(addItem);
      else
        filteredOptions.push(addItem);
    }
    return filteredOptions;
  }
  getMenuOptions.handledProps = [];

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/utils/getSelectedIndex.js
  function getSelectedIndex(config) {
    var additionLabel = config.additionLabel, additionPosition = config.additionPosition, allowAdditions = config.allowAdditions, deburr2 = config.deburr, multiple = config.multiple, options = config.options, search = config.search, searchQuery = config.searchQuery, selectedIndex = config.selectedIndex, value = config.value;
    var menuOptions = getMenuOptions({
      value,
      options,
      searchQuery,
      additionLabel,
      additionPosition,
      allowAdditions,
      deburr: deburr2,
      multiple,
      search
    });
    var enabledIndexes = reduce_default(menuOptions, function(memo, item, index) {
      if (!item.disabled)
        memo.push(index);
      return memo;
    }, []);
    var newSelectedIndex;
    if (!selectedIndex || selectedIndex < 0) {
      var firstIndex = enabledIndexes[0];
      newSelectedIndex = multiple ? firstIndex : findIndex_default(menuOptions, ["value", value]) || enabledIndexes[0];
    } else if (multiple) {
      newSelectedIndex = find_default(enabledIndexes, function(index) {
        return index >= selectedIndex;
      });
      if (selectedIndex >= menuOptions.length - 1) {
        newSelectedIndex = enabledIndexes[enabledIndexes.length - 1];
      }
    } else {
      var activeIndex = findIndex_default(menuOptions, ["value", value]);
      newSelectedIndex = includes_default(enabledIndexes, activeIndex) ? activeIndex : void 0;
    }
    if (!newSelectedIndex || newSelectedIndex < 0) {
      newSelectedIndex = enabledIndexes[0];
    }
    return newSelectedIndex;
  }

  // node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js
  var getKeyOrValue = function getKeyOrValue2(key, value) {
    return isNil_default(key) ? value : key;
  };
  var getKeyAndValues = function getKeyAndValues2(options) {
    return options ? options.map(function(option) {
      return pick_default(option, ["key", "value"]);
    }) : options;
  };
  function renderItemContent(item) {
    var flag = item.flag, image = item.image, text = item.text;
    if (isFunction_default(text)) {
      return text;
    }
    return {
      content: /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, Flag_default.create(flag), Image_default.create(image), text)
    };
  }
  var Dropdown = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Dropdown2, _Component);
    function Dropdown2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.searchRef = /* @__PURE__ */ (0, import_react27.createRef)();
      _this.sizerRef = /* @__PURE__ */ (0, import_react27.createRef)();
      _this.ref = /* @__PURE__ */ (0, import_react27.createRef)();
      _this.handleChange = function(e, value) {
        invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
          value
        }));
      };
      _this.closeOnChange = function(e) {
        var _this$props = _this.props, closeOnChange = _this$props.closeOnChange, multiple = _this$props.multiple;
        var shouldClose = isUndefined_default(closeOnChange) ? !multiple : closeOnChange;
        if (shouldClose) {
          _this.close(e, noop_default);
        }
      };
      _this.closeOnEscape = function(e) {
        if (!_this.props.closeOnEscape)
          return;
        if (import_keyboard_key2.default.getCode(e) !== import_keyboard_key2.default.Escape)
          return;
        e.preventDefault();
        _this.close(e);
      };
      _this.moveSelectionOnKeyDown = function(e) {
        var _moves;
        var _this$props2 = _this.props, multiple = _this$props2.multiple, selectOnNavigation = _this$props2.selectOnNavigation;
        var open = _this.state.open;
        if (!open) {
          return;
        }
        var moves = (_moves = {}, _moves[import_keyboard_key2.default.ArrowDown] = 1, _moves[import_keyboard_key2.default.ArrowUp] = -1, _moves);
        var move = moves[import_keyboard_key2.default.getCode(e)];
        if (move === void 0) {
          return;
        }
        e.preventDefault();
        var nextIndex = _this.getSelectedIndexAfterMove(move);
        if (!multiple && selectOnNavigation) {
          _this.makeSelectedItemActive(e, nextIndex);
        }
        _this.setState({
          selectedIndex: nextIndex
        });
      };
      _this.openOnSpace = function(e) {
        var _e$target, _e$target2, _e$target3;
        var shouldHandleEvent = _this.state.focus && !_this.state.open && import_keyboard_key2.default.getCode(e) === import_keyboard_key2.default.Spacebar;
        var shouldPreventDefault = ((_e$target = e.target) == null ? void 0 : _e$target.tagName) !== "INPUT" && ((_e$target2 = e.target) == null ? void 0 : _e$target2.tagName) !== "TEXTAREA" && ((_e$target3 = e.target) == null ? void 0 : _e$target3.isContentEditable) !== true;
        if (shouldHandleEvent) {
          if (shouldPreventDefault) {
            e.preventDefault();
          }
          _this.open(e);
        }
      };
      _this.openOnArrow = function(e) {
        var _this$state = _this.state, focus = _this$state.focus, open = _this$state.open;
        if (focus && !open) {
          var code = import_keyboard_key2.default.getCode(e);
          if (code === import_keyboard_key2.default.ArrowDown || code === import_keyboard_key2.default.ArrowUp) {
            e.preventDefault();
            _this.open(e);
          }
        }
      };
      _this.makeSelectedItemActive = function(e, selectedIndex) {
        var _this$state2 = _this.state, open = _this$state2.open, value = _this$state2.value;
        var multiple = _this.props.multiple;
        var item = _this.getSelectedItem(selectedIndex);
        var selectedValue = get_default(item, "value");
        if (isNil_default(selectedValue) || !open) {
          return value;
        }
        var newValue = multiple ? union_default(value, [selectedValue]) : selectedValue;
        var valueHasChanged = multiple ? !!difference_default(newValue, value).length : newValue !== value;
        if (valueHasChanged) {
          _this.setState({
            value: newValue
          });
          _this.handleChange(e, newValue);
          if (item["data-additional"]) {
            invoke_default(_this.props, "onAddItem", e, _extends({}, _this.props, {
              value: selectedValue
            }));
          }
        }
        return value;
      };
      _this.selectItemOnEnter = function(e) {
        var search = _this.props.search;
        var _this$state3 = _this.state, open = _this$state3.open, selectedIndex = _this$state3.selectedIndex;
        if (!open) {
          return;
        }
        var shouldSelect = import_keyboard_key2.default.getCode(e) === import_keyboard_key2.default.Enter || !search && import_keyboard_key2.default.getCode(e) === import_keyboard_key2.default.Spacebar;
        if (!shouldSelect) {
          return;
        }
        e.preventDefault();
        var optionSize = size_default(getMenuOptions({
          value: _this.state.value,
          options: _this.props.options,
          searchQuery: _this.state.searchQuery,
          additionLabel: _this.props.additionLabel,
          additionPosition: _this.props.additionPosition,
          allowAdditions: _this.props.allowAdditions,
          deburr: _this.props.deburr,
          multiple: _this.props.multiple,
          search: _this.props.search
        }));
        if (search && optionSize === 0) {
          return;
        }
        var nextValue = _this.makeSelectedItemActive(e, selectedIndex);
        _this.setState({
          selectedIndex: getSelectedIndex({
            additionLabel: _this.props.additionLabel,
            additionPosition: _this.props.additionPosition,
            allowAdditions: _this.props.allowAdditions,
            deburr: _this.props.deburr,
            multiple: _this.props.multiple,
            search: _this.props.search,
            selectedIndex,
            value: nextValue,
            options: _this.props.options,
            searchQuery: ""
          })
        });
        _this.closeOnChange(e);
        _this.clearSearchQuery();
        if (search) {
          invoke_default(_this.searchRef.current, "focus");
        }
      };
      _this.removeItemOnBackspace = function(e) {
        var _this$props3 = _this.props, multiple = _this$props3.multiple, search = _this$props3.search;
        var _this$state4 = _this.state, searchQuery = _this$state4.searchQuery, value = _this$state4.value;
        if (import_keyboard_key2.default.getCode(e) !== import_keyboard_key2.default.Backspace)
          return;
        if (searchQuery || !search || !multiple || isEmpty_default(value))
          return;
        e.preventDefault();
        var newValue = dropRight_default(value);
        _this.setState({
          value: newValue
        });
        _this.handleChange(e, newValue);
      };
      _this.closeOnDocumentClick = function(e) {
        if (!_this.props.closeOnBlur)
          return;
        if (_this.ref.current && doesNodeContainClick_default(_this.ref.current, e))
          return;
        _this.close();
      };
      _this.handleMouseDown = function(e) {
        _this.isMouseDown = true;
        invoke_default(_this.props, "onMouseDown", e, _this.props);
        document.addEventListener("mouseup", _this.handleDocumentMouseUp);
      };
      _this.handleDocumentMouseUp = function() {
        _this.isMouseDown = false;
        document.removeEventListener("mouseup", _this.handleDocumentMouseUp);
      };
      _this.handleClick = function(e) {
        var _this$props4 = _this.props, minCharacters = _this$props4.minCharacters, search = _this$props4.search;
        var _this$state5 = _this.state, open = _this$state5.open, searchQuery = _this$state5.searchQuery;
        invoke_default(_this.props, "onClick", e, _this.props);
        e.stopPropagation();
        if (!search)
          return _this.toggle(e);
        if (open) {
          invoke_default(_this.searchRef.current, "focus");
          return;
        }
        if (searchQuery.length >= minCharacters || minCharacters === 1) {
          _this.open(e);
          return;
        }
        invoke_default(_this.searchRef.current, "focus");
      };
      _this.handleIconClick = function(e) {
        var clearable = _this.props.clearable;
        var hasValue = _this.hasValue();
        invoke_default(_this.props, "onClick", e, _this.props);
        e.stopPropagation();
        if (clearable && hasValue) {
          _this.clearValue(e);
        } else {
          _this.toggle(e);
        }
      };
      _this.handleItemClick = function(e, item) {
        var _this$props5 = _this.props, multiple = _this$props5.multiple, search = _this$props5.search;
        var currentValue = _this.state.value;
        var value = item.value;
        e.stopPropagation();
        if (multiple || item.disabled) {
          e.nativeEvent.stopImmediatePropagation();
        }
        if (item.disabled) {
          return;
        }
        var isAdditionItem = item["data-additional"];
        var newValue = multiple ? union_default(_this.state.value, [value]) : value;
        var valueHasChanged = multiple ? !!difference_default(newValue, currentValue).length : newValue !== currentValue;
        if (valueHasChanged) {
          _this.setState({
            value: newValue
          });
          _this.handleChange(e, newValue);
        }
        _this.clearSearchQuery();
        if (search) {
          invoke_default(_this.searchRef.current, "focus");
        } else {
          invoke_default(_this.ref.current, "focus");
        }
        _this.closeOnChange(e);
        if (isAdditionItem) {
          invoke_default(_this.props, "onAddItem", e, _extends({}, _this.props, {
            value
          }));
        }
      };
      _this.handleFocus = function(e) {
        var focus = _this.state.focus;
        if (focus)
          return;
        invoke_default(_this.props, "onFocus", e, _this.props);
        _this.setState({
          focus: true
        });
      };
      _this.handleBlur = function(e) {
        var currentTarget = get_default(e, "currentTarget");
        if (currentTarget && currentTarget.contains(document.activeElement))
          return;
        var _this$props6 = _this.props, closeOnBlur = _this$props6.closeOnBlur, multiple = _this$props6.multiple, selectOnBlur = _this$props6.selectOnBlur;
        if (_this.isMouseDown)
          return;
        invoke_default(_this.props, "onBlur", e, _this.props);
        if (selectOnBlur && !multiple) {
          _this.makeSelectedItemActive(e, _this.state.selectedIndex);
          if (closeOnBlur)
            _this.close();
        }
        _this.setState({
          focus: false
        });
        _this.clearSearchQuery();
      };
      _this.handleSearchChange = function(e, _ref) {
        var value = _ref.value;
        e.stopPropagation();
        var minCharacters = _this.props.minCharacters;
        var open = _this.state.open;
        var newQuery = value;
        invoke_default(_this.props, "onSearchChange", e, _extends({}, _this.props, {
          searchQuery: newQuery
        }));
        _this.setState({
          searchQuery: newQuery,
          selectedIndex: 0
        });
        if (!open && newQuery.length >= minCharacters) {
          _this.open();
          return;
        }
        if (open && minCharacters !== 1 && newQuery.length < minCharacters)
          _this.close();
      };
      _this.handleKeyDown = function(e) {
        _this.moveSelectionOnKeyDown(e);
        _this.openOnArrow(e);
        _this.openOnSpace(e);
        _this.selectItemOnEnter(e);
        invoke_default(_this.props, "onKeyDown", e);
      };
      _this.getSelectedItem = function(selectedIndex) {
        var options = getMenuOptions({
          value: _this.state.value,
          options: _this.props.options,
          searchQuery: _this.state.searchQuery,
          additionLabel: _this.props.additionLabel,
          additionPosition: _this.props.additionPosition,
          allowAdditions: _this.props.allowAdditions,
          deburr: _this.props.deburr,
          multiple: _this.props.multiple,
          search: _this.props.search
        });
        return get_default(options, "[" + selectedIndex + "]");
      };
      _this.getItemByValue = function(value) {
        var options = _this.props.options;
        return find_default(options, {
          value
        });
      };
      _this.getDropdownAriaOptions = function() {
        var _this$props7 = _this.props, loading = _this$props7.loading, disabled = _this$props7.disabled, search = _this$props7.search, multiple = _this$props7.multiple;
        var open = _this.state.open;
        var ariaOptions = {
          role: search ? "combobox" : "listbox",
          "aria-busy": loading,
          "aria-disabled": disabled,
          "aria-expanded": !!open
        };
        if (ariaOptions.role === "listbox") {
          ariaOptions["aria-multiselectable"] = multiple;
        }
        return ariaOptions;
      };
      _this.clearSearchQuery = function() {
        var searchQuery = _this.state.searchQuery;
        if (searchQuery === void 0 || searchQuery === "")
          return;
        _this.setState({
          searchQuery: ""
        });
      };
      _this.handleLabelClick = function(e, labelProps) {
        e.stopPropagation();
        _this.setState({
          selectedLabel: labelProps.value
        });
        invoke_default(_this.props, "onLabelClick", e, labelProps);
      };
      _this.handleLabelRemove = function(e, labelProps) {
        e.stopPropagation();
        var value = _this.state.value;
        var newValue = without_default(value, labelProps.value);
        _this.setState({
          value: newValue
        });
        _this.handleChange(e, newValue);
      };
      _this.getSelectedIndexAfterMove = function(offset, startIndex) {
        if (startIndex === void 0) {
          startIndex = _this.state.selectedIndex;
        }
        var options = getMenuOptions({
          value: _this.state.value,
          options: _this.props.options,
          searchQuery: _this.state.searchQuery,
          additionLabel: _this.props.additionLabel,
          additionPosition: _this.props.additionPosition,
          allowAdditions: _this.props.allowAdditions,
          deburr: _this.props.deburr,
          multiple: _this.props.multiple,
          search: _this.props.search
        });
        if (options === void 0 || every_default(options, "disabled"))
          return;
        var lastIndex = options.length - 1;
        var wrapSelection = _this.props.wrapSelection;
        var nextIndex = startIndex + offset;
        if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
          nextIndex = startIndex;
        } else if (nextIndex > lastIndex) {
          nextIndex = 0;
        } else if (nextIndex < 0) {
          nextIndex = lastIndex;
        }
        if (options[nextIndex].disabled) {
          return _this.getSelectedIndexAfterMove(offset, nextIndex);
        }
        return nextIndex;
      };
      _this.handleIconOverrides = function(predefinedProps) {
        var clearable = _this.props.clearable;
        var classes = clsx_m_default(clearable && _this.hasValue() && "clear", predefinedProps.className);
        return {
          className: classes,
          onClick: function onClick(e) {
            invoke_default(predefinedProps, "onClick", e, predefinedProps);
            _this.handleIconClick(e);
          }
        };
      };
      _this.clearValue = function(e) {
        var multiple = _this.props.multiple;
        var newValue = multiple ? [] : "";
        _this.setState({
          value: newValue
        });
        _this.handleChange(e, newValue);
      };
      _this.computeSearchInputTabIndex = function() {
        var _this$props8 = _this.props, disabled = _this$props8.disabled, tabIndex = _this$props8.tabIndex;
        if (!isNil_default(tabIndex))
          return tabIndex;
        return disabled ? -1 : 0;
      };
      _this.computeSearchInputWidth = function() {
        var searchQuery = _this.state.searchQuery;
        if (_this.sizerRef.current && searchQuery) {
          _this.sizerRef.current.style.display = "inline";
          _this.sizerRef.current.textContent = searchQuery;
          var searchWidth = Math.ceil(_this.sizerRef.current.getBoundingClientRect().width);
          _this.sizerRef.current.style.removeProperty("display");
          return searchWidth;
        }
      };
      _this.computeTabIndex = function() {
        var _this$props9 = _this.props, disabled = _this$props9.disabled, search = _this$props9.search, tabIndex = _this$props9.tabIndex;
        if (search)
          return void 0;
        if (disabled)
          return -1;
        return isNil_default(tabIndex) ? 0 : tabIndex;
      };
      _this.handleSearchInputOverrides = function(predefinedProps) {
        return {
          onChange: function onChange(e, inputProps) {
            invoke_default(predefinedProps, "onChange", e, inputProps);
            _this.handleSearchChange(e, inputProps);
          }
        };
      };
      _this.hasValue = function() {
        var multiple = _this.props.multiple;
        var value = _this.state.value;
        return multiple ? !isEmpty_default(value) : !isNil_default(value) && value !== "";
      };
      _this.scrollSelectedItemIntoView = function() {
        if (!_this.ref.current)
          return;
        var menu = _this.ref.current.querySelector(".menu.visible");
        if (!menu)
          return;
        var item = menu.querySelector(".item.selected");
        if (!item)
          return;
        var isOutOfUpperView = item.offsetTop < menu.scrollTop;
        var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;
        if (isOutOfUpperView) {
          menu.scrollTop = item.offsetTop;
        } else if (isOutOfLowerView) {
          menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
        }
      };
      _this.setOpenDirection = function() {
        if (!_this.ref.current)
          return;
        var menu = _this.ref.current.querySelector(".menu.visible");
        if (!menu)
          return;
        var dropdownRect = _this.ref.current.getBoundingClientRect();
        var menuHeight = menu.clientHeight;
        var spaceAtTheBottom = document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - menuHeight;
        var spaceAtTheTop = dropdownRect.top - menuHeight;
        var upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom;
        if (!upward !== !_this.state.upward) {
          _this.setState({
            upward
          });
        }
      };
      _this.open = function(e, triggerSetState) {
        if (e === void 0) {
          e = null;
        }
        if (triggerSetState === void 0) {
          triggerSetState = true;
        }
        var _this$props10 = _this.props, disabled = _this$props10.disabled, search = _this$props10.search;
        if (disabled)
          return;
        if (search)
          invoke_default(_this.searchRef.current, "focus");
        invoke_default(_this.props, "onOpen", e, _this.props);
        if (triggerSetState) {
          _this.setState({
            open: true
          });
        }
        _this.scrollSelectedItemIntoView();
      };
      _this.close = function(e, callback) {
        if (callback === void 0) {
          callback = _this.handleClose;
        }
        if (_this.state.open) {
          invoke_default(_this.props, "onClose", e, _this.props);
          _this.setState({
            open: false
          }, callback);
        }
      };
      _this.handleClose = function() {
        var hasSearchFocus = document.activeElement === _this.searchRef.current;
        if (!hasSearchFocus && _this.ref.current) {
          _this.ref.current.blur();
        }
        var hasDropdownFocus = document.activeElement === _this.ref.current;
        var hasFocus = hasSearchFocus || hasDropdownFocus;
        _this.setState({
          focus: hasFocus
        });
      };
      _this.toggle = function(e) {
        return _this.state.open ? _this.close(e) : _this.open(e);
      };
      _this.renderText = function() {
        var _this$props11 = _this.props, multiple = _this$props11.multiple, placeholder = _this$props11.placeholder, search = _this$props11.search, text = _this$props11.text;
        var _this$state6 = _this.state, searchQuery = _this$state6.searchQuery, selectedIndex = _this$state6.selectedIndex, value = _this$state6.value, open = _this$state6.open;
        var hasValue = _this.hasValue();
        var classes = clsx_m_default(placeholder && !hasValue && "default", "text", search && searchQuery && "filtered");
        var _text = placeholder;
        var selectedItem;
        if (text) {
          _text = text;
        } else if (open && !multiple) {
          selectedItem = _this.getSelectedItem(selectedIndex);
        } else if (hasValue) {
          selectedItem = _this.getItemByValue(value);
        }
        return DropdownText_default.create(selectedItem ? renderItemContent(selectedItem) : _text, {
          defaultProps: {
            className: classes
          }
        });
      };
      _this.renderSearchInput = function() {
        var _this$props12 = _this.props, search = _this$props12.search, searchInput = _this$props12.searchInput;
        var searchQuery = _this.state.searchQuery;
        return search && /* @__PURE__ */ import_react27.default.createElement(Ref, {
          innerRef: _this.searchRef
        }, DropdownSearchInput_default.create(searchInput, {
          defaultProps: {
            style: {
              width: _this.computeSearchInputWidth()
            },
            tabIndex: _this.computeSearchInputTabIndex(),
            value: searchQuery
          },
          overrideProps: _this.handleSearchInputOverrides
        }));
      };
      _this.renderSearchSizer = function() {
        var _this$props13 = _this.props, search = _this$props13.search, multiple = _this$props13.multiple;
        return search && multiple && /* @__PURE__ */ import_react27.default.createElement("span", {
          className: "sizer",
          ref: _this.sizerRef
        });
      };
      _this.renderLabels = function() {
        var _this$props14 = _this.props, multiple = _this$props14.multiple, renderLabel = _this$props14.renderLabel;
        var _this$state7 = _this.state, selectedLabel = _this$state7.selectedLabel, value = _this$state7.value;
        if (!multiple || isEmpty_default(value)) {
          return;
        }
        var selectedItems = map_default(value, _this.getItemByValue);
        return map_default(compact_default(selectedItems), function(item, index) {
          var defaultProps = {
            active: item.value === selectedLabel,
            as: "a",
            key: getKeyOrValue(item.key, item.value),
            onClick: _this.handleLabelClick,
            onRemove: _this.handleLabelRemove,
            value: item.value
          };
          return Label.create(renderLabel(item, index, defaultProps), {
            defaultProps
          });
        });
      };
      _this.renderOptions = function() {
        var _this$props15 = _this.props, lazyLoad = _this$props15.lazyLoad, multiple = _this$props15.multiple, search = _this$props15.search, noResultsMessage = _this$props15.noResultsMessage;
        var _this$state8 = _this.state, open = _this$state8.open, selectedIndex = _this$state8.selectedIndex, value = _this$state8.value;
        if (lazyLoad && !open)
          return null;
        var options = getMenuOptions({
          value: _this.state.value,
          options: _this.props.options,
          searchQuery: _this.state.searchQuery,
          additionLabel: _this.props.additionLabel,
          additionPosition: _this.props.additionPosition,
          allowAdditions: _this.props.allowAdditions,
          deburr: _this.props.deburr,
          multiple: _this.props.multiple,
          search: _this.props.search
        });
        if (noResultsMessage !== null && search && isEmpty_default(options)) {
          return /* @__PURE__ */ import_react27.default.createElement("div", {
            className: "message"
          }, noResultsMessage);
        }
        var isActive = multiple ? function(optValue) {
          return includes_default(value, optValue);
        } : function(optValue) {
          return optValue === value;
        };
        return map_default(options, function(opt, i) {
          return DropdownItem_default.create(_extends({
            active: isActive(opt.value),
            onClick: _this.handleItemClick,
            selected: selectedIndex === i
          }, opt, {
            key: getKeyOrValue(opt.key, opt.value),
            style: _extends({}, opt.style, {
              pointerEvents: "all"
            })
          }));
        });
      };
      _this.renderMenu = function() {
        var _this$props16 = _this.props, children = _this$props16.children, direction = _this$props16.direction, header = _this$props16.header;
        var open = _this.state.open;
        var ariaOptions = _this.getDropdownMenuAriaOptions();
        if (!childrenUtils_exports.isNil(children)) {
          var menuChild = import_react27.Children.only(children);
          var className = clsx_m_default(direction, useKeyOnly(open, "visible"), menuChild.props.className);
          return /* @__PURE__ */ (0, import_react27.cloneElement)(menuChild, _extends({
            className
          }, ariaOptions));
        }
        return /* @__PURE__ */ import_react27.default.createElement(DropdownMenu_default, _extends({}, ariaOptions, {
          direction,
          open
        }), DropdownHeader_default.create(header, {
          autoGenerateKey: false
        }), _this.renderOptions());
      };
      return _this;
    }
    var _proto = Dropdown2.prototype;
    _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
      return {
        focus: false,
        searchQuery: ""
      };
    };
    Dropdown2.getAutoControlledStateFromProps = function getAutoControlledStateFromProps(nextProps, computedState, prevState) {
      var derivedState = {
        __options: nextProps.options,
        __value: computedState.value
      };
      var shouldComputeSelectedIndex = !(0, import_shallowequal.default)(prevState.__value, computedState.value) || !isEqual_default(getKeyAndValues(nextProps.options), getKeyAndValues(prevState.__options));
      if (shouldComputeSelectedIndex) {
        derivedState.selectedIndex = getSelectedIndex({
          additionLabel: nextProps.additionLabel,
          additionPosition: nextProps.additionPosition,
          allowAdditions: nextProps.allowAdditions,
          deburr: nextProps.deburr,
          multiple: nextProps.multiple,
          search: nextProps.search,
          selectedIndex: computedState.selectedIndex,
          value: computedState.value,
          options: nextProps.options,
          searchQuery: computedState.searchQuery
        });
      }
      return derivedState;
    };
    _proto.componentDidMount = function componentDidMount() {
      var open = this.state.open;
      if (open) {
        this.open(null, false);
      }
    };
    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      return !(0, import_shallowequal.default)(nextProps, this.props) || !(0, import_shallowequal.default)(nextState, this.state);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      var _this$props17 = this.props, closeOnBlur = _this$props17.closeOnBlur, minCharacters = _this$props17.minCharacters, openOnFocus = _this$props17.openOnFocus, search = _this$props17.search;
      if (false) {
        var isNextValueArray = Array.isArray(this.props.value);
        var hasValue = has_default(this.props, "value");
        if (hasValue && this.props.multiple && !isNextValueArray) {
          console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`."));
        } else if (hasValue && !this.props.multiple && isNextValueArray) {
          console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
        }
      }
      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          var openable = !search || search && minCharacters === 1 && !this.state.open;
          if (openOnFocus && openable)
            this.open();
        }
      } else if (prevState.focus && !this.state.focus) {
        if (!this.isMouseDown && closeOnBlur) {
          this.close();
        }
      }
      if (!prevState.open && this.state.open) {
        this.setOpenDirection();
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
      }
      if (prevState.selectedIndex !== this.state.selectedIndex) {
        this.scrollSelectedItemIntoView();
      }
    };
    _proto.getDropdownMenuAriaOptions = function getDropdownMenuAriaOptions() {
      var _this$props18 = this.props, search = _this$props18.search, multiple = _this$props18.multiple;
      var ariaOptions = {};
      if (search) {
        ariaOptions["aria-multiselectable"] = multiple;
        ariaOptions.role = "listbox";
      }
      return ariaOptions;
    };
    _proto.render = function render() {
      var _this$props19 = this.props, basic = _this$props19.basic, button = _this$props19.button, className = _this$props19.className, compact2 = _this$props19.compact, disabled = _this$props19.disabled, error = _this$props19.error, fluid = _this$props19.fluid, floating = _this$props19.floating, icon = _this$props19.icon, inline = _this$props19.inline, item = _this$props19.item, labeled = _this$props19.labeled, loading = _this$props19.loading, multiple = _this$props19.multiple, pointing = _this$props19.pointing, search = _this$props19.search, selection = _this$props19.selection, scrolling = _this$props19.scrolling, simple = _this$props19.simple, trigger = _this$props19.trigger;
      var _this$state9 = this.state, focus = _this$state9.focus, open = _this$state9.open, upward = _this$state9.upward;
      var classes = clsx_m_default("ui", useKeyOnly(open, "active visible"), useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(loading, "loading"), useKeyOnly(basic, "basic"), useKeyOnly(button, "button"), useKeyOnly(compact2, "compact"), useKeyOnly(fluid, "fluid"), useKeyOnly(floating, "floating"), useKeyOnly(inline, "inline"), useKeyOnly(labeled, "labeled"), useKeyOnly(item, "item"), useKeyOnly(multiple, "multiple"), useKeyOnly(search, "search"), useKeyOnly(selection, "selection"), useKeyOnly(simple, "simple"), useKeyOnly(scrolling, "scrolling"), useKeyOnly(upward, "upward"), useKeyOrValueAndKey(pointing, "pointing"), "dropdown", className);
      var rest = getUnhandledProps_default(Dropdown2, this.props);
      var ElementType = getElementType_default(Dropdown2, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);
      return /* @__PURE__ */ import_react27.default.createElement(Ref, {
        innerRef: this.ref
      }, /* @__PURE__ */ import_react27.default.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        tabIndex: this.computeTabIndex()
      }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), trigger || this.renderText(), Icon_default.create(icon, {
        overrideProps: this.handleIconOverrides,
        autoGenerateKey: false
      }), this.renderMenu(), open && /* @__PURE__ */ import_react27.default.createElement(import_event_stack2.default, {
        name: "keydown",
        on: this.closeOnEscape
      }), open && /* @__PURE__ */ import_react27.default.createElement(import_event_stack2.default, {
        name: "click",
        on: this.closeOnDocumentClick
      }), focus && /* @__PURE__ */ import_react27.default.createElement(import_event_stack2.default, {
        name: "keydown",
        on: this.removeItemOnBackspace
      })));
    };
    return Dropdown2;
  }(ModernAutoControlledComponent);
  Dropdown.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
  Dropdown.propTypes = false ? {
    as: import_prop_types.default.elementType,
    additionLabel: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.string]),
    additionPosition: import_prop_types.default.oneOf(["top", "bottom"]),
    allowAdditions: customPropTypes_exports.every([customPropTypes_exports.demand(["options", "selection", "search"]), import_prop_types.default.bool]),
    basic: import_prop_types.default.bool,
    button: import_prop_types.default.bool,
    children: customPropTypes_exports.every([customPropTypes_exports.disallow(["options", "selection"]), customPropTypes_exports.givenProps({
      children: import_prop_types.default.any.isRequired
    }, import_prop_types.default.element.isRequired)]),
    className: import_prop_types.default.string,
    clearable: import_prop_types.default.bool,
    closeOnBlur: import_prop_types.default.bool,
    closeOnEscape: import_prop_types.default.bool,
    closeOnChange: import_prop_types.default.bool,
    compact: import_prop_types.default.bool,
    deburr: import_prop_types.default.bool,
    defaultOpen: import_prop_types.default.bool,
    defaultSearchQuery: import_prop_types.default.string,
    defaultSelectedLabel: customPropTypes_exports.every([customPropTypes_exports.demand(["multiple"]), import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string])]),
    defaultUpward: import_prop_types.default.bool,
    defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.bool, import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number, import_prop_types.default.bool]))]),
    direction: import_prop_types.default.oneOf(["left", "right"]),
    disabled: import_prop_types.default.bool,
    error: import_prop_types.default.bool,
    floating: import_prop_types.default.bool,
    fluid: import_prop_types.default.bool,
    header: import_prop_types.default.node,
    icon: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.object]),
    inline: import_prop_types.default.bool,
    item: import_prop_types.default.bool,
    labeled: import_prop_types.default.bool,
    lazyLoad: import_prop_types.default.bool,
    loading: import_prop_types.default.bool,
    minCharacters: import_prop_types.default.number,
    multiple: import_prop_types.default.bool,
    noResultsMessage: import_prop_types.default.node,
    onAddItem: import_prop_types.default.func,
    onBlur: import_prop_types.default.func,
    onChange: import_prop_types.default.func,
    onClick: import_prop_types.default.func,
    onClose: import_prop_types.default.func,
    onFocus: import_prop_types.default.func,
    onLabelClick: import_prop_types.default.func,
    onMouseDown: import_prop_types.default.func,
    onOpen: import_prop_types.default.func,
    onSearchChange: import_prop_types.default.func,
    open: import_prop_types.default.bool,
    openOnFocus: import_prop_types.default.bool,
    options: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), import_prop_types.default.arrayOf(import_prop_types.default.shape(DropdownItem_default.propTypes))]),
    placeholder: import_prop_types.default.string,
    pointing: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["left", "right", "top", "top left", "top right", "bottom", "bottom left", "bottom right"])]),
    renderLabel: import_prop_types.default.func,
    scrolling: import_prop_types.default.bool,
    search: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
    searchInput: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.node, import_prop_types.default.object]),
    searchQuery: import_prop_types.default.string,
    selectOnBlur: import_prop_types.default.bool,
    selectOnNavigation: import_prop_types.default.bool,
    selectedLabel: customPropTypes_exports.every([customPropTypes_exports.demand(["multiple"]), import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])]),
    selection: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), customPropTypes_exports.demand(["options"]), import_prop_types.default.bool]),
    simple: import_prop_types.default.bool,
    tabIndex: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
    text: import_prop_types.default.string,
    trigger: customPropTypes_exports.every([customPropTypes_exports.disallow(["selection", "text"]), import_prop_types.default.node]),
    value: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.number]))]),
    upward: import_prop_types.default.bool,
    wrapSelection: import_prop_types.default.bool
  } : {};
  Dropdown.defaultProps = {
    additionLabel: "Add ",
    additionPosition: "top",
    closeOnBlur: true,
    closeOnEscape: true,
    deburr: false,
    icon: "dropdown",
    minCharacters: 1,
    noResultsMessage: "No results found.",
    openOnFocus: true,
    renderLabel: renderItemContent,
    searchInput: "text",
    selectOnBlur: true,
    selectOnNavigation: true,
    wrapSelection: true
  };
  Dropdown.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
  Dropdown.Divider = DropdownDivider_default;
  Dropdown.Header = DropdownHeader_default;
  Dropdown.Item = DropdownItem_default;
  Dropdown.Menu = DropdownMenu_default;
  Dropdown.SearchInput = DropdownSearchInput_default;
  Dropdown.Text = DropdownText_default;

  // node_modules/semantic-ui-react/dist/es/elements/Input/Input.js
  var import_react28 = __toESM(require_react());
  var Input = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Input2, _Component);
    function Input2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.inputRef = /* @__PURE__ */ (0, import_react28.createRef)();
      _this.computeIcon = function() {
        var _this$props = _this.props, loading = _this$props.loading, icon = _this$props.icon;
        if (!isNil_default(icon))
          return icon;
        if (loading)
          return "spinner";
      };
      _this.computeTabIndex = function() {
        var _this$props2 = _this.props, disabled = _this$props2.disabled, tabIndex = _this$props2.tabIndex;
        if (!isNil_default(tabIndex))
          return tabIndex;
        if (disabled)
          return -1;
      };
      _this.focus = function() {
        return _this.inputRef.current.focus();
      };
      _this.select = function() {
        return _this.inputRef.current.select();
      };
      _this.handleChange = function(e) {
        var value = get_default(e, "target.value");
        invoke_default(_this.props, "onChange", e, _extends({}, _this.props, {
          value
        }));
      };
      _this.handleChildOverrides = function(child, defaultProps) {
        return _extends({}, defaultProps, child.props, {
          ref: function ref(c) {
            handleRef(child.ref, c);
            _this.inputRef.current = c;
          }
        });
      };
      _this.partitionProps = function() {
        var _this$props3 = _this.props, disabled = _this$props3.disabled, type = _this$props3.type;
        var tabIndex = _this.computeTabIndex();
        var unhandled = getUnhandledProps_default(Input2, _this.props);
        var _partitionHTMLProps = partitionHTMLProps(unhandled), htmlInputProps2 = _partitionHTMLProps[0], rest = _partitionHTMLProps[1];
        return [_extends({}, htmlInputProps2, {
          disabled,
          type,
          tabIndex,
          onChange: _this.handleChange,
          ref: _this.inputRef
        }), rest];
      };
      return _this;
    }
    var _proto = Input2.prototype;
    _proto.render = function render() {
      var _this2 = this;
      var _this$props4 = this.props, action = _this$props4.action, actionPosition = _this$props4.actionPosition, children = _this$props4.children, className = _this$props4.className, disabled = _this$props4.disabled, error = _this$props4.error, fluid = _this$props4.fluid, focus = _this$props4.focus, icon = _this$props4.icon, iconPosition = _this$props4.iconPosition, input = _this$props4.input, inverted = _this$props4.inverted, label = _this$props4.label, labelPosition = _this$props4.labelPosition, loading = _this$props4.loading, size2 = _this$props4.size, transparent = _this$props4.transparent, type = _this$props4.type;
      var classes = clsx_m_default("ui", size2, useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(fluid, "fluid"), useKeyOnly(focus, "focus"), useKeyOnly(inverted, "inverted"), useKeyOnly(loading, "loading"), useKeyOnly(transparent, "transparent"), useValueAndKey(actionPosition, "action") || useKeyOnly(action, "action"), useValueAndKey(iconPosition, "icon") || useKeyOnly(icon || loading, "icon"), useValueAndKey(labelPosition, "labeled") || useKeyOnly(label, "labeled"), "input", className);
      var ElementType = getElementType_default(Input2, this.props);
      var _this$partitionProps = this.partitionProps(), htmlInputProps2 = _this$partitionProps[0], rest = _this$partitionProps[1];
      if (!childrenUtils_exports.isNil(children)) {
        var childElements = map_default(import_react28.Children.toArray(children), function(child) {
          if (child.type !== "input")
            return child;
          return /* @__PURE__ */ (0, import_react28.cloneElement)(child, _this2.handleChildOverrides(child, htmlInputProps2));
        });
        return /* @__PURE__ */ import_react28.default.createElement(ElementType, _extends({}, rest, {
          className: classes
        }), childElements);
      }
      var actionElement = Button_default.create(action, {
        autoGenerateKey: false
      });
      var labelElement = Label.create(label, {
        defaultProps: {
          className: clsx_m_default("label", includes_default(labelPosition, "corner") && labelPosition)
        },
        autoGenerateKey: false
      });
      return /* @__PURE__ */ import_react28.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), actionPosition === "left" && actionElement, labelPosition !== "right" && labelElement, createHTMLInput(input || type, {
        defaultProps: htmlInputProps2,
        autoGenerateKey: false
      }), Icon_default.create(this.computeIcon(), {
        autoGenerateKey: false
      }), actionPosition !== "left" && actionElement, labelPosition === "right" && labelElement);
    };
    return Input2;
  }(import_react28.Component);
  Input.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
  Input.propTypes = false ? {
    as: import_prop_types.default.elementType,
    action: import_prop_types.default.oneOfType([import_prop_types.default.bool, customPropTypes_exports.itemShorthand]),
    actionPosition: import_prop_types.default.oneOf(["left"]),
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    disabled: import_prop_types.default.bool,
    error: import_prop_types.default.bool,
    fluid: import_prop_types.default.bool,
    focus: import_prop_types.default.bool,
    icon: import_prop_types.default.oneOfType([import_prop_types.default.bool, customPropTypes_exports.itemShorthand]),
    iconPosition: import_prop_types.default.oneOf(["left"]),
    input: customPropTypes_exports.itemShorthand,
    inverted: import_prop_types.default.bool,
    label: customPropTypes_exports.itemShorthand,
    labelPosition: import_prop_types.default.oneOf(["left", "right", "left corner", "right corner"]),
    loading: import_prop_types.default.bool,
    onChange: import_prop_types.default.func,
    size: import_prop_types.default.oneOf(["mini", "small", "large", "big", "huge", "massive"]),
    tabIndex: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
    transparent: import_prop_types.default.bool,
    type: import_prop_types.default.string
  } : {};
  Input.defaultProps = {
    type: "text"
  };
  Input.create = createShorthandFactory(Input, function(type) {
    return {
      type
    };
  });
  var Input_default = Input;

  // node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
  var import_react31 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js
  var import_react29 = __toESM(require_react());
  function GridColumn(props) {
    var children = props.children, className = props.className, computer = props.computer, color = props.color, floated = props.floated, largeScreen = props.largeScreen, mobile = props.mobile, only = props.only, stretched = props.stretched, tablet = props.tablet, textAlign = props.textAlign, verticalAlign = props.verticalAlign, widescreen = props.widescreen, width = props.width;
    var classes = clsx_m_default(color, useKeyOnly(stretched, "stretched"), useMultipleProp(only, "only"), useTextAlignProp(textAlign), useValueAndKey(floated, "floated"), useVerticalAlignProp(verticalAlign), useWidthProp(computer, "wide computer"), useWidthProp(largeScreen, "wide large screen"), useWidthProp(mobile, "wide mobile"), useWidthProp(tablet, "wide tablet"), useWidthProp(widescreen, "wide widescreen"), useWidthProp(width, "wide"), "column", className);
    var rest = getUnhandledProps_default(GridColumn, props);
    var ElementType = getElementType_default(GridColumn, props);
    return /* @__PURE__ */ import_react29.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  GridColumn.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
  GridColumn.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    computer: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types.default.oneOf(SUI_exports.WIDTHS)]),
    floated: import_prop_types.default.oneOf(SUI_exports.FLOATS),
    largeScreen: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types.default.oneOf(SUI_exports.WIDTHS)]),
    mobile: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types.default.oneOf(SUI_exports.WIDTHS)]),
    only: customPropTypes_exports.multipleProp(SUI_exports.VISIBILITY),
    stretched: import_prop_types.default.bool,
    tablet: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types.default.oneOf(SUI_exports.WIDTHS)]),
    textAlign: import_prop_types.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
    widescreen: customPropTypes_exports.every([customPropTypes_exports.disallow(["width"]), import_prop_types.default.oneOf(SUI_exports.WIDTHS)]),
    width: customPropTypes_exports.every([customPropTypes_exports.disallow(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), import_prop_types.default.oneOf(SUI_exports.WIDTHS)])
  } : {};
  GridColumn.create = createShorthandFactory(GridColumn, function(children) {
    return {
      children
    };
  });
  var GridColumn_default = GridColumn;

  // node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js
  var import_react30 = __toESM(require_react());
  function GridRow(props) {
    var centered = props.centered, children = props.children, className = props.className, color = props.color, columns = props.columns, divided = props.divided, only = props.only, reversed = props.reversed, stretched = props.stretched, textAlign = props.textAlign, verticalAlign = props.verticalAlign;
    var classes = clsx_m_default(color, useKeyOnly(centered, "centered"), useKeyOnly(divided, "divided"), useKeyOnly(stretched, "stretched"), useMultipleProp(only, "only"), useMultipleProp(reversed, "reversed"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column", true), "row", className);
    var rest = getUnhandledProps_default(GridRow, props);
    var ElementType = getElementType_default(GridRow, props);
    return /* @__PURE__ */ import_react30.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  GridRow.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
  GridRow.propTypes = false ? {
    as: import_prop_types.default.elementType,
    centered: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    columns: import_prop_types.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"])),
    divided: import_prop_types.default.bool,
    only: customPropTypes_exports.multipleProp(SUI_exports.VISIBILITY),
    reversed: customPropTypes_exports.multipleProp(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
    stretched: import_prop_types.default.bool,
    textAlign: import_prop_types.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
  } : {};
  var GridRow_default = GridRow;

  // node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
  function Grid(props) {
    var celled = props.celled, centered = props.centered, children = props.children, className = props.className, columns = props.columns, container = props.container, divided = props.divided, doubling = props.doubling, inverted = props.inverted, padded = props.padded, relaxed = props.relaxed, reversed = props.reversed, stackable = props.stackable, stretched = props.stretched, textAlign = props.textAlign, verticalAlign = props.verticalAlign;
    var classes = clsx_m_default("ui", useKeyOnly(centered, "centered"), useKeyOnly(container, "container"), useKeyOnly(doubling, "doubling"), useKeyOnly(inverted, "inverted"), useKeyOnly(stackable, "stackable"), useKeyOnly(stretched, "stretched"), useKeyOrValueAndKey(celled, "celled"), useKeyOrValueAndKey(divided, "divided"), useKeyOrValueAndKey(padded, "padded"), useKeyOrValueAndKey(relaxed, "relaxed"), useMultipleProp(reversed, "reversed"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column", true), "grid", className);
    var rest = getUnhandledProps_default(Grid, props);
    var ElementType = getElementType_default(Grid, props);
    return /* @__PURE__ */ import_react31.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  Grid.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
  Grid.Column = GridColumn_default;
  Grid.Row = GridRow_default;
  Grid.propTypes = false ? {
    as: import_prop_types.default.elementType,
    celled: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["internally"])]),
    centered: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    columns: import_prop_types.default.oneOf([].concat(SUI_exports.WIDTHS, ["equal"])),
    container: import_prop_types.default.bool,
    divided: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["vertically"])]),
    doubling: import_prop_types.default.bool,
    inverted: import_prop_types.default.bool,
    padded: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["horizontally", "vertically"])]),
    relaxed: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["very"])]),
    reversed: customPropTypes_exports.multipleProp(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
    stackable: import_prop_types.default.bool,
    stretched: import_prop_types.default.bool,
    textAlign: import_prop_types.default.oneOf(SUI_exports.TEXT_ALIGNMENTS),
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
  } : {};
  var Grid_default = Grid;

  // node_modules/semantic-ui-react/dist/es/collections/Table/Table.js
  var import_react38 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableBody.js
  var import_react32 = __toESM(require_react());
  function TableBody(props) {
    var children = props.children, className = props.className;
    var classes = clsx_m_default(className);
    var rest = getUnhandledProps_default(TableBody, props);
    var ElementType = getElementType_default(TableBody, props);
    return /* @__PURE__ */ import_react32.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }
  TableBody.handledProps = ["as", "children", "className"];
  TableBody.defaultProps = {
    as: "tbody"
  };
  TableBody.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string
  } : {};
  var TableBody_default = TableBody;

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableCell.js
  var import_react33 = __toESM(require_react());
  function TableCell(props) {
    var active = props.active, children = props.children, className = props.className, collapsing = props.collapsing, content = props.content, disabled = props.disabled, error = props.error, icon = props.icon, negative = props.negative, positive = props.positive, selectable = props.selectable, singleLine = props.singleLine, textAlign = props.textAlign, verticalAlign = props.verticalAlign, warning = props.warning, width = props.width;
    var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(collapsing, "collapsing"), useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(selectable, "selectable"), useKeyOnly(singleLine, "single line"), useKeyOnly(warning, "warning"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(width, "wide"), className);
    var rest = getUnhandledProps_default(TableCell, props);
    var ElementType = getElementType_default(TableCell, props);
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react33.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), children);
    }
    return /* @__PURE__ */ import_react33.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), Icon_default.create(icon), content);
  }
  TableCell.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
  TableCell.defaultProps = {
    as: "td"
  };
  TableCell.propTypes = false ? {
    as: import_prop_types.default.elementType,
    active: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    collapsing: import_prop_types.default.bool,
    content: customPropTypes_exports.contentShorthand,
    disabled: import_prop_types.default.bool,
    error: import_prop_types.default.bool,
    icon: customPropTypes_exports.itemShorthand,
    negative: import_prop_types.default.bool,
    positive: import_prop_types.default.bool,
    selectable: import_prop_types.default.bool,
    singleLine: import_prop_types.default.bool,
    textAlign: import_prop_types.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
    warning: import_prop_types.default.bool,
    width: import_prop_types.default.oneOf(SUI_exports.WIDTHS)
  } : {};
  TableCell.create = createShorthandFactory(TableCell, function(content) {
    return {
      content
    };
  });
  var TableCell_default = TableCell;

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js
  var import_react35 = __toESM(require_react());

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableHeader.js
  var import_react34 = __toESM(require_react());
  function TableHeader(props) {
    var children = props.children, className = props.className, content = props.content, fullWidth = props.fullWidth;
    var classes = clsx_m_default(useKeyOnly(fullWidth, "full-width"), className);
    var rest = getUnhandledProps_default(TableHeader, props);
    var ElementType = getElementType_default(TableHeader, props);
    return /* @__PURE__ */ import_react34.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils_exports.isNil(children) ? content : children);
  }
  TableHeader.handledProps = ["as", "children", "className", "content", "fullWidth"];
  TableHeader.defaultProps = {
    as: "thead"
  };
  TableHeader.propTypes = false ? {
    as: import_prop_types.default.elementType,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    content: customPropTypes_exports.contentShorthand,
    fullWidth: import_prop_types.default.bool
  } : {};
  var TableHeader_default = TableHeader;

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js
  function TableFooter(props) {
    var as = props.as;
    var rest = getUnhandledProps_default(TableFooter, props);
    return /* @__PURE__ */ import_react35.default.createElement(TableHeader_default, _extends({}, rest, {
      as
    }));
  }
  TableFooter.handledProps = ["as"];
  TableFooter.propTypes = false ? {
    as: import_prop_types.default.elementType
  } : {};
  TableFooter.defaultProps = {
    as: "tfoot"
  };
  var TableFooter_default = TableFooter;

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableHeaderCell.js
  var import_react36 = __toESM(require_react());
  function TableHeaderCell(props) {
    var as = props.as, className = props.className, sorted = props.sorted;
    var classes = clsx_m_default(useValueAndKey(sorted, "sorted"), className);
    var rest = getUnhandledProps_default(TableHeaderCell, props);
    return /* @__PURE__ */ import_react36.default.createElement(TableCell_default, _extends({}, rest, {
      as,
      className: classes
    }));
  }
  TableHeaderCell.handledProps = ["as", "className", "sorted"];
  TableHeaderCell.propTypes = false ? {
    as: import_prop_types.default.elementType,
    className: import_prop_types.default.string,
    sorted: import_prop_types.default.oneOf(["ascending", "descending"])
  } : {};
  TableHeaderCell.defaultProps = {
    as: "th"
  };
  var TableHeaderCell_default = TableHeaderCell;

  // node_modules/semantic-ui-react/dist/es/collections/Table/TableRow.js
  var import_react37 = __toESM(require_react());
  function TableRow(props) {
    var active = props.active, cellAs = props.cellAs, cells = props.cells, children = props.children, className = props.className, disabled = props.disabled, error = props.error, negative = props.negative, positive = props.positive, textAlign = props.textAlign, verticalAlign = props.verticalAlign, warning = props.warning;
    var classes = clsx_m_default(useKeyOnly(active, "active"), useKeyOnly(disabled, "disabled"), useKeyOnly(error, "error"), useKeyOnly(negative, "negative"), useKeyOnly(positive, "positive"), useKeyOnly(warning, "warning"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), className);
    var rest = getUnhandledProps_default(TableRow, props);
    var ElementType = getElementType_default(TableRow, props);
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react37.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), children);
    }
    return /* @__PURE__ */ import_react37.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), map_default(cells, function(cell) {
      return TableCell_default.create(cell, {
        defaultProps: {
          as: cellAs
        }
      });
    }));
  }
  TableRow.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
  TableRow.defaultProps = {
    as: "tr",
    cellAs: "td"
  };
  TableRow.propTypes = false ? {
    as: import_prop_types.default.elementType,
    active: import_prop_types.default.bool,
    cellAs: import_prop_types.default.elementType,
    cells: customPropTypes_exports.collectionShorthand,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    disabled: import_prop_types.default.bool,
    error: import_prop_types.default.bool,
    negative: import_prop_types.default.bool,
    positive: import_prop_types.default.bool,
    textAlign: import_prop_types.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS),
    warning: import_prop_types.default.bool
  } : {};
  TableRow.create = createShorthandFactory(TableRow, function(cells) {
    return {
      cells
    };
  });
  var TableRow_default = TableRow;

  // node_modules/semantic-ui-react/dist/es/collections/Table/Table.js
  function Table(props) {
    var attached = props.attached, basic = props.basic, celled = props.celled, children = props.children, className = props.className, collapsing = props.collapsing, color = props.color, columns = props.columns, compact2 = props.compact, definition = props.definition, fixed = props.fixed, footerRow = props.footerRow, headerRow = props.headerRow, headerRows = props.headerRows, inverted = props.inverted, padded = props.padded, renderBodyRow = props.renderBodyRow, selectable = props.selectable, singleLine = props.singleLine, size2 = props.size, sortable = props.sortable, stackable = props.stackable, striped = props.striped, structured = props.structured, tableData = props.tableData, textAlign = props.textAlign, unstackable = props.unstackable, verticalAlign = props.verticalAlign;
    var classes = clsx_m_default("ui", color, size2, useKeyOnly(celled, "celled"), useKeyOnly(collapsing, "collapsing"), useKeyOnly(definition, "definition"), useKeyOnly(fixed, "fixed"), useKeyOnly(inverted, "inverted"), useKeyOnly(selectable, "selectable"), useKeyOnly(singleLine, "single line"), useKeyOnly(sortable, "sortable"), useKeyOnly(stackable, "stackable"), useKeyOnly(striped, "striped"), useKeyOnly(structured, "structured"), useKeyOnly(unstackable, "unstackable"), useKeyOrValueAndKey(attached, "attached"), useKeyOrValueAndKey(basic, "basic"), useKeyOrValueAndKey(compact2, "compact"), useKeyOrValueAndKey(padded, "padded"), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, "column"), "table", className);
    var rest = getUnhandledProps_default(Table, props);
    var ElementType = getElementType_default(Table, props);
    if (!childrenUtils_exports.isNil(children)) {
      return /* @__PURE__ */ import_react38.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), children);
    }
    var hasHeaderRows = headerRow || headerRows;
    var headerShorthandOptions = {
      defaultProps: {
        cellAs: "th"
      }
    };
    var headerElement = hasHeaderRows && /* @__PURE__ */ import_react38.default.createElement(TableHeader_default, null, TableRow_default.create(headerRow, headerShorthandOptions), map_default(headerRows, function(data) {
      return TableRow_default.create(data, headerShorthandOptions);
    }));
    return /* @__PURE__ */ import_react38.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), headerElement, /* @__PURE__ */ import_react38.default.createElement(TableBody_default, null, renderBodyRow && map_default(tableData, function(data, index) {
      return TableRow_default.create(renderBodyRow(data, index));
    })), footerRow && /* @__PURE__ */ import_react38.default.createElement(TableFooter_default, null, TableRow_default.create(footerRow)));
  }
  Table.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
  Table.defaultProps = {
    as: "table"
  };
  Table.propTypes = false ? {
    as: import_prop_types.default.elementType,
    attached: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["top", "bottom"])]),
    basic: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["very"]), import_prop_types.default.bool]),
    celled: import_prop_types.default.bool,
    children: import_prop_types.default.node,
    className: import_prop_types.default.string,
    collapsing: import_prop_types.default.bool,
    color: import_prop_types.default.oneOf(SUI_exports.COLORS),
    columns: import_prop_types.default.oneOf(SUI_exports.WIDTHS),
    compact: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["very"])]),
    definition: import_prop_types.default.bool,
    fixed: import_prop_types.default.bool,
    footerRow: customPropTypes_exports.itemShorthand,
    headerRow: customPropTypes_exports.every([customPropTypes_exports.disallow(["headerRows"]), customPropTypes_exports.itemShorthand]),
    headerRows: customPropTypes_exports.every([customPropTypes_exports.disallow(["headerRow"]), customPropTypes_exports.collectionShorthand]),
    inverted: import_prop_types.default.bool,
    padded: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.oneOf(["very"])]),
    renderBodyRow: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), customPropTypes_exports.demand(["tableData"]), import_prop_types.default.func]),
    selectable: import_prop_types.default.bool,
    singleLine: import_prop_types.default.bool,
    size: import_prop_types.default.oneOf(without_default(SUI_exports.SIZES, "mini", "tiny", "medium", "big", "huge", "massive")),
    sortable: import_prop_types.default.bool,
    stackable: import_prop_types.default.bool,
    striped: import_prop_types.default.bool,
    structured: import_prop_types.default.bool,
    tableData: customPropTypes_exports.every([customPropTypes_exports.disallow(["children"]), customPropTypes_exports.demand(["renderBodyRow"]), import_prop_types.default.array]),
    textAlign: import_prop_types.default.oneOf(without_default(SUI_exports.TEXT_ALIGNMENTS, "justified")),
    unstackable: import_prop_types.default.bool,
    verticalAlign: import_prop_types.default.oneOf(SUI_exports.VERTICAL_ALIGNMENTS)
  } : {};
  Table.Body = TableBody_default;
  Table.Cell = TableCell_default;
  Table.Footer = TableFooter_default;
  Table.Header = TableHeader_default;
  Table.HeaderCell = TableHeaderCell_default;
  Table.Row = TableRow_default;
  var Table_default = Table;

  // src/components/Timer/index.tsx
  var import_react39 = __toESM(require_react(), 1);
  var Timer = ({ interval, setTimer, currentTimer }) => {
    (0, import_react39.useEffect)(() => {
      const timeoutId = setTimeout(() => setTimer(new Date()), interval);
      return () => clearTimeout(timeoutId);
    }, [interval, currentTimer]);
    return /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null);
  };
  var Timer_default = Timer;

  // src/components/HeptList/index.tsx
  var import_react40 = __toESM(require_react(), 1);
  var optionshept = [
    { key: "Chronos", text: "Chronos", value: "Chronos" },
    { key: "Hyper", text: "Hyper", value: "Hyper" },
    { key: "Quark", text: "Quark", value: "Quark" },
    { key: "Challenge", text: "Challenge", value: "Challenge" },
    { key: "HotA", text: "HotA", value: "HotA" },
    { key: "Accel", text: "Accel", value: "Accel" },
    { key: "A. Boost", text: "A. Boost", value: "A. Boost" },
    { key: "Multi", text: "Multi", value: "Multi" }
  ];
  var HeptList = () => {
    return /* @__PURE__ */ import_react40.default.createElement(Grid_default, null, /* @__PURE__ */ import_react40.default.createElement(Grid_default.Row, {
      centered: true
    }, /* @__PURE__ */ import_react40.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react40.default.createElement("h5", null, "Hept"), /* @__PURE__ */ import_react40.default.createElement(Dropdown, {
      placeholder: "Select one",
      selection: true,
      options: optionshept
    })), /* @__PURE__ */ import_react40.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react40.default.createElement("h5", null, "Tier"), /* @__PURE__ */ import_react40.default.createElement(Input_default, null))), /* @__PURE__ */ import_react40.default.createElement(Grid_default.Row, {
      centered: true
    }, /* @__PURE__ */ import_react40.default.createElement(Table_default, null)));
  };
  var HeptList_default = HeptList;

  // src/components/Parameters/index.tsx
  var import_react43 = __toESM(require_react(), 1);

  // src/hooks/saveHooks.ts
  var import_react42 = __toESM(require_react(), 1);

  // src/contexts/saveContext.ts
  var import_react41 = __toESM(require_react(), 1);
  var defaultSave = {
    save: "",
    setSave: (_) => {
    },
    decodedSave: {},
    setDecodedSave: (_) => {
    },
    quarkGain: 0.5,
    setQuarkGain: (_) => {
    },
    powderRatio: 0.5,
    setPowderRatio: (_) => {
    },
    addUses: 24,
    setAddUses: (_) => {
    },
    heptsPerSecond: 0,
    setHeptsPerSecond: (_) => {
    }
  };
  var saveContext = import_react41.default.createContext(defaultSave);
  var saveContext_default = saveContext;

  // src/hooks/saveHooks.ts
  var useSave = () => {
    const { save, setSave } = (0, import_react42.useContext)(saveContext_default);
    return { save, setSave };
  };
  var useQuarkGain = () => {
    const { quarkGain, setQuarkGain } = (0, import_react42.useContext)(saveContext_default);
    return { quarkGain, setQuarkGain };
  };
  var useDecodedSave = () => {
    const { decodedSave, setDecodedSave } = (0, import_react42.useContext)(saveContext_default);
    return { decodedSave, setDecodedSave };
  };
  var useAddUses = () => {
    const { addUses, setAddUses } = (0, import_react42.useContext)(saveContext_default);
    return { addUses, setAddUses };
  };
  var usePowderRatio = () => {
    const { powderRatio, setPowderRatio } = (0, import_react42.useContext)(saveContext_default);
    return { powderRatio, setPowderRatio };
  };
  var useHeptsPerSecond = () => {
    const { heptsPerSecond, setHeptsPerSecond } = (0, import_react42.useContext)(saveContext_default);
    return { heptsPerSecond, setHeptsPerSecond };
  };
  var hydrateHepteract = (name, savedHept) => {
    return {
      name,
      balance: savedHept.BAL,
      cap: savedHept.CAP,
      base_cap: savedHept.BASE_CAP,
      tier: Math.log2(savedHept.CAP / savedHept.BASE_CAP) + 1,
      cost: savedHept.HEPTERACT_CONVERSION
    };
  };
  var useHepts = () => {
    const { decodedSave } = useDecodedSave();
    const { hepteractCrafts } = decodedSave;
    return {
      abyss: hydrateHepteract("Abyss", hepteractCrafts.abyss),
      accelerator: hydrateHepteract("Accelerator", hepteractCrafts.accelerator),
      acceleratorBoost: hydrateHepteract("Accelerator Boosts", hepteractCrafts.acceleratorBoost),
      chronos: hydrateHepteract("Chronos", hepteractCrafts.chronos),
      challenge: hydrateHepteract("Challenge", hepteractCrafts.challenge),
      hyperrealism: hydrateHepteract("Hyper", hepteractCrafts.hyperrealism),
      multiplier: hydrateHepteract("Multiplier", hepteractCrafts.multiplier),
      quark: hydrateHepteract("Quark", hepteractCrafts.quark)
    };
  };

  // src/components/Parameters/index.tsx
  var optionsquark = [
    { key: "50%", text: "50%", value: 0.5 },
    { key: "100%", text: "100%", value: 1 },
    { key: "150%", text: "150%", value: 1.5 },
    { key: "190%", text: "190%", value: 1.9 },
    { key: "200%", text: "200%", value: 2 }
  ];
  var optionspowder = [
    { key: "1%", text: "1%", value: 0.01 },
    { key: "2%", text: "2%", value: 0.02 },
    { key: "5%", text: "5%", value: 0.05 },
    { key: "10%", text: "10%", value: 0.1 },
    { key: "25%", text: "25%", value: 0.25 },
    { key: "40%", text: "40%", value: 0.4 },
    { key: "50%", text: "50%", value: 0.5 },
    { key: "75%", text: "75%", value: 0.75 },
    { key: "100%", text: "100%", value: 1 }
  ];
  var Parameters = () => {
    const { setQuarkGain } = useQuarkGain();
    const { setPowderRatio } = usePowderRatio();
    const { setAddUses } = useAddUses();
    const { setHeptsPerSecond } = useHeptsPerSecond();
    const { save, setSave } = useSave();
    const { setDecodedSave } = useDecodedSave();
    const saveChanged = (newSave) => {
      const decodedSave = atob(newSave);
      setSave(newSave);
      setDecodedSave(JSON.parse(decodedSave));
    };
    return /* @__PURE__ */ import_react43.default.createElement(Grid_default, null, /* @__PURE__ */ import_react43.default.createElement(Grid_default.Row, {
      centered: true
    }, /* @__PURE__ */ import_react43.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react43.default.createElement("h5", null, "Save File"), /* @__PURE__ */ import_react43.default.createElement(Input_default, {
      placeholder: "Enter save here...",
      onChange: (e) => saveChanged(e.target.value),
      value: save
    })), /* @__PURE__ */ import_react43.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react43.default.createElement("h5", null, "Quark Gain"), /* @__PURE__ */ import_react43.default.createElement(Dropdown, {
      placeholder: "Select one",
      selection: true,
      options: optionsquark,
      onChange: (_, d) => setQuarkGain(d.value)
    })), /* @__PURE__ */ import_react43.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react43.default.createElement("h5", null, "Powder/Chronos Ratio"), /* @__PURE__ */ import_react43.default.createElement(Dropdown, {
      placeholder: "Select one",
      selection: true,
      options: optionspowder,
      onChange: (_, d) => setPowderRatio(d.value)
    })), /* @__PURE__ */ import_react43.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react43.default.createElement("h5", null, "Number of Add per Day"), /* @__PURE__ */ import_react43.default.createElement(Input_default, {
      onChange: (e) => setAddUses(parseInt(e.target.value, 10))
    })), /* @__PURE__ */ import_react43.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 2
    }, /* @__PURE__ */ import_react43.default.createElement("h5", null, "Hepteract per second"), /* @__PURE__ */ import_react43.default.createElement(Input_default, {
      onChange: (e) => setHeptsPerSecond(parseFloat(e.target.value))
    }))));
  };
  var Parameters_default = Parameters;

  // src/components/ShopOpti/index.tsx
  var import_react44 = __toESM(require_react(), 1);
  var ShopOpti = () => {
    return /* @__PURE__ */ import_react44.default.createElement(Table_default, {
      celled: true,
      textAlign: "center",
      striped: true
    }, /* @__PURE__ */ import_react44.default.createElement(Table_default.Header, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, {
      colSpan: "3"
    }, "Acceleration"), /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, {
      colSpan: "3"
    }, "WoW Passes")), /* @__PURE__ */ import_react44.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, null, "Accel 1"), /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, null, "Accel 2"), /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, null, "Cost"), /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, null, "WoW 3"), /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, null, "WoW Y"), /* @__PURE__ */ import_react44.default.createElement(Table_default.HeaderCell, null, "Cost"))), /* @__PURE__ */ import_react44.default.createElement(Table_default.Body, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, {
      colSpan: "6"
    }, /* @__PURE__ */ import_react44.default.createElement(Button_default, {
      fluid: true,
      animated: "fade"
    }, /* @__PURE__ */ import_react44.default.createElement(Button_default.Content, {
      visible: true
    }, "Previous Line"), /* @__PURE__ */ import_react44.default.createElement(Button_default.Content, {
      hidden: true
    }, /* @__PURE__ */ import_react44.default.createElement(Icon_default, {
      name: "arrow up"
    }))))), /* @__PURE__ */ import_react44.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, null, "1"), /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, null, "0"), /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, null, "2000"), /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, null, "1"), /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, null, "0"), /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, null, "5000")), /* @__PURE__ */ import_react44.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react44.default.createElement(Table_default.Cell, {
      colSpan: "6"
    }, /* @__PURE__ */ import_react44.default.createElement(Button_default, {
      fluid: true,
      animated: "fade"
    }, /* @__PURE__ */ import_react44.default.createElement(Button_default.Content, {
      visible: true
    }, "Next Line"), /* @__PURE__ */ import_react44.default.createElement(Button_default.Content, {
      hidden: true
    }, /* @__PURE__ */ import_react44.default.createElement(Icon_default, {
      name: "arrow down"
    })))))));
  };
  var ShopOpti_default = ShopOpti;

  // src/components/Tiers/index.tsx
  var import_react47 = __toESM(require_react(), 1);

  // src/hooks/timerHooks.ts
  var import_react46 = __toESM(require_react(), 1);

  // src/contexts/timerContext.ts
  var import_react45 = __toESM(require_react(), 1);
  var timerContext = import_react45.default.createContext(new Date());
  var timerContext_default = timerContext;

  // src/hooks/timerHooks.ts
  var useSecondsSinceSave = () => {
    const currentTime = (0, import_react46.useContext)(timerContext_default);
    const { decodedSave } = useDecodedSave();
    return currentTime.getTime() - decodedSave.offlinetick;
  };

  // src/components/Tiers/index.tsx
  var HeptTableRow = ({ hepteract }) => {
    const saveTime = useSecondsSinceSave();
    const { heptsPerSecond } = useHeptsPerSecond();
    return /* @__PURE__ */ import_react47.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react47.default.createElement(Table_default.Cell, null, hepteract.name), /* @__PURE__ */ import_react47.default.createElement(Table_default.Cell, null, hepteract.tier), /* @__PURE__ */ import_react47.default.createElement(Table_default.Cell, null, hepteract.balance), /* @__PURE__ */ import_react47.default.createElement(Table_default.Cell, null, Math.floor(saveTime * heptsPerSecond / hepteract.cost)));
  };
  var Tiers = () => {
    const hepts = useHepts();
    return /* @__PURE__ */ import_react47.default.createElement(Grid_default, null, /* @__PURE__ */ import_react47.default.createElement(Grid_default.Column, {
      width: 16
    }, /* @__PURE__ */ import_react47.default.createElement(Grid_default.Row, {
      centered: true
    }, /* @__PURE__ */ import_react47.default.createElement(Grid_default.Column, null, /* @__PURE__ */ import_react47.default.createElement(Table_default, {
      textAlign: "center"
    }, /* @__PURE__ */ import_react47.default.createElement(Table_default.Header, null, /* @__PURE__ */ import_react47.default.createElement(Table_default.Row, null, /* @__PURE__ */ import_react47.default.createElement(Table_default.HeaderCell, null, "Name"), /* @__PURE__ */ import_react47.default.createElement(Table_default.HeaderCell, null, "Tier"), /* @__PURE__ */ import_react47.default.createElement(Table_default.HeaderCell, null, "Balance"), /* @__PURE__ */ import_react47.default.createElement(Table_default.HeaderCell, null, "Number you can buy"))), /* @__PURE__ */ import_react47.default.createElement(Table_default.Body, null, Object.values(hepts).map((hept) => /* @__PURE__ */ import_react47.default.createElement(HeptTableRow, {
      key: hept.name,
      hepteract: hept
    }))))))), /* @__PURE__ */ import_react47.default.createElement(Grid_default.Row, {
      centered: true
    }, /* @__PURE__ */ import_react47.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 8
    }, /* @__PURE__ */ import_react47.default.createElement("h4", null, "Ratio Chronos/Hyper/Challenge")), /* @__PURE__ */ import_react47.default.createElement(Grid_default.Column, {
      textAlign: "center",
      width: 8
    }, /* @__PURE__ */ import_react47.default.createElement("h4", null, "Ratio Accel/A. Boost/Multi"))));
  };
  var Tiers_default = Tiers;

  // src/components/Menu/index.tsx
  var import_react48 = __toESM(require_react(), 1);
  var MenuItem = ({ label, onChange, currentScreen, value, color }) => {
    return /* @__PURE__ */ import_react48.default.createElement(Button_default, {
      inverted: true,
      color,
      fluid: true,
      onClick: () => onChange(value),
      active: currentScreen === value
    }, label);
  };
  var menuItems = [
    {
      label: "Overview",
      value: "overview",
      color: "yellow"
    },
    {
      label: "Tiers",
      value: "tiers",
      color: "red"
    },
    {
      label: "Hept List",
      value: "hept-list",
      color: "green"
    },
    {
      label: "Shop Optimization",
      value: "shop-opti",
      color: "blue"
    },
    {
      label: "Nerd Stats",
      value: "nerd-stats",
      color: "orange"
    }
  ];
  var Menu = ({ currentScreen, onChange }) => {
    return /* @__PURE__ */ import_react48.default.createElement(Grid_default, {
      columns: "equal"
    }, /* @__PURE__ */ import_react48.default.createElement(Grid_default.Row, {
      centered: true
    }, menuItems.map((menuItem) => /* @__PURE__ */ import_react48.default.createElement(Grid_default.Column, null, /* @__PURE__ */ import_react48.default.createElement(MenuItem, __spreadProps(__spreadValues({}, menuItem), {
      onChange,
      currentScreen
    }))))));
  };
  var Menu_default = Menu;

  // src/components/NerdStats/index.tsx
  var import_react49 = __toESM(require_react(), 1);
  var NerdStats = () => {
    return /* @__PURE__ */ import_react49.default.createElement("div", null, "Nerd stats");
  };
  var NerdStats_default = NerdStats;

  // src/components/Explanation/index.tsx
  var import_react50 = __toESM(require_react(), 1);
  var Explanation = () => {
    return /* @__PURE__ */ import_react50.default.createElement("footer", null, /* @__PURE__ */ import_react50.default.createElement("h3", null, "ESTIMATED CALCULATIONS DO NOT INCLUDE EVENT BONUSES"), /* @__PURE__ */ import_react50.default.createElement("h4", null, "Credits to : Lacklub, KittensGiveMorboGas, Eric, Workmad3, Actuallyasriel and Mikkyne"));
  };
  var Explanation_default = Explanation;

  // src/components/Overview/index.tsx
  var import_react51 = __toESM(require_react(), 1);
  var Overview = () => {
    return /* @__PURE__ */ import_react51.default.createElement("div", null, "Overview coming soon");
  };
  var Overview_default = Overview;

  // src/components/App/index.tsx
  var CurrentScreen = ({ screen }) => {
    const { save } = useSave();
    if (save === "") {
      return /* @__PURE__ */ import_react52.default.createElement("div", null, "Please enter a save file");
    }
    switch (screen) {
      case "hept-list":
        return /* @__PURE__ */ import_react52.default.createElement(HeptList_default, null);
      case "nerd-stats":
        return /* @__PURE__ */ import_react52.default.createElement(NerdStats_default, null);
      case "shop-opti":
        return /* @__PURE__ */ import_react52.default.createElement(ShopOpti_default, null);
      case "tiers":
        return /* @__PURE__ */ import_react52.default.createElement(Tiers_default, null);
      case "overview":
        return /* @__PURE__ */ import_react52.default.createElement(Overview_default, null);
      default:
        return /* @__PURE__ */ import_react52.default.createElement(Overview_default, null);
    }
  };
  var App = () => {
    const [save, setSave] = (0, import_react52.useState)(__spreadProps(__spreadValues({}, defaultSave), {
      setSave: (newSave) => setSave((save2) => __spreadProps(__spreadValues({}, save2), { save: newSave })),
      setDecodedSave: (newDecodedSave) => setSave((save2) => __spreadProps(__spreadValues({}, save2), { decodedSave: newDecodedSave })),
      setQuarkGain: (newQuarkGain) => setSave((save2) => __spreadProps(__spreadValues({}, save2), { quarkGain: newQuarkGain })),
      setPowderRatio: (newPowderRatio) => setSave((save2) => __spreadProps(__spreadValues({}, save2), { powderRatio: newPowderRatio })),
      setAddUses: (newAddUses) => setSave((save2) => __spreadProps(__spreadValues({}, save2), { addUses: newAddUses })),
      setHeptsPerSecond: (newHeptsPerSecond) => setSave((save2) => __spreadProps(__spreadValues({}, save2), { heptsPerSecond: newHeptsPerSecond }))
    }));
    const [timer, setTimer] = (0, import_react52.useState)(new Date());
    const [currentScreen, setCurrentScreen] = (0, import_react52.useState)("parameters");
    return /* @__PURE__ */ import_react52.default.createElement(saveContext_default.Provider, {
      value: save
    }, /* @__PURE__ */ import_react52.default.createElement(timerContext_default.Provider, {
      value: timer
    }, /* @__PURE__ */ import_react52.default.createElement(Grid_default, {
      stretched: true
    }, /* @__PURE__ */ import_react52.default.createElement(Grid_default.Row, null, /* @__PURE__ */ import_react52.default.createElement(Grid_default.Column, {
      width: 16,
      textAlign: "center",
      color: "black"
    }, /* @__PURE__ */ import_react52.default.createElement("h1", null, "Omega Calc"))), /* @__PURE__ */ import_react52.default.createElement(Grid_default.Row, null, /* @__PURE__ */ import_react52.default.createElement(Grid_default.Column, {
      width: 16,
      color: "black"
    }, /* @__PURE__ */ import_react52.default.createElement(Timer_default, {
      interval: 500,
      setTimer,
      currentTimer: timer
    }), /* @__PURE__ */ import_react52.default.createElement(Parameters_default, null))), /* @__PURE__ */ import_react52.default.createElement(Grid_default.Row, null, /* @__PURE__ */ import_react52.default.createElement(Grid_default.Column, {
      width: 16,
      textAlign: "center",
      color: "black"
    }, /* @__PURE__ */ import_react52.default.createElement(Menu_default, {
      currentScreen,
      onChange: (newScreen) => setCurrentScreen(newScreen)
    }))), /* @__PURE__ */ import_react52.default.createElement(Grid_default.Row, null, /* @__PURE__ */ import_react52.default.createElement(Grid_default.Column, {
      width: 16,
      textAlign: "center",
      color: "black"
    }, /* @__PURE__ */ import_react52.default.createElement(CurrentScreen, {
      screen: currentScreen
    }))), /* @__PURE__ */ import_react52.default.createElement(Grid_default.Row, null, /* @__PURE__ */ import_react52.default.createElement(Grid_default.Column, {
      width: 16,
      textAlign: "center",
      color: "black"
    }, /* @__PURE__ */ import_react52.default.createElement(Explanation_default, null))))));
  };
  var App_default = App;

  // src/index.tsx
  var import_react53 = __toESM(require_react(), 1);
  var import_react_dom2 = __toESM(require_react_dom(), 1);
  import_react_dom2.default.render(/* @__PURE__ */ import_react53.default.createElement(import_react53.default.StrictMode, null, /* @__PURE__ */ import_react53.default.createElement(App_default, null)), document.getElementById("app"));
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
