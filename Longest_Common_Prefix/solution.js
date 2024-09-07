/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //input: array
  //znaleźć podobne pefixy czyli litery tak takie same
  //każdy element tablicy musi być sprawdzony
  //później zbierać elementy i porównywać czy są takie same

  let res = "";
  let prefix = "";
  let result = "";
  let first;
  let second;
  for (let i = 0; i < strs.length; i++) {
    // "flower", "flow", "flight"] => "fl"
    // ""flower", "tlight", "flow"]"=> "flow" czy ""

    for (let j = 0; j < strs[i].length; j++) {
      //'f' 'l' 'o' 'w' itd..
      first = strs[i][j];
      second = strs[i + 1][j];
      if (first === second) prefix += second;
      else {
        continue;
      }
      //   console.log("first", first, "second", second, "third", prefix);
    }
    prefix += " ";
    if (prefix.length > result.length) console.log(prefix.split(" "));
  }

  //   console.log("asd");
  //output:string
};

console.log(
  longestCommonPrefix([
    "flower",
    "flow",
    "flight",
    "flower",
    "flow",
    "flight",
    "flower",
    "flow",
    "flight",
  ])
);
