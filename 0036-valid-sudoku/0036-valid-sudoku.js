/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let rowHash = {};
        let colHash = {};
        let boxHash = {};
        for (let j = 0; j < 9; j++) {
            if (board[i][j] in rowHash) {
                return false
            } else if (board[i][j] != "."){
                rowHash[board[i][j]] = board[i][j]
            }
            if (board[j][i] in colHash) {
                return false
            } else if (board[j][i] != ".") {
                colHash[board[j][i]] = board[j][i]
            }
            if (board[Math.floor(j/3) + 3*(i%3)][(j % 3)+3*Math.floor(i/3)] in boxHash) {
                return false
            } else if (board[Math.floor(j/3) + 3*(i%3)][(j % 3)+3*Math.floor(i/3)] != "."){
                boxHash[board[Math.floor(j/3) + 3*(i%3)][(j % 3)+3*Math.floor(i/3)]] = board[Math.floor(j/3) + 3*(i%3)][(j % 3)+3*Math.floor(i/3)]
            }
        };
    };
    
    return true
};