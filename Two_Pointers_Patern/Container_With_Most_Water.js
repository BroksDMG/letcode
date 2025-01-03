/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let right = height.length-1;
        let left=0;
        let conheight;
        let maxwater=0;
        while(left<=right){
            let flor=right-left
            if(height[left]>height[right]){
               conheight=height[right]
                right--
            }else{
                conheight=height[left]
                left++
            }
            maxwater=Math.max(conheight*flor,maxwater);
            
        }
        return maxwater
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
// 9-1=8
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
