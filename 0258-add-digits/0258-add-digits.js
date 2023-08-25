/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num.toString().length > 1) {
        let newnum = 0;
        for (char of num.toString()) {
            newnum += Number(char);
        }
        num = newnum;
        console.log(num)
    };
    return num;
};