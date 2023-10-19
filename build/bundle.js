/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/author.ts":
/*!***********************!*\
  !*** ./src/author.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Author: () => (/* binding */ Author)
/* harmony export */ });
/* harmony import */ var _decoratos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoratos */ "./src/decoratos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Author {
    constructor(firstname, lastname, email, id) {
        this._id = id || Author._objectCounter + 1; // Jeśli nie podano id, użyj wartości licznika
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        Author._objectCounter++;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get email() {
        return this._email;
    }
    getAuthor() {
        return `${this._firstname} ${this._lastname} - ${this._email}`;
    }
}
Author._objectCounter = 0;
__decorate([
    (0,_decoratos__WEBPACK_IMPORTED_MODULE_0__.required)("Imię jest wymagane")
], Author.prototype, "_firstname", void 0);
__decorate([
    (0,_decoratos__WEBPACK_IMPORTED_MODULE_0__.required)("Nazwisko jest wymagane")
], Author.prototype, "_lastname", void 0);
__decorate([
    (0,_decoratos__WEBPACK_IMPORTED_MODULE_0__.required)("Email jest wymagane"),
    _decoratos__WEBPACK_IMPORTED_MODULE_0__.isValidEmail
], Author.prototype, "_email", void 0);


/***/ }),

/***/ "./src/decoratos.ts":
/*!**************************!*\
  !*** ./src/decoratos.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidEmail: () => (/* binding */ isValidEmail),
/* harmony export */   notEmpty: () => (/* binding */ notEmpty),
/* harmony export */   required: () => (/* binding */ required)
/* harmony export */ });
function isValidEmail(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        if (!newVal.includes("@")) {
            throw new Error("Niepoprawny adres email");
        }
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
function required(message = "To pole jest wymagane") {
    return (target, propertyKey) => {
        const key = propertyKey.toString();
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue === null || newValue === undefined || String(newValue).trim() === "") {
                throw new Error(message);
            }
            value = newValue;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
function notEmpty(message = "To pole nie może być puste") {
    return (target, propertyKey) => {
        const key = propertyKey.toString();
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (!newValue || !newValue.trim()) {
                throw new Error(message);
            }
            value = newValue;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
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
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author */ "./src/author.ts");

class CounterApp {
    constructor() {
        this.counter = 0;
        this.counterInput = document.getElementById('counterInput');
        this.incrementButton = document.getElementById('incrementButton');
        this.decrementButton = document.getElementById('decrementButton');
        this.incrementButton.addEventListener('click', this.increment.bind(this));
        this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
    increment() {
        this.counter++;
        this.updateCounterInput();
    }
    decrement() {
        if (this.counter > 0) {
            this.counter--;
            this.updateCounterInput();
        }
    }
    updateCounterInput() {
        this.counterInput.value = this.counter.toString();
    }
}
class DataLoader {
    constructor() {
        this.authors = [];
        this.isDataLoaded = false;
    }
    async loadAuthorsFromServer() {
        if (this.isDataLoaded) {
            return; // Jeśli dane są już wczytane, nie wczytuj ich ponownie
        }
        try {
            const response = await fetch("data.json"); // Upewnij się, że ścieżka jest poprawna
            if (!response.ok) {
                throw new Error(`Błąd pobierania danych: ${response.statusText}`);
            }
            const authorData = await response.json();
            for (let index = 0; index < authorData.length; index++) {
                const data = authorData[index];
                const id = index + 1;
                const _fn = data.firstname;
                const _lt = data.lastname;
                const _em = data.email;
                this.authors.push(new _author__WEBPACK_IMPORTED_MODULE_0__.Author(_fn, _lt, _em, id));
            }
            this.isDataLoaded = true;
        }
        catch (error) {
            console.error('Błąd pobierania danych:', error);
        }
    }
    getAuthors() {
        return this.authors;
    }
}
class App {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
    }
    async run() {
        await this.dataLoader.loadAuthorsFromServer();
        this.displayAuthors();
        const displayOption = document.getElementById("displayOption");
        displayOption.addEventListener("change", () => {
            this.displayAuthors();
        });
    }
    displayAuthors() {
        const displayOption = document.getElementById("displayOption");
        const selectedOption = displayOption.value;
        const displayContainer = document.getElementById("displayContainer");
        if (displayContainer) {
            displayContainer.innerHTML = "";
            if (selectedOption === "bulletList" || selectedOption === "numberedList") {
                const listType = selectedOption === "bulletList" ? "ul" : "ol";
                const list = document.createElement(listType);
                this.dataLoader.getAuthors().forEach((author) => {
                    const li = document.createElement("li");
                    li.textContent = author.getAuthor();
                    list.appendChild(li);
                });
                displayContainer.appendChild(list);
            }
            else if (selectedOption === "table") {
                const table = document.createElement("table");
                const thead = document.createElement("thead");
                thead.innerHTML = `
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Email</th>
            </tr>
          `;
                table.appendChild(thead);
                const tbody = document.createElement("tbody");
                this.dataLoader.getAuthors().forEach((author) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
              <td>${author.firstname}</td>
              <td>${author.lastname}</td>
              <td>${author.email}</td>
            `;
                    tbody.appendChild(row);
                });
                table.appendChild(tbody);
                displayContainer.appendChild(table);
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const dataLoader = new DataLoader();
    const app = new App(dataLoader);
    new CounterApp();
    app.run();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map