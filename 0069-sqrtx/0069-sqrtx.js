/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let n = 0;
    while (n * n <= x) {
        n++
    }
    
    return (n-1)
};