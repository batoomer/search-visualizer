import Page from "../../base/Page";
import Article from "../../components/article/Article";
import MazeVisualizer from "./maze-visualizer/MazeVisualizer";
import "./maze-page.css";

/**
 * Page that consits of a maze visualizer and an article about the search algorithm
 */
export default class MazeVisualizerPage extends Page{
    /**
     * 
     * @param {Object} articleData - The data associated with the page
     */
    constructor(articleData){
        super('maze-page');
        this.articleData = articleData;
        this.visualizer = new MazeVisualizer(this.articleData.title);
    }

    /**
     * Creates the inner HTML of the component
     * 
     * @returns {HTMLElement}
     */
    create(){
        this.componentElement.append(
            this.#createVisualizerSection(),
            this.#createAlgorithmArticleSection(),
        );
        return this.componentElement;
    }

    /**
     * Clears all resources used by the page
     */
    clearResources(){
        this.visualizer.clearResources();
    }

    /**
     * Creates the visualizer section.
     * 
     * @returns {HTMLElement} The visualizer element
     */
    #createVisualizerSection() {
        const visualizerSection = document.createElement('section');
        visualizerSection.classList.add('maze-page__visualizer-section');
        const container = document.createElement('div');
        container.classList.add('container');
        const visualizer = this.visualizer.create();
        container.appendChild(visualizer);
        visualizerSection.appendChild(container);
        return visualizerSection;
    };

    /**
     * Creates the algorithm article.
     * 
     * @returns {HTMLElement}
     */
    #createAlgorithmArticleSection() {
        // Create and return the algorithm article section
       return  new Article(this.articleData).create();
    };
}