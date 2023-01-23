/**
 * Class used for managing resources.
 *  - Event Listeners
 *  - Timeouts
 *  - Intervals
 *  - Promises
 */
export default class ResourceHandler {
    /**
     * Initializes arrays to keep track of the resources.
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

        /**
         * Array to store promises associated with the component
         * 
         * @type {Array}
         */
        this.promises = [];

        /**
         * Array to store intervals associated with the component
         * 
         * @type {Array}
         */
        this.intervals = [];

        /**
         * Array to store timeouts associated with the component
         * 
         * @type {Array}
         */
        this.timeouts = [];
    };

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
        this.#registerResource({element: element, event: event, callback: callback}, 'event');
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
        this.#freeResource({element: element, event: event, callback: callback}, 'event');
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
        this.#registerResource(id, 'timeout');
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
        this.#freeResource(timeoutID, 'timeout');
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
        this.#registerResource(id, 'interval');
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
        this.#freeResource(intervalID, 'interval');
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
        this.#registerResource(promise, 'promise');
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
        this.#freeResource(promise, 'promise');
    };

    /**
     * Free up resources associated with the component
     * - Remove all registerd event listeners
     * - Reject all reigsterd promises
     * - Reject all registerd intervals
     * - Reject all registerd timeouts
     * 
     * @property {Function} freeResources
     */
    freeAllResources(){
        // Remove all registerd event listeners
        this.eventListeners.forEach(eventListener => {
            eventListener.element.removeEventListener(
                eventListener.event,
                eventListener.callback
            )
        });

        // Reject all registerd promises
        this.promises.forEach(promise => {
            promise.reject();
        });

        // Clear all registerd intervals
        this.intervals.forEach(interval => {
            clearInterval(interval);
        });

        // Clear all registered timeouts
        this.timeouts.forEach(timeout => {
            clearTimeout(timeout);
        });
    };

    /**
     * Register a resource 
     * 
     * @property {Function} registerResource
     * @private
     * @param {Object} resource - The resource to be registered
     * @param {string} resourceType - The type of resource to register (event, promise, interval, timeout)
     */
    #registerResource(resource, resourceType){
        // Add reosurce to the corresponding array
        switch (resourceType){
            case "event":  // Event Listeners
                this.eventListeners.push({
                    element: resource.element,
                    event: resource.event,
                    callback: resource.callback
                });
                break;
            case "promise":  // Promises
                this.promises.push(resource);
                break;
            case "interval":  // Intervals
                this.intervals.push(resource);
                break; 
            case "timeout":  // Timeouts
                this.timeouts.push(resource);
                break;
            default:
                throw new Error(`Invalid resource type: ${resourceType}`);
        };
    };

    /**
     * Free a resource 
     * 
     * @property {Function} freeResource
     * @private
     * @param {Object} resource - The resource to be freed
     * @param {string} resourceType - The type of resource to free (event, promise, interval, timeout)
     */
    #freeResource(resource, resourceType){
        // Remove the resource from the corresponding array
        switch (resourceType){
            case "event":  // Event Listeners
                this.eventListeners = this.eventListeners.filter(
                    listener => listener.element !== resource.element && listener.event !== resource.event && listener.callback !== resource.callback
                );
                break;
            case "promise":  // Promises
                this.promises = this.promises.filter(promise => promise !== resource);
                break;
            case "interval":  // Intervals
                this.intervals = this.intervals.filter(id => id !== resource);
                break; 
            case "timeout":  // Timeouts
                this.timeouts = this.timeouts.filter(id => id !== resource);
                break;
            default:
                throw new Error(`Invalid resource type: ${resourceType}`);  
        };
    };

};