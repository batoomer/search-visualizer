import generateEmptyMaze from "./emptyMaze";
import { addWall } from "../maze-utils";

/**
 * Creates the maze with the recurisve division method.
 * 
 * @param {Array} grid - The 2D array containing the grid
 * @returns {Array} - Array containing the animation
 */
export default function recursiveDivision(grid){
  // Empty the grid
  const animations = generateEmptyMaze(grid);

  // Declare the starting and ending points of the grid (top-left and bottom-right corner)
  const startCell = {row:0, col:0};
  const endCell = {row:45, col:25};
    
  // Recursively divide
  divideMaze(grid, startCell.row, startCell.col, endCell.row, endCell.col);

   // Right now the animation just vists each cell in order.
   // To animate the divide maze changes are required.
  return animations;
};

/**
 * 
 * @param {Array} grid - The 2D array representing the maze grid
 * @param {*} col1 - 
 * @param {*} row1 
 * @param {*} col2 
 * @param {*} row2 
 * @returns 
 */
const divideMaze = (grid, row1, col1, row2, col2) => {
  // If the grid has become to small to divide return
  if (col2 - col1 <= 1 || row2 - row1 <= 1) return;

  // Divide along the axis which is longer
  if (col2 - col1 > row2 - row1) {
    // Get a random partition along the columns
    let partition = Math.floor(Math.random() * (col2 - col1 - 1)) + col1 + 1;
    // Get a random gap allong the rows
    let gap = Math.floor(Math.random() * (row2 - row1 + 1)) + row1;

    // Add walls along the partition skipping the gap
    for (let i = row1; i <= row2; i++) {
      if (i === gap) continue;
      addWall(grid, partition, i, partition+1, i)
    };
    
    // Recursively divide the two section defined by the partition
    divideMaze(grid, row1, col1, row2, partition);
    divideMaze(grid, row1,  partition + 1, row2, col2);
  } else {

    // Get a random partition along the rows
    let partition = Math.floor(Math.random() * (row2 - row1 - 1)) + row1 + 1;
    // Get a random gap allong the cols
    let gap = Math.floor(Math.random() * (col2 - col1 + 1)) + col1;

    // Add walls along the partition skipping the gap
    for (let i = col1; i <= col2; i++) {
      if (i === gap) continue;
      addWall(grid, i, partition, i, partition+1);
    };

    // Recursively divide the two section defined by the partition
    divideMaze(grid, row1, col1, partition, col2);
    divideMaze(grid, partition + 1, col1, row2, col2);
  }
};

