import generateMazeRDFS from "./maze_generators/randomizedDFS";
import generateEmptyMaze from "./maze_generators/emptyMaze";
import generateRandomMaze from "./maze_generators/randomMaze";
import searchBFS from "./maze_path_finders/searchBFS";



/**
 * A representation of a maze grid
 */
export default class MazeModel {

    /**
     * The available maze generating algorithms.
     * 
     * @property {Array<{value: string, text: string, callback: function}>} generatorAlgorithms
     * @private
     */
    #generatorAlgorithms = [
        { value: 'empty', text: 'Empty Maze', callback: generateEmptyMaze},
        { value: 'random', text: 'Random Maze', callback: generateRandomMaze},
        { value: 'rdfs', text: 'Randomized DFS', callback: generateMazeRDFS },
    ];
    
    /**
     * @property {getter} generatorAlgorithms
     * @returns {Array<{value: string, text: string}} The available maze generating algorithms
     */
    get generatorAlgorithms(){
        return this.#generatorAlgorithms
    };

    /**
     * @property {number} height - The height of the grid
     * @private
     */
    #height = 25;

    /**
     * @property {number} width - The width of the grid
     * @private
     */
    #width = 45;

    /**
     * @constructor
    */
    constructor(){
        this.startCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        this.endCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        /**
         * The 2D grid representing the maze
         * 
         * @property {Array}
         */
        this.grid = this.#createInitialGrid(this.#height, this.#width);

        this.searchAnimation = [];
        this.pathAnimation = [];

        
    };

    /**
     * Resets the maze:
     *  - Grid
     *  - Starting and Ending cell
     * 
     * @property {function} resetMaze
     */
    resetMaze() {
        this.startCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        this.endCell = {row: Math.floor(Math.random() * this.#height), col: Math.floor(Math.random() * this.#width) };
        this.grid = this.#createInitialGrid(this.#height, this.#width);
        this.searchAnimation = [];
        this.pathAnimation = [];
    };

    /**
     * Resets the grid:
     * 
     * @property {function} resetGrid
     */
    resetGrid() {
        this.grid = this.#createInitialGrid(this.#height, this.#width);
        this.searchAnimation = [];
        this.pathAnimation = [];
    }

    /**
     * Creates the initial grid for the maze.
     * Initializes the grid as an array of arrays, with each inner array representing a row in the grid.
     * Each element in the inner arrays is an object representing a cell in the maze.
     * Each cell object contains information about its borders (top, right, bottom, left) and its visit status (visited).
     * 
     * @property {function} createInitialGrid
     * @private
     * @param {number} height - The height of the grid
     * @param {number} width - The width of the grid
     * @returns {Array} The 2D grid representing the maze
     */
    #createInitialGrid(height, width){
        let grid = [];
        for (let i=0; i<height; i++){
            grid[i] = [];
            for (let j=0; j<width; j++){
                grid[i][j]={
                    top: true,
                    right: true,
                    bottom: true,
                    left: true,
                    visited: false,
                };
            };
        };
        return grid;
    };


    /**
    * Generates a maze using the given algorithm
    * 
    * @property {function} generateMaze
    * @param {string} algorithm - The value of the selected algorithm
    * @returns {undefined}
    */
    generateMaze(algorithm) {
        const selectedAlgorithm = this.#generatorAlgorithms.find(a => a.value === algorithm);

        if (!selectedAlgorithm) {
            throw new Error(`Unknown algorithm: ${algorithm}`);
        }

        return selectedAlgorithm.callback(this.grid, this.startCell);
    };

    /**
     * Executes the specified search algorithm and sets the animation arrays.
     * 
     * @param {string} algorithmName - The name of the search algorithm
     */
    solveMaze(algorithmName){
        // If the animations array are not empty return
        if (this.searchAnimation.length || this.pathAnimation.length) return;
        
        let animations = {animation: [], path: []};

        switch (algorithmName){
            case 'Breadth-First Search': {
                animations  = searchBFS(this.grid, this.startCell, this.endCell); 
                break;
            }
            default:
                break;
        };
        
        this.searchAnimation = animations.animation;
        this.pathAnimation = animations.path
    };

    /**
     * Returns the path and search animations.
     * 
     * @returns {{searchAnimation: Array, pathAnimation: Array}} The search and path animations.
     */
    getAnimations(){
        return {searchAnimation: this.searchAnimation, pathAnimation: this.pathAnimation};
    };

    
};