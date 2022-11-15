/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let x=0;
    for(let i=0;i<operations.length;i++){
        switch (operations[i]){
            case '++X':
                x+=1
                break;
            case "X++":
                x+=1
              break;
            case "--X":
                x-=1
              break;
            case "X--":
                x-=1
              break;   
        }
        
    }
    return x
};
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
