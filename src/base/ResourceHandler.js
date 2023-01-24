/**
 * Class used for managing Event Listeners
 */
export class EventHandler {
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
    };

};

/**
 * Class used for managing Timeouts
 */
export class TimeoutHandler {
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
    };
};

/**
 * Class used for managing Intervals
 */
export class IntervalHandler {

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
    };
};  

/**
 * Class used for managing Promises
 */
export class PromiseHandler {
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
    };
};