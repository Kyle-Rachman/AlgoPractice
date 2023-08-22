/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }
    if (n == 0) {
        return false;
    }
    while (n) {
        if (!(n%2)) {
            n /= 2
            if (n == 1) {
                return true;
            }
        } else {
            return false
        }
    }
    return true
};