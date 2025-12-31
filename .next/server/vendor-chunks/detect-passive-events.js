"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-passive-events";
exports.ids = ["vendor-chunks/detect-passive-events"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md\nvar detectPassiveEvents = {\n  update: function update() {\n    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {\n      var passive = false;\n      var options = Object.defineProperty({}, 'passive', {\n        get: function get() {\n          passive = true;\n        }\n      });\n      // note: have to set and remove a no-op listener instead of null\n      // (which was used previously), becasue Edge v15 throws an error\n      // when providing a null callback.\n      // https://github.com/rafgraph/detect-passive-events/pull/3\n      var noop = function noop() {};\n      window.addEventListener('testPassiveEventSupport', noop, options);\n      window.removeEventListener('testPassiveEventSupport', noop, options);\n      detectPassiveEvents.hasSupport = passive;\n    }\n  }\n};\n\ndetectPassiveEvents.update();\nexports[\"default\"] = detectPassiveEvents;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aXZlbmRvcl9lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzL2xpYi9pbmRleC5qcz9hZDBiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxudmFyIGRldGVjdFBhc3NpdmVFdmVudHMgPSB7XG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBwYXNzaXZlID0gZmFsc2U7XG4gICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHBhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIG5vdGU6IGhhdmUgdG8gc2V0IGFuZCByZW1vdmUgYSBuby1vcCBsaXN0ZW5lciBpbnN0ZWFkIG9mIG51bGxcbiAgICAgIC8vICh3aGljaCB3YXMgdXNlZCBwcmV2aW91c2x5KSwgYmVjYXN1ZSBFZGdlIHYxNSB0aHJvd3MgYW4gZXJyb3JcbiAgICAgIC8vIHdoZW4gcHJvdmlkaW5nIGEgbnVsbCBjYWxsYmFjay5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWZncmFwaC9kZXRlY3QtcGFzc2l2ZS1ldmVudHMvcHVsbC8zXG4gICAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdGlvbnMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlRXZlbnRTdXBwb3J0Jywgbm9vcCwgb3B0aW9ucyk7XG4gICAgICBkZXRlY3RQYXNzaXZlRXZlbnRzLmhhc1N1cHBvcnQgPSBwYXNzaXZlO1xuICAgIH1cbiAgfVxufTtcblxuZGV0ZWN0UGFzc2l2ZUV2ZW50cy51cGRhdGUoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRldGVjdFBhc3NpdmVFdmVudHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-passive-events/lib/index.js\n");

/***/ })

};
;