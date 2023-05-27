"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/search.js

async function handler(req, res) {
    const options = {
        method: "GET",
        url: "https://shazam.p.rapidapi.com/search",
        params: {
            term: req.query.term,
            locale: "en-US",
            offset: "0",
            limit: "15"
        },
        headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "9d003c89d4msh1c6bf73fdb22b39p14624ajsn6138cb1111f9"
        }
    };
    external_axios_default().request(options).then(function(response) {
        res.status(200).json(response.data);
    }).catch(function(error) {
        console.error(error);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(846));
module.exports = __webpack_exports__;

})();