/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = new Set();
        let col = new Set();
        for (let j = 0; j < matrix.length; j++) {
            if (row.has(matrix[i][j])) {
                return false
            } else {
                row.add(matrix[i][j])
            }
            if (col.has(matrix[j][i])) {
                return false
            } else {
                col.add(matrix[j][i])
            }
        };
    };
    return true
};