/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const ans = [];
    const lengthCheck = (num) => {
        return String(num).length;
    };
    
    for (let i = 0; i < grid[0].length; i++) {
        let maxLen = 0;
        for (let j = 0; j < grid.length; j++) {
            maxLen = Math.max(lengthCheck(grid[j][i]),maxLen);
        };
        ans.push(maxLen)
    };
    
    return ans;
};