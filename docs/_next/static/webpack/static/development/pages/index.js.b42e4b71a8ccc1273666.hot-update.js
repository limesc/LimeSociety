webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/components/Header.tsx":
/*!*******************************************!*\
  !*** ./pages/index/components/Header.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _consts_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../consts/layout */ "./consts/layout.ts");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Container */ "./pages/components/Container.tsx");






var _jsxFileName = "C:\\Users\\towno\\Documents\\Workspace\\LimeSociety\\pages\\index\\components\\Header.tsx";






var styles = function styles(theme) {
  var _motto, _motto2;

  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    container: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }, theme.breakpoints.up('sm'), {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }),
    root: {
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    motto1: (_motto = {
      marginTop: 75,
      marginBottom: 25,
      fontSize: 60,
      fontWeight: 'bold'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_motto, theme.breakpoints.down('sm'), {
      fontSize: 45
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_motto, theme.breakpoints.down('xs'), {
      fontSize: 30
    }), _motto),
    motto2: (_motto2 = {
      marginBottom: 75,
      fontSize: 42,
      fontWeight: 'bold'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_motto2, theme.breakpoints.down('sm'), {
      fontSize: 31
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_motto2, theme.breakpoints.down('xs'), {
      fontSize: 21
    }), _motto2),
    button: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      borderRadius: 5,
      boxShadow: 'none',
      '&:active, &:focus': {
        boxShadow: 'none'
      },
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 'bold',
      minWidth: 250,
      padding: "".concat(theme.spacing.unit * 3 - 3, "px ").concat(theme.spacing.unit * 6, "px")
    }, theme.breakpoints.down('sm'), {
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px"),
      fontSize: theme.typography.pxToRem(15),
      minWidth: 200
    }),
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2,
      backgroundImage: 'url("/static/index/components/header-bg.jpg")',
      backgroundColor: '#7fc7d9',
      backgroundPosition: 'center'
    },
    anchorLink: {
      textDecoration: 'none'
    }
  });
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: classes.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        width: "full",
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        align: "center",
        className: classes.motto1,
        component: 'h2',
        color: "inherit",
        variant: "h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Challenge the Future"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        align: "center",
        className: classes.motto2,
        component: 'h2',
        color: "inherit",
        variant: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "with Commitment and Passion"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#products",
        offset: _consts_layout__WEBPACK_IMPORTED_MODULE_9__["appBarHeight"],
        className: classes.anchorLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: classes.button,
        color: "primary",
        size: "large",
        variant: "contained",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Tell Me More")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.backdrop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.background,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Header));

/***/ })

})
//# sourceMappingURL=index.js.b42e4b71a8ccc1273666.hot-update.js.map