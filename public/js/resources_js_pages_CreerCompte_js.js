"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_CreerCompte_js"],{

/***/ "./resources/js/components/Forms/FormInput.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Forms/FormInput.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Input.styled */ "./resources/js/components/styles/Input.styled.js");
/* harmony import */ var _styles_FormGroup_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/FormGroup.styled */ "./resources/js/components/styles/FormGroup.styled.js");
/* harmony import */ var _styles_InputErrorMessage_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/InputErrorMessage.styled */ "./resources/js/components/styles/InputErrorMessage.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["type", "name", "value", "onChange", "onBlur", "error", "label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var FormInput = function FormInput(_ref) {
  var type = _ref.type,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_FormGroup_styled__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__.Input, _objectSpread({
      type: type,
      name: name,
      onChange: onChange,
      onBlur: onBlur
    }, rest)), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {
      shrink: value === null || value === void 0 ? void 0 : value.length,
      children: label
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_InputErrorMessage_styled__WEBPACK_IMPORTED_MODULE_3__.InputErrorMessage, {
      children: error
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);

/***/ }),

/***/ "./resources/js/components/Forms/RegisterForm/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Forms/RegisterForm/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormInput */ "./resources/js/components/Forms/FormInput.js");
/* harmony import */ var _styles_Button_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Button.styled */ "./resources/js/components/styles/Button.styled.js");
/* harmony import */ var _styles_Form_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Form.styled */ "./resources/js/components/styles/Form.styled.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useForm */ "./resources/js/hooks/useForm.js");
/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/user */ "./resources/js/context/user.js");
/* harmony import */ var _registerFormValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registerFormValidate */ "./resources/js/components/Forms/RegisterForm/registerFormValidate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







 // validation du formulaire





var RegisterForm = function RegisterForm() {
  var _useUser = (0,_context_user__WEBPACK_IMPORTED_MODULE_6__.useUser)(),
      register = _useUser.register; // INITIAL FORM STATE


  var initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }; // FORM LOGIC ON SUBMIT

  var registerUser = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return register(values);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function registerUser(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation


  var _useForm = (0,_hooks_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])(initialValues, registerUser, _registerFormValidate__WEBPACK_IMPORTED_MODULE_7__["default"]),
      handleFormSubmit = _useForm.handleFormSubmit,
      handleFormChange = _useForm.handleFormChange,
      values = _useForm.values,
      errors = _useForm.errors,
      handleBlur = _useForm.handleBlur,
      isSubmitting = _useForm.isSubmitting;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_Form_styled__WEBPACK_IMPORTED_MODULE_4__.Form, {
    onSubmit: handleFormSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_Form_styled__WEBPACK_IMPORTED_MODULE_4__.Legend, {
      children: "Nouveau membre"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "text",
      id: "name",
      name: "name",
      label: "Nom Usager",
      value: values.name,
      onChange: handleFormChange,
      onBlur: handleBlur,
      error: errors === null || errors === void 0 ? void 0 : errors.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "email",
      id: "email",
      name: "email",
      label: "Courriel",
      value: values.email,
      onChange: handleFormChange,
      onBlur: handleBlur,
      error: errors === null || errors === void 0 ? void 0 : errors.email
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "password",
      id: "password",
      name: "password",
      label: "Mot de passe",
      value: values.password,
      onChange: handleFormChange,
      onBlur: handleBlur,
      error: errors === null || errors === void 0 ? void 0 : errors.password
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "password",
      id: "password_confirmation",
      name: "password_confirmation",
      label: "Confirmer le mot de passe",
      value: values.password_confirmation,
      onChange: handleFormChange,
      onBlur: handleBlur,
      error: errors === null || errors === void 0 ? void 0 : errors.password_confirmation
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_Button_styled__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "submit",
      bg: "transparent",
      color: "#fff",
      borderColor: "#fff",
      bgHover: "white",
      colorHover: "maroon",
      disabled: isSubmitting,
      children: "CR\xC9ER"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

/***/ }),

