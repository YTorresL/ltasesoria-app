"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/page",{

/***/ "(app-pages-browser)/./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ \"(app-pages-browser)/./components/buttons.js\");\n\n\n\nfunction Footer(param) {\n    let { locale } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        class: \"w-full p-4 border-t mt-auto mb-0 border-neutral-200 shadow md:flex md:items-center md:justify-between md:p-6 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"text-sm text-neutral-600 sm:text-center \",\n                children: [\n                    \"\\xa9 \",\n                    locale.footer.date,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: locale.footer.link.url,\n                        class: \"mx-1\",\n                        children: [\n                            locale.footer.link.title,\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\footer.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\footer.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap sm:gap-4\",\n                children: locale.footer.footerItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        link: true,\n                        content: item.label,\n                        styles: \"tracking-wide text-neutral-600 text-sm\",\n                        url: item.url\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\footer.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\footer.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\footer.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUNNO0FBRTNCLFNBQVNFLE9BQU8sS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWO0lBQ3JCLHFCQUNFLDhEQUFDQztRQUFPQyxPQUFNOzswQkFDWiw4REFBQ0M7Z0JBQUtELE9BQU07O29CQUEyQztvQkFDbERGLE9BQU9DLE1BQU0sQ0FBQ0csSUFBSTtrQ0FDckIsOERBQUNQLGtEQUFJQTt3QkFBQ1EsTUFBTUwsT0FBT0MsTUFBTSxDQUFDSyxJQUFJLENBQUNDLEdBQUc7d0JBQUVMLE9BQU07OzRCQUN2Q0YsT0FBT0MsTUFBTSxDQUFDSyxJQUFJLENBQUNFLEtBQUs7NEJBQUM7Ozs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWlYsT0FBT0MsTUFBTSxDQUFDVSxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDcEMsOERBQUNoQiw0Q0FBTUE7d0JBRUxRLE1BQU07d0JBQ05TLFNBQVNGLEtBQUtHLEtBQUs7d0JBQ25CQyxRQUFPO3dCQUNQVixLQUFLTSxLQUFLTixHQUFHO3VCQUpSTzs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtLQXRCZ0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzP2IxNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvbnNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvb3Rlcih7IGxvY2FsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3M9XCJ3LWZ1bGwgcC00IGJvcmRlci10IG10LWF1dG8gbWItMCBib3JkZXItbmV1dHJhbC0yMDAgc2hhZG93IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBtZDpwLTYgXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbSB0ZXh0LW5ldXRyYWwtNjAwIHNtOnRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgIMKpIHtsb2NhbGUuZm9vdGVyLmRhdGV9XHJcbiAgICAgICAgPExpbmsgaHJlZj17bG9jYWxlLmZvb3Rlci5saW5rLnVybH0gY2xhc3M9XCJteC0xXCI+XHJcbiAgICAgICAgICB7bG9jYWxlLmZvb3Rlci5saW5rLnRpdGxlfS5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBzbTpnYXAtNFwiPlxyXG4gICAgICAgIHtsb2NhbGUuZm9vdGVyLmZvb3Rlckl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgbGluaz17dHJ1ZX1cclxuICAgICAgICAgICAgY29udGVudD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgc3R5bGVzPVwidHJhY2tpbmctd2lkZSB0ZXh0LW5ldXRyYWwtNjAwIHRleHQtc21cIlxyXG4gICAgICAgICAgICB1cmw9e2l0ZW0udXJsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJCdXR0b24iLCJGb290ZXIiLCJsb2NhbGUiLCJmb290ZXIiLCJjbGFzcyIsInNwYW4iLCJkYXRlIiwiaHJlZiIsImxpbmsiLCJ1cmwiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImZvb3Rlckl0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29udGVudCIsImxhYmVsIiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/footer.js\n"));

/***/ })

});