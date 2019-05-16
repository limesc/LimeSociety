webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/AppBar.tsx":
/*!*************************************!*\
  !*** ./pages/components/AppBar.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _consts_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../consts/layout */ "./consts/layout.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Link */ "./pages/components/Link.tsx");







var _jsxFileName = "C:\\Users\\towno\\Documents\\Workspace\\LimeSociety\\pages\\components\\AppBar.tsx";







var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["createStyles"])({
    root: {
      flexGrow: 1
    },
    withoutHome: {
      height: _consts_layout__WEBPACK_IMPORTED_MODULE_11__["appBarHeight"]
    },
    invisible: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      background: 'transparent',
      boxShadow: 'none'
    }, theme.breakpoints.up('md'), {
      // transform: 'translateY(5%)',
      transition: 'all .5s'
    }),
    show: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      background: 'black'
    }, theme.breakpoints.up('sm'), {
      transition: 'all .5s'
    }),
    title: {
      fontSize: 25
    },
    toolbar: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
      height: _consts_layout__WEBPACK_IMPORTED_MODULE_11__["appBarHeight"],
      width: 'auto',
      marginLeft: 0,
      marginRight: 0
    }, theme.breakpoints.up(Object(_consts_layout__WEBPACK_IMPORTED_MODULE_11__["containerBreakpoint"])(theme)), {
      width: 850,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }),
    left: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    leftLinkTypo: {
      display: 'none',
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      // theme.palette.common.white,
      '&:hover': {
        opacity: 0.8
      }
    },
    leftLinkImg: {
      // display: 'none',
      verticalAlign: 'middle'
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    rightFolded: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, theme.breakpoints.up(Object(_consts_layout__WEBPACK_IMPORTED_MODULE_11__["containerBreakpoint"])(theme)), {
      display: 'none'
    }),
    rightExpanded: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, theme.breakpoints.down(Object(_consts_layout__WEBPACK_IMPORTED_MODULE_11__["containerBreakpoint"])(theme)), {
      display: 'none'
    }),
    rightMenu: {
      color: theme.palette.common.white
    },
    rightLink: {
      marginLeft: theme.spacing(3)
    },
    rightLinkTypo: {
      fontSize: 14,
      color: theme.palette.common.white,
      '&:hover': {
        opacity: 0.8
      }
    },
    drawerList: {
      width: 250
    }
  });
};

var AppBar =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppBar, _React$PureComponent);

  function AppBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      drawer: false,
      shouldShow: true
    };

    _this.handleScroll = function () {
      if (_this.props.home) {
        var shouldShow = window.scrollY >= 80;

        if (shouldShow !== _this.state.shouldShow) {
          _this.setState(function (prevState) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
              shouldShow: shouldShow
            });
          });
        }
      }
    };

    _this.toggleDrawer = function (open) {
      return function () {
        _this.setState({
          drawer: open
        });
      };
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AppBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.home) {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.home) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "getScrollClassName",
    value: function getScrollClassName() {
      return !this.props.home || this.state.shouldShow ? this.props.classes.show : this.props.classes.invisible;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          home = _this$props.home;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["AppBar"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(classes.root, this.getScrollClassName()),
        color: "inherit",
        elevation: 0,
        position: "fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classes.left,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        underline: "none",
        href: home ? '#top' : '/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: classes.leftLinkTypo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Lime Society"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        className: classes.leftLinkImg,
        src: "/static/components/appbar-logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(classes.right, classes.rightFolded),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
        className: classes.rightMenu,
        "aria-label": "Menu",
        onClick: this.toggleDrawer(true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(classes.right, classes.rightExpanded),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.rightLink,
        underline: "none",
        href: home ? '#products' : '/#products',
        offset: _consts_layout__WEBPACK_IMPORTED_MODULE_11__["appBarHeight"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        className: classes.rightLinkTypo,
        variant: "body1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "PRODUCTS")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.rightLink,
        underline: "none",
        href: home ? '#company' : '/#company',
        offset: _consts_layout__WEBPACK_IMPORTED_MODULE_11__["appBarHeight"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        className: classes.rightLinkTypo,
        variant: "body1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "COMPANY")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.rightLink,
        href: "/blog",
        underline: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        className: classes.rightLinkTypo,
        variant: "body1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "BLOG")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Drawer"], {
        anchor: "right",
        open: this.state.drawer,
        onClose: this.toggleDrawer(false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer(false),
        onKeyDown: this.toggleDrawer(false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classes.drawerList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        underline: "none",
        href: home ? '#top' : '/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
        primary: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        underline: "none",
        href: home ? '#products' : '/#products',
        offset: _consts_layout__WEBPACK_IMPORTED_MODULE_11__["appBarHeight"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
        primary: "Products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        underline: "none",
        href: home ? '#company' : '/#company',
        offset: _consts_layout__WEBPACK_IMPORTED_MODULE_11__["appBarHeight"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
        primary: "Company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        underline: "none",
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
        button: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
        primary: "Blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      })))))))), !home && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classes.withoutHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }));
    }
  }]);

  return AppBar;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(AppBar));

/***/ }),

/***/ "./pages/index/components/Products.tsx":
/*!*********************************************!*\
  !*** ./pages/index/components/Products.tsx ***!
  \*********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _consts_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../consts/layout */ "./consts/layout.ts");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Container */ "./pages/components/Container.tsx");






var _jsxFileName = "C:\\Users\\towno\\Documents\\Workspace\\LimeSociety\\pages\\index\\components\\Products.tsx";






var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    background: {
      backgroundColor: _consts_layout__WEBPACK_IMPORTED_MODULE_9__["lightLimeColor"],
      overflow: 'hidden'
    },
    root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
    }, theme.breakpoints.down('sm'), {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }),
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: theme.spacing(6)
    }, theme.breakpoints.down('sm'), {
      marginBottom: theme.spacing(4)
    }),
    product: {
      position: 'relative',
      margin: theme.spacing(1),
      maxWidth: 'auto'
    },
    productTitle: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    productMedia: {
      height: 250
    }
  });
};

var Products =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Products, _React$Component);

  function Products() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Products);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Products).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Products, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.background,
        id: "products",
        width: "full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.root,
        component: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        align: "center",
        className: classes.title,
        component: 'h2',
        variant: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "PRODUCTS"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        container: true,
        spacing: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        as: "/blog/13",
        href: {
          pathname: '/blog',
          query: {
            postId: 13
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: classes.product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActionArea"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardMedia"], {
        className: classes.productMedia,
        image: "/static/blog/post-13-1.jpg",
        title: "Medical DB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        className: classes.productTitle,
        gutterBottom: true,
        variant: "h6",
        component: 'h3',
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Medical DB 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: classes.product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActionArea"], {
        href: "https://vitaldb.net/",
        target: "_blank",
        rel: "noopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardMedia"], {
        className: classes.productMedia,
        image: "/static/index/components/products-vital-db.png",
        title: "Vital DB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        className: classes.productTitle,
        gutterBottom: true,
        variant: "h6",
        component: 'h3',
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Vital DB"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: classes.product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardActionArea"], {
        href: "http://nextmedicine.com/",
        target: "_blank",
        rel: "noopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardMedia"], {
        className: classes.productMedia,
        image: "/static/index/components/products-next-medicine.jpg",
        title: "Next Medicine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        className: classes.productTitle,
        gutterBottom: true,
        variant: "h6",
        component: 'h3',
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Next Medicine"))))))));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Products));

/***/ })

})
//# sourceMappingURL=index.js.467db426601065a9d457.hot-update.js.map