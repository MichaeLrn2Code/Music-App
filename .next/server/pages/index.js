"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: term , 1: setTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: response , 1: setResponse  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getSearchResults = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"api/search/\", {\n                params: {\n                    term\n                }\n            });\n            const { data  } = res;\n            setResponse(data.tracks.hits);\n        // console.log(data.tracks.hits);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col relative bg-background font-raleway items-center min-h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Music App - Michael Change\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl text-primary font-bold mt-20\",\n                children: [\n                    \"Music Search \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-important\",\n                        children: \"App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-winered text-2xl mt-6\",\n                children: \"Discover Music World \\xa0 \\xa0 Bring Music to Life\"\n            }, void 0, false, {\n                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-12 sm:mx-auto justify-center sm:w-full sm:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"block w-auto sm:w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active\",\n                        placeholder: \"Search for a song or an artist\",\n                        onChange: (e)=>setTerm(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 sm:mt-0 sm:ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block w-full rounded-md px-5 py-3 bg-active hover:bg-emerald text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10\",\n                            onClick: ()=>getSearchResults()\n                            ,\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            response && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-secondary text-2xl\",\n                        children: \"Search Results\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3\",\n                        children: response.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flow-root bg-light rounded-lg px-4 pb-8\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"-mt-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"p-3 rounded-md shadow-lg\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: song.track.images.coverart,\n                                                        width: 140,\n                                                        height: 140,\n                                                        alt: song.track.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-center justify-center items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"mt-2 text-lg text-center font-medium text-primary tracking-tight\",\n                                                        children: song.track.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"mt-2 mb-4 max-w-xs text-sm text-secondary block\",\n                                                        children: song.track.subtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            className: \"mt-5 text-sm text-active\",\n                                                            href: song.track.url,\n                                                            target: \"_blank\",\n                                                            children: \"Preview in Shazam\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            className: \"mt-5 text-sm text-active\",\n                                                            href: song.track.hub.providers[0].actions[0].uri,\n                                                            target: \"_blank\",\n                                                            children: \"Preview in Spotify\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            className: \"mt-5 text-sm text-active\",\n                                                            href: song.track.hub.options[0].actions[0].uri,\n                                                            target: \"_blank\",\n                                                            children: \"Preview in Apple Music\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            }, song.track.title, false, {\n                                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this)\n                        )\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-20 mb-10 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-primary text-xs\",\n                            children: [\n                                \"Created by Michael, Wai Wai Chan -\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"hover:text-active\",\n                                    href: \"mailto:michaelwai93.ca@gmail.com\",\n                                    children: \"Contact by Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wai/Documents/myPorject/music_search_app/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztnQ0FBQyxDQUNBO2dDQUFDLENBQUc7NEdBQ3JDNkIsQ0FBQztvQ0FDQTdCLFNBQVMsRUFBQyxDQUFtQjtvQ0FDN0JJLElBQUksRUFBQyxDQUFrQzs4Q0FDeEMsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJhcGkvc2VhcmNoL1wiLCB7XG4gICAgICAgIHBhcmFtczogeyB0ZXJtIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgc2V0UmVzcG9uc2UoZGF0YS50cmFja3MuaGl0cyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnRyYWNrcy5oaXRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByZWxhdGl2ZSBiZy1iYWNrZ3JvdW5kIGZvbnQtcmFsZXdheSBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NdXNpYyBBcHAgLSBNaWNoYWVsIENoYW5nZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1wcmltYXJ5IGZvbnQtYm9sZCBtdC0yMFwiPlxuICAgICAgICBNdXNpYyBTZWFyY2ggPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbXBvcnRhbnRcIj5BcHA8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2luZXJlZCB0ZXh0LTJ4bCBtdC02XCI+XG4gICAgICAgIERpc2NvdmVyIE11c2ljIFdvcmxkICZuYnNwOyAmbmJzcDsgQnJpbmcgTXVzaWMgdG8gTGlmZVxuICAgICAgPC9oMj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBzbTpteC1hdXRvIGp1c3RpZnktY2VudGVyIHNtOnctZnVsbCBzbTpmbGV4XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWF1dG8gc206dy0xLzMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHB4LTUgcHktMyB0ZXh0LWJhc2UgdGV4dC1iYWNrZ3JvdW5kIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWFjdGl2ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgc29uZyBvciBhbiBhcnRpc3RcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHNtOm10LTAgc206bWwtM1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIHB4LTUgcHktMyBiZy1hY3RpdmUgaG92ZXI6YmctZW1lcmFsZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5IHNtOnB4LTEwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldFNlYXJjaFJlc3VsdHMoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3Jlc3BvbnNlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LTJ4bFwiPlNlYXJjaCBSZXN1bHRzPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtOCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAge3Jlc3BvbnNlLm1hcCgoc29uZykgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17c29uZy50cmFjay50aXRsZX0gY2xhc3NOYW1lPVwicHQtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvdy1yb290IGJnLWxpZ2h0IHJvdW5kZWQtbGcgcHgtNCBwYi04XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tdC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC1tZCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzb25nLnRyYWNrLmltYWdlcy5jb3ZlcmFydH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c29uZy50cmFjay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWxnIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeSB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NvbmcudHJhY2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yIG1iLTQgbWF4LXcteHMgdGV4dC1zbSB0ZXh0LXNlY29uZGFyeSBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NvbmcudHJhY2suc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IHRleHQtc20gdGV4dC1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzb25nLnRyYWNrLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlldyBpbiBTaGF6YW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LXNtIHRleHQtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c29uZy50cmFjay5odWIucHJvdmlkZXJzWzBdLmFjdGlvbnNbMF0udXJpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3IGluIFNwb3RpZnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IHRleHQtc20gdGV4dC1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzb25nLnRyYWNrLmh1Yi5vcHRpb25zWzBdLmFjdGlvbnNbMF0udXJpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3IGluIEFwcGxlIE11c2ljXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgbWItNCBtYXgtdy14cyB0ZXh0LXNtIHRleHQtc2Vjb25kYXJ5IGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c29uZy50cmFjay5odWJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIG1iLTEwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdGV4dC14c1wiPlxuICAgICAgICAgICAgICBDcmVhdGVkIGJ5IE1pY2hhZWwsIFdhaSBXYWkgQ2hhbiAte1wiIFwifVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOm1pY2hhZWx3YWk5My5jYUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29udGFjdCBieSBFbWFpbFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ0ZXJtIiwic2V0VGVybSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJnZXRTZWFyY2hSZXN1bHRzIiwicmVzIiwiZ2V0IiwicGFyYW1zIiwiZGF0YSIsInRyYWNrcyIsImhpdHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJzcGFuIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwibWFwIiwic29uZyIsImltZyIsInNyYyIsInRyYWNrIiwiaW1hZ2VzIiwiY292ZXJhcnQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN1YnRpdGxlIiwiYSIsInVybCIsImh1YiIsInByb3ZpZGVycyIsImFjdGlvbnMiLCJ1cmkiLCJvcHRpb25zIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();