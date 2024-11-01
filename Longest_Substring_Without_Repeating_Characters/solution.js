/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 1) return 0;
  let subwindow = "";
  let right = 0;
  let left = 0;
  let maxLength = 0;
  while (right < s.length) {
    if (!subwindow.includes(s[right])) {
      subwindow += s[right];
      maxLength = Math.max(maxLength, right - left + 1);
    } else {
      subwindow = s.slice(left + 1, right);
      left++;
      right--;
    }
    right++;
  }
  return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
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
