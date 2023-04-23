/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let gratest=0;
    let result=[]
    let arr=candies.map(candie=>{
        if(candie>gratest)gratest=candie
        if(candie+extraCandies>gratest)result.push(true);
        else result.push(false);
    })
    return result
};

kidsWithCandies([4,2,1,1,2],1)