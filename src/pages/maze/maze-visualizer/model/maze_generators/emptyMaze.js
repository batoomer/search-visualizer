/**
 * Creates a maze with no borders
 * 
 * @param {Array} grid - A 2D array reppresenting the maze grid
 */
export default function generateEmptyMaze(grid){
    const rows = grid.length;
    const cols = grid[0].length;
    const animation = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].top = false;
            grid[i][j].right = false;
            grid[i][j].bottom = false;
            grid[i][j].left = false;
            animation.unshift({row: i, col: j})
        };
    };

    return animation;
};