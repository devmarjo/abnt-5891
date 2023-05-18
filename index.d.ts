import "webrtc";
const round: any = require('./dist')
const roundAbnt: float = function(value: float, decimais: int) {
  return round(value, decimais)
}

module.exports = roundAbnt