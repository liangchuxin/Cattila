! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(N, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        c = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        a = m.toString,
        l = a.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        b = function(e) {
            return null != e && e === e.window
        },
        C = N.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function x(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var d = "3.5.0",
        k = function(e, t) {
            return new k.fn.init(e, t)
        };

    function f(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: d,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(k.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(k.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: c,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            x(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (f(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (f(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, p, x, o, i, h, d, g, w, c, l, _, N, a, C, m, s, u, v, k = "sizzle" + 1 * new Date,
            f = n.document,
            S = 0,
            r = 0,
            y = ce(),
            b = ce(),
            E = ce(),
            T = ce(),
            A = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            M = t.push,
            L = t.push,
            I = t.slice,
            q = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            $ = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            O = "\\[" + B + "*(" + $ + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + B + "*\\]",
            z = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            P = new RegExp(B + "+", "g"),
            H = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            F = new RegExp("^" + B + "*," + B + "*"),
            W = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            U = new RegExp(B + "|>"),
            Q = new RegExp(z),
            K = new RegExp("^" + $ + "$"),
            Z = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            V = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                _()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(t = I.call(f.childNodes), f.childNodes), t[f.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    M.apply(e, I.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, n, r) {
            var i, o, a, s, c, l, u, d = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!r && (_(t), t = t || N, C)) {
                if (11 !== f && (c = G.exec(e)))
                    if (i = c[1]) {
                        if (9 === f) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && v(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (c[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = c[3]) && p.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
                    } if (p.qsa && !T[e + " "] && (!m || !m.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e, d = t, 1 === f && (U.test(e) || W.test(e))) {
                        for ((d = ee.test(e) && ve(t.parentNode) || t) === t && p.scope || ((s = t.getAttribute("id")) ? s = s.replace(re, ie) : t.setAttribute("id", s = k)), o = (l = h(e)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
                        u = l.join(",")
                    }
                    try {
                        return L.apply(n, d.querySelectorAll(u)), n
                    } catch (t) {
                        T(e, !0)
                    } finally {
                        s === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(H, "$1"), t, n, r)
        }

        function ce() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ue(e) {
            var t = N.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function fe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function me(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !X.test(t || n && n.nodeName || "HTML")
            }, _ = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : f;
                return r != N && 9 === r.nodeType && r.documentElement && (a = (N = r).documentElement, C = !i(N), f != N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ue(function(e) {
                    return a.appendChild(e).appendChild(N.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), p.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ue(function(e) {
                    return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = Y.test(N.getElementsByClassName), p.getById = ue(function(e) {
                    return a.appendChild(e).id = k, !N.getElementsByName || !N.getElementsByName(k).length
                }), p.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, s = [], m = [], (p.qsa = Y.test(N.querySelectorAll)) && (ue(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + B + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), (t = N.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = N.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (p.matchesSelector = Y.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                    p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), s.push("!=", z)
                }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = Y.test(a.compareDocumentPosition), v = t || Y.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == N || e.ownerDocument == f && v(f, e) ? -1 : t == N || t.ownerDocument == f && v(f, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == N ? -1 : t == N ? 1 : i ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                    if (i === o) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? fe(a[r], s[r]) : a[r] == f ? -1 : s[r] == f ? 1 : 0
                }), N
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (_(e), p.matchesSelector && C && !T[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                    var n = u.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    T(t, !0)
                }
                return 0 < se(t, N, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != N && _(e), v(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != N && _(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : p.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, c = !p.sortStable && e.slice(0), e.sort(A), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return c = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Z,
                attrHandle: {},
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = y[e + " "];
                        return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && y(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(P, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, c, l = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                f = !n && !b,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        c = l = "only" === h && !c && "nextSibling"
                                    }
                                    return !0
                                }
                                if (c = [y ? u.firstChild : u.lastChild], y && f) {
                                    for (p = (s = (r = (i = (o = (a = u)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && u.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || c.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [S, s, p];
                                            break
                                        }
                                } else if (f && (p = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[l] || (p = s = 0) || c.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, p]), a !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = q(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = d(e.replace(H, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return K.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return V.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = he(e);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(s, e, t) {
            var c = e.dir,
                l = e.next,
                u = l || c,
                d = t && "parentNode" === u,
                f = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[c];)
                    if (1 === e.nodeType || d) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, f];
                if (n) {
                    for (; e = e[c];)
                        if ((1 === e.nodeType || d) && s(e, t, n)) return !0
                } else
                    for (; e = e[c];)
                        if (1 === e.nodeType || d)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[c] || e;
                            else {
                                if ((r = i[u]) && r[0] === S && r[1] === f) return a[2] = r[2];
                                if ((i[u] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function _e(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ne(p, h, g, m, v, e) {
            return m && !m[k] && (m = Ne(m)), v && !v[k] && (v = Ne(v, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    c = [],
                    l = t.length,
                    u = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && h ? u : _e(u, s, p, n, r),
                    f = g ? v || (e ? p : l || m) ? [] : t : d;
                if (g && g(d, f, n, r), m)
                    for (i = _e(f, c), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (f[c[o]] = !(d[c[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = f.length; o--;)(a = f[o]) && i.push(d[o] = a);
                            v(null, f = [], i, r)
                        }
                        for (o = f.length; o--;)(a = f[o]) && -1 < (i = v ? q(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else f = _e(f === t ? f.splice(l, f.length) : f), v ? v(null, t, f, r) : L.apply(t, f)
            })
        }

        function Ce(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = xe(function(e) {
                    return e === i
                }, a, !0), l = xe(function(e) {
                    return -1 < q(i, e)
                }, a, !0), u = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? c(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = x.relative[e[s].type]) u = [xe(we(u), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                        return Ne(1 < s && we(u), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(H, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && be(e))
                    }
                    u.push(t)
                } return we(u)
        }
        return ye.prototype = x.filters = x.pseudos, x.setFilters = new ye, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, c, l = b[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], c = x.preFilter; a;) {
                for (o in n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(H, " ")
                    }), a = a.slice(n.length)), x.filter) !(r = Z[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
        }, d = se.compile = function(e, t) {
            var n, m, v, y, b, r, i = [],
                o = [],
                a = E[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Ce(t[n]))[k] ? i.push(a) : o.push(a);
                (a = E(e, (m = o, y = 0 < (v = i).length, b = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, a, s, c = 0,
                        l = "0",
                        u = e && [],
                        d = [],
                        f = w,
                        p = e || b && x.find.TAG("*", i),
                        h = S += null == f ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t == N || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument == N || (_(o), n = !C); s = m[a++];)
                                if (s(o, t || N, n)) {
                                    r.push(o);
                                    break
                                } i && (S = h)
                        }
                        y && ((o = !s && o) && c--, e && u.push(o))
                    }
                    if (c += l, y && l !== c) {
                        for (a = 0; s = v[a++];) s(u, d, t, n);
                        if (e) {
                            if (0 < c)
                                for (; l--;) u[l] || d[l] || (d[l] = D.call(r));
                            d = _e(d)
                        }
                        L.apply(r, d), i && !e && 0 < d.length && 1 < c + v.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = f), u
                }, y ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, c, l = "function" == typeof e && e,
                u = !r && h(e = l.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Z.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                    if ((c = x.find[s]) && (r = c(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && be(o))) return L.apply(n, r), n;
                        break
                    }
            }
            return (l || d(e, u))(r, t, !C, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, p.sortStable = k.split("").sort(A).join("") === k, p.detectDuplicates = !!l, _(), p.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(N);
    k.find = p, k.expr = p.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = p.uniqueSort, k.text = p.getText, k.isXMLDoc = p.isXML, k.contains = p.contains, k.escapeSelector = p.escape;
    var h = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                } return r
        },
        _ = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = k.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, n, r) {
        return y(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
        }
    });
    var j, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), T.test(r[1]) && k.isPlainObject(t))
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = k.fn, j = k(C);
    var M = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return I(e, "nextSibling")
        },
        prev: function(e) {
            return I(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (L[r] || k.uniqueSort(n), M.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var q = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function B(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(q) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            c = [],
            l = -1,
            u = function() {
                for (a = a || r.once, o = i = !0; c.length; l = -1)
                    for (t = c.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            d = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, c.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            y(t) ? r.unique && d.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && u()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = c = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = c = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), i || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = y(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var c = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < c)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, l(c, o, R, s), l(c, o, B, s)) : (c++, t.call(e, l(c, o, R, s), l(c, o, B, s), l(c, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), c <= i + 1 && (a !== B && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), N.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, y(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, y(t) ? t : R)), o[2][3].add(l(0, e, y(n) ? n : B))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && ($(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || y(i[t] && i[t].then))) return o.then();
            for (; t--;) $(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        N.console && N.console.warn && e && O.test(e.name) && N.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        N.setTimeout(function() {
            throw e
        })
    };
    var z = k.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), N.removeEventListener("load", P), k.ready()
    }
    k.fn.ready = function(e) {
        return z.then(e).catch(function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || z.resolveWith(C, [k])
        }
    }), k.ready.then = z.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? N.setTimeout(k.ready) : (C.addEventListener("DOMContentLoaded", P), N.addEventListener("load", P));
    var H = function(e, t, n, r, i, o, a) {
            var s = 0,
                c = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) H(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
        },
        F = /^-ms-/,
        W = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function Q(e) {
        return e.replace(F, "ms-").replace(W, U)
    }
    var K = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Z() {
        this.expando = k.expando + Z.uid++
    }
    Z.uid = 1, Z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = Object.create(null), K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[Q(t)] = n;
            else
                for (r in t) i[Q(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(q) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var X = new Z,
        J = new Z,
        V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function G(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Y, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : V.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : H(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = G(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = J.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = Q(r.slice(5)), G(o, r, i[r]));
                X.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = C.documentElement,
        ie = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === k.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            c = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (k.cssNumber[t] || "px" !== l && +c) && te.exec(k.css(e, t));
        if (u && u[3] !== l) {
            for (c /= 2, l = l || u[3], u = +c || 1; a--;) k.style(e, t, u + l), (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, k.style(e, t, u + l), n = n || []
        }
        return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
    }
    var ce = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, c, l = [], u = 0, d = e.length; u < d; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (l[u] = X.get(r, "display") || null, l[u] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[u] = (c = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (c = ce[s]) || (o = a.body.appendChild(a.createElement(s)), c = k.css(o, "display"), o.parentNode.removeChild(o), "none" === c && (c = "block"), ce[s] = c)))) : "none" !== n && (l[u] = "none", X.set(r, "display", n)));
        for (u = 0; u < d; u++) null != l[u] && (e[u].style.display = l[u]);
        return e
    }
    k.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var ue, de, fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ue = C.createDocumentFragment().appendChild(C.createElement("div")), (de = C.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ue.appendChild(de), v.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", v.option = !!ue.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? k.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var o, a, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === w(o)) k.merge(f, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), c = ge[s] || ge._default, a.innerHTML = c[1] + k.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
            k.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];)
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = me(d.appendChild(o), "script"), l && ve(a), n)
            for (u = 0; o = a[u++];) he.test(o.type || "") && n.push(o);
        return d
    }
    var xe = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function Ce() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (X.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = X.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), X.set(this, i, r), t = o(this, i), this[i](), r !== (n = X.get(this, i)) || t ? X.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (X.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, i) && k.event.add(e, i, Ne)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, c, l, u, d, f, p, h, g, m = X.get(t);
            if (K(t))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(re, i), n.guid || (n.guid = k.guid++), (c = m.events) || (c = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(q) || [""]).length; l--;) p = g = (s = _e.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = k.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = k.event.special[p] || {}, u = k.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (f = c[p]) || ((f = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), k.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, l, u, d, f, p, h, g, m = X.hasData(e) && X.get(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(q) || [""]).length; l--;)
                    if (p = g = (s = _e.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = k.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || k.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) k.event.remove(e, p + t[l], n, r, !0);
                k.isEmptyObject(c) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                c = k.event.fix(e),
                l = (X.get(this, "events") || Object.create(null))[c.type] || [],
                u = k.event.special[c.type] || {};
            for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (c.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, c)) {
                for (a = k.event.handlers.call(this, c, l), t = 0;
                    (i = a[t++]) && !c.isPropagationStopped();)
                    for (c.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== o.namespace && !c.rnamespace.test(o.namespace) || (c.handleObj = o, c.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, c), c.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                c = t.delegateCount,
                l = e.target;
            if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, c < t.length && s.push({
                elem: l,
                handlers: t.slice(c)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && E(t, "input") && Ee(t, "click", Ne), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && E(t, "input") && Ee(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && E(t, "input") && X.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return Ee(this, e, ke), !1
            },
            trigger: function() {
                return Ee(this, e), !0
            },
            delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                k.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var Te = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function De(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (s = X.get(e).events))
                for (i in X.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) k.event.add(t, i, s[i][n]);
            J.hasData(e) && (o = J.access(e), a = k.extend({}, o), J.set(t, a))
        }
    }

    function qe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, c, l, u = 0,
            d = n.length,
            f = d - 1,
            p = r[0],
            h = y(p);
        if (h || 1 < d && "string" == typeof p && !v.checkClone && Ae.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o)
        });
        if (d && (t = (e = be(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(me(e, "script"), Me)).length; u < d; u++) c = e, u !== f && (c = k.clone(c, !0, !0), s && k.merge(a, me(c, "script"))), i.call(n[u], c, u);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Le), u = 0; u < s; u++) c = a[u], he.test(c.type || "") && !X.access(c, "globalEval") && k.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? k._evalUrl && !c.noModule && k._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, l) : x(c.textContent.replace(je, ""), c, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(me(r)), r.parentNode && (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, c, l, u = e.cloneNode(!0),
                d = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = me(u), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], "input" === (l = (c = a[r]).nodeName.toLowerCase()) && fe.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(u), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
                else Ie(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !d && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (K(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[X.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return H(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return H(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), c.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Be = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        $e = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = N), t.getComputedStyle(e)
        },
        Oe = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        ze = new RegExp(ne.join("|"), "i");

    function Pe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = k.style(e, t)), !v.pixelBoxStyles() && Be.test(a) && ze.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function He(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(l);
                var e = N.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(c), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, c = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, k.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = N.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        We = C.createElement("div").style,
        Ue = {};

    function Qe(e) {
        return k.cssProps[e] || Ue[e] || (e in We ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
                if ((e = Fe[n] + t) in We) return e
        }(e) || e)
    }
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ve(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ye(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            c = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (c += k.css(e, n + ne[a], !0, i)), r ? ("content" === n && (c -= k.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (c -= k.css(e, "border" + ne[a] + "Width", !0, i))) : (c += k.css(e, "padding" + ne[a], !0, i), "padding" !== n ? c += k.css(e, "border" + ne[a] + "Width", !0, i) : s += k.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - .5)) || 0), c
    }

    function Ge(e, t, n) {
        var r = $e(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = Pe(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Be.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ye(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Q(t),
                    c = Ze.test(t),
                    l = e.style;
                if (c || (t = Qe(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || c || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = Q(t);
            return Ze.test(t) || (t = Qe(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Pe(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, c) {
        k.cssHooks[c] = {
            get: function(e, t, n) {
                if (t) return !Ke.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, c, n) : Oe(e, Xe, function() {
                    return Ge(e, c, n)
                })
            },
            set: function(e, t, n) {
                var r, i = $e(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? Ye(e, c, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + c[0].toUpperCase() + c.slice(1)] - parseFloat(i[c]) - Ye(e, c, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[c] = t, t = k.css(e, c)), Ve(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = He(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ve)
    }), k.fn.extend({
        css: function(e, t) {
            return H(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = et.prototype.init, k.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === C.hidden && N.requestAnimationFrame ? N.requestAnimationFrame(st) : N.setTimeout(st, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return N.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (a) return !1;
                for (var e = tt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            u = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = Q(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(u, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, u, l.opts)) return y(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(u, ut, l), y(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(c, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = y(e) ? (t = e, ["*"]) : e.match(q)).length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, c, l, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                g = e.nodeType && ae(e),
                m = X.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    p[r] = m && m[r] || k.style(e, r)
                } if ((c = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = X.get(e, "display")), "none" === (u = k.css(e, "display")) && (l ? u = l : (le([e], !0), l = e.style.display || l, u = k.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === k.css(e, "float") && (c || (f.done(function() {
                        h.display = l
                    }), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), c = !1, p) c || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                    display: l
                }), o && (m.hidden = !g), g && le([e], !0), f.done(function() {
                    for (r in g || le([e]), X.remove(e, "fxshow"), p) k.style(e, r, p[r])
                })), c = ut(g ? m[r] : 0, r, f), r in m || (m[r] = c.start, g && (c.end = c.start, c.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            y(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || X.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = X.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), tt = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        nt || (nt = !0, st())
    }, k.fx.stop = function() {
        nt = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = N.setTimeout(e, r);
            t.stop = function() {
                N.clearTimeout(n)
            }
        })
    }, rt = C.createElement("input"), it = C.createElement("select").appendChild(C.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = C.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var ft, pt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return H(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(q);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ft = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = pt[t] || k.find.attr;
        pt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = pt[o], pt[o] = r, r = null != a(e, t, n) ? o : null, pt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(q) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function yt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return H(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, c = 0;
            if (y(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, vt(this)))
            });
            if ((e = yt(t)).length)
                for (; n = this[c++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, c = 0;
            if (y(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, vt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = yt(t)).length)
                for (; n = this[c++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, vt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = k(this), r = yt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = vt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(bt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        c = a ? o + 1 : i.length;
                    for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, v.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in N;
    var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, c, l, u, d, f = [n || C],
                p = m.call(e, "type") ? e.type : e,
                h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !xt.test(p + k.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, (e = e[k.expando] ? e : new k.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), u = k.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !b(n)) {
                    for (s = u.delegateType || p, xt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || C) && f.push(a.defaultView || a.parentWindow || N)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) d = o, e.type = 1 < i ? s : u.bindType || p, (l = (X.get(o, "events") || Object.create(null))[e.type] && X.get(o, "handle")) && l.apply(o, t), (l = c && o[c]) && l.apply && K(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !K(n) || c && y(n[p]) && !b(n) && ((a = n[c]) && (n[c] = null), k.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, wt), n[p](), e.isPropagationStopped() && d.removeEventListener(p, wt), k.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), v.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = X.access(e, r);
                t || e.addEventListener(n, i, !0), X.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = X.access(e, r) - 1;
                t ? X.access(e, r, t) : (e.removeEventListener(n, i, !0), X.remove(e, r))
            }
        }
    });
    var _t = N.location,
        Nt = {
            guid: Date.now()
        },
        Ct = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new N.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var kt = /\[\]$/,
        St = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || kt.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        Dt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Rt = {},
        Bt = {},
        $t = "*/".concat("*"),
        Ot = C.createElement("a");

    function zt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(q) || [];
            if (y(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Pt(t, i, o, a) {
        var s = {},
            c = t === Bt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || c || s[n] ? c ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ht(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ot.href = _t.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ht(Ht(e, k.ajaxSettings), t) : Ht(k.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Rt),
        ajaxTransport: zt(Bt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, f, n, p, r, h, g, i, o, m = k.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                b = k.Deferred(),
                x = k.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                c = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = Lt.exec(f);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? f : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) _.always(e[_.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || c;
                        return u && u.abort(t), l(0, t), this
                    }
                };
            if (b.promise(_), m.url = ((e || m.url || _t.href) + "").replace(qt, _t.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(q) || [""], null == m.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Ot.protocol + "//" + Ot.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Pt(Rt, m, t, _), h) return _;
            for (i in (g = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !It.test(m.type), d = m.url.replace(Dt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(jt, "+")) : (o = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (Ct.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Mt, "$1"), o = (Ct.test(d) ? "&" : "?") + "_=" + Nt.guid++ + o), m.url = d + o), m.ifModified && (k.lastModified[d] && _.setRequestHeader("If-Modified-Since", k.lastModified[d]), k.etag[d] && _.setRequestHeader("If-None-Match", k.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, _, m) || h)) return _.abort();
            if (c = "abort", x.add(m.complete), _.done(m.success), _.fail(m.error), u = Pt(Bt, m, t, _)) {
                if (_.readyState = 1, g && y.trigger("ajaxSend", [_, m]), h) return _;
                m.async && 0 < m.timeout && (p = N.setTimeout(function() {
                    _.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, u.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, c, l = t;
                h || (h = !0, p && N.clearTimeout(p), u = void 0, f = r || "", _.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, c = e.dataTypes;
                        "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                c.unshift(i);
                                break
                            } if (c[0] in n) o = c[0];
                    else {
                        for (i in n) {
                            if (!c[0] || e.converters[i + " " + c[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== c[0] && c.unshift(o), n[o]
                }(m, _, n)), !i && -1 < k.inArray("script", m.dataTypes) && (m.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, c, l = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                            if ("*" === o) o = c;
                            else if ("*" !== c && c !== o) {
                        if (!(a = l[c + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + c + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, _, i), i ? (m.ifModified && ((c = _.getResponseHeader("Last-Modified")) && (k.lastModified[d] = c), (c = _.getResponseHeader("etag")) && (k.etag[d] = c)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || l) + "", i ? b.resolveWith(v, [o, l, _]) : b.rejectWith(v, [_, l, a]), _.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [_, m, i ? o : a]), x.fireWith(v, [_, l]), g && (y.trigger("ajaxComplete", [_, m]), --k.active || k.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return y(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), k._evalUrl = function(e, t, n) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t, n)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new N.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Wt = k.ajaxSettings.xhr();
    v.cors = !!Wt && "withCredentials" in Wt, v.ajax = Wt = !!Wt, k.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || Wt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ft[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && N.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Qt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Qt.pop() || k.expando + "_" + Nt.guid++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Kt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = N[r], N[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(N).removeProp(r) : N[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Qt.push(r)), o && y(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = T.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, l = k.css(e, "position"),
                u = k(e),
                d = {};
            "static" === l && (e.style.position = "relative"), s = u.offset(), o = k.css(e, "top"), c = k.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + c).indexOf("auto") ? (a = (r = u.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(c) || 0), y(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return H(this, function(e, t, n) {
                var r;
                if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = He(v.pixelPosition, function(e, t) {
            if (t) return t = Pe(e, n), Be.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return H(this, function(e, t, n) {
                    var r;
                    return b(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Zt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = E, k.isFunction = y, k.isWindow = b, k.camelCase = Q, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, k.trim = function(e) {
        return null == e ? "" : (e + "").replace(Zt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Xt = N.jQuery,
        Jt = N.$;
    return k.noConflict = function(e) {
        return N.$ === k && (N.$ = Jt), e && N.jQuery === k && (N.jQuery = Xt), k
    }, void 0 === e && (N.jQuery = N.$ = k), k
}),
function() {
    var e, t, l, u, n, r, d, f, p, h, g, m, v, y, b, x, w, _, N, C, k, S, E, T, A, j, i, D = function(e) {
        var t = new D.Index;
        return t.pipeline.add(D.trimmer, D.stopWordFilter, D.stemmer), e && e.call(t, t), t
    };
    D.version = "0.9.5", (lunr = D).utils = {}, D.utils.warn = (i = this, function(e) {
        i.console && console.warn && console.warn(e)
    }), D.utils.toString = function(e) {
        return null == e ? "" : e.toString()
    }, D.EventEmitter = function() {
        this.events = {}
    }, D.EventEmitter.prototype.addListener = function() {
        var e = Array.prototype.slice.call(arguments),
            t = e.pop(),
            n = e;
        if ("function" != typeof t) throw new TypeError("last argument must be a function");
        n.forEach(function(e) {
            this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
        }, this)
    }, D.EventEmitter.prototype.removeListener = function(e, t) {
        if (this.hasHandler(e)) {
            var n = this.events[e].indexOf(t); - 1 !== n && (this.events[e].splice(n, 1), 0 == this.events[e].length && delete this.events[e])
        }
    }, D.EventEmitter.prototype.emit = function(e) {
        if (this.hasHandler(e)) {
            var t = Array.prototype.slice.call(arguments, 1);
            this.events[e].forEach(function(e) {
                e.apply(void 0, t)
            }, this)
        }
    }, D.EventEmitter.prototype.hasHandler = function(e) {
        return e in this.events
    }, D.tokenizer = function(e) {
        if (!arguments.length || null == e) return [];
        if (Array.isArray(e)) {
            var t = e.filter(function(e) {
                return null != e
            });
            t = t.map(function(e) {
                return D.utils.toString(e).toLowerCase()
            });
            var n = [];
            return t.forEach(function(e) {
                var t = e.split(D.tokenizer.seperator);
                n = n.concat(t)
            }, this), n
        }
        return e.toString().trim().toLowerCase().split(D.tokenizer.seperator)
    }, D.tokenizer.defaultSeperator = /[\s\-]+/, D.tokenizer.seperator = D.tokenizer.defaultSeperator, D.tokenizer.setSeperator = function(e) {
        null != e && "object" == typeof e && (D.tokenizer.seperator = e)
    }, D.tokenizer.resetSeperator = function() {
        D.tokenizer.seperator = D.tokenizer.defaultSeperator
    }, D.tokenizer.getSeperator = function() {
        return D.tokenizer.seperator
    }, D.Pipeline = function() {
        this._queue = []
    }, D.Pipeline.registeredFunctions = {}, D.Pipeline.registerFunction = function(e, t) {
        t in D.Pipeline.registeredFunctions && D.utils.warn("Overwriting existing registered function: " + t), e.label = t, D.Pipeline.registeredFunctions[t] = e
    }, D.Pipeline.getRegisteredFunction = function(e) {
        return e in D.Pipeline.registeredFunctions != 1 ? null : D.Pipeline.registeredFunctions[e]
    }, D.Pipeline.warnIfFunctionNotRegistered = function(e) {
        e.label && e.label in this.registeredFunctions || D.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
    }, D.Pipeline.load = function(e) {
        var n = new D.Pipeline;
        return e.forEach(function(e) {
            var t = D.Pipeline.getRegisteredFunction(e);
            if (!t) throw new Error("Cannot load un-registered function: " + e);
            n.add(t)
        }), n
    }, D.Pipeline.prototype.add = function() {
        Array.prototype.slice.call(arguments).forEach(function(e) {
            D.Pipeline.warnIfFunctionNotRegistered(e), this._queue.push(e)
        }, this)
    }, D.Pipeline.prototype.after = function(e, t) {
        D.Pipeline.warnIfFunctionNotRegistered(t);
        var n = this._queue.indexOf(e);
        if (-1 === n) throw new Error("Cannot find existingFn");
        this._queue.splice(n + 1, 0, t)
    }, D.Pipeline.prototype.before = function(e, t) {
        D.Pipeline.warnIfFunctionNotRegistered(t);
        var n = this._queue.indexOf(e);
        if (-1 === n) throw new Error("Cannot find existingFn");
        this._queue.splice(n, 0, t)
    }, D.Pipeline.prototype.remove = function(e) {
        var t = this._queue.indexOf(e); - 1 !== t && this._queue.splice(t, 1)
    }, D.Pipeline.prototype.run = function(e) {
        for (var t = [], n = e.length, r = this._queue.length, i = 0; i < n; i++) {
            for (var o = e[i], a = 0; a < r && null != (o = this._queue[a](o, i, e)); a++);
            null != o && t.push(o)
        }
        return t
    }, D.Pipeline.prototype.reset = function() {
        this._queue = []
    }, D.Pipeline.prototype.get = function() {
        return this._queue
    }, D.Pipeline.prototype.toJSON = function() {
        return this._queue.map(function(e) {
            return D.Pipeline.warnIfFunctionNotRegistered(e), e.label
        })
    }, D.Index = function() {
        this._fields = [], this._ref = "id", this.pipeline = new D.Pipeline, this.documentStore = new D.DocumentStore, this.index = {}, this.eventEmitter = new D.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function() {
            this._idfCache = {}
        }.bind(this))
    }, D.Index.prototype.on = function() {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e)
    }, D.Index.prototype.off = function(e, t) {
        return this.eventEmitter.removeListener(e, t)
    }, D.Index.load = function(e) {
        e.version !== D.version && D.utils.warn("version mismatch: current " + D.version + " importing " + e.version);
        var t = new this;
        for (var n in t._fields = e.fields, t._ref = e.ref, t.documentStore = D.DocumentStore.load(e.documentStore), t.pipeline = D.Pipeline.load(e.pipeline), t.index = {}, e.index) t.index[n] = D.InvertedIndex.load(e.index[n]);
        return t
    }, D.Index.prototype.addField = function(e) {
        return this._fields.push(e), this.index[e] = new D.InvertedIndex, this
    }, D.Index.prototype.setRef = function(e) {
        return this._ref = e, this
    }, D.Index.prototype.saveDocument = function(e) {
        return this.documentStore = new D.DocumentStore(e), this
    }, D.Index.prototype.addDoc = function(o, e) {
        if (o) {
            e = void 0 === e || e;
            var a = o[this._ref];
            this.documentStore.addDoc(a, o), this._fields.forEach(function(e) {
                var t = this.pipeline.run(D.tokenizer(o[e]));
                this.documentStore.addFieldLength(a, e, t.length);
                var n = {};
                for (var r in t.forEach(function(e) {
                        e in n ? n[e] += 1 : n[e] = 1
                    }, this), n) {
                    var i = n[r];
                    i = Math.sqrt(i), this.index[e].addToken(r, {
                        ref: a,
                        tf: i
                    })
                }
            }, this), e && this.eventEmitter.emit("add", o, this)
        }
    }, D.Index.prototype.removeDocByRef = function(e) {
        if (e && !1 !== this.documentStore.isDocStored() && this.documentStore.hasDoc(e)) {
            var t = this.documentStore.getDoc(e);
            this.removeDoc(t, !1)
        }
    }, D.Index.prototype.removeDoc = function(e, t) {
        if (e) {
            t = void 0 === t || t;
            var n = e[this._ref];
            this.documentStore.hasDoc(n) && (this.documentStore.removeDoc(n), this._fields.forEach(function(t) {
                this.pipeline.run(D.tokenizer(e[t])).forEach(function(e) {
                    this.index[t].removeToken(e, n)
                }, this)
            }, this), t && this.eventEmitter.emit("remove", e, this))
        }
    }, D.Index.prototype.updateDoc = function(e, t) {
        t = void 0 === t || t;
        this.removeDocByRef(e[this._ref], !1), this.addDoc(e, !1), t && this.eventEmitter.emit("update", e, this)
    }, D.Index.prototype.idf = function(e, t) {
        var n = "@" + t + "/" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, n)) return this._idfCache[n];
        var r = this.index[t].getDocFreq(e),
            i = 1 + Math.log(this.documentStore.length / (r + 1));
        return this._idfCache[n] = i
    }, D.Index.prototype.getFields = function() {
        return this._fields.slice()
    }, D.Index.prototype.search = function(e, t) {
        if (!e) return [];
        e = "string" == typeof e ? {
            any: e
        } : JSON.parse(JSON.stringify(e));
        var n = null;
        null != t && (n = JSON.stringify(t));
        for (var r = new D.Configuration(n, this.getFields()).get(), i = {}, o = Object.keys(e), a = 0; a < o.length; a++) {
            var s = o[a];
            i[s] = this.pipeline.run(D.tokenizer(e[s]))
        }
        var c = {};
        for (var l in r) {
            var u = i[l] || i.any;
            if (u) {
                var d = this.fieldSearch(u, l, r),
                    f = r[l].boost;
                for (var p in d) d[p] = d[p] * f;
                for (var p in d) p in c ? c[p] += d[p] : c[p] = d[p]
            }
        }
        var h, g = [];
        for (var p in c) h = {
            ref: p,
            score: c[p]
        }, this.documentStore.hasDoc(p) && (h.doc = this.documentStore.getDoc(p)), g.push(h);
        return g.sort(function(e, t) {
            return t.score - e.score
        }), g
    }, D.Index.prototype.fieldSearch = function(e, f, t) {
        var p = t[f].bool,
            n = t[f].expand,
            r = t[f].boost,
            h = null,
            g = {};
        return 0 !== r ? (e.forEach(function(u) {
            var e = [u];
            1 == n && (e = this.index[f].expandToken(u));
            var d = {};
            e.forEach(function(e) {
                var t = this.index[f].getDocs(e),
                    n = this.idf(e, f);
                if (h && "AND" == p) {
                    var r = {};
                    for (var i in h) i in t && (r[i] = t[i]);
                    t = r
                }
                for (var i in e == u && this.fieldSearchStats(g, e, t), t) {
                    var o = this.index[f].getTermFrequency(e, i),
                        a = this.documentStore.getFieldLength(i, f),
                        s = 1;
                    0 != a && (s = 1 / Math.sqrt(a));
                    var c = 1;
                    e != u && (c = .15 * (1 - (e.length - u.length) / e.length));
                    var l = o * n * s * c;
                    i in d ? d[i] += l : d[i] = l
                }
            }, this), h = this.mergeScores(h, d, p)
        }, this), h = this.coordNorm(h, g, e.length)) : void 0
    }, D.Index.prototype.mergeScores = function(e, t, n) {
        if (!e) return t;
        if ("AND" == n) {
            var r = {};
            for (var i in t) i in e && (r[i] = e[i] + t[i]);
            return r
        }
        for (var i in t) i in e ? e[i] += t[i] : e[i] = t[i];
        return e
    }, D.Index.prototype.fieldSearchStats = function(e, t, n) {
        for (var r in n) r in e ? e[r].push(t) : e[r] = [t]
    }, D.Index.prototype.coordNorm = function(e, t, n) {
        for (var r in e)
            if (r in t) {
                var i = t[r].length;
                e[r] = e[r] * i / n
            } return e
    }, D.Index.prototype.toJSON = function() {
        var t = {};
        return this._fields.forEach(function(e) {
            t[e] = this.index[e].toJSON()
        }, this), {
            version: D.version,
            fields: this._fields,
            ref: this._ref,
            documentStore: this.documentStore.toJSON(),
            index: t,
            pipeline: this.pipeline.toJSON()
        }
    }, D.Index.prototype.use = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t)
    }, D.DocumentStore = function(e) {
        this._save = null == e || e, this.docs = {}, this.docInfo = {}, this.length = 0
    }, D.DocumentStore.load = function(e) {
        var t = new this;
        return t.length = e.length, t.docs = e.docs, t.docInfo = e.docInfo, t._save = e.save, t
    }, D.DocumentStore.prototype.isDocStored = function() {
        return this._save
    }, D.DocumentStore.prototype.addDoc = function(e, t) {
        this.hasDoc(e) || this.length++, this.docs[e] = !0 === this._save ? function(e) {
            if (null === e || "object" != typeof e) return e;
            var t = e.constructor();
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }(t) : null
    }, D.DocumentStore.prototype.getDoc = function(e) {
        return !1 === this.hasDoc(e) ? null : this.docs[e]
    }, D.DocumentStore.prototype.hasDoc = function(e) {
        return e in this.docs
    }, D.DocumentStore.prototype.removeDoc = function(e) {
        this.hasDoc(e) && (delete this.docs[e], delete this.docInfo[e], this.length--)
    }, D.DocumentStore.prototype.addFieldLength = function(e, t, n) {
        null != e && 0 != this.hasDoc(e) && (this.docInfo[e] || (this.docInfo[e] = {}), this.docInfo[e][t] = n)
    }, D.DocumentStore.prototype.updateFieldLength = function(e, t, n) {
        null != e && 0 != this.hasDoc(e) && this.addFieldLength(e, t, n)
    }, D.DocumentStore.prototype.getFieldLength = function(e, t) {
        return null == e ? 0 : e in this.docs && t in this.docInfo[e] ? this.docInfo[e][t] : 0
    }, D.DocumentStore.prototype.toJSON = function() {
        return {
            docs: this.docs,
            docInfo: this.docInfo,
            length: this.length,
            save: this._save
        }
    }, D.stemmer = (l = {
        ational: "ate",
        tional: "tion",
        enci: "ence",
        anci: "ance",
        izer: "ize",
        bli: "ble",
        alli: "al",
        entli: "ent",
        eli: "e",
        ousli: "ous",
        ization: "ize",
        ation: "ate",
        ator: "ate",
        alism: "al",
        iveness: "ive",
        fulness: "ful",
        ousness: "ous",
        aliti: "al",
        iviti: "ive",
        biliti: "ble",
        logi: "log"
    }, u = {
        icate: "ic",
        ative: "",
        alize: "al",
        iciti: "ic",
        ical: "ic",
        ful: "",
        ness: ""
    }, n = "[aeiouy]", r = "[^aeiou][^aeiouy]*", d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), p = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), g = /^(.+?)(ss|i)es$/, m = /^(.+?)([^s])s$/, v = /^(.+?)eed$/, y = /^(.+?)(ed|ing)$/, b = /.$/, x = /(at|bl|iz)$/, w = new RegExp("([^aeiouylsz])\\1$"), _ = new RegExp("^" + r + n + "[^aeiouwxy]$"), N = /^(.+?[^aeiou])y$/, C = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, k = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, S = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, E = /^(.+?)(s|t)(ion)$/, T = /^(.+?)e$/, A = /ll$/, j = new RegExp("^" + r + n + "[^aeiouwxy]$"), function(e) {
        var t, n, r, i, o, a, s;
        if (e.length < 3) return e;
        if ("y" == (r = e.substr(0, 1)) && (e = r.toUpperCase() + e.substr(1)), o = m, (i = g).test(e) ? e = e.replace(i, "$1$2") : o.test(e) && (e = e.replace(o, "$1$2")), o = y, (i = v).test(e)) {
            var c = i.exec(e);
            (i = d).test(c[1]) && (i = b, e = e.replace(i, ""))
        } else o.test(e) && (t = (c = o.exec(e))[1], (o = h).test(t) && (a = w, s = _, (o = x).test(e = t) ? e += "e" : a.test(e) ? (i = b, e = e.replace(i, "")) : s.test(e) && (e += "e")));
        return (i = N).test(e) && (e = (t = (c = i.exec(e))[1]) + "i"), (i = C).test(e) && (t = (c = i.exec(e))[1], n = c[2], (i = d).test(t) && (e = t + l[n])), (i = k).test(e) && (t = (c = i.exec(e))[1], n = c[2], (i = d).test(t) && (e = t + u[n])), o = E, (i = S).test(e) ? (t = (c = i.exec(e))[1], (i = f).test(t) && (e = t)) : o.test(e) && (t = (c = o.exec(e))[1] + c[2], (o = f).test(t) && (e = t)), (i = T).test(e) && (t = (c = i.exec(e))[1], o = p, a = j, ((i = f).test(t) || o.test(t) && !a.test(t)) && (e = t)), o = f, (i = A).test(e) && o.test(e) && (i = b, e = e.replace(i, "")), "y" == r && (e = r.toLowerCase() + e.substr(1)), e
    }), D.Pipeline.registerFunction(D.stemmer, "stemmer"), D.stopWordFilter = function(e) {
        return e && !0 !== D.stopWordFilter.stopWords[e] ? e : void 0
    }, D.clearStopWords = function() {
        D.stopWordFilter.stopWords = {}
    }, D.addStopWords = function(e) {
        null != e && !1 !== Array.isArray(e) && e.forEach(function(e) {
            D.stopWordFilter.stopWords[e] = !0
        }, this)
    }, D.resetStopWords = function() {
        D.stopWordFilter.stopWords = D.defaultStopWords
    }, D.defaultStopWords = {
        "": !0,
        a: !0,
        able: !0,
        about: !0,
        across: !0,
        after: !0,
        all: !0,
        almost: !0,
        also: !0,
        am: !0,
        among: !0,
        an: !0,
        and: !0,
        any: !0,
        are: !0,
        as: !0,
        at: !0,
        be: !0,
        because: !0,
        been: !0,
        but: !0,
        by: !0,
        can: !0,
        cannot: !0,
        could: !0,
        dear: !0,
        did: !0,
        do: !0,
        does: !0,
        either: !0,
        else: !0,
        ever: !0,
        every: !0,
        for: !0,
        from: !0,
        get: !0,
        got: !0,
        had: !0,
        has: !0,
        have: !0,
        he: !0,
        her: !0,
        hers: !0,
        him: !0,
        his: !0,
        how: !0,
        however: !0,
        i: !0,
        if: !0,
        in: !0,
        into: !0,
        is: !0,
        it: !0,
        its: !0,
        just: !0,
        least: !0,
        let: !0,
        like: !0,
        likely: !0,
        may: !0,
        me: !0,
        might: !0,
        most: !0,
        must: !0,
        my: !0,
        neither: !0,
        no: !0,
        nor: !0,
        not: !0,
        of: !0,
        off: !0,
        often: !0,
        on: !0,
        only: !0,
        or: !0,
        other: !0,
        our: !0,
        own: !0,
        rather: !0,
        said: !0,
        say: !0,
        says: !0,
        she: !0,
        should: !0,
        since: !0,
        so: !0,
        some: !0,
        than: !0,
        that: !0,
        the: !0,
        their: !0,
        them: !0,
        then: !0,
        there: !0,
        these: !0,
        they: !0,
        this: !0,
        tis: !0,
        to: !0,
        too: !0,
        twas: !0,
        us: !0,
        wants: !0,
        was: !0,
        we: !0,
        were: !0,
        what: !0,
        when: !0,
        where: !0,
        which: !0,
        while: !0,
        who: !0,
        whom: !0,
        why: !0,
        will: !0,
        with: !0,
        would: !0,
        yet: !0,
        you: !0,
        your: !0
    }, D.stopWordFilter.stopWords = D.defaultStopWords, D.Pipeline.registerFunction(D.stopWordFilter, "stopWordFilter"), D.trimmer = function(e) {
        if (null == e) throw new Error("token should not be undefined");
        return e.replace(/^\W+/, "").replace(/\W+$/, "")
    }, D.Pipeline.registerFunction(D.trimmer, "trimmer"), D.InvertedIndex = function() {
        this.root = {
            docs: {},
            df: 0
        }
    }, D.InvertedIndex.load = function(e) {
        var t = new this;
        return t.root = e.root, t
    }, D.InvertedIndex.prototype.addToken = function(e, t, n) {
        n = n || this.root;
        for (var r = 0; r <= e.length - 1;) {
            var i = e[r];
            i in n || (n[i] = {
                docs: {},
                df: 0
            }), r += 1, n = n[i]
        }
        var o = t.ref;
        n.docs[o] ? n.docs[o] = {
            tf: t.tf
        } : (n.docs[o] = {
            tf: t.tf
        }, n.df += 1)
    }, D.InvertedIndex.prototype.hasToken = function(e) {
        if (!e) return !1;
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e[n]]) return !1;
            t = t[e[n]]
        }
        return !0
    }, D.InvertedIndex.prototype.getNode = function(e) {
        if (!e) return null;
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e[n]]) return null;
            t = t[e[n]]
        }
        return t
    }, D.InvertedIndex.prototype.getDocs = function(e) {
        var t = this.getNode(e);
        return null == t ? {} : t.docs
    }, D.InvertedIndex.prototype.getTermFrequency = function(e, t) {
        var n = this.getNode(e);
        return null == n ? 0 : t in n.docs ? n.docs[t].tf : 0
    }, D.InvertedIndex.prototype.getDocFreq = function(e) {
        var t = this.getNode(e);
        return null == t ? 0 : t.df
    }, D.InvertedIndex.prototype.removeToken = function(e, t) {
        if (e) {
            var n = this.getNode(e);
            null != n && t in n.docs && (delete n.docs[t], n.df -= 1)
        }
    }, D.InvertedIndex.prototype.expandToken = function(e, t, n) {
        if (null == e || "" == e) return [];
        t = t || [];
        if (null == n && null == (n = this.getNode(e))) return t;
        for (var r in 0 < n.df && t.push(e), n) "docs" !== r && "df" !== r && this.expandToken(e + r, t, n[r]);
        return t
    }, D.InvertedIndex.prototype.toJSON = function() {
        return {
            root: this.root
        }
    }, D.Configuration = function(e, t) {
        var n;
        e = e || "";
        if (null == t || null == t) throw new Error("fields should not be null");
        this.config = {};
        try {
            n = JSON.parse(e), this.buildUserConfig(n, t)
        } catch (e) {
            D.utils.warn("user configuration parse failed, will use default configuration"), this.buildDefaultConfig(t)
        }
    }, D.Configuration.prototype.buildDefaultConfig = function(e) {
        this.reset(), e.forEach(function(e) {
            this.config[e] = {
                boost: 1,
                bool: "OR",
                expand: !1
            }
        }, this)
    }, D.Configuration.prototype.buildUserConfig = function(e, t) {
        var n = "OR",
            r = !1;
        if (this.reset(), "bool" in e && (n = e.bool || n), "expand" in e && (r = e.expand || r), "fields" in e)
            for (var i in e.fields)
                if (-1 < t.indexOf(i)) {
                    var o = e.fields[i],
                        a = r;
                    null != o.expand && (a = o.expand), this.config[i] = {
                        boost: o.boost || 0 === o.boost ? o.boost : 1,
                        bool: o.bool || n,
                        expand: a
                    }
                } else D.utils.warn("field name in user configuration not found in index instance fields");
        else this.addAllFields2UserConfig(n, r, t)
    }, D.Configuration.prototype.addAllFields2UserConfig = function(t, n, e) {
        e.forEach(function(e) {
            this.config[e] = {
                boost: 1,
                bool: t,
                expand: n
            }
        }, this)
    }, D.Configuration.prototype.get = function() {
        return this.config
    }, D.Configuration.prototype.reset = function() {
        this.config = {}
    }, lunr.SortedSet = function() {
        this.length = 0, this.elements = []
    }, lunr.SortedSet.load = function(e) {
        var t = new this;
        return t.elements = e, t.length = e.length, t
    }, lunr.SortedSet.prototype.add = function() {
        var e, t;
        for (e = 0; e < arguments.length; e++) t = arguments[e], ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
        this.length = this.elements.length
    }, lunr.SortedSet.prototype.toArray = function() {
        return this.elements.slice()
    }, lunr.SortedSet.prototype.map = function(e, t) {
        return this.elements.map(e, t)
    }, lunr.SortedSet.prototype.forEach = function(e, t) {
        return this.elements.forEach(e, t)
    }, lunr.SortedSet.prototype.indexOf = function(e) {
        for (var t = 0, n = this.elements.length, r = n - t, i = t + Math.floor(r / 2), o = this.elements[i]; 1 < r;) {
            if (o === e) return i;
            o < e && (t = i), e < o && (n = i), r = n - t, i = t + Math.floor(r / 2), o = this.elements[i]
        }
        return o === e ? i : -1
    }, lunr.SortedSet.prototype.locationFor = function(e) {
        for (var t = 0, n = this.elements.length, r = n - t, i = t + Math.floor(r / 2), o = this.elements[i]; 1 < r;) o < e && (t = i), e < o && (n = i), r = n - t, i = t + Math.floor(r / 2), o = this.elements[i];
        return e < o ? i : o < e ? i + 1 : void 0
    }, lunr.SortedSet.prototype.intersect = function(e) {
        for (var t = new lunr.SortedSet, n = 0, r = 0, i = this.length, o = e.length, a = this.elements, s = e.elements; !(i - 1 < n || o - 1 < r);) a[n] !== s[r] ? a[n] < s[r] ? n++ : a[n] > s[r] && r++ : (t.add(a[n]), n++, r++);
        return t
    }, lunr.SortedSet.prototype.clone = function() {
        var e = new lunr.SortedSet;
        return e.elements = this.toArray(), e.length = e.elements.length, e
    }, lunr.SortedSet.prototype.union = function(e) {
        var t, n, r;
        n = this.length >= e.length ? (t = this, e) : (t = e, this), r = t.clone();
        for (var i = 0, o = n.toArray(); i < o.length; i++) r.add(o[i]);
        return r
    }, lunr.SortedSet.prototype.toJSON = function() {
        return this.toArray()
    }, e = this, t = function() {
        return D
    }, "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.elasticlunr = t()
}(),
function(i) {
    "use strict";
    i.fn.fitVids = function(e) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var t = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', t.appendChild(r.childNodes[1])
        }
        return e && i.extend(n, e), this.each(function() {
            var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            n.customSelector && e.push(n.customSelector);
            var r = ".fitvidsignore";
            n.ignore && (r = r + ", " + n.ignore);
            var t = i(this).find(e.join(","));
            (t = (t = t.not("object object")).not(r)).each(function() {
                var e = i(this);
                if (!(0 < e.parents(r).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                    if (!e.attr("id")) {
                        var n = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", n)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
        return window.hljs
    }))
}(function(i) {
    function y(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function p(e) {
        return e.nodeName.toLowerCase()
    }

    function b(e, t) {
        var n = e && e.exec(t);
        return n && 0 == n.index
    }

    function x(e, t) {
        var n, r = {};
        for (n in e) r[n] = e[n];
        if (t)
            for (n in t) r[n] = t[n];
        return r
    }

    function h(e) {
        var i = [];
        return function e(t, n) {
            for (var r = t.firstChild; r; r = r.nextSibling) 3 == r.nodeType ? n += r.nodeValue.length : 1 == r.nodeType && (i.push({
                event: "start",
                offset: n,
                node: r
            }), n = e(r, n), p(r).match(/br|hr|img|input/) || i.push({
                event: "stop",
                offset: n,
                node: r
            }));
            return n
        }(e, 0), i
    }

    function w(e, t, s, n) {
        function c(e, t, n, r) {
            var i = '<span class="' + (r ? "" : C.classPrefix);
            return (i += e + '">') + t + (n ? "" : "</span>")
        }

        function l() {
            return void 0 !== f.sL ? function() {
                if (f.sL && !k[f.sL]) return y(h);
                var e = f.sL ? w(f.sL, h, !0, o[f.sL]) : _(h);
                return 0 < f.r && (g += e.r), "continuous" == f.subLanguageMode && (o[f.sL] = e.top), c(e.language, e.value, !1, !0)
            }() : function() {
                if (!f.k) return y(h);
                var e, t, n, r = "",
                    i = 0;
                f.lR.lastIndex = 0;
                for (var o = f.lR.exec(h); o;) {
                    r += y(h.substr(i, o.index - i));
                    var a = (e = f, t = o, n = d.cI ? t[0].toLowerCase() : t[0], e.k.hasOwnProperty(n) && e.k[n]);
                    a ? (g += a[1], r += c(a[0], y(o[0]))) : r += y(o[0]), i = f.lR.lastIndex, o = f.lR.exec(h)
                }
                return r + y(h.substr(i))
            }()
        }

        function u(e, t) {
            var n = e.cN ? c(e.cN, "", !0) : "";
            h = e.rB ? (p += n, "") : e.eB ? (p += y(t) + n, "") : (p += n, t), f = Object.create(e, {
                parent: {
                    value: f
                }
            })
        }

        function r(e, t) {
            if (h += e, void 0 === t) return p += l(), 0;
            var n = function(e, t) {
                for (var n = 0; n < t.c.length; n++)
                    if (b(t.c[n].bR, e)) return t.c[n]
            }(t, f);
            if (n) return p += l(), u(n, t), n.rB ? 0 : t.length;
            var r, i, o = function e(t, n) {
                if (b(t.eR, n)) {
                    for (; t.endsParent && t.parent;) t = t.parent;
                    return t
                }
                return t.eW ? e(t.parent, n) : void 0
            }(f, t);
            if (o) {
                var a = f;
                for (a.rE || a.eE || (h += t), p += l(); f.cN && (p += "</span>"), g += f.r, (f = f.parent) != o.parent;);
                return a.eE && (p += y(t)), h = "", o.starts && u(o.starts, ""), a.rE ? 0 : t.length
            }
            if (r = t, i = f, !s && b(i.iR, r)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (f.cN || "<unnamed>") + '"');
            return h += t, t.length || 1
        }
        var d = N(e);
        if (!d) throw new Error('Unknown language: "' + e + '"');
        ! function(s) {
            function c(e) {
                return e && e.source || e
            }

            function l(e, t) {
                return new RegExp(c(e), "m" + (s.cI ? "i" : "") + (t ? "g" : ""))
            }! function t(n, e) {
                if (!n.compiled) {
                    if (n.compiled = !0, n.k = n.k || n.bK, n.k) {
                        var r = {},
                            i = function(n, e) {
                                s.cI && (e = e.toLowerCase()), e.split(" ").forEach(function(e) {
                                    var t = e.split("|");
                                    r[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                                })
                            };
                        "string" == typeof n.k ? i("keyword", n.k) : Object.keys(n.k).forEach(function(e) {
                            i(e, n.k[e])
                        }), n.k = r
                    }
                    n.lR = l(n.l || /\b\w+\b/, !0), e && (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"), n.b || (n.b = /\B|\b/), n.bR = l(n.b), n.e || n.eW || (n.e = /\B|\b/), n.e && (n.eR = l(n.e)), n.tE = c(n.e) || "", n.eW && e.tE && (n.tE += (n.e ? "|" : "") + e.tE)), n.i && (n.iR = l(n.i)), void 0 === n.r && (n.r = 1), n.c || (n.c = []);
                    var o = [];
                    n.c.forEach(function(t) {
                        t.v ? t.v.forEach(function(e) {
                            o.push(x(t, e))
                        }) : o.push("self" == t ? n : t)
                    }), n.c = o, n.c.forEach(function(e) {
                        t(e, n)
                    }), n.starts && t(n.starts, e);
                    var a = n.c.map(function(e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([n.tE, n.i]).map(c).filter(Boolean);
                    n.t = a.length ? l(a.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }(s)
        }(d);
        var i, f = n || d,
            o = {},
            p = "";
        for (i = f; i != d; i = i.parent) i.cN && (p = c(i.cN, "", !0) + p);
        var h = "",
            g = 0;
        try {
            for (var a, m, v = 0; f.t.lastIndex = v, a = f.t.exec(t);) m = r(t.substr(v, a.index - v), a[0]), v = a.index + m;
            for (r(t.substr(v)), i = f; i.parent; i = i.parent) i.cN && (p += "</span>");
            return {
                r: g,
                value: p,
                language: e,
                top: f
            }
        } catch (e) {
            if (-1 != e.message.indexOf("Illegal")) return {
                r: 0,
                value: y(t)
            };
            throw e
        }
    }

    function _(n, e) {
        e = e || C.languages || Object.keys(k);
        var r = {
                r: 0,
                value: y(n)
            },
            i = r;
        return e.forEach(function(e) {
            if (N(e)) {
                var t = w(e, n, !1);
                t.language = e, t.r > i.r && (i = t), t.r > r.r && (i = r, r = t)
            }
        }), i.language && (r.second_best = i), r
    }

    function g(e) {
        return C.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) {
            return t.replace(/\t/g, C.tabReplace)
        })), C.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function t(e) {
        var t, n, r, i, o, a, s = ((t = e).className + " " + (t.parentNode ? t.parentNode.className : "")).split(/\s+/).map(function(e) {
            return e.replace(/^lang(uage)?-/, "")
        }).filter(function(e) {
            return N(e) || /no(-?)highlight|plain|text/.test(e)
        })[0];
        if (!/no(-?)highlight|plain|text/.test(s)) {
            var c;
            C.useBR ? (c = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : c = e;
            var l = c.textContent,
                u = s ? w(s, l, !0) : _(l),
                d = h(c);
            if (d.length) {
                var f = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                f.innerHTML = u.value, u.value = function(e, t, n) {
                    function r() {
                        return e.length && t.length ? e[0].offset != t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" == t[0].event ? e : t : e.length ? e : t
                    }

                    function i(e) {
                        c += "<" + p(e) + Array.prototype.map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + y(e.value) + '"'
                        }).join("") + ">"
                    }

                    function o(e) {
                        c += "</" + p(e) + ">"
                    }

                    function a(e) {
                        ("start" == e.event ? i : o)(e.node)
                    }
                    for (var s = 0, c = "", l = []; e.length || t.length;) {
                        var u = r();
                        if (c += y(n.substr(s, u[0].offset - s)), s = u[0].offset, u == e) {
                            for (l.reverse().forEach(o); a(u.splice(0, 1)[0]), (u = r()) == e && u.length && u[0].offset == s;);
                            l.reverse().forEach(i)
                        } else "start" == u[0].event ? l.push(u[0].node) : l.pop(), a(u.splice(0, 1)[0])
                    }
                    return c + y(n.substr(s))
                }(d, h(f), l)
            }
            u.value = g(u.value), e.innerHTML = u.value, e.className = (n = e.className, r = s, i = u.language, o = r ? m[r] : i, a = [n.trim()], n.match(/\bhljs\b/) || a.push("hljs"), -1 === n.indexOf(o) && a.push(o), a.join(" ").trim()), e.result = {
                language: u.language,
                re: u.r
            }, u.second_best && (e.second_best = {
                language: u.second_best.language,
                re: u.second_best.r
            })
        }
    }

    function n() {
        if (!n.called) {
            n.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, t)
        }
    }

    function N(e) {
        return k[e] || k[m[e]]
    }
    var C = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        k = {},
        m = {};
    return i.highlight = w, i.highlightAuto = _, i.fixMarkup = g, i.highlightBlock = t, i.configure = function(e) {
        C = x(C, e)
    }, i.initHighlighting = n, i.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", n, !1), addEventListener("load", n, !1)
    }, i.registerLanguage = function(t, e) {
        var n = k[t] = e(i);
        n.aliases && n.aliases.forEach(function(e) {
            m[e] = t
        })
    }, i.listLanguages = function() {
        return Object.keys(k)
    }, i.getLanguage = N, i.inherit = x, i.IR = "[a-zA-Z]\\w*", i.UIR = "[a-zA-Z_]\\w*", i.NR = "\\b\\d+(\\.\\d+)?", i.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", i.BNR = "\\b(0b[01]+)", i.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", i.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, i.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [i.BE]
    }, i.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [i.BE]
    }, i.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    }, i.C = function(e, t, n) {
        var r = i.inherit({
            cN: "comment",
            b: e,
            e: t,
            c: []
        }, n || {});
        return r.c.push(i.PWM), r
    }, i.CLCM = i.C("//", "$"), i.CBCM = i.C("/\\*", "\\*/"), i.HCM = i.C("#", "$"), i.NM = {
        cN: "number",
        b: i.NR,
        r: 0
    }, i.CNM = {
        cN: "number",
        b: i.CNR,
        r: 0
    }, i.BNM = {
        cN: "number",
        b: i.BNR,
        r: 0
    }, i.CSSNM = {
        cN: "number",
        b: i.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, i.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [i.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [i.BE]
        }]
    }, i.TM = {
        cN: "title",
        b: i.IR,
        r: 0
    }, i.UTM = {
        cN: "title",
        b: i.UIR,
        r: 0
    }, i
}), hljs.registerLanguage("apache", function(e) {
    var t = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [e.HCM, {
            cN: "tag",
            b: "</?",
            e: ">"
        }, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {
                common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "sqbracket",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", t]
                }, t, e.QSM]
            }
        }],
        i: /\S/
    }
}), hljs.registerLanguage("bash", function(e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)}/
            }]
        },
        n = {
            cN: "string",
            b: /"/,
            e: /"/,
            c: [e.BE, t, {
                cN: "variable",
                b: /\$\(/,
                e: /\)/,
                c: [e.BE]
            }]
        };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, e.NM, n, {
            cN: "string",
            b: /'/,
            e: /'/
        }, t]
    }
}), hljs.registerLanguage("coffeescript", function(e) {
    var t = {
            keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
            literal: "true false null undefined yes no on off",
            reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
            built_in: "npm require console print module global window document"
        },
        n = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = {
            cN: "subst",
            b: /#\{/,
            e: /}/,
            k: t
        },
        i = [e.BNM, e.inherit(e.CNM, {
            starts: {
                e: "(\\s*/)?",
                r: 0
            }
        }), {
            cN: "string",
            v: [{
                b: /'''/,
                e: /'''/,
                c: [e.BE]
            }, {
                b: /'/,
                e: /'/,
                c: [e.BE]
            }, {
                b: /"""/,
                e: /"""/,
                c: [e.BE, r]
            }, {
                b: /"/,
                e: /"/,
                c: [e.BE, r]
            }]
        }, {
            cN: "regexp",
            v: [{
                b: "///",
                e: "///",
                c: [r, e.HCM]
            }, {
                b: "//[gim]*",
                r: 0
            }, {
                b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
            }]
        }, {
            cN: "property",
            b: "@" + n
        }, {
            b: "`",
            e: "`",
            eB: !0,
            eE: !0,
            sL: "javascript"
        }];
    r.c = i;
    var o = e.inherit(e.TM, {
            b: n
        }),
        a = "(\\(.*\\))?\\s*\\B[-=]>",
        s = {
            cN: "params",
            b: "\\([^\\(]",
            rB: !0,
            c: [{
                b: /\(/,
                e: /\)/,
                k: t,
                c: ["self"].concat(i)
            }]
        };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: t,
        i: /\/\*/,
        c: i.concat([e.C("###", "###"), e.HCM, {
            cN: "function",
            b: "^\\s*" + n + "\\s*=\\s*" + a,
            e: "[-=]>",
            rB: !0,
            c: [o, s]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: a,
                e: "[-=]>",
                rB: !0,
                c: [s]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [o]
            }, o]
        }, {
            cN: "attribute",
            b: n + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    }
}), hljs.registerLanguage("cpp", function(e) {
    var t = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: t,
        i: "</",
        c: [e.CLCM, e.CBCM, e.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, e.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [{
                b: /\\\n/,
                r: 0
            }, {
                b: 'include\\s*[<"]',
                e: '[>"]',
                k: "include",
                i: "\\n"
            }, e.CLCM]
        }, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: t,
            c: ["self"]
        }, {
            b: e.IR + "::",
            k: t
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "(" + e.IR + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
}), hljs.registerLanguage("cs", function(e) {
    var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
        n = e.IR + "(<" + e.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "xmlDocTag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "\x3c!--|--\x3e"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        }, e.ASM, e.QSM, e.CNM, {
            bK: "class namespace interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + n + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
}), hljs.registerLanguage("css", function(e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        n = {
            cN: "function",
            b: t + "\\(",
            rB: !0,
            eE: !0,
            e: "\\("
        },
        r = {
            cN: "rule",
            b: /[A-Z\_\.\-]+\s*:/,
            rB: !0,
            e: ";",
            eW: !0,
            c: [{
                cN: "attribute",
                b: /\S/,
                e: ":",
                eE: !0,
                starts: {
                    cN: "value",
                    eW: !0,
                    eE: !0,
                    c: [n, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                        cN: "hexcolor",
                        b: "#[0-9A-Fa-f]+"
                    }, {
                        cN: "important",
                        b: "!important"
                    }]
                }
            }]
        };
    return {
        cI: !0,
        i: /[=\/|']/,
        c: [e.CBCM, r, {
            cN: "id",
            b: /\#[A-Za-z0-9_-]+/
        }, {
            cN: "class",
            b: /\.[A-Za-z0-9_-]+/,
            r: 0
        }, {
            cN: "attr_selector",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [n, e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "tag",
            b: t,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: /\S/,
            r: 0,
            c: [e.CBCM, r]
        }]
    }
}), hljs.registerLanguage("diff", function(e) {
    return {
        aliases: ["patch"],
        c: [{
            cN: "chunk",
            r: 10,
            v: [{
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "header",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /=====/,
                e: /=====$/
            }, {
                b: /^\-\-\-/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+\+\+/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "change",
            b: "^\\!",
            e: "$"
        }]
    }
}), hljs.registerLanguage("http", function(e) {
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: !0
            }
        }]
    }
}), hljs.registerLanguage("ini", function(e) {
    return {
        cI: !0,
        i: /\S/,
        c: [e.C(";", "$"), {
            cN: "title",
            b: "^\\[",
            e: "\\]"
        }, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{
                cN: "value",
                eW: !0,
                k: "on off true false yes no",
                c: [e.QSM, e.NM],
                r: 0
            }]
        }]
    }
}), hljs.registerLanguage("java", function(e) {
    var t = e.UIR + "(<" + e.UIR + ">)?",
        n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        r = {
            cN: "number",
            b: "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
            r: 0
        };
    return {
        aliases: ["jsp"],
        k: n,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [{
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            }]
        }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "new throw return",
            r: 0
        }, {
            cN: "function",
            b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: n,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: n,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, r, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
}), hljs.registerLanguage("javascript", function(e) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "pi",
            r: 10,
            v: [{
                b: /^\s*('|")use strict('|")/
            }, {
                b: /^\s*('|")use asm('|")/
            }]
        }, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            r: 0
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: />\s*[);\]]/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [e.CLCM, e.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + e.IR,
            r: 0
        }, {
            bK: "import",
            e: "[;$]",
            k: "import from as",
            c: [e.ASM, e.QSM]
        }, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }]
    }
}), hljs.registerLanguage("json", function(e) {
    var t = {
            literal: "true false null"
        },
        n = [e.QSM, e.CNM],
        r = {
            cN: "value",
            e: ",",
            eW: !0,
            eE: !0,
            c: n,
            k: t
        },
        i = {
            b: "{",
            e: "}",
            c: [{
                cN: "attribute",
                b: '\\s*"',
                e: '"\\s*:\\s*',
                eB: !0,
                eE: !0,
                c: [e.BE],
                i: "\\n",
                starts: r
            }],
            i: "\\S"
        },
        o = {
            b: "\\[",
            e: "\\]",
            c: [e.inherit(r, {
                cN: null
            })],
            i: "\\S"
        };
    return n.splice(n.length, 0, i, o), {
        c: n,
        k: t,
        i: "\\S"
    }
}), hljs.registerLanguage("makefile", function(e) {
    var t = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [e.BE]
    };
    return {
        aliases: ["mk", "mak"],
        c: [e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [t]
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [e.QSM, t]
        }]
    }
}), hljs.registerLanguage("xml", function(e) {
    var t = {
            b: /<\?(php)?(?!\w)/,
            e: /\?>/,
            sL: "php",
            subLanguageMode: "continuous"
        },
        n = {
            eW: !0,
            i: /</,
            r: 0,
            c: [t, {
                cN: "attribute",
                b: "[A-Za-z0-9\\._:-]+",
                r: 0
            }, {
                b: "=",
                r: 0,
                c: [{
                    cN: "value",
                    c: [t],
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }, {
                        b: /[^\s\/>]+/
                    }]
                }]
            }]
        };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, e.C("\x3c!--", "--\x3e", {
            r: 10
        }), {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [n],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [n],
            starts: {
                e: "<\/script>",
                rE: !0,
                sL: ""
            }
        }, t, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, n]
        }]
    }
}), hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            }]
        }]
    }
}), hljs.registerLanguage("nginx", function(e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$\d+/
            }, {
                b: /\$\{/,
                e: /}/
            }, {
                b: "[\\$\\@]" + e.UIR
            }]
        },
        n = {
            eW: !0,
            l: "[a-z/_]+",
            k: {
                built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
            },
            r: 0,
            i: "=>",
            c: [e.HCM, {
                cN: "string",
                c: [e.BE, t],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }]
            }, {
                cN: "url",
                b: "([a-z]+):/",
                e: "\\s",
                eW: !0,
                eE: !0,
                c: [t]
            }, {
                cN: "regexp",
                c: [e.BE, t],
                v: [{
                    b: "\\s\\^",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "~\\*?\\s+",
                    e: "\\s|{|;",
                    rE: !0
                }, {
                    b: "\\*(\\.[a-z\\-]+)+"
                }, {
                    b: "([a-z\\-]+\\.)+\\*"
                }]
            }, {
                cN: "number",
                b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                cN: "number",
                b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                r: 0
            }, t]
        };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "title",
                b: e.UIR,
                starts: n
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
}), hljs.registerLanguage("objectivec", function(e) {
    var t = /[a-zA-Z@][a-zA-Z0-9_]*/,
        n = "@interface @class @protocol @implementation";
    return {
        aliases: ["m", "mm", "objc", "obj-c"],
        k: {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        },
        l: t,
        i: "</",
        c: [{
            cN: "built_in",
            b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
        }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [{
                b: '@"',
                e: '"',
                i: "\\n",
                c: [e.BE]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [{
                cN: "title",
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                }]
            }]
        }, {
            cN: "class",
            b: "(" + n.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: n,
            l: t,
            c: [e.UTM]
        }, {
            cN: "variable",
            b: "\\." + e.UIR,
            r: 0
        }]
    }
}), hljs.registerLanguage("perl", function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
        n = {
            cN: "subst",
            b: "[$@]\\{",
            e: "\\}",
            k: t
        },
        r = {
            b: "->{",
            e: "}"
        },
        i = {
            cN: "variable",
            v: [{
                b: /\$\d/
            }, {
                b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
            }, {
                b: /[\$%@][^\s\w{]/,
                r: 0
            }]
        },
        o = e.C("^(__END__|__DATA__)", "\\n$", {
            r: 5
        }),
        a = [e.BE, n, i],
        s = [i, e.HCM, o, e.C("^\\=\\w", "\\=cut", {
            eW: !0
        }), r, {
            cN: "string",
            c: a,
            v: [{
                b: "q[qwxr]?\\s*\\(",
                e: "\\)",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\[",
                e: "\\]",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\{",
                e: "\\}",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\|",
                e: "\\|",
                r: 5
            }, {
                b: "q[qwxr]?\\s*\\<",
                e: "\\>",
                r: 5
            }, {
                b: "qw\\s+q",
                e: "q",
                r: 5
            }, {
                b: "'",
                e: "'",
                c: [e.BE]
            }, {
                b: '"',
                e: '"'
            }, {
                b: "`",
                e: "`",
                c: [e.BE]
            }, {
                b: "{\\w+}",
                c: [],
                r: 0
            }, {
                b: "-?\\w+\\s*\\=\\>",
                c: [],
                r: 0
            }]
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            k: "split return print reverse grep",
            r: 0,
            c: [e.HCM, o, {
                cN: "regexp",
                b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                r: 10
            }, {
                cN: "regexp",
                b: "(m|qr)?/",
                e: "/[a-z]*",
                c: [e.BE],
                r: 0
            }]
        }, {
            cN: "sub",
            bK: "sub",
            e: "(\\s*\\(.*?\\))?[;{]",
            r: 5
        }, {
            cN: "operator",
            b: "-\\w\\b",
            r: 0
        }];
    return n.c = s, {
        aliases: ["pl"],
        k: t,
        c: r.c = s
    }
}), hljs.registerLanguage("php", function(e) {
    var t = {
            cN: "variable",
            b: "\\$+[a-zA-Z_-ÃƒÂ¿][a-zA-Z0-9_-ÃƒÂ¿]*"
        },
        n = {
            cN: "preprocessor",
            b: /<\?(php)?|\?>/
        },
        r = {
            cN: "string",
            c: [e.BE, n],
            v: [{
                b: 'b"',
                e: '"'
            }, {
                b: "b'",
                e: "'"
            }, e.inherit(e.ASM, {
                i: null
            }), e.inherit(e.QSM, {
                i: null
            })]
        },
        i = {
            v: [e.BNM, e.CNM]
        };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
            c: [{
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, n]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [e.BE]
        }, n, t, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", t, e.CBCM, r, i]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [e.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [e.UTM]
        }, {
            b: "=>"
        }, r, i]
    }
}), hljs.registerLanguage("python", function(e) {
    var t = {
            cN: "prompt",
            b: /^(>>>|\.\.\.) /
        },
        n = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: /(u|b)?r?'''/,
                e: /'''/,
                c: [t],
                r: 10
            }, {
                b: /(u|b)?r?"""/,
                e: /"""/,
                c: [t],
                r: 10
            }, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {
                b: /(u|r|ur)"/,
                e: /"/,
                r: 10
            }, {
                b: /(b|br)'/,
                e: /'/
            }, {
                b: /(b|br)"/,
                e: /"/
            }, e.ASM, e.QSM]
        },
        r = {
            cN: "number",
            r: 0,
            v: [{
                b: e.BNR + "[lLjJ]?"
            }, {
                b: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                b: e.CNR + "[lLjJ]?"
            }]
        },
        i = {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: ["self", t, r, n]
        };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [t, r, n, e.HCM, {
            v: [{
                cN: "function",
                bK: "def",
                r: 10
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, i]
        }, {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
}), hljs.registerLanguage("ruby", function(e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        r = {
            cN: "yardoctag",
            b: "@[A-Za-z]+"
        },
        i = {
            cN: "value",
            b: "#<",
            e: ">"
        },
        o = [e.C("#", "$", {
            c: [r]
        }), e.C("^\\=begin", "^\\=end", {
            c: [r],
            r: 10
        }), e.C("^__END__", "\\n$")],
        a = {
            cN: "subst",
            b: "#\\{",
            e: "}",
            k: n
        },
        s = {
            cN: "string",
            c: [e.BE, a],
            v: [{
                b: /'/,
                e: /'/
            }, {
                b: /"/,
                e: /"/
            }, {
                b: /`/,
                e: /`/
            }, {
                b: "%[qQwWx]?\\(",
                e: "\\)"
            }, {
                b: "%[qQwWx]?\\[",
                e: "\\]"
            }, {
                b: "%[qQwWx]?{",
                e: "}"
            }, {
                b: "%[qQwWx]?<",
                e: ">"
            }, {
                b: "%[qQwWx]?/",
                e: "/"
            }, {
                b: "%[qQwWx]?%",
                e: "%"
            }, {
                b: "%[qQwWx]?-",
                e: "-"
            }, {
                b: "%[qQwWx]?\\|",
                e: "\\|"
            }, {
                b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            }]
        },
        c = {
            cN: "params",
            b: "\\(",
            e: "\\)",
            k: n
        },
        l = [s, i, {
            cN: "class",
            bK: "class module",
            e: "$|;",
            i: /=/,
            c: [e.inherit(e.TM, {
                b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            }), {
                cN: "inheritance",
                b: "<\\s*",
                c: [{
                    cN: "parent",
                    b: "(" + e.IR + "::)?" + e.IR
                }]
            }].concat(o)
        }, {
            cN: "function",
            bK: "def",
            e: " |$|;",
            r: 0,
            c: [e.inherit(e.TM, {
                b: t
            }), c].concat(o)
        }, {
            cN: "constant",
            b: "(::)?(\\b[A-Z]\\w*(::)?)+",
            r: 0
        }, {
            cN: "symbol",
            b: e.UIR + "(\\!|\\?)?:",
            r: 0
        }, {
            cN: "symbol",
            b: ":",
            c: [s, {
                b: t
            }],
            r: 0
        }, {
            cN: "number",
            b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            r: 0
        }, {
            cN: "variable",
            b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
        }, {
            b: "(" + e.RSR + ")\\s*",
            c: [i, {
                cN: "regexp",
                c: [e.BE, a],
                i: /\n/,
                v: [{
                    b: "/",
                    e: "/[a-z]*"
                }, {
                    b: "%r{",
                    e: "}[a-z]*"
                }, {
                    b: "%r\\(",
                    e: "\\)[a-z]*"
                }, {
                    b: "%r!",
                    e: "![a-z]*"
                }, {
                    b: "%r\\[",
                    e: "\\][a-z]*"
                }]
            }].concat(o),
            r: 0
        }].concat(o);
    a.c = l;
    var u = [{
        b: /^\s*=>/,
        cN: "status",
        starts: {
            e: "$",
            c: c.c = l
        }
    }, {
        cN: "prompt",
        b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
        starts: {
            e: "$",
            c: l
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: n,
        c: o.concat(u).concat(l)
    }
}), hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>]/,
        c: [{
            cN: "operator",
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            }, e.CNM, e.CBCM, t]
        }, e.CBCM, t]
    }
}), jQuery(function(c) {
    var l = c("html"),
        t = c(window);

    function e() {
        l.toggleClass("menu-active")
    }
    c("#menu").on({
            click: function() {
                e()
            }
        }), c(".nav-menu").on({
            click: function() {
                e()
            }
        }), c(".nav-close").on({
            click: function() {
                e()
            }
        }), t.on({
            resize: function() {
                l.removeClass("menu-active")
            },
            orientationchange: function() {
                l.removeClass("menu-active")
            }
        }),
        function() {
            "use strict";
            if ("undefined" != typeof gh_search_key && "" != gh_search_key && "undefined" != typeof gh_search_migration) {
                l.addClass("has-search");
                var r, e = c(".search-field"),
                    i = c(".search-button");
                c.get(t, function(e) {
                    0 < e.posts.length && (r = elasticlunr(function() {
                        this.addField("title"), this.addField("plaintext"), this.setRef("id")
                    }), s(e), localStorage.setItem("ease_search_migration", gh_search_migration))
                }), e.on("keyup", function(e) {
                    var searchbutton = document.querySelector("button.search-button");
                    0 < document.getElementById('searchfield').value.length ? searchbutton.classList.add("search-button-clear") : searchbutton.classList.remove("search-button-clear")
                }), i.on("click", function() {
                    c(this).hasClass("search-button-clear") && e.val("").focus().keyup()
                })
            }
            function s(e) {
                e.posts.forEach(function(e) {
                    r.addDoc(e)
                });
                try {
                    localStorage.setItem("dawn_search_index", JSON.stringify(r)), localStorage.setItem("dawn_search_last", e.posts[0].updated_at)
                } catch (e) {
                    console.error("Your browser local storage is full. Update your search settings following the instruction at https://github.com/TryGhost/Dawn#disable-content-search")
                }
            }
        }(),
        function() {
            "use strict";
            var t = c(".search-wrapper"),
                e = c(".search"),
                n = c(".search-field");
            c(".nav-search").on("click", function(e) {
                e.preventDefault(), t.show().outerWidth(), l.addClass("search-active"), n.focus(), l.hasClass("menu-active") && l.removeClass("menu-active")
            }), c(".search-wrapper-close, .search-wrapper").on("click", function() {
                l.removeClass("search-active")
            }), e.on("click", function(e) {
                e.stopPropagation()
            }), c(document).keyup(function(e) {
                27 === e.keyCode && l.hasClass("search-active") && (l.removeClass("search-active"), n.val("").keyup())
            }), t.on("transitionend", function(e) {
                l.hasClass("search-active") || t.hide()
            }), e.on("transitionend", function(e) {
                e.stopPropagation()
            })
        }();
    var n = c(".cover"),
        r = 0;

    function i() {
        if (1 <= n.length) {
            var e = t.scrollTop();
            r = 0 < e ? Math.floor(.25 * e) : 0, n.css({
                "-webkit-transform": "translate3d(0, " + r + "px, 0)",
                transform: "translate3d(0, " + r + "px, 0)"
            }), t.scrollTop() < n.height() ? l.addClass("cover-active") : l.removeClass("cover-active")
        }
    }
    i(), t.on({
            scroll: function() {
                i()
            },
            resize: function() {
                i()
            },
            orientationchange: function() {
                i()
            }
        }),
        function() {
            "use strict";
            document.querySelectorAll(".kg-gallery-image img").forEach(function(e) {
                var t = e.closest(".kg-gallery-image"),
                    n = e.attributes.width.value / e.attributes.height.value;
                t.style.flex = n + " 1 0%"
            })
        }(),
        function() {
            "use strict";
            var e = c(".js-theme"),
                t = e.find(".theme-text");

            function n() {
                l.removeClass(["theme-dark", "theme-light"]), localStorage.removeItem("cattila_theme"), t.text(e.attr("data-system"))
            }

            function r() {
                l.removeClass("theme-light").addClass("theme-dark"), localStorage.setItem("cattila_theme", "dark"), t.text(e.attr("data-dark"))
            }

            function i() {
                l.removeClass("theme-dark").addClass("theme-light"), localStorage.setItem("cattila_theme", "light"), t.text(e.attr("data-light"))
            }
            switch (localStorage.getItem("cattila_theme")) {
                case "dark":
                    r();
                    break;
                case "light":
                    i();
                    break;
                default:
                    n()
            }
            e.on("click", function(e) {
                e.preventDefault(), l.hasClass("theme-dark") || l.hasClass("theme-light") ? l.hasClass("theme-dark") ? i() : n() : r()
            })
        }()
});