/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const num =[1,5,10,50,100,500,1000];
    const rom =['I','V','X','L','C','D','M'];
    
    //tablica numerów i tablica rom
    /*przejście po tablicy num ,jezeli s i num[i] 
    sa rowne to wyswietl rom[] na tej samej pozycji
    */
    /*jezeli s nie równa sie num[i]{
        
    
        */
       for(let i=0;i<num.length;i++){
           if(num[i]===s){
               console.log(rom[i]);
               rom[rom.indexOf(s)];
               console.log(rom.indexOf(s));
            }
            else if(num[i]!==s){
                let rest= num[i]%s
                if(num[i]===rest){
                    console.log(rom[i])
                }
        }
        else console.log("jet większe");
        
    }
};
romanToInt(10);