import ResourceHandler from "./ResourceHandler";

/**
 * Base abstract class for a component
 */
export default class BaseComponent {

    /**
     * @constructor
     * @param {string} tag - The HTML tag of the component element
     * @param {string | string[]} [className] - The class name(s) of the component element
     * @param {*} [id] - The id of the component element
     */
    constructor(tag, className="", id=""){
        // Check if the class is being instantiated directly
        if (this.constructor === Animal) {
            throw new Error("Can't instantiate abstract class!");
        };

        /**
         * ResourceHandler to handle the resources used by the component
         * 
         * @type {ResourceHandler}
         * See {@link ResourceHandler}
         */
        this.resourceHandler = new ResourceHandler();

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
     * Abstract method to destroy the component
     * 
     * @property {function} destroy
     * @abstract
    */
    destroy(){
        this.clearResources();
        throw new Error("Abstract method!");
    };

    /**
     * Clear all the resources associated with the component
     * 
     * @property {function} clearResources
     */
    clearResources(){
        this.resourceHandler.freeAllResources();
    }

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