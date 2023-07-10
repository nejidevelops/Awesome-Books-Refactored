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

/***/ "./modules/book.js":
/*!*************************!*\
  !*** ./modules/book.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nclass Book {\n  constructor(title, author) {\n    this.title = title;\n    this.author = author;\n  }\n}\n\n//# sourceURL=webpack://awesome-books-refactored/./modules/book.js?");

/***/ }),

/***/ "./modules/bookCollection.js":
/*!***********************************!*\
  !*** ./modules/bookCollection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookCollection: () => (/* binding */ BookCollection)\n/* harmony export */ });\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./modules/book.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nclass BookCollection {\n  constructor() {\n    this.books = this.getBooks();\n  }\n\n  addBookToList = (book) => {\n    const list = document.querySelector('#collection');\n\n    const bookDisplay = document.createElement('div');\n    bookDisplay.className = 'Collection1';\n    bookDisplay.innerHTML = `\n    <div class=\"book1\">\n      <p class=\"bookTitle\">${book.title}</p>\n      <p class=\"bookAuthor\"> by ${book.author}.</p>\n    </div>\n      <button class=\"delete\">Remove</button>\n    `;\n\n    list.appendChild(bookDisplay);\n  };\n\n  getBooks = () => {\n    let books;\n    if (localStorage.getItem('books') === null) {\n      books = [];\n    } else {\n      books = JSON.parse(localStorage.getItem('books'));\n    }\n\n    return books;\n  };\n\n  displayBooks = () => {\n    this.books.forEach((book) => this.addBookToList(book));\n  };\n\n  addBook = (book) => {\n    this.books.push(book);\n    localStorage.setItem('books', JSON.stringify(this.books));\n  };\n\n  removeBook = (title) => {\n    this.books = this.books.filter((book) => book.title !== title);\n    localStorage.setItem('books', JSON.stringify(this.books));\n  };\n\n  clearFields = () => {\n    document.querySelector('#title').value = '';\n    document.querySelector('#author').value = '';\n  };\n\n  handleFormSubmit = (event) => {\n    event.preventDefault();\n\n    const title = document.querySelector('#title').value;\n    const author = document.querySelector('#author').value;\n\n    const book = new _book_js__WEBPACK_IMPORTED_MODULE_0__.Book(title, author);\n\n    this.addBookToList(book);\n    this.addBook(book);\n    this.clearFields();\n  };\n\n  handleCollectionClick = (event) => {\n    if (event.target.classList.contains('delete')) {\n      const bookTitle = event.target.parentElement.querySelector('.bookTitle').textContent;\n      event.target.parentElement.remove();\n      this.removeBook(bookTitle);\n    }\n  };\n\n  initialize = () => {\n    document.addEventListener('DOMContentLoaded', () => {\n      this.displayBooks();\n    });\n\n    document.querySelector('#book-form').addEventListener('submit', (event) => {\n      this.handleFormSubmit(event);\n    });\n\n    document.querySelector('#collection').addEventListener('click', (event) => {\n      this.handleCollectionClick(event);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://awesome-books-refactored/./modules/bookCollection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_bookCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/bookCollection */ \"./modules/bookCollection.js\");\n/* eslint-disable max-classes-per-file */\n\n\nconst collection = new _modules_bookCollection__WEBPACK_IMPORTED_MODULE_0__.BookCollection();\ncollection.initialize();\n\nconst welcomeMessage = document.getElementById('welcome-message');\nconst booksCollection = document.getElementById('booksCollection');\nconst newBook = document.getElementById('addBooks');\nconst contact = document.getElementById('contacts');\n\nbooksCollection.addEventListener('click', () => {\n  welcomeMessage.style.display = 'none';\n  newBook.style.display = 'block';\n  contact.style.display = 'block';\n});\n\nnewBook.addEventListener('click', () => {\n  welcomeMessage.style.display = 'none';\n  booksCollection.style.display = 'block';\n  contact.style.display = 'block';\n});\n\ncontact.addEventListener('click', () => {\n  welcomeMessage.style.display = 'none';\n  booksCollection.style.display = 'block';\n  newBook.style.display = 'block';\n});\n\n\n//# sourceURL=webpack://awesome-books-refactored/./src/index.js?");

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