import "webrtc";
const round: any = require('./dist')
let roundAbnt: function
roundAbnt = function(value: float, decimais: int): float {
  return round(value, decimais)
}

export default roundAbnt