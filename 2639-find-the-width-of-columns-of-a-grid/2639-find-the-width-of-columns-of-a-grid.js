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
    let transposedGrid = grid[0].map((col, i) => grid.map(row => row[i]))
    
    for (let i = 0; i < transposedGrid.length; i++) {
        let maxLen = 0;
        for (let j = 0; j < transposedGrid[i].length; j++) {
            maxLen = Math.max(lengthCheck(transposedGrid[i][j]),maxLen);
            console.log(maxLen)
        };
        ans[i] = maxLen;
    };
    
    return ans;
};