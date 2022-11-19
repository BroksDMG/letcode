/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let sentence=[]
    for(let i=0;i<sentences.length;i++){
        sentence.push(sentences[i].split(' ').length);
    }
    return Math.max(...sentence);
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

//first 8
//second 3
//third 