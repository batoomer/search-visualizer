/**
 * Returns an array of unvisited neighbors of a cell
 * 
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {number} row - The row index of the current cell.
 * @param {number} col - The column index of the current cell.
 * 
 * @returns {Array} An array of unvisited neighbors, where each neighbor is represented by an object with `row` and `col` properties.
 */
export function getUnvisitedNeighbors(grid, row, col) {
    const neighbors = [];
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Check North
    if (row > 0 && !grid[row - 1][col].visited ) {
      neighbors.push({ row: row - 1, col: col });
    }
    
    // Check East
    if (col < cols - 1 && !grid[row][col + 1].visited) {
      neighbors.push({ row: row, col: col + 1 });
    }
    
    // Check South
    if (row < rows - 1 && !grid[row + 1][col].visited ) {
      neighbors.push({ row: row + 1, col: col });
    }
    
    // Check West
    if (col > 0 && !grid[row][col - 1].visited) {
      neighbors.push({ row: row, col: col - 1 });
    }
    
    return neighbors;
  };


/**
 * Returns a random unvisited neighbor of a cell.
 * 
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {number} row - The row index of the current cell.
 * @param {number} col - The column index of the current cell.
 * 
 * @returns {{row: number, col: number}|undefined} A random unvisited neighbor
 */
export function getRandomNeighbor(grid, row, col) {
    const unvisitedNeighbors = getUnvisitedNeighbors(grid, row, col);
    if (unvisitedNeighbors.length === 0) {
      return undefined;
    }
    
    // Get a random index in the range [0, unvisitedNeighbors.length)
    const randomIndex = Math.floor(Math.random() * unvisitedNeighbors.length);
    
    return unvisitedNeighbors[randomIndex];
};


/**
 * Removes the wall between two cells
 * 
 * @param {Array} grid - The 2D grid representing the maze.
 * @param {number} row1 - The row index of the first cell.
 * @param {number} col1 - The column index of the first cell.
 * @param {number} row2 - The row index of the second cell.
 * @param {number} col2 - The column index of the second cell.
 */
export function removeWall(grid, row1, col1, row2, col2) {
  const cols = grid[0].length;
  const rows = grid.length
  if (row1 < 0 || row2 < 0 || col1 < 0 || col2 < 0 || row1 >= rows || row2 >= rows|| col1 >= cols  || col2 >= cols) return
    if (row1 < row2) {
      // The second cell is below the first cell, so remove the bottom wall of the first cell and the top wall of the second cell
      grid[row1][col1].bottom = false;
      grid[row2][col2].top = false;
    } else if (row1 > row2) {
      // The second cell is above the first cell, so remove the top wall of the first cell and the bottom wall of the second cell
      grid[row1][col1].top = false;
      grid[row2][col2].bottom = false;
    } else if (col1 < col2) {
      // The second cell is to the right of the first cell, so remove the right wall of the first cell and the left wall of the second cell
      grid[row1][col1].right = false;
      grid[row2][col2].left = false;
    } else if (col1 > col2) {
      // The second cell is to the left of the first cell, so remove the left wall of the first cell and the right wall of the second cell
      grid[row1][col1].left = false;
      grid[row2][col2].right = false;
    }
  };


/**
 * Get the valid (unblocked) neighbors of a given cell
 * 
 * @param {Array} grid - The 2D grid representing the maze
 * @param {Object} cell - The current cell
 * @returns {Array} The valid (unblocked) neighbors of the current cell
 */
export function getValidNeighbors(grid, cell){
  let neighbors = [];
  let row = cell.row;
  let col = cell.col;
  if (row > 0 && !grid[row][col].top) {
      neighbors.push({ row: row - 1, col: col });
  }
  if (col < grid[0].length - 1 && !grid[row][col + 1].left) {
      neighbors.push({ row: row, col: col + 1 });
  }
  if (row < grid.length - 1 && !grid[row + 1][col].top) {
      neighbors.push({ row: row + 1, col: col });
  }
  if (col > 0 && !grid[row][col - 1].right) {
      neighbors.push({ row: row, col: col - 1 });
  }
  return neighbors;
};
  