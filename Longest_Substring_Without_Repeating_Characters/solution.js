/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let sumlenght = 0;
  let start = 0;
  let windowstr = {};
  for (let end = 0; end < s.length; end++) {
    const currchat = s[end];
    if (windowstr[currchat] >= start) {
      start = windowstr[currchat] + 1;
    }
    windowstr[currchat] = end;

    sumlenght = Math.max(sumlenght, end - start + 1);
  }
  return sumlenght;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
//target : longest substring without repeating;
// output: length wigthout repeating;

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
