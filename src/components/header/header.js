import BaseComponent from "../../base/BaseComponent";
import { EventHandler } from "../../base/ResourceHandler";
import "./header.css";

/**
 * Class that represents the Header
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
export default class Header extends BaseComponent{
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
        this.eventHandler = new EventHandler();
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