"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/titles.js":
/*!******************************!*\
  !*** ./components/titles.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Title: function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Title(param) {\n    let { title, header, text, size, color } = param;\n    if (title) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleComponent, {\n            text: text,\n            size: size,\n            color: color\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\titles.js\",\n            lineNumber: 3,\n            columnNumber: 12\n        }, this);\n    } else if (header) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderComponent, {\n            text: text,\n            size: size,\n            color: color\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\titles.js\",\n            lineNumber: 5,\n            columnNumber: 12\n        }, this);\n    } else {\n        return null;\n    }\n}\n_c = Title;\nconst TitleComponent = (param)=>{\n    let { text, size, color = \"text-gray-900\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        class: \"\".concat(size && size, \" leading-7 font-bold \").concat(color),\n        children: text\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\titles.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = TitleComponent;\nconst HeaderComponent = (param)=>{\n    let { text, size, color = \"text-company-blue\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"\".concat(size && size, \" font-bold uppercase \").concat(color),\n        children: text\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\titles.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c2 = HeaderComponent;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"TitleComponent\");\n$RefreshReg$(_c2, \"HeaderComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGl0bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLE1BQU0sS0FBb0M7UUFBcEMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBcEM7SUFDcEIsSUFBSUosT0FBTztRQUNULHFCQUFPLDhEQUFDSztZQUFlSCxNQUFNQTtZQUFNQyxNQUFNQTtZQUFNQyxPQUFPQTs7Ozs7O0lBQ3hELE9BQU8sSUFBSUgsUUFBUTtRQUNqQixxQkFBTyw4REFBQ0s7WUFBZ0JKLE1BQU1BO1lBQU1DLE1BQU1BO1lBQU1DLE9BQU9BOzs7Ozs7SUFDekQsT0FBTztRQUNMLE9BQU87SUFDVDtBQUNGO0tBUmdCTDtBQVVoQixNQUFNTSxpQkFBaUI7UUFBQyxFQUFFSCxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxlQUFlLEVBQUU7eUJBQzdELDhEQUFDRztRQUFHQyxPQUFPLEdBQXVDSixPQUFwQ0QsUUFBUUEsTUFBSyx5QkFBNkIsT0FBTkM7a0JBQVVGOzs7Ozs7O01BRHhERztBQUlOLE1BQU1DLGtCQUFrQjtRQUFDLEVBQUVKLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLG1CQUFtQixFQUFFO3lCQUNsRSw4REFBQ0s7UUFBS0MsV0FBVyxHQUF1Q04sT0FBcENELFFBQVFBLE1BQUsseUJBQTZCLE9BQU5DO2tCQUFVRjs7Ozs7OztNQUQ5REkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aXRsZXMuanM/ZjYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gVGl0bGUoeyB0aXRsZSwgaGVhZGVyLCB0ZXh0LCBzaXplLCBjb2xvciB9KSB7XHJcbiAgaWYgKHRpdGxlKSB7XHJcbiAgICByZXR1cm4gPFRpdGxlQ29tcG9uZW50IHRleHQ9e3RleHR9IHNpemU9e3NpemV9IGNvbG9yPXtjb2xvcn0gLz5cclxuICB9IGVsc2UgaWYgKGhlYWRlcikge1xyXG4gICAgcmV0dXJuIDxIZWFkZXJDb21wb25lbnQgdGV4dD17dGV4dH0gc2l6ZT17c2l6ZX0gY29sb3I9e2NvbG9yfSAvPlxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVGl0bGVDb21wb25lbnQgPSAoeyB0ZXh0LCBzaXplLCBjb2xvciA9IFwidGV4dC1ncmF5LTkwMFwiIH0pID0+IChcclxuICA8aDIgY2xhc3M9e2Ake3NpemUgJiYgc2l6ZX0gbGVhZGluZy03IGZvbnQtYm9sZCAke2NvbG9yfWB9Pnt0ZXh0fTwvaDI+XHJcbilcclxuXHJcbmNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICh7IHRleHQsIHNpemUsIGNvbG9yID0gXCJ0ZXh0LWNvbXBhbnktYmx1ZVwiIH0pID0+IChcclxuICA8c3BhbiBjbGFzc05hbWU9e2Ake3NpemUgJiYgc2l6ZX0gZm9udC1ib2xkIHVwcGVyY2FzZSAke2NvbG9yfWB9Pnt0ZXh0fTwvc3Bhbj5cclxuKVxyXG4iXSwibmFtZXMiOlsiVGl0bGUiLCJ0aXRsZSIsImhlYWRlciIsInRleHQiLCJzaXplIiwiY29sb3IiLCJUaXRsZUNvbXBvbmVudCIsIkhlYWRlckNvbXBvbmVudCIsImgyIiwiY2xhc3MiLCJzcGFuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/titles.js\n"));

/***/ })

});