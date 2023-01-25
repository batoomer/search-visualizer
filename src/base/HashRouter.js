import {EventHandler} from "./ResourceHandler";
import BaseComponent from "./BaseComponent";
import Page from "./Page";

/**
 * Handles the client-side routing for the application by handling
 * the hashchange event and creating new pages based on the current path.
 */
export default class HashRouter{
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
    registerRoute(url, pageComponent){
        this.routes[url] = pageComponent;
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
        return new this.routes[path]();
    };
};



/**
 * Represents a link to an internal site of the application.
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
export class HashLink extends BaseComponent {
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
        this.eventHandler = new EventHandler();

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