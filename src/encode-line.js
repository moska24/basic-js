const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = '';
  let sum = 1;
 for (let i = 0; i < str.length; i++){
  if (str[i] === str[i+1]){
    sum = sum + 1;
  }
  else {
    if (sum === 1){
      encodeStr = encodeStr + `${str[i]}`;
    } else{
      encodeStr = encodeStr + `${sum}${str[i-1]}`;
    }
    sum = 1;
  }
 }
 return encodeStr;
}

module.exports = {
  encodeLine
};
