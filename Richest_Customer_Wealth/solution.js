/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let count=0;
    let res=0;
    for(let i=0;i<accounts.length;i++){
        // console.log("Acc[i] :"+accounts[i])
        // console.log(accounts[i].length);
        for(let j=0;j<accounts.length;j++){
        //   console.log(accounts[j].length);
          count+= accounts[j]
          res=Math.max(res);
          console.log("Acc[j] :"+res);
          
        //   console.log("count :"+count);
        }
        
    }
};
maximumWealth([[1,2,3],[3,2,1],[3,2,1],[3,2,1],[3,2,1],[3,2,1]])