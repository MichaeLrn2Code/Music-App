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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const options = {\n        method: \"GET\",\n        url: \"https://shazam.p.rapidapi.com/search\",\n        params: {\n            term: req.query.term,\n            locale: \"en-US\",\n            offset: \"0\",\n            limit: \"15\"\n        },\n        headers: {\n            \"x-rapidapi-host\": \"shazam.p.rapidapi.com\",\n            \"x-rapidapi-key\": \"9d003c89d4msh1c6bf73fdb22b39p14624ajsn6138cb1111f9\"\n        }\n    };\n    axios__WEBPACK_IMPORTED_MODULE_0___default().request(options).then(function(response) {\n        res.status(200).json(response.data);\n    }).catch(function(error) {\n        console.error(error);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUVWLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2ZDLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEdBQUcsRUFBRSxDQUFzQztRQUMzQ0MsTUFBTSxFQUFFLENBQUM7WUFBQ0MsSUFBSSxFQUFFTixHQUFHLENBQUNPLEtBQUssQ0FBQ0QsSUFBSTtZQUFFRSxNQUFNLEVBQUUsQ0FBTztZQUFFQyxNQUFNLEVBQUUsQ0FBRztZQUFFQyxLQUFLLEVBQUUsQ0FBSTtRQUFDLENBQUM7UUFDM0VDLE9BQU8sRUFBRSxDQUFDO1lBQ1IsQ0FBaUIsa0JBQUUsQ0FBdUI7WUFDMUMsQ0FBZ0IsaUJBQUVDLG9EQUFvQztRQUN4RCxDQUFDO0lBQ0gsQ0FBQztJQUVEZCxvREFDVSxDQUFDSSxPQUFPLEVBQ2ZjLElBQUksQ0FBQyxRQUFRLENBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCaEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRixRQUFRLENBQUNHLElBQUk7SUFDcEMsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN2QkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7SUFDckIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VhcmNoLmpzPzVkM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHVybDogXCJodHRwczovL3NoYXphbS5wLnJhcGlkYXBpLmNvbS9zZWFyY2hcIixcbiAgICBwYXJhbXM6IHsgdGVybTogcmVxLnF1ZXJ5LnRlcm0sIGxvY2FsZTogXCJlbi1VU1wiLCBvZmZzZXQ6IFwiMFwiLCBsaW1pdDogXCIxNVwiIH0sXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJzaGF6YW0ucC5yYXBpZGFwaS5jb21cIixcbiAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFQSURBUElfS0VZLFxuICAgIH0sXG4gIH07XG5cbiAgYXhpb3NcbiAgICAucmVxdWVzdChvcHRpb25zKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwidGVybSIsInF1ZXJ5IiwibG9jYWxlIiwib2Zmc2V0IiwibGltaXQiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JBUElEQVBJX0tFWSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search.js"));
module.exports = __webpack_exports__;

})();