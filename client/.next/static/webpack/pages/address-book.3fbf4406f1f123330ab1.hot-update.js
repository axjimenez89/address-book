webpackHotUpdate_N_E("pages/address-book",{

/***/ "./pages/address-book.js":
/*!*******************************!*\
  !*** ./pages/address-book.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input/input */ \"./components/input/input.js\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card/card */ \"./components/card/card.js\");\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button/button */ \"./components/button/button.js\");\n\n\n\nvar _jsxFileName = \"/app/pages/address-book.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar searchAddresses = function searchAddresses() {\n  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  return fetch(\"http://localhost:3001/addresses?search=\".concat(search)).then(function (response) {\n    return response.json();\n  });\n};\n\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      addresses = _useState[0],\n      setAddresses = _useState[1];\n\n  var setAddress = function setAddress(updatedAddress) {\n    addresses.map(function (address) {\n      return address[id];\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    searchAddresses().then(function (results) {\n      return setAddresses(results);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Address Book\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      className: \"mb-8\",\n      children: \"Address Book\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full md:w-1/2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_input_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        icon: \"icon-search.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        editState: false,\n        addState: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          className: \"text-lg\",\n          children: \"Add a new user's address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, this), addresses.map(function (address, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          address: address,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [address.line1, \", \", address.city, \", \", address.state, \" \", address.zip]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 11\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        editState: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"Harry Lobster\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"185 Berry St #6100, San Francisco, CA 94107\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"aMPmpEzO0WDxOEfntgpQWb8iAPE=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkcmVzcy1ib29rLmpzPzE5YzQiXSwibmFtZXMiOlsic2VhcmNoQWRkcmVzc2VzIiwic2VhcmNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiSG9tZSIsInVzZVN0YXRlIiwiYWRkcmVzc2VzIiwic2V0QWRkcmVzc2VzIiwic2V0QWRkcmVzcyIsInVwZGF0ZWRBZGRyZXNzIiwibWFwIiwiYWRkcmVzcyIsImlkIiwidXNlRWZmZWN0IiwicmVzdWx0cyIsImkiLCJsaW5lMSIsImNpdHkiLCJzdGF0ZSIsInppcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBQ0MsTUFBRCx1RUFBVSxFQUFWO0FBQUEsU0FDdEJDLEtBQUssa0RBQTJDRCxNQUEzQyxFQUFMLENBQ0dFLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQURoQixDQURzQjtBQUFBLENBQXhCOztBQUllLFNBQVNDLElBQVQsT0FBb0I7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUUxQkMsU0FGMEI7QUFBQSxNQUVmQyxZQUZlOztBQUdqQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxjQUFjLEVBQUk7QUFDbkNILGFBQVMsQ0FBQ0ksR0FBVixDQUFjLFVBQUFDLE9BQU8sRUFBSTtBQUN2QixhQUFPQSxPQUFPLENBQUNDLEVBQUQsQ0FBZDtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BQyx5REFBUyxDQUFDLFlBQU07QUFDZGYsbUJBQWUsR0FDWkcsSUFESCxDQUNRLFVBQUFhLE9BQU87QUFBQSxhQUFJUCxZQUFZLENBQUNPLE9BQUQsQ0FBaEI7QUFBQSxLQURmO0FBRUQsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUtBLHNCQUNFLHFFQUFDLGlFQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFDRSxZQUFJLEVBQUM7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBVUU7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNBLHFFQUFDLDZEQUFEO0FBQU0saUJBQVMsRUFBRSxLQUFqQjtBQUF3QixnQkFBUSxFQUFFLElBQWxDO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFJQ1IsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQ0MsT0FBRCxFQUFTSSxDQUFUO0FBQUEsNEJBQ2IscUVBQUMsNkRBQUQ7QUFBYyxpQkFBTyxFQUFFSixPQUF2QjtBQUFBLGlDQUNFO0FBQUEsdUJBQ0dBLE9BQU8sQ0FBQ0ssS0FEWCxRQUNvQkwsT0FBTyxDQUFDTSxJQUQ1QixRQUNvQ04sT0FBTyxDQUFDTyxLQUQ1QyxPQUNvRFAsT0FBTyxDQUFDUSxHQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXSixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkLENBSkQsZUFXRSxxRUFBQyw2REFBRDtBQUFNLGlCQUFTLEVBQUUsSUFBakI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQTNDdUJYLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9hZGRyZXNzLWJvb2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0L2lucHV0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkL2NhcmQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbidcblxuY29uc3Qgc2VhcmNoQWRkcmVzc2VzID0gKHNlYXJjaCA9IFwiXCIpID0+XG4gIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRkcmVzc2VzP3NlYXJjaD0ke3NlYXJjaH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgge30gKSB7XG5cbiAgY29uc3QgW2FkZHJlc3Nlcywgc2V0QWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBzZXRBZGRyZXNzID0gdXBkYXRlZEFkZHJlc3MgPT4ge1xuICAgIGFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4gYWRkcmVzc1tpZF1cbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWFyY2hBZGRyZXNzZXMoKVxuICAgICAgLnRoZW4ocmVzdWx0cyA9PiBzZXRBZGRyZXNzZXMocmVzdWx0cykpO1xuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BZGRyZXNzIEJvb2s8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLThcIj5BZGRyZXNzIEJvb2s8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWNvbj1cImljb24tc2VhcmNoLnN2Z1wiXG4gICAgICAgID48L0lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICA8Q2FyZCBlZGl0U3RhdGU9e2ZhbHNlfSBhZGRTdGF0ZT17dHJ1ZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkFkZCBhIG5ldyB1c2VyJ3MgYWRkcmVzczwvcD5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHthZGRyZXNzZXMubWFwKChhZGRyZXNzLGkpID0+IFxuICAgICAgICA8Q2FyZCBrZXk9e2l9IGFkZHJlc3M9e2FkZHJlc3N9PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2FkZHJlc3MubGluZTF9LCB7YWRkcmVzcy5jaXR5fSwge2FkZHJlc3Muc3RhdGV9IHthZGRyZXNzLnppcH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICl9XG4gICAgICAgIDxDYXJkIGVkaXRTdGF0ZT17dHJ1ZX0+XG4gICAgICAgICAgPHA+SGFycnkgTG9ic3RlcjwvcD5cbiAgICAgICAgICA8cD4xODUgQmVycnkgU3QgIzYxMDAsIFNhbiBGcmFuY2lzY28sIENBIDk0MTA3PC9wPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/address-book.js\n");

/***/ })

})