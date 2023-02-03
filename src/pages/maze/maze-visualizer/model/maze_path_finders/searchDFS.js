import { getValidNeighbors } from "../maze-utils";
import { construct_path } from "./path-utils";

/**
 * Perform a Depth First Search (DFS) on the grid to find a path from start to end
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} start - The starting cell
 * @param {Object} end - The end cell
 * @returns {Array} The path from start to end, represented as an array of cells
 */
export default function searchDFS(grid, start, end){
    // Initialize a stack
    const stack = [start];
    // Initialize an array to keep track of the animation
    const animation = [start];
    // Initialize a set to keep track of visited neighbours to avoid loops
    const visitedSet = new Set();
    // Initialize an object to keep track of the parents
    const parent = {}

    // Repeat while the stack has cells
    while (stack.length){
        // Get the top element of the stack
        let currentCell = stack.pop();

        // Check if the current cell is the solution
        if ((currentCell.row === end.row) && (currentCell.col === end.col)){
            // Solution found stop the iterations
            break;
        };

        // Check if the current cell is a member of the visited set
        if (visitedSet.has(`${currentCell.row},${currentCell.col}`)){
            // Go to the next iteration
            continue;
        };

        // We consider a cell visited for the purpose of the animation if it passes the previous control statements
        animation.unshift(currentCell);

        // Add the current cell to the visited set
        visitedSet.add(`${currentCell.row},${currentCell.col}`);
        // Get the neighbors of the cell
        let neighbors = getValidNeighbors(grid, currentCell);
        for (const neighbor of neighbors){
            stack.push(neighbor);
            // Add the current cell as the parent of the neighbor cell
            if (!visitedSet.has(`${neighbor.row},${neighbor.col}`)){
                // Add the current cell as the parent of the neighbor cell
                parent[`${neighbor.row},${neighbor.col}`] = currentCell; 
            };
        };
    };

    // Construct the path
     const path = construct_path(end, start, parent);
    
    
    return {animation: animation, path: path};
};
