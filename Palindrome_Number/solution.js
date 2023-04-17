/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const param=x.toString().split('')
    const reverseArr=[...param].reverse()
    let result;
    for (let i = 0; i < param.length; i++) {
        console.log(param[1]);
        console.log(reverseArr[1]);
        if(param[i]!==reverseArr[i]) return false
        else result =true
        
    }
    return result;
    
};
console.log(isPalindrome(1000021));
