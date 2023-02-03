/** A simple implementation of a priority queue */
export class PriorityQueue {
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
};

/**
 * Constructs the path from the end cell to the start cell
 * 
 * @param {Object} endCell - The end cell
 * @param {Object} startCell - The start cell
 * @param {Array} parents - Object containing the parent of each cell
 * @returns {Array} - Array containing the path from the end cell to the start cell
 */
export function construct_path(endCell, startCell, parents) {
    const path = [];
    let current = endCell;
    while (current !== startCell) {
        if (!current)
            break;
        path.unshift(current);
        current = parents[`${current.row},${current.col}`];
    }
    path.unshift(startCell);
    return path;
};
