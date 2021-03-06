function detectBrowser() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        browserName = "firefox";
        var t = new Number(RegExp.$1);
        browserVersion = Math.floor(t)
    }
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        browserName = "internet explorer";
        var e = new Number(RegExp.$1);
        browserVersion = Math.floor(e)
    }
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        browserName = "opera";
        var i = new Number(RegExp.$1);
        browserVersion = Math.floor(i)
    }
    navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && -1 != navigator.userAgent.toLowerCase().indexOf("safari") && (browserName = "chrome", browserVersion = ""), -1 == navigator.userAgent.toLowerCase().indexOf("chrome") && -1 != navigator.userAgent.toLowerCase().indexOf("safari") && (browserName = "safari", browserVersion = "")
}

function detectDevice() {
    deviceName = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? "iosdevice" : navigator.userAgent.match(/Android/i) ? "android" : navigator.userAgent.match(/BlackBerry/i) ? "blackberry" : navigator.userAgent.match(/IEMobile/i) ? "iemobile" : navigator.userAgent.match(/Silk/i) ? "kindle" : "computer"
}

function showPreloadDIVorIfitisIEjustdontletRun() {
    "internet explorer" == browserName ? $(preloaderDiv).addClass("IEFUCKER") : $(preloaderDiv).addClass("displayshow")
}

function hidePreloader() {
    preloaderDiv.setAttribute("class", "displaynone")
}

function hidefallAnimation() {
    fallAnimation.setAttribute("class", "displaynone")
}

function hideKeynotice() {
    Keynotice.setAttribute("class", "displaynone")
}

function showKeynotice() {
    Keynotice.setAttribute("class", "ALLdisplayshow")
}

function FallAnimation() {
    var t = 0,
        e = 0,
        i = setInterval(function() {
            t++, fallAnimationIMG.className = "fall_" + t + " fallAnimationIMG"
        }, 30);
    timer2 = setInterval(function() {
        ++e % 2 ? showKeynotice() : hideKeynotice()
    }, 400), $(fallAnimation).animate({
        bottom: "20%"
    }, 2e3, "linear", function() {
        clearInterval(i), hidePreloader(), hidefallAnimation(), OKarl2.style.display = "block", Walking(function() {})
    })
}

function UPpreloaderDiv() {
    "displaynone displayshow" == preloaderDiv.className && $("#preloader").animate({
        bottom: "100%"
    }, 1e3, "easeInOutQuart", function() {
        FallAnimation()
    })
}

function F_forstopWalking() {
    Walking(function() {
        clearInterval(timer2), hideKeynotice()
    })
}

