/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums[0]===target)return 0
    let start= 0;
    let end =nums.length+1;
    for(let i=0;i<nums.length;i++){
        let middle =Math.floor(start+end/2) ;
        if(target===nums[middle])return middle
        else if(target>nums[middle]){
            start=middle;
        }else{
            end--;
        }
    }
    return -1;
};
