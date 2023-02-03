/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/article/article.css":
/*!********************************************!*\
  !*** ./src/components/article/article.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/navbar/navbar.css":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/404page/notfound.css":
/*!****************************************!*\
  !*** ./src/pages/404page/notfound.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/home/home.css":
/*!*********************************!*\
  !*** ./src/pages/home/home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/maze/maze-page.css":
/*!**************************************!*\
  !*** ./src/pages/maze/maze-page.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/maze/maze-visualizer/maze-visualizer.css":
/*!************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/maze-visualizer.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _base_HashRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/HashRouter */ "./src/base/HashRouter.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/Navbar */ "./src/components/navbar/Navbar.js");
/* harmony import */ var _configs_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/route.config */ "./src/configs/route.config.js");






/**
 * Main class that handles the initialization and running of the application
 */
class App{

    /**
     * @constructor
     */
    constructor(){
        /**
         * The router for the application
         *
         * @type {HashRouter}
         */
        this.router = new _base_HashRouter__WEBPACK_IMPORTED_MODULE_0__["default"]();
        // Register all routes from the route config file
        _configs_route_config__WEBPACK_IMPORTED_MODULE_4__["default"].forEach(route => {
            this.router.registerRoute(route.path, route.page, route.data);
        });

        /**
         * The header component of the application
         *
         * @type {Header}
         */
        const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]();
        // Add the header component as the first child of the body of the document
        document.body.insertAdjacentElement('afterbegin', header.create());

        const navbar = new _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"]();
        document.body.firstChild.after(navbar.create());

        /**
         * The footer component of the application
         *
         * @type {Footer}
         */
        const footer = new _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"]();
        // Add the footer component as the last child of the body of the document
        document.body.insertAdjacentElement('beforeend', footer.create());   
    };

    /**
     * Runs the application by initializing the router
     *
     * @property {function} run
    */
    run(){
        this.router.init();
    };
};

/***/ }),

/***/ "./src/base/BaseComponent.js":
/*!***********************************!*\
  !*** ./src/base/BaseComponent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
/**
 * Base abstract class for a component
 */
class BaseComponent {

    /**
     * @constructor
     * @param {string} tag - The HTML tag of the component element
     * @param {string | string[]} [className] - The class name(s) of the component element
     * @param {string} [id] - The id of the component element
     */
    constructor(tag, className="", id=""){
        // Check if the class is being instantiated directly
        if (this.constructor === BaseComponent) {
            throw new Error("Can't instantiate abstract class!");
        };

        /**
         * The component element
         * 
         * @type {HTMLElement}
         */
        this.componentElement = document.createElement(tag);

        // Check if the class names are provided and add them to the component
        if (className){
            this.addClass(className);
        };
        
        // Check if an ID is provided and add it to the component
        if (id) {
            this.addID(id);
        };
    };

    /**
     * Abstract method to create the component
     * 
     * @property {function} create
     * @abstract
    */
    create(){
        throw new Error("Abstract method!");
    };

    /**
     * Add an ID to the component element
     * 
     * @property {function} addID
     * @param {string} id - The id to add
     * @throws {Error} - If the component already has an ID
     */
    addID(id){
        if (!this.componentElement.hasAttribute("id")){
            this.componentElement.id = id;
        }else {
            throw new Error("Cannot add an ID. The element already has an ID");
        }
    };

    /**
     * Remove id from the component element
     * 
     * @property {function} removeID
     * @throws {Error} - If the component does not have an ID
     */
    removeID(){
        if (this.componentElement.hasAttribute("id")) {
            this.componentElement.removeAttribute("id");
        } else {
            throw new Error("Cannot remove the ID. The element has no ID to remove");
        };
    };

    /**
     * Add class name(s) to the component element
     * 
     * @property {function} addClass
     * @param {string | string[]} classNames - The class name to add
     */
    addClass(classNames){
        // Check if the input is an array or a single string
        if (Array.isArray(classNames)){
            // Add all the class names in the array if they don't exist
            classNames.forEach(className => {
                if (!this.componentElement.classList.contains(className)){
                    this.componentElement.classList.add(className);
                };
            });
        }else {
            // Add the class name if it doesn't exist
            if (!this.componentElement.classList.contains(classNames)){
                this.componentElement.classList.add(classNames);
            };
        };
    };

    /**
     * Add class name(s) to the component element
     * 
     * @property {function} removeClass
     * @param {string | string[]} classNames - The class name to add
     */
    removeClass(classNames){
        // Check if the input is an array or a single string
        if (Array.isArray(classNames)){
            // Remove all the class names in the array if they exist
            classNames.forEach(className => {
                if (this.componentElement.classList.contains(className)){
                    this.componentElement.classList.remove(className);
                };
            });
        }else {
            // Remove the class name if it exists
            if (this.componentElement.classList.contains(classNames)){
                this.componentElement.classList.remove(classNames);
            };
        };
    };

    /**
     * Toggles a class name 
     * If the class exists it removes it.
     * If the class doesn't exist it add it.
     * 
     * @property {function} toggleClass
     * @param {string} className 
     */
    toggleClass(className){
        this.componentElement.classList.toggle(className);
    };
};

/***/ }),

/***/ "./src/base/HashRouter.js":
/*!********************************!*\
  !*** ./src/base/HashRouter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashLink": () => (/* binding */ HashLink),
/* harmony export */   "default": () => (/* binding */ HashRouter)
/* harmony export */ });
/* harmony import */ var _ResourceHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceHandler */ "./src/base/ResourceHandler.js");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent */ "./src/base/BaseComponent.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./src/base/Page.js");




/**
 * Handles the client-side routing for the application by handling
 * the hashchange event and creating new pages based on the current path.
 */
class HashRouter{
    /**
     * @constructor
     */
    constructor(){
        /**
         * A collection of routes for the application, where each key is a path and each value a class representing a new page.
         *
         * @type {Object.<string, function(): Page>}
         */
        this.routes = {};
        
        /**
         * The current path.
         * 
         * @type {string}
         */
        this.currentPath = null;

        /**
         * The current page.
         * 
         * @type {Page}
         */
        this.currentPage = null;
    };

    /**
     * Register a route.
     * 
     * @property {function} registerRoute
     * @param {string} url - The URL of the route. It should start with /
     * @param {class} pageComponent  - A class that extends the {Page} class
     */
    registerRoute(url, pageComponent, pageData){
        this.routes[url] = {
            page: pageComponent,
            data: pageData
        };
    };

    /**
     * Initializes the Router By adding the hashchange event listener
     * and handling the initial route change
     * 
     * @property {function} init
     */
    init(){
        window.addEventListener('hashchange', () => {
            this.#handleRouteChange();
        });

        this.#handleRouteChange();
    };

    /**
     * Handles the route change by extracting the path from the
     * window.location.hash and replacing the current page with the new page.
     * 
     * @property {function} handleRouteChange
     * @private
     */
    #handleRouteChange(){
        // If the has fragment is empty or just "#", default to the home page
        if (window.location.hash === '' || window.location.hash === '#'){
            window.location.hash = '/';
        };

        // Get the current path from the hash fragment
        const path = window.location.hash.slice(1);

        // If the current path is different from the new path
        if (path !== this.currentPath){
            // Store the new path as the current path
            this.currentPath = path;

            // Replace the current page
            this.#replacePage(path);

            // Scroll to the top of the page;
            window.scrollTo(0,0);
        };
    };

    /**
     * Replaces the current page with the new page.
     * 
     * @param {string} path - The path of the new page
     */
    #replacePage(path) {
         // Free all resources of the current page
        if (this.currentPage) {
            this.currentPage.clearResources()
        };

        // Create the new page
        this.currentPage = this.#createNewPage(path);

        // Get the main element child of the body element
        const mainElement = document.querySelector('body > main');

        // Replace the main element with the new page;
        mainElement.replaceWith(this.currentPage.create());
    };

    /**
     * 
     * @param {string} path - The path of the new page
     * @returns {Page} The new page
     */
    #createNewPage(path){
        try {
            return new this.routes[path]['page'](...this.routes[path]['data']); 
        } catch (error) {
            return new this.routes['*']['page'](path);
        }
    };
};



/**
 * Represents a link to an internal site of the application.
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
class HashLink extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * @constructor
     * @param {string} path - The Path of the page. It should begin with /
     * @param {string} text - The text of the Link Element
     * @param {string[] | string} [className] - Optional class name(s)
     * @param {string} [id] - Optional ID
     */
    constructor(path, text, className="", id=""){
        // Call the constructor of the parent
        super('a', className, id);

        // Check if the path is valid
        if (!this.#isValidPath(path)) {
            throw new Error(`Invalid path: ${path}`);
        };

        /**
         * EventHandler to handle event listeners used by the component
         * 
         * @type {EventHandler}
         * See {@link EventHandler}
         */
        this.eventHandler = new _ResourceHandler__WEBPACK_IMPORTED_MODULE_0__.EventHandler();

        /**
         * 
         * @type {string} - The path of the page
         */
        this.path = path;
        
        // Set the text content and href of the anchor element
        this.componentElement.innerHTML = text;
        this.componentElement.href = `#${this.path}`
    };

    /**
     * Adds the link click event handler and returns the component element
     * 
     * @override
     * @property {function} create
     * @returns {HTMLAnchorElement} Anchor Element
     */
    create(){
        this.eventHandler.addEventListener(this.componentElement, 'click', this.#handleClick);
        return this.componentElement;
    };

    /**
     * Clears the resources associated with the component
     * 
     * @property {function} destroy
     */
    freeResources(){
        this.eventHandler.removeAllListeners();
    };


    /**
     * Checks if the path is valid
     * 
     * @param {string} path - The path of the page
     * @returns {Boolean} - True if the path is valid, else false
     */
    #isValidPath(path) {
        return /^\/[a-zA-Z0-9\/-]*$/.test(path);
    }

    /**
     * Click event callback that changes the hash fragment and triggers a route change
     * 
     * @property {function} handleClick
     * @param {Event} event - The click event
     * @private
     */
    #handleClick = (event) => {
        event.preventDefault();
        window.location.hash = this.path;
    };
};

/***/ }),

/***/ "./src/base/Page.js":
/*!**************************!*\
  !*** ./src/base/Page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent */ "./src/base/BaseComponent.js");


/**
 * Base abstract class for a Page
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
class Page extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{ 
    /**
     * @constructor
     * @param {string | string[]} [className] - The class name(s) of the component element
     * @param {string} [id] - The id of the component element
     */
    constructor(className="", id=""){
        // Call the constructor of the parent
        super('main', className, id);

        // Check if the class is being instantiated directly
        if (this.constructor === Page) {
            throw new Error("Can't instantiate abstract class!");
        };
    };

     /**
     * Abstract method to create the Page
     * 
     * @property {function} create
     * @abstract
    */
    create(){
        throw new Error("Abstract method!");
    };

    /**
     * Abstract method to clear resources used by Page
     * 
     * @property {function} clearResources
     * @abstract
    */
    clearResources(){
        throw new Error("Abstract method!");
    };
};

/***/ }),

/***/ "./src/base/ResourceHandler.js":
/*!*************************************!*\
  !*** ./src/base/ResourceHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandler": () => (/* binding */ EventHandler),
/* harmony export */   "IntervalHandler": () => (/* binding */ IntervalHandler),
/* harmony export */   "PromiseHandler": () => (/* binding */ PromiseHandler),
/* harmony export */   "TimeoutHandler": () => (/* binding */ TimeoutHandler)
/* harmony export */ });
/**
 * Class used for managing Event Listeners
 */
class EventHandler {
    /**
     * Initializes an array to keep track of the event listeners.
     * 
     * @constructor
     */
    constructor(){
        /**
         * Array to store event listeners associated with the component
         * Each element in the array is an object with the following properties:
         *  - element: {HTMLElement} - the element that the event listener is attached to
         *  - event: {string} - the type of event
         *  - callback: {function} - the callback function for the event
         * 
         * @type {Array}
         */
        this.eventListeners = [];
    }

    /**
     * Add an event listener to an element
     * 
     * @property {function} addEventListener
     * @param {HTMLElement} element - The element to add the event listener to
     * @param {string} event - The type of event
     * @param {function} callback - The callback function for the event
     */
    addEventListener(element, event, callback){
        element.addEventListener(event, callback);
        this.eventListeners.push({
            element: element,
            event: event,
            callback: callback
        });
    };

    /**
     * Remove an event listener from an element
     * 
     * @property {function} removeEventListener
     * @param {HTMLElement} element - The element to remove the event listener from
     * @param {string} event - The type of event
     * @param {function} callback - The callback function of the event
     */
    removeEventListener(element, event, callback){
        element.removeEventListener(event, callback);
        this.eventListeners = this.eventListeners.filter(
            listener => listener.element !== element && listener.event !== event && listener.callback !== callback
        );
    };

    /**
     * Remove all registerd event listeners
     * 
     * @property {Function} removeAllListeners
     */
    removeAllListeners(){
        // Remove all registerd event listeners
        this.eventListeners.forEach(eventListener => {
            eventListener.element.removeEventListener(eventListener.event, eventListener.callback)
        });
        this.eventListeners = [];
    };

};

/**
 * Class used for managing Timeouts
 */
class TimeoutHandler {
    /**
     * Initializes an array to keep track of timeouts.
     * 
     * @constructor
     */
    constructor(){
            /**
         * Array to store timeouts associated with the component
         * 
         * @type {Array}
         */
        this.timeouts = [];
    };


    /**
     * Set a timeout
     * 
     * @property {function} addTimeout
     * @param {function} callback - The callback function for the timeout
     * @param {number} timeout - The time, in miliseconds, until the callback function should be called
     * @return {number} - The ID of the timeout
     */
    addTimeout(callback, timeout){
        const id = setTimeout(callback, timeout);
        this.timeouts.push(id);
        return id;
    };

    /**
     * Clear a timeout
     * 
     * @property {function} removeTimeout
     * @param {number} timeoutID - The ID of the timeout to clear
     */
    removeTimeout(timeoutID){
        this.clearTimeout(timeoutID);
        this.timeouts = this.timeouts.filter(id => id !== timeoutID);
    };

    /**
     * Remove all registerd timeouts
     * 
     * @property {Function} removeAllTimeouts
     */
    removeAllTimeouts(){
        // Clear all registered timeouts
        this.timeouts.forEach(timeout => {
            clearTimeout(timeout);
        });
        this.timeouts = [];
    };
};

/**
 * Class used for managing Intervals
 */
class IntervalHandler {

    /**
     * Initializes an array to keep track of Intervals.
     * 
     * @constructor
     */
    constructor(){
        /**
         * Array to store intervals associated with the component
         * 
         * @type {Array}
         */
        this.intervals = [];
    };

    /**
     * Set an interval
     * 
     * @property {function} addInterval
     * @param {function} callback - The callback function for the interval
     * @param {number} interval - The time, in milliseconds, between calls to the callback function
     * @return {number} - The ID of the timeout
     */
    addInterval(callback, interval){
        const id = setInterval(callback, interval);
        this.intervals.push(id);
        return id;
    };

    /**
     * Clear an interval
     * 
     * @property {function} removeInterval
     * @param {number} intervalID The ID of the interval to clear
     */
    removeInterval(intervalID){
        clearInterval(intervalID);
        this.intervals = this.intervals.filter(id => id !== intervalID);
    };

    /**
     * Remove all registerd Intervals
     * 
     * @property {Function} removeAllIntervals
     */
    removeAllIntervals(){
        // Clear all registerd intervals
        this.intervals.forEach(interval => {
            clearInterval(interval);
        });

        this.intervals = [];
    };
};  

/**
 * Class used for managing Promises
 */
class PromiseHandler {
    /**
     * Initializes an array to keep track of the Promises.
     * 
     * @constructor
     */
    constructor(){
        /**
         * Array to store promises associated with the component
         * 
         * @type {Array}
         */
        this.promises = [];
    };


    /**
     * Create a promise
     * 
     * @property {function} addPromise
     * @param {function} callback - The function to run in the promise
     * @returns {Promise} - The created promise
     */
    addPromise(callback){
        const promise = new Promise(callback);
        this.promises.push(promise);
        return promise;
    };

    /**
     * Reject a promise
     * 
     * @property {function} removePromise
     * @param {Promise} promise - The promise to reject
     */
    removePromise(promise){
        promise.reject();
        this.promises = this.promises.filter(p => p !== promise);
    };

    /**
     * Remove all registerd promises
     * 
     * @property {Function} removeAllPromises
     */
    removeAllPromises(){
        // Reject all registerd promises
        this.promises.forEach(promise => {
            promise.reject();
        });

        this.promises = [];
    };
};

/***/ }),

/***/ "./src/components/article/Article.js":
/*!*******************************************!*\
  !*** ./src/components/article/Article.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Article)
/* harmony export */ });
/* harmony import */ var _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/BaseComponent */ "./src/base/BaseComponent.js");
/* harmony import */ var _article_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.css */ "./src/components/article/article.css");




/**
 * A component that displays an article.
 * 
 * 
 * @example  
 * // An Example of the Article Data Structure
 * {
 *  title: 'Example Article',
 *  content: [
 *    {
 *      type: 'paragraph',
 *      text: 'This is an example paragraph.'
 *    },
 *    {
 *      type: 'section',
 *      title: 'Example Section',
 *      content: [
 *        {
 *          type: 'paragraph',
 *          text: 'This is another example paragraph within the section.'
 *          "links": [
                {
                    "text": "example",
                    "url": "www.example.com"
                }
 *        },
 *        {
 *          type: 'unordered-list',
 *          items: [
 *            {
 *              "text":'Item 1'
 *            },
 *            {
 *              "text":'Item 1'
 *              "links":[
 *                  "text": "1",
 *                  "url": "www.example.com"
 *              ]
 *            },
 *            {
 *              "text":'Item 1'
 *            },
 *          ]
 *        }
 *      ]
 *    }
 *  ]
 * }
 * 
 * @extends BaseComponent
 */
class Article extends _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{



    /**
     * @constructor
     * @param {Object} articleData - The article's data
     * @param {string} articleData.title - The title of the article
     * @param {Object[]} articleData.content - The article content. Can contain further nested content objects
     */
    constructor(articleData){
        super('article', 'page-article');
        this.articleData = articleData;
    };

    /**
     * Creates the content of the article and returns it.
     * 
     * @property {function} create
     * @returns {HTMLElement} The article element
     */
    create(){
        this.#createArticle();
        return this.componentElement;
    };

    /**
     * Creates the article element and its content.
     * 
     * @property {function} createArticle
     * @private
     * @returns {HTMLElement} The article element
     */
    #createArticle() {
        // A container div
        const container = document.createElement('div');
        container.classList.add('container');

        // Create the content of the article
        this.#createContainerContent(this.articleData, container, 1)
        this.componentElement.appendChild(container);
    };

    /**
     * Creates a section element and its content.
     * 
     * @property {function} createSection
     * @private
     * @param {Object} content - The content of the section
     * @param {string} content.type - The type of the content, should be "section"
     * @param {string} [content.title] - The title of the section
     * @param {Object[]} content.content - The content of the section, can contain further nested content objects
     * @returns {HTMLElement} The section element
     */
    #createSection(content){
        // Create the section element
        const section = document.createElement('section');
        
        // Create the content of the section
        this.#createContainerContent(content, section, 2);

        return section;
    };

    /**
     * Creates the content of a container (article or section).
     * 
     * @param {Object} content - The content of the container
     * @param {string} [content.type] - The type of the content
     * @param {string} [content.title] - The title
     * @param {Object[]} content.content - The content, can contain further nested content objects
     * @param {HTMLElement} parent - The parent element (article or section)
     * @param {Number} containerType - The type of the container (1 for article, 2 for section)
     */
    #createContainerContent(content, parent, containerType){
        // Create the title
        const title = document.createElement(`h${containerType + 1}`);
        title.textContent = content.title;
        parent.appendChild(title);

        // Create the content
        content.content.forEach(item => {
            const contentEl = this.#handleContentType(item);
            parent.appendChild(contentEl);
        });
    };

    /**
     * Creates the HTML Element for the corresponding content type.
     * 
     * @property {function} handleContentType
     * @private
     * @param {Object} content - The content to handle
     * @param {string} content.type - The type of the content, should be 'paragraph', 'section' or 'unordered-list'
     * @returns {HTMLElement} - The HTML Element with its content.
     */
    #handleContentType(content){
        switch(content.type){
            case 'paragraph':
                return this.#createParagraph(content);
            case 'section':
                return this.#createSection(content);
            case 'unordered-list':
                return this.#createUnorderedList(content);
            default:
                throw new Error(`Invalid content type: ${content.type}`);
        };
    };

    /**
     * Creates a paragraph element
     * 
     * @property {function} createParagraph
     * @private
     * @param {Object} content - The content of the paragraph
     * @param {string} content.type - The type of the content, should be "paragraph" 
     * @param {string} content.text - The text of the paragraph
     * @param {Object[]} [content.links] - Object containing possible links in the paragraph
     * @returns {HTMLParagraphElement} The created paragraph element
     */
    #createParagraph(content){
        const paragraph = document.createElement('p');
        paragraph.textContent = content.text;
        if (content.links){
            this.#createAnchorLink(paragraph, content.links);
        };
        return paragraph;
    };

     /**
     * Creates an unordered list element
     * 
     * @property {function} createUnorderedList
     * @private
     * @param {Object} content - The content of the list
     * @param {string} content.type - The type of the content, should be "unordered-list"
     * @param {Object[]} content.items - The items of the list
     * @param {string} content.items.text - The text of a list item
     * @param {Object[]} [content.items.links] - Possible links inside the list item
     * @returns {HTMLUListElement} The created unordered list element
     */
    #createUnorderedList(content){
        const list = document.createElement('ul');
        content.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.text;
            if (item.links){
                this.#createAnchorLink(listItem, item.links);
            };
            list.appendChild(listItem);
        });
        return list;
    };

    /**
     * Creates a link for a text.
     * 
     * @property {function} createAnchorLink
     * @private
     * @param {HTMLElement} parent - The parent element to insert a link to
     * @param {Object} links - The content of the link element
     * @param {string} links.text - The text to add the link
     * @param {string} links.url - The url of the link
     */
    #createAnchorLink(parent, links){
        links.forEach(link => {
            const linkEl = document.createElement('a');
            linkEl.textContent = link.text;
            linkEl.href = link.url;
            linkEl.target = "_blank";
            parent.innerHTML = parent.textContent.replace(link.text, linkEl.outerHTML);
            
        });
    };

};

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/BaseComponent */ "./src/base/BaseComponent.js");
/* harmony import */ var _images_icons_github_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/icons/github-icon.png */ "./src/images/icons/github-icon.png");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");




/**
 * Class that represents the Footer
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
class Footer extends _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * @constructor
     */
    constructor(){
        // Call the constructor of the parent
        super('footer');
    };

    /**
     * Creates the content of the footer element and returns the footer element.
     * 
     * @property {function} create
     * @returns {HTMLElement} - The footer element
     */
    create(){
        // Create the content of the footer
        this.#createFooter();
        
        return this.componentElement;
    }

    /**
     * Creates the content of the footer element
     * 
     * @property {function} createFooter
     * @private
     */
    #createFooter(){
        this.componentElement.innerHTML = `
        <div class="container">
            <small>Copyright &copy; ${new Date().getFullYear()}, Batouchan Omer
                <a href="https://github.com/batoomer" target="_blank">
                    <img class="icon" src="${_images_icons_github_icon_png__WEBPACK_IMPORTED_MODULE_1__}" alt="GitHub Mark" />
                </a>
            </small>
        </div>`;
    };
}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/BaseComponent */ "./src/base/BaseComponent.js");
/* harmony import */ var _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/ResourceHandler */ "./src/base/ResourceHandler.js");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");




/**
 * Class that represents the Header
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
class Header extends _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * @constructor
     */
    constructor(){
        // Call the constructor of the parent
        super('header');

        /**
         * Event Handler to handle event listeners
         * 
         * @type {EventHandler} - see {@link EventHandler}
         */
        this.eventHandler = new _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler();
    };

    /**
     * Creates the content of the header element and returns the header element.
     * 
     * @property {function} create
     * @returns {HTMLElement} - The header element
     */
    create(){
        // Create the content of the header
        const container = document.createElement('div');
        container.classList.add('container', 'header__container');
        
        container.append(
            this.#createBurgerMenu(),
            this.#createHeaderTitle()
        );
        
        this.componentElement.appendChild(container);
        return this.componentElement;
    }

    /**
     * Creates a title for the header
     * 
     * @property {function} createHeaderTitle
     * @private
     */
    #createHeaderTitle(){
       const headerTitle = document.createElement('h2');
       headerTitle.classList.add('header__title');
       headerTitle.textContent = "Search Techniques in AI";

       return headerTitle;
    };

    /**
     * Creates a Burger mmenu to toggle on and off the navigation bar
     * 
     * @property {function} createBurgerMenu
     * @private
     */
    #createBurgerMenu(){
        // Create the menu button
        const burgerBtn = document.createElement('button');
        burgerBtn.classList.add('header__burger-menu');

        // Construct the burger icon
        for (let i=0; i<3; i++){
            const bar = document.createElement('div');
            bar.classList.add('header__burger-bar');
            burgerBtn.appendChild(bar);
        };

        // Add the event listener
        this.eventHandler.addEventListener(burgerBtn, 'click', this.#handleBurgerMenuClick);

        return burgerBtn;
    }

    /**
     * The callback for the click event on the burger menu
     * 
     * @property {function} handleBurgerMenuClick
     * @private
     * @param {Event} e - The click event
     */
    #handleBurgerMenuClick = (e) => {
        document.querySelector('body > nav').classList.add('active');
    };
};

/***/ }),

/***/ "./src/components/navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/BaseComponent */ "./src/base/BaseComponent.js");
/* harmony import */ var _base_HashRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/HashRouter */ "./src/base/HashRouter.js");
/* harmony import */ var _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/ResourceHandler */ "./src/base/ResourceHandler.js");
/* harmony import */ var _configs_nav_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/nav.config */ "./src/configs/nav.config.js");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.css */ "./src/components/navbar/navbar.css");






/**
 * Class that represents the navigation bar
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
class Navbar extends _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * @constructor
     */
    constructor(){
        // Call the constructor of the parent
        super('nav');

        /**
         * Event Handler to handle event listeners
         * 
         * @type {EventHandler} - see {@link EventHandler}
         */
        this.eventHandler = new _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_2__.EventHandler();
    };

    /**
     * Creates the content of the nav element and returns the nav element.
     * 
     * @property {function} create
     * @returns {HTMLElement} - The nav element
     */
    create(){
        // Create the content of the navigation bar
        this.componentElement.append(
            this.#createNavCloseButton(),
            this.#createNavMainList(),
        );
        return this.componentElement;
    };

    /**
     * Creates a button for closing the Navigation Bar
     * 
     * @property {function} createNavCloseButton
     * @private
     * @returns {HTMLButtonElement} Button Element
     */
    #createNavCloseButton(){
        const navCloseBtn = document.createElement('button');
        navCloseBtn.classList.add('navbar__close-btn');

        // Create close btn icon 
        for (let i=0; i<=1; i++){
            const barSpan = document.createElement('span')
            barSpan.classList.add('navbar__close-btn-bar');
            navCloseBtn.appendChild(barSpan);
        };

        // Register and add the click event
        this.eventHandler.addEventListener(navCloseBtn, 'click', this.#handleNavCloseClick)

        return navCloseBtn;
    };

    /**
     * Creates the main list for the navigation links.
     * 
     * @property {function} createNavMainList
     * @private
     * @returns {HTMLUListElement} ul element
     */
    #createNavMainList(){
        const mainNavList = document.createElement('ul');
        mainNavList.classList.add('navbar__main-list');
        mainNavList.append(
            this.#createNavHomeLink(),
            this.#createNavSeparatorItem(),
            this.#createNavSubList('Uninformed Search', _configs_nav_config__WEBPACK_IMPORTED_MODULE_3__.uninformedSearchLinks),
            this.#createNavSeparatorItem(),
            this.#createNavSubList('Informed Search', _configs_nav_config__WEBPACK_IMPORTED_MODULE_3__.informedSearchLinks),
            this.#createNavSeparatorItem(),
        );
        return mainNavList;
    };

    /**
     * Creates the Home link
     * 
     * @property {function} createNavHomeLink
     * @private
     * @returns {HTMLLIElement} li element
     */
    #createNavHomeLink(){
        const listItem = document.createElement('li');
        listItem.classList.add('navbar__item-link');

        //Create the sublist heading
        const homeHeading = document.createElement('h2');
        homeHeading.classList.add('navbar__heading');

        // Create Link
        const hashLink = new _base_HashRouter__WEBPACK_IMPORTED_MODULE_1__.HashLink('/', 'Home', 'navbar__link-home');
        const hashLinkElement = hashLink.create();
        // Remove default event listener
        hashLink.freeResources();
        // Add new event listener
        this.eventHandler.addEventListener(hashLinkElement, 'click', this.#handleNavLinkClick);

        homeHeading.appendChild(hashLinkElement);
        listItem.appendChild(homeHeading);

        return listItem;
    };

    /**
     * Creates a sublist of navigation links
     * 
     * @property {function} createNavSubList
     * @private
     * @param {string} title - The title of the sublist
     * @param {Array} linkData - The navigation links of the sublist
     * @returns {HTMLLIElement} - li element
     */
    #createNavSubList(title, linkData){
        const mainListItem = document.createElement('li');
        mainListItem.classList.add('navbar__item-list');

        //Create the sublist heading
        const subListHeading = document.createElement('h2');
        subListHeading.classList.add('navbar__heading');
        subListHeading.innerHTML = title;


        //Create the sublist
        const subNavList = document.createElement('ul');
        subNavList.classList.add('navbar__sublist')
        linkData.forEach(element => {
            const linkItem = this.#createNavLink(element.path, element.name);
            subNavList.appendChild(linkItem);
        });

        mainListItem.append(subListHeading, subNavList);
        return mainListItem;
    };

    /**
     * Creates a navigation link
     * 
     * @property {function} createNavLink
     * @private
     * @param {string} path - The path of the Link
     * @param {string} name - The name of the Link
     * @returns {HTMLLIElement} - li element
     */
    #createNavLink(path, name){
        const listItem = document.createElement('li');
        listItem.classList.add('navbar__item-link')
        // Create Link
        const hashLink = new _base_HashRouter__WEBPACK_IMPORTED_MODULE_1__.HashLink(path, name, 'navbar__link');
        const hashLinkElement = hashLink.create();
        // Remove default event listener
        hashLink.freeResources();
        // Add new event listener
        this.eventHandler.addEventListener(hashLinkElement, 'click', this.#handleNavLinkClick)
        
        listItem.appendChild(hashLinkElement);
        return listItem;
    };

    /**
     * Creates a list item with a span element to draw vertical separator lines.
     * 
     * @property {function} createNavSeparatorItem
     * @private
     * @returns {HTMLLIElement} - li element
     */
    #createNavSeparatorItem(){
        const listItem = document.createElement('li');
        listItem.classList.add('navbar__item-separator');
         // span element to draw a vertical separator line
        const separator = document.createElement('span'); 
        listItem.appendChild(separator);
        return listItem
    };

    /**
     * Event Handler for the the navigation close button
     * 
     * @property {function} handleNavCloseClick
     * @private
     */
    #handleNavCloseClick = () => {
        // Close the navigation bar
        document.querySelector('body > nav').classList.remove('active');
    }

    /**
     * Event Handler for the the navigation links
     * 
     * @property {function} handleNavLinkClick
     * @private
     * @param {Event} event 
     */
    #handleNavLinkClick = (event) => {
        event.preventDefault();
        // Trigger the router
        window.location.hash = event.target.getAttribute("href");
        // Close the navigation bar
        document.querySelector('body > nav').classList.remove('active');
    };
};

/***/ }),

/***/ "./src/configs/nav.config.js":
/*!***********************************!*\
  !*** ./src/configs/nav.config.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "informedSearchLinks": () => (/* binding */ informedSearchLinks),
/* harmony export */   "uninformedSearchLinks": () => (/* binding */ uninformedSearchLinks)
/* harmony export */ });
/**
 * This file exports arrays of navigation items.
 * Each item in an array represents a navigation item with a name and a path.
 * 
 * @module configs/nav.config
*/

/**
 * @property {Array} uninformedSearchLink - An array of navigation items for uninformed search algorithms
 * @property {string} uninformedSearchLinks[].name - The name of the navigation item
 * @property {string} uninformedSearchLinks[].path - The path of the navigation item
 */
const uninformedSearchLinks = [
    {
        name: 'Breadth-First Search',
        path: '/breadth-first-search'
    },

    {
        name: 'Depth-First Search',
        path: '/depth-first-search'
    },
];


/**
 * @property {Array} informedSearchLinks - An array of navigation items for informed search algorithms 
 * @property {string} informedSearchLinks[].name - The name of the navigation item
 * @property {string} informedSearchLinks[].path - The path of the navigation item
 */
const informedSearchLinks = [
    {
        name: "Dijkstra's Algorithm",
        path: '/dijkstra-algorithm'
    },

    {
        name: `A<sup>*</sup> Search`,
        path: "/a-start-search"
    },
];

/***/ }),

/***/ "./src/configs/route.config.js":
/*!*************************************!*\
  !*** ./src/configs/route.config.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_404page_NotFoundPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/404page/NotFoundPage */ "./src/pages/404page/NotFoundPage.js");
