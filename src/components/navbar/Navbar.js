import BaseComponent from "../../base/BaseComponent";
import { HashLink } from "../../base/HashRouter";
import { EventHandler } from "../../base/ResourceHandler";
import { informedSearchLinks, uninformedSearchLinks, } from "../../configs/nav.config";
import './navbar.css';

/**
 * Class that represents the navigation bar
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
export default class Navbar extends BaseComponent{
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
        this.eventHandler = new EventHandler();
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
            this.#createNavSubList('Uninformed Search', uninformedSearchLinks),
            this.#createNavSeparatorItem(),
            this.#createNavSubList('Informed Search', informedSearchLinks),
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
        const hashLink = new HashLink('/', 'Home', 'navbar__link-home');
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
        const hashLink = new HashLink(path, name, 'navbar__link');
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