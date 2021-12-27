//Tuesday: Find the longest Word in a String
//Return the length of the longest word in the provided sentence.

function findLongestWord(str){
    let words=str.split(' ');
    let len =words[0].length;

    words.forEach(w => {
        if (w.length >len){
            len=w.length;
        }
    })
    return len;
}

let str1="The quick brown fox jumped over the lazy dog";
let str2="May the force be with you";

console.log(findLongestWord(str1));
console.log(findLongestWord(str2));