/* harmony import */ var _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home/HomePage */ "./src/pages/home/HomePage.js");
/* harmony import */ var _pages_maze_MazePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/maze/MazePage */ "./src/pages/maze/MazePage.js");
/* harmony import */ var _pages_home_home_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home/home.json */ "./src/pages/home/home.json");
/* harmony import */ var _pages_maze_data_articleBFS_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/maze/data/articleBFS.json */ "./src/pages/maze/data/articleBFS.json");
/* harmony import */ var _pages_maze_data_articleDFS_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/maze/data/articleDFS.json */ "./src/pages/maze/data/articleDFS.json");
/* harmony import */ var _pages_maze_data_articleDijkstra_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/maze/data/articleDijkstra.json */ "./src/pages/maze/data/articleDijkstra.json");
/* harmony import */ var _pages_maze_data_articleAstar_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/maze/data/articleAstar.json */ "./src/pages/maze/data/articleAstar.json");
/**
 * This file exports an array of route configurations.
 * Each route configuration contains the path of the route and the page component associated with that route.
 * 
 * @module configs/route.config
*/












/**
 * @type {Array}
 * @property {Object} path - The path of the route
 * @property {Page} page - The Page associated with the path
 * @property {Object} data: The data associated with the page
 */
const routeConfig = [
    {
        path: '/',
        page: _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"],
        data: [_pages_home_home_json__WEBPACK_IMPORTED_MODULE_3__]
    },

    {
        path: '/breadth-first-search',
        page: _pages_maze_MazePage__WEBPACK_IMPORTED_MODULE_2__["default"],
        data: [_pages_maze_data_articleBFS_json__WEBPACK_IMPORTED_MODULE_4__]
    },

    {
        path: '/depth-first-search',
        page: _pages_maze_MazePage__WEBPACK_IMPORTED_MODULE_2__["default"],
        data: [_pages_maze_data_articleDFS_json__WEBPACK_IMPORTED_MODULE_5__]
    },

    {
        path: '/dijkstra-algorithm',
        page: _pages_maze_MazePage__WEBPACK_IMPORTED_MODULE_2__["default"],
        data: [_pages_maze_data_articleDijkstra_json__WEBPACK_IMPORTED_MODULE_6__]
    },

    {
        path: '/a-start-search',
        page: _pages_maze_MazePage__WEBPACK_IMPORTED_MODULE_2__["default"],
        data: [_pages_maze_data_articleAstar_json__WEBPACK_IMPORTED_MODULE_7__]
    },

    {
        path: '*',
        page: _pages_404page_NotFoundPage__WEBPACK_IMPORTED_MODULE_0__["default"],
        data: []
    }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routeConfig);

/***/ }),

/***/ "./src/pages/404page/NotFoundPage.js":
/*!*******************************************!*\
  !*** ./src/pages/404page/NotFoundPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var _base_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/Page */ "./src/base/Page.js");
/* harmony import */ var _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/ResourceHandler */ "./src/base/ResourceHandler.js");
/* harmony import */ var _notfound_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound.css */ "./src/pages/404page/notfound.css");




/**
 * Class representing the 404 error page
 *
 * @extends Page
 */
class NotFoundPage extends _base_Page__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * Creates an instance of NotFoundPage.
     * 
     * @param {string} error - The url that was tried to access
     * @constructor
     */
    constructor(error){
        super('notfound-page');

        /**
         * @property {string} error - The url that was tried to access
         */
        this.error = error

        /**
         * @property {EventHandler} eventHandler - The event handler
         */
        this.eventHandler = new _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler();
        
        /**
         * @property {IntervalHandler} intervalHandler - The interval handler
         */
        this.intervalHandler = new _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__.IntervalHandler();

        /**
         * @property {number} redirectCountdown - The number of seconds left before redirecting to home page
         */
        this.redirectCountdown = 10;

        /**
         * @property {number} intervalId - The ID of the redirect interval
         */
        this.intervalId = null;
    };

    /**
     * Create the content of the page
     *
     * @property {function} create
     * @returns {HTMLElement} - The created element
     */
    create(){
        this.componentElement.innerHTML = `
        <div class="container">
            <h1>404 - Page Not Found</h1>
            <p>We couldn't find the page you were looking for. It's like the search tree is too complicated for our search algorithms.</p>
            <p> You will be redirect to home page in <span id="redirect-countdown">10</span> seconds.</p>
            <button class="redirect-button btn lg">Return to Home</button>
            <small>The URL you tried to access was: <em>${this.error}</em></small>
        </div>`;

        // Add click event listener to redirect button
        this.eventHandler.addEventListener(
            this.componentElement.querySelector(".redirect-button"),
            "click",
            this.#handleRedirectClick
        );
        
        // Add interval to handle redirect countdown
        this.intervalId = this.intervalHandler.addInterval(this.#handleRedirectInterval, 1000);

        return this.componentElement;
    }

    /**
     * Remove all resources
     *
     * @property {function} clearResources
     */
    clearResources(){
        this.eventHandler.removeAllListeners();
        this.intervalHandler.removeAllIntervals();
    };

    /**
     * Handles redirect button click event
     *
     * @property {function} handleRedirectClick
     * @private
     */
    #handleRedirectClick = () => {
        // Redirect to home page
        window.location.href = "#/";
    };

    /**
     * Handles redirect interval
     *
     * @property {function} handleRedirectInterval
     * @private
     */
    #handleRedirectInterval = () => {
        this.redirectCountdown--;
        this.componentElement.querySelector("#redirect-countdown").innerHTML = this.redirectCountdown;
        if (this.redirectCountdown === 0) {
            this.intervalHandler.removeInterval(this.intervalId);
            window.location.href = "#/";
        };
    };
}

/***/ }),

/***/ "./src/pages/home/HomePage.js":
/*!************************************!*\
  !*** ./src/pages/home/HomePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _base_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/Page */ "./src/base/Page.js");
/* harmony import */ var _components_article_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/article/Article */ "./src/components/article/Article.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ "./src/pages/home/home.css");




class HomePage extends _base_Page__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * @constructor
     */
    constructor(articleData){
        super('homepage');
        this.articleData = articleData;
    };

    /**
     * Creates the content of the home page.
     *
     * @property {function} create
     * @returns {HTMLElement} - The component element
     */
    create(){
        this.componentElement.append(
            this.#createHeroSection(),
            new _components_article_Article__WEBPACK_IMPORTED_MODULE_1__["default"](this.articleData).create(),
        );
        return this.componentElement;
    };

    /**
     * Clears any resources used by the home page
     *
     * @property {function} clearResources
     */
    clearResources(){
    };

    /**
     * Creates the hero section for the Home Page
     *
     * @property {function} createHeroSection
     * @private
     * @returns {HTMLElement} - The hero section element
     */
    #createHeroSection(){
        const container = document.createElement('div');
        container.classList.add('container');

        const heroSection = document.createElement('section');
        heroSection.classList.add('home__hero-section');
        heroSection.innerHTML = `
            <h1>Search Techniques In Artificial Intelligence</h1>
        `;

        container.appendChild(heroSection);
        return container;
    };
}



/***/ }),

/***/ "./src/pages/maze/MazePage.js":
/*!************************************!*\
  !*** ./src/pages/maze/MazePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MazeVisualizerPage)
/* harmony export */ });
/* harmony import */ var _base_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/Page */ "./src/base/Page.js");
/* harmony import */ var _components_article_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/article/Article */ "./src/components/article/Article.js");
/* harmony import */ var _maze_visualizer_MazeVisualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze-visualizer/MazeVisualizer */ "./src/pages/maze/maze-visualizer/MazeVisualizer.js");
/* harmony import */ var _maze_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maze-page.css */ "./src/pages/maze/maze-page.css");





/**
 * Page that consits of a maze visualizer and an article about the search algorithm
 */
class MazeVisualizerPage extends _base_Page__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * 
     * @param {Object} articleData - The data associated with the page
     */
    constructor(articleData){
        super('maze-page');
        this.articleData = articleData;
        this.visualizer = new _maze_visualizer_MazeVisualizer__WEBPACK_IMPORTED_MODULE_2__["default"](this.articleData.title);
    }

    /**
     * Creates the inner HTML of the component
     * 
     * @returns {HTMLElement}
     */
    create(){
        this.componentElement.append(
            this.#createVisualizerSection(),
            this.#createAlgorithmArticleSection(),
        );
        return this.componentElement;
    }

    /**
     * Clears all resources used by the page
     */
    clearResources(){
        this.visualizer.clearResources();
    }

    /**
     * Creates the visualizer section
     * 
     * @returns {HTMLElement} The visualizer element
     */
    #createVisualizerSection() {
        const visualizerSection = document.createElement('section');
        visualizerSection.classList.add('maze-page__visualizer-section');
        const container = document.createElement('div');
        container.classList.add('container');
        const visualizer = this.visualizer.create();
        container.appendChild(visualizer);
        visualizerSection.appendChild(container);
        return visualizerSection;
    };

    /**
     * Creates the algorithm article.
     * 
     * @returns {HTMLElement}
     */
    #createAlgorithmArticleSection() {
        // Create and return the algorithm article section
       return  new _components_article_Article__WEBPACK_IMPORTED_MODULE_1__["default"](this.articleData).create();
    };
}

/***/ }),

/***/ "./src/pages/maze/maze-visualizer/MazeVisualizer.js":
/*!**********************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/MazeVisualizer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MazeVisualizer)
/* harmony export */ });
/* harmony import */ var _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/BaseComponent */ "./src/base/BaseComponent.js");
/* harmony import */ var _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/ResourceHandler */ "./src/base/ResourceHandler.js");
/* harmony import */ var _model_MazeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/MazeModel */ "./src/pages/maze/maze-visualizer/model/MazeModel.js");
/* harmony import */ var _images_icons_robot_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/icons/robot-icon.png */ "./src/images/icons/robot-icon.png");
/* harmony import */ var _images_icons_target_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/icons/target-icon.png */ "./src/images/icons/target-icon.png");
/* harmony import */ var _images_icons_reset_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/icons/reset-icon.png */ "./src/images/icons/reset-icon.png");
/* harmony import */ var _images_icons_play_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/icons/play-icon.png */ "./src/images/icons/play-icon.png");
/* harmony import */ var _images_icons_pause_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/icons/pause-icon.png */ "./src/images/icons/pause-icon.png");
/* harmony import */ var _images_icons_bug_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/icons/bug-icon.png */ "./src/images/icons/bug-icon.png");
/* harmony import */ var _maze_visualizer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maze-visualizer.css */ "./src/pages/maze/maze-visualizer/maze-visualizer.css");












/**
 * Class representing the maze visualizer
 */
class MazeVisualizer extends _base_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**
     * @constructor
     * @param {string} algorithmName - The name of the search algorithm
     */
    constructor(algorithmName){
        super('section', 'maze-visualizer');
        /**
         * The name of the search algorithm
         * 
         * @property {string} algorithmName
         */
        this.algorithmName = algorithmName;

        /**
         * The maze model that handels the underlying grid
         * 
         * @property {MazeModel} mazeModel
         */
        this.mazeModel = new _model_MazeModel__WEBPACK_IMPORTED_MODULE_2__["default"]();

        /**
         * Handler for event listeners
         * 
         * @property {EventHandler} eventHandler
         */
        this.eventHandler = new _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__.EventHandler();

        /**
         * Handler for timeouts
         * 
         * @property {EventHandler} eventHandler
         */
        this.timeoutHandler = new _base_ResourceHandler__WEBPACK_IMPORTED_MODULE_1__.TimeoutHandler();

        /**
         * Flag to keep track whether the animation is running
         * 
         * @property {boolean} running
         */
        this.running = false;

        /**
         * The speed of the animation. It increases/decreases exponentially.
         * 
         * @property {number} animationSpeed
         */
        this.animationSpeed = 2**5;
    };

    /**
     * Creates the inner HTML of the component element.
     * 
     * @returns {HTMLElement} The component elemenet
     */
    create() {
        this.componentElement.append(
            this.#createHeading(),
            this.#createSettingsContainer(),
            this.#createMazeGrid()     
        )
        return this.componentElement;
    };

    /**
     * Clears all resources used by the component
     * 
     * @property {function} clearResources
     */
    clearResources() {
        this.eventHandler.removeAllListeners();
        this.timeoutHandler.removeAllTimeouts();
    };

    /**
     * Creates a heading with the name of the search algorithm
     * 
     * @returns {HTMLHeadingElement} h2 heading element
     */
    #createHeading(){
        const heading = document.createElement('h2');
        heading.classList.add('maze-visualizer__heading');
        heading.textContent = this.algorithmName;
        return heading;
    }

    /**
     * Creates the settings container.
     * 
     * @property {function} createSettingsContainer
     * @private
     * @returns {HTMLElement} The settings container HTML element.
     */
    #createSettingsContainer() {
        const containerEl = document.createElement("div");
        containerEl.classList.add("maze-visualizer__settings-container");
        containerEl.append(
            this.#createResetBtn(),
            this.#createStartStopBtn(), 
            this.#createAlgorithmSelect(),
            this.#createAnimationSpeedRange(),
            this.#createWeightsCheckbox()
        );
        return containerEl;
    };

    /**
     * Creates the Start/Stop Button
     * 
     * @property {function} createStartStopBtn
     * @private
     * @returns {HTMLButtonElement} Start/Stop button
     */
    #createStartStopBtn() {
        const toggleBtnEl = document.createElement("button");
        toggleBtnEl.classList.add("maze-visualizer__toggle-btn", 'btn');
        toggleBtnEl.disabled = true;
        toggleBtnEl.innerHTML = `<span>Start</span><img src="${_images_icons_play_icon_png__WEBPACK_IMPORTED_MODULE_6__}" alt="Start">`;
        this.eventHandler.addEventListener(toggleBtnEl, "click", async (e)=>{
            const btn = e.currentTarget;
            if(!this.running){
                // Set running to true and handle settings availability
                this.running = true;
                this.#handleSettingsAvailability();
                
                // Replace the button inner html
                btn.innerHTML = `<span>Pause</span><img src="${_images_icons_pause_icon_png__WEBPACK_IMPORTED_MODULE_7__}" alt="Start">`;
                
                // Get the Serach Animation and the path
                this.mazeModel.solveMaze(this.algorithmName);
                const animations = this.mazeModel.getAnimations();
                
                // Animate the search
                await this.#handleMazeSearchAnimation(animations.searchAnimation, '--color-on-surface-primary', '--color-primary');
                await this.#sleep(this.animationSpeed);
                
                // Animate the path
                await this.#handleMazeSearchAnimation(animations.pathAnimation, '--color-on-surface-error');
                this.running = false;
                this.#handleSettingsAvailability();
            };
            
            // Set running to false and handle settings availability
            this.running = false;
            this.#handleSettingsAvailability();
             // Replace the button inner html
            btn.innerHTML = `<span>Start</span><img src="${_images_icons_play_icon_png__WEBPACK_IMPORTED_MODULE_6__}" alt="Start">`;
            // If the animation has finished disable the button
            const animations = this.mazeModel.getAnimations();
            if (!animations.searchAnimation.length && !animations.pathAnimation.length){
                btn.disabled = true;
            };
            
        });
        return toggleBtnEl
    };

    /**
     * Creates the Reset Button
     * 
     * @property {function} createResetBtn
     * @private
     * @returns {HTMLButtonElement} Reset button
     */
    #createResetBtn() {
        const resetBtnEl = document.createElement("button");
        resetBtnEl.classList.add("maze-visualizer__reset-btn", 'btn');
        resetBtnEl.innerHTML = `<span>Reset</span><img src="${_images_icons_reset_icon_png__WEBPACK_IMPORTED_MODULE_5__}" alt="Reset">`;
        // Click Event Listener
        this.eventHandler.addEventListener(resetBtnEl, "click", () => {
            this.running = false;
            this.timeoutHandler.removeAllTimeouts();
            this.mazeModel.resetMaze();
            this.componentElement.querySelector('#maze-visualizer__maze-weights').checked = false;
            this.componentElement.querySelector('.maze-visualizer__select-algorithm').value = "";
            this.#handleSettingsAvailability();
            this.componentElement.querySelector('.maze-grid').replaceWith(this.#createMazeGrid());
        });
        return resetBtnEl
    };

    /**
     * Creates the Animation Speed Range
     * 
     * @property {function} createAnimationSpeedRange
     * @private
     * @returns {HTMLElement} Animation Speed Range
     */
    #createAnimationSpeedRange(){
        const settingWrapper = document.createElement('div');
        settingWrapper.classList.add('maze-visualizer__setting-wrapper');
        const sliderLabel = document.createElement('label');
        sliderLabel.htmlFor = 'maze-visualizer__animation-speed';
        sliderLabel.innerHTML = `Animation Speed: ${6}`;
        const sliderEl = document.createElement("input");
        sliderEl.type = "range";
        sliderEl.min = 1;
        sliderEl.max = 10;
        sliderEl.value = 6;
        sliderEl.id = 'maze-visualizer__animation-speed';
        sliderEl.classList.add("animation-speed-slider");

       // Event listener to update the animation speed
        this.eventHandler.addEventListener(sliderEl, "input", (event) => {
            this.animationSpeed = 2 ** 11 / 2 ** (event.target.value);
            sliderLabel.innerHTML = `Animation Speed: ${event.target.value}`;
        });
        
        settingWrapper.append(sliderLabel, sliderEl);
        return settingWrapper;
    };

    /**
     * Creates the Maze generator algorithm select
     * 
     * @property {function} createAlgorithmSelect
     * @private
     * @returns {HTMLElement} Maze Generator Algorithm Select
     */
    #createAlgorithmSelect() {
        const settingWrapper = document.createElement('div');
        settingWrapper.classList.add('maze-visualizer__setting-wrapper');
        
        const selectLabel = document.createElement('label');
        selectLabel.htmlFor = 'maze-visualizer__maze-algorithm';
        selectLabel.innerHTML = `Generate Maze`;

        const selectEl = document.createElement("select");
        selectEl.classList.add("maze-visualizer__select-algorithm");
        selectEl.id ='maze-visualizer__maze-algorithm';
        
        // Default Option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select algorithm";
        selectEl.appendChild(defaultOption);
        // Algorithm Options
        this.mazeModel.generatorAlgorithms.forEach(({ value, text }) => {
            const optionEl = document.createElement("option");
            optionEl.value = value;
            optionEl.textContent = text;
            selectEl.appendChild(optionEl);
        });
        // Change Event
        this.eventHandler.addEventListener(selectEl, "change", async (event)=> {
            const selectedOption = event.target.value;
            this.#handleSettingsAvailability();
            if (selectedOption !== ""){
                this.timeoutHandler.removeAllTimeouts();
                // Reset maze
                this.mazeModel.resetGrid();
                this.componentElement.querySelector('.maze-grid').replaceWith(this.#createMazeGrid());
                // If an algorithm has been selected get the animation for generating the maze
                const animation = this.mazeModel.generateMaze(selectedOption);
                // Animate the maze generation
                await this.#animateMazeGeneration(animation);
                if (this.componentElement.querySelector('#maze-visualizer__maze-weights').checked){
                    this.mazeModel.addRandomWeights();
                    this.#handleMazeWeights();
                };
            };
        });
        
        settingWrapper.append(selectLabel, selectEl);
        return settingWrapper
    };

    /**
     * Creates a checkbox to toggle weights
     * 
     * @returns {HTMLInputElement}
     */
    #createWeightsCheckbox(){
        const settingWrapper = document.createElement('div');
        settingWrapper.classList.add('maze-visualizer__setting-wrapper');

        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = 'maze-visualizer__maze-weights';
        checkboxLabel.innerHTML = `Weights`;
        
        const weightCheckbox = document.createElement('input');
        //weightCheckbox.disabled = true;
        weightCheckbox.id = 'maze-visualizer__maze-weights';
        weightCheckbox.type = 'checkbox';

        // Event Listener for the checkbox
        this.eventHandler.addEventListener(weightCheckbox, 'click', () => {
            if (weightCheckbox.checked){
                    this.mazeModel.addRandomWeights();
                    this.#handleMazeWeights();      
                }else {
                    this.mazeModel.removeWeights();
                    this.#handleMazeWeights();      
                }
            });

        settingWrapper.append(checkboxLabel, weightCheckbox);

        return settingWrapper;
    }

    /**
     * Adds or removes cell weights
     * 
     * @property {function} handleMazeWeights
     * @private
     */
    #handleMazeWeights() {
        // Get the number of rows and columns
        const rowSize = this.mazeModel.grid.length;
        const colSize = this.mazeModel.grid[0].length;
        // Iterate over the rows and columns 
        for (let i = 0; i < rowSize; i++) {
            for (let j = 0; j < colSize; j++) {
                
                // if the cell is the start cell or end cell skip the iteration
                if ((this.mazeModel.startCell.row === i) && (this.mazeModel.startCell.col === j)) continue;
                if ((this.mazeModel.endCell.row === i) && (this.mazeModel.endCell.col === j)) continue;
                
                // Get the cell data and the cell element
                const cellData = this.mazeModel.grid[i][j];
                let cellEl = this.componentElement.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                
                // handle the weight display
                cellEl.innerHTML = (cellData.weight !== 1) ? `<div class="maze-weight-${cellData.weight}"><img src="${_images_icons_bug_icon_png__WEBPACK_IMPORTED_MODULE_8__}" alt="start"/></div>` : cellEl.innerHTML= '';
                
            };
        };
    }

    /**
     * Handles the Settings Availability. Enables or Disables them.
     * 
     * @property {function} handleSettingsAvailability
     * @private
     */
    #handleSettingsAvailability(){
        const selectAlgorithm = this.componentElement.querySelector('.maze-visualizer__select-algorithm')
        if(this.running){
            // Disable settings if animation is running
            this.componentElement.querySelector('.maze-visualizer__reset-btn').disabled = true;
            selectAlgorithm.disabled = true;
            this.componentElement.querySelector('#maze-visualizer__maze-weights').disabled = true;
        }else{
            // Enable settings if animation is running
            this.componentElement.querySelector('.maze-visualizer__reset-btn').disabled = false;
            selectAlgorithm.disabled = false;
            this.componentElement.querySelector('#maze-visualizer__maze-weights').disabled = false; 
        };

        if (selectAlgorithm.value === ""){
            this.componentElement.querySelector('.maze-visualizer__toggle-btn').disabled = true;
        }else{
            this.componentElement.querySelector('.maze-visualizer__toggle-btn').disabled = false;
        }
    };


    /**
     * Animates the generation of the maze
     * 
     * @property {function} animateMazeGeneration
     * @private
     * @param {Array} animation - Array containing the animation sequence
     */
    async #animateMazeGeneration(animation){
        // Iterate through the animation sequence
        while (animation.length){
            // Get a cell
            const {row, col} = animation.pop();
            const cellEl = this.componentElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            this.#handleMazeCellBorders(row, col, cellEl);
        };
    };

    /**
     * Handels the animation of search algorithms
     * 
     * @param {Array} animation - Array containing the animation sequence
     * @param {string} highlightColor - Color to highlight the animated cell. Should be css variable name
     * @param {string} [unHighlightColor] - Color to unhighlight the cell. Should be css variable name
     */
    async #handleMazeSearchAnimation(animation, highlightColor, unHighlightColor=""){
        while(animation.length && this.running){
            const {row, col} = animation.pop();
            const cellEl = this.componentElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            // Highlight the cell and handle its borders
            cellEl.style.background = `radial-gradient(var(${highlightColor}), transparent, transparent)`;
            await this.#sleep(this.animationSpeed)
            if (unHighlightColor){
                cellEl.style.background = `radial-gradient(var(${unHighlightColor}), transparent, transparent)`;
            };
        };
    };

    /**
     * Pauses the execution for the given time in ms.
     * 
     * @property {function} sleep
     * @async
     * @private
     * @param {number} ms - Time to sleep 
     * @returns {Promise}
     */
    async #sleep(ms){
        return new Promise((resolve) => {
            this.timeoutHandler.addTimeout(resolve, ms);
        })
    }


    /**
     * Creates the maze grid.
     * 
     * @property {function} createMazeGrid
     * @private
     * @returns {HTMLElement} The maze grid HTML element.
     */
    #createMazeGrid(){
        // Get the number of rows and columns
        const rowSize = this.mazeModel.grid.length;
        const colSize = this.mazeModel.grid[0].length;
        const startCell = this.mazeModel.startCell;
        const endCell = this.mazeModel.endCell;

        // Create a table for the maze grid
        const mazeEl = document.createElement('table');
        mazeEl.classList.add('maze-grid');

        // Iterate over the rows and columns to create the grid cells
        for (let i=0; i<rowSize; i++){
            // Create a table row element
            const rowEl = document.createElement("tr");

            // Iterate over the columns to create the grid cells
            for (let j=0; j<colSize; j++){

                 // Create a table cell element
                const cellEl = document.createElement("td");
                cellEl.classList.add('maze-cell');

                // Add data attributes to keep track of each cell element
                cellEl.setAttribute('data-row', i);
                cellEl.setAttribute('data-col', j);
                
                // Get the current cell data from the maze model
                this.#handleMazeCellBorders(i, j, cellEl);

                // Handle the start and end cells
                cellEl.innerHTML = (i===startCell.row && j===startCell.col) ? `<div><img src="${_images_icons_robot_icon_png__WEBPACK_IMPORTED_MODULE_3__}" alt="start"/></div>` : cellEl.innerHTML;
                cellEl.innerHTML = (i===endCell.row && j===endCell.col) ? `<div><img src="${_images_icons_target_icon_png__WEBPACK_IMPORTED_MODULE_4__}" alt="end"/></div>` : cellEl.innerHTML;


                 // Append the cell element to the row element
                rowEl.appendChild(cellEl);
            }

             // Append the row element to the maze table element
            mazeEl.appendChild(rowEl);
        };


        return mazeEl;
    };

    /**
     * Handles the borders of the cell element
     * 
     * @param {number} row - The row number of the cell
     * @param {number} col - The col number of the cell
     * @param {HTMLTableCellElement} cellEl - The cell element
     */
    #handleMazeCellBorders(row, col, cellEl) {
        const cellData = this.mazeModel.grid[row][col];
        // Set the border width for each side of the cell based on its wall data
        cellData.top ? cellEl.classList.add('border-top') : cellEl.classList.remove('border-top');
        cellData.bottom ? cellEl.classList.add('border-bottom') : cellEl.classList.remove('border-bottom');
        cellData.left ? cellEl.classList.add('border-left') : cellEl.classList.remove('border-left');
        cellData.right ? cellEl.classList.add('border-right') : cellEl.classList.remove('border-right');
    };





}

/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/MazeModel.js":
/*!***********************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/MazeModel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MazeModel)
/* harmony export */ });
/* harmony import */ var _maze_generators_randomizedDFS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze_generators/randomizedDFS */ "./src/pages/maze/maze-visualizer/model/maze_generators/randomizedDFS.js");
/* harmony import */ var _maze_generators_emptyMaze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maze_generators/emptyMaze */ "./src/pages/maze/maze-visualizer/model/maze_generators/emptyMaze.js");
/* harmony import */ var _maze_generators_randomMaze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze_generators/randomMaze */ "./src/pages/maze/maze-visualizer/model/maze_generators/randomMaze.js");
/* harmony import */ var _maze_generators_recurisveDivision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maze_generators/recurisveDivision */ "./src/pages/maze/maze-visualizer/model/maze_generators/recurisveDivision.js");
/* harmony import */ var _maze_path_finders_searchBFS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maze_path_finders/searchBFS */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchBFS.js");
/* harmony import */ var _maze_path_finders_searchDFS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maze_path_finders/searchDFS */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchDFS.js");
/* harmony import */ var _maze_path_finders_searchDijkstra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maze_path_finders/searchDijkstra */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchDijkstra.js");
/* harmony import */ var _maze_path_finders_searchAStar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maze_path_finders/searchAStar */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchAStar.js");











/**
 * A representation of a maze grid
 */
class MazeModel {

    /**
     * The available maze generating algorithms.
     * 
     * @property {Array<{value: string, text: string, callback: function}>} generatorAlgorithms
     * @private
     */
    #generatorAlgorithms = [
        { value: 'empty', text: 'Empty Maze', callback: _maze_generators_emptyMaze__WEBPACK_IMPORTED_MODULE_1__["default"]},
        { value: 'random', text: 'Random Maze', callback: _maze_generators_randomMaze__WEBPACK_IMPORTED_MODULE_2__["default"]},
        { value: 'rdfs', text: 'Randomized DFS', callback: _maze_generators_randomizedDFS__WEBPACK_IMPORTED_MODULE_0__["default"] },
        { value: 'division', text: 'Recursive division', callback: _maze_generators_recurisveDivision__WEBPACK_IMPORTED_MODULE_3__["default"]},
    ];


    /**
     * The available search algorithms.
     * 
     * @property {Object} searchAlgorithms
     * @private
     */
    #searchAlgorithms = {
        'Breadth-First Search': _maze_path_finders_searchBFS__WEBPACK_IMPORTED_MODULE_4__["default"],
        'Depth-First Search': _maze_path_finders_searchDFS__WEBPACK_IMPORTED_MODULE_5__["default"],
        "Dijkstra's Algorithm": _maze_path_finders_searchDijkstra__WEBPACK_IMPORTED_MODULE_6__["default"],
        "A* Search": _maze_path_finders_searchAStar__WEBPACK_IMPORTED_MODULE_7__["default"]
    };


    
    /**
     * @property {getter} generatorAlgorithms
     * @returns {Array<{value: string, text: string}} The available maze generating algorithms
     */
    get generatorAlgorithms(){
        return this.#generatorAlgorithms
    };

    /**
     * @property {number} height - The height of the grid
     * @private
     */
    #height = 25;

    /**
     * @property {number} width - The width of the grid
     * @private
     */
    #width = 45;

    /**
     * @constructor
    */
    constructor(){
        this.startCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        this.endCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        /**
         * The 2D grid representing the maze
         * 
         * @property {Array}
         */
        this.grid = this.#createInitialGrid(this.#height, this.#width);

        this.searchAnimation = [];
        this.pathAnimation = [];

        
    };

    /**
     * Resets the maze:
     *  - Grid
     *  - Starting and Ending cell
     * 
     * @property {function} resetMaze
     */
    resetMaze() {
        this.startCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        this.endCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        this.grid = this.#createInitialGrid(this.#height, this.#width);
        this.searchAnimation = [];
        this.pathAnimation = [];
    };

    /**
     * Resets the grid:
     * 
     * @property {function} resetGrid
     */
    resetGrid() {
        this.grid = this.#createInitialGrid(this.#height, this.#width);
        this.searchAnimation = [];
        this.pathAnimation = [];
    }

    /**
     * Creates the initial grid for the maze.
     * Initializes the grid as an array of arrays, with each inner array representing a row in the grid.
     * Each element in the inner arrays is an object representing a cell in the maze.
     * Each cell object contains information about its borders (top, right, bottom, left) and its visit status (visited).
     * 
     * @property {function} createInitialGrid
     * @private
     * @param {number} height - The height of the grid
     * @param {number} width - The width of the grid
     * @returns {Array} The 2D grid representing the maze
     */
    #createInitialGrid(height, width){
        let grid = [];
        for (let i=0; i<height; i++){
            grid[i] = [];
            for (let j=0; j<width; j++){
                grid[i][j]={
                    top: true,
                    right: true,
                    bottom: true,
                    left: true,
                    visited: false,
                    weight: 1
                };
            };
        };
        return grid;
    };

    addRandomWeights(){
        for (let i =0; i<this.#height; i++){
            for (let j=0; j<this.#width; j++){
                // if the cell is the start cell or end cell skip the iteration
                if ((this.startCell.row === i) && (this.startCell.col === j)) continue;
                if ((this.endCell.row === i) && (this.endCell.col === j)) continue;
                
                // Probability to add a weight to the cell
                let proba = Math.random() < 0.05;
                if (!proba) continue;
                
                // Add random weight in the range [2,5]
                this.grid[i][j].weight = Math.round(3*Math.random() + 2);
            };
        };
    };

   removeWeights(){
        for (let i =0; i<this.#height; i++){
            for (let j=0; j<this.#width; j++){
                this.grid[i][j].weight = 1;
            };
        };
    };


    /**
    * Generates a maze using the given algorithm
    * 
    * @property {function} generateMaze
    * @param {string} algorithm - The value of the selected algorithm
    * @returns {undefined}
    */
    generateMaze(algorithm) {
        const selectedAlgorithm = this.#generatorAlgorithms.find(a => a.value === algorithm);

        if (!selectedAlgorithm) {
            throw new Error(`Unknown algorithm: ${algorithm}`);
        };

        return selectedAlgorithm.callback(this.grid, this.startCell);
    };

    /**
     * Executes the specified search algorithm and sets the animation arrays.
     * 
     * @param {string} algorithmName - The name of the search algorithm
     */
    solveMaze(algorithmName){
        // If the animations array are not empty return
        if (this.searchAnimation.length || this.pathAnimation.length) return;
        
        const animations = this.#searchAlgorithms[algorithmName](this.grid, this.startCell, this.endCell);

        this.searchAnimation = animations.animation;
        this.pathAnimation = animations.path;
    
    };

    /**
     * Returns the path and search animations.
     * 
     * @returns {{searchAnimation: Array, pathAnimation: Array}} The search and path animations.
     */
    getAnimations(){
        return {searchAnimation: this.searchAnimation, pathAnimation: this.pathAnimation};
    };

    
};

/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze-utils.js":
/*!************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addWall": () => (/* binding */ addWall),
/* harmony export */   "getRandomNeighbor": () => (/* binding */ getRandomNeighbor),
/* harmony export */   "getUnvisitedNeighbors": () => (/* binding */ getUnvisitedNeighbors),
/* harmony export */   "getValidNeighbors": () => (/* binding */ getValidNeighbors),
/* harmony export */   "removeWall": () => (/* binding */ removeWall)
/* harmony export */ });
/**
 * Returns an array of unvisited neighbors of a cell
 * 
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {number} row - The row index of the current cell.
 * @param {number} col - The column index of the current cell.
 * 
 * @returns {Array} An array of unvisited neighbors, where each neighbor is represented by an object with `row` and `col` properties.
 */
