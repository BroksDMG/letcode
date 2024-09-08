/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    // console.log("prefix", prefix, "str");
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

// longestCommonPrefix(["flower", "flow"]);
console.log(longestCommonPrefix(["flower", "flow", "flaght"]));
console.log(longestCommonPrefix(["flower", "flower", "flower"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
