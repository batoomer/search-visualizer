import {getRandomNeighbor, removeWall } from '../maze-utils';

/**
 * Generates a maze using the Randomized Depth-First Search (RDFS) algorithm.
 *
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {Object} startCell - The starting cell.
 */
export default function generateMazeRDFS(grid, startCell) {
    const animations = [];
    const stack = [];
    stack.push(startCell);
   

    while (stack.length > 0) {
        const currentCell = stack[stack.length - 1];
        grid[currentCell.row][currentCell.col].visited = true;
        animations.push(currentCell);
        
        // Get unvisited neighbors of the current cell
        const randomNeighbor = getRandomNeighbor(grid, currentCell.row, currentCell.col);
        // If there are unvisited neighbors, choose a random one and remove the wall between them
        if (randomNeighbor) {
            
            removeWall(grid, currentCell.row, currentCell.col, randomNeighbor.row, randomNeighbor.col);
            stack.push(randomNeighbor);
            
        } else {
            stack.pop();
        }
    };

    return animations;
}