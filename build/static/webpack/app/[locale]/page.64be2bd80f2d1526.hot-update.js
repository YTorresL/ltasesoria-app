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

/***/ "(app-pages-browser)/./sections/services.js":
/*!******************************!*\
  !*** ./sections/services.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Services: function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_titles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/titles */ \"(app-pages-browser)/./components/titles.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick-theme.css\");\n/* __next_internal_client_entry_do_not_use__ Services auto */ \n\n\n\n\nfunction Services(param) {\n    let { locale } = param;\n    const settings = {\n        dots: true,\n        infinite: true,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeed: 3000,\n        pauseOnHover: true,\n        responsive: [\n            {\n                breakpoint: 1366,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 3,\n                    infinite: true,\n                    dots: true\n                }\n            },\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 2,\n                    initialSlide: 2\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        class: \"py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 -mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_titles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        header: true,\n                        text: locale.services.title,\n                        size: \"text-base\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2 h-2 rounded-full bg-company-orange\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...settings,\n                children: locale.services.list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                        title: item.title,\n                        header: item.header,\n                        description: item.description\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = Services;\nconst Card = (param)=>{\n    let { title, description, header } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-4 my-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover: transition ease-out duration-150 border border-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"p-6 flex flex-col gap-5 items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_titles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                                header: true,\n                                text: header,\n                                size: \"text-sm\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_titles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                                title: true,\n                                text: title,\n                                size: \"text-xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-base text-neutral-600 -mt-2\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\ltasesoria-app\\\\sections\\\\services.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Card;\nvar _c, _c1;\n$RefreshReg$(_c, \"Services\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlY3Rpb25zL3NlcnZpY2VzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMkM7QUFFWDtBQUNPO0FBQ007QUFFdEMsU0FBU0UsU0FBUyxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7SUFDdkIsTUFBTUMsV0FBVztRQUNmQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxnQkFBZ0I7UUFDaEJDLFVBQVU7UUFDVkMsZUFBZTtRQUNmQyxjQUFjO1FBQ2RDLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWlQsVUFBVTtvQkFDUkcsY0FBYztvQkFDZEMsZ0JBQWdCO29CQUNoQkYsVUFBVTtvQkFDVkQsTUFBTTtnQkFDUjtZQUNGO1lBQ0E7Z0JBQ0VRLFlBQVk7Z0JBQ1pULFVBQVU7b0JBQ1JHLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJNLGNBQWM7Z0JBQ2hCO1lBQ0Y7WUFDQTtnQkFDRUQsWUFBWTtnQkFDWlQsVUFBVTtvQkFDUkcsY0FBYztvQkFDZEMsZ0JBQWdCO2dCQUNsQjtZQUNGO1NBQ0Q7SUFDSDtJQUNBLHFCQUNFLDhEQUFDTztRQUFRQyxPQUFNOzswQkFDYiw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEIscURBQUtBO3dCQUFDbUIsUUFBUTt3QkFBTUMsTUFBTWpCLE9BQU9rQixRQUFRLENBQUNDLEtBQUs7d0JBQUVDLE1BQUs7Ozs7OztrQ0FDdkQsOERBQUNOO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRWpCLDhEQUFDakIsbURBQU1BO2dCQUFFLEdBQUdHLFFBQVE7MEJBQ2pCRCxPQUFPa0IsUUFBUSxDQUFDRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDL0IsOERBQUNDO3dCQUNDTixPQUFPSSxLQUFLSixLQUFLO3dCQUNqQkgsUUFBUU8sS0FBS1AsTUFBTTt3QkFDbkJVLGFBQWFILEtBQUtHLFdBQVc7dUJBQ3hCRjs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtLQXREZ0J6QjtBQXVEaEIsTUFBTTBCLE9BQU87UUFBQyxFQUFFTixLQUFLLEVBQUVPLFdBQVcsRUFBRVYsTUFBTSxFQUFFO0lBQzFDLHFCQUNFLDhEQUFDRjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJRCxPQUFNO3NCQUNULDRFQUFDQztnQkFBSUQsT0FBTTs7a0NBQ1QsOERBQUNDOzswQ0FDQyw4REFBQ2pCLHFEQUFLQTtnQ0FBQ21CLFFBQVE7Z0NBQU1DLE1BQU1EO2dDQUFRSSxNQUFLOzs7Ozs7MENBQ3hDLDhEQUFDdkIscURBQUtBO2dDQUFDc0IsT0FBTztnQ0FBTUYsTUFBTUU7Z0NBQU9DLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFeEMsOERBQUNPO3dCQUFFZCxPQUFNO2tDQUFvQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQ7TUFkTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvc2VydmljZXMuanM/YmUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGl0bGVzXCJcclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCJcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCJcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXJ2aWNlcyh7IGxvY2FsZSB9KSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEzNjYsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwicHktMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIC1tYi04XCI+XHJcbiAgICAgICAgPFRpdGxlIGhlYWRlcj17dHJ1ZX0gdGV4dD17bG9jYWxlLnNlcnZpY2VzLnRpdGxlfSBzaXplPVwidGV4dC1iYXNlXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLWNvbXBhbnktb3JhbmdlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge2xvY2FsZS5zZXJ2aWNlcy5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICBoZWFkZXI9e2l0ZW0uaGVhZGVyfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5jb25zdCBDYXJkID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBoZWFkZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbXktMTBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIHJvdW5kZWQtbGcgc2hhZG93LVswXzJweF8xNXB4Xy0zcHhfcmdiYSgwLDAsMCwwLjA3KSwwXzEwcHhfMjBweF8tMnB4X3JnYmEoMCwwLDAsMC4wNCldIGhvdmVyOiB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTE1MCBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtNiBmbGV4IGZsZXgtY29sIGdhcC01IGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGl0bGUgaGVhZGVyPXt0cnVlfSB0ZXh0PXtoZWFkZXJ9IHNpemU9XCJ0ZXh0LXNtXCIgLz5cclxuICAgICAgICAgICAgPFRpdGxlIHRpdGxlPXt0cnVlfSB0ZXh0PXt0aXRsZX0gc2l6ZT1cInRleHQteGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtYmFzZSB0ZXh0LW5ldXRyYWwtNjAwIC1tdC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRpdGxlIiwiU2xpZGVyIiwiU2VydmljZXMiLCJsb2NhbGUiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbml0aWFsU2xpZGUiLCJzZWN0aW9uIiwiY2xhc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJ0ZXh0Iiwic2VydmljZXMiLCJ0aXRsZSIsInNpemUiLCJsaXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiQ2FyZCIsImRlc2NyaXB0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sections/services.js\n"));

/***/ })

});