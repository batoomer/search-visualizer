import BaseComponent from "../../base/BaseComponent";
import './article.css';


/**
 * A component that displays an article.
 * 
 * 
 * @example  
 * // An Example of the Article Data Structure
 * {
 *  title: 'Example Article',
 *  content: [
 *    {
 *      type: 'paragraph',
 *      text: 'This is an example paragraph.'
 *    },
 *    {
 *      type: 'section',
 *      title: 'Example Section',
 *      content: [
 *        {
 *          type: 'paragraph',
 *          text: 'This is another example paragraph within the section.'
 *          "links": [
                {
                    "text": "example",
                    "url": "www.example.com"
                }
 *        },
 *        {
 *          type: 'unordered-list',
 *          items: [
 *            {
 *              "text":'Item 1'
 *            },
 *            {
 *              "text":'Item 1'
 *              "links":[
 *                  "text": "1",
 *                  "url": "www.example.com"
 *              ]
 *            },
 *            {
 *              "text":'Item 1'
 *            },
 *          ]
 *        }
 *      ]
 *    }
 *  ]
 * }
 * 
 * @extends BaseComponent
 */
export default class Article extends BaseComponent{



    /**
     * @constructor
     * @param {Object} articleData - The article's data
     * @param {string} articleData.title - The title of the article
     * @param {Object[]} articleData.content - The article content. Can contain further nested content objects
     */
    constructor(articleData){
        super('article', 'page-article');
        this.articleData = articleData;
    };

    /**
     * Creates the content of the article and returns it.
     * 
     * @property {function} create
     * @returns {HTMLElement} The article element
     */
    create(){
        this.#createArticle();
        return this.componentElement;
    };

    /**
     * Creates the article element and its content.
     * 
     * @property {function} createArticle
     * @private
     * @returns {HTMLElement} The article element
     */
    #createArticle() {
        // A container div
        const container = document.createElement('div');
        container.classList.add('container');

        // Create the content of the article
        this.#createContainerContent(this.articleData, container, 1)
        this.componentElement.appendChild(container);
    };

    /**
     * Creates a section element and its content.
     * 
     * @property {function} createSection
     * @private
     * @param {Object} content - The content of the section
     * @param {string} content.type - The type of the content, should be "section"
     * @param {string} [content.title] - The title of the section
     * @param {Object[]} content.content - The content of the section, can contain further nested content objects
     * @returns {HTMLElement} The section element
     */
    #createSection(content){
        // Create the section element
        const section = document.createElement('section');
        
        // Create the content of the section
        this.#createContainerContent(content, section, 2);

        return section;
    };

    /**
     * Creates the content of a container (article or section).
     * 
     * @param {Object} content - The content of the container
     * @param {string} [content.type] - The type of the content
     * @param {string} [content.title] - The title
     * @param {Object[]} content.content - The content, can contain further nested content objects
     * @param {HTMLElement} parent - The parent element (article or section)
     * @param {Number} containerType - The type of the container (1 for article, 2 for section)
     */
    #createContainerContent(content, parent, containerType){
        // Create the title
        const title = document.createElement(`h${containerType + 1}`);
        title.textContent = content.title;
        parent.appendChild(title);

        // Create the content
        content.content.forEach(item => {
            const contentEl = this.#handleContentType(item);
            parent.appendChild(contentEl);
        });
    };

    /**
     * Creates the HTML Element for the corresponding content type.
     * 
     * @property {function} handleContentType
     * @private
     * @param {Object} content - The content to handle
     * @param {string} content.type - The type of the content, should be 'paragraph', 'section' or 'unordered-list'
     * @returns {HTMLElement} - The HTML Element with its content.
     */
    #handleContentType(content){
        switch(content.type){
            case 'paragraph':
                return this.#createParagraph(content);
            case 'section':
                return this.#createSection(content);
            case 'unordered-list':
                return this.#createUnorderedList(content);
            default:
                throw new Error(`Invalid content type: ${content.type}`);
        };
    };

    /**
     * Creates a paragraph element
     * 
     * @property {function} createParagraph
     * @private
     * @param {Object} content - The content of the paragraph
     * @param {string} content.type - The type of the content, should be "paragraph" 
     * @param {string} content.text - The text of the paragraph
     * @param {Object[]} [content.links] - Object containing possible links in the paragraph
     * @returns {HTMLParagraphElement} The created paragraph element
     */
    #createParagraph(content){
        const paragraph = document.createElement('p');
        paragraph.textContent = content.text;
        if (content.links){
            this.#createAnchorLink(paragraph, content.links);
        };
        return paragraph;
    };

     /**
     * Creates an unordered list element
     * 
     * @property {function} createUnorderedList
     * @private
     * @param {Object} content - The content of the list
     * @param {string} content.type - The type of the content, should be "unordered-list"
     * @param {Object[]} content.items - The items of the list
     * @param {string} content.items.text - The text of a list item
     * @param {Object[]} [content.items.links] - Possible links inside the list item
     * @returns {HTMLUListElement} The created unordered list element
     */
    #createUnorderedList(content){
        const list = document.createElement('ul');
        content.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.text;
            if (item.links){
                this.#createAnchorLink(listItem, item.links);
            };
            list.appendChild(listItem);
        });
        return list;
    };

    /**
     * Creates a link for a text.
     * 
     * @property {function} createAnchorLink
     * @private
     * @param {HTMLElement} parent - The parent element to insert a link to
     * @param {Object} links - The content of the link element
     * @param {string} links.text - The text to add the link
     * @param {string} links.url - The url of the link
     */
    #createAnchorLink(parent, links){
        links.forEach(link => {
            const linkEl = document.createElement('a');
            linkEl.textContent = link.text;
            linkEl.href = link.url;
            linkEl.target = "_blank";
            parent.innerHTML = parent.textContent.replace(link.text, linkEl.outerHTML);
            
        });
    };

};