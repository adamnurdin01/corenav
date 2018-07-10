! function(n) {
    var e = {};

    function o(t) {
        if (e[t]) return e[t].exports;
        var r = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = n, o.c = e, o.d = function(n, e, t) {
        o.o(n, e) || Object.defineProperty(n, e, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }, o.r = function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, o.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return o.d(e, "a", e), e
    }, o.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, o.p = "", o(o.s = 25)
}([function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    };
    n.exports = function(n) {
        var e = void 0 === n ? "undefined" : t(n);
        return null != n && ("object" == e || "function" == e)
    }
}, function(n, e, o) {
    "use strict";
    var t = o(0),
        r = o(11),
        i = o(4),
        s = "Expected a function",
        a = Math.max,
        c = Math.min;
    n.exports = function(n, e, o) {
        var l, d, u, p, v, f, w = 0,
            $ = !1,
            h = !1,
            y = !0;
        if ("function" != typeof n) throw new TypeError(s);

        function m(e) {
            var o = l,
                t = d;
            return l = d = void 0, w = e, p = n.apply(t, o)
        }

        function g(n) {
            var o = n - f;
            return void 0 === f || o >= e || o < 0 || h && n - w >= u
        }

        function b() {
            var n = r();
            if (g(n)) return C(n);
            v = setTimeout(b, function(n) {
                var o = e - (n - f);
                return h ? c(o, u - (n - w)) : o
            }(n))
        }

        function C(n) {
            return v = void 0, y && l ? m(n) : (l = d = void 0, p)
        }

        function S() {
            var n = r(),
                o = g(n);
            if (l = arguments, d = this, f = n, o) {
                if (void 0 === v) return function(n) {
                    return w = n, v = setTimeout(b, e), $ ? m(n) : p
                }(f);
                if (h) return v = setTimeout(b, e), m(f)
            }
            return void 0 === v && (v = setTimeout(b, e)), p
        }
        return e = i(e) || 0, t(o) && ($ = !!o.leading, u = (h = "maxWait" in o) ? a(i(o.maxWait) || 0, e) : u, y = "trailing" in o ? !!o.trailing : y), S.cancel = function() {
            void 0 !== v && clearTimeout(v), w = 0, l = f = d = v = void 0
        }, S.flush = function() {
            return void 0 === v ? p : C(r())
        }, S
    }
}, function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        r = o(17),
        i = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
        s = r || i || Function("return this")();
    n.exports = s
}, function(n, e, o) {
    "use strict";
    var t = o(2).Symbol;
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = o(0),
        r = o(19),
        i = NaN,
        s = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt;
    n.exports = function(n) {
        if ("number" == typeof n) return n;
        if (r(n)) return i;
        if (t(n)) {
            var e = "function" == typeof n.valueOf ? n.valueOf() : n;
            n = t(e) ? e + "" : e
        }
        if ("string" != typeof n) return 0 === n ? n : +n;
        n = n.replace(s, "");
        var o = c.test(n);
        return o || l.test(n) ? d(n.slice(2), o ? 2 : 8) : a.test(n) ? i : +n
    }
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            $(".core-content").addClass("core-side-icon"), n.addClass("nav-side-icon"), e.toggleHoverSidebar && ($(".core-nav").stop().on("mouseenter", function() {
                $(".core-content").addClass("open-side-icon")
            }), $(".core-nav").stop().on("mouseleave", function() {
                $(".core-content").removeClass("open-side-icon")
            }))
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            var o = this;
            $(".core-content").addClass("core-nav-section"), console.log(n, e), this.setPosition(), $(window).on("resize", function() {
                o.setPosition()
            })
        },
        setPosition: function() {
            var n = $(".core-nav-list"),
                e = n.outerHeight() / 2;
            $(window).width() > 920 ? (n.css("margin-top", -1 * e), n.css("top", .5 * $(window).height())) : (n.css("margin-top", 0), n.css("top", 0))
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            var o = this;
            $(".core-content").addClass("core-sidebar-toggle"), n.addClass("sidebar-toggle"), this.layout(e), $(window).on("resize", function() {
                o.layout(e)
            }), e.menuFullWidth && $(".wrap-core-nav-list").addClass("full-width")
        },
        layout: function(n) {
            var e = $(window).width(),
                o = $(".core-nav-toggle"),
                t = o.height() / 2;
            if (e > 920) {
                if (o.css("margin-top", "-" + t + "px"), n.menuFullWidth) {
                    var r = $(".core-nav-list > li").length,
                        i = (e - $(".sidebar-toggle").width()) / r;
                    console.log(i), $(".core-nav-list > li").css("width", i - .5 + "px")
                }
            } else o.css("margin-top", ""), $(".core-nav-list > li").css("width", "")
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            $(".core-content").addClass("core-sidebar"), n.addClass("nav-sidebar")
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>"), $(".core-nav").addClass("fullscreen"), $(".wrap-core-nav-list .menu").wrap("<div class='nav-container'></div>");
            var o = $(".core-nav-toggle").html();
            $(".wrap-core-nav-list > .nav-container").prepend('<button class="toggle-bar core-nav-toggle">' + o + "</button>"), $(".core-nav-toggle").on("click", function(e) {
                e.preventDefault(), n.toggleClass("open-fullscreen"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open")
            })
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = {
        init: function(n, e) {
            e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>"), $(".core-nav-list").addClass("split-list"), this.devidedMenu(e)
        },
        devidedMenu: function(n) {
            var e = $(".split-list");
            e.each(function() {
                for (var n = new Array, e = $(".split-list > li"), o = Math.floor(e.length / 2), t = e.length - 2 * o, r = 0; r < 2; r++) n[r] = r < t ? o + 1 : o;
                for (r = 0; r < 2; r++) {
                    $(".wrap-core-nav-list").append($("<ul></ul>").addClass("core-nav-list"));
                    for (var i = 0; i < n[r]; i++) {
                        for (var s = 0, a = 0; a < r; a++) s += n[a];
                        $(".wrap-core-nav-list").find(".core-nav-list").last().append(e[i + s])
                    }
                }
            }), e.remove(), $(".core-nav-list").addClass("menu"), $(".core-nav-list").eq(0).addClass("left"), $(".core-nav-list").eq(0).wrap('<div class="col-menu left"></div>'), $(".core-nav-list").eq(1).addClass("right"), $(".core-nav-list").eq(1).wrap('<div class="col-menu right"></div>'), $(".core-nav").addClass("brand-center")
        }
    };
    n.exports = t
}, function(n, e, o) {
    "use strict";
    var t = o(2);
    n.exports = function() {
        return t.Date.now()
    }
}, function(n, e, o) {
    "use strict";
    var t = o(1),
        r = o(0),
        i = "Expected a function";
    n.exports = function(n, e, o) {
        var s = !0,
            a = !0;
        if ("function" != typeof n) throw new TypeError(i);
        return r(o) && (s = "leading" in o ? !!o.leading : s, a = "trailing" in o ? !!o.trailing : a), t(n, e, {
            leading: s,
            maxWait: e,
            trailing: a
        })
    }
}, function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    };
    n.exports = function(n) {
        return null != n && "object" == (void 0 === n ? "undefined" : t(n))
    }
}, function(n, e, o) {
    "use strict";
    var t = Object.prototype.toString;
    n.exports = function(n) {
        return t.call(n)
    }
}, function(n, e, o) {
    "use strict";
    var t = o(3),
        r = Object.prototype,
        i = r.hasOwnProperty,
        s = r.toString,
        a = t ? t.toStringTag : void 0;
    n.exports = function(n) {
        var e = i.call(n, a),
            o = n[a];
        try {
            n[a] = void 0;
            var t = !0
        } catch (n) {}
        var r = s.call(n);
        return t && (e ? n[a] = o : delete n[a]), r
    }
}, function(n, e, o) {
    "use strict";
    var t, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    };
    t = function() {
        return this
    }();
    try {
        t = t || Function("return this")() || (0, eval)("this")
    } catch (n) {
        "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (t = window)
    }
    n.exports = t
}, function(n, e, o) {
    "use strict";
    (function(e) {
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            },
            t = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e;
        n.exports = t
    }).call(this, o(16))
}, function(n, e, o) {
    "use strict";
    var t = o(3),
        r = o(15),
        i = o(14),
        s = "[object Null]",
        a = "[object Undefined]",
        c = t ? t.toStringTag : void 0;
    n.exports = function(n) {
        return null == n ? void 0 === n ? a : s : c && c in Object(n) ? r(n) : i(n)
    }
}, function(n, e, o) {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        r = o(18),
        i = o(13),
        s = "[object Symbol]";
    n.exports = function(n) {
        return "symbol" == (void 0 === n ? "undefined" : t(n)) || i(n) && r(n) == s
    }
}, function(n, e, o) {
    "use strict";
    var t = o(4),
        r = 1 / 0,
        i = 1.7976931348623157e308;
    n.exports = function(n) {
        return n ? (n = t(n)) === r || n === -r ? (n < 0 ? -1 : 1) * i : n == n ? n : 0 : 0 === n ? n : 0
    }
}, function(n, e, o) {
    "use strict";
    var t = o(20);
    n.exports = function(n) {
        var e = t(n),
            o = e % 1;
        return e == e ? o ? e - o : e : 0
    }
}, function(n, e, o) {
    "use strict";
    var t = o(21),
        r = "Expected a function";
    n.exports = function(n, e) {
        var o;
        if ("function" != typeof e) throw new TypeError(r);
        return n = t(n),
            function() {
                return --n > 0 && (o = e.apply(this, arguments)), n <= 1 && (e = void 0), o
            }
    }
}, function(n, e, o) {
    "use strict";
    var t = o(22);
    n.exports = function(n) {
        return t(2, n)
    }
}, function(n, e, o) {
    "use strict";
    var t = i(o(23)),
        r = (i(o(12)), i(o(1)));

    function i(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    var s = {
        init: function(n, e) {
            var o = this;
            if (n.addClass("core-nav"), $(".core-content").length || $("body").wrapInner('<div class="core-content"></div>'), $(e.menu).addClass("core-nav-list"), $(e.toggleMenu).addClass("core-nav-toggle"), $(e.menu).wrap('<div class="wrap-core-nav-list"></div>'), $(".wrap-core-nav-list, .nav-header").addClass(e.menuPosition), "default" == e.layout) switch (e.menuPosition) {
                case "bottom":
                    e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                    break;
                case "bottom center":
                    e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container center'></div>"), $(e.header).wrapInner("<div class='nav-container center'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container center'></div>"), $(e.header).wrapInner("<div class='full-container center'></div>"));
                    break;
                case "bottom right":
                    e.container ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container right'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>")) : ($(".wrap-core-nav-list").wrapInner("<div class='full-container right'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                    break;
                default:
                    e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>")
            }
            e.responsideSlide && $(".core-content").addClass("core-responsive-slide"), o.attributesIcon(e), $(window).on("resize", (0, r.default)(function() {
                o.attributesIcon(e)
            }, 1e3)), o.toggleMenu(n), o.megaMenu(e, ".core-nav-list .megamenu"), o.dropddownMenu(e, ".core-nav-list .dropdown"), $(".dropdown-overlay").on("click", function(n) {
                n.preventDefault(), $(".core-nav .dropdown").removeClass("open"), $(".core-nav .megamenu").removeClass("open"), $(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"), $(".core-nav").removeClass("open-responsive"), $(".core-responsive-slide").removeClass("open"), $.isFunction(e.onCloseDropdown) && e.onCloseDropdown(), $.isFunction(e.onCloseMegaMenu) && e.onCloseMegaMenu()
            }), $(window).on("resize", function() {
                $(".core-nav .dropdown").removeClass("open")
            }), this.setMode(e), this.scrollSpy(e), $.isFunction(e.onInit) && e.onInit()
        },
        setMode: function(n) {
            switch (n.mode) {
                case "fixed":
                    $(".core-nav").addClass("nav-core-fixed");
                    break;
                case "sticky":
                    $(".core-nav").addClass("nav-core-sticky"), $('<div class="stand-sticky"></div>').insertBefore(".core-nav"), $(".stand-sticky").css("height", $(".core-nav").height()), $(".stand-sticky").css("display", "none");
                    var e = $(".nav-core-sticky").offset().top;
                    $(window).on("resize", function() {
                        $(".stand-sticky").css("height", $(".core-nav").height())
                    }), $(window).on("scroll", function() {
                        $(window).scrollTop() > e ? ($(".nav-core-sticky").hasClass("on-scroll") || $.isFunction(n.onStartSticky) && n.onStartSticky(), $(".nav-core-sticky").addClass("on-scroll"), $(".stand-sticky").css("display", "block")) : ($(".nav-core-sticky").hasClass("on-scroll") && $.isFunction(n.onEndSticky) && n.onEndSticky(), $(".nav-core-sticky").removeClass("on-scroll"), $(".stand-sticky").css("display", "none"))
                    })
            }
        },
        topSearch: function(n) {
            var e = $(".wrap-search-top"),
                o = e.html();
            e.length && (e.remove(), $(".core-nav").prepend('<div class="wrap-search-top">' + o + "</div>")), n.container ? $(".wrap-search-top").wrapInner("<div class='nav-container'></div>") : $(".wrap-search-top").wrapInner("<div class='full-container'></div>"), $(".toggle-search-top").on("click", function(n) {
                n.preventDefault(), $(".wrap-search-top").slideToggle()
            }), $(window).on("resize", function() {
                (0, t.default)(function() {
                    $(".toggle-search-top").on("click", function(n) {
                        n.preventDefault(), $(".wrap-search-top").slideToggle()
                    })
                })()
            })
        },
        fullScreenSearch: function() {
            $(".wrap-search-fullscreen").wrapInner("<div class='nav-container'></div>"), $(".toggle-search-fullscreen").on("click", function(n) {
                n.preventDefault(), $(".wrap-search-fullscreen").addClass("open")
            }), $(window).on("resize", function() {
                (0, t.default)(function() {
                    $(".toggle-search-fullscreen").on("click", function(n) {
                        n.preventDefault(), $(".wrap-search-fullscreen").addClass("open")
                    })
                })()
            }), $(".close-search").on("click", function(n) {
                n.preventDefault(), $(".wrap-search-fullscreen").removeClass("open")
            })
        },
        toggleMenu: function(n) {
            $(".core-nav-toggle").on("click", function(e) {
                e.preventDefault(), n.toggleClass("open-responsive"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open"), $(".open-responsive").length ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown"), $(".core-nav .attributes .megamenu").removeClass("open"), $(".core-nav .attributes .dropdown").removeClass("open")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown")), $(".wrap-search-top").slideUp()
            })
        },
        megaMenu: function(n, e) {
            $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'), $(e).each(function() {
                var e = $(this),
                    o = $(this).find("a").eq(0),
                    t = $(this).data("width");
                switch (void 0 != t && ($(this).css("position", "relative"), $(this).find(".megamenu-content").eq(0).css("width", t)), e.removeClass("open"), o.on("click", function(o) {
                    o.preventDefault(), $(window).width() < 920 && (e.hasClass("open") ? (e.removeClass("open"), $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu()) : ($(".megamenu").removeClass("open"), e.addClass("open"), $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu())), s.overlayDropdown()
                }), n.dropdownEvent) {
                    case "hover":
                        o.on("mouseenter", function(o) {
                            $(window).width() > 920 && e.addClass("open"), s.overlayDropdown(), $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu()
                        }), e.stop().on("mouseleave", function() {
                            $(window).width() > 920 && e.removeClass("open"), s.overlayDropdown(), $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu()
                        });
                        break;
                    case "click":
                        o.on("click", function(o) {
                            o.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (e.removeClass("open"), $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), e.addClass("open"), $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu())), s.overlayDropdown()
                        })
                }
            })
        },
        dropddownMenu: function(n, e) {
            $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'), $(e).each(function() {
                var e = $(this),
                    o = $(this).find("a").eq(0);
                switch (e.removeClass("open"), o.on("click", function(o) {
                    o.preventDefault(), $(window).width() < 920 && (e.toggleClass("open"), e.hasClass("open") ? $.isFunction(n.onOpenDropdown) && n.onOpenDropdown() : $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()), s.overlayDropdown()
                }), n.dropdownEvent) {
                    case "hover":
                        o.on("mouseenter", function(o) {
                            $(window).width() > 920 && (e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown()), s.overlayDropdown()
                        }), e.stop().on("mouseleave", function() {
                            $(window).width() > 920 && (e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()), s.overlayDropdown()
                        });
                        break;
                    case "click":
                        o.on("click", function(o) {
                            o.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())), s.overlayDropdown()
                        });
                        break;
                    case "accordion":
                        $(".wrap-core-nav-list").addClass("dropdown-accordion"), o.on("click", function(o) {
                            o.preventDefault(), $(window).width() > 920 && (e.hasClass("open") ? (e.removeClass("open"), $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()) : (e.closest("li").closest("ul").find(".open").removeClass("open"), e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())), s.overlayDropdown()
                        })
                }
            })
        },
        overlayDropdown: function() {
            var n = $(".dropdown").hasClass("open"),
                e = $(".megamenu").hasClass("open");
            n || e ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"))
        },
        attributesIcon: function(n) {
            var e = $(window).width(),
                o = $(".core-nav .attributes"),
                t = o.length,
                r = o.html();
            t && (e > 992 ? ($(".wrap-core-nav-list").prepend('<ul class="attributes">' + r + "</ul>"), $(".nav-header .attributes").remove()) : ($(".nav-header").prepend('<ul class="attributes">' + r + "</ul>"), $(".wrap-core-nav-list .attributes").remove(), $(".core-nav .attributes").find(".dropdown").each(function() {
                var n = $(this).width(),
                    e = -1 * $(".dropdown-menu", this).width();
                $(".dropdown-menu", this).css("marginLeft", e + n)
            }), $(".core-nav .attributes").find(".megamenu").each(function() {
                var n = $(this).width(),
                    e = -1 * $(".megamenu-content", this).width();
                $(".megamenu-content", this).css("marginLeft", e + n)
            })), o.remove(), this.megaMenu(n, ".attributes .megamenu"), this.dropddownMenu(n, ".attributes .dropdown"), $(".toggle-side-menu").on("click", function(n) {
                n.preventDefault(), $(".core-content").toggleClass("open-side-menu")
            }), $(window).on("resize", function() {
                $(".core-content").removeClass("open-side-menu")
            }), this.topSearch(n), this.fullScreenSearch())
        },
        scrollSpy: function(n) {
            $(".scrollspy").each(function() {
                var e = this,
                    o = $("a", this).attr("href");
                $(o).length && $(window).on("scroll", function() {
                    var t = void 0;
                    t = "section" == n.layout && $(window).width() > 920 ? $(o).offset().top : $(o).offset().top - parseInt($(o).css("padding-top")), $(window).scrollTop() > t - 1 || $(window).scrollTop() > t + 1 ? ($(".scrollspy").removeClass("active"), $(e).addClass("active")) : $(e).removeClass("active")
                }), $("a", this).on("click", function(e) {
                    e.preventDefault();
                    var t = $("html, body"),
                        r = void 0;
                    r = "section" == n.layout && $(window).width() > 920 ? $(o).offset().top + 1 : $(o).offset().top - parseInt($(o).css("padding-top")) / 2, t.stop().animate({
                        scrollTop: r
                    }, 500)
                })
            })
        }
    };
    n.exports = s
}, function(n, e, o) {
    "use strict";
    var t, r = u(o(24)),
        i = u(o(10)),
        s = u(o(9)),
        a = u(o(8)),
        c = u(o(7)),
        l = u(o(6)),
        d = u(o(5));

    function u(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }(t = jQuery).fn.coreNavigation = function(n) {
        var e = t.extend({
            layout: "default",
            menu: ".menu",
            menuFullWidth: !1,
            header: ".nav-header",
            menuPosition: "left",
            container: !0,
            toggleMenu: ".toggle-bar",
            toggleHoverSidebar: !1,
            responsideSlide: !1,
            dropdownEvent: "hover",
            mode: "default",
            onInit: null,
            onOpenDropdown: null,
            onCloseDropdown: null,
            onOpenMegaMenu: null,
            onCloseMegaMenu: null,
            onStartSticky: null,
            onEndSticky: null,
            scrollspyActiveOn: null
        }, n);
        switch (r.default.init(this, e), e.layout) {
            case "brand-center":
                i.default.init(this, e);
                break;
            case "fullscreen":
                s.default.init(this, e);
                break;
            case "sidebar":
                a.default.init(this, e);
                break;
            case "sidebar-toggle":
                c.default.init(this, e);
                break;
            case "section":
                l.default.init(this, e);
                break;
            case "side-icon":
                d.default.init(this, e)
        }
    }
}]);