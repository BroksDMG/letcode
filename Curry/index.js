/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    const primaryFnLength=fn.length;
    return function curried(...arg) {
        if(arg.length<primaryFnLength){
            return function(...arg2){
                return curried(...arg.concat(arg2))
            }
        }
        return fn(...arg)
    };
    
};

 function sum(a, b) { return a + b; }
 const csum = curry(sum);
console.log( csum(1)(2)); // 3