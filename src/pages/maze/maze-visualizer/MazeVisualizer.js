import BaseComponent from "../../../base/BaseComponent";
import { EventHandler, TimeoutHandler } from "../../../base/ResourceHandler";
import MazeModel from "./model/MazeModel";
import startIcon from "../../../images/icons/robot-icon.png";
import endIcon from "../../../images/icons/target-icon.png";
import resetIcon from "../../../images/icons/reset-icon.png";
import playIcon from "../../../images/icons/play-icon.png";
import pauseIcon from "../../../images/icons/pause-icon.png";
import bugIcon from "../../../images/icons/bug-icon.png";

import './maze-visualizer.css';

/**
 * Class representing the maze visualizer
 */
export default class MazeVisualizer extends BaseComponent{
    /**
     * @constructor
     * @param {string} algorithmName - The name of the search algorithm
     */
    constructor(algorithmName){
        super('section', 'maze-visualizer');
        /**
         * The name of the search algorithm
         * 
         * @property {string} algorithmName
         */
        this.algorithmName = algorithmName;

        /**
         * The maze model that handels the underlying grid
         * 
         * @property {MazeModel} mazeModel
         */
        this.mazeModel = new MazeModel();

        /**
         * Handler for event listeners
         * 
         * @property {EventHandler} eventHandler
         */
        this.eventHandler = new EventHandler();

        /**
         * Handler for timeouts
         * 
         * @property {EventHandler} eventHandler
         */
        this.timeoutHandler = new TimeoutHandler();

        /**
         * Flag to keep track whether the animation is running
         * 
         * @property {boolean} running
         */
        this.running = false;

        /**
         * The speed of the animation. It increases/decreases exponentially.
         * 
         * @property {number} animationSpeed
         */
        this.animationSpeed = 2**5;
    };

    /**
     * Creates the inner HTML of the component element.
     * 
     * @returns {HTMLElement} The component elemenet
     */
    create() {
        this.componentElement.append(
            this.#createHeading(),
            this.#createSettingsContainer(),
            this.#createMazeGrid()     
        )
        return this.componentElement;
    };

    /**
     * Clears all resources used by the component
     * 
     * @property {function} clearResources
     */
    clearResources() {
        this.eventHandler.removeAllListeners();
        this.timeoutHandler.removeAllTimeouts();
    };

