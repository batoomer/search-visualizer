import BaseComponent from "./BaseComponent";

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
         * @type {Object.<string, function(): BaseComponent>}
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
         * @type {BaseComponent}
         */
        this.currentPage = null;
    };

    /**
     * Register a route.
     * 
     * @property {function} registerRoute
     * @param {string} url - The URL of the route. It should start with /
     * @param {class} pageComponent  - A class that extends the {BaseComponent} class
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
            this.currentPage.clearResources();
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
     * @returns {BaseComponent} The new page
     */
    #createNewPage(path){
        return new this.routes[path]();
    };
}