function preloadimages(t) {
        for (var e = 0, i = (t = "object" != typeof t ? [t] : t, 0); i < t.length; i++) newimages[i] = new Image, newimages[i].index = i, newimages[i].src = t[i], newimages[i].onload = function() {
            e++, console.log(e), progressIb.style.width = e * (500 / t.length) + "px", O_Laocar.style.right = 500 - e * (500 / t.length) + "px", O_Laotext.innerHTML = "老司机已经加载了" + Math.floor(100 * e / t.length) + "%", e >= t.length && UPpreloaderDiv()
        }
    }! function(t, e) {
        function i(t) {
            var e = t.length,
                i = Z.type(t);
            return !Z.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
        }

        function s(t, i, s, n) {
            if (Z.acceptData(t)) {
                var o, a, r = Z.expando,
                    l = "string" == typeof i,
                    h = t.nodeType,
                    c = h ? Z.cache : t,
                    u = h ? t[r] : t[r] && r;
                if (u && c[u] && (n || c[u].data) || !l || s !== e) return u || (h ? t[r] = u = $.pop() || Z.guid++ : u = r), c[u] || (c[u] = {}, h || (c[u].toJSON = Z.noop)), ("object" == typeof i || "function" == typeof i) && (n ? c[u] = Z.extend(c[u], i) : c[u].data = Z.extend(c[u].data, i)), o = c[u], n || (o.data || (o.data = {}), o = o.data), s !== e && (o[Z.camelCase(i)] = s), l ? null == (a = o[i]) && (a = o[Z.camelCase(i)]) : a = o, a
            }
        }

        function n(t, e, i) {
            if (Z.acceptData(t)) {
                var s, n, o, r = t.nodeType,
                    l = r ? Z.cache : t,
                    h = r ? t[Z.expando] : Z.expando;
                if (l[h]) {
                    if (e && (o = i ? l[h] : l[h].data)) {
                        Z.isArray(e) ? e = e.concat(Z.map(e, Z.camelCase)) : e in o ? e = [e] : (e = Z.camelCase(e), e = e in o ? [e] : e.split(" "));
                        for (s = 0, n = e.length; n > s; s++) delete o[e[s]];
                        if (!(i ? a : Z.isEmptyObject)(o)) return
                    }(i || (delete l[h].data, a(l[h]))) && (r ? Z.cleanData([t], !0) : Z.support.deleteExpando || l != l.window ? delete l[h] : l[h] = null)
                }
            }
        }

        function o(t, i, s) {
            if (s === e && 1 === t.nodeType) {
                var n = "data-" + i.replace(mt, "-$1").toLowerCase();
                if ("string" == typeof(s = t.getAttribute(n))) {
                    try {
                        s = "true" === s || "false" !== s && ("null" === s ? null : +s + "" === s ? +s : gt.test(s) ? Z.parseJSON(s) : s)
                    } catch (t) {}
                    Z.data(t, i, s)
                } else s = e
            }
            return s
        }

        function a(t) {
            var e;
            for (e in t)
                if (("data" !== e || !Z.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function r() {
            return !0
        }

        function l() {
            return !1
        }

        function h(t, e) {
            do {
                t = t[e]
            } while (t && 1 !== t.nodeType);
            return t
        }

        function c(t, e, i) {
            if (e = e || 0, Z.isFunction(e)) return Z.grep(t, function(t, s) {
                return !!e.call(t, s, t) === i
            });
            if (e.nodeType) return Z.grep(t, function(t) {
                return t === e === i
            });
            if ("string" == typeof e) {
                var s = Z.grep(t, function(t) {
                    return 1 === t.nodeType
                });
                if (Ht.test(e)) return Z.filter(e, s, !i);
                e = Z.filter(e, s)
            }
            return Z.grep(t, function(t) {
                return Z.inArray(t, e) >= 0 === i
            })
        }

        function u(t) {
            var e = Wt.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function d(t) {
            var e = t.getAttributeNode("type");
            return t.type = (e && e.specified) + "/" + t.type, t
        }

        function p(t) {
            var e = Xt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function f(t, e) {
            for (var i, s = 0; null != (i = t[s]); s++) Z._data(i, "globalEval", !e || Z._data(e[s], "globalEval"))
        }

        function g(t, e) {
            if (1 === e.nodeType && Z.hasData(t)) {
                var i, s, n, o = Z._data(t),
                    a = Z._data(e, o),
                    r = o.events;
                if (r) {
                    delete a.handle, a.events = {};
                    for (i in r)
                        for (s = 0, n = r[i].length; n > s; s++) Z.event.add(e, i, r[i][s])
                }
                a.data && (a.data = Z.extend({}, a.data))
            }
        }

        function m(t, e) {
            var i, s, n;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !Z.support.noCloneEvent && e[Z.expando]) {
                    n = Z._data(e);
                    for (s in n.events) Z.removeEvent(e, s, n.handle);
                    e.removeAttribute(Z.expando)
                }
                "script" === i && e.text !== t.text ? (d(e).text = t.text, p(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), Z.support.html5Clone && t.innerHTML && !Z.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Kt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function v(t, i) {
            var s, n, o = 0,
                a = typeof t.getElementsByTagName !== F ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== F ? t.querySelectorAll(i || "*") : e;
            if (!a)
                for (a = [], s = t.childNodes || t; null != (n = s[o]); o++)!i || Z.nodeName(n, i) ? a.push(n) : Z.merge(a, v(n, i));
            return i === e || i && Z.nodeName(t, i) ? Z.merge([t], a) : a
        }

        function _(t) {
            Kt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function b(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), s = e, n = fe.length; n--;)
                if ((e = fe[n] + i) in t) return e;
            return s
        }

        function y(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        }

        function x(t, e) {
            for (var i, s, n, o = [], a = 0, r = t.length; r > a; a++)(s = t[a]).style && (o[a] = Z._data(s, "olddisplay"), i = s.style.display, e ? (o[a] || "none" !== i || (s.style.display = ""), "" === s.style.display && y(s) && (o[a] = Z._data(s, "olddisplay", D(s.nodeName)))) : o[a] || (n = y(s), (i && "none" !== i || !n) && Z._data(s, "olddisplay", n ? i : Z.css(s, "display"))));
            for (a = 0; r > a; a++)(s = t[a]).style && (e && "none" !== s.style.display && "" !== s.style.display || (s.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function w(t, e, i) {
            var s = re.exec(e);
            return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : e
        }

        function k(t, e, i, s, n) {
            for (var o = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += Z.css(t, i + pe[o], !0, n)), s ? ("content" === i && (a -= Z.css(t, "padding" + pe[o], !0, n)), "margin" !== i && (a -= Z.css(t, "border" + pe[o] + "Width", !0, n))) : (a += Z.css(t, "padding" + pe[o], !0, n), "padding" !== i && (a += Z.css(t, "border" + pe[o] + "Width", !0, n)));
            return a
        }

        function C(t, e, i) {
            var s = !0,
                n = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = te(t),
                a = Z.support.boxSizing && "border-box" === Z.css(t, "boxSizing", !1, o);
            if (0 >= n || null == n) {
                if ((0 > (n = ee(t, e, o)) || null == n) && (n = t.style[e]), le.test(n)) return n;
                s = a && (Z.support.boxSizingReliable || n === t.style[e]), n = parseFloat(n) || 0
            }
            return n + k(t, e, i || (a ? "border" : "content"), s, o) + "px"
        }

        function D(t) {
            var e = R,
                i = ce[t];
            return i || ("none" !== (i = T(t, e)) && i || (Zt = (Zt || Z("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), (e = (Zt[0].contentWindow || Zt[0].contentDocument).document).write("<!doctype html><html><body>"), e.close(), i = T(t, e), Zt.detach()), ce[t] = i), i
        }

        function T(t, e) {
            var i = Z(e.createElement(t)).appendTo(e.body),
                s = Z.css(i[0], "display");
            return i.remove(), s
        }

        function I(t, e, i, s) {
            var n;
            if (Z.isArray(e)) Z.each(e, function(e, n) {
                i || me.test(t) ? s(t, n) : I(t + "[" + ("object" == typeof n ? e : "") + "]", n, i, s)
            });
            else if (i || "object" !== Z.type(e)) s(t, e);
            else
                for (n in e) I(t + "[" + n + "]", e[n], i, s)
        }

        function S(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var s, n = 0,
                    o = e.toLowerCase().match(et) || [];
                if (Z.isFunction(i))
                    for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
            }
        }

        function P(t, i, s, n) {
            function o(l) {
                var h;
                return a[l] = !0, Z.each(t[l] || [], function(t, l) {
                    var c = l(i, s, n);
                    return "string" != typeof c || r || a[c] ? r ? !(h = c) : e : (i.dataTypes.unshift(c), o(c), !1)
                }), h
            }
            var a = {},
                r = t === Ae;
            return o(i.dataTypes[0]) || !a["*"] && o("*")
        }

        function M(t, i) {
            var s, n, o = Z.ajaxSettings.flatOptions || {};
            for (n in i) i[n] !== e && ((o[n] ? t : s || (s = {}))[n] = i[n]);
            return s && Z.extend(!0, t, s), t
        }

        function N() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }

        function A() {
            return setTimeout(function() {
                Re = e
            }), Re = Z.now()
        }

        function E(t, e, i) {
            var s, n, o = 0,
                a = $e.length,
                r = Z.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (n) return !1;
                    for (var e = Re || A(), i = Math.max(0, h.startTime + h.duration - e), s = 1 - (i / h.duration || 0), o = 0, a = h.tweens.length; a > o; o++) h.tweens[o].run(s);
                    return r.notifyWith(t, [h, s, i]), 1 > s && a ? i : (r.resolveWith(t, [h]), !1)
                },
                h = r.promise({
                    elem: t,
                    props: Z.extend({}, e),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Re || A(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var s = Z.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(s), s
                    },
                    stop: function(e) {
                        var i = 0,
                            s = e ? h.tweens.length : 0;
                        if (n) return this;
                        for (n = !0; s > i; i++) h.tweens[i].run(1);
                        return e ? r.resolveWith(t, [h, e]) : r.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (function(t, e) {
                var i, s, n, o, a;
                for (n in t)
                    if (s = Z.camelCase(n), o = e[s], i = t[n], Z.isArray(i) && (o = i[1], i = t[n] = i[0]), n !== s && (t[s] = i, delete t[n]), (a = Z.cssHooks[s]) && "expand" in a) {
                        i = a.expand(i), delete t[s];
                        for (n in i) n in t || (t[n] = i[n], e[n] = o)
                    } else e[s] = o
            }(c, h.opts.specialEasing); a > o; o++)
                if (s = $e[o].call(h, t, c, h.opts)) return s;
            return function(t, e) {
                Z.each(e, function(e, i) {
                    for (var s = (Ke[e] || []).concat(Ke["*"]), n = 0, o = s.length; o > n; n++)
                        if (s[n].call(t, e, i)) return
                })
            }(h, c), Z.isFunction(h.opts.start) && h.opts.start.call(t, h), Z.fx.timer(Z.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function H(t, e, i, s, n) {
            return new H.prototype.init(t, e, i, s, n)
        }

        function O(t, e) {
            var i, s = {
                    height: t
                },
                n = 0;
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = pe[n], s["margin" + i] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function z(t) {
            return Z.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var W, L, F = typeof e,
            R = t.document,
            j = t.location,
            B = t.jQuery,
            q = t.$,
            Y = {},
            $ = [],
            K = $.concat,
            U = $.push,
            V = $.slice,
            X = $.indexOf,
            G = Y.toString,
            Q = Y.hasOwnProperty,
            J = "1.9.1".trim,
            Z = function(t, e) {
                return new Z.fn.init(t, e, L)
            },
            tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            et = /\S+/g,
            it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            nt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ot = /^[\],:{}\s]*$/,
            at = /(?:^|:|,)(?:\s*\[)+/g,
            rt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            ht = /^-ms-/,
            ct = /-([\da-z])/gi,
            ut = function(t, e) {
                return e.toUpperCase()
            },
            dt = function(t) {
                (R.addEventListener || "load" === t.type || "complete" === R.readyState) && (pt(), Z.ready())
            },
            pt = function() {
                R.addEventListener ? (R.removeEventListener("DOMContentLoaded", dt, !1), t.removeEventListener("load", dt, !1)) : (R.detachEvent("onreadystatechange", dt), t.detachEvent("onload", dt))
            };
        Z.fn = Z.prototype = {
            jquery: "1.9.1",
            constructor: Z,
            init: function(t, i, s) {
                var n, o;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : st.exec(t)) || !n[1] && i) return !i || i.jquery ? (i || s).find(t) : this.constructor(i).find(t);
                    if (n[1]) {
                        if (i = i instanceof Z ? i[0] : i, Z.merge(this, Z.parseHTML(n[1], i && i.nodeType ? i.ownerDocument || i : R, !0)), nt.test(n[1]) && Z.isPlainObject(i))
                            for (n in i) Z.isFunction(this[n]) ? this[n](i[n]) : this.attr(n, i[n]);
                        return this
                    }
                    if ((o = R.getElementById(n[2])) && o.parentNode) {
                        if (o.id !== n[2]) return s.find(t);
                        this.length = 1, this[0] = o
                    }
                    return this.context = R, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? s.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return V.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = Z.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return Z.each(this, t, e)
            },
            ready: function(t) {
                return Z.ready.promise().done(t), this
            },
            slice: function() {
                return this.pushStack(V.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            map: function(t) {
                return this.pushStack(Z.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: [].sort,
            splice: [].splice
        }, Z.fn.init.prototype = Z.fn, Z.extend = Z.fn.extend = function() {
            var t, i, s, n, o, a, r = arguments[0] || {},
                l = 1,
                h = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[1] || {}, l = 2), "object" == typeof r || Z.isFunction(r) || (r = {}), h === l && (r = this, --l); h > l; l++)
                if (null != (o = arguments[l]))
                    for (n in o) t = r[n], s = o[n], r !== s && (c && s && (Z.isPlainObject(s) || (i = Z.isArray(s))) ? (i ? (i = !1, a = t && Z.isArray(t) ? t : []) : a = t && Z.isPlainObject(t) ? t : {}, r[n] = Z.extend(c, a, s)) : s !== e && (r[n] = s));
            return r
        }, Z.extend({
            noConflict: function(e) {
                return t.$ === Z && (t.$ = q), e && t.jQuery === Z && (t.jQuery = B), Z
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(t) {
                if (!0 === t ? !--Z.readyWait : !Z.isReady) {
                    if (!R.body) return setTimeout(Z.ready);
                    Z.isReady = !0, !0 !== t && --Z.readyWait > 0 || (W.resolveWith(R, [Z]), Z.fn.trigger && Z(R).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === Z.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === Z.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[G.call(t)] || "object" : typeof t
            },
            isPlainObject: function(t) {
                if (!t || "object" !== Z.type(t) || t.nodeType || Z.isWindow(t)) return !1;
                try {
                    if (t.constructor && !Q.call(t, "constructor") && !Q.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                var i;
                for (i in t);
                return i === e || Q.call(t, i)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function(t) {
                throw Error(t)
            },
            parseHTML: function(t, e, i) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (i = e, e = !1), e = e || R;
                var s = nt.exec(t),
                    n = !i && [];
                return s ? [e.createElement(s[1])] : (s = Z.buildFragment([t], e, n), n && Z(n).remove(), Z.merge([], s.childNodes))
            },
            parseJSON: function(i) {
                return t.JSON && t.JSON.parse ? t.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = Z.trim(i)) && ot.test(i.replace(rt, "@").replace(lt, "]").replace(at, "")) ? Function("return " + i)() : (Z.error("Invalid JSON: " + i), e)
            },
            parseXML: function(i) {
                var s, n;
                if (!i || "string" != typeof i) return null;
                try {
                    t.DOMParser ? (n = new DOMParser, s = n.parseFromString(i, "text/xml")) : (s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(i))
                } catch (t) {
                    s = e
                }
                return s && s.documentElement && !s.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + i), s
            },
            noop: function() {},
            globalEval: function(e) {
                e && Z.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ht, "ms-").replace(ct, ut)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, s) {
                var n = 0,
                    o = t.length,
                    a = i(t);
                if (s) {
                    if (a)
                        for (; o > n && !1 !== e.apply(t[n], s); n++);
                    else
                        for (n in t)
                            if (!1 === e.apply(t[n], s)) break
                } else if (a)
                    for (; o > n && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break; return t
            },
            trim: J && !J.call("\ufeff ") ? function(t) {
                return null == t ? "" : J.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(it, "")
            },
            makeArray: function(t, e) {
                var s = e || [];
                return null != t && (i(Object(t)) ? Z.merge(s, "string" == typeof t ? [t] : t) : U.call(s, t)), s
            },
            inArray: function(t, e, i) {
                var s;
                if (e) {
                    if (X) return X.call(e, t, i);
                    for (s = e.length, i = i ? 0 > i ? Math.max(0, s + i) : i : 0; s > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, i) {
                var s = i.length,
                    n = t.length,
                    o = 0;
                if ("number" == typeof s)
                    for (; s > o; o++) t[n++] = i[o];
                else
                    for (; i[o] !== e;) t[n++] = i[o++];
                return t.length = n, t
            },
            grep: function(t, e, i) {
                var s, n = [],
                    o = 0,
                    a = t.length;
                for (i = !!i; a > o; o++) s = !!e(t[o], o), i !== s && n.push(t[o]);
                return n
            },
            map: function(t, e, s) {
                var n, o = 0,
                    a = t.length,
                    r = [];
                if (i(t))
                    for (; a > o; o++) null != (n = e(t[o], o, s)) && (r[r.length] = n);
                else
                    for (o in t) null != (n = e(t[o], o, s)) && (r[r.length] = n);
                return K.apply([], r)
            },
            guid: 1,
            proxy: function(t, i) {
                var s, n, o;
                return "string" == typeof i && (o = t[i], i = t, t = o), Z.isFunction(t) ? (s = V.call(arguments, 2), n = function() {
                    return t.apply(i || this, s.concat(V.call(arguments)))
                }, n.guid = t.guid = t.guid || Z.guid++, n) : e
            },
            access: function(t, i, s, n, o, a, r) {
                var l = 0,
                    h = t.length,
                    c = null == s;
                if ("object" === Z.type(s)) {
                    o = !0;
                    for (l in s) Z.access(t, i, l, s[l], !0, a, r)
                } else if (n !== e && (o = !0, Z.isFunction(n) || (r = !0), c && (r ? (i.call(t, n), i = null) : (c = i, i = function(t, e, i) {
                    return c.call(Z(t), i)
                })), i))
                    for (; h > l; l++) i(t[l], s, r ? n : n.call(t[l], l, i(t[l], s)));
                return o ? t : c ? i.call(t) : h ? i(t[0], s) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }), Z.ready.promise = function(e) {
            if (!W)
                if (W = Z.Deferred(), "complete" === R.readyState) setTimeout(Z.ready);
                else if (R.addEventListener) R.addEventListener("DOMContentLoaded", dt, !1), t.addEventListener("load", dt, !1);
            else {
                R.attachEvent("onreadystatechange", dt), t.attachEvent("onload", dt);
                var i = !1;
                try {
                    i = null == t.frameElement && R.documentElement
                } catch (t) {}
                i && i.doScroll && function t() {
                    if (!Z.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        pt(), Z.ready()
                    }
                }()
            }
            return W.promise(e)
        }, Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        }), L = Z(R);
        var ft = {};
        Z.Callbacks = function(t) {
            var i, s, n, o, a, r, l = [],
                h = !(t = "string" == typeof t ? ft[t] || function(t) {
                    var e = ft[t] = {};
                    return Z.each(t.match(et) || [], function(t, i) {
                        e[i] = !0
                    }), e
                }(t) : Z.extend({}, t)).once && [],
                c = function(e) {
                    for (s = t.memory && e, n = !0, a = r || 0, r = 0, o = l.length, i = !0; l && o > a; a++)
                        if (!1 === l[a].apply(e[0], e[1]) && t.stopOnFalse) {
                            s = !1;
                            break
                        }
                    i = !1, l && (h ? h.length && c(h.shift()) : s ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var e = l.length;
                            (function e(i) {
                                Z.each(i, function(i, s) {
                                    var n = Z.type(s);
                                    "function" === n ? t.unique && u.has(s) || l.push(s) : s && s.length && "string" !== n && e(s)
                                })
                            })(arguments), i ? o = l.length : s && (r = e, c(s))
                        }
                        return this
                    },
                    remove: function() {
                        return l && Z.each(arguments, function(t, e) {
                            for (var s;
                                (s = Z.inArray(e, l, s)) > -1;) l.splice(s, 1), i && (o >= s && o--, a >= s && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], this
                    },
                    disable: function() {
                        return l = h = s = e, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return h = e, s || u.disable(), this
                    },
                    locked: function() {
                        return !h
                    },
                    fireWith: function(t, e) {
                        return e = e || [], e = [t, e.slice ? e.slice() : e], !l || n && !h || (i ? h.push(e) : c(e)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, Z.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    i = "pending",
                    s = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return n.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return Z.Deferred(function(i) {
                                Z.each(e, function(e, o) {
                                    var a = o[0],
                                        r = Z.isFunction(t[e]) && t[e];
                                    n[o[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && Z.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a + "With"](this === s ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? Z.extend(t, s) : s
                        }
                    },
                    n = {};
                return s.pipe = s.then, Z.each(e, function(t, o) {
                    var a = o[2],
                        r = o[3];
                    s[o[1]] = a.add, r && a.add(function() {
                        i = r
                    }, e[1 ^ t][2].disable, e[2][2].lock), n[o[0]] = function() {
                        return n[o[0] + "With"](this === n ? s : this, arguments), this
                    }, n[o[0] + "With"] = a.fireWith
                }), s.promise(n), t && t.call(n, n), n
            },
            when: function(t) {
                var e, i, s, n = 0,
                    o = V.call(arguments),
                    a = o.length,
                    r = 1 !== a || t && Z.isFunction(t.promise) ? a : 0,
                    l = 1 === r ? t : Z.Deferred(),
                    h = function(t, i, s) {
                        return function(n) {
                            i[t] = this, s[t] = arguments.length > 1 ? V.call(arguments) : n, s === e ? l.notifyWith(i, s) : --r || l.resolveWith(i, s)
                        }
                    };
                if (a > 1)
                    for (e = Array(a), i = Array(a), s = Array(a); a > n; n++) o[n] && Z.isFunction(o[n].promise) ? o[n].promise().done(h(n, s, o)).fail(l.reject).progress(h(n, i, e)) : --r;
                return r || l.resolveWith(s, o), l.promise()
            }
        }), Z.support = function() {
            var e, i, s, n, o, a, r, l, h, c, u = R.createElement("div");
            if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.getElementsByTagName("*"), s = u.getElementsByTagName("a")[0], !i || !s || !i.length) return {};
            r = (o = R.createElement("select")).appendChild(R.createElement("option")), n = u.getElementsByTagName("input")[0], s.style.cssText = "top:1px;float:left;opacity:.5", e = {
                getSetAttribute: "t" !== u.className,
                leadingWhitespace: 3 === u.firstChild.nodeType,
                tbody: !u.getElementsByTagName("tbody").length,
                htmlSerialize: !!u.getElementsByTagName("link").length,
                style: /top/.test(s.getAttribute("style")),
                hrefNormalized: "/a" === s.getAttribute("href"),
                opacity: /^0.5/.test(s.style.opacity),
                cssFloat: !!s.style.cssFloat,
                checkOn: !!n.value,
                optSelected: r.selected,
                enctype: !!R.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== R.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === R.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, n.checked = !0, e.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !r.disabled;
            try {
                delete u.test
            } catch (t) {
                e.deleteExpando = !1
            }(n = R.createElement("input")).setAttribute("value", ""), e.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), e.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), (a = R.createDocumentFragment()).appendChild(n), e.appendChecked = n.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function() {
                e.noCloneEvent = !1
            }), u.cloneNode(!0).click());
            for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) u.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || !1 === u.attributes[l].expando;
            return u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === u.style.backgroundClip, Z(function() {
                var i, s, n, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = R.getElementsByTagName("body")[0];
                a && (i = R.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(i).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = u.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", e.reliableHiddenOffsets = h && 0 === n[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === u.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(u, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(u, null) || {
                    width: "4px"
                }).width, s = u.appendChild(R.createElement("div")), s.style.cssText = u.style.cssText = o, s.style.marginRight = s.style.width = "0", u.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), typeof u.style.zoom !== F && (u.innerHTML = "", u.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== u.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(i), i = u = n = s = null)
            }), i = o = a = r = s = n = null, e
        }();
        var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            mt = /([A-Z])/g;
        Z.extend({
            cache: {},
            expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(t) {
                return !!(t = t.nodeType ? Z.cache[t[Z.expando]] : t[Z.expando]) && !a(t)
            },
            data: function(t, e, i) {
                return s(t, e, i)
            },
            removeData: function(t, e) {
                return n(t, e)
            },
            _data: function(t, e, i) {
                return s(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return n(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && Z.noData[t.nodeName.toLowerCase()];
                return !e || !0 !== e && t.getAttribute("classid") === e
            }
        }), Z.fn.extend({
            data: function(t, i) {
                var s, n, a = this[0],
                    r = 0,
                    l = null;
                if (t === e) {
                    if (this.length && (l = Z.data(a), 1 === a.nodeType && !Z._data(a, "parsedAttrs"))) {
                        for (s = a.attributes; s.length > r; r++)(n = s[r].name).indexOf("data-") || (n = Z.camelCase(n.slice(5)), o(a, n, l[n]));
                        Z._data(a, "parsedAttrs", !0)
                    }
                    return l
                }
                return "object" == typeof t ? this.each(function() {
                    Z.data(this, t)
                }) : Z.access(this, function(i) {
                    return i === e ? a ? o(a, t, Z.data(a, t)) : null : (this.each(function() {
                        Z.data(this, t, i)
                    }), e)
                }, null, i, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Z.removeData(this, t)
                })
            }
        }), Z.extend({
            queue: function(t, i, s) {
                var n;
                return t ? (i = (i || "fx") + "queue", n = Z._data(t, i), s && (!n || Z.isArray(s) ? n = Z._data(t, i, Z.makeArray(s)) : n.push(s)), n || []) : e
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = Z.queue(t, e),
                    s = i.length,
                    n = i.shift(),
                    o = Z._queueHooks(t, e);
                "inprogress" === n && (n = i.shift(), s--), o.cur = n, n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, function() {
                    Z.dequeue(t, e)
                }, o)), !s && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return Z._data(t, i) || Z._data(t, i, {
                    empty: Z.Callbacks("once memory").add(function() {
                        Z._removeData(t, e + "queue"), Z._removeData(t, i)
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(t, i) {
                var s = 2;
                return "string" != typeof t && (i = t, t = "fx", s--), s > arguments.length ? Z.queue(this[0], t) : i === e ? this : this.each(function() {
                    var e = Z.queue(this, t, i);
                    Z._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && Z.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    Z.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var s = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(s)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, i) {
                var s, n = 1,
                    o = Z.Deferred(),
                    a = this,
                    r = this.length,
                    l = function() {
                        --n || o.resolveWith(a, [a])
                    };
                for ("string" != typeof t && (i = t, t = e), t = t || "fx"; r--;)(s = Z._data(a[r], t + "queueHooks")) && s.empty && (n++, s.empty.add(l));
                return l(), o.promise(i)
            }
        });
        var vt, _t, bt = /[\t\r\n]/g,
            yt = /\r/g,
            xt = /^(?:input|select|textarea|button|object)$/i,
            wt = /^(?:a|area)$/i,
            kt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Ct = /^(?:checked|selected)$/i,
            Dt = Z.support.getSetAttribute,
            Tt = Z.support.input;
        Z.fn.extend({
            attr: function(t, e) {
                return Z.access(this, Z.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    Z.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return Z.access(this, Z.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = Z.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = e, delete this[t]
                    } catch (t) {}
                })
            },
            addClass: function(t) {
                var e, i, s, n, o, a = 0,
                    r = this.length,
                    l = "string" == typeof t && t;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(et) || []; r > a; a++)
                        if (i = this[a], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(bt, " ") : " ")) {
                            for (o = 0; n = e[o++];) 0 > s.indexOf(" " + n + " ") && (s += n + " ");
                            i.className = Z.trim(s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, s, n, o, a = 0,
                    r = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(et) || []; r > a; a++)
                        if (i = this[a], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(bt, " ") : "")) {
                            for (o = 0; n = e[o++];)
                                for (; s.indexOf(" " + n + " ") >= 0;) s = s.replace(" " + n + " ", " ");
                            i.className = t ? Z.trim(s) : ""
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t,
                    s = "boolean" == typeof e;
                return Z.isFunction(t) ? this.each(function(i) {
                    Z(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === i)
                        for (var n, o = 0, a = Z(this), r = e, l = t.match(et) || []; n = l[o++];) r = s ? r : !a.hasClass(n), a[r ? "addClass" : "removeClass"](n);
                    else(i === F || "boolean" === i) && (this.className && Z._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : Z._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, s = this.length; s > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(bt, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function(t) {
                var i, s, n, o = this[0];
                return arguments.length ? (n = Z.isFunction(t), this.each(function(i) {
                    var o, a = Z(this);
                    1 === this.nodeType && (null == (o = n ? t.call(this, i, a.val()) : t) ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (s = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in s && s.set(this, o, "value") !== e || (this.value = o))
                })) : o ? (s = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()]) && "get" in s && (i = s.get(o, "value")) !== e ? i : "string" == typeof(i = o.value) ? i.replace(yt, "") : null == i ? "" : i : void 0
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = t.attributes.value;
                        return !e || e.specified ? t.value : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, s = t.options, n = t.selectedIndex, o = "select-one" === t.type || 0 > n, a = o ? null : [], r = o ? n + 1 : s.length, l = 0 > n ? r : o ? n : 0; r > l; l++)
                            if (!(!(i = s[l]).selected && l !== n || (Z.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Z.nodeName(i.parentNode, "optgroup"))) {
                                if (e = Z(i).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        var i = Z.makeArray(e);
                        return Z(t).find("option").each(function() {
                            this.selected = Z.inArray(Z(this).val(), i) >= 0
                        }), i.length || (t.selectedIndex = -1), i
                    }
                }
            },
            attr: function(t, i, s) {
                var n, o, a, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === F ? Z.prop(t, i, s) : ((o = 1 !== r || !Z.isXMLDoc(t)) && (i = i.toLowerCase(), n = Z.attrHooks[i] || (kt.test(i) ? _t : vt)), s === e ? n && o && "get" in n && null !== (a = n.get(t, i)) ? a : (typeof t.getAttribute !== F && (a = t.getAttribute(i)), null == a ? e : a) : null !== s ? n && o && "set" in n && (a = n.set(t, s, i)) !== e ? a : (t.setAttribute(i, s + ""), s) : (Z.removeAttr(t, i), e))
            },
            removeAttr: function(t, e) {
                var i, s, n = 0,
                    o = e && e.match(et);
                if (o && 1 === t.nodeType)
                    for (; i = o[n++];) s = Z.propFix[i] || i, kt.test(i) ? !Dt && Ct.test(i) ? t[Z.camelCase("default-" + i)] = t[s] = !1 : t[s] = !1 : Z.attr(t, i, ""), t.removeAttribute(Dt ? i : s)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!Z.support.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(t, i, s) {
                var n, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !Z.isXMLDoc(t)) && (i = Z.propFix[i] || i, o = Z.propHooks[i]), s !== e ? o && "set" in o && (n = o.set(t, s, i)) !== e ? n : t[i] = s : o && "get" in o && null !== (n = o.get(t, i)) ? n : t[i]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var i = t.getAttributeNode("tabindex");
                        return i && i.specified ? parseInt(i.value, 10) : xt.test(t.nodeName) || wt.test(t.nodeName) && t.href ? 0 : e
                    }
                }
            }
        }), _t = {
            get: function(t, i) {
                var s = Z.prop(t, i),
                    n = "boolean" == typeof s && t.getAttribute(i),
                    o = "boolean" == typeof s ? Tt && Dt ? null != n : Ct.test(i) ? t[Z.camelCase("default-" + i)] : !!n : t.getAttributeNode(i);
                return o && !1 !== o.value ? i.toLowerCase() : e
            },
            set: function(t, e, i) {
                return !1 === e ? Z.removeAttr(t, i) : Tt && Dt || !Ct.test(i) ? t.setAttribute(!Dt && Z.propFix[i] || i, i) : t[Z.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, Tt && Dt || (Z.attrHooks.value = {
            get: function(t, i) {
                var s = t.getAttributeNode(i);
                return Z.nodeName(t, "input") ? t.defaultValue : s && s.specified ? s.value : e
            },
            set: function(t, i, s) {
                return Z.nodeName(t, "input") ? (t.defaultValue = i, e) : vt && vt.set(t, i, s)
            }
        }), Dt || (vt = Z.valHooks.button = {
            get: function(t, i) {
                var s = t.getAttributeNode(i);
                return s && ("id" === i || "name" === i || "coords" === i ? "" !== s.value : s.specified) ? s.value : e
            },
            set: function(t, i, s) {
                var n = t.getAttributeNode(s);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(s)), n.value = i += "", "value" === s || i === t.getAttribute(s) ? i : e
            }
        }, Z.attrHooks.contenteditable = {
            get: vt.get,
            set: function(t, e, i) {
                vt.set(t, "" !== e && e, i)
            }
        }, Z.each(["width", "height"], function(t, i) {
            Z.attrHooks[i] = Z.extend(Z.attrHooks[i], {
                set: function(t, s) {
                    return "" === s ? (t.setAttribute(i, "auto"), s) : e
                }
            })
        })), Z.support.hrefNormalized || (Z.each(["href", "src", "width", "height"], function(t, i) {
            Z.attrHooks[i] = Z.extend(Z.attrHooks[i], {
                get: function(t) {
                    var s = t.getAttribute(i, 2);
                    return null == s ? e : s
                }
            })
        }), Z.each(["href", "src"], function(t, e) {
            Z.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        })), Z.support.style || (Z.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || e
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }), Z.support.optSelected || (Z.propHooks.selected = Z.extend(Z.propHooks.selected, {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        })), Z.support.enctype || (Z.propFix.enctype = "encoding"), Z.support.checkOn || Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                get: function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = Z.extend(Z.valHooks[this], {
                set: function(t, i) {
                    return Z.isArray(i) ? t.checked = Z.inArray(Z(t).val(), i) >= 0 : e
                }
            })
        });
        var It = /^(?:input|select|textarea)$/i,
            St = /^key/,
            Pt = /^(?:mouse|contextmenu)|click/,
            Mt = /^(?:focusinfocus|focusoutblur)$/,
            Nt = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
                global: {},
                add: function(t, i, s, n, o) {
                    var a, r, l, h, c, u, d, p, f, g, m, v = Z._data(t);
                    if (v) {
                        for (s.handler && (h = s, s = h.handler, o = h.selector), s.guid || (s.guid = Z.guid++), (r = v.events) || (r = v.events = {}), (u = v.handle) || (u = v.handle = function(t) {
                            return typeof Z === F || t && Z.event.triggered === t.type ? e : Z.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), l = (i = (i || "").match(et) || [""]).length; l--;) a = Nt.exec(i[l]) || [], f = m = a[1], g = (a[2] || "").split(".").sort(), c = Z.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = Z.event.special[f] || {}, d = Z.extend({
                            type: f,
                            origType: m,
                            data: n,
                            handler: s,
                            guid: s.guid,
                            selector: o,
                            needsContext: o && Z.expr.match.needsContext.test(o),
                            namespace: g.join(".")
                        }, h), (p = r[f]) || (p = r[f] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, g, u) || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = s.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), Z.event.global[f] = !0;
                        t = null
                    }
                },
                remove: function(t, e, i, s, n) {
                    var o, a, r, l, h, c, u, d, p, f, g, m = Z.hasData(t) && Z._data(t);
                    if (m && (c = m.events)) {
                        for (h = (e = (e || "").match(et) || [""]).length; h--;)
                            if (r = Nt.exec(e[h]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                                for (u = Z.event.special[p] || {}, d = c[p = (s ? u.delegateType : u.bindType) || p] || [], r = r[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !n && g !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || s && s !== a.selector && ("**" !== s || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, u.remove && u.remove.call(t, a));
                                l && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || Z.removeEvent(t, p, m.handle), delete c[p])
                            } else
                                for (p in c) Z.event.remove(t, p + e[h], i, s, !0);
                        Z.isEmptyObject(c) && (delete m.handle, Z._removeData(t, "events"))
                    }
                },
                trigger: function(i, s, n, o) {
                    var a, r, l, h, c, u, d, p = [n || R],
                        f = Q.call(i, "type") ? i.type : i,
                        g = Q.call(i, "namespace") ? i.namespace.split(".") : [];
                    if (l = u = n = n || R, 3 !== n.nodeType && 8 !== n.nodeType && !Mt.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), r = 0 > f.indexOf(":") && "on" + f, i = i[Z.expando] ? i : new Z.Event(f, "object" == typeof i && i), i.isTrigger = !0, i.namespace = g.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = n), s = null == s ? [i] : Z.makeArray(s, [i]), c = Z.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(n, s))) {
                        if (!o && !c.noBubble && !Z.isWindow(n)) {
                            for (h = c.delegateType || f, Mt.test(h + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), u = l;
                            u === (n.ownerDocument || R) && p.push(u.defaultView || u.parentWindow || t)
                        }
                        for (d = 0;
                            (l = p[d++]) && !i.isPropagationStopped();) i.type = d > 1 ? h : c.bindType || f, (a = (Z._data(l, "events") || {})[i.type] && Z._data(l, "handle")) && a.apply(l, s), (a = r && l[r]) && Z.acceptData(l) && a.apply && !1 === a.apply(l, s) && i.preventDefault();
                        if (i.type = f, !(o || i.isDefaultPrevented() || c._default && !1 !== c._default.apply(n.ownerDocument, s) || "click" === f && Z.nodeName(n, "a")) && Z.acceptData(n) && r && n[f] && !Z.isWindow(n)) {
                            (u = n[r]) && (n[r] = null), Z.event.triggered = f;
                            try {
                                n[f]()
                            } catch (t) {}
                            Z.event.triggered = e, u && (n[r] = u)
                        }
                        return i.result
                    }
                },
                dispatch: function(t) {
                    t = Z.event.fix(t);
                    var i, s, n, o, a, r = [],
                        l = V.call(arguments),
                        h = (Z._data(this, "events") || {})[t.type] || [],
                        c = Z.event.special[t.type] || {};
                    if (l[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                        for (r = Z.event.handlers.call(this, t, h), i = 0;
                            (o = r[i++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = o.elem, a = 0;
                                (n = o.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, (s = ((Z.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, l)) !== e && !1 === (t.result = s) && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(t, i) {
                    var s, n, o, a, r = [],
                        l = i.delegateCount,
                        h = t.target;
                    if (l && h.nodeType && (!t.button || "click" !== t.type))
                        for (; h != this; h = h.parentNode || this)
                            if (1 === h.nodeType && (!0 !== h.disabled || "click" !== t.type)) {
                                for (o = [], a = 0; l > a; a++) n = i[a], s = n.selector + " ", o[s] === e && (o[s] = n.needsContext ? Z(s, this).index(h) >= 0 : Z.find(s, this, null, [h]).length), o[s] && o.push(n);
                                o.length && r.push({
                                    elem: h,
                                    handlers: o
                                })
                            }
                    return i.length > l && r.push({
                        elem: this,
                        handlers: i.slice(l)
                    }), r
                },
                fix: function(t) {
                    if (t[Z.expando]) return t;
                    var e, i, s, n = t.type,
                        o = t,
                        a = this.fixHooks[n];
                    for (a || (this.fixHooks[n] = a = Pt.test(n) ? this.mouseHooks : St.test(n) ? this.keyHooks : {}), s = a.props ? this.props.concat(a.props) : this.props, t = new Z.Event(o), e = s.length; e--;) i = s[e], t[i] = o[i];
                    return t.target || (t.target = o.srcElement || R), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, i) {
                        var s, n, o, a = i.button,
                            r = i.fromElement;
                        return null == t.pageX && null != i.clientX && (n = t.target.ownerDocument || R, o = n.documentElement, s = n.body, t.pageX = i.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = i.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? i.toElement : r), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            return Z.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== R.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === R.activeElement && this.blur ? (this.blur(), !1) : e
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            t.result !== e && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, i, s) {
                    var n = Z.extend(new Z.Event, i, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    s ? Z.event.trigger(n, null, e) : Z.event.dispatch.call(e, n), n.isDefaultPrevented() && i.preventDefault()
                }
            }, Z.removeEvent = R.removeEventListener ? function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i, !1)
            } : function(t, e, i) {
                var s = "on" + e;
                t.detachEvent && (typeof t[s] === F && (t[s] = null), t.detachEvent(s, i))
            }, Z.Event = function(t, i) {
                return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? r : l) : this.type = t, i && Z.extend(this, i), this.timeStamp = t && t.timeStamp || Z.now(), this[Z.expando] = !0, e) : new Z.Event(t, i)
            }, Z.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = r, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = r, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = r, this.stopPropagation()
                }
            }, Z.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(t, e) {
                Z.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var i, s = t.relatedTarget,
                            n = t.handleObj;
                        return (!s || s !== this && !Z.contains(this, s)) && (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i
                    }
                }
            }), Z.support.submitBubbles || (Z.event.special.submit = {
                setup: function() {
                    return !Z.nodeName(this, "form") && (Z.event.add(this, "click._submit keypress._submit", function(t) {
                        var i = t.target,
                            s = Z.nodeName(i, "input") || Z.nodeName(i, "button") ? i.form : e;
                        s && !Z._data(s, "submitBubbles") && (Z.event.add(s, "submit._submit", function(t) {
                            t._submit_bubble = !0
                        }), Z._data(s, "submitBubbles", !0))
                    }), e)
                },
                postDispatch: function(t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && Z.event.simulate("submit", this.parentNode, t, !0))
                },
                teardown: function() {
                    return !Z.nodeName(this, "form") && (Z.event.remove(this, "._submit"), e)
                }
            }), Z.support.changeBubbles || (Z.event.special.change = {
                setup: function() {
                    return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (Z.event.add(this, "propertychange._change", function(t) {
                        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                    }), Z.event.add(this, "click._change", function(t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1), Z.event.simulate("change", this, t, !0)
                    })), !1) : (Z.event.add(this, "beforeactivate._change", function(t) {
                        var e = t.target;
                        It.test(e.nodeName) && !Z._data(e, "changeBubbles") && (Z.event.add(e, "change._change", function(t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || Z.event.simulate("change", this.parentNode, t, !0)
                        }), Z._data(e, "changeBubbles", !0))
                    }), e)
                },
                handle: function(t) {
                    var i = t.target;
                    return this !== i || t.isSimulated || t.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? t.handleObj.handler.apply(this, arguments) : e
                },
                teardown: function() {
                    return Z.event.remove(this, "._change"), !It.test(this.nodeName)
                }
            }), Z.support.focusinBubbles || Z.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var i = 0,
                    s = function(t) {
                        Z.event.simulate(e, t.target, Z.event.fix(t), !0)
                    };
                Z.event.special[e] = {
                    setup: function() {
                        0 == i++ && R.addEventListener(t, s, !0)
                    },
                    teardown: function() {
                        0 == --i && R.removeEventListener(t, s, !0)
                    }
                }
            }), Z.fn.extend({
                on: function(t, i, s, n, o) {
                    var a, r;
                    if ("object" == typeof t) {
                        "string" != typeof i && (s = s || i, i = e);
                        for (a in t) this.on(a, i, s, t[a], o);
                        return this
                    }
                    if (null == s && null == n ? (n = i, s = i = e) : null == n && ("string" == typeof i ? (n = s, s = e) : (n = s, s = i, i = e)), !1 === n) n = l;
                    else if (!n) return this;
                    return 1 === o && (r = n, n = function(t) {
                        return Z().off(t), r.apply(this, arguments)
                    }, n.guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
                        Z.event.add(this, t, n, s, i)
                    })
                },
                one: function(t, e, i, s) {
                    return this.on(t, e, i, s, 1)
                },
                off: function(t, i, s) {
                    var n, o;
                    if (t && t.preventDefault && t.handleObj) return n = t.handleObj, Z(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof t) {
                        for (o in t) this.off(o, i, t[o]);
                        return this
                    }
                    return (!1 === i || "function" == typeof i) && (s = i, i = e), !1 === s && (s = l), this.each(function() {
                        Z.event.remove(this, t, s, i)
                    })
                },
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, i, s) {
                    return this.on(e, t, i, s)
                },
                undelegate: function(t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        Z.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, i) {
                    var s = this[0];
                    return s ? Z.event.trigger(t, i, s, !0) : e
                }
            }),
            function(t, e) {
                function i(t) {
                    return ct.test(t + "")
                }

                function s() {
                    var t, e = [];
                    return t = function(i, s) {
                        return e.push(i += " ") > x.cacheLength && delete t[e.shift()], t[i] = s
                    }
                }

                function n(t) {
                    return t[z] = !0, t
                }

                function o(t) {
                    var e = S.createElement("div");
                    try {
                        return t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e = null
                    }
                }

                function a(t, e, i, s) {
                    var n, o, a, r, l, h, c, p, f, g;
                    if ((e ? e.ownerDocument || e : W) !== S && I(e), e = e || S, i = i || [], !t || "string" != typeof t) return i;
                    if (1 !== (r = e.nodeType) && 9 !== r) return [];
                    if (!M && !s) {
                        if (n = ut.exec(t))
                            if (a = n[1]) {
                                if (9 === r) {
                                    if (!(o = e.getElementById(a)) || !o.parentNode) return i;
                                    if (o.id === a) return i.push(o), i
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && H(e, o) && o.id === a) return i.push(o), i
                            } else {
                                if (n[2]) return V.apply(i, X.call(e.getElementsByTagName(t), 0)), i;
                                if ((a = n[3]) && L.getByClassName && e.getElementsByClassName) return V.apply(i, X.call(e.getElementsByClassName(a), 0)), i
                            }
                        if (L.qsa && !N.test(t)) {
                            if (c = !0, p = z, f = e, g = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                                for (h = u(t), (c = e.getAttribute("id")) ? p = c.replace(ft, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                                f = ht.test(t) && e.parentNode || e, g = h.join(",")
                            }
                            if (g) try {
                                return V.apply(i, X.call(f.querySelectorAll(g), 0)), i
                            } catch (t) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return function(t, e, i, s) {
                        var n, o, a, r, l, h = u(t);
                        if (!s && 1 === h.length) {
                            if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && !M && x.relative[o[1].type]) {
                                if (!(e = x.find.ID(a.matches[0].replace(mt, vt), e)[0])) return i;
                                t = t.slice(o.shift().value.length)
                            }
                            for (n = lt.needsContext.test(t) ? 0 : o.length; n-- && (a = o[n], !x.relative[r = a.type]);)
                                if ((l = x.find[r]) && (s = l(a.matches[0].replace(mt, vt), ht.test(o[0].type) && e.parentNode || e))) {
                                    if (o.splice(n, 1), !(t = s.length && d(o))) return V.apply(i, X.call(s, 0)), i;
                                    break
                                }
                        }
                        return C(t, h)(s, e, M, i, ht.test(t)), i
                    }(t.replace(st, "$1"), e, i, s)
                }

                function r(t, e) {
                    var i = e && t,
                        s = i && (~e.sourceIndex || $) - (~t.sourceIndex || $);
                    if (s) return s;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function h(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function c(t) {
                    return n(function(e) {
                        return e = +e, n(function(i, s) {
                            for (var n, o = t([], i.length, e), a = o.length; a--;) i[n = o[a]] && (i[n] = !(s[n] = i[n]))
                        })
                    })
                }

                function u(t, e) {
                    var i, s, n, o, r, l, h, c = B[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (r = t, l = [], h = x.preFilter; r;) {
                        (!i || (s = nt.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(n = [])), i = !1, (s = ot.exec(r)) && (i = s.shift(), n.push({
                            value: i,
                            type: s[0].replace(st, " ")
                        }), r = r.slice(i.length));
                        for (o in x.filter)!(s = lt[o].exec(r)) || h[o] && !(s = h[o](s)) || (i = s.shift(), n.push({
                            value: i,
                            type: o,
                            matches: s
                        }), r = r.slice(i.length));
                        if (!i) break
                    }
                    return e ? r.length : r ? a.error(t) : B(t, l).slice(0)
                }

                function d(t) {
                    for (var e = 0, i = t.length, s = ""; i > e; e++) s += t[e].value;
                    return s
                }

                function p(t, e, i) {
                    var s = e.dir,
                        n = i && "parentNode" === s,
                        o = R++;
                    return e.first ? function(e, i, o) {
                        for (; e = e[s];)
                            if (1 === e.nodeType || n) return t(e, i, o)
                    } : function(e, i, a) {
                        var r, l, h, c = F + " " + o;
                        if (a) {
                            for (; e = e[s];)
                                if ((1 === e.nodeType || n) && t(e, i, a)) return !0
                        } else
                            for (; e = e[s];)
                                if (1 === e.nodeType || n)
                                    if (h = e[z] || (e[z] = {}), (l = h[s]) && l[0] === c) {
                                        if (!0 === (r = l[1]) || r === y) return !0 === r
                                    } else if (l = h[s] = [c], l[1] = t(e, i, a) || y, !0 === l[1]) return !0
                    }
                }

                function f(t) {
                    return t.length > 1 ? function(e, i, s) {
                        for (var n = t.length; n--;)
                            if (!t[n](e, i, s)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, e, i, s, n) {
                    for (var o, a = [], r = 0, l = t.length, h = null != e; l > r; r++)(o = t[r]) && (!i || i(o, s, n)) && (a.push(o), h && e.push(r));
                    return a
                }

                function m(t, e, i, s, o, r) {
                    return s && !s[z] && (s = m(s)), o && !o[z] && (o = m(o, r)), n(function(n, r, l, h) {
                        var c, u, d, p = [],
                            f = [],
                            m = r.length,
                            v = n || function(t, e, i) {
                                for (var s = 0, n = e.length; n > s; s++) a(t, e[s], i);
                                return i
                            }(e || "*", l.nodeType ? [l] : l, []),
                            _ = !t || !n && e ? v : g(v, p, t, l, h),
                            b = i ? o || (n ? t : m || s) ? [] : r : _;
                        if (i && i(_, b, l, h), s)
                            for (c = g(b, f), s(c, [], l, h), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(_[f[u]] = d));
                        if (n) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(_[u] = d);
                                    o(null, b = [], c, h)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = o ? G.call(n, d) : p[u]) > -1 && (n[c] = !(r[c] = d))
                            }
                        } else b = g(b === r ? b.splice(m, b.length) : b), o ? o(null, r, b, h) : V.apply(r, b)
                    })
                }

                function v(t) {
                    for (var e, i, s, n = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], r = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, a, !0), h = p(function(t) {
                        return G.call(e, t) > -1
                    }, a, !0), c = [
                        function(t, i, s) {
                            return !o && (s || i !== T) || ((e = i).nodeType ? l(t, i, s) : h(t, i, s))
                        }
                    ]; n > r; r++)
                        if (i = x.relative[t[r].type]) c = [p(f(c), i)];
                        else {
                            if ((i = x.filter[t[r].type].apply(null, t[r].matches))[z]) {
                                for (s = ++r; n > s && !x.relative[t[s].type]; s++);
                                return m(r > 1 && f(c), r > 1 && d(t.slice(0, r - 1)).replace(st, "$1"), i, s > r && v(t.slice(r, s)), n > s && v(t = t.slice(s)), n > s && d(t))
                            }
                            c.push(i)
                        }
                    return f(c)
                }

                function _() {}
                var b, y, x, w, k, C, D, T, I, S, P, M, N, A, E, H, O, z = "sizzle" + -new Date,
                    W = t.document,
                    L = {},
                    F = 0,
                    R = 0,
                    j = s(),
                    B = s(),
                    q = s(),
                    Y = "undefined",
                    $ = 1 << 31,
                    K = [],
                    U = K.pop,
                    V = K.push,
                    X = K.slice,
                    G = K.indexOf || function(t) {
                        for (var e = 0, i = this.length; i > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    Q = "[\\x20\\t\\r\\n\\f]",
                    J = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    tt = J.replace("w", "w#"),
                    et = "\\[" + Q + "*(" + J + ")" + Q + "*(?:([*^$|!~]?=)" + Q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + tt + ")|)|)" + Q + "*\\]",
                    it = ":(" + J + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + et.replace(3, 8) + ")*)|.*)\\)|)",
                    st = RegExp("^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$", "g"),
                    nt = RegExp("^" + Q + "*," + Q + "*"),
                    ot = RegExp("^" + Q + "*([\\x20\\t\\r\\n\\f>+~])" + Q + "*"),
                    at = RegExp(it),
                    rt = RegExp("^" + tt + "$"),
                    lt = {
                        ID: RegExp("^#(" + J + ")"),
                        CLASS: RegExp("^\\.(" + J + ")"),
                        NAME: RegExp("^\\[name=['\"]?(" + J + ")['\"]?\\]"),
                        TAG: RegExp("^(" + J.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + et),
                        PSEUDO: RegExp("^" + it),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Q + "*(even|odd|(([+-]|)(\\d*)n|)" + Q + "*(?:([+-]|)" + Q + "*(\\d+)|))" + Q + "*\\)|)", "i"),
                        needsContext: RegExp("^" + Q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Q + "*((?:-\\d)?\\d*)" + Q + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ht = /[\x20\t\r\n\f]*[+~]/,
                    ct = /^[^{]+\{\s*\[native code/,
                    ut = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    dt = /^(?:input|select|textarea|button)$/i,
                    pt = /^h\d$/i,
                    ft = /'|\\/g,
                    gt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    mt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    vt = function(t, e) {
                        var i = "0x" + e - 65536;
                        return i != i ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    X.call(W.documentElement.childNodes, 0)[0].nodeType
                } catch (t) {
                    X = function(t) {
                        for (var e, i = []; e = this[t++];) i.push(e);
                        return i
                    }
                }
                k = a.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, I = a.setDocument = function(t) {
                    var e = t ? t.ownerDocument || t : W;
                    return e !== S && 9 === e.nodeType && e.documentElement ? (S = e, P = e.documentElement, M = k(e), L.tagNameNoComments = o(function(t) {
                        return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                    }), L.attributes = o(function(t) {
                        t.innerHTML = "<select></select>";
                        var e = typeof t.lastChild.getAttribute("multiple");
                        return "boolean" !== e && "string" !== e
                    }), L.getByClassName = o(function(t) {
                        return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length)
                    }), L.getByName = o(function(t) {
                        t.id = z + 0, t.innerHTML = "<a name='" + z + "'></a><div name='" + z + "'></div>", P.insertBefore(t, P.firstChild);
                        var i = e.getElementsByName && e.getElementsByName(z).length === 2 + e.getElementsByName(z + 0).length;
                        return L.getIdNotName = !e.getElementById(z), P.removeChild(t), i
                    }), x.attrHandle = o(function(t) {
                        return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== Y && "#" === t.firstChild.getAttribute("href")
                    }) ? {} : {
                        href: function(t) {
                            return t.getAttribute("href", 2)
                        },
                        type: function(t) {
                            return t.getAttribute("type")
                        }
                    }, L.getIdNotName ? (x.find.ID = function(t, e) {
                        if (typeof e.getElementById !== Y && !M) {
                            var i = e.getElementById(t);
                            return i && i.parentNode ? [i] : []
                        }
                    }, x.filter.ID = function(t) {
                        var e = t.replace(mt, vt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (x.find.ID = function(t, e) {
                        if (typeof e.getElementById !== Y && !M) {
                            var i = e.getElementById(t);
                            return i ? i.id === t || typeof i.getAttributeNode !== Y && i.getAttributeNode("id").value === t ? [i] : void 0 : []
                        }
                    }, x.filter.ID = function(t) {
                        var e = t.replace(mt, vt);
                        return function(t) {
                            var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), x.find.TAG = L.tagNameNoComments ? function(t, e) {
                        return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
                    } : function(t, e) {
                        var i, s = [],
                            n = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[n++];) 1 === i.nodeType && s.push(i);
                            return s
                        }
                        return o
                    }, x.find.NAME = L.getByName && function(t, e) {
                        return typeof e.getElementsByName !== Y ? e.getElementsByName(name) : void 0
                    }, x.find.CLASS = L.getByClassName && function(t, e) {
                        return typeof e.getElementsByClassName === Y || M ? void 0 : e.getElementsByClassName(t)
                    }, A = [], N = [":focus"], (L.qsa = i(e.querySelectorAll)) && (o(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || N.push("\\[" + Q + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || N.push(":checked")
                    }), o(function(t) {
                        t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && N.push("[*^$]=" + Q + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (L.matchesSelector = i(E = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                        L.disconnectedMatch = E.call(t, "div"), E.call(t, "[s!='']:x"), A.push("!=", it)
                    }), N = RegExp(N.join("|")), A = RegExp(A.join("|")), H = i(P.contains) || P.compareDocumentPosition ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            s = e && e.parentNode;
                        return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, O = P.compareDocumentPosition ? function(t, i) {
                        var s;
                        return t === i ? (D = !0, 0) : (s = i.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(i)) ? 1 & s || t.parentNode && 11 === t.parentNode.nodeType ? t === e || H(W, t) ? -1 : i === e || H(W, i) ? 1 : 0 : 4 & s ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, i) {
                        var s, n = 0,
                            o = t.parentNode,
                            a = i.parentNode,
                            l = [t],
                            h = [i];
                        if (t === i) return D = !0, 0;
                        if (!o || !a) return t === e ? -1 : i === e ? 1 : o ? -1 : a ? 1 : 0;
                        if (o === a) return r(t, i);
                        for (s = t; s = s.parentNode;) l.unshift(s);
                        for (s = i; s = s.parentNode;) h.unshift(s);
                        for (; l[n] === h[n];) n++;
                        return n ? r(l[n], h[n]) : l[n] === W ? -1 : h[n] === W ? 1 : 0
                    }, D = !1, [0, 0].sort(O), L.detectDuplicates = D, S) : S
                }, a.matches = function(t, e) {
                    return a(t, null, null, e)
                }, a.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== S && I(t), e = e.replace(gt, "='$1']"), !(!L.matchesSelector || M || A && A.test(e) || N.test(e))) try {
                        var i = E.call(t, e);
                        if (i || L.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return a(e, S, null, [t]).length > 0
                }, a.contains = function(t, e) {
                    return (t.ownerDocument || t) !== S && I(t), H(t, e)
                }, a.attr = function(t, e) {
                    var i;
                    return (t.ownerDocument || t) !== S && I(t), M || (e = e.toLowerCase()), (i = x.attrHandle[e]) ? i(t) : M || L.attributes ? t.getAttribute(e) : ((i = t.getAttributeNode(e)) || t.getAttribute(e)) && !0 === t[e] ? e : i && i.specified ? i.value : null
                }, a.error = function(t) {
                    throw Error("Syntax error, unrecognized expression: " + t)
                }, a.uniqueSort = function(t) {
                    var e, i = [],
                        s = 1,
                        n = 0;
                    if (D = !L.detectDuplicates, t.sort(O), D) {
                        for (; e = t[s]; s++) e === t[s - 1] && (n = i.push(s));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return t
                }, w = a.getText = function(t) {
                    var e, i = "",
                        s = 0,
                        n = t.nodeType;
                    if (n) {
                        if (1 === n || 9 === n || 11 === n) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
                        } else if (3 === n || 4 === n) return t.nodeValue
                    } else
                        for (; e = t[s]; s++) i += w(e);
                    return i
                }, x = a.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: lt,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(mt, vt), t[3] = (t[4] || t[5] || "").replace(mt, vt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || a.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && a.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[5] && t[2];
                            return lt.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : i && at.test(i) && (e = u(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            return "*" === t ? function() {
                                return !0
                            } : (t = t.replace(mt, vt).toLowerCase(), function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            })
                        },
                        CLASS: function(t) {
                            var e = j[t + " "];
                            return e || (e = RegExp("(^|" + Q + ")" + t + "(" + Q + "|$)")) && j(t, function(t) {
                                return e.test(t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(s) {
                                var n = a.attr(s, t);
                                return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n + " ").indexOf(i) > -1 : "|=" === e && (n === i || n.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, s, n) {
                            var o = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                r = "of-type" === e;
                            return 1 === s && 0 === n ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var h, c, u, d, p, f, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = r && e.nodeName.toLowerCase(),
                                    _ = !l && !r;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (u = e; u = u[g];)
                                                if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? m.firstChild : m.lastChild], a && _) {
                                        for (p = (h = (c = m[z] || (m[z] = {}))[t] || [])[0] === F && h[1], d = h[0] === F && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)
                                            if (1 === u.nodeType && ++d && u === e) {
                                                c[t] = [F, p, d];
                                                break
                                            }
                                    } else if (_ && (h = (e[z] || (e[z] = {}))[t]) && h[0] === F) d = h[1];
                                    else
                                        for (;
                                            (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (_ && ((u[z] || (u[z] = {}))[t] = [F, d]), u !== e)););
                                    return (d -= n) === s || 0 == d % s && d / s >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || a.error("unsupported pseudo: " + t);
                            return s[z] ? s(e) : s.length > 1 ? (i = [t, t, "", e], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, i) {
                                for (var n, o = s(t, e), a = o.length; a--;) n = G.call(t, o[a]), t[n] = !(i[n] = o[a])
                            }) : function(t) {
                                return s(t, 0, i)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: n(function(t) {
                            var e = [],
                                i = [],
                                s = C(t.replace(st, "$1"));
                            return s[z] ? n(function(t, e, i, n) {
                                for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                            }) : function(t, n, o) {
                                return e[0] = t, s(e, null, o, i), !i.pop()
                            }
                        }),
                        has: n(function(t) {
                            return function(e) {
                                return a(t, e).length > 0
                            }
                        }),
                        contains: n(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                            }
                        }),
                        lang: n(function(t) {
                            return rt.test(t || "") || a.error("unsupported lang: " + t), t = t.replace(mt, vt).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = M ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === P
                        },
                        focus: function(t) {
                            return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function(t) {
                            return pt.test(t.nodeName)
                        },
                        input: function(t) {
                            return dt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: c(function(t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: c(function(t, e, i) {
                            for (var s = 0 > i ? i + e : i; --s >= 0;) t.push(s);
                            return t
                        }),
                        gt: c(function(t, e, i) {
                            for (var s = 0 > i ? i + e : i; e > ++s;) t.push(s);
                            return t
                        })
                    }
                };
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[b] = l(b);
                for (b in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[b] = h(b);
                C = a.compile = function(t, e) {
                    var i, s = [],
                        o = [],
                        r = q[t + " "];
                    if (!r) {
                        for (e || (e = u(t)), i = e.length; i--;)(r = v(e[i]))[z] ? s.push(r) : o.push(r);
                        r = q(t, function(t, e) {
                            var i = 0,
                                s = e.length > 0,
                                o = t.length > 0,
                                r = function(n, r, l, h, c) {
                                    var u, d, p, f = [],
                                        m = 0,
                                        v = "0",
                                        _ = n && [],
                                        b = null != c,
                                        w = T,
                                        k = n || o && x.find.TAG("*", c && r.parentNode || r),
                                        C = F += null == w ? 1 : Math.random() || .1;
                                    for (b && (T = r !== S && r, y = i); null != (u = k[v]); v++) {
                                        if (o && u) {
                                            for (d = 0; p = t[d++];)
                                                if (p(u, r, l)) {
                                                    h.push(u);
                                                    break
                                                }
                                            b && (F = C, y = ++i)
                                        }
                                        s && ((u = !p && u) && m--, n && _.push(u))
                                    }
                                    if (m += v, s && v !== m) {
                                        for (d = 0; p = e[d++];) p(_, f, r, l);
                                        if (n) {
                                            if (m > 0)
                                                for (; v--;) _[v] || f[v] || (f[v] = U.call(h));
                                            f = g(f)
                                        }
                                        V.apply(h, f), b && !n && f.length > 0 && m + e.length > 1 && a.uniqueSort(h)
                                    }
                                    return b && (F = C, T = w), _
                                };
                            return s ? n(r) : r
                        }(o, s))
                    }
                    return r
                }, x.pseudos.nth = x.pseudos.eq, x.filters = _.prototype = x.pseudos, x.setFilters = new _, I(), a.attr = Z.attr, Z.find = a, Z.expr = a.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = a.uniqueSort, Z.text = a.getText, Z.isXMLDoc = a.isXML, Z.contains = a.contains
            }(t);
        var At = /Until$/,
            Et = /^(?:parents|prev(?:Until|All))/,
            Ht = /^.[^:#\[\.,]*$/,
            Ot = Z.expr.match.needsContext,
            zt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.fn.extend({
            find: function(t) {
                var e, i, s, n = this.length;
                if ("string" != typeof t) return s = this, this.pushStack(Z(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (Z.contains(s[e], this)) return !0
                }));
                for (i = [], e = 0; n > e; e++) Z.find(t, this[e], i);
                return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + t, i
            },
            has: function(t) {
                var e, i = Z(t, this),
                    s = i.length;
                return this.filter(function() {
                    for (e = 0; s > e; e++)
                        if (Z.contains(this, i[e])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(c(this, t, !1))
            },
            filter: function(t) {
                return this.pushStack(c(this, t, !0))
            },
            is: function(t) {
                return !!t && ("string" == typeof t ? Ot.test(t) ? Z(t, this.context).index(this[0]) >= 0 : Z.filter(t, this).length > 0 : this.filter(t).length > 0)
            },
            closest: function(t, e) {
                for (var i, s = 0, n = this.length, o = [], a = Ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; n > s; s++)
                    for (i = this[s]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
                        if (a ? a.index(i) > -1 : Z.find.matchesSelector(i, t)) {
                            o.push(i);
                            break
                        }
                        i = i.parentNode
                    }
                return this.pushStack(o.length > 1 ? Z.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Z.inArray(this[0], Z(t)) : Z.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                var i = "string" == typeof t ? Z(t, e) : Z.makeArray(t && t.nodeType ? [t] : t),
                    s = Z.merge(this.get(), i);
                return this.pushStack(Z.unique(s))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Z.fn.andSelf = Z.fn.addBack, Z.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Z.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return Z.dir(t, "parentNode", i)
            },
            next: function(t) {
                return h(t, "nextSibling")
            },
            prev: function(t) {
                return h(t, "previousSibling")
            },
            nextAll: function(t) {
                return Z.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return Z.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return Z.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return Z.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return Z.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return Z.sibling(t.firstChild)
            },
            contents: function(t) {
                return Z.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : Z.merge([], t.childNodes)
            }
        }, function(t, e) {
            Z.fn[t] = function(i, s) {
                var n = Z.map(this, e, i);
                return At.test(t) || (s = i), s && "string" == typeof s && (n = Z.filter(s, n)), n = this.length > 1 && !zt[t] ? Z.unique(n) : n, this.length > 1 && Et.test(t) && (n = n.reverse()), this.pushStack(n)
            }
        }), Z.extend({
            filter: function(t, e, i) {
                return i && (t = ":not(" + t + ")"), 1 === e.length ? Z.find.matchesSelector(e[0], t) ? [e[0]] : [] : Z.find.matches(t, e)
            },
            dir: function(t, i, s) {
                for (var n = [], o = t[i]; o && 9 !== o.nodeType && (s === e || 1 !== o.nodeType || !Z(o).is(s));) 1 === o.nodeType && n.push(o), o = o[i];
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        });
        var Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Lt = / jQuery\d+="(?:null|\d+)"/g,
            Ft = RegExp("<(?:" + Wt + ")[\\s/>]", "i"),
            Rt = /^\s+/,
            jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Bt = /<([\w:]+)/,
            qt = /<tbody/i,
            Yt = /<|&#?\w+;/,
            $t = /<(?:script|style|link)/i,
            Kt = /^(?:checkbox|radio)$/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Vt = /^$|\/(?:java|ecma)script/i,
            Xt = /^true\/(.*)/,
            Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: Z.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Jt = u(R).appendChild(R.createElement("div"));
        Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, Z.fn.extend({
            text: function(t) {
                return Z.access(this, function(t) {
                    return t === e ? Z.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(t))
                }, null, t, arguments.length)
            },
            wrapAll: function(t) {
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = Z(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return Z.isFunction(t) ? this.each(function(e) {
                    Z(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = Z(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = Z.isFunction(t);
                return this.each(function(i) {
                    Z(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(t) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(t) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, s = 0; null != (i = this[s]); s++)(!t || Z.filter(t, [i]).length > 0) && (e || 1 !== i.nodeType || Z.cleanData(v(i)), i.parentNode && (e && Z.contains(i.ownerDocument, i) && f(v(i, "script")), i.parentNode.removeChild(i)));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && Z.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && Z.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return Z.clone(this, t, e)
                })
            },
            html: function(t) {
                return Z.access(this, function(t) {
                    var i = this[0] || {},
                        s = 0,
                        n = this.length;
                    if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Lt, "") : e;
                    if (!("string" != typeof t || $t.test(t) || !Z.support.htmlSerialize && Ft.test(t) || !Z.support.leadingWhitespace && Rt.test(t) || Qt[(Bt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(jt, "<$1></$2>");
                        try {
                            for (; n > s; s++) 1 === (i = this[s] || {}).nodeType && (Z.cleanData(v(i, !1)), i.innerHTML = t);
                            i = 0
                        } catch (t) {}
                    }
                    i && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function(t) {
                return Z.isFunction(t) || "string" == typeof t || (t = Z(t).not(this).detach()), this.domManip([t], !0, function(t) {
                    var e = this.nextSibling,
                        i = this.parentNode;
                    i && (Z(this).remove(), i.insertBefore(t, e))
                })
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, i, s) {
                t = K.apply([], t);
                var n, o, a, r, l, h, c = 0,
                    u = this.length,
                    f = this,
                    g = u - 1,
                    m = t[0],
                    _ = Z.isFunction(m);
                if (_ || !(1 >= u || "string" != typeof m || Z.support.checkClone) && Ut.test(m)) return this.each(function(n) {
                    var o = f.eq(n);
                    _ && (t[0] = m.call(this, n, i ? o.html() : e)), o.domManip(t, i, s)
                });
                if (u && (h = Z.buildFragment(t, this[0].ownerDocument, !1, this), n = h.firstChild, 1 === h.childNodes.length && (h = n), n)) {
                    for (i = i && Z.nodeName(n, "tr"), a = (r = Z.map(v(h, "script"), d)).length; u > c; c++) o = h, c !== g && (o = Z.clone(o, !0, !0), a && Z.merge(r, v(o, "script"))), s.call(i && Z.nodeName(this[c], "table") ? function(t, e) {
                        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
                    }(this[c], "tbody") : this[c], o, c);
                    if (a)
                        for (l = r[r.length - 1].ownerDocument, Z.map(r, p), c = 0; a > c; c++) o = r[c], Vt.test(o.type || "") && !Z._data(o, "globalEval") && Z.contains(l, o) && (o.src ? Z.ajax({
                            url: o.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : Z.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Gt, "")));
                    h = n = null
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            Z.fn[t] = function(t) {
                for (var i, s = 0, n = [], o = Z(t), a = o.length - 1; a >= s; s++) i = s === a ? this : this.clone(!0), Z(o[s])[e](i), U.apply(n, i.get());
                return this.pushStack(n)
            }
        }), Z.extend({
            clone: function(t, e, i) {
                var s, n, o, a, r, l = Z.contains(t.ownerDocument, t);
                if (Z.support.html5Clone || Z.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Jt.innerHTML = t.outerHTML, Jt.removeChild(o = Jt.firstChild)), !(Z.support.noCloneEvent && Z.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                    for (s = v(o), r = v(t), a = 0; null != (n = r[a]); ++a) s[a] && m(n, s[a]);
                if (e)
                    if (i)
                        for (r = r || v(t), s = s || v(o), a = 0; null != (n = r[a]); a++) g(n, s[a]);
                    else g(t, o);
                return (s = v(o, "script")).length > 0 && f(s, !l && v(t, "script")), s = r = n = null, o
            },
            buildFragment: function(t, e, i, s) {
                for (var n, o, a, r, l, h, c, d = t.length, p = u(e), g = [], m = 0; d > m; m++)
                    if ((o = t[m]) || 0 === o)
                        if ("object" === Z.type(o)) Z.merge(g, o.nodeType ? [o] : o);
                        else if (Yt.test(o)) {
                    for (r = r || p.appendChild(e.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, r.innerHTML = c[1] + o.replace(jt, "<$1></$2>") + c[2], n = c[0]; n--;) r = r.lastChild;
                    if (!Z.support.leadingWhitespace && Rt.test(o) && g.push(e.createTextNode(Rt.exec(o)[0])), !Z.support.tbody)
                        for (n = (o = "table" !== l || qt.test(o) ? "<table>" !== c[1] || qt.test(o) ? 0 : r : r.firstChild) && o.childNodes.length; n--;) Z.nodeName(h = o.childNodes[n], "tbody") && !h.childNodes.length && o.removeChild(h);
                    for (Z.merge(g, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                    r = p.lastChild
                } else g.push(e.createTextNode(o));
                for (r && p.removeChild(r), Z.support.appendChecked || Z.grep(v(g, "input"), _), m = 0; o = g[m++];)
                    if ((!s || -1 === Z.inArray(o, s)) && (a = Z.contains(o.ownerDocument, o), r = v(p.appendChild(o), "script"), a && f(r), i))
                        for (n = 0; o = r[n++];) Vt.test(o.type || "") && i.push(o);
                return r = null, p
            },
            cleanData: function(t, e) {
                for (var i, s, n, o, a = 0, r = Z.expando, l = Z.cache, h = Z.support.deleteExpando, c = Z.event.special; null != (i = t[a]); a++)
                    if ((e || Z.acceptData(i)) && (n = i[r], o = n && l[n])) {
                        if (o.events)
                            for (s in o.events) c[s] ? Z.event.remove(i, s) : Z.removeEvent(i, s, o.handle);
                        l[n] && (delete l[n], h ? delete i[r] : typeof i.removeAttribute !== F ? i.removeAttribute(r) : i[r] = null, $.push(n))
                    }
            }
        });
        var Zt, te, ee, ie = /alpha\([^)]*\)/i,
            se = /opacity\s*=\s*([^)]*)/,
            ne = /^(top|right|bottom|left)$/,
            oe = /^(none|table(?!-c[ea]).+)/,
            ae = /^margin/,
            re = RegExp("^(" + tt + ")(.*)$", "i"),
            le = RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
            he = RegExp("^([+-])=(" + tt + ")", "i"),
            ce = {
                BODY: "block"
            },
            ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            de = {
                letterSpacing: 0,
                fontWeight: 400
            },
            pe = ["Top", "Right", "Bottom", "Left"],
            fe = ["Webkit", "O", "Moz", "ms"];
        Z.fn.extend({
            css: function(t, i) {
                return Z.access(this, function(t, i, s) {
                    var n, o, a = {},
                        r = 0;
                    if (Z.isArray(i)) {
                        for (o = te(t), n = i.length; n > r; r++) a[i[r]] = Z.css(t, i[r], !1, o);
                        return a
                    }
                    return s !== e ? Z.style(t, i, s) : Z.css(t, i)
                }, t, i, arguments.length > 1)
            },
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(t) {
                var e = "boolean" == typeof t;
                return this.each(function() {
                    (e ? t : y(this)) ? Z(this).show(): Z(this).hide()
                })
            }
        }), Z.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = ee(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: Z.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, i, s, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, a, r, l = Z.camelCase(i),
                        h = t.style;
                    if (i = Z.cssProps[l] || (Z.cssProps[l] = b(h, l)), r = Z.cssHooks[i] || Z.cssHooks[l], s === e) return r && "get" in r && (o = r.get(t, !1, n)) !== e ? o : h[i];
                    if ("string" === (a = typeof s) && (o = he.exec(s)) && (s = (o[1] + 1) * o[2] + parseFloat(Z.css(t, i)), a = "number"), !(null == s || "number" === a && isNaN(s) || ("number" !== a || Z.cssNumber[l] || (s += "px"), Z.support.clearCloneStyle || "" !== s || 0 !== i.indexOf("background") || (h[i] = "inherit"), r && "set" in r && (s = r.set(t, s, n)) === e))) try {
                        h[i] = s
                    } catch (t) {}
                }
            },
            css: function(t, i, s, n) {
                var o, a, r, l = Z.camelCase(i);
                return i = Z.cssProps[l] || (Z.cssProps[l] = b(t.style, l)), (r = Z.cssHooks[i] || Z.cssHooks[l]) && "get" in r && (a = r.get(t, !0, s)), a === e && (a = ee(t, i, n)), "normal" === a && i in de && (a = de[i]), "" === s || s ? (o = parseFloat(a), !0 === s || Z.isNumeric(o) ? o || 0 : a) : a
            },
            swap: function(t, e, i, s) {
                var n, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                n = i.apply(t, s || []);
                for (o in e) t.style[o] = a[o];
                return n
            }
        }), t.getComputedStyle ? (te = function(e) {
            return t.getComputedStyle(e, null)
        }, ee = function(t, i, s) {
            var n, o, a, r = s || te(t),
                l = r ? r.getPropertyValue(i) || r[i] : e,
                h = t.style;
            return r && ("" !== l || Z.contains(t.ownerDocument, t) || (l = Z.style(t, i)), le.test(l) && ae.test(i) && (n = h.width, o = h.minWidth, a = h.maxWidth, h.minWidth = h.maxWidth = h.width = l, l = r.width, h.width = n, h.minWidth = o, h.maxWidth = a)), l
        }) : R.documentElement.currentStyle && (te = function(t) {
            return t.currentStyle
        }, ee = function(t, i, s) {
            var n, o, a, r = s || te(t),
                l = r ? r[i] : e,
                h = t.style;
            return null == l && h && h[i] && (l = h[i]), le.test(l) && !ne.test(i) && (n = h.left, o = t.runtimeStyle, (a = o && o.left) && (o.left = t.currentStyle.left), h.left = "fontSize" === i ? "1em" : l, l = h.pixelLeft + "px", h.left = n, a && (o.left = a)), "" === l ? "auto" : l
        }), Z.each(["height", "width"], function(t, i) {
            Z.cssHooks[i] = {
                get: function(t, s, n) {
                    return s ? 0 === t.offsetWidth && oe.test(Z.css(t, "display")) ? Z.swap(t, ue, function() {
                        return C(t, i, n)
                    }) : C(t, i, n) : e
                },
                set: function(t, e, s) {
                    var n = s && te(t);
                    return w(0, e, s ? k(t, i, s, Z.support.boxSizing && "border-box" === Z.css(t, "boxSizing", !1, n), n) : 0)
                }
            }
        }), Z.support.opacity || (Z.cssHooks.opacity = {
            get: function(t, e) {
                return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var i = t.style,
                    s = t.currentStyle,
                    n = Z.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = s && s.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === Z.trim(o.replace(ie, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || s && !s.filter) || (i.filter = ie.test(o) ? o.replace(ie, n) : o + " " + n)
            }
        }), Z(function() {
            Z.support.reliableMarginRight || (Z.cssHooks.marginRight = {
                get: function(t, i) {
                    return i ? Z.swap(t, {
                        display: "inline-block"
                    }, ee, [t, "marginRight"]) : e
                }
            }), !Z.support.pixelPosition && Z.fn.position && Z.each(["top", "left"], function(t, i) {
                Z.cssHooks[i] = {
                    get: function(t, s) {
                        return s ? (s = ee(t, i), le.test(s) ? Z(t).position()[i] + "px" : s) : e
                    }
                }
            })
        }), Z.expr && Z.expr.filters && (Z.expr.filters.hidden = function(t) {
            return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !Z.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || Z.css(t, "display"))
        }, Z.expr.filters.visible = function(t) {
            return !Z.expr.filters.hidden(t)
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            Z.cssHooks[t + e] = {
                expand: function(i) {
                    for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) n[t + pe[s] + e] = o[s] || o[s - 2] || o[0];
                    return n
                }
            }, ae.test(t) || (Z.cssHooks[t + e].set = w)
        });
        var ge = /%20/g,
            me = /\[\]$/,
            ve = /\r?\n/g,
            _e = /^(?:submit|button|image|reset|file)$/i,
            be = /^(?:input|select|textarea|keygen)/i;
        Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = Z.prop(this, "elements");
                    return t ? Z.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !Z(this).is(":disabled") && be.test(this.nodeName) && !_e.test(t) && (this.checked || !Kt.test(t))
                }).map(function(t, e) {
                    var i = Z(this).val();
                    return null == i ? null : Z.isArray(i) ? Z.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ve, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(ve, "\r\n")
                    }
                }).get()
            }
        }), Z.param = function(t, i) {
            var s, n = [],
                o = function(t, e) {
                    e = Z.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (i === e && (i = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (s in t) I(s, t[s], i, o);
            return n.join("&").replace(ge, "+")
        }, Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            Z.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), Z.fn.hover = function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        };
        var ye, xe, we = Z.now(),
            ke = /\?/,
            Ce = /#.*$/,
            De = /([?&])_=[^&]*/,
            Te = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ie = /^(?:GET|HEAD)$/,
            Se = /^\/\//,
            Pe = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Me = Z.fn.load,
            Ne = {},
            Ae = {},
            Ee = "*/".concat("*");
        try {
            xe = j.href
        } catch (t) {
            (xe = R.createElement("a")).href = "", xe = xe.href
        }
        ye = Pe.exec(xe.toLowerCase()) || [], Z.fn.load = function(t, i, s) {
            if ("string" != typeof t && Me) return Me.apply(this, arguments);
            var n, o, a, r = this,
                l = t.indexOf(" ");
            return l >= 0 && (n = t.slice(l, t.length), t = t.slice(0, l)), Z.isFunction(i) ? (s = i, i = e) : i && "object" == typeof i && (a = "POST"), r.length > 0 && Z.ajax({
                url: t,
                type: a,
                dataType: "html",
                data: i
            }).done(function(t) {
                o = arguments, r.html(n ? Z("<div>").append(Z.parseHTML(t)).find(n) : t)
            }).complete(s && function(t, e) {
                r.each(s, o || [t.responseText, e, t])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            Z.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), Z.each(["get", "post"], function(t, i) {
            Z[i] = function(t, s, n, o) {
                return Z.isFunction(s) && (o = o || n, n = s, s = e), Z.ajax({
                    url: t,
                    type: i,
                    dataType: o,
                    data: s,
                    success: n
                })
            }
        }), Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ee,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": t.String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? M(M(t, Z.ajaxSettings), e) : M(Z.ajaxSettings, t)
            },
            ajaxPrefilter: S(Ne),
            ajaxTransport: S(Ae),
            ajax: function(t, i) {
                function s(t, i, s, n) {
                    var o, u, _, b, x, k = i;
                    2 !== y && (y = 2, l && clearTimeout(l), c = e, r = n || "", w.readyState = t > 0 ? 4 : 0, s && (b = function(t, i, s) {
                        var n, o, a, r, l = t.contents,
                            h = t.dataTypes,
                            c = t.responseFields;
                        for (r in c) r in s && (i[c[r]] = s[r]);
                        for (;
                            "*" === h[0];) h.shift(), o === e && (o = t.mimeType || i.getResponseHeader("Content-Type"));
                        if (o)
                            for (r in l)
                                if (l[r] && l[r].test(o)) {
                                    h.unshift(r);
                                    break
                                }
                        if (h[0] in s) a = h[0];
                        else {
                            for (r in s) {
                                if (!h[0] || t.converters[r + " " + h[0]]) {
                                    a = r;
                                    break
                                }
                                n || (n = r)
                            }
                            a = a || n
                        }
                        return a ? (a !== h[0] && h.unshift(a), s[a]) : e
                    }(d, w, s)), t >= 200 && 300 > t || 304 === t ? (d.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (Z.lastModified[a] = x), (x = w.getResponseHeader("etag")) && (Z.etag[a] = x)), 204 === t ? (o = !0, k = "nocontent") : 304 === t ? (o = !0, k = "notmodified") : (o = function(t, e) {
                        var i, s, n, o, a = {},
                            r = 0,
                            l = t.dataTypes.slice(),
                            h = l[0];
                        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
                            for (n in t.converters) a[n.toLowerCase()] = t.converters[n];
                        for (; s = l[++r];)
                            if ("*" !== s) {
                                if ("*" !== h && h !== s) {
                                    if (!(n = a[h + " " + s] || a["* " + s]))
                                        for (i in a)
                                            if ((o = i.split(" "))[1] === s && (n = a[h + " " + o[0]] || a["* " + o[0]])) {
                                                !0 === n ? n = a[i] : !0 !== a[i] && (s = o[0], l.splice(r--, 0, s));
                                                break
                                            }
                                    if (!0 !== n)
                                        if (n && t.throws) e = n(e);
                                        else try {
                                            e = n(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: n ? t : "No conversion from " + h + " to " + s
                                            }
                                        }
                                }
                                h = s
                            }
                        return {
                            state: "success",
                            data: e
                        }
                    }(d, b), k = o.state, u = o.data, _ = o.error, o = !_)) : (_ = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (i || k) + "", o ? g.resolveWith(p, [u, k, w]) : g.rejectWith(p, [w, k, _]), w.statusCode(v), v = e, h && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? u : _]), m.fireWith(p, [w, k]), h && (f.trigger("ajaxComplete", [w, d]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (i = t, t = e), i = i || {};
                var n, o, a, r, l, h, c, u, d = Z.ajaxSetup({}, i),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                    g = Z.Deferred(),
                    m = Z.Callbacks("once memory"),
                    v = d.statusCode || {},
                    _ = {},
                    b = {},
                    y = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === y) {
                                if (!u)
                                    for (u = {}; e = Te.exec(r);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return y || (t = b[i] = b[i] || t, _[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return y || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > y)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return c && c.abort(e), s(0, e), this
                        }
                    };
                if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || xe) + "").replace(Ce, "").replace(Se, ye[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(et) || [""], null == d.crossDomain && (n = Pe.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === ye[1] && n[2] === ye[2] && (n[3] || ("http:" === n[1] ? 80 : 443)) == (ye[3] || ("http:" === ye[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), P(Ne, d, i, w), 2 === y) return w;
                (h = d.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ie.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (ke.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = De.test(a) ? a.replace(De, "$1_=" + we++) : a + (ke.test(a) ? "&" : "?") + "_=" + we++)), d.ifModified && (Z.lastModified[a] && w.setRequestHeader("If-Modified-Since", Z.lastModified[a]), Z.etag[a] && w.setRequestHeader("If-None-Match", Z.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (!1 === d.beforeSend.call(p, w, d) || 2 === y)) return w.abort();
                x = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](d[o]);
                if (c = P(Ae, d, i, w)) {
                    w.readyState = 1, h && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        y = 1, c.send(_, s)
                    } catch (t) {
                        if (!(2 > y)) throw t;
                        s(-1, t)
                    }
                } else s(-1, "No Transport");
                return w
            },
            getScript: function(t, i) {
                return Z.get(t, e, i, "script")
            },
            getJSON: function(t, e, i) {
                return Z.get(t, e, i, "json")
            }
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return Z.globalEval(t), t
                }
            }
        }), Z.ajaxPrefilter("script", function(t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), Z.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var i, s = R.head || Z("head")[0] || R.documentElement;
                return {
                    send: function(e, n) {
                        (i = R.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
                            (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
                        }, s.insertBefore(i, s.firstChild)
                    },
                    abort: function() {
                        i && i.onload(e, !0)
                    }
                }
            }
        });
        var He = [],
            Oe = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = He.pop() || Z.expando + "_" + we++;
                return this[t] = !0, t
            }
        }), Z.ajaxPrefilter("json jsonp", function(i, s, n) {
            var o, a, r, l = !1 !== i.jsonp && (Oe.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(i.data) && "data");
            return l || "jsonp" === i.dataTypes[0] ? (o = i.jsonpCallback = Z.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Oe, "$1" + o) : !1 !== i.jsonp && (i.url += (ke.test(i.url) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() {
                return r || Z.error(o + " was not called"), r[0]
            }, i.dataTypes[0] = "json", a = t[o], t[o] = function() {
                r = arguments
            }, n.always(function() {
                t[o] = a, i[o] && (i.jsonpCallback = s.jsonpCallback, He.push(o)), r && Z.isFunction(a) && a(r[0]), r = a = e
            }), "script") : e
        });
        var ze, We, Le = 0,
            Fe = t.ActiveXObject && function() {
                var t;
                for (t in ze) ze[t](e, !0)
            };
        Z.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && N() || function() {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        } : N, We = Z.ajaxSettings.xhr(), Z.support.cors = !!We && "withCredentials" in We, (We = Z.support.ajax = !!We) && Z.ajaxTransport(function(i) {
            if (!i.crossDomain || Z.support.cors) {
                var s;
                return {
                    send: function(n, o) {
                        var a, r, l = i.xhr();
                        if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                            for (r in i.xhrFields) l[r] = i.xhrFields[r];
                        i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (r in n) l.setRequestHeader(r, n[r])
                        } catch (t) {}
                        l.send(i.hasContent && i.data || null), s = function(t, n) {
                            var r, h, c, u;
                            try {
                                if (s && (n || 4 === l.readyState))
                                    if (s = e, a && (l.onreadystatechange = Z.noop, Fe && delete ze[a]), n) 4 !== l.readyState && l.abort();
                                    else {
                                        u = {}, r = l.status, h = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (t) {
                                            c = ""
                                        }
                                        r || !i.isLocal || i.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                                    }
                            } catch (t) {
                                n || o(-1, t)
                            }
                            u && o(r, c, u, h)
                        }, i.async ? 4 === l.readyState ? setTimeout(s) : (a = ++Le, Fe && (ze || (ze = {}, Z(t).unload(Fe)), ze[a] = s), l.onreadystatechange = s) : s()
                    },
                    abort: function() {
                        s && s(e, !0)
                    }
                }
            }
        });
        var Re, je, Be = /^(?:toggle|show|hide)$/,
            qe = RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
            Ye = /queueHooks$/,
            $e = [
                function(t, e, i) {
                    var s, n, o, a, r, l, h, c, u, d = this,
                        p = t.style,
                        f = {},
                        g = [],
                        m = t.nodeType && y(t);
                    i.queue || (null == (c = Z._queueHooks(t, "fx")).unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function() {
                        c.unqueued || u()
                    }), c.unqueued++, d.always(function() {
                        d.always(function() {
                            c.unqueued--, Z.queue(t, "fx").length || c.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === Z.css(t, "display") && "none" === Z.css(t, "float") && (Z.support.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", Z.support.shrinkWrapBlocks || d.always(function() {
                        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                    }));
                    for (n in e)
                        if (a = e[n], Be.exec(a)) {
                            if (delete e[n], l = l || "toggle" === a, a === (m ? "hide" : "show")) continue;
                            g.push(n)
                        }
                    if (o = g.length) {
                        "hidden" in (r = Z._data(t, "fxshow") || Z._data(t, "fxshow", {})) && (m = r.hidden), l && (r.hidden = !m), m ? Z(t).show() : d.done(function() {
                            Z(t).hide()
                        }), d.done(function() {
                            var e;
                            Z._removeData(t, "fxshow");
                            for (e in f) Z.style(t, e, f[e])
                        });
                        for (n = 0; o > n; n++) s = g[n], h = d.createTween(s, m ? r[s] : 0), f[s] = r[s] || Z.style(t, s), s in r || (r[s] = h.start, m && (h.end = h.start, h.start = "width" === s || "height" === s ? 1 : 0))
                    }
                }
            ],
            Ke = {
                "*": [
                    function(t, e) {
                        var i, s, n = this.createTween(t, e),
                            o = qe.exec(e),
                            a = n.cur(),
                            r = +a || 0,
                            l = 1,
                            h = 20;
                        if (o) {
                            if (i = +o[2], "px" !== (s = o[3] || (Z.cssNumber[t] ? "" : "px")) && r) {
                                r = Z.css(n.elem, t, !0) || i || 1;
                                do {
                                    l = l || ".5", r /= l, Z.style(n.elem, t, r + s)
                                } while (l !== (l = n.cur() / a) && 1 !== l && --h)
                            }
                            n.unit = s, n.start = r, n.end = o[1] ? r + (o[1] + 1) * i : i
                        }
                        return n
                    }
                ]
            };
        Z.Animation = Z.extend(E, {
            tweener: function(t, e) {
                Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, s = 0, n = t.length; n > s; s++) i = t[s], Ke[i] = Ke[i] || [], Ke[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? $e.unshift(t) : $e.push(t)
            }
        }), Z.Tween = H, (H.prototype = {
            constructor: H,
            init: function(t, e, i, s, n, o) {
                this.elem = t, this.prop = i, this.easing = n || "swing", this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (Z.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = H.propHooks[this.prop];
                return t && t.get ? t.get(this) : H.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = H.propHooks[this.prop];
                return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
            }
        }).init.prototype = H.prototype, (H.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function(t) {
                    Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }).scrollTop = H.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Z.each(["toggle", "show", "hide"], function(t, e) {
            var i = Z.fn[e];
            Z.fn[e] = function(t, s, n) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, s, n)
            }
        }), Z.fn.extend({
            fadeTo: function(t, e, i, s) {
                return this.filter(y).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, s)
            },
            animate: function(t, e, i, s) {
                var n = Z.isEmptyObject(t),
                    o = Z.speed(e, i, s),
                    a = function() {
                        var e = E(this, Z.extend({}, t), o);
                        a.finish = function() {
                            e.stop(!0)
                        }, (n || Z._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, n || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, i, s) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(s)
                };
                return "string" != typeof t && (s = i, i = t, t = e), i && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        o = Z.timers,
                        a = Z._data(this);
                    if (i) a[i] && a[i].stop && n(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Ye.test(i) && n(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(s), e = !1, o.splice(i, 1));
                    (e || !s) && Z.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = Z._data(this),
                        s = i[t + "queue"],
                        n = i[t + "queueHooks"],
                        o = Z.timers,
                        a = s ? s.length : 0;
                    for (i.finish = !0, Z.queue(this, t, []), n && n.cur && n.cur.finish && n.cur.finish.call(this), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++) s[e] && s[e].finish && s[e].finish.call(this);
                    delete i.finish
                })
            }
        }), Z.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Z.fn[t] = function(t, i, s) {
                return this.animate(e, t, i, s)
            }
        }), Z.speed = function(t, e, i) {
            var s = t && "object" == typeof t ? Z.extend({}, t) : {
                complete: i || !i && e || Z.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !Z.isFunction(e) && e
            };
            return s.duration = Z.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in Z.fx.speeds ? Z.fx.speeds[s.duration] : Z.fx.speeds._default, (null == s.queue || !0 === s.queue) && (s.queue = "fx"), s.old = s.complete, s.complete = function() {
                Z.isFunction(s.old) && s.old.call(this), s.queue && Z.dequeue(this, s.queue)
            }, s
        }, Z.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, Z.timers = [], Z.fx = H.prototype.init, Z.fx.tick = function() {
            var t, i = Z.timers,
                s = 0;
            for (Re = Z.now(); i.length > s; s++)(t = i[s])() || i[s] !== t || i.splice(s--, 1);
            i.length || Z.fx.stop(), Re = e
        }, Z.fx.timer = function(t) {
            t() && Z.timers.push(t) && Z.fx.start()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            je || (je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(je), je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fx.step = {}, Z.expr && Z.expr.filters && (Z.expr.filters.animated = function(t) {
            return Z.grep(Z.timers, function(e) {
                return t === e.elem
            }).length
        }), Z.fn.offset = function(t) {
            if (arguments.length) return t === e ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var i, s, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                a = o && o.ownerDocument;
            return a ? (i = a.documentElement, Z.contains(i, o) ? (typeof o.getBoundingClientRect !== F && (n = o.getBoundingClientRect()), s = z(a), {
                top: n.top + (s.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left: n.left + (s.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
            }) : n) : void 0
        }, Z.offset = {
            setOffset: function(t, e, i) {
                var s = Z.css(t, "position");
                "static" === s && (t.style.position = "relative");
                var n, o, a = Z(t),
                    r = a.offset(),
                    l = Z.css(t, "top"),
                    h = Z.css(t, "left"),
                    c = {},
                    u = {};
                ("absolute" === s || "fixed" === s) && Z.inArray("auto", [l, h]) > -1 ? (u = a.position(), n = u.top, o = u.left) : (n = parseFloat(l) || 0, o = parseFloat(h) || 0), Z.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (c.top = e.top - r.top + n), null != e.left && (c.left = e.left - r.left + o), "using" in e ? e.using.call(t, c) : a.css(c)
            }
        }, Z.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        s = this[0];
                    return "fixed" === Z.css(s, "position") ? e = s.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (i = t.offset()), i.top += Z.css(t[0], "borderTopWidth", !0), i.left += Z.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - Z.css(s, "marginTop", !0),
                        left: e.left - i.left - Z.css(s, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || R.documentElement; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                    return t || R.documentElement
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var s = /Y/.test(i);
            Z.fn[t] = function(n) {
                return Z.access(this, function(t, n, o) {
                    var a = z(t);
                    return o === e ? a ? i in a ? a[i] : a.document.documentElement[n] : t[n] : (a ? a.scrollTo(s ? Z(a).scrollLeft() : o, s ? o : Z(a).scrollTop()) : t[n] = o, e)
                }, t, n, arguments.length, null)
            }
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(t, i) {
            Z.each({
                padding: "inner" + t,
                content: i,
                "": "outer" + t
            }, function(s, n) {
                Z.fn[n] = function(n, o) {
                    var a = arguments.length && (s || "boolean" != typeof n),
                        r = s || (!0 === n || !0 === o ? "margin" : "border");
                    return Z.access(this, function(i, s, n) {
                        var o;
                        return Z.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : n === e ? Z.css(i, s, r) : Z.style(i, s, n, r)
                    }, i, a ? n : e, a, null)
                }
            })
        }), t.jQuery = t.$ = Z, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return Z
        })
    }(window),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, function() {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, s)
        }

        function s() {
            t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function n(e, i) {
            t.extend(e, i);
            for (var s in i) null == i[s] && (e[s] = i[s]);
            return e
        }

        function o(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.ui = t.ui || {}, t.ui.version = "1.12.0";
        var a = 0,
            r = Array.prototype.slice;
        t.cleanData = function(e) {
                return function(i) {
                    var s, n, o;
                    for (o = 0; null != (n = i[o]); o++) try {
                        (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
                    } catch (t) {}
                    e(i)
                }
            }(t.cleanData), t.widget = function(e, i, s) {
                var n, o, a, r = {},
                    l = e.split(".")[0],
                    h = l + "-" + (e = e.split(".")[1]);
                return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) {
                    return !!t.data(e, h)
                }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
                }, t.extend(o, n, {
                    version: s.version,
                    _proto: t.extend({}, s),
                    _childConstructors: []
                }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
                    return t.isFunction(s) ? void(r[e] = function() {
                        function t() {
                            return i.prototype[e].apply(this, arguments)
                        }

                        function n(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function() {
                            var e, i = this._super,
                                o = this._superApply;
                            return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                        }
                    }()) : void(r[e] = s)
                }), o.prototype = t.widget.extend(a, {
                    widgetEventPrefix: n ? a.widgetEventPrefix || e : e
                }, r, {
                    constructor: o,
                    namespace: l,
                    widgetName: e,
                    widgetFullName: h
                }), n ? (t.each(n._childConstructors, function(e, i) {
                    var s = i.prototype;
                    t.widget(s.namespace + "." + s.widgetName, o, i._proto)
                }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
            }, t.widget.extend = function(e) {
                for (var i, s, n = r.call(arguments, 1), o = 0, a = n.length; a > o; o++)
                    for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
                return e
            }, t.widget.bridge = function(e, i) {
                var s = i.prototype.widgetFullName || e;
                t.fn[e] = function(n) {
                    var o = "string" == typeof n,
                        a = r.call(arguments, 1),
                        l = this;
                    return o ? this.each(function() {
                        var i, o = t.data(this, s);
                        return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
                    }) : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
                        var e = t.data(this, s);
                        e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
                    })), l
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, i) {
                    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === i && this.destroy()
                        }
                    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    var e = this;
                    this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                        e._removeClass(i, t)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var s, n, o, a = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                            for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                            if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                            n[e] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            a[e] = i
                        }
                    return this._setOptions(a), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                },
                _setOptionClasses: function(e) {
                    var i, s, n;
                    for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                        element: s,
                        keys: i,
                        classes: e,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(e) {
                    function i(i, o) {
                        var a, r;
                        for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
                    }
                    var s = [],
                        n = this;
                    return (e = t.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, e)).keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
                },
                _removeClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !1)
                },
                _addClass: function(t, e, i) {
                    return this._toggleClass(t, e, i, !0)
                },
                _toggleClass: function(t, e, i, s) {
                    s = "boolean" == typeof s ? s : i;
                    var n = "string" == typeof t || null === t,
                        o = {
                            extra: n ? e : i,
                            keys: n ? t : e,
                            element: n ? this.element : t,
                            add: s
                        };
                    return o.element.toggleClass(this._classes(o), s), this
                },
                _on: function(e, i, s) {
                    var n, o = this;
                    "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                        function r() {
                            return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                        }
                        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = s.match(/^([\w:-]*)\s*(.*)$/),
                            h = l[1] + o.eventNamespace,
                            c = l[2];
                        c ? n.on(h, c, r) : i.on(h, r)
                    })
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                },
                _delay: function(t, e) {
                    var i = this;
                    return setTimeout(function() {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                    }, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, i, s) {
                    var n, o, a = this.options[e];
                    if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                        for (n in o) n in i || (i[n] = o[n]);
                    return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, i) {
                t.Widget.prototype["_" + e] = function(s, n, o) {
                    "string" == typeof n && (n = {
                        effect: n
                    });
                    var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                    "number" == typeof(n = n || {}) && (n = {
                        duration: n
                    }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                        t(this)[e](), o && o.call(s[0]), i()
                    })
                }
            }), t.widget,
            function() {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }
                var s, n, o = Math.max,
                    a = Math.abs,
                    r = Math.round,
                    l = /left|center|right/,
                    h = /top|center|bottom/,
                    c = /[\+\-]\d+(\.[\d]+)?%?/,
                    u = /^\w+/,
                    d = /%$/,
                    p = t.fn.position;
                n = function() {
                    var e = t("<div>").css("position", "absolute").appendTo("body").offset({
                            top: 1.5,
                            left: 1.5
                        }),
                        i = 1.5 === e.offset().top;
                    return e.remove(), n = function() {
                        return i
                    }, i
                }, t.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== s) return s;
                        var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            o = n.children()[0];
                        return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                    },
                    getScrollInfo: function(e) {
                        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                        return {
                            width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                            height: n ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(e) {
                        var i = t(e || window),
                            s = t.isWindow(i[0]),
                            n = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: s,
                            isDocument: n,
                            offset: !s && !n ? t(e).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: i.outerWidth(),
                            height: i.outerHeight()
                        }
                    }
                }, t.fn.position = function(s) {
                    if (!s || !s.of) return p.apply(this, arguments);
                    s = t.extend({}, s);
                    var d, f, g, m, v, _, b = t(s.of),
                        y = t.position.getWithinInfo(s.within),
                        x = t.position.getScrollInfo(y),
                        w = (s.collision || "flip").split(" "),
                        k = {};
                    return _ = function(e) {
                        var i = e[0];
                        return 9 === i.nodeType ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: 0,
                                left: 0
                            }
                        } : t.isWindow(i) ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: e.scrollTop(),
                                left: e.scrollLeft()
                            }
                        } : i.preventDefault ? {
                            width: 0,
                            height: 0,
                            offset: {
                                top: i.pageY,
                                left: i.pageX
                            }
                        } : {
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            offset: e.offset()
                        }
                    }(b), b[0].preventDefault && (s.at = "left top"), f = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
                        var t, e, i = (s[this] || "").split(" ");
                        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), e = c.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
                    }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? v.left += f : "center" === s.at[0] && (v.left += f / 2), "bottom" === s.at[1] ? v.top += g : "center" === s.at[1] && (v.top += g / 2), d = e(k.at, f, g), v.left += d[0], v.top += d[1], this.each(function() {
                        var l, h, c = t(this),
                            u = c.outerWidth(),
                            p = c.outerHeight(),
                            _ = i(this, "marginLeft"),
                            C = i(this, "marginTop"),
                            D = u + _ + i(this, "marginRight") + x.width,
                            T = p + C + i(this, "marginBottom") + x.height,
                            I = t.extend({}, v),
                            S = e(k.my, c.outerWidth(), c.outerHeight());
                        "right" === s.my[0] ? I.left -= u : "center" === s.my[0] && (I.left -= u / 2), "bottom" === s.my[1] ? I.top -= p : "center" === s.my[1] && (I.top -= p / 2), I.left += S[0], I.top += S[1], n() || (I.left = r(I.left), I.top = r(I.top)), l = {
                            marginLeft: _,
                            marginTop: C
                        }, t.each(["left", "top"], function(e, i) {
                            t.ui.position[w[e]] && t.ui.position[w[e]][i](I, {
                                targetWidth: f,
                                targetHeight: g,
                                elemWidth: u,
                                elemHeight: p,
                                collisionPosition: l,
                                collisionWidth: D,
                                collisionHeight: T,
                                offset: [d[0] + S[0], d[1] + S[1]],
                                my: s.my,
                                at: s.at,
                                within: y,
                                elem: c
                            })
                        }), s.using && (h = function(t) {
                            var e = m.left - I.left,
                                i = e + f - u,
                                n = m.top - I.top,
                                r = n + g - p,
                                l = {
                                    target: {
                                        element: b,
                                        left: m.left,
                                        top: m.top,
                                        width: f,
                                        height: g
                                    },
                                    element: {
                                        element: c,
                                        left: I.left,
                                        top: I.top,
                                        width: u,
                                        height: p
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                                };
                            u > f && f > a(e + i) && (l.horizontal = "center"), p > g && g > a(n + r) && (l.vertical = "middle"), l.important = o(a(e), a(i)) > o(a(n), a(r)) ? "horizontal" : "vertical", s.using.call(this, t, l)
                        }), c.offset(t.extend(I, {
                            using: h
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, s = e.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                l = n - r,
                                h = r + e.collisionWidth - a - n;
                            e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                        },
                        top: function(t, e) {
                            var i, s = e.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                l = n - r,
                                h = r + e.collisionHeight - a - n;
                            e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, s, n = e.within,
                                o = n.offset.left + n.scrollLeft,
                                r = n.width,
                                l = n.isWindow ? n.scrollLeft : n.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - r - l,
                                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - r - o) || a(c) > i) && (t.left += d + p + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > a(s)) && (t.left += d + p + f)
                        },
                        top: function(t, e) {
                            var i, s, n = e.within,
                                o = n.offset.top + n.scrollTop,
                                r = n.height,
                                l = n.isWindow ? n.scrollTop : n.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - r - l,
                                d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                f = -2 * e.offset[1];
                            0 > c ? (0 > (s = t.top + d + p + f + e.collisionHeight - r - o) || a(c) > s) && (t.top += d + p + f) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > a(i)) && (t.top += d + p + f)
                        }
                    },
                    flipfit: {
                        left: function() {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }(), t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(i) {
                        return !!t.data(i, e)
                    }
                }) : function(e, i, s) {
                    return !!t.data(e, s[3])
                }
            }), t.fn.extend({
                disableSelection: function() {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function() {
                        return this.on(t + ".ui-disableSelection", function(t) {
                            t.preventDefault()
                        })
                    }
                }(),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            });
        var l = "ui-effects-",
            h = "ui-effects-style",
            c = "ui-effects-animated",
            u = t;
        t.effects = {
                effect: {}
            },
            function(t, e) {
                function i(t, e, i) {
                    var s = c[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
                }

                function s(i) {
                    var s = l(),
                        n = s._rgba = [];
                    return i = i.toLowerCase(), p(r, function(t, o) {
                        var a, r = o.re.exec(i),
                            l = r && o.parse(r),
                            c = o.space || "rgba";
                        return l ? (a = s[c](l), s[h[c].cache] = a[h[c].cache], n = s._rgba = a._rgba, !1) : e
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
                }

                function n(t, e, i) {
                    return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
                    r = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    l = t.Color = function(e, i, s, n) {
                        return new t.Color.fn.parse(e, i, s, n)
                    },
                    h = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    c = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    u = l.support = {},
                    d = t("<p>")[0],
                    p = t.each;
                d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), l.fn = t.extend(l.prototype, {
                    parse: function(n, a, r, c) {
                        if (n === e) return this._rgba = [null, null, null, null], this;
                        (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                        var u = this,
                            d = t.type(n),
                            f = this._rgba = [];
                        return a !== e && (n = [n, a, r, c], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (p(h.rgba.props, function(t, e) {
                            f[e.idx] = i(n[e.idx], e)
                        }), this) : "object" === d ? (p(h, n instanceof l ? function(t, e) {
                            n[e.cache] && (u[e.cache] = n[e.cache].slice())
                        } : function(e, s) {
                            var o = s.cache;
                            p(s.props, function(t, e) {
                                if (!u[o] && s.to) {
                                    if ("alpha" === t || null == n[t]) return;
                                    u[o] = s.to(u._rgba)
                                }
                                u[o][e.idx] = i(n[t], e, !0)
                            }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                        }), this) : e
                    },
                    is: function(t) {
                        var i = l(t),
                            s = !0,
                            n = this;
                        return p(h, function(t, o) {
                            var a, r = i[o.cache];
                            return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], p(o.props, function(t, i) {
                                return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                            })), s
                        }), s
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return p(h, function(i, s) {
                            e[s.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var s = l(t),
                            n = s._space(),
                            o = h[n],
                            a = 0 === this.alpha() ? l("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            u = r.slice();
                        return s = s[o.cache], p(o.props, function(t, n) {
                            var o = n.idx,
                                a = r[o],
                                l = s[o],
                                h = c[n.type] || {};
                            null !== l && (null === a ? u[o] = l : (h.mod && (l - a > h.mod / 2 ? a += h.mod : a - l > h.mod / 2 && (a -= h.mod)), u[o] = i((l - a) * e + a, n)))
                        }), this[n](u)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            s = i.pop(),
                            n = l(e)._rgba;
                        return l(t.map(i, function(t, e) {
                            return (1 - s) * n[e] + s * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function(e) {
                        var i = this._rgba.slice(),
                            s = i.pop();
                        return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                            return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, s = t[0] / 255,
                        n = t[1] / 255,
                        o = t[2] / 255,
                        a = t[3],
                        r = Math.max(s, n, o),
                        l = Math.min(s, n, o),
                        h = r - l,
                        c = r + l,
                        u = .5 * c;
                    return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
                }, h.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        s = t[2],
                        o = t[3],
                        a = .5 >= s ? s * (1 + i) : s + i - s * i,
                        r = 2 * s - a;
                    return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
                }, p(h, function(s, n) {
                    var o = n.props,
                        r = n.cache,
                        h = n.to,
                        c = n.from;
                    l.fn[s] = function(s) {
                        if (h && !this[r] && (this[r] = h(this._rgba)), s === e) return this[r].slice();
                        var n, a = t.type(s),
                            u = "array" === a || "object" === a ? s : arguments,
                            d = this[r].slice();
                        return p(o, function(t, e) {
                            var s = u["object" === a ? t : e.idx];
                            null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                        }), c ? (n = l(c(d)), n[r] = d, n) : l(d)
                    }, p(o, function(e, i) {
                        l.fn[e] || (l.fn[e] = function(n) {
                            var o, r = t.type(n),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                                h = this[l](),
                                c = h[i.idx];
                            return "undefined" === r ? c : ("function" === r && (n = n.call(this, c), r = t.type(n)), null == n && i.empty ? this : ("string" === r && (o = a.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), h[i.idx] = n, this[l](h)))
                        })
                    })
                }), l.hook = function(e) {
                    var i = e.split(" ");
                    p(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, n) {
                                var o, a, r = "";
                                if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                    if (n = l(o || n), !u.rgba && 1 !== n._rgba[3]) {
                                        for (a = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === r || "transparent" === r) && a && a.style;) try {
                                            r = t.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (t) {}
                                        n = n.blend(r && "transparent" !== r ? r : "_default")
                                    }
                                    n = n.toRgbaString()
                                }
                                try {
                                    e.style[i] = n
                                } catch (t) {}
                            }
                        }, t.fx.step[i] = function(e) {
                            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return p(["Top", "Right", "Bottom", "Left"], function(i, s) {
                            e["border" + s + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(u),
            function() {
                function e(e) {
                    var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (n && n.length && n[0] && n[n[0]])
                        for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                    else
                        for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                    return o
                }
                var i = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                    t.fx.step[i] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (u.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(n, o, a, r) {
                    var l = t.speed(o, a, r);
                    return this.queue(function() {
                        var o, a = t(this),
                            r = a.attr("class") || "",
                            h = l.children ? a.find("*").addBack() : a;
                        h = h.map(function() {
                            return {
                                el: t(this),
                                start: e(this)
                            }
                        }), (o = function() {
                            t.each(i, function(t, e) {
                                n[e] && a[e + "Class"](n[e])
                            })
                        })(), h = h.map(function() {
                            return this.end = e(this.el[0]), this.diff = function(e, i) {
                                var n, o, a = {};
                                for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o));
                                return a
                            }(this.start, this.end), this
                        }), a.attr("class", r), h = h.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                s = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, s), i.promise()
                        }), t.when.apply(t, h.get()).done(function() {
                            o(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(i, s, n, o) {
                            return s ? t.effects.animateClass.call(this, {
                                add: i
                            }, s, n, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(i, s, n, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, s, n, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(e) {
                        return function(i, s, n, o, a) {
                            return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                                add: i
                            } : {
                                remove: i
                            }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, s, n, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, i, s, n, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, s, n, o)
                    }
                })
            }(),
            function() {
                function e(e, i, s, n) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
                }

                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
                }

                function s(t, e) {
                    var i = e.outerWidth(),
                        s = e.outerHeight(),
                        n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
                    return {
                        top: parseFloat(n[1]) || 0,
                        right: "auto" === n[2] ? i : parseFloat(n[2]),
                        bottom: "auto" === n[3] ? s : parseFloat(n[3]),
                        left: parseFloat(n[4]) || 0
                    }
                }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
                    return function(i) {
                        return !!t(i).data(c) || e(i)
                    }
                }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                    save: function(t, e) {
                        for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(l + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(l + e[s]), t.css(e[s], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                float: e.css("float")
                            },
                            s = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            n = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (t) {
                            o = document.body
                        }
                        return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                            i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(n), s.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                    }
                }), t.extend(t.effects, {
                    version: "1.12.0",
                    define: function(e, i, s) {
                        return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
                    },
                    scaledDimensions: function(t, e, i) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                            n = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * n,
                            width: t.width() * s,
                            outerHeight: t.outerHeight() * n,
                            outerWidth: t.outerWidth() * s
                        }
                    },
                    clipToBox: function(t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function(t, e, i) {
                        var s = t.queue();
                        e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
                    },
                    saveStyle: function(t) {
                        t.data(h, t[0].style.cssText)
                    },
                    restoreStyle: function(t) {
                        t[0].style.cssText = t.data(h) || "", t.removeData(h)
                    },
                    mode: function(t, e) {
                        var i = t.is(":hidden");
                        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function(t, e) {
                        var i, s;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                s = 0;
                                break;
                            case "center":
                                s = .5;
                                break;
                            case "right":
                                s = 1;
                                break;
                            default:
                                s = t[1] / e.width
                        }
                        return {
                            x: s,
                            y: i
                        }
                    },
                    createPlaceholder: function(e) {
                        var i, s = e.css("position"),
                            n = e.position();
                        return e.css({
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight"),
                            float: e.css("float")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(l + "placeholder", i)), e.css({
                            position: s,
                            left: n.left,
                            top: n.top
                        }), i
                    },
                    removePlaceholder: function(t) {
                        var e = l + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e))
                    },
                    cleanUp: function(e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                    },
                    setTransition: function(e, i, s, n) {
                        return n = n || {}, t.each(i, function(t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (n[i] = o[0] * s + o[1])
                        }), n
                    }
                }), t.fn.extend({
                    effect: function() {
                        function i(e) {
                            function i() {
                                t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e()
                            }
                            var a = t(this);
                            s.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === s.mode ? (a[h](), i()) : n.call(a[0], s, function() {
                                a.removeData(c), t.effects.cleanUp(a), "hide" === s.mode && a.hide(), i()
                            }) : (a.is(":hidden") ? "hide" === h : "show" === h) ? (a[h](), i()) : n.call(a[0], s, i)
                        }
                        var s = e.apply(this, arguments),
                            n = t.effects.effect[s.effect],
                            o = n.mode,
                            a = s.queue,
                            r = a || "fx",
                            l = s.complete,
                            h = s.mode,
                            u = [],
                            d = function(e) {
                                var i = t(this),
                                    s = t.effects.mode(i, h) || o;
                                i.data(c, !0), u.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                            };
                        return t.fx.off || !n ? h ? this[h](s.duration, l) : this.each(function() {
                            l && l.call(this)
                        }) : !1 === a ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
                    },
                    show: function(t) {
                        return function(s) {
                            if (i(s)) return t.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return n.mode = "show", this.effect.call(this, n)
                        }
                    }(t.fn.show),
                    hide: function(t) {
                        return function(s) {
                            if (i(s)) return t.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return n.mode = "hide", this.effect.call(this, n)
                        }
                    }(t.fn.hide),
                    toggle: function(t) {
                        return function(s) {
                            if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                            var n = e.apply(this, arguments);
                            return n.mode = "toggle", this.effect.call(this, n)
                        }
                    }(t.fn.toggle),
                    cssUnit: function(e) {
                        var i = this.css(e),
                            s = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                        }), s
                    },
                    cssClip: function(t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
                    },
                    transfer: function(e, i) {
                        var s = t(this),
                            n = t(e.to),
                            o = "fixed" === n.css("position"),
                            a = t("body"),
                            r = o ? a.scrollTop() : 0,
                            l = o ? a.scrollLeft() : 0,
                            h = n.offset(),
                            c = {
                                top: h.top - r,
                                left: h.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth()
                            },
                            u = s.offset(),
                            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                top: u.top - r,
                                left: u.left - l,
                                height: s.innerHeight(),
                                width: s.innerWidth(),
                                position: o ? "fixed" : "absolute"
                            }).animate(c, e.duration, e.easing, function() {
                                d.remove(), t.isFunction(i) && i()
                            })
                    }
                }), t.fx.step.clip = function(e) {
                    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                        top: e.pos * (e.end.top - e.start.top) + e.start.top,
                        right: e.pos * (e.end.right - e.start.right) + e.start.right,
                        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                        left: e.pos * (e.end.left - e.start.left) + e.start.left
                    })
                }
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                    e[i] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4;
                            ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                })
            }();
        t.effects;
        t.effects.define("blind", "hide", function(e, i) {
            var s = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                n = t(this),
                o = e.direction || "up",
                a = n.cssClip(),
                r = {
                    clip: t.extend({}, a)
                },
                l = t.effects.createPlaceholder(n);
            r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("bounce", function(e, i) {
            var s, n, o, a = t(this),
                r = e.mode,
                l = "hide" === r,
                h = "show" === r,
                c = e.direction || "up",
                u = e.distance,
                d = e.times || 5,
                p = 2 * d + (h || l ? 1 : 0),
                f = e.duration / p,
                g = e.easing,
                m = "up" === c || "down" === c ? "top" : "left",
                v = "up" === c || "left" === c,
                _ = 0,
                b = a.queue().length;
            for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && (n = {
                opacity: 1
            }, n[m] = o, a.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(n, f, g)), l && (u /= Math.pow(2, d - 1)), (n = {})[m] = o; d > _; _++) s = {}, s[m] = (v ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = l ? 2 * u : u / 2;
            l && (s = {
                opacity: 0
            }, s[m] = (v ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
        }), t.effects.define("clip", "hide", function(e, i) {
            var s, n = {},
                o = t(this),
                a = e.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                h = r || "vertical" === a;
            s = o.cssClip(), n.clip = {
                top: h ? (s.bottom - s.top) / 2 : s.top,
                right: l ? (s.right - s.left) / 2 : s.right,
                bottom: h ? (s.bottom - s.top) / 2 : s.bottom,
                left: l ? (s.right - s.left) / 2 : s.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("drop", "hide", function(e, i) {
            var s, n = t(this),
                o = "show" === e.mode,
                a = e.direction || "left",
                r = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a ? "-=" : "+=",
                h = "+=" === l ? "-=" : "+=",
                c = {
                    opacity: 0
                };
            t.effects.createPlaceholder(n), s = e.distance || n["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = l + s, o && (n.css(c), c[r] = h + s, c.opacity = 1), n.animate(c, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("explode", "hide", function(e, i) {
            function s() {
                v.push(this), v.length === c * u && (d.css({
                    visibility: "visible"
                }), t(v).remove(), i())
            }
            var n, o, a, r, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                u = c,
                d = t(this),
                p = "show" === e.mode,
                f = d.show().css("visibility", "hidden").offset(),
                g = Math.ceil(d.outerWidth() / u),
                m = Math.ceil(d.outerHeight() / c),
                v = [];
            for (n = 0; c > n; n++)
                for (r = f.top + n * m, h = n - (c - 1) / 2, o = 0; u > o; o++) a = f.left + o * g, l = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * g,
                    top: -n * m
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: g,
                    height: m,
                    left: a + (p ? l * g : 0),
                    top: r + (p ? h * m : 0),
                    opacity: p ? 0 : 1
                }).animate({
                    left: a + (p ? 0 : l * g),
                    top: r + (p ? 0 : h * m),
                    opacity: p ? 1 : 0
                }, e.duration || 500, e.easing, s)
        }), t.effects.define("fade", "toggle", function(e, i) {
            var s = "show" === e.mode;
            t(this).css("opacity", s ? 0 : 1).animate({
                opacity: s ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("fold", "hide", function(e, i) {
            var s = t(this),
                n = e.mode,
                o = "show" === n,
                a = "hide" === n,
                r = e.size || 15,
                l = /([0-9]+)%/.exec(r),
                h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
                c = e.duration / 2,
                u = t.effects.createPlaceholder(s),
                d = s.cssClip(),
                p = {
                    clip: t.extend({}, d)
                },
                f = {
                    clip: t.extend({}, d)
                },
                g = [d[h[0]], d[h[1]]],
                m = s.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * g[a ? 0 : 1]), p.clip[h[0]] = r, f.clip[h[0]] = r, f.clip[h[1]] = 0, o && (s.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), s.queue(function(i) {
                u && u.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i()
            }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(s, m, 4)
        }), t.effects.define("highlight", "show", function(e, i) {
            var s = t(this),
                n = {
                    backgroundColor: s.css("backgroundColor")
                };
            "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(n, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("size", function(e, i) {
            var s, n, o, a = t(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = e.mode,
                u = "effect" !== c,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = a.css("position"),
                g = a.position(),
                m = t.effects.scaledDimensions(a),
                v = e.from || m,
                _ = e.to || t.effects.scaledDimensions(a, 0);
            t.effects.createPlaceholder(a), "show" === c && (o = v, v = _, _ = o), n = {
                from: {
                    y: v.height / m.height,
                    x: v.width / m.width
                },
                to: {
                    y: _.height / m.height,
                    x: _.width / m.width
                }
            }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (v = t.effects.setTransition(a, l, n.from.y, v), _ = t.effects.setTransition(a, l, n.to.y, _)), n.from.x !== n.to.x && (v = t.effects.setTransition(a, h, n.from.x, v), _ = t.effects.setTransition(a, h, n.to.x, _))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (v = t.effects.setTransition(a, r, n.from.y, v), _ = t.effects.setTransition(a, r, n.to.y, _)), p && (s = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left, _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left), a.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
                var i = t(this),
                    s = t.effects.scaledDimensions(i),
                    o = {
                        height: s.height * n.from.y,
                        width: s.width * n.from.x,
                        outerHeight: s.outerHeight * n.from.y,
                        outerWidth: s.outerWidth * n.from.x
                    },
                    a = {
                        height: s.height * n.to.y,
                        width: s.width * n.to.x,
                        outerHeight: s.height * n.to.y,
                        outerWidth: s.width * n.to.x
                    };
                n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), a = t.effects.setTransition(i, l, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, h, n.from.x, o), a = t.effects.setTransition(i, h, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                    u && t.effects.restoreStyle(i)
                })
            })), a.animate(_, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    var e = a.offset();
                    0 === _.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
                }
            })
        }), t.effects.define("scale", function(e, i) {
            var s = t(this),
                n = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
                a = t.extend(!0, {
                    from: t.effects.scaledDimensions(s),
                    to: t.effects.scaledDimensions(s, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
        }), t.effects.define("puff", "hide", function(e, i) {
            var s = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, s, i)
        }), t.effects.define("pulsate", "show", function(e, i) {
            var s = t(this),
                n = e.mode,
                o = "show" === n,
                a = o || "hide" === n,
                r = 2 * (e.times || 5) + (a ? 1 : 0),
                l = e.duration / r,
                h = 0,
                c = 1,
                u = s.queue().length;
            for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1); r > c; c++) s.animate({
                opacity: h
            }, l, e.easing), h = 1 - h;
            s.animate({
                opacity: h
            }, l, e.easing), s.queue(i), t.effects.unshift(s, u, r + 1)
        }), t.effects.define("shake", function(e, i) {
            var s = 1,
                n = t(this),
                o = e.direction || "left",
                a = e.distance || 20,
                r = e.times || 3,
                l = 2 * r + 1,
                h = Math.round(e.duration / l),
                c = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                g = n.queue().length;
            for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, h, e.easing); r > s; s++) n.animate(p, h, e.easing).animate(f, h, e.easing);
            n.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(n, g, l + 1)
        }), t.effects.define("slide", "show", function(e, i) {
            var s, n, o = t(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = e.mode,
                l = e.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        });
        !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
            t(this).transfer(e, i)
        }), t.ui.focusable = function(e, i) {
            var s, n, o, a, r, l = e.nodeName.toLowerCase();
            return "area" === l ? (s = e.parentNode, n = s.name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !e.disabled) && (r = t(e).closest("fieldset")[0]) && (a = !r.disabled) : a = "a" === l ? e.href || i : i, a && t(e).is(":visible") && function(t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "hidden" !== e
            }(t(e)))
        }, t.extend(t.expr[":"], {
            focusable: function(e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }), t.ui.focusable, t.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }, t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function s(e, i, s, o) {
                return t.each(n, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, s(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, s(this, e, !0, n) + "px")
                })
            }
        }), t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, t.ui.escapeSelector = function() {
            var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
            return function(e) {
                return e.replace(t, "\\$1")
            }
        }(), t.fn.labels = function() {
            var e, i, s, n, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
        }, t.fn.scrollParent = function(e) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var e = t(this);
                    return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    s = null != i;
                return (!s || i >= 0) && t.ui.focusable(e, s)
            }
        }), t.fn.extend({
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.widget("ui.accordion", {
            version: "1.12.0",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e, i, s = this.options.icons;
                s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[s - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var e = this.options;
                this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var e, i = this.options,
                    s = i.heightStyle,
                    n = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        s = e.next(),
                        n = s.uniqueId().attr("id");
                    e.attr("aria-controls", n), s.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                    var i = t(this),
                        s = i.css("position");
                    "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                }).height(e))
            },
            _activate: function(e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function(e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(e) {
                var i, s, n = this.options,
                    o = this.active,
                    a = t(e.currentTarget),
                    r = a[0] === o[0],
                    l = r && n.collapsible,
                    h = l ? t() : a.next(),
                    c = {
                        oldHeader: o,
                        oldPanel: o.next(),
                        newHeader: l ? t() : a,
                        newPanel: h
                    };
                e.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", e, c) || (n.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel,
                    s = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                    "aria-hidden": "true"
                }), s.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && s.length ? s.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function() {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, e, i) {
                var s, n, o, a = this,
                    r = 0,
                    l = t.css("box-sizing"),
                    h = t.length && (!e.length || t.index() < e.index()),
                    c = this.options.animate || {},
                    u = h && c.down || c,
                    d = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: n,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: n,
                    complete: d,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.ui.safeActiveElement = function(t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e
        }, t.widget("ui.menu", {
            version: "1.12.0",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(e) {
                        var i = t(e.target),
                            s = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item"),
                                s = t(e.currentTarget);
                            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function(e) {
                var i, s, n, o, a = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        a = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                a && e.preventDefault()
            },
            _activate: function(t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i, s, n, o = this,
                    a = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this),
                        i = e.prev(),
                        s = t("<span>").data("ui-menu-submenu-caret", !0);
                    o._addClass(s, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                    var e = t(this);
                    o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
                }), n = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function(t, e) {
                var i, s, n;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var i, s, n, o, a, r;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var s;
                this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
            },
            nextPage: function(e) {
                var i, s, n;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return 0 > (i = t(this)).offset().top - s - n
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var i, s, n;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return (i = t(this)).offset().top - s + n > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function(e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    s = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), t.widget("ui.autocomplete", {
            version: "1.12.0",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === n,
                    a = "input" === n;
                this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                        e = !1, s = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (n.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", n);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", n);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", n);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", n);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(s) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                        if (!i) {
                            var n = t.ui.keyCode;
                            switch (s.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", s);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", s);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", s);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", s)
                            }
                        }
                    },
                    input: function(t) {
                        return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(e, i) {
                        var s, n;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: n
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), void((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))))
                    },
                    menuselect: function(e, i) {
                        var s = i.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                            this.previous = n, this.selectedItem = s
                        })), !1 !== this._trigger("select", e, {
                            item: s
                        }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                    }
                }), this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function(t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function() {
                var e, i, s = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                    s(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                    s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            n(t)
                        },
                        error: function() {
                            n([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = ++this.requestIndex;
                return t.proxy(function(t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function(e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var s = this;
                t.each(i, function(t, i) {
                    s._renderItemData(e, i)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            },
            _isContentEditable: function(t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function(t) {
                    return s.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        }), t.ui.autocomplete;
        var d = /ui-corner-([a-z]){2,6}/g;
        t.widget("ui.controlgroup", {
            version: "1.12.0",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function() {
                this._enhance()
            },
            _enhance: function() {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function() {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function() {
                var e = this,
                    i = [];
                t.each(this.options.items, function(s, n) {
                    var o, a = {};
                    return n ? "controlgroupLabel" === s ? ((o = e.element.find(n)).each(function() {
                        var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (e["_" + s + "Options"] && (a = e["_" + s + "Options"]("middle")), e.element.find(n).each(function() {
                        var n = t(this),
                            o = n[s]("instance"),
                            r = t.widget.extend({}, a);
                        if ("button" !== s || !n.parent(".ui-spinner").length) {
                            o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                            var l = n[s]("widget");
                            t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
                        }
                    }))) : void 0
                }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function(e) {
                this.childWidgets.each(function() {
                    var i = t(this).data("ui-controlgroup-data");
                    i && i[e] && i[e]()
                })
            },
            _updateCornerClass: function(t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
            },
            _buildSimpleOptions: function(t, e) {
                var i = "vertical" === this.options.direction,
                    s = {
                        classes: {}
                    };
                return s.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], s
            },
            _spinnerOptions: function(t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function(t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function(e, i) {
                var s = {};
                return t.each(e, function(t) {
                    var n = i.options.classes[t] || "";
                    n = n.replace(d, "").trim(), s[t] = (n + " " + e[t]).replace(/\s+/g, " ")
                }), s
            },
            _setOption: function(t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function() {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
                    var n = e[s]().data("ui-controlgroup-data");
                    if (n && i["_" + n.widgetName + "Options"]) {
                        var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                        o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                    } else i._updateCornerClass(e[s](), s)
                }), this._callChildMethod("refresh"))
            }
        }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.0",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function() {
                var e, i, s = this,
                    n = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element).each(function() {
                    s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                }), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n
            },
            _create: function() {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function() {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function() {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function() {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function() {
                this._updateIcon(this.element[0].checked)
            },
            widget: function() {
                return this.label
            },
            _getRadioGroup: function() {
                var e = this.element[0].name,
                    i = "input[name='" + t.ui.escapeSelector(e) + "']";
                return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
                    return 0 === t(this).form().length
                })).not(this.element) : t([])
            },
            _toggleClasses: function() {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function(t, e) {
                return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
            },
            _updateIcon: function(e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function() {
                this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(), this.label.append(this.options.label)
            },
            refresh: function() {
                var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                    disabled: e
                })
            }
        }]), t.ui.checkboxradio, t.widget("ui.button", {
            version: "1.12.0",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function() {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function() {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function(e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function() {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function() {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function(e, i) {
                var s = "iconPosition" !== e,
                    n = s ? this.options.iconPosition : i,
                    o = "top" === n || "bottom" === n;
                this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
            },
            _destroy: function() {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function(t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function(t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function(t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function(t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip()
            }
        }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            },
            _setOption: function(t, e) {
                return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), t.fn.button = function(e) {
            return function() {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }
        }(t.fn.button), t.fn.buttonset = function() {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        }), t.ui.button, t.extend(t.ui, {
            datepicker: {
                version: "1.12.0"
            }
        });
        var p;
        t.extend(e.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return n(this._defaults, t || {}), this
            },
            _attachDatepicker: function(e, i) {
                var s, n, o;
                n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
            },
            _newInst: function(e, s) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: s,
                    dpDiv: s ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var s = t(e);
                i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var s, n, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: n,
                    title: n
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: n,
                    title: n
                }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, s, n, o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) && (e = function(t) {
                        for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                        return s
                    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var s = t(e);
                s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, s, o, a) {
                var r, l, h, c, u, d = this._dialogInst;
                return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), n(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function(e) {
                var i, s = t(e),
                    n = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), p === n && (p = null))
            },
            _enableDatepicker: function(e) {
                var i, s, n = t(e),
                    o = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var i, s, n = t(e),
                    o = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; this._disabledInputs.length > e; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return t.data(e, "datepicker")
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, i, s) {
                var o, a, r, l, h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (o = i || {}, "string" == typeof i && (o = {}, o[i] = s), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), n(h.settings, o), null !== r && void 0 !== o.dateFormat && void 0 === o.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var i, s, n, o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), a = !1;
                        break;
                    case 13:
                        return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        a = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
                a && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, s, n = t.datepicker._getInst(e.target);
                return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
            },
            _doKeyUp: function(e) {
                var i = t.datepicker._getInst(e.target);
                if (i.input.val() !== i.lastVal) try {
                    t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
                } catch (t) {}
                return !0
            },
            _showDatepicker: function(e) {
                if ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                    var i, s, o, a, r, l, h;
                    i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                        return !(a |= "fixed" === t(this).css("position"))
                    }), r = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                        display: "none",
                        left: r.left + "px",
                        top: r.top + "px"
                    }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) {
                        for (var e, i; t.length && t[0] !== document;) {
                            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                            t = t.parent()
                        }
                        return 0
                    }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4, p = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e),
                    o = n[1],
                    a = e.dpDiv.find("." + this._dayOverClass + " a");
                a.length > 0 && s.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, s) {
                var n = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function(e) {
                for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, s, n, o, a = this._curInst;
                !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
                    t.datepicker._tidyDialog(a)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        s = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, s) {
                var n = t(e),
                    o = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
            },
            _gotoToday: function(e) {
                var i, s = t(e),
                    n = this._getInst(s[0]);
                this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
            },
            _selectMonthYear: function(e, i, s) {
                var n = t(e),
                    o = this._getInst(n[0]);
                o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
            },
            _selectDay: function(e, i, s, n) {
                var o, a = t(e);
                t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var s, n = t(e),
                    o = this._getInst(n[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, s, n, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, s) {
                if (null == e || null == i) throw "Invalid arguments";
                if ("" == (i = "object" == typeof i ? "" + i : i + "")) return null;
                var n, o, a, r, l = 0,
                    h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (s ? s.dayNames : null) || this._defaults.dayNames,
                    p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (s ? s.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    _ = -1,
                    b = !1,
                    y = function(t) {
                        var i = e.length > n + 1 && e.charAt(n + 1) === t;
                        return i && n++, i
                    },
                    x = function(t) {
                        var e = y(t),
                            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            n = "y" === t ? s : 1,
                            o = RegExp("^\\d{" + n + "," + s + "}"),
                            a = i.substring(l).match(o);
                        if (!a) throw "Missing number at position " + l;
                        return l += a[0].length, parseInt(a[0], 10)
                    },
                    w = function(e, s, n) {
                        var o = -1,
                            a = t.map(y(e) ? n : s, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (t.each(a, function(t, e) {
                            var s = e[1];
                            return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0
                        }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function() {
                        if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (n = 0; e.length > n; n++)
                    if (b) "'" !== e.charAt(n) || y("'") ? k() : b = !1;
                    else switch (e.charAt(n)) {
                        case "d":
                            v = x("d");
                            break;
                        case "D":
                            w("D", u, d);
                            break;
                        case "o":
                            _ = x("o");
                            break;
                        case "m":
                            m = x("m");
                            break;
                        case "M":
                            m = w("M", p, f);
                            break;
                        case "y":
                            g = x("y");
                            break;
                        case "@":
                            g = (r = new Date(x("@"))).getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            g = (r = new Date((x("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            y("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                    if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), _ > -1)
                    for (m = 1, v = _; !((o = this._getDaysInMonth(g, m - 1)) >= v);) m++, v -= o;
                if ((r = this._daylightSavingAdjust(new Date(g, m - 1, v))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
                return r
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(t, e, i) {
                if (!e) return "";
                var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = t.length > s + 1 && t.charAt(s + 1) === e;
                        return i && s++, i
                    },
                    h = function(t, e, i) {
                        var s = "" + e;
                        if (l(t))
                            for (; i > s.length;) s = "0" + s;
                        return s
                    },
                    c = function(t, e, i, s) {
                        return l(t) ? s[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (s = 0; t.length > s; s++)
                        if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;
                        else switch (t.charAt(s)) {
                            case "d":
                                u += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", e.getDay(), n, o);
                                break;
                            case "o":
                                u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                u += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", e.getMonth(), a, r);
                                break;
                            case "y":
                                u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                                break;
                            case "@":
                                u += e.getTime();
                                break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? u += "'" : d = !0;
                                break;
                            default:
                                u += t.charAt(s)
                        }
                        return u
            },
            _possibleChars: function(t) {
                var e, i = "",
                    s = !1,
                    n = function(i) {
                        var s = t.length > e + 1 && t.charAt(e + 1) === i;
                        return s && e++, s
                    };
                for (e = 0; t.length > e; e++)
                    if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? i += "'" : s = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                    return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        s = t.lastVal = t.input ? t.input.val() : null,
                        n = this._getDefaultDate(t),
                        o = n,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, s, a) || n
                    } catch (t) {
                        s = e ? "" : s
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, s) {
                var n = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (t) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o))
                        }
                        l = r.exec(i)
                    }
                    return new Date(n, o, a)
                }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                }(i) : new Date(i.getTime());
                return (n = n && "Invalid Date" == "" + n ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var s = !e,
                    n = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths"),
                    s = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(s, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(s, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(s)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(s, this, "M"), !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(s, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, s, n, o, a, r, l, h, c, u, d, p, f, g, m, v, _, b, y, x, w, k, C, D, T, I, S, P, M, N, A, E, H, O, z, W, L, F, R = new Date,
                    j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                    B = this._get(t, "isRTL"),
                    q = this._get(t, "showButtonPanel"),
                    Y = this._get(t, "hideIfNoPrevNext"),
                    $ = this._get(t, "navigationAsDateFormat"),
                    K = this._getNumberOfMonths(t),
                    U = this._get(t, "showCurrentAtPos"),
                    V = this._get(t, "stepMonths"),
                    X = 1 !== K[0] || 1 !== K[1],
                    G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    J = this._getMinMaxDate(t, "max"),
                    Z = t.drawMonth - U,
                    tt = t.drawYear;
                if (0 > Z && (Z += 12, tt--), J)
                    for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - K[0] * K[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) 0 > --Z && (Z = 11, tt--);
                for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = $ ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = $ ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : j, a = $ ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", w = 0; K[0] > w; w++) {
                    for (k = "", this.maxRows = 4, C = 0; K[1] > C; C++) {
                        if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", I = "", X) {
                            if (I += "<div class='ui-datepicker-group", K[1] > 1) switch (C) {
                                case 0:
                                    I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                                    break;
                                case K[1] - 1:
                                    I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                                    break;
                                default:
                                    I += " ui-datepicker-group-middle", T = ""
                            }
                            I += "'>"
                        }
                        for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === w ? B ? o : s : "") + (/all|right/.test(T) && 0 === w ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, w > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) P = (x + c) % 7, S += "<th scope='col'" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
                        for (I += S + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), N = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, A = Math.ceil((N + M) / 7), E = X && this.maxRows > A ? this.maxRows : A, this.maxRows = E, H = this._daylightSavingAdjust(new Date(tt, Z, 1 - N)), O = 0; E > O; O++) {
                            for (I += "<tr>", z = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) W = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], L = H.getMonth() !== Z, F = L && !_ || !W[0] || Q && Q > H || J && H > J, z += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + W[1] + (H.getTime() === G.getTime() ? " " + this._currentClass : "") + (H.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === j.getTime() ? " ui-state-highlight" : "") + (H.getTime() === G.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                            I += z + "</tr>"
                        }++Z > 11 && (Z = 0, tt++), k += I += "</tbody></table>" + (X ? "</div>" + (K[0] > 0 && C === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    y += k
                }
                return y += h, t._keyEvent = !1, y
            },
            _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
                var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    _ = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    y = "";
                if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                    y += "</select>"
                } if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        })(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var s = t.selectedYear + ("Y" === i ? e : 0),
                    n = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    s = this._getMinMaxDate(t, "max"),
                    n = i && i > e ? i : e;
                return s && n > s ? s : n
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, s) {
                var n = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, s, n = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, s) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function(e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.0", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var f = !1;
        t(document).on("mouseup", function() {
            f = !1
        }), t.widget("ui.mouse", {
            version: "1.12.0",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function(i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!f) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        s = 1 === e.which,
                        n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return i._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), f = !0, !0))
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, f = !1, e.preventDefault()
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), t.ui.plugin = {
            add: function(e, i, s) {
                var n, o = t.ui[e].prototype;
                for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i, s) {
                var n, o = t.plugins[e];
                if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
            }
        }, t.ui.safeBlur = function(e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
        }, t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return this._blurActiveElement(e), !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
            },
            _blockFrames: function(e) {
                this.iframeBlocks = this.document.find(e).map(function() {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(e) {
                var i = t.ui.safeActiveElement(this.document[0]),
                    s = t(e.target);
                this._getHandle(e) && s.closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === t(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function(e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var s = this._uiHash();
                    if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = s.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var i = this,
                    s = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== i._trigger("stop", e) && i._clear()
                }) : !1 !== this._trigger("stop", e) && this._clear(), !1
            },
            _mouseUp: function(e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function(e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(e) {
                var i = this.options,
                    s = t.isFunction(i.helper),
                    n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, s, n = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), void((s = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    s = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, s, n, o, a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(e, i, s) {
                return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, i, s) {
                var n = t.extend({}, i, {
                    item: s.element
                });
                s.sortables = [], t(s.options.connectToSortable).each(function() {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
                })
            },
            stop: function(e, i, s) {
                var n = t.extend({}, i, {
                    item: s.element
                });
                s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                    this.isOver ? (this.isOver = 0, s.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
                        position: this.placeholder.css("position"),
                        top: this.placeholder.css("top"),
                        left: this.placeholder.css("left")
                    }, this._mouseStop(e), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", e, n))
                })
            },
            drag: function(e, i, s) {
                t.each(s.sortables, function() {
                    var n = !1,
                        o = this;
                    o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
                        return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
                    })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
                        this.refreshPositions()
                    }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function(e, i, s) {
                var n = t("body"),
                    o = s.options;
                n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
            },
            stop: function(e, i, s) {
                var n = s.options;
                n._cursor && t("body").css("cursor", n._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function(e, i, s) {
                var n = t(i.helper),
                    o = s.options;
                n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
            },
            stop: function(e, i, s) {
                var n = s.options;
                n._opacity && t(i.helper).css("opacity", n._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(e, i, s) {
                var n = s.options,
                    o = !1,
                    a = s.scrollParentNotHidden[0],
                    r = s.document[0];
                a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function(e, i, s) {
                var n = s.options;
                s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var e = t(this),
                        i = e.offset();
                    this !== s.element[0] && s.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(e, i, s) {
                var n, o, a, r, l, h, c, u, d, p, f = s.options,
                    g = f.snapTolerance,
                    m = i.offset.left,
                    v = m + s.helperProportions.width,
                    _ = i.offset.top,
                    b = _ + s.helperProportions.height;
                for (d = s.snapElements.length - 1; d >= 0; d--) l = s.snapElements[d].left - s.margins.left, h = l + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, l - g > v || m > h + g || c - g > b || _ > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - _), a = g >= Math.abs(l - v), r = g >= Math.abs(h - m), n && (i.position.top = s._convertPositionTo("relative", {
                    top: c - s.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - _), o = g >= Math.abs(u - b), a = g >= Math.abs(l - m), r = g >= Math.abs(h - v), n && (i.position.top = s._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (i.position.top = s._convertPositionTo("relative", {
                    top: u - s.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h - s.helperProportions.width
                }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })), s.snapElements[d].snapping = n || o || a || r || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function(e, i, s) {
                var n, o = s.options,
                    a = t.makeArray(t(o.stack)).sort(function(e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                    t(this).css("zIndex", n + e)
                }), this.css("zIndex", n + a.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, i, s) {
                var n = t(i.helper),
                    o = s.options;
                n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
            },
            stop: function(e, i, s) {
                var n = s.options;
                n._zIndex && t(i.helper).css("zIndex", n._zIndex)
            }
        }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseFloat(t) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                    n = !1;
                return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
            },
            _create: function() {
                var e, i = this.options,
                    s = this;
                this._addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
                    i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
                }).on("mouseleave", function() {
                    i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function(t, e) {
                switch (this._super(t, e), t) {
                    case "handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function() {
                var e, i, s, n, o, a = this.options,
                    r = this;
                if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
                        zIndex: a.zIndex
                    }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function(e) {
                    var i, s, n, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(e) {
                var i, s, n = !1;
                for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
                return !this.options.disabled && n
            },
            _mouseStart: function(e) {
                var i, s, n, o = this.options,
                    a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: s
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalSize = this._helper ? {
                    width: a.outerWidth(),
                    height: a.outerHeight()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.sizeDiff = {
                    width: a.outerWidth() - a.width(),
                    height: a.outerHeight() - a.height()
                }, this.originalPosition = {
                    left: i,
                    top: s
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function(e) {
                var i, s, n = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - n.left || 0,
                    r = e.pageY - n.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, s, n, o, a, r, l, h = this.options;
                return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height, o = s ? 0 : this.sizeDiff.width, a = {
                    width: this.helper.width() - o,
                    height: this.helper.height() - n
                }, r = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, l = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                    top: l,
                    left: r
                })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, s, n, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    s = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize;
                    return {
                        left: this.originalPosition.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var s = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: s.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, s) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                },
                sw: function(e, i, s) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                },
                ne: function(e, i, s) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                },
                nw: function(e, i, s) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                }
            },
            _propagate: function(e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = t(this).resizable("instance"),
                    s = i.options,
                    n = i._proportionallyResizeElements,
                    o = n.length && /textarea/i.test(n[0].nodeName),
                    a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                    r = o ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - r,
                        height: i.size.height - a
                    },
                    h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: s.animateDuration,
                    easing: s.animateEasing,
                    step: function() {
                        var s = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        n && n.length && t(n[0]).css({
                            width: s.width,
                            height: s.height
                        }), i._updateCache(s), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var e, i, s, n, o, a, r, l = t(this).resizable("instance"),
                    h = l.options,
                    c = l.element,
                    u = h.containment,
                    d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                    i[t] = l._num(e.css("padding" + s))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : n, l.parentData = {
                    element: d,
                    left: s.left,
                    top: s.top,
                    width: a,
                    height: r
                }))
            },
            resize: function(e) {
                var i, s, n, o, a = t(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    h = a.position,
                    c = a._aspectRatio || e.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = a.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
            },
            stop: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    s = e.containerOffset,
                    n = e.containerPosition,
                    o = e.containerElement,
                    a = t(e.helper),
                    r = a.offset(),
                    l = a.outerWidth() - e.sizeDiff.width,
                    h = a.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: r.left - n.left - s.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: r.left - n.left - s.left,
                    width: l,
                    height: h
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var e = t(this).resizable("instance").options;
                t(e.alsoResize).each(function() {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                })
            },
            resize: function(e, i) {
                var s = t(this).resizable("instance"),
                    n = s.options,
                    o = s.originalSize,
                    a = s.originalPosition,
                    r = {
                        height: s.size.height - o.height || 0,
                        width: s.size.width - o.width || 0,
                        top: s.position.top - a.top || 0,
                        left: s.position.left - a.left || 0
                    };
                t(n.alsoResize).each(function() {
                    var e = t(this),
                        s = t(this).data("ui-resizable-alsoresize"),
                        n = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function(t, e) {
                        var i = (s[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (n[e] = i || null)
                    }), e.css(n)
                })
            },
            stop: function() {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
            },
            resize: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var e, i = t(this).resizable("instance"),
                    s = i.options,
                    n = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    u = Math.round((n.width - o.width) / h) * h,
                    d = Math.round((n.height - o.height) / c) * c,
                    p = o.width + u,
                    f = o.height + d,
                    g = s.maxWidth && p > s.maxWidth,
                    m = s.maxHeight && f > s.maxHeight,
                    v = s.minWidth && s.minWidth > p,
                    _ = s.minHeight && s.minHeight > f;
                s.grid = l, v && (p += h), _ && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
            }
        }), t.ui.resizable, t.widget("ui.dialog", {
            version: "1.12.0",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function(e) {
                var i = this;
                this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", e)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(e, i) {
                var s = !1,
                    n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +t(this).css("z-index")
                    }).get(),
                    o = Math.max.apply(null, n);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
            },
            open: function() {
                var e = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function(e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]);
                    this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function(e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                s = i.filter(":first"),
                                n = i.filter(":last");
                            e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                n.trigger("focus")
                            }), e.preventDefault()) : (this._delay(function() {
                                s.trigger("focus")
                            }), e.preventDefault())
                        }
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var e;
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function(e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function(t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function() {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, s) {
                    var n, o;
                    s = t.isFunction(s) ? {
                        click: s,
                        text: i
                    } : s, s = t.extend({
                        type: "button"
                    }, s), n = s.click, o = {
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        showLabel: s.showLabel
                    }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
                        n.apply(e.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    s = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(s, n) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                    },
                    drag: function(t, s) {
                        i._trigger("drag", t, e(s))
                    },
                    stop: function(n, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        s.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                    }
                })
            },
            _makeResizable: function() {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var i = this,
                    s = this.options,
                    n = s.resizable,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: s.maxWidth,
                    maxHeight: s.maxHeight,
                    minWidth: s.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function(s, n) {
                        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                    },
                    resize: function(t, s) {
                        i._trigger("resize", t, e(s))
                    },
                    stop: function(n, o) {
                        var a = i.uiDialog.offset(),
                            r = a.left - i.document.scrollLeft(),
                            l = a.top - i.document.scrollTop();
                        s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this,
                    s = !1,
                    n = {};
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
                }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
            },
            _setOption: function(e, i) {
                var s, n, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, s = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: s.width
                }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function() {
                        e = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function(t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        }), t.ui.dialog, t.widget("ui.droppable", {
            version: "1.12.0",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var e, i = this.options,
                    s = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                    return t.is(s)
                }, this.proportions = function() {
                    return arguments.length ? void(e = arguments[0]) : e || (e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    })
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function(e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function(t) {
                for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function(e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                };
                else if ("scope" === e) {
                    var s = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(s), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function(e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function(e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
            },
            _out: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
            },
            _drop: function(e, i) {
                var s = i || t.ui.ddmanager.current,
                    n = !1;
                return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var i = t(this).droppable("instance");
                    return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && g(s, t.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, e) ? (n = !0, !1) : void 0
                }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function() {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function() {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function() {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function() {
                this._removeClass("ui-droppable-active")
            }
        });
        var g = t.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function(e, i, s, n) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    r = o + e.helperProportions.width,
                    l = a + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    u = h + i.proportions().width,
                    d = c + i.proportions().height;
                switch (s) {
                    case "fit":
                        return o >= h && u >= r && a >= c && d >= l;
                    case "intersect":
                        return o + e.helperProportions.width / 2 > h && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
                    case "pointer":
                        return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
                    case "touch":
                        return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);
                    default:
                        return !1
                }
            }
        }();
        t.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function(e, i) {
                var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    a = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (s = 0; o.length > s; s++)
                    if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                        for (n = 0; r.length > n; n++)
                            if (r[n] === o[s].element[0]) {
                                o[s].proportions().height = 0;
                                continue t
                            }
                        o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                            width: o[s].element[0].offsetWidth,
                            height: o[s].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(e, i) {
                var s = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && g(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), s
            },
            dragStart: function(e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function() {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function(e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var s, n, o, a = g(e, this, this.options.tolerance, i),
                            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                            return t(this).droppable("instance").options.scope === n
                        })).length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                    }
                })
            },
            dragStop: function(e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function() {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function() {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }), t.ui.droppable, t.widget("ui.progressbar", {
            version: "1.12.0",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.0",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                        var i = t(this),
                            s = i.offset(),
                            n = {
                                left: s.left - e.elementPos.left,
                                top: s.top - e.elementPos.top
                            };
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: n.left,
                            top: n.top,
                            right: n.left + i.outerWidth(),
                            bottom: n.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function() {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this,
                    s = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var s = t.data(this, "selectable-item");
                    s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: s.element
                    }))
                }), t(e.target).parents().addBack().each(function() {
                    var s, n = t.data(this, "selectable-item");
                    return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                        selecting: n.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: n.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, s = this,
                        n = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = e.pageX,
                        l = e.pageY;
                    return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                        left: o,
                        top: a,
                        width: r - o,
                        height: l - a
                    }), this.selectees.each(function() {
                        var i = t.data(this, "selectable-item"),
                            h = !1,
                            c = {};
                        i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? h = !(c.left > r || o > c.right || c.top > l || a > c.bottom) : "fit" === n.tolerance && (h = c.left > o && r > c.right && c.top > a && l > c.bottom), h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                    var s = t.data(this, "selectable-item");
                    i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                        unselected: s.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function() {
                    var s = t.data(this, "selectable-item");
                    i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                        selected: s.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.0",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
            },
            _drawButton: function() {
                var e, i = this,
                    s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function(t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function() {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function(t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function(t, i) {
                        var s = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: s
                        }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }, this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function() {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function() {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderButtonItem: function(e) {
                var i = t("<span>");
                return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function(e, i) {
                var s = this,
                    n = "";
                t.each(i, function(i, o) {
                    var a;
                    o.optgroup !== n && (a = t("<li>", {
                        text: o.optgroup
                    }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(e, i) {
                var s = t("<li>"),
                    n = t("<div>", {
                        title: i.element.attr("title")
                    });
                return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, s, n = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function(e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                },
                click: function(t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function(e) {
                    var i = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.TAB:
                        case t.ui.keyCode.ESCAPE:
                            this.close(e), i = !1;
                            break;
                        case t.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(e);
                            break;
                        case t.ui.keyCode.UP:
                            e.altKey ? this._toggle(e) : this._move("prev", e);
                            break;
                        case t.ui.keyCode.DOWN:
                            e.altKey ? this._toggle(e) : this._move("next", e);
                            break;
                        case t.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this._move("prev", e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this._move("next", e);
                            break;
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.PAGE_UP:
                            this._move("first", e);
                            break;
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_DOWN:
                            this._move("last", e);
                            break;
                        default:
                            this.menu.trigger(e), i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function(t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function() {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function(e) {
                var i = this,
                    s = [];
                e.each(function(e, n) {
                    s.push(i._parseOption(t(n), e))
                }), this.items = s
            },
            _parseOption: function(t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, i, s = this.options,
                    n = this.element.find(".ui-slider-handle"),
                    o = [];
                for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push("<span tabindex='0'></span>");
                this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e)
                })
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, s, n, o, a, r, l, h = this,
                    c = this.options;
                return !c.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var i = Math.abs(s - h.values(e));
                    (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, o = t(this), a = e)
                }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - r.left - o.width() / 2,
                    top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
            },
            _uiHash: function(t, e, i) {
                var s = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, i) {
                var s, n = this.value(),
                    o = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var s, n, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var s, n = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, i, s, n, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    h = !this._animateOff && r.animate,
                    c = {};
                this._hasMultipleValues() ? this.handles.each(function(s) {
                    i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, r.animate))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                    }
                    switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + n);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - n)
                    }
                    this._slide(e, o, s)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return t >= e && e + i > t
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, i) {
                var s = null,
                    n = !1,
                    o = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
                }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                    this === e.target && (n = !0)
                }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function(e, i, s) {
                var n, o, a = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                    for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, s, n, o, a = this.options,
                    r = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (s = this.items[i], n = s.item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                        this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var s = this,
                            n = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                            s._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    s = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !s.length && e.key && s.push(e.key + "="), s.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    s = [];
                return e = e || {}, i.each(function() {
                    s.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), s
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    l = r + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || s + h > r && l > s + h,
                    d = "y" === this.options.axis || e + c > o && a > e + c,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(t) {
                var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                return !!(s && n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    s = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection();
                return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                function i() {
                    r.push(this)
                }
                var s, n, o, a, r = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (s = h.length - 1; s >= 0; s--)
                        for (o = t(h[s], this.document[0]), n = o.length - 1; n >= 0; n--)(a = t.data(o[n], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
                return t(r)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; e.length > i; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i, s, n, o, a, r, l, h, c = this.items,
                    u = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = u.length - 1; i >= 0; i--)
                    for (a = u[i][1], r = u[i][0], s = 0, h = r.length; h > s; s++)(l = t(r[s])).data(this.widgetName + "-item", a), c.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, s, n, o;
                for (i = this.items.length - 1; i >= 0; i--)(s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                var i, s = (e = e || this).options;
                s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                    element: function() {
                        var s = e.currentItem[0].nodeName.toLowerCase(),
                            n = t("<" + s + ">", e.document[0]);
                        return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                    },
                    update: function(t, n) {
                        (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function(e, i) {
                var s = this;
                e.children().each(function() {
                    t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function(e) {
                var i, s, n, o, a, r, l, h, c, u, d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (n = 1e4, o = null, a = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a], h = !1, e[u] - l > this.items[s][r] / 2 && (h = !0), n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, s, n = this.options;
                "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var s = "absolute" === e ? 1 : -1,
                    n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(n[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                    left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
                }
            },
            _generatePosition: function(e) {
                var i, s, n = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, s) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay(function() {
                    n === this.counter && this.refreshPositions(!s)
                })
            },
            _clear: function(t, e) {
                function i(t, e, i) {
                    return function(s) {
                        i._trigger(t, s, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var s, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (s = 0; n.length > s; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        }), t.widget("ui.spinner", {
            version: "1.12.0",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var e = this._super(),
                    i = this.element;
                return t.each(["min", "max", "step"], function(t, s) {
                    var n = i.attr(s);
                    null != n && n.length && (e[s] = n)
                }), e
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(e) {
                    function i() {
                        this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                            this.previous = s
                        }))
                    }
                    var s;
                    s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, i.call(this)
                    }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function() {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function(e) {
                var i = this.options,
                    s = t.ui.keyCode;
                switch (e.keyCode) {
                    case s.UP:
                        return this._repeat(null, 1, e), !0;
                    case s.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case s.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case s.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _start: function(t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                    value: i
                }) || (this._value(i), this.counter++)
            },
            _increment: function(e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, s = this.options;
                return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                var i, s, n;
                return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), void this._super(t, e))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: o(function(t) {
                this._super(t)
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function(t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
            },
            _destroy: function() {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: o(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: o(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: o(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: o(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function() {
                return "<span>"
            },
            _buttonHtml: function() {
                return "<a></a><a></a>"
            }
        }), t.ui.spinner, t.widget("ui.tabs", {
            version: "1.12.0",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function() {
                var t = /#.*$/;
                return function(e) {
                    var i, s;
                    i = e.href.replace(t, ""), s = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (t) {}
                    try {
                        s = decodeURIComponent(s)
                    } catch (t) {}
                    return e.hash.length > 1 && i === s
                }
            }(),
            _create: function() {
                var e = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    s = location.hash.substring(1);
                return null === e && (s && this.tabs.each(function(i, n) {
                    return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    s = this.tabs.index(i),
                    n = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            s++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            n = !1, s--;
                            break;
                        case t.ui.keyCode.END:
                            s = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            s = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", s)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                function s() {
                    return e > n && (e = 0), 0 > e && (e = n), e
                }
                for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    s = this.anchors,
                    n = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                    var n, o, a, r = t(s).uniqueId().attr("id"),
                        l = t(s).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function(e) {
                var i, s, n;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, s = this.element.parent();
                "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        s = e.css("position");
                    "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    s = this.active,
                    n = t(e.currentTarget).closest("li"),
                    o = n[0] === s[0],
                    a = o && i.collapsible,
                    r = a ? t() : this._getPanelForTab(n),
                    l = s.length ? this._getPanelForTab(s) : t(),
                    h = {
                        oldTab: s,
                        oldPanel: l,
                        newTab: a ? t() : n,
                        newPanel: r
                    };
                e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !a && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, h))
            },
            _toggle: function(e, i) {
                function s() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function n() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
                }
                var o = this,
                    a = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
                }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, s = this._findActive(e);
                s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function(e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }), this.tabs.each(function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function(t, i) {
                    return i !== e ? i : null
                })), this._setOptionDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var s = this,
                    n = this.tabs.eq(e),
                    o = n.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(n),
                    r = {
                        tab: n,
                        panel: a
                    },
                    l = function(t, e) {
                        "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                    setTimeout(function() {
                        a.html(t), s._trigger("load", i, r), l(n, e)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, s) {
                var n = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function(e, o) {
                        return n._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, s))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        }), t.ui.tabs, t.widget("ui.tooltip", {
            version: "1.12.0",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(e, i) {
                var s = (e.attr("aria-describedby") || "").split(/\s+/);
                s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
            },
            _removeDescribedBy: function(e) {
                var i = e.data("ui-tooltip-id"),
                    s = (e.attr("aria-describedby") || "").split(/\s+/),
                    n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function(e, i) {
                var s = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                    s._updateContent(e.element)
                })
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(i, s) {
                    var n = t.Event("blur");
                    n.target = n.currentTarget = s.element[0], e.close(n, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var e = t(this);
                    return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }), this.disabledTitles = t([])
            },
            open: function(e) {
                var i = this,
                    s = t(e ? e.target : this.element).closest(this.options.items);
                s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                    var e, s = t(this);
                    s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: s.attr("title")
                    }, s.attr("title", ""))
                }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
            },
            _updateContent: function(t, e) {
                var i, s = this.options.content,
                    n = this,
                    o = e ? e.type : null;
                return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void((i = s.call(t[0], function(i) {
                    n._delay(function() {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    })
                })) && this._open(e, t, i))
            },
            _open: function(e, i, s) {
                function n(t) {
                    h.of = t, a.is(":hidden") || a.position(h)
                }
                var o, a, r, l, h = t.extend({}, this.options.position);
                if (s) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (l = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: n
                    }), n(e)) : a.position(t.extend({
                        of: i
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                        a.is(":visible") && (n(h.of), clearInterval(r))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: a
                    })
                }
            },
            _registerCloseHandlers: function(e, i) {
                var s = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var s = t.Event(e);
                            s.currentTarget = i[0], this.close(s, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (s.remove = function() {
                    this._removeTooltip(this._find(i).tooltip)
                }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
            },
            close: function(e) {
                var i, s = this,
                    n = t(e ? e.currentTarget : this.element),
                    o = this._find(n);
                return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                    s._removeTooltip(t(this))
                }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                    t(i.element).attr("title", i.title), delete s.parents[e]
                }), o.closing = !0, this._trigger("close", e, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open")
            },
            _tooltip: function(e) {
                var i = t("<div>").attr("role", "tooltip"),
                    s = t("<div>").appendTo(i),
                    n = i.uniqueId().attr("id");
                return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function(t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(i, s) {
                    var n = t.Event("blur"),
                        o = s.element;
                    n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), t.ui.tooltip
    });
var browserName, browserVersion;
detectBrowser();
var deviceName;
detectDevice();
var preloaderDiv = document.getElementById("preloader"),
    timer2 = null,
    newimages = [],
    progressIb = document.getElementById("progressIb"),
    O_Laocar = document.getElementById("Laocar"),
    O_Laotext = document.getElementById("Laosiji"),
    O_Pgrass = document.getElementById("Pgrass"),
    arr = ["./img/fall.png", "./img/jumpinthesea.png", "./img/swim2.png", "./img/walk.png", "img/far-forest.png", "./img/ground.png", "./img/grass.png", "./img/tree-1.png", "./img/tree-2.png", "./img/tree-3.png", "./img/title.png", "img/mountain.png", "img/mountain2.png", "./img/Tinyplane.png", "img/ballon.png", "img/mountain3.png", "img/wood%20board.png", "./img/dataDEMO/windomill.png", "./img/walktorocket.png"],
    n1 = new Image,
    n2 = new Image;
n1.src = "./img/laosiji.png", n1.onload = function() {
    O_Laocar.src = n1.src, n2.src = "./img/Pgrass.png"
}, n2.onload = function() {
    O_Pgrass.src = n2.src
}, preloadimages(arr), showPreloadDIVorIfitisIEjustdontletRun();