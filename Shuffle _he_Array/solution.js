/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    const firstHalf =nums.slice(0,nums.length/2);
    const secondHalf=nums.slice(nums.length/2);
    console.log(firstHalf);
    console.log(secondHalf);
    const solution=[]
    for(let i=0;i<firstHalf.length;i++){
        solution.push(firstHalf[i]);
        solution.push(secondHalf[i]);
    }
    return solution;
};

console.log(shuffle([2,5,1,3,4,7],3))
//first [2, 3, 5, 4, 1, 7]
// second [1, 4, 2, 3, 3, 2, 4, 1]
// third [1, 2, 1, 2]
