/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();
    
    while (n != 1) {
        if (seen.has(n)) {
            return false;
        } else {
            seen.add(n);
        }
        let count = 0;
        for (digit of n.toString()) {
            count += parseInt(digit) ** 2
        }
        n = count;
    }
    
    return true
};