/* eslint-disable no-undef */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _article = require("./article");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = (0, _toolkit.configureStore)({
    reducer: _defineProperty({}, _article.articleApi.reducerPath, _article.articleApi.reducer),
    middleware: function middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(_article.articleApi.middleware);
    }
});
exports.store = store;
//# sourceMappingURL=store.dev.js.map