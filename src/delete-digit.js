const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const mas = n.toString();
  let newMas = [];
  let result = [];
  let maxNum;

  for (let i=0; i < mas.length; i++){
    newMas[i] = mas.slice(0, i) + mas.slice(i + 1);
  }
  console.log(newMas);
  result = newMas.sort((a,b) => b-a);
  maxNum = Number(result[0]);
  return maxNum;
}

module.exports = {
  deleteDigit
};
