/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contentcontroller.js":
/*!******************************************!*\
  !*** ./src/modules/contentcontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerManager": () => (/* binding */ ControllerManager)
/* harmony export */ });
/* harmony import */ var _geradorcpf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradorcpf */ "./src/modules/geradorcpf.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ControllerManager = /*#__PURE__*/function () {
  function ControllerManager() {
    var _this = this;

    _classCallCheck(this, ControllerManager);

    this.divCPF = document.querySelector('.cpfcontainer');
    this.buttonGeraCPF = document.querySelector('.cpfgera');
    this.geradorCPF = new _geradorcpf__WEBPACK_IMPORTED_MODULE_0__.GeradorCPF(); //Eu utilizei arrow function para não ter problema de escopo na hora de usar o this

    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("cpfgera")) {
        _this.addCPF(_this.geradorCPF.gera());
      }

      if (e.target.classList.contains("delbutton")) {
        _this.delCPF(e.target);
      }
    });
  }

  _createClass(ControllerManager, [{
    key: "delCPF",
    value: function delCPF(obj) {
      obj.parentElement.parentElement.classList.add("cpfdel");
      obj.parentElement.addEventListener('animationend', function () {
        obj.parentElement.remove();
      });
    }
  }, {
    key: "addCPF",
    value: function addCPF(cpf) {
      var divisor = document.createElement('div');
      var para = document.createElement('p');
      para.innerText = cpf;
      divisor.appendChild(para);
      var buttonDel = document.createElement('button');
      buttonDel.innerText = "Deletar";
      buttonDel.classList.add("delbutton");
      para.appendChild(buttonDel);
      divisor.classList.add("cpfdiv");
      this.divCPF.appendChild(divisor);
    }
  }]);

  return ControllerManager;
}();



/***/ }),

/***/ "./src/modules/geradorcpf.js":
/*!***********************************!*\
  !*** ./src/modules/geradorcpf.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeradorCPF": () => (/* binding */ GeradorCPF)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GeradorCPF = /*#__PURE__*/function () {
  function GeradorCPF() {
    _classCallCheck(this, GeradorCPF);
  }

  _createClass(GeradorCPF, [{
    key: "gera",
    value: function gera() {
      var cpf = new Array(9).fill().map(function () {
        return Math.floor(Math.random() * 10);
      }); //O cpf é gerado invertido para facilitar no uso das funções map

      var soma = cpf.map(function (f) {
        return parseInt(f);
      }).reduce(function (prev, current, index, array) {
        return prev += current * (index + 2);
      }, 0);
      var digito = soma * 10 % 11 > 9 ? 0 : soma * 10 % 11;
      cpf.unshift(digito); //Gerando segundo digito

      soma = cpf.map(function (f) {
        return parseInt(f);
      }).reduce(function (prev, current, index, array) {
        return prev += current * (index + 2);
      }, 0);
      digito = soma * 10 % 11 > 9 ? 0 : soma * 10 % 11;
      cpf.unshift(digito);
      cpf = cpf.reverse().join('');
      var cpfFinal = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
      return cpfFinal;
    }
  }]);

  return GeradorCPF;
}();



/***/ }),

