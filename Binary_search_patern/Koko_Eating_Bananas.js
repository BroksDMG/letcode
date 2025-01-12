/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const canEat=(k)=>{
        let hour= 0;
        for(const pile of piles){
            hour += Math.ceil(pile/k);
        }
        return hour<=h;
    }
    let left =1;
    let right= Math.max(...piles);
    let result=right;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if(canEat(middle)){
            result =middle;
            right = middle-1;
        }else{
            left =middle+1;
        }
    }
    return result
};

