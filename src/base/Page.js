import BaseComponent from "./BaseComponent";

/**
 * Base abstract class for a Page
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
export default class Page extends BaseComponent{ 
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