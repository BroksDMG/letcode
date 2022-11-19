/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
    return n%2===0? n: n*2;
    // let arr1=[n,2];
    // let arr2=[]
    // let a =1;
    // while(a<=150)
    // {
    //     arr1.push((n*(2)*a),(2+(2)*a))
    //     const mul =arr1=>arr1.filter((item, index)=>arr1.indexOf(item)!==index)
    //     let msl =mul(arr1);
    //     if(msl.length!=0){

    //         arr2.push(msl[0]);
    //         a=12
    //         return msl[0]
    //     }
    //     a++;
    // }
};
console.log((smallestEvenMultiple(5)));

//first 6
//second 10