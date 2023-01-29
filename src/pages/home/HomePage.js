import Page from "../../base/Page";
import Article from "../../components/article/Article";
import "./home.css";

export default class HomePage extends Page{
    /**
     * @constructor
     */
    constructor(articleData){
        super('homepage');
        this.articleData = articleData;
    };

    /**
     * Creates the content of the home page.
     *
     * @property {function} create
     * @returns {HTMLElement} - The component element
     */
    create(){
        this.componentElement.append(
            this.#createHeroSection(),
            new Article(this.articleData).create(),
        );
        return this.componentElement;
    };

    /**
     * Clears any resources used by the home page
     *
     * @property {function} clearResources
     */
    clearResources(){
    };

    /**
     * Creates the hero section for the Home Page
     *
     * @property {function} createHeroSection
     * @private
     * @returns {HTMLElement} - The hero section element
     */
    #createHeroSection(){
        const container = document.createElement('div');
        container.classList.add('container');

        const heroSection = document.createElement('section');
        heroSection.classList.add('home__hero-section');
        heroSection.innerHTML = `
            <h1>Search Techniques In Artificial Intelligence</h1>
        `;

        container.appendChild(heroSection);
        return container;
    };
}

