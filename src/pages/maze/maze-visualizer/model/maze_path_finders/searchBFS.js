import { getValidNeighbors } from "../maze-utils";

/**
 * Perform a Depth First Search (DFS) on the grid to find a path from start to end
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} start - The starting cell
 * @param {Object} end - The end cell
 * @returns {Array} The path from start to end, represented as an array of cells
 */
export default function searchBFS(grid, start, end){
    // Initialize a queue with the starting cell coords
    const queue = [start];
    // Initialize an animation array to keep track of the exploring of the maze
    const animation = [start];
    // Initialize a set to keep the visited cells.
    const visited = new Set();
    // Initialize an object to keep track of the parents
    const parent = {}

    // Loop until the queue has cells
    while (queue.length){
        // Dequeue a cell
        let currentCell = queue.shift();
        
        // Check if the cell is the end cell
        if ((currentCell.row === end.row) && (currentCell.col === end.col)){
            animation.unshift(currentCell);
            break;
        };

        // Get the valid neighbors
        let neighbors = getValidNeighbors(grid, currentCell);
        // Iterate through the neighbors
        for (const neighbor of neighbors){
            // Check if the neighbor has not been visited
            if (!visited.has(`${neighbor.row},${neighbor.col}`)){
                // Add the neighbor to the visited array
                visited.add(`${neighbor.row},${neighbor.col}`);
                // Enqueue the neighbor 
                queue.push(neighbor);
                animation.unshift(neighbor);
                // Add the current cell as the parent of the neighbor cell
                parent[`${neighbor.row},${neighbor.col}`] = currentCell; 
            };
        };
       
      };
    
    // Construct the path
    const path = [];
    let current = end;
    while (current !== start) {
        if (!current) break;
        path.unshift(current);
        current = parent[`${current.row},${current.col}`];
    }
    path.unshift(start);

    // Return the animation array and the path
    return {animation: animation, path: path};
};