    /**
     * Creates a heading with the name of the search algorithm
     * 
     * @returns {HTMLHeadingElement} h2 heading element
     */
    #createHeading(){
        const heading = document.createElement('h2');
        heading.classList.add('maze-visualizer__heading');
        heading.textContent = this.algorithmName;
        return heading;
    }

    /**
     * Creates the settings container.
     * 
     * @property {function} createSettingsContainer
     * @private
     * @returns {HTMLElement} The settings container HTML element.
     */
    #createSettingsContainer() {
        const containerEl = document.createElement("div");
        containerEl.classList.add("maze-visualizer__settings-container");
        containerEl.append(
            this.#createResetBtn(),
            this.#createStartStopBtn(), 
            this.#createAlgorithmSelect(),
            this.#createAnimationSpeedRange(),
            this.#createWeightsCheckbox()
        );
        return containerEl;
    };

    /**
     * Creates the Start/Stop Button
     * 
     * @property {function} createStartStopBtn
     * @private
     * @returns {HTMLButtonElement} Start/Stop button
     */
    #createStartStopBtn() {
        const toggleBtnEl = document.createElement("button");
        toggleBtnEl.classList.add("maze-visualizer__toggle-btn", 'btn');
        toggleBtnEl.disabled = true;
        toggleBtnEl.innerHTML = `<span>Start</span><img src="${playIcon}" alt="Start">`;
        this.eventHandler.addEventListener(toggleBtnEl, "click", async (e)=>{
            const btn = e.currentTarget;
            if(!this.running){
                // Set running to true and handle settings availability
                this.running = true;
                this.#handleSettingsAvailability();
                
                // Replace the button inner html
                btn.innerHTML = `<span>Pause</span><img src="${pauseIcon}" alt="Start">`;
                
                // Get the Serach Animation and the path
                this.mazeModel.solveMaze(this.algorithmName);
                const animations = this.mazeModel.getAnimations();
                
                // Animate the search
                await this.#handleMazeSearchAnimation(animations.searchAnimation, '--color-on-surface-primary', '--color-primary');
                await this.#sleep(this.animationSpeed);
                
                // Animate the path
                await this.#handleMazeSearchAnimation(animations.pathAnimation, '--color-on-surface-error');
                this.running = false;
                this.#handleSettingsAvailability();
            };
            
            // Set running to false and handle settings availability
            this.running = false;
            this.#handleSettingsAvailability();
             // Replace the button inner html
            btn.innerHTML = `<span>Start</span><img src="${playIcon}" alt="Start">`;
            
        });
        return toggleBtnEl
    };

    /**
     * Creates the Reset Button
     * 
     * @property {function} createResetBtn
     * @private
     * @returns {HTMLButtonElement} Reset button
     */
    #createResetBtn() {
        const resetBtnEl = document.createElement("button");
        resetBtnEl.classList.add("maze-visualizer__reset-btn", 'btn');
        resetBtnEl.innerHTML = `<span>Reset</span><img src="${resetIcon}" alt="Reset">`;
        // Click Event Listener
        this.eventHandler.addEventListener(resetBtnEl, "click", () => {
            this.running = false;
            this.timeoutHandler.removeAllTimeouts();
            this.mazeModel.resetMaze();
            this.componentElement.querySelector('.maze-visualizer__select-algorithm').value = "";
            this.componentElement.querySelector('#maze-visualizer__maze-weights').checked = false;
            this.#handleSettingsAvailability();
            this.componentElement.querySelector('.maze-grid').replaceWith(this.#createMazeGrid());
        });
        return resetBtnEl
    };

    /**
     * Creates the Animation Speed Range
     * 
     * @property {function} createAnimationSpeedRange
     * @private
     * @returns {HTMLElement} Animation Speed Range
     */
    #createAnimationSpeedRange(){
        const settingWrapper = document.createElement('div');
        settingWrapper.classList.add('maze-visualizer__setting-wrapper');
        const sliderLabel = document.createElement('label');
        sliderLabel.htmlFor = 'maze-visualizer__animation-speed';
        sliderLabel.innerHTML = `Animation Speed: ${6}`;
        const sliderEl = document.createElement("input");
        sliderEl.type = "range";
        sliderEl.min = 1;
        sliderEl.max = 10;
        sliderEl.value = 6;
        sliderEl.id = 'maze-visualizer__animation-speed';
        sliderEl.classList.add("animation-speed-slider");

       // Event listener to update the animation speed
        this.eventHandler.addEventListener(sliderEl, "input", (event) => {
            this.animationSpeed = 2 ** 11 / 2 ** (event.target.value);
            sliderLabel.innerHTML = `Animation Speed: ${event.target.value}`;
        });
        
        settingWrapper.append(sliderLabel, sliderEl);
        return settingWrapper;
    };

    /**
     * Creates the Maze generator algorithm select
     * 
     * @property {function} createAlgorithmSelect
     * @private
     * @returns {HTMLElement} Maze Generator Algorithm Select
     */
    #createAlgorithmSelect() {
        const settingWrapper = document.createElement('div');
        settingWrapper.classList.add('maze-visualizer__setting-wrapper');
        
        const selectLabel = document.createElement('label');
        selectLabel.htmlFor = 'maze-visualizer__maze-algorithm';
        selectLabel.innerHTML = `Generate Maze`;

        const selectEl = document.createElement("select");
        selectEl.classList.add("maze-visualizer__select-algorithm");
        selectEl.id ='maze-visualizer__maze-algorithm';
        
        // Default Option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select algorithm";
        selectEl.appendChild(defaultOption);
        // Algorithm Options
        this.mazeModel.generatorAlgorithms.forEach(({ value, text }) => {
            const optionEl = document.createElement("option");
            optionEl.value = value;
            optionEl.textContent = text;
            selectEl.appendChild(optionEl);
        });
        // Change Event
        this.eventHandler.addEventListener(selectEl, "change", async (event)=> {
            const selectedOption = event.target.value;
            this.#handleSettingsAvailability();
            if (selectedOption !== ""){
                this.timeoutHandler.removeAllTimeouts();
                // Reset maze
                this.mazeModel.resetGrid();
                this.componentElement.querySelector('.maze-grid').replaceWith(this.#createMazeGrid());
                // If an algorithm has been selected get the animation for generating the maze
                const animation = this.mazeModel.generateMaze(selectedOption);
                // Animate the maze generation
                await this.#animateMazeGeneration(animation);
            };
        });
        
        settingWrapper.append(selectLabel, selectEl);
        return settingWrapper
    };

    /**
     * Creates a checkbox to toggle weights
     * 
     * @returns {HTMLInputElement}
     */
    #createWeightsCheckbox(){
        const settingWrapper = document.createElement('div');
        settingWrapper.classList.add('maze-visualizer__setting-wrapper');

        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = 'maze-visualizer__maze-weights';
        checkboxLabel.innerHTML = `Weights`;
        
        const weightCheckbox = document.createElement('input');
        weightCheckbox.disabled = true;
        weightCheckbox.id = 'maze-visualizer__maze-weights';
        weightCheckbox.type = 'checkbox';

        // Event Listener for the checkbox
        this.eventHandler.addEventListener(weightCheckbox, 'click', () => {
            if (weightCheckbox.checked){
                    this.mazeModel.addRandomWeights();
                    this.#handleMazeWeights();      
                }else {
                    this.mazeModel.removeWeights();
                    this.#handleMazeWeights();      
                }
            });

        settingWrapper.append(checkboxLabel, weightCheckbox);

        return settingWrapper;
    }

    /**
     * Adds or removes cell weights
     * 
     * @property {function} handleMazeWeights
     * @private
     */
    #handleMazeWeights() {
        // Get the number of rows and columns
        const rowSize = this.mazeModel.grid.length;
        const colSize = this.mazeModel.grid[0].length;
        // Iterate over the rows and columns 
        for (let i = 0; i < rowSize; i++) {
            for (let j = 0; j < colSize; j++) {
                
                // if the cell is the start cell or end cell skip the iteration
                if ((this.mazeModel.startCell.row === i) && (this.mazeModel.startCell.col === j)) continue;
                if ((this.mazeModel.endCell.row === i) && (this.mazeModel.endCell.col === j)) continue;
                
                // Get the cell data and the cell element
                const cellData = this.mazeModel.grid[i][j];
                let cellEl = this.componentElement.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                
                // handle the weight display
                cellEl.innerHTML = (cellData.weight !== 1) ? `<div class="maze-weight-${cellData.weight}"><img src="${bugIcon}" alt="start"/></div>` : cellEl.innerHTML= '';
                
            };
        };
    }

    /**
     * Handles the Settings Availability. Enables or Disables them.
     * 
     * @property {function} handleSettingsAvailability
     * @private
     */
    #handleSettingsAvailability(){
        const selectAlgorithm = this.componentElement.querySelector('.maze-visualizer__select-algorithm')
        if(this.running){
            // Disable settings if animation is running
            this.componentElement.querySelector('.maze-visualizer__reset-btn').disabled = true;
            selectAlgorithm.disabled = true;
            this.componentElement.querySelector('#maze-visualizer__maze-weights').disabled = true;
        }else{
            // Enable settings if animation is running
            this.componentElement.querySelector('.maze-visualizer__reset-btn').disabled = false;
            selectAlgorithm.disabled = false;
            if (selectAlgorithm.value === ""){
                this.componentElement.querySelector('.maze-visualizer__toggle-btn').disabled = true;
                this.componentElement.querySelector('#maze-visualizer__maze-weights').disabled = true;
            }else{
                this.componentElement.querySelector('.maze-visualizer__toggle-btn').disabled = false;
                this.componentElement.querySelector('#maze-visualizer__maze-weights').disabled = false;
            }
            this.componentElement.querySelector('#maze-visualizer__maze-weights').disabled = false;
        };
    };


    /**
     * Animates the generation of the maze
     * 
     * @property {function} animateMazeGeneration
     * @private
     * @param {Array} animation - Array containing the animation sequence
     */
    async #animateMazeGeneration(animation){
        // Iterate through the animation sequence
        while (animation.length){
            // Get a cell
            const {row, col} = animation.pop();
            const cellEl = this.componentElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            this.#handleMazeCellBorders(row, col, cellEl);
        };
    };

    /**
     * Handels the animation of search algorithms
     * 
     * @param {Array} animation - Array containing the animation sequence
     * @param {string} highlightColor - Color to highlight the animated cell. Should be css variable name
     * @param {string} [unHighlightColor] - Color to unhighlight the cell. Should be css variable name
     */
    async #handleMazeSearchAnimation(animation, highlightColor, unHighlightColor=""){
        while(animation.length && this.running){
            const {row, col} = animation.pop();
            const cellEl = this.componentElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            // Highlight the cell and handle its borders
            cellEl.style.background = `radial-gradient(var(${highlightColor}), transparent, transparent)`;
            await this.#sleep(this.animationSpeed)
            if (unHighlightColor){
                cellEl.style.background = `radial-gradient(var(${unHighlightColor}), transparent, transparent)`;
            };
        };
    };

    /**
     * Pauses the execution for the given time in ms.
     * 
     * @property {function} sleep
     * @async
     * @private
     * @param {number} ms - Time to sleep 
     * @returns {Promise}
     */
    async #sleep(ms){
        return new Promise((resolve) => {
            this.timeoutHandler.addTimeout(resolve, ms);
        })
    }


    /**
     * Creates the maze grid.
     * 
     * @property {function} createMazeGrid
     * @private
     * @returns {HTMLElement} The maze grid HTML element.
     */
    #createMazeGrid(){
        // Get the number of rows and columns
        const rowSize = this.mazeModel.grid.length;
        const colSize = this.mazeModel.grid[0].length;
        const startCell = this.mazeModel.startCell;
        const endCell = this.mazeModel.endCell;

        // Create a table for the maze grid
        const mazeEl = document.createElement('table');
        mazeEl.classList.add('maze-grid');

        // Iterate over the rows and columns to create the grid cells
        for (let i=0; i<rowSize; i++){
            // Create a table row element
            const rowEl = document.createElement("tr");

            // Iterate over the columns to create the grid cells
            for (let j=0; j<colSize; j++){

                 // Create a table cell element
                const cellEl = document.createElement("td");
                cellEl.classList.add('maze-cell');

                // Add data attributes to keep track of each cell element
                cellEl.setAttribute('data-row', i);
                cellEl.setAttribute('data-col', j);
                
                // Get the current cell data from the maze model
                this.#handleMazeCellBorders(i, j, cellEl);

                // Handle the start and end cells
                cellEl.innerHTML = (i===startCell.row && j===startCell.col) ? `<div><img src="${startIcon}" alt="start"/></div>` : cellEl.innerHTML;
                cellEl.innerHTML = (i===endCell.row && j===endCell.col) ? `<div><img src="${endIcon}" alt="end"/></div>` : cellEl.innerHTML;


                 // Append the cell element to the row element
                rowEl.appendChild(cellEl);
            }

             // Append the row element to the maze table element
            mazeEl.appendChild(rowEl);
        };


        return mazeEl;
    };

    /**
     * Handles the borders of the cell element
     * 
     * @param {number} row - The row number of the cell
     * @param {number} col - The col number of the cell
     * @param {HTMLTableCellElement} cellEl - The cell element
     */
    #handleMazeCellBorders(row, col, cellEl) {
        const cellData = this.mazeModel.grid[row][col];
        // Set the border width for each side of the cell based on its wall data
        cellData.top ? cellEl.classList.add('border-top') : cellEl.classList.remove('border-top');
        cellData.bottom ? cellEl.classList.add('border-bottom') : cellEl.classList.remove('border-bottom');
        cellData.left ? cellEl.classList.add('border-left') : cellEl.classList.remove('border-left');
        cellData.right ? cellEl.classList.add('border-right') : cellEl.classList.remove('border-right');
    };





}