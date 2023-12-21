const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(...matrix) {
  const mas = [];
  while(matrix.length) {
    const el = matrix.shift();
    if(Array.isArray(el)){
      matrix.unshift(...el);
      continue;
    }
    mas.push(el);
  }
  let p = 0;
  mas.filter(i => {
      if (i == '^^'){
          p++;
      }
  })
  return p;
}

module.exports = {
  countCats
};