/***/ "./src/modules/validadorcpf.js":
/*!*************************************!*\
  !*** ./src/modules/validadorcpf.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validador": () => (/* binding */ Validador)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Validador = /*#__PURE__*/function () {
  function Validador() {
    _classCallCheck(this, Validador);
  }

  _createClass(Validador, [{
    key: "valida",
    value: function valida(userCpf) {
      /**
       * Algoritmo utilizado: https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/
       */
      var _userCpf$split = userCpf.split('-'),
          _userCpf$split2 = _slicedToArray(_userCpf$split, 2),
          pv1 = _userCpf$split2[0],
          array_pv2 = _userCpf$split2[1]; // Separa o CPF


      pv1 = pv1.replaceAll('.', ''); // Tira todos os pontos da primeira parte

      var array_pv1 = pv1.split(''); // Divide todos os numeros em uma lista
      //Verifica se o CPF é uma repetição de numeros

      var array_rep = array_pv1.concat(array_pv2);
      if (array_rep.every(function (f) {
        return f === array_rep[0];
      })) return false; //O cpf é invertido para poder utilizar a função map mais facilmente

      array_pv1 = array_pv1.reverse();
      var soma = array_pv1.map(function (f) {
        return parseInt(f);
      }).reduce(function (prev, current, index, array) {
        return prev += current * (index + 2);
      }, 0);
      var middle = soma * 10 % 11 > 9 ? 0 : soma * 10 % 11; //Verifica se o primeiro digito é valido

      if (!(middle === parseInt(array_pv2[0]))) return false; //Adiciona o primeiro digito da segunda parte do CPF na primeira parte

      array_pv1.unshift(array_pv2[0]);
      soma = array_pv1.map(function (f) {
        return parseInt(f);
      }).reduce(function (prev, current, index, array) {
        return prev += current * (index + 2);
      }, 0);
      middle = soma * 10 % 11 > 9 ? 0 : soma * 10 % 11; //Verifica se o segundo digito é valido

      if (!(middle === parseInt(array_pv2[1]))) return false;
      return true;
    }
  }]);

  return Validador;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27317%27 height=%27317%27 viewBox=%270 0 800 800%27%3E%3Cg fill=%27none%27 stroke=%27%230017FF%27 stroke-width=%271%27%3E%3Cpath d=%27M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63%27/%3E%3Cpath d=%27M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764%27/%3E%3Cpath d=%27M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880%27/%3E%3Cpath d=%27M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382%27/%3E%3Cpath d=%27M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269%27/%3E%3C/g%3E%3Cg fill=%27%23070055%27%3E%3Ccircle cx=%27769%27 cy=%27229%27 r=%2712%27/%3E%3Ccircle cx=%27539%27 cy=%27269%27 r=%2712%27/%3E%3Ccircle cx=%27603%27 cy=%27493%27 r=%2712%27/%3E%3Ccircle cx=%27731%27 cy=%27737%27 r=%2712%27/%3E%3Ccircle cx=%27520%27 cy=%27660%27 r=%2712%27/%3E%3Ccircle cx=%27309%27 cy=%27538%27 r=%2712%27/%3E%3Ccircle cx=%27295%27 cy=%27764%27 r=%2712%27/%3E%3Ccircle cx=%2740%27 cy=%27599%27 r=%2712%27/%3E%3Ccircle cx=%27102%27 cy=%27382%27 r=%2712%27/%3E%3Ccircle cx=%27127%27 cy=%2780%27 r=%2712%27/%3E%3Ccircle cx=%27370%27 cy=%27105%27 r=%2712%27/%3E%3Ccircle cx=%27578%27 cy=%2742%27 r=%2712%27/%3E%3Ccircle cx=%27237%27 cy=%27261%27 r=%2712%27/%3E%3Ccircle cx=%27390%27 cy=%27382%27 r=%2712%27/%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27317%27 height=%27317%27 viewBox=%270 0 800 800%27%3E%3Cg fill=%27none%27 stroke=%27%230017FF%27 stroke-width=%271%27%3E%3Cpath d=%27M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63%27/%3E%3Cpath d=%27M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764%27/%3E%3Cpath d=%27M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880%27/%3E%3Cpath d=%27M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382%27/%3E%3Cpath d=%27M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269%27/%3E%3C/g%3E%3Cg fill=%27%23070055%27%3E%3Ccircle cx=%27769%27 cy=%27229%27 r=%2712%27/%3E%3Ccircle cx=%27539%27 cy=%27269%27 r=%2712%27/%3E%3Ccircle cx=%27603%27 cy=%27493%27 r=%2712%27/%3E%3Ccircle cx=%27731%27 cy=%27737%27 r=%2712%27/%3E%3Ccircle cx=%27520%27 cy=%27660%27 r=%2712%27/%3E%3Ccircle cx=%27309%27 cy=%27538%27 r=%2712%27/%3E%3Ccircle cx=%27295%27 cy=%27764%27 r=%2712%27/%3E%3Ccircle cx=%2740%27 cy=%27599%27 r=%2712%27/%3E%3Ccircle cx=%27102%27 cy=%27382%27 r=%2712%27/%3E%3Ccircle cx=%27127%27 cy=%2780%27 r=%2712%27/%3E%3Ccircle cx=%27370%27 cy=%27105%27 r=%2712%27/%3E%3Ccircle cx=%27578%27 cy=%2742%27 r=%2712%27/%3E%3Ccircle cx=%27237%27 cy=%27261%27 r=%2712%27/%3E%3Ccircle cx=%27390%27 cy=%27382%27 r=%2712%27/%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --primary-color:rgb(25, 35, 128);\r\n    --primary-color-darker:rgb(5, 10, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv p button{\r\n    width: 10%;\r\n    margin: 0 0 0 10%;\r\n    height:      25px;  \r\n    display: inline-block;\r\n}\r\n\r\n@keyframes fadein {\r\n    0% {margin:0 0 0 0; color: white;}\r\n    50% {margin: 1em 0 1em 0; color:white;}\r\n    100% { color:black;}    \r\n}\r\n\r\n@keyframes fadeout {\r\n    0% {color:black; margin: 1em 0 1em 0;}\r\n    50%{margin: 1em 0 1em 0;color:white;}\r\n    100%{margin: 0 0 0 0; color: white;}    \r\n}\r\n\r\ndiv.cpfdiv p{\r\n    animation: fadein 1s;\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p{\r\n    animation: fadeout 1s;\r\n}\r\n\r\n@keyframes fadeinbutton{\r\n    0% {opacity: 0; height:0px; color: #fff;}\r\n    50% {opacity: 0; height: 0px;}\r\n    75% {color: #fff;}\r\n    100% {opacity: 1; height: 25px; color: black}\r\n}\r\n\r\n@keyframes fadeoutbutton{\r\n    0% {opacity: 1; height: 25px; color: black}\r\n    25% {color: #fff;}\r\n    50% {opacity: 0; height: 25px;}\r\n    100% {opacity: 0; height:0px; color: #fff;}\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p button.delbutton{\r\n    animation: fadeoutbutton 1s;\r\n}\r\n\r\ndiv.cpfdiv p button.delbutton{\r\n    animation: fadeinbutton 1s;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    background-color: #06061A;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    box-shadow: rgba(49, 46, 240, 0.5) 5px 5px, rgba(49, 46, 240, 0.4) 10px 10px, rgba(49, 46, 240, 0.3) 15px 15px, rgba(49, 46, 240, 0.2) 20px 20px, rgba(49, 46, 240, 0.1) 25px 25px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\nform button:active{\r\n    background: blue;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAGA;IACI,gCAAgC;IAChC,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,IAAI,cAAc,EAAE,YAAY,CAAC;IACjC,KAAK,mBAAmB,EAAE,WAAW,CAAC;IACtC,OAAO,WAAW,CAAC;AACvB;;AAEA;IACI,IAAI,WAAW,EAAE,mBAAmB,CAAC;IACrC,IAAI,mBAAmB,CAAC,WAAW,CAAC;IACpC,KAAK,eAAe,EAAE,YAAY,CAAC;AACvC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,IAAI,UAAU,EAAE,UAAU,EAAE,WAAW,CAAC;IACxC,KAAK,UAAU,EAAE,WAAW,CAAC;IAC7B,KAAK,WAAW,CAAC;IACjB,MAAM,UAAU,EAAE,YAAY,EAAE,YAAY;AAChD;;AAEA;IACI,IAAI,UAAU,EAAE,YAAY,EAAE,YAAY;IAC1C,KAAK,WAAW,CAAC;IACjB,KAAK,UAAU,EAAE,YAAY,CAAC;IAC9B,MAAM,UAAU,EAAE,UAAU,EAAE,WAAW,CAAC;AAC9C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,yBAAyB;IACzB,yDAA26C;IAC36C,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,kLAAkL;IAClL,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n\r\n:root {\r\n    --primary-color:rgb(25, 35, 128);\r\n    --primary-color-darker:rgb(5, 10, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv p button{\r\n    width: 10%;\r\n    margin: 0 0 0 10%;\r\n    height:      25px;  \r\n    display: inline-block;\r\n}\r\n\r\n@keyframes fadein {\r\n    0% {margin:0 0 0 0; color: white;}\r\n    50% {margin: 1em 0 1em 0; color:white;}\r\n    100% { color:black;}    \r\n}\r\n\r\n@keyframes fadeout {\r\n    0% {color:black; margin: 1em 0 1em 0;}\r\n    50%{margin: 1em 0 1em 0;color:white;}\r\n    100%{margin: 0 0 0 0; color: white;}    \r\n}\r\n\r\ndiv.cpfdiv p{\r\n    animation: fadein 1s;\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p{\r\n    animation: fadeout 1s;\r\n}\r\n\r\n@keyframes fadeinbutton{\r\n    0% {opacity: 0; height:0px; color: #fff;}\r\n    50% {opacity: 0; height: 0px;}\r\n    75% {color: #fff;}\r\n    100% {opacity: 1; height: 25px; color: black}\r\n}\r\n\r\n@keyframes fadeoutbutton{\r\n    0% {opacity: 1; height: 25px; color: black}\r\n    25% {color: #fff;}\r\n    50% {opacity: 0; height: 25px;}\r\n    100% {opacity: 0; height:0px; color: #fff;}\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p button.delbutton{\r\n    animation: fadeoutbutton 1s;\r\n}\r\n\r\ndiv.cpfdiv p button.delbutton{\r\n    animation: fadeinbutton 1s;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    background-color: #06061A;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='317' height='317' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%230017FF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23070055'%3E%3Ccircle cx='769' cy='229' r='12'/%3E%3Ccircle cx='539' cy='269' r='12'/%3E%3Ccircle cx='603' cy='493' r='12'/%3E%3Ccircle cx='731' cy='737' r='12'/%3E%3Ccircle cx='520' cy='660' r='12'/%3E%3Ccircle cx='309' cy='538' r='12'/%3E%3Ccircle cx='295' cy='764' r='12'/%3E%3Ccircle cx='40' cy='599' r='12'/%3E%3Ccircle cx='102' cy='382' r='12'/%3E%3Ccircle cx='127' cy='80' r='12'/%3E%3Ccircle cx='370' cy='105' r='12'/%3E%3Ccircle cx='578' cy='42' r='12'/%3E%3Ccircle cx='237' cy='261' r='12'/%3E%3Ccircle cx='390' cy='382' r='12'/%3E%3C/g%3E%3C/svg%3E\");\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    box-shadow: rgba(49, 46, 240, 0.5) 5px 5px, rgba(49, 46, 240, 0.4) 10px 10px, rgba(49, 46, 240, 0.3) 15px 15px, rgba(49, 46, 240, 0.2) 20px 20px, rgba(49, 46, 240, 0.1) 25px 25px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\nform button:active{\r\n    background: blue;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27317%27 height=%27317%27 viewBox=%270 0 800 800%27%3E%3Cg fill=%27none%27 stroke=%27%230017FF%27 stroke-width=%271%27%3E%3Cpath d=%27M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63%27/%3E%3Cpath d=%27M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764%27/%3E%3Cpath d=%27M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880%27/%3E%3Cpath d=%27M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382%27/%3E%3Cpath d=%27M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269%27/%3E%3C/g%3E%3Cg fill=%27%23070055%27%3E%3Ccircle cx=%27769%27 cy=%27229%27 r=%2712%27/%3E%3Ccircle cx=%27539%27 cy=%27269%27 r=%2712%27/%3E%3Ccircle cx=%27603%27 cy=%27493%27 r=%2712%27/%3E%3Ccircle cx=%27731%27 cy=%27737%27 r=%2712%27/%3E%3Ccircle cx=%27520%27 cy=%27660%27 r=%2712%27/%3E%3Ccircle cx=%27309%27 cy=%27538%27 r=%2712%27/%3E%3Ccircle cx=%27295%27 cy=%27764%27 r=%2712%27/%3E%3Ccircle cx=%2740%27 cy=%27599%27 r=%2712%27/%3E%3Ccircle cx=%27102%27 cy=%27382%27 r=%2712%27/%3E%3Ccircle cx=%27127%27 cy=%2780%27 r=%2712%27/%3E%3Ccircle cx=%27370%27 cy=%27105%27 r=%2712%27/%3E%3Ccircle cx=%27578%27 cy=%2742%27 r=%2712%27/%3E%3Ccircle cx=%27237%27 cy=%27261%27 r=%2712%27/%3E%3Ccircle cx=%27390%27 cy=%27382%27 r=%2712%27/%3E%3C/g%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27317%27 height=%27317%27 viewBox=%270 0 800 800%27%3E%3Cg fill=%27none%27 stroke=%27%230017FF%27 stroke-width=%271%27%3E%3Cpath d=%27M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63%27/%3E%3Cpath d=%27M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764%27/%3E%3Cpath d=%27M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880%27/%3E%3Cpath d=%27M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382%27/%3E%3Cpath d=%27M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269%27/%3E%3C/g%3E%3Cg fill=%27%23070055%27%3E%3Ccircle cx=%27769%27 cy=%27229%27 r=%2712%27/%3E%3Ccircle cx=%27539%27 cy=%27269%27 r=%2712%27/%3E%3Ccircle cx=%27603%27 cy=%27493%27 r=%2712%27/%3E%3Ccircle cx=%27731%27 cy=%27737%27 r=%2712%27/%3E%3Ccircle cx=%27520%27 cy=%27660%27 r=%2712%27/%3E%3Ccircle cx=%27309%27 cy=%27538%27 r=%2712%27/%3E%3Ccircle cx=%27295%27 cy=%27764%27 r=%2712%27/%3E%3Ccircle cx=%2740%27 cy=%27599%27 r=%2712%27/%3E%3Ccircle cx=%27102%27 cy=%27382%27 r=%2712%27/%3E%3Ccircle cx=%27127%27 cy=%2780%27 r=%2712%27/%3E%3Ccircle cx=%27370%27 cy=%27105%27 r=%2712%27/%3E%3Ccircle cx=%27578%27 cy=%2742%27 r=%2712%27/%3E%3Ccircle cx=%27237%27 cy=%27261%27 r=%2712%27/%3E%3Ccircle cx=%27390%27 cy=%27382%27 r=%2712%27/%3E%3C/g%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27317%27 height=%27317%27 viewBox=%270 0 800 800%27%3E%3Cg fill=%27none%27 stroke=%27%230017FF%27 stroke-width=%271%27%3E%3Cpath d=%27M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63%27/%3E%3Cpath d=%27M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764%27/%3E%3Cpath d=%27M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880%27/%3E%3Cpath d=%27M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382%27/%3E%3Cpath d=%27M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269%27/%3E%3C/g%3E%3Cg fill=%27%23070055%27%3E%3Ccircle cx=%27769%27 cy=%27229%27 r=%2712%27/%3E%3Ccircle cx=%27539%27 cy=%27269%27 r=%2712%27/%3E%3Ccircle cx=%27603%27 cy=%27493%27 r=%2712%27/%3E%3Ccircle cx=%27731%27 cy=%27737%27 r=%2712%27/%3E%3Ccircle cx=%27520%27 cy=%27660%27 r=%2712%27/%3E%3Ccircle cx=%27309%27 cy=%27538%27 r=%2712%27/%3E%3Ccircle cx=%27295%27 cy=%27764%27 r=%2712%27/%3E%3Ccircle cx=%2740%27 cy=%27599%27 r=%2712%27/%3E%3Ccircle cx=%27102%27 cy=%27382%27 r=%2712%27/%3E%3Ccircle cx=%27127%27 cy=%2780%27 r=%2712%27/%3E%3Ccircle cx=%27370%27 cy=%27105%27 r=%2712%27/%3E%3Ccircle cx=%27578%27 cy=%2742%27 r=%2712%27/%3E%3Ccircle cx=%27237%27 cy=%27261%27 r=%2712%27/%3E%3Ccircle cx=%27390%27 cy=%27382%27 r=%2712%27/%3E%3C/g%3E%3C/svg%3E";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_validadorcpf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validadorcpf */ "./src/modules/validadorcpf.js");
/* harmony import */ var _modules_geradorcpf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/geradorcpf */ "./src/modules/geradorcpf.js");
/* harmony import */ var _modules_contentcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contentcontroller */ "./src/modules/contentcontroller.js");




var validador = new _modules_validadorcpf__WEBPACK_IMPORTED_MODULE_1__.Validador();
var controller = new _modules_contentcontroller__WEBPACK_IMPORTED_MODULE_3__.ControllerManager();
console.log(controller);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map