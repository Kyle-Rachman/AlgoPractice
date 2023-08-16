/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let ans = Array(grid[0].length).fill(0);
    let lengthCheck = (num) => {
        if (num >= 0) {
            return num.toString().length;
        } else {
            return num.toString().length;
        }
    };
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            ans[j] = Math.max(lengthCheck(grid[i][j]),ans[j]);
        };
    };
    
    return ans;
};