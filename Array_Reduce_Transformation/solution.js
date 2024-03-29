/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result=init
    nums.forEach((el)=>{
        result=fn(result,el)
    })
    return result
};
console.log(reduce([1,2,3,4],function sum(accum, curr) { return (accum+curr*curr) } ,100));
