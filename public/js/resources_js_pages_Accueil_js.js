"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Accueil_js"],{

/***/ "./resources/js/components/styles/Accueil.styled.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/styles/Accueil.styled.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilMain": () => (/* binding */ AccueilMain)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var AccueilMain = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100vh;\n    overflow: hidden;\n    display:flex;\n    flex-direction: column;\n    justify-content:center;\n    position: relative;\n\n    h2 {\n        text-align: center;\n        align-self:center;\n        margin-left:40px;\n        margin-right:40px;\n        font-size: 1.728rem;\n        font-weight: 300;\n        font-family: 'Gotham Black';\n        max-width:250px;\n    }\n    img:nth-of-type(1) {\n        position:absolute;\n        top:0px;\n        transform: translate(0, -40%);\n    }\n\n    //bouteille\n    img:nth-of-type(2) {\n        max-width:50px;\n        align-self:center;\n        margin-top:20px;\n    }\n\n    // logo vino\n        img:nth-of-type(3) {\n        margin-top:20px;\n        max-width:100px;\n        min-widht:40px;\n        align-self:center;\n    }\n\n    select{\n        align-self:center;\n        max-width:250px;\n    }\n\n    img:nth-of-type(4) {\n        position:absolute;\n        bottom:0px;\n        transform: translate(-1%, 40%);\n    }\n\n    @media (min-width:760px){\n        img:nth-of-type(1) {\n            position:absolute;\n            top:0px;\n            transform: translate(0, -60%);\n        }\n\n        img:nth-of-type(4) {\n            position:absolute;\n            bottom:0px;\n            transform: translate(-1%, 60%);\n        }\n      }\n"])));

/***/ }),

/***/ "./resources/js/components/styles/Input.styled.js":
/*!********************************************************!*\
  !*** ./resources/js/components/styles/Input.styled.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #D8D8D8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    margin-top:20px;\n    font-family: 'Gotham Thin';\n    font-weight: 500;\n    font-style: italic;\n    padding-left:10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n "])));
var Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #D8D8D8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    margin-top:20px;\n    font-family: 'Gotham Thin';\n    font-weight: 500;\n    font-style: italic;\n    padding-left:10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n"])));

/***/ }),

/***/ "./resources/js/pages/Accueil.js":
/*!***************************************!*\
  !*** ./resources/js/pages/Accueil.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/Input.styled */ "./resources/js/components/styles/Input.styled.js");
/* harmony import */ var _components_styles_Accueil_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Accueil.styled */ "./resources/js/components/styles/Accueil.styled.js");
/* harmony import */ var _assets_svg_bouteilleBlack_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/bouteilleBlack.png */ "./resources/js/assets/svg/bouteilleBlack.png");
/* harmony import */ var _assets_svg_tacheHaut_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/svg/tacheHaut.svg */ "./resources/js/assets/svg/tacheHaut.svg");
/* harmony import */ var _assets_svg_tacheBas_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/svg/tacheBas.svg */ "./resources/js/assets/svg/tacheBas.svg");
/* harmony import */ var _assets_svg_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/svg/logo.svg */ "./resources/js/assets/svg/logo.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
 //import User from "../apis/User";










var Accueil = function Accueil(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_styles_Accueil_styled__WEBPACK_IMPORTED_MODULE_2__.AccueilMain, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: _assets_svg_tacheHaut_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
      alt: "Tache Rouge haut"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h2", {
      children: ["Bienvenue dans ton cellier ", props.usagerNom, " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: _assets_svg_bouteilleBlack_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      alt: "Logo Bouteille vino"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: _assets_svg_logo_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
      alt: "Logo Vino"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__.Select, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
        children: "S\xE9lectionne ton cellier"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
      src: _assets_svg_tacheBas_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
      alt: "Tache Rouge bas"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accueil);

/***/ }),

/***/ "./resources/js/assets/svg/bouteilleBlack.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/svg/bouteilleBlack.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bouteilleBlack.png?86cb879b19976d39739d118321269307");

/***/ }),

/***/ "./resources/js/assets/svg/logo.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/svg/logo.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.svg?72f70cd3331cb2d6dd1b4aac3d59e644");

/***/ }),

/***/ "./resources/js/assets/svg/tacheBas.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/svg/tacheBas.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/tacheBas.svg?c7a5cdf5b1906a94f4efa317d7b5d6b6");

/***/ }),

/***/ "./resources/js/assets/svg/tacheHaut.svg":
/*!***********************************************!*\
  !*** ./resources/js/assets/svg/tacheHaut.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/tacheHaut.svg?05b4a870908c09298f93ddec31986924");

/***/ })

}]);