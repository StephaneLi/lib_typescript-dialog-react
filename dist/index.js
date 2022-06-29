Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var react = require('react');

require('./style.css');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Dialog = function (_a) {
    var text = _a.text, _b = _a.showDialog, showDialog = _b === void 0 ? false : _b, _c = _a.duration, duration = _c === void 0 ? 500 : _c, className = _a.className, onClose = _a.onClose;
    var _d = react.useState(showDialog), showDialogAction = _d[0], setShowDialogAction = _d[1];
    var _e = react.useState(showDialogAction), displayDialog = _e[0], setDisplayDialog = _e[1];
    react.useEffect(function () {
        setShowDialogAction(showDialog);
    }, [showDialog]);
    react.useEffect(function () {
        if (showDialogAction) {
            setDisplayDialog(true);
        }
        else {
            var timer_1 = setTimeout(function () {
                setDisplayDialog(false);
                clearTimeout(timer_1);
            }, duration);
        }
    }, [showDialogAction, duration]);
    var onCloseAction = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setShowDialogAction(false);
                    if (!onClose) return [3 /*break*/, 2];
                    return [4 /*yield*/, onClose()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (jsxRuntime.jsx("div", __assign({ "data-testid": "dialog", className: "dialog ".concat(className, " ").concat(!showDialogAction ? ' hide' : ''), style: {
            display: displayDialog ? 'flex' : 'none',
            '--duration': duration + 'ms'
        } }, { children: displayDialog ? (jsxRuntime.jsxs("div", __assign({ className: "dialog__modal".concat(!showDialogAction ? ' hide' : '') }, { children: [jsxRuntime.jsx("p", { children: text }), jsxRuntime.jsx("i", __assign({ "data-testid": "close-button", onClick: onCloseAction }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faCircleXmark }) }))] }))) : null })));
};

exports["default"] = Dialog;
//# sourceMappingURL=index.js.map
