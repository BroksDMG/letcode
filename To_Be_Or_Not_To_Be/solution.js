/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (checkval) {
      if (val === checkval) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (checkval) {
      if (val !== checkval) return true;
      else throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(2));
// console.log(expect(5).notToBe(5));
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.
