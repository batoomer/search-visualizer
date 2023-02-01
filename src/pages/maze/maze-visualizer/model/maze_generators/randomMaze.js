import { removeWall } from "../maze-utils";

/**
 * Creates a random maze with random borders
 * 
 * @param {Array} grid - A 2D array reppresenting the maze grid
 */
export default function generateRandomMaze(grid, startcell){
    const rows = grid.length;
    const cols = grid[0].length;
    const animation = [];
    
    for (let i = 0; i < rows; i++) {
        
        for (let j = 0; j < cols; j++) {
            let proba = Math.random();

            (Math.random() > proba) ? removeWall(grid, i, j, i + 1, j) : '';
            (Math.random() > 1-proba) ? removeWall(grid, i, j, i, j + 1) : '';
            (Math.random() > proba) ? removeWall(grid, i, j, i-1, j) : '';
            (Math.random() > 1-proba) ? removeWall(grid, i, j, i, j - 1): '';
            animation.unshift({row: i, col: j});
        };
    };

    return animation;
};