function getUnvisitedNeighbors(grid, row, col) {
    const neighbors = [];
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Check North
    if (row > 0 && !grid[row - 1][col].visited ) {
      neighbors.push({ row: row - 1, col: col });
    }
    
    // Check East
    if (col < cols - 1 && !grid[row][col + 1].visited) {
      neighbors.push({ row: row, col: col + 1 });
    }
    
    // Check South
    if (row < rows - 1 && !grid[row + 1][col].visited ) {
      neighbors.push({ row: row + 1, col: col });
    }
    
    // Check West
    if (col > 0 && !grid[row][col - 1].visited) {
      neighbors.push({ row: row, col: col - 1 });
    }
    
    return neighbors;
  };


/**
 * Returns a random unvisited neighbor of a cell.
 * 
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {number} row - The row index of the current cell.
 * @param {number} col - The column index of the current cell.
 * 
 * @returns {{row: number, col: number}|undefined} A random unvisited neighbor
 */
function getRandomNeighbor(grid, row, col) {
    const unvisitedNeighbors = getUnvisitedNeighbors(grid, row, col);
    if (unvisitedNeighbors.length === 0) {
      return undefined;
    }
    
    // Get a random index in the range [0, unvisitedNeighbors.length)
    const randomIndex = Math.floor(Math.random() * unvisitedNeighbors.length);
    
    return unvisitedNeighbors[randomIndex];
};


/**
 * Removes the wall between two cells
 * 
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {number} row1 - The row index of the first cell.
 * @param {number} col1 - The column index of the first cell.
 * @param {number} row2 - The row index of the second cell.
 * @param {number} col2 - The column index of the second cell.
 */
function removeWall(grid, row1, col1, row2, col2) {
  const cols = grid[0].length;
  const rows = grid.length
  if (row1 < 0 || row2 < 0 || col1 < 0 || col2 < 0 || row1 >= rows || row2 >= rows|| col1 >= cols  || col2 >= cols) return
    if (row1 < row2) {
      // The second cell is below the first cell, so remove the bottom wall of the first cell and the top wall of the second cell
      grid[row1][col1].bottom = false;
      grid[row2][col2].top = false;
    } else if (row1 > row2) {
      // The second cell is above the first cell, so remove the top wall of the first cell and the bottom wall of the second cell
      grid[row1][col1].top = false;
      grid[row2][col2].bottom = false;
    } else if (col1 < col2) {
      // The second cell is to the right of the first cell, so remove the right wall of the first cell and the left wall of the second cell
      grid[row1][col1].right = false;
      grid[row2][col2].left = false;
    } else if (col1 > col2) {
      // The second cell is to the left of the first cell, so remove the left wall of the first cell and the right wall of the second cell
      grid[row1][col1].left = false;
      grid[row2][col2].right = false;
    }
  };


  /**
  * Adds a wall between two cells
  * 
  * @param {Array} grid - The 2D grid representing the maze.
  * @param {number} row1 - The row index of the first cell.
  * @param {number} col1 - The column index of the first cell.
  * @param {number} row2 - The row index of the second cell.
  * @param {number} col2 - The column index of the second cell.
  */
 function addWall(grid, row1, col1, row2, col2) {
   const cols = grid[0].length;
   const rows = grid.length
   if (row1 < 0 || row2 < 0 || col1 < 0 || col2 < 0 || row1 >= rows || row2 >= rows|| col1 >= cols  || col2 >= cols) return
     if (row1 < row2) {
       // The second cell is below the first cell, so add the bottom wall of the first cell and the top wall of the second cell
       grid[row1][col1].bottom = true;
       grid[row2][col2].top = true;
     } else if (row1 > row2) {
       // The second cell is above the first cell, so add the top wall of the first cell and the bottom wall of the second cell
       grid[row1][col1].top = true;
       grid[row2][col2].bottom = true;
     } else if (col1 < col2) {
       // The second cell is to the right of the first cell, so add the right wall of the first cell and the left wall of the second cell
       grid[row1][col1].right = true;
       grid[row2][col2].left = true;
     } else if (col1 > col2) {
       // The second cell is to the left of the first cell, so add the left wall of the first cell and the right wall of the second cell
       grid[row1][col1].left = true;
       grid[row2][col2].right = true;
     }
   };


/**
 * Get the valid (unblocked) neighbors of a given cell
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} cell - The current cell
 * @returns {Array} The valid (unblocked) neighbors of the current cell
 */
function getValidNeighbors(grid, cell){
  let neighbors = [];
  let row = cell.row;
  let col = cell.col;
  if (row > 0 && !grid[row][col].top) {
      neighbors.push({ row: row - 1, col: col });
  }
  if (col < grid[0].length - 1 && !grid[row][col + 1].left) {
      neighbors.push({ row: row, col: col + 1 });
  }
  if (row < grid.length - 1 && !grid[row + 1][col].top) {
      neighbors.push({ row: row + 1, col: col });
  }
  if (col > 0 && !grid[row][col - 1].right) {
      neighbors.push({ row: row, col: col - 1 });
  }
  return neighbors;
};
  

/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_generators/emptyMaze.js":
/*!***************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_generators/emptyMaze.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateEmptyMaze)
/* harmony export */ });
/**
 * Creates a maze with no borders
 * 
 * @param {Array} grid - A 2D array reppresenting the maze grid
 */
function generateEmptyMaze(grid){
    const rows = grid.length;
    const cols = grid[0].length;
    const animation = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].top = false;
            grid[i][j].right = false;
            grid[i][j].bottom = false;
            grid[i][j].left = false;
            animation.unshift({row: i, col: j})
        };
    };

    return animation;
};

/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_generators/randomMaze.js":
/*!****************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_generators/randomMaze.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateRandomMaze)
/* harmony export */ });
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");


/**
 * Creates a random maze with random borders
 * 
 * @param {Array} grid - A 2D array reppresenting the maze grid
 */
function generateRandomMaze(grid, startcell){
    const rows = grid.length;
    const cols = grid[0].length;
    const animation = [];
    
    for (let i = 0; i < rows; i++) {
        
        for (let j = 0; j < cols; j++) {
            let proba = Math.random();

            (Math.random() > proba) ? (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.removeWall)(grid, i, j, i + 1, j) : '';
            (Math.random() > 1-proba) ? (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.removeWall)(grid, i, j, i, j + 1) : '';
            (Math.random() > proba) ? (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.removeWall)(grid, i, j, i-1, j) : '';
            (Math.random() > 1-proba) ? (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.removeWall)(grid, i, j, i, j - 1): '';
            animation.unshift({row: i, col: j});
        };
    };

    return animation;
};


/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_generators/randomizedDFS.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_generators/randomizedDFS.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMazeRDFS)
/* harmony export */ });
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");


/**
 * Generates a maze using the Randomized Depth-First Search (RDFS) algorithm.
 *
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {Object} startCell - The starting cell.
 */
function generateMazeRDFS(grid, startCell) {
    const animations = [];
    const stack = [];
    stack.push(startCell);
   

    while (stack.length > 0) {
        const currentCell = stack[stack.length - 1];
        grid[currentCell.row][currentCell.col].visited = true;
        animations.push(currentCell);
        
        // Get unvisited neighbors of the current cell
        const randomNeighbor = (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomNeighbor)(grid, currentCell.row, currentCell.col);
        // If there are unvisited neighbors, choose a random one and remove the wall between them
        if (randomNeighbor) {
            
            (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.removeWall)(grid, currentCell.row, currentCell.col, randomNeighbor.row, randomNeighbor.col);
            stack.push(randomNeighbor);
            
        } else {
            stack.pop();
        }
    };

    return animations;
}

/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_generators/recurisveDivision.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_generators/recurisveDivision.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ recursiveDivision)
/* harmony export */ });
/* harmony import */ var _emptyMaze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyMaze */ "./src/pages/maze/maze-visualizer/model/maze_generators/emptyMaze.js");
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");



/**
 * Creates the maze with the recurisve division method.
 * 
 * @param {Array} grid - The 2D array containing the grid
 * @returns {Array} - Array containing the animation
 */
function recursiveDivision(grid){
  // Empty the grid
  const animations = (0,_emptyMaze__WEBPACK_IMPORTED_MODULE_0__["default"])(grid);

  // Declare the starting and ending points of the grid (top-left and bottom-right corner)
  const startCell = {row:0, col:0};
  const endCell = {row:45, col:25};
    
  // Recursively divide
  divideMaze(grid, startCell.row, startCell.col, endCell.row, endCell.col);

   // Right now the animation just vists each cell in order.
   // To animate the divide maze changes are required.
  return animations;
};

/**
 * 
 * @param {Array} grid - The 2D array representing the maze grid
 * @param {*} col1 - 
 * @param {*} row1 
 * @param {*} col2 
 * @param {*} row2 
 * @returns 
 */
const divideMaze = (grid, row1, col1, row2, col2) => {
  // If the grid has become to small to divide return
  if (col2 - col1 <= 1 || row2 - row1 <= 1) return;

  // Divide along the axis which is longer
  if (col2 - col1 > row2 - row1) {
    // Get a random partition along the columns
    let partition = Math.floor(Math.random() * (col2 - col1 - 1)) + col1 + 1;
    // Get a random gap allong the rows
    let gap = Math.floor(Math.random() * (row2 - row1 + 1)) + row1;

    // Add walls along the partition skipping the gap
    for (let i = row1; i <= row2; i++) {
      if (i === gap) continue;
      (0,_maze_utils__WEBPACK_IMPORTED_MODULE_1__.addWall)(grid, partition, i, partition+1, i)
    };
    
    // Recursively divide the two section defined by the partition
    divideMaze(grid, row1, col1, row2, partition);
    divideMaze(grid, row1,  partition + 1, row2, col2);
  } else {

    // Get a random partition along the rows
    let partition = Math.floor(Math.random() * (row2 - row1 - 1)) + row1 + 1;
    // Get a random gap allong the cols
    let gap = Math.floor(Math.random() * (col2 - col1 + 1)) + col1;

    // Add walls along the partition skipping the gap
    for (let i = col1; i <= col2; i++) {
      if (i === gap) continue;
      (0,_maze_utils__WEBPACK_IMPORTED_MODULE_1__.addWall)(grid, i, partition, i, partition+1);
    };

    // Recursively divide the two section defined by the partition
    divideMaze(grid, row1, col1, partition, col2);
    divideMaze(grid, partition + 1, col1, row2, col2);
  }
};



/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_path_finders/path-utils.js":
/*!******************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_path_finders/path-utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityQueue": () => (/* binding */ PriorityQueue),
/* harmony export */   "construct_path": () => (/* binding */ construct_path)
/* harmony export */ });
/** A simple implementation of a priority queue */
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    add(value, priority) {
        this.heap.push([value, priority]);
        this.sort();
    }

    remove() {
        return this.heap.shift();
    }

    sort() {
        this.heap.sort((a, b) => a[1] - b[1]);
    }

    isEmpty() {
        return this.heap.length === 0;
    }
};

/**
 * Constructs the path from the end cell to the start cell
 * 
 * @param {Object} endCell - The end cell
 * @param {Object} startCell - The start cell
 * @param {Array} parents - Object containing the parent of each cell
 * @returns {Array} - Array containing the path from the end cell to the start cell
 */
function construct_path(endCell, startCell, parents) {
    const path = [];
    let current = endCell;
    while (current !== startCell) {
        if (!current)
            break;
        path.unshift(current);
        current = parents[`${current.row},${current.col}`];
    }
    path.unshift(startCell);
    return path;
};


/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchAStar.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_path_finders/searchAStar.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchAStar)
/* harmony export */ });
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");
/* harmony import */ var _path_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-utils */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/path-utils.js");



/**
 * Perform A* search on the grid to find the shortest path from start to end.
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} startCell - The starting cell
 * @param {Object} endCell - The ending cell
 * @returns {Object} The animation of the algorithm and the animation of the path
 */
function searchAStar(grid, startCell, endCell){
    // Initialize a priorty queue
    const priorityQueue = new _path_utils__WEBPACK_IMPORTED_MODULE_1__.PriorityQueue();
    priorityQueue.add(startCell, 0 + getHeuristic(startCell, endCell));
    // Initialize an array to keep track of the animation
    const animations = []
    // Initialize an object to keep track of the distances
    const distances = {};
    distances[`${startCell.row},${startCell.col}`] = 0;
    // Initialize an object to keep track of the  parents
    const parents = {};

    while(!priorityQueue.isEmpty()){
        // Dequeue the cell with the lowest total cost (distance + heuristic)
        let [currentCell, currentDistance] = priorityQueue.remove();

          // Check if the current cell is the solution
        if ((currentCell.row === endCell.row) && (currentCell.col === endCell.col)) {
            // Solution found, stop the iterations
            break;
        };

        // We consider a cell visited for the purpose of the animation if it passes the previous control statements
        animations.unshift(currentCell);

        // Get the neighbors of the cell
        let neighbors = (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.getValidNeighbors)(grid, currentCell);
        for (const neighbor of neighbors) {
            // Compute the distance of the neighbor
            let newDistance = currentDistance + grid[neighbor.row][neighbor.col].weight;
            // Update the distance if the current distance is shorter than the previous distance
            if (
                !distances[`${neighbor.row},${neighbor.col}`] ||
                newDistance < distances[`${neighbor.row},${neighbor.col}`]
            ) {
                distances[`${neighbor.row},${neighbor.col}`] = newDistance;
                // Enqueue the neighbor with the new total cost
                priorityQueue.add(neighbor, newDistance + getHeuristic(neighbor, endCell));
                // Add the current cell as the parent of the neighbor cell
                parents[`${neighbor.row},${neighbor.col}`] = currentCell;
            }
        };
    };

     // Construct the path
     const path = (0,_path_utils__WEBPACK_IMPORTED_MODULE_1__.construct_path)(endCell, startCell, parents);
    
    return { animation: animations, path: path };
};

/**
 * Calculates the distance between two cells
 * 
 * @param {Object} cell - A cell of the grid
 * @param {Object} endCell - The end cell of the grid
 * @returns {Number} The distance from the cell to the end cell.
 */
function getHeuristic(cell, endCell) {
    // Manhattan Distance
    //return Math.abs(cell.row - endCell.row) + Math.abs(cell.col - endCell.col);

    // Euclidean Distance
    return Math.sqrt(((cell.row - endCell.row)**2) + ((cell.col - endCell.col)**2));
};



/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchBFS.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_path_finders/searchBFS.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchBFS)
/* harmony export */ });
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");
/* harmony import */ var _path_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-utils */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/path-utils.js");



/**
 * Perform a Breadth First Search (BFS) on the grid to find a path from start to end
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} start - The starting cell
 * @param {Object} end - The end cell
 * @returns {Array} The path from start to end, represented as an array of cells
 */
function searchBFS(grid, start, end){
    // Initialize a queue
    const queue = [start];
    // Initialize an array to keep track of the animation
    const animation = [start];
    // Initialize a set to keep track of visited neighbours to avoid loops
    const visitedSet = new Set();
    // Initialize an object to keep track of the parents
    const parent = {}

    // Repeat while the stack has cells
    while (queue.length){
        // Get the first element of the queue
        let currentCell = queue.shift();

        // Check if the current cell is the solution
        if ((currentCell.row === end.row) && (currentCell.col === end.col)){
            // Solution found stop the iterations
            break;
        };

        // Check if the current cell is a member of the visited set
        if (visitedSet.has(`${currentCell.row},${currentCell.col}`)){
            // Go to the next iteration
            continue;
        };

        // We consider a cell visited for the purpose of the animation if it passes the previous control statements
        animation.unshift(currentCell);

        // Add the current cell to the visited set
        visitedSet.add(`${currentCell.row},${currentCell.col}`);
        // Get the neighbors of the cell
        let neighbors = (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.getValidNeighbors)(grid, currentCell);
        for (const neighbor of neighbors){
            // Enqueue the neighbors
            queue.push(neighbor);
            // Add the current cell as the parent of the neighbor cell
            if (!visitedSet.has(`${neighbor.row},${neighbor.col}`)){
                // Add the current cell as the parent of the neighbor cell
                parent[`${neighbor.row},${neighbor.col}`] = currentCell; 
            };
        };
    };

    // Construct the path
    const path = (0,_path_utils__WEBPACK_IMPORTED_MODULE_1__.construct_path)(end, start, parent);
    return {animation: animation, path: path};
};


/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchDFS.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_path_finders/searchDFS.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchDFS)
/* harmony export */ });
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");
/* harmony import */ var _path_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-utils */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/path-utils.js");



/**
 * Perform a Depth First Search (DFS) on the grid to find a path from start to end
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} start - The starting cell
 * @param {Object} end - The end cell
 * @returns {Array} The path from start to end, represented as an array of cells
 */
function searchDFS(grid, start, end){
    // Initialize a stack
    const stack = [start];
    // Initialize an array to keep track of the animation
    const animation = [start];
    // Initialize a set to keep track of visited neighbours to avoid loops
    const visitedSet = new Set();
    // Initialize an object to keep track of the parents
    const parent = {}

    // Repeat while the stack has cells
    while (stack.length){
        // Get the top element of the stack
        let currentCell = stack.pop();

        // Check if the current cell is the solution
        if ((currentCell.row === end.row) && (currentCell.col === end.col)){
            // Solution found stop the iterations
            break;
        };

        // Check if the current cell is a member of the visited set
        if (visitedSet.has(`${currentCell.row},${currentCell.col}`)){
            // Go to the next iteration
            continue;
        };

        // We consider a cell visited for the purpose of the animation if it passes the previous control statements
        animation.unshift(currentCell);

        // Add the current cell to the visited set
        visitedSet.add(`${currentCell.row},${currentCell.col}`);
        // Get the neighbors of the cell
        let neighbors = (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.getValidNeighbors)(grid, currentCell);
        for (const neighbor of neighbors){
            stack.push(neighbor);
            // Add the current cell as the parent of the neighbor cell
            if (!visitedSet.has(`${neighbor.row},${neighbor.col}`)){
                // Add the current cell as the parent of the neighbor cell
                parent[`${neighbor.row},${neighbor.col}`] = currentCell; 
            };
        };
    };

    // Construct the path
     const path = (0,_path_utils__WEBPACK_IMPORTED_MODULE_1__.construct_path)(end, start, parent);
    
    
    return {animation: animation, path: path};
};


/***/ }),

/***/ "./src/pages/maze/maze-visualizer/model/maze_path_finders/searchDijkstra.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/maze/maze-visualizer/model/maze_path_finders/searchDijkstra.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchDijkstra)
/* harmony export */ });
/* harmony import */ var _maze_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maze-utils */ "./src/pages/maze/maze-visualizer/model/maze-utils.js");
/* harmony import */ var _path_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-utils */ "./src/pages/maze/maze-visualizer/model/maze_path_finders/path-utils.js");



/**
 * Perform Dijkstra's algorithm on the grid to find the shortest path from start to end.
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} startCell - The starting cell
 * @param {Object} endCell - The ending cell
 * @returns {Object} The animation of the algorithm and the animation of the path
 */
function searchDijkstra(grid, startCell, endCell){
    // Initialize a priorty queue
    const priorityQueue = new _path_utils__WEBPACK_IMPORTED_MODULE_1__.PriorityQueue();
    priorityQueue.add(startCell, 0);
    // Initialize an array to keep track of the animation
    const animations = []
    // Initialize an object to keep track of the distances
    const distances = {};
    distances[`${startCell.row},${startCell.col}`] = 0;
    // Initialize an object to keep track of the  parents
    const parents = {};

    while(!priorityQueue.isEmpty()){
        // Dequeue the cell with the lowest distance
        let [currentCell, currentDistance] = priorityQueue.remove();

          // Check if the current cell is the solution
        if ((currentCell.row === endCell.row) && (currentCell.col === endCell.col)) {
            // Solution found, stop the iterations
            break;
        };

        // We consider a cell visited for the purpose of the animation if it passes the previous control statements
        animations.unshift(currentCell);

        // Get the neighbors of the cell
        let neighbors = (0,_maze_utils__WEBPACK_IMPORTED_MODULE_0__.getValidNeighbors)(grid, currentCell);
        for (const neighbor of neighbors) {
            // Compute the distance of the neighbor
            let newDistance = currentDistance + grid[neighbor.row][neighbor.col].weight;
            // Update the distance if the current distance is shorter than the previous distance
            if (
                !distances[`${neighbor.row},${neighbor.col}`] ||
                newDistance < distances[`${neighbor.row},${neighbor.col}`]
            ) {
                distances[`${neighbor.row},${neighbor.col}`] = newDistance;
                // Enqueue the neighbor with the new distance
                priorityQueue.add(neighbor, newDistance);
                // Add the current cell as the parent of the neighbor cell
                parents[`${neighbor.row},${neighbor.col}`] = currentCell;
            }
        };
    };

    // Construct the path
    const path = (0,_path_utils__WEBPACK_IMPORTED_MODULE_1__.construct_path)(endCell, startCell, parents);
    
    return { animation: animations, path: path };
};


/***/ }),

/***/ "./src/images/icons/bug-icon.png":
/*!***************************************!*\
  !*** ./src/images/icons/bug-icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e291c83466fc512e08d8.png";

/***/ }),

/***/ "./src/images/icons/github-icon.png":
/*!******************************************!*\
  !*** ./src/images/icons/github-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/images/icons/pause-icon.png":
/*!*****************************************!*\
  !*** ./src/images/icons/pause-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6bdd0e42f09f6ba669de.png";

/***/ }),

/***/ "./src/images/icons/play-icon.png":
/*!****************************************!*\
  !*** ./src/images/icons/play-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9a6e037c0db109e72386.png";

/***/ }),

/***/ "./src/images/icons/reset-icon.png":
/*!*****************************************!*\
  !*** ./src/images/icons/reset-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ef8eac5d6f5ed0a6a759.png";

/***/ }),

/***/ "./src/images/icons/robot-icon.png":
/*!*****************************************!*\
  !*** ./src/images/icons/robot-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b157bb08da0c99cec468.png";

/***/ }),

/***/ "./src/images/icons/target-icon.png":
/*!******************************************!*\
  !*** ./src/images/icons/target-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b4a7d4f297318440e6c4.png";

/***/ }),

/***/ "./src/pages/home/home.json":
/*!**********************************!*\
  !*** ./src/pages/home/home.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Search Techniques","content":[{"type":"paragraph","text":"Search techniques in artificial intelligence (AI) play a crucial role in finding solutions to problems and making decisions. They involve searching through a set of potential solutions to find the one that best meets the given criteria. There are two main categories of search techniques: informed and uninformed search."},{"type":"paragraph","text":"Uninformed search techniques, also known as blind search, do not use any information about the problem to guide the search. These algorithms search through the entire state space without any prior knowledge of the goal. These algorithms can be useful in cases where the search space is small and the goal is easily reachable."},{"type":"paragraph","text":"Informed search techniques, also known as heuristic search, make use of information about the problem to guide the search. These algorithms use a heuristic function to estimate the cost of reaching the goal from a given state."},{"type":"paragraph","text":"Both informed and uninformed search techniques have their own strengths and weaknesses, and the choice of which technique to use depends on the specific problem and the available resources. Informed search techniques are generally more efficient, but they require more information about the problem, while uninformed search techniques are less efficient, but they can be used when information about the problem is limited."},{"type":"paragraph","text":"In addition to these two main categories, there are also other search techniques which are used in specific scenarios where one of the above techniques don\'t work well."},{"type":"section","title":"Uninformed search","content":[{"type":"paragraph","text":"Uninformed search, also known as blind search, is a category of search techniques in artificial intelligence (AI) that do not use any information about the problem to guide the search. These algorithms simply explore the state space without any knowledge of the goal state or how to reach it. The goal of uninformed search is to find any solution that exists, even if it is not the best one."},{"type":"paragraph","text":"One of the main advantages of uninformed search techniques is their generality. They can be applied to a wide range of problems without requiring any specific knowledge about the problem or the solution. They can be useful in situations, where information about the problem is limited or difficult to obtain."},{"type":"paragraph","text":"Despite their relative inefficiency, uninformed search techniques can still be a useful tool for solving problems in AI. They are used in a wide range of fields, including robotics, natural language processing, and computer vision."},{"type":"paragraph","text":"There are several uninformed search algorithms that are commonly used in artificial intelligence, including:"},{"type":"unordered-list","items":[{"text":"Breadth-First Search (BFS)"},{"text":"Depth-First Search (DFS)"},{"text":"Depth-Limited Search (DLS)"},{"text":"Iterative Deepening Search (IDS)"}]},{"type":"paragraph","text":"Each of these algorithms have their own strengths and weaknesses, and the choice of which one to use depends on the specific problem and the available resources."}]},{"type":"section","title":"Informed Search","content":[{"type":"paragraph","text":"Informed search, also known as heuristic search, is a category of search techniques in artificial intelligence (AI) that use information about the problem to guide the search. These algorithms use a heuristic function to estimate the cost of reaching the goal state from a given state. The heuristic function guides the search by providing an estimate of how close a given state is to the goal state."},{"type":"paragraph","text":"Informed search techniques are generally more efficient than uninformed search techniques because they use additional information about the problem to guide the search. They can focus on the most promising states and avoid those that are unlikely to lead to the goal."},{"type":"paragraph","text":"Informed search techniques are used in a wide range of fields, including robotics, natural language processing, and computer vision. They are a fundamental part of solving problems in AI and are widely used in practice."},{"type":"paragraph","text":"There are several informed search techniques that are commonly used in artificial intelligence, including: "},{"type":"unordered-list","items":[{"text":"Dijkstra\'s algorithm"},{"text":"A* Search"},{"text":"Greedy Best-first search"},{"text":"Hill Climbing"},{"text":"Beam Search"},{"text":"Simulated Annealing"},{"text":"Genetic Algorithms"}]},{"type":"paragraph","text":"Each of these algorithms have their own strengths and weaknesses, and the choice of which one to use depends on the specific problem and the available resources."}]},{"type":"section","title":"Benchmark Problems","content":[{"type":"paragraph","text":"Benchmark problems are a set of standard problems that are commonly used to evaluate and compare the performance of different search algorithms in artificial intelligence (AI). These problems have well-defined and understood characteristics, and the solutions to these problems are often known, making it possible to compare the performance of different algorithms."},{"type":"paragraph","text":"An example of a benchmark problem in AI is the maze-solving problem. This problem involves finding a path from a starting point to a goal point in a maze, while avoiding obstacles. The maze can be represented as a graph, with each cell in the maze being a node and the edges representing the possible paths between the cells. The maze-solving problem can be used to evaluate the performance of various search algorithms, in terms of the number of nodes expanded and the length of the path found."},{"type":"paragraph","text":"The choice of benchmark problem depends on the specific research question and the available resources. It is also important to consider the computational complexity of the algorithm when choosing a benchmark problem, as some problems may be too difficult or time-consuming to solve using certain algorithms."},{"type":"paragraph","text":"Overall, benchmark problems play an important role in AI research by providing a common ground for comparing the performance of different algorithms and helping to identify areas for improvement."}]},{"type":"section","title":"References","content":[{"type":"paragraph","text":"Russel, S.J., and Norvig, P. (2010). Artificial Intelligence: A Modern Approach (3rd ed.). Prentice Hall."},{"type":"paragraph","text":"Cormen, T.H., Leiserson, C.E., Rivest, R.L., and Stein, C. (2009). Introduction to Algorithms (3rd ed.). MIT Press."},{"type":"paragraph","text":"Nilsson, N.J. (1980). Principles of Artificial Intelligence. Tioga Publishing Company."}]}]}');

/***/ }),

/***/ "./src/pages/maze/data/articleAstar.json":
/*!***********************************************!*\
  !*** ./src/pages/maze/data/articleAstar.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"A* Search","content":[{"type":"paragraph","text":"A* search is a type of informed search algorithm that is used to find the shortest path from a start state to a goal state. It combines the advantages of both uniform-cost search and greedy search algorithms. The algorithm uses a heuristic function to estimate the cost of reaching the goal state and to guide the search towards the goal."},{"type":"paragraph","text":"The main advantage of A* search is its ability to find the optimal solution. The algorithm\'s heuristic function helps it to avoid exploring nodes that are unlikely to lead to the goal and to focus on nodes that are more promising. As a result, A* search is faster and more efficient than other search algorithms such as breadth-first search and depth-first search."},{"type":"paragraph","text":"The main disadvantage of A* search is that it requires a good heuristic function. If the heuristic function is not accurate, then the algorithm may not find the optimal solution or may take longer to do so. In addition, A* search can be memory-intensive as it needs to store the priority queue of nodes and the information about the cost and heuristic estimate of each node."},{"type":"section","title":"How A* Search works","content":[{"type":"paragraph","text":"A* search operates by maintaining a priority queue of nodes to be explored. The priority of a node is calculated as the sum of its cost and the heuristic estimate of the remaining cost to reach the goal. The algorithm starts by adding the start node to the priority queue and then repeatedly selects the node with the lowest priority and expands it. The expanded node generates its children and adds them to the priority queue. The algorithm terminates when either the goal node is found or the priority queue is empty."},{"type":"unordered-list","items":[{"text":"Initialize a priority queue with the initial node and its estimated total cost (which is the sum of the distance from the starting node and the heuristic estimate of the remaining cost to reach the goal) as the priority."},{"text":"Initialize a visited set to keep track of the nodes that have already been processed to avoid processing them again."},{"text":"Repeat until the priority queue is empty"},{"text":"Remove the node with the smallest estimated total cost from the priority queue."},{"text":"Check if the node is the goal state. If it is, terminate and return the path from the start state to the goal state. If it is not, proceed to the next step."},{"text":"Check if the node is a member of the visited set. If it is, go to the next iteration. If it is not, proceed to the next step"},{"text":"Add the node to the visited set"},{"text":" Get the unvisited neighbors of the node, calculate their estimated total cost, and add them to the priority queue. Go to the next iteration"}]}]},{"type":"section","title":"Time and Space Complexities","content":[{"type":"paragraph","text":"The time complexity of the Dijkstra algorithm is O(b^d), where b is the branching factor and d is the depth. The branching factor refers to the average number of children that a node has in the search tree, while the depth refers to the length of the path from the root node to the target node. The time complexity of the Dijkstra algorithm increases exponentially with the branching factor and the depth, making it less efficient for graphs with a large branching factor or a deep search tree."},{"type":"paragraph","text":"The space complexity of the Dijkstra algorithm is O(b^d), where b is the branching factor and d is the depth. This means that the amount of memory required to store the distances and the priority queue grows exponentially with the branching factor and the depth of the search tree."}]},{"type":"section","title":"References","content":[{"type":"paragraph","text":"Algorithm, A* (n.d.). In Wikipedia. Retrieved February 3, 2023, from https://en.wikipedia.org/wiki/A*_search_algorithm","links":[{"url":"https://en.wikipedia.org/wiki/A*_search_algorithm","text":"https://en.wikipedia.org/wiki/A*_search_algorithm"}]},{"type":"paragraph","text":"Russel, S.J., and Norvig, P. (2010). Artificial Intelligence: A Modern Approach (3rd ed.). Prentice Hall."}]}]}');

/***/ }),

/***/ "./src/pages/maze/data/articleBFS.json":
/*!*********************************************!*\
  !*** ./src/pages/maze/data/articleBFS.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Breadth-First Search","content":[{"type":"paragraph","text":"Breadth-First Search (BFS) is a popular search algorithm used in Artificial Intelligence (AI) and computer science. The algorithm is used to traverse or search a graph or a tree-like data structure in a breadth-wise manner. It starts from the root node and explores all the nodes at the current depth level before moving on to the next level."},{"type":"paragraph","text":"One of the main advantages of BFS is its simplicity. It is easy to implement and understand. Additionally, it is guaranteed to find the shortest path between two nodes in an unweighted graph. This means that it will always find the path with the minimum number of edges between the source and target nodes."},{"type":"paragraph","text":"However, BFS also has its limitations. The main disadvantage of the algorithm is its memory requirement. Since it explores all possible paths, it can quickly consume a large amount of memory, especially for large graphs. This makes BFS unsuitable for searching large graphs or trees with millions of nodes."},{"type":"section","title":"How DFS works","content":[{"type":"paragraph","text":"The algorithm works by maintaining a queue of nodes to be visited. The root node is first added to the queue, and then the algorithm repeatedly removes the first node from the queue, visits it, and adds its unvisited neighbors to the end of the queue. This process continues until the target node is found or all nodes have been visited."},{"type":"unordered-list","items":[{"text":"Initialize a queue with the initial node"},{"text":"Initialize a visited set: A set is created to keep track of the nodes that have already been visited to avoid visiting them again."},{"text":"Repeat until the queue is empty"},{"text":"Dequeue the first node"},{"text":"Check if the node is the solution: If it is, terminate. If it is not, proceed to the next step."},{"text":"Check if the node is a member of the visited set. If it is go to the next iteration. If it is not, proceed to the next step"},{"text":"Add the node to the visited set"},{"text":"Get the unvisited neigbours of the node and add them to the queue. Go to the next iteration."}]}]},{"type":"section","title":"Time and Space Complexities","content":[{"type":"paragraph","text":"BFS has a time complexity of O(b^d), where b is the branching factor of the graph and d is the depth of the solution. In practice, BFS is used when the branching factor is small, as the time complexity can quickly become exponential for large branching factors."},{"type":"paragraph","text":"One important aspect of BFS is its use of memory. BFS uses a queue to keep track of the nodes to be visited, and the size of the queue can grow large, making the algorithm unsuitable for large graphs with limited memory. In such cases, the algorithm can be modified to use Depth-First Search (DFS) or a memory-limited version of BFS."}]},{"type":"section","title":"References","content":[{"type":"paragraph","text":"Russel, S.J., and Norvig, P. (2010). Artificial Intelligence: A Modern Approach (3rd ed.). Prentice Hall."}]}]}');

/***/ }),

