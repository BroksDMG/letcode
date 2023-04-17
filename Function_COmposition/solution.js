/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result=x;
        functions.reverse().forEach(el=>{
           result=el(result);

        })
        return result
    }
};


 const fn = compose([])
 console.log(fn(1)); // 9