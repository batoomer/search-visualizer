import BaseComponent from "../../base/BaseComponent";
import gitHubIcon from "../../images/icons/github-icon.png";
import './footer.css';

/**
 * Class that represents the Footer
 * 
 * @extends {BaseComponent} - Link: {@link BaseComponent}
 */
export default class Footer extends BaseComponent{
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
                    <img class="icon" src="${gitHubIcon}" alt="GitHub Mark" />
                </a>
            </small>
        </div>`;
    };
}