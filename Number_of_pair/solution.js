/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    //     let arr=[]
    // const toFind = nums=>nums.filter((item, index)=>nums.indexOf(item)!==index)

    // const duplicate = toFind(nums)
    // console.log(duplicate);
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            console.log(nums.indexOf(j));
         if(nums[i]===nums[j]){

            //  console.log(nums[i],nums[j]);
         }
        }
        // console.log("IIIIIIII :"+nums[i]);
        // console.log("Index :"+nums.indexOf(i));
    }
};
numIdenticalPairs([1,2,3,1,1,3])