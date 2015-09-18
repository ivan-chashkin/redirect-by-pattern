define(function () { return function(__fest_context) {
    "use strict";
    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk, __fest_attrs = [],
        __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_html = "",
        __fest_blocks = {},
        __fest_params, __fest_element, __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_htmlchars = /[&<>"]/g,
        __fest_htmlchars_test = /[&<>"]/,
        __fest_short_tags = {
            "area": true,
            "base": true,
            "br": true,
            "col": true,
            "command": true,
            "embed": true,
            "hr": true,
            "img": true,
            "input": true,
            "keygen": true,
            "link": true,
            "meta": true,
            "param": true,
            "source": true,
            "wbr": true
        },
        __fest_element_stack = [],
        __fest_htmlhash = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;"
        },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/,
        __fest_jshash = {
            "\"": "\\\"",
            "\\": "\\\\",
            "/": "\\/",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\b": "\\b",
            "\f": "\\f",
            "'": "\\'",
            "<": "\\u003C",
            ">": "\\u003E"
        },
        ___fest_log_error;
    if (typeof __fest_error === "undefined") {
        ___fest_log_error = (typeof console !== "undefined" && console.error) ?
        function() {
            return Function.prototype.apply.call(console.error, console, arguments)
        } : function() {};
    } else {
        ___fest_log_error = __fest_error
    };

    function __fest_log_error(msg) {
        ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file)
    }
    function __fest_replaceHTML(chr) {
        return __fest_htmlhash[chr]
    }
    function __fest_replaceJS(chr) {
        return __fest_jshash[chr]
    }
    function __fest_extend(dest, src) {
        for (var i in src) if (src.hasOwnProperty(i)) dest[i] = src[i];
    }
    function __fest_param(fn) {
        fn.param = true;
        return fn
    }
    function __fest_call(fn, params, cp) {
        if (cp) for (var i in params) if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
        return fn.call(__fest_self, params)
    }
    function __fest_escapeJS(s) {
        if (typeof s === "string") {
            if (__fest_jschars_test.test(s)) return s.replace(__fest_jschars, __fest_replaceJS);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    function __fest_escapeHTML(s) {
        if (typeof s === "string") {
            if (__fest_htmlchars_test.test(s)) return s.replace(__fest_htmlchars, __fest_replaceHTML);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "0";
    __fest_debug_block = "fest:template";
    var json = __fest_context;
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "2";
    __fest_debug_block = "div";
    __fest_buf += ("<div class=\"replaceto\"");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "3";
    __fest_debug_block = "div";
    __fest_buf += ("><div class=\"replaceto__status\"");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "4";
    __fest_debug_block = "span";
    __fest_buf += ("><span class=\"js-status-label replaceto__status__current\"></span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "5";
    __fest_debug_block = "label";
    __fest_buf += ("<label");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "6";
    __fest_debug_block = "input";
    __fest_buf += ("><input type=\"checkbox\" class=\"js-status-checkbox replaceto__status__checkbox\"/>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "7";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"js-status-button replaceto__status__button\"></span></label></div>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "10";
    __fest_debug_block = "div";
    __fest_buf += ("<div class=\"replaceto__url\"");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "11";
    __fest_debug_block = "input";
    __fest_buf += ("><input class=\"js-url-input replaceto__url__input\" type=\"text\" placeholder=\"Example URL\"/>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "12";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"js-url-result replaceto__url__result\"></span></div>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "14";
    __fest_debug_block = "div";
    __fest_buf += ("<div class=\"replaceto__help\"");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "15";
    __fest_debug_block = "div";
    __fest_buf += ("><div class=\"js-help-button replaceto__help__link\">Примеры использования</div>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "16";
    __fest_debug_block = "div";
    __fest_buf += ("<div class=\"js-help-body replaceto__help__body\" style=\"display: none;\"");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "17";
    __fest_debug_block = "p";
    __fest_buf += ("><p>Блок сверху для проверки правил.");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "17";
    __fest_debug_block = "br";
    __fest_buf += ("<br/>Блоки снизу, список правил для замены, зеленым выделяется первое подошедшее правило для URL указанного сверху.");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "17";
    __fest_debug_block = "br";
    __fest_buf += ("<br/>Match парсятся RegExp</p>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "18";
    __fest_debug_block = "h4";
    __fest_buf += ("<h4>Примеры использования:</h4>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "19";
    __fest_debug_block = "p";
    __fest_buf += ("<p");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "19";
    __fest_debug_block = "span";
    __fest_buf += ("><span class=\"example example_header\">Match:</span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "19";
    __fest_debug_block = "fest:space";
    __fest_buf += (" ");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "19";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"example example_match\">https:\/\/mail.ru\/");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "19";
    __fest_debug_block = "strong";
    __fest_buf += ("<strong>(.*)</strong></span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "19";
    __fest_debug_block = "br";
    __fest_buf += ("<br/>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "20";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"example example_header\">Replace:</span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "20";
    __fest_debug_block = "fest:space";
    __fest_buf += (" ");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "20";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"example example_replace\">https:\/\/localhost\/");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "20";
    __fest_debug_block = "strong";
    __fest_buf += ("<strong>$1</strong></span></p>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "p";
    __fest_buf += ("<p");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "span";
    __fest_buf += ("><span class=\"example example_header\">Match:</span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "fest:space";
    __fest_buf += (" ");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"example example_match\">https:\/\/mail.ru\/");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "strong";
    __fest_buf += ("<strong>(js|css)</strong>\/");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "strong";
    __fest_buf += ("<strong>(.*)</strong></span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "21";
    __fest_debug_block = "br";
    __fest_buf += ("<br/>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "22";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"example example_header\">Replace:</span>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "22";
    __fest_debug_block = "fest:space";
    __fest_buf += (" ");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "22";
    __fest_debug_block = "span";
    __fest_buf += ("<span class=\"example example_replace\">https:\/\/");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "22";
    __fest_debug_block = "strong";
    __fest_buf += ("<strong>$1</strong>.localhost\/");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "22";
    __fest_debug_block = "strong";
    __fest_buf += ("<strong>$2</strong></span></p></div></div>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "25";
    __fest_debug_block = "div";
    __fest_buf += ("<div class=\"replaceto__header\">Правила</div>");
    __fest_debug_file = "fest\/replaceto.xml";
    __fest_debug_line = "26";
    __fest_debug_block = "div";
    __fest_buf += ("<div class=\"js-list replaceto__list\"></div></div>");
    __fest_to = __fest_chunks.length;
    if (__fest_to) {
        __fest_iterator = 0;
        for (; __fest_iterator < __fest_to; __fest_iterator++) {
            __fest_chunk = __fest_chunks[__fest_iterator];
            if (typeof __fest_chunk === "string") {
                __fest_html += __fest_chunk;
            } else {
                __fest_fn = __fest_blocks[__fest_chunk.name];
                if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
            }
        }
        return __fest_html + __fest_buf;
    } else {
        return __fest_buf;
    }
} ; });