/***/ "./resources/js/components/Forms/RegisterForm/registerFormValidate.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Forms/RegisterForm/registerFormValidate.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// regex: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
var registerFormValidate = function registerFormValidate(values) {
  var errors = {};

  if (!values.name) {
    errors.name = "Le nom est requis";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Le courriel est invalide";
  }

  if (!values.email) {
    errors.email = "Le courriel est requis";
  }

  if (!values.password) {
    errors.password = "Le mot de passe est requis";
  }

  if (values.password.length < 8) {
    errors.password = "Le mot de passe doit avoir au moins 8 caractères";
  }

  if (values.password_confirmation !== values.password) {
    errors.password_confirmation = "Les mots de passe ne correspondent pas";
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = "Vous devez confirmer votre mot de passe";
  }

  return errors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerFormValidate);

/***/ }),

/***/ "./resources/js/components/styles/AuthLayout.styled.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/styles/AuthLayout.styled.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // Layout commun aux pages de Login et Register

var AuthLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100vw;\n    height: 100vh;\n    background-color: #58111A;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);

/***/ }),

/***/ "./resources/js/components/styles/Button.styled.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/styles/Button.styled.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ButtonBackUp": () => (/* binding */ ButtonBackUp)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  height: 40px;\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n  font-family: 'Gotham Black';\n  max-width: 350px;\n  font-size: 1.2rem;\n  font-weight: 300;\n  border: 1px solid ", ";\n  display:block;\n  margin-top:20px;\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    transform: scale(0.99);\n  }\n"])), function (_ref) {
  var bg = _ref.bg;
  return bg || '#fff';
}, function (_ref2) {
  var color = _ref2.color;
  return color || '#333';
}, function (_ref3) {
  var borderColor = _ref3.borderColor;
  return borderColor || '#303031';
}, function (_ref4) {
  var bgHover = _ref4.bgHover;
  return bgHover || '#58111A';
}, function (_ref5) {
  var colorHover = _ref5.colorHover;
  return colorHover || '#FFF';
});
var ButtonBackUp = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  background: #58111A;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;\n  color: #fff;\n  display:block;\n  margin-top:20px;\n"])));

/***/ }),

/***/ "./resources/js/components/styles/Form.styled.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/styles/Form.styled.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Legend": () => (/* binding */ Legend)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    max-width: 350px;\n    & > *:not(:first-child) {\n        margin-top: 2rem;\n    }\n"])));
var Legend = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].legend(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #fff;\n    font-size: 2rem;\n    font-family: \"Gotham Black\";\n    margin-bottom: 1rem;\n"])));

/***/ }),

/***/ "./resources/js/components/styles/FormGroup.styled.js":
/*!************************************************************!*\
  !*** ./resources/js/components/styles/FormGroup.styled.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGroup": () => (/* binding */ FormGroup)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // encapsule un input avec son label et son message d'erreur

var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    position: relative;\n"])));

/***/ }),

/***/ "./resources/js/components/styles/Input.styled.js":
/*!********************************************************!*\
  !*** ./resources/js/components/styles/Input.styled.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 1rem;\n    font-family: \"Gotham Thin\";\n    font-weight: 500;\n    font-style: italic;\n    position: absolute;\n    pointer-events: none;\n    left: 15px;\n    top: 12px;\n    color: black;\n    transition: 200ms ease all;\n    ", "\n"])), function (_ref) {
  var shrink = _ref.shrink;
  return shrink && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            left: -4px;\n            top: -18px;\n            color: white;\n            font-size: 0.8rem;\n        "])));
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #d8d8d8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    font-family: \"Gotham Thin\";\n    font-weight: 500;\n    font-style: italic;\n    padding-left: 10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n    outline: none;\n\n    &:focus ~ ", " {\n        left: -4px;\n        top: -18px;\n        color: #fff;\n        font-size: 0.8rem;\n    }\n"])), Label);
var Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #d8d8d8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    margin-top: 20px;\n    font-family: \"Gotham Thin\";\n    font-weight: 500;\n    font-style: italic;\n    padding-left: 10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n"])));

/***/ }),

