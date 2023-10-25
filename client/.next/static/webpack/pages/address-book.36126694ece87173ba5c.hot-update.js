webpackHotUpdate_N_E("pages/address-book",{

/***/ "./modules/deleteAddressRequest.js":
false,

/***/ "./modules/getAddresses.js":
false,

/***/ "./pages/address-book.js":
/*!*******************************!*\
  !*** ./pages/address-book.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input/input */ \"./components/input/input.js\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card/card */ \"./components/card/card.js\");\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button/button */ \"./components/button/button.js\");\n/* harmony import */ var _modules_searchAddresses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/searchAddresses */ \"./modules/searchAddresses.js\");\n\n\n\nvar _jsxFileName = \"/app/pages/address-book.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      addresses = _useState[0],\n      setAddresses = _useState[1];\n\n  var setAddress = function setAddress(updatedAddress) {\n    var updatedAddresses = addresses.map(function (address) {\n      return address.id === updatedAddress.id ? updatedAddress : address;\n    });\n    setAddresses(updatedAddresses);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Object(_modules_searchAddresses__WEBPACK_IMPORTED_MODULE_8__[\"default\"])().then(function (results) {\n      return setAddresses(results);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Address Book\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      className: \"mb-8\",\n      children: \"Address Book\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full md:w-1/2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_input_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        icon: \"icon-search.svg\",\n        name: \"search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        editState: false,\n        addState: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          className: \"text-lg\",\n          children: \"Add a new user's address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, this), addresses.map(function (address, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          address: address,\n          setAddress: setAddress,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [address.line1, \", \", address.city, \", \", address.state, \" \", address.zip]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 11\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        editState: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"Harry Lobster\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"185 Berry St #6100, San Francisco, CA 94107\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"aMPmpEzO0WDxOEfntgpQWb8iAPE=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkcmVzcy1ib29rLmpzPzE5YzQiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiYWRkcmVzc2VzIiwic2V0QWRkcmVzc2VzIiwic2V0QWRkcmVzcyIsInVwZGF0ZWRBZGRyZXNzIiwidXBkYXRlZEFkZHJlc3NlcyIsIm1hcCIsImFkZHJlc3MiLCJpZCIsInVzZUVmZmVjdCIsInNlYXJjaEFkZHJlc3NlcyIsInRoZW4iLCJyZXN1bHRzIiwiaSIsImxpbmUxIiwiY2l0eSIsInN0YXRlIiwiemlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxPQUFvQjtBQUFBOztBQUFBOztBQUFBOztBQUFBLGtCQUVDQyxzREFBUSxDQUFDLEVBQUQsQ0FGVDtBQUFBLE1BRTFCQyxTQUYwQjtBQUFBLE1BRWZDLFlBRmU7O0FBR2pDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLGNBQWMsRUFBSTtBQUNuQyxRQUFNQyxnQkFBZ0IsR0FBR0osU0FBUyxDQUFDSyxHQUFWLENBQWMsVUFBQUMsT0FBTyxFQUFJO0FBQ2hELGFBQU9BLE9BQU8sQ0FBQ0MsRUFBUixLQUFlSixjQUFjLENBQUNJLEVBQTlCLEdBQW9DSixjQUFwQyxHQUFxREcsT0FBNUQ7QUFDRCxLQUZ3QixDQUF6QjtBQUdBTCxnQkFBWSxDQUFDRyxnQkFBRCxDQUFaO0FBQ0QsR0FMRDs7QUFPQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDRFQUFlLEdBQ1pDLElBREgsQ0FDUSxVQUFBQyxPQUFPO0FBQUEsYUFBSVYsWUFBWSxDQUFDVSxPQUFELENBQWhCO0FBQUEsS0FEZjtBQUVELEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFLQSxzQkFDRSxxRUFBQyxpRUFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFLHFFQUFDLCtEQUFEO0FBQ0UsWUFBSSxFQUFDLGlCQURQO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVdFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw4QkFDQSxxRUFBQyw2REFBRDtBQUFNLGlCQUFTLEVBQUUsS0FBakI7QUFBd0IsZ0JBQVEsRUFBRSxJQUFsQztBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBSUNYLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLE9BQUQsRUFBU00sQ0FBVDtBQUFBLDRCQUNiLHFFQUFDLDZEQUFEO0FBQWMsaUJBQU8sRUFBRU4sT0FBdkI7QUFBZ0Msb0JBQVUsRUFBRUosVUFBNUM7QUFBQSxpQ0FDRTtBQUFBLHVCQUNHSSxPQUFPLENBQUNPLEtBRFgsUUFDb0JQLE9BQU8sQ0FBQ1EsSUFENUIsUUFDb0NSLE9BQU8sQ0FBQ1MsS0FENUMsT0FDb0RULE9BQU8sQ0FBQ1UsR0FENUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBV0osQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZCxDQUpELGVBV0UscUVBQUMsNkRBQUQ7QUFBTSxpQkFBUyxFQUFFLElBQWpCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0E3Q3VCZCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvYWRkcmVzcy1ib29rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dC9pbnB1dCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24nXG5cbmltcG9ydCBzZWFyY2hBZGRyZXNzZXMgZnJvbSAnLi4vbW9kdWxlcy9zZWFyY2hBZGRyZXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCB7fSApIHtcblxuICBjb25zdCBbYWRkcmVzc2VzLCBzZXRBZGRyZXNzZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHNldEFkZHJlc3MgPSB1cGRhdGVkQWRkcmVzcyA9PiB7XG4gICAgY29uc3QgdXBkYXRlZEFkZHJlc3NlcyA9IGFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4gYWRkcmVzcy5pZCA9PT0gdXBkYXRlZEFkZHJlc3MuaWQgPyAgdXBkYXRlZEFkZHJlc3MgOiBhZGRyZXNzO1xuICAgIH0pXG4gICAgc2V0QWRkcmVzc2VzKHVwZGF0ZWRBZGRyZXNzZXMpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaEFkZHJlc3NlcygpXG4gICAgICAudGhlbihyZXN1bHRzID0+IHNldEFkZHJlc3NlcyhyZXN1bHRzKSk7XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFkZHJlc3MgQm9vazwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItOFwiPkFkZHJlc3MgQm9vazwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMlwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpY29uPVwiaWNvbi1zZWFyY2guc3ZnXCJcbiAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgIDxDYXJkIGVkaXRTdGF0ZT17ZmFsc2V9IGFkZFN0YXRlPXt0cnVlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+QWRkIGEgbmV3IHVzZXIncyBhZGRyZXNzPC9wPlxuICAgICAgPC9DYXJkPlxuICAgICAge2FkZHJlc3Nlcy5tYXAoKGFkZHJlc3MsaSkgPT4gXG4gICAgICAgIDxDYXJkIGtleT17aX0gYWRkcmVzcz17YWRkcmVzc30gc2V0QWRkcmVzcz17c2V0QWRkcmVzc30+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7YWRkcmVzcy5saW5lMX0sIHthZGRyZXNzLmNpdHl9LCB7YWRkcmVzcy5zdGF0ZX0ge2FkZHJlc3MuemlwfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKX1cbiAgICAgICAgPENhcmQgZWRpdFN0YXRlPXt0cnVlfT5cbiAgICAgICAgICA8cD5IYXJyeSBMb2JzdGVyPC9wPlxuICAgICAgICAgIDxwPjE4NSBCZXJyeSBTdCAjNjEwMCwgU2FuIEZyYW5jaXNjbywgQ0EgOTQxMDc8L3A+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/address-book.js\n");

/***/ })

})