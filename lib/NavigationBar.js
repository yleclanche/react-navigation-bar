'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var NavigationBar = (function (_Component) {
    _inherits(NavigationBar, _Component);

    function NavigationBar(props) {
        _classCallCheck(this, NavigationBar);

        _get(Object.getPrototypeOf(NavigationBar.prototype), 'constructor', this).call(this, props);
        this.state = { 'opened': null };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    _createClass(NavigationBar, [{
        key: 'openMenu',
        value: function openMenu(id) {
            this.setState({ 'opened': id });
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu(id) {
            this.setState({ 'opened': null });
        }
    }, {
        key: 'renderSubMenu',
        value: function renderSubMenu() {
            var _this = this;

            /* return the submenus of the selected menu */
            return _react2['default'].Children.map(this.props.children, function (child) {
                var menuToShow = _this.state.opened || _this.props.selectedMenu;
                if (child.props.id === menuToShow) {
                    var _ret = (function () {
                        var parent = child;
                        var submenus = _react2['default'].Children.map(child.props.children, function (child) {
                            return _react2['default'].cloneElement(child, _extends({}, _this.props, {
                                menuId: parent.props.id,
                                selected: _this.props.selectedSubmenu === child.props.id
                            }));
                        });
                        return {
                            v: _react2['default'].createElement(
                                'ul',
                                { key: child.props.id, onSelect: _this.onSelect },
                                submenus
                            )
                        };
                    })();

                    if (typeof _ret === 'object') return _ret.v;
                }
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            return _react2['default'].Children.map(this.props.children, function (child) {
                return _react2['default'].cloneElement(child, _extends({}, _this2.props, {
                    mode: _this2.props.mode,
                    openMenu: _this2.openMenu,
                    selected: _this2.props.selectedMenu === child.props.id
                }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'hmenu', onMouseLeave: this.closeMenu },
                _react2['default'].createElement(
                    'ul',
                    { className: 'menu' },
                    this.renderChildren()
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'submenu' },
                    this.props.animation !== 'none' && _react2['default'].createElement(
                        _reactAddonsCssTransitionGroup2['default'],
                        { transitionName: 'slide', transitionEnterTimeout: 300,
                            transitionLeaveTimeout: 300 },
                        this.renderSubMenu()
                    ),
                    this.props.animation === 'none' && _react2['default'].createElement(
                        'span',
                        null,
                        this.renderSubMenu()
                    )
                )
            );
        }
    }]);

    return NavigationBar;
})(_react.Component);

exports.NavigationBar = NavigationBar;

;

NavigationBar.propTypes = {
    onSelect: _react2['default'].PropTypes.func.isRequired, // action to triggen when the user click on a menu
    selectedMenu: _react2['default'].PropTypes.string, // selected top menu id
    selectedSubmenu: _react2['default'].PropTypes.string, // selected sub menu id
    children: _react2['default'].PropTypes.array.isRequired, // list of menu and menu items
    mode: _react2['default'].PropTypes.oneOf(['mouseover', 'click']), // open the menu on click or on mouseover
    animation: _react2['default'].PropTypes.string // animation : 'slide' or 'none'. You can set any animation and
    // define your animation in a css file
};

NavigationBar.defaultProps = {
    animation: "slide",
    mode: "mouseover"
};