/***/ "./resources/js/components/styles/InputErrorMessage.styled.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/styles/InputErrorMessage.styled.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputErrorMessage": () => (/* binding */ InputErrorMessage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var InputErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: fit-content;\n    font-size: 0.9rem;\n    color: red;\n    margin-top: 0.3rem;\n"])));

/***/ }),

/***/ "./resources/js/hooks/useForm.js":
/*!***************************************!*\
  !*** ./resources/js/hooks/useForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useForm = function useForm(initialValues, formLogic, validate) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSubmitting = _useState6[0],
      setSubmitting = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      touched = _useState8[0],
      setTouched = _useState8[1]; // useEffect executé automatiquement quand le composant mounts
  // mais c'est uniquement si le form est en train d'être soumis que l'on emvoie les données au serveur


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // si le user a cliqué sur submit et donc isSubmitting = true
    if (isSubmitting) {
      // on check si on a aucune erreur avant de soumettre
      var noErrors = Object.keys(errors).length === 0; // si on a bien aucune erreur, on fait la requête HTTP

      if (noErrors) {
        formLogic(values) // c'est async
        .then(function () {
          resetForm(); // on HTTP success, on reset le form
        }) // gestion des erreurs backend (email déjà pris par exemple)
        ["catch"](function (error) {
          console.log("erreur", error.response);
          setErrors(_objectSpread({}, error)); // set les erreurs du backend dans le state pour affichage

          setSubmitting(false);
        }); // si des erreurs reviennent backend
      } else {
        setSubmitting(false);
      }
    }
  }, [isSubmitting, errors]); // on rerun le useEffect quand ces 2 variables changent

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var validationErrors = validate(values);
    var touchedErrors = Object.keys(validationErrors).filter(function (key) {
      return touched.includes(key);
    }).reduce(function (acc, key) {
      if (!acc[key]) {
        acc[key] = validationErrors[key];
      }

      return acc;
    }, {});
    setErrors(touchedErrors); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touched, values]); // contrôle de ce que le user entre dans les champs

  var handleFormChange = function handleFormChange(event) {
    event.persist(); // on set dans le state du hook dynamiquement le nom de l'input avec la valeur entrée

    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value));
    });
  }; // soummission du form


  var handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault(); // on utilise notre custom validation (le 3eme argument du hook)

    var validationErrors = validate(values); // retourne un objet d'erreurs ou un objet vide

    setErrors(validationErrors); // set les erreurs dans le state du hook

    setSubmitting(true); // le form est en train d'être soumis (utile pour disable le bouton)
  }; // gestion du blur


  var handleBlur = function handleBlur(event) {
    if (!touched.includes(event.target.name)) {
      setTouched([].concat(_toConsumableArray(touched), [event.target.name]));
    }
  }; // reset du form et des erreurs quand le form est valide et la data envoyée vers l'API vino


  var resetForm = function resetForm() {
    setTouched([]);
    setSubmitting(false);
    setErrors({});
    setValues(initialValues);
  }; // le hook retourne ça! on va pouvoir les utiliser dans nos forms
  // c'est le but des hooks: encapsuler toute la logique dans les hooks et ceux-ci retournent des objets
  // et des méthodes prêtes à l'emploi


  return {
    handleFormChange: handleFormChange,
    handleFormSubmit: handleFormSubmit,
    values: values,
    errors: errors,
    handleBlur: handleBlur,
    isSubmitting: isSubmitting
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useForm);

/***/ }),

/***/ "./resources/js/pages/CreerCompte.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/CreerCompte.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Forms_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Forms/RegisterForm */ "./resources/js/components/Forms/RegisterForm/index.js");
/* harmony import */ var _components_styles_AuthLayout_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/AuthLayout.styled */ "./resources/js/components/styles/AuthLayout.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var CreerCompte = function CreerCompte() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_styles_AuthLayout_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Forms_RegisterForm__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreerCompte);

/***/ })

}]);