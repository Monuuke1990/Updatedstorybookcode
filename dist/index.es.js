import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".test {\n    display: inline-block;\n    margin: 2em auto;\n    border: 2px solid #000;\n    font-size: 2em;\n}\n\n.spade-btn {\n    border-radius: 4px;\n    height: 42px;\n    min-width: 58px;\n    font-size: 16px;\n}\n\n.spade-btn-sm {\n    border-radius: 4px;\n    height: 32px;\n    min-width: 48px;\n    font-size: 14px;\n}\n\n.spade-btn-primary {\n    background: #0F65EF;\n    color: #fff;\n    text-decoration: none;\n    display: inline-block;\n    border: 1px solid #0F65EF;\n}\n\n.spade-btn-lg-flat {\n    border-radius: 4px;\n    height: 42px;\n    min-width: 78px;\n    font-size: 16px;\n}\n\n.spade-btn-wide {\n    border-radius: 4px;\n    height: 42px;\n    min-width: 248px;\n    font-size: 16px;\n}\n\n.spade-btn-sm-flat {\n    border-radius: 4px;\n    height: 32px;\n    min-width: 66px;\n    font-size: 14px;\n}\n\n.spade-primary-disabled {\n    opacity: 0.3;\n    background: #0F65EF;\n    color: #fff;\n    border: 1px solid #0F65EF;\n}\n\n.spade-secondary-disabled {\n    opacity: 0.3;\n    background: #fff;\n    color: #0F65EF;\n    border: 1px solid #0F65EF;\n}\n\n.spade-btn-secondary {\n    background: #fff;\n    color: #0F65EF;\n    text-decoration: none;\n    display: inline-block;\n    border: 1px solid #0F65EF\n}\n\n.spade-btn-danger {\n    background: #EE3322;\n    color: #fff;\n    text-decoration: none;\n    display: inline-block;\n    border: 1px solid #EE3322\n}";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Example = function (_Component) {
    inherits(Example, _Component);

    function Example() {
        classCallCheck(this, Example);
        return possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
    }

    createClass(Example, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                className = _props.className;


            return React.createElement(
                'div',
                { className: className },
                'Example Component: ',
                text,
                ' '
            );
        }
    }]);
    return Example;
}(Component);

Example.propTypes = {
    text: PropTypes.string
};

var Button = function (_Component) {
    inherits(Button, _Component);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                className = _props.className,
                variant = _props.variant,
                children = _props.children;

            var classValue = '';
            switch (variant) {
                case "primary":
                    classValue = 'spade-btn spade-btn-primary';
                    break;
                case "sm-primary":
                    classValue = 'spade-btn-sm spade-btn-primary';
                    break;
                case "sm-secondary":
                    classValue = 'spade-btn-sm-flat spade-btn-secondary';
                    break;
                case "secondary":
                    classValue = 'spade-btn-lg-flat spade-btn-secondary';
                    break;
                case "danger":
                    classValue = 'spade-btn-lg-flat spade-btn-danger';
                    break;
                case "sm-danger":
                    classValue = 'spade-btn-sm-flat spade-btn-danger';
                    break;
                case "primary-disabled":
                    classValue = 'spade-btn spade-primary-disabled';
                    break;
                case "secondary-disabled":
                    classValue = 'spade-btn spade-secondary-disabled';
                    break;
                case "primary-wide":
                    classValue = 'spade-btn-wide spade-btn-primary';
                    break;
                case "secondary-wide":
                    classValue = 'spade-btn-wide spade-btn-secondary';
                    break;
                case "danger-wide":
                    classValue = 'spade-btn-wide spade-btn-danger';
                    break;
                default:
                    classValue = 'btn btn-primary';
            }
            return React.createElement(
                'button',
                { className: classValue },
                ' ',
                children,
                ' '
            );
        }
    }]);
    return Button;
}(Component);

Button.propTypes = {
    text: PropTypes.string
};

export { Example, Button };
//# sourceMappingURL=index.es.js.map
