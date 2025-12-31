"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-pointer";
exports.ids = ["vendor-chunks/detect-pointer"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-pointer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/detect-pointer/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar detectPointer = {\n  update: function update() {\n    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {\n      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;\n      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;\n      detectPointer.none = window.matchMedia('(pointer: none)').matches;\n      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;\n      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;\n      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;\n    }\n  }\n};\n\ndetectPointer.update();\nexports[\"default\"] = detectPointer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LXBvaW50ZXIvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGl2ZW5kb3JfZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2RldGVjdC1wb2ludGVyL2xpYi9pbmRleC5qcz8wNjMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZXRlY3RQb2ludGVyID0ge1xuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZXRlY3RQb2ludGVyLmZpbmUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHBvaW50ZXI6IGZpbmUpJykubWF0Y2hlcztcbiAgICAgIGRldGVjdFBvaW50ZXIuY29hcnNlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcbiAgICAgIGRldGVjdFBvaW50ZXIubm9uZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocG9pbnRlcjogbm9uZSknKS5tYXRjaGVzO1xuICAgICAgZGV0ZWN0UG9pbnRlci5hbnlGaW5lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhhbnktcG9pbnRlcjogZmluZSknKS5tYXRjaGVzO1xuICAgICAgZGV0ZWN0UG9pbnRlci5hbnlDb2Fyc2UgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKGFueS1wb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcbiAgICAgIGRldGVjdFBvaW50ZXIuYW55Tm9uZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoYW55LXBvaW50ZXI6IG5vbmUpJykubWF0Y2hlcztcbiAgICB9XG4gIH1cbn07XG5cbmRldGVjdFBvaW50ZXIudXBkYXRlKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZXRlY3RQb2ludGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-pointer/lib/index.js\n");

/***/ })

};
;