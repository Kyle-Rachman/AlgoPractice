/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let wordStarted = false;
    for (let i=s.length-1; i >=0; i--) {
        if (!wordStarted && (s[i] == " ")) {
            continue;
        } else if (wordStarted && (s[i] == " ")) {
            return length;
        } else {
            length += 1;
            wordStarted = true;
        };
    };
    return length;
};