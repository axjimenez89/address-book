webpackHotUpdate_N_E("pages/address-book",{

/***/ "./components/input/input.js":
/*!***********************************!*\
  !*** ./components/input/input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.module.scss */ \"./components/input/input.module.scss\");\n/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/app/components/input/input.js\";\n\nfunction Input(_ref) {\n  var icon = _ref.icon,\n      label = _ref.label,\n      value = _ref.value,\n      onChange = _ref.onChange,\n      name = _ref.name,\n      placeholder = _ref.placeholder,\n      hasError = _ref.hasError;\n  var inputClasses = ['block', 'w-full', _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.input];\n\n  if (hasError) {\n    inputClasses.push('border-red');\n    inputClasses.push('border-8');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mb-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: \"block text-lg mb-4\",\n      htmlFor: \"input\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['input__icon'],\n      src: \"/\".concat(icon)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 16\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      name: name,\n      onChange: onChange,\n      className: inputClasses.join(' '),\n      id: \"input\",\n      type: \"text\",\n      placeholder: placeholder,\n      value: value\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = Input;\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5qcz9kZGM2Il0sIm5hbWVzIjpbIklucHV0IiwiaWNvbiIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImhhc0Vycm9yIiwiaW5wdXRDbGFzc2VzIiwic3R5bGVzIiwiaW5wdXQiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsT0FBNEU7QUFBQSxNQUE1REMsSUFBNEQsUUFBNURBLElBQTREO0FBQUEsTUFBdERDLEtBQXNELFFBQXREQSxLQUFzRDtBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDekYsTUFBTUMsWUFBWSxHQUFHLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0JDLHlEQUFNLENBQUNDLEtBQTNCLENBQXJCOztBQUNBLE1BQUlILFFBQUosRUFBYztBQUNaQyxnQkFBWSxDQUFDRyxJQUFiLENBQWtCLFlBQWxCO0FBQ0FILGdCQUFZLENBQUNHLElBQWIsQ0FBa0IsVUFBbEI7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0U7QUFBTyxlQUFTLEVBQUMsb0JBQWpCO0FBQXNDLGFBQU8sRUFBQyxPQUE5QztBQUFBLGdCQUF1RFQ7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdELElBQUksaUJBQUk7QUFBSyxlQUFTLEVBQUVRLHlEQUFNLENBQUMsYUFBRCxDQUF0QjtBQUF1QyxTQUFHLGFBQU1SLElBQU47QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZYLGVBR0U7QUFDRSxVQUFJLEVBQUVJLElBRFI7QUFFRSxjQUFRLEVBQUVELFFBRlo7QUFHRSxlQUFTLEVBQUVJLFlBQVksQ0FBQ0ksSUFBYixDQUFrQixHQUFsQixDQUhiO0FBSUUsUUFBRSxFQUFDLE9BSkw7QUFLRSxVQUFJLEVBQUMsTUFMUDtBQU1FLGlCQUFXLEVBQUVOLFdBTmY7QUFPRSxXQUFLLEVBQUVIO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7S0FyQnVCSCxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbnB1dC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQoe2ljb24sIGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUsIHBsYWNlaG9sZGVyLCBoYXNFcnJvcn0pIHtcbiAgY29uc3QgaW5wdXRDbGFzc2VzID0gWydibG9jaycsICd3LWZ1bGwnLCBzdHlsZXMuaW5wdXRdXG4gIGlmIChoYXNFcnJvcikge1xuICAgIGlucHV0Q2xhc3Nlcy5wdXNoKCdib3JkZXItcmVkJylcbiAgICBpbnB1dENsYXNzZXMucHVzaCgnYm9yZGVyLTgnKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZyBtYi00XCIgaHRtbEZvcj1cImlucHV0XCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICB7aWNvbiAmJiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzWydpbnB1dF9faWNvbiddfSBzcmM9e2AvJHtpY29ufWB9IC8+fVxuICAgICAgPGlucHV0IFxuICAgICAgICBuYW1lPXtuYW1lfSBcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSBcbiAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbignICcpfSAgXG4gICAgICAgIGlkPVwiaW5wdXRcIiBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgLz4gIFxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input/input.js\n");

/***/ })

})