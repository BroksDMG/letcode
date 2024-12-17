/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let r = 0;
  let l = 0;
  let minSub = "";
  let uniq = t;
  while (r < s.length) {
    if (!uniq.includes(s[r])) {
      minSub += s[r];
      //   r++;
    } else {
      uniq =
        uniq.slice(0, uniq.indexOf(s[r])) + uniq.slice(uniq.indexOf(s[r]) + 1);
      if (uniq.length === 0) {
        l++;
      }
    }
    r++;
  }
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
// console.log(minWindow("a", "a"));
// console.log(minWindow("a", "a"));
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
