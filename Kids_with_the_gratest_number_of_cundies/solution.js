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


const ar =[1,2,3,4,5,6]
console.log(ar);
const arrr =ar.forEach(ar=>ar+5)
const arr= ar.map(ar=>ar+5)
console.log(arrr);
console.log(arr);
console.log(ar);