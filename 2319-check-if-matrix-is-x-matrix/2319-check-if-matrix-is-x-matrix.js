/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    const n = grid.length;
    const add = (accumulator, a) => {
      return accumulator + a;
    };
    const colK = (mat, k) => mat.map(x => x[k]);
    
    for (let i = 0; i < n; i++) {
        let noDiagRowSum = grid[i].reduce(add, 0) - grid[i][i] - grid[i][n-1-i];
        let noDiagColSum = colK(grid,i).reduce(add, 0) - grid[i][i] - grid[n-1-i][i];
        if (n%2 != 0 && i == (n-1)/2) {
            noDiagRowSum += grid[i][i];
            noDiagColSum += grid[i][i];
        }
        if (grid[i][i] == 0 || grid[i][n-1-i] == 0 || noDiagRowSum != 0 || noDiagColSum != 0) {
            return false;
        };
    };
    
    return true;
};