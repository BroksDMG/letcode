/**
 * @param {number[]} nums
 * @return {number[]}
 */
const ar=[1,3,2,1]
 var getConcatenation = function(nums) {
    let reverseArray=[...nums];
    return[...nums,...reverseArray];
};

console.log(getConcatenation(ar))