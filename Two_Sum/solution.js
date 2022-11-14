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
// const num=[2,5,5,11];
const num=[3,2,3];

 var twoSum = function(nums, target) {
   let index1;
   let index2;
   let number=[];
   let index=[];
    for(let i=0;i<nums.length;i++){
        
       for(let j=1;j<nums.length;j++){ 
        // nums[i]=3,2,5.. +nums[j]=2,4..  
        if(nums[i]+nums[j]===target)
        {
            index.push(nums[i]);
            index.push(nums[j]);
        }}
    }

    index1=nums.indexOf(index[0]);
    index2=nums.indexOf(index[1]);
    console.log(nums);
    console.log(index);
    // console.log(index2+1);
    // console.log(index2=nums.indexOf(index[1])+1);
    console.log("index1: "+index1,"index2: "+index2);
    if(index[0]===index[1]){
      nums.shift(index1);
      console.log(nums);
      index2=nums.indexOf(index[1])+1;
      console.log(index2);
      number.push(index1,index2)
      return number;
    }
    number.push(index1,index2)
    return number;
};
 
console.log( twoSum(num,6));