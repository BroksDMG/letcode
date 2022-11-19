/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    const arr =Array.from(String(num),Number)
    
    for(let i=1;i<arr.length;i++){
        const raz=[...arr.slice(0,i)];
        const dwa=[...arr.slice(raz.length,4)];
        
        console.log(arr.replace(2,3));
        // console.log(map);
        // const dwa =last.slice(last.length,).join('')
        console.log(raz);
        console.log(dwa)
        // console.log(last[i]);
    }
};
minimumSum(2932)