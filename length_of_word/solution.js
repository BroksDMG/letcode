/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const word = s.trim().split(" ");
  return word[word.length - 1].length;
};
