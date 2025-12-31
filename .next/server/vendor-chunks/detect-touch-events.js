"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-touch-events";
exports.ids = ["vendor-chunks/detect-touch-events"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-touch-events/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/detect-touch-events/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar detectTouchEvents = {\n  update: function update() {\n    if (typeof window !== 'undefined') {\n      detectTouchEvents.hasSupport = 'ontouchstart' in window;\n      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);\n    }\n  }\n};\n\ndetectTouchEvents.update();\nexports[\"default\"] = detectTouchEvents;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LXRvdWNoLWV2ZW50cy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGl2ZW5kb3JfZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2RldGVjdC10b3VjaC1ldmVudHMvbGliL2luZGV4LmpzPzc5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGRldGVjdFRvdWNoRXZlbnRzID0ge1xuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRldGVjdFRvdWNoRXZlbnRzLmhhc1N1cHBvcnQgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgICBkZXRlY3RUb3VjaEV2ZW50cy5icm93c2VyU3VwcG9ydHNBcGkgPSBCb29sZWFuKHdpbmRvdy5Ub3VjaEV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG5cbmRldGVjdFRvdWNoRXZlbnRzLnVwZGF0ZSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGV0ZWN0VG91Y2hFdmVudHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-touch-events/lib/index.js\n");

/***/ })

};
;