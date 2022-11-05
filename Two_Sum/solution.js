/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const num=[3,2,4];
 var twoSum = function(nums, target) {
   let index1=0;
   let index2=0;
   let number=[];
    for(let i=0;i<nums.length;i++){
        
       for(let j=1;j<nums.length;j++){ 
    
        if(nums[i]+nums[j]===target)
        {
            
            index1=nums[i];
            index2=nums[j];
            
        }}
    }  
    if(nums.indexOf(index1)===0&&nums.indexOf(index2)===0){
        number.push(nums.indexOf(index1),nums.indexOf(index2)+1)
    }else 
     number.push(nums.indexOf(index1),nums.indexOf(index2));
    
    return number
};
    // return `first inxex is equal: ${nums.indexOf(index1)} and second: ${nums.indexOf(index2)}`;
    // return nums.indexOf(index1),nums.indexOf(index2);
    // console.log(`first inxex is equal: ${nums.indexOf(index1)} and second: ${nums.indexOf(index2)}`);
    
console.log( twoSum(num,6));