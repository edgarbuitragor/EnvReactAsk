webpackJsonpExample__name_([7],{

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mrequest = __webpack_require__(244);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SelectInput = _react2.default.createClass({\n  displayName: 'SelectInput',\n\n  propTypes: {\n    url: _react2.default.PropTypes.string.isRequired,\n    name: _react2.default.PropTypes.string.isRequired\n  },\n\n  getInitialState: function getInitialState() {\n    return {\n      options: []\n    };\n  },\n\n  componentDidMount: function componentDidMount() {\n\n    var parreq = {\n      method: 'GET',\n      url: this.props.url\n    };\n\n    (0, _mrequest.makeRequest)(parreq).then(function (response) {\n      this.successHandler(response.result);\n    }.bind(this)).catch(function (err) {\n      console.error('AdminSelectRoles, there was an error!', err.statusText);\n    });\n  },\n\n  successHandler: function successHandler(data) {\n    for (var i = 0; i < data.length; i++) {\n      var option = data[i];\n      this.state.options.push(_react2.default.createElement(\n        'option',\n        { key: i, value: option.id },\n        option.nomb\n      ));\n    }\n    this.forceUpdate();\n  },\n\n  render: function render() {\n    return _react2.default.createElement(\n      'select',\n      { className: this.props.class, name: this.props.name },\n      this.state.options\n    );\n  }\n\n});\n\nexports.default = SelectInput;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlbGVjdElucHV0LmpzP2Q1YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHttYWtlUmVxdWVzdCBhcyBtUmVxfSBmcm9tICcuLi91dGlscy9tcmVxdWVzdCc7XG5cbnZhciBTZWxlY3RJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiBbXVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcGFycmVxID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogdGhpcy5wcm9wcy51cmxcbiAgICB9O1xuXG4gICAgbVJlcShwYXJyZXEpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlLnJlc3VsdClcbiAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FkbWluU2VsZWN0Um9sZXMsIHRoZXJlIHdhcyBhbiBlcnJvciEnLCBlcnIuc3RhdHVzVGV4dCk7XG4gICAgICB9KTtcbiAgfSxcblxuICBzdWNjZXNzSGFuZGxlcjogZnVuY3Rpb24oZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9wdGlvbiA9IGRhdGFbaV07XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucHVzaChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb24uaWR9PntvcHRpb24ubm9tYn08L29wdGlvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc30gbmFtZT17dGhpcy5wcm9wcy5uYW1lfT57dGhpcy5zdGF0ZS5vcHRpb25zfTwvc2VsZWN0PlxuICAgIClcbiAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0SW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlbGVjdElucHV0LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUEzQ0E7QUFDQTtBQTZDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AdminFormConductor = __webpack_require__(260);\n\nvar _AdminFormConductor2 = _interopRequireDefault(_AdminFormConductor);\n\nvar _FormMarcaAuto = __webpack_require__(263);\n\nvar _FormMarcaAuto2 = _interopRequireDefault(_FormMarcaAuto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PageTwo = _react2.default.createClass({\n  displayName: 'PageTwo',\n\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      { className: 'row' },\n      _react2.default.createElement(\n        'div',\n        { className: 'large-7 columns' },\n        _react2.default.createElement(_FormMarcaAuto2.default, null)\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'large-5 columns' },\n        _react2.default.createElement(_AdminFormConductor2.default, null)\n      )\n    );\n  }\n});\n\nexports.default = PageTwo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1BhZ2VUd28uanM/OWRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRtaW5Gb3JtQ29uZHVjdG9yIGZyb20gJy4vQWRtaW5Gb3JtQ29uZHVjdG9yLmpzJ1xuaW1wb3J0IEZvcm1NYXJjYUF1dG8gZnJvbSAnLi9Gb3JtTWFyY2FBdXRvLmpzJ1xuXG5jb25zdCBQYWdlVHdvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS03IGNvbHVtbnNcIj5cbiAgICAgICAgPEZvcm1NYXJjYUF1dG8gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS01IGNvbHVtbnNcIj5cbiAgICAgICAgPEFkbWluRm9ybUNvbmR1Y3RvciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VUd29cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1BhZ2VUd28uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFaQTtBQUNBO0FBY0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(261);\n\nvar AdminFormConductor = _react2.default.createClass({\n  displayName: 'AdminFormConductor',\n\n\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      { className: 'header callout secondary' },\n      _react2.default.createElement(\n        'div',\n        { className: 'sign' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'new products'\n        )\n      ),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Placa',\n        _react2.default.createElement('input', { name: 'autoPlaca', type: 'text', placeholder: 'large-12.columns' })\n      ),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Input Label',\n        _react2.default.createElement('input', { type: 'text', placeholder: 'large-12.columns' })\n      ),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Input Label',\n        _react2.default.createElement('input', { type: 'text', placeholder: 'large-12.columns' })\n      ),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Input Label',\n        _react2.default.createElement('input', { type: 'text', placeholder: 'large-12.columns' })\n      ),\n      _react2.default.createElement(\n        'select',\n        { name: 'autoCart', form: 'carform' },\n        _react2.default.createElement(\n          'option',\n          { value: 'volvo' },\n          'Volvo'\n        ),\n        _react2.default.createElement(\n          'option',\n          { value: 'saab' },\n          'Saab'\n        ),\n        _react2.default.createElement(\n          'option',\n          { value: 'opel' },\n          'Opel'\n        ),\n        _react2.default.createElement(\n          'option',\n          { value: 'audi' },\n          'Audi'\n        )\n      ),\n      _react2.default.createElement('input', { type: 'submit' })\n    );\n  }\n\n});\n\nexports.default = AdminFormConductor;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FkbWluRm9ybUNvbmR1Y3Rvci5qcz8yNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbnJlcXVpcmUgKCcuL2Zvcm1zUGFuZWxzLmNzcycpO1xuXG52YXIgQWRtaW5Gb3JtQ29uZHVjdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGNhbGxvdXQgc2Vjb25kYXJ5XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduXCI+XG4gICAgICAgICAgPGgxPm5ldyBwcm9kdWN0czwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxsYWJlbD5QbGFjYVxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYXV0b1BsYWNhXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxhcmdlLTEyLmNvbHVtbnNcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+SW5wdXQgTGFiZWxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxhcmdlLTEyLmNvbHVtbnNcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+SW5wdXQgTGFiZWxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxhcmdlLTEyLmNvbHVtbnNcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+SW5wdXQgTGFiZWxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxhcmdlLTEyLmNvbHVtbnNcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImF1dG9DYXJ0XCIgZm9ybT1cImNhcmZvcm1cIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcGVsXCI+T3BlbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdWRpXCI+QXVkaTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Gb3JtQ29uZHVjdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQWRtaW5Gb3JtQ29uZHVjdG9yLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUExQkE7QUE4QkE7QUFDQTtBQW5DQTtBQUNBO0FBcUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(262);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(249)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./formsPanels.css\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./formsPanels.css\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXNQYW5lbHMuY3NzPzk4MzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mb3Jtc1BhbmVscy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybXNQYW5lbHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybXNQYW5lbHMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZm9ybXNQYW5lbHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(248)();\n// imports\n\n\n// module\nexports.push([module.id, \".header.callout {\\n  margin: 3rem auto;\\n  border: 2px solid #054d67;\\n  background: #fff; }\\n.header.callout p {\\n  text-align: left;\\n  line-height: initial;\\n  margin-top: -1.25rem; }\\n.header.callout p span {\\n  text-transform: uppercase;\\n  letter-spacing: 1px;\\n  font-size: 75%;\\n  font-weight: bold; }\\n.header.callout .sign {\\n  background: #fff;\\n  width: 311px;\\n  height: 2.4rem;\\n  border: 2px solid #054d67;\\n  position: relative;\\n  top: -2.5rem;\\n  margin-left: auto; }\\n.header.callout .sign h1 {\\n  text-transform: uppercase;\\n  letter-spacing: 3px;\\n  color: #666;\\n  font-size: 70%;\\n  line-height: 2rem; }\\n\\n.header label {\\n  text-align: left;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXNQYW5lbHMuY3NzP2UwODAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyLmNhbGxvdXQge1xcbiAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDU0ZDY3O1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbi5oZWFkZXIuY2FsbG91dCBwIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcXG4gIG1hcmdpbi10b3A6IC0xLjI1cmVtOyB9XFxuLmhlYWRlci5jYWxsb3V0IHAgc3BhbiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4uaGVhZGVyLmNhbGxvdXQgLnNpZ24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAzMTFweDtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzA1NGQ2NztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTIuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuLmhlYWRlci5jYWxsb3V0IC5zaWduIGgxIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgY29sb3I6ICM2NjY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtOyB9XFxuXFxuLmhlYWRlciBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZm9ybXNQYW5lbHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SelectInput = __webpack_require__(258);\n\nvar _SelectInput2 = _interopRequireDefault(_SelectInput);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(261);\n\n\nvar FormMarcaAuto = _react2.default.createClass({\n  displayName: 'FormMarcaAuto',\n\n\n  getInitialState: function getInitialState() {\n    return { childSelectValue: undefined };\n  },\n\n  handleChange: function handleChange(event) {\n    this.setState({\n      childSelectValue: event.target.value\n    });\n  },\n\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      { className: 'header callout secondary' },\n      _react2.default.createElement(\n        'div',\n        { className: 'sign' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Marcas de Carros y Camiones'\n        )\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Selecciona un elemento para editarlo o eliminarlo o llena el campo inferior sin seleccionar elemento para crear uno nuevo'\n      ),\n      _react2.default.createElement(\n        'form',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'input-group' },\n          _react2.default.createElement(_SelectInput2.default, {\n            'class': 'input-group-field',\n            url: 'apiAdmin/allRoles',\n            name: 'marcaName',\n            value: this.state.childSelectValue,\n            onChange: this.handleChange\n          }),\n          _react2.default.createElement(\n            'div',\n            { className: 'input-group-button' },\n            _react2.default.createElement('input', { type: 'submit', className: 'alert button', value: 'Borrar' })\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'input-group' },\n          _react2.default.createElement('input', { name: 'marcaEdit', className: 'input-group-field', type: 'text', value: this.state.childSelectValue }),\n          _react2.default.createElement(\n            'div',\n            { className: 'input-group-button' },\n            _react2.default.createElement(\n              'button',\n              { type: 'button', className: 'success button' },\n              'Grabar'\n            ),\n            _react2.default.createElement(\n              'button',\n              { type: 'button', className: 'alert button' },\n              'Editar'\n            )\n          )\n        )\n      )\n    );\n  }\n\n});\n\nexports.default = FormMarcaAuto;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvcm1NYXJjYUF1dG8uanM/OTllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5yZXF1aXJlKCcuL2Zvcm1zUGFuZWxzLmNzcycpO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gJy4vU2VsZWN0SW5wdXQuanMnXG5cbnZhciBGb3JtTWFyY2FBdXRvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7Y2hpbGRTZWxlY3RWYWx1ZTogdW5kZWZpbmVkfTtcbiAgfSxcblxuICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRTZWxlY3RWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgY2FsbG91dCBzZWNvbmRhcnlcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25cIj5cbiAgICAgICAgICA8aDE+TWFyY2FzIGRlIENhcnJvcyB5IENhbWlvbmVzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlNlbGVjY2lvbmEgdW4gZWxlbWVudG8gcGFyYSBlZGl0YXJsbyBvIGVsaW1pbmFybG9cbiAgICAgICAgICBvIGxsZW5hIGVsIGNhbXBvIGluZmVyaW9yIHNpbiBzZWxlY2Npb25hciBlbGVtZW50b1xuICAgICAgICAgIHBhcmEgY3JlYXIgdW5vIG51ZXZvPC9wPlxuXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cblxuICAgICAgICAgICAgICA8U2VsZWN0SW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWdyb3VwLWZpZWxkXCJcbiAgICAgICAgICAgICAgICB1cmw9XCJhcGlBZG1pbi9hbGxSb2xlc1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1hcmNhTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hpbGRTZWxlY3RWYWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImFsZXJ0IGJ1dHRvblwiIHZhbHVlPVwiQm9ycmFyXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWFyY2FFZGl0XCIgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtZmllbGRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNoaWxkU2VsZWN0VmFsdWV9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInN1Y2Nlc3MgYnV0dG9uXCI+R3JhYmFyPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFsZXJ0IGJ1dHRvblwiPkVkaXRhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9XG5cbiAgICB9KTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IEZvcm1NYXJjYUF1dG87XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Gb3JtTWFyY2FBdXRvLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFWQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBaEJBO0FBVEE7QUFtQ0E7QUFDQTtBQWxEQTtBQUNBO0FBb0RBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

});