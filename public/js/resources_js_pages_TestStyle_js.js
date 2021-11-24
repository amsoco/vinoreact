"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_TestStyle_js"],{

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
var ButtonBackUp = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  background: #58111A;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;\n  color: #fff;\n  display:block;\n  margin-top:20px;\n  position:fixed;\n  bottom: 20px;\n  right:20px;\n\n\n  img {\n    position: absolute;\n    top: 20%;\n    left: 10%;\n  }\n  \n"])));

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


var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #D8D8D8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    margin-top:20px;\n    font-family: 'Gotham Thin';\n    font-weight: 500;\n    font-style: italic;\n    padding-left:10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n    display:block;\n "])));
var Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #D8D8D8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    margin-top:20px;\n    font-family: 'Gotham Thin';\n    font-weight: 500;\n    font-style: italic;\n    padding-left:10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n"])));

/***/ }),

/***/ "./resources/js/pages/TestStyle.js":
/*!*****************************************!*\
  !*** ./resources/js/pages/TestStyle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/styles/Button.styled */ "./resources/js/components/styles/Button.styled.js");
/* harmony import */ var _components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/Input.styled */ "./resources/js/components/styles/Input.styled.js");
/* harmony import */ var _assets_images_bouteilleBlack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/bouteilleBlack.png */ "./resources/js/assets/images/bouteilleBlack.png");
/* harmony import */ var _assets_svg_chevron_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/chevron.svg */ "./resources/js/assets/svg/chevron.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var TestStyle = function TestStyle() {
  var test = function test() {
    console.log('test');
  };

  var backTop = function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__.Button, {
      onClick: function onClick() {
        return test();
      },
      bg: "#fff",
      color: "#303031",
      colorHover: "#fff",
      bgHover: "#303031",
      children: "AJOUTER"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__.Button, {
      bg: "#303031",
      color: "#fff",
      children: "BOIRE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__.Input, {
      placeholder: "Nom Usager"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Bitters activated charcoal waistcoat, skateboard hella asymmetrical taxidermy stumptown. Everyday carry small batch keffiyeh pinterest, butcher intelligentsia occupy photo booth subway tile echo park. Man bun lumbersexual schlitz kale chips. Gluten-free banh mi distillery affogato hammock edison bulb vape small batch pabst plaid everyday carry umami pop-up. Neutra typewriter glossier meh, tofu locavore intelligentsia fixie chia mumblecore try-hard put a bird on it. Raclette shaman vaporware, blue bottle selvage portland selfies tofu shabby chic 90's locavore wayfarers waistcoat. Glossier seitan flexitarian, waistcoat master cleanse cloud bread twee kale chips small batch enamel pin pitchfork keytar slow-carb. DIY humblebrag paleo, bitters chambray semiotics flannel echo park. Pickled 8-bit blue bottle, affogato tote bag photo booth vinyl. Raclette tacos snackwave quinoa tousled cloud bread authentic drinking vinegar seitan palo santo narwhal semiotics cardigan cray intelligentsia. Sustainable farm-to-table echo park yr hella. Austin mustache photo booth etsy literally pabst knausgaard fam lyft gochujang disrupt. Cornhole VHS roof party intelligentsia lomo church-key. Beard copper mug venmo truffaut shoreditch, tousled kitsch bitters unicorn woke leggings cloud bread. Tofu portland chambray occupy. Af enamel pin kickstarter pabst PBR&B affogato palo santo fixie biodiesel. Next level hella artisan tofu narwhal, ugh pickled polaroid. Poutine swag echo park, farm-to-table letterpress lomo YOLO truffaut. Stumptown pitchfork listicle edison bulb. Flannel thundercats pickled blog succulents. Air plant venmo semiotics chillwave lomo chambray ennui everyday carry typewriter vexillologist vaporware meggings. Bespoke stumptown kickstarter leggings lo-fi brooklyn marfa. Chicharrones asymmetrical deep v hot chicken, occupy chia aesthetic +1 tbh letterpress. Lomo biodiesel tattooed bespoke aesthetic. Cronut trust fund mumblecore church-key artisan dreamcatcher cliche kombucha. Pabst truffaut woke, listicle chartreuse vaporware cornhole gluten-free pour-over banjo poutine. Jianbing dreamcatcher blue bottle 8-bit cray drinking vinegar twee bicycle rights, kinfolk mlkshk chia artisan portland heirloom meh. Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard farm-to-table four loko air plant pabst gentrify. 3 wolf moon trust fund poke lyft.Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard Meh VHS bespoke leggings, lumbersexual austin vaporware banh mi roof party poke cliche snackwave. Enamel pin brooklyn four loko umami meggings. Pickled af tilde raclette. Microdosing helvetica pickled, venmo organic irony viral gastropub slow-carb waistcoat. Craft beer adaptogen retro tousled art party crucifix bitters. Ugh iceland blue bottle butcher forage ethical etsy irony kombucha gentrify microdosing cornhole vexillologist schlitz fixie. 3 wolf moon forage letterpress blog offal cronut thundercats air plant aesthetic brooklyn bespoke meditation. Hell of offal hashtag literally hella post-ironic. Biodiesel single-origin coffee gluten-free tote bag vice tofu, occupy art party cornhole. Swag master cleanse kogi migas chambray everyday carry normcore stumptown craft beer echo park polaroid squid schlitz cornhole. Flannel raclette poutine williamsburg taiyaki. Etsy pop-up butcher, activated charcoal williamsburg poutine knausgaard "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__.Select, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
        children: "Cellier"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: _assets_images_bouteilleBlack_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "logo"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__.ButtonBackUp, {
      onClick: function onClick() {
        return backTop();
      },
      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: _assets_svg_chevron_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        alt: "chevron"
      }), " "]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStyle);

/***/ }),

/***/ "./resources/js/assets/images/bouteilleBlack.png":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/bouteilleBlack.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bouteilleBlack.png?86cb879b19976d39739d118321269307");

/***/ }),

/***/ "./resources/js/assets/svg/chevron.svg":
/*!*********************************************!*\
  !*** ./resources/js/assets/svg/chevron.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chevron.svg?f58bef09731ab36a5d16019a73b45c42");

/***/ })

}]);