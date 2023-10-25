webpackHotUpdate_N_E("pages/address-book",{

/***/ "./pages/address-book.js":
/*!*******************************!*\
  !*** ./pages/address-book.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/input/input */ \"./components/input/input.js\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/card/card */ \"./components/card/card.js\");\n/* harmony import */ var _addressesApi_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../addressesApi/search */ \"./addressesApi/search.js\");\n\n\n\n\nvar _jsxFileName = \"/app/pages/address-book.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      addresses = _useState[0],\n      setAddresses = _useState[1];\n\n  var prependAddress = function prependAddress(address) {\n    setAddresses([address].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(addresses), [updatedAddresses]));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_addressesApi_search__WEBPACK_IMPORTED_MODULE_8__[\"default\"])().then(function (results) {\n      return setAddresses(results);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"Address Book\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: \"mb-8\",\n      children: \"Address Book\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full md:w-1/2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_input_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        icon: \"icon-search.svg\",\n        name: \"search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        prependAddress: prependAddress,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          className: \"text-lg\",\n          children: \"Add a new user's address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, this), addresses.map(function (address, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          initialAddress: address,\n          prependAddress: prependAddress,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: [address.line1, \", \", address.city, \", \", address.state, \" \", address.zip]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"aMPmpEzO0WDxOEfntgpQWb8iAPE=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkcmVzcy1ib29rLmpzPzE5YzQiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiYWRkcmVzc2VzIiwic2V0QWRkcmVzc2VzIiwicHJlcGVuZEFkZHJlc3MiLCJhZGRyZXNzIiwidXBkYXRlZEFkZHJlc3NlcyIsInVzZUVmZmVjdCIsInNlYXJjaCIsInRoZW4iLCJyZXN1bHRzIiwibWFwIiwiaSIsImxpbmUxIiwiY2l0eSIsInN0YXRlIiwiemlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULE9BQW9CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0JBRUNDLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFMUJDLFNBRjBCO0FBQUEsTUFFZkMsWUFGZTs7QUFHakMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxPQUFPLEVBQUk7QUFDaENGLGdCQUFZLEVBQUVFLE9BQUYsc0dBQWFILFNBQWIsSUFBdUJJLGdCQUF2QixHQUFaO0FBQ0QsR0FGRDs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHdFQUFNLEdBQ0hDLElBREgsQ0FDUSxVQUFBQyxPQUFPO0FBQUEsYUFBSVAsWUFBWSxDQUFDTyxPQUFELENBQWhCO0FBQUEsS0FEZjtBQUVELEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFLQSxzQkFDRSxxRUFBQyxpRUFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFLHFFQUFDLCtEQUFEO0FBQ0UsWUFBSSxFQUFDLGlCQURQO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVdFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw4QkFDQSxxRUFBQyw2REFBRDtBQUFNLHNCQUFjLEVBQUVOLGNBQXRCO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFJQ0YsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQ04sT0FBRCxFQUFTTyxDQUFUO0FBQUEsNEJBQ2IscUVBQUMsNkRBQUQ7QUFBYyx3QkFBYyxFQUFFUCxPQUE5QjtBQUF1Qyx3QkFBYyxFQUFFRCxjQUF2RDtBQUFBLGlDQUNFO0FBQUEsdUJBQ0dDLE9BQU8sQ0FBQ1EsS0FEWCxRQUNvQlIsT0FBTyxDQUFDUyxJQUQ1QixRQUNvQ1QsT0FBTyxDQUFDVSxLQUQ1QyxPQUNvRFYsT0FBTyxDQUFDVyxHQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXSixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkLENBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0dBdEN1QlosSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2FkZHJlc3MtYm9vay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0J1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQvY2FyZCdcblxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9hZGRyZXNzZXNBcGkvc2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgge30gKSB7XG5cbiAgY29uc3QgW2FkZHJlc3Nlcywgc2V0QWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBwcmVwZW5kQWRkcmVzcyA9IGFkZHJlc3MgPT4ge1xuICAgIHNldEFkZHJlc3NlcyhbYWRkcmVzcywuLi5hZGRyZXNzZXMsdXBkYXRlZEFkZHJlc3Nlc10pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaCgpXG4gICAgICAudGhlbihyZXN1bHRzID0+IHNldEFkZHJlc3NlcyhyZXN1bHRzKSk7XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFkZHJlc3MgQm9vazwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItOFwiPkFkZHJlc3MgQm9vazwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMlwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpY29uPVwiaWNvbi1zZWFyY2guc3ZnXCJcbiAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgIDxDYXJkIHByZXBlbmRBZGRyZXNzPXtwcmVwZW5kQWRkcmVzc30gPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5BZGQgYSBuZXcgdXNlcidzIGFkZHJlc3M8L3A+XG4gICAgICA8L0NhcmQ+XG4gICAgICB7YWRkcmVzc2VzLm1hcCgoYWRkcmVzcyxpKSA9PiBcbiAgICAgICAgPENhcmQga2V5PXtpfSBpbml0aWFsQWRkcmVzcz17YWRkcmVzc30gcHJlcGVuZEFkZHJlc3M9e3ByZXBlbmRBZGRyZXNzfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHthZGRyZXNzLmxpbmUxfSwge2FkZHJlc3MuY2l0eX0sIHthZGRyZXNzLnN0YXRlfSB7YWRkcmVzcy56aXB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/address-book.js\n");

/***/ })

})