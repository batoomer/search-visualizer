import Page from "../../base/Page";
import { EventHandler, IntervalHandler } from "../../base/ResourceHandler";
import './notfound.css';

/**
 * Class representing the 404 error page
 *
 * @extends Page
 */
export default class NotFoundPage extends Page{
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
        this.eventHandler = new EventHandler();
        
        /**
         * @property {IntervalHandler} intervalHandler - The interval handler
         */
        this.intervalHandler = new IntervalHandler();

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
            <button class="redirect-button btn">Return to Home</button>
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
        window.location.href = "/";
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
            window.location.href = "/";
        };
    };
}