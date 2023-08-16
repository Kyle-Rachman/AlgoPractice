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
    
    for (let i = 0; i < grid[0].length; i++) {
        let maxLen = 0;
        for (let j = 0; j < grid.length; j++) {
            maxLen = Math.max(lengthCheck(grid[j][i]),maxLen);
        };
        ans[i] = maxLen;
    };
    
    return ans;
};