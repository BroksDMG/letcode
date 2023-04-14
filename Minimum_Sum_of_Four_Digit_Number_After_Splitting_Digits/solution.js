
/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    const arr =Array.from(String(num),Number)
    const arr1 =[arr.toLocaleString()]
    console.log(arr1);
    for(let i=1;i<arr.length;i++){
        const raz=[...arr.slice(0,i)];
        const dwa=[...arr.slice(raz.length,4)];
        // arr.push(arr[arr.length])
        // arr.shift()
        console.log(arr1.length)
        console.log(arr1);
        
        // console.log(map);
        // const dwa =last.slice(last.length,).join('')
        console.log(raz);
        console.log(dwa)
        // console.log(last[i]);
    }
    
};
minimumSum(2932)