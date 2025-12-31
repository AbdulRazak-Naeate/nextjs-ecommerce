"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/are-passive-events-supported@1.1.1";
exports.ids = ["vendor-chunks/are-passive-events-supported@1.1.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/are-passive-events-supported@1.1.1/node_modules/are-passive-events-supported/dist/are-passive-events-supported.esm.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/are-passive-events-supported@1.1.1/node_modules/are-passive-events-supported/dist/are-passive-events-supported.esm.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar isBrowser = typeof document !== 'undefined';\n\nvar supportsPassiveEvents;\nfunction arePassiveEventsSupported() {\n  if (supportsPassiveEvents !== undefined) {\n    return supportsPassiveEvents;\n  }\n\n  if (!(isBrowser)) {\n    supportsPassiveEvents = false;\n    return false;\n  }\n\n  var passive = false;\n  var options = {\n    // @ts-ignore: this is a temporary object, it doesn't have to return anything\n    get passive() {\n      passive = true;\n    }\n\n  };\n\n  var noop = function noop() {};\n\n  window.addEventListener('t', noop, options);\n  window.removeEventListener('t', noop, options);\n  supportsPassiveEvents = passive;\n  return passive;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arePassiveEventsSupported);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vYXJlLXBhc3NpdmUtZXZlbnRzLXN1cHBvcnRlZEAxLjEuMS9ub2RlX21vZHVsZXMvYXJlLXBhc3NpdmUtZXZlbnRzLXN1cHBvcnRlZC9kaXN0L2FyZS1wYXNzaXZlLWV2ZW50cy1zdXBwb3J0ZWQuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHlCQUF5QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGl2ZW5kb3JfZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2FyZS1wYXNzaXZlLWV2ZW50cy1zdXBwb3J0ZWRAMS4xLjEvbm9kZV9tb2R1bGVzL2FyZS1wYXNzaXZlLWV2ZW50cy1zdXBwb3J0ZWQvZGlzdC9hcmUtcGFzc2l2ZS1ldmVudHMtc3VwcG9ydGVkLmVzbS5qcz82NDg0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlRXZlbnRzO1xuZnVuY3Rpb24gYXJlUGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCgpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cztcbiAgfVxuXG4gIGlmICghKGlzQnJvd3NlcikpIHtcbiAgICBzdXBwb3J0c1Bhc3NpdmVFdmVudHMgPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFzc2l2ZSA9IGZhbHNlO1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICAvLyBAdHMtaWdub3JlOiB0aGlzIGlzIGEgdGVtcG9yYXJ5IG9iamVjdCwgaXQgZG9lc24ndCBoYXZlIHRvIHJldHVybiBhbnl0aGluZ1xuICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgcGFzc2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3QnLCBub29wLCBvcHRpb25zKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3QnLCBub29wLCBvcHRpb25zKTtcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRzID0gcGFzc2l2ZTtcbiAgcmV0dXJuIHBhc3NpdmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFyZVBhc3NpdmVFdmVudHNTdXBwb3J0ZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/are-passive-events-supported@1.1.1/node_modules/are-passive-events-supported/dist/are-passive-events-supported.esm.js\n");

/***/ })

};
;