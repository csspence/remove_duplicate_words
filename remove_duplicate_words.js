/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

const removeDuplicateWords = (s) => {
  let dic = {};
  let word = '';
  let str = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ' && dic[word] === word) {
      word = '';
      continue;
    }
    if(s[i] === ' ' && word.length !== 0 && dic[word] !== word) {
      if(str.length === 0) {
        str += word;
        dic[word] = word;
        word = '';
        continue;
      } else {
        str += ( ' ' + word);
        dic[word] = word;
        word = '';
        continue;
      }
    }
    if(s[i] !== ' ') {
      word += s[i];
    }
  }

  return str;
}