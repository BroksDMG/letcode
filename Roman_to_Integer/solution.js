/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const data={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    const arrRomans=s.split("");
    const res=[];
    let result=0;
    arrRomans.find((el)=>{res.push(data[el]) })
    for (let i = 0; i <res.length;i++) {
        const firs=res[i];
        const sec=res[i+1];
        if(firs<sec){
            result+=sec-firs
            i++
        }else{
            result+=firs
        }
        
    }
    return result
};
romanToInt("LVII");