"use strict";

var roundAbnt = function roundAbnt(numero) {
    var decimais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var numero1;
    numero1 = numero * Math.pow(10, decimais);
    var numero2;
    numero2 = Math.floor(numero1);
    var numero3;
    numero3 = parseFloat((numero1 - numero2).toFixed(3));
    if (numero3 < 0.5) {
        return numero2 / Math.pow(10, decimais);
    } else if (numero3 >= 0.501) {
        return (numero2 + 1) / Math.pow(10, decimais);
    } else {
        if ((numero2 + 1) % 2 == 0) {
            return (numero2 + 1) / Math.pow(10, decimais);
        } else {
            return numero2 / Math.pow(10, decimais);
        }
    }
};

module.exports = roundAbnt;