const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'){
    return false;
  }
  if (sampleActivity === undefined) {
    return false;
  }
  if (isNaN(Number(sampleActivity))) {
    return false;
  }
  if (Number(sampleActivity) <= 0) {
    return false;
  }
  if (Number(sampleActivity) > 15) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const time = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return time;
}

module.exports = {
  dateSample
};
