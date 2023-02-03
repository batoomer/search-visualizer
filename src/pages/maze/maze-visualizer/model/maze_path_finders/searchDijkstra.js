import { getValidNeighbors } from "../maze-utils"

/**
 * Perform Dijkstra's algorithm on the grid to find the shortest path from start to end.
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} startCell - The starting cell
 * @param {Object} endCell - The ending cell
 * @returns {Object} The animation of the algorithm and the animation of the path
 */
export default function searchDijkstra(grid, startCell, endCell){
    // Initialize a priorty queue
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(startCell, 0);
    // Initialize an array to keep track of the animation
    const animations = []
    // Initialize an object to keep track of the distances
    const distances = {};
    distances[`${startCell.row},${startCell.col}`] = 0;
    // Initialize an object to keep track of the  parents
    const parents = {};

    while(!priorityQueue.isEmpty()){
        // Dequeue the cell with the lowest distance
        let [currentCell, currentDistance] = priorityQueue.remove();

          // Check if the current cell is the solution
        if ((currentCell.row === endCell.row) && (currentCell.col === endCell.col)) {
            // Solution found, stop the iterations
            break;
        };

        // We consider a cell visited for the purpose of the animation if it passes the previous control statements
        animations.unshift(currentCell);

        // Get the neighbors of the cell
        let neighbors = getValidNeighbors(grid, currentCell);
        for (const neighbor of neighbors) {
            // Compute the distance of the neighbor
            let newDistance = currentDistance + grid[neighbor.row][neighbor.col].weight;
            // Update the distance if the current distance is shorter than the previous distance
            if (
                !distances[`${neighbor.row},${neighbor.col}`] ||
                newDistance < distances[`${neighbor.row},${neighbor.col}`]
            ) {
                distances[`${neighbor.row},${neighbor.col}`] = newDistance;
                // Enqueue the neighbor with the new distance
                priorityQueue.add(neighbor, newDistance);
                // Add the current cell as the parent of the neighbor cell
                parents[`${neighbor.row},${neighbor.col}`] = currentCell;
            }
        };
    };

    // Construct the path
    const path = [];
    let current = endCell;
    while (current !== startCell) {
        if (!current) break;
        path.unshift(current);
        current = parents[`${current.row},${current.col}`];
    }
    path.unshift(startCell);
    
    return { animation: animations, path: path };
};





/** A simple implementation of a priority queue */
class PriorityQueue{
    constructor() {
        this.heap = [];
    }

    add(value, priority) {
        this.heap.push([value, priority]);
        this.sort();
    }
    
    remove() {
        return this.heap.shift();
    }
    
    sort() {
        this.heap.sort((a, b) => a[1] - b[1]);
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}