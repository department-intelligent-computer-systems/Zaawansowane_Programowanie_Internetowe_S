/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Author.ts":
/*!***********************!*\
  !*** ./src/Author.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Author)
/* harmony export */ });
/* harmony import */ var _DataRetrievalStrategyFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataRetrievalStrategyFactory */ "./src/DataRetrievalStrategyFactory.ts");
/* harmony import */ var _decorators_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/required */ "./src/decorators/required.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Author {
    getid() {
        return this._id;
    }
    setid(value) {
        this._id = value;
    }
    getfirstName() {
        return this._firstName;
    }
    setfirstName(value) {
        this._firstName = value;
    }
    getlastName() {
        return this._lastName;
    }
    setlastName(value) {
        this._lastName = value;
    }
    getemail() {
        return this._email;
    }
    setemail(value) {
        this._email = value;
    }
    constructor(id, firstName, lastName, email) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }
    static retrieveData(authors, strategyType) {
        const strategyFactory = new _DataRetrievalStrategyFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
        const strategy = strategyFactory.createStrategy(strategyType);
        return strategy.retrieveData(authors);
    }
}
__decorate([
    _decorators_required__WEBPACK_IMPORTED_MODULE_1__.required
], Author.prototype, "_firstName", void 0);


/***/ }),

/***/ "./src/DataRetrievalStrategyFactory.ts":
/*!*********************************************!*\
  !*** ./src/DataRetrievalStrategyFactory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataRetrievalStrategyFactory)
/* harmony export */ });
/* harmony import */ var _HTMLListStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLListStrategy */ "./src/HTMLListStrategy.ts");
/* harmony import */ var _HTMLTableStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLTableStrategy */ "./src/HTMLTableStrategy.ts");
/* harmony import */ var _JSONStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSONStrategy */ "./src/JSONStrategy.ts");



class DataRetrievalStrategyFactory {
    createStrategy(type) {
        switch (type) {
            case "table":
                return new _HTMLTableStrategy__WEBPACK_IMPORTED_MODULE_1__.HTMLTableStrategy();
            case "list":
                return new _HTMLListStrategy__WEBPACK_IMPORTED_MODULE_0__.HTMLListStrategy();
            case "json":
                return new _JSONStrategy__WEBPACK_IMPORTED_MODULE_2__.JSONStrategy();
            default:
                throw new Error("Unknown strategy type");
        }
    }
}


/***/ }),

/***/ "./src/HTMLListStrategy.ts":
/*!*********************************!*\
  !*** ./src/HTMLListStrategy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLListStrategy: () => (/* binding */ HTMLListStrategy)
/* harmony export */ });
class HTMLListStrategy {
    retrieveData(authors) {
        let list = "<ul>";
        authors.forEach((author) => {
            list += `<li>${author.getemail()} ${author.getlastName()} ${author.getid()} ${author.getfirstName()}</li>`;
        });
        list += "</ul>";
        return list;
    }
}


/***/ }),

/***/ "./src/HTMLTableStrategy.ts":
/*!**********************************!*\
  !*** ./src/HTMLTableStrategy.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLTableStrategy: () => (/* binding */ HTMLTableStrategy)
/* harmony export */ });
class HTMLTableStrategy {
    retrieveData(authors) {
        let table = "<table><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th></tr>";
        authors.forEach((author) => {
            table += `<tr><td>${author.getid()}</td><td>${author.getfirstName()}</td><td>${author.getlastName()}</td><td>${author.getemail()}</td></tr>`;
        });
        table += "</table>";
        return table;
    }
}


/***/ }),

/***/ "./src/JSONStrategy.ts":
/*!*****************************!*\
  !*** ./src/JSONStrategy.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONStrategy: () => (/* binding */ JSONStrategy)
/* harmony export */ });
class JSONStrategy {
    retrieveData(authors) {
        const jsonData = authors.map((author) => {
            return {
                id: author.getid(),
                firstName: author.getfirstName(),
                lastName: author.getlastName(),
                email: author.getemail(),
            };
        });
        return JSON.stringify(jsonData);
    }
}


/***/ }),

/***/ "./src/decorators/required.ts":
/*!************************************!*\
  !*** ./src/decorators/required.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
function required(target, name) {
    Object.defineProperty(target, name, {
        get: function () {
            return this[`__${name}`];
        },
        set: function (value) {
            if (value === null || value === undefined || value.length === 0)
                throw new Error(`${name} nie może być puste`);
            this[`__${name}`] = value;
        },
    });
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Author */ "./src/Author.ts");

class CounterApp {
    constructor() {
        this.count = 0;
        this.counterInput = document.getElementById("counterInput");
        this.incrementButton = document.getElementById("incrementButton");
        this.decrementButton = document.getElementById("decrementButton");
        this.addEventListeners();
        this.updateCounterDisplay();
    }
    addEventListeners() {
        this.incrementButton.addEventListener("click", () => this.incrementCounter());
        this.decrementButton.addEventListener("click", () => this.decrementCounter());
    }
    incrementCounter() {
        this.count++;
        this.updateCounterDisplay();
    }
    decrementCounter() {
        if (this.count > 0) {
            this.count--;
            this.updateCounterDisplay();
        }
    }
    updateCounterDisplay() {
        this.counterInput.value = this.count.toString();
    }
}
const app = new CounterApp();
class Aplikacja {
    async pobierzDane() {
        try {
            const response = await fetch("data.json");
            const dane = await response.json();
            console.log(dane);
            if (Array.isArray(dane)) {
                const autorzy = dane.map((d) => new _Author__WEBPACK_IMPORTED_MODULE_0__["default"](d.id, d.firstname, d.lastname, d.email));
                return autorzy;
            }
            else {
                throw new Error("Nieprawidłowy format danych JSON");
            }
        }
        catch (error) {
            console.error("Wystąpił błąd podczas pobierania danych:", error);
            return [];
        }
    }
    async uruchom() {
        const autorzy = await this.pobierzDane();
        if (autorzy.length > 0) {
            const authorList = document.getElementById("authorList");
            if (authorList != null) {
                if (autorzy.length === 0) {
                    authorList.innerHTML = "Brak dostępnych danych autorów.";
                }
                else {
                    const authorHTML = autorzy.map((autor) => {
                        return `<div>
                          <p>ID: ${autor.getid()}</p>
                          <p>Imię: ${autor.getfirstName()}</p>
                          <p>Nazwisko: ${autor.getlastName()}</p>
                          <p>Email: ${autor.getemail()}</p>
                        </div>`;
                    });
                    authorList.innerHTML = authorHTML.join("");
                    if (authorList != null) {
                        const authorHTML = _Author__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveData(autorzy, "list");
                        authorList.innerHTML = authorHTML;
                    }
                }
            }
        }
        else {
            console.log("Brak dostępnych danych autorów.");
        }
    }
}
const aplikacja = new Aplikacja();
aplikacja.uruchom();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map