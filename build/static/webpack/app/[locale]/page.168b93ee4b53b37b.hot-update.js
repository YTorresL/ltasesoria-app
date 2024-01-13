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

/***/ "(app-pages-browser)/./sections/experience.js":
/*!********************************!*\
  !*** ./sections/experience.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Experience: function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_titles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/titles */ \"(app-pages-browser)/./components/titles.js\");\n\n\nfunction Experience(param) {\n    let { locale } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_titles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        header: true,\n                        text: locale.experience.title,\n                        size: \"text-base\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2 h-2 rounded-full bg-company-orange\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-5 lg:grid-cols-3 sm:grid-cols-2\",\n                children: locale.experience.list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                        title: item.title,\n                        profilePicture: item.image.profilePicture,\n                        header: item.header\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Experience;\nconst Card = (param)=>{\n    let { title, profilePicture, header } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-1 text-base\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full py-1 bg-company-orange\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-64 overflow-hidden text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"object-cover object-center w-full h-full\",\n                        src: profilePicture,\n                        alt: header\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 w-full h-full p-5 bg-black/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center justify-center w-full h-full gap-5 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_titles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                                title: true,\n                                text: title,\n                                size: \"text-lg\",\n                                color: \"text-white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full py-1 bg-company-blue\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\experience.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Card;\nvar _c, _c1;\n$RefreshReg$(_c, \"Experience\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlY3Rpb25zL2V4cGVyaWVuY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUVwQyxTQUFTQyxXQUFXLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUN6QixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNKLHFEQUFLQTt3QkFBQ00sUUFBUTt3QkFBTUMsTUFBTUwsT0FBT00sVUFBVSxDQUFDQyxLQUFLO3dCQUFFQyxNQUFLOzs7Ozs7a0NBQ3pELDhEQUFDTDt3QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1pGLE9BQU9NLFVBQVUsQ0FBQ0csSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pDLDhEQUFDQzt3QkFDQ04sT0FBT0ksS0FBS0osS0FBSzt3QkFDakJPLGdCQUFnQkgsS0FBS0ksS0FBSyxDQUFDRCxjQUFjO3dCQUN6Q1YsUUFBUU8sS0FBS1AsTUFBTTt1QkFDZFE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7S0FuQmdCYjtBQXFCaEIsTUFBTWMsT0FBTztRQUFDLEVBQUVOLEtBQUssRUFBRU8sY0FBYyxFQUFFVixNQUFNLEVBQUU7SUFDN0MscUJBQ0UsOERBQUNEO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNjO3dCQUNDZCxXQUFVO3dCQUNWZSxLQUFLSDt3QkFDTEksS0FBS2Q7Ozs7OztrQ0FFUCw4REFBQ0Q7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDSixxREFBS0E7Z0NBQ0pTLE9BQU87Z0NBQ1BGLE1BQU1FO2dDQUNOQyxNQUFLO2dDQUNMVyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtmLDhEQUFDaEI7Z0JBQUlELFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQjtNQXhCTVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvZXhwZXJpZW5jZS5qcz9lZjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy90aXRsZXNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4cGVyaWVuY2UoeyBsb2NhbGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgbWItMlwiPlxyXG4gICAgICAgIDxUaXRsZSBoZWFkZXI9e3RydWV9IHRleHQ9e2xvY2FsZS5leHBlcmllbmNlLnRpdGxlfSBzaXplPVwidGV4dC1iYXNlXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLWNvbXBhbnktb3JhbmdlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTUgbGc6Z3JpZC1jb2xzLTMgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICB7bG9jYWxlLmV4cGVyaWVuY2UubGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgcHJvZmlsZVBpY3R1cmU9e2l0ZW0uaW1hZ2UucHJvZmlsZVBpY3R1cmV9XHJcbiAgICAgICAgICAgIGhlYWRlcj17aXRlbS5oZWFkZXJ9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IENhcmQgPSAoeyB0aXRsZSwgcHJvZmlsZVBpY3R1cmUsIGhlYWRlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSB0ZXh0LWJhc2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMSBiZy1jb21wYW55LW9yYW5nZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjQgb3ZlcmZsb3ctaGlkZGVuIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICBzcmM9e3Byb2ZpbGVQaWN0dXJlfVxyXG4gICAgICAgICAgYWx0PXtoZWFkZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgcC01IGJnLWJsYWNrLzMwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgZ2FwLTUgXCI+XHJcbiAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICBjb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTEgYmctY29tcGFueS1ibHVlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRpdGxlIiwiRXhwZXJpZW5jZSIsImxvY2FsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkZXIiLCJ0ZXh0IiwiZXhwZXJpZW5jZSIsInRpdGxlIiwic2l6ZSIsImxpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJDYXJkIiwicHJvZmlsZVBpY3R1cmUiLCJpbWFnZSIsImltZyIsInNyYyIsImFsdCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sections/experience.js\n"));

/***/ })

});