"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Accordeon_js"],{

/***/ "./resources/js/components/Accordeon.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Accordeon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_Accordeon_styled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Accordeon.styled.js */ "./resources/js/components/styles/Accordeon.styled.js");
/* harmony import */ var _assets_svg_chevronBlack_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/chevronBlack.svg */ "./resources/js/assets/svg/chevronBlack.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Accordeon = function Accordeon(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0px"),
      _useState4 = _slicedToArray(_useState3, 2),
      setHeight = _useState4[0],
      setHeightState = _useState4[1]; // const [setScaleY, setScaleYState] = useState("0");


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0"),
      _useState6 = _slicedToArray(_useState5, 2),
      setRotate = _useState6[0],
      setRotateState = _useState6[1];

  var ouvrirAccordeon = function ouvrirAccordeon() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState( // setActive === "active" ? "0px" : "auto"
    setActive === "active" ? "0px" : "500px");
    /*
    setScaleYState(
        setActive === "active" ? "0" : `1`
      );
    */

    setRotateState(setActive === "active" ? "0" : "-90deg");
  }; // scaleY={setScaleY}
  //height={setHeight}


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_Accordeon_styled_js__WEBPACK_IMPORTED_MODULE_1__.AccordeonSection, {
    rotate: setRotate,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      onClick: ouvrirAccordeon,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: props.titre
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: _assets_svg_chevronBlack_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "chevronBlack"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        maxHeight: "".concat(setHeight)
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: props.content
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);

/***/ }),

/***/ "./resources/js/components/styles/Accordeon.styled.js":
/*!************************************************************!*\
  !*** ./resources/js/components/styles/Accordeon.styled.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordeonSection": () => (/* binding */ AccordeonSection)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //console.log(height)

var AccordeonSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n\n    // pour bien voir \n    margin-top:-1px;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    div {\n        //height:", " ;\n       // max-height:0;\n        overflow: hidden;\n        transition: max-height 0.6s ease-in;\n        //transition: transform 0.4s ease;\n        //transform: scaleY(", ");\n        //transform-origin: top;\n\n        p  {\n            padding: 20px;\n            font-family: 'Gotham';\n        }\n    }\n\n    button{\n        background: #fff;\n        border: 1px solid #D8D8D8;\n        border-left: none;\n        border-right: none;\n        padding: 10px;\n        display:flex;\n\n        img {\n            height : 12px;\n            margin-left: auto;\n            transition: transform 0.6s ease;\n            margin-top: auto;\n            margin-bottom: auto;\n            transform: rotate(", ");\n        }\n\n        p {\n            font-family: 'Gotham';\n            font-weight: 900;\n            font-style: normal;\n            font-size:1.2rem;\n        }\n    }\n\n"])), function (_ref) {
  var height = _ref.height;
  return height || '0';
}, function (_ref2) {
  var scaleY = _ref2.scaleY;
  return scaleY || '0';
}, function (_ref3) {
  var rotate = _ref3.rotate;
  return rotate || '0';
});

/***/ }),

/***/ "./resources/js/assets/svg/chevronBlack.svg":
/*!**************************************************!*\
  !*** ./resources/js/assets/svg/chevronBlack.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chevronBlack.svg?122cca7512d3a55e8676620514202557");

/***/ })

}]);