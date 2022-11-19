/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let count=0;
    let arr=[];
    for(let i=0;i<accounts.length;i++){
        for(let j=0;j<accounts[i].length;j++){
        count+=accounts[i][j];
        }
        arr.push(count);
        count=0;
    }
    return Math.max(...arr) ;
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))

//first 6
//second 10
//third 17