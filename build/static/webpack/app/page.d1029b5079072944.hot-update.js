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

/***/ "(app-pages-browser)/./components/buttons.js":
/*!*******************************!*\
  !*** ./components/buttons.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Button(param) {\n    let { button, link, styles, url, label, target, content, onClick, type } = param;\n    if (button) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonComponent, {\n            styles: styles,\n            onClick: onClick,\n            content: content\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\buttons.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    } else if (link) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkComponent, {\n            styles: styles,\n            url: url,\n            label: label,\n            target: target,\n            type: type,\n            content: content\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\buttons.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this);\n    } else {\n        return null;\n    }\n}\n_c = Button;\nconst LinkComponent = (param)=>{\n    let { url, target, label, styles, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: url,\n        ...target && {\n            target\n        },\n        title: label,\n        className: styles,\n        children: content\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\buttons.js\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = LinkComponent;\nconst ButtonComponent = (param)=>{\n    let { styles, onClick, content, type = \"button\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: styles,\n        type: type,\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\components\\\\buttons.js\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, undefined);\n};\n_c2 = ButtonComponent;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"LinkComponent\");\n$RefreshReg$(_c2, \"ButtonComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYnV0dG9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUVyQixTQUFTQyxPQUFPLEtBVXRCO1FBVnNCLEVBQ3JCQyxNQUFNLEVBQ05DLElBQUksRUFDSkMsTUFBTSxFQUNOQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLE9BQU8sRUFDUEMsSUFBSSxFQUNMLEdBVnNCO0lBV3JCLElBQUlSLFFBQVE7UUFDVixxQkFDRSw4REFBQ1M7WUFBZ0JQLFFBQVFBO1lBQVFLLFNBQVNBO1lBQVNELFNBQVNBOzs7Ozs7SUFFaEUsT0FBTyxJQUFJTCxNQUFNO1FBQ2YscUJBQ0UsOERBQUNTO1lBQ0NSLFFBQVFBO1lBQ1JDLEtBQUtBO1lBQ0xDLE9BQU9BO1lBQ1BDLFFBQVFBO1lBQ1JHLE1BQU1BO1lBQ05GLFNBQVNBOzs7Ozs7SUFHZixPQUFPO1FBQ0wsT0FBTztJQUNUO0FBQ0Y7S0E3QmdCUDtBQStCaEIsTUFBTVcsZ0JBQWdCO1FBQUMsRUFBRVAsR0FBRyxFQUFFRSxNQUFNLEVBQUVELEtBQUssRUFBRUYsTUFBTSxFQUFFSSxPQUFPLEVBQUU7eUJBQzVELDhEQUFDUixrREFBSUE7UUFBQ2EsTUFBTVI7UUFBTSxHQUFJRSxVQUFVO1lBQUVBO1FBQU8sQ0FBQztRQUFHTyxPQUFPUjtRQUFPUyxXQUFXWDtrQkFDbkVJOzs7Ozs7O01BRkNJO0FBTU4sTUFBTUQsa0JBQWtCO1FBQUMsRUFBRVAsTUFBTSxFQUFFSyxPQUFPLEVBQUVELE9BQU8sRUFBRUUsT0FBTyxRQUFRLEVBQUU7eUJBQ3BFLDhEQUFDUjtRQUFPYSxXQUFXWDtRQUFRTSxNQUFNQTtRQUFNRCxTQUFTQTtrQkFDN0NEOzs7Ozs7O01BRkNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV0dG9ucy5qcz84YjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7XHJcbiAgYnV0dG9uLFxyXG4gIGxpbmssXHJcbiAgc3R5bGVzLFxyXG4gIHVybCxcclxuICBsYWJlbCxcclxuICB0YXJnZXQsXHJcbiAgY29udGVudCxcclxuICBvbkNsaWNrLFxyXG4gIHR5cGUsXHJcbn0pIHtcclxuICBpZiAoYnV0dG9uKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uQ29tcG9uZW50IHN0eWxlcz17c3R5bGVzfSBvbkNsaWNrPXtvbkNsaWNrfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgKVxyXG4gIH0gZWxzZSBpZiAobGluaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmtDb21wb25lbnRcclxuICAgICAgICBzdHlsZXM9e3N0eWxlc31cclxuICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgTGlua0NvbXBvbmVudCA9ICh7IHVybCwgdGFyZ2V0LCBsYWJlbCwgc3R5bGVzLCBjb250ZW50IH0pID0+IChcclxuICA8TGluayBocmVmPXt1cmx9IHsuLi4odGFyZ2V0ICYmIHsgdGFyZ2V0IH0pfSB0aXRsZT17bGFiZWx9IGNsYXNzTmFtZT17c3R5bGVzfT5cclxuICAgIHtjb250ZW50fVxyXG4gIDwvTGluaz5cclxuKVxyXG5cclxuY29uc3QgQnV0dG9uQ29tcG9uZW50ID0gKHsgc3R5bGVzLCBvbkNsaWNrLCBjb250ZW50LCB0eXBlID0gXCJidXR0b25cIiB9KSA9PiAoXHJcbiAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc30gdHlwZT17dHlwZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICB7Y29udGVudH1cclxuICA8L2J1dHRvbj5cclxuKVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkJ1dHRvbiIsImJ1dHRvbiIsImxpbmsiLCJzdHlsZXMiLCJ1cmwiLCJsYWJlbCIsInRhcmdldCIsImNvbnRlbnQiLCJvbkNsaWNrIiwidHlwZSIsIkJ1dHRvbkNvbXBvbmVudCIsIkxpbmtDb21wb25lbnQiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/buttons.js\n"));

/***/ })

});