/***/ "./src/pages/maze/data/articleDFS.json":
/*!*********************************************!*\
  !*** ./src/pages/maze/data/articleDFS.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Depth-First Search","content":[{"type":"paragraph","text":"Depth First Search (DFS) is a popular search algorithm used in Artificial Intelligence (AI) and computer science. The algorithm is used to traverse a graph or tree structure, starting from the root node and exploring as far as possible along each branch before backtracking. In other words, DFS explores the deepest possible node in the search tree before visiting its siblings."},{"type":"paragraph","text":"One of the key features of DFS is its ability to backtrack and change the path if it leads to a dead end. In other words, DFS can explore multiple paths in parallel, and switch to another path if the current path leads to a dead end. This is one of the reasons why DFS is widely used in maze-solving problems, where it is important to explore multiple paths in order to find a solution. Another important feature of DFS is its memory efficiency. Unlike Breadth First Search (BFS), which requires a queue data structure to store the nodes that need to be visited, DFS only requires a stack. This means that DFS uses less memory than BFS, and is suitable for problems where memory usage is a concern."},{"type":"paragraph","text":"Despite its advantages, DFS also has some disadvantages. One of the biggest disadvantages is that it can be slow in certain situations, especially in problems where the search space is very large. This is because DFS explores the deepest node first, and may take a long time to reach the end node if the search space is large. Another disadvantage of DFS is that it can get stuck in infinite loops if the graph contains cycles. In such cases, DFS will keep visiting the same nodes over and over again, without finding the end node. To avoid this problem, DFS algorithms can use a visited set to keep track of the nodes that have already been visited."},{"type":"section","title":"How DFS works","content":[{"type":"paragraph","text":"DFS algorithms use a stack data structure to keep track of the nodes that need to be visited. The algorithm starts by pushing the starting node onto the stack, and then repeatedly pops the top node from the stack and visits its neighbors. If a neighbor has already been visited, it is skipped. The algorithm continues until the end node is found or the stack is empty, which means that there is no solution."},{"type":"unordered-list","items":[{"text":"Initialize a stack with the initial node"},{"text":"Initialize a visited set: A set is created to keep track of the nodes that have already been visited to avoid visiting them again."},{"text":"Repeat until the stack is empty"},{"text":"Pop the first node"},{"text":"Check if the node is the solution: If it is, terminate. If it is not, proceed to the next step."},{"text":"Check if the node is a member of the visited set. If it is go to the next iteration. If it is not, proceed to the next step"},{"text":"Add the node to the visited set"},{"text":"Get the unvisited neigbours of the node and push them to the stack. Go to the next iteration."}]}]},{"type":"section","title":"Time and Space Complexities","content":[{"type":"paragraph","text":"The time complexity of DFS depends on the number of nodes and edges in the search space. In the worst-case scenario, where the end node is located at the bottom of the search tree, DFS will visit every node in the tree, leading to a time complexity of O(b^d), where b is the average branching factor of the tree and d is the depth of the end node. This means that the time complexity of DFS can be very large in problems where the search space is very large."},{"type":"paragraph","text":"The space complexity of DFS is O(b * d), which is much lower than the space complexity of Breadth First Search (BFS), which is O(b^d). This is because DFS only requires a stack to store the nodes that need to be visited, while BFS requires a queue. This means that DFS is more memory efficient than BFS, and is suitable for problems where memory usage is a concern. However, the space complexity of DFS can still be high in problems where the search space is very large, especially if the tree is very deep."}]},{"type":"section","title":"References","content":[{"type":"paragraph","text":"Russel, S.J., and Norvig, P. (2010). Artificial Intelligence: A Modern Approach (3rd ed.). Prentice Hall."}]}]}');

/***/ }),

/***/ "./src/pages/maze/data/articleDijkstra.json":
/*!**************************************************!*\
  !*** ./src/pages/maze/data/articleDijkstra.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Dijkstra\'s Algorithm","content":[{"type":"paragraph","text":"Dijkstra algorithm, named after its inventor Edsger W. Dijkstra, is a graph search algorithm that helps to find the shortest path between nodes in a graph. The algorithm is widely used in artificial intelligence, especially for solving problems involving finding the shortest distance between nodes in a graph. The algorithm operates on a weighted graph, where each edge between two nodes has a weight representing its cost. In the case where the graph is unweighted, meaning that each edge has a weight of 1, the algorithm is equivalent to the breadth-first search (BFS) algorithm."},{"type":"paragraph","text":"The Dijkstra algorithm is guaranteed to find the shortest path between nodes in a weighted graph, making it an ideal choice for problems that require finding the minimum cost path. The algorithm provides an optimal solution to the problem of finding the shortest path between nodes in a graph. However, it is not suitable for graphs with negative edge weights, as it does not guarantee the shortest path in this case. In addition it may require a large amount of memory to store the distances and the priority queue."},{"type":"section","title":"How Dijkstra\'s Algorithm works","content":[{"type":"paragraph","text":"The Dijkstra algorithm operates on a weighted graph, where each edge between two nodes has a weight representing its cost. The algorithm starts from a source node and iteratively visits the closest unvisited node until it reaches the target node. At each step, the algorithm updates the distance to each of its neighbors and keeps track of the minimum distance to each node. The algorithm terminates when the target node has been visited or when there are no more unvisited nodes."},{"type":"paragraph","text":"The implementation of the Dijkstra algorithm is straightforward and can be done using a priority queue. The priority queue stores the nodes that have been visited and their distances, and the algorithm dequeues the node with the minimum distance from the queue and updates its neighbors. This process is repeated until the target node is reached or there are no more nodes in the queue."},{"type":"unordered-list","items":[{"text":"Initialize a priority queue with the initial node and its distance from the starting node as the priority."},{"text":"Initialize a visited set: A set is created to keep track of the nodes that have already been processed to avoid processing them again."},{"text":"Repeat until the priority queue is empty"},{"text":"Remove the node with the smallest priority from the priority queue"},{"text":"Check if the node is the solution: If it is, terminate. If it is not, proceed to the next step."},{"text":"Check if the node is a member of the visited set. If it is, go to the next iteration. If it is not, proceed to the next step"},{"text":"Add the node to the visited set"},{"text":"Get the unvisited neighbors of the node, calculate their distances from the starting node, and add them to the priority queue. Go to the next iteration."}]}]},{"type":"section","title":"Time and Space Complexities","content":[{"type":"paragraph","text":"The time complexity of the Dijkstra algorithm is O(b^d), where b is the branching factor and d is the depth. The branching factor refers to the average number of children that a node has in the search tree, while the depth refers to the length of the path from the root node to the target node. The time complexity of the Dijkstra algorithm increases exponentially with the branching factor and the depth, making it less efficient for graphs with a large branching factor or a deep search tree."},{"type":"paragraph","text":"The space complexity of the Dijkstra algorithm is O(b^d), where b is the branching factor and d is the depth. This means that the amount of memory required to store the distances and the priority queue grows exponentially with the branching factor and the depth of the search tree."}]},{"type":"section","title":"References","content":[{"type":"paragraph","text":"Dijkstra, E. W. (1959). A note on two problems in connexion with graphs. Numerische Mathematik, 1(1), 269-271."},{"type":"paragraph","text":"Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). Introduction to algorithms. Cambridge, MA: MIT Press."},{"type":"paragraph","text":"Russel, S.J., and Norvig, P. (2010). Artificial Intelligence: A Modern Approach (3rd ed.). Prentice Hall."}]}]}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/**
 * The main entry point of the application.
 * 
 * @module index
 */



/**
 * Create a new instance of the App class.
 * 
 * @type {App} - See {@link App}
 */
