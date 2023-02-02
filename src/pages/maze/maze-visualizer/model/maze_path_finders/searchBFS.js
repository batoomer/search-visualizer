import { getValidNeighbors } from "../maze-utils";

/**
 * Perform a Breadth First Search (BFS) on the grid to find a path from start to end
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} start - The starting cell
 * @param {Object} end - The end cell
 * @returns {Array} The path from start to end, represented as an array of cells
 */
export default function searchBFS(grid, start, end){
    // Initialize a queue
    const queue = [start];
    // Initialize an array to keep track of the animation
    const animation = [start];
    // Initialize a set to keep track of visited neighbours to avoid loops
    const visitedSet = new Set();
    // Initialize an object to keep track of the parents
    const parent = {}

    // Repeat while the stack has cells
    while (queue.length){
        // Get the first element of the queue
        let currentCell = queue.shift();

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
            // Enqueue the neighbors
            queue.push(neighbor);
            // Add the current cell as the parent of the neighbor cell
            if (!visitedSet.has(`${neighbor.row},${neighbor.col}`)){
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
    };
    path.unshift(start);
    
    
    return {animation: animation, path: path};
};
