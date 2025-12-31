"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-hover";
exports.ids = ["vendor-chunks/detect-hover"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-hover/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/detect-hover/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar detectHover = {\n  update: function update() {\n    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {\n      detectHover.hover = window.matchMedia('(hover: hover)').matches;\n      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;\n      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;\n      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;\n    }\n  }\n};\n\ndetectHover.update();\nexports[\"default\"] = detectHover;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWhvdmVyL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGl2ZW5kb3JfZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2RldGVjdC1ob3Zlci9saWIvaW5kZXguanM/YjdjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZGV0ZWN0SG92ZXIgPSB7XG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRldGVjdEhvdmVyLmhvdmVyID0gd2luZG93Lm1hdGNoTWVkaWEoJyhob3ZlcjogaG92ZXIpJykubWF0Y2hlcztcbiAgICAgIGRldGVjdEhvdmVyLm5vbmUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBub25lKScpLm1hdGNoZXMgfHwgd2luZG93Lm1hdGNoTWVkaWEoJyhob3Zlcjogb24tZGVtYW5kKScpLm1hdGNoZXM7XG4gICAgICBkZXRlY3RIb3Zlci5hbnlIb3ZlciA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoYW55LWhvdmVyOiBob3ZlciknKS5tYXRjaGVzO1xuICAgICAgZGV0ZWN0SG92ZXIuYW55Tm9uZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoYW55LWhvdmVyOiBub25lKScpLm1hdGNoZXMgfHwgd2luZG93Lm1hdGNoTWVkaWEoJyhhbnktaG92ZXI6IG9uLWRlbWFuZCknKS5tYXRjaGVzO1xuICAgIH1cbiAgfVxufTtcblxuZGV0ZWN0SG92ZXIudXBkYXRlKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZXRlY3RIb3ZlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-hover/lib/index.js\n");

/***/ })

};
;