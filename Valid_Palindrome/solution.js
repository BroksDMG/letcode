/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 0) return true;
  let str = s
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase()
    .split(" ")
    .join("");
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
