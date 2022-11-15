/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let num=0;
    let arr=[]
    for(let i =0;i<nums.length;i++){
        num += nums[i];
        arr.push(num);
    }
    return arr
};
console.log(runningSum([3,1,2,10,1]))