const app = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
// Start the application
app.run();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7QUFDSDtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUssT0FBTztBQUN0QjtBQUNBLGdCQUFnQiw0Q0FBRztBQUNuQjtBQUNBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jc3M/OTQzNyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzP2IwOWQiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcz9lOGViIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jc3M/NzFiOSIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy80MDRwYWdlL25vdGZvdW5kLmNzcz9mMTcxIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL3BhZ2VzL2hvbWUvaG9tZS5jc3M/Y2E4MSIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtcGFnZS5jc3M/ZGZmYiIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtdmlzdWFsaXplci9tYXplLXZpc3VhbGl6ZXIuY3NzPzViMGEiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL2Jhc2UvQmFzZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9iYXNlL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvYmFzZS9QYWdlLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL2Jhc2UvUmVzb3VyY2VIYW5kbGVyLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZS9BcnRpY2xlLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL2NvbmZpZ3MvbmF2LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9jb25maWdzL3JvdXRlLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy80MDRwYWdlL05vdEZvdW5kUGFnZS5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9ob21lL0hvbWVQYWdlLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL3BhZ2VzL21hemUvTWF6ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvcGFnZXMvbWF6ZS9tYXplLXZpc3VhbGl6ZXIvTWF6ZVZpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvcGFnZXMvbWF6ZS9tYXplLXZpc3VhbGl6ZXIvbW9kZWwvTWF6ZU1vZGVsLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL3BhZ2VzL21hemUvbWF6ZS12aXN1YWxpemVyL21vZGVsL21hemUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvcGFnZXMvbWF6ZS9tYXplLXZpc3VhbGl6ZXIvbW9kZWwvbWF6ZV9nZW5lcmF0b3JzL2VtcHR5TWF6ZS5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtdmlzdWFsaXplci9tb2RlbC9tYXplX2dlbmVyYXRvcnMvcmFuZG9tTWF6ZS5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtdmlzdWFsaXplci9tb2RlbC9tYXplX2dlbmVyYXRvcnMvcmFuZG9taXplZERGUy5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtdmlzdWFsaXplci9tb2RlbC9tYXplX2dlbmVyYXRvcnMvcmVjdXJpc3ZlRGl2aXNpb24uanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvcGFnZXMvbWF6ZS9tYXplLXZpc3VhbGl6ZXIvbW9kZWwvbWF6ZV9wYXRoX2ZpbmRlcnMvcGF0aC11dGlscy5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtdmlzdWFsaXplci9tb2RlbC9tYXplX3BhdGhfZmluZGVycy9zZWFyY2hBU3Rhci5qcyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9wYWdlcy9tYXplL21hemUtdmlzdWFsaXplci9tb2RlbC9tYXplX3BhdGhfZmluZGVycy9zZWFyY2hCRlMuanMiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvLi9zcmMvcGFnZXMvbWF6ZS9tYXplLXZpc3VhbGl6ZXIvbW9kZWwvbWF6ZV9wYXRoX2ZpbmRlcnMvc2VhcmNoREZTLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyLy4vc3JjL3BhZ2VzL21hemUvbWF6ZS12aXN1YWxpemVyL21vZGVsL21hemVfcGF0aF9maW5kZXJzL3NlYXJjaERpamtzdHJhLmpzIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NlYXJjaC12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2VhcmNoLXZpc3VhbGl6ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zZWFyY2gtdmlzdWFsaXplci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgSGFzaFJvdXRlciBmcm9tIFwiLi9iYXNlL0hhc2hSb3V0ZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tIFwiLi9jb25maWdzL3JvdXRlLmNvbmZpZ1wiO1xuXG4vKipcbiAqIE1haW4gY2xhc3MgdGhhdCBoYW5kbGVzIHRoZSBpbml0aWFsaXphdGlvbiBhbmQgcnVubmluZyBvZiB0aGUgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwe1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByb3V0ZXIgZm9yIHRoZSBhcHBsaWNhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SGFzaFJvdXRlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IEhhc2hSb3V0ZXIoKTtcbiAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHJvdXRlcyBmcm9tIHRoZSByb3V0ZSBjb25maWcgZmlsZVxuICAgICAgICByb3V0ZUNvbmZpZy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLnJlZ2lzdGVyUm91dGUocm91dGUucGF0aCwgcm91dGUucGFnZSwgcm91dGUuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVhZGVyIGNvbXBvbmVudCBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hlYWRlcn1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIoKTtcbiAgICAgICAgLy8gQWRkIHRoZSBoZWFkZXIgY29tcG9uZW50IGFzIHRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBoZWFkZXIuY3JlYXRlKCkpO1xuXG4gICAgICAgIGNvbnN0IG5hdmJhciA9IG5ldyBOYXZiYXIoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkLmFmdGVyKG5hdmJhci5jcmVhdGUoKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmb290ZXIgY29tcG9uZW50IG9mIHRoZSBhcHBsaWNhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Rm9vdGVyfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcigpO1xuICAgICAgICAvLyBBZGQgdGhlIGZvb3RlciBjb21wb25lbnQgYXMgdGhlIGxhc3QgY2hpbGQgb2YgdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBmb290ZXIuY3JlYXRlKCkpOyAgIFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBhcHBsaWNhdGlvbiBieSBpbml0aWFsaXppbmcgdGhlIHJvdXRlclxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gcnVuXG4gICAgKi9cbiAgICBydW4oKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIuaW5pdCgpO1xuICAgIH07XG59OyIsIi8qKlxuICogQmFzZSBhYnN0cmFjdCBjbGFzcyBmb3IgYSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIEhUTUwgdGFnIG9mIHRoZSBjb21wb25lbnQgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IFtjbGFzc05hbWVdIC0gVGhlIGNsYXNzIG5hbWUocykgb2YgdGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtpZF0gLSBUaGUgaWQgb2YgdGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGFnLCBjbGFzc05hbWU9XCJcIiwgaWQ9XCJcIil7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjbGFzcyBpcyBiZWluZyBpbnN0YW50aWF0ZWQgZGlyZWN0bHlcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IgPT09IEJhc2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGluc3RhbnRpYXRlIGFic3RyYWN0IGNsYXNzIVwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICAgICAqIFxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNsYXNzIG5hbWVzIGFyZSBwcm92aWRlZCBhbmQgYWRkIHRoZW0gdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICBpZiAoY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIGFuIElEIGlzIHByb3ZpZGVkIGFuZCBhZGQgaXQgdG8gdGhlIGNvbXBvbmVudFxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSUQoaWQpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBYnN0cmFjdCBtZXRob2QgdG8gY3JlYXRlIHRoZSBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAqL1xuICAgIGNyZWF0ZSgpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QhXCIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gSUQgdG8gdGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gYWRkSURcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgaWQgdG8gYWRkXG4gICAgICogQHRocm93cyB7RXJyb3J9IC0gSWYgdGhlIGNvbXBvbmVudCBhbHJlYWR5IGhhcyBhbiBJRFxuICAgICAqL1xuICAgIGFkZElEKGlkKXtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiaWRcIikpe1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgYW4gSUQuIFRoZSBlbGVtZW50IGFscmVhZHkgaGFzIGFuIElEXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBpZCBmcm9tIHRoZSBjb21wb25lbnQgZWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHJlbW92ZUlEXG4gICAgICogQHRocm93cyB7RXJyb3J9IC0gSWYgdGhlIGNvbXBvbmVudCBkb2VzIG5vdCBoYXZlIGFuIElEXG4gICAgICovXG4gICAgcmVtb3ZlSUQoKXtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlbW92ZSB0aGUgSUQuIFRoZSBlbGVtZW50IGhhcyBubyBJRCB0byByZW1vdmVcIik7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBjbGFzcyBuYW1lKHMpIHRvIHRoZSBjb21wb25lbnQgZWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFkZENsYXNzXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzcyBuYW1lIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZENsYXNzKGNsYXNzTmFtZXMpe1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgaW5wdXQgaXMgYW4gYXJyYXkgb3IgYSBzaW5nbGUgc3RyaW5nXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKXtcbiAgICAgICAgICAgIC8vIEFkZCBhbGwgdGhlIGNsYXNzIG5hbWVzIGluIHRoZSBhcnJheSBpZiB0aGV5IGRvbid0IGV4aXN0XG4gICAgICAgICAgICBjbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNsYXNzIG5hbWUgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZXMpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBjbGFzcyBuYW1lKHMpIHRvIHRoZSBjb21wb25lbnQgZWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHJlbW92ZUNsYXNzXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIFRoZSBjbGFzcyBuYW1lIHRvIGFkZFxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZXMpe1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgaW5wdXQgaXMgYW4gYXJyYXkgb3IgYSBzaW5nbGUgc3RyaW5nXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKXtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgdGhlIGNsYXNzIG5hbWVzIGluIHRoZSBhcnJheSBpZiB0aGV5IGV4aXN0XG4gICAgICAgICAgICBjbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgbmFtZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZXMpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYSBjbGFzcyBuYW1lIFxuICAgICAqIElmIHRoZSBjbGFzcyBleGlzdHMgaXQgcmVtb3ZlcyBpdC5cbiAgICAgKiBJZiB0aGUgY2xhc3MgZG9lc24ndCBleGlzdCBpdCBhZGQgaXQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gdG9nZ2xlQ2xhc3NcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFxuICAgICAqL1xuICAgIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSl7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfTtcbn07IiwiaW1wb3J0IHtFdmVudEhhbmRsZXJ9IGZyb20gXCIuL1Jlc291cmNlSGFuZGxlclwiO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4vQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWVudC1zaWRlIHJvdXRpbmcgZm9yIHRoZSBhcHBsaWNhdGlvbiBieSBoYW5kbGluZ1xuICogdGhlIGhhc2hjaGFuZ2UgZXZlbnQgYW5kIGNyZWF0aW5nIG5ldyBwYWdlcyBiYXNlZCBvbiB0aGUgY3VycmVudCBwYXRoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXNoUm91dGVye1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNvbGxlY3Rpb24gb2Ygcm91dGVzIGZvciB0aGUgYXBwbGljYXRpb24sIHdoZXJlIGVhY2gga2V5IGlzIGEgcGF0aCBhbmQgZWFjaCB2YWx1ZSBhIGNsYXNzIHJlcHJlc2VudGluZyBhIG5ldyBwYWdlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uKCk6IFBhZ2U+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXMgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBwYXRoLlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudFBhdGggPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBwYWdlLlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHR5cGUge1BhZ2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSByb3V0ZS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZWdpc3RlclJvdXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgb2YgdGhlIHJvdXRlLiBJdCBzaG91bGQgc3RhcnQgd2l0aCAvXG4gICAgICogQHBhcmFtIHtjbGFzc30gcGFnZUNvbXBvbmVudCAgLSBBIGNsYXNzIHRoYXQgZXh0ZW5kcyB0aGUge1BhZ2V9IGNsYXNzXG4gICAgICovXG4gICAgcmVnaXN0ZXJSb3V0ZSh1cmwsIHBhZ2VDb21wb25lbnQsIHBhZ2VEYXRhKXtcbiAgICAgICAgdGhpcy5yb3V0ZXNbdXJsXSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBkYXRhOiBwYWdlRGF0YVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgUm91dGVyIEJ5IGFkZGluZyB0aGUgaGFzaGNoYW5nZSBldmVudCBsaXN0ZW5lclxuICAgICAqIGFuZCBoYW5kbGluZyB0aGUgaW5pdGlhbCByb3V0ZSBjaGFuZ2VcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBpbml0XG4gICAgICovXG4gICAgaW5pdCgpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2hhbmRsZVJvdXRlQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2hhbmRsZVJvdXRlQ2hhbmdlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHJvdXRlIGNoYW5nZSBieSBleHRyYWN0aW5nIHRoZSBwYXRoIGZyb20gdGhlXG4gICAgICogd2luZG93LmxvY2F0aW9uLmhhc2ggYW5kIHJlcGxhY2luZyB0aGUgY3VycmVudCBwYWdlIHdpdGggdGhlIG5ldyBwYWdlLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGhhbmRsZVJvdXRlQ2hhbmdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjaGFuZGxlUm91dGVDaGFuZ2UoKXtcbiAgICAgICAgLy8gSWYgdGhlIGhhcyBmcmFnbWVudCBpcyBlbXB0eSBvciBqdXN0IFwiI1wiLCBkZWZhdWx0IHRvIHRoZSBob21lIHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnJyB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyMnKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBwYXRoIGZyb20gdGhlIGhhc2ggZnJhZ21lbnRcbiAgICAgICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuXG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IHBhdGggaXMgZGlmZmVyZW50IGZyb20gdGhlIG5ldyBwYXRoXG4gICAgICAgIGlmIChwYXRoICE9PSB0aGlzLmN1cnJlbnRQYXRoKXtcbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBuZXcgcGF0aCBhcyB0aGUgY3VycmVudCBwYXRoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoID0gcGF0aDtcblxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICB0aGlzLiNyZXBsYWNlUGFnZShwYXRoKTtcblxuICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2U7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgcGFnZSB3aXRoIHRoZSBuZXcgcGFnZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIG9mIHRoZSBuZXcgcGFnZVxuICAgICAqL1xuICAgICNyZXBsYWNlUGFnZShwYXRoKSB7XG4gICAgICAgICAvLyBGcmVlIGFsbCByZXNvdXJjZXMgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZS5jbGVhclJlc291cmNlcygpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgcGFnZVxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy4jY3JlYXRlTmV3UGFnZShwYXRoKTtcblxuICAgICAgICAvLyBHZXQgdGhlIG1haW4gZWxlbWVudCBjaGlsZCBvZiB0aGUgYm9keSBlbGVtZW50XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IG1haW4nKTtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSBtYWluIGVsZW1lbnQgd2l0aCB0aGUgbmV3IHBhZ2U7XG4gICAgICAgIG1haW5FbGVtZW50LnJlcGxhY2VXaXRoKHRoaXMuY3VycmVudFBhZ2UuY3JlYXRlKCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIG9mIHRoZSBuZXcgcGFnZVxuICAgICAqIEByZXR1cm5zIHtQYWdlfSBUaGUgbmV3IHBhZ2VcbiAgICAgKi9cbiAgICAjY3JlYXRlTmV3UGFnZShwYXRoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5yb3V0ZXNbcGF0aF1bJ3BhZ2UnXSguLi50aGlzLnJvdXRlc1twYXRoXVsnZGF0YSddKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMucm91dGVzWycqJ11bJ3BhZ2UnXShwYXRoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgbGluayB0byBhbiBpbnRlcm5hbCBzaXRlIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFxuICogQGV4dGVuZHMge0Jhc2VDb21wb25lbnR9IC0gTGluazoge0BsaW5rIEJhc2VDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBIYXNoTGluayBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIFBhdGggb2YgdGhlIHBhZ2UuIEl0IHNob3VsZCBiZWdpbiB3aXRoIC9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IG9mIHRoZSBMaW5rIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdIHwgc3RyaW5nfSBbY2xhc3NOYW1lXSAtIE9wdGlvbmFsIGNsYXNzIG5hbWUocylcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2lkXSAtIE9wdGlvbmFsIElEXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGF0aCwgdGV4dCwgY2xhc3NOYW1lPVwiXCIsIGlkPVwiXCIpe1xuICAgICAgICAvLyBDYWxsIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcGFyZW50XG4gICAgICAgIHN1cGVyKCdhJywgY2xhc3NOYW1lLCBpZCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHBhdGggaXMgdmFsaWRcbiAgICAgICAgaWYgKCF0aGlzLiNpc1ZhbGlkUGF0aChwYXRoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGg6ICR7cGF0aH1gKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnRIYW5kbGVyIHRvIGhhbmRsZSBldmVudCBsaXN0ZW5lcnMgdXNlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIFxuICAgICAgICAgKiBAdHlwZSB7RXZlbnRIYW5kbGVyfVxuICAgICAgICAgKiBTZWUge0BsaW5rIEV2ZW50SGFuZGxlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHR5cGUge3N0cmluZ30gLSBUaGUgcGF0aCBvZiB0aGUgcGFnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB0aGUgdGV4dCBjb250ZW50IGFuZCBocmVmIG9mIHRoZSBhbmNob3IgZWxlbWVudFxuICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LmhyZWYgPSBgIyR7dGhpcy5wYXRofWBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbGluayBjbGljayBldmVudCBoYW5kbGVyIGFuZCByZXR1cm5zIHRoZSBjb21wb25lbnQgZWxlbWVudFxuICAgICAqIFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MQW5jaG9yRWxlbWVudH0gQW5jaG9yIEVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmNvbXBvbmVudEVsZW1lbnQsICdjbGljaycsIHRoaXMuI2hhbmRsZUNsaWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RWxlbWVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBkZXN0cm95XG4gICAgICovXG4gICAgZnJlZVJlc291cmNlcygpe1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBhdGggaXMgdmFsaWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIG9mIHRoZSBwYWdlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgcGF0aCBpcyB2YWxpZCwgZWxzZSBmYWxzZVxuICAgICAqL1xuICAgICNpc1ZhbGlkUGF0aChwYXRoKSB7XG4gICAgICAgIHJldHVybiAvXlxcL1thLXpBLVowLTlcXC8tXSokLy50ZXN0KHBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsaWNrIGV2ZW50IGNhbGxiYWNrIHRoYXQgY2hhbmdlcyB0aGUgaGFzaCBmcmFnbWVudCBhbmQgdHJpZ2dlcnMgYSByb3V0ZSBjaGFuZ2VcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBoYW5kbGVDbGlja1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGNsaWNrIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0aGlzLnBhdGg7XG4gICAgfTtcbn07IiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4vQmFzZUNvbXBvbmVudFwiO1xuXG4vKipcbiAqIEJhc2UgYWJzdHJhY3QgY2xhc3MgZm9yIGEgUGFnZVxuICogXG4gKiBAZXh0ZW5kcyB7QmFzZUNvbXBvbmVudH0gLSBMaW5rOiB7QGxpbmsgQmFzZUNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VDb21wb25lbnR7IFxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IFtjbGFzc05hbWVdIC0gVGhlIGNsYXNzIG5hbWUocykgb2YgdGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtpZF0gLSBUaGUgaWQgb2YgdGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lPVwiXCIsIGlkPVwiXCIpe1xuICAgICAgICAvLyBDYWxsIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcGFyZW50XG4gICAgICAgIHN1cGVyKCdtYWluJywgY2xhc3NOYW1lLCBpZCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNsYXNzIGlzIGJlaW5nIGluc3RhbnRpYXRlZCBkaXJlY3RseVxuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3RvciA9PT0gUGFnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zdGFudGlhdGUgYWJzdHJhY3QgY2xhc3MhXCIpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAgLyoqXG4gICAgICogQWJzdHJhY3QgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgUGFnZVxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZVxuICAgICAqIEBhYnN0cmFjdFxuICAgICovXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCFcIik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFic3RyYWN0IG1ldGhvZCB0byBjbGVhciByZXNvdXJjZXMgdXNlZCBieSBQYWdlXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2xlYXJSZXNvdXJjZXNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAqL1xuICAgIGNsZWFyUmVzb3VyY2VzKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCFcIik7XG4gICAgfTtcbn07IiwiLyoqXG4gKiBDbGFzcyB1c2VkIGZvciBtYW5hZ2luZyBFdmVudCBMaXN0ZW5lcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50SGFuZGxlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqIFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSB0byBzdG9yZSBldmVudCBsaXN0ZW5lcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogRWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICAgICAqICAtIGVsZW1lbnQ6IHtIVE1MRWxlbWVudH0gLSB0aGUgZWxlbWVudCB0aGF0IHRoZSBldmVudCBsaXN0ZW5lciBpcyBhdHRhY2hlZCB0b1xuICAgICAgICAgKiAgLSBldmVudDoge3N0cmluZ30gLSB0aGUgdHlwZSBvZiBldmVudFxuICAgICAgICAgKiAgLSBjYWxsYmFjazoge2Z1bmN0aW9ufSAtIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGV2ZW50XG4gICAgICAgICAqIFxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFuIGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBhZGRFdmVudExpc3RlbmVyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBUaGUgdHlwZSBvZiBldmVudFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gYW4gZWxlbWVudFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciBmcm9tXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIHR5cGUgb2YgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycy5maWx0ZXIoXG4gICAgICAgICAgICBsaXN0ZW5lciA9PiBsaXN0ZW5lci5lbGVtZW50ICE9PSBlbGVtZW50ICYmIGxpc3RlbmVyLmV2ZW50ICE9PSBldmVudCAmJiBsaXN0ZW5lci5jYWxsYmFjayAhPT0gY2FsbGJhY2tcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCByZWdpc3RlcmQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVtb3ZlQWxsTGlzdGVuZXJzXG4gICAgICovXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKCl7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgcmVnaXN0ZXJkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goZXZlbnRMaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyLmV2ZW50LCBldmVudExpc3RlbmVyLmNhbGxiYWNrKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIH07XG5cbn07XG5cbi8qKlxuICogQ2xhc3MgdXNlZCBmb3IgbWFuYWdpbmcgVGltZW91dHNcbiAqL1xuZXhwb3J0IGNsYXNzIFRpbWVvdXRIYW5kbGVyIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhbiBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRpbWVvdXRzLlxuICAgICAqIFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgdG8gc3RvcmUgdGltZW91dHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGltZW91dHMgPSBbXTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSB0aW1lb3V0XG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gYWRkVGltZW91dFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgdGltZW91dFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IC0gVGhlIHRpbWUsIGluIG1pbGlzZWNvbmRzLCB1bnRpbCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgSUQgb2YgdGhlIHRpbWVvdXRcbiAgICAgKi9cbiAgICBhZGRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lb3V0KXtcbiAgICAgICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0cy5wdXNoKGlkKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhIHRpbWVvdXRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZW1vdmVUaW1lb3V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXRJRCAtIFRoZSBJRCBvZiB0aGUgdGltZW91dCB0byBjbGVhclxuICAgICAqL1xuICAgIHJlbW92ZVRpbWVvdXQodGltZW91dElEKXtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVvdXQodGltZW91dElEKTtcbiAgICAgICAgdGhpcy50aW1lb3V0cyA9IHRoaXMudGltZW91dHMuZmlsdGVyKGlkID0+IGlkICE9PSB0aW1lb3V0SUQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHJlZ2lzdGVyZCB0aW1lb3V0c1xuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHJlbW92ZUFsbFRpbWVvdXRzXG4gICAgICovXG4gICAgcmVtb3ZlQWxsVGltZW91dHMoKXtcbiAgICAgICAgLy8gQ2xlYXIgYWxsIHJlZ2lzdGVyZWQgdGltZW91dHNcbiAgICAgICAgdGhpcy50aW1lb3V0cy5mb3JFYWNoKHRpbWVvdXQgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0cyA9IFtdO1xuICAgIH07XG59O1xuXG4vKipcbiAqIENsYXNzIHVzZWQgZm9yIG1hbmFnaW5nIEludGVydmFsc1xuICovXG5leHBvcnQgY2xhc3MgSW50ZXJ2YWxIYW5kbGVyIHtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGFuIGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgSW50ZXJ2YWxzLlxuICAgICAqIFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSB0byBzdG9yZSBpbnRlcnZhbHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBhbiBpbnRlcnZhbFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFkZEludGVydmFsXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBpbnRlcnZhbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbCAtIFRoZSB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIGJldHdlZW4gY2FsbHMgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBJRCBvZiB0aGUgdGltZW91dFxuICAgICAqL1xuICAgIGFkZEludGVydmFsKGNhbGxiYWNrLCBpbnRlcnZhbCl7XG4gICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIGludGVydmFsKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbHMucHVzaChpZCk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYW4gaW50ZXJ2YWxcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZW1vdmVJbnRlcnZhbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbElEIFRoZSBJRCBvZiB0aGUgaW50ZXJ2YWwgdG8gY2xlYXJcbiAgICAgKi9cbiAgICByZW1vdmVJbnRlcnZhbChpbnRlcnZhbElEKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbHMgPSB0aGlzLmludGVydmFscy5maWx0ZXIoaWQgPT4gaWQgIT09IGludGVydmFsSUQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHJlZ2lzdGVyZCBJbnRlcnZhbHNcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSByZW1vdmVBbGxJbnRlcnZhbHNcbiAgICAgKi9cbiAgICByZW1vdmVBbGxJbnRlcnZhbHMoKXtcbiAgICAgICAgLy8gQ2xlYXIgYWxsIHJlZ2lzdGVyZCBpbnRlcnZhbHNcbiAgICAgICAgdGhpcy5pbnRlcnZhbHMuZm9yRWFjaChpbnRlcnZhbCA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgICB9O1xufTsgIFxuXG4vKipcbiAqIENsYXNzIHVzZWQgZm9yIG1hbmFnaW5nIFByb21pc2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9taXNlSGFuZGxlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgUHJvbWlzZXMuXG4gICAgICogXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IHRvIHN0b3JlIHByb21pc2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIFxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb21pc2VzID0gW107XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcHJvbWlzZVxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGFkZFByb21pc2VcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBydW4gaW4gdGhlIHByb21pc2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBUaGUgY3JlYXRlZCBwcm9taXNlXG4gICAgICovXG4gICAgYWRkUHJvbWlzZShjYWxsYmFjayl7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShjYWxsYmFjayk7XG4gICAgICAgIHRoaXMucHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlamVjdCBhIHByb21pc2VcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZW1vdmVQcm9taXNlXG4gICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIC0gVGhlIHByb21pc2UgdG8gcmVqZWN0XG4gICAgICovXG4gICAgcmVtb3ZlUHJvbWlzZShwcm9taXNlKXtcbiAgICAgICAgcHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgdGhpcy5wcm9taXNlcyA9IHRoaXMucHJvbWlzZXMuZmlsdGVyKHAgPT4gcCAhPT0gcHJvbWlzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgcmVnaXN0ZXJkIHByb21pc2VzXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVtb3ZlQWxsUHJvbWlzZXNcbiAgICAgKi9cbiAgICByZW1vdmVBbGxQcm9taXNlcygpe1xuICAgICAgICAvLyBSZWplY3QgYWxsIHJlZ2lzdGVyZCBwcm9taXNlc1xuICAgICAgICB0aGlzLnByb21pc2VzLmZvckVhY2gocHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb21pc2VzID0gW107XG4gICAgfTtcbn07IiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uLy4uL2Jhc2UvQmFzZUNvbXBvbmVudFwiO1xuaW1wb3J0ICcuL2FydGljbGUuY3NzJztcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYW4gYXJ0aWNsZS5cbiAqIFxuICogXG4gKiBAZXhhbXBsZSAgXG4gKiAvLyBBbiBFeGFtcGxlIG9mIHRoZSBBcnRpY2xlIERhdGEgU3RydWN0dXJlXG4gKiB7XG4gKiAgdGl0bGU6ICdFeGFtcGxlIEFydGljbGUnLFxuICogIGNvbnRlbnQ6IFtcbiAqICAgIHtcbiAqICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gKiAgICAgIHRleHQ6ICdUaGlzIGlzIGFuIGV4YW1wbGUgcGFyYWdyYXBoLidcbiAqICAgIH0sXG4gKiAgICB7XG4gKiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAqICAgICAgdGl0bGU6ICdFeGFtcGxlIFNlY3Rpb24nLFxuICogICAgICBjb250ZW50OiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gKiAgICAgICAgICB0ZXh0OiAnVGhpcyBpcyBhbm90aGVyIGV4YW1wbGUgcGFyYWdyYXBoIHdpdGhpbiB0aGUgc2VjdGlvbi4nXG4gKiAgICAgICAgICBcImxpbmtzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImV4YW1wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJ3d3cuZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgIH1cbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgIHR5cGU6ICd1bm9yZGVyZWQtbGlzdCcsXG4gKiAgICAgICAgICBpdGVtczogW1xuICogICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgXCJ0ZXh0XCI6J0l0ZW0gMSdcbiAqICAgICAgICAgICAgfSxcbiAqICAgICAgICAgICAge1xuICogICAgICAgICAgICAgIFwidGV4dFwiOidJdGVtIDEnXG4gKiAgICAgICAgICAgICAgXCJsaW5rc1wiOltcbiAqICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiMVwiLFxuICogICAgICAgICAgICAgICAgICBcInVybFwiOiBcInd3dy5leGFtcGxlLmNvbVwiXG4gKiAgICAgICAgICAgICAgXVxuICogICAgICAgICAgICB9LFxuICogICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgXCJ0ZXh0XCI6J0l0ZW0gMSdcbiAqICAgICAgICAgICAgfSxcbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIF1cbiAqICAgIH1cbiAqICBdXG4gKiB9XG4gKiBcbiAqIEBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSBleHRlbmRzIEJhc2VDb21wb25lbnR7XG5cblxuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFydGljbGVEYXRhIC0gVGhlIGFydGljbGUncyBkYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFydGljbGVEYXRhLnRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBhcnRpY2xlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gYXJ0aWNsZURhdGEuY29udGVudCAtIFRoZSBhcnRpY2xlIGNvbnRlbnQuIENhbiBjb250YWluIGZ1cnRoZXIgbmVzdGVkIGNvbnRlbnQgb2JqZWN0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFydGljbGVEYXRhKXtcbiAgICAgICAgc3VwZXIoJ2FydGljbGUnLCAncGFnZS1hcnRpY2xlJyk7XG4gICAgICAgIHRoaXMuYXJ0aWNsZURhdGEgPSBhcnRpY2xlRGF0YTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgY29udGVudCBvZiB0aGUgYXJ0aWNsZSBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSBhcnRpY2xlIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgdGhpcy4jY3JlYXRlQXJ0aWNsZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRFbGVtZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBhcnRpY2xlIGVsZW1lbnQgYW5kIGl0cyBjb250ZW50LlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZUFydGljbGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGFydGljbGUgZWxlbWVudFxuICAgICAqL1xuICAgICNjcmVhdGVBcnRpY2xlKCkge1xuICAgICAgICAvLyBBIGNvbnRhaW5lciBkaXZcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIGFydGljbGVcbiAgICAgICAgdGhpcy4jY3JlYXRlQ29udGFpbmVyQ29udGVudCh0aGlzLmFydGljbGVEYXRhLCBjb250YWluZXIsIDEpXG4gICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2VjdGlvbiBlbGVtZW50IGFuZCBpdHMgY29udGVudC5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVTZWN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBzZWN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQudHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjb250ZW50LCBzaG91bGQgYmUgXCJzZWN0aW9uXCJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnQudGl0bGVdIC0gVGhlIHRpdGxlIG9mIHRoZSBzZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gY29udGVudC5jb250ZW50IC0gVGhlIGNvbnRlbnQgb2YgdGhlIHNlY3Rpb24sIGNhbiBjb250YWluIGZ1cnRoZXIgbmVzdGVkIGNvbnRlbnQgb2JqZWN0c1xuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIHNlY3Rpb24gZWxlbWVudFxuICAgICAqL1xuICAgICNjcmVhdGVTZWN0aW9uKGNvbnRlbnQpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlY3Rpb24gZWxlbWVudFxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IG9mIHRoZSBzZWN0aW9uXG4gICAgICAgIHRoaXMuI2NyZWF0ZUNvbnRhaW5lckNvbnRlbnQoY29udGVudCwgc2VjdGlvbiwgMik7XG5cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGNvbnRlbnQgb2YgYSBjb250YWluZXIgKGFydGljbGUgb3Igc2VjdGlvbikuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRlbnQgLSBUaGUgY29udGVudCBvZiB0aGUgY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50LnR5cGVdIC0gVGhlIHR5cGUgb2YgdGhlIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnQudGl0bGVdIC0gVGhlIHRpdGxlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gY29udGVudC5jb250ZW50IC0gVGhlIGNvbnRlbnQsIGNhbiBjb250YWluIGZ1cnRoZXIgbmVzdGVkIGNvbnRlbnQgb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCAtIFRoZSBwYXJlbnQgZWxlbWVudCAoYXJ0aWNsZSBvciBzZWN0aW9uKVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb250YWluZXJUeXBlIC0gVGhlIHR5cGUgb2YgdGhlIGNvbnRhaW5lciAoMSBmb3IgYXJ0aWNsZSwgMiBmb3Igc2VjdGlvbilcbiAgICAgKi9cbiAgICAjY3JlYXRlQ29udGFpbmVyQ29udGVudChjb250ZW50LCBwYXJlbnQsIGNvbnRhaW5lclR5cGUpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7Y29udGFpbmVyVHlwZSArIDF9YCk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29udGVudC50aXRsZTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnRcbiAgICAgICAgY29udGVudC5jb250ZW50LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLiNoYW5kbGVDb250ZW50VHlwZShpdGVtKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250ZW50RWwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgSFRNTCBFbGVtZW50IGZvciB0aGUgY29ycmVzcG9uZGluZyBjb250ZW50IHR5cGUuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gaGFuZGxlQ29udGVudFR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50IC0gVGhlIGNvbnRlbnQgdG8gaGFuZGxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQudHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjb250ZW50LCBzaG91bGQgYmUgJ3BhcmFncmFwaCcsICdzZWN0aW9uJyBvciAndW5vcmRlcmVkLWxpc3QnXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBIVE1MIEVsZW1lbnQgd2l0aCBpdHMgY29udGVudC5cbiAgICAgKi9cbiAgICAjaGFuZGxlQ29udGVudFR5cGUoY29udGVudCl7XG4gICAgICAgIHN3aXRjaChjb250ZW50LnR5cGUpe1xuICAgICAgICAgICAgY2FzZSAncGFyYWdyYXBoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jY3JlYXRlUGFyYWdyYXBoKGNvbnRlbnQpO1xuICAgICAgICAgICAgY2FzZSAnc2VjdGlvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVNlY3Rpb24oY29udGVudCk7XG4gICAgICAgICAgICBjYXNlICd1bm9yZGVyZWQtbGlzdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVVub3JkZXJlZExpc3QoY29udGVudCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb250ZW50IHR5cGU6ICR7Y29udGVudC50eXBlfWApO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGFyYWdyYXBoIGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVQYXJhZ3JhcGhcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50IC0gVGhlIGNvbnRlbnQgb2YgdGhlIHBhcmFncmFwaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50LnR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgY29udGVudCwgc2hvdWxkIGJlIFwicGFyYWdyYXBoXCIgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQudGV4dCAtIFRoZSB0ZXh0IG9mIHRoZSBwYXJhZ3JhcGhcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBbY29udGVudC5saW5rc10gLSBPYmplY3QgY29udGFpbmluZyBwb3NzaWJsZSBsaW5rcyBpbiB0aGUgcGFyYWdyYXBoXG4gICAgICogQHJldHVybnMge0hUTUxQYXJhZ3JhcGhFbGVtZW50fSBUaGUgY3JlYXRlZCBwYXJhZ3JhcGggZWxlbWVudFxuICAgICAqL1xuICAgICNjcmVhdGVQYXJhZ3JhcGgoY29udGVudCl7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gY29udGVudC50ZXh0O1xuICAgICAgICBpZiAoY29udGVudC5saW5rcyl7XG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVBbmNob3JMaW5rKHBhcmFncmFwaCwgY29udGVudC5saW5rcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwYXJhZ3JhcGg7XG4gICAgfTtcblxuICAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHVub3JkZXJlZCBsaXN0IGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVVbm9yZGVyZWRMaXN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGVudCAtIFRoZSBjb250ZW50IG9mIHRoZSBsaXN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQudHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBjb250ZW50LCBzaG91bGQgYmUgXCJ1bm9yZGVyZWQtbGlzdFwiXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gY29udGVudC5pdGVtcyAtIFRoZSBpdGVtcyBvZiB0aGUgbGlzdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50Lml0ZW1zLnRleHQgLSBUaGUgdGV4dCBvZiBhIGxpc3QgaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IFtjb250ZW50Lml0ZW1zLmxpbmtzXSAtIFBvc3NpYmxlIGxpbmtzIGluc2lkZSB0aGUgbGlzdCBpdGVtXG4gICAgICogQHJldHVybnMge0hUTUxVTGlzdEVsZW1lbnR9IFRoZSBjcmVhdGVkIHVub3JkZXJlZCBsaXN0IGVsZW1lbnRcbiAgICAgKi9cbiAgICAjY3JlYXRlVW5vcmRlcmVkTGlzdChjb250ZW50KXtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnRlbnQuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuICAgICAgICAgICAgaWYgKGl0ZW0ubGlua3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuI2NyZWF0ZUFuY2hvckxpbmsobGlzdEl0ZW0sIGl0ZW0ubGlua3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBsaW5rIGZvciBhIHRleHQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlQW5jaG9yTGlua1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBlbGVtZW50IHRvIGluc2VydCBhIGxpbmsgdG9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbGlua3MgLSBUaGUgY29udGVudCBvZiB0aGUgbGluayBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmtzLnRleHQgLSBUaGUgdGV4dCB0byBhZGQgdGhlIGxpbmtcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGlua3MudXJsIC0gVGhlIHVybCBvZiB0aGUgbGlua1xuICAgICAqL1xuICAgICNjcmVhdGVBbmNob3JMaW5rKHBhcmVudCwgbGlua3Mpe1xuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlua0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGlua0VsLnRleHRDb250ZW50ID0gbGluay50ZXh0O1xuICAgICAgICAgICAgbGlua0VsLmhyZWYgPSBsaW5rLnVybDtcbiAgICAgICAgICAgIGxpbmtFbC50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICAgICAgcGFyZW50LmlubmVySFRNTCA9IHBhcmVudC50ZXh0Q29udGVudC5yZXBsYWNlKGxpbmsudGV4dCwgbGlua0VsLm91dGVySFRNTCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfTtcblxufTsiLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vYmFzZS9CYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2ljb25zL2dpdGh1Yi1pY29uLnBuZ1wiO1xuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgRm9vdGVyXG4gKiBcbiAqIEBleHRlbmRzIHtCYXNlQ29tcG9uZW50fSAtIExpbms6IHtAbGluayBCYXNlQ29tcG9uZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50e1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIENhbGwgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBwYXJlbnRcbiAgICAgICAgc3VwZXIoJ2Zvb3RlcicpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBjb250ZW50IG9mIHRoZSBmb290ZXIgZWxlbWVudCBhbmQgcmV0dXJucyB0aGUgZm9vdGVyIGVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBmb290ZXIgZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZSgpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIGZvb3RlclxuICAgICAgICB0aGlzLiNjcmVhdGVGb290ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgY29udGVudCBvZiB0aGUgZm9vdGVyIGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVGb290ZXJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICNjcmVhdGVGb290ZXIoKXtcbiAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNtYWxsPkNvcHlyaWdodCAmY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LCBCYXRvdWNoYW4gT21lclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYmF0b29tZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb25cIiBzcmM9XCIke2dpdEh1Ykljb259XCIgYWx0PVwiR2l0SHViIE1hcmtcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgfTtcbn0iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vYmFzZS9CYXNlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9SZXNvdXJjZUhhbmRsZXJcIjtcbmltcG9ydCBcIi4vaGVhZGVyLmNzc1wiO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgSGVhZGVyXG4gKiBcbiAqIEBleHRlbmRzIHtCYXNlQ29tcG9uZW50fSAtIExpbms6IHtAbGluayBCYXNlQ29tcG9uZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50e1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIENhbGwgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBwYXJlbnRcbiAgICAgICAgc3VwZXIoJ2hlYWRlcicpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBIYW5kbGVyIHRvIGhhbmRsZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICogXG4gICAgICAgICAqIEB0eXBlIHtFdmVudEhhbmRsZXJ9IC0gc2VlIHtAbGluayBFdmVudEhhbmRsZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgY29udGVudCBvZiB0aGUgaGVhZGVyIGVsZW1lbnQgYW5kIHJldHVybnMgdGhlIGhlYWRlciBlbGVtZW50LlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgaGVhZGVyIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IG9mIHRoZSBoZWFkZXJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnaGVhZGVyX19jb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVCdXJnZXJNZW51KCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVIZWFkZXJUaXRsZSgpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGl0bGUgZm9yIHRoZSBoZWFkZXJcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVIZWFkZXJUaXRsZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI2NyZWF0ZUhlYWRlclRpdGxlKCl7XG4gICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fdGl0bGUnKTtcbiAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiU2VhcmNoIFRlY2huaXF1ZXMgaW4gQUlcIjtcblxuICAgICAgIHJldHVybiBoZWFkZXJUaXRsZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEJ1cmdlciBtbWVudSB0byB0b2dnbGUgb24gYW5kIG9mZiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVCdXJnZXJNZW51XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjY3JlYXRlQnVyZ2VyTWVudSgpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG1lbnUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19idXJnZXItbWVudScpO1xuXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgYnVyZ2VyIGljb25cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDM7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J1cmdlci1iYXInKTtcbiAgICAgICAgICAgIGJ1cmdlckJ0bi5hcHBlbmRDaGlsZChiYXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihidXJnZXJCdG4sICdjbGljaycsIHRoaXMuI2hhbmRsZUJ1cmdlck1lbnVDbGljayk7XG5cbiAgICAgICAgcmV0dXJuIGJ1cmdlckJ0bjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZm9yIHRoZSBjbGljayBldmVudCBvbiB0aGUgYnVyZ2VyIG1lbnVcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBoYW5kbGVCdXJnZXJNZW51Q2xpY2tcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBUaGUgY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICAjaGFuZGxlQnVyZ2VyTWVudUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IG5hdicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH07XG59OyIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi8uLi9iYXNlL0Jhc2VDb21wb25lbnRcIjtcbmltcG9ydCB7IEhhc2hMaW5rIH0gZnJvbSBcIi4uLy4uL2Jhc2UvSGFzaFJvdXRlclwiO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvUmVzb3VyY2VIYW5kbGVyXCI7XG5pbXBvcnQgeyBpbmZvcm1lZFNlYXJjaExpbmtzLCB1bmluZm9ybWVkU2VhcmNoTGlua3MsIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvbmF2LmNvbmZpZ1wiO1xuaW1wb3J0ICcuL25hdmJhci5jc3MnO1xuXG4vKipcbiAqIENsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgbmF2aWdhdGlvbiBiYXJcbiAqIFxuICogQGV4dGVuZHMge0Jhc2VDb21wb25lbnR9IC0gTGluazoge0BsaW5rIEJhc2VDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIEJhc2VDb21wb25lbnR7XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gQ2FsbCB0aGUgY29uc3RydWN0b3Igb2YgdGhlIHBhcmVudFxuICAgICAgICBzdXBlcignbmF2Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IEhhbmRsZXIgdG8gaGFuZGxlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHR5cGUge0V2ZW50SGFuZGxlcn0gLSBzZWUge0BsaW5rIEV2ZW50SGFuZGxlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBjb250ZW50IG9mIHRoZSBuYXYgZWxlbWVudCBhbmQgcmV0dXJucyB0aGUgbmF2IGVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBuYXYgZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZSgpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIG5hdmlnYXRpb24gYmFyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVOYXZDbG9zZUJ1dHRvbigpLFxuICAgICAgICAgICAgdGhpcy4jY3JlYXRlTmF2TWFpbkxpc3QoKSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RWxlbWVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1dHRvbiBmb3IgY2xvc2luZyB0aGUgTmF2aWdhdGlvbiBCYXJcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVOYXZDbG9zZUJ1dHRvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50fSBCdXR0b24gRWxlbWVudFxuICAgICAqL1xuICAgICNjcmVhdGVOYXZDbG9zZUJ1dHRvbigpe1xuICAgICAgICBjb25zdCBuYXZDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuYXZDbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2Nsb3NlLWJ0bicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjbG9zZSBidG4gaWNvbiBcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPD0xOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgYmFyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgYmFyU3Bhbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2Nsb3NlLWJ0bi1iYXInKTtcbiAgICAgICAgICAgIG5hdkNsb3NlQnRuLmFwcGVuZENoaWxkKGJhclNwYW4pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFuZCBhZGQgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobmF2Q2xvc2VCdG4sICdjbGljaycsIHRoaXMuI2hhbmRsZU5hdkNsb3NlQ2xpY2spXG5cbiAgICAgICAgcmV0dXJuIG5hdkNsb3NlQnRuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBtYWluIGxpc3QgZm9yIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZU5hdk1haW5MaXN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7SFRNTFVMaXN0RWxlbWVudH0gdWwgZWxlbWVudFxuICAgICAqL1xuICAgICNjcmVhdGVOYXZNYWluTGlzdCgpe1xuICAgICAgICBjb25zdCBtYWluTmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIG1haW5OYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fbWFpbi1saXN0Jyk7XG4gICAgICAgIG1haW5OYXZMaXN0LmFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuI2NyZWF0ZU5hdkhvbWVMaW5rKCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVOYXZTZXBhcmF0b3JJdGVtKCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVOYXZTdWJMaXN0KCdVbmluZm9ybWVkIFNlYXJjaCcsIHVuaW5mb3JtZWRTZWFyY2hMaW5rcyksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVOYXZTZXBhcmF0b3JJdGVtKCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVOYXZTdWJMaXN0KCdJbmZvcm1lZCBTZWFyY2gnLCBpbmZvcm1lZFNlYXJjaExpbmtzKSxcbiAgICAgICAgICAgIHRoaXMuI2NyZWF0ZU5hdlNlcGFyYXRvckl0ZW0oKSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG1haW5OYXZMaXN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBIb21lIGxpbmtcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVOYXZIb21lTGlua1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge0hUTUxMSUVsZW1lbnR9IGxpIGVsZW1lbnRcbiAgICAgKi9cbiAgICAjY3JlYXRlTmF2SG9tZUxpbmsoKXtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2l0ZW0tbGluaycpO1xuXG4gICAgICAgIC8vQ3JlYXRlIHRoZSBzdWJsaXN0IGhlYWRpbmdcbiAgICAgICAgY29uc3QgaG9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBob21lSGVhZGluZy5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2hlYWRpbmcnKTtcblxuICAgICAgICAvLyBDcmVhdGUgTGlua1xuICAgICAgICBjb25zdCBoYXNoTGluayA9IG5ldyBIYXNoTGluaygnLycsICdIb21lJywgJ25hdmJhcl9fbGluay1ob21lJyk7XG4gICAgICAgIGNvbnN0IGhhc2hMaW5rRWxlbWVudCA9IGhhc2hMaW5rLmNyZWF0ZSgpO1xuICAgICAgICAvLyBSZW1vdmUgZGVmYXVsdCBldmVudCBsaXN0ZW5lclxuICAgICAgICBoYXNoTGluay5mcmVlUmVzb3VyY2VzKCk7XG4gICAgICAgIC8vIEFkZCBuZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihoYXNoTGlua0VsZW1lbnQsICdjbGljaycsIHRoaXMuI2hhbmRsZU5hdkxpbmtDbGljayk7XG5cbiAgICAgICAgaG9tZUhlYWRpbmcuYXBwZW5kQ2hpbGQoaGFzaExpbmtFbGVtZW50KTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaG9tZUhlYWRpbmcpO1xuXG4gICAgICAgIHJldHVybiBsaXN0SXRlbTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN1Ymxpc3Qgb2YgbmF2aWdhdGlvbiBsaW5rc1xuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZU5hdlN1Ykxpc3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgc3VibGlzdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGxpbmtEYXRhIC0gVGhlIG5hdmlnYXRpb24gbGlua3Mgb2YgdGhlIHN1Ymxpc3RcbiAgICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH0gLSBsaSBlbGVtZW50XG4gICAgICovXG4gICAgI2NyZWF0ZU5hdlN1Ykxpc3QodGl0bGUsIGxpbmtEYXRhKXtcbiAgICAgICAgY29uc3QgbWFpbkxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbWFpbkxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9faXRlbS1saXN0Jyk7XG5cbiAgICAgICAgLy9DcmVhdGUgdGhlIHN1Ymxpc3QgaGVhZGluZ1xuICAgICAgICBjb25zdCBzdWJMaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHN1Ykxpc3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9faGVhZGluZycpO1xuICAgICAgICBzdWJMaXN0SGVhZGluZy5pbm5lckhUTUwgPSB0aXRsZTtcblxuXG4gICAgICAgIC8vQ3JlYXRlIHRoZSBzdWJsaXN0XG4gICAgICAgIGNvbnN0IHN1Yk5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBzdWJOYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc3VibGlzdCcpXG4gICAgICAgIGxpbmtEYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5rSXRlbSA9IHRoaXMuI2NyZWF0ZU5hdkxpbmsoZWxlbWVudC5wYXRoLCBlbGVtZW50Lm5hbWUpO1xuICAgICAgICAgICAgc3ViTmF2TGlzdC5hcHBlbmRDaGlsZChsaW5rSXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1haW5MaXN0SXRlbS5hcHBlbmQoc3ViTGlzdEhlYWRpbmcsIHN1Yk5hdkxpc3QpO1xuICAgICAgICByZXR1cm4gbWFpbkxpc3RJdGVtO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmF2aWdhdGlvbiBsaW5rXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlTmF2TGlua1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCBvZiB0aGUgTGlua1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIExpbmtcbiAgICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH0gLSBsaSBlbGVtZW50XG4gICAgICovXG4gICAgI2NyZWF0ZU5hdkxpbmsocGF0aCwgbmFtZSl7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19pdGVtLWxpbmsnKVxuICAgICAgICAvLyBDcmVhdGUgTGlua1xuICAgICAgICBjb25zdCBoYXNoTGluayA9IG5ldyBIYXNoTGluayhwYXRoLCBuYW1lLCAnbmF2YmFyX19saW5rJyk7XG4gICAgICAgIGNvbnN0IGhhc2hMaW5rRWxlbWVudCA9IGhhc2hMaW5rLmNyZWF0ZSgpO1xuICAgICAgICAvLyBSZW1vdmUgZGVmYXVsdCBldmVudCBsaXN0ZW5lclxuICAgICAgICBoYXNoTGluay5mcmVlUmVzb3VyY2VzKCk7XG4gICAgICAgIC8vIEFkZCBuZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihoYXNoTGlua0VsZW1lbnQsICdjbGljaycsIHRoaXMuI2hhbmRsZU5hdkxpbmtDbGljaylcbiAgICAgICAgXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGhhc2hMaW5rRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBsaXN0SXRlbTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpc3QgaXRlbSB3aXRoIGEgc3BhbiBlbGVtZW50IHRvIGRyYXcgdmVydGljYWwgc2VwYXJhdG9yIGxpbmVzLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZU5hdlNlcGFyYXRvckl0ZW1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fSAtIGxpIGVsZW1lbnRcbiAgICAgKi9cbiAgICAjY3JlYXRlTmF2U2VwYXJhdG9ySXRlbSgpe1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9faXRlbS1zZXBhcmF0b3InKTtcbiAgICAgICAgIC8vIHNwYW4gZWxlbWVudCB0byBkcmF3IGEgdmVydGljYWwgc2VwYXJhdG9yIGxpbmVcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyBcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IEhhbmRsZXIgZm9yIHRoZSB0aGUgbmF2aWdhdGlvbiBjbG9zZSBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBoYW5kbGVOYXZDbG9zZUNsaWNrXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjaGFuZGxlTmF2Q2xvc2VDbGljayA9ICgpID0+IHtcbiAgICAgICAgLy8gQ2xvc2UgdGhlIG5hdmlnYXRpb24gYmFyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBuYXYnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBIYW5kbGVyIGZvciB0aGUgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBoYW5kbGVOYXZMaW5rQ2xpY2tcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgICNoYW5kbGVOYXZMaW5rQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcm91dGVyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgIC8vIENsb3NlIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gbmF2JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfTtcbn07IiwiLyoqXG4gKiBUaGlzIGZpbGUgZXhwb3J0cyBhcnJheXMgb2YgbmF2aWdhdGlvbiBpdGVtcy5cbiAqIEVhY2ggaXRlbSBpbiBhbiBhcnJheSByZXByZXNlbnRzIGEgbmF2aWdhdGlvbiBpdGVtIHdpdGggYSBuYW1lIGFuZCBhIHBhdGguXG4gKiBcbiAqIEBtb2R1bGUgY29uZmlncy9uYXYuY29uZmlnXG4qL1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IHVuaW5mb3JtZWRTZWFyY2hMaW5rIC0gQW4gYXJyYXkgb2YgbmF2aWdhdGlvbiBpdGVtcyBmb3IgdW5pbmZvcm1lZCBzZWFyY2ggYWxnb3JpdGhtc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHVuaW5mb3JtZWRTZWFyY2hMaW5rc1tdLm5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgbmF2aWdhdGlvbiBpdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdW5pbmZvcm1lZFNlYXJjaExpbmtzW10ucGF0aCAtIFRoZSBwYXRoIG9mIHRoZSBuYXZpZ2F0aW9uIGl0ZW1cbiAqL1xuZXhwb3J0IGNvbnN0IHVuaW5mb3JtZWRTZWFyY2hMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCcmVhZHRoLUZpcnN0IFNlYXJjaCcsXG4gICAgICAgIHBhdGg6ICcvYnJlYWR0aC1maXJzdC1zZWFyY2gnXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgbmFtZTogJ0RlcHRoLUZpcnN0IFNlYXJjaCcsXG4gICAgICAgIHBhdGg6ICcvZGVwdGgtZmlyc3Qtc2VhcmNoJ1xuICAgIH0sXG5dO1xuXG5cbi8qKlxuICogQHByb3BlcnR5IHtBcnJheX0gaW5mb3JtZWRTZWFyY2hMaW5rcyAtIEFuIGFycmF5IG9mIG5hdmlnYXRpb24gaXRlbXMgZm9yIGluZm9ybWVkIHNlYXJjaCBhbGdvcml0aG1zIFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGluZm9ybWVkU2VhcmNoTGlua3NbXS5uYW1lIC0gVGhlIG5hbWUgb2YgdGhlIG5hdmlnYXRpb24gaXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGluZm9ybWVkU2VhcmNoTGlua3NbXS5wYXRoIC0gVGhlIHBhdGggb2YgdGhlIG5hdmlnYXRpb24gaXRlbVxuICovXG5leHBvcnQgY29uc3QgaW5mb3JtZWRTZWFyY2hMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRGlqa3N0cmEncyBBbGdvcml0aG1cIixcbiAgICAgICAgcGF0aDogJy9kaWprc3RyYS1hbGdvcml0aG0nXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgbmFtZTogYEE8c3VwPio8L3N1cD4gU2VhcmNoYCxcbiAgICAgICAgcGF0aDogXCIvYS1zdGFydC1zZWFyY2hcIlxuICAgIH0sXG5dOyIsIi8qKlxuICogVGhpcyBmaWxlIGV4cG9ydHMgYW4gYXJyYXkgb2Ygcm91dGUgY29uZmlndXJhdGlvbnMuXG4gKiBFYWNoIHJvdXRlIGNvbmZpZ3VyYXRpb24gY29udGFpbnMgdGhlIHBhdGggb2YgdGhlIHJvdXRlIGFuZCB0aGUgcGFnZSBjb21wb25lbnQgYXNzb2NpYXRlZCB3aXRoIHRoYXQgcm91dGUuXG4gKiBcbiAqIEBtb2R1bGUgY29uZmlncy9yb3V0ZS5jb25maWdcbiovXG5cbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSBcIi4uL3BhZ2VzLzQwNHBhZ2UvTm90Rm91bmRQYWdlXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2hvbWUvSG9tZVBhZ2VcIjtcbmltcG9ydCBNYXplVmlzdWFsaXplclBhZ2UgZnJvbSBcIi4uL3BhZ2VzL21hemUvTWF6ZVBhZ2VcIjtcbmltcG9ydCBob21lQXJ0aWNsZURhdGEgZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lLmpzb24nO1xuaW1wb3J0IGFydGljbGVCRlMgZnJvbSBcIi4uL3BhZ2VzL21hemUvZGF0YS9hcnRpY2xlQkZTLmpzb25cIjtcbmltcG9ydCBhcnRpY2xlREZTIGZyb20gXCIuLi9wYWdlcy9tYXplL2RhdGEvYXJ0aWNsZURGUy5qc29uXCI7XG5pbXBvcnQgYXJ0aWNsZURpamtzdHJhIGZyb20gXCIuLi9wYWdlcy9tYXplL2RhdGEvYXJ0aWNsZURpamtzdHJhLmpzb25cIjtcbmltcG9ydCBhcnRpY2xlQXN0YXIgZnJvbSBcIi4uL3BhZ2VzL21hemUvZGF0YS9hcnRpY2xlQXN0YXIuanNvblwiO1xuXG5cblxuLyoqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJvcGVydHkge09iamVjdH0gcGF0aCAtIFRoZSBwYXRoIG9mIHRoZSByb3V0ZVxuICogQHByb3BlcnR5IHtQYWdlfSBwYWdlIC0gVGhlIFBhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXRoXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YTogVGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYWdlXG4gKi9cbmNvbnN0IHJvdXRlQ29uZmlnID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBwYWdlOiBIb21lUGFnZSxcbiAgICAgICAgZGF0YTogW2hvbWVBcnRpY2xlRGF0YV1cbiAgICB9LFxuXG4gICAge1xuICAgICAgICBwYXRoOiAnL2JyZWFkdGgtZmlyc3Qtc2VhcmNoJyxcbiAgICAgICAgcGFnZTogTWF6ZVZpc3VhbGl6ZXJQYWdlLFxuICAgICAgICBkYXRhOiBbYXJ0aWNsZUJGU11cbiAgICB9LFxuXG4gICAge1xuICAgICAgICBwYXRoOiAnL2RlcHRoLWZpcnN0LXNlYXJjaCcsXG4gICAgICAgIHBhZ2U6IE1hemVWaXN1YWxpemVyUGFnZSxcbiAgICAgICAgZGF0YTogW2FydGljbGVERlNdXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgcGF0aDogJy9kaWprc3RyYS1hbGdvcml0aG0nLFxuICAgICAgICBwYWdlOiBNYXplVmlzdWFsaXplclBhZ2UsXG4gICAgICAgIGRhdGE6IFthcnRpY2xlRGlqa3N0cmFdXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgcGF0aDogJy9hLXN0YXJ0LXNlYXJjaCcsXG4gICAgICAgIHBhZ2U6IE1hemVWaXN1YWxpemVyUGFnZSxcbiAgICAgICAgZGF0YTogW2FydGljbGVBc3Rhcl1cbiAgICB9LFxuXG4gICAge1xuICAgICAgICBwYXRoOiAnKicsXG4gICAgICAgIHBhZ2U6IE5vdEZvdW5kUGFnZSxcbiAgICAgICAgZGF0YTogW11cbiAgICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZUNvbmZpZzsiLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi4vLi4vYmFzZS9QYWdlXCI7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIsIEludGVydmFsSGFuZGxlciB9IGZyb20gXCIuLi8uLi9iYXNlL1Jlc291cmNlSGFuZGxlclwiO1xuaW1wb3J0ICcuL25vdGZvdW5kLmNzcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSA0MDQgZXJyb3IgcGFnZVxuICpcbiAqIEBleHRlbmRzIFBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRQYWdlIGV4dGVuZHMgUGFnZXtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5vdEZvdW5kUGFnZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3IgLSBUaGUgdXJsIHRoYXQgd2FzIHRyaWVkIHRvIGFjY2Vzc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVycm9yKXtcbiAgICAgICAgc3VwZXIoJ25vdGZvdW5kLXBhZ2UnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGVycm9yIC0gVGhlIHVybCB0aGF0IHdhcyB0cmllZCB0byBhY2Nlc3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvclxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJvcGVydHkge0V2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIC0gVGhlIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7SW50ZXJ2YWxIYW5kbGVyfSBpbnRlcnZhbEhhbmRsZXIgLSBUaGUgaW50ZXJ2YWwgaGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnRlcnZhbEhhbmRsZXIgPSBuZXcgSW50ZXJ2YWxIYW5kbGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWRpcmVjdENvdW50ZG93biAtIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBsZWZ0IGJlZm9yZSByZWRpcmVjdGluZyB0byBob21lIHBhZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVkaXJlY3RDb3VudGRvd24gPSAxMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGludGVydmFsSWQgLSBUaGUgSUQgb2YgdGhlIHJlZGlyZWN0IGludGVydmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT40MDQgLSBQYWdlIE5vdCBGb3VuZDwvaDE+XG4gICAgICAgICAgICA8cD5XZSBjb3VsZG4ndCBmaW5kIHRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yLiBJdCdzIGxpa2UgdGhlIHNlYXJjaCB0cmVlIGlzIHRvbyBjb21wbGljYXRlZCBmb3Igb3VyIHNlYXJjaCBhbGdvcml0aG1zLjwvcD5cbiAgICAgICAgICAgIDxwPiBZb3Ugd2lsbCBiZSByZWRpcmVjdCB0byBob21lIHBhZ2UgaW4gPHNwYW4gaWQ9XCJyZWRpcmVjdC1jb3VudGRvd25cIj4xMDwvc3Bhbj4gc2Vjb25kcy48L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVkaXJlY3QtYnV0dG9uIGJ0biBsZ1wiPlJldHVybiB0byBIb21lPC9idXR0b24+XG4gICAgICAgICAgICA8c21hbGw+VGhlIFVSTCB5b3UgdHJpZWQgdG8gYWNjZXNzIHdhczogPGVtPiR7dGhpcy5lcnJvcn08L2VtPjwvc21hbGw+XG4gICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHJlZGlyZWN0IGJ1dHRvblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkaXJlY3QtYnV0dG9uXCIpLFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy4jaGFuZGxlUmVkaXJlY3RDbGlja1xuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGludGVydmFsIHRvIGhhbmRsZSByZWRpcmVjdCBjb3VudGRvd25cbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gdGhpcy5pbnRlcnZhbEhhbmRsZXIuYWRkSW50ZXJ2YWwodGhpcy4jaGFuZGxlUmVkaXJlY3RJbnRlcnZhbCwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHJlc291cmNlc1xuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2xlYXJSZXNvdXJjZXNcbiAgICAgKi9cbiAgICBjbGVhclJlc291cmNlcygpe1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbEhhbmRsZXIucmVtb3ZlQWxsSW50ZXJ2YWxzKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgcmVkaXJlY3QgYnV0dG9uIGNsaWNrIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBoYW5kbGVSZWRpcmVjdENsaWNrXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjaGFuZGxlUmVkaXJlY3RDbGljayA9ICgpID0+IHtcbiAgICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjL1wiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHJlZGlyZWN0IGludGVydmFsXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBoYW5kbGVSZWRpcmVjdEludGVydmFsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjaGFuZGxlUmVkaXJlY3RJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdENvdW50ZG93bi0tO1xuICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWRpcmVjdC1jb3VudGRvd25cIikuaW5uZXJIVE1MID0gdGhpcy5yZWRpcmVjdENvdW50ZG93bjtcbiAgICAgICAgaWYgKHRoaXMucmVkaXJlY3RDb3VudGRvd24gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxIYW5kbGVyLnJlbW92ZUludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiIy9cIjtcbiAgICAgICAgfTtcbiAgICB9O1xufSIsImltcG9ydCBQYWdlIGZyb20gXCIuLi8uLi9iYXNlL1BhZ2VcIjtcbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FydGljbGUvQXJ0aWNsZVwiO1xuaW1wb3J0IFwiLi9ob21lLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFBhZ2V7XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJ0aWNsZURhdGEpe1xuICAgICAgICBzdXBlcignaG9tZXBhZ2UnKTtcbiAgICAgICAgdGhpcy5hcnRpY2xlRGF0YSA9IGFydGljbGVEYXRhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBjb250ZW50IG9mIHRoZSBob21lIHBhZ2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVIZXJvU2VjdGlvbigpLFxuICAgICAgICAgICAgbmV3IEFydGljbGUodGhpcy5hcnRpY2xlRGF0YSkuY3JlYXRlKCksXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIGhvbWUgcGFnZVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY2xlYXJSZXNvdXJjZXNcbiAgICAgKi9cbiAgICBjbGVhclJlc291cmNlcygpe1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBoZXJvIHNlY3Rpb24gZm9yIHRoZSBIb21lIFBhZ2VcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZUhlcm9TZWN0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGhlcm8gc2VjdGlvbiBlbGVtZW50XG4gICAgICovXG4gICAgI2NyZWF0ZUhlcm9TZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2hlcm8tc2VjdGlvbicpO1xuICAgICAgICBoZXJvU2VjdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDE+U2VhcmNoIFRlY2huaXF1ZXMgSW4gQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2U8L2gxPlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcbn1cblxuIiwiaW1wb3J0IFBhZ2UgZnJvbSBcIi4uLy4uL2Jhc2UvUGFnZVwiO1xuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXJ0aWNsZS9BcnRpY2xlXCI7XG5pbXBvcnQgTWF6ZVZpc3VhbGl6ZXIgZnJvbSBcIi4vbWF6ZS12aXN1YWxpemVyL01hemVWaXN1YWxpemVyXCI7XG5pbXBvcnQgXCIuL21hemUtcGFnZS5jc3NcIjtcblxuLyoqXG4gKiBQYWdlIHRoYXQgY29uc2l0cyBvZiBhIG1hemUgdmlzdWFsaXplciBhbmQgYW4gYXJ0aWNsZSBhYm91dCB0aGUgc2VhcmNoIGFsZ29yaXRobVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplVmlzdWFsaXplclBhZ2UgZXh0ZW5kcyBQYWdle1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhcnRpY2xlRGF0YSAtIFRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFnZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFydGljbGVEYXRhKXtcbiAgICAgICAgc3VwZXIoJ21hemUtcGFnZScpO1xuICAgICAgICB0aGlzLmFydGljbGVEYXRhID0gYXJ0aWNsZURhdGE7XG4gICAgICAgIHRoaXMudmlzdWFsaXplciA9IG5ldyBNYXplVmlzdWFsaXplcih0aGlzLmFydGljbGVEYXRhLnRpdGxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBpbm5lciBIVE1MIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVWaXN1YWxpemVyU2VjdGlvbigpLFxuICAgICAgICAgICAgdGhpcy4jY3JlYXRlQWxnb3JpdGhtQXJ0aWNsZVNlY3Rpb24oKSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHJlc291cmNlcyB1c2VkIGJ5IHRoZSBwYWdlXG4gICAgICovXG4gICAgY2xlYXJSZXNvdXJjZXMoKXtcbiAgICAgICAgdGhpcy52aXN1YWxpemVyLmNsZWFyUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdmlzdWFsaXplciBzZWN0aW9uXG4gICAgICogXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgdmlzdWFsaXplciBlbGVtZW50XG4gICAgICovXG4gICAgI2NyZWF0ZVZpc3VhbGl6ZXJTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB2aXN1YWxpemVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgdmlzdWFsaXplclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWF6ZS1wYWdlX192aXN1YWxpemVyLXNlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdmlzdWFsaXplciA9IHRoaXMudmlzdWFsaXplci5jcmVhdGUoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpc3VhbGl6ZXIpO1xuICAgICAgICB2aXN1YWxpemVyU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdmlzdWFsaXplclNlY3Rpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGFsZ29yaXRobSBhcnRpY2xlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjY3JlYXRlQWxnb3JpdGhtQXJ0aWNsZVNlY3Rpb24oKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHRoZSBhbGdvcml0aG0gYXJ0aWNsZSBzZWN0aW9uXG4gICAgICAgcmV0dXJuICBuZXcgQXJ0aWNsZSh0aGlzLmFydGljbGVEYXRhKS5jcmVhdGUoKTtcbiAgICB9O1xufSIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9iYXNlL0Jhc2VDb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgVGltZW91dEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZS9SZXNvdXJjZUhhbmRsZXJcIjtcbmltcG9ydCBNYXplTW9kZWwgZnJvbSBcIi4vbW9kZWwvTWF6ZU1vZGVsXCI7XG5pbXBvcnQgc3RhcnRJY29uIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvaWNvbnMvcm9ib3QtaWNvbi5wbmdcIjtcbmltcG9ydCBlbmRJY29uIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvaWNvbnMvdGFyZ2V0LWljb24ucG5nXCI7XG5pbXBvcnQgcmVzZXRJY29uIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvaWNvbnMvcmVzZXQtaWNvbi5wbmdcIjtcbmltcG9ydCBwbGF5SWNvbiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL2ljb25zL3BsYXktaWNvbi5wbmdcIjtcbmltcG9ydCBwYXVzZUljb24gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9pY29ucy9wYXVzZS1pY29uLnBuZ1wiO1xuaW1wb3J0IGJ1Z0ljb24gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9pY29ucy9idWctaWNvbi5wbmdcIjtcblxuaW1wb3J0ICcuL21hemUtdmlzdWFsaXplci5jc3MnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgbWF6ZSB2aXN1YWxpemVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemVWaXN1YWxpemVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudHtcbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWxnb3JpdGhtTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzZWFyY2ggYWxnb3JpdGhtXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWxnb3JpdGhtTmFtZSl7XG4gICAgICAgIHN1cGVyKCdzZWN0aW9uJywgJ21hemUtdmlzdWFsaXplcicpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIHNlYXJjaCBhbGdvcml0aG1cbiAgICAgICAgICogXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhbGdvcml0aG1OYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFsZ29yaXRobU5hbWUgPSBhbGdvcml0aG1OYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF6ZSBtb2RlbCB0aGF0IGhhbmRlbHMgdGhlIHVuZGVybHlpbmcgZ3JpZFxuICAgICAgICAgKiBcbiAgICAgICAgICogQHByb3BlcnR5IHtNYXplTW9kZWx9IG1hemVNb2RlbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXplTW9kZWwgPSBuZXcgTWF6ZU1vZGVsKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXIgZm9yIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHByb3BlcnR5IHtFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXIgZm9yIHRpbWVvdXRzXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcHJvcGVydHkge0V2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRpbWVvdXRIYW5kbGVyID0gbmV3IFRpbWVvdXRIYW5kbGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdG8ga2VlcCB0cmFjayB3aGV0aGVyIHRoZSBhbmltYXRpb24gaXMgcnVubmluZ1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBydW5uaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNwZWVkIG9mIHRoZSBhbmltYXRpb24uIEl0IGluY3JlYXNlcy9kZWNyZWFzZXMgZXhwb25lbnRpYWxseS5cbiAgICAgICAgICogXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhbmltYXRpb25TcGVlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IDIqKjU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGlubmVyIEhUTUwgb2YgdGhlIGNvbXBvbmVudCBlbGVtZW50LlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGNvbXBvbmVudCBlbGVtZW5ldFxuICAgICAqL1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LmFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuI2NyZWF0ZUhlYWRpbmcoKSxcbiAgICAgICAgICAgIHRoaXMuI2NyZWF0ZVNldHRpbmdzQ29udGFpbmVyKCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVNYXplR3JpZCgpICAgICBcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRFbGVtZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHJlc291cmNlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjbGVhclJlc291cmNlc1xuICAgICAqL1xuICAgIGNsZWFyUmVzb3VyY2VzKCkge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlci5yZW1vdmVBbGxUaW1lb3V0cygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgaGVhZGluZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBzZWFyY2ggYWxnb3JpdGhtXG4gICAgICogXG4gICAgICogQHJldHVybnMge0hUTUxIZWFkaW5nRWxlbWVudH0gaDIgaGVhZGluZyBlbGVtZW50XG4gICAgICovXG4gICAgI2NyZWF0ZUhlYWRpbmcoKXtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWF6ZS12aXN1YWxpemVyX19oZWFkaW5nJyk7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aGlzLmFsZ29yaXRobU5hbWU7XG4gICAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHNldHRpbmdzIGNvbnRhaW5lci5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBjcmVhdGVTZXR0aW5nc0NvbnRhaW5lclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgc2V0dGluZ3MgY29udGFpbmVyIEhUTUwgZWxlbWVudC5cbiAgICAgKi9cbiAgICAjY3JlYXRlU2V0dGluZ3NDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZChcIm1hemUtdmlzdWFsaXplcl9fc2V0dGluZ3MtY29udGFpbmVyXCIpO1xuICAgICAgICBjb250YWluZXJFbC5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVSZXNldEJ0bigpLFxuICAgICAgICAgICAgdGhpcy4jY3JlYXRlU3RhcnRTdG9wQnRuKCksIFxuICAgICAgICAgICAgdGhpcy4jY3JlYXRlQWxnb3JpdGhtU2VsZWN0KCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVBbmltYXRpb25TcGVlZFJhbmdlKCksXG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVXZWlnaHRzQ2hlY2tib3goKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRWw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIFN0YXJ0L1N0b3AgQnV0dG9uXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlU3RhcnRTdG9wQnRuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFN0YXJ0L1N0b3AgYnV0dG9uXG4gICAgICovXG4gICAgI2NyZWF0ZVN0YXJ0U3RvcEJ0bigpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0b2dnbGVCdG5FbC5jbGFzc0xpc3QuYWRkKFwibWF6ZS12aXN1YWxpemVyX190b2dnbGUtYnRuXCIsICdidG4nKTtcbiAgICAgICAgdG9nZ2xlQnRuRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0b2dnbGVCdG5FbC5pbm5lckhUTUwgPSBgPHNwYW4+U3RhcnQ8L3NwYW4+PGltZyBzcmM9XCIke3BsYXlJY29ufVwiIGFsdD1cIlN0YXJ0XCI+YDtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b2dnbGVCdG5FbCwgXCJjbGlja1wiLCBhc3luYyAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpe1xuICAgICAgICAgICAgICAgIC8vIFNldCBydW5uaW5nIHRvIHRydWUgYW5kIGhhbmRsZSBzZXR0aW5ncyBhdmFpbGFiaWxpdHlcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuI2hhbmRsZVNldHRpbmdzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgYnV0dG9uIGlubmVyIGh0bWxcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gYDxzcGFuPlBhdXNlPC9zcGFuPjxpbWcgc3JjPVwiJHtwYXVzZUljb259XCIgYWx0PVwiU3RhcnRcIj5gO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgU2VyYWNoIEFuaW1hdGlvbiBhbmQgdGhlIHBhdGhcbiAgICAgICAgICAgICAgICB0aGlzLm1hemVNb2RlbC5zb2x2ZU1hemUodGhpcy5hbGdvcml0aG1OYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25zID0gdGhpcy5tYXplTW9kZWwuZ2V0QW5pbWF0aW9ucygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFuaW1hdGUgdGhlIHNlYXJjaFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuI2hhbmRsZU1hemVTZWFyY2hBbmltYXRpb24oYW5pbWF0aW9ucy5zZWFyY2hBbmltYXRpb24sICctLWNvbG9yLW9uLXN1cmZhY2UtcHJpbWFyeScsICctLWNvbG9yLXByaW1hcnknKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiNzbGVlcCh0aGlzLmFuaW1hdGlvblNwZWVkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBbmltYXRlIHRoZSBwYXRoXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4jaGFuZGxlTWF6ZVNlYXJjaEFuaW1hdGlvbihhbmltYXRpb25zLnBhdGhBbmltYXRpb24sICctLWNvbG9yLW9uLXN1cmZhY2UtZXJyb3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiNoYW5kbGVTZXR0aW5nc0F2YWlsYWJpbGl0eSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2V0IHJ1bm5pbmcgdG8gZmFsc2UgYW5kIGhhbmRsZSBzZXR0aW5ncyBhdmFpbGFiaWxpdHlcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4jaGFuZGxlU2V0dGluZ3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBidXR0b24gaW5uZXIgaHRtbFxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGA8c3Bhbj5TdGFydDwvc3Bhbj48aW1nIHNyYz1cIiR7cGxheUljb259XCIgYWx0PVwiU3RhcnRcIj5gO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQgZGlzYWJsZSB0aGUgYnV0dG9uXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25zID0gdGhpcy5tYXplTW9kZWwuZ2V0QW5pbWF0aW9ucygpO1xuICAgICAgICAgICAgaWYgKCFhbmltYXRpb25zLnNlYXJjaEFuaW1hdGlvbi5sZW5ndGggJiYgIWFuaW1hdGlvbnMucGF0aEFuaW1hdGlvbi5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG9nZ2xlQnRuRWxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgUmVzZXQgQnV0dG9uXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlUmVzZXRCdG5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH0gUmVzZXQgYnV0dG9uXG4gICAgICovXG4gICAgI2NyZWF0ZVJlc2V0QnRuKCkge1xuICAgICAgICBjb25zdCByZXNldEJ0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVzZXRCdG5FbC5jbGFzc0xpc3QuYWRkKFwibWF6ZS12aXN1YWxpemVyX19yZXNldC1idG5cIiwgJ2J0bicpO1xuICAgICAgICByZXNldEJ0bkVsLmlubmVySFRNTCA9IGA8c3Bhbj5SZXNldDwvc3Bhbj48aW1nIHNyYz1cIiR7cmVzZXRJY29ufVwiIGFsdD1cIlJlc2V0XCI+YDtcbiAgICAgICAgLy8gQ2xpY2sgRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihyZXNldEJ0bkVsLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlci5yZW1vdmVBbGxUaW1lb3V0cygpO1xuICAgICAgICAgICAgdGhpcy5tYXplTW9kZWwucmVzZXRNYXplKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI21hemUtdmlzdWFsaXplcl9fbWF6ZS13ZWlnaHRzJykuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXplLXZpc3VhbGl6ZXJfX3NlbGVjdC1hbGdvcml0aG0nKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLiNoYW5kbGVTZXR0aW5nc0F2YWlsYWJpbGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXplLWdyaWQnKS5yZXBsYWNlV2l0aCh0aGlzLiNjcmVhdGVNYXplR3JpZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNldEJ0bkVsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIEFuaW1hdGlvbiBTcGVlZCBSYW5nZVxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZUFuaW1hdGlvblNwZWVkUmFuZ2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gQW5pbWF0aW9uIFNwZWVkIFJhbmdlXG4gICAgICovXG4gICAgI2NyZWF0ZUFuaW1hdGlvblNwZWVkUmFuZ2UoKXtcbiAgICAgICAgY29uc3Qgc2V0dGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWF6ZS12aXN1YWxpemVyX19zZXR0aW5nLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc2xpZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzbGlkZXJMYWJlbC5odG1sRm9yID0gJ21hemUtdmlzdWFsaXplcl9fYW5pbWF0aW9uLXNwZWVkJztcbiAgICAgICAgc2xpZGVyTGFiZWwuaW5uZXJIVE1MID0gYEFuaW1hdGlvbiBTcGVlZDogJHs2fWA7XG4gICAgICAgIGNvbnN0IHNsaWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBzbGlkZXJFbC50eXBlID0gXCJyYW5nZVwiO1xuICAgICAgICBzbGlkZXJFbC5taW4gPSAxO1xuICAgICAgICBzbGlkZXJFbC5tYXggPSAxMDtcbiAgICAgICAgc2xpZGVyRWwudmFsdWUgPSA2O1xuICAgICAgICBzbGlkZXJFbC5pZCA9ICdtYXplLXZpc3VhbGl6ZXJfX2FuaW1hdGlvbi1zcGVlZCc7XG4gICAgICAgIHNsaWRlckVsLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRpb24tc3BlZWQtc2xpZGVyXCIpO1xuXG4gICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gdXBkYXRlIHRoZSBhbmltYXRpb24gc3BlZWRcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihzbGlkZXJFbCwgXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3BlZWQgPSAyICoqIDExIC8gMiAqKiAoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHNsaWRlckxhYmVsLmlubmVySFRNTCA9IGBBbmltYXRpb24gU3BlZWQ6ICR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgc2V0dGluZ1dyYXBwZXIuYXBwZW5kKHNsaWRlckxhYmVsLCBzbGlkZXJFbCk7XG4gICAgICAgIHJldHVybiBzZXR0aW5nV3JhcHBlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgTWF6ZSBnZW5lcmF0b3IgYWxnb3JpdGhtIHNlbGVjdFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNyZWF0ZUFsZ29yaXRobVNlbGVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBNYXplIEdlbmVyYXRvciBBbGdvcml0aG0gU2VsZWN0XG4gICAgICovXG4gICAgI2NyZWF0ZUFsZ29yaXRobVNlbGVjdCgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWF6ZS12aXN1YWxpemVyX19zZXR0aW5nLXdyYXBwZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2VsZWN0TGFiZWwuaHRtbEZvciA9ICdtYXplLXZpc3VhbGl6ZXJfX21hemUtYWxnb3JpdGhtJztcbiAgICAgICAgc2VsZWN0TGFiZWwuaW5uZXJIVE1MID0gYEdlbmVyYXRlIE1hemVgO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0RWwuY2xhc3NMaXN0LmFkZChcIm1hemUtdmlzdWFsaXplcl9fc2VsZWN0LWFsZ29yaXRobVwiKTtcbiAgICAgICAgc2VsZWN0RWwuaWQgPSdtYXplLXZpc3VhbGl6ZXJfX21hemUtYWxnb3JpdGhtJztcbiAgICAgICAgXG4gICAgICAgIC8vIERlZmF1bHQgT3B0aW9uXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVmYXVsdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGFsZ29yaXRobVwiO1xuICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uKTtcbiAgICAgICAgLy8gQWxnb3JpdGhtIE9wdGlvbnNcbiAgICAgICAgdGhpcy5tYXplTW9kZWwuZ2VuZXJhdG9yQWxnb3JpdGhtcy5mb3JFYWNoKCh7IHZhbHVlLCB0ZXh0IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbkVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBvcHRpb25FbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHRpb25FbCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDaGFuZ2UgRXZlbnRcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihzZWxlY3RFbCwgXCJjaGFuZ2VcIiwgYXN5bmMgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy4jaGFuZGxlU2V0dGluZ3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbiAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SGFuZGxlci5yZW1vdmVBbGxUaW1lb3V0cygpO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IG1hemVcbiAgICAgICAgICAgICAgICB0aGlzLm1hemVNb2RlbC5yZXNldEdyaWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hemUtZ3JpZCcpLnJlcGxhY2VXaXRoKHRoaXMuI2NyZWF0ZU1hemVHcmlkKCkpO1xuICAgICAgICAgICAgICAgIC8vIElmIGFuIGFsZ29yaXRobSBoYXMgYmVlbiBzZWxlY3RlZCBnZXQgdGhlIGFuaW1hdGlvbiBmb3IgZ2VuZXJhdGluZyB0aGUgbWF6ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMubWF6ZU1vZGVsLmdlbmVyYXRlTWF6ZShzZWxlY3RlZE9wdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0ZSB0aGUgbWF6ZSBnZW5lcmF0aW9uXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4jYW5pbWF0ZU1hemVHZW5lcmF0aW9uKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbWF6ZS12aXN1YWxpemVyX19tYXplLXdlaWdodHMnKS5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXplTW9kZWwuYWRkUmFuZG9tV2VpZ2h0cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNoYW5kbGVNYXplV2VpZ2h0cygpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZChzZWxlY3RMYWJlbCwgc2VsZWN0RWwpO1xuICAgICAgICByZXR1cm4gc2V0dGluZ1dyYXBwZXJcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNoZWNrYm94IHRvIHRvZ2dsZSB3ZWlnaHRzXG4gICAgICogXG4gICAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAgICovXG4gICAgI2NyZWF0ZVdlaWdodHNDaGVja2JveCgpe1xuICAgICAgICBjb25zdCBzZXR0aW5nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZXR0aW5nV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYXplLXZpc3VhbGl6ZXJfX3NldHRpbmctd3JhcHBlcicpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjaGVja2JveExhYmVsLmh0bWxGb3IgPSAnbWF6ZS12aXN1YWxpemVyX19tYXplLXdlaWdodHMnO1xuICAgICAgICBjaGVja2JveExhYmVsLmlubmVySFRNTCA9IGBXZWlnaHRzYDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdlaWdodENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgLy93ZWlnaHRDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHdlaWdodENoZWNrYm94LmlkID0gJ21hemUtdmlzdWFsaXplcl9fbWF6ZS13ZWlnaHRzJztcbiAgICAgICAgd2VpZ2h0Q2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXIgZm9yIHRoZSBjaGVja2JveFxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHdlaWdodENoZWNrYm94LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2VpZ2h0Q2hlY2tib3guY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF6ZU1vZGVsLmFkZFJhbmRvbVdlaWdodHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jaGFuZGxlTWF6ZVdlaWdodHMoKTsgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF6ZU1vZGVsLnJlbW92ZVdlaWdodHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jaGFuZGxlTWF6ZVdlaWdodHMoKTsgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzZXR0aW5nV3JhcHBlci5hcHBlbmQoY2hlY2tib3hMYWJlbCwgd2VpZ2h0Q2hlY2tib3gpO1xuXG4gICAgICAgIHJldHVybiBzZXR0aW5nV3JhcHBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9yIHJlbW92ZXMgY2VsbCB3ZWlnaHRzXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gaGFuZGxlTWF6ZVdlaWdodHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICNoYW5kbGVNYXplV2VpZ2h0cygpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1uc1xuICAgICAgICBjb25zdCByb3dTaXplID0gdGhpcy5tYXplTW9kZWwuZ3JpZC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbFNpemUgPSB0aGlzLm1hemVNb2RlbC5ncmlkWzBdLmxlbmd0aDtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSByb3dzIGFuZCBjb2x1bW5zIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd1NpemU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xTaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2VsbCBpcyB0aGUgc3RhcnQgY2VsbCBvciBlbmQgY2VsbCBza2lwIHRoZSBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMubWF6ZU1vZGVsLnN0YXJ0Q2VsbC5yb3cgPT09IGkpICYmICh0aGlzLm1hemVNb2RlbC5zdGFydENlbGwuY29sID09PSBqKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLm1hemVNb2RlbC5lbmRDZWxsLnJvdyA9PT0gaSkgJiYgKHRoaXMubWF6ZU1vZGVsLmVuZENlbGwuY29sID09PSBqKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjZWxsIGRhdGEgYW5kIHRoZSBjZWxsIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsRGF0YSA9IHRoaXMubWF6ZU1vZGVsLmdyaWRbaV1bal07XG4gICAgICAgICAgICAgICAgbGV0IGNlbGxFbCA9IHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtqfVwiXWApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgd2VpZ2h0IGRpc3BsYXlcbiAgICAgICAgICAgICAgICBjZWxsRWwuaW5uZXJIVE1MID0gKGNlbGxEYXRhLndlaWdodCAhPT0gMSkgPyBgPGRpdiBjbGFzcz1cIm1hemUtd2VpZ2h0LSR7Y2VsbERhdGEud2VpZ2h0fVwiPjxpbWcgc3JjPVwiJHtidWdJY29ufVwiIGFsdD1cInN0YXJ0XCIvPjwvZGl2PmAgOiBjZWxsRWwuaW5uZXJIVE1MPSAnJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgU2V0dGluZ3MgQXZhaWxhYmlsaXR5LiBFbmFibGVzIG9yIERpc2FibGVzIHRoZW0uXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gaGFuZGxlU2V0dGluZ3NBdmFpbGFiaWxpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICNoYW5kbGVTZXR0aW5nc0F2YWlsYWJpbGl0eSgpe1xuICAgICAgICBjb25zdCBzZWxlY3RBbGdvcml0aG0gPSB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hemUtdmlzdWFsaXplcl9fc2VsZWN0LWFsZ29yaXRobScpXG4gICAgICAgIGlmKHRoaXMucnVubmluZyl7XG4gICAgICAgICAgICAvLyBEaXNhYmxlIHNldHRpbmdzIGlmIGFuaW1hdGlvbiBpcyBydW5uaW5nXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hemUtdmlzdWFsaXplcl9fcmVzZXQtYnRuJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0QWxnb3JpdGhtLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbWF6ZS12aXN1YWxpemVyX19tYXplLXdlaWdodHMnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gRW5hYmxlIHNldHRpbmdzIGlmIGFuaW1hdGlvbiBpcyBydW5uaW5nXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hemUtdmlzdWFsaXplcl9fcmVzZXQtYnRuJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGVjdEFsZ29yaXRobS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXplLXZpc3VhbGl6ZXJfX21hemUtd2VpZ2h0cycpLmRpc2FibGVkID0gZmFsc2U7IFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzZWxlY3RBbGdvcml0aG0udmFsdWUgPT09IFwiXCIpe1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXplLXZpc3VhbGl6ZXJfX3RvZ2dsZS1idG4nKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXplLXZpc3VhbGl6ZXJfX3RvZ2dsZS1idG4nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZXMgdGhlIGdlbmVyYXRpb24gb2YgdGhlIG1hemVcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBhbmltYXRlTWF6ZUdlbmVyYXRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFuaW1hdGlvbiAtIEFycmF5IGNvbnRhaW5pbmcgdGhlIGFuaW1hdGlvbiBzZXF1ZW5jZVxuICAgICAqL1xuICAgIGFzeW5jICNhbmltYXRlTWF6ZUdlbmVyYXRpb24oYW5pbWF0aW9uKXtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBhbmltYXRpb24gc2VxdWVuY2VcbiAgICAgICAgd2hpbGUgKGFuaW1hdGlvbi5sZW5ndGgpe1xuICAgICAgICAgICAgLy8gR2V0IGEgY2VsbFxuICAgICAgICAgICAgY29uc3Qge3JvdywgY29sfSA9IGFuaW1hdGlvbi5wb3AoKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxFbCA9IHRoaXMuY29tcG9uZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcbiAgICAgICAgICAgIHRoaXMuI2hhbmRsZU1hemVDZWxsQm9yZGVycyhyb3csIGNvbCwgY2VsbEVsKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGVscyB0aGUgYW5pbWF0aW9uIG9mIHNlYXJjaCBhbGdvcml0aG1zXG4gICAgICogXG4gICAgICogQHBhcmFtIHtBcnJheX0gYW5pbWF0aW9uIC0gQXJyYXkgY29udGFpbmluZyB0aGUgYW5pbWF0aW9uIHNlcXVlbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhpZ2hsaWdodENvbG9yIC0gQ29sb3IgdG8gaGlnaGxpZ2h0IHRoZSBhbmltYXRlZCBjZWxsLiBTaG91bGQgYmUgY3NzIHZhcmlhYmxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuSGlnaGxpZ2h0Q29sb3JdIC0gQ29sb3IgdG8gdW5oaWdobGlnaHQgdGhlIGNlbGwuIFNob3VsZCBiZSBjc3MgdmFyaWFibGUgbmFtZVxuICAgICAqL1xuICAgIGFzeW5jICNoYW5kbGVNYXplU2VhcmNoQW5pbWF0aW9uKGFuaW1hdGlvbiwgaGlnaGxpZ2h0Q29sb3IsIHVuSGlnaGxpZ2h0Q29sb3I9XCJcIil7XG4gICAgICAgIHdoaWxlKGFuaW1hdGlvbi5sZW5ndGggJiYgdGhpcy5ydW5uaW5nKXtcbiAgICAgICAgICAgIGNvbnN0IHtyb3csIGNvbH0gPSBhbmltYXRpb24ucG9wKCk7XG4gICAgICAgICAgICBjb25zdCBjZWxsRWwgPSB0aGlzLmNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCk7XG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgdGhlIGNlbGwgYW5kIGhhbmRsZSBpdHMgYm9yZGVyc1xuICAgICAgICAgICAgY2VsbEVsLnN0eWxlLmJhY2tncm91bmQgPSBgcmFkaWFsLWdyYWRpZW50KHZhcigke2hpZ2hsaWdodENvbG9yfSksIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudClgO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc2xlZXAodGhpcy5hbmltYXRpb25TcGVlZClcbiAgICAgICAgICAgIGlmICh1bkhpZ2hsaWdodENvbG9yKXtcbiAgICAgICAgICAgICAgICBjZWxsRWwuc3R5bGUuYmFja2dyb3VuZCA9IGByYWRpYWwtZ3JhZGllbnQodmFyKCR7dW5IaWdobGlnaHRDb2xvcn0pLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpYDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhdXNlcyB0aGUgZXhlY3V0aW9uIGZvciB0aGUgZ2l2ZW4gdGltZSBpbiBtcy5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzbGVlcFxuICAgICAqIEBhc3luY1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1zIC0gVGltZSB0byBzbGVlcCBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyAjc2xlZXAobXMpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZXIuYWRkVGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBtYXplIGdyaWQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlTWF6ZUdyaWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIG1hemUgZ3JpZCBIVE1MIGVsZW1lbnQuXG4gICAgICovXG4gICAgI2NyZWF0ZU1hemVHcmlkKCl7XG4gICAgICAgIC8vIEdldCB0aGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnNcbiAgICAgICAgY29uc3Qgcm93U2l6ZSA9IHRoaXMubWF6ZU1vZGVsLmdyaWQubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2xTaXplID0gdGhpcy5tYXplTW9kZWwuZ3JpZFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q2VsbCA9IHRoaXMubWF6ZU1vZGVsLnN0YXJ0Q2VsbDtcbiAgICAgICAgY29uc3QgZW5kQ2VsbCA9IHRoaXMubWF6ZU1vZGVsLmVuZENlbGw7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgdGFibGUgZm9yIHRoZSBtYXplIGdyaWRcbiAgICAgICAgY29uc3QgbWF6ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgbWF6ZUVsLmNsYXNzTGlzdC5hZGQoJ21hemUtZ3JpZCcpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgcm93cyBhbmQgY29sdW1ucyB0byBjcmVhdGUgdGhlIGdyaWQgY2VsbHNcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHJvd1NpemU7IGkrKyl7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSB0YWJsZSByb3cgZWxlbWVudFxuICAgICAgICAgICAgY29uc3Qgcm93RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgY29sdW1ucyB0byBjcmVhdGUgdGhlIGdyaWQgY2VsbHNcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxjb2xTaXplOyBqKyspe1xuXG4gICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHRhYmxlIGNlbGwgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnbWF6ZS1jZWxsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgZGF0YSBhdHRyaWJ1dGVzIHRvIGtlZXAgdHJhY2sgb2YgZWFjaCBjZWxsIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjZWxsRWwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIGkpO1xuICAgICAgICAgICAgICAgIGNlbGxFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgaik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGNlbGwgZGF0YSBmcm9tIHRoZSBtYXplIG1vZGVsXG4gICAgICAgICAgICAgICAgdGhpcy4jaGFuZGxlTWF6ZUNlbGxCb3JkZXJzKGksIGosIGNlbGxFbCk7XG5cbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN0YXJ0IGFuZCBlbmQgY2VsbHNcbiAgICAgICAgICAgICAgICBjZWxsRWwuaW5uZXJIVE1MID0gKGk9PT1zdGFydENlbGwucm93ICYmIGo9PT1zdGFydENlbGwuY29sKSA/IGA8ZGl2PjxpbWcgc3JjPVwiJHtzdGFydEljb259XCIgYWx0PVwic3RhcnRcIi8+PC9kaXY+YCA6IGNlbGxFbC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgY2VsbEVsLmlubmVySFRNTCA9IChpPT09ZW5kQ2VsbC5yb3cgJiYgaj09PWVuZENlbGwuY29sKSA/IGA8ZGl2PjxpbWcgc3JjPVwiJHtlbmRJY29ufVwiIGFsdD1cImVuZFwiLz48L2Rpdj5gIDogY2VsbEVsLmlubmVySFRNTDtcblxuXG4gICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgY2VsbCBlbGVtZW50IHRvIHRoZSByb3cgZWxlbWVudFxuICAgICAgICAgICAgICAgIHJvd0VsLmFwcGVuZENoaWxkKGNlbGxFbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHJvdyBlbGVtZW50IHRvIHRoZSBtYXplIHRhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIG1hemVFbC5hcHBlbmRDaGlsZChyb3dFbCk7XG4gICAgICAgIH07XG5cblxuICAgICAgICByZXR1cm4gbWF6ZUVsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBib3JkZXJzIG9mIHRoZSBjZWxsIGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gVGhlIHJvdyBudW1iZXIgb2YgdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gVGhlIGNvbCBudW1iZXIgb2YgdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0ge0hUTUxUYWJsZUNlbGxFbGVtZW50fSBjZWxsRWwgLSBUaGUgY2VsbCBlbGVtZW50XG4gICAgICovXG4gICAgI2hhbmRsZU1hemVDZWxsQm9yZGVycyhyb3csIGNvbCwgY2VsbEVsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxEYXRhID0gdGhpcy5tYXplTW9kZWwuZ3JpZFtyb3ddW2NvbF07XG4gICAgICAgIC8vIFNldCB0aGUgYm9yZGVyIHdpZHRoIGZvciBlYWNoIHNpZGUgb2YgdGhlIGNlbGwgYmFzZWQgb24gaXRzIHdhbGwgZGF0YVxuICAgICAgICBjZWxsRGF0YS50b3AgPyBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnYm9yZGVyLXRvcCcpIDogY2VsbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JvcmRlci10b3AnKTtcbiAgICAgICAgY2VsbERhdGEuYm90dG9tID8gY2VsbEVsLmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1ib3R0b20nKSA6IGNlbGxFbC5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItYm90dG9tJyk7XG4gICAgICAgIGNlbGxEYXRhLmxlZnQgPyBjZWxsRWwuY2xhc3NMaXN0LmFkZCgnYm9yZGVyLWxlZnQnKSA6IGNlbGxFbC5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItbGVmdCcpO1xuICAgICAgICBjZWxsRGF0YS5yaWdodCA/IGNlbGxFbC5jbGFzc0xpc3QuYWRkKCdib3JkZXItcmlnaHQnKSA6IGNlbGxFbC5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItcmlnaHQnKTtcbiAgICB9O1xuXG5cblxuXG5cbn0iLCJpbXBvcnQgZ2VuZXJhdGVNYXplUkRGUyBmcm9tIFwiLi9tYXplX2dlbmVyYXRvcnMvcmFuZG9taXplZERGU1wiO1xuaW1wb3J0IGdlbmVyYXRlRW1wdHlNYXplIGZyb20gXCIuL21hemVfZ2VuZXJhdG9ycy9lbXB0eU1hemVcIjtcbmltcG9ydCBnZW5lcmF0ZVJhbmRvbU1hemUgZnJvbSBcIi4vbWF6ZV9nZW5lcmF0b3JzL3JhbmRvbU1hemVcIjtcbmltcG9ydCByZWN1cnNpdmVEaXZpc2lvbiBmcm9tIFwiLi9tYXplX2dlbmVyYXRvcnMvcmVjdXJpc3ZlRGl2aXNpb25cIjtcbmltcG9ydCBzZWFyY2hCRlMgZnJvbSBcIi4vbWF6ZV9wYXRoX2ZpbmRlcnMvc2VhcmNoQkZTXCI7XG5pbXBvcnQgc2VhcmNoREZTIGZyb20gXCIuL21hemVfcGF0aF9maW5kZXJzL3NlYXJjaERGU1wiO1xuaW1wb3J0IHNlYXJjaERpamtzdHJhIGZyb20gXCIuL21hemVfcGF0aF9maW5kZXJzL3NlYXJjaERpamtzdHJhXCI7XG5pbXBvcnQgc2VhcmNoQVN0YXIgZnJvbSBcIi4vbWF6ZV9wYXRoX2ZpbmRlcnMvc2VhcmNoQVN0YXJcIjtcblxuXG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhIG1hemUgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplTW9kZWwge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGF2YWlsYWJsZSBtYXplIGdlbmVyYXRpbmcgYWxnb3JpdGhtcy5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge0FycmF5PHt2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrOiBmdW5jdGlvbn0+fSBnZW5lcmF0b3JBbGdvcml0aG1zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjZ2VuZXJhdG9yQWxnb3JpdGhtcyA9IFtcbiAgICAgICAgeyB2YWx1ZTogJ2VtcHR5JywgdGV4dDogJ0VtcHR5IE1hemUnLCBjYWxsYmFjazogZ2VuZXJhdGVFbXB0eU1hemV9LFxuICAgICAgICB7IHZhbHVlOiAncmFuZG9tJywgdGV4dDogJ1JhbmRvbSBNYXplJywgY2FsbGJhY2s6IGdlbmVyYXRlUmFuZG9tTWF6ZX0sXG4gICAgICAgIHsgdmFsdWU6ICdyZGZzJywgdGV4dDogJ1JhbmRvbWl6ZWQgREZTJywgY2FsbGJhY2s6IGdlbmVyYXRlTWF6ZVJERlMgfSxcbiAgICAgICAgeyB2YWx1ZTogJ2RpdmlzaW9uJywgdGV4dDogJ1JlY3Vyc2l2ZSBkaXZpc2lvbicsIGNhbGxiYWNrOiByZWN1cnNpdmVEaXZpc2lvbn0sXG4gICAgXTtcblxuXG4gICAgLyoqXG4gICAgICogVGhlIGF2YWlsYWJsZSBzZWFyY2ggYWxnb3JpdGhtcy5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gc2VhcmNoQWxnb3JpdGhtc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI3NlYXJjaEFsZ29yaXRobXMgPSB7XG4gICAgICAgICdCcmVhZHRoLUZpcnN0IFNlYXJjaCc6IHNlYXJjaEJGUyxcbiAgICAgICAgJ0RlcHRoLUZpcnN0IFNlYXJjaCc6IHNlYXJjaERGUyxcbiAgICAgICAgXCJEaWprc3RyYSdzIEFsZ29yaXRobVwiOiBzZWFyY2hEaWprc3RyYSxcbiAgICAgICAgXCJBKiBTZWFyY2hcIjogc2VhcmNoQVN0YXJcbiAgICB9O1xuXG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge2dldHRlcn0gZ2VuZXJhdG9yQWxnb3JpdGhtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheTx7dmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nfX0gVGhlIGF2YWlsYWJsZSBtYXplIGdlbmVyYXRpbmcgYWxnb3JpdGhtc1xuICAgICAqL1xuICAgIGdldCBnZW5lcmF0b3JBbGdvcml0aG1zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNnZW5lcmF0b3JBbGdvcml0aG1zXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBncmlkXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjaGVpZ2h0ID0gMjU7XG5cbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggLSBUaGUgd2lkdGggb2YgdGhlIGdyaWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICN3aWR0aCA9IDQ1O1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXJ0Q2VsbCA9IHtyb3c6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI2hlaWdodCksIGNvbDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jd2lkdGgpIH07XG4gICAgICAgIHRoaXMuZW5kQ2VsbCA9IHtyb3c6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI2hlaWdodCksIGNvbDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jd2lkdGgpIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemVcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLiNjcmVhdGVJbml0aWFsR3JpZCh0aGlzLiNoZWlnaHQsIHRoaXMuI3dpZHRoKTtcblxuICAgICAgICB0aGlzLnNlYXJjaEFuaW1hdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnBhdGhBbmltYXRpb24gPSBbXTtcblxuICAgICAgICBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBtYXplOlxuICAgICAqICAtIEdyaWRcbiAgICAgKiAgLSBTdGFydGluZyBhbmQgRW5kaW5nIGNlbGxcbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSByZXNldE1hemVcbiAgICAgKi9cbiAgICByZXNldE1hemUoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRDZWxsID0ge3JvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jaGVpZ2h0KSwgY29sOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiN3aWR0aCkgfTtcbiAgICAgICAgdGhpcy5lbmRDZWxsID0ge3JvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jaGVpZ2h0KSwgY29sOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiN3aWR0aCkgfTtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy4jY3JlYXRlSW5pdGlhbEdyaWQodGhpcy4jaGVpZ2h0LCB0aGlzLiN3aWR0aCk7XG4gICAgICAgIHRoaXMuc2VhcmNoQW5pbWF0aW9uID0gW107XG4gICAgICAgIHRoaXMucGF0aEFuaW1hdGlvbiA9IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGdyaWQ6XG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gcmVzZXRHcmlkXG4gICAgICovXG4gICAgcmVzZXRHcmlkKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLiNjcmVhdGVJbml0aWFsR3JpZCh0aGlzLiNoZWlnaHQsIHRoaXMuI3dpZHRoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hBbmltYXRpb24gPSBbXTtcbiAgICAgICAgdGhpcy5wYXRoQW5pbWF0aW9uID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgaW5pdGlhbCBncmlkIGZvciB0aGUgbWF6ZS5cbiAgICAgKiBJbml0aWFsaXplcyB0aGUgZ3JpZCBhcyBhbiBhcnJheSBvZiBhcnJheXMsIHdpdGggZWFjaCBpbm5lciBhcnJheSByZXByZXNlbnRpbmcgYSByb3cgaW4gdGhlIGdyaWQuXG4gICAgICogRWFjaCBlbGVtZW50IGluIHRoZSBpbm5lciBhcnJheXMgaXMgYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGNlbGwgaW4gdGhlIG1hemUuXG4gICAgICogRWFjaCBjZWxsIG9iamVjdCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBpdHMgYm9yZGVycyAodG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSBhbmQgaXRzIHZpc2l0IHN0YXR1cyAodmlzaXRlZCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY3JlYXRlSW5pdGlhbEdyaWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBncmlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoIG9mIHRoZSBncmlkXG4gICAgICogQHJldHVybnMge0FycmF5fSBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemVcbiAgICAgKi9cbiAgICAjY3JlYXRlSW5pdGlhbEdyaWQoaGVpZ2h0LCB3aWR0aCl7XG4gICAgICAgIGxldCBncmlkID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxoZWlnaHQ7IGkrKyl7XG4gICAgICAgICAgICBncmlkW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8d2lkdGg7IGorKyl7XG4gICAgICAgICAgICAgICAgZ3JpZFtpXVtqXT17XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogMVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9O1xuXG4gICAgYWRkUmFuZG9tV2VpZ2h0cygpe1xuICAgICAgICBmb3IgKGxldCBpID0wOyBpPHRoaXMuI2hlaWdodDsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx0aGlzLiN3aWR0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2VsbCBpcyB0aGUgc3RhcnQgY2VsbCBvciBlbmQgY2VsbCBza2lwIHRoZSBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RhcnRDZWxsLnJvdyA9PT0gaSkgJiYgKHRoaXMuc3RhcnRDZWxsLmNvbCA9PT0gaikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5lbmRDZWxsLnJvdyA9PT0gaSkgJiYgKHRoaXMuZW5kQ2VsbC5jb2wgPT09IGopKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBQcm9iYWJpbGl0eSB0byBhZGQgYSB3ZWlnaHQgdG8gdGhlIGNlbGxcbiAgICAgICAgICAgICAgICBsZXQgcHJvYmEgPSBNYXRoLnJhbmRvbSgpIDwgMC4wNTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2JhKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgcmFuZG9tIHdlaWdodCBpbiB0aGUgcmFuZ2UgWzIsNV1cbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbaV1bal0ud2VpZ2h0ID0gTWF0aC5yb3VuZCgzKk1hdGgucmFuZG9tKCkgKyAyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgcmVtb3ZlV2VpZ2h0cygpe1xuICAgICAgICBmb3IgKGxldCBpID0wOyBpPHRoaXMuI2hlaWdodDsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx0aGlzLiN3aWR0aDsgaisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbaV1bal0ud2VpZ2h0ID0gMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgKiBHZW5lcmF0ZXMgYSBtYXplIHVzaW5nIHRoZSBnaXZlbiBhbGdvcml0aG1cbiAgICAqIFxuICAgICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2VuZXJhdGVNYXplXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYWxnb3JpdGhtIC0gVGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBhbGdvcml0aG1cbiAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgKi9cbiAgICBnZW5lcmF0ZU1hemUoYWxnb3JpdGhtKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQWxnb3JpdGhtID0gdGhpcy4jZ2VuZXJhdG9yQWxnb3JpdGhtcy5maW5kKGEgPT4gYS52YWx1ZSA9PT0gYWxnb3JpdGhtKTtcblxuICAgICAgICBpZiAoIXNlbGVjdGVkQWxnb3JpdGhtKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWxnb3JpdGhtOiAke2FsZ29yaXRobX1gKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRBbGdvcml0aG0uY2FsbGJhY2sodGhpcy5ncmlkLCB0aGlzLnN0YXJ0Q2VsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBzcGVjaWZpZWQgc2VhcmNoIGFsZ29yaXRobSBhbmQgc2V0cyB0aGUgYW5pbWF0aW9uIGFycmF5cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWxnb3JpdGhtTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzZWFyY2ggYWxnb3JpdGhtXG4gICAgICovXG4gICAgc29sdmVNYXplKGFsZ29yaXRobU5hbWUpe1xuICAgICAgICAvLyBJZiB0aGUgYW5pbWF0aW9ucyBhcnJheSBhcmUgbm90IGVtcHR5IHJldHVyblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hBbmltYXRpb24ubGVuZ3RoIHx8IHRoaXMucGF0aEFuaW1hdGlvbi5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSB0aGlzLiNzZWFyY2hBbGdvcml0aG1zW2FsZ29yaXRobU5hbWVdKHRoaXMuZ3JpZCwgdGhpcy5zdGFydENlbGwsIHRoaXMuZW5kQ2VsbCk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hBbmltYXRpb24gPSBhbmltYXRpb25zLmFuaW1hdGlvbjtcbiAgICAgICAgdGhpcy5wYXRoQW5pbWF0aW9uID0gYW5pbWF0aW9ucy5wYXRoO1xuICAgIFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXRoIGFuZCBzZWFyY2ggYW5pbWF0aW9ucy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7e3NlYXJjaEFuaW1hdGlvbjogQXJyYXksIHBhdGhBbmltYXRpb246IEFycmF5fX0gVGhlIHNlYXJjaCBhbmQgcGF0aCBhbmltYXRpb25zLlxuICAgICAqL1xuICAgIGdldEFuaW1hdGlvbnMoKXtcbiAgICAgICAgcmV0dXJuIHtzZWFyY2hBbmltYXRpb246IHRoaXMuc2VhcmNoQW5pbWF0aW9uLCBwYXRoQW5pbWF0aW9uOiB0aGlzLnBhdGhBbmltYXRpb259O1xuICAgIH07XG5cbiAgICBcbn07IiwiLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHVudmlzaXRlZCBuZWlnaGJvcnMgb2YgYSBjZWxsXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWQgLSBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemUuXG4gKiBAcGFyYW0ge251bWJlcn0gcm93IC0gVGhlIHJvdyBpbmRleCBvZiB0aGUgY3VycmVudCBjZWxsLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIFRoZSBjb2x1bW4gaW5kZXggb2YgdGhlIGN1cnJlbnQgY2VsbC5cbiAqIFxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSBvZiB1bnZpc2l0ZWQgbmVpZ2hib3JzLCB3aGVyZSBlYWNoIG5laWdoYm9yIGlzIHJlcHJlc2VudGVkIGJ5IGFuIG9iamVjdCB3aXRoIGByb3dgIGFuZCBgY29sYCBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW52aXNpdGVkTmVpZ2hib3JzKGdyaWQsIHJvdywgY29sKSB7XG4gICAgY29uc3QgbmVpZ2hib3JzID0gW107XG4gICAgY29uc3Qgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHMgPSBncmlkWzBdLmxlbmd0aDtcbiAgICBcbiAgICAvLyBDaGVjayBOb3J0aFxuICAgIGlmIChyb3cgPiAwICYmICFncmlkW3JvdyAtIDFdW2NvbF0udmlzaXRlZCApIHtcbiAgICAgIG5laWdoYm9ycy5wdXNoKHsgcm93OiByb3cgLSAxLCBjb2w6IGNvbCB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgRWFzdFxuICAgIGlmIChjb2wgPCBjb2xzIC0gMSAmJiAhZ3JpZFtyb3ddW2NvbCArIDFdLnZpc2l0ZWQpIHtcbiAgICAgIG5laWdoYm9ycy5wdXNoKHsgcm93OiByb3csIGNvbDogY29sICsgMSB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgU291dGhcbiAgICBpZiAocm93IDwgcm93cyAtIDEgJiYgIWdyaWRbcm93ICsgMV1bY29sXS52aXNpdGVkICkge1xuICAgICAgbmVpZ2hib3JzLnB1c2goeyByb3c6IHJvdyArIDEsIGNvbDogY29sIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBDaGVjayBXZXN0XG4gICAgaWYgKGNvbCA+IDAgJiYgIWdyaWRbcm93XVtjb2wgLSAxXS52aXNpdGVkKSB7XG4gICAgICBuZWlnaGJvcnMucHVzaCh7IHJvdzogcm93LCBjb2w6IGNvbCAtIDEgfSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZWlnaGJvcnM7XG4gIH07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIHVudmlzaXRlZCBuZWlnaGJvciBvZiBhIGNlbGwuXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWQgLSBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemUuXG4gKiBAcGFyYW0ge251bWJlcn0gcm93IC0gVGhlIHJvdyBpbmRleCBvZiB0aGUgY3VycmVudCBjZWxsLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIFRoZSBjb2x1bW4gaW5kZXggb2YgdGhlIGN1cnJlbnQgY2VsbC5cbiAqIFxuICogQHJldHVybnMge3tyb3c6IG51bWJlciwgY29sOiBudW1iZXJ9fHVuZGVmaW5lZH0gQSByYW5kb20gdW52aXNpdGVkIG5laWdoYm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21OZWlnaGJvcihncmlkLCByb3csIGNvbCkge1xuICAgIGNvbnN0IHVudmlzaXRlZE5laWdoYm9ycyA9IGdldFVudmlzaXRlZE5laWdoYm9ycyhncmlkLCByb3csIGNvbCk7XG4gICAgaWYgKHVudmlzaXRlZE5laWdoYm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIFxuICAgIC8vIEdldCBhIHJhbmRvbSBpbmRleCBpbiB0aGUgcmFuZ2UgWzAsIHVudmlzaXRlZE5laWdoYm9ycy5sZW5ndGgpXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1bnZpc2l0ZWROZWlnaGJvcnMubGVuZ3RoKTtcbiAgICBcbiAgICByZXR1cm4gdW52aXNpdGVkTmVpZ2hib3JzW3JhbmRvbUluZGV4XTtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSB3YWxsIGJldHdlZW4gdHdvIGNlbGxzXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWQgLSBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemUuXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MSAtIFRoZSByb3cgaW5kZXggb2YgdGhlIGZpcnN0IGNlbGwuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sMSAtIFRoZSBjb2x1bW4gaW5kZXggb2YgdGhlIGZpcnN0IGNlbGwuXG4gKiBAcGFyYW0ge251bWJlcn0gcm93MiAtIFRoZSByb3cgaW5kZXggb2YgdGhlIHNlY29uZCBjZWxsLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbDIgLSBUaGUgY29sdW1uIGluZGV4IG9mIHRoZSBzZWNvbmQgY2VsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdhbGwoZ3JpZCwgcm93MSwgY29sMSwgcm93MiwgY29sMikge1xuICBjb25zdCBjb2xzID0gZ3JpZFswXS5sZW5ndGg7XG4gIGNvbnN0IHJvd3MgPSBncmlkLmxlbmd0aFxuICBpZiAocm93MSA8IDAgfHwgcm93MiA8IDAgfHwgY29sMSA8IDAgfHwgY29sMiA8IDAgfHwgcm93MSA+PSByb3dzIHx8IHJvdzIgPj0gcm93c3x8IGNvbDEgPj0gY29scyAgfHwgY29sMiA+PSBjb2xzKSByZXR1cm5cbiAgICBpZiAocm93MSA8IHJvdzIpIHtcbiAgICAgIC8vIFRoZSBzZWNvbmQgY2VsbCBpcyBiZWxvdyB0aGUgZmlyc3QgY2VsbCwgc28gcmVtb3ZlIHRoZSBib3R0b20gd2FsbCBvZiB0aGUgZmlyc3QgY2VsbCBhbmQgdGhlIHRvcCB3YWxsIG9mIHRoZSBzZWNvbmQgY2VsbFxuICAgICAgZ3JpZFtyb3cxXVtjb2wxXS5ib3R0b20gPSBmYWxzZTtcbiAgICAgIGdyaWRbcm93Ml1bY29sMl0udG9wID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChyb3cxID4gcm93Mikge1xuICAgICAgLy8gVGhlIHNlY29uZCBjZWxsIGlzIGFib3ZlIHRoZSBmaXJzdCBjZWxsLCBzbyByZW1vdmUgdGhlIHRvcCB3YWxsIG9mIHRoZSBmaXJzdCBjZWxsIGFuZCB0aGUgYm90dG9tIHdhbGwgb2YgdGhlIHNlY29uZCBjZWxsXG4gICAgICBncmlkW3JvdzFdW2NvbDFdLnRvcCA9IGZhbHNlO1xuICAgICAgZ3JpZFtyb3cyXVtjb2wyXS5ib3R0b20gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNvbDEgPCBjb2wyKSB7XG4gICAgICAvLyBUaGUgc2Vjb25kIGNlbGwgaXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSBmaXJzdCBjZWxsLCBzbyByZW1vdmUgdGhlIHJpZ2h0IHdhbGwgb2YgdGhlIGZpcnN0IGNlbGwgYW5kIHRoZSBsZWZ0IHdhbGwgb2YgdGhlIHNlY29uZCBjZWxsXG4gICAgICBncmlkW3JvdzFdW2NvbDFdLnJpZ2h0ID0gZmFsc2U7XG4gICAgICBncmlkW3JvdzJdW2NvbDJdLmxlZnQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNvbDEgPiBjb2wyKSB7XG4gICAgICAvLyBUaGUgc2Vjb25kIGNlbGwgaXMgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IGNlbGwsIHNvIHJlbW92ZSB0aGUgbGVmdCB3YWxsIG9mIHRoZSBmaXJzdCBjZWxsIGFuZCB0aGUgcmlnaHQgd2FsbCBvZiB0aGUgc2Vjb25kIGNlbGxcbiAgICAgIGdyaWRbcm93MV1bY29sMV0ubGVmdCA9IGZhbHNlO1xuICAgICAgZ3JpZFtyb3cyXVtjb2wyXS5yaWdodCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qKlxuICAqIEFkZHMgYSB3YWxsIGJldHdlZW4gdHdvIGNlbGxzXG4gICogXG4gICogQHBhcmFtIHtBcnJheX0gZ3JpZCAtIFRoZSAyRCBncmlkIHJlcHJlc2VudGluZyB0aGUgbWF6ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0gcm93MSAtIFRoZSByb3cgaW5kZXggb2YgdGhlIGZpcnN0IGNlbGwuXG4gICogQHBhcmFtIHtudW1iZXJ9IGNvbDEgLSBUaGUgY29sdW1uIGluZGV4IG9mIHRoZSBmaXJzdCBjZWxsLlxuICAqIEBwYXJhbSB7bnVtYmVyfSByb3cyIC0gVGhlIHJvdyBpbmRleCBvZiB0aGUgc2Vjb25kIGNlbGwuXG4gICogQHBhcmFtIHtudW1iZXJ9IGNvbDIgLSBUaGUgY29sdW1uIGluZGV4IG9mIHRoZSBzZWNvbmQgY2VsbC5cbiAgKi9cbiBleHBvcnQgZnVuY3Rpb24gYWRkV2FsbChncmlkLCByb3cxLCBjb2wxLCByb3cyLCBjb2wyKSB7XG4gICBjb25zdCBjb2xzID0gZ3JpZFswXS5sZW5ndGg7XG4gICBjb25zdCByb3dzID0gZ3JpZC5sZW5ndGhcbiAgIGlmIChyb3cxIDwgMCB8fCByb3cyIDwgMCB8fCBjb2wxIDwgMCB8fCBjb2wyIDwgMCB8fCByb3cxID49IHJvd3MgfHwgcm93MiA+PSByb3dzfHwgY29sMSA+PSBjb2xzICB8fCBjb2wyID49IGNvbHMpIHJldHVyblxuICAgICBpZiAocm93MSA8IHJvdzIpIHtcbiAgICAgICAvLyBUaGUgc2Vjb25kIGNlbGwgaXMgYmVsb3cgdGhlIGZpcnN0IGNlbGwsIHNvIGFkZCB0aGUgYm90dG9tIHdhbGwgb2YgdGhlIGZpcnN0IGNlbGwgYW5kIHRoZSB0b3Agd2FsbCBvZiB0aGUgc2Vjb25kIGNlbGxcbiAgICAgICBncmlkW3JvdzFdW2NvbDFdLmJvdHRvbSA9IHRydWU7XG4gICAgICAgZ3JpZFtyb3cyXVtjb2wyXS50b3AgPSB0cnVlO1xuICAgICB9IGVsc2UgaWYgKHJvdzEgPiByb3cyKSB7XG4gICAgICAgLy8gVGhlIHNlY29uZCBjZWxsIGlzIGFib3ZlIHRoZSBmaXJzdCBjZWxsLCBzbyBhZGQgdGhlIHRvcCB3YWxsIG9mIHRoZSBmaXJzdCBjZWxsIGFuZCB0aGUgYm90dG9tIHdhbGwgb2YgdGhlIHNlY29uZCBjZWxsXG4gICAgICAgZ3JpZFtyb3cxXVtjb2wxXS50b3AgPSB0cnVlO1xuICAgICAgIGdyaWRbcm93Ml1bY29sMl0uYm90dG9tID0gdHJ1ZTtcbiAgICAgfSBlbHNlIGlmIChjb2wxIDwgY29sMikge1xuICAgICAgIC8vIFRoZSBzZWNvbmQgY2VsbCBpcyB0byB0aGUgcmlnaHQgb2YgdGhlIGZpcnN0IGNlbGwsIHNvIGFkZCB0aGUgcmlnaHQgd2FsbCBvZiB0aGUgZmlyc3QgY2VsbCBhbmQgdGhlIGxlZnQgd2FsbCBvZiB0aGUgc2Vjb25kIGNlbGxcbiAgICAgICBncmlkW3JvdzFdW2NvbDFdLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICBncmlkW3JvdzJdW2NvbDJdLmxlZnQgPSB0cnVlO1xuICAgICB9IGVsc2UgaWYgKGNvbDEgPiBjb2wyKSB7XG4gICAgICAgLy8gVGhlIHNlY29uZCBjZWxsIGlzIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBjZWxsLCBzbyBhZGQgdGhlIGxlZnQgd2FsbCBvZiB0aGUgZmlyc3QgY2VsbCBhbmQgdGhlIHJpZ2h0IHdhbGwgb2YgdGhlIHNlY29uZCBjZWxsXG4gICAgICAgZ3JpZFtyb3cxXVtjb2wxXS5sZWZ0ID0gdHJ1ZTtcbiAgICAgICBncmlkW3JvdzJdW2NvbDJdLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgfVxuICAgfTtcblxuXG4vKipcbiAqIEdldCB0aGUgdmFsaWQgKHVuYmxvY2tlZCkgbmVpZ2hib3JzIG9mIGEgZ2l2ZW4gY2VsbFxuICogXG4gKiBAcGFyYW0ge0FycmF5fSBncmlkIC0gVGhlIDJEIGdyaWQgcmVwcmVzZW50aW5nIHRoZSBtYXplXG4gKiBAcGFyYW0ge09iamVjdH0gY2VsbCAtIFRoZSBjdXJyZW50IGNlbGxcbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHZhbGlkICh1bmJsb2NrZWQpIG5laWdoYm9ycyBvZiB0aGUgY3VycmVudCBjZWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZE5laWdoYm9ycyhncmlkLCBjZWxsKXtcbiAgbGV0IG5laWdoYm9ycyA9IFtdO1xuICBsZXQgcm93ID0gY2VsbC5yb3c7XG4gIGxldCBjb2wgPSBjZWxsLmNvbDtcbiAgaWYgKHJvdyA+IDAgJiYgIWdyaWRbcm93XVtjb2xdLnRvcCkge1xuICAgICAgbmVpZ2hib3JzLnB1c2goeyByb3c6IHJvdyAtIDEsIGNvbDogY29sIH0pO1xuICB9XG4gIGlmIChjb2wgPCBncmlkWzBdLmxlbmd0aCAtIDEgJiYgIWdyaWRbcm93XVtjb2wgKyAxXS5sZWZ0KSB7XG4gICAgICBuZWlnaGJvcnMucHVzaCh7IHJvdzogcm93LCBjb2w6IGNvbCArIDEgfSk7XG4gIH1cbiAgaWYgKHJvdyA8IGdyaWQubGVuZ3RoIC0gMSAmJiAhZ3JpZFtyb3cgKyAxXVtjb2xdLnRvcCkge1xuICAgICAgbmVpZ2hib3JzLnB1c2goeyByb3c6IHJvdyArIDEsIGNvbDogY29sIH0pO1xuICB9XG4gIGlmIChjb2wgPiAwICYmICFncmlkW3Jvd11bY29sIC0gMV0ucmlnaHQpIHtcbiAgICAgIG5laWdoYm9ycy5wdXNoKHsgcm93OiByb3csIGNvbDogY29sIC0gMSB9KTtcbiAgfVxuICByZXR1cm4gbmVpZ2hib3JzO1xufTtcbiAgIiwiLyoqXG4gKiBDcmVhdGVzIGEgbWF6ZSB3aXRoIG5vIGJvcmRlcnNcbiAqIFxuICogQHBhcmFtIHtBcnJheX0gZ3JpZCAtIEEgMkQgYXJyYXkgcmVwcHJlc2VudGluZyB0aGUgbWF6ZSBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRW1wdHlNYXplKGdyaWQpe1xuICAgIGNvbnN0IHJvd3MgPSBncmlkLmxlbmd0aDtcbiAgICBjb25zdCBjb2xzID0gZ3JpZFswXS5sZW5ndGg7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICAgICAgZ3JpZFtpXVtqXS50b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIGdyaWRbaV1bal0ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGdyaWRbaV1bal0uYm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICBncmlkW2ldW2pdLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi51bnNoaWZ0KHtyb3c6IGksIGNvbDogan0pXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBhbmltYXRpb247XG59OyIsImltcG9ydCB7IHJlbW92ZVdhbGwgfSBmcm9tIFwiLi4vbWF6ZS11dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByYW5kb20gbWF6ZSB3aXRoIHJhbmRvbSBib3JkZXJzXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWQgLSBBIDJEIGFycmF5IHJlcHByZXNlbnRpbmcgdGhlIG1hemUgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU1hemUoZ3JpZCwgc3RhcnRjZWxsKXtcbiAgICBjb25zdCByb3dzID0gZ3JpZC5sZW5ndGg7XG4gICAgY29uc3QgY29scyA9IGdyaWRbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICAgICAgbGV0IHByb2JhID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgPiBwcm9iYSkgPyByZW1vdmVXYWxsKGdyaWQsIGksIGosIGkgKyAxLCBqKSA6ICcnO1xuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgPiAxLXByb2JhKSA/IHJlbW92ZVdhbGwoZ3JpZCwgaSwgaiwgaSwgaiArIDEpIDogJyc7XG4gICAgICAgICAgICAoTWF0aC5yYW5kb20oKSA+IHByb2JhKSA/IHJlbW92ZVdhbGwoZ3JpZCwgaSwgaiwgaS0xLCBqKSA6ICcnO1xuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgPiAxLXByb2JhKSA/IHJlbW92ZVdhbGwoZ3JpZCwgaSwgaiwgaSwgaiAtIDEpOiAnJztcbiAgICAgICAgICAgIGFuaW1hdGlvbi51bnNoaWZ0KHtyb3c6IGksIGNvbDogan0pO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uO1xufTtcbiIsImltcG9ydCB7Z2V0UmFuZG9tTmVpZ2hib3IsIHJlbW92ZVdhbGwgfSBmcm9tICcuLi9tYXplLXV0aWxzJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBtYXplIHVzaW5nIHRoZSBSYW5kb21pemVkIERlcHRoLUZpcnN0IFNlYXJjaCAoUkRGUykgYWxnb3JpdGhtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWQgLSBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemUuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhcnRDZWxsIC0gVGhlIHN0YXJ0aW5nIGNlbGwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTWF6ZVJERlMoZ3JpZCwgc3RhcnRDZWxsKSB7XG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgc3RhY2sucHVzaChzdGFydENlbGwpO1xuICAgXG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICBncmlkW2N1cnJlbnRDZWxsLnJvd11bY3VycmVudENlbGwuY29sXS52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGN1cnJlbnRDZWxsKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB1bnZpc2l0ZWQgbmVpZ2hib3JzIG9mIHRoZSBjdXJyZW50IGNlbGxcbiAgICAgICAgY29uc3QgcmFuZG9tTmVpZ2hib3IgPSBnZXRSYW5kb21OZWlnaGJvcihncmlkLCBjdXJyZW50Q2VsbC5yb3csIGN1cnJlbnRDZWxsLmNvbCk7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSB1bnZpc2l0ZWQgbmVpZ2hib3JzLCBjaG9vc2UgYSByYW5kb20gb25lIGFuZCByZW1vdmUgdGhlIHdhbGwgYmV0d2VlbiB0aGVtXG4gICAgICAgIGlmIChyYW5kb21OZWlnaGJvcikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZW1vdmVXYWxsKGdyaWQsIGN1cnJlbnRDZWxsLnJvdywgY3VycmVudENlbGwuY29sLCByYW5kb21OZWlnaGJvci5yb3csIHJhbmRvbU5laWdoYm9yLmNvbCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJhbmRvbU5laWdoYm9yKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59IiwiaW1wb3J0IGdlbmVyYXRlRW1wdHlNYXplIGZyb20gXCIuL2VtcHR5TWF6ZVwiO1xuaW1wb3J0IHsgYWRkV2FsbCB9IGZyb20gXCIuLi9tYXplLXV0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgbWF6ZSB3aXRoIHRoZSByZWN1cmlzdmUgZGl2aXNpb24gbWV0aG9kLlxuICogXG4gKiBAcGFyYW0ge0FycmF5fSBncmlkIC0gVGhlIDJEIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdyaWRcbiAqIEByZXR1cm5zIHtBcnJheX0gLSBBcnJheSBjb250YWluaW5nIHRoZSBhbmltYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlRGl2aXNpb24oZ3JpZCl7XG4gIC8vIEVtcHR5IHRoZSBncmlkXG4gIGNvbnN0IGFuaW1hdGlvbnMgPSBnZW5lcmF0ZUVtcHR5TWF6ZShncmlkKTtcblxuICAvLyBEZWNsYXJlIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHBvaW50cyBvZiB0aGUgZ3JpZCAodG9wLWxlZnQgYW5kIGJvdHRvbS1yaWdodCBjb3JuZXIpXG4gIGNvbnN0IHN0YXJ0Q2VsbCA9IHtyb3c6MCwgY29sOjB9O1xuICBjb25zdCBlbmRDZWxsID0ge3Jvdzo0NSwgY29sOjI1fTtcbiAgICBcbiAgLy8gUmVjdXJzaXZlbHkgZGl2aWRlXG4gIGRpdmlkZU1hemUoZ3JpZCwgc3RhcnRDZWxsLnJvdywgc3RhcnRDZWxsLmNvbCwgZW5kQ2VsbC5yb3csIGVuZENlbGwuY29sKTtcblxuICAgLy8gUmlnaHQgbm93IHRoZSBhbmltYXRpb24ganVzdCB2aXN0cyBlYWNoIGNlbGwgaW4gb3JkZXIuXG4gICAvLyBUbyBhbmltYXRlIHRoZSBkaXZpZGUgbWF6ZSBjaGFuZ2VzIGFyZSByZXF1aXJlZC5cbiAgcmV0dXJuIGFuaW1hdGlvbnM7XG59O1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHtBcnJheX0gZ3JpZCAtIFRoZSAyRCBhcnJheSByZXByZXNlbnRpbmcgdGhlIG1hemUgZ3JpZFxuICogQHBhcmFtIHsqfSBjb2wxIC0gXG4gKiBAcGFyYW0geyp9IHJvdzEgXG4gKiBAcGFyYW0geyp9IGNvbDIgXG4gKiBAcGFyYW0geyp9IHJvdzIgXG4gKiBAcmV0dXJucyBcbiAqL1xuY29uc3QgZGl2aWRlTWF6ZSA9IChncmlkLCByb3cxLCBjb2wxLCByb3cyLCBjb2wyKSA9PiB7XG4gIC8vIElmIHRoZSBncmlkIGhhcyBiZWNvbWUgdG8gc21hbGwgdG8gZGl2aWRlIHJldHVyblxuICBpZiAoY29sMiAtIGNvbDEgPD0gMSB8fCByb3cyIC0gcm93MSA8PSAxKSByZXR1cm47XG5cbiAgLy8gRGl2aWRlIGFsb25nIHRoZSBheGlzIHdoaWNoIGlzIGxvbmdlclxuICBpZiAoY29sMiAtIGNvbDEgPiByb3cyIC0gcm93MSkge1xuICAgIC8vIEdldCBhIHJhbmRvbSBwYXJ0aXRpb24gYWxvbmcgdGhlIGNvbHVtbnNcbiAgICBsZXQgcGFydGl0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbDIgLSBjb2wxIC0gMSkpICsgY29sMSArIDE7XG4gICAgLy8gR2V0IGEgcmFuZG9tIGdhcCBhbGxvbmcgdGhlIHJvd3NcbiAgICBsZXQgZ2FwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHJvdzIgLSByb3cxICsgMSkpICsgcm93MTtcblxuICAgIC8vIEFkZCB3YWxscyBhbG9uZyB0aGUgcGFydGl0aW9uIHNraXBwaW5nIHRoZSBnYXBcbiAgICBmb3IgKGxldCBpID0gcm93MTsgaSA8PSByb3cyOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBnYXApIGNvbnRpbnVlO1xuICAgICAgYWRkV2FsbChncmlkLCBwYXJ0aXRpb24sIGksIHBhcnRpdGlvbisxLCBpKVxuICAgIH07XG4gICAgXG4gICAgLy8gUmVjdXJzaXZlbHkgZGl2aWRlIHRoZSB0d28gc2VjdGlvbiBkZWZpbmVkIGJ5IHRoZSBwYXJ0aXRpb25cbiAgICBkaXZpZGVNYXplKGdyaWQsIHJvdzEsIGNvbDEsIHJvdzIsIHBhcnRpdGlvbik7XG4gICAgZGl2aWRlTWF6ZShncmlkLCByb3cxLCAgcGFydGl0aW9uICsgMSwgcm93MiwgY29sMik7XG4gIH0gZWxzZSB7XG5cbiAgICAvLyBHZXQgYSByYW5kb20gcGFydGl0aW9uIGFsb25nIHRoZSByb3dzXG4gICAgbGV0IHBhcnRpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChyb3cyIC0gcm93MSAtIDEpKSArIHJvdzEgKyAxO1xuICAgIC8vIEdldCBhIHJhbmRvbSBnYXAgYWxsb25nIHRoZSBjb2xzXG4gICAgbGV0IGdhcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjb2wyIC0gY29sMSArIDEpKSArIGNvbDE7XG5cbiAgICAvLyBBZGQgd2FsbHMgYWxvbmcgdGhlIHBhcnRpdGlvbiBza2lwcGluZyB0aGUgZ2FwXG4gICAgZm9yIChsZXQgaSA9IGNvbDE7IGkgPD0gY29sMjsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gZ2FwKSBjb250aW51ZTtcbiAgICAgIGFkZFdhbGwoZ3JpZCwgaSwgcGFydGl0aW9uLCBpLCBwYXJ0aXRpb24rMSk7XG4gICAgfTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGRpdmlkZSB0aGUgdHdvIHNlY3Rpb24gZGVmaW5lZCBieSB0aGUgcGFydGl0aW9uXG4gICAgZGl2aWRlTWF6ZShncmlkLCByb3cxLCBjb2wxLCBwYXJ0aXRpb24sIGNvbDIpO1xuICAgIGRpdmlkZU1hemUoZ3JpZCwgcGFydGl0aW9uICsgMSwgY29sMSwgcm93MiwgY29sMik7XG4gIH1cbn07XG5cbiIsIi8qKiBBIHNpbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHByaW9yaXR5IHF1ZXVlICovXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhcCA9IFtdO1xuICAgIH1cblxuICAgIGFkZCh2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5oZWFwLnB1c2goW3ZhbHVlLCBwcmlvcml0eV0pO1xuICAgICAgICB0aGlzLnNvcnQoKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBzb3J0KCkge1xuICAgICAgICB0aGlzLmhlYXAuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuICAgIH1cblxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAubGVuZ3RoID09PSAwO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ29uc3RydWN0cyB0aGUgcGF0aCBmcm9tIHRoZSBlbmQgY2VsbCB0byB0aGUgc3RhcnQgY2VsbFxuICogXG4gKiBAcGFyYW0ge09iamVjdH0gZW5kQ2VsbCAtIFRoZSBlbmQgY2VsbFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0Q2VsbCAtIFRoZSBzdGFydCBjZWxsXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJlbnRzIC0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmVudCBvZiBlYWNoIGNlbGxcbiAqIEByZXR1cm5zIHtBcnJheX0gLSBBcnJheSBjb250YWluaW5nIHRoZSBwYXRoIGZyb20gdGhlIGVuZCBjZWxsIHRvIHRoZSBzdGFydCBjZWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RfcGF0aChlbmRDZWxsLCBzdGFydENlbGwsIHBhcmVudHMpIHtcbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBlbmRDZWxsO1xuICAgIHdoaWxlIChjdXJyZW50ICE9PSBzdGFydENlbGwpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50KVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIHBhdGgudW5zaGlmdChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IHBhcmVudHNbYCR7Y3VycmVudC5yb3d9LCR7Y3VycmVudC5jb2x9YF07XG4gICAgfVxuICAgIHBhdGgudW5zaGlmdChzdGFydENlbGwpO1xuICAgIHJldHVybiBwYXRoO1xufTtcbiIsImltcG9ydCB7IGdldFZhbGlkTmVpZ2hib3JzIH0gZnJvbSBcIi4uL21hemUtdXRpbHNcIlxuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSAsIGNvbnN0cnVjdF9wYXRofSBmcm9tIFwiLi9wYXRoLXV0aWxzXCI7XG5cbi8qKlxuICogUGVyZm9ybSBBKiBzZWFyY2ggb24gdGhlIGdyaWQgdG8gZmluZCB0aGUgc2hvcnRlc3QgcGF0aCBmcm9tIHN0YXJ0IHRvIGVuZC5cbiAqIFxuICogQHBhcmFtIHtBcnJheX0gZ3JpZCAtIFRoZSAyRCBncmlkIHJlcHJlc2VudGluZyB0aGUgbWF6ZVxuICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0Q2VsbCAtIFRoZSBzdGFydGluZyBjZWxsXG4gKiBAcGFyYW0ge09iamVjdH0gZW5kQ2VsbCAtIFRoZSBlbmRpbmcgY2VsbFxuICogQHJldHVybnMge09iamVjdH0gVGhlIGFuaW1hdGlvbiBvZiB0aGUgYWxnb3JpdGhtIGFuZCB0aGUgYW5pbWF0aW9uIG9mIHRoZSBwYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaEFTdGFyKGdyaWQsIHN0YXJ0Q2VsbCwgZW5kQ2VsbCl7XG4gICAgLy8gSW5pdGlhbGl6ZSBhIHByaW9ydHkgcXVldWVcbiAgICBjb25zdCBwcmlvcml0eVF1ZXVlID0gbmV3IFByaW9yaXR5UXVldWUoKTtcbiAgICBwcmlvcml0eVF1ZXVlLmFkZChzdGFydENlbGwsIDAgKyBnZXRIZXVyaXN0aWMoc3RhcnRDZWxsLCBlbmRDZWxsKSk7XG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBhbmltYXRpb25cbiAgICBjb25zdCBhbmltYXRpb25zID0gW11cbiAgICAvLyBJbml0aWFsaXplIGFuIG9iamVjdCB0byBrZWVwIHRyYWNrIG9mIHRoZSBkaXN0YW5jZXNcbiAgICBjb25zdCBkaXN0YW5jZXMgPSB7fTtcbiAgICBkaXN0YW5jZXNbYCR7c3RhcnRDZWxsLnJvd30sJHtzdGFydENlbGwuY29sfWBdID0gMDtcbiAgICAvLyBJbml0aWFsaXplIGFuIG9iamVjdCB0byBrZWVwIHRyYWNrIG9mIHRoZSAgcGFyZW50c1xuICAgIGNvbnN0IHBhcmVudHMgPSB7fTtcblxuICAgIHdoaWxlKCFwcmlvcml0eVF1ZXVlLmlzRW1wdHkoKSl7XG4gICAgICAgIC8vIERlcXVldWUgdGhlIGNlbGwgd2l0aCB0aGUgbG93ZXN0IHRvdGFsIGNvc3QgKGRpc3RhbmNlICsgaGV1cmlzdGljKVxuICAgICAgICBsZXQgW2N1cnJlbnRDZWxsLCBjdXJyZW50RGlzdGFuY2VdID0gcHJpb3JpdHlRdWV1ZS5yZW1vdmUoKTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGNlbGwgaXMgdGhlIHNvbHV0aW9uXG4gICAgICAgIGlmICgoY3VycmVudENlbGwucm93ID09PSBlbmRDZWxsLnJvdykgJiYgKGN1cnJlbnRDZWxsLmNvbCA9PT0gZW5kQ2VsbC5jb2wpKSB7XG4gICAgICAgICAgICAvLyBTb2x1dGlvbiBmb3VuZCwgc3RvcCB0aGUgaXRlcmF0aW9uc1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2UgY29uc2lkZXIgYSBjZWxsIHZpc2l0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mIHRoZSBhbmltYXRpb24gaWYgaXQgcGFzc2VzIHRoZSBwcmV2aW91cyBjb250cm9sIHN0YXRlbWVudHNcbiAgICAgICAgYW5pbWF0aW9ucy51bnNoaWZ0KGN1cnJlbnRDZWxsKTtcblxuICAgICAgICAvLyBHZXQgdGhlIG5laWdoYm9ycyBvZiB0aGUgY2VsbFxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gZ2V0VmFsaWROZWlnaGJvcnMoZ3JpZCwgY3VycmVudENlbGwpO1xuICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIG5laWdoYm9ycykge1xuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIG5laWdoYm9yXG4gICAgICAgICAgICBsZXQgbmV3RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2UgKyBncmlkW25laWdoYm9yLnJvd11bbmVpZ2hib3IuY29sXS53ZWlnaHQ7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGRpc3RhbmNlIGlmIHRoZSBjdXJyZW50IGRpc3RhbmNlIGlzIHNob3J0ZXIgdGhhbiB0aGUgcHJldmlvdXMgZGlzdGFuY2VcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhZGlzdGFuY2VzW2Ake25laWdoYm9yLnJvd30sJHtuZWlnaGJvci5jb2x9YF0gfHxcbiAgICAgICAgICAgICAgICBuZXdEaXN0YW5jZSA8IGRpc3RhbmNlc1tgJHtuZWlnaGJvci5yb3d9LCR7bmVpZ2hib3IuY29sfWBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbYCR7bmVpZ2hib3Iucm93fSwke25laWdoYm9yLmNvbH1gXSA9IG5ld0Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgIC8vIEVucXVldWUgdGhlIG5laWdoYm9yIHdpdGggdGhlIG5ldyB0b3RhbCBjb3N0XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5hZGQobmVpZ2hib3IsIG5ld0Rpc3RhbmNlICsgZ2V0SGV1cmlzdGljKG5laWdoYm9yLCBlbmRDZWxsKSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGNlbGwgYXMgdGhlIHBhcmVudCBvZiB0aGUgbmVpZ2hib3IgY2VsbFxuICAgICAgICAgICAgICAgIHBhcmVudHNbYCR7bmVpZ2hib3Iucm93fSwke25laWdoYm9yLmNvbH1gXSA9IGN1cnJlbnRDZWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAgLy8gQ29uc3RydWN0IHRoZSBwYXRoXG4gICAgIGNvbnN0IHBhdGggPSBjb25zdHJ1Y3RfcGF0aChlbmRDZWxsLCBzdGFydENlbGwsIHBhcmVudHMpO1xuICAgIFxuICAgIHJldHVybiB7IGFuaW1hdGlvbjogYW5pbWF0aW9ucywgcGF0aDogcGF0aCB9O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBjZWxsc1xuICogXG4gKiBAcGFyYW0ge09iamVjdH0gY2VsbCAtIEEgY2VsbCBvZiB0aGUgZ3JpZFxuICogQHBhcmFtIHtPYmplY3R9IGVuZENlbGwgLSBUaGUgZW5kIGNlbGwgb2YgdGhlIGdyaWRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBkaXN0YW5jZSBmcm9tIHRoZSBjZWxsIHRvIHRoZSBlbmQgY2VsbC5cbiAqL1xuZnVuY3Rpb24gZ2V0SGV1cmlzdGljKGNlbGwsIGVuZENlbGwpIHtcbiAgICAvLyBNYW5oYXR0YW4gRGlzdGFuY2VcbiAgICAvL3JldHVybiBNYXRoLmFicyhjZWxsLnJvdyAtIGVuZENlbGwucm93KSArIE1hdGguYWJzKGNlbGwuY29sIC0gZW5kQ2VsbC5jb2wpO1xuXG4gICAgLy8gRXVjbGlkZWFuIERpc3RhbmNlXG4gICAgcmV0dXJuIE1hdGguc3FydCgoKGNlbGwucm93IC0gZW5kQ2VsbC5yb3cpKioyKSArICgoY2VsbC5jb2wgLSBlbmRDZWxsLmNvbCkqKjIpKTtcbn07XG5cbiIsImltcG9ydCB7IGdldFZhbGlkTmVpZ2hib3JzIH0gZnJvbSBcIi4uL21hemUtdXRpbHNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdF9wYXRofSBmcm9tIFwiLi9wYXRoLXV0aWxzXCI7XG5cbi8qKlxuICogUGVyZm9ybSBhIEJyZWFkdGggRmlyc3QgU2VhcmNoIChCRlMpIG9uIHRoZSBncmlkIHRvIGZpbmQgYSBwYXRoIGZyb20gc3RhcnQgdG8gZW5kXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXl9IGdyaWQgLSBUaGUgMkQgZ3JpZCByZXByZXNlbnRpbmcgdGhlIG1hemVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFydCAtIFRoZSBzdGFydGluZyBjZWxsXG4gKiBAcGFyYW0ge09iamVjdH0gZW5kIC0gVGhlIGVuZCBjZWxsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBwYXRoIGZyb20gc3RhcnQgdG8gZW5kLCByZXByZXNlbnRlZCBhcyBhbiBhcnJheSBvZiBjZWxsc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hCRlMoZ3JpZCwgc3RhcnQsIGVuZCl7XG4gICAgLy8gSW5pdGlhbGl6ZSBhIHF1ZXVlXG4gICAgY29uc3QgcXVldWUgPSBbc3RhcnRdO1xuICAgIC8vIEluaXRpYWxpemUgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgYW5pbWF0aW9uXG4gICAgY29uc3QgYW5pbWF0aW9uID0gW3N0YXJ0XTtcbiAgICAvLyBJbml0aWFsaXplIGEgc2V0IHRvIGtlZXAgdHJhY2sgb2YgdmlzaXRlZCBuZWlnaGJvdXJzIHRvIGF2b2lkIGxvb3BzXG4gICAgY29uc3QgdmlzaXRlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAvLyBJbml0aWFsaXplIGFuIG9iamVjdCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzXG4gICAgY29uc3QgcGFyZW50ID0ge31cblxuICAgIC8vIFJlcGVhdCB3aGlsZSB0aGUgc3RhY2sgaGFzIGNlbGxzXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCl7XG4gICAgICAgIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgcXVldWVcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBjZWxsIGlzIHRoZSBzb2x1dGlvblxuICAgICAgICBpZiAoKGN1cnJlbnRDZWxsLnJvdyA9PT0gZW5kLnJvdykgJiYgKGN1cnJlbnRDZWxsLmNvbCA9PT0gZW5kLmNvbCkpe1xuICAgICAgICAgICAgLy8gU29sdXRpb24gZm91bmQgc3RvcCB0aGUgaXRlcmF0aW9uc1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgY2VsbCBpcyBhIG1lbWJlciBvZiB0aGUgdmlzaXRlZCBzZXRcbiAgICAgICAgaWYgKHZpc2l0ZWRTZXQuaGFzKGAke2N1cnJlbnRDZWxsLnJvd30sJHtjdXJyZW50Q2VsbC5jb2x9YCkpe1xuICAgICAgICAgICAgLy8gR28gdG8gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBXZSBjb25zaWRlciBhIGNlbGwgdmlzaXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2YgdGhlIGFuaW1hdGlvbiBpZiBpdCBwYXNzZXMgdGhlIHByZXZpb3VzIGNvbnRyb2wgc3RhdGVtZW50c1xuICAgICAgICBhbmltYXRpb24udW5zaGlmdChjdXJyZW50Q2VsbCk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGNlbGwgdG8gdGhlIHZpc2l0ZWQgc2V0XG4gICAgICAgIHZpc2l0ZWRTZXQuYWRkKGAke2N1cnJlbnRDZWxsLnJvd30sJHtjdXJyZW50Q2VsbC5jb2x9YCk7XG4gICAgICAgIC8vIEdldCB0aGUgbmVpZ2hib3JzIG9mIHRoZSBjZWxsXG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSBnZXRWYWxpZE5laWdoYm9ycyhncmlkLCBjdXJyZW50Q2VsbCk7XG4gICAgICAgIGZvciAoY29uc3QgbmVpZ2hib3Igb2YgbmVpZ2hib3JzKXtcbiAgICAgICAgICAgIC8vIEVucXVldWUgdGhlIG5laWdoYm9yc1xuICAgICAgICAgICAgcXVldWUucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGN1cnJlbnQgY2VsbCBhcyB0aGUgcGFyZW50IG9mIHRoZSBuZWlnaGJvciBjZWxsXG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRTZXQuaGFzKGAke25laWdoYm9yLnJvd30sJHtuZWlnaGJvci5jb2x9YCkpe1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgY3VycmVudCBjZWxsIGFzIHRoZSBwYXJlbnQgb2YgdGhlIG5laWdoYm9yIGNlbGxcbiAgICAgICAgICAgICAgICBwYXJlbnRbYCR7bmVpZ2hib3Iucm93fSwke25laWdoYm9yLmNvbH1gXSA9IGN1cnJlbnRDZWxsOyBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgcGF0aFxuICAgIGNvbnN0IHBhdGggPSBjb25zdHJ1Y3RfcGF0aChlbmQsIHN0YXJ0LCBwYXJlbnQpO1xuICAgIHJldHVybiB7YW5pbWF0aW9uOiBhbmltYXRpb24sIHBhdGg6IHBhdGh9O1xufTtcbiIsImltcG9ydCB7IGdldFZhbGlkTmVpZ2hib3JzIH0gZnJvbSBcIi4uL21hemUtdXRpbHNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdF9wYXRoIH0gZnJvbSBcIi4vcGF0aC11dGlsc1wiO1xuXG4vKipcbiAqIFBlcmZvcm0gYSBEZXB0aCBGaXJzdCBTZWFyY2ggKERGUykgb24gdGhlIGdyaWQgdG8gZmluZCBhIHBhdGggZnJvbSBzdGFydCB0byBlbmRcbiAqIFxuICogQHBhcmFtIHtBcnJheX0gZ3JpZCAtIFRoZSAyRCBncmlkIHJlcHJlc2VudGluZyB0aGUgbWF6ZVxuICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0IC0gVGhlIHN0YXJ0aW5nIGNlbGxcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbmQgLSBUaGUgZW5kIGNlbGxcbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHBhdGggZnJvbSBzdGFydCB0byBlbmQsIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIGNlbGxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaERGUyhncmlkLCBzdGFydCwgZW5kKXtcbiAgICAvLyBJbml0aWFsaXplIGEgc3RhY2tcbiAgICBjb25zdCBzdGFjayA9IFtzdGFydF07XG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBhbmltYXRpb25cbiAgICBjb25zdCBhbmltYXRpb24gPSBbc3RhcnRdO1xuICAgIC8vIEluaXRpYWxpemUgYSBzZXQgdG8ga2VlcCB0cmFjayBvZiB2aXNpdGVkIG5laWdoYm91cnMgdG8gYXZvaWQgbG9vcHNcbiAgICBjb25zdCB2aXNpdGVkU2V0ID0gbmV3IFNldCgpO1xuICAgIC8vIEluaXRpYWxpemUgYW4gb2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHNcbiAgICBjb25zdCBwYXJlbnQgPSB7fVxuXG4gICAgLy8gUmVwZWF0IHdoaWxlIHRoZSBzdGFjayBoYXMgY2VsbHNcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKXtcbiAgICAgICAgLy8gR2V0IHRoZSB0b3AgZWxlbWVudCBvZiB0aGUgc3RhY2tcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgY2VsbCBpcyB0aGUgc29sdXRpb25cbiAgICAgICAgaWYgKChjdXJyZW50Q2VsbC5yb3cgPT09IGVuZC5yb3cpICYmIChjdXJyZW50Q2VsbC5jb2wgPT09IGVuZC5jb2wpKXtcbiAgICAgICAgICAgIC8vIFNvbHV0aW9uIGZvdW5kIHN0b3AgdGhlIGl0ZXJhdGlvbnNcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGNlbGwgaXMgYSBtZW1iZXIgb2YgdGhlIHZpc2l0ZWQgc2V0XG4gICAgICAgIGlmICh2aXNpdGVkU2V0LmhhcyhgJHtjdXJyZW50Q2VsbC5yb3d9LCR7Y3VycmVudENlbGwuY29sfWApKXtcbiAgICAgICAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2UgY29uc2lkZXIgYSBjZWxsIHZpc2l0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mIHRoZSBhbmltYXRpb24gaWYgaXQgcGFzc2VzIHRoZSBwcmV2aW91cyBjb250cm9sIHN0YXRlbWVudHNcbiAgICAgICAgYW5pbWF0aW9uLnVuc2hpZnQoY3VycmVudENlbGwpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgY3VycmVudCBjZWxsIHRvIHRoZSB2aXNpdGVkIHNldFxuICAgICAgICB2aXNpdGVkU2V0LmFkZChgJHtjdXJyZW50Q2VsbC5yb3d9LCR7Y3VycmVudENlbGwuY29sfWApO1xuICAgICAgICAvLyBHZXQgdGhlIG5laWdoYm9ycyBvZiB0aGUgY2VsbFxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gZ2V0VmFsaWROZWlnaGJvcnMoZ3JpZCwgY3VycmVudENlbGwpO1xuICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIG5laWdoYm9ycyl7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY3VycmVudCBjZWxsIGFzIHRoZSBwYXJlbnQgb2YgdGhlIG5laWdoYm9yIGNlbGxcbiAgICAgICAgICAgIGlmICghdmlzaXRlZFNldC5oYXMoYCR7bmVpZ2hib3Iucm93fSwke25laWdoYm9yLmNvbH1gKSl7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGNlbGwgYXMgdGhlIHBhcmVudCBvZiB0aGUgbmVpZ2hib3IgY2VsbFxuICAgICAgICAgICAgICAgIHBhcmVudFtgJHtuZWlnaGJvci5yb3d9LCR7bmVpZ2hib3IuY29sfWBdID0gY3VycmVudENlbGw7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBwYXRoXG4gICAgIGNvbnN0IHBhdGggPSBjb25zdHJ1Y3RfcGF0aChlbmQsIHN0YXJ0LCBwYXJlbnQpO1xuICAgIFxuICAgIFxuICAgIHJldHVybiB7YW5pbWF0aW9uOiBhbmltYXRpb24sIHBhdGg6IHBhdGh9O1xufTtcbiIsImltcG9ydCB7IGdldFZhbGlkTmVpZ2hib3JzIH0gZnJvbSBcIi4uL21hemUtdXRpbHNcIjtcbmltcG9ydCB7IFByaW9yaXR5UXVldWUgLCBjb25zdHJ1Y3RfcGF0aH0gZnJvbSBcIi4vcGF0aC11dGlsc1wiO1xuXG4vKipcbiAqIFBlcmZvcm0gRGlqa3N0cmEncyBhbGdvcml0aG0gb24gdGhlIGdyaWQgdG8gZmluZCB0aGUgc2hvcnRlc3QgcGF0aCBmcm9tIHN0YXJ0IHRvIGVuZC5cbiAqIFxuICogQHBhcmFtIHtBcnJheX0gZ3JpZCAtIFRoZSAyRCBncmlkIHJlcHJlc2VudGluZyB0aGUgbWF6ZVxuICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0Q2VsbCAtIFRoZSBzdGFydGluZyBjZWxsXG4gKiBAcGFyYW0ge09iamVjdH0gZW5kQ2VsbCAtIFRoZSBlbmRpbmcgY2VsbFxuICogQHJldHVybnMge09iamVjdH0gVGhlIGFuaW1hdGlvbiBvZiB0aGUgYWxnb3JpdGhtIGFuZCB0aGUgYW5pbWF0aW9uIG9mIHRoZSBwYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaERpamtzdHJhKGdyaWQsIHN0YXJ0Q2VsbCwgZW5kQ2VsbCl7XG4gICAgLy8gSW5pdGlhbGl6ZSBhIHByaW9ydHkgcXVldWVcbiAgICBjb25zdCBwcmlvcml0eVF1ZXVlID0gbmV3IFByaW9yaXR5UXVldWUoKTtcbiAgICBwcmlvcml0eVF1ZXVlLmFkZChzdGFydENlbGwsIDApO1xuICAgIC8vIEluaXRpYWxpemUgYW4gYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgYW5pbWF0aW9uXG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdXG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiB0aGUgZGlzdGFuY2VzXG4gICAgY29uc3QgZGlzdGFuY2VzID0ge307XG4gICAgZGlzdGFuY2VzW2Ake3N0YXJ0Q2VsbC5yb3d9LCR7c3RhcnRDZWxsLmNvbH1gXSA9IDA7XG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiB0aGUgIHBhcmVudHNcbiAgICBjb25zdCBwYXJlbnRzID0ge307XG5cbiAgICB3aGlsZSghcHJpb3JpdHlRdWV1ZS5pc0VtcHR5KCkpe1xuICAgICAgICAvLyBEZXF1ZXVlIHRoZSBjZWxsIHdpdGggdGhlIGxvd2VzdCBkaXN0YW5jZVxuICAgICAgICBsZXQgW2N1cnJlbnRDZWxsLCBjdXJyZW50RGlzdGFuY2VdID0gcHJpb3JpdHlRdWV1ZS5yZW1vdmUoKTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGNlbGwgaXMgdGhlIHNvbHV0aW9uXG4gICAgICAgIGlmICgoY3VycmVudENlbGwucm93ID09PSBlbmRDZWxsLnJvdykgJiYgKGN1cnJlbnRDZWxsLmNvbCA9PT0gZW5kQ2VsbC5jb2wpKSB7XG4gICAgICAgICAgICAvLyBTb2x1dGlvbiBmb3VuZCwgc3RvcCB0aGUgaXRlcmF0aW9uc1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2UgY29uc2lkZXIgYSBjZWxsIHZpc2l0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mIHRoZSBhbmltYXRpb24gaWYgaXQgcGFzc2VzIHRoZSBwcmV2aW91cyBjb250cm9sIHN0YXRlbWVudHNcbiAgICAgICAgYW5pbWF0aW9ucy51bnNoaWZ0KGN1cnJlbnRDZWxsKTtcblxuICAgICAgICAvLyBHZXQgdGhlIG5laWdoYm9ycyBvZiB0aGUgY2VsbFxuICAgICAgICBsZXQgbmVpZ2hib3JzID0gZ2V0VmFsaWROZWlnaGJvcnMoZ3JpZCwgY3VycmVudENlbGwpO1xuICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIG5laWdoYm9ycykge1xuICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIG5laWdoYm9yXG4gICAgICAgICAgICBsZXQgbmV3RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2UgKyBncmlkW25laWdoYm9yLnJvd11bbmVpZ2hib3IuY29sXS53ZWlnaHQ7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGRpc3RhbmNlIGlmIHRoZSBjdXJyZW50IGRpc3RhbmNlIGlzIHNob3J0ZXIgdGhhbiB0aGUgcHJldmlvdXMgZGlzdGFuY2VcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhZGlzdGFuY2VzW2Ake25laWdoYm9yLnJvd30sJHtuZWlnaGJvci5jb2x9YF0gfHxcbiAgICAgICAgICAgICAgICBuZXdEaXN0YW5jZSA8IGRpc3RhbmNlc1tgJHtuZWlnaGJvci5yb3d9LCR7bmVpZ2hib3IuY29sfWBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbYCR7bmVpZ2hib3Iucm93fSwke25laWdoYm9yLmNvbH1gXSA9IG5ld0Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgIC8vIEVucXVldWUgdGhlIG5laWdoYm9yIHdpdGggdGhlIG5ldyBkaXN0YW5jZVxuICAgICAgICAgICAgICAgIHByaW9yaXR5UXVldWUuYWRkKG5laWdoYm9yLCBuZXdEaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IGNlbGwgYXMgdGhlIHBhcmVudCBvZiB0aGUgbmVpZ2hib3IgY2VsbFxuICAgICAgICAgICAgICAgIHBhcmVudHNbYCR7bmVpZ2hib3Iucm93fSwke25laWdoYm9yLmNvbH1gXSA9IGN1cnJlbnRDZWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIHBhdGhcbiAgICBjb25zdCBwYXRoID0gY29uc3RydWN0X3BhdGgoZW5kQ2VsbCwgc3RhcnRDZWxsLCBwYXJlbnRzKTtcbiAgICBcbiAgICByZXR1cm4geyBhbmltYXRpb246IGFuaW1hdGlvbnMsIHBhdGg6IHBhdGggfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKipcbiAqIFRoZSBtYWluIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFxuICogQG1vZHVsZSBpbmRleFxuICovXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBBcHAgY2xhc3MuXG4gKiBcbiAqIEB0eXBlIHtBcHB9IC0gU2VlIHtAbGluayBBcHB9XG4gKi9cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbi8vIFN0YXJ0IHRoZSBhcHBsaWNhdGlvblxuYXBwLnJ1bigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==