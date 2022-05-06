/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutContent\": () => (/* binding */ aboutContent)\n/* harmony export */ });\nfunction aboutContent(){\n    const aboutContainer = document.createElement('div');\n    const aboutText = document.createElement('p');\n\n    aboutContainer.classList.add('about-container');\n    aboutContainer.appendChild(aboutText);\n\n    aboutText.innerText = \"Under Construction!\";\n\n    return aboutContainer;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/foods.js":
/*!**********************!*\
  !*** ./src/foods.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"foodContent\": () => (/* binding */ foodContent)\n/* harmony export */ });\nfunction foodContent(){\n    const foodContainer = document.createElement('div');\n    const food = [];\n    for (let i = 0; i<4; i++){\n        food[i] = document.createElement('div');\n        const foodData = document.createElement('div');\n        const foodImage = document.createElement('span');\n        const foodTitle = document.createElement('h2');\n        const foodDescription = document.createElement('p');\n        const foodPrice = document.createElement('p');\n\n        food[i].classList.add(`food-${i}`);\n        foodData.classList.add('food-data');\n        foodPrice.classList.add('price');\n        foodDescription.classList.add('description');\n\n        if(i%2){\n            food[i].appendChild(foodImage);\n            food[i].appendChild(foodData);\n        }\n        else{\n            food[i].appendChild(foodData);\n            food[i].appendChild(foodImage);\n        }\n\n        foodTitle.innerText = \"Pizza\";\n        foodDescription.innerText = \"Pizza is made by blah blah blah and its so healthy! \\n Try to eat a pizza every day if u wanna live +100 years.\"\n        foodPrice.innerHTML = \"10.<span>88</span> $\"\n\n        foodData.appendChild(foodTitle);\n        foodData.appendChild(foodDescription);\n        foodData.appendChild(foodPrice);\n        foodContainer.appendChild(food[i]);\n    }\n\n    foodContainer.classList.add('foodContainer');\n    return foodContainer;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/foods.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeContent\": () => (/* binding */ homeContent)\n/* harmony export */ });\nfunction homeContent(){\n    const contentContainer = document.createElement('div');\n    const staff = document.createElement('div');\n    const address = document.createElement('div');\n    const testimonial = document.createElement('div');\n    const staffText = document.createElement('p');\n    const addressText = document.createElement('p');\n    const staffTitle = document.createElement('h2');\n    const addressTitle = document.createElement('h2');\n    const testimonialTitle = document.createElement('h2');\n    const staffContainer = document.createElement('div');\n    const addressContainer = document.createElement('div');\n    const testimonialContainer = document.createElement('div');\n\n    contentContainer.classList.add('homeContainer');\n    staff.classList.add('staff');\n    address.classList.add('address');\n    testimonial.classList.add('testimonial');\n\n    contentContainer.appendChild(staff);\n    contentContainer.appendChild(address);\n    contentContainer.appendChild(testimonial);\n    staff.appendChild(staffTitle);\n    staff.appendChild(staffContainer)\n    staffContainer.appendChild(document.createElement('span'));\n    staffContainer.appendChild(staffText);\n    address.appendChild(addressTitle);\n    address.appendChild(addressContainer)\n    addressContainer.appendChild(addressText);\n    addressContainer.appendChild(document.createElement('span'));\n    testimonial.appendChild(testimonialTitle);\n    testimonial.appendChild(testimonialContainer);\n    for(let i = 0 ; i<4; i++){\n        const people = document.createElement('div');\n        const peopleName = document.createElement('h3');\n        const peopleText = document.createElement('p');\n\n        people.appendChild(document.createElement('span'));\n        people.appendChild(peopleName);\n        people.appendChild(peopleText)\n        testimonialContainer.appendChild(people);\n\n        peopleName.innerText = \"Naweed\";\n        peopleText.innerText= \"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\";\n    }\n\n    staffTitle.innerText = \"Staff\";\n    addressTitle.innerText = \"Address\";\n    testimonialTitle.innerText = \"Testimonial\";\n    staffText.innerText = \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\";\n    addressText.innerHTML = \"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\";\n    return contentContainer;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _foods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foods.js */ \"./src/foods.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst contentContainer =document.createElement('div');\ncontentContainer.classList.add('contentContainer');\n\ndocument.body.appendChild((0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.navComponent)());\ndocument.body.appendChild(contentContainer);\ncontentContainer.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutContent)());\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navComponent\": () => (/* binding */ navComponent)\n/* harmony export */ });\nfunction navComponent(){\n    const nav = document.createElement('div');\n    const navContainer = document.createElement('div');\n    const logo = document.createElement('div');\n    const menu = document.createElement('div');\n    const homeMenu = document.createElement('div');\n    const foodsMenu = document.createElement('div');\n    const aboutMenu = document.createElement('div');\n\n    nav.classList.add('nav');\n    navContainer.classList.add('navContainer');\n    menu.classList.add('menu');\n    homeMenu.classList.add('home');\n    foodsMenu.classList.add('foods');\n    aboutMenu.classList.add('about');\n    \n    nav.appendChild(navContainer);\n    navContainer.appendChild(logo);\n    navContainer.appendChild(menu);\n    menu.appendChild(homeMenu);\n    menu.appendChild(foodsMenu);\n    menu.appendChild(aboutMenu);\n\n    logo.innerText = \"Odin Restaurant\";\n    homeMenu.innerText = \"home\";\n    foodsMenu.innerText = \"menu\";\n    aboutMenu.innerText = \"about\";\n\n    